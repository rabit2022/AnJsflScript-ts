/**
 * @file: CheckDocument.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/13 1:17
 * @project: AnJsflScript-ts
 * @description:
 */

// checkDocument.ts
/**
 * 检查是否存在有效的 Flash 文档。
 *
 * @param doc - 可选的文档对象。若未提供，则尝试从全局 `fl` 获取。
 * @returns
 *   - `{ success: true, doc }` 如果文档存在；
 *   - `{ success: false, message }` 如果不存在。
 */
export function CheckDocument(
    doc?: FlashDocument
): { success: true; doc: FlashDocument } | { success: false; message: string } {
    const currentDoc = doc ?? (typeof fl !== "undefined" ? fl.getDocumentDOM() : null);

    if (!currentDoc) {
        return {
            success: false,
            message: "请打开一个 [.fla] 文件或者创建一个新文档"
        };
    }

    return { success: true, doc: currentDoc };
}
