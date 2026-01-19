import { FrameRangeLike } from "../types/framerangeType";

export function IsFrameRangeLike(obj): obj is FrameRangeLike {
    return (
        obj &&
        typeof obj === "object" &&
        typeof obj.layerIndex === "number" &&
        typeof obj.startFrame === "number" &&
        typeof obj.endFrame === "number"
    );
}
