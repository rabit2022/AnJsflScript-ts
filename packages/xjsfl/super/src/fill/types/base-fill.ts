/**
 * @file: base-fill.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */export interface Matrix {
    a: number;
    b: number;
    c: number;
    d: number;
    tx: number;
    ty: number;
}

export type FillStyle = 'bitmap' | 'solid' | 'linearGradient' | 'radialGradient' | 'noFill';
export type OverflowType = 'extend' | 'repeat' | 'reflect';

export interface BaseFillProps {
    style?: FillStyle;
}

export interface SolidFillProps extends BaseFillProps {
    color?: string | number;
}

export interface GradientFillProps extends BaseFillProps {
    colorArray?: (string | number)[];
    posArray?: number[];
    matrix?: Matrix;
    linearRGB?: boolean;
    overflow?: OverflowType;
}

export interface LinearGradientFillProps extends GradientFillProps {
}

export interface RadialGradientFillProps extends GradientFillProps {
    focalPoint?: number;
}

export interface BitmapFillProps extends BaseFillProps {
    bitmapPath?: string;
    bitmapIsClipped?: boolean;
}