// ------------------------------------------------------------------------------------------------------------------------
//  __   __   ______     ______     ______   ______     ______
// /\ \ / /  /\  ___\   /\  ___\   /\__  _\ /\  __ \   /\  == \
// \ \ \'/   \ \  __\   \ \ \____  \/_/\ \/ \ \ \/\ \  \ \  __<
//  \ \__|    \ \_____\  \ \_____\    \ \_\  \ \_____\  \ \_\ \_\
//   \/_/      \/_____/   \/_____/     \/_/   \/_____/   \/_/ /_/
//
// ------------------------------------------------------------------------------------------------------------------------
// Vector
//
// Represents a vector in two dimensions with `x` and `y` properties.

// Create a new Vector, optionally passing in the `x` and `y` coordinates. If
// a coordinate is not specified, it will be set to `0`

import { VectorLike } from "../types/vectorType";
import { SObject } from "../base/SObject";
import { RelativePosition } from "../enum/vectorEnums";

export class Vector extends SObject implements VectorLike {
    public x: number;
    public y: number;

    /**
     * @param {?number=} x The x position.
     * @param {?number=} y The y position.
     * @constructor
     */
    constructor(x: number = 0, y: number = 0) {
        super(); // 必须调用 super()
        this.x = x;
        this.y = y;
    }

    // Change this vector to be perpendicular to what it was before. (Effectively
    // rotates it 90 degrees in a clockwise direction)
    /**
     * @return {Vector} This for chaining.
     */
    perp(): Vector {
        var x = this["x"];
        this["x"] = this["y"];
        this["y"] = -x;
        return this;
    }

    // Rotate this vector (counter-clockwise) by the specified angle (in radians).
    /**
     * @param {number} angle The angle to rotate (in radians)
     * @return {Vector} This for chaining.
     */
    rotate(angle) {
        var x = this["x"];
        var y = this["y"];
        this["x"] = x * Math.cos(angle) - y * Math.sin(angle);
        this["y"] = x * Math.sin(angle) + y * Math.cos(angle);
        return this;
    }

    // Reverse this vector.
    /**
     * @return {Vector} This for chaining.
     */
    reverse() {
        this["x"] = -this["x"];
        this["y"] = -this["y"];
        return this;
    }

    invert() {
        if (this.x === 0 || this.y === 0) {
            throw new Error("x and y must not be zero");
        }
        return new Vector(1 / this.x, 1 / this.y);
    }

    // Normalize this vector.  (make it have length of `1`)
    /**
     * @return {Vector} This for chaining.
     */
    normalize() {
        var d = this.len();
        if (d > 0) {
            this["x"] = this["x"] / d;
            this["y"] = this["y"] / d;
        }
        return this;
    }

    // Add another vector to this one.
    /**
     * @param {Vector} other The other Vector.
     * @return {Vector} This for chaining.
     */
    add(other: Vector | VectorLike): this {
        this["x"] += other["x"];
        this["y"] += other["y"];
        return this;
    }

    // Subtract another vector from this one.
    /**
     * @param {Vector} other The other Vector.
     * @return {Vector} This for chaiing.
     */
    sub(other: Vector): Vector {
        this["x"] -= other["x"];
        this["y"] -= other["y"];
        return this;
    }

    // Scale this vector. An independent scaling factor can be provided
    // for each axis, or a single scaling factor that will scale both `x` and `y`.
    /**
     * @param {number} x The scaling factor in the x direction.
     * @param {?number=} y The scaling factor in the y direction.  If this
     *   is not specified, the x scaling factor will be used.
     * @return {Vector} This for chaining.
     */
    scale(x: number, y?: number): Vector {
        this["x"] *= x;
        this["y"] *= typeof y !== "undefined" ? y : x;
        return this;
    }

    // Project this vector on to another vector.
    /**
     * @param {Vector} other The vector to project onto.
     * @return {Vector} This for chaining.
     */
    project(other: Vector): Vector {
        var amt = this.dot(other) / other.len2();
        this["x"] = amt * other["x"];
        this["y"] = amt * other["y"];
        return this;
    }

    // Project this vector onto a vector of unit length. This is slightly more efficient
    // than `project` when dealing with unit vectors.
    /**
     * @param {Vector} other The unit vector to project onto.
     * @return {Vector} This for chaining.
     */
    projectN(other: Vector): Vector {
        var amt = this.dot(other);
        this["x"] = amt * other["x"];
        this["y"] = amt * other["y"];
        return this;
    }

    // Reflect this vector on an arbitrary axis.
    /**
     * @param {Vector} axis The vector representing the axis.
     * @return {Vector} This for chaining.
     */
    reflect(axis: Vector): Vector {
        var x = this["x"];
        var y = this["y"];
        this.project(axis).scale(2);
        this["x"] -= x;
        this["y"] -= y;
        return this;
    }

    // Reflect this vector on an arbitrary axis (represented by a unit vector). This is
    // slightly more efficient than `reflect` when dealing with an axis that is a unit vector.
    /**
     * @param {Vector} axis The unit vector representing the axis.
     * @return {Vector} This for chaining.
     */
    reflectN(axis: Vector): Vector {
        var x = this["x"];
        var y = this["y"];
        this.projectN(axis).scale(2);
        this["x"] -= x;
        this["y"] -= y;
        return this;
    }

    // Get the dot product of this vector and another.
    /**
     * @param {Vector}  other The vector to dot this one against.
     * @return {number} The dot product.
     */
    dot(other: Vector): number {
        return this["x"] * other["x"] + this["y"] * other["y"];
    }

    // Get the squared length of this vector.
    /**
     * @return {number} The length^2 of this vector.
     */
    len2(): number {
        return this.dot(this);
    }

    // Get the length of this vector.
    /**
     * @return {number} The length of this vector.
     */
    len(): number {
        return Math.sqrt(this.len2());
    }

    // --------------------------------------------------------------------------------
    // # Calculation methods

    // 如果 this 表示尺寸（如 width/height）
    halfSize(): Vector {
        return new Vector(this.x / 2, this.y / 2);
    }

    // 如果 this 表示一个点，求与另一个点的中点
    midpointTo(other: Vector): Vector {
        return new Vector((this.x + other.x) / 2, (this.y + other.y) / 2);
    }

    /**
     * 计算两个向量之间的角度
     * @param {Vector} other - 另一个向量
     * @returns {number} 角度值，单位为弧度
     */
    angleTo(other: Vector): number {
        var dot = this.dot(other);
        var len1 = this.len();
        var len2 = other.len();
        var angle = Math.acos(dot / (len1 * len2));
        return angle;
    }

    /**
     * 计算两个向量之间的距离
     * @param {Vector} other - 另一个向量
     * @returns {number} 距离值，单位为像素
     */
    distanceTo(other: Vector): number {
        var x = this.x - other.x;
        var y = this.y - other.y;
        return Math.sqrt(x * x + y * y);
    }

    /** 取各分量绝对值 */
    abs(): Vector {
        return new Vector(Math.abs(this.x), Math.abs(this.y));
    }

    /** 分量最小值 */
    min(other: Vector): Vector {
        return new Vector(Math.min(this.x, other.x), Math.min(this.y, other.y));
    }

    /** 分量最大值 */
    max(other: Vector): Vector {
        return new Vector(Math.max(this.x, other.x), Math.max(this.y, other.y));
    }

    /** 叉积（2D 叉积结果为标量） */
    cross(other: Vector): number {
        return this.x * other.y - this.y * other.x;
    }

    /** 获取向量角度（弧度），相对于 X 轴正方向 */
    angle(): number {
        return Math.atan2(this.y, this.x);
    }

    // multiply= scale;
    multiply(other: number): Vector {
        return this.scale(other);
    }

    /**
     * 四舍五入
     * @returns {Vector}
     */
    round(): Vector {
        // return new Vector(Math.round(this.x), Math.round(this.y));
        this["x"] = Math.round(this["x"]);
        this["y"] = Math.round(this["y"]);
        return this;
    }

    /**
     * timeline.camera.setPosition(curFrameIndex, newCameraPos.x, newCameraPos.y);
     * 要求x,y必须为非0的整数
     * @returns {Vector}
     */
    noZero(): Vector {
        this["x"] = this["x"] ? this["x"] : 1;
        this["y"] = this["y"] ? this["y"] : 1;
        return this;
    }

    // equals
    /**
     * 相等
     * @param {Vector} other - 另一个向量
     * @returns {boolean}
     */
    equals(other: Vector): boolean {
        return this.x === other.x && this.y === other.y;
    }

    /**
     * 让一个点围绕另一个点沿椭圆轨道旋转
     * @param {Vector} pt - 要围绕的中心点
     * @param {Number} arcWidth - 椭圆轨道的宽度（水平方向的半径）
     * @param {Number} arcHeight - 椭圆轨道的高度（垂直方向的半径）
     * @param {Number} degrees - 旋转的角度（0 - 360 度）
     * @returns {Vector} - 返回当前点对象，其坐标已更新为旋转后的新位置
     */
    orbit(pt: Vector, arcWidth: number, arcHeight: number, degrees: number): Vector {
        // 将角度转换为弧度，因为 Math.cos 和 Math.sin 需要弧度作为输入
        var radians = degrees * (Math.PI / 180);

        // 根据椭圆参数方程计算新坐标
        // 水平方向（x）：以中心点 pt.x 为基准，加上椭圆宽度乘以角度的余弦值
        this.x = pt.x + arcWidth * Math.cos(radians);

        // 垂直方向（y）：以中心点 pt.y 为基准，加上椭圆高度乘以角度的正弦值
        this.y = pt.y + arcHeight * Math.sin(radians);

        // 返回当前点对象，其坐标已更新为旋转后的新位置
        return this;
    }

    //interpolate
    /**
     * 计算两个向量之间的插值
     * @param {Vector} other - 另一个向量
     * @param {number} f - 0-1之间的数值，表示插值比例
     * @returns {Vector} 两个向量的插值
     */
    interpolate(other: Vector, f?: number): Vector {
        f = typeof f === "undefined" ? 1 : f;
        return new Vector((this.x + other.x) * f, (this.y + other.y) * f);
    }

    private static readonly REGION_CHECKS: Record<
        RelativePosition,
        (dx: number, dy: number) => boolean
    > = {
        [RelativePosition.TopRight]: (dx, dy) => dx > 0 && dy < 0,
        [RelativePosition.TopLeft]: (dx, dy) => dx < 0 && dy < 0,
        [RelativePosition.BottomRight]: (dx, dy) => dx > 0 && dy > 0,
        [RelativePosition.BottomLeft]: (dx, dy) => dx < 0 && dy > 0,
        [RelativePosition.TopCenter]: (_dx, dy) => dy < 0, // 宽松：上方任意 x
        [RelativePosition.BottomCenter]: (_dx, dy) => dy > 0,
        [RelativePosition.LeftCenter]: (dx, _dy) => dx < 0,
        [RelativePosition.RightCenter]: (dx, _dy) => dx > 0,
        [RelativePosition.Center]: (dx, dy) => dx === 0 && dy === 0
    };

    /**
     * 判断当前点是否位于指定参考点的某个相对区域中。
     * 坐标系：x 向右为正，y 向下为正（如 Canvas / DOM）。
     * @param referencePoint 参考点
     * @param region 目标相对区域
     * @returns 若当前点落在该区域内，返回 true
     */
    isInRegionRelativeTo(referencePoint: Vector, region: RelativePosition): boolean {
        const dx = this.x - referencePoint.x;
        const dy = this.y - referencePoint.y;
        return Vector.REGION_CHECKS[region](dx, dy);
    }

    // --------------------------------------------------------------------------------
    // # Utility methods

    /**
     * 转换为符号向量
     * @returns {Vector}
     */
    toSignVector(): Vector {
        // Math.sign
        var x = Math.sign(this.x);
        var y = Math.sign(this.y);
        return new Vector(x, y);
    }

    /**
     * (-1)**n
     * @returns {Vector}
     */
    signPow(): Vector {
        this.x = Math.abs(this.x) & 1 ? -1 : 1;
        this.y = Math.abs(this.y) & 1 ? -1 : 1;
        return this;
    }

    // ----------------------------------------------------------------------------------------------------
    // # Static methods

    /**
     * Gets the interpolated distance in pixels from a source Vector a target Vector
     * 获取从源点到目标点的插值距离（像素）
     * @param    {Vector}        pt1            The source Vector
     * @param    {Vector}        pt2            The target Vector
     * @param    {Number}    f            A number from 0 to 1
     * @returns    {Vector}                The distance in pixels
     */
    static interpolate(pt1: Vector, pt2: Vector, f?: number): Vector {
        f = typeof f === "undefined" ? 1 : f;
        return new Vector((pt1.x + pt2.x) * f, (pt1.y + pt2.y) * f);
    }

    /**
     * Returns a new Vector, based on an angle around and length from the Origin (0, 0)
     * @param    {Number}    length        The length from the Origin
     * @param    {Number}    angle        The angle in degrees to rotate around the origin
     * @returns    {Vector}                    A new Vector object
     */
    static polar(length: number, angle: number): Vector {
        return new Vector(length * Math.sin(angle), length * Math.cos(angle));
    }

    /**
     * Gets the distance in pixels from a source Vector a target Vector
     * @param    {Vector}        pt1            The source Vector
     * @param    {Vector}        pt2            The target Vector
     * @returns    {Number}                The distance in pixels
     */
    static distance(pt1: Vector, pt2: Vector): number {
        var x = pt1.x - pt2.x;
        var y = pt1.y - pt2.y;
        return Math.sqrt(x * x + y * y);
    }

    // ----------------------------------------------------------------------------------------------------
    // # 工厂函数

    /** 从角度创建向量（静态工厂） */
    static fromAngle(angleRadians: number): Vector {
        return new Vector(Math.cos(angleRadians), Math.sin(angleRadians));
    }

    // ----------------------------------------------------------------------------------------------------
    // # from flash element

    static fromElement(element: FlashElement | VectorLike | Vector): Vector {
        return new Vector(element.x, element.y);
    }

    // ----------------------------------------------------------------------------------------------------
    // # Constants

    static readonly ZERO = new Vector(0, 0);
    static readonly ONE = new Vector(1, 1);
    static readonly LEFT = new Vector(-1, 0);
    static readonly RIGHT = new Vector(1, 0);
    static readonly UP = new Vector(0, -1);
    static readonly DOWN = new Vector(0, 1);
}
