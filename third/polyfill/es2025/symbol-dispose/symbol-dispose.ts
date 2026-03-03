/**
 * @file: symbol-dispose.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

// polyfills/symbol-dispose.ts

// 定义 Symbol.dispose（如果不存在）
if (typeof Symbol.dispose !== "symbol" || typeof Symbol.dispose === "undefined") {
    (Symbol as any).dispose = Symbol("Symbol.dispose");
}

// 可选：也定义 asyncDispose（用于 using await）
if (typeof Symbol.asyncDispose !== "symbol" || typeof Symbol.asyncDispose === "undefined") {
    (Symbol as any).asyncDispose = Symbol("Symbol.asyncDispose");
}
