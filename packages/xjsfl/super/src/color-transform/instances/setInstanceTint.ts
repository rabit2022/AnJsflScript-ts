/**
 * @file: setInstanceTint.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { SelectAll } from "./utils";
import chroma from "chroma-js";

export function setInstanceTint(
    elements: any | any[],
    color: string | number,
    strength: number
): void {
    if (!Array.isArray(elements)) {
        elements = [elements];
    }
    SelectAll(elements);

    const doc = fl.getDocumentDOM();
    doc!.setInstanceTint(color, strength);
}

export function setInstanceTintRGB(
    elements: any | any[],
    tintPercent: number,
    tintRed: number,
    tintGreen: number,
    tintBlue: number
): void {
    const color = chroma.rgb(tintRed, tintGreen, tintBlue).hex();
    setInstanceTint(elements, color, tintPercent);
}
