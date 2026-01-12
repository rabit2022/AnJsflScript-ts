/**
 * @file: CheckSelectionRules.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/13 1:17
 * @project: AnJsflScript-ts
 * @description:
 */

// CheckSelectionRules.ts
import { parseRule, checkRule } from "ruleUtils";
import { RuleString, CheckResult } from "ruleTypes";

/**
 * 检查选择项是否满足 **所有** 规则
 */
export function CheckSelectionAll<T>(
    selection: T[],
    rules: RuleString[],
    tips?: string[]
): CheckResult<T[]> {
    if (!Array.isArray(selection)) {
        return { success: false, message: "selection 必须是数组" };
    }

    const len = selection.length;

    for (let i = 0; i < rules.length; i++) {
        try {
            const rule = parseRule(rules[i]);
            if (!checkRule(len, rule)) {
                const msg = tips?.[i] ?? `规则 #${i + 1} "${rules[i]}" 未满足`;
                return { success: false, message: msg };
            }
        } catch (e) {
            return { success: false, message: (e as Error).message };
        }
    }

    return { success: true, data: selection };
}

/**
 * 检查选择项是否满足 **任一** 规则
 */
export function CheckSelectionAny<T>(
    selection: T[],
    rules: RuleString | RuleString[],
    tip?: string
): CheckResult<T[]> {
    if (!Array.isArray(selection)) {
        return { success: false, message: "selection 必须是数组" };
    }

    const ruleList = typeof rules === "string" ? [rules] : rules;
    const len = selection.length;

    for (const ruleStr of ruleList) {
        try {
            const rule = parseRule(ruleStr);
            if (checkRule(len, rule)) {
                return { success: true, data: selection };
            }
        } catch (e) {
            return { success: false, message: (e as Error).message };
        }
    }

    return { success: false, message: tip || "数量不符合任一规则要求" };
}
