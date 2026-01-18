import { ScaleLike } from "../types/scaleType";

export function IsScaleLike(obj): obj is ScaleLike {
    return (
        obj &&
        typeof obj === "object" &&
        typeof obj.scaleX === "number" &&
        typeof obj.scaleY === "number"
    );
}
