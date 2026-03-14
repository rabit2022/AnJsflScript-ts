/**
 * @file: assert.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/15 0:13
 * @project: AnJsflScript-ts
 * @description:
 */

// ========================================================================
// 断言方法
// ========================================================================

export function assert(expression: boolean, message?: string): void {
    if (!expression) {
        throw new Error(message || "Assertion failed");
    }
}
