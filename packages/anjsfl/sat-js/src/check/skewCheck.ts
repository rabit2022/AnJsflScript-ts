import { SkewLike } from "../types/skewType";

export function IsSkewLike(obj): obj is SkewLike {
    return (
        obj &&
        typeof obj === "object" &&
        typeof obj.skewX === "number" &&
        typeof obj.skewY === "number"
    );
}
