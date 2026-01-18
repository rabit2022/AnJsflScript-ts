// ----------------------------------------------------------------------------------------------------
// # Wrappers for Vector

import { VectorLike } from "../types/vectorType";

/**
 * 类型守卫：判断对象是否具有 Vector 结构（含 x, y 数值属性）。
 * @param obj 待检测对象
 * @returns 若 obj 是 VectorLike，则类型收窄为 VectorLike
 */
export function IsVectorLike(obj): obj is VectorLike {
    return (
        obj !== null &&
        typeof obj === "object" &&
        typeof obj.x === "number" &&
        typeof obj.y === "number"
    );
}
