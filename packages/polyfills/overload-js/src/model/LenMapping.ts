/**
 * @file: LenMapping.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import {Mapping} from "./Mapping";
import {SCORE} from "./Score";
import {matchLen} from "../matcher/LenMatcher";

export class LenMapping implements Mapping {
    type = 'len' as const
    priority = SCORE.LEN_BASE

    constructor(
        private len: number,
        private fn: Function
    ) {
    }

    match(args: any[]) {
        return matchLen(this.len, args)
    }

    invoke(ctx: any, args: any[]) {
        return this.fn.apply(ctx, args)
    }
}
