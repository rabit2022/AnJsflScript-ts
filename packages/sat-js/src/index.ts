import {CHECK} from "./check/check";
import {ENUM} from "./enum/enum"
import {TYPE} from "./types/type"
import {BoundsConverter} from "./core/Rectangle/BoundsConverter"
import {VectorConverter} from "./core/VectorConverter"


export {CHECK};
export {ENUM}
export {TYPE};
export {BoundsConverter};
export {VectorConverter};

// ------------------------------------------------------------------------------------------------------------------------
// 基本类型
// Scale,Size,Skew,Transform,Box,CornerRect,XYWHRect,Bounds,Circle,LineSegment,FrameRange,FrameRangeList

// 1. 导入所有类（使用别名避免冲突）
import {Vector as _Vector} from "./core/Vector";
import {Scale as _Scale} from "./core/Transform/Scale";
import {Size as _Size} from "./core/Transform/Size";
import {Skew as _Skew} from "./core/Transform/Skew";
import {Transform as _Transform} from "./core/Transform/Transform";
import {Box as _Box} from "./core/Rectangle/Box";
import {CornerRect as _CornerRect} from "./core/Rectangle/CornerRect";
import {XYWHRect as _XYWHRect} from "./core/Rectangle/XYWHRect";
import {Bounds as _Bounds} from "./core/Rectangle/Bounds";
import {Circle as _Circle} from "./core/Circle";
import {LineSegment as _LineSegment} from "./core/LineSegment";
import {FrameRange as _FrameRange} from "./core/FrameRange/FrameRange";
import {FrameRangeList as _FrameRangeList} from "./core/FrameRange/FrameRangeList";

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
    export const FrameRangeList = _FrameRangeList;

    // === 短别名（重点）===
    export const V = _Vector;           // Vector
    export const B = _Bounds;           // Bounds
    export const S = _Size;             // Size
    export const TR = _Transform;       // Transform (T 与泛型冲突，用 TR)
    export const FR = _FrameRange;      // FrameRange
    export const FRL = _FrameRangeList; // FrameRangeList
    export const SC = _Scale;           // Scale
    export const SK = _Skew;            // Skew
    export const LS = _LineSegment;     // LineSegment
    export const C = _Circle;           // Circle
}


// ------------------------------------------------------------------------------------------------------------------------
// 基本类型

import {FlashElementWrapper as _FlashElementWrapper} from "./flash/FlashElementWrapper";
import {FlashStageWrapper as _FlashStageWrapper} from "./flash/FlashStageWrapper";
import {FlashCameraWrapper as _FlashCameraWrapper} from "./flash/FlashCameraWrapper";


// FlashElementWrapper,FlashStageWrapper,FlashCameraWrapper
export namespace FLASH{
    export const FlashElementWrapper = _FlashElementWrapper;
    export const FlashStageWrapper = _FlashStageWrapper;
    export const FlashCameraWrapper = _FlashCameraWrapper;
}