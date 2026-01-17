/**
 * Flash Filter API Type Definitions (Flash 8+)
 * Based on official documentation for filter objects in Adobe Flash.
 */


/**
 * Represents a single filter applied to a display object in Flash.
 * The actual available properties depend on the value of `name`.
 */
interface Filter {
    /**
     * Read-only; a string that specifies the type of filter.
     * Determines which other properties are applicable.
     * Possible values:
     * - "adjustColorFilter"
     * - "bevelFilter"
     * - "blurFilter"
     * - "dropShadowFilter"
     * - "glowFilter"
     * - "gradientBevelFilter"
     * - "gradientGlowFilter"
     */
    readonly name: FilterName;

    /**
     * A float value that specifies the angle of the shadow or highlight color, in degrees.
     * Range: 0 to 360.
     * Applicable to: bevelFilter, dropShadowFilter, gradientBevelFilter, gradientGlowFilter.
     *
     * @example
     * // Set angle to 120 for Bevel filters
     * if (filter.name === 'bevelFilter') filter.angle = 120;
     */
    angle?: number;

    /**
     * A float value that specifies the amount to blur in the x direction, in pixels.
     * Range: 0 to 255.
     * Applicable to: bevelFilter, blurFilter, dropShadowFilter, glowFilter, gradientBevelFilter, gradientGlowFilter.
     *
     * @example
     * // Set blurX to 30 for Blur filters
     * if (filter.name === 'blurFilter') filter.blurX = 30;
     */
    blurX?: number;

    /**
     * A float value that specifies the amount to blur in the y direction, in pixels.
     * Range: 0 to 255.
     * Applicable to: bevelFilter, blurFilter, dropShadowFilter, glowFilter, gradientBevelFilter, gradientGlowFilter.
     */
    blurY?: number;

    /**
     * A float value that specifies the brightness of the filter.
     * Range: -100 to 100.
     * Applicable only to: adjustColorFilter.
     *
     * @example
     * // Set brightness to 30.5
     * if (filter.name === 'adjustColorFilter') filter.brightness = 30.5;
     */
    brightness?: number;

    /**
     * The color of the filter, in one of the following formats:
     * - String: "#RRGGBB" or "#RRGGBBAA"
     * - Hexadecimal number: 0xRRGGBB
     * - Integer (decimal equivalent)
     * Applicable to: dropShadowFilter, glowFilter.
     *
     * @example
     * // Set color to semi-transparent red
     * if (filter.name === 'dropShadowFilter') filter.color = '#ff00003e';
     */
    color?: string | number;

    /**
     * A float value that specifies the contrast value of the filter.
     * Range: -100 to 100.
     * Applicable only to: adjustColorFilter.
     *
     * @example
     * // Set contrast to -15.5
     * if (filter.name === 'adjustColorFilter') filter.contrast = -15.5;
     */
    contrast?: number;

    /**
     * A float value that specifies the distance between the filter’s effect and an object, in pixels.
     * Range: -255 to 255.
     * Applicable to: bevelFilter, dropShadowFilter, gradientBevelFilter, gradientGlowFilter.
     *
     * @example
     * // Set distance to 10 pixels for Drop Shadow
     * if (filter.name === 'dropShadowFilter') filter.distance = 10;
     */
    distance?: number;

    /**
     * A Boolean value that specifies whether the specified filter is enabled.
     * Available since Flash CS3 Professional.
     *
     * @example
     * // Disable Adjust Color filters
     * if (filter.name === 'adjustColorFilter') filter.enabled = false;
     */
    enabled?: boolean;

    /**
     * A Boolean value that specifies whether the source image is hidden.
     * Applicable only to: dropShadowFilter.
     *
     * @example
     * // Hide original object, show only shadow
     * if (filter.name === 'dropShadowFilter') filter.hideObject = true;
     */
    hideObject?: boolean;

    /**
     * The highlight color (for bevel effects), in one of:
     * - "#RRGGBB" / "#RRGGBBAA"
     * - 0xRRGGBB
     * - integer
     * Applicable only to: bevelFilter.
     *
     * @example
     * // Set highlight color
     * if (filter.name === 'bevelFilter') filter.highlightColor = '#ff00003e';
     */
    highlightColor?: string | number;

    /**
     * A float value that specifies the hue of the filter.
     * Range: -180 to 180.
     * Applicable only to: adjustColorFilter.
     *
     * @example
     * // Shift hue by 120 degrees
     * if (filter.name === 'adjustColorFilter') filter.hue = 120;
     */
    hue?: number;

    /**
     * A Boolean value that specifies whether the shadow is an inner shadow.
     * Applicable to: dropShadowFilter, glowFilter.
     *
     * @example
     * // Make glow appear inside the object
     * if (filter.name === 'glowFilter') filter.inner = true;
     */
    inner?: boolean;

    /**
     * A Boolean value that specifies whether the filter is a knockout filter.
     * If true, the original object becomes transparent where the filter is applied.
     * Applicable to: bevelFilter, dropShadowFilter, glowFilter, gradientBevelFilter, gradientGlowFilter.
     *
     * @example
     * // Enable knockout for Glow
     * if (filter.name === 'glowFilter') filter.knockout = true;
     */
    knockout?: boolean;

    /**
     * A string that specifies the blur quality.
     * Acceptable values: "low", "medium", "high".
     * "high" is similar to Gaussian blur.
     * Applicable to: bevelFilter, blurFilter, dropShadowFilter, glowFilter, gradientGlowFilter, gradientBevelFilter.
     *
     * @example
     * // Set quality to medium
     * if (filter.name === 'glowFilter') filter.quality = 'medium';
     */
    quality?: FilterQuality;

    /**
     * A float value that specifies the saturation value of the filter.
     * Range: -100 to 100.
     * Applicable only to: adjustColorFilter.
     *
     * @example
     * // Convert to grayscale
     * if (filter.name === 'adjustColorFilter') filter.saturation = -100;
     */
    saturation?: number;

    /**
     * The color of the shadow (for bevel effects), in one of:
     * - "#RRGGBB" / "#RRGGBBAA"
     * - 0xRRGGBB
     * - integer
     * Applicable only to: bevelFilter.
     *
     * @example
     * // Set shadow color to semi-transparent red
     * if (filter.name === 'bevelFilter') filter.shadowColor = '#ff00003e';
     */
    shadowColor?: string | number;

    /**
     * An integer that specifies the percentage strength of the filter.
     * Range: 0 to 25500.
     * Applicable to: bevelFilter, dropShadowFilter, glowFilter, gradientGlowFilter, gradientBevelFilter.
     *
     * @example
     * // Set glow strength to 50
     * if (filter.name === 'glowFilter') filter.strength = 50;
     */
    strength?: number;

    /**
     * A string that specifies the type of bevel or glow.
     * Acceptable values: "inner", "outer", "full".
     * Applicable to: bevelFilter, gradientGlowFilter, gradientBevelFilter.
     *
     * @example
     * // Set bevel type to full
     * if (filter.name === 'bevelFilter') filter.type = 'full';
     */
    type?: FilterType;
}



