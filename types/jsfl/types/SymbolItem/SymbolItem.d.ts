/**
 * The SymbolItem object is a subclass of the Item object.
 * @see {@link https://help.adobe.com/en_US/flash/cs6/scripting_dictionary.pdf} Adobe Flash Professional Scripting API
 */
interface SymbolItem extends Item {
    /**
     * Converts a symbol item in the library to a compiled movie clip.
     *
     * **Availability**: Flash MX 2004
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().library.items[3].convertToCompiledClip();
     * ```
     */
    convertToCompiledClip(): void;

    /**
     * Exports the symbol item to a SWC file.
     *
     * **Availability**: Flash MX 2004
     *
     * @param outputURI A string, expressed as a file:/// URI, that specifies the SWC file to which the method will export the symbol.
     *                  The outputURI must reference a local file. Flash does not create a folder if outputURI does not exist.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().library.selectItem("mySymbol");
     * var currentSelection = fl.getDocumentDOM().library.getSelectedItems();
     * currentSelection[0].exportSWC("file:///Macintosh HD/SWCDirectory/mySymbol.swc");
     * ```
     */
    exportSWC(outputURI: FileURI): void;

    /**
     * Exports the symbol item to a SWF file.
     *
     * **Availability**: Flash MX 2004
     *
     * @param outputURI A string, expressed as a file:/// URI, that specifies the SWF file to which the method will export the symbol.
     *                  The outputURI must reference a local file. Flash does not create a folder if outputURI doesn’t exist.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().library.items[0].exportSWF("file:///c|/tests/my.swf");
     * ```
     */
    exportSWF(outputURI: FileURI): void;

    /**
     * Exports a frame from the selected instance of movie clip, graphic, or button symbol on the Stage to a bitmap in Library.
     *
     * **Availability**: Flash Pro CS6
     *
     * @param frameNumber An integer indicating the frame within the symbol to be exported.
     * @param bitmapName A string indicating the name of the new bitmap to be added to the Library.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().library.item[0].exportToLibrary(1, "mytestBitmap");
     * ```
     */
    exportToLibrary(frameNumber: number, bitmapName: string): void;

    /**
     * Exports a movie clip, graphic, or button symbol to a sequence of PNG files on disk.
     *
     * **Availability**: Flash Pro CS6
     *
     * @param outputURI The URI to export the PNG sequence files to. This URI must reference a local file. For example: file:///c|/tests/mytest.png.
     * @param startFrameNum Optional. An integer indicating the first frame within the symbol to be exported. If omitted, all frames are exported.
     * @param endFrameNum Optional. An integer indicating the last frame within the symbol to be exported. If omitted, all frames are exported.
     * @param matrix Optional. A matrix to be appended to the exported PNG sequence.
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().library.items[0].exportToPNGSequence("file:///c|/tests/mytest.png");
     * ```
     */
    exportToPNGSequence(outputURI: FileURI, startFrameNum?: number, endFrameNum?: number, matrix?: any /* Matrix type not defined in standard DOM; left as 'any' */): void;

    /**
     * A string hexadecimal value that indicates the modification date of the symbol.
     * This value is incremented every time a symbol's timeline is edited.
     *
     * **Read-only**
     *
     * **Availability**: Flash Pro CS6
     *
     * @example
     * ```javascript
     * var item = fl.getDocumentDOM().library.items[0];
     * fl.trace("name: " + item.name + ", date: " + item.lastModifiedDate);
     * // name: Symbol 1, date: 4f273915
     * ```
     */
    readonly lastModifiedDate: string;

    /**
     * A Boolean value that specifies whether 9-slice scaling is enabled for the item.
     *
     * **Availability**: Flash 8
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().library.items[0].scalingGrid = true;
     * ```
     *
     * @see {@link scalingGridRect}
     */
    scalingGrid: boolean;

    /**
     * A Rectangle object that specifies the locations of the four 9-slice guides.
     * Format follows that used by document.addNewRectangle().
     *
     * **Availability**: Flash 8
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().library.items[0].scalingGridRect = {left:338, top:237, right:3859, bottom:713};
     * ```
     *
     * @see {@link scalingGrid}
     */
    scalingGridRect: FlashRectangle;

    /**
     * A Boolean value that specifies whether the item is updated when the FLA file is published.
     * The default value is false. Used for shared library symbols.
     *
     * **Availability**: Flash MX 2004
     *
     * @example
     * ```javascript
     * fl.getDocumentDOM().library.items[0].sourceAutoUpdate = true;
     * ```
     */
    sourceAutoUpdate: boolean;

    /**
     * A string that specifies the path for the source FLA file as a file:/// URI.
     * The path must be an absolute path, not a relative path. This property is used for shared library symbols.
     *
     * **Availability**: Flash MX 2004
     *
     * @example
     * ```javascript
     * fl.trace(fl.getDocumentDOM().library.items[0].sourceFilePath);
     * ```
     */
    sourceFilePath: string;

    /**
     * A string that specifies the name of the item in the source file library.
     * It is used for shared library symbols.
     *
     * **Availability**: Flash MX 2004
     *
     * @example
     * ```javascript
     * fl.trace(fl.getDocumentDOM().library.items[0].sourceLibraryName);
     * ```
     */
    sourceLibraryName: string;

    /**
     * A string that specifies the type of symbol.
     * Acceptable values are "movie clip", "button", and "graphic".
     *
     * **Availability**: Flash MX 2004
     *
     * @example
     * ```javascript
     * alert(fl.getDocumentDOM().library.items[0].symbolType);
     * fl.getDocumentDOM().library.items[0].symbolType = "button";
     * alert(fl.getDocumentDOM().library.items[0].symbolType);
     * ```
     */
    symbolType: SymbolType;

    /**
     * Read-only; a Timeline object.
     *
     * **Availability**: Flash MX 2004
     *
     * @example
     * ```javascript
     * var tl = fl.getDocumentDOM().library.getSelectedItems()[0].timeline;
     * alert(tl.layerCount);
     * ```
     */
    readonly timeline: Timeline;
}