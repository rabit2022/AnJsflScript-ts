import { BoundsLike } from "../types/boundsType";

/**
 * 当前对象是否与 BoundsLike 对象相等
 * @param {Bounds|BoundsLike} obj 矩形对象
 * @returns {boolean} 相等返回true，否则返回false
 * @private
 */
export function IsBoundsLike(obj): obj is BoundsLike {
    return (
        obj &&
        typeof obj === "object" &&
        typeof obj.left === "number" &&
        typeof obj.top === "number" &&
        typeof obj.right === "number" &&
        typeof obj.bottom === "number"
    );
}
