import { ScaleLike } from "../types/scaleType";

export function IsScaleLike(obj: unknown): obj is ScaleLike {
    return (
        obj !== null &&
        typeof obj === "object" &&
        'scaleX' in obj && typeof obj.scaleX === "number" &&
        'scaleY' in obj && typeof obj.scaleY === "number"
    );
}