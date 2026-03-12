/**
 * @file: elementUtils.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

/**
 * 将字符串中的正则表达式特殊字符进行转义。
 *
 * 作用：
 * 在动态创建 RegExp 时，如果字符串中包含正则特殊字符
 * （如 . * + ? ^ $ ( ) [ ] { } | \ / 等），
 * 这些字符会被解释为正则语法。
 *
 * 此函数会在这些字符前面加上 "\"，使其变成普通字符匹配。
 *
 * 例如：
 * input  : "a.b*"
 * output : "a\.b\*"
 *
 * 常用于：
 * new RegExp(userInput)
 *
 * @param value 需要转义的字符串
 * @returns 转义后的字符串，可安全用于 RegExp 构造
 */
export function rxEscape(value: string): string {
    return String(value).replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}

/**
 * 将带有通配符 "*" 的字符串转换为对应的 RegExp 对象。
 *
 * 处理逻辑：
 * 1. 先调用 rxEscape() 对字符串进行正则转义
 * 2. 将转义后的 "\*" 替换为正则匹配 ".*?"（非贪婪任意字符）
 * 3. 如果 exactMatch 为 true，则在表达式前后添加 ^ 和 $
 *    表示必须完全匹配整个字符串
 *
 * 示例：
 *
 * makeWildcard("btn_*")
 * => /btn_.*?/
 *
 * makeWildcard("btn_*", true)
 * => /^btn_.*?$/
 *
 * 使用场景：
 * - 通配符字符串匹配
 * - 文件名匹配
 * - 图层名称匹配
 * - Flash / Animate 元素名称查找
 *
 * @param value      包含 "*" 通配符的字符串
 * @param exactMatch 是否要求完全匹配（默认 false）
 * @returns 转换后的 RegExp 对象
 */
export function makeWildcard(value: string, exactMatch: boolean = false): RegExp {
    let str = rxEscape(value).replace(/\\\*/g, ".*?");

    if (exactMatch) {
        str = `^${str}$`;
    }

    return new RegExp(str);
}

export function getExtremeValues<T extends Record<string, any>, K extends keyof T>(
    elements: readonly T[],
    prop: K,
    returnElement = false
): [T[K] | T | undefined, T[K] | T | undefined] {
    if (elements.length === 0) {
        return [undefined, undefined];
    }

    let minEl = elements[0];
    let maxEl = elements[0];

    let minVal = elements[0][prop];
    let maxVal = elements[0][prop];

    for (let i = 1; i < elements.length; i++) {
        const el = elements[i];
        const value = el[prop];

        if (value > maxVal) {
            maxVal = value;
            maxEl = el;
        } else if (value < minVal) {
            minVal = value;
            minEl = el;
        }
    }

    return returnElement ? [minEl, maxEl] : [minVal, maxVal];
}

export function sortOn<T>(arr: T[], prop: keyof T, asc = true) {
    return arr.sort((a, b) => {
        const av = a[prop] as any;
        const bv = b[prop] as any;

        if (av < bv) return asc ? -1 : 1;
        if (av > bv) return asc ? 1 : -1;

        return 0;
    });
}
