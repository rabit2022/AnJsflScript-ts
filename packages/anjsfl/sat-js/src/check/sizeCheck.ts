/**
 * @file: sizeCheck.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { SizeLike } from "../types/sizeType";

export function IsSizeLike(obj: unknown): obj is SizeLike {
    return (
        obj !== null &&
        typeof obj === "object" &&
        "width" in obj &&
        typeof obj.width === "number" &&
        "height" in obj &&
        typeof obj.height === "number"
    );
}
