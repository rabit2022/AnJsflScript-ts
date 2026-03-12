import * as KeyFrameChecker from "./KeyFrameChecker"
import * as KeyFrameQuery from "./KeyFrameQuery"

export namespace KeyFrame {
    export const IsKeyFrame = KeyFrameChecker.IsKeyFrame;
    export const getSelectedFrameRanges = KeyFrameQuery.getSelectedFrameRanges;
    export const getKeyFrames = KeyFrameQuery.getKeyFrames;
    export const getKeyFrameRangesOfLayer = KeyFrameQuery.getKeyFrameRangesOfLayer;
    export const findKeyFrameRangeBySelection = KeyFrameQuery.findKeyFrameRangeBySelection;
}