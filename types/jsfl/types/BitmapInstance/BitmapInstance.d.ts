/**
 * Represents a bitmap instance in a Flash/Animate document frame.
 * Inherits from Instance object.
 *
 * @see {@link https://help.adobe.com/en_US/flash/cs/extend/WS5b3ccc516d4fbf351e63e3d118a9024f7f-7c9e.html}
 */
interface BitmapInstance extends Instance {
    /**
     * Read-only; an integer that represents the width of the bitmap, in pixels.
     *
     * @example
     * ```javascript
     * // Get the number of pixels in the horizontal dimension.
     * var bmObj = fl.getDocumentDOM().selection[0];
     * var isBitmap = bmObj.instanceType;
     * if(isBitmap == "bitmap"){
     *   var numHorizontalPixels = bmObj.hPixels;
     * }
     * ```
     */
    readonly hPixels: number;

    /**
     * Read-only; an integer that represents the height of the bitmap, in pixels.
     *
     * @example
     * ```javascript
     * // Get the number of pixels in the vertical dimension.
     * var bmObj = fl.getDocumentDOM().selection[0];
     * var isBitmap = bmObj.instanceType;
     * if(isBitmap == "bitmap"){
     *   var numVerticalPixels = bmObj.vPixels;
     * }
     * ```
     */
    readonly vPixels: number;

    /**
     * Lets you create bitmap effects by getting the bits out of the bitmap,
     * manipulating them, and then returning them to Animate.
     *
     * @returns An object containing:
     * - `width`: number
     * - `height`: number
     * - `depth`: number (bit depth)
     * - `bits`: Uint8Array (byte array of pixel data)
     * - `cTab`?: string[] (color table as ["#RRGGBB", ...], only for depth ≤ 8)
     *
     * > **Note**: The `bits` byte array is meaningful only when processed by a DLL or shared library.
     * > Typically used when creating extensible tools or effects.
     *
     * @example
     * ```javascript
     * var isBitmap = fl.getDocumentDOM().selection[0].instanceType;
     * if(isBitmap == "bitmap"){
     *   var bits = fl.getDocumentDOM().selection[0].getBits();
     *   fl.trace("height = " + bits.height);
     *   fl.trace("width = " + bits.width);
     *   fl.trace("depth = " + bits.depth);
     * }
     * ```
     *
     * @see {@link BitmapInstance.setBits}
     */
    getBits(): {
        width: number;
        height: number;
        depth: number;
        bits: Uint8Array;
        cTab?: string[];
    };

    /**
     * Sets the bits of an existing bitmap element.
     * This lets you create bitmap effects by getting the bits out of the bitmap,
     * manipulating them, and then returning the bitmap to Animate.
     *
     * @param bitmap - An object with the following properties:
     * - `width`: number
     * - `height`: number
     * - `depth`: number
     * - `bits`: Uint8Array
     * - `cTab`?: string[] (required only if depth ≤ 8)
     *
     * > **Note**: The byte array (`bits`) is meaningful only when referenced by an external library.
     * > Typically used when creating extensible tools or effects.
     *
     * @returns void
     *
     * @example
     * ```javascript
     * var isBitmap = fl.getDocumentDOM().selection[0].instanceType;
     * if(isBitmap == "bitmap"){
     *   var bits = fl.getDocumentDOM().selection[0].getBits();
     *   bits.height = 150;
     *   fl.getDocumentDOM().selection[0].setBits(bits);
     * }
     * ```
     *
     * @see {@link BitmapInstance.getBits}
     */
    setBits(bitmap: {
        width: number;
        height: number;
        depth: number;
        bits: Uint8Array;
        cTab?: string[];
    }): void;
}