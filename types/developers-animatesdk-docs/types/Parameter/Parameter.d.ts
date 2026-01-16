// parameter.d.ts

/**
 * The Parameter object type is accessed from the componentInstance.parameters array
 * (which corresponds to the component Property inspector in the authoring tool).
 */
export interface Parameter {
  /**
   * Property; a string that specifies the category property for the screen parameter
   * or componentInstance parameter. This property provides an alternative way of
   * presenting a list of parameters. This functionality is not available through
   * the Flash user interface.
   *
   * Availability: Flash MX 2004
   */
  category: string;

  /**
   * Property; the value of the selected list item.
   * This property is valid only if parameter.valueType is "List".
   *
   * Availability: Flash MX 2004
   *
   * @example
   * // The following example sets the first parameter for a Slide,
   * // which is the autoKeyNav parameter. To set the parameter to one of its
   * // acceptable values (true, false, or inherit) parameter.listIndex is set
   * // to the index of the item in the list (0 for true, 1 for false, 2 for inherit).
   * var parms = fl.getDocumentDOM().screenOutline.screens[1].parameters;
   * parms[0].listIndex = 1;
   */
  listIndex: number;

  /**
   * Read-only property; a string that specifies the name of the parameter.
   *
   * Availability: Flash MX 2004
   *
   * @example
   * // The following example shows the name of the fifth parameter for the selected component:
   * var parms = fl.getDocumentDOM().selection[0].parameters;
   * fl.trace("name: " + parms[4].name);
   *
   * // The following example shows the name of the fifth parameter for the specified screen:
   * var parms = fl.getDocumentDOM().screenOutline.screens[1].parameters;
   * fl.trace("name: " + parms[4].name);
   */
  readonly name: string;

  /**
   * Property; corresponds to the Value field in the Parameters tab of the Component inspector,
   * the Parameters tab of the Property inspector, or the screen Property inspector.
   * The type of the value property is determined by the valueType property for the parameter.
   *
   * Availability: Flash MX 2004
   */
  value: any; // Type depends on valueType; could be string, number, boolean, array, object, etc.

  /**
   * Read-only property; a string that indicates the type of the screen or component parameter.
   * The type can be one of the following values:
   * "Default", "Array", "Object", "List", "String", "Number", "Boolean", "Font Name",
   * "Color", "Collection", "Web Service URL", or "Web Service Operation".
   *
   * Availability: Flash MX 2004
   *
   * @see {@link Parameter.value}
   */
  readonly valueType:
      | "Default"
      | "Array"
      | "Object"
      | "List"
      | "String"
      | "Number"
      | "Boolean"
      | "Font Name"
      | "Color"
      | "Collection"
      | "Web Service URL"
      | "Web Service Operation";

  /**
   * Property; specifies where the parameter is displayed.
   * If the value of this property is 0 (nonverbose), the parameter is displayed only
   * in the Component inspector.
   * If it is 1 (verbose), the parameter is displayed in the Component inspector
   * and in the Parameters tab of the Property inspector.
   *
   * Availability: Flash MX 2004
   */
  verbose: 0 | 1;

  /**
   * Method; inserts an item in an object or array.
   * If a parameter is an object or array, the value property is an array.
   *
   * Availability: Flash MX 2004
   *
   * @param index - A zero-based integer index that indicates where the item will be inserted
   *                in the object or array. If the index is 0, the item is inserted at the beginning.
   *                If the index is greater than the list size, the new item is inserted at the end.
   * @param name - A string that specifies the name of the item to insert.
   *               This is a required parameter for object parameters.
   * @param value - A string that specifies the value of the item to insert.
   * @param type - A string that specifies the type of item to insert.
   * @returns Nothing.
   *
   * @example
   * // The following example inserts the value of New Value into the labelPlacement parameter:
   * // Select an instance of a Button component on the Stage.
   * var parms = fl.getDocumentDOM().selection[0].parameters;
   * parms[3].insertItem(0, "name", "New Value", "String");
   * var values = parms[3].value;
   * for (var prop in values) {
   *   fl.trace("labelPlacement parameter value = " + values[prop].value);
   * }
   */
  insertItem(index: number, name: string, value: string, type: string): void;

  /**
   * Method; removes an element of the object or array type of a screen or component parameter.
   *
   * Availability: Flash MX 2004
   *
   * @param index - The zero-based integer index of the item to be removed
   *                from the screen or component property.
   * @returns Nothing.
   *
   * @example
   * // The following example removes the element at index 1 from the labelPlacement parameter of a component:
   * // Select an instance of a Button component on the Stage.
   * var parms = fl.getDocumentDOM().selection[0].parameters;
   * var values = parms[2].value;
   * fl.trace("--Original--");
   * for (var prop in values) {
   *   fl.trace("labelPlacement value = " + values[prop].value);
   * }
   * parms[2].removeItem(1);
   * var newValues = parms[2].value;
   * fl.trace("--After Removing Item--");
   * for (var prop in newValues) {
   *   fl.trace("labelPlacement value = " + newValues[prop].value);
   * }
   *
   * // The following example removes the element at index 1 from the autoKeyNav parameter of a screen:
   * // Open a presentation document.
   * var parms = fl.getDocumentDOM().screenOutline.screens[1].parameters;
   * var values = parms[0].value;
   * fl.trace("--Original--");
   * for (var prop in values) {
   *   fl.trace("autoKeyNav value = " + values[prop].value);
   * }
   * parms[0].removeItem(1);
   * var newValues = parms[0].value;
   * fl.trace("--After Removing Item--");
   * for (var prop in newValues) {
   *   fl.trace("autoKeyNav value = " + newValues[prop].value);
   * }
   */
  removeItem(index: number): void;
}