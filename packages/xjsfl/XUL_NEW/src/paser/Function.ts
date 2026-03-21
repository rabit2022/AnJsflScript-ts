/**
 * 解析函数源代码以获取函数信息
 * @param fn - 要解析的函数
 * @returns 包含函数名和参数名的对象，如果解析失败则返回 null
 */
export interface FunctionInfo {
    name: string;
    params: string[];
}

/**
 * only support ES5 "function name(arg1, arg2) { ... }"
 * @param fn
 */
export function parseFunction(fn: Function): FunctionInfo {
    // 2. 尝试获取源码 (标准环境用 toString，非标准用 toSource)
    let source: string = "";
    if (typeof (fn as any).toSource === 'function') {
        // @ts-ignore
        source = fn.toSource();
    } else {
        source = fn.toString();
    }
    // 优化正则：
    // 1. 允许函数名前有空格
    // 2. 更稳健地捕获参数列表内容
    // 注意：ExtendScript 的 toSource 输出格式通常是 "function name(arg1, arg2) { ... }"
    const match = source.match(/function\s+(\w+)\s*\(([^)]*)\)/);

    if (!match) {
        throw new Error("Please use a valid function,only support ES5 \"function name(arg1, arg2) { ... }\"");
    }

    const name = match[1];
    const paramsString = match[2];

    // 如果没有参数，直接返回空数组
    if (!paramsString || paramsString.trim() === "") {
        return {name, params: []};
    }

    // 提取参数名
    // 原正则 /(\w+)/g 比较简单，如果参数有默认值 (a=1) 或类型，可能需要更复杂的逻辑
    // 这里保持与原逻辑一致，只提取单词字符作为参数名
    const params = paramsString.match(/\w+/g) || [];

    return {name, params};
}