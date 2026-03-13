import {ElementSelector} from "../types";

export function parseElement(v: string): ElementSelector {

    v = v.trim()

    if (/^\d+$/.test(v)) {

        return {
            type: "index",
            value: Number(v)
        }
    }

    return {
        type: "name",
        value: v
    }
}
