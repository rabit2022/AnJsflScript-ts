/**
 * @file: base-color-transform.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */export type ColorTransformMode = 'none' | 'tint' | 'brightness' | 'alpha' | 'advanced';

export interface BaseColorTransformProps {
    mode?: ColorTransformMode;
}

export interface NoneColorTransformProps extends BaseColorTransformProps {
    colorAlphaAmount?: number;
    colorAlphaPercent?: number;
    colorRedAmount?: number;
    colorRedPercent?: number;
    colorGreenAmount?: number;
    colorGreenPercent?: number;
    colorBlueAmount?: number;
    colorBluePercent?: number;
}

export interface BrightnessColorTransformProps extends BaseColorTransformProps {
    brightnessPercent?: number;
}

export interface TintColorTransformProps extends BaseColorTransformProps {
    tintPercent?: number;
    tintRed?: number;
    tintGreen?: number;
    tintBlue?: number;
}

export interface AdvancedColorTransformProps extends BaseColorTransformProps {
    colorAlphaAmount?: number;
    colorAlphaPercent?: number;
    colorRedAmount?: number;
    colorRedPercent?: number;
    colorGreenAmount?: number;
    colorGreenPercent?: number;
    colorBlueAmount?: number;
    colorBluePercent?: number;
}

export interface AlphaColorTransformProps extends BaseColorTransformProps {
    alphaPercent?: number;
}