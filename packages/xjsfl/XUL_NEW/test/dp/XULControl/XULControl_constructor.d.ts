/**
 * @file: XULControl_constructor.d.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/18 23:03
 * @project: AnJsflScript-ts
 * @description:
 */

interface XULElementItem {
    label: string;
    value: any;
    id: string;
}

declare module "@xjsfl/XULControl_constructor" {
    export function processCompoundElements(xml: XML, type: string): XULElementItem[];
}
