/**
 * @file: elementboundsCheck.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { ElementBoundsLike } from "../types/elementboundsType";

export function IsElementBoundsLike(obj: unknown): obj is ElementBoundsLike {
    return (
        obj !== null &&
        typeof obj === "object" &&
        typeof (obj as ElementBoundsLike).left === "number" &&
        typeof (obj as ElementBoundsLike).top === "number" &&
        typeof (obj as ElementBoundsLike).width === "number" &&
        typeof (obj as ElementBoundsLike).height === "number"
    );
}
