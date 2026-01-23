// BaseParser.ts
import chroma from 'chroma-js';
import {DirectionDictionary, NumberWithSign, RangeConfig, Result} from './types';
import {generateRange} from "./utils";


// --- 颜色解析 (保持原样，已符合要求) ---
// 修改返回类型为 Result
export function parseColor(inputColor: string | null, alertMsg?: string): Result<string> {
    if (!inputColor) {
        // 修改：返回失败结果，而不是 alert
        return {success: false, data: null, message: alertMsg || "颜色输入无效"};
    }

    try {
        const color = chroma(inputColor);
        if (!chroma.valid(color)) {
            return {success: false, data: null, message: alertMsg || "颜色格式不正确"};
        }
        return {success: true, data: color.hex(), message: "成功"};
    } catch (error) {
        return {success: false, data: null, message: alertMsg || "颜色解析异常"};
    }
}

// --- 字符串解析 (保持原样) ---
// 修改返回类型为 Result
export function parseString(inputStr: string | null, alertMsg?: string): Result<string> {
    if (inputStr === null || inputStr.trim() === '') {
        return {success: false, data: null, message: alertMsg || "字符串不能为空"};
    }
    return {success: true, data: inputStr.trim(), message: "成功"};
}



/**
 * 解析并验证输入的数字字符串（包含范围和步进校验）
 * @param input 输入的字符串
 * @param errorMessage 验证失败时的提示信息
 * @param rangeConfig 范围配置 {start, end, step}
 * @returns Result<number>
 */
export function parseNumber(input: string, errorMessage: string = "请输入合法的数字。", rangeConfig?: RangeConfig): Result<number> {
    // 1. 基础校验：空值与格式
    // 注意：这里保持严格，空字符串或 null 直接报错
    // 如果你的需求是 "有range时允许空值做特殊处理"，请在这里修改逻辑
    if (!input || input.trim() === '') {
        return {success: false, data: null, message: errorMessage || "输入不能为空"};
    }

    const numericValue = Number(input);
    if (isNaN(numericValue)) {
        return {success: false, data: null, message: errorMessage || "无法解析为有效数字"};
    }

    // 2. 高级校验：范围与步进
    if (rangeConfig) {
        const {start: min, end: max, step} = rangeConfig;

        // A. 尝试解析 "min, max, step" 格式
        // 如果用户输入了逗号分隔的三个数字，尝试将其解析为一个新的范围
        const parts = input.trim().split(',').map(s => s.trim());
        if (parts.length === 3) {
            const [p1, p2, p3] = parts;
            const val1 = parseFloat(p1);
            const val2 = parseFloat(p2);
            const val3 = parseFloat(p3);

            // 如果三个都是有效数字，我们假设用户想定义一个新的 range
            if (!isNaN(val1) && !isNaN(val2) && !isNaN(val3)) {
                // 这里你可以选择：
                // 1. 返回这三个值让用户去处理，或者
                // 2. 检查这三个值是否符合某种规则（比如 val3 是 step，且 val1/val2 在允许的全局范围内）

                // 简单示例：直接返回成功，并将数据作为数组返回
                return {
                    success: true,
                    data: [val1, val2, val3] as any, // 注意类型，可能需要调整 Result<T>
                    message: "检测到范围输入格式"
                };
            }
        }

        // B. 边界校验 (Min/Max) - 保持不变
        if ((min !== undefined && numericValue < min) ||
            (max !== undefined && numericValue > max)) {
            const rangeDesc = [
                min !== undefined ? `最小值 ${min}` : "",
                max !== undefined ? `最大值 ${max}` : ""
            ].filter(Boolean).join("，");
            return {
                success: false,
                data: null,
                message: `数值超出范围 [${rangeDesc}]`
            };
        }

        // C. 步进校验 (Step) - 修改提示信息逻辑
        if (step !== undefined) {
            const rangeStart = min !== undefined ? min : Math.min(numericValue, max!);
            const rangeEnd = max !== undefined ? max : Math.max(numericValue, min!);
            const validNumbers = generateRange(rangeStart, rangeEnd, step);

            const valueStr = numericValue.toFixed(10);
            const isValidStep = validNumbers.some(num => num.toFixed(10) === valueStr);

            if (!isValidStep) {
                // 修改后的逻辑：提示用户可以输入具体的数字，或者输入 range 格式
                const sampleValues = validNumbers.slice(0, 3).join(", ");
                const rangeExample = `${min ?? 0}, ${max ?? 10}, ${step}`;

                return {
                    success: false,
                    data: null,
                    message: `
                    数值不符合步进规则。
                    1. 请从合法值中选择，例如: ${sampleValues}...
                    2. 或输入范围格式: "${rangeExample}" (表示从${min ?? 0}到${max ?? 10}，步长为${step})
                `.replace(/\s+/g, ' ').trim()
                };
            }
        }
    }


    // 3. 校验通过
    return {success: true, data: numericValue, message: "成功"};
}


/**
 * 解析输入的方向字符串为数字
 * @param input 输入的方向描述
 * @param customDict 可选的自定义方向字典，用于覆盖默认值
 * @returns Result<number>
 */
export function parseDirection(input: string, customDict?: DirectionDictionary): Result<number> {
    // 1. 定义默认字典
    const defaultDict: DirectionDictionary = {"右": 1, "左": -1, " ": -1};

    // 2. 合并字典：使用传入的字典，否则使用默认
    // 这里直接赋值，意图更清晰
    const dict = customDict || defaultDict;

    // 3. 输入预处理：去首尾空格
    const trimmedInput = input.trim();

    // 4. 核心校验逻辑
    if (!trimmedInput) {
        return {
            success: false,
            data: null,
            message: "方向输入不能为空"
        };
    }

    if (!(trimmedInput in dict)) {
        // 动态生成允许的值列表，基于当前实际使用的字典
        const validKeys = Object.keys(dict).join('/');
        return {
            success: false,
            data: null,
            message: `无效的方向。允许的值: ${validKeys}`
        };
    }

    // 5. 解析成功
    return {
        success: true,
        data: dict[trimmedInput],
        message: "成功"
    };
}


/**
 * 核心解析逻辑：解析带符号的数字
 * @param input 用户输入的字符串
 * @returns Result<NumberWithSign>
 */
export function parseNumberWithSignCore(input: string): Result<NumberWithSign> {
    // 1. 空值检查
    if (!input.trim()) {
        return {success: false, data: null, message: "输入不能为空"};
    }

    // 2. 纯数字检查 (包括 123, -123, +123 这种原生格式)
    const num = Number(input);
    if (!isNaN(num)) {
        // 使用 parseInt 防止小数，根据需求可调整
        const intNum = parseInt(input, 10);
        // 如果数字本身带有符号，或者字符串显式以 + 开头，则认为 hasSign 为 true
        const hasSign = num !== 0 ? Math.sign(num) !== 1 : input.trim().startsWith("+");
        return {
            success: true,
            data: {num: intNum, hasSign},
            message: "解析成功"
        };
    }

    // 3. 兼容旧逻辑：尝试处理类似 "+10" 或 "-10" 的字符串 (如果上面的 Number 没解析出来，理论上不会到这里)
    const trimmed = input.trim();
    if (trimmed.startsWith("+")) {
        const value = parseInt(trimmed.slice(1), 10);
        if (isNaN(value)) return {success: false, data: null, message: "无效的数字"};
        return {success: true, data: {num: value, hasSign: true}, message: "解析成功"};
    } else if (trimmed.startsWith("-")) {
        const value = parseInt(trimmed.slice(1), 10);
        if (isNaN(value)) return {success: false, data: null, message: "无效的数字"};
        return {success: true, data: {num: -value, hasSign: true}, message: "解析成功"};
    }

    return {success: false, data: null, message: "无法解析为有效数字"};
}

