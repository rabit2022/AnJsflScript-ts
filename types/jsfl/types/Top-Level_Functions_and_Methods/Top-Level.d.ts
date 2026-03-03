/**
 * Top-level functions and methods available in Adobe Flash/Animate JSFL scripts.
 */

/**
 * Displays a string in a modal Alert dialog box, along with an OK button.
 * @param alertText A string that specifies the message you want to display in the Alert dialog box.
 * @example
 * // The following example displays the message "Process Complete" in an Alert dialog box:
 * alert("Process Complete");
 * @see confirm
 * @see prompt
 */
declare function alert(alertText: string): void;

/**
 * Displays a string in a modal Alert dialog box, along with OK and Cancel buttons.
 * Note: If there are no documents (FLA files) open, this method fails with an error condition.
 * @param strAlert A string that specifies the message you want to display in the Alert dialog box.
 * @returns A Boolean value: true if the user clicks OK; false if the user clicks Cancel.
 * @example
 * // The following example displays the message "Sort data?" in an Alert dialog box:
 * confirm("Sort data?");
 * @see alert
 * @see prompt
 */
declare function confirm(strAlert: string): boolean;

/**
 * Displays a prompt and optional text in a modal Alert dialog box, along with OK and Cancel buttons.
 * @param promptMsg A string to display in the Prompt dialog box (limited to 256 characters in Mac OS X).
 * @param text An optional string to display as a default value for the text field.
 * @returns The string the user typed if the user clicks OK; null if the user clicks Cancel.
 * @example
 * // The following example prompts the user to enter a user name.
 * // If the user types a name and clicks OK, the name appears in the Output panel.
 * var userName = prompt("Enter user name", "Type user name here");
 * fl.trace(userName);
 * @see alert
 * @see confirm
 */
declare function prompt(promptMsg: string, text?: string): string | null;

// Extensible Tool Event Handlers
// These functions are called by Flash/Animate when an extensible tool is active.

/**
 * Called when the extensible tool becomes active (that is, when the tool is selected in the Tools panel).
 * Use this function to perform any initialization tasks the tool requires.
 * @example
 * // The following example sets the value of tools.activeTool when the extensible tool is selected in the Tools panel:
 * function activate() {
 *   var theTool = fl.tools.activeTool;
 * }
 * @see tools.activeTool
 */
declare function activate(): void;

/**
 * Called when Flash opens and the extensible tool is loaded into the Tools panel.
 * Use this function to set any information Flash needs to know about the tool.
 * @example
 * // The following examples show two possible implementations of this function:
 * function configureTool() {
 *   theTool = fl.tools.activeTool;
 *   theTool.setToolName( "myTool ");
 *   theTool.setIcon( "myTool.png ");
 *   theTool.setMenuString( "My Tool's menu string ");
 *   theTool.setToolTip( "my tool's tool tip ");
 *   theTool.setOptionsFile( "mtTool.xml " );
 * }
 * function configureTool() {
 *   theTool = fl.tools.activeTool;
 *   theTool.setToolName( "ellipse ");
 *   theTool.setIcon( "Ellipse.png ");
 *   theTool.setMenuString( "Ellipse ");
 *   theTool.setToolTip( "Ellipse ");
 *   theTool.showTransformHandles( true );
 * }
 */
declare function configureTool(): void;

/**
 * Called when the extensible tool becomes inactive (that is, when the active tool changes from this tool to another one).
 * Use this function to perform any cleanup the tool needs.
 * @example
 * // The following example displays a message in the Output panel when the tool becomes inactive:
 * function deactivate() {
 *   fl.trace( "Tool is no longer active" );
 * }
 */
declare function deactivate(): void;

/**
 * Called when the extensible tool is active and the user presses a key.
 * The script should call `tools.getKeyDown()` to determine which key was pressed.
 * @example
 * // The following example displays information about which key was pressed when the extensible tool is active and the user presses a key.
 * function keyDown() {
 *   fl.trace("key " + fl.tools.getKeyDown() + " was pressed");
 * }
 * @see keyUp
 * @see tools.getKeyDown
 */
declare function keyDown(): void;

/**
 * Called when the extensible tool is active and a key is released.
 * @example
 * // The following example displays a message in the Output panel when the extensible tool is active and a key is released.
 * function keyUp() {
 *   fl.trace("Key is released");
 * }
 * @see keyDown
 */
declare function keyUp(): void;

/**
 * Called when the extensible tool is active and the mouse button is double-clicked on the Stage.
 * @example
 * // The following example displays a message in the Output panel when the extensible tool is active and the mouse button is double-clicked.
 * function mouseDoubleClick() {
 *   fl.trace("Mouse was double-clicked");
 * }
 */
declare function mouseDoubleClick(): void;

/**
 * Called when the extensible tool is active and the mouse button is pressed while the pointer is over the Stage.
 * @param pt A point that specifies the location of the mouse when the button is pressed. It is passed to the function when the mouse button is pressed. This parameter is optional.
 * @example
 * // The following examples show how this function can be used when the extensible tool is active.
 * // The first example displays a message in the Output panel that the mouse button was pressed.
 * // The second example displays the x and y coordinates of the mouse’s location when the button was pressed.
 * function mouseDown() {
 *   fl.trace("Mouse button has been pressed");
 * }
 * function mouseDown(pt) {
 *   fl.trace("x = "+ pt.x+" :: y = "+pt.y);
 * }
 */
declare function mouseDown(pt?: { x: number; y: number }): void;

/**
 * Called whenever the extensible tool is active and the mouse moves over a specified point on the Stage.
 * The mouse button can be down or up.
 * @param pt A point that specifies the current location of the mouse. It is passed to the function whenever the mouse moves, which tracks the mouse location.
 *          If the Stage is in edit or edit-in-place mode, the point coordinates are relative to the object being edited.
 *          Otherwise, the point coordinates are relative to the Stage. This parameter is optional.
 * @example
 * // The following examples show how this function can be used.
 * // The first example displays a message in the Output panel that the mouse is being moved.
 * // The second example displays the x and y coordinates of the mouse’s location as it moves.
 * function mouseMove() {
 *   fl.trace("moving");
 * }
 * function mouseMove(pt) {
 *   fl.trace("x = "+ pt.x + " :: y = " + pt.y);
 * }
 */
declare function mouseMove(pt?: { x: number; y: number }): void;

/**
 * Called whenever the extensible tool is active and the mouse button is released after being pressed on the Stage.
 * @example
 * // The following example displays a message in the Output panel when the extensible tool is active and the mouse button is released.
 * function mouseUp() {
 *   fl.trace("mouse is up");
 * }
 */
declare function mouseUp(): void;

/**
 * Called when the extensible tool is active and the user changes its options in the Property inspector.
 * You can use the `tools.activeTool` property to query the current values of the options.
 * @example
 * // The following example displays a message in the Output panel when the extensible tool is active and the user changes its options in the Property inspector.
 * function notifySettingsChanged() {
 *   var theTool = fl.tools.activeTool;
 *   var newValue = theTool.myProp;
 * }
 * @see tools.activeTool
 */
declare function notifySettingsChanged(): void;

/**
 * Called when the extensible tool is active and the mouse moves, to allow the script to set custom pointers.
 * The script should call `tools.setCursor()` to specify the pointer to use.
 * @example
 * function setCursor() {
 *   fl.tools.setCursor( 1 );
 * }
 * @see tools.setCursor
 */
declare function setCursor(): void;

