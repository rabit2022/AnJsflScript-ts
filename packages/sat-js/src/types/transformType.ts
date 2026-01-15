import {ScaleLike} from "./scaleType";
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