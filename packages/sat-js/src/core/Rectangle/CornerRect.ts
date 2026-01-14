
import {SObject} from "../../base/SObject";
import {CornerRectLike} from "../../types/cornerrectType";
import {Vector} from "../Vector";

// 几何算法、用户框选区域、矢量图形
export class CornerRect extends SObject implements CornerRectLike{
    public topLeft:Vector = Vector.ZERO;
    public bottomRight:Vector = Vector.ZERO;
}