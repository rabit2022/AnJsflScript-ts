/**
 * @file: vectorCheck.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// ----------------------------------------------------------------------------------------------------
// # Wrappers for Vector

import { VectorLike } from "../types/vectorType";

/**
 * 类型守卫：判断对象是否具有 Vector 结构（含 x, y 数值属性）。
 * @param obj 待检测对象
 * @returns 若 obj 是 VectorLike，则类型收窄为 VectorLike
 */
export function IsVectorLike(obj: unknown): obj is VectorLike {
    return (
        obj !== null &&
        typeof obj === "object" &&
        "x" in obj &&
        typeof obj.x === "number" &&
        "y" in obj &&
        typeof obj.y === "number"
    );
}
