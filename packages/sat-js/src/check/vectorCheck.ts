// ----------------------------------------------------------------------------------------------------
// # Wrappers for Vector


/**
 * 类型守卫：判断对象是否具有 Vector 结构（含 x, y 数值属性）。
 * @param obj 待检测对象
 * @returns 若 obj 是 VectorLike，则类型收窄为 VectorLike
 */
function isVectorLike(obj: unknown): obj is VectorLike {
    return (
        obj !== null &&
        typeof obj === 'object' &&
        typeof (obj as any).x === 'number' &&
        typeof (obj as any).y === 'number'
    );
}