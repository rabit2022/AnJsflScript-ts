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

export enum CheckCondition {
    NoLimit = "No limit",
    NotZero = "Not Zero", // >0
    Zero = "Zero", // =0
    OnlyOne = "Only one", // =1
    OnlyTwo = "Only two", // =2
    More = "More" // >2
}
