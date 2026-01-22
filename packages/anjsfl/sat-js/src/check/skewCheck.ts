import { SkewLike } from "../types/skewType";

export function IsSkewLike(obj: unknown): obj is SkewLike {
    return (
        obj !== null &&
        typeof obj === "object" &&
        'skewX' in obj && typeof obj.skewX === "number" &&
        'skewY' in obj && typeof obj.skewY === "number"
    );
}