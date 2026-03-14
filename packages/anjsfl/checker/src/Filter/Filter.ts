/**
 * 判断指定元素是否有滤镜
 */
export function hasFilter(element: SymbolInstance): boolean {
    const filters = element.filters;
    return filters.length > 0;
}
