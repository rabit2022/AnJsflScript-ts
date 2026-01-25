/**
 * @file: linesegmentCheck.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { IsVectorLike } from "./vectorCheck";
import { LineSegmentLike } from "../types/linesegmentType";

export function IsLineSegmentLike(obj: unknown): obj is LineSegmentLike {
    return (
        obj !== null &&
        typeof obj === "object" &&
        "startPoint" in obj &&
        "endPoint" in obj &&
        IsVectorLike(obj.startPoint) &&
        IsVectorLike(obj.endPoint)
    );
}
