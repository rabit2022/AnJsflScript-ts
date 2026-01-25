/**
 * @file: color-transform-types.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import {ColorTransformMode} from './base-color-transform';

export interface IBaseColorTransform {
    mode: ColorTransformMode;
}

export interface INoneColorTransform extends IBaseColorTransform {
    mode: 'none';
    colorAlphaAmount: number;
    colorAlphaPercent: number;
    colorRedAmount: number;
    colorRedPercent: number;
    colorGreenAmount: number;
    colorGreenPercent: number;
    colorBlueAmount: number;
    colorBluePercent: number;
}

export interface IBrightnessColorTransform extends IBaseColorTransform {
    mode: 'brightness';
    brightnessPercent: number;
}

export interface ITintColorTransform extends IBaseColorTransform {
    mode: 'tint';
    tintPercent: number;
    tintRed: number;
    tintGreen: number;
    tintBlue: number;
}

export interface IAdvancedColorTransform extends IBaseColorTransform {
    mode: 'advanced';
    colorAlphaAmount: number;
    colorAlphaPercent: number;
    colorRedAmount: number;
    colorRedPercent: number;
    colorGreenAmount: number;
    colorGreenPercent: number;
    colorBlueAmount: number;
    colorBluePercent: number;
}

export interface IAlphaColorTransform extends IBaseColorTransform {
    mode: 'alpha';
    alphaPercent: number;
}

export type ColorTransformType =
    | 'NoneColorTransform'
    | 'BrightnessColorTransform'
    | 'TintColorTransform'
    | 'AdvancedColorTransform'
    | 'AlphaColorTransform';

export type BuilderType =
    | 'BrightnessColorTransformBuilder'
    | 'TintColorTransformBuilder'
    | 'AdvancedColorTransformBuilder'
    | 'AlphaColorTransformBuilder';

export type InstanceMethodType =
    | 'setInstanceNone'
    | 'setInstanceBrightness'
    | 'setInstanceTint'
    | 'setInstanceTintRGB'
    | 'setInstanceAdvancedColor'
    | 'setInstanceAlpha';

export type ColorTransformInstance =
    | INoneColorTransform
    | IBrightnessColorTransform
    | ITintColorTransform
    | IAdvancedColorTransform
    | IAlphaColorTransform;