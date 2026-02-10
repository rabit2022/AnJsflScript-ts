// polyfills/symbol-dispose.ts

// 定义 Symbol.dispose（如果不存在）
if (typeof (Symbol as any).dispose !== 'symbol') {
    (Symbol as any).dispose = Symbol('Symbol.dispose');
}

// 可选：也定义 asyncDispose（用于 using await）
if (typeof (Symbol as any).asyncDispose !== 'symbol') {
    (Symbol as any).asyncDispose = Symbol('Symbol.asyncDispose');
}

