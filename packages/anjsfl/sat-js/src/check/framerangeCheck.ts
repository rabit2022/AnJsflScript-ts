/**
 * @file: framerangeCheck.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { FrameRangeLike } from "../types/framerangeType";

export function IsFrameRangeLike(obj: unknown): obj is FrameRangeLike {
    return (
        obj !== null &&
        typeof obj === "object" &&
        "layerIndex" in obj &&
        typeof obj.layerIndex === "number" &&
        "startFrame" in obj &&
        typeof obj.startFrame === "number" &&
        "endFrame" in obj &&
        typeof obj.endFrame === "number"
    );
}
