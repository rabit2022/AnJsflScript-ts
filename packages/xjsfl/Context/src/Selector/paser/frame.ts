/**
 * @file: frame.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/15 0:13
 * @project: AnJsflScript-ts
 * @description:
 */

import { FrameSelector } from "../types";

export function parseFrame(v: string): FrameSelector {
    v = v.trim();

    if (/^\d+\.\.\d+$/.test(v)) {
        const [a, b] = v.split("..");

        return {
            type: "range",
            start: Number(a),
            end: Number(b)
        };
    }

    if (/^\d+$/.test(v)) {
        return {
            type: "index",
            value: Number(v)
        };
    }

    return {
        type: "name",
        value: v
    };
}
