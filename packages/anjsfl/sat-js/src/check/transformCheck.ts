/**
 * @file: transformCheck.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { IsVectorLike } from "./vectorCheck";
import { IsSizeLike } from "./sizeCheck";
import { TransformLike } from "../types/transformType";

export function IsTransformLike(obj: unknown): obj is TransformLike {
    return (
        obj !== null &&
        typeof obj === "object" &&
        "rotation" in obj &&
        typeof obj.rotation === "number" &&
        "scale" in obj &&
        IsVectorLike(obj.scale) &&
        "position" in obj &&
        IsVectorLike(obj.position) &&
        "size" in obj &&
        IsSizeLike(obj.size) &&
        "skew" in obj &&
        IsVectorLike(obj.skew)
    );
}
