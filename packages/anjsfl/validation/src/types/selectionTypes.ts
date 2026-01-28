/**
 * @file: selectionTypes.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/13 1:17
 * @project: AnJsflScript-ts
 * @description:
 */

export type Selection = any[]; // 可根据实际项目替换为具体类型，例如 Element[] | Frame[] 等

export enum CheckMode {
    SelectElement = "selectElement",
    SelectFrame = "selectFrame",
    ElementOnFrame = "elementOnFrame",
    SelectLibItem = "selectLibItem",
    SelectLayer = "selectLayer",
    SelectedFrameDuration = "selectedFrameDuration",
    SelectedFrameFirstDuration = "selectedFrameFirstDuration"
}

/**
 * 图层选择数量条件枚举
 * 定义了针对“选中图层数量”的校验规则
 */
export enum CheckCondition {
    /** 无限制 */
    NoLimit = "No limit",

    /** 至少选中一个 (数量 > 0) */
    AtLeastOne = "At least one",

    /** 未选中任何图层 (数量 == 0) */
    NoneSelected = "None selected",

    /** 必须且仅选中一个 (数量 == 1) */
    ExactlyOne = "Exactly one",

    /** 必须选中两个 (数量 == 2) */
    ExactlyTwo = "Exactly two",

    /** 选中多个 (数量 > 1) */
    MultipleSelected = "Multiple selected",

}
