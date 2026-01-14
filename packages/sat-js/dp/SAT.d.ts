// SAT.js - Version 0.9.0
// Copyright 2012 - 2021 - Jim Riecken <jimr@jimr.ca>
// Released under the MIT License.

declare namespace sat {

    interface SObjectLike {
    }
    


    interface SizeLike extends SObjectLike {
        width: number
        height: number
    }

    /**
     * This is a simple size class,Size has two parameters {width},{height}.
     */
    export class Size extends SizeLike, SObject<Size> {
        readonly max_size: number
        readonly min_size: number
        readonly ratio: number

        constructor(width: number, height: number)

        add(size: Size): Size

        sub(size: Size): Size

        getRatioWidth(nowHeight: number): number

        getRatioHeight(nowWidth: number): number

        toVector(): Vector

        static from(element: Element | Document | Size | SizeLike): Size
    }


    interface SkewLike extends SObjectLike {
        skewX: number
        skewY: number
    }

    /**
     * This is a simple skew class,Skew has two parameters {skewX},{skewY}.
     */
    export class Skew extends SkewLike, SObject<Skew> {
        constructor(skewX: number, skewY: number)

        toVector(): Vector

        static from(element: Element | SkewLike | Skew): Skew
    }

    interface TransformLike extends SObjectLike {
        rotation: number
        scale: ScaleLike
        position: VectorLike
        size: SizeLike
        skew: SkewLike
    }

    /**
     * This is a simple transform class,Transform has six parameters {rotation},{scale},{position},{size},{skew}.
     */
    export class Transform extends TransformLike, SObject<Transform> {
        element: Element

        constructor(element: Element)

        setRotation(rotation: number): this

        setScale(scale: Scale | ScaleLike): this

        setPosition(position: Vector | VectorLike): this

        setSize(size: Size | SizeLike): this

        setSkew(skew: Skew | SkewLike): this

        moveSelectionBy(distanceToMove: VectorLike | Vector): this

        static from(element: Element): Transform
    }

    interface FrameRangeLike extends SObjectLike {
        layerIndex: number
        startFrame: number
        endFrame: number
    }

    /**
     * This is a simple frame range class,FrameRange has three parameters {layerIndex},{startFrame},{endFrame}.
     */
    export class FrameRange extends FrameRangeLike, SObject<FrameRange> {
        readonly duration: number

        constructor(layerIndex: number, startFrame: number, endFrame?: number)

        intersects(other: FrameRange): boolean

        contain(fr2: FrameRange): boolean

        contain(frameIndex: number): boolean

        toArray(): [number, number, number]

        getFirstFrame(): FrameRange
    }

    /**
     * This is a FrameRangeList class,FrameRangeList is an array of FrameRange.
     */
    export class FrameRangeList extends Array<FrameRange>, SObject<FrameRangeList> {
        readonly firstSlFrameIndex: number | null // 第一个选中帧的索引
        readonly firstSlLayerIndex: number | null // 第一个选中图层的索引
        readonly firstSlLayer: Layer | null // 第一个选中图层对象
        readonly firstSlFrame: Frame | null // 第一个选中帧对象

        constructor()

        /**
         * @deprecated use {@link Timeline.prototype.getSelectedLayers} instead.
         */
        getUniqueLayerIndexes(): number[]
    }

    interface LineSegmentLike extends SObjectLike {
        startPoint: VectorLike
        endPoint: VectorLike
    }

    /**
     * This is a simple line segment class,LineSegment has two parameters {startPoint},{endPoint}.
     */
    export class LineSegment extends LineSegmentLike, SObject<LineSegment> {
        constructor(startPoint: Vector, endPoint: Vector)

        getBounds(): Bounds

        getCenter(): Vector

        getLength(): number

        getAngle(): number

        getNormal(): Vector

        getPointAt(t: number): Vector

        getNearestPointTo(point: Vector): Vector

        getDistanceToPoint(point: Vector): number

        toVector(): Vector

        static from(startPoint: Vector, direction: DirectionType, distance: number): LineSegment
    }


    interface ElementBoundsLike extends SObjectLike {
        left: number,
        top: number,
        width: number,
        height: number
    }

    interface CircleLike extends SObjectLike {
        pos: VectorLike
        r: number
    }

    export class Circle extends CircleLike, SObject<Circle> {
        readonly d: number

        constructor(pos?: Vector, r?: number)

        getBounds(): Bounds

        getArea(): number

        getCentroid(): Vector

        getDistanceToPoint(point: Vector): number

        getDistanceToSegment(segment: LineSegment): number

        containsPoint(point: Vector): boolean

        toVector(): Vector
    }

    export namespace ENTITY {
        export class ELEMENT {
            static getOrigin(): Vector

            static getTopLeft(element: ElementBoundsLike | Element): Vector
        }

        export class SYMBOL {
            static getCenter(element: ElementBoundsLike | Element): Vector

            static getBounds(element: ElementBoundsLike | Element): Bounds

            static getSize(element: ElementBoundsLike | Element): Size
        }

        export class STAGE {
            static getCenter(): Vector

            static getBounds(): Bounds

            static getSize(): Size
        }

        export class CAMERA {
            static getBounds(timeline: Timeline, frameIndex: number): Bounds

            static getCenter(timeline: Timeline, frameIndex: number): Vector
        }
    }

    /**
     * @deprecated use {@link ENTITY} instead.
     */
    export namespace GLOBALS {
        /**
         * @deprecated use {@link Vector.from} instead.
         */
        export function wrapPosition(element: VectorLike | Element | Vector): Vector

        /**
         * @deprecated use {@link ENTITY.ELEMENT.getOrigin} instead.
         */
        export function getOrigin(): Vector

        /**
         * @deprecated use {@link ENTITY.ELEMENT.getTopLeft} instead.
         */
        export function getTopLeft(element: ElementBoundsLike | Element): Vector

        /**
         * @deprecated use {@link ENTITY.SYMBOL.getCenter} instead.
         */
        export function getSymbolCenter(element: ElementBoundsLike | Element): Vector

        /**
         * @deprecated use {@link ENTITY.STAGE.getCenter} instead.
         */
        export function getStageCenter(): Vector

        /**
         * @deprecated use {@link ENTITY.STAGE.getBounds} instead.
         */
        export function getStageBounds(): Bounds

        /**
         * @deprecated use {@link ENTITY.STAGE.getBounds} instead.
         */
        export const getStageRect: typeof getStageBounds

        /**
         * @deprecated use {@link ENTITY.SYMBOL.getBounds} instead.
         */
        export function getSymbolBounds(element: ElementBoundsLike | Element): Bounds

        /**
         * @deprecated use {@link ENTITY.SYMBOL.getBounds} instead.
         */
        export const getSymbolRect: typeof getSymbolBounds

        /**
         * @deprecated use {@link ENTITY.STAGE.getSize} instead.
         */
        export function getStageSize(): Size

        /**
         * @deprecated use {@link ENTITY.CAMERA.getBounds} instead.
         */
        export function getCameraRect(timeline: Timeline, frameIndex: number): Bounds

        /**
         * @deprecated use {@link ENTITY.CAMERA.getBounds} instead.
         */
        export const getCameraBounds: typeof getCameraRect

        /**
         * @deprecated use {@link ENTITY.CAMERA.getCenter} instead.
         */
        export function getCameraCenter(timeline: Timeline, frameIndex: number): Vector


        /**
         * @deprecated use {@link Bounds.fromTopLeft} instead.
         */
        export function wrapRectByTopLeft(
            left: number,
            top: number,
            width: number,
            height: number
        ): Bounds
        /**
         * @deprecated use {@link Bounds.fromTopLeft} instead.
         */
        export function wrapRectByTopLeft(
            leftTop: Vector | VectorLike,
            size: Size | SizeLike
        ): Bounds

        /**
         * @deprecated use {@link Bounds.fromCenter} instead.
         */
        export function wrapRectByCenter(
            centerX: number,
            centerY: number,
            width: number,
            height: number
        ): Bounds
        /**
         * @deprecated use {@link Bounds.fromCenter} instead.
         */
        export function wrapRectByCenter(
            center: Vector | VectorLike,
            size: Size | SizeLike
        ): Bounds

        /**
         * @deprecated use {@link Size.from} instead.
         */
        export function wrapSize(element: Element | Document | Size | SizeLike): Size

        /**
         * @deprecated use {@link Transform.from} instead.
         */
        export function wrapTransform(element: Element): Transform
    }

    /**
     * This is a Check namespace,it contains some check functions.
     */
    export namespace CHECk {
        export function IsRectangleLike(obj: any): boolean

        export function IsSizeLike(obj: any): boolean

        export function IsVectorLike(obj: any): boolean

        export function IsTransformLike(obj: any): boolean

        export function IsFrameRangeLike(obj: any): boolean

        export function IsElementBoundsLike(obj: any): boolean

        export function IsScaleLike(obj: any): boolean

        export function IsSkewLike(obj: any): boolean

        export function IsLineSegmentLike(obj: any): boolean

        export function IsCircleLike(obj: any): boolean
    }

    export namespace TYPES {
        export type T_Element = Element
        export type T_Vector = Vector
        export type T_Rectangle = Bounds
        export type T_Size = Size
        export type T_Transform = Transform
        export type T_FrameRange = FrameRange
        export type T_Scale = Scale
        export type T_Skew = Skew
        export type T_LineSegment = LineSegment
        export type T_Circle = Circle
    }


    // 别名
    export { Vector as V }
    export { Bounds as R }
    export { Size as S }
    export { Transform as TR } // T与泛型冲突
    export { FrameRange as FR }
    export { FrameRangeList as FRL }
    export { Scale as SC }
    export { Skew as SK }
    export { LineSegment as LS }
    export { Circle as C }
}

declare module "SAT" {
    export = sat
}


