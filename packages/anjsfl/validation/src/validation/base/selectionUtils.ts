/**
 * @file: selectionUtils.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/13 1:17
 * @project: AnJsflScript-ts
 * @description:
 */

import {CheckCondition, CheckMode} from "../../types/selectionTypes";


// 提示消息配置（按模式组织）
export const MESSAGES: Record<CheckMode, Record<CheckCondition, string | null>> = {
    [CheckMode.SelectElement]: {
        [CheckCondition.NoLimit]: null,
        [CheckCondition.AtLeastOne]: "请选择一个元件。",
        [CheckCondition.NoneSelected]: "请至少选择一个元件。",
        [CheckCondition.ExactlyOne]: "请只选择一个元件。",
        [CheckCondition.ExactlyTwo]: "请同时选择两个元件。",
        [CheckCondition.MultipleSelected]: "请选择多个元件。"
    },
    [CheckMode.SelectFrame]: {
        [CheckCondition.NoLimit]: null,
        [CheckCondition.AtLeastOne]: "请选择一个帧。",
        [CheckCondition.NoneSelected]: "请至少选择一个帧。",
        [CheckCondition.ExactlyOne]: "请只选择一个帧。",
        [CheckCondition.ExactlyTwo]: "请同时选择两个帧。",
        [CheckCondition.MultipleSelected]: "请选择多个帧。"
    },
    [CheckMode.ElementOnFrame]: {
        [CheckCondition.NoLimit]: null,
        [CheckCondition.AtLeastOne]: "当前帧上需要有元件。",
        [CheckCondition.NoneSelected]: "当前帧上至少需要一个元件。",
        [CheckCondition.ExactlyOne]: "当前帧上只能有一个元件。",
        [CheckCondition.ExactlyTwo]: "当前帧上只能有两个元件。",
        [CheckCondition.MultipleSelected]: "当前帧上需要多个元件。"
    },
    [CheckMode.SelectLibItem]: {
        [CheckCondition.NoLimit]: null,
        [CheckCondition.AtLeastOne]: "请选择库中的一个项目。",
        [CheckCondition.NoneSelected]: "请至少选择一个库项目。",
        [CheckCondition.ExactlyOne]: "请只选择一个库项目。",
        [CheckCondition.ExactlyTwo]: "请同时选择两个库项目。",
        [CheckCondition.MultipleSelected]: "请选择多个库项目。"
    },
    [CheckMode.SelectLayer]: {
        [CheckCondition.NoLimit]: null,
        [CheckCondition.AtLeastOne]: "请选择一个图层。",
        [CheckCondition.NoneSelected]: "请至少选择一个图层。",
        [CheckCondition.ExactlyOne]: "请只选择一个图层。",
        [CheckCondition.ExactlyTwo]: "请同时选择两个图层。",
        [CheckCondition.MultipleSelected]: "请选择多个图层。"
    },
    [CheckMode.SelectedFrameDuration]: {
        [CheckCondition.NoLimit]: null,
        [CheckCondition.AtLeastOne]: "所选帧总时长 不能为 0 帧。",
        [CheckCondition.NoneSelected]: "所选帧总时长 至少为 1 帧。",
        [CheckCondition.ExactlyOne]: "所选帧总时长 只能为 1 帧。",
        [CheckCondition.ExactlyTwo]: "所选帧总时长 只能为 2 帧。",
        [CheckCondition.MultipleSelected]: "所选帧总时长 不能小于 2 帧。"
    },
    [CheckMode.SelectedFrameFirstDuration]: {
        [CheckCondition.NoLimit]: null,
        [CheckCondition.AtLeastOne]: "所选帧的 第一段 时长 不能为 0 帧。",
        [CheckCondition.NoneSelected]: "所选帧的 第一段 时长 至少为 1 帧。",
        [CheckCondition.ExactlyOne]: "所选帧的 第一段 时长 只能为 1 帧。",
        [CheckCondition.ExactlyTwo]: "所选帧的 第一段 时长 只能为 2 帧。",
        [CheckCondition.MultipleSelected]: "所选帧的 第一段 时长 不能小于 2 帧。"
    }
};

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
