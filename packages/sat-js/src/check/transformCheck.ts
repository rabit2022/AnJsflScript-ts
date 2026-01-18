import { IsVectorLike } from "./vectorCheck";
import { IsSizeLike } from "./sizeCheck";
import { TransformLike } from "../types/transformType";

export function IsTransformLike(obj): obj is TransformLike {
    return (
        obj &&
        typeof obj === "object" &&
        typeof obj.rotation === "number" &&
        IsVectorLike(obj.scale) &&
        IsVectorLike(obj.position) &&
        IsSizeLike(obj.size) &&
        IsVectorLike(obj.skew)
    );
}
