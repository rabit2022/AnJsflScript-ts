/**
 * @file: symbol-dispose.d.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

// 扩展全局 Symbol 接口，让 TS 知道它存在
declare global {
    interface SymbolConstructor {
        readonly dispose: unique symbol;
        readonly asyncDispose: unique symbol;
    }
}
