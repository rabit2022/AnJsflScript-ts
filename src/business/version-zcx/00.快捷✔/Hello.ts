/**
 * @file: Hello.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/13 1:17
 * @project: AnJsflScript-ts
 * @description:
 */

import { CheckDocument } from "@anjsfl/validation";

console.log("Hello World!");

const dom = fl.getDocumentDOM();
const check = CheckDocument(dom);

if (check.isOk()) {
    const doc = check.unwrap(); // 类型是 Document
    console.log("文档有效:", doc);
} else {
    const errorMsg = check.unwrapErr(); // 类型是 string
    console.log("文档无效:", errorMsg);
}
