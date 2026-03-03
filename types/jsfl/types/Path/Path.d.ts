// Adobe Flash/Animate JavaScript API - Path Object Type Definitions (.d.ts)

/**
 * The Path object defines a sequence of line segments (straight, curved, or both),
 * which you typically use when creating extensible tools.
 */
interface Path {
    /**
     * Read-only; an integer representing the number of points in the path.
     * A new path has 0 points.
     *
     * @example
     * var myPath = fl.drawingLayer.newPath();
     * var numOfPoints = myPath.nPts;
     * fl.trace("Number of points in the path: " + numOfPoints);
     * // Displays: Number of points in the path: 0
     */
    readonly nPts: number;

    /**
     * Appends a cubic Bézier curve segment to the path.
     * @param xAnchor X position of the first control point.
     * @param yAnchor Y position of the first control point.
     * @param x2 X position of the second control point.
     * @param y2 Y position of the second control point.
     * @param x3 X position of the third control point.
     * @param y3 Y position of the third control point.
     * @param x4 X position of the fourth control point (end point).
     * @param y4 Y position of the fourth control point (end point).
     *
     * @example
     * var myPath = fl.drawingLayer.newPath();
     * myPath.addCubicCurve(0, 0, 10, 20, 20, 20, 30, 0);
     */
    addCubicCurve(
        xAnchor: number,
        yAnchor: number,
        x2: number,
        y2: number,
        x3: number,
        y3: number,
        x4: number,
        y4: number
    ): void;

    /**
     * Appends a quadratic Bézier segment to the path.
     * @param xAnchor X position of the first control point.
     * @param yAnchor Y position of the first control point.
     * @param x2 X position of the second control point.
     * @param y2 Y position of the second control point.
     * @param x3 X position of the third control point (end point).
     * @param y3 Y position of the third control point (end point).
     *
     * @example
     * var myPath = fl.drawingLayer.newPath();
     * myPath.addCurve(0, 0, 10, 20, 20, 0);
     */
    addCurve(
        xAnchor: number,
        yAnchor: number,
        x2: number,
        y2: number,
        x3: number,
        y3: number
    ): void;

    /**
     * Adds a point to the path.
     * @param x X position of the point.
     * @param y Y position of the point.
     *
     * @example
     * var myPath = fl.drawingLayer.newPath();
     * myPath.addPoint(10, 100);
     */
    addPoint(x: number, y: number): void;

    /**
     * Removes all points from the path.
     *
     * @example
     * var myPath = fl.drawingLayer.newPath();
     * myPath.clear();
     */
    clear(): void;

    /**
     * Appends a point at the location of the first point of the path and extends the path to that point, which closes the path.
     * If the path has no points, no points are added.
     *
     * @example
     * var myPath = fl.drawingLayer.newPath();
     * myPath.close();
     */
    close(): void;

    /**
     * Creates a shape on the Stage by using the current stroke and fill settings.
     * The path is cleared after the shape is created.
     * @param bSuppressFill Optional. If true, suppresses the fill. Default: false.
     * @param bSuppressStroke Optional. If true, suppresses the stroke. Default: false.
     *
     * @example
     * var myPath = fl.drawingLayer.newPath();
     * myPath.makeShape(false, true);
     */
    makeShape(bSuppressFill?: boolean, bSuppressStroke?: boolean): void;

    /**
     * Starts a new contour in the path.
     *
     * @example
     * var myPath = fl.drawingLayer.newPath();
     * myPath.addPoint(0, 0);
     * myPath.addPoint(0, 30);
     * myPath.addPoint(30, 30);
     * myPath.addPoint(30, 0);
     * myPath.addPoint(0, 0);
     * myPath.newContour();
     * myPath.addPoint(10, 10);
     * myPath.addPoint(10, 20);
     * myPath.addPoint(20, 20);
     * myPath.addPoint(20, 10);
     * myPath.addPoint(10, 10);
     * myPath.makeShape();
     */
    newContour(): void;
}
