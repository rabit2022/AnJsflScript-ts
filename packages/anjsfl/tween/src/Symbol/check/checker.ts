/**
 * @file: checker.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 *//**
 * 判断是否是 组
 * @param {Element} element 元素
 * @returns {boolean} 是否是 组
 */
function IsGroup(element) {
    return element && element.isGroup;
}

/**
 * 判断是否是 元件
 * @param {Element} element 元素
 * @returns {boolean} 是否是 元件
 */
export function IsSymbol(element) {
    var InstanceIsSymbol =
        element.elementType === "instance" && element.instanceType === "symbol";
    var SymbolTypeIsNotUndefined = element.symbolType !== undefined;

    return (
        // 非空元素，非组
        !IsGroup(element) && (InstanceIsSymbol || SymbolTypeIsNotUndefined)
    );
}
