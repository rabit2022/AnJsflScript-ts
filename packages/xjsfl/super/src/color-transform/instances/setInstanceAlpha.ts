/**
 * @file: setInstanceAlpha.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { SelectAll } from "./utils";

export function setInstanceAlpha(elements: any | any[], alphaPercent: number): void {
    if (!Array.isArray(elements)) {
        elements = [elements];
    }

    SelectAll(elements);

    const doc = fl.getDocumentDOM();
    doc!.setInstanceAlpha(alphaPercent);
}
