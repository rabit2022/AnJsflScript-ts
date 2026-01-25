/**
 * @file: setInstanceNone.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */export function setInstanceNone(elements: any | any[]): void {
    if (!Array.isArray(elements)) {
        elements = [elements];
    }

    elements.forEach(function (element: any) {
        element.colorMode = "none";
    });
}
