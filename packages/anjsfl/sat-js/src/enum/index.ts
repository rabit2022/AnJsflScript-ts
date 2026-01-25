/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// src/enum.ts

// 1. 导入所有枚举（注意：有些文件可能为空）
import { RelativePosition as _RelativePosition } from "./vectorEnums";
import { OrthogonalDirection as _OrthogonalDirection } from "./linesegmentEnum";
import {
    RectangleSide as _RectangleSide,
    RectanglePart as _RectanglePart,
    InsetDirection as _InsetDirection
} from "./boundsEnum";

// 2. 聚合到 ENUM 命名空间
export namespace ENUM {
    export const RelativePosition = _RelativePosition;
    export const OrthogonalDirection = _OrthogonalDirection;
    export const RectangleSide = _RectangleSide;
    export const RectanglePart = _RectanglePart;
    export const InsetDirection = _InsetDirection;
}
