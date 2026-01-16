// ------------------------------------------------------------------------------------------------------------------------
//  ______     ______     ______     ______   ______     __   __     ______
// /\  == \   /\  ___\   /\  ___\   /\__  _\ /\  __ \   /\ "-.\ \   /\  ___\
// \ \  __<   \ \  __\   \ \ \____  \/_/\ \/ \ \  __ \  \ \ \-.  \  \ \ \__ \
//  \ \_\ \_\  \ \_____\  \ \_____\    \ \_\  \ \_\ \_\  \ \_\\"\_\  \ \_____\
//   \/_/ /_/   \/_____/   \/_____/     \/_/   \/_/\/_/   \/_/ \/_/   \/_____/
//
//  __         ______
// /\ \       /\  ___\
// \ \ \____  \ \  __\
//  \ \_____\  \ \_____\
//   \/_____/   \/_____/
//
// ------------------------------------------------------------------------------------------------------------------------
// Bounds
//
// Represents a rectangle with `left`, `top`, `right`, and `bottom` properties.


import {SObject} from "../../base/SObject";
import {Vector} from "../Vector";
import {RelativePosition} from "../../enum/vectorEnums";
import {InsetDirection, RectanglePart} from "../../enum/boundsEnum";
import {BoundsLike} from "../../types/boundsType";
import {VectorLike} from "../../types/vectorType";
import {IsBoundsLike} from "../../check/boundsCheck";
import {Size} from "../Transform/Size";
import {SizeLike} from "../../types/sizeType";
import {IsVectorLike} from "../../check/vectorCheck";

export class Bounds extends SObject implements BoundsLike {
    public left = 0;
    public top = 0;
    public right = 0;
    public bottom = 0;

    // ===== 构造器重载签名（仅用于类型检查）=====
    constructor();
    constructor(rect: BoundsLike);
    constructor(doc: FlashDocument);
    constructor(element: FlashElement | FlashSymbolItem);
    constructor(radius: number);
    constructor(elements: FlashElement[]);
    constructor(width: number, height: number);
    constructor(centerPos: VectorLike, radius: number);
    constructor(left: number, top: number, right: number, bottom: number);

    // ===== 实际构造器实现 =====
    constructor(...args: any[]) {
        super(); // 调用 SObject 构造器
        // console.log("args",args);

        const $dom = fl.getDocumentDOM();

        switch (args.length) {
            case 0:
                this.left = 0;
                this.top = 0;
                this.right = $dom.width;
                this.bottom = $dom.height;
                break;

            case 1: {
                const arg = args[0];
                // if (arg instanceof Bounds || IsBoundsLike(arg)) {
                //     this.copy(arg);
                // }
                if (arg instanceof Bounds) {
                    this.copy(arg); // 复制 SObject
                } else if (IsBoundsLike(arg)) {
                    this.assign(arg); // 赋值 plain object
                } else if (typeof arg === 'number') {
                    // radius
                    this.left = -arg;
                    this.top = -arg;
                    this.right = arg;
                    this.bottom = arg;
                } else if (Array.isArray(arg) ) {
                    const rect = findBoundingRectangle(arg as FlashElement[]);
                    this.copy(rect);
                } else if (typeof arg === 'object') {
                    if (arg  === null){
                        throw new Error('Invalid argument 1');
                    }
                    else if ('width' in arg && 'left' in arg) {
                        // FlashElement or FlashSymbolItem
                        this.left = arg.left;
                        this.top = arg.top;
                        this.right = arg.left + arg.width;
                        this.bottom = arg.top + arg.height;
                    }
                    // 假设是 FlashDocument
                    else if ('width' in arg && 'height' in arg) {
                        // FlashDocument
                        this.left = 0;
                        this.top = 0;
                        this.right = (arg as FlashDocument).width;
                        this.bottom = (arg as FlashDocument).height;
                    } else  {
                        throw new Error('Invalid argument 1');
                    }
                } else {
                    throw new Error('Invalid argument 1');
                }
                break;
            }

            case 2: {
                const [a, b] = args;

                if (typeof a === 'number' && typeof b === 'number') {
                    // width, height
                    this.left = 0;
                    this.top = 0;
                    this.right = a;
                    this.bottom = b;
                } else if ((a as VectorLike).x !== undefined && typeof b === 'number') {
                    // center, radius
                    const radiusRect = new Bounds(b);
                    const finalRect =  radiusRect.addOffset(a)
                    this.copy(finalRect);
                } else {
                    throw new Error('Invalid arguments for 2-arg constructor');
                }
                break;
            }

            case 4: {
                this.left = args[0];
                this.top = args[1];
                this.right = args[2];
                this.bottom = args[3];
                break;
            }

            default:
                throw new Error(`Unsupported number of arguments: ${args.length}`);
        }
    }

    // ===== property =====
    get width(): number {
        return this.right - this.left;
    }

    get height(): number {
        return this.bottom - this.top;
    }

    // get center(): Vector {
    //     return this.centerVector; // 确保这个方法存在
    // }

    /**
     * 矩形中心点
     * @returns {Vector} 点
     */
    get center(): Vector {
        return new Vector((this.left + this.right) / 2, (this.top + this.bottom) / 2);
    };

    get size(): Size {
        return new Size(this.width, this.height);
    };


    /**
     * 矩形 偏移后的 矩形
     * 移动矩形的边界
     * @param {Number|Vector|Bounds} offset 偏移量
     * @returns {Bounds} 矩形
     */
    addOffset(offset: number | Vector | Bounds): Bounds {
        if (typeof offset === "number") {
            offset = new Bounds(offset, offset, offset, offset);
        } else if (IsVectorLike(offset)) {
            offset = new Bounds(offset.x, offset.y, offset.x, offset.y);
        }
        return new Bounds(this.left + offset.left, this.top + offset.top, this.right + offset.right, this.bottom + offset.bottom);
    };

    /**
     * 矩形 偏移前的 矩形
     * 移动矩形的边界
     * @param {Number|Vector|Bounds} offset 偏移量
     * @returns {Bounds} 矩形
     */
    subOffset(offset: number | Vector | Bounds): Bounds {
        if (typeof offset === "number") {
            offset = new Bounds(offset, offset, offset, offset);
        } else if (offset instanceof Vector) {
            offset = new Bounds(offset.x, offset.y, offset.x, offset.y);
        }
        return new Bounds(this.left - offset.left, this.top - offset.top, this.right - offset.right, this.bottom - offset.bottom);
    };

    /**
     * 根据方向和大小生成偏移矩形（用于 expand/shrink）
     */
    private static createDirectionalOffset(size: number, direction: InsetDirection): Bounds {
        const offset = new Bounds(0, 0, 0, 0); // left, top, right, bottom

        switch (direction) {
            case InsetDirection.Left:
                offset.left = -size;
                break;
            case InsetDirection.Top:
                offset.top = -size;
                break;
            case InsetDirection.Right:
                offset.right = size;
                break;
            case InsetDirection.Bottom:
                offset.bottom = size;
                break;
            case InsetDirection.All:
                offset.left = -size;
                offset.top = -size;
                offset.right = size;
                offset.bottom = size;
                break;
            default:
                throw new Error(`Invalid direction: ${direction satisfies never}`);
        }

        return offset;
    }

    /**
     * 扩大矩形的边界
     * @param size 扩大量（正值）
     * @param whichDirection 扩展方向，默认为所有方向
     * @returns 新的 Bounds 对象
     */
    expand(size: number, whichDirection: InsetDirection = InsetDirection.All): Bounds {
        const offset = Bounds.createDirectionalOffset(size, whichDirection);
        return this.addOffset(offset);
    }

    /**
     * 缩小矩形的边界
     * @param size 缩小量（正值）
     * @param whichDirection 收缩方向，默认为所有方向
     * @returns 新的 Bounds 对象
     */
    shrink(size: number, whichDirection: InsetDirection = InsetDirection.All): Bounds {
        const offset = Bounds.createDirectionalOffset(size, whichDirection);
        return this.subOffset(offset);
    }



    /**
     * 是否包含,当前矩形 是否 在 目标矩形 内部
     * @param {Bounds} rect 矩形
     * @returns {boolean} 包含返回true，否则返回false
     */
    contains(rect: Bounds): boolean {
        return (this.left <= rect.left && this.top <= rect.top && this.right >= rect.right && this.bottom >= rect.bottom);
    };

    /**
     * 获取矩形指定相对位置的坐标点
     * @param whichCorner 相对位置（角点、边中点或中心）
     * @returns 对应位置的向量坐标
     */
    getCorner(whichCorner: RelativePosition): Vector {
        const {left, right, top, bottom} = this;
        const centerX = (left + right) / 2;
        const centerY = (top + bottom) / 2;

        switch (whichCorner) {
            case RelativePosition.TopRight:
                return new Vector(right, top);
            case RelativePosition.TopLeft:
                return new Vector(left, top);
            case RelativePosition.BottomRight:
                return new Vector(right, bottom);
            case RelativePosition.BottomLeft:
                return new Vector(left, bottom);
            case RelativePosition.TopCenter:
                return new Vector(centerX, top);
            case RelativePosition.RightCenter:
                return new Vector(right, centerY);
            case RelativePosition.BottomCenter:
                return new Vector(centerX, bottom);
            case RelativePosition.LeftCenter:
                return new Vector(left, centerY);
            case RelativePosition.Center:
                return new Vector(centerX, centerY);
            default:
                // TypeScript 会提示 exhaustive check，但保留运行时防护
                throw new Error(`Invalid RelativePosition: ${whichCorner satisfies never}`);
        }
    }

    /**
     * 获取矩形的某个部分
     *
     * 该方法根据指定的 `whichPart` 参数，从当前矩形中提取一个子矩形。
     * 子矩形的大小和位置由 `whichPart` 和比例参数（`widthRatio` 和 `heightRatio`）决定。
     *
     * @param whichPart - 要提取的部分（角点、边或中心）
     * @param widthRatio - 宽度比例（0～1），默认 0.5
     * @param heightRatio - 高度比例（0～1），默认等于 widthRatio
     * @returns 新的 Bounds 子矩形
     * @throws {Error} 如果 whichPart 无效
     */
    getPart(whichPart: RectanglePart, widthRatio: number = 0.5, heightRatio: number = widthRatio): Bounds {
        const {left, right, top, bottom, width, height} = this;
        const centerX = (left + right) / 2;
        const centerY = (top + bottom) / 2;

        // 计算子矩形尺寸
        const partWidth = width * widthRatio;
        const partHeight = height * heightRatio;

        // 剩余空间（用于右/下对齐）
        const invWidth = width - partWidth;
        const invHeight = height - partHeight;

        // 半宽高（用于居中）
        const halfW = partWidth / 2;
        const halfH = partHeight / 2;

        switch (whichPart) {
            // —————— 角点 ——————
            case RectanglePart.TopRight:
                return new Bounds(right - invWidth, top, right, top + partHeight);
            case RectanglePart.TopLeft:
                return new Bounds(left, top, left + partWidth, top + partHeight);
            case RectanglePart.BottomRight:
                return new Bounds(right - invWidth, bottom - invHeight, right, bottom);
            case RectanglePart.BottomLeft:
                return new Bounds(left, bottom - invHeight, left + partWidth, bottom);

            // —————— 边中点 ——————
            case RectanglePart.TopCenter:
                return new Bounds(centerX - halfW, top, centerX + halfW, top + partHeight);
            case RectanglePart.RightCenter:
                return new Bounds(right - invWidth, centerY - halfH, right, centerY + halfH);
            case RectanglePart.BottomCenter:
                return new Bounds(centerX - halfW, bottom - partHeight, centerX + halfW, bottom);
            case RectanglePart.LeftCenter:
                return new Bounds(left, centerY - halfH, left + partWidth, centerY + halfH);

            // —————— 中心 ——————
            case RectanglePart.Center:
                return new Bounds(centerX - halfW, centerY - halfH, centerX + halfW, centerY + halfH);

            // —————— 整条边 ——————
            case RectanglePart.Top:
                return new Bounds(left, top, right, top + partHeight);
            case RectanglePart.Right:
                return new Bounds(right - invWidth, top, right, bottom);
            case RectanglePart.Bottom:
                return new Bounds(left, bottom - partHeight, right, bottom);
            case RectanglePart.Left:
                return new Bounds(left, top, left + partWidth, bottom);

            // —————— 防御性编程 ——————
            default:
                // TypeScript exhaustive check + 运行时防护
                throw new Error(`Invalid RectanglePart: ${whichPart satisfies never}`);
        }
    }

// --------------------------------------------------------------------------------
// # Utility methods

    /**
     * 合并两个矩形，返回一个能够包含两个矩形的最小矩形。
     * @param {Bounds} other - 要合并的另一个矩形。
     * @return {Bounds} 合并后的矩形。
     */
    union(other: Bounds): Bounds {
        // 计算合并后的矩形的左上角和右下角坐标
        const minLeft = Math.min(this.left, other.left);
        const minTop = Math.min(this.top, other.top);
        const maxRight = Math.max(this.right, other.right);
        const maxBottom = Math.max(this.bottom, other.bottom);

        return new Bounds(minLeft, minTop, maxRight, maxBottom);
    };

    /**
     * 旋转矩形
     * @param angle 旋转角度（度）
     * @param whichCorner 旋转中心点，默认为矩形中心
     * @returns 旋转后的新矩形边界（轴对齐包围盒 AABB）
     */
    rotate(angle: number, whichCorner: RelativePosition = RelativePosition.Center): Bounds {
        // 将角度转换为弧度
        const radians = angle * (Math.PI / 180);

        // 获取旋转中心点（类型安全！）
        const center = this.getCorner(whichCorner);

        // 获取四个角点（全部使用枚举！）
        const topLeft = this.getCorner(RelativePosition.TopLeft);
        const topRight = this.getCorner(RelativePosition.TopRight);
        const bottomLeft = this.getCorner(RelativePosition.BottomLeft);
        const bottomRight = this.getCorner(RelativePosition.BottomRight);

        // 辅助函数：绕 center 旋转一个点
        const rotatePoint = (point: Vector): Vector => {
            return point.sub(center).rotate(radians).add(center);
        };

        // 旋转四个顶点
        const points = [
            rotatePoint(topLeft),
            rotatePoint(topRight),
            rotatePoint(bottomRight),
            rotatePoint(bottomLeft),
        ];

        // 从旋转后的点集计算新的轴对齐包围盒
        return Bounds.fromVectors(points);
    }

// --------------------------------------------------------------------------------
// # 工厂


    static fromTopLeft(left: number, top: number, width: number, height: number): Bounds

    static fromTopLeft(leftTop: Vector | VectorLike, size: Size | SizeLike): Bounds

    /**
     * 由左上角坐标和宽高创建矩形
     * @returns {Bounds} 矩形对象
     */
    static fromTopLeft(...args: any[]): Bounds {
        // variables
        // const args = arguments;
        switch (args.length) {
            // topLeft,size
            case 2:
                const topLeft = args[0];
                const size = args[1];
                return this.fromTopLeft(topLeft.x, topLeft.y, size.width, size.height);
                break;
            case 4:
                const left = args[0];
                const top = args[1];
                const width = args[2];
                const height = args[3];
                return new Bounds(left, top, left + width, top + height);
                break;
            default:
                throw new Error("Invalid arguments");
        }

    }


    static fromCenter(centerX: number, centerY: number, width: number, height: number): Bounds

    static fromCenter(center: Vector | VectorLike, size: Size | SizeLike): Bounds

    /**
     * 由中心点坐标和宽高创建矩形
     * @returns 矩形对象
     */
    static fromCenter(...args: any[]) {
        // const args = arguments;
        switch (args.length) {
            // center,size
            case 2:
                const center = args[0];
                const size = args[1];
                return this.fromCenter(center.x, center.y, size.width, size.height);
            // centerX,centerY,width,height
            case 4:
                const centerX = args[0];
                const centerY = args[1];
                const width = args[2];
                const height = args[3];
                return new Bounds(centerX - width / 2, centerY - height / 2, centerX + width / 2, centerY + height / 2);

            default:
                throw new Error("Invalid arguments");
        }
    }


    static fromVectors(vectors: Vector[]): Bounds {
        // 创建一个初始矩形
        const rect = new Bounds(0, 0, 0, 0);

        // 遍历所有向量，更新矩形的边界
        for (let i = 0; i < vectors.length; i++) {
            const vector = vectors[i];

            // 在第一次迭代时初始化矩形的边界
            if (i === 0) {
                rect.left = vector.x;
                rect.top = vector.y;
                rect.right = vector.x;
                rect.bottom = vector.y;
            } else {
                // 更新矩形的边界
                rect.left = Math.min(rect.left, vector.x);
                rect.top = Math.min(rect.top, vector.y);
                rect.right = Math.max(rect.right, vector.x);
                rect.bottom = Math.max(rect.bottom, vector.y);
            }
        }
        return rect;
    };

    static fromRects(rects: Bounds[]): Bounds {
        // 创建一个初始矩形
        const rect = new Bounds(0, 0, 0, 0);

        // 遍历所有矩形，更新矩形的边界
        for (let i = 0; i < rects.length; i++) {
            const r = rects[i];

            // 在第一次迭代时初始化矩形的边界
            if (i === 0) {
                rect.left = r.left;
                rect.top = r.top;
                rect.right = r.right;
                rect.bottom = r.bottom;
            } else {
                // 更新矩形的边界
                rect.left = Math.min(rect.left, r.left);
                rect.top = Math.min(rect.top, r.top);
                rect.right = Math.max(rect.right, r.right);
                rect.bottom = Math.max(rect.bottom, r.bottom);
            }
        }
        return rect;

    };

    //  findBoundingRectangle
    static fromElements(elements: Array<FlashElement>): Bounds {
        return findBoundingRectangle(elements)
    }

}

/**
 * Finds the smallest rectangle that contains all the given points.
 *
 * @param   elements - An array of Elements.
 * @return  The smallest rectangle that contains all the points.
 */
function findBoundingRectangle(elements: Array<FlashElement>): Bounds {
    if (!elements.length) {
        // return null; // 如果数组为空，返回null
        throw new Error('findBoundingRectangle: elements array is empty');
    }

    let top = elements[0].top;
    let left = elements[0].left;
    let right = elements[0].left + elements[0].width;
    let bottom = elements[0].top + elements[0].height;

    for (let i = 1; i < elements.length; i++) {
        const element = elements[i];
        const elementTop = element.top;
        const elementLeft = element.left;
        const elementRight = element.left + element.width;
        const elementBottom = element.top + element.height;

        if (elementTop < top) top = elementTop;
        if (elementLeft < left) left = elementLeft;
        if (elementRight > right) right = elementRight;
        if (elementBottom > bottom) bottom = elementBottom;
    }

    return new Bounds(left, top, right, bottom);
}





