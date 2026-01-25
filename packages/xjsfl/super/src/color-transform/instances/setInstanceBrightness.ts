/**
 * @file: setInstanceBrightness.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { SelectAll } from "./utils";

export function setInstanceBrightness(elements: any | any[], brightness: number): void {
    if (!Array.isArray(elements)) {
        elements = [elements];
    }
    SelectAll(elements);

    const doc = fl.getDocumentDOM();
    doc!.setInstanceBrightness(brightness);
}
