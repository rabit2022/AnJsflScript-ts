/**
 * @file: rename.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */
import {ElementCollection} from "../core/ElementCollection";
import * as _ from "lodash";

export type RenameCallback = (
    element: FlashElement,
    index: number,
    elements: FlashElement[]
) => string;

export function createRenameCallback(
    baseName: string,
    padding: number = 0,
    startIndex: number = 1,
    separator: string = "_"
): RenameCallback {
    // 1️⃣ pattern: "name_###" / "name_001"
    const patternMatch = baseName.match(/(.+?)(#+|\d+)$/);
    if (patternMatch) {
        const [, name, numPart] = patternMatch;
        const padLength = numPart.length;
        const start = Number.isNaN(Number(numPart)) ? 1 : parseInt(numPart, 10);

        // return (_, index) => name + (index + start).toString().padStart(padLength, "0");
        return (_element: any, index: number) =>
            name + _.padStart(String(index + start), padLength, "0");

    }

    // 2️⃣ normal string mode
    const resolvedBaseName = (baseName || "clip") + separator;

    return (_element, index) => {
        const num = index + startIndex;
        // const suffix = padding > 0 ? num.toString().padStart(padding, "0") : String(num);
        const suffix = padding > 0 ? _.padStart(num.toString(), padding, "0") : String(num);

        return resolvedBaseName + suffix;
    };
}

export function rename(
    this: ElementCollection,
    callback: RenameCallback
): ElementCollection;
export function rename(
    this: ElementCollection,
    base: string,
    padding?: number,
    startIndex?: number,
    separator?: string
): ElementCollection;

export function rename(
    this: ElementCollection,
    base: string | RenameCallback,
    padding?: number,
    startIndex?: number,
    separator?: string
) {
    const callback =
        typeof base === "function"
            ? base
            : createRenameCallback(base, padding, startIndex, separator);

    const self_elements = this.toArray();
    self_elements.forEach((el, index, elements) => {
        el.name = callback(el, index, elements);
    });

    return this;
}
