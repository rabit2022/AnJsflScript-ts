
// ------------------------------------------------------------------------------------------------------------------------
//  ______     __     ______     ______     __         ______
// /\  ___\   /\ \   /\  == \   /\  ___\   /\ \       /\  ___\
// \ \ \____  \ \ \  \ \  __<   \ \ \____  \ \ \____  \ \  __\
//  \ \_____\  \ \_\  \ \_\ \_\  \ \_____\  \ \_____\  \ \_____\
//   \/_____/   \/_/   \/_/ /_/   \/_____/   \/_____/   \/_____/
//
// ------------------------------------------------------------------------------------------------------------------------
// Circle
/**
 * 圆类
 * @param {Vector} pos 圆心
 * @param {number} r 半径
 * @constructor
 */
function Circle(pos, r) {
    SObject.apply(this, arguments);

    this.pos = pos;
    this.r = r;
}

SAT["Circle"] = Circle;
SAT["C"] = Circle;

INHERIT_MACRO(Circle, SObject);

Circle.prototype.toVector = function() {
    return this.pos.clone();
};

// d
Object.defineProperty(Circle.prototype, "d", {
    get: function() {
        return 2 * this.r;
    }
});

Circle.prototype.getBounds = function() {
    var left = this.pos.x - this.r;
    var top = this.pos.y - this.r;
    var right = this.pos.x + this.r;
    var bottom = this.pos.y + this.r;
    return new Rectangle(left, top, right, bottom);
};

Circle.prototype.getArea = function() {
    return Math.PI * this.r * this.r;
};

Circle.prototype.getCentroid = function() {
    return this.pos.clone();
};

Circle.prototype.getDistanceToPoint = function(point) {
    var dx = this.pos.x - point.x;
    var dy = this.pos.y - point.y;
    return Math.sqrt(dx * dx + dy * dy) - this.r;
};

Circle.prototype.getDistanceToSegment = function(segment) {
    var nearestPoint = segment.getNearestPointTo(this.pos);
    return this.getDistanceToPoint(nearestPoint);
};

Circle.prototype.containsPoint = function(point) {
    return this.getDistanceToPoint(point) <= 0;
};

function IsCircleLike(obj) {
    return (obj && typeof obj === "object" && IsVectorLike(obj.pos) && typeof obj.r === "number");
}

SAT_CHECk["IsCircleLike"] = IsCircleLike;
