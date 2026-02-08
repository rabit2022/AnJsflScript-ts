/**
 * @file: createCaller.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import {Overload} from "../core/Overload";

export function createCaller(ov: Overload) {
    const caller = function (this: any, ...args: any[]) {
        return ov.call(this, args)
    }

    ov._caller = caller

    caller.args = ov.args.bind(ov)
    caller.len = ov.len.bind(ov)
    caller.map = ov.map.bind(ov)
    caller.use = ov.use.bind(ov)
    caller.error = ov.error.bind(ov)
    caller.fallback = ov.fallback.bind(ov)
    caller.expose = ov.expose.bind(ov)

    return caller
}
