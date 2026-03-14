/**
 * @file: Filter.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/15 0:13
 * @project: AnJsflScript-ts
 * @description:
 */

/**
 * 判断指定元素是否有滤镜
 */
export function hasFilter(element: SymbolInstance): boolean {
    const filters = element.filters;
    return filters.length > 0;
}
