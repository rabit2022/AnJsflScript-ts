/**
 * Represents the fill color settings of the Tools panel or a selected shape in Adobe Flash.
 *
 * Retrieve a Fill object using {@link FlashDocument.getCustomFill}.
 *
 * @availability Flash MX 2004 (with individual properties added in later versions as noted)
 * @see {@link https://help.adobe.com/en_US/flash/cs/extend/}
 */
interface Fill {
    /**
     * Specifies whether a bitmap fill is clipped (`true`) or repeated (`false`) when the shape is larger than the bitmap.
     *
     * > ⚠️ **Only available if `style` is `"bitmap"`**.
     * > If the shape is smaller than the bitmap, this value is always `false`.
     *
     * @availability Flash CS4 Professional
     * @example
     * ```javascript
     * var fill = fl.getDocumentDOM().getCustomFill();
     * if (fill.style == "bitmap")
     *   fl.trace("Fill image is clipped: " + fill.bitmapIsClipped);
     * ```
     * @see {@link Fill.bitmapPath}
     */
    bitmapIsClipped: boolean;

    /**
     * The path and name of the bitmap fill in the Library (e.g., `"myBitmap.jpg"`).
     *
     * > ⚠️ **Only available if `style` is `"bitmap"`**.
     *
     * @availability Flash CS4 Professional
     * @example
     * ```javascript
     * var fill = fl.getDocumentDOM().getCustomFill();
     * fill.style = "bitmap";
     * fill.bitmapPath = "myBitmap.jpg";
     * fl.getDocumentDOM().setCustomFill(fill);
     * ```
     * @see {@link Fill.bitmapIsClipped}
     */
    bitmapPath: string;

    /**
     * The solid fill color, specified in one of the following formats:
     * - String: `"#RRGGBB"` or `"#RRGGBBAA"`
     * - Hexadecimal number: `0xRRGGBB`
     * - Decimal integer equivalent
     *
     * > ⚠️ Typically used when `style` is `"solid"`.
     *
     * @availability Flash MX 2004
     * @example
     * ```javascript
     * var fill = fl.getDocumentDOM().getCustomFill();
     * fill.color = "#FFFFFF";
     * fl.getDocumentDOM().setCustomFill(fill);
     * ```
     */
    color: string | number;

    /**
     * An array of colors for gradient fills, expressed as integers (e.g., `0x00ff00`) or hex strings (e.g., `"#00ff00"`).
     *
     * > ⚠️ **Only available if `style` is `"linearGradient"` or `"radialGradient"`**.
     *
     * @availability Flash MX 2004
     * @example
     * ```javascript
     * var fill = fl.getDocumentDOM().getCustomFill();
     * fill.style = "linearGradient";
     * fill.colorArray = ["#00ff00", "#ff00ff"];
     * fill.posArray = [0, 255];
     * fl.getDocumentDOM().setCustomFill(fill);
     * ```
     * @see {@link Fill.style}
     */
    colorArray: (string | number)[];

    /**
     * The horizontal offset of the gradient focal point from the transformation point.
     * - Value range: typically `-255` to `255`.
     * - Example: `10` places the focal point at `10/255` of the distance from center to edge.
     * - Default: `0`.
     *
     * > ⚠️ **Only available if `style` is `"radialGradient"`**.
     *
     * @availability Flash 8
     * @example
     * ```javascript
     * var fill = fl.getDocumentDOM().getCustomFill();
     * fill.style = "radialGradient";
     * fill.colorArray = ["#00ff00", "#ff00ff"];
     * fill.posArray = [0, 255];
     * fill.focalPoint = 100;
     * fl.getDocumentDOM().setCustomFill(fill);
     * ```
     * @see {@link Fill.style}
     */
    focalPoint: number;

    /**
     * Specifies gradient interpolation mode:
     * - `true`: linear RGB interpolation
     * - `false`: radial RGB interpolation (default)
     *
     * @availability Flash 8
     * @example
     * ```javascript
     * var fill = fl.getDocumentDOM().getCustomFill();
     * fill.style = "radialGradient";
     * fill.colorArray = ["#00ff00", "#ff00ff"];
     * fill.posArray = [0, 255];
     * fill.focalPoint = 100;
     * fill.linearRGB = true;
     * fl.getDocumentDOM().setCustomFill(fill);
     * ```
     */
    linearRGB: boolean;

    /**
     * A {@link Matrix} object that defines placement, orientation, and scale for gradient fills.
     *
     * @availability Flash MX 2004
     * @example
     * ```javascript
     * var fill = fl.getDocumentDOM().getCustomFill();
     * fill.style = 'radialGradient';
     * fill.colorArray = ['#00ff00','#ff00ff'];
     * fill.posArray = [0, 255];
     * fill.focalPoint = 100;
     * fill.linearRGB = false;
     * fill.overflow = 'repeat';
     * var mat = fill.matrix;
     * mat.a = 0.0167083740234375;
     * mat.b = -0.0096435546875;
     * mat.c = 0.0312957763671875;
     * mat.d = 0.05419921875;
     * mat.tx = 288.65;
     * mat.ty = 193.05;
     * for (i in mat) {
     *   fl.trace(i+' : '+mat[i]);
     * }
     * fl.getDocumentDOM().setCustomFill(fill);
     * ```
     * @see {@link Matrix}
     */
    matrix: Matrix;

    /**
     * Specifies gradient overflow behavior. Acceptable values (case-insensitive):
     * - `"extend"` (default): colors extend beyond gradient bounds
     * - `"repeat"`: gradient repeats
     * - `"reflect"`: gradient reflects
     *
     * @availability Flash 8
     * @example
     * ```javascript
     * var fill = fl.getDocumentDOM().getCustomFill();
     * fill.overflow = "extend";
     * fl.getDocumentDOM().setCustomFill(fill);
     * ```
     */
    overflow: 'extend' | 'repeat' | 'reflect';

    /**
     * An array of integers (0–255) indicating the position of each corresponding color in `colorArray`.
     *
     * > ⚠️ **Only available if `style` is `"linearGradient"` or `"radialGradient"`**.
     *
     * @availability Flash MX 2004
     * @example
     * ```javascript
     * var fill = fl.getDocumentDOM().getCustomFill();
     * fill.style = "linearGradient";
     * fill.colorArray = [0x00ff00, 0xff0000, 0x0000ff];
     * fill.posArray = [0, 100, 200];
     * fl.getDocumentDOM().setCustomFill(fill);
     * ```
     * @see {@link Fill.style}
     */
    posArray: number[];

    /**
     * The fill style. Acceptable values:
     * - `"bitmap"` (Flash CS4+)
     * - `"solid"`
     * - `"linearGradient"`
     * - `"radialGradient"`
     * - `"noFill"`
     *
     * > ⚠️ Setting this property determines which other properties are active:
     * > - `"linearGradient"` / `"radialGradient"` → enables `colorArray`, `posArray`
     * > - `"bitmap"` → enables `bitmapPath`, `bitmapIsClipped`
     *
     * @availability Flash MX 2004 (`"bitmap"` added in Flash CS4)
     * @example
     * ```javascript
     * var fill = fl.getDocumentDOM().getCustomFill();
     * fill.style = "linearGradient";
     * fill.colorArray = [0x00ff00, 0xff0000, 0x0000ff];
     * fill.posArray = [0, 100, 200];
     * fl.getDocumentDOM().setCustomFill(fill);
     * ```
     */
    style: FillStyle;
}

