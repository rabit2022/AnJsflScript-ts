/**
 * The Oval object is a shape drawn using the Oval Primitive tool.
 * It inherits from the Shape object.
 *
 * To determine if an item is an Oval object, use `shape.isOvalObject`.
 *
 * Properties are read-only; to modify them, use `document.setOvalObjectProperty()`.
 *
 * @see {@link https://helpx.adobe.com/animate/using/flash-javascript-api.html}
 */
interface OvalObject extends Shape {
    /**
     * Read-only; a Boolean value that specifies whether the Close Path check box
     * in the Property inspector is selected.
     *
     * If the start angle and end angle values for the object are the same,
     * setting this property has no effect until the values change.
     *
     * To set this value, use `document.setOvalObjectProperty("closePath", value)`.
     *
     * @since Flash CS3 Professional
     * @example
     * ```js
     * fl.getDocumentDOM().setOvalObjectProperty("closePath", false);
     * ```
     * @see document.setOvalObjectProperty
     * @see shape.isOvalObject
     */
    readonly closePath: boolean;

    /**
     * Read-only; a float value that specifies the end angle of the Oval object.
     * Acceptable values are from 0 to 360.
     *
     * To set this value, use `document.setOvalObjectProperty("endAngle", value)`.
     *
     * @since Flash CS3 Professional
     * @example
     * ```js
     * fl.getDocumentDOM().setOvalObjectProperty("endAngle", 270);
     * ```
     * @see document.setOvalObjectProperty
     * @see OvalObject.startAngle
     * @see shape.isOvalObject
     */
    readonly endAngle: number;

    /**
     * Read-only; a float value that specifies the inner radius of the Oval object as a percentage.
     * Acceptable values are from 0 to 99.
     *
     * To set this value, use `document.setOvalObjectProperty("innerRadius", value)`.
     *
     * @since Flash CS3 Professional
     * @example
     * ```js
     * fl.getDocumentDOM().setOvalObjectProperty("innerRadius", 50);
     * ```
     * @see document.setOvalObjectProperty
     * @see shape.isOvalObject
     */
    readonly innerRadius: number;

    /**
     * Read-only; a float value that specifies the start angle of the Oval object.
     * Acceptable values are from 0 to 360.
     *
     * To set this value, use `document.setOvalObjectProperty("startAngle", value)`.
     *
     * @since Flash CS3 Professional
     * @example
     * ```js
     * fl.getDocumentDOM().setOvalObjectProperty("startAngle", 270);
     * ```
     * @see document.setOvalObjectProperty
     * @see OvalObject.endAngle
     * @see shape.isOvalObject
     */
    readonly startAngle: number;
}

