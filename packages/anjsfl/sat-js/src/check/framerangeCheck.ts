import { FrameRangeLike } from "../types/framerangeType";

export function IsFrameRangeLike(obj: unknown): obj is FrameRangeLike {
    return (
        obj !== null &&
        typeof obj === "object" &&
        'layerIndex' in obj && typeof obj.layerIndex === "number" &&
        'startFrame' in obj && typeof obj.startFrame === "number" &&
        'endFrame' in obj && typeof obj.endFrame === "number"
    );
}
