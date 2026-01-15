// ------------------------------------------------------------------------------------------------------------------------
//  ______   ______     ______     __   __     ______     ______   ______
// /\__  _\ /\  == \   /\  __ \   /\ "-.\ \   /\  ___\   /\  ___\ /\  __ \
// \/_/\ \/ \ \  __<   \ \  __ \  \ \ \-.  \  \ \___  \  \ \  __\ \ \ \/\ \
//    \ \_\  \ \_\ \_\  \ \_\ \_\  \ \_\\"\_\  \/\_____\  \ \_\    \ \_____\
//     \/_/   \/_/ /_/   \/_/\/_/   \/_/ \/_/   \/_____/   \/_/     \/_____/
//
//  ______     __    __
// /\  == \   /\ "-./  \
// \ \  __<   \ \ \-./\ \
//  \ \_\ \_\  \ \_\ \ \_\
//   \/_/ /_/   \/_/  \/_/
//
// ------------------------------------------------------------------------------------------------------------------------
// Transform
//
// Represents a transform with `rotation`, `scale`, `position`, `size`, and `skew` properties.
import {SObject} from "../../base/SObject";
import {TransformLike} from "../../types/transformType";
import {ScaleLike} from "../../types/scaleType";
import {VectorLike} from "../../types/vectorType";
import {SizeLike} from "../../types/sizeType";
import {SkewLike} from "../../types/skewType";
import {Size} from "./Size";
import {Skew} from "./Skew";
import {Scale} from "./Scale";
import {IsVectorLike} from "../../check/vectorCheck";
import {IsScaleLike} from "../../check/scaleCheck";
import {IsSkewLike} from "../../check/skewCheck";
import {IsSizeLike} from "../../check/sizeCheck";
import {Vector} from "../Vector";

export class Transform extends SObject implements TransformLike {
    public rotation: number
    public scale: Scale
    public position: Vector
    public size: Size
    public skew: Skew


    element: FlashElement

    constructor(element: FlashElement) {
        super();

        this.element = element;
        // 旋转
        this.rotation = element.rotation;
        // 缩放
        this.scale = new Scale(element.scaleX, element.scaleY);
        // 位置
        this.position = new Vector(element.x, element.y);
        // 宽高
        this.size = new Size(element.width, element.height);
        // 倾斜
        this.skew = new Skew(element.skewX, element.skewY);
    }

    setRotation(rotation: number): this {
        this.element.rotation = rotation;
        this.rotation = rotation;
        return this;
    };

    setScale(scale: Scale | ScaleLike): this {
        let finalScale: Scale;

        if (scale instanceof Scale) {
            finalScale = scale;
        } else if (IsVectorLike(scale)) {
            finalScale = new Scale(scale.x, scale.y);
        } else if (IsScaleLike(scale)) {
            finalScale = new Scale(scale.scaleX, scale.scaleY);
        } else {
            throw new Error('Invalid scale input: must be Scale, ScaleLike, or VectorLike');
        }

        this.element.scaleX = finalScale.scaleX;
        this.element.scaleY = finalScale.scaleY;
        this.scale = finalScale;

        return this;
    }

    setPosition(position: Vector | VectorLike): this {
        let finalPosition: Vector;
        if (position instanceof Vector) {
            finalPosition = position;
        } else if (IsVectorLike(position)) {
            finalPosition = new Vector(position.x, position.y);
        } else {
            throw new Error('Invalid position input: must be VectorLike');
        }

        this.element.x = finalPosition.x;
        this.element.y = finalPosition.y;
        this.position = finalPosition; // ✅ 安全：一定是 Vector 实例
        return this;
    }

    setSize(size: Size | SizeLike): this {

        let finalSize: Size;
        if (size instanceof Size) {
            finalSize = size;
        } else if (IsVectorLike(size)) {
            finalSize = new Size(size.x, size.y);
        } else if (IsSizeLike(size)) {
            finalSize = new Size(size.width, size.height);
        } else {
            throw new Error('Invalid size input: must be VectorLike');
        }

        this.element.width = finalSize.width;
        this.element.height = finalSize.height;
        this.size = finalSize; // ✅ 安全：一定是 Size 实例
        return this;
    }

    setSkew(skew: Skew | SkewLike): this {
        let finalSkew: Skew;

        if (skew instanceof Skew) {
            finalSkew = skew;
        } else if (IsVectorLike(skew)) {
            finalSkew = new Skew(skew.x, skew.y);
        } else if (IsSkewLike(skew)) {
            finalSkew = new Skew(skew.skewX, skew.skewY);
        } else {
            throw new Error('Invalid skew input');
        }

        this.element.skewX = finalSkew.skewX;
        this.element.skewY = finalSkew.skewY;
        this.skew = finalSkew; // ✅ 安全：一定是 Skew 实例
        return this;
    }

    moveSelectionBy(distanceToMove: VectorLike | Vector): this {
        this.element.x += distanceToMove.x;
        this.element.y += distanceToMove.y;
        this.position = this.position.clone().add(distanceToMove);
        return this;
    };

    static fromElement(element: FlashElement): Transform {
        return new Transform(element);
    }
}



