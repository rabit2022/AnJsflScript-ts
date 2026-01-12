/**
 * @file: CheckVariableRedeclaration.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/13 1:17
 * @project: AnJsflScript-ts
 * @description:
 */

/**
 * 检查变量是否被意外遮蔽（例如在函数内用 var/let 重声明）。
 *
 * 用法示例：
 * ```ts
 * const x = 42;
 * function foo() {
 *   checkVariableRedeclaration(x, 'x'); // 如果 x 被重声明为 undefined，会报警
 *   let x; // ← 这会导致遮蔽！
 * }
 * ```
 *
 * @param variable - 要检查的变量值
 * @param name - 变量名（用于错误提示）
 * @param expectedValue - （可选）预期的值，如果不传，则只检查是否为 undefined
 */
export function CheckVariableRedeclaration(
    variable: unknown,
    name: string,
    expectedValue?: unknown
): void {
    if (expectedValue !== undefined) {
        if (variable !== expectedValue) {
            const msg = `变量 "${name}" 的值被意外修改或遮蔽。期望: ${String(expectedValue)}, 实际: ${String(variable)}`;
            console.warn("[Redeclaration Check] " + msg);
            throw new Error(msg); // 或仅 warn，根据需求
        }
    } else if (variable === undefined) {
        const msg = `变量 "${name}" 在作用域内被重新声明（如 var/let），导致其值为 undefined，可能遮蔽了外部变量。`;
        console.warn("[Redeclaration Check] " + msg);
        // 可选择抛出错误（中断执行）或仅警告
        // throw new ReferenceError(msg);
    }
}
