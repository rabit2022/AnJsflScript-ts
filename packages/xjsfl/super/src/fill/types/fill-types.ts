import {FillStyle, Matrix, OverflowType} from './base-fill';

export interface IBaseFill {
    style: FillStyle;
}

export interface ISolidFill extends IBaseFill {
    color: string;
}

export interface ILinearGradientFill extends IBaseFill {
    colorArray: (string | number)[];
    posArray: number[];
    matrix: Matrix;
    linearRGB: boolean;
    overflow: OverflowType;
}

export interface IRadialGradientFill extends ILinearGradientFill {
    focalPoint: number;
}

export interface IBitmapFill extends IBaseFill {
    bitmapPath: string;
    bitmapIsClipped: boolean;
}

export type FillType =
    | 'NoFill'
    | 'SolidFill'
    | 'LinearGradientFill'
    | 'RadialGradientFill'
    | 'BitmapFill';

export type FillInstance =
    | IBaseFill
    | ISolidFill
    | ILinearGradientFill
    | IRadialGradientFill
    | IBitmapFill;