import {SCORE} from "./Score";
import {matchArg} from "../matcher/ArgMatcher";
import {Mapping} from "./Mapping";

export class ArgMapping implements Mapping {
    type = 'args' as const
    priority = SCORE.ARG_BASE

    constructor(
        private params: any[],
        private fn: Function
    ) {
    }

    match(args: any[]) {
        if (args.length !== this.params.length) return -1
        let score = this.priority
        for (let i = 0; i < args.length; i++) {
            const s = matchArg(this.params[i], args[i])
            if (s < 0) return -1
            score += s
        }
        return score
    }

    invoke(ctx: any, args: any[]) {
        return this.fn.apply(ctx, args)
    }
}
