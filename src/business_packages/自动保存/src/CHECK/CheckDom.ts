/**
 * @file: CheckDom.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import * as process from 'process';

import {UI} from "@xjsfl/UI";
import {CheckDocument} from "@anjsfl/validation";
import * as log from 'loglevel';

const result = CheckDocument(UI.dom);

let doc: FlashDocument;
if (result.isOk()) {
    doc = result.unwrap(); // 类型是 Document
    log.log("文档有效:", doc);
} else {
    const errorMsg = result.unwrapErr(); // 类型是 string
    log.error("文档无效:", errorMsg);
    process.exit();
}

export {doc};