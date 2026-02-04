/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */
export {CHECK} from "./check";
export {ENUM} from "./enum";
export {TYPE} from "./types";
export {SAT, SAT_T} from './core'
// export {BoundsConverter,VectorConverter} from "./converter";

// ------------------------------------------------------------------------------------------------------------------------
// 基本类型

import {FlashElementWrapper as _FlashElementWrapper} from "./flash/FlashElementWrapper";
import {FlashStageWrapper as _FlashStageWrapper} from "./flash/FlashStageWrapper";
import {FlashCameraWrapper as _FlashCameraWrapper} from "./flash/FlashCameraWrapper";

// FlashElementWrapper,FlashStageWrapper,FlashCameraWrapper
export namespace FLASH {
    export const FlashElementWrapper = _FlashElementWrapper;
    export const FlashStageWrapper = _FlashStageWrapper;
    export const FlashCameraWrapper = _FlashCameraWrapper;
}
