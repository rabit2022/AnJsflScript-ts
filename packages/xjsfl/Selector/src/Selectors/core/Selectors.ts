import {Scope, scopeTypeMap} from "./Selectors.types";
import {Selector} from "../../Selector/Selector";
import {parseExpression} from "../expression/parser";




export class Selectors {

    static debug = false;

    static select<T>(
        expression: string,
        items: T[],
        scope: Scope,
        debug = false
    ): any[] {
        Selectors.debug = debug;

        const key = scope.constructor.name as keyof typeof scopeTypeMap;

        const type = scopeTypeMap[key];

        if (!type) {
            throw new TypeError(`Invalid scope "${scope}"`);
        }

        // 1. *
        if (expression === "*") {
            return items;
        }

        // 2. ":first" ":last" ":even" ":odd" ":nth"
        // ":nth(3)"
        // ":bitmap:first"
        // ":symbol[name*=icon]:last"
        // ":folder > :even"
        if (
            type === "Item" &&
            /:(first|last|even|odd|nth)\b/.test(expression)
        ) {
            items.sort((a, b) =>
                String(a.name).localeCompare(String(b.name), undefined, {
                    sensitivity: "base"
                })
            );
        }

        // 3.分割多个表达式
        // ":not(body[attr=hello]),hello,[dave=1,ian=2]"
        //     [ ':not(body[attr=hello])', 'hello', '[dave=1,ian=2]' ]
        const expressions = parseExpression(expression);

        let results: T[] = [];

        for (const expr of expressions) {

            const selectors = this.parse(expr, type);


            const _results = Selectors.test(selectors, items, scope);

            results = results.concat(_results);
        }

        // return Utils.toUniqueArray(results);
        // return [...new Set(results)];
        return Array.from(new Set(results));
    }

    static register(
        pattern: string,
        callback: Function,
        type: string
    ): typeof Selectors {

        const matches = String(pattern).match(/([:\[])(\w+)/);

        if (!matches) {
            throw new Error(`Invalid pattern "${pattern}" supplied`);
        }

        if (!/^(item|element)$/i.test(type)) {
            throw new Error(`Invalid type "${type}" supplied`);
        }

        const selector = matches[2];

        let group: "pseudo" | "custom";

        if (matches[1] === ":") {
            group = "pseudo";
        } else {
            group = "custom";
        }

        (Selectors as any)[type][group][selector] = callback;

        return Selectors;
    }

    static parse(expression: string, type: string): Selector[] {

        const chunker =
            /(:([\-\w]+)\((.+)\))|([A-Za-z0-9_*][^:\[]*)|\/([\-\w\s\/_*{|}]+)|\.([*A-Z][\w*]+)|\.([a-z][\w.*]+)|:([a-z]\w+)|\[(([\w\.]+)([\^$*!=<>]{1,2})?(.+?)?)\]/g;

        const selectors: Selector[] = [];

        let exec: RegExpExecArray | null;

        const object = (Selectors as any)[type.toLowerCase()];
        const core = (Selectors as any).core;

        while ((exec = chunker.exec(expression))) {

            const selector = new Selector(exec[0]) as Selector;

            if (exec[1]) {

                selector.type = "combo";
                selector.name = exec[2];
                selector.method = core.combo[selector.name];
                selector.params = [null, exec[3], type];

            } else if (exec[4]) {

                selector.type = "filter";
                selector.name = "name";
                selector.method = object.filter.name;
                selector.params = [null, Selector.makeRX(exec[4], selector)];

            } else if (exec[5]) {

                selector.type = "filter";
                selector.name = "path";
                selector.method = object.filter.path;
                selector.params = [
                    null,
                    Selector.makeRX(exec[5].replace(/(^\/+|\/+$)/g, ""), selector)
                ];

            } else if (exec[8]) {

                const name = exec[8];

                selector.name = name;

                if (/instance|symbol|bitmap|sound/.test(name)) {

                    selector.type = "type";
                    selector.params = [null, name];
                    selector.method = object.filter.type;

                } else {

                    selector.type = "pseudo";
                    selector.params = [null, name];
                    selector.method =
                        object.pseudo[name] || core.pseudo[name];
                }
            }

            if (!selector.method) {
                throw new TypeError(
                    `Unrecognised selector "${selector.pattern}"`
                );
            }

            selectors.push(selector);
        }

        return selectors;
    }

    static test<T>(
        selectors: Selector[],
        items: T[],
        scope: Scope
    ): T[] {

        if (selectors.length === 0) {
            return [];
        }

        if (Selectors.debug) {
            inspect(selectors, "Selectors");
        }

        for (const selector of selectors) {

            const temp: any[] = [];

            if (selector.type === "find" || selector.type === "combo") {

                const result = selector.filter(items, scope);
                temp.push(...result);

            } else {

                for (const item of items) {

                    const state = selector.test(item, scope);

                    if (state) {
                        temp.push(item);
                    }
                }
            }

            items = temp;

            if (items.length === 0) {
                break;
            }
        }

        return items;
    }

    static toString(): string {
        return "[class Selectors]";
    }
}
