/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// src/check/check.ts
import { IsBoundsLike as _IsBoundsLike } from "./boundsCheck";
import { IsVectorLike as _IsVectorLike } from "./vectorCheck";
import { IsSizeLike as _IsSizeLike } from "./sizeCheck";
import { IsTransformLike as _IsTransformLike } from "./transformCheck";
import { IsFrameRangeLike as _IsFrameRangeLike } from "./framerangeCheck";
import { IsElementBoundsLike as _IsElementBoundsLike } from "./elementboundsCheck";
import { IsScaleLike as _IsScaleLike } from "./scaleCheck";
import { IsSkewLike as _IsSkewLike } from "./skewCheck";
import { IsLineSegmentLike as _IsLineSegmentLike } from "./linesegmentCheck";
import { IsCircleLike as _IsCircleLike } from "./circleCheck";

export namespace CHECK {
    export const IsBoundsLike = _IsBoundsLike;
    export const IsVectorLike = _IsVectorLike;
    export const IsSizeLike = _IsSizeLike;
    export const IsTransformLike = _IsTransformLike;
    export const IsFrameRangeLike = _IsFrameRangeLike;
    export const IsElementBoundsLike = _IsElementBoundsLike;
    export const IsScaleLike = _IsScaleLike;
    export const IsSkewLike = _IsSkewLike;
    export const IsLineSegmentLike = _IsLineSegmentLike;
    export const IsCircleLike = _IsCircleLike;
}
