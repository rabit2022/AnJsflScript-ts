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
