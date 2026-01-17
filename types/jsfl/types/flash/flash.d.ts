/**
 * Adobe Animate / Flash Professional Scripting API Declaration File
 *
 * This file declares the global `fl` object and its associated types.
 * The `fl` object represents the Flash/Animate application itself.
 */


interface FlashObject {
    // ==========================
    // Methods
    // ==========================

    /**
     * Registers a function to be called when a specific event is received.
     * @param eventType The type of event to listen for.
     * @param callback The function to call when the event occurs.
     * @returns An integer ID for the listener, which can be used with `removeEventListener`.
     * @since Flash CS3 Professional
     */
    addEventListener(eventType: "documentNew" | "documentOpened" | "documentClosed" | "mouseMove" | "documentChanged" | "layerChanged" | "timelineChanged" | "frameChanged", callback: Function): number;

    /**
     * Adds the specified tool from the master toolbar to the main toolbar, appending it at the end.
     * @param toolName The name of the tool to add. See `fl.selectTool()` for acceptable values.
     * @returns `true` if the tool was added successfully; `false` otherwise.
     * @since Animate 2020
     *
     * @example
     * ```javascript
     * var success = fl.addToolInToolbar("oval");
     * ```
     */
    addToolInToolbar(toolName: string): boolean;

    /**
     * Opens a File Open or File Save system dialog box and lets the user specify a file.
     * @param mode Either "open" or "save".
     * @param title The title for the dialog box.
     * @returns The selected file URI, or an empty string if canceled.
     * @since Flash MX 2004
     */
    browseForFileURL(mode: "open" | "save", title?: string): FileURI;

    /**
     * Displays a Browse for Folder dialog box and lets the user select a folder.
     * @param title The title for the dialog box.
     * @returns The selected folder URI, or an empty string if canceled.
     * @since Flash MX 2004
     */
    browseForFolderURL(title?: string): FileURI;

    /**
     * Clears the publish cache.
     * @since Flash CS5.5 Professional
     */
    clearPublishCache(): void;

    /**
     * Copies the specified string to the Clipboard.
     * @param str The string to copy.
     * @since Flash MX 2004
     */
    clipCopyString(str: string): void;

    /**
     * Closes all open documents, displaying the Save As dialog box for any unsaved documents.
     * @since Flash MX 2004
     */
    closeAll(): void;

    /**
     * Closes all the SWF files that were opened with Control > Test Movie.
     * @since Flash MX 2004
     */
    closeAllPlayerDocuments(): void;

    /**
     * Closes the specified document.
     * @param documentObject The document to close.
     * @param bPromptToSaveChanges If `true` (default), prompts to save changes.
     * @returns `true` if the document was closed; `false` if the user cancels.
     * @since Flash MX 2004
     */
    closeDocument(documentObject: FlashDocument, bPromptToSaveChanges?: boolean): boolean;

    /**
     * Silently copies a library item from a document without exposing it in the UI.
     * Use `document.clipPaste()` to paste the item.
     * @param fileURI The URI of the source FLA/XFL file.
     * @param libraryItemPath The path to the library item within the source file.
     * @returns `true` if the copy succeeds; `false` otherwise.
     * @since Flash Professional CS5
     *
     * @example
     * ```javascript
     * fl.copyLibraryItem("file:///c:/users/userid/Desktop/Robot.fla", "armjoint-l1");
     * fl.getDocumentDOM().clipPaste(true);
     * ```
     */
    copyLibraryItem(fileURI: FileURI, libraryItemPath: string): boolean;

    /**
     * Opens a new document and selects it.
     * @param docType The type of document to create.
     * @returns The newly created FlashDocument object, or `undefined` on error.
     * @since Flash MX 2004
     *
     * @example
     * ```javascript
     * // Create two AS3.0 documents and one HTML5 canvas document.
     * fl.createDocument();
     * fl.createDocument("timeline");
     * fl.createDocument("htmlcanvas");
     * ```
     */
    createDocument(docType?: "timeline" | "htmlcanvas" | "vrPanoDoc" | "vr360Doc"): FlashDocument | undefined;

    /**
     * Returns a specific document’s publishing profile without opening the file.
     * @param ucfURI The URI of the FLA file.
     * @param profileName The name of the profile to export (optional).
     * @returns The publish profile as an XML string.
     * @since Flash Professional CS5
     *
     * @example
     * ```javascript
     * var ppXML = "";
     * var ucfURI = fl.browseForFileURL("open", "select a FLA");
     * if (ucfURI && ucfURI.length > 0)
     *     ppXML = fl.exportPublishProfileString(ucfURI);
     * fl.trace(ppXML);
     * ```
     */
    exportPublishProfileString(ucfURI: FileURI, profileName?: string): string;

    /**
     * Checks whether a file already exists on disk.
     * @param fileURI The file URI to check.
     * @returns `true` if the file exists; `false` otherwise.
     * @since Flash MX 2004
     *
     * @example
     * ```javascript
     * alert(fl.fileExists("file:///C|/example.fla"));
     * alert(fl.fileExists("file:///C|/example.jsfl"));
     * alert(fl.fileExists(""));
     * ```
     */
    fileExists(fileURI: FileURI): boolean;

    /**
     * Lets you target a specific file by using its unique identifier.
     * @param id The unique document ID.
     * @returns The FlashDocument object, or `null` if not found.
     * @since Flash CS3 Professional
     *
     * @example
     * ```javascript
     * var originalDocID = fl.getDocumentDOM().id;
     * // other code here, maybe working in different files
     * var targetDoc = fl.findDocumentDOM(originalDocID);
     * // Set the height of the Stage in the original document to 400 pixels.
     * targetDoc.height = 400;
     * ```
     */
    findDocumentDOM(id: number): FlashDocument | null;

    /**
     * Returns an array of integers representing the position(s) of a document in the `fl.documents` array.
     * @param name The name of the document to find.
     * @returns An array of indices.
     * @since Flash MX 2004
     *
     * @example
     * ```javascript
     * var filename = "test.fla"
     * var docIndex = fl.findDocumentIndex(filename);
     * for (var index in docIndex)
     *     fl.trace(filename + " is open at index " + docIndex[index]);
     * ```
     */
    findDocumentIndex(name: string): number[];

    /**
     * Exposes elements with instance names that match the specified text.
     * @param instanceName The instance name to search for.
     * @param document The document to search in.
     * @returns An array of `FoundObject`.
     * @since Flash CS3 Professional
     *
     * @example
     * ```javascript
     * var nameToSearchFor = "instance01";
     * var doc = fl.getDocumentDOM();
     * var results = fl.findObjectInDocByName(nameToSearchFor, doc);
     * if (results.length > 0) {
     *     alert("success, found " + results.length + " objects");
     * } else {
     *     alert("failed, no objects named " + nameToSearchFor + " found");
     * }
     * ```
     */
    findObjectInDocByName(instanceName: string, document: FlashDocument): FoundObject[];

    /**
     * Exposes elements of a specified element type in a document.
     * @param elementType The type of element to search for (e.g., "text").
     * @param document The document to search in.
     * @returns An array of `FoundObject`.
     * @since Flash CS3 Professional
     *
     * @example
     * ```javascript
     * var doc = fl.getDocumentDOM();
     * var typeToSearchFor = "text";
     * var results = fl.findObjectInDocByType(typeToSearchFor, doc);
     * if (results.length > 0) {
     *     for (var i = 0; i < results.length; i++) {
     *         results[i].obj.setTextString("new text");
     *     }
     *     alert("success, found " + results.length + " objects");
     * } else {
     *     alert("failed, no objects of type " + typeToSearchFor + " found");
     * }
     * ```
     */
    findObjectInDocByType(elementType: string, document: FlashDocument): FoundObject[];

    /**
     * Returns memory usage information for the Flash application (Windows only).
     * @param memType The memory area to query (0-8).
     * @returns The number of bytes used.
     * @since Flash 8 (Windows only)
     *
     * @example
     * ```javascript
     * var memsize = fl.getAppMemoryInfo(2);
     * fl.trace("Flash current memory consumption is " + memsize + " bytes or " + memsize/1024 + "KB");
     * ```
     */
    getAppMemoryInfo(memType: number): number;

    /**
     * Retrieves the DOM of the currently active document.
     * @returns The active FlashDocument object, or `null` if no documents are open.
     * @since Flash MX 2004
     *
     * @example
     * ```javascript
     * var currentDoc = fl.getDocumentDOM();
     * fl.trace(currentDoc.name);
     * ```
     */
    getDocumentDOM(): FlashDocument | null;

    /**
     * Returns the SWFPanel object based on the panel's localized name or its SWF filename.
     * @param panelName The localized name or SWF filename (without extension).
     * @param useLocalizedPanelName If `false`, `panelName` is treated as the SWF filename.
     * @returns The SWFPanel object.
     * @since Flash CS5.5 Professional
     *
     * @example
     * ```javascript
     * fl.trace('name of panel is: ' + fl.getSwfPanel('Project').name);
     * ```
     */
    getSwfPanel(panelName: string, useLocalizedPanelName?: boolean): SWFPanel;

    /**
     * Retrieves a theme color that matches the specified parameter name.
     * @param themeParamName A theme parameter name from `getThemeColorParameters()`.
     * @returns A color string in `#rrggbb` or `#rrggbbaa` format, or "true"/"false" for `themeUseGradients`.
     * @since Adobe Animate
     *
     * @example
     * ```javascript
     * var colorValue = fl.getThemeColor("themeAppBackgroundColor");
     * fl.trace("app background color " + colorValue);
     * var staticColor = fl.getThemeColor("themeStaticTextNormalColor");
     * fl.trace("staticColor " + staticColor);
     * ```
     */
    getThemeColor(themeParamName: string): string;

    /**
     * Retrieves an array of theme color parameter names.
     * @returns An array of strings.
     * @since Adobe Animate
     *
     * @example
     * ```javascript
     * var params = fl.getThemeColorParameters();
     * for(x = 0; x < params.length; x++){
     *     fl.trace("params: " + params[x]);
     * }
     * ```
     */
    getThemeColorParameters(): string[];

    /**
     * Returns either the font style or the font size used to draw the UI.
     * @param infoType Either "fontStyle" or "fontSize".
     * @param size Either "large" or "small".
     * @returns The requested font information as a string.
     * @since Adobe Animate
     *
     * @example
     * ```javascript
     * fl.getThemeFontInfo('fontStyle', 'large'); // Return the fontStyle for large size
     * fl.getThemeFontInfo('fontStyle', 'small'); // Return the fontStyle for small size
     * fl.getThemeFontInfo('fontSize', 'large'); // Return the fontSize for large size
     * fl.getThemeFontInfo('fontSize', 'small'); // Return the fontSize for small size
     * ```
     */
    getThemeFontInfo(infoType: "fontStyle" | "fontSize", size: "large" | "small"): string;

    /**
     * Determines whether a specified font is installed.
     * @param fontName The name of the font to check.
     * @returns `true` if the font is installed; `false` otherwise.
     * @since Flash CS4 Professional
     *
     * @example
     * ```javascript
     * fl.trace(fl.isFontInstalled("Times"));
     * ```
     */
    isFontInstalled(fontName: string): boolean;

    /**
     * Maps an escaped Unicode URL to a UTF-8 or MBCS URL.
     * @param URI The escaped Unicode URL to map.
     * @param returnMBCS If `true`, returns an escaped MBCS path; otherwise, returns UTF-8.
     * @returns The converted URL.
     * @since Flash MX 2004
     *
     * @example
     * ```javascript
     * var url = MMExecute( "fl.mapPlayerURL(" + myURL + ", false);" );
     * mc.loadMovie( url);
     * ```
     */
    mapPlayerURL(URI: string, returnMBCS?: boolean): string;

    /**
     * Opens a Flash (FLA) document for editing in a new window and gives it focus.
     * @param fileURI The URI of the FLA file to open.
     * @returns The FlashDocument object for the opened document.
     * @since Flash MX 2004
     *
     * @example
     * ```javascript
     * var doc = fl.openDocument("file:///c|/FlashDocument.fla");
     * ```
     */
    openDocument(fileURI: FileURI): FlashDocument;

    /**
     * Opens a script (JSFL, AS, ASC) or other file (XML, TXT) in the Flash text editor.
     * @param fileURI The URI of the file to open.
     * @since Flash MX 2004
     *
     * @example
     * ```javascript
     * fl.openScript("file:///c|/temp/my_test.jsfl");
     * ```
     */
    openScript(fileURI: FileURI): void;

    /**
     * Quits Flash/Animate, prompting the user to save any changed documents.
     * @param bPromptIfNeeded If `false`, quits immediately without saving.
     * @since Flash MX 2004
     *
     * @example
     * ```javascript
     * // Quit with prompt to save any modified documents.
     * fl.quit();
     * fl.quit(true); // True is optional.
     * // Quit without saving any files.
     * fl.quit(false);
     * ```
     */
    quit(bPromptIfNeeded?: boolean): void;

    /**
     * **Dropped in Adobe Animate.**
     * Reloads all effects descriptors. Not functional in current versions.
     * @since Flash MX 2004 (Dropped in Adobe Animate)
     */
    reloadEffects(): void;

    /**
     * Rebuilds the Tools panel from the `toolconfig.xml` file.
     * Used when creating extensible tools.
     * @since Flash MX 2004
     *
     * @example
     * ```javascript
     * // A one-line script in the Commands folder.
     * fl.reloadTools();
     * ```
     */
    reloadTools(): void;

    /**
     * Unregisters a function that was registered using `addEventListener()`.
     * @param eventType The event type to remove.
     * @param id The listener ID returned by `addEventListener()`.
     * @returns `true` if the listener was removed; `false` if it wasn't found.
     * @since Flash CS3 Professional
     *
     * @example
     * ```javascript
     * fl.removeEventListener("documentClosed", eventID);
     * ```
     */
    removeEventListener(eventType: string, id: number): boolean;

    /**
     * Resets the global Classpath setting in the ActionScript 3.0 Settings dialog to the default value.
     * @since Flash CS3 Professional
     *
     * @example
     * ```javascript
     * fl.resetAS3PackagePaths();
     * ```
     */
    resetAS3PackagePaths(): void;

    /**
     * **Dropped in Adobe Animate.**
     * Resets the global Classpath for ActionScript 2.0. Not functional in current versions.
     * @since Flash CS3 Professional (Dropped in Adobe Animate)
     */
    resetPackagePaths(): void;

    /**
     * Executes a JavaScript (JSFL) file.
     * @param fileURI The URI of the script file to execute.
     * @param funcName The name of a function within the script to call (optional).
     * @param args Arguments to pass to the function (optional).
     * @returns The function's result as a string, if `funcName` is specified.
     * @since Flash MX 2004
     *
     * @example
     * ```javascript
     * // Suppose testScript.jsfl contains a function testFunct(num, minNum)
     * fl.runScript("file:///C|/testScript.jsfl", "testFunct", 10, 1);
     * // Or just run the script without calling a specific function:
     * fl.runScript("file:///C|/testScript.jsfl");
     * ```
     */
    runScript(fileURI: FileURI, funcName?: string, ...args: any[]): string | void;

    /**
     * Saves all open documents.
     * Shows "Save As" for unsaved files. Does not save unmodified files.
     * @since Flash MX 2004
     *
     * @example
     * ```javascript
     * fl.saveAll();
     * ```
     */
    saveAll(): void;

    /**
     * Saves the specified document as a FLA document.
     * @param document The document to save.
     * @param fileURI The URI to save the document to (optional).
     * @returns `true` if the save operation succeeds; `false` otherwise.
     * @since Flash MX 2004
     *
     * @example
     * ```javascript
     * // Save the current document.
     * alert(fl.saveDocument(fl.getDocumentDOM()));
     * // Save specified documents.
     * alert(fl.saveDocument(fl.documents[0], "file:///C|/example1.fla"));
     * alert(fl.saveDocument(fl.documents[1],"file:///C|/example2.fla"));
     * ```
     */
    saveDocument(document: FlashDocument, fileURI?: FileURI): boolean;

    /**
     * Displays the Save As dialog box for the specified document.
     * @param document The document to save.
     * @returns `true` if the Save As operation completes successfully; `false` otherwise.
     * @since Flash MX 2004
     *
     * @example
     * ```javascript
     * alert(fl.saveDocumentAs(fl.documents[1]));
     * ```
     */
    saveDocumentAs(document: FlashDocument): boolean;

    /**
     * Enables selection or editing of an element.
     * @param elementObject The Element object to select.
     * @param editMode If `true`, enters edit mode for the element (e.g., for symbols).
     * @returns `true` if the element was successfully selected; `false` otherwise.
     * @since Flash CS3 Professional
     *
     * @example
     * ```javascript
     * var nameToSearchFor = "second text field ";
     * var doc = fl.getDocumentDOM();
     * // Start by viewing Scene 1 (index value of 0).
     * document.editScene(0);
     * // Search for element by name.
     * var results = fl.findObjectInDocByName(nameToSearchFor, doc);
     * if (results.length > 0) {
     *     // Select the first element found.
     *     fl.selectElement(results[0], false);
     *     alert( "success, found " + results.length + " objects ")
     * } else {
     *     alert( "failed, no objects with name " " + nameToSearchFor + " " found ");
     * }
     * ```
     */
    selectElement(elementObject: FlashElement, editMode: boolean): boolean;

    /**
     * Selects the specified tool in the Tools panel.
     * @param toolName The name of the tool to select.
     * @since Flash CS3 Professional
     *
     * @example
     * ```javascript
     * fl.selectTool("pen");
     * ```
     */
    selectTool(toolName: "arrow" | "bezierSelect" | "freeXform" | "fillXform" | "lasso" | "pen" | "penplus" | "penminus" | "penmodify" | "text" | "line" | "rect" | "oval" | "rectPrimitive" | "ovalPrimitive" | "polystar" | "pencil" | "brush" | "inkBottle" | "bucket" | "eyeDropper" | "eraser" | "hand" | "magnifier" | "GPUBrush" | "ThreeDRotate" | "ThreeDXform" | "lassoPoly" | "magicWand" | "paintBrush" | "camera" | "width" | "stageRotation" | "timeScrub" | "puppet" | string): void;

    /**
     * Sets the active window to be the specified document.
     * @param document The FlashDocument object to activate.
     * @param bActivateFrame Ignored, for compatibility only.
     * @since Flash MX 2004
     *
     * @example
     * ```javascript
     * fl.setActiveWindow(fl.documents[0]);
     * var theIndex = fl.findDocumentIndex("myFile.fla");
     * fl.setActiveWindow(fl.documents[theIndex]);
     * ```
     */
    setActiveWindow(document: FlashDocument, bActivateFrame?: any): void;

    /**
     * Lets you disable the warning about a script running too long.
     * Useful for batch operations.
     * @param show If `false`, disables the warning.
     * @since Flash 8
     *
     * @example
     * ```javascript
     * fl.showIdleMessage(false);
     * var result = timeConsumingFunction();
     * fl.showIdleMessage(true);
     * ```
     */
    showIdleMessage(show: boolean): void;

    /**
     * Sets a boolean preference value.
     * @param keySection The preferences section (usually "Settings").
     * @param keyName The name of the boolean preference.
     * @param keyValue The value to set (`true` or `false`).
     * @since Adobe Animate
     *
     * @example
     * ```javascript
     * fl.setPrefBoolean("BridgeTalk", "LogIncoming", true);
     * ```
     */
    setPrefBoolean(keySection: string, keyName: string, keyValue: boolean): void;

    /**
     * Toggles a breakpoint for the given .as file at the given line.
     * @param fileURI The URI of the AS file.
     * @param line The line number.
     * @param enable If `true`, enables the breakpoint; if `false`, disables/erases it.
     * @since Adobe Animate
     *
     * @example
     * ```javascript
     * fl.toggleBreakpoint("file:///C|/AS/breakpointTest.as", 10, 1);
     * ```
     */
    toggleBreakpoint(fileURI: FileURI, line: number, enable: boolean): void;

    /**
     * Sends a text string to the Output panel.
     * @param message The string to send.
     * @since Flash MX 2004
     *
     * @example
     * ```javascript
     * fl.outputPanel.clear();
     * fl.trace("Hello World!!!");
     * var myPet = "cat";
     * fl.trace("\nI have a " + myPet);
     * fl.trace("");
     * fl.trace("I love my " + myPet);
     * fl.trace("Do you have a " + myPet +"?");
     * ```
     */
    trace(message: string): void;

    /**
     * Launches the XML To UI dialog from a URI pointing to an XML file.
     * @param xmlURI The URI of the XML file defining the dialog.
     * @returns An XMLUI object containing control properties and a `dismiss` property ("accept" or "cancel").
     * @since Adobe Animate
     *
     * @example
     * ```javascript
     * var obj = fl.xmlPanel( fl.configURI + "Commands/Test.xml" );
     * for (var prop in obj) {
     *     fl.trace( "property " + prop + " = " + obj[prop]);
     * }
     * ```
     */
    xmlPanel(xmlURI: FileURI): XMLUI;

    /**
     * Launches the XML To UI dialog from an XML-format string.
     * @param xmlString A string containing XML that defines a dialog.
     * @returns An XMLUI object.
     * @since Adobe Animate
     *
     * @example
     * ```javascript
     * var str = " <?xml version=\"1.0\"? > <dialog id=\"scale-dialog\" title=\"Scale Selection\"buttons=\"accept, cancel\" > <grid > <columns > <column/ > <column/ > </columns > <rows > <rowalign=\"center\" > <label value=\"Scale y:\" control=\"yScale\"/ > <textboxid=\"yScale\"/ > </row > </rows > </grid > </dialog > ";
     * var theDialog = fl.xmlPanelFromString(str);
     * ```
     */
    xmlPanelFromString(xmlString: string): XMLUI;

    // ==========================
    // Properties
    // ==========================

    /**
     * Read-only reference to the Actions panel object.
     * @since Flash MX 2004
     */
    readonly actionsPanel: ActionsPanel;

    /**
     * A string corresponding to the global Classpath setting for ActionScript 3.0.
     * Paths are delimited by semicolons.
     * @since Flash CS3 Professional
     */
    as3PackagePaths: string;

    /**
     * The `compilerErrors` object, which represents the Compiler Errors panel,
     * is a property of the `fl` (flash) object.
     *
     * @example
     * ```javascript
     * fl.compilerErrors.clear();
     * fl.compilerErrors.save("file:///c|/logs/errors.txt");
     * ```
     */
    readonly compilerErrors: CompilerErrors;

    /**
     * The `componentsPanel` object, which represents the Components panel,
     * is a property of the `fl` (flash) object.
     *
     * @example
     * ```javascript
     * fl.componentsPanel.addItemToDocument({x:0, y:100}, "Data", "WebServiceConnector");
     * fl.componentsPanel.reload();
     * ```
     */
    readonly componentsPanel: ComponentsPanel;

    /**
     * Read-only string specifying the full path to the user’s Configuration folder (platform-specific format).
     * @since Flash MX 2004
     *
     * @example
     * ```javascript
     * fl.trace("My local configuration directory is " + fl.configDirectory);
     * ```
     */
    readonly configDirectory: string;

    /**
     * Read-only string specifying the full path to the user’s Configuration directory as a `file:///` URI.
     * @since Flash MX 2004
     *
     * @example
     * ```javascript
     * fl.runScript( fl.configURI + "Commands/Test.jsfl" );
     * ```
     */
    readonly configURI: FileURI;

    /**
     * A Boolean value specifying whether Contact Sensitive selection mode is enabled.
     * @since Flash 8
     *
     * @example
     * ```javascript
     * var contact = fl.contactSensitiveSelection;
     * fl.contactSensitiveSelection = false;
     * // Insert selection code here.
     * fl.contactSensitiveSelection = contact;
     * ```
     */
    contactSensitiveSelection: boolean;

    /**
     * Read-only array of strings representing the types of documents that can be created.
     * @since Flash MX 2004
     *
     * @example
     * ```javascript
     * fl.trace("Number of choices " + fl.createNewDocList.length);
     * for (i = 0; i < fl.createNewDocList.length; i++)
     *     fl.trace("choice: " + fl.createNewDocList[i]);
     * ```
     */
    readonly createNewDocList: string[];

    /**
     * Read-only array of strings representing the file extensions of creatable document types.
     * Corresponds by index to `createNewDocList`.
     * @since Flash MX 2004
     *
     * @example
     * ```javascript
     * fl.trace("Number of types " + fl.createNewDocListType.length);
     * for (i = 0; i < fl.createNewDocListType.length; i++)
     *     fl.trace("type: " +fl.createNewDocListType[i]);
     * ```
     */
    readonly createNewDocListType: string[];

    /**
     * Read-only array of strings representing the types of templates that can be created.
     * @since Flash MX 2004
     *
     * @example
     * ```javascript
     * fl.trace("Number of template types: " + fl.createNewTemplateList.length);
     * for (i = 0; i <fl.createNewTemplateList.length; i++)
     *     fl.trace("type: " + fl.createNewTemplateList[i]);
     * ```
     */
    readonly createNewTemplateList: string[];

    /**
     * Read-only array of FlashDocument objects for all currently open FLA files.
     * @since Flash MX 2004
     *
     * @example
     * ```javascript
     * var docs = fl.documents;
     * for (doc in fl.documents) {
     *     fl.trace(fl.documents[doc].name);
     * }
     * ```
     */
    readonly documents: FlashDocument[];

    /**
     * The drawingLayer object for extensible tools to use for temporary drawing.
     * @since Flash MX 2004
     */
    readonly drawingLayer: DrawingLayer;

    /**
     * A string containing the global ActionScript 3.0 External library path (for SWC files).
     * Paths are delimited by semicolons.
     * @since Flash CS4 Professional
     *
     * @example
     * ```javascript
     * fl.trace(fl.externalLibraryPath);
     * fl.externalLibraryPath = "/SWC_runtime;" + fl.externalLibraryPath;
     * fl.trace(fl.externalLibraryPath);
     * ```
     */
    externalLibraryPath: string;

    /**
     * A string specifying the path to the Flex SDK folder.
     * @since Flash CS4 Professional
     *
     * @example
     * ```javascript
     * fl.trace(fl.flexSDKPath);
     * ```
     */
    flexSDKPath: string;

    /**
     * Read-only array of objects describing installed Flash Players.
     * @since Flash CS5.5 Professional
     *
     * @example
     * ```javascript
     * var arr = fl.installedPlayers;
     * for (var i in arr)
     *     fl.trace("name: " + arr[i].name + " version: " + arr[i].version +
     *              "minASVersion: " + arr[i].minASVersion +
     *              " maxASVersion: " + arr[i].maxASVersion +
     *              " stageWidth:" + arr[i].stageWidth +
     *              " stageHeight: " + arr[i].stageHeight + " ");
     * ```
     */
    readonly installedPlayers: Array<{
        name: string;
        version: string;
        minASVersion: number;
        maxASVersion: number;
        stageWidth: number;
        stageHeight: number;
    }>;

    /**
     * Returns the five-character locale code of the application’s UI.
     * @since Flash CS5 Professional
     *
     * @example
     * ```javascript
     * locConfigURI = fl.applicationURI + fl.languageCode + "/Configuration";
     * ```
     */
    readonly languageCode: string;

    /**
     * A string containing the global ActionScript 3.0 Library path (for SWC files/folders).
     * Paths are delimited by semicolons.
     * @since Flash CS4 Professional
     *
     * @example
     * ```javascript
     * fl.trace(fl.libraryPath);
     * fl.libraryPath = "/SWC;" + fl.libraryPath;
     * fl.trace(fl.libraryPath);
     * ```
     */
    libraryPath: string;

    /**
     * Read-only Math object providing methods for matrix and point operations.
     * @since Flash MX 2004
     *
     * @example
     * ```javascript
     * var mat = fl.getDocumentDOM().selection[0].matrix;
     * for(var prop in mat){
     *     fl.trace("mat."+prop+" = " + mat[prop]);
     * }
     * var invMat = fl.Math.invertMatrix( mat );
     * for(var prop in invMat) {
     *     fl.trace("invMat."+prop+" = " + invMat[prop]);
     * }
     * ```
     */
    readonly Math: FlashMath;

    /**
     * Read-only array of complete filenames in the Most Recently Used (MRU) list.
     * @since Flash MX 2004
     *
     * @example
     * ```javascript
     * fl.trace("Number of recently opened files: " + fl.mruRecentFileList.length);
     * for (i = 0; i < fl.mruRecentFileList.length; i++)
     *     fl.trace("file: " + fl.mruRecentFileList[i]);
     * ```
     */
    readonly mruRecentFileList: string[];

    /**
     * Read-only array of file types corresponding to the MRU list.
     * @since Flash MX 2004
     *
     * @example
     * ```javascript
     * fl.trace("Number of recently opened files: " + fl.mruRecentFileListType.length);
     * for (i = 0; i < fl.mruRecentFileListType.length; i++)
     *     fl.trace("type: " +fl.mruRecentFileListType[i]);
     * ```
     */
    readonly mruRecentFileListType: string[];

    /**
     * **Dropped in Adobe Animate.**
     * Was a string for ActionScript 2.0 Classpath. Use `as3PackagePaths` instead.
     * @since Flash CS3 Professional (Dropped in Adobe Animate)
     */
    packagePaths: string;

    /**
     * An integer setting the maximum disk cache size for publishing (in MB).
     * @since Flash CS5.5 Professional
     *
     * @example
     * ```javascript
     * fl.publishCacheDiskSizeMax = 1;
     * ```
     */
    publishCacheDiskSizeMax: number;

    /**
     * A boolean value enabling or disabling the publish cache.
     * @since Flash CS5.5 Professional
     *
     * @example
     * ```javascript
     * fl.trace(fl.publishCacheEnabled);
     * ```
     */
    publishCacheEnabled: boolean;

    /**
     * An integer setting the maximum size for a memory cache entry (in KB).
     * @since Flash CS5.5 Professional
     *
     * @example
     * ```javascript
     * fl.publishCacheMemoryEntrySizeLimit = 100;
     * ```
     */
    publishCacheMemoryEntrySizeLimit: number;

    /**
     * An integer setting the maximum memory cache size for publishing (in MB).
     * @since Flash CS5.5 Professional
     *
     * @example
     * ```javascript
     * fl.publishCacheMemorySizeMax = 1;
     * ```
     */
    publishCacheMemorySizeMax: number;

    /**
     * @availability Flash CS4 Professional
     * @description A string that contains a list of items in the global ActionScript 3.0 Source path,
     * which specifies the location of ActionScript class files. Items are delimited by semicolons.
     * @example
     * ```javascript
     * fl.trace(fl.sourcePath);
     * fl.sourcePath = "/Classes;" + fl.sourcePath;
     * fl.trace(fl.sourcePath);
     * ```
     */
    sourcePath: string;

    /**
     * @availability Flash Pro CS6
     * @description Property; returns an instance of the SpriteSheetExporter object.
     * @example
     * ```javascript
     * fl.trace(fl.spriteSheetExporter);
     * ```
     */
    readonly spriteSheetExporter: SpriteSheetExporter;

    /**
     * @availability Flash CS4 Professional
     * @description Read-only property; an array of registered swfPanel objects.
     * A swfPanel is registered if it has been opened at least once.
     * This property is undefined if no panels have been opened (behavior new in Adobe Animate).
     * @example
     * ```javascript
     * if(fl.swfPanels.length > 0){
     *   for(x = 0; x < fl.swfPanels.length; x++){
     *     fl.trace("Panel: " + fl.swfPanels[x].name + " -- Path: " + fl.swfPanels[x].path);
     *   }
     * }
     * ```
     */
    readonly swfPanels?: SWFPanel[];

    /**
     * @availability Flash MX 2004
     * @description Read-only property; an array of Tools objects.
     * Used only when creating extensible tools.
     */
    readonly tools: Tools[];

    /**
     * @availability Flash MX 2004
     * @description Read-only property; the long string version of the Flash authoring tool, including platform.
     * @example
     * ```javascript
     * alert(fl.version); // e.g., "WIN 10,0,0,540"
     * ```
     */
    readonly version: string;

    /**
     * @availability Flash MX 2004
     * @description Read-only property; an XMLUI object.
     * Lets you get/set XMLUI properties in an XMLUI dialog and accept/cancel programmatically.
     * @example See XMLUI object documentation.
     */
    readonly xmlui: XMLUI;

    /**
     * @availability Flash CS3 Professional
     * @description Read-only property; a string representing the path of the currently running JSFL script,
     * expressed as a file:/// URI. If called via fl.runScript(), returns the immediate parent script path.
     * @example
     * ```javascript
     * fl.trace(fl.scriptURI);
     * ```
     */
    readonly scriptURI: string;

    // ========== Methods ==========

    /**
     * @availability Flash CS5 Professional
     * @param flaURI A string (file:/// URI) specifying the path of the FLA file to publish silently.
     * @param publishProfile Optional. Name of the publish profile to use. Defaults to "Default".
     * @returns Boolean indicating whether the profile was found (always true if publishProfile omitted).
     * @description Publishes a FLA file without opening it (headless mode).
     * @example
     * ```javascript
     * var uri = fl.browseForFileURL("select", "select a FLA file to publish");
     * var publishProfileName = "Default";
     * fl.publishDocument(uri, publishProfileName);
     * ```
     */
    publishDocument(flaURI: string, publishProfile?: string): boolean;

    /**
     * @availability Flash MX 2004
     * @param bPromptIfNeeded Optional. If true (default), prompts to save modified docs. If false, discards changes and exits immediately.
     * @description Quits Flash/Animate.
     * @example
     * ```javascript
     * fl.quit();          // prompt to save
     * fl.quit(true);      // same as above
     * fl.quit(false);     // exit without saving
     * ```
     */
    quit(bPromptIfNeeded?: boolean): void;

    /**
     * @availability Flash MX 2004 (Dropped in Adobe Animate)
     * @description DROPPED IN ADOBE ANIMATE.
     * Reloads all effect descriptors from the user’s Configuration/Effects folder.
     * Best used in a command in the Commands folder.
     * @example
     * ```javascript
     * fl.reloadEffects();
     * ```
     */
    reloadEffects(): void;

    /**
     * @availability Flash MX 2004
     * @description Rebuilds the Tools panel from toolconfig.xml.
     * Useful after modifying a custom tool's JSFL definition.
     * @example
     * ```javascript
     * fl.reloadTools();
     * ```
     */
    reloadTools(): void;

    /**
     * @availability Flash CS3 Professional (id parameter new in CS4)
     * @param eventType Event type to remove. Valid values:
     * "documentNew", "documentOpened", "documentClosed", "mouseMove",
     * "documentChanged", "layerChanged", "timelineChanged", "frameChanged"
     * @param id Listener ID returned by fl.addEventListener()
     * @returns true if successfully removed; false if never added.
     * @description Unregisters an event listener.
     * @example
     * ```javascript
     * fl.removeEventListener("documentClosed", eventID);
     * ```
     */
    removeEventListener(eventType: string, id: number): boolean;

    /**
     * @availability Flash CS3 Professional
     * @description Resets the global Classpath for ActionScript 3.0 to default.
     * @example
     * ```javascript
     * fl.resetAS3PackagePaths();
     * ```
     */
    resetAS3PackagePaths(): void;

    /**
     * @availability Flash CS3 Professional (Dropped in Adobe Animate)
     * @description DROPPED IN ADOBE ANIMATE.
     * Resets the global Classpath for ActionScript 2.0 to default.
     * @example
     * ```javascript
     * fl.resetPackagePaths();
     * ```
     */
    resetPackagePaths(): void;

    /**
     * @availability Flash MX 2004
     * @param documentObject The FlashDocument object to revert.
     * @returns true if successful; false otherwise.
     * @description Reverts the specified FLA to its last saved version (no confirmation dialog).
     * @example
     * ```javascript
     * fl.revertDocument(fl.getDocumentDOM());
     * ```
     */
    revertDocument(documentObject: FlashDocument): boolean;

    /**
     * @availability Flash MX 2004
     * @param fileURI File URI (file:///) of the JSFL script to run.
     * @param funcName Optional function name within the script to call.
     * @param args Optional arguments to pass to the function.
     * @returns Return value of the function (if funcName provided); otherwise void.
     * @description Executes a JavaScript (JSFL) file.
     * @example
     * ```javascript
     * fl.runScript("file:///C|/testScript.jsfl", "testFunct", 10, 1);
     * ```
     */
    runScript(fileURI: string, funcName?: string, ...args: any[]): any;

    /**
     * @availability Flash MX 2004
     * @description Saves all open documents.
     * Shows Save As dialog for unsaved files. Skips unmodified files.
     * @example
     * ```javascript
     * fl.saveAll();
     * ```
     */
    saveAll(): void;

    /**
     * @availability Flash MX 2004
     * @param document FlashDocument to save. If null, saves active document.
     * @param fileURI Optional file URI to save as. If omitted/null, uses current name.
     * @returns true if successful; false otherwise.
     * @description Saves the specified document as FLA.
     * @example
     * ```javascript
     * alert(fl.saveDocument(fl.getDocumentDOM()));
     * alert(fl.saveDocument(fl.documents[0], "file:///C|/example1.fla"));
     * ```
     */
    saveDocument(document: FlashDocument | null, fileURI?: string | null): boolean;

    /**
     * @availability Flash MX 2004
     * @param document FlashDocument to save. If null, saves active document.
     * @returns true if Save As succeeded; false otherwise.
     * @description Displays Save As dialog for the specified document.
     * @example
     * ```javascript
     * alert(fl.saveDocumentAs(fl.documents[1]));
     * ```
     */
    saveDocumentAs(document: FlashDocument | null): boolean;

    /**
     * @availability Flash CS3 Professional
     * @param elementObject The Element to select.
     * @param editMode If true, enters edit mode; if false, only selects.
     * @returns true if successful; false otherwise.
     * @description Selects or edits an element (e.g., from findObjectInDocByName).
     * @example
     * ```javascript
     * var results = fl.findObjectInDocByName("second text field", doc);
     * if (results.length > 0) fl.selectElement(results[0], false);
     * ```
     */
    selectElement(elementObject: FlashElement, editMode: boolean): boolean;

    /**
     * @availability Flash CS3 Professional
     * @param toolName Name of tool to select. Valid values include:
     * "arrow", "pen", "text", "rect", "oval", "brush", "eraser", etc.
     * Also supports custom tool names.
     * @description Selects the specified tool in the Tools panel.
     * @example
     * ```javascript
     * fl.selectTool("pen");
     * ```
     */
    selectTool(toolName: string): void;

    /**
     * @availability Flash MX 2004
     * @param document FlashDocument to activate.
     * @param bActivateFrame Ignored (for Dreamweaver/Fireworks compatibility).
     * @description Sets the active window to the specified document.
     * @example
     * ```javascript
     * fl.setActiveWindow(fl.documents[0]);
     * ```
     */
    setActiveWindow(document: FlashDocument, bActivateFrame?: boolean): void;

    /**
     * @availability Adobe Animate
     * @param keySection Preference section (usually "Settings").
     * @param keyName Name of the boolean preference.
     * @param keyValue true or false.
     * @description Sets a boolean preference value.
     * @example
     * ```javascript
     * fl.setPrefBoolean("BridgeTalk", "LogIncoming", true);
     * ```
     */
    setPrefBoolean(keySection: string, keyName: string, keyValue: boolean): void;

    /**
     * @availability Flash 8
     * @param show If false, disables "script running too long" warning.
     * @description Controls display of long-running script warning.
     * Useful for batch operations.
     * @example
     * ```javascript
     * fl.showIdleMessage(false);
     * var result = timeConsumingFunction();
     * fl.showIdleMessage(true);
     * ```
     */
    showIdleMessage(show: boolean): void;

    /**
     * @availability Adobe Animate
     * @param fileURI URI of the .as file (e.g., "file:///C|/AS/test.as")
     * @param line Line number (1-based)
     * @param enable If true, enables breakpoint; if false, removes it.
     * @description Toggles a breakpoint in an ActionScript file.
     * @example
     * ```javascript
     * fl.toggleBreakpoint("file:///C|/AS/breakpointTest.as", 10, true);
     * ```
     */
    toggleBreakpoint(fileURI: string, line: number, enable: boolean): void;

    /**
     * @availability Flash MX 2004
     * @param message String to output.
     * @description Sends a message to the Output panel (like ActionScript trace).
     * Shows panel if hidden. Use `fl.trace("")` or `fl.trace("\\n")` for blank line.
     * @example
     * ```javascript
     * fl.trace("Hello World!!!");
     * fl.trace("\nI have a cat");
     * ```
     */
    trace(message: string): void;

    /**
     * @availability Adobe Animate
     * @param xmlURI Full URI to an XML file defining a dialog.
     * @returns XMLUI object with control values and "dismiss" ("accept"/"cancel").
     * @description Launches an XML-defined UI dialog from a file.
     * @example
     * ```javascript
     * var obj = fl.xmlPanel(fl.configURI + "Commands/Test.xml");
     * for (var prop in obj) fl.trace("property " + prop + " = " + obj[prop]);
     * ```
     */
    xmlPanel(xmlURI: string): XMLUI;

    /**
     * @availability Adobe Animate
     * @param xmlString XML string defining a dialog.
     * @returns XMLUI object.
     * @description Launches an XML-defined UI dialog from a string.
     * @example
     * ```javascript
     * var str = "<?xml version=\"1.0\"?><dialog ...></dialog>";
     * var theDialog = fl.xmlPanelFromString(str);
     * ```
     */
    xmlPanelFromString(xmlString: string): XMLUI;

    /**
     * @availability Animate 2020
     * @param toolName Tool name (same as fl.selectTool).
     * @returns true if tool was successfully added to toolbar.
     * @description Appends the specified tool to the main Tools panel from the Toolbar Palette.
     * @example
     * ```javascript
     * var success = fl.addToolInToolbar("oval");
     * ```
     */
    addToolInToolbar(toolName: string): boolean;

    // Note: Other methods like clipCopyString, closeAll, etc., are assumed to be declared elsewhere
    // per the instruction to start from fl.publishCacheMemorySizeMax onward.
}





