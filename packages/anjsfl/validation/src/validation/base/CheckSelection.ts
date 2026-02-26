/**
 * @file: CheckSelection.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/13 1:17
 * @project: AnJsflScript-ts
 * @description:
 */

import { CheckCondition, CheckMode, Selection } from "../../types";
import { MESSAGES } from "./Message";

import { Err, Ok, Result } from "oxide.ts";
import { IsEnumValue } from "./enemUtils";

/**
 * 检查选择的元件或帧是否符合指定的模式和条件。
 *
 * @param selection - 选择的元件或帧数组。
 * @param mode - 检查模式，默认为 {@link CheckMode.SelectElement}。
 * @param condition - 检查条件，可以是预定义的别名（如 `"=1"`）或 {@link CheckCondition} 枚举键名，默认为 {@link CheckCondition.NoLimit}。
 * @param exTips - 额外提示信息（可选）。
 *
 * @returns 如果选择符合指定条件，则返回 `true`；否则返回 `false`。
 *
 * @throws {Error} 如果 `mode` 或 `condition` 传入 `null`，将抛出错误并终止执行。
 *
 * @example
 * ```ts
 * const sel = [{}, {}]; // 假设有两个选中项
 * const ok = CheckSelection(sel, CheckMode.SelectElement, "=2");
 * console.log(ok); // true
 * ```
 *
 * @note
 * - 参数 `mode` 和 `condition` **不允许传入 `null`**。
 * - 若需使用默认值，请传入 `undefined` 或直接省略参数。
 */
export function CheckSelection(
    selection: Selection,
    mode: CheckMode = CheckMode.SelectElement,
    condition: keyof typeof CheckCondition | string = CheckCondition.NoLimit,
    exTips: string | null = null
): Result<boolean, string> {
    // CheckVariableRedeclaration(selection, "selection");

    // 禁止传入 null
    if (mode === null) {
        // alert("模式不能为 null，请指定一个有效的模式！");
        // return false;
        // 获取所有值并拼接为字符串（例如用逗号分隔）
        const allValues: string = Object.values(CheckMode).join(",");

        // console.log(allValues);
        return Err(`模式不能为 null，请指定一个有效的模式！
可用的模式：${allValues}
        `);
    }
    if (condition === null) {
        // alert("条件不能为 null，请指定一个有效的条件！");
        // return false;
        const allValues: string = Object.values(CheckCondition).join(",");
        return Err(`条件不能为 null，请指定一个有效的模式！
可用的条件：${allValues}
        `);
    }

    // 解析 condition：支持别名
    let resolvedCondition: CheckCondition;
    if (typeof condition === "string") {
        // if (Object.values(CheckCondition).includes(condition as CheckCondition)) {
        if (IsEnumValue(CheckCondition, condition)) {
            resolvedCondition = condition as CheckCondition;
        } else {
            // alert("无效的条件：" + condition);
            // return false;
            return Err(`无效的条件： ${condition}`);
        }
    } else {
        resolvedCondition = condition;
    }

    // 校验 mode 是否有效（TS 枚举已保证，但运行时仍可防御）
    // if (!Object.values(CheckMode).includes(mode)) {
    if (!IsEnumValue(CheckMode, mode)) {
        // alert("无效的模式：" + mode);
        // return false;
        return Err(`无效的模式： ${mode}`);
    }

    // 执行检查
    const length = selection.length;
    if (!checkCondition(resolvedCondition, length)) {
        const defaultMessage = MESSAGES[mode][resolvedCondition];
        const message = exTips ?? defaultMessage;
        // if (message) alert(message);
        // return false;
        if (message) {
            return Err(message);
        }
    }

    return Ok(true);
}

// 条件校验逻辑
export function checkCondition(condition: CheckCondition, length: number): boolean {
    switch (condition) {
        case CheckCondition.NoLimit:
            return true;
        case CheckCondition.AtLeastOne:
            return length > 0;
        case CheckCondition.NoneSelected:
            return length === 0;
        case CheckCondition.ExactlyOne:
            return length === 1;
        case CheckCondition.ExactlyTwo:
            return length === 2;
        case CheckCondition.MultipleSelected:
            return length > 2;
        default:
            throw new Error(`未知条件: ${condition satisfies never}`);
    }
}
