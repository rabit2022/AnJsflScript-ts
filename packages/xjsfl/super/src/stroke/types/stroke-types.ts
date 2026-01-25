/**
 * @file: stroke-types.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */export interface IBaseStroke {
    breakAtCorners: boolean;
    capType: 'none' | 'round' | 'square';
    strokeHinting: boolean;
    style: 'noStroke' | 'solid' | 'dashed' | 'dotted' | 'ragged' | 'stipple' | 'hatched';
    thickness: number;
    color: string;
    shapeFill: {
        tag: number;
        color: string;
        style: string;
        matrix: {
            a: number;
            b: number;
            c: number;
            d: number;
            tx: number;
            ty: number;
        };
    };
    scaleType: 'normal' | 'horizontal' | 'vertical' | 'none';
    joinType: 'miter' | 'round' | 'bevel';
    miterLimit: number;
}

export interface IDashedStroke extends IBaseStroke {
    dash1: number;
    dash2: number;
}

export interface IDottedStroke extends IBaseStroke {
    dotSpace: number;
}

export interface IRaggedStroke extends IBaseStroke {
    pattern: 'solid' | 'simple' | 'random' | 'dotted' | 'random dotted' | 'triple dotted' | 'random triple dotted';
    waveHeight: 'flat' | 'wavy' | 'very wavy' | 'wild';
    waveLength: 'very short' | 'short' | 'medium' | 'long';
}

export interface IStippleStroke extends IBaseStroke {
    dotSize: 'tiny' | 'small' | 'medium' | 'large';
    variation: 'one size' | 'small variation' | 'varied sizes' | 'random sizes';
    density: 'very dense' | 'dense' | 'sparse' | 'very sparse';
}

export interface IHatchedStroke extends IBaseStroke {
    curve: 'straight' | 'slight curve' | 'medium curve' | 'very curved';
    hatchThickness: 'hairline' | 'thin' | 'medium' | 'thick';
    jiggle: 'none' | 'bounce' | 'loose' | 'wild';
    rotate: 'none' | 'slight' | 'medium' | 'free';
    length: 'equal' | 'slight variation' | 'medium variation' | 'random';
    space: 'very close' | 'close' | 'distant' | 'very distant';
}

export type StrokeType =
    | 'NoStroke'
    | 'SolidStroke'
    | 'DashedStroke'
    | 'DottedStroke'
    | 'RaggedStroke'
    | 'StippleStroke'
    | 'HatchedStroke';

export type StrokeInstance =
    | IBaseStroke
    | IDashedStroke
    | IDottedStroke
    | IRaggedStroke
    | IStippleStroke
    | IHatchedStroke;