/**
 * @file: builder-types.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import {IBaseStroke, IDashedStroke, IDottedStroke, IHatchedStroke, IRaggedStroke, IStippleStroke} from './stroke-types';

export interface IStrokeBuilder<T> {
    setBreakAtCorners(breakAtCorners: boolean): this;

    setCapType(capType: 'none' | 'round' | 'square'): this;

    setStrokeHinting(strokeHinting: boolean): this;

    setStyle(style: string): this;

    setThickness(thickness: number): this;

    setColor(color: string | number): this;

    setAlpha(alpha: number): this;

    setShapeFill(shapeFill: any): this;

    setScaleType(scaleType: 'normal' | 'horizontal' | 'vertical' | 'none'): this;

    setJoinType(joinType: 'miter' | 'round' | 'bevel'): this;

    setMiterLimit(miterLimit: number): this;

    build(): T;
}

export interface IDashedStrokeBuilder extends IStrokeBuilder<IDashedStroke> {
    setDash1(dash1: number): this;

    setDash2(dash2: number): this;
}

export interface IDottedStrokeBuilder extends IStrokeBuilder<IDottedStroke> {
    setDotSpace(dotSpace: number): this;
}

export interface IRaggedStrokeBuilder extends IStrokeBuilder<IRaggedStroke> {
    setPattern(pattern: 'solid' | 'simple' | 'random' | 'dotted' | 'random dotted' | 'triple dotted' | 'random triple dotted'): this;

    setWaveHeight(waveHeight: 'flat' | 'wavy' | 'very wavy' | 'wild'): this;

    setWaveLength(waveLength: 'very short' | 'short' | 'medium' | 'long'): this;
}

export interface IStippleStrokeBuilder extends IStrokeBuilder<IStippleStroke> {
    setDotSize(dotSize: 'tiny' | 'small' | 'medium' | 'large'): this;

    setVariation(variation: 'one size' | 'small variation' | 'varied sizes' | 'random sizes'): this;

    setDenensity(density: 'very dense' | 'dense' | 'sparse' | 'very sparse'): this;
}

export interface IHatchedStrokeBuilder extends IStrokeBuilder<IHatchedStroke> {
    setCurve(curve: 'straight' | 'slight curve' | 'medium curve' | 'very curved'): this;

    setHatchThickness(hatchThickness: 'hairline' | 'thin' | 'medium' | 'thick'): this;

    setJiggle(jiggle: 'none' | 'bounce' | 'loose' | 'wild'): this;

    setRotate(rotate: 'none' | 'slight' | 'medium' | 'free'): this;

    setLength(length: 'equal' | 'slight variation' | 'medium variation' | 'random'): this;

    setSpace(space: 'very close' | 'close' | 'distant' | 'very distant'): this;
}

export type StrokeBuilderType =
    | 'NoStrokeBuilder'
    | 'SolidStrokeBuilder'
    | 'DashedStrokeBuilder'
    | 'DottedStrokeBuilder'
    | 'RaggedStrokeBuilder'
    | 'StippleStrokeBuilder'
    | 'HatchedStrokeBuilder';

export type StrokeBuilderInstance =
    | IStrokeBuilder<IBaseStroke>
    | IDashedStrokeBuilder
    | IDottedStrokeBuilder
    | IRaggedStrokeBuilder
    | IStippleStrokeBuilder
    | IHatchedStrokeBuilder;