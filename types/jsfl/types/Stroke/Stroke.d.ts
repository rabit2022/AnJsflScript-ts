/**
 * The Stroke object contains all the settings for a stroke, including the custom settings.
 * This object represents the information contained in the Property inspector.
 *
 * Using the Stroke object together with the `document.setCustomStroke()` method,
 * you can change the stroke settings for the Tools panel, the Property inspector, and the current selection.
 * You can also get the stroke settings by using the `document.getCustomStroke()` method.
 *
 * This object always has the following four properties: `style`, `thickness`, `color`, and `breakAtCorners`.
 * (In Flash CS3, the `breakAtCorners` property was deprecated in favor of `stroke.joinType`.)
 * Other properties can be set, depending on the value of the `stroke.style` property.
 */
interface Stroke {
    /**
     * A Boolean value, same as the Sharp Corners setting in the custom Stroke Style dialog box.
     *
     * **Availability**: Flash MX 2004.
     * **Deprecated**: In Flash CS3 in favor of `stroke.joinType`.
     *
     * @example
     * ```javascript
     * var myStroke = fl.getDocumentDOM().getCustomStroke();
     * myStroke.breakAtCorners = true;
     * fl.getDocumentDOM().setCustomStroke(myStroke);
     * ```
     */
    breakAtCorners: boolean;

    /**
     * A string that specifies the type of cap for the stroke.
     * Acceptable values are `"none"`, `"round"`, and `"square"`.
     *
     * **Availability**: Flash 8.
     *
     * @example
     * ```javascript
     * var myStroke = fl.getDocumentDOM().getCustomStroke();
     * myStroke.capType = "round";
     * fl.getDocumentDOM().setCustomStroke(myStroke);
     * ```
     */
    capType: "none" | "round" | "square";

    /**
     * A string, hexadecimal value, or integer that represents the stroke color.
     *
     * Formats:
     * - A string in the format `"#RRGGBB"` or `"#RRGGBBAA"`
     * - A hexadecimal number in the format `0xRRGGBB`
     * - An integer that represents the decimal equivalent of a hexadecimal number
     *
     * **Availability**: Flash MX 2004.
     * **Deprecated**: In Flash 8 and later, this property is deprecated in favor of `stroke.shapeFill.color`.
     *
     * @example
     * ```javascript
     * var myStroke = fl.getDocumentDOM().getCustomStroke();
     * myStroke.color = "#000000";
     * fl.getDocumentDOM().setCustomStroke(myStroke);
     * ```
     *
     * @see Stroke.shapeFill
     */
    color: string | number;

    /**
     * A string that specifies the type of hatching for the stroke.
     * This property can be set only if the `stroke.style` property is set to `"hatched"`.
     * Acceptable values are `"straight"`, `"slight curve"`, `"medium curve"`, and `"very curved"`.
     *
     * **Availability**: Flash MX 2004.
     *
     * @example
     * ```javascript
     * var myStroke = fl.getDocumentDOM().getCustomStroke();
     * myStroke.style = "hatched";
     * myStroke.curve = "straight";
     * myStroke.space = "close";
     * myStroke.jiggle = "wild";
     * myStroke.rotate = "free";
     * myStroke.length = "slight";
     * myStroke.hatchThickness = "thin";
     * fl.getDocumentDOM().setCustomStroke(myStroke);
     * ```
     */
    curve: "straight" | "slight curve" | "medium curve" | "very curved";

    /**
     * An integer that specifies the lengths of the solid part of a dashed line.
     * This property is available only if the `stroke.style` property is set to `"dashed"`.
     *
     * **Availability**: Flash MX 2004.
     *
     * @example
     * See `stroke.dash1` example.
     */
    dash1: number;

    /**
     * An integer that specifies the lengths of the blank part of a dashed line.
     * This property is available only if the `stroke.style` property is set to `"dashed"`.
     *
     * **Availability**: Flash MX 2004.
     *
     * @example
     * See `stroke.dash1` example.
     */
    dash2: number;

    /**
     * A string that specifies the density of a stippled line.
     * This property is available only if the `stroke.style` property is set to `"stipple"`.
     * Acceptable values are `"very dense"`, `"dense"`, `"sparse"`, and `"very sparse"`.
     *
     * **Availability**: Flash MX 2004.
     *
     * @example
     * ```javascript
     * var myStroke = fl.getDocumentDOM().getCustomStroke();
     * myStroke.style = "stipple";
     * myStroke.dotSpace = 3;
     * myStroke.variation = "random sizes";
     * myStroke.density = "sparse";
     * fl.getDocumentDOM().setCustomStroke(myStroke);
     * ```
     */
    density: "very dense" | "dense" | "sparse" | "very sparse";

    /**
     * A string that specifies the dot size of a stippled line.
     * This property is available only if the `stroke.style` property is set to `"stipple"`.
     * Acceptable values are `"tiny"`, `"small"`, `"medium"`, and `"large"`.
     *
     * **Availability**: Flash MX 2004.
     *
     * @example
     * ```javascript
     * var myStroke = fl.getDocumentDOM().getCustomStroke();
     * myStroke.style = "stipple";
     * myStroke.dotSpace = 3;
     * myStroke.dotSize = "tiny"; // Note: corrected from 'dotsize' in original example
     * myStroke.variation = "random sizes";
     * myStroke.density = "sparse";
     * fl.getDocumentDOM().setCustomStroke(myStroke);
     * ```
     */
    dotSize: "tiny" | "small" | "medium" | "large";

    /**
     * An integer that specifies the spacing between dots in a dotted line.
     * This property is available only if the `stroke.style` property is set to `"dotted"`.
     *
     * **Availability**: Flash MX 2004.
     *
     * @example
     * ```javascript
     * var myStroke = fl.getDocumentDOM().getCustomStroke();
     * myStroke.style = "dotted";
     * myStroke.dotSpace = 3;
     * fl.getDocumentDOM().setCustomStroke(myStroke);
     * ```
     */
    dotSpace: number;

    /**
     * A string that specifies the thickness of a hatch line.
     * This property is available only if the `stroke.style` property is set to `"hatched"`.
     * Acceptable values are `"hairline"`, `"thin"`, `"medium"`, and `"thick"`.
     *
     * **Availability**: Flash MX 2004.
     *
     * @example
     * ```javascript
     * var myStroke = fl.getDocumentDOM().getCustomStroke();
     * myStroke.style = "hatched";
     * myStroke.curve = "straight";
     * myStroke.space = "close";
     * myStroke.jiggle = "wild";
     * myStroke.rotate = "free";
     * myStroke.length = "slight";
     * myStroke.hatchThickness = "thin";
     * fl.getDocumentDOM().setCustomStroke(myStroke);
     * ```
     */
    hatchThickness: "hairline" | "thin" | "medium" | "thick";

    /**
     * A string that specifies the jiggle property of a hatched line.
     * This property is available only if the `stroke.style` property is set to `"hatched"`.
     * Acceptable values are `"none"`, `"bounce"`, `"loose"`, and `"wild"`.
     *
     * **Availability**: Flash MX 2004.
     *
     * @example
     * ```javascript
     * var myStroke = fl.getDocumentDOM().getCustomStroke();
     * myStroke.style = "hatched";
     * myStroke.curve = "straight";
     * myStroke.space = "close";
     * myStroke.jiggle = "wild";
     * myStroke.rotate = "free";
     * myStroke.length = "slight";
     * myStroke.hatchThickness = "thin";
     * fl.getDocumentDOM().setCustomStroke(myStroke);
     * ```
     */
    jiggle: "none" | "bounce" | "loose" | "wild";

    /**
     * A string that specifies the type of join for the stroke.
     * Acceptable values are `"miter"`, `"round"`, and `"bevel"`.
     *
     * **Availability**: Flash 8.
     *
     * @see Stroke.capType
     */
    joinType: "miter" | "round" | "bevel";

    /**
     * A string that specifies the length of a hatch line.
     * This property is available only if the `stroke.style` property is set to `"hatched"`.
     * Acceptable values are `"equal"`, `"slight variation"`, `"medium variation"`, and `"random"`.
     * (The value `"random"` actually maps to `"medium variation"`.)
     *
     * **Availability**: Flash MX 2004.
     *
     * @example
     * ```javascript
     * var myStroke = fl.getDocumentDOM().getCustomStroke();
     * myStroke.style = "hatched";
     * myStroke.curve = "straight";
     * myStroke.space = "close";
     * myStroke.jiggle = "wild";
     * myStroke.rotate = "free";
     * myStroke.length = "slight variation";
     * myStroke.hatchThickness = "thin";
     * fl.getDocumentDOM().setCustomStroke(myStroke);
     * ```
     */
    length: "equal" | "slight variation" | "medium variation" | "random";

    /**
     * A float value that specifies the angle above which the tip of the miter will be truncated by a segment.
     * That means the miter is truncated only if the miter angle is greater than the value of `miterLimit`.
     *
     * **Availability**: Flash 8.
     *
     * @example
     * ```javascript
     * var myStroke = fl.getDocumentDOM().getCustomStroke();
     * myStroke.miterLimit = 3; // If the miter angle is greater than 3, the miter is truncated.
     * fl.getDocumentDOM().setCustomStroke(myStroke);
     * ```
     */
    miterLimit: number;

    /**
     * A string that specifies the pattern of a ragged line.
     * This property is available only if the `stroke.style` property is set to `"ragged"`.
     * Acceptable values are `"solid "`, `"simple "`, `"random "`, `"dotted "`, `"random dotted "`, `"triple dotted "`, and `"random triple dotted "`.
     *
     * **Availability**: Flash MX 2004.
     *
     * @example
     * ```javascript
     * var myStroke = fl.getDocumentDOM().getCustomStroke();
     * myStroke.style = "ragged";
     * myStroke.pattern = "random";
     * fl.getDocumentDOM().setCustomStroke(myStroke);
     * ```
     */
    pattern: "solid " | "simple " | "random " | "dotted " | "random dotted " | "triple dotted " | "random triple dotted ";

    /**
     * A string that specifies the rotation of a hatch line.
     * This property is available only if the `stroke.style` property is set to `"hatched"`.
     * Acceptable values are `"none"`, `"slight"`, `"medium"`, and `"free"`.
     *
     * **Availability**: Flash MX 2004.
     *
     * @example
     * ```javascript
     * var myStroke = fl.getDocumentDOM().getCustomStroke();
     * myStroke.style = "hatched";
     * myStroke.curve = "straight";
     * myStroke.space = "close";
     * myStroke.jiggle = "wild";
     * myStroke.rotate = "free";
     * myStroke.length = "slight";
     * myStroke.hatchThickness = "thin";
     * // Note: setCustomStroke call missing in original example
     * fl.getDocumentDOM().setCustomStroke(myStroke);
     * ```
     */
    rotate: "none" | "slight" | "medium" | "free";

    /**
     * A string that specifies the type of scale to be applied to the stroke.
     * Acceptable values are `"normal"`, `"horizontal"`, `"vertical"`, and `"none"`.
     *
     * **Availability**: Flash 8.
     *
     * @example
     * ```javascript
     * var myStroke = fl.getDocumentDOM().getCustomStroke();
     * myStroke.scaleType = "horizontal";
     * fl.getDocumentDOM().setCustomStroke(myStroke);
     * ```
     */
    scaleType: "normal" | "horizontal" | "vertical" | "none";

    /**
     * A `Fill` object that represents the fill settings of the stroke.
     *
     * **Availability**: Flash 8.
     *
     * @example
     * ```javascript
     * var fill = fl.getDocumentDOM().getCustomFill();
     * fill.linearGradient = true;
     * fill.colorArray = [ 0x00ff00, 0xff0000, 0xffffff ]; // Corrected hex format
     * var stroke = fl.getDocumentDOM().getCustomStroke();
     * stroke.shapeFill = fill;
     * fl.getDocumentDOM().setCustomStroke(stroke);
     * ```
     */
    shapeFill: Fill;

    /**
     * A string that specifies the spacing of a hatched line.
     * This property is available only if the `stroke.style` property is set to `"hatched"`.
     * Acceptable values are `"very close"`, `"close"`, `"distant"`, and `"very distant"`.
     *
     * **Availability**: Flash MX 2004.
     *
     * @example
     * ```javascript
     * var myStroke = fl.getDocumentDOM().getCustomStroke();
     * myStroke.style = "hatched";
     * myStroke.curve = "straight";
     * myStroke.space = "close";
     * myStroke.jiggle = "wild";
     * myStroke.rotate = "free";
     * myStroke.length = "slight";
     * myStroke.hatchThickness = "thin";
     * fl.getDocumentDOM().setCustomStroke(myStroke);
     * ```
     */
    space: "very close" | "close" | "distant" | "very distant";

    /**
     * A Boolean value that specifies whether stroke hinting is set on the stroke.
     *
     * **Availability**: Flash 8.
     *
     * @example
     * ```javascript
     * var myStroke = fl.getDocumentDOM().getCustomStroke();
     * myStroke.strokeHinting = true;
     * fl.getDocumentDOM().setCustomStroke(myStroke);
     * ```
     */
    strokeHinting: boolean;

    /**
     * A string that describes the stroke style.
     * Acceptable values are `"noStroke"`, `"solid"`, `"dashed"`, `"dotted"`, `"ragged"`, `"stipple"`, and `"hatched"`.
     * Some of these values require additional properties of the Stroke object to be set.
     *
     * **Availability**: Flash MX 2004.
     *
     * - If value is `"solid"` or `"noStroke"`, there are no other properties.
     * - If value is `"dashed"`, there are two additional properties: `dash1` and `dash2`.
     * - If value is `"dotted"`, there is one additional property: `dotSpace`.
     * - If value is `"ragged"`, there are three additional properties: `pattern`, `waveHeight`, and `waveLength`.
     * - If value is `"stipple"`, there are three additional properties: `dotSize`, `variation`, and `density`.
     * - If value is `"hatched"`, there are six additional properties: `hatchThickness`, `space`, `jiggle`, `rotate`, `curve`, and `length`.
     *
     * @example
     * ```javascript
     * var myStroke = fl.getDocumentDOM().getCustomStroke();
     * myStroke.style = "ragged";
     * fl.getDocumentDOM().setCustomStroke(myStroke);
     * ```
     */
    style: "noStroke" | "solid" | "dashed" | "dotted" | "ragged" | "stipple" | "hatched";

    /**
     * An integer that specifies the stroke size.
     *
     * **Availability**: Flash MX 2004.
     *
     * @example
     * ```javascript
     * var myStroke = fl.getDocumentDOM().getCustomStroke();
     * myStroke.thickness = 2;
     * fl.getDocumentDOM().setCustomStroke(myStroke);
     * ```
     */
    thickness: number;

    /**
     * A string that specifies the variation of a stippled line.
     * This property is available only if the `stroke.style` property is set to `"stipple"`.
     * Acceptable values are `"one size"`, `"small variation"`, `"varied sizes"`, and `"random sizes"`.
     *
     * **Availability**: Flash MX 2004.
     *
     * @example
     * ```javascript
     * var myStroke = fl.getDocumentDOM().getCustomStroke();
     * myStroke.style = "stipple";
     * myStroke.dotSpace = 3;
     * myStroke.variation = "random sizes";
     * myStroke.density = "sparse";
     * fl.getDocumentDOM().setCustomStroke(myStroke);
     * ```
     */
    variation: "one size" | "small variation" | "varied sizes" | "random sizes";

    /**
     * A string that specifies the wave height of a ragged line.
     * This property is available only if the `stroke.style` property is set to `"ragged"`.
     * Acceptable values are `"flat"`, `"wavy"`, `"very wavy"`, and `"wild"`.
     *
     * **Availability**: Flash MX 2004.
     *
     * @example
     * ```javascript
     * var myStroke = fl.getDocumentDOM().getCustomStroke();
     * myStroke.style = "ragged";
     * myStroke.pattern = "random";
     * myStroke.waveHeight = "flat";
     * myStroke.waveLength = "short";
     * fl.getDocumentDOM().setCustomStroke(myStroke);
     * ```
     */
    waveHeight: "flat" | "wavy" | "very wavy" | "wild";

    /**
     * A string that specifies the wavelength of a ragged line.
     * This property is available only if the `stroke.style` property is set to `"ragged"`.
     * Acceptable values are `"very short"`, `"short"`, `"medium"`, and `"long"`.
     *
     * **Availability**: Flash MX 2004.
     *
     * @example
     * ```javascript
     * var myStroke = fl.getDocumentDOM().getCustomStroke();
     * myStroke.style = "ragged";
     * myStroke.pattern = "random";
     * myStroke.waveHeight = "flat";
     * myStroke.waveLength = "short";
     * fl.getDocumentDOM().setCustomStroke(myStroke);
     * ```
     */
    waveLength: "very short" | "short" | "medium" | "long";
}