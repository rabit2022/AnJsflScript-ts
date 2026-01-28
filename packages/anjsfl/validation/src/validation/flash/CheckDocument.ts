/**
 * @file: CheckDocument.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/13 1:17
 * @project: AnJsflScript-ts
 * @description:
 */

import { Result, Ok, Err } from "oxide.ts";

/**
 * 检查传入的文档对象是否有效
 * @param doc 传入的文档对象
 * @returns Ok(doc) 如果有效，Err(message) 如果无效
 */
export function CheckDocument(doc: Document | null | undefined): Result<Document, string> {
    if (!doc) {
        return Err("文档对象无效，请检查传入参数");
    }
    return Ok(doc);
}
