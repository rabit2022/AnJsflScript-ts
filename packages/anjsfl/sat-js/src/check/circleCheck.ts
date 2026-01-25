/**
 * @file: circleCheck.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { IsVectorLike } from "./vectorCheck";
import { CircleLike } from "../types/circleType";

export function IsCircleLike(obj: unknown): obj is CircleLike {
    return (
        obj !== null &&
        typeof obj === "object" &&
        "pos" in obj &&
        "r" in obj && // 可选：先检查属性是否存在（更安全）
        IsVectorLike((obj as any).pos) &&
        typeof (obj as any).r === "number"
    );
}
