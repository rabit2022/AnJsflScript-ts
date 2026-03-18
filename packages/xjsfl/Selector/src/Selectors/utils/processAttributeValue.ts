/**
 * @file: processAttributeValue.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/18 23:03
 * @project: AnJsflScript-ts
 * @description:
 */

// 假设 result 是一个包含 attribute_value 和 attribute_operand 的对象
// 如果 result 来自正则匹配数组，可能需要先定义接口或类型断言
import { Selector } from "../../Selector/Selector";

export function processAttributeValue(
    attValue: string,
    selector: Selector
): string | number | RegExp {
    // 2. 尝试解析为数字
    const val = parseFloat(attValue);

    // JS/TS 中，parseFloat("123px") 会返回 123，而 parseFloat("abc") 返回 NaN
    // 使用 !Number.isNaN(val) 比 isNaN(val) 更严格且类型安全
    if (!Number.isNaN(val)) return val;

    // 3. 处理特殊字符 (*, {, })
    // 如果包含这些字符，转换为正则表达式，否则保持原字符串
    if (/[\*{}]/.test(attValue)) {
        // 假设 Selector.makeRX 返回 RegExp 或特定类型
        return Selector.makeRX(attValue, selector);
    }

    // 4. 默认返回原始字符串
    return attValue;
}
