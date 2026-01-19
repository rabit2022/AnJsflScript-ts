// CheckDocument.test.ts

import { CheckDocument } from "../../../src";

describe("CheckDocument", () => {
    test("should return success when valid doc is provided", () => {
        // 创建最小化 mock，并断言为 FlashDocument
        const mockDoc = { getTimeline: () => {} } as unknown as FlashDocument;

        const result = CheckDocument(mockDoc);

        // 类型收窄：先检查 success
        expect(result.success).toBe(true);
        if (result.success) {
            expect(result.doc).toBe(mockDoc);
        }
    });

    test("should return failure when no doc available", () => {
        // 模拟 fl.getDocumentDOM() 返回 null（通过不传参）
        const result = CheckDocument(undefined);

        expect(result.success).toBe(false);
        if (!result.success) {
            expect(result.message).toContain("请打开");
        }
    });
});
