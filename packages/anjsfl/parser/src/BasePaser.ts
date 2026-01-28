import chroma from "chroma-js";
import { DirectionDictionary, NumberWithSign, RangeConfig } from "./types";
import { generateRange } from "./utils";
import { Result, Ok, Err } from "oxide.ts";

// --- 颜色解析 ---
export function parseColor(inputColor: string | null, alertMsg?: string): Result<string, string> {
    if (!inputColor) {
        return Err(alertMsg || "颜色输入无效");
    }

    try {
        const color = chroma(inputColor);
        if (!chroma.valid(color)) {
            return Err(alertMsg || "颜色格式不正确");
        }
        return Ok(color.hex());
    } catch (error) {
        return Err(alertMsg || "颜色解析异常");
    }
}

// --- 字符串解析 ---
export function parseString(inputStr: string | null, alertMsg?: string): Result<string, string> {
    if (inputStr === null || inputStr.trim() === "") {
        return Err(alertMsg || "字符串不能为空");
    }
    return Ok(inputStr.trim());
}

/**
 * 解析单个数字
 * 现在只返回 number，不再返回 number[]
 */
export function parseNumber(
    input: string,
    errorMessage: string = "请输入合法的数字。",
    rangeConfig?: RangeConfig
): Result<number, string> {
    if (!input || input.trim() === "") {
        return Err(errorMessage || "输入不能为空");
    }

    const numericValue = Number(input);
    if (isNaN(numericValue)) {
        return Err(errorMessage || "无法解析为有效数字");
    }

    // 移除了处理逗号分隔数组的逻辑，那是另一个函数的事
    // ... 保留原有的边界和步进校验逻辑
    if (rangeConfig) {
        const { start: min, end: max, step } = rangeConfig;

        // B. 边界校验
        if ((min !== undefined && numericValue < min) || 
            (max !== undefined && numericValue > max)) {
            const rangeDesc = [min !== undefined ? `最小值 ${min}` : "", max !== undefined ? `最大值 ${max}` : ""]
                .filter(Boolean).join("，");
            return Err(`数值超出范围 [${rangeDesc}]`);
        }

        // C. 步进校验 (逻辑保持不变)
        if (step !== undefined) {
            const rangeStart = min !== undefined ? min : Math.min(numericValue, max!);
            const rangeEnd = max !== undefined ? max : Math.max(numericValue, min!);
            const validNumbers = generateRange(rangeStart, rangeEnd, step);

            const valueStr = numericValue.toFixed(10);
            const isValidStep = validNumbers.some(num => num.toFixed(10) === valueStr);

            if (!isValidStep) {
                const sampleValues = validNumbers.slice(0, 3).join(", ");
                return Err(`数值不符合步进规则。合法示例: ${sampleValues}...`);
            }
        }
    }

    return Ok(numericValue);
}


// --- 方向解析 ---
export function parseDirection(
    input: string,
    customDict?: DirectionDictionary
): Result<number, string> {
    const defaultDict: DirectionDictionary = { 右: 1, 左: -1, " ": -1 };
    const dict = customDict || defaultDict;
    const trimmedInput = input.trim();

    if (!trimmedInput) {
        return Err("方向输入不能为空");
    }

    if (!(trimmedInput in dict)) {
        const validKeys = Object.keys(dict).join("/");
        return Err(`无效的方向。允许的值: ${validKeys}`);
    }

    return Ok(dict[trimmedInput]);
}

// --- 带符号数字解析 ---
export function parseNumberWithSignCore(input: string): Result<NumberWithSign, string> {
    if (!input.trim()) {
        return Err("输入不能为空");
    }

    const num = Number(input);
    if (!isNaN(num)) {
        const intNum = parseInt(input, 10);
        const hasSign = num !== 0 ? Math.sign(num) !== 1 : input.trim().startsWith("+");
        return Ok({ num: intNum, hasSign });
    }

    // 兼容逻辑
    const trimmed = input.trim();
    if (trimmed.startsWith("+")) {
        const value = parseInt(trimmed.slice(1), 10);
        if (isNaN(value)) return Err("无效的数字");
        return Ok({ num: value, hasSign: true });
    } else if (trimmed.startsWith("-")) {
        const value = parseInt(trimmed.slice(1), 10);
        if (isNaN(value)) return Err("无效的数字");
        return Ok({ num: -value, hasSign: true });
    }

    return Err("无法解析为有效数字");
}
