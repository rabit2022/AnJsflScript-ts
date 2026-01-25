/**
 * @file: skewCheck.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { SkewLike } from "../types/skewType";

export function IsSkewLike(obj: unknown): obj is SkewLike {
    return (
        obj !== null &&
        typeof obj === "object" &&
        "skewX" in obj &&
        typeof obj.skewX === "number" &&
        "skewY" in obj &&
        typeof obj.skewY === "number"
    );
}
