/**
 * @file: Registry.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

// src/registry/TypeRegistry.ts
import {Custom} from '../matcher/Custom'
import {TypeCheck} from "./types";
import {o} from "../operators/operators";


class Registry {
    static define(name: string, check: TypeCheck) {
        const c = new Custom(check);

        // ⭐ 核心：写进 o
        (o as any)[name] = c

        return c
    }

    static defineTypes(map: Record<string, TypeCheck>) {
        for (const k in map) {
            this.define(k, map[k])
        }
    }
}

export const RegistryAPI = {
    define: Registry.define.bind(Registry),
    defineType: Registry.define.bind(Registry),
    defineTypes: Registry.defineTypes.bind(Registry),
}
