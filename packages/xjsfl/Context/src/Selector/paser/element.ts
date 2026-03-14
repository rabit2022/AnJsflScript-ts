/**
 * @file: element.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/15 0:13
 * @project: AnJsflScript-ts
 * @description:
 */

import { ElementSelector } from "../types";

export function parseElement(v: string): ElementSelector {
    v = v.trim();

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
