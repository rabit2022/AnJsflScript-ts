/**
 * @file: MapMapping.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import {Mapping} from "./Mapping";
import {SCORE} from "./Score";
import {matchMap} from "../matcher/MapMatcher";

export class MapMapping implements Mapping {
    type = 'map' as const
    priority = SCORE.MAP_BASE

    constructor(
        private rule: any,
        private fn: Function
    ) {
    }

    match(args: any[]) {
        if (!args.length) return -1
        return matchMap(this.rule, args[0])
    }

    invoke(ctx: any, args: any[]) {
        return this.fn.apply(ctx, args)
    }
}

