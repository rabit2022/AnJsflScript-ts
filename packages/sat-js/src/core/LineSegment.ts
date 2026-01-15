// ------------------------------------------------------------------------------------------------------------------------
//  __         __     __   __     ______     ______     ______     ______
// /\ \       /\ \   /\ "-.\ \   /\  ___\   /\  ___\   /\  ___\   /\  ___\
// \ \ \____  \ \ \  \ \ \-.  \  \ \  __\   \ \___  \  \ \  __\   \ \ \__ \
//  \ \_____\  \ \_\  \ \_\\"\_\  \ \_____\  \/\_____\  \ \_____\  \ \_____\
//   \/_____/   \/_/   \/_/ \/_/   \/_____/   \/_____/   \/_____/   \/_____/
//
//  __    __     ______     __   __     ______
// /\ "-./  \   /\  ___\   /\ "-.\ \   /\__  _\
// \ \ \-./\ \  \ \  __\   \ \ \-.  \  \/_/\ \/
//  \ \_\ \ \_\  \ \_____\  \ \_\\"\_\    \ \_\
//   \/_/  \/_/   \/_____/   \/_/ \/_/     \/_/
//
// ------------------------------------------------------------------------------------------------------------------------
// LineSegment


import {Vector} from "./Vector";
import {Bounds} from "./Rectangle/Bounds";
import {LineSegmentLike} from "../types/linesegmentType";
import {SObject} from "../base/SObject";
import {OrthogonalDirection} from "../enum/linesegmentEnum";

/**
 * This is a simple line segment class,LineSegment has two parameters {startPoint},{endPoint}.
 */
export class LineSegment extends SObject implements LineSegmentLike {
    public startPoint: Vector
    public endPoint: Vector

    constructor(startPoint: Vector, endPoint: Vector) {
        super();

        this.startPoint = startPoint;
        this.endPoint = endPoint;
    }


    get bounds(): Bounds {
        var left = Math.min(this.startPoint.x, this.endPoint.x);
        var top = Math.min(this.startPoint.y, this.endPoint.y);
        var right = Math.max(this.startPoint.x, this.endPoint.x);
        var bottom = Math.max(this.startPoint.y, this.endPoint.y);
        // return {
        //     left: left, top: top, width: right - left, height: bottom - top
        // };
        return new Bounds(left, top, right, bottom);
    };

    get center(): Vector {
        var x = (this.startPoint.x + this.endPoint.x) / 2;
        var y = (this.startPoint.y + this.endPoint.y) / 2;
        return new Vector(x, y);
    };


    get length(): number {
        var dx = this.endPoint.x - this.startPoint.x;
        var dy = this.endPoint.y - this.startPoint.y;
        return Math.sqrt(dx * dx + dy * dy);
    };

    get angle(): number {
        var dx = this.endPoint.x - this.startPoint.x;
        var dy = this.endPoint.y - this.startPoint.y;
        return Math.atan2(dy, dx);
    };

    get normal(): Vector {
        var dx = this.endPoint.x - this.startPoint.x;
        var dy = this.endPoint.y - this.startPoint.y;
        var length = Math.sqrt(dx * dx + dy * dy);
        var normal = new Vector(-dy / length, dx / length);
        return normal;
    };


    pointAt(t: number): Vector {
        const vector = this.endPoint.clone().sub(this.startPoint);
        return this.startPoint.clone().add(
            vector.clone().multiply(t)
        );
    }

    /**
     * 计算点到线段的最近点。
     * 注意：结果会被限制在线段范围内（即不会返回延长线上的点）。
     */
    closestPointTo(point: Vector): Vector {
        var dx = this.endPoint.x - this.startPoint.x;
        var dy = this.endPoint.y - this.startPoint.y;
        var a = dx * dx + dy * dy;
        var b = 2 * (dx * (this.startPoint.x - point.x) + dy * (this.startPoint.y - point.y));
        var c = (this.startPoint.x - point.x) * (this.startPoint.x - point.x) + (this.startPoint.y - point.y) * (this.startPoint.y - point.y) - 1;
        var t = Math.max(0, Math.min(1, (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)));
        var x = this.startPoint.x + (this.endPoint.x - this.startPoint.x) * t;
        var y = this.startPoint.y + (this.endPoint.y - this.startPoint.y) * t;
        return new Vector(x, y);
    };


    distanceTo(point: Vector): number {
        var nearestPoint = this.closestPointTo(point);
        var dx = nearestPoint.x - point.x;
        var dy = nearestPoint.y - point.y;
        return Math.sqrt(dx * dx + dy * dy);
    };

    toVector(): Vector {
        var dx = this.endPoint.x - this.startPoint.x;
        var dy = this.endPoint.y - this.startPoint.y;
        return new Vector(dx, dy);
    };

    /**
     * 从起点出发，沿指定方向延伸一段距离，生成线段
     * @param startPoint 起点
     * @param direction 方向（左/上/右/下）
     * @param distance 距离（必须 ≥ 0）
     */
    static from(startPoint: Vector, direction: OrthogonalDirection, distance: number): LineSegment {
        if (distance < 0) {
            throw new Error('Distance must be non-negative');
        }

        const offset = getDirectionOffset(direction).clone().multiply(distance);
        const endPoint = startPoint.clone().add(offset);

        return new LineSegment(startPoint, endPoint);
    }
}

const DIRECTION_OFFSETS: Record<OrthogonalDirection, Vector> = {
    [OrthogonalDirection.Left]: new Vector(-1, 0),
    [OrthogonalDirection.Top]: new Vector(0, -1),
    [OrthogonalDirection.Right]: new Vector(1, 0),
    [OrthogonalDirection.Bottom]: new Vector(0, 1)
};

function getDirectionOffset(direction: OrthogonalDirection): Vector {
    const offset = DIRECTION_OFFSETS[direction];
    if (!offset) {
        throw new Error(`Unsupported direction: ${direction}`);
    }
    return offset;
}
