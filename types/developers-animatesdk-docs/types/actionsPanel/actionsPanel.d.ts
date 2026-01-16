/**
 * Represents the currently displayed Actions panel in Adobe Animate (formerly Flash).
 * This object is a property of the global `fl` object: `fl.actionsPanel`.
 *
 * ⚠️ Note: Some methods marked as "dropped" are retained for historical compatibility
 * but are not functional in Adobe Animate (only available in Flash CS3 Professional).
 */
export interface ActionsPanel {
    /**
     * Dropped in Adobe Animate.
     *
     * Returns the class of the specified ActionScript variable defined in the Actions panel.
     * The cursor or selection must be positioned after the variable definition.
     *
     * @param ASvariableName - A string representing the name of an ActionScript variable.
     * @returns A string representing the class of which `ASvariableName` is a member.
     *
     * @example
     * // Place the following code in the Actions panel:
     * // var myVar:ActivityEvent;
     * // Position cursor after that line.
     * // Then in a JSFL file:
     * var theClass = fl.actionsPanel.getClassForObject("myVar");
     * fl.trace(theClass); // traces: "ActivityEvent"
     *
     * @deprecated Dropped in Adobe Animate. Only available in Flash CS3 Professional.
     */
    getClassForObject(ASvariableName: string): string;

    /**
     * Dropped in Adobe Animate.
     *
     * Specifies whether Script Assist mode is enabled.
     *
     * @returns `true` if Script Assist mode is enabled; otherwise `false`.
     *
     * @example
     * var mAssist = fl.actionsPanel.getScriptAssistMode();
     * if (!mAssist) {
     *   alert("For more guidance when writing ActionScript code, try Script Assist mode");
     * }
     *
     * @deprecated Dropped in Adobe Animate. Only available in Flash CS3 Professional.
     */
    getScriptAssistMode(): boolean;

    /**
     * Returns the text that is currently selected in the Actions panel.
     *
     * @returns A string containing the selected text. Empty string if nothing is selected.
     *
     * @example
     * var apText = fl.actionsPanel.getSelectedText();
     * fl.trace(apText);
     *
     * @see actionsPanel.getText
     * @see actionsPanel.hasSelection
     * @see actionsPanel.replaceSelectedText
     * @see actionsPanel.setSelection
     */
    getSelectedText(): string;

    /**
     * Returns all text in the Actions panel.
     *
     * @returns A string containing all text in the Actions panel.
     *
     * @example
     * var apText = fl.actionsPanel.getText();
     * fl.trace(apText);
     *
     * @see actionsPanel.getSelectedText
     * @see actionsPanel.setText
     */
    getText(): string;

    /**
     * Specifies whether any text is currently selected in the Actions panel.
     *
     * @returns `true` if text is selected; otherwise `false`.
     *
     * @example
     * if (fl.actionsPanel.hasSelection()) {
     *   var apText = fl.actionsPanel.getSelectedText();
     * } else {
     *   var apText = fl.actionsPanel.getText();
     * }
     * fl.trace(apText);
     *
     * @see actionsPanel.getSelectedText
     * @see actionsPanel.getText
     * @see actionsPanel.replaceSelectedText
     * @see actionsPanel.setSelection
     */
    hasSelection(): boolean;

    /**
     * Replaces the currently selected text with the specified replacement text.
     * If no text is selected, this method has no effect.
     * Characters following the selection are preserved (not overwritten).
     *
     * @param replacementText - The text to insert in place of the selection.
     * @returns `true` if the Actions panel exists and replacement occurred; otherwise `false`.
     *
     * @example
     * if (fl.actionsPanel.hasSelection()) {
     *   fl.actionsPanel.replaceSelectedText("// © 2006 Adobe Inc.");
     * }
     *
     * @see actionsPanel.getSelectedText
     * @see actionsPanel.hasSelection
     * @see actionsPanel.setSelection
     * @see actionsPanel.setText
     */
    replaceSelectedText(replacementText: string): boolean;

    /**
     * Dropped in Adobe Animate.
     *
     * Enables or disables Script Assist mode.
     *
     * @param bScriptAssist - `true` to enable Script Assist mode; `false` to disable.
     * @returns `true` if the mode was changed successfully; otherwise `false`.
     *
     * @example
     * fl.trace(fl.actionsPanel.getScriptAssistMode());
     * if (fl.actionsPanel.getScriptAssistMode()) {
     *   fl.actionsPanel.setScriptAssistMode(false);
     * } else {
     *   fl.actionsPanel.setScriptAssistMode(true);
     * }
     * fl.trace(fl.actionsPanel.getScriptAssistMode());
     *
     * @deprecated Dropped in Adobe Animate. Only available in Flash CS3 Professional.
     */
    setScriptAssistMode(bScriptAssist: boolean): boolean;

    /**
     * Selects a range of characters in the Actions panel.
     *
     * @param startIndex - Zero-based index of the first character to select.
     * @param numberOfChars - Number of characters to select.
     * @returns `true` if the requested range could be selected; otherwise `false`.
     *
     * @example
     * // Type the following as the first line in the Actions panel:
     * // 2006 - Addresses user request 40196
     * // Then in a JSFL file:
     * fl.actionsPanel.setSelection(3, 4);
     * fl.actionsPanel.replaceSelectedText("// Last updated: 2007");
     *
     * @see actionsPanel.getSelectedText
     * @see actionsPanel.hasSelection
     * @see actionsPanel.replaceSelectedText
     */
    setSelection(startIndex: number, numberOfChars: number): boolean;

    /**
     * Clears all text in the Actions panel and replaces it with the specified text.
     *
     * @param replacementText - The new text to place in the Actions panel.
     * @returns `true` if the text was successfully set; otherwise `false`.
     *
     * @example
     * fl.actionsPanel.setText("// Deleted this code - no longer needed");
     *
     * @see actionsPanel.getText
     * @see actionsPanel.replaceSelectedText
     */
    setText(replacementText: string): boolean;
}

