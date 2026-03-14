/**
 * @file: layer.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/15 0:13
 * @project: AnJsflScript-ts
 * @description:
 */

import { LayerSelector } from "../types";

export function parseLayer(v: string): LayerSelector {
    v = v.trim();

    if (v === "*") {
        return { type: "all" };
    }

    if (v.startsWith("[") && v.endsWith("]")) {
        const list = v
            .slice(1, -1)
            .split(",")
            .map((v) => v.trim());

        return {
            type: "list",
            value: list
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
