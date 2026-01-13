

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
/**
 * 线段类
 * @param {Vector} startPoint 起点
 * @param {Vector} endPoint 终点
 * @constructor
 */
function LineSegment(startPoint, endPoint) {
    SObject.apply(this, arguments);

    this.startPoint = startPoint;
    this.endPoint = endPoint;
}

SAT["LineSegment"] = LineSegment;
SAT["LS"] = LineSegment;

INHERIT_MACRO(LineSegment, SObject);

LineSegment.prototype.toVector = function() {
    var dx = this.endPoint.x - this.startPoint.x;
    var dy = this.endPoint.y - this.startPoint.y;
    return new Vector(dx, dy);
};

LineSegment.prototype.getBounds = function() {
    var left = Math.min(this.startPoint.x, this.endPoint.x);
    var top = Math.min(this.startPoint.y, this.endPoint.y);
    var right = Math.max(this.startPoint.x, this.endPoint.x);
    var bottom = Math.max(this.startPoint.y, this.endPoint.y);
    return {
        left: left, top: top, width: right - left, height: bottom - top
    };
};

LineSegment.prototype.getCenter = function() {
    var x = (this.startPoint.x + this.endPoint.x) / 2;
    var y = (this.startPoint.y + this.endPoint.y) / 2;
    return new Vector(x, y);
};

LineSegment.prototype.getLength = function() {
    var dx = this.endPoint.x - this.startPoint.x;
    var dy = this.endPoint.y - this.startPoint.y;
    return Math.sqrt(dx * dx + dy * dy);
};

LineSegment.prototype.getAngle = function() {
    var dx = this.endPoint.x - this.startPoint.x;
    var dy = this.endPoint.y - this.startPoint.y;
    return Math.atan2(dy, dx);
};

LineSegment.prototype.getNormal = function() {
    var dx = this.endPoint.x - this.startPoint.x;
    var dy = this.endPoint.y - this.startPoint.y;
    var length = Math.sqrt(dx * dx + dy * dy);
    var normal = new Vector(-dy / length, dx / length);
    return normal;
};

LineSegment.prototype.getPointAt = function(t) {
    var x = this.startPoint.x + (this.endPoint.x - this.startPoint.x) * t;
    var y = this.startPoint.y + (this.endPoint.y - this.startPoint.y) * t;
    return new Vector(x, y);
};

LineSegment.prototype.getNearestPointTo = function(point) {
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

LineSegment.prototype.getDistanceToPoint = function(point) {
    var nearestPoint = this.getNearestPointTo(point);
    var dx = nearestPoint.x - point.x;
    var dy = nearestPoint.y - point.y;
    return Math.sqrt(dx * dx + dy * dy);
};

// static from(startPoint: Vector, direction: DirectionType,distance: number): LineSegment;
/**
 * 从起点出发，方向为 direction，距离为 distance 的线段
 * @param {Vector} startPoint 起点
 * @param {DirectionType} direction 方向
 * @param {number} distance 距离
 * @return {LineSegment} 线段
 */
LineSegment.from = function(startPoint, direction, distance) {
    var endPoint = getOrigin();
    switch (direction) {
        case "left":
            endPoint = startPoint.clone().add(new Vector(-distance, 0));
            break;
        case "top":
            endPoint = startPoint.clone().add(new Vector(0, -distance));
            break;
        case "right":
            endPoint = startPoint.clone().add(new Vector(distance, 0));
            break;
        case "bottom":
            endPoint = startPoint.clone().add(new Vector(0, distance));
            break;
        default:
            throw new Error("Invalid direction: " + direction);
    }
    return new LineSegment(startPoint, endPoint);
};


function IsLineSegmentLike(obj) {
    return (obj && typeof obj === "object" && IsVectorLike(obj.startPoint) && IsVectorLike(obj.endPoint));
}

SAT_CHECk["IsLineSegmentLike"] = IsLineSegmentLike;

