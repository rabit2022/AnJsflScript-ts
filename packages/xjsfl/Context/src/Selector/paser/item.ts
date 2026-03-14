/**
 * @file: item.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/15 0:13
 * @project: AnJsflScript-ts
 * @description:
 */

import { ItemSelector } from "../types";

export function parseItem(v: string): ItemSelector {
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
