/**
 * Represents a color transformation object returned by getColorTransformAtFrame().
 */
interface ColorTransformObject {
    mode?: string;
    tintPercent?: number;
    tintRed?: number;
    tintGreen?: number;
    tintBlue?: number;
    brightnessPercent?: number;
    alphaPercent?: number;
    colorAlphaAmount?: number;
    colorAlphaPercent?: number;
    colorRedAmount?: number;
    colorRedPercent?: number;
    colorGreenAmount?: number;
    colorGreenPercent?: number;
    colorBlueAmount?: number;
    colorBluePercent?: number;
}

/**
 * Represents a generic filter object (e.g., DropShadowFilter, BlurFilter, etc.).
 * Actual structure depends on filter type.
 */
interface FilterObject {
    [key: string]: any;
}
