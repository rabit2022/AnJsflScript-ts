/**
 * The Math object provides methods that perform common mathematical operations.
 * It is available as a read-only property of the flash object: `fl.Math`.
 *
 * @see {@link https://helpx.adobe.com/animate/using/flash-javascript-api.html}
 */
interface FlashMath {
    /**
     * Performs a matrix concatenation (matrix multiplication) and returns the result.
     *
     * @param mat1 - First Matrix object. Must have fields: `a`, `b`, `c`, `d`, `tx`, `ty`.
     * @param mat2 - Second Matrix object. Must have fields: `a`, `b`, `c`, `d`, `tx`, `ty`.
     * @returns A new concatenated Matrix object.
     * @since Flash MX 2004
     * @example
     * ```js
     * var elt = fl.getDocumentDOM().selection[0];
     * var mat = fl.Math.concatMatrix(elt.matrix, fl.getDocumentDOM().viewMatrix);
     * ```
     */
    concatMatrix(mat1: Matrix, mat2: Matrix): Matrix;

    /**
     * Returns the inverse of the specified matrix.
     *
     * @param mat - The Matrix object to invert. Must have fields: `a`, `b`, `c`, `d`, `tx`, `ty`.
     * @returns A new Matrix object that is the inverse of the input.
     * @since Flash MX 2004
     * @example
     * ```js
     * var elt = fl.getDocumentDOM().selection[0];
     * var mat = elt.matrix;
     * var inv = fl.Math.invertMatrix(mat);
     * ```
     */
    invertMatrix(mat: Matrix): Matrix;

    /**
     * Computes the Euclidean distance between two points.
     *
     * @param pt1 - First point with `x` and `y` numeric properties.
     * @param pt2 - Second point with `x` and `y` numeric properties.
     * @returns A floating-point number representing the distance between the points.
     * @since Flash MX 2004
     * @example
     * ```js
     * var pt1 = {x:10, y:20};
     * var pt2 = {x:100, y:200};
     * var dist = fl.Math.pointDistance(pt1, pt2);
     * ```
     */
    pointDistance(pt1: FlashPoint, pt2: FlashPoint): number;

    /**
     * Applies a transformation matrix to a point and returns the transformed point.
     *
     * @param matrix - The Matrix object to apply. Must have fields: `a`, `b`, `c`, `d`, `tx`, `ty`.
     * @param point - The point to transform, with `x` and `y` numeric properties.
     * @returns A new point object `{x: number, y: number}` after transformation.
     * @since Flash CS6
     * @example
     * ```js
     * var mat = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].matrix;
     * var point = {x:100, y:200};
     * var retPoint = fl.Math.transformPoint(mat, point);
     * ```
     */
    transformPoint(matrix: Matrix, point: FlashPoint): FlashPoint;
}


