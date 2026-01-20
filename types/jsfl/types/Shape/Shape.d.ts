/**
 * The Shape object is a subclass of the Element object.
 * It provides more precise control than the drawing APIs when manipulating or creating geometry on the Stage.
 * This control is necessary so that scripts can create useful effects and other drawing commands.
 *
 * All Shape methods and properties that change a shape or any of its subordinate parts
 * must be placed between `shape.beginEdit()` and `shape.endEdit()` calls to function correctly.
 */
interface Shape extends FlashElement {
    /**
     * Read-only property; an array of Contour objects for the shape.
     *
     * @example
     * ```javascript
     * var c = fl.getDocumentDOM().selection[0].contours[0];
     * var he = c.getHalfEdge();
     * ```
     */
    readonly contours: Contour[];

    /**
     * Read-only property; an array of Edge objects.
     */
    readonly edges: Edge[];

    /**
     * Read-only property; if true, the shape is a drawing object.
     *
     * @example
     * ```javascript
     * var sel = fl.getDocumentDOM().selection[0];
     * var shapeDrawingObject = (sel.elementType == "shape") && sel.isDrawingObject;
     * fl.trace(shapeDrawingObject);
     * ```
     *
     * @see document.crop
     * @see document.deleteEnvelope
     * @see document.intersect
     * @see document.punch
     * @see document.union
     * @see Shape.isGroup
     */
    readonly isDrawingObject: boolean;

    /**
     * Read-only property; if true, the shape is floating above the parent frame’s (or group’s) shape.
     * Also, if true, this type of shape will have its own matrix, similar to a drawing object.
     *
     * @example
     * ```javascript
     * var myShape = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
     * fl.trace("is shape floating? " + myShape.isFloating);
     * ```
     */
    readonly isFloating: boolean;

    /**
     * Read-only property; if true, the shape is a group.
     * A group can contain different types of elements, such as text elements and symbols.
     * However, the group itself is considered a shape, and you can use the `shape.isGroup` property
     * no matter what types of elements the group contains.
     *
     * @example
     * ```javascript
     * var sel = fl.getDocumentDOM().selection[0];
     * var shapeGroup = (sel.elementType == "shape") && sel.isGroup;
     * fl.trace(shapeGroup);
     * ```
     *
     * @see Shape.isDrawingObject
     */
    readonly isGroup: boolean;

    /**
     * Read-only property; if true, the shape is a primitive Oval object (was created using the Oval Primitive tool).
     *
     * @example
     * ```javascript
     * var sel = fl.getDocumentDOM().selection[0];
     * fl.trace(sel.isOvalObject);
     * ```
     *
     * @see Shape.isRectangleObject
     */
    readonly isOvalObject: boolean;

    /**
     * Read-only property; if true, the shape is a primitive Rectangle object (was created using the Rectangle Primitive tool).
     *
     * @example
     * ```javascript
     * var sel = fl.getDocumentDOM().selection[0];
     * fl.trace(sel.isRectangleObject);
     * ```
     *
     * @see Shape.isOvalObject
     */
    readonly isRectangleObject: boolean;

    /**
     * Read-only property; an array of objects in the currently selected group.
     * This property is available only if the value of `shape.isGroup` is true.
     * Raw shapes in the group are not included in the `shape.members` array.
     *
     * For example, if the group contains three drawing objects and three raw shapes,
     * the `shape.members` array contains three entries, one for each of the drawing objects.
     * If the group contains only raw shapes, the array is empty.
     *
     * @example
     * ```javascript
     * var shapesArray = fl.getDocumentDOM().selection[0].members;
     * for (i = 0; i < shapesArray.length; i++) {
     *   fl.trace(shapesArray[i].numCubicSegments);
     * }
     * ```
     *
     * @see Shape.isGroup
     */
    readonly members: Shape[];

    /**
     * Read-only property; the number of cubic segments in the shape.
     *
     * @example
     * Assuming a square or rectangle shape is selected, the following code displays "4" in the Output panel:
     * ```javascript
     * var theShape = fl.getDocumentDOM().selection[0];
     * fl.trace(theShape.numCubicSegments);
     * ```
     */
    readonly numCubicSegments: number;

    /**
     * Read-only property; an array of Vertex objects.
     *
     * @example
     * The following example stores the first selected object in the `someShape` variable,
     * and then shows the number of vertices for that object in the Output panel:
     * ```javascript
     * var someShape = fl.getDocumentDOM().selection[0];
     * fl.trace("The shape has " + someShape.vertices.length + " vertices.");
     * ```
     */
    readonly vertices: Vertex[];

    /**
     * Method; returns an array of points that define a cubic curve for the Edge object
     * that corresponds to the specified `cubicSegmentIndex`.
     *
     * @param cubicSegmentIndex An integer that specifies the cubic segment for which points are returned.
     * @returns An array of points that define a cubic curve.
     *
     * @example
     * The following example displays the x and y values for each point on the cubic curve
     * of the first edge of the selection:
     * ```javascript
     * var elem = fl.getDocumentDOM().selection[0];
     * var index = elem.edges[0].cubicSegmentIndex;
     * var cubicPoints = elem.getCubicSegmentPoints(index);
     * for (i = 0; i < cubicPoints.length; i++) {
     *   fl.trace("index " + i + " x: " + cubicPoints[i].x + " y: " + cubicPoints[i].y);
     * }
     * ```
     */
    getCubicSegmentPoints(cubicSegmentIndex: number): { x: number; y: number }[];

    /**
     * Method; defines the start of an edit session.
     * You must use this method before issuing any commands that change the Shape object
     * or any of its subordinate parts.
     *
     * @example
     * The following example takes the currently selected shape and removes the first edge in the edge array from it:
     * ```javascript
     * var shape = fl.getDocumentDOM().selection[0];
     * shape.beginEdit();
     * shape.deleteEdge(0);
     * shape.endEdit();
     * ```
     */
    beginEdit(): void;

    /**
     * Method; deletes the specified edge.
     * You must call `shape.beginEdit()` before using this method.
     *
     * This method changes the length of the `shape.edges` array.
     *
     * @param index A zero-based index that specifies the edge to delete from the `shape.edges` array.
     *
     * @example
     * The following example takes the currently selected shape and removes the first edge in the edge array:
     * ```javascript
     * var shape = fl.getDocumentDOM().selection[0];
     * shape.beginEdit();
     * shape.deleteEdge(0);
     * shape.endEdit();
     * ```
     */
    deleteEdge(index: number): void;

    /**
     * Method; defines the end of an edit session for the shape.
     * All changes made to the Shape object or any of its subordinate parts will be applied to the shape.
     * You must use this method after issuing any commands that change the Shape object or any of its subordinate parts.
     *
     * @example
     * The following example takes the currently selected shape and removes the first edge in the edge array from it:
     * ```javascript
     * var shape = fl.getDocumentDOM().selection[0];
     * shape.beginEdit();
     * shape.deleteEdge(0);
     * shape.endEdit();
     * ```
     */
    endEdit(): void;
}