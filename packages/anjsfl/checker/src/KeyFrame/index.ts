/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/15 0:13
 * @project: AnJsflScript-ts
 * @description:
 */

import * as KeyFrameChecker from "./KeyFrameChecker";
import * as KeyFrameQuery from "./KeyFrameQuery";

export namespace KeyFrame {
    export const IsKeyFrame = KeyFrameChecker.IsKeyFrame;
    export const getSelectedFrameRanges = KeyFrameQuery.getSelectedFrameRanges;
    export const getKeyFrames = KeyFrameQuery.getKeyFrames;
    export const getKeyFrameRangesOfLayer = KeyFrameQuery.getKeyFrameRangesOfLayer;
    export const findKeyFrameRangeBySelection =
        KeyFrameQuery.findKeyFrameRangeBySelection;
}
