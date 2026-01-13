/**
 * @file: selectionUtils.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/13 1:17
 * @project: AnJsflScript-ts
 * @description:
 */
import { CheckCondition, CheckMode } from "../../../../types/validation/selectionTypes";

// 条件别名映射（用于兼容旧字符串）

export const CONDITION_ALIAS_MAP: Record<string, CheckCondition> = {
    "=0": CheckCondition.Zero,
    ">0": CheckCondition.NotZero,
    "=1": CheckCondition.OnlyOne,
    "=2": CheckCondition.OnlyTwo,
    ">=2": CheckCondition.More
    // 注意：">=2" 实际对应 "More"（即 >2），但原逻辑中 "More" 是 length > 2
    // 如果你希望 ">=2" 表示 ≥2，则需调整 checkCondition 逻辑
};

// 提示消息配置（按模式组织）
export const MESSAGES: Record<CheckMode, Record<CheckCondition, string | null>> = {
    [CheckMode.SelectElement]: {
        [CheckCondition.NoLimit]: null,
        [CheckCondition.NotZero]: "请选择一个元件。",
        [CheckCondition.Zero]: "请至少选择一个元件。",
        [CheckCondition.OnlyOne]: "请只选择一个元件。",
        [CheckCondition.OnlyTwo]: "请同时选择两个元件。",
        [CheckCondition.More]: "请选择多个元件。"
    },
    [CheckMode.SelectFrame]: {
        [CheckCondition.NoLimit]: null,
        [CheckCondition.NotZero]: "请选择一个帧。",
        [CheckCondition.Zero]: "请至少选择一个帧。",
        [CheckCondition.OnlyOne]: "请只选择一个帧。",
        [CheckCondition.OnlyTwo]: "请同时选择两个帧。",
        [CheckCondition.More]: "请选择多个帧。"
    },
    [CheckMode.ElementOnFrame]: {
        [CheckCondition.NoLimit]: null,
        [CheckCondition.NotZero]: "当前帧上需要有元件。",
        [CheckCondition.Zero]: "当前帧上至少需要一个元件。",
        [CheckCondition.OnlyOne]: "当前帧上只能有一个元件。",
        [CheckCondition.OnlyTwo]: "当前帧上只能有两个元件。",
        [CheckCondition.More]: "当前帧上需要多个元件。"
    },
    [CheckMode.SelectLibItem]: {
        [CheckCondition.NoLimit]: null,
        [CheckCondition.NotZero]: "请选择库中的一个项目。",
        [CheckCondition.Zero]: "请至少选择一个库项目。",
        [CheckCondition.OnlyOne]: "请只选择一个库项目。",
        [CheckCondition.OnlyTwo]: "请同时选择两个库项目。",
        [CheckCondition.More]: "请选择多个库项目。"
    },
    [CheckMode.SelectLayer]: {
        [CheckCondition.NoLimit]: null,
        [CheckCondition.NotZero]: "请选择一个图层。",
        [CheckCondition.Zero]: "请至少选择一个图层。",
        [CheckCondition.OnlyOne]: "请只选择一个图层。",
        [CheckCondition.OnlyTwo]: "请同时选择两个图层。",
        [CheckCondition.More]: "请选择多个图层。"
    },
    [CheckMode.SelectedFrameDuration]: {
        [CheckCondition.NoLimit]: null,
        [CheckCondition.NotZero]: "所选帧总时长 不能为 0 帧。",
        [CheckCondition.Zero]: "所选帧总时长 至少为 1 帧。",
        [CheckCondition.OnlyOne]: "所选帧总时长 只能为 1 帧。",
        [CheckCondition.OnlyTwo]: "所选帧总时长 只能为 2 帧。",
        [CheckCondition.More]: "所选帧总时长 不能小于 2 帧。"
    },
    [CheckMode.SelectedFrameFirstDuration]: {
        [CheckCondition.NoLimit]: null,
        [CheckCondition.NotZero]: "所选帧的 第一段 时长 不能为 0 帧。",
        [CheckCondition.Zero]: "所选帧的 第一段 时长 至少为 1 帧。",
        [CheckCondition.OnlyOne]: "所选帧的 第一段 时长 只能为 1 帧。",
        [CheckCondition.OnlyTwo]: "所选帧的 第一段 时长 只能为 2 帧。",
        [CheckCondition.More]: "所选帧的 第一段 时长 不能小于 2 帧。"
    }
};

// 条件校验逻辑
export function checkCondition(condition: CheckCondition, length: number): boolean {
    switch (condition) {
        case CheckCondition.NoLimit:
            return true;
        case CheckCondition.NotZero:
            return length > 0;
        case CheckCondition.Zero:
            return length === 0;
        case CheckCondition.OnlyOne:
            return length === 1;
        case CheckCondition.OnlyTwo:
            return length === 2;
        case CheckCondition.More:
            return length > 2;
        default:
            throw new Error(`未知条件: ${condition satisfies never}`);
    }
}
