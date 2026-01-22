import { IsVectorLike } from "./vectorCheck";
import { IsSizeLike } from "./sizeCheck";
import { TransformLike } from "../types/transformType";

export function IsTransformLike(obj: unknown): obj is TransformLike {
    return (
        obj !== null &&
        typeof obj === "object" &&
        'rotation' in obj && typeof obj.rotation === "number" &&
        'scale' in obj && IsVectorLike(obj.scale) &&
        'position' in obj && IsVectorLike(obj.position) &&
        'size' in obj && IsSizeLike(obj.size) &&
        'skew' in obj && IsVectorLike(obj.skew)
    );
}
