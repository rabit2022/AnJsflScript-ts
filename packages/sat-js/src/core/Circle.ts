// ------------------------------------------------------------------------------------------------------------------------
//  ______     __     ______     ______     __         ______
// /\  ___\   /\ \   /\  == \   /\  ___\   /\ \       /\  ___\
// \ \ \____  \ \ \  \ \  __<   \ \ \____  \ \ \____  \ \  __\
//  \ \_____\  \ \_\  \ \_\ \_\  \ \_____\  \ \_____\  \ \_____\
//   \/_____/   \/_/   \/_/ /_/   \/_____/   \/_____/   \/_____/
//
// ------------------------------------------------------------------------------------------------------------------------
// Circle

import { SObject } from "../base/SObject";
import { CircleLike } from "../types/circleType";
import { Vector } from "./Vector";
import { Bounds } from "./Rectangle/Bounds";
import { LineSegment } from "./LineSegment";

export class Circle extends SObject implements CircleLike {
    public pos: Vector = Vector.ZERO;
    public r: number = 0;

    get d(): number {
        return 2 * this.r;
    }

    constructor(pos?: Vector, r?: number) {
        super();
        if (pos !== undefined) {
            this.pos = pos;
        }
        if (r !== undefined) {
            this.r = r;
        }
    }

    get bounds(): Bounds {
        var left = this.pos.x - this.r;
        var top = this.pos.y - this.r;
        var right = this.pos.x + this.r;
        var bottom = this.pos.y + this.r;
        return new Bounds(left, top, right, bottom);
    }

    get area(): number {
        return Math.PI * this.r * this.r;
    }

    get centroid(): Vector {
        return this.pos.clone();
    }

    distanceTo(point: Vector): number {
        var dx = this.pos.x - point.x;
        var dy = this.pos.y - point.y;
        return Math.sqrt(dx * dx + dy * dy) - this.r;
    }

    distanceToSegment(segment: LineSegment): number {
        var nearestPoint = segment.closestPointTo(this.pos);
        return this.distanceTo(nearestPoint);
    }

    /**
     * 判断点是否在圆内（含边界）
     */
    contains(point: Vector): boolean {
        const dx = this.pos.x - point.x;
        const dy = this.pos.y - point.y;
        return dx * dx + dy * dy <= this.r * this.r;
    }

    toVector(): Vector {
        return this.pos.clone();
    }
}
