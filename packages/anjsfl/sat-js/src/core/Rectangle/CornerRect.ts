/**
 * @file: CornerRect.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { SObject } from "../../base/SObject";
import { CornerRectLike } from "../../types/cornerrectType";
import { Vector } from "../Vector";
import {Bounds} from "./Bounds";

// 几何算法、用户框选区域、矢量图形
export class CornerRect extends SObject implements CornerRectLike {
    public topLeft: Vector = Vector.ZERO;
    public bottomRight: Vector = Vector.ZERO;

    constructor(topLeft: Vector, bottomRight: Vector ) {
        super();
        this.topLeft=topLeft;
        this.bottomRight=bottomRight;
    }

    toBounds():Bounds {
        return new Bounds(this.topLeft, this.bottomRight);
    }
}
