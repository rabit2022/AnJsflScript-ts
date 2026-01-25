/**
 * @file: transformType.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import {ScaleLike} from "./scaleType";
import {VectorLike} from "./vectorType";
import {SizeLike} from "./sizeType";
import {SkewLike} from "./skewType";

export interface TransformLike {
    rotation: number
    scale: ScaleLike
    position: VectorLike
    size: SizeLike
    skew: SkewLike
}