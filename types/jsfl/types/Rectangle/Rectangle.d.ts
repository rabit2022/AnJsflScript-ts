/**
 * Represents a rectangle shape created using the Rectangle Primitive tool in Flash CS3 Professional.
 * This object extends the generic Shape object.
 *
 * To determine if an item is a RectangleObject, use `shape.isRectangleObject`.
 *
 * All corner radius properties are read-only and must be modified via
 * `document.setRectangleObjectProperty()`.
 */
interface RectangleObject extends Shape {
    /**
     * Read-only; a float value that represents the radius of the bottom-left corner of the Rectangle object.
     *
     * If `lockFlag` is true, this value reflects the same radius as `topLeftRadius` and cannot be set independently.
     * To modify this value, use `document.setRectangleObjectProperty()`.
     */
    readonly bottomLeftRadius: number;

    /**
     * Read-only; a float value that represents the radius of the bottom-right corner of the Rectangle object.
     *
     * If `lockFlag` is true, this value reflects the same radius as `topLeftRadius` and cannot be set independently.
     * To modify this value, use `document.setRectangleObjectProperty()`.
     */
    readonly bottomRightRadius: number;

    /**
     * Read-only; a boolean value that determines whether different corners of the rectangle can have different radius values.
     *
     * - If `true`: all corners share the same radius, controlled by `topLeftRadius`.
     * - If `false`: each corner radius (`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`) can be set independently.
     *
     * To modify this value, use `document.setRectangleObjectProperty()`.
     */
    readonly lockFlag: boolean;

    /**
     * Read-only; a float value that either:
     * - Sets the radius for **all corners** (if `lockFlag` is true), or
     * - Sets only the **top-left corner** radius (if `lockFlag` is false).
     *
     * This property acts as the master radius when `lockFlag` is enabled.
     * To modify this value, use `document.setRectangleObjectProperty()`.
     */
    readonly topLeftRadius: number;

    /**
     * Read-only; a float value that represents the radius of the top-right corner of the Rectangle object.
     *
     * If `lockFlag` is true, this value reflects the same radius as `topLeftRadius` and cannot be set independently.
     * To modify this value, use `document.setRectangleObjectProperty()`.
     */
    readonly topRightRadius: number;
}