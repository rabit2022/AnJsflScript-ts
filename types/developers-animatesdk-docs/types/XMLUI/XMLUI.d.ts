import {ElementItem} from "./XMLUIType";

/**
 * The XMLUI object provides the ability to get and set properties of an XMLUI dialog box,
 * and accept or cancel out of one. These methods are typically used in callbacks,
 * such as `oncommand` handlers in buttons.
 *
 * To retrieve an object representing the current XMLUI dialog box, use `fl.xmlui`.
 * @see fl.xmlui
 */
export interface XMLUI {
  /**
   * Closes the current XMLUI dialog box with an accept state.
   * This is equivalent to the user clicking the OK button.
   * @returns Nothing.
   * @example
   * // No specific example provided in source docs, but usage would be:
   * fl.xmlui.accept();
   * @see fl.xmlui
   * @see document.xmlPanel
   * @see xmlui.cancel
   */
  accept(): void;

  /**
   * Closes the current XMLUI dialog box with a cancel state.
   * This is equivalent to the user clicking the Cancel button.
   * @returns Nothing.
   * @example
   * // No specific example provided in source docs, but usage would be:
   * fl.xmlui.cancel();
   * @see fl.xmlui
   * @see document.xmlPanel
   * @see xmlui.accept
   */
  cancel(): void;

  /**
   * Retrieves the value of the specified property of the current XMLUI dialog box.
   * In cases where you might expect a Boolean value of `true` or `false`,
   * it returns the string `"true"` or `"false"`.
   * @param controlPropertyName A string that specifies the name of the XMLUI property whose value you want to retrieve.
   * @returns A string that represents the value of the specified property.
   * @example
   * // The following example returns the value of a property named URL:
   * fl.xmlui.get("URL");
   * @see fl.xmlui
   * @see document.xmlPanel
   * @see xmlui.getControlItemElement
   * @see xmlui.set
   */
  get(controlPropertyName: string): string;

  /**
   * Returns the label and value of the line selected in a ListBox or ComboBox control.
   * @param controlPropertyName A string that specifies the property whose control item element you want to retrieve.
   * @returns An object that represents the current control item for the control specified by `controlPropertyName`.
   *          The object has `label` and `value` string properties.
   * @example
   * // The following example returns the label and value of the currently selected line for the myListBox control:
   * var elem = new Object();
   * elem = fl.xmlui.getControlItemElement("myListBox");
   * fl.trace("label = " + elem.label + " value = " + elem.value);
   * @see fl.xmlui
   * @see document.xmlPanel
   * @see xmlui.get
   * @see xmlui.setControlItemElement
   * @see xmlui.setControlItemElements
   */
  getControlItemElement(controlPropertyName: string): { label: string; value: string };

  /**
   * Returns a Boolean value that specifies whether the control is enabled or disabled (dimmed).
   * @param controlID A string that specifies the ID attribute of the control whose status you want to retrieve.
   * @returns A Boolean value of `true` if the control is enabled; `false` otherwise.
   * @example
   * // The following example returns a value that indicates whether the control with the ID attribute myListBox is enabled:
   * var isEnabled = fl.xmlui.getEnabled("myListBox");
   * fl.trace(isEnabled);
   * @see fl.xmlui
   * @see document.xmlPanel
   * @see xmlui.setEnabled
   */
  getEnabled(controlID: string): boolean;

  /**
   * Returns a Boolean value that specifies whether the control is visible or hidden.
   * @param controlID A string that specifies the ID attribute of the control whose visibility status you want to retrieve.
   * @returns A Boolean value of `true` if the control is visible, or `false` if it is invisible (hidden).
   * @example
   * // The following example returns a value that indicates whether the control with the ID attribute myListBox is visible:
   * var isVisible = fl.xmlui.getVisible("myListBox");
   * fl.trace(isVisible);
   * @see xmlui.setVisible
   */
  getVisible(controlID: string): boolean;

  /**
   * Modifies the value of the specified property of the current XMLUI dialog box.
   * @param controlPropertyName A string that specifies the name of XMLUI property to modify.
   * @param value A string that specifies the value to which you want to set the XMLUI property.
   * @returns Nothing.
   * @example
   * // The following example sets the value of a property named URL to www.adobe.com:
   * fl.xmlui.set("URL", "www.adobe.com");
   * @see fl.xmlui
   * @see document.xmlPanel
   * @see xmlui.get
   * @see xmlui.setControlItemElement
   * @see xmlui.setControlItemElements
   */
  set(controlPropertyName: string, value: string): void;

  /**
   * Sets the label and value of the currently selected line in the ListBox or ComboBox control.
   * If the `value` property does not exist in the `elementItem` object, it is created and assigned the same value as `label`.
   * @param controlPropertyName A string that specifies the control item element to set.
   * @param elementItem A JavaScript object with a string property named `label` and an optional string property named `value`.
   * @returns Nothing.
   * @example
   * // The following example sets the label and value for the current item of the control property named PhoneNumber:
   * var elem = new Object();
   * elem.label = "Fax";
   * elem.value = "707-555-5555";
   * fl.xmlui.setControlItemElement("PhoneNumber", elem);
   * @see fl.xmlui
   * @see document.xmlPanel
   * @see xmlui.getControlItemElement
   * @see xmlui.set
   * @see xmlui.setControlItemElements
   */
  setControlItemElement(
      controlPropertyName: string,
      elementItem: ElementItem
  ): void;

  /**
   * Clears the values of the ListBox or ComboBox control specified by `controlID` and replaces the list or menu items
   * with the label, value pairs specified by `elementItemArray`.
   * If a `value` property does not exist for an item in the array, it is created and assigned the same value as `label`.
   * @param controlID A string that specifies the ID attribute of the control you want to set.
   * @param elementItemArray An array of JavaScript objects, where each object has a string property named `label`
   *                         and an optional string property named `value`.
   * @returns Nothing.
   * @example
   * // The following example sets the label and value of items in the control with the ID attribute myControlID:
   * var nameArray = new Array("January", "February", "March");
   * var monthArray = new Array();
   * for (i=0; i<nameArray.length; i++){
   *   elem = new Object();
   *   elem.label = nameArray[i];
   *   elem.value = i;
   *   monthArray[i] = elem;
   * }
   * fl.xmlui.setControlItemElements("myControlID", monthArray);
   * @see xmlui.getControlItemElement
   * @see xmlui.set
   * @see xmlui.setControlItemElement
   */
  setControlItemElements(
      controlID: string,
      elementItemArray: Array<ElementItem>
  ): void;

  /**
   * Enables or disables (dims) a control.
   * @param controlID A string that specifies the ID attribute of the control you want to enable or disable.
   * @param enable A Boolean value of `true` if you want to enable the control, or `false` if you want to disable (dim) it.
   * @returns Nothing.
   * @example
   * // The following example dims the control with the ID attribute myControl:
   * fl.xmlui.setEnabled("myControl", false);
   * @see xmlui.getEnabled
   */
  setEnabled(controlID: string, enable: boolean): void;

  /**
   * Shows or hides a control.
   * @param controlID A string that specifies the ID attribute of the control you want to show or hide.
   * @param visible A Boolean value of `true` if you want to show the control; `false` if you want to hide it.
   * @returns Nothing.
   * @example
   * // The following example hides the control with the ID attribute myControl:
   * fl.xmlui.setVisible("myControl", false);
   * @see xmlui.getVisible
   */
  setVisible(controlID: string, visible: boolean): void;
}

