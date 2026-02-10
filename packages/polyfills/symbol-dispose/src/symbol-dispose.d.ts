
// 扩展全局 Symbol 接口，让 TS 知道它存在
declare global {
    interface SymbolConstructor {
        readonly dispose: unique symbol;
        readonly asyncDispose: unique symbol;
    }
}