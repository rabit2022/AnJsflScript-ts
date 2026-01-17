/**
 * The Tools object is accessible from the flash object (fl.tools).
 * The tools.toolObjs property contains an array of ToolObj objects,
 * and the tools.activeTool property returns the ToolObj object for the currently active tool.
 *
 * Note: The following methods and properties are used only when creating extensible tools.
 */
interface Tools {
    /**
     * Read-only; returns the ToolObj object for the currently active tool.
     *
     * @example
     * // The following example saves an object that represents the currently active tool in the theTool variable:
     * var theTool = fl.tools.activeTool;
     */
    readonly activeTool: ToolObj;

    /**
     * Read-only; a Boolean value that identifies if the Alt key is being pressed.
     * The value is true if the Alt key is pressed, and false otherwise.
     *
     * @example
     * // The following example determines whether the Alt key is being pressed:
     * var isAltDown = fl.tools.altIsDown;
     */
    readonly altIsDown: boolean;

    /**
     * Read-only; a Boolean value that identifies if the Control key is pressed.
     *
     * @example
     * // The following example determines whether the Control key is being pressed:
     * var isCtrldown = fl.tools.ctlIsDown;
     */
    readonly ctlIsDown: boolean;

    /**
     * Read-only; a Boolean value that identifies if the left mouse button is currently pressed.
     *
     * @example
     * // The following example determines whether the left mouse button is pressed.
     * var isMouseDown = fl.tools.mouseIsDown;
     */
    readonly mouseIsDown: boolean;

    /**
     * Read-only; a point that represents the position of the last mouse-down event on the Stage.
     * The tools.penDownLoc property comprises two properties, x and y, corresponding to the x,y location of the mouse pointer.
     *
     * @example
     * // The following example determines the position of the last mouse-down event on the Stage
     * // and displays the x and y values in the Output panel:
     * var pt1 = fl.tools.penDownLoc;
     * fl.trace("x,y location of last mouseDown event was " + pt1.x + ", " + pt1.y);
     *
     * @see tools.penLoc
     */
    readonly penDownLoc: FlashPoint;

    /**
     * Read-only; a point that represents the current location of the mouse pointer.
     * The tools.penLoc property comprises two properties, x and y, corresponding to the x,y location of the mouse pointer.
     *
     * @example
     * // The following example determines the current location of the mouse:
     * var tempPt = fl.tools.penLoc;
     *
     * @see tools.penDownLoc
     */
    readonly penLoc: FlashPoint;

    /**
     * Read-only; a Boolean value that identifies if the Shift key is being pressed.
     *
     * @example
     * // The following example determines whether the Shift key is being pressed.
     * var isShiftDown = fl.tools.shiftIsDown;
     */
    readonly shiftIsDown: boolean;

    /**
     * Read-only; an array of ToolObj objects.
     *
     * @see ToolObj
     */
    readonly toolObjs: ToolObj[];

    /**
     * Takes two points and returns a new adjusted or constrained point.
     * If the Shift key is pressed when the command is run, the returned point is constrained to follow either a 45º constrain
     * (useful for something such as a line with an arrowhead) or to constrain an object to maintain its aspect ratio
     * (such as pulling out a perfect square with the Rectangle tool).
     *
     * @param pt1 - Specifies the starting-click point.
     * @param pt2 - Specifies the drag-to point.
     * @returns A new adjusted or constrained point.
     *
     * @example
     * // The following example returns a constrained point:
     * pt2 = fl.tools.constrainPoint(pt1, tempPt);
     */
    constrainPoint(pt1: FlashPoint, pt2: FlashPoint): FlashPoint;

    /**
     * Returns the most recently pressed key.
     *
     * @returns The integer value of the key.
     *
     * @example
     * // The following example displays the integer value of the most recently pressed key:
     * var theKey = fl.tools.getKeyDown();
     * fl.trace(theKey);
     */
    getKeyDown(): number;

    /**
     * Sets the pointer to a specified appearance.
     *
     * @param cursor - An integer that defines the pointer appearance:
     *   0 = Plus cursor (+)
     *   1 = black arrow
     *   2 = white arrow
     *   3 = four-way arrow
     *   4 = two-way horizontal arrow
     *   5 = two-way vertical arrow
     *   6 = X
     *   7 = hand cursor
     *
     * @example
     * // The following example sets the pointer to a black arrow.
     * fl.tools.setCursor(1);
     */
    setCursor(cursor: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7): void;

    /**
     * Takes a point as input and returns a new point that may be adjusted or snapped to the nearest geometric object.
     * If snapping is disabled in the View menu in the Flash user interface, the point returned is the original point.
     *
     * @param pt - Specifies the location of the point for which you want to return a snap point.
     * @returns A new point that may be adjusted or snapped to the nearest geometric object.
     *
     * @example
     * // The following example returns a new point that may be snapped to the nearest geometric object.
     * var theSnapPoint = fl.tools.snapPoint(pt1);
     */
    snapPoint(pt: FlashPoint): FlashPoint;
}


