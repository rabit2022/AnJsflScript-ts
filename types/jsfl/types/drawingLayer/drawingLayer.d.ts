/**
 * Interface representing the Flash drawingLayer object for temporary on-stage drawing.
 */
interface DrawingLayer {
    /**
     * Puts Flash into drawing mode. Must be called before any drawing commands.
     *
     * @param persistentDraw - Optional. If `true`, the last drawn frame remains visible
     *                         until the next `beginDraw()` or `beginFrame()` call.
     *                         Useful for persistent previews (e.g., keep rectangle outline after mouse up).
     * @returns void
     *
     * @example
     * ```javascript
     * // Puts Flash in drawing mode:
     * fl.drawingLayer.beginDraw();
     * ```
     */
    beginDraw(persistentDraw?: boolean): void;

    /**
     * Erases previously drawn content and prepares for a new group of drawing commands.
     * Should be called after `beginDraw()` and before any drawing methods.
     *
     * Everything drawn between `beginFrame()` and `endFrame()` is treated as one frame.
     * The next `beginFrame()` will erase this frame.
     *
     * @returns void
     *
     * @see {@link DrawingLayer.beginDraw}
     */
    beginFrame(): void;

    /**
     * Draws a cubic Bézier curve from the current pen position using two control points and an end point.
     *
     * @param x1Ctl - X coordinate of the first control point.
     * @param y1Ctl - Y coordinate of the first control point.
     * @param x2Ctl - X coordinate of the second control point.
     * @param y2Ctl - Y coordinate of the second control point.
     * @param xEnd  - X coordinate of the end point.
     * @param yEnd  - Y coordinate of the end point.
     * @returns void
     *
     * @example
     * ```javascript
     * // Draws a cubic curve using the specified control points:
     * fl.drawingLayer.cubicCurveTo(0, 0, 1, 1, 2, 0);
     * ```
     */
    cubicCurveTo(x1Ctl: number, y1Ctl: number, x2Ctl: number, y2Ctl: number, xEnd: number, yEnd: number): void;

    /**
     * Draws a quadratic Bézier curve from the current pen position to an end point,
     * using a single control point.
     *
     * @param xCtl - X coordinate of the control point.
     * @param yCtl - Y coordinate of the control point.
     * @param xEnd - X coordinate of the end point.
     * @param yEnd - Y coordinate of the end point.
     * @returns void
     *
     * @example
     * ```javascript
     * // Draws a quadratic curve using the specified control points:
     * fl.drawingLayer.curveTo(0, 0, 2, 0);
     * ```
     */
    curveTo(xCtl: number, yCtl: number, xEnd: number, yEnd: number): void;

    /**
     * Draws a pre-defined path object.
     *
     * @param path - A {@link Path} object to draw.
     * @returns void
     *
     * @example
     * ```javascript
     * // Draws a path specified by the Path object named gamePath:
     * fl.drawingLayer.drawPath(gamePath);
     * ```
     */
    drawPath(path: Path): void;

    /**
     * Exits drawing mode. Should be called after finishing all drawing commands.
     *
     * @returns void
     *
     * @example
     * ```javascript
     * // Exits drawing mode:
     * fl.drawingLayer.endDraw();
     * ```
     */
    endDraw(): void;

    /**
     * Signals the end of a group of drawing commands (i.e., ends the current "frame").
     *
     * Content drawn between `beginFrame()` and `endFrame()` remains until the next `beginFrame()`.
     *
     * @returns void
     */
    endFrame(): void;

    /**
     * Draws a straight line from the current drawing position to the specified point.
     *
     * @param x - X coordinate of the end point.
     * @param y - Y coordinate of the end point.
     * @returns void
     *
     * @example
     * ```javascript
     * // Draws a line from the current drawing position to the point (20,30):
     * fl.drawingLayer.lineTo(20, 30);
     * ```
     */
    lineTo(x: number, y: number): void;

    /**
     * Sets the current drawing position (i.e., moves the pen without drawing).
     *
     * @param x - X coordinate of the new position.
     * @param y - Y coordinate of the new position.
     * @returns void
     *
     * @example
     * ```javascript
     * // Sets the current drawing position at the point (10,15):
     * fl.drawingLayer.moveTo(10, 15);
     * ```
     */
    moveTo(x: number, y: number): void;

    /**
     * Creates and returns a new {@link Path} object for use with `drawPath()`.
     *
     * @returns A new {@link Path} instance.
     *
     * @example
     * ```javascript
     * // Returns a new Path object:
     * fl.drawingLayer.newPath();
     * ```
     */
    newPath(): Path;

    /**
     * Sets the color for subsequently drawn persistent data.
     *
     * > ⚠️ **Only applies if `persistentDraw` was set to `true` in `beginDraw()`**.
     *
     * Accepts color in any of the following formats:
     * - `"#RRGGBB"` or `"#RRGGBBAA"` (string)
     * - `0xRRGGBB` (hexadecimal number)
     * - Decimal integer equivalent of hex color
     *
     * @param color - The color specification.
     * @returns void
     *
     * @example
     * ```javascript
     * // Draws a red line on the Stage:
     * fl.drawingLayer.beginDraw(true);
     * fl.drawingLayer.beginFrame();
     * fl.drawingLayer.setColor("#ff0000");
     * fl.drawingLayer.moveTo(0, 0);
     * fl.drawingLayer.lineTo(100, 100);
     * fl.drawingLayer.endFrame();
     * fl.drawingLayer.endDraw();
     * ```
     *
     * @see {@link DrawingLayer.beginDraw}
     */
    setColor(color: string | number): void;

    /**
     * ⛔ This method is **not available** in Flash MX 2004.
     *
     * Attempting to call this method will result in an error or no operation.
     */
    setFill(): never;

    /**
     * ⛔ This method is **not available** in Flash MX 2004.
     *
     * Attempting to call this method will result in an error or no operation.
     */
    setStroke(): never;
}

