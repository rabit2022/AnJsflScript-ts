// src/type.ts

// 1. 导入所有类型（使用 type-only import）
import type { XYWHRectLike as _XYWHRectLike } from "./xywhrectType";
import type { VectorLike as _VectorLike } from "./vectorType";
import type { TransformLike as _TransformLike } from "./transformType";
import type { SkewLike as _SkewLike } from "./skewType";
import type { SizeLike as _SizeLike } from "./sizeType";
import type { ScaleLike as _ScaleLike } from "./scaleType";
import type { LineSegmentLike as _LineSegmentLike } from "./linesegmentType";
import type { FrameRangeLike as _FrameRangeLike } from "./framerangeType";
// framerangelistType.ts is empty → skip
import type { ElementBoundsLike as _ElementBoundsLike } from "./elementboundsType";
import type { CornerRectLike as _CornerRectLike } from "./cornerrectType";
import type { CircleLike as _CircleLike } from "./circleType";
import type { BoxTypeLike as _BoxTypeLike } from "./boxType";
import type { BoundsLike as _BoundsLike } from "./boundsType";

// 2. 聚合到 TYPE 命名空间（仅用于类型系统）
export namespace TYPE {
    export type XYWHRectLike = _XYWHRectLike;
    export type VectorLike = _VectorLike;
    export type TransformLike = _TransformLike;
    export type SkewLike = _SkewLike;
    export type SizeLike = _SizeLike;
    export type ScaleLike = _ScaleLike;
    export type LineSegmentLike = _LineSegmentLike;
    export type FrameRangeLike = _FrameRangeLike;
    export type ElementBoundsLike = _ElementBoundsLike;
    export type CornerRectLike = _CornerRectLike;
    export type CircleLike = _CircleLike;
    export type BoxTypeLike = _BoxTypeLike;
    export type BoundsLike = _BoundsLike;
}