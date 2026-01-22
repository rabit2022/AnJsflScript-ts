export type ColorTransformMode = 'none' | 'tint' | 'brightness' | 'alpha' | 'advanced';

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