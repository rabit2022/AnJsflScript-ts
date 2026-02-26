/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

// ------------------------------------------------------------------------------------------------------------------------
// 基本类型
// Scale,Size,Skew,Transform,Box,CornerRect,XYWHRect,Bounds,Circle,LineSegment,FrameRange,FrameRangeList

// 1. 导入所有类（使用别名避免冲突）
import { Vector as _Vector } from "./Vector";
import { Scale as _Scale } from "./Transform/Scale";
import { Size as _Size } from "./Transform/Size";
import { Skew as _Skew } from "./Transform/Skew";
import { Transform as _Transform } from "./Transform/Transform";
import { Box as _Box } from "./Rectangle/Box";
import { CornerRect as _CornerRect } from "./Rectangle/CornerRect";
import { XYWHRect as _XYWHRect } from "./Rectangle/XYWHRect";
import { Bounds as _Bounds } from "./Rectangle/Bounds";
import { Circle as _Circle } from "./Circle";
import { LineSegment as _LineSegment } from "./LineSegment";
import { FrameRange as _FrameRange } from "./FrameRange/FrameRange";

// 2. 聚合到 SAT 命名空间（使用 const 赋值）
export namespace SAT {
    export const Vector = _Vector;
    export const Scale = _Scale;
    export const Size = _Size;
    export const Skew = _Skew;
    export const Transform = _Transform;
    export const Box = _Box;
    export const CornerRect = _CornerRect;
    export const XYWHRect = _XYWHRect;
    export const Bounds = _Bounds;
    // export type LTRBRect = Bounds;
    export const LTRBRect = _Bounds;

    export const Circle = _Circle;
    export const LineSegment = _LineSegment;
    export const FrameRange = _FrameRange;

    // === 短别名（重点）===
    export const V = _Vector; // Vector
    export const B = _Bounds; // Bounds
    export const C = _Circle; // Circle
}

// 3. 导出类型别名 - 在同一文件中添加
export namespace SAT_T {
    // 使用 InstanceType 获取实例类型
    export type T_Vector = InstanceType<typeof SAT.Vector>;
    export type T_Scale = InstanceType<typeof SAT.Scale>;
    export type T_Size = InstanceType<typeof SAT.Size>;
    export type T_Skew = InstanceType<typeof SAT.Skew>;
    export type T_Transform = InstanceType<typeof SAT.Transform>;
    export type T_Box = InstanceType<typeof SAT.Box>;
    export type T_CornerRect = InstanceType<typeof SAT.CornerRect>;
    export type T_XYWHRect = InstanceType<typeof SAT.XYWHRect>;
    export type T_Bounds = InstanceType<typeof SAT.Bounds>;
    export type T_LTRBRect = InstanceType<typeof SAT.LTRBRect>;
    export type T_Circle = InstanceType<typeof SAT.Circle>;
    export type T_LineSegment = InstanceType<typeof SAT.LineSegment>;
    export type T_FrameRange = InstanceType<typeof SAT.FrameRange>;
}
