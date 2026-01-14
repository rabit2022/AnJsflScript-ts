
/**
 * 当前对象是否与 BoundsLike 对象相等
 * @param {Bounds|BoundsLike} obj 矩形对象
 * @returns {boolean} 相等返回true，否则返回false
 * @private
 */
function isBoundsLike(obj) {
    return (obj && typeof obj === "object" && typeof obj.left === "number" && typeof obj.top === "number" && typeof obj.right === "number" && typeof obj.bottom === "number");
}
