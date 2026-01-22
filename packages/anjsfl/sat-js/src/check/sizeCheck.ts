import { SizeLike } from "../types/sizeType";

export function IsSizeLike(obj: unknown): obj is SizeLike {
    return (
        obj !== null &&
        typeof obj === "object" &&
        'width' in obj && typeof obj.width === "number" &&
        'height' in obj && typeof obj.height === "number"
    );
}
