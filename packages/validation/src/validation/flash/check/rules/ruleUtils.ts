/**
 * @file: ruleUtils.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/13 1:17
 * @project: AnJsflScript-ts
 * @description:
 */

// ruleUtils.ts

import { ParsedRule } from "../../../../types/validation/ruleTypes";

/**
 * 解析规则字符串，如 ">=2" → { op: ">=", val: 2 }
 */
export function parseRule(ruleStr: string): ParsedRule {
    const trimmed = ruleStr.trim();
    const match = trimmed.match(/^(>=|<=|>|<|==|!=)\s*(-?\d+)$/);
    if (!match) {
        throw new Error(`规则格式错误："${ruleStr}"。应为操作符+数字，如 ">=2"`);
    }
    return {
        op: match[1] as any,
        val: Number(match[2])
    };
}

/**
 * 校验长度是否满足规则
 */
export function checkRule(length: number, rule: ParsedRule): boolean {
    const { op, val } = rule;
    switch (op) {
        case ">":
            return length > val;
        case ">=":
            return length >= val;
        case "<":
            return length < val;
        case "<=":
            return length <= val;
        case "==":
            return length === val;
        case "!=":
            return length !== val;
        default:
            return false;
    }
}
