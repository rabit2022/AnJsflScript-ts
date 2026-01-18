/**
 * Represents a document in Adobe Animate/Flash.
 */
interface Document {
    /**
     * Swaps the Stroke and Fill colors.
     * @example
     * fl.getDocumentDOM().swapStrokeAndFill();
     */
    swapStrokeAndFill(): void;

    /**
     * An integer representing the JPEG Quality setting from the current Publish Profile.
     * @example
     * fl.trace("current profile's JPEG Quality is: " + fl.getDocumentDOM().swfJPEGQuality);
     */
    readonly swfJPEGQuality: number;

    /**
     * Executes a Test Movie operation on the document.
     * @param abortIfErrorsExist - If true, aborts if compiler errors exist (default: false).
     * @example
     * fl.getDocumentDOM().testMovie(1);
     */
    testMovie(abortIfErrorsExist?: boolean): void;

    /**
     * Executes a Test Scene operation on the current scene.
     * @example
     * fl.getDocumentDOM().testScene();
     */
    testScene(): void;

    /**
     * Read-only array of Timeline objects in the document.
     * @example
     * var i = 0;
     * var curTimelines = fl.getDocumentDOM().timelines;
     * while(i < fl.getDocumentDOM().timelines.length){
     *   alert(curTimelines[i].name);
     *   ++i;
     * }
     */
    readonly timelines: Timeline[];

    /**
     * Performs a trace bitmap on the current selection.
     * @param threshold - Integer between 0 and 500.
     * @param minimumArea - Integer between 1 and 1000.
     * @param curveFit - One of: "pixels", "very tight", "tight", "normal", "smooth", "very smooth".
     * @param cornerThreshold - One of: "many corners", "normal", "few corners".
     * @example
     * fl.getDocumentDOM().traceBitmap(0, 500, 'normal', 'normal');
     */
    traceBitmap(
        threshold: number,
        minimumArea: number,
        curveFit: CurveFit,
        cornerThreshold: | 'many corners'
            | 'normal'
            | 'few corners'
    ): void;

    /**
     * Sets the XYZ position around which the selection is translated or rotated (movie clips only).
     * @param xyzCoordinate - Object with x, y, z numeric properties.
     * @example
     * fl.getDocumentDOM().translate3DCenter({x:180, y:18, z:-30});
     */
    translate3DCenter(xyzCoordinate: FlashPoint3D): void;

    /**
     * Applies a 3D translation to the selection (movie clips only).
     * @param xyzCoordinate - Object with x, y, z numeric properties.
     * @param bGlobalTransform - If true, transformation is global; otherwise local.
     * @example
     * var myDocument = fl.getDocumentDOM();
     * myDocument.translate3DSelection({x:52.0, y:0, z:0}, true);
     * myDocument.translate3DSelection({x:52.0, y:0, z:-55.2}, false);
     */
    translate3DSelection(
        xyzCoordinate: FlashPoint3D,
        bGlobalTransform: boolean
    ): void;

    /**
     * Adds a new tagged swatch using a swatch object.
     * @param swatch - Swatch object with `fill` and `name`.
     * @param index - Optional insertion index.
     * @param palette - Optional palette index (default: 0).
     * @example
     * var document = fl.getDocumentDOM();
     * var swatch1 = new Object();
     * var fill = fl.getDocumentDOM().getCustomFill();
     * fill.color = "#FF00FF";
     * fill.style = "solid";
     * swatch1.fill = fill;
     * swatch1.name = "solid_swatch";
     * document.addTaggedSwatch(swatch1);
     */
    addTaggedSwatch(swatch: Swatch, index?: number, palette?: number): void;

    /**
     * Adds a new tagged swatch using a color string.
     * @param color - Color in hex format (e.g., "#CCFF34").
     * @param name - Optional name for the swatch.
     * @param index - Optional insertion index (requires name).
     * @param palette - Optional palette index (default: 0).
     * @example
     * var document = fl.getDocumentDOM();
     * document.addTaggedSwatchWithColor("#FF00FF");
     */
    addTaggedSwatchWithColor(
        color: string,
        name?: string,
        index?: number,
        palette?: number
    ): void;

    /**
     * Returns the index of a tagged swatches palette by name.
     * @param paletteName - Name of the palette.
     * @returns Palette index.
     * @example
     * fl.trace(document.getIndexForTaggedSwatchesPalette("palette 1"));
     */
    getIndexForTaggedSwatchesPalette(paletteName: string): number;

    /**
     * Returns the tagged swatch at a given index.
     * @param index - Index of the swatch.
     * @param palette - Optional palette index (default: 0).
     * @returns Swatch object.
     * @example
     * var swatch = document.getTaggedSwatchAtIndex(0);
     */
    getTaggedSwatchAtIndex(index: number, palette?: number): Swatch;

    /**
     * Returns the tagged swatch by name.
     * @param name - Name of the swatch.
     * @returns Swatch object.
     * @example
     * var swatch = document.getTaggedSwatchByName("swatch1");
     */
    getTaggedSwatchByName(name: string): Swatch;

    /**
     * Returns an array of tagged swatches palette names.
     * @returns Array of palette names.
     * @example
     * var arr = document.getTaggedSwatchesPaletteList();
     */
    getTaggedSwatchesPaletteList(): string[];

    /**
     * Returns an array of tagged swatch objects from a palette.
     * @param palette - Optional palette index (default: 0).
     * @returns Array of swatch objects.
     * @example
     * var swatchArr = document.getTaggedSwatches();
     */
    getTaggedSwatches(palette?: number): Array<Swatch>;

    /**
     * Deletes a tagged swatch at a given index.
     * @param index - Index of the swatch to delete.
     * @param palette - Optional palette index (default: 0).
     * @example
     * document.deleteTaggedSwatchAtIndex(0, 4);
     */
    deleteTaggedSwatchAtIndex(index: number, palette?: number): void;

    /**
     * Deletes a tagged swatch by name.
     * @param name - Name of the swatch to delete.
     * @example
     * document.deleteTaggedSwatchByName("swatch1");
     */
    deleteTaggedSwatchByName(name: string): void;

    /**
     * Replaces a tagged swatch at a given index.
     * @param oldSwatchIndex - Index of the swatch to replace.
     * @param newSwatch - New swatch object.
     * @param palette - Optional palette index (default: 0).
     * @example
     * document.setTaggedSwatchAtIndex(0, swatch1);
     */
    setTaggedSwatchAtIndex(
        oldSwatchIndex: number,
        newSwatch: Swatch,
        palette?: number
    ): void;

    /**
     * Replaces a tagged swatch by name.
     * @param oldSwatchName - Name of the swatch to replace.
     * @param newSwatch - New swatch object.
     * @example
     * document.setTaggedSwatchByName("Oldswatch", swatch1);
     */
    setTaggedSwatchByName(
        oldSwatchName: string,
        newSwatch: Swatch
    ): void;

    /**
     * Converts the document to another document type.
     * @param fileURI - Output file path as file:/// URI.
     * @param doctype - Target document type (e.g., "htmlcanvas").
     * @param fileClose - If true, closes the generated file (default: false).
     * @returns True if successful.
     * @example
     * doc.convertToDoc('file:///C:/output.fla', 'htmlcanvas', true);
     */
    convertToDoc(fileURI: FileURI, doctype: string, fileClose?: boolean): boolean;

    /**
     * Exports the HTML5 Canvas Publishing Template.
     * @param pathURI - Destination path as file:/// URI.
     * @returns True if successful.
     * @example
     * var exportFlag = fl.getDocumentDOM().exportCanvasPublishTemplate(pathURI);
     */
    exportCanvasPublishTemplate(pathURI: PathURI): boolean;

    /**
     * Imports an HTML5 Canvas Publishing Template.
     * @param pathURI - Source template path as file:/// URI.
     * @returns True if successful.
     * @example
     * var exportFlag = fl.getDocumentDOM().importCanvasPublishTemplate(pathURI);
     */
    importCanvasPublishTemplate(pathURI: PathURI): boolean;

    /**
     * Exports media using Adobe Media Encoder.
     * @param fileURI - Output path (without extension).
     * @param format - Export format (e.g., "H.264").
     * @param preset - Preset name.
     * @param bTransparent - Ignore stage color (default: false).
     * @param bRunBatch - Run AME batch automatically (default: true).
     * @param sceneName - Specific scene to export.
     * @param startFrame - Start frame index.
     * @param endFrame - End frame index.
     * @example
     * dom.exportMedia("file:///C/Desktop/media", "H.264", "Default", true, false, "Scene 1", 20, 85);
     */
    exportMedia(
        fileURI: FileURI,
        format: string,
        preset: string,
        bTransparent?: boolean,
        bRunBatch?: boolean,
        sceneName?: string,
        startFrame?: number,
        endFrame?: number
    ): void;

    /**
     * Applies a general transformation matrix to the current selection.
     * @param a - Matrix[0][0]
     * @param b - Matrix[0][1]
     * @param c - Matrix[1][0]
     * @param d - Matrix[1][1]
     * @example
     * fl.getDocumentDOM().transformSelection(2.0, 0.0, 0.0, 1.0);
     */
    transformSelection(a: number, b: number, c: number, d: number): void;

    /**
     * Exports the document as SVG.
     * @param fileURI - Output path (with .svg extension).
     * @param currentSettings - Use current export settings (true) or show dialog (false).
     * @param currentFrame - Export only current frame (true) or all frames (false).
     * @example
     * fl.getDocumentDOM().exportSVG("file:///users/usename/Desktop/hap.svg", true, true);
     */
    exportSVG(fileURI: FileURI, currentSettings: boolean, currentFrame: boolean): void;

    /**
     * Ungroups the current selection.
     * @example
     * fl.getDocumentDOM().unGroup();
     */
    unGroup(): void;

    /**
     * Combines all selected shapes into a single drawing object.
     * @example
     * fl.getDocumentDOM().union();
     */
    union(): void;

    /**
     * Unlocks all locked elements on the currently selected frame.
     * @example
     * fl.getDocumentDOM().unlockAllElements();
     */
    unlockAllElements(): void;

    /**
     * Read-only Matrix transforming from object space to document space.
     * @example
     * var mat = fl.getDocumentDOM().viewMatrix;
     */
    readonly viewMatrix: Matrix;

    /**
     * Width of the Stage in pixels.
     * @example
     * fl.getDocumentDOM().width = 400;
     */
    width: number;

    /**
     * Posts an XMLUI dialog box.
     * @param fileURI - Path to XML definition file (file:/// URI).
     * @returns Object with control values; includes `dismiss: "accept" | "cancel"`.
     * @example
     * var obj = fl.getDocumentDOM().xmlPanel(fl.configURI + "Commands/Test.xml");
     */
    xmlPanel(fileURI: FileURI): { [key: string]: string; dismiss: 'accept' | 'cancel' };

    /**
     * Zoom factor of the Stage (1 = 100%, 0.5 = 50%, etc.).
     * @example
     * fl.getDocumentDOM().zoomFactor = 2;
     */
    zoomFactor: number;

    /**
     * Enables or disables publishing of persistent data for a format.
     * @param format - Publishing format (e.g., "_EMBED_SWF_").
     * @param publish - Enable (true) or disable (false).
     * @example
     * doc.setPublishDocumentData("_EMBED_SWF_", true);
     */
    setPublishDocumentData(format: string, publish: boolean): void;

    /**
     * Sets a property of primitive Rectangle objects.
     * @param propertyName - Valid Rectangle property name.
     * @param value - Value to assign.
     */
    setRectangleObjectProperty(propertyName: string, value: any): void;

    /**
     * Moves and resizes the selection using a bounding rectangle.
     * @param boundingRectangle - Rectangle with left, top, right, bottom.
     * @param bContactSensitiveSelection - Enable contact-sensitive selection (default: false).
     * @example
     * fl.getDocumentDOM().setSelectionBounds({left:10, top:20, right:110, bottom:220});
     */
    setSelectionBounds(
        boundingRectangle: FlashRectangle,
        bContactSensitiveSelection?: boolean
    ): void;

    /**
     * Draws a rectangular selection marquee relative to the Stage.
     * @param rect - Rectangle with left, top, right, bottom.
     * @param bReplaceCurrentSelection - Replace (true) or add to (false) current selection.
     * @param bContactSensitiveSelection - Enable contact-sensitive selection (default: false).
     * @example
     * fl.getDocumentDOM().setSelectionRect({left:1, top:1, right:200, bottom:200});
     */
    setSelectionRect(
        rect: FlashRectangle,
        bReplaceCurrentSelection?: boolean,
        bContactSensitiveSelection?: boolean
    ): void;

    /**
     * Sets the vanishing point for 3D objects.
     * @param point - Object with x and y coordinates.
     * @example
     * fl.getDocumentDOM().setStageVanishingPoint({x:45, y:45});
     */
    setStageVanishingPoint(point: FlashPoint): void;

    /**
     * Sets the perspective angle for viewing 3D objects.
     * @param angle - Angle in degrees (0.0 to 179.0).
     * @example
     * fl.getDocumentDOM().setStageViewAngle(70);
     */
    setStageViewAngle(angle: number): void;

    /**
     * Sets the color, width, and style of the selected stroke.
     *
     * @param color The color of the stroke, in one of the following formats:
     * - A string in the format "#RRGGBB" or "#RRGGBBAA"
     * - A hexadecimal number in the format 0xRRGGBB
     * - An integer that represents the decimal equivalent of a hexadecimal number
     * @param size A floating-point value that specifies the new stroke size for the selection.
     * @param strokeType A string that specifies the new type of stroke for the selection. Acceptable values are "hairline", "solid", "dashed", "dotted", "ragged", "stipple", and "hatched".
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().setStroke("#ff0000", 3.25, "dashed");
     * ```
     */
    setStroke(
        color: string | number,
        size: number,
        strokeType: StrokeType
    ): void;

    /**
     * Changes the stroke color of the selection to the specified color.
     *
     * @param color The color of the stroke, in one of the following formats:
     * - A string in the format "#RRGGBB" or "#RRGGBBAA"
     * - A hexadecimal number in the format 0xRRGGBB
     * - An integer that represents the decimal equivalent of a hexadecimal number
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().setStrokeColor("#cc00cc");
     * fl.getDocumentDOM().setStrokeColor(0xcc00cc);
     * fl.getDocumentDOM().setStrokeColor(120000);
     * ```
     */
    setStrokeColor(color: string | number): void;

    /**
     * Changes the stroke size of the selection to the specified size.
     *
     * @param size A floating-point value from 0.25 to 250 that specifies the stroke size. The method ignores precision greater than two decimal places.
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().setStrokeSize(5);
     * ```
     */
    setStrokeSize(size: number): void;

    /**
     * Changes the stroke style of the selection to the specified style.
     *
     * @param strokeType A string that specifies the stroke style for the current selection. Acceptable values are "hairline", "solid","dashed", "dotted", "ragged", "stipple", and "hatched".
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().setStrokeStyle("dashed");
     * ```
     */
    setStrokeStyle(strokeType: StrokeType): void;

    /**
     * Changes the bounding rectangle for the selected text item to the specified size.
     *
     * @param boundingRectangle A rectangle that specifies the new size within which the text item should flow. Format: {left: number, top: number, right: number, bottom: number}
     * @returns A Boolean value: true if the size of at least one text field is changed; false otherwise.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().setTextRectangle({left:0, top:0, right:50, bottom:200});
     * ```
     */
    setTextRectangle(boundingRectangle: FlashRectangle): boolean;

    /**
     * Sets the text selection of the currently selected text field.
     *
     * @param startIndex An integer that specifies the position of the first character to select. The first character position is 0 (zero).
     * @param endIndex An integer that specifies the end position of the selection up to, but not including, endIndex. The first character position is 0 (zero).
     * @returns A Boolean value: true if the method can successfully set the text selection; false otherwise.
     *
     * @example
     * ```javascript
     * fl.document.setTextSelection(5, 25);
     * ```
     */
    setTextSelection(startIndex: number, endIndex: number): boolean;

    /**
     * Inserts a string of text.
     *
     * @param text A string of the characters to insert in the text field.
     * @param startIndex Optional. An integer that specifies the first character to replace. The first character position is 0 (zero).
     * @param endIndex Optional. An integer that specifies the last character to replace.
     * @returns A Boolean value: true if the text of at least one text string is set; false otherwise.
     *
     * @example
     * ```javascript
     * var success = fl.getDocumentDOM().setTextString("Hello World!");
     * var pass = fl.getDocumentDOM().setTextString("hello", 6);
     * var ok = fl.getDocumentDOM().setTextString("Howdy", 2, 7);
     * ```
     */
    setTextString(text: string, startIndex?: number, endIndex?: number): boolean;

    /**
     * Sets the position of the current selection’s transformation point.
     *
     * @param transformationPoint A point (e.g., {x:10, y:20}) specifying the new transformation point.
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().setTransformationPoint({x:100, y:200});
     * ```
     */
    setTransformationPoint(transformationPoint: FlashPoint): void;

    /**
     * A Boolean value that specifies whether the object is accessible.
     * Equivalent to the inverse of the "Make Movie Accessible" setting.
     *
     * @example
     * ```javascript
     * var isSilent = fl.getDocumentDOM().silent;
     * fl.getDocumentDOM().silent = false;
     * ```
     */
    silent: boolean;

    /**
     * A Boolean value that specifies whether Live Preview is enabled.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().livePreview = false;
     * ```
     */
    livePreview: boolean;

    /**
     * Loads a cue point XML file. (Dropped in Adobe Animate)
     *
     * @param URI The absolute path to the cue point XML file.
     * @deprecated Dropped in Adobe Animate.
     *
     * @example
     * ```javascript
     * var cuePoints = fl.getDocumentDOM().LoadCuepointXML("c:\\testCuePoints.xml");
     * ```
     */
    loadCuepointXML(URI: FileURI): string;

    /**
     * Swaps the current selection with the specified library item.
     *
     * @param name A string that specifies the name of the library item to use.
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().swapElement('Symbol 1');
     * ```
     */
    swapElement(name: string): void;

    /**
     * Makes the size of the selected objects the same.
     *
     * @param bWidth When true, matches widths.
     * @param bHeight When true, matches heights.
     * @param bUseDocumentBounds Optional. When true, matches to document bounds; otherwise, uses largest object bounds.
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().match(true,false);
     * fl.getDocumentDOM().match(false,true);
     * fl.getDocumentDOM().match(true,false,true);
     * ```
     */
    match(bWidth: boolean, bHeight: boolean, bUseDocumentBounds?: boolean): void;

    /**
     * Performs a mouse click from the Selection tool.
     *
     * @param position The x and y coordinates of the click.
     * @param bToggleSel Specifies the state of the Shift key.
     * @param bShiftSel Specifies the state of the application preference Shift select.
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().mouseClick({x:300, y:200}, false, false);
     * ```
     */
    mouseClick(position: FlashPoint, bToggleSel: boolean, bShiftSel: boolean): void;

    /**
     * Performs a double mouse click from the Selection tool.
     *
     * @param position The x and y coordinates of the click.
     * @param bAltDown Records whether the Alt key is down.
     * @param bShiftDown Records whether the Shift key was down.
     * @param bShiftSelect Indicates the state of the application preference Shift select.
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().mouseDblClk({x:392.9, y:73}, false, false, true);
     * ```
     */
    mouseDblClk(
        position: FlashPoint,
        bAltDown: boolean,
        bShiftDown: boolean,
        bShiftSelect: boolean
    ): void;

    /**
     * Moves all selected Bézier points on all selected paths by the specified amount.
     *
     * @param delta The x and y offset in pixels.
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().moveSelectedBezierPointsBy({x:10, y:5});
     * ```
     */
    moveSelectedBezierPointsBy(delta: FlashPoint): void;

    /**
     * Moves selected objects by a specified distance.
     *
     * @param distanceToMove The x and y offset in pixels.
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().moveSelectionBy({x:62, y:84});
     * ```
     */
    moveSelectionBy(distanceToMove: FlashPoint): void;

    /**
     * Read-only property; the name of the document (FLA file).
     *
     * @example
     * ```javascript
     * var fileName = flash.documents[0].name;
     * ```
     */
    readonly name: string;

    /**
     * Optimizes smoothing for the current selection.
     *
     * @param smoothing An integer from 0 (no smoothing) to 100 (max smoothing).
     * @param bUseMultiplePasses When true, uses multiple passes for better results.
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().optimizeCurves(50, true);
     * ```
     */
    optimizeCurves(smoothing: number, bUseMultiplePasses: boolean): void;

    /**
     * Read-only property; the platform-specific file path of the document.
     * Undefined if the document has never been saved.
     *
     * @example
     * ```javascript
     * var filePath = flash.documents[0].path;
     * ```
     */
    readonly path: string | undefined;

    /**
     * Read-only property; the file path of the document as a file:/// URI.
     * Undefined if the document has never been saved.
     *
     * @example
     * ```javascript
     * var filePathURI = flash.documents[0].pathURI;
     * ```
     */
    readonly pathURI: PathURI | undefined;

    /**
     * Smooths the curve of each selected fill outline or curved line.
     *
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().smoothSelection();
     * ```
     */
    smoothSelection(): void;

    /**
     * Publishes the document according to the active publish settings.
     *
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().publish();
     * ```
     */
    publish(): void;

    /**
     * Read-only property; an array of the publish profile names for the document.
     *
     * @example
     * ```javascript
     * var myPubProfiles = fl.getDocumentDOM().publishProfiles;
     * ```
     */
    readonly publishProfiles: string[];

    /**
     * Uses the top selected drawing object to punch through all selected drawing objects underneath it.
     *
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().punch();
     * ```
     */
    punch(): void;

    /**
     * Removes all filters from the selected objects.
     *
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().removeAllFilters();
     * ```
     */
    removeAllFilters(): void;

    /**
     * Removes persistent data with the specified name attached to the document.
     *
     * @param name The name of the data to remove.
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().removeDataFromDocument("myData");
     * ```
     */
    removeDataFromDocument(name: string): void;

    /**
     * Removes persistent data with the specified name attached to the selection.
     *
     * @param name The name of the persistent data to remove.
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().removeDataFromSelection("myData");
     * ```
     */
    removeDataFromSelection(name: string): void;

    /**
     * Removes the specified filter from the Filters list of the selected objects.
     *
     * @param filterIndex Zero-based index of the filter to remove.
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().removeFilter(0);
     * ```
     */
    removeFilter(filterIndex: number): void;

    /**
     * Renames the current publish profile.
     *
     * @param profileNewName Optional new name for the profile.
     * @returns true if successful; false otherwise.
     *
     * @example
     * ```javascript
     * alert(fl.getDocumentDOM().renamePublishProfile());
     * ```
     */
    renamePublishProfile(profileNewName?: string): boolean;

    /**
     * Renames the currently selected scene.
     *
     * @param name The new name of the scene (must be unique).
     * @returns true if successful; false otherwise.
     *
     * @example
     * ```javascript
     * var success = fl.getDocumentDOM().renameScene("new name");
     * ```
     */
    renameScene(name: string): boolean;

    /**
     * Moves the specified scene before another specified scene.
     *
     * @param sceneToMove Index of scene to move (0 = first).
     * @param sceneToPutItBefore Index before which to place the scene (0 = first, -1 = end).
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().reorderScene(1, 0);
     * ```
     */
    reorderScene(sceneToMove: number, sceneToPutItBefore: number): void;

    /**
     * Resets all Oval object properties to default values.
     *
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().resetOvalObject();
     * ```
     */
    resetOvalObject(): void;

    /**
     * Resets all Rectangle object properties to default values.
     *
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().resetRectangleObject();
     * ```
     */
    resetRectangleObject(): void;

    /**
     * Resets the transformation matrix (removes transform).
     *
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().resetTransformation();
     * ```
     */
    resetTransformation(): void;

    /**
     * Reverts the document to its previously saved version.
     *
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().revert();
     * ```
     */
    revert(): void;

    /**
     * Applies a 3D rotation to the selection (movie clips only).
     *
     * @param xyzCoordinate The rotation angles for x, y, z axes.
     * @param bGlobalTransform If true, uses global coordinates; otherwise local.
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * var myDocument = fl.getDocumentDOM();
     * myDocument.rotate3DSelection({x:52.0, y:0, z:0}, true);
     * myDocument.rotate3DSelection({x:52.0, y:0, z:-55.2},false);
     * ```
     */
    rotate3DSelection(xyzCoordinate: FlashPoint3D, bGlobalTransform: boolean): void;

    /**
     * Property containing ActionScript 3.0 Source path items (semicolon-delimited).
     *
     * @example
     * ```javascript
     * var myDoc = fl.getDocumentDOM();
     * myDoc.sourcePath = "./Class files;" + myDoc.sourcePath;
     * ```
     */
    sourcePath: string;

    /**
     * Rotates the selection by a specified angle.
     *
     * @param angle The rotation angle in degrees.
     * @param rotationPoint Optional pivot point. Defaults to transformation point.
     * @returns Nothing.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().rotateSelection(45);
     * fl.getDocumentDOM().rotateSelection(45, "bottom left");
     * ```
     */
    rotateSelection(
        angle: number,
        rotationPoint?:
            | 'top right'
            | 'top left'
            | 'bottom right'
            | 'bottom left'
            | 'top center'
            | 'right center'
            | 'bottom center'
            | 'left center'
    ): void;

    /**
     * Saves the document in its default location.
     *
     * @param bOkToSaveAs If true or omitted and file is new, opens Save As dialog.
     * @returns true if save succeeds; false otherwise.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().save();
     * ```
     */
    save(bOkToSaveAs?: boolean): boolean;

    /**
     * Saves and compacts the document. (Dropped in Flash Professional CS6)
     *
     * @param bOkToSaveAs If true or omitted and file is new, opens Save As dialog.
     * @returns true if operation succeeds; false otherwise.
     * @deprecated Dropped in Flash Professional CS6.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().saveAndCompact();
     * ```
     */
    saveAndCompact(bOkToSaveAs?: boolean): boolean;


    /**
     * Saves a new FLA file based on the existing document object, with an option to save only the current selection on Stage.
     * @availability Flash CS6
     * @param URI The URI to export the new FLA file to. This URI must reference a local file. Example: file:///c\|/tests/myTest.fla.
     * @param selectionOnly Optional. A boolean indicating whether only the current Stage selection should be saved to the new FLA file.
     * @returns Boolean.
     * @example
     * ```javascript
     * var uri = fl.browseForFileURL("save");
     * var selectionOnly = true;
     * fl.getDocumentDOM().saveAsCopy(uri, selectionOnly);
     * ```
     */
    saveAsCopy(URI: string, selectionOnly?: boolean): boolean;

    /**
     * Scales the selection by a specified amount. This method is equivalent to using the Free Transform tool to scale the object.
     * @availability Flash MX 2004
     * @param xScale A floating-point value that specifies the amount of *x* by which to scale.
     * @param yScale A floating-point value that specifies the amount of *y* by which to scale.
     * @param whichCorner Optional. A string value that specifies the edge about which the transformation occurs. If omitted, scaling occurs about the transformation point. Acceptable values are: "bottom left", "bottom right", "top right", "top left", "top center", "right center", "bottom center", and "left center".
     * @example
     * ```javascript
     * fl.getDocumentDOM().scaleSelection(2.0, 0.5);
     * fl.getDocumentDOM().scaleSelection(1, -1);
     * fl.getDocumentDOM().scaleSelection(-1, 1);
     * fl.getDocumentDOM().scaleSelection(1, 1.90, 'top center');
     * ```
     */
    scaleSelection(xScale: number, yScale: number, whichCorner?: string): void;

    /**
     * Selects all items on the Stage. This method is equivalent to pressing Control+A (Windows) or Command+A (Macintosh) or selecting Edit >Select All.
     * @availability Flash MX 2004
     * @example
     * ```javascript
     * fl.getDocumentDOM().selectAll();
     * ```
     */
    selectAll(): void;

    /**
     * Deselects any selected items.
     * @availability Flash MX 2004
     * @example
     * ```javascript
     * fl.getDocumentDOM().selectNone();
     * ```
     */
    selectNone(): void;

    /**
     * Sets the preferences for align(), distribute(), match(), and space() to act on the document. This method is equivalent to enabling the To Stage button in the Align panel.
     * @availability Flash MX 2004
     * @param bToStage A Boolean value that, if set to true, aligns objects to the Stage. If set to false, it does not.
     * @example
     * ```javascript
     * fl.getDocumentDOM().setAlignToDocument(true);
     * ```
     */
    setAlignToDocument(bToStage: boolean): void;

    /**
     * Sets the blending mode for the selected objects.
     * @availability Flash 8
     * @param mode A string that represents the desired blending mode for the selected objects. Acceptable values are "normal", "layer", "multiply", "screen", "overlay", "hardlight", "lighten", "darken", "difference", "add", "subtract", "invert", "alpha", and "erase".
     * @example
     * ```javascript
     * fl.getDocumentDOM().setBlendMode("add");
     * ```
     */
    setBlendMode(mode: string): void;

    /**
     * Sets the fill settings for the Tools panel, Property inspector, and any selected shapes.
     * @availability Flash MX 2004
     * @param fill A Fill object that specifies the fill settings to be used.
     * @example
     * ```javascript
     * var fill = fl.getDocumentDOM().getCustomFill(); fill.color = '#FFFFFF';
     * fill.style = "solid";
     * fl.getDocumentDOM().setCustomFill(fill);
     * ```
     */
    setCustomFill(fill: Fill): void;

    /**
     * Sets the stroke settings for the Tools panel, Property inspector, and any selected shapes.
     * @availability Flash MX 2004
     * @param stroke A Stroke object.
     * @example
     * ```javascript
     * var stroke = fl.getDocumentDOM().getCustomStroke(); stroke.thickness += 2;
     * fl.getDocumentDOM().setCustomStroke(stroke);
     * ```
     */
    setCustomStroke(stroke: Stroke): void;

    /**
     * Sets the specified Element property on selected objects in the document. This method does nothing if there is no selection.
     * @availability Flash MX 2004
     * @param property A string that specifies the name of the Element property to set.
     * @param value An integer that specifies the value to set in the specified Element property.
     * @example
     * ```javascript
     * fl.getDocumentDOM().setElementProperty("width", 100);
     * fl.getDocumentDOM().setElementProperty("height", 50);
     * ```
     */
    setElementProperty(property: string, value: number): void;

    /**
     * Sets the specified textAttrs property of the selected text items to the specified value.
     * @availability Flash MX 2004
     * @param attrName A string that specifies the name of the TextAttrs property to change.
     * @param attrValue The value to which to set the TextAttrs property.
     * @param startIndex Optional. An integer value that specifies the index of the first character that is affected.
     * @param endIndex Optional. An integer value that specifies the index of the last character that is affected.
     * @returns A Boolean value: true if at least one text attribute property is changed; false otherwise.
     * @example
     * ```javascript
     * var success = fl.getDocumentDOM().setElementTextAttr("fillColor", "#00ff00");
     * var pass = fl.getDocumentDOM().setElementTextAttr("italic", true, 10);
     * var ok = fl.getDocumentDOM().setElementTextAttr("bold", true, 5, 15);
     * ```
     */
    setElementTextAttr(attrName: string, attrValue: any, startIndex?: number, endIndex?: number): boolean;

    /**
     * Changes the selection and the tools panel to the specified fill color.
     * @availability Flash MX 2004
     * @param color The color of the fill, in one of the following formats:
     * - A string in the format "#RRGGBB" or "#RRGGBBAA"
     * - A hexadecimal number in the format 0xRRGGBB
     * - An integer that represents the decimal equivalent of a hexadecimal number
     * If set to null, no fill color is set.
     * @example
     * ```javascript
     * fl.getDocumentDOM().setFillColor("#cc00cc"); fl.getDocumentDOM().setFillColor(0xcc00cc);
     * fl.getDocumentDOM().setFillColor(120000);
     * fl.getDocumentDOM().setFillColor(null);
     * ```
     */
    setFillColor(color: string | number | null): void;

    /**
     * Sets a specified filter property for the currently selected objects (assuming that the object supports the specified filter).
     * @availability Flash 8
     * @param property A string specifying the property to be set. Acceptable values are "blurX", "blurY", "quality", angle", "distance", "strength", "knockout", "inner", "bevelType", "color", "shadowColor", and "highlightColor".
     * @param filterIndex An integer specifying the zero-based index of the filter in the Filters list.
     * @param value A number or string specifying the value to be set for the specified filter property.
     * @example
     * ```javascript
     * fl.getDocumentDOM().setFilterProperty("quality", 1, 2);
     * fl.getDocumentDOM().setFilterProperty("shadowColor", 0, "#FF00FF");
     * ```
     */
    setFilterProperty(property: string, filterIndex: number, value: any): void;

    /**
     * Applies filters to the selected objects. Use this method after calling getFilters() and making any desired changes to the filters.
     * @availability Flash 8
     * @param filterArray The array of filters currently specified.
     * @example
     * ```javascript
     * var myFilters = fl.getDocumentDOM().getFilters();
     * for (i=0; i < myFilters.length; i++) {
     * if (myFilters[i].name == "blurFilter")
     * {
     *      myFilters[i].blurX = 50;
     * }
     * }
     * fl.getDocumentDOM().setFilters(myFilters);
     * ```
     */
    setFilters(filterArray: Filter[]): void;

    /**
     * Sets the opacity of the instance.
     * @availability Flash MX 2004
     * @param opacity An integer between 0 (transparent) and 100 (completely saturated) that adjusts the transparency of the instance.
     * @example
     * ```javascript
     * fl.getDocumentDOM().setInstanceAlpha(50);
     * ```
     */
    setInstanceAlpha(opacity: number): void;

    /**
     * Sets the brightness for the instance.
     * @availability Flash MX 2004
     * @param brightness An integer that specifies brightness as a value from -100 (black) to 100 (white).
     * @example
     * ```javascript
     * fl.getDocumentDOM().setInstanceBrightness(50);
     * ```
     */
    setInstanceBrightness(brightness: number): void;

    /**
     * Sets the tint for the instance.
     * @availability Flash MX 2004
     * @param color The color of the tint, in one of the following formats:
     * - A string in the format "#RRGGBB" or "#RRGGBBAA"
     * - A hexadecimal number in the format 0xRRGGBB
     * - An integer that represents the decimal equivalent of a hexadecimal number
     * @param strength An integer between 0 and 100 that specifies the opacity of the tint.
     * @example
     * ```javascript
     * fl.getDocumentDOM().setInstanceTint(0xff0000, 50);
     * ```
     */
    setInstanceTint(color: string | number, strength: number): void;

    /**
     * Sets the XML metadata for the specified document, overwriting any existing metadata.
     * @availability Flash 8
     * @param strMetadata A string containing the XML metadata to be associated with the document.
     * @returns A Boolean value: true if successful; false otherwise.
     * @example
     * ```xml
     * <rdf:RDF xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#'>
     * <rdf:Description rdf:about='' xmlns:dc='http://purl.org/dc/1.1'>
     * <dc:title>Simple title</dc:title>
     * <dc:description>Simple description</dc:description>
     * </rdf:Description>
     * ...
     * </rdf:RDF>
     * ```
     */
    setMetadata(strMetadata: string): boolean;

    /**
     * Sets the value of an XML settings string in a mobile FLA file.
     * @availability Flash CS3 Professional
     * @param xmlString A string that describes the XML settings in a mobile FLA file.
     * @returns A value of true if the settings were successfully set; false otherwise.
     * @example
     * ```javascript
     * fl.getDocumentDOM().setMobileSettings("<? xml version="1.0" encoding="UTF-16" standalone="no"
     * ?><mobileSettings><contentType id="standalonePlayer" name="Standalone Player"/><testDevices><testDevice id="1170" name="Generic Phone" selected="yes"/></testDevices><outputMsgFiltering info="no" trace="yes" warning="yes"/><testWindowState height="496" splitterClosed="No" splitterXPos="400" width="907"/></mobileSettings>");
     * ```
     */
    setMobileSettings(xmlString: string): boolean;

    /**
     * Specifies a value for a specified property of primitive Oval objects.
     * @availability Flash CS3 Professional
     * @param propertyName A string that specifies the property to be set.
     * @param value The value to be assigned to the property.
     */
    setOvalObjectProperty(propertyName: string, value: any): void;

    /**
     * Sets the version of the Flash Player targeted by the specified document.
     * @availability Flash CS3 Professional
     * @param version A string that represents the version of Flash Player targeted by the specified document.
     * @returns A value of true if the player version was successfully set; false otherwise.
     * @example
     * ```javascript
     * fl.getDocumentDOM().setPlayerVersion("6");
     * ```
     */
    setPlayerVersion(version: string): boolean;

    /**
     * Spaces the objects in the selection evenly.
     * @availability Flash MX 2004
     * @param direction A string that specifies the direction in which to space the objects in the selection. Acceptable values are "horizontal" or "vertical".
     * @param bUseDocumentBounds Optional. A Boolean value that, when set to true, spaces the objects to the document bounds. Otherwise, the method uses the bounds of the selected objects. The default is false.
     * @example
     * ```javascript
     * fl.getDocumentDOM().space("horizontal",true);
     * fl.getDocumentDOM().space("horizontal");
     * fl.getDocumentDOM().space("horizontal",false);
     * ```
     */
    space(direction: "horizontal" | "vertical", bUseDocumentBounds?: boolean): void;

    /**
     * Straightens the currently selected strokes. This method is equivalent to using the Straighten button in the Tools panel.
     * @availability Flash MX 2004
     * @example
     * ```javascript
     * fl.getDocumentDOM().straightenSelection();
     * ```
     */
    straightenSelection(): void;

    /**
     * Skews the selection by a specified amount. The effect is the same as using the Free Transform tool to skew the object.
     * @availability Flash MX 2004
     * @param xSkew A floating-point number that specifies the amount of *x* by which to skew, measured in degrees.
     * @param ySkew A floating-point number that specifies the amount of *y* by which to skew, measured in degrees.
     * @param whichEdge Optional. A string that specifies the edge where the transformation occurs; if omitted, skew occurs at the transformation point. Acceptable values are "top center", "right center", "bottom center", and "left center".
     * @example
     * ```javascript
     * fl.getDocumentDOM().skewSelection(2.0, 1.5); fl.getDocumentDOM().skewSelection(2.0, 1.5, "top center");
     * ```
     */
    skewSelection(xSkew: number, ySkew: number, whichEdge?: "top center" | "right center" | "bottom center" | "left center"): void;

    /**
     * Adds a new rectangle or rounded rectangle, fitting it into the specified bounds.
     * @availability Flash MX 2004
     * @param boundingRectangle A rectangle that specifies the bounds within which the new rectangle is added, in the format {left:value1,top:value2,right:value3,bottom:value4}.
     * @param roundness An integer value from 0 to 999 that specifies the roundness to use for the corners.
     * @param bSuppressFill Optional. A Boolean value that, if set to true, causes the method to create the shape without a fill. The default value is false.
     * @param bSuppressStroke Optional. A Boolean value that, if set to true, causes the method to create the rectangle without a stroke. The default value is false.
     * @example
     * ```javascript
     * fl.getDocumentDOM().addNewRectangle({left:0,top:0,right:100,bottom:100},0);
     * fl.getDocumentDOM().addNewRectangle({left:10,top:10,right:110,bottom:210},0, true);
     * fl.getDocumentDOM().addNewRectangle({left:20,top:20,right:220,bottom:120},0, false, true);
     * ```
     */
    addNewRectangle(
        boundingRectangle: FlashRectangle,
        roundness: number,
        bSuppressFill?: boolean,
        bSuppressStroke?: boolean
    ): void;

    /**
     * Adds a new scene as the next scene after the currently selected scene and makes the new scene the currently selected scene.
     * @availability Flash MX 2004
     * @param name Optional. Specifies the name of the scene. If you do not specify a name, a new scene name is generated.
     * @returns A Boolean value: true if the scene is added successfully; false otherwise.
     * @example
     * ```javascript
     * var success = fl.getDocumentDOM().addNewScene("myScene");
     * fl.getDocumentDOM().addNewScene();
     * ```
     */
    addNewScene(name?: string): boolean;

    /**
     * Inserts a new text field and optionally places text into the field.
     * @availability Flash MX 2004; optional *text* parameter added in Flash CS3 Professional
     * @param boundingRectangle Specifies the size and location of the text field.
     * @param text Optional string that specifies the text to place in the field.
     * @example
     * ```javascript
     * fl.getDocumentDOM().addNewText({left:0, top:0, right:100, bottom:100} , "Hello World!" );
     * fl.getDocumentDOM().setTextString('Hello World!');
     * ```
     */
    addNewText(
        boundingRectangle: FlashRectangle,
        text?: string
    ): void;

    /**
     * Aligns the selection.
     * @availability Flash MX 2004
     * @param alignmode A string that specifies how to align the selection. Acceptable values are "left", "right", "top", "bottom", "vertical center", and "horizontal center".
     * @param bUseDocumentBounds Optional. A Boolean value that, if set to true, causes the method to align to the bounds of the document. Otherwise, the method uses the bounds of the selected objects. The default is false.
     * @example
     * ```javascript
     * fl.getDocumentDOM().align("left", true);
     * ```
     */
    align(alignmode: "left" | "right" | "top" | "bottom" | "vertical center" | "horizontal center", bUseDocumentBounds?: boolean): void;

    /**
     * Arranges the selection on the Stage. This method applies only to non-shape objects.
     * @availability Flash MX 2004
     * @param arrangeMode Specifies the direction in which to move the selection. Acceptable values are "back", "backward", "forward", and "front".
     * @example
     * ```javascript
     * fl.getDocumentDOM().arrange("front");
     * ```
     */
    arrange(arrangeMode: "back" | "backward" | "forward" | "front"): void;

    // --- Properties ---

    /**
     * A Boolean value that describes whether the instances placed on the Stage are automatically added to user-defined timeline classes. The default value is true.
     * @availability Flash CS3 Professional
     * @example
     * ```javascript
     * fl.getDocumentDOM().as3AutoDeclare=false;
     * ```
     */
    as3AutoDeclare: boolean;

    /**
     * A string that describes the ActionScript 3.0 "dialect" being used in the specified document. The default value is "AS3". If you wish to allow prototype classes, as permitted in earlier ECMAScript specifications, set this value to "ES".
     * @availability Flash CS3 Professional
     * @example
     * ```javascript
     * fl.getDocumentDOM().as3Dialect="ES";
     * ```
     */
    as3Dialect: string;

    /**
     * An integer that specifies in which frame to export ActionScript 3.0 classes. By default, classes are exported in Frame 1.
     * @availability Flash CS3 Professional
     * @example
     * ```javascript
     * var myDocument = fl.getDocumentDOM();
     * fl.outputPanel.trace("'Export classes in frame:' value before modification is " + myDocument.as3ExportFrame);
     * myDocument.as3ExportFrame = 5;
     * fl.outputPanel.trace("'Export classes in frame:' value after modification is " + myDocument.as3ExportFrame);
     * ```
     */
    as3ExportFrame: number;

    /**
     * A Boolean value that specifies whether the ActionScript 3.0 compiler should compile with the Strict Mode option turned on (true) or off (false). Strict Mode causes warnings to be reported as errors, which means that compilation will not succeed if those errors exist. The default value is true.
     * @availability Flash CS3 Professional
     * @example
     * ```javascript
     * var myDocument = fl.getDocumentDOM();
     * fl.outputPanel.trace("Strict Mode value before modification is " + myDocument.as3StrictMode); myDocument.as3StrictMode = false;
     * fl.outputPanel.trace("Strict Mode value after modification is " + myDocument.as3StrictMode);
     * ```
     */
    as3StrictMode: boolean;

    /**
     * A Boolean value that specifies whether the ActionScript 3.0 compiler should compile with the Warnings Mode option turned on (true) or off (false). Warnings Mode causes extra warnings to be reported that are useful for discovering incompatibilities when updating ActionScript 2.0 code to ActionScript 3.0. The default value is true.
     * @availability Flash CS3 Professional
     * @example
     * ```javascript
     * var myDocument = fl.getDocumentDOM();
     * fl.outputPanel.trace("Warnings Mode value before modification is " + myDocument.as3WarningsMode);
     * myDocument.as3WarningsMode = false;
     * fl.outputPanel.trace("Warnings Mode value after modification is " + myDocument.as3WarningsMode);
     * ```
     */
    as3WarningsMode: boolean;

    /**
     * An array of the selected objects in the document. If nothing is selected, returns an array of length zero. If no document is open, returns null.
     * @availability Flash MX 2004
     * @example
     * ```javascript
     * fl.getDocumentDOM().getTimeline().currentFrame = 10; fl.getDocumentDOM().selection = fl.getDocumentDOM().getTimeline().layers[0].frames[10].elements;
     * // ... (more complex examples)
     * ```
     */
    selection: any[];

    /**
     * *Dropped in Adobe Animate.*
     * @availability Flash MX 2004. Dropped in Adobe Animate.
     * @deprecated
     */
    screenOutline: any;

    /**
     * *Dropped in Adobe Animate.*
     * @availability Flash MX 2004. Dropped in Adobe Animate.
     * @deprecated
     * @returns A Boolean value: true if document.screenOutline can be used safely; false otherwise.
     */
    allowScreens(): boolean;


    /**
     * @availability Flash CS3 Professional
     * @description An integer that specifies which version of ActionScript is being used in the specified document.
     * Acceptable values are 1, 2, and 3.
     * To determine the targeted player version, use document.getPlayerVersion().
     * @example
     * if(fl.getDocumentDOM().asVersion == 1){
     *     fl.getDocumentDOM().asVersion = 2;
     * }
     */
    asVersion: 1 | 2 | 3;

    /**
     * @availability Flash MX 2004
     * @description A Boolean value equivalent to the Auto Label check box in the Accessibility panel.
     * @example
     * var isAutoLabel = fl.getDocumentDOM().autoLabel;
     * fl.trace(isAutoLabel);
     *
     * fl.getDocumentDOM().autoLabel = true;
     */
    autoLabel: boolean;

    /**
     * @availability Flash MX 2004
     * @description The color of the background, in one of the following formats:
     * - A string in the format "#RRGGBB" or "#RRGGBBAA"
     * - A hexadecimal number in the format 0xRRGGBB
     * - An integer that represents the decimal equivalent of a hexadecimal number
     * @example
     * fl.getDocumentDOM().backgroundColor = '#000000';
     */
    backgroundColor: string | number;

    /**
     * @availability Flash MX 2004
     * @description A string equivalent to the Description field in the Accessibility panel.
     * The description is read by the screen reader.
     * @example
     * fl.getDocumentDOM().description = "This is the main movie";
     * fl.trace(fl.getDocumentDOM().description);
     */
    description: string;

    /**
     * @availability Flash CS3 Professional
     * @description A string that specifies the top-level ActionScript 3.0 class associated with the document.
     * If the document isn’t configured to use ActionScript 3.0, this property is ignored.
     * @example
     * var myDocument = fl.getDocumentDOM();
     * myDocument.docClass = "com.mycompany.ManagerClass";
     * fl.outputPanel.trace("document.docClass has been set to " + myDocument.docClass);
     */
    docClass: string;

    /**
     * @availability Flash MX 2004
     * @description A string that specifies the name of the active publish profile for the specified document.
     * @example
     * fl.getDocumentDOM().addNewPublishProfile();
     * fl.outputPanel.trace(fl.getDocumentDOM().currentPublishProfile);
     *
     * fl.getDocumentDOM().currentPublishProfile = "Default";
     */
    currentPublishProfile: string;

    /**
     * @availability Flash MX 2004
     * @description An integer that specifies the index of the active timeline.
     * You can set the active timeline by changing the value of this property.
     * @example
     * var myCurrentTL = fl.getDocumentDOM().currentTimeline;
     * fl.trace("The index of the current timeline is: "+ myCurrentTL);
     *
     * var i = 0;
     * var curTimelines = fl.getDocumentDOM().timelines;
     * while(i < fl.getDocumentDOM().timelines.length){
     *     if(curTimelines[i].name == "myScene"){
     *         fl.getDocumentDOM().currentTimeline = i;
     *     }
     * ++i;
     * }
     */
    currentTimeline: number;

    // === Methods ===

    /**
     * @availability Flash MX 2004
     * @description Performs a break-apart operation on the current selection.
     * @example
     * fl.getDocumentDOM().breakApart();
     */
    breakApart(): void;

    /**
     * @availability Flash MX 2004
     * @returns true if the Edit Symbols menu and functionality are available; false otherwise.
     * @description Indicates whether the Edit Symbols menu and functionality are enabled.
     * @example
     * fl.trace("fl.getDocumentDOM().canEditSymbol() returns: " + fl.getDocumentDOM().canEditSymbol());
     */
    canEditSymbol(): boolean;

    /**
     * @availability Flash MX 2004
     * @returns true if you can use document.revert() successfully; false otherwise.
     * @description Determines whether you can revert the document to the previously saved version.
     * @example
     * if(fl.getDocumentDOM().canRevert()){
     *     fl.getDocumentDOM().revert();
     * }
     */
    canRevert(): boolean;

    /**
     * @availability Flash MX 2004
     * @returns true if you can use document.testMovie() successfully; false otherwise.
     * @description Determines whether you can test the movie.
     * @example
     * if(fl.getDocumentDOM().canTestMovie()) {
     *     fl.getDocumentDOM().testMovie();
     * }
     */
    canTestMovie(): boolean;

    /**
     * @availability Flash MX 2004
     * @returns true if you can use document.testScene() successfully; false otherwise.
     * @description Determines whether you can test the current scene.
     * @example
     * if(fl.getDocumentDOM().canTestScene()){
     *     fl.getDocumentDOM().testScene();
     * }
     */
    canTestScene(): boolean;

    /**
     * @availability Flash 8
     * @param oldIndex Zero-based index of the filter to move.
     * @param newIndex New zero-based index for the filter.
     * @description Changes the index of a filter in the Filters list.
     * @example
     * fl.getDocumentDOM().changeFilterOrder(1,0);
     */
    changeFilterOrder(oldIndex: number, newIndex: number): void;

    /**
     * @availability Flash MX 2004
     * @description Copies the current selection to the Clipboard.
     * @example
     * fl.getDocumentDOM().clipCopy();
     */
    clipCopy(): void;

    /**
     * @availability Flash MX 2004
     * @description Cuts the current selection and writes it to the Clipboard.
     * @example
     * fl.getDocumentDOM().clipCut();
     */
    clipCut(): void;

    /**
     * @availability Flash MX 2004
     * @param bInPlace If true, performs paste-in-place; otherwise pastes to center. Default: false.
     * @description Pastes the contents of the Clipboard into the document.
     * @example
     * fl.getDocumentDOM().clipPaste();
     * fl.getDocumentDOM().clipPaste(true);
     */
    clipPaste(bInPlace?: boolean): void;

    /**
     * @availability Flash MX 2004
     * @param bPromptToSaveChanges If true, prompts to save changes before closing. Default: true.
     * @description Closes the specified document.
     * @example
     * fl.getDocumentDOM().close();
     * fl.getDocumentDOM().close(false);
     */
    close(bPromptToSaveChanges?: boolean): void;

    /**
     * @availability Flash MX 2004
     * @description Converts lines to fills on the selected objects.
     * @example
     * fl.getDocumentDOM().convertLinesToFills();
     */
    convertLinesToFills(): void;

    /**
     * @availability Adobe Animate
     * @returns Boolean indicating success.
     * @description Converts selected objects in the current frame to a bitmap and inserts it into the library.
     * @example
     * fl.getDocumentDOM().convertSelectionToBitmap();
     */
    convertSelectionToBitmap(): boolean;

    /**
     * @availability Flash MX 2004
     * @param type Type of symbol: "movie clip", "button", or "graphic".
     * @param name Name for the new symbol (empty string for auto-generated).
     * @param registrationPoint Registration point: e.g., "top left", "center", etc.
     * @returns The newly created symbol object, or null on failure.
     * @description Converts selected Stage items to a new symbol.
     * @example
     * newMc = fl.getDocumentDOM().convertToSymbol("movie clip", "mcSymbolName", "top left");
     * newButton = fl.getDocumentDOM().convertToSymbol("button", "btnSymbolName", "bottom right");
     * newClipWithDefaultName = fl.getDocumentDOM().convertToSymbol("movie clip", "", "top left");
     */
    convertToSymbol(
        type: SymbolType,
        name: string,
        registrationPoint:
            | "top left"
            | "top center"
            | "top right"
            | "center left"
            | "center"
            | "center right"
            | "bottom left"
            | "bottom center"
            | "bottom right"
    ): SymbolInstance | null;

    /**
     * @availability Flash 8
     * @description Uses the top selected drawing object to crop all selected drawing objects underneath it.
     * @example
     * fl.getDocumentDOM().crop();
     */
    crop(): void;

    /**
     * @availability Flash MX 2004
     * @returns Index of the new current profile, or unchanged index if only one profile exists.
     * @description Deletes the currently active publish profile (if more than one exists).
     * @example
     * alert(fl.getDocumentDOM().deletePublishProfile());
     */
    deletePublishProfile(): number;

    /**
     * @availability Flash MX 2004
     * @returns true if scene deleted successfully; false if only one scene exists.
     * @description Deletes the current scene and activates the next (or first) scene.
     * @example
     * fl.getDocumentDOM().editScene(2);
     * var success = fl.getDocumentDOM().deleteScene();
     */
    deleteScene(): boolean;

    /**
     * @availability Flash MX 2004
     * @description Deletes the current selection on the Stage.
     * @example
     * fl.getDocumentDOM().deleteSelection();
     */
    deleteSelection(): void;

    /**
     * @availability Flash 8
     * @description Deletes the envelope (bounding box) from the selected objects.
     * @example
     * fl.getDocumentDOM().deleteEnvelope();
     */
    deleteEnvelope(): void;

    /**
     * @availability Flash 8
     * @description Disables all filters on the selected objects.
     * @example
     * fl.getDocumentDOM().disableAllFilters();
     */
    disableAllFilters(): void;

    /**
     * @availability Flash 8
     * @param filterIndex Zero-based index of the filter to disable.
     * @description Disables the specified filter.
     * @example
     * fl.getDocumentDOM().disableFilter(0);
     * fl.getDocumentDOM().disableFilter(2);
     */
    disableFilter(filterIndex: number): void;

    /**
     * @availability Flash 8
     * @param enabledFilterIndex Index of the filter to keep enabled; disables all others.
     * @description Disables all filters except the one at the specified index.
     * @example
     * fl.getDocumentDom().disableOtherFilters(1);
     */
    disableOtherFilters(enabledFilterIndex: number): void;

    /**
     * @availability Flash MX 2004
     * @param distributemode Specifies alignment edge for distribution.
     * @param bUseDocumentBounds If true, uses document bounds; otherwise uses selection bounds. Default: false.
     * @description Distributes the selection.
     * @example
     * fl.getDocumentDOM().distribute("top edge");
     * fl.getDocumentDOM().distribute("top edge", false);
     * fl.getDocumentDOM().distribute("top edge", true);
     */
    distribute(
        distributemode: DistributeMode,
        bUseDocumentBounds?: boolean
    ): void;

    /**
     * @availability Adobe Animate
     * @description Distributes selected objects to keyframes (one per object).
     * @example
     * if(fl.getDocumentDOM().canDistributeToKeyframes()) fl.getDocumentDOM().distributeToKeyframes();
     */
    distributeToKeyframes(): void;

    /**
     * @availability Flash MX 2004
     * @description Distributes selected objects to separate layers.
     * @example
     * fl.getDocumentDOM().distributeToLayers();
     */
    distributeToLayers(): void;

    /**
     * @availability Flash MX 2004
     * @param name Name of the persistent data to check.
     * @returns true if document has data with the given name; false otherwise.
     * @description Checks for persistent document data.
     * @example
     * var hasData = fl.getDocumentDOM().documentHasData("myData");
     */
    documentHasData(name: string): boolean;

    /**
     * @availability Flash MX 2004
     * @param profileName Optional unique name for the duplicated profile.
     * @returns Index of the new profile, or -1 on failure.
     * @description Duplicates the active publish profile.
     * @example
     * fl.trace(fl.getDocumentDOM().duplicatePublishProfile("dup profile"));
     */
    duplicatePublishProfile(profileName?: string): number;

    /**
     * @availability Flash MX 2004
     * @returns true if scene duplicated successfully; false otherwise.
     * @description Duplicates the current scene.
     * @example
     * fl.getDocumentDOM().editScene(1);
     * var success = fl.getDocumentDOM().duplicateScene();
     */
    duplicateScene(): boolean;

    /**
     * @availability Flash MX 2004
     * @description Duplicates the current selection on the Stage.
     * @example
     * fl.getDocumentDOM().duplicateSelection();
     */
    duplicateSelection(): void;

    /**
     * @availability Flash MX 2004
     * @param index Zero-based index of the scene to edit.
     * @description Makes the specified scene the current editing scene.
     * @example
     * fl.getDocumentDOM().editScene(2);
     * fl.getDocumentDOM().deleteScene();
     */
    editScene(index: number): void;

    /**
     * @availability Flash 8
     * @description Enables all filters on selected objects.
     * @example
     * fl.getDocumentDOM().enableAllFilters();
     */
    enableAllFilters(): void;

    /**
     * @availability Flash 8
     * @param filterIndex Zero-based index of the filter to enable.
     * @description Enables the specified filter.
     * @example
     * fl.getDocumentDOM().enableFilter(1);
     */
    enableFilter(filterIndex: number): void;

    /**
     * @availability Flash MX 2004
     * @param editMode Editing mode: "inPlace" or "newWindow". Default: symbol-editing mode.
     * @description Enters symbol editing mode.
     * @example
     * fl.getDocumentDOM().enterEditMode('inPlace');
     * fl.getDocumentDOM().enterEditMode('newWindow');
     */
    enterEditMode(editMode?: "inPlace" | "newWindow"): void;

    /**
     * @availability Flash Professional CS5
     * @param abortIfErrorsExist If true, aborts debug if compiler errors exist. Default: false.
     * @description Invokes the Debug Movie command.
     * @example
     * fl.getDocumentDOM().debugMovie(1);
     */
    debugMovie(abortIfErrorsExist?: boolean): void;

    /**
     * @availability Flash MX 2004
     * A Boolean value that specifies whether the children of the specified object are accessible.
     * Equivalent to the inverse of "Make Child Objects Accessible" in the Accessibility panel.
     */
    forceSimple: boolean;

    /**
     * @availability Flash MX 2004
     * A float value that specifies the number of frames displayed per second (default: 12).
     */
    frameRate: number;

    /**
     * @availability Flash MX 2004
     * An integer that specifies the height of the document (Stage) in pixels.
     */
    height: number;

    /**
     * @availability Flash CS3 Professional
     * Read-only. A unique integer identifying the document during a session.
     */
    readonly id: number;

    /**
     * @availability Flash CS4 Professional
     * A string containing a semicolon-delimited list of paths for ActionScript 3.0 External library (SWC files).
     */
    externalLibraryPath: string;

    /**
     * @availability Flash MX 2004
     * Read-only. The Library object for this document.
     */
    readonly library: FlashLibrary;


    // --- Methods ---

    /**
     * @availability Flash MX 2004
     * Exits from symbol-editing mode and returns focus to the parent level.
     * @example
     * fl.getDocumentDOM().exitEditMode();
     * @see enterEditMode
     */
    exitEditMode(): void;

    /**
     * @availability Flash CS6
     * Exports a selected instance (movie clip, graphic, or button) on the Stage to a bitmap in the Library.
     * @param frameNumber Integer indicating the frame to be exported.
     * @param bitmapName Name of the bitmap to be added to the Library.
     * @example
     * fl.getDocumentDOM().exportInstanceToLibrary(1, "myTestBitmap");
     */
    exportInstanceToLibrary(frameNumber: number, bitmapName: string): void;

    /**
     * @availability Flash CS6
     * Exports a selected instance to a series of PNG files on disk.
     * @param outputURI URI (file:///) for the PNG sequence (e.g., "file:///c|/tests/mytest.png").
     * @param startFrameNum Optional. First frame to export (default: 1).
     * @param endFrameNum Optional. Last frame to export (default: 99999).
     * @param matrix Optional. Matrix to apply to the exported PNGs.
     * @example
     * fl.getDocumentDOM().exportInstanceToPNGSequence("file:///c|/tests/mytest.png");
     */
    exportInstanceToPNGSequence(
        outputURI: FileURI,
        startFrameNum?: number,
        endFrameNum?: number,
        matrix?: Matrix
    ): void;

    /**
     * @availability Flash 8
     * Exports the document as one or more PNG files.
     * @param fileURI Optional. File URI for export. If empty, shows dialog.
     * @param bCurrentPNGSettings Optional. Use current PNG settings (true) or show dialog (false). Default: false.
     * @param bCurrentFrame Optional. Export only current frame (true) or all frames (false). Default: false.
     * @returns true if successful, false otherwise.
     * @example
     * fl.getDocumentDOM().exportPNG("file:///C|/myProject/myFile.png", true, true);
     */
    exportPNG(
        fileURI?: FileURI,
        bCurrentPNGSettings?: boolean,
        bCurrentFrame?: boolean
    ): boolean;

    /**
     * @availability Flash 8
     * Exports the document as one or more GIF files.
     * @param fileURI Optional. File URI for export. If empty, shows dialog.
     * @param bCurrentGIFSettings Optional. Use current GIF settings (true) or show dialog (false). Default: false.
     * @param bCurrentFrame Optional. Export only current frame (true) or all frames (false). Default: false.
     * @returns true if successful, false otherwise.
     * @example
     * fl.getDocumentDOM().exportGIF("file:///C|/myProject/myFile.gif", true, true);
     */
    exportGIF(
        fileURI?: FileURI,
        bCurrentGIFSettings?: boolean,
        bCurrentFrame?: boolean
    ): boolean;

    /**
     * @availability Flash MX 2004
     * Exports the currently active publish profile to an XML file.
     * @param fileURI Path (file:/// URI) to the XML file.
     * @example
     * fl.getDocumentDOM().exportPublishProfile('file:///C|/Documents and Settings/username/Desktop/profile.xml');
     * @see exportPublishProfileString
     * @see importPublishProfile
     */
    exportPublishProfile(fileURI: FileURI): void;

    /**
     * @availability Flash CS4 Professional
     * Returns the current (or specified) publish profile as an XML string.
     * @param profileName Optional. Name of the profile to export. If omitted, exports current profile.
     * @returns XML string representing the profile.
     * @example
     * var profileXML = fl.getDocumentDOM().exportPublishProfileString();
     * fl.trace(profileXML);
     * @see exportPublishProfile
     * @see importPublishProfileString
     */
    exportPublishProfileString(profileName?: string): string;

    /**
     * @availability Flash MX 2004
     * Exports the document in SWF format.
     * @param fileURI Optional. File URI for export. If empty, shows dialog.
     * @param bCurrentSettings Optional. Use current publish settings (true) or show dialog (false). Default: false.
     * @example
     * fl.getDocumentDOM().exportSWF("file:///C|/Documents and Settings/joe_user/Desktop/qwerty.swf", true);
     */
    exportSWF(fileURI?: FileURI, bCurrentSettings?: boolean): void;

    /**
     * @availability Adobe Animate
     * Exports a video from the document.
     * @param fileURI Fully qualified path (file:/// URI) to save the video.
     * @param convertInAdobeMediaEncoder Optional. Send to Adobe Media Encoder (default: true).
     * @param transparent Optional. Exclude background (default: false includes background).
     * @param stopAtFrame Optional. Stop at frame (true) or time (false). Default: true.
     * @param stopAtFrameOrTime Optional. Frame count (if stopAtFrame=true) or ms (if false). Default: 0 (all frames).
     * @example
     * fl.getDocumentDOM().exportVideo("file:///C|/myProject/myVideo.mov");
     */
    exportVideo(
        fileURI: FileURI,
        convertInAdobeMediaEncoder?: boolean,
        transparent?: boolean,
        stopAtFrame?: boolean,
        stopAtFrameOrTime?: number
    ): void;

    /**
     * @availability Flash MX 2004
     * Identical to the "To Stage" button in the Align panel.
     * @returns true if aligning to Stage, false otherwise.
     * @example
     * var isAlignToDoc = fl.getDocumentDOM().getAlignToDocument();
     * fl.getDocumentDOM().align("left", isAlignToDoc);
     * @see setAlignToDocument
     */
    getAlignToDocument(): boolean;

    /**
     * @availability Flash 8
     * Returns the blending mode of selected objects.
     * @returns Blending mode string (e.g., "normal", "multiply"). Unpredictable with mixed/non-blendable objects.
     * @example
     * fl.trace(fl.getDocumentDOM().getBlendMode());
     */
    getBlendMode(): string;

    /**
     * @availability Flash MX 2004
     * Retrieves the fill object of the selection or toolbar.
     * @param objectToFill Optional. "selection" (default) or "toolbar".
     * @returns Fill object or undefined if no selection.
     * @example
     * var fill = fl.getDocumentDOM().getCustomFill();
     * fill.color = '#FFFFFF';
     * fill.style = "solid";
     * fl.getDocumentDOM().setCustomFill(fill);
     * @see setCustomFill
     */
    getCustomFill(objectToFill?: "selection" | "toolbar"): Fill | undefined;

    /**
     * @availability Flash MX 2004
     * Retrieves the stroke object of the selection or toolbar.
     * @param locationOfStroke Optional. "selection" (default) or "toolbar".
     * @returns Stroke object or undefined if no selection.
     * @example
     * var stroke = fl.getDocumentDOM().getCustomStroke("selection");
     * stroke.thickness = 2;
     * fl.getDocumentDOM().setCustomStroke(stroke);
     * @see setCustomStroke
     */
    getCustomStroke(locationOfStroke?: "selection" | "toolbar"): Stroke | undefined;

    /**
     * @availability Flash MX 2004
     * Retrieves data previously added via addDataToDocument.
     * @param name Name of the data to retrieve.
     * @returns The stored data (type depends on original storage).
     * @example
     * fl.getDocumentDOM().addDataToDocument("myData", "integer", 12);
     * fl.trace(fl.getDocumentDOM().getDataFromDocument("myData"));
     * @see addDataToDocument
     * @see documentHasData
     * @see removeDataFromDocument
     */
    getDataFromDocument(name: string): any;

    /**
     * @availability Flash MX 2004
     * Gets a property of the selected Element(s).
     * @param propertyName Name of the Element property (see Element object docs).
     * @returns Property value, null (indeterminate), or undefined (invalid property).
     * @example
     * var elementName = fl.getDocumentDOM().getElementProperty("name");
     * @see setElementProperty
     */
    getElementProperty(propertyName: string): any;

    /**
     * @availability Flash MX 2004
     * Gets a TextAttrs property of selected text.
     * @param attrName Name of the TextAttrs property (see TextAttrs object docs).
     * @param startIndex Optional. Start character index (0-based).
     * @param endIndex Optional. End character index (exclusive).
     * @returns Property value, or undefined if inconsistent across selection/range.
     * @example
     * fl.getDocumentDOM().getElementTextAttr("size");
     * fl.getDocumentDOM().getElementTextAttr("fillColor", 3);
     * fl.getDocumentDOM().getElementTextAttr("face", 2, 10);
     */
    getElementTextAttr(attrName: string, startIndex?: number, endIndex?: number): any;

    /**
     * @availability Flash 8
     * Returns filters applied to selected objects.
     * @returns Array of Filter objects. If multiple selections differ, returns filters from first object.
     * @example See setFilters example.
     * @see addFilter
     * @see changeFilterOrder
     * @see setFilters
     */
    getFilters(): Filter[];

    /**
     * @availability Flash 8
     * Returns XML metadata associated with the document.
     * @returns XML metadata string, or empty string if none.
     * @example
     * fl.trace("XML Metadata is :" + fl.getDocumentDOM().getMetadata());
     * @see setMetadata
     */
    getMetadata(): string;

    /**
     * @availability Flash CS3 Professional
     * Returns mobile XML settings for the document.
     * @returns XML settings string, or empty string if none.
     * @example
     * fl.trace(fl.getDocumentDOM().getMobileSettings());
     * @see setMobileSettings
     */
    getMobileSettings(): string;

    /**
     * @availability Flash CS3 Professional
     * Returns the targeted Flash Player version.
     * @returns Player version string (e.g., "6", "FlashPlayer10").
     * @example
     * fl.getDocumentDOM().setPlayerVersion("6");
     * var version = fl.getDocumentDOM().getPlayerVersion(); // "6"
     * @see setPlayerVersion
     */
    getPlayerVersion(): string;

    /**
     * @availability Adobe Animate
     * Indicates if publishing of persistent data is enabled for a format.
     * @param format Publishing format (e.g., "_EMBED_SWF_").
     * @returns true if enabled, false otherwise.
     * @example
     * if (doc.getPublishDocumentData("_EMBED_SWF_")) { ... }
     * @see setPublishDocumentData
     */
    getPublishDocumentData(format: string): boolean;

    /**
     * @availability Flash MX 2004
     * Gets the bounding rectangle of the current selection.
     * @returns Rectangle object {left, top, right, bottom} or 0 if nothing selected.
     * @example
     * var newRect = fl.getDocumentDOM().getSelectionRect();
     * var outputStr = "left: " + newRect.left + " top: " + newRect.top + ...;
     * alert(outputStr);
     * @see selection
     * @see setSelectionRect
     */
    getSelectionRect(): FlashRectangle | 0;

    /**
     * @availability Flash Professional CS6
     * Gets the full path to the SWF file from the current Publish profile.
     * @returns Full SWF file path string.
     * @example
     * fl.trace("the current Publish Setting's SWF file path is: " + fl.getDocumentDOM().getSWFPathFromProfile());
     */
    getSWFPathFromProfile(): FileURI;

    /**
     * @availability Adobe Animate
     * Indicates if "Enable detailed telemetry" is selected in Publish Settings.
     * @returns true if enabled, false otherwise.
     * @example
     * fl.trace("is detailed telemetry enabled for this doc: " + fl.getDocumentDOM().getTelemetryForSwf());
     */
    getTelemetryForSwf(): boolean;

    /**
     * @availability Flash MX 2004
     * Gets the currently selected text string.
     * @param startIndex Optional. Start character index (0-based).
     * @param endIndex Optional. End character index (exclusive).
     * @returns Concatenated text string from all selected text fields.
     * @example
     * fl.getDocumentDOM().getTextString();
     * fl.getDocumentDOM().getTextString(5);
     * fl.getDocumentDOM().getTextString(2, 10);
     * @see setTextString
     */
    getTextString(startIndex?: number, endIndex?: number): string;

    /**
     * @availability Flash MX 2004
     * Retrieves the current Timeline object.
     * @returns Current Timeline object.
     * @example
     * var longestLayer = fl.getDocumentDOM().getTimeline().frameCount;
     * fl.trace("The longest layer has " + longestLayer + " frames");
     * @see currentTimeline
     * @see timelines
     */
    getTimeline(): Timeline;

    /**
     * @availability Flash MX 2004
     * Gets the transformation point (origin) of the current selection.
     * @returns Point object {x, y}.
     * @example
     * var transPoint = fl.getDocumentDOM().getTransformationPoint();
     * @see setTransformationPoint
     */
    getTransformationPoint(): FlashPoint;

    /**
     * @availability Flash MX 2004
     * Converts the current selection into a group.
     * @example
     * fl.getDocumentDOM().group();
     * @see unGroup
     */
    group(): void;

    /**
     * @availability Flash 8
     * Creates an intersection from all selected drawing objects.
     * @throws Error if no objects are selected.
     * @example
     * fl.getDocumentDOM().intersect();
     * @see crop
     * @see punch
     * @see union
     */
    intersect(): void;

    /**
     * @availability Flash 8. showDialog/showImporterUI params: Adobe Animate.
     * Imports a file into the document.
     * @param fileURI Path (file:/// URI) of the file to import.
     * @param importToLibrary Optional. Import only to library (true) or also place on Stage (false). Default: false.
     * @param showDialog Optional. Show Import dialog (true) or use prefs (false). Default: true.
     * @param showImporterUI Optional. Show visual errors (e.g., Library Conflict dialog). Default: false.
     * @example
     * var dom = fl.getDocumentDOM();
     * var URI = fl.browseForFileURL("select", "Import File");
     * dom.importFile(URI);
     * @see browseForFileURL
     */
    importFile(
        fileURI: FileURI,
        importToLibrary?: boolean,
        showDialog?: boolean,
        showImporterUI?: boolean
    ): void;

    /**
     * @availability Flash MX 2004
     * Imports a publish profile from an XML file.
     * @param fileURI Path (file:/// URI) to the XML profile file.
     * @returns Index of imported profile, or -1 on failure.
     * @example
     * alert(fl.getDocumentDOM().importPublishProfile('file:///C|/.../profile.xml'));
     * @see exportPublishProfile
     */
    importPublishProfile(fileURI: FileURI): number;

    /**
     * @availability Flash CS4 Professional
     * Imports a publish profile from an XML string.
     * @param xmlString XML string representing the profile.
     * @returns true if successful, false otherwise.
     * @example
     * var profileXML = fl.getDocumentDOM().exportPublishProfileString('Default');
     * var newProfileXML = profileXML.replace("<ActionScriptVersion>3</ActionScriptVersion>", "<ActionScriptVersion>1</ActionScriptVersion>");
     * fl.getDocumentDOM().importPublishProfileString(newProfileXML);
     * @see exportPublishProfileString
     */
    importPublishProfileString(xmlString: string): boolean;

    // Dropped method (included for completeness but marked as deprecated)
    /**
     * @availability Flash MX 2004. DROPPED in Adobe Animate.
     * @deprecated Use importFile instead.
     * @param fileURI Path (file:/// URI) to the SWF file.
     */
    importSWF(fileURI: FileURI): void;


    /**
     * A string that contains a list of items in the document’s ActionScript 3.0 Library path,
     * which specifies the location of SWC files or folders containing SWC files.
     * Items in the string are delimited by semi-colons.
     *
     * In the authoring tool, the items are specified by choosing File > Publish Settings
     * and then choosing ActionScript 3.0 Script Settings on the Flash tab.
     *
     * @example
     * ```js
     * var myDoc = fl.getDocumentDOM();
     * fl.trace(myDoc.libraryPath);
     * myDoc.libraryPath = "../Files;" + myDoc.libraryPath;
     * fl.trace(myDoc.libraryPath);
     * ```
     */
    libraryPath: string;

    /**
     * A string that is equivalent to the Name field in the Accessibility panel.
     * Screen readers identify objects by reading the name aloud.
     *
     * @example
     * ```js
     * fl.getDocumentDOM().accName = "Main Movie";
     * fl.trace(fl.getDocumentDOM().accName);
     * ```
     */
    accName: string;

    /**
     * Stores specified data with a document. Data is written to the FLA file
     * and is available to JavaScript when the file reopens.
     *
     * @param name - A string that specifies the name of the data to add.
     * @param type - A string that defines the type of data to add.
     *               Acceptable values are:
     *               `"integer"`, `"integerArray"`, `"double"`, `"doubleArray"`,
     *               `"string"`, and `"byteArray"`.
     * @param data - The value to add. Valid types depend on the `type` parameter.
     *
     * @example
     * ```js
     * fl.getDocumentDOM().addDataToDocument("myData", "integer", 12);
     * fl.trace(fl.getDocumentDOM().getDataFromDocument("myData"));
     * ```
     */
    addDataToDocument(name: string, type: DataType, data: any): void;

    /**
     * Stores specified data with the selected objects. Data is written to the FLA file
     * and is available to JavaScript when the file reopens.
     * Only symbols and bitmaps support persistent data.
     *
     * @param name - A string that specifies the name of the persistent data.
     * @param type - Defines the type of data.
     *               Acceptable values are:
     *               `"integer"`, `"integerArray"`, `"double"`, `"doubleArray"`,
     *               `"string"`, and `"byteArray"`.
     * @param data - The value to add. Valid types depend on the `type` parameter.
     *
     * @example
     * ```js
     * fl.getDocumentDOM().addDataToSelection("myData", "integer", 12);
     * ```
     */
    addDataToSelection(name: string, type: DataType, data: any): void;

    /**
     * Applies a filter to the selected objects and places the filter at the end of the Filters list.
     *
     * @param filterName - A string specifying the filter to be added.
     *                     Acceptable values are:
     *                     `"adjustColorFilter"`, `"bevelFilter"`, `"blurFilter"`,
     *                     `"dropShadowFilter"`, `"glowFilter"`, `"gradientBevelFilter"`,
     *                     and `"gradientGlowFilter"`.
     *
     * @example
     * ```js
     * fl.getDocumentDOM().addFilter("glowFilter");
     * ```
     */
    addFilter(
        filterName: FilterName
    ): void;

    /**
     * Adds an item from any open document or library to the specified Document object.
     *
     * @param position - A point that specifies the x and y coordinates of the location
     *                   at which to add the item. It uses the center of a symbol or
     *                   the upper left corner of a bitmap or video.
     * @param item - An Item object that specifies the item to add and the library from which to add it.
     * @returns `true` if successful; `false` otherwise.
     *
     * @example
     * ```js
     * var item = fl.documents[0].library.items[0];
     * fl.documents[0].addItem({x:0,y:0}, item);
     *
     * var itemIndex = fl.getDocumentDOM().library.findItemIndex("myMovieClip");
     * var theItem = fl.getDocumentDOM().library.items[itemIndex];
     * fl.getDocumentDOM().addItem({x:0,y:0}, theItem);
     *
     * var itemIndex = fl.documents[1].library.findItemIndex("myMovieClip");
     * var theItem = fl.documents[1].library.items[itemIndex];
     * fl.documents[2].addItem({x:0,y:0}, theItem);
     * ```
     */
    addItem(position: FlashPoint, item: LibraryItem): boolean;

    /**
     * Adds a new path between two points. The method uses the document’s current stroke attributes
     * and adds the path on the current frame and current layer.
     * This method works in the same way as clicking on the line tool and drawing a line.
     *
     * @param startPoint - A pair of floating-point numbers that specify the x and y coordinates where the line starts.
     * @param endPoint - A pair of floating-point numbers that specify the x and y coordinates where the line ends.
     *
     * @example
     * ```js
     * fl.getDocumentDOM().addNewLine({x:216.7, y:122.3}, {x:366.8, y:165.8});
     * ```
     */
    addNewLine(startPoint: FlashPoint, endPoint: FlashPoint): void;

    /**
     * Adds a new Oval object in the specified bounding rectangle.
     * This method performs the same operation as the Oval tool.
     * The method uses the document’s current default stroke and fill attributes
     * and adds the oval on the current frame and layer.
     * If both `bSuppressFill` and `bSuppressStroke` are set to true, the method has no effect.
     *
     * @param boundingRectangle - A rectangle that specifies the bounds of the oval to be added.
     *                            Format: `{ left: number, top: number, right: number, bottom: number }`
     * @param bSuppressFill - If `true`, creates the shape without a fill. Default: `false`.
     * @param bSuppressStroke - If `true`, creates the shape without a stroke. Default: `false`.
     *
     * @example
     * ```js
     * fl.getDocumentDOM().addNewOval({left:72,top:50,right:236,bottom:228});
     * fl.getDocumentDOM().addNewOval({left:72,top:50,right:236,bottom:228}, true);
     * fl.getDocumentDOM().addNewOval({left:72,top:50,right:236,bottom:228}, false, true);
     * ```
     */
    addNewOval(
        boundingRectangle: FlashRectangle,
        bSuppressFill?: boolean,
        bSuppressStroke?: boolean
    ): void;

    /**
     * Adds a new oval primitive fitting into the specified bounds.
     * This method performs the same operation as the Oval Primitive tool.
     * The oval primitive uses the document's current default stroke and fill attributes
     * and is added on the current frame and layer.
     * If both `bSuppressFill` and `bSuppressStroke` are set to true, the method has no effect.
     *
     * @param boundingRectangle - A rectangle that specifies the bounds within which the new oval primitive is added.
     *                            Format: `{ left: number, top: number, right: number, bottom: number }`
     * @param bSuppressFill - If `true`, creates the oval without a fill. Default: `false`.
     * @param bSuppressStroke - If `true`, creates the oval without a stroke. Default: `false`.
     *
     * @example
     * ```js
     * fl.getDocumentDOM().addNewPrimitiveOval({left:0,top:0,right:100,bottom:100});
     * fl.getDocumentDOM().addNewPrimitiveOval({left:100,top:100,right:200,bottom:200}, true);
     * fl.getDocumentDOM().addNewPrimitiveOval({left:200,top:200,right:300,bottom:300},false,true);
     * ```
     */
    addNewPrimitiveOval(
        boundingRectangle: FlashRectangle,
        bSuppressFill?: boolean,
        bSuppressStroke?: boolean
    ): void;

    /**
     * Adds a new rectangle primitive fitting into the specified bounds.
     * This method performs the same operation as the Rectangle Primitive tool.
     * The rectangle primitive uses the document's current default stroke and fill attributes
     * and is added on the current frame and layer.
     * If both `bSuppressFill` and `bSuppressStroke` are set to true, the method has no effect.
     *
     * @param boundingRectangle - A rectangle that specifies the bounds within which the new rectangle primitive is added.
     *                            Format: `{ left: number, top: number, right: number, bottom: number }`
     * @param roundness - An integer between 0 and 999 that represents how much the corners should be rounded.
     * @param bSuppressFill - If `true`, creates the rectangle without a fill. Default: `false`.
     * @param bSuppressStroke - If `true`, creates the rectangle without a stroke. Default: `false`.
     *
     * @example
     * ```js
     * fl.getDocumentDOM().addNewPrimitiveRectangle({left:0,top:0,right:100,bottom:100}, 0);
     * fl.getDocumentDOM().addNewPrimitiveRectangle({left:100,top:100,right:200,bottom:200}, 20, true);
     * fl.getDocumentDOM().addNewPrimitiveRectangle({left:200,top:200,right:300,bottom:300}, 50,false,true);
     * ```
     */
    addNewPrimitiveRectangle(
        boundingRectangle: FlashRectangle,
        roundness: number,
        bSuppressFill?: boolean,
        bSuppressStroke?: boolean
    ): void;

    /**
     * Adds a new publish profile and makes it the current one.
     *
     * @param profileName - The unique name of the new profile.
     *                      If not specified, a default name is provided.
     * @returns An integer that is the index of the new profile in the profiles list.
     *          Returns `-1` if a new profile cannot be created.
     *
     * @example
     * ```js
     * fl.getDocumentDOM().addNewPublishProfile();
     * fl.outputPanel.trace(fl.getDocumentDOM().currentPublishProfile);
     *
     * fl.getDocumentDOM().addNewPublishProfile("my profile");
     * ```
     */
    addNewPublishProfile(profileName?: string): number;
}







