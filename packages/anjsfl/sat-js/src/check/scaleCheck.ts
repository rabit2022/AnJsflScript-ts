/**
 * @file: scaleCheck.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { ScaleLike } from "../types/scaleType";

export function IsScaleLike(obj: unknown): obj is ScaleLike {
    return (
        obj !== null &&
        typeof obj === "object" &&
        "scaleX" in obj &&
        typeof obj.scaleX === "number" &&
        "scaleY" in obj &&
        typeof obj.scaleY === "number"
    );
}
