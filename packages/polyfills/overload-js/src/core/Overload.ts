/**
 * @file: Overload.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import { Mapping } from "../model/Mapping";
import { Dispatcher } from "../runtime/Dispatcher";
import { ArgMapping } from "../model/ArgMapping";
import { LenMapping } from "../model/LenMapping";
import { MapMapping } from "../model/MapMapping";

export type Pending =
    | { type: "args"; value: any[] }
    | { type: "len"; value: number }
    | { type: "map"; value: any };

export class Overload {
    _caller!: Function;
    private pending?: Pending;

    mappings: Mapping[] = [];
    dispatcher: Dispatcher;
    errorFn?: Function;
    fallbackFn?: Function;

    constructor(parent?: Overload) {
        this.dispatcher = new Dispatcher(this, parent?.dispatcher);
    }

    args(...rules: any[]) {
        this.pending = { type: "args", value: rules };
        return this;
    }

    len(n: number) {
        this.pending = { type: "len", value: n };
        return this;
    }

    map(rule: any) {
        this.pending = { type: "map", value: rule };
        return this;
    }

    use(fn: Function) {
        if (!this.pending) {
            throw new Error("use() must follow args / len / map");
        }

        switch (this.pending.type) {
            case "args":
                this.mappings.push(new ArgMapping(this.pending.value, fn));
                break;
            case "len":
                this.mappings.push(new LenMapping(this.pending.value, fn));
                break;
            case "map":
                this.mappings.push(new MapMapping(this.pending.value, fn));
                break;
        }

        this.pending = undefined;
        return this._caller;
    }

    error(fn: Function) {
        this.errorFn = fn;
        return this._caller;
    }

    fallback(fn: Function) {
        this.fallbackFn = fn;
        return this._caller;
    }

    call(ctx: any, args: any[]) {
        try {
            return this.dispatcher.dispatch(ctx, args);
        } catch {
            if (this.fallbackFn) return this.fallbackFn.apply(ctx, args);
            if (this.errorFn) return this.errorFn.apply(ctx, args);
            throw new Error("overload: no methods matched");
        }
    }

    expose() {
        const self = this;

        const fn = function (...args: any[]) {
            return self.call(self, args);
        };

        return fn;
    }
}
