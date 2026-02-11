/**
 * 判断 value 是否是某个 TypeScript 枚举（字符串/数字）的合法值
 * @example
 * enum Status { Active = 'active', Inactive = 'inactive' }
 * isEnumValue(Status, 'active') // true
 * isEnumValue(Status, 'deleted') // false
 */
export function IsEnumValue<T extends Record<string, string | number>>(
    enumObj: T,
    value: unknown
): value is T[keyof T] {
    // Object.values(CheckCondition).includes(condition as CheckCondition)

    // 先确保 value 是 string 或 number
    if (typeof value !== "string" && typeof value !== "number") {
        return false;
    }

    // 使用 Object.keys + map 模拟 Object.values（兼容 ES5+）
    const values = Object.keys(enumObj).map((key) => enumObj[key]);
    return values.indexOf(value) !== -1;
}
