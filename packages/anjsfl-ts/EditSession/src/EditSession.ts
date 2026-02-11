// EditSession.ts
import "@polyfills/symbol-dispose";
import * as log from "loglevel";

/**
 * 封装 Flash/Animate 文档的 in-place 编辑模式
 * 使用 using 语法可自动 enter/exit 编辑模式
 */
export class EditSession {
    private exited = false;

    constructor(private doc: any) {
        if (!doc || typeof doc.enterEditMode !== 'function') {
            throw new Error('Invalid document object: missing enterEditMode');
        }
        doc.enterEditMode('inPlace');
        log.log('✅ Entered in-place edit mode');
    }

    /**
     * 确保 exitEditMode 被调用（即使多次调用也安全）
     */
    [Symbol.dispose](): void {
        if (!this.exited && this.doc && typeof this.doc.exitEditMode === 'function') {
            this.doc.exitEditMode();
            this.exited = true;
            log.log('🔒 Exited in-place edit mode');
        }
    }

    // /**
    //  * 获取当前文档（方便链式操作）
    //  */
    // get document(): any {
    //     return this.doc;
    // }
}


