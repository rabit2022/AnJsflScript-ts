import { SizeLike } from "../types/sizeType";

export function IsSizeLike(obj): obj is SizeLike {
    return (
        obj &&
        typeof obj === "object" &&
        typeof obj.width === "number" &&
        typeof obj.height === "number"
    );
}
