/**
 * Everything that appears on the Stage is of the type Element.
 * @see https://help.adobe.com/en_US/flash/cs3/jsapi/
 */
// export interface Element {
interface FlashElement {
    /**
     * Read-only; an integer that has a value greater than 0 for the depth of the object in the view.
     * The drawing order of objects on the Stage specifies which one is on top of the others.
     * Object order can also be managed with the Modify > Arrange menu item.
     *
     * @example
     * // Select an object and run this script.
     * fl.trace("Depth of selected object: " + fl.getDocumentDOM().selection[0].depth);
     */
    readonly depth: number;

    /**
     * Read-only; a string that represents the type of the specified element.
     * Possible values: "shape", "text", "tlfText", "instance", "shapeObj".
     *
     * @example
     * // In a new file, place a movie clip on first frame top layer, and then run this line of script.
     * var eType = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].elementType; // eType = instance
     *
     * @example
     * var tl = fl.getDocumentDOM().getTimeline();
     * var elts = tl.layers[tl.currentLayer].frames[tl.currentFrame].elements;
     * for (var x = 0; x < elts.length; x++) {
     *   var elt = elts[x];
     *   fl.trace("Element "+ x + " Name = " + elt.name + " Type = " + elt.elementType + " location = " + elt.left + ", " + elt.top + " Depth = " + elt.depth);
     * }
     */
    readonly elementType: "shape" | "text" | "tlfText" | "instance" | "shapeObj";

    /**
     * A float value that specifies the height of the element in pixels.
     * Do not use this property to resize a text field. Instead, select the text field and use document.setTextRectangle().
     * Using this property with a text field scales the text.
     *
     * @example
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].height = 100;
     */
    height: number;

    /**
     * Read-only; represents the Layer object on which the element is located.
     *
     * @example
     * var theLayer = element.layer;
     */
    readonly layer: FlashLayer;

    /**
     * Read-only; a float value that represents the left side of the element.
     * The value of element.left is relative to the upper left of the Stage for elements that are in a scene
     * and is relative to the symbol’s registration point if the element is stored within a symbol.
     * Use document.setSelectionBounds() or document.moveSelectionBy() to set this property.
     *
     * @example
     * // Select an element on the Stage and then run this script.
     * var sel = fl.getDocumentDOM().selection[0];
     * fl.trace("Left (before) = " + sel.left);
     * fl.getDocumentDOM().moveSelectionBy({x:100, y:0});
     * fl.trace("Left (after) = " + sel.left);
     */
    readonly left: number;

    /**
     * A Boolean value: true if the element is locked; false otherwise.
     * If the value of element.elementType is "shape", this property is ignored.
     *
     * @example
     * // Similar to Modify > Arrange > Lock:
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].locked = true;
     */
    locked: boolean;

    /**
     * A Matrix object. The matrix has properties a, b, c, d, tx, and ty.
     * a, b, c, and d are floating-point values; tx and ty are coordinates.
     *
     * @example
     * // Moves the specified element by 10 pixels in x and 20 pixels in y:
     * var mat = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].matrix;
     * mat.tx += 10;
     * mat.ty += 20;
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].matrix = mat;
     */
    matrix: Matrix;

    /**
     * A string that specifies the name of the element, normally referred to as the Instance name.
     * If the value of element.elementType is "shape", this property is ignored.
     *
     * @example
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].name = "clip_mc";
     */
    name: string;

    /**
     * An integer or float value between -180 and 180 that specifies the object’s clockwise rotation, in degrees.
     *
     * @example
     * var element = fl.getDocumentDOM().selection[0];
     * fl.trace("Element rotation = " + element.rotation);
     * element.rotation = 45;
     * fl.trace("After setting rotation to 45: rotation = " + element.rotation);
     */
    rotation: number;

    /**
     * A float value that specifies the x scale value of symbols, drawing objects, and primitive rectangles and ovals.
     * A value of 1 indicates 100 percent scale.
     *
     * @example
     * var element = fl.getDocumentDOM().selection[0];
     * element.scaleX = 2; // doubles its value
     */
    scaleX: number;

    /**
     * A float value that specifies the y scale value of symbols, drawing objects, and primitive rectangles and ovals.
     * A value of 1 indicates 100 percent scale.
     *
     * @example
     * var element = fl.getDocumentDOM().selection[0];
     * element.scaleY = 2; // doubles its value
     */
    scaleY: number;

    /**
     * A Boolean value that specifies whether the element is selected (true) or not (false).
     *
     * @example
     * element.selected = true;
     */
    selected: boolean;

    /**
     * A float value between -180 and 180 that specifies the x skew value of symbols, drawing objects,
     * and primitive rectangles and ovals.
     *
     * @example
     * var element = fl.getDocumentDOM().selection[0];
     * element.skewX = 10;
     */
    skewX: number;

    /**
     * A float value between -180 and 180 that specifies the y skew value of symbols, drawing objects,
     * and primitive rectangles and ovals.
     *
     * @example
     * var element = fl.getDocumentDOM().selection[0];
     * element.skewY = 10;
     */
    skewY: number;

    /**
     * Read-only; top side of the element.
     * The value of element.top is relative to the upper left of the Stage for elements that are in a scene
     * and is relative to the symbol’s registration point if the element is stored within a symbol.
     * Use document.setSelectionBounds() or document.moveSelectionBy() to set this property.
     *
     * @example
     * // Select an element on the Stage and then run this script.
     * var sel = fl.getDocumentDOM().selection[0];
     * fl.trace("Top (before) = " + sel.top);
     * fl.getDocumentDOM().moveSelectionBy({x:0, y:100});
     * fl.trace("Top (after) = " + sel.top);
     */
    readonly top: number;

    /**
     * A floating-point number that specifies the x value of the selected element’s transformation point,
     * within the coordinate system of the element's parent.
     * Setting this property to a new value moves the element.
     * By contrast, the element.setTransformationPoint() method moves the transformation point but does not move the element.
     */
    transformX: number;

    /**
     * A floating-point number that specifies the y value of the selected element’s transformation point,
     * within the coordinate system of the element's parent.
     * Setting this property to a new value moves the element.
     * By contrast, the element.setTransformationPoint() method moves the transformation point but does not move the element.
     */
    transformY: number;

    /**
     * A float value that specifies the width of the element in pixels.
     * Do not use this property to resize a text field. Instead, select the text field and use document.setTextRectangle().
     * Using this property with a text field scales the text.
     *
     * @example
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].width = 100;
     */
    width: number;

    /**
     * A float value that specifies the x value of the selected element’s registration point.
     *
     * @example
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].x = 100;
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0].y = 200;
     */
    x: number;

    /**
     * A float value that specifies the y value of the selected element’s registration point.
     *
     * @example
     * See element.x
     */
    y: number;

    /**
     * Retrieves the value of the data specified by the name parameter.
     * The type of data depends on the type of the data that was stored.
     * Only symbols and bitmaps support persistent data.
     *
     * @param name A string that identifies the data to be returned.
     * @returns The data specified by the name parameter, or 0 if the data doesn’t exist.
     *
     * @example
     * // At least one symbol or bitmap is selected in the first layer, first frame.
     * var elt = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
     * elt.setPersistentData("myData", "integer", 12);
     * if (elt.hasPersistentData("myData")) {
     *   fl.trace("myData = " + elt.getPersistentData("myData"));
     *   elt.removePersistentData("myData");
     *   fl.trace("myData = " + elt.getPersistentData("myData"));
     * }
     */
    getPersistentData(name: string): any;

    /**
     * Indicates whether publishing of a specified persistent data item is enabled for the specified format on an element.
     *
     * @param name A string that specifies the name of the persistent data item.
     * @param format A string that specifies the publishing format.
     *               _EMBED_SWF_ is a special built-in publishing format for persistent data.
     * @returns True if the specified persistent data is enabled for the specified format; otherwise False.
     *
     * @example
     * var doc = fl.getDocumentDOM();
     * if (doc) {
     *   var elem = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
     *   if (elem) {
     *     elem.setPersistentData("myAlign", "string", "left");
     *     elem.setPublishPersistentData("myAlign", "_EMBED_SWF_", true);
     *     doc.setPublishDocumentData("_EMBED_SWF_", true);
     *   }
     * }
     * if (doc && doc.getPublishDocumentData("_EMBED_SWF_")) {
     *   var elem = fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[0];
     *   if (elem && elem.hasPersistentData("myAlign") && elem.getPublishPersistentData("myAlign", "_EMBED_SWF_")) {
     *     alert("elem.metaData.myAlign = '" + elem.getPersistentData("myAlign") + "' will be embedded in SWF when published.");
     *   }
     * }
     */
    getPublishPersistentData(name: string, format: string): boolean;

    /**
     * Gets the value of the specified element’s transformation point.
     * Transformation points are relative to different locations, depending on the type of item selected.
     *
     * @returns A point (e.g., {x:10, y:20}) that specifies the position of the transformation point within the element’s coordinate system.
     *
     * @example
     * var transPoint = fl.getDocumentDOM().getTimeline().layers[0].frames[8].elements[2].getTransformationPoint();
     * // transPoint.x and transPoint.y give coordinates
     */
    getTransformationPoint(): { x: number; y: number };

    /**
     * Determines whether the specified data has been attached to the specified element.
     * Only symbols and bitmaps support persistent data.
     *
     * @param name A string that specifies the name of the data item to test.
     * @returns A Boolean value: true if the specified data is attached to the object; false otherwise.
     *
     * @example
     * See element.getPersistentData()
     */
    hasPersistentData(name: string): boolean;

    /**
     * Removes any persistent data with the specified name that has been attached to the object.
     * Only symbols and bitmaps support persistent data.
     *
     * @param name A string that specifies the name of the data to remove.
     * @returns A Boolean value: true if data was removed; false otherwise.
     *
     * @example
     * See element.getPersistentData()
     */
    removePersistentData(name: string): boolean;

    /**
     * Stores data with an element. The data is available when the FLA file containing the element is reopened.
     * Only symbols and bitmaps support persistent data.
     *
     * @param name A string that specifies the name to associate with the data.
     * @param type A string that defines the type of the data. Allowable values: "integer", "integerArray", "double", "doubleArray", "string", "byteArray".
     * @param value Specifies the value to associate with the object.
     *
     * @example
     * See element.getPersistentData()
     */
    setPersistentData(name: string, type: "integer" | "integerArray" | "double" | "doubleArray" | "string" | "byteArray", value: any): void;

    /**
     * Enables or disables publishing of persistent data for a specified format.
     *
     * @param name A string that specifies the name of the persistent data item.
     * @param format A string that specifies the publishing format.
     *               _EMBED_SWF_ is a special built-in publishing format.
     * @param publish A boolean that indicates whether to enable or disable publishing.
     *
     * @example
     * See element.getPublishPersistentData()
     */
    setPublishPersistentData(name: string, format: string, publish: boolean): void;

    /**
     * Sets the position of the element’s transformation point.
     * This method moves the transformation point but does not move the element.
     * Contrast with element.transformX/transformY which move the element.
     *
     * @param transformationPoint A point (e.g., {x:10, y:20}) that specifies values for an element’s transformation point.
     *        For shapes: relative to document (Stage upper-left = 0,0).
     *        For symbols: relative to symbol’s registration point.
     *        For text: relative to upper-left of text field.
     *        For bitmaps/videos: relative to upper-left of asset.
     *        For drawing/primitive objects/groups: relative to stage.
     *
     * @example
     * fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements[2].setTransformationPoint({x: 100, y:200});
     */
    setTransformationPoint(transformationPoint: { x: number; y: number }): void;
}