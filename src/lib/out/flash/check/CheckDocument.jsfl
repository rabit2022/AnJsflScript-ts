// 这个文件由脚本 flash\check\CheckDocument.ts 自动生成，任何手动修改都将会被覆盖.

define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CheckDocument = CheckDocument;
    function CheckDocument(doc) {
        var currentDoc = doc !== null && doc !== void 0 ? doc : (typeof fl !== "undefined" ? fl.getDocumentDOM() : null);
        if (!currentDoc) {
            return {
                success: false,
                message: "请打开一个 [.fla] 文件或者创建一个新文档"
            };
        }
        return { success: true, doc: currentDoc };
    }
});
