/**
 * @file: boundsCheck.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { BoundsLike } from "../types/boundsType";

/**
 * 当前对象是否与 BoundsLike 对象相等
 * @param {Bounds|BoundsLike} obj 矩形对象
 * @returns {boolean} 相等返回true，否则返回false
 * @private
 */
export function IsBoundsLike(obj: unknown): obj is BoundsLike {
    return (
        obj !== null &&
        typeof obj === "object" &&
        typeof (obj as BoundsLike).left === "number" &&
        typeof (obj as BoundsLike).top === "number" &&
        typeof (obj as BoundsLike).right === "number" &&
        typeof (obj as BoundsLike).bottom === "number"
    );
}
