/**
 * Animate/Flash JSFL API Type Definitions
 *
 * This file contains type definitions for the `Item` and `Instance` objects
 * used in Adobe Animate/Flash JSFL scripting.
 */

// ===================================================================
// Item Object
// ===================================================================

/**
 * The `Item` object is an abstract base class.
 * Anything in the library (symbols, bitmaps, folders, etc.) derives from `Item`.
 *
 * @see {@link library}
 */
export interface Item //extends SymbolItem, FolderItem, FontItem, SoundItem, VideoItem, BitmapItem, BitmapItem
{
    // -----------------------------------------------------------------
    // Methods
    // -----------------------------------------------------------------

    /**
     * Adds persistent data to a library item.
     *
     * @param name A string that specifies the name of the data.
     * @param type A string that specifies the type of data. Valid types are:
     *             `"integer"`, `"integerArray"`, `"double"`, `"doubleArray"`,
     *             `"string"`, and `"byteArray"`.
     * @param data The data to add. Must match the specified `type`.
     * @returns Nothing.
     *
     * @example
     * ```js
     * fl.getDocumentDOM().library.items[0].addData("myData", "integer", 12);
     * ```
     */
    addData(name: string, type: "integer" | "integerArray" | "double" | "doubleArray" | "string" | "byteArray", data: any): void;

    /**
     * Retrieves the value of the specified persistent data.
     *
     * @param name A string that specifies the name of the data to retrieve.
     * @returns The stored data. Type depends on how it was stored.
     *
     * @example
     * ```js
     * var libData = fl.getDocumentDOM().library.items[0].getData("myData");
     * ```
     */
    getData(name: string): any;

    /**
     * Indicates whether publishing of the specified persistent data is enabled
     * for the specified format on this library item.
     *
     * @param name A string that contains the name of the persistent data item,
     *             as specified in `addData()`.
     * @param format A string that specifies the publishing format.
     *               `_EMBED_SWF_` is a special built-in format: if set, the data
     *               is embedded in the SWF file (SWF v19+/FP 11.6+) and accessible
     *               via ActionScript `.metaData` property (for symbol instances onstage).
     *               Other custom formats (e.g., `_EXTERN_JSON_`) may be used with
     *               custom JSFL scripts.
     * @returns `true` if publishing is enabled for the given format; `false` otherwise.
     *
     * @example
     * ```js
     * var doc = fl.getDocumentDOM();
     * if (doc && doc.getPublishDocumentData("_EXTERN_JSON_")) {
     *   var libItem = doc.library.items[0];
     *   if (libItem && libItem.hasData("sampleData") &&
     *       libItem.getPublishData("sampleData", "_EXTERN_JSON_")) {
     *     alert("publish persistent data for libElem: sampleData = '" +
     *           libItem.getData("sampleData") + "'");
     *   }
     * }
     * ```
     *
     * @see {@link setPublishData}
     */
    getPublishData(name: string, format: string): boolean;

    /**
     * Determines whether the library item has the named persistent data.
     *
     * @param name A string that specifies the name of the data to check for.
     * @returns `true` if the data exists; `false` otherwise.
     *
     * @example
     * ```js
     * if (fl.getDocumentDOM().library.items[0].hasData("myData")) {
     *   fl.trace("Yep, it's there!");
     * }
     * ```
     */
    hasData(name: string): boolean;

    /**
     * Removes persistent data from the library item.
     *
     * @param name Specifies the name of the data to remove.
     * @returns Nothing.
     *
     * @example
     * ```js
     * fl.getDocumentDOM().library.items[0].removeData("myData");
     * ```
     */
    removeData(name: string): void;

    /**
     * Enables or disables publishing of persistent data for a library item.
     *
     * @param name A string that contains the name of the persistent data item,
     *             as specified in `addData()`.
     * @param format A string that specifies the publishing format.
     *               `_EMBED_SWF_` embeds data in SWF (v19+/FP 11.6+, onstage instances only).
     *               Custom formats (e.g., `_EXTERN_JSON_`) require matching calls to
     *               `document.setPublishDocumentData()` and `getPublishPersistentData()`.
     * @param publish A Boolean that indicates whether to enable (`true`) or disable (`false`)
     *                publishing of the data for the specified format.
     * @returns Nothing.
     *
     * @example
     * ```js
     * var doc = fl.getDocumentDOM();
     * if (doc) {
     *   var libItem = doc.library.items[0];
     *   if (libItem) {
     *     libItem.addData("sampleData", "string", "Hello! I am persistent Data.");
     *     libItem.setPublishData("sampleData", "_EXTERN_JSON_", true);
     *     // Enable JSON publishing for the whole document
     *     doc.setPublishDocumentData("_EXTERN_JSON_", true);
     *   }
     * }
     * ```
     *
     * @see {@link getPublishData}
     */
    setPublishData(name: string, format: string, publish: boolean): void;

    // -----------------------------------------------------------------
    // Properties
    // -----------------------------------------------------------------

    /**
     * Read-only. A string that specifies the type of element.
     * Possible values: `"undefined"`, `"component"`, `"movie clip"`, `"graphic"`,
     * `"button"`, `"folder"`, `"font"`, `"sound"`, `"bitmap"`, `"compiled clip"`,
     * `"screen"`, or `"video"`.
     * If `"video"`, use `videoItem.videoType` to determine video type.
     *
     * @example
     * ```js
     * fl.trace(fl.getDocumentDOM().library.items[0].itemType);
     * ```
     */
    readonly itemType:
        | "undefined"
        | "component"
        | "movie clip"
        | "graphic"
        | "button"
        | "folder"
        | "font"
        | "sound"
        | "bitmap"
        | "compiled clip"
        | "screen"
        | "video";

    /**
     * A string that specifies the ActionScript 3.0 class associated with the symbol.
     * Appears in the Linkage dialog box.
     * - For default base classes (e.g., `flash.display.MovieClip`), this is an empty string `""`.
     * - Setting this bypasses Animate's validation (e.g., classpath checks).
     * - Use `linkageClassName` for ActionScript 2.0.
     *
     * @example
     * ```js
     * // Set to Sprite
     * fl.getDocumentDOM().library.items[0].linkageBaseClass = "flash.display.Sprite";
     * // Reset to default
     * fl.getDocumentDOM().library.items[0].linkageBaseClass = "";
     * // Get current value
     * fl.trace(fl.getDocumentDOM().library.items[0].linkageBaseClass);
     * ```
     *
     * @see {@link linkageClassName}
     */
    linkageBaseClass: string;

    /**
     * A string that specifies the ActionScript 2.0 class associated with the symbol.
     * Requires `linkageExportForAS` and/or `linkageExportForRS` to be `true`,
     * and `linkageImportForRS` to be `false`.
     *
     * @example
     * ```js
     * fl.getDocumentDOM().library.items[0].linkageClassName = "myClass";
     * ```
     *
     * @see {@link linkageBaseClass}
     */
    linkageClassName: string;

    /**
     * A Boolean value. If `true`, the item is exported for ActionScript.
     * - Can be combined with `linkageExportForRS` and `linkageExportInFirstFrame`.
     * - Requires `linkageImportForRS` to be `false`.
     * - Requires `linkageIdentifier` and `linkageURL` to be set.
     *
     * @example
     * ```js
     * fl.getDocumentDOM().library.items[0].linkageExportForAS = true;
     * ```
     */
    linkageExportForAS: boolean;

    /**
     * A Boolean value. If `true`, the item is exported for run-time sharing.
     * - Can be combined with `linkageExportForAS` and `linkageExportInFirstFrame`.
     * - Requires `linkageImportForRS` to be `false`.
     * - Requires `linkageIdentifier` and `linkageURL` to be set.
     *
     * @example
     * ```js
     * fl.getDocumentDOM().library.items[0].linkageExportForRS = true;
     * ```
     */
    linkageExportForRS: boolean;

    /**
     * A Boolean value. If `true`, the item is exported in the first frame;
     * if `false`, it is exported in the frame of its first instance.
     * Items not on Stage are never exported.
     *
     * Can only be `true` when `linkageExportForAS` and/or `linkageExportForRS` are `true`.
     *
     * @example
     * ```js
     * fl.getDocumentDOM().library.items[0].linkageExportInFirstFrame = true;
     * ```
     */
    linkageExportInFirstFrame: boolean;

    /**
     * A string that specifies the name Animate uses to identify the asset
     * when linking to the destination SWF file.
     * - Ignored if `linkageImportForRS`, `linkageExportForAS`, and `linkageExportForRS` are all `false`.
     * - Must be set if any of those are `true`.
     *
     * @example
     * ```js
     * fl.getDocumentDOM().library.items[0].linkageIdentifier = "my_mc";
     * ```
     *
     * @see {@link linkageURL}
     */
    linkageIdentifier: string;

    /**
     * A Boolean value. If `true`, the item is imported for run-time sharing.
     * - Requires `linkageExportForAS` and `linkageExportForRS` to be `false`.
     * - Requires `linkageIdentifier` and `linkageURL` to be set.
     *
     * @example
     * ```js
     * fl.getDocumentDOM().library.items[0].linkageImportForRS = true;
     * ```
     */
    linkageImportForRS: boolean;

    /**
     * A string that specifies the URL of the SWF file containing the shared asset.
     * - Ignored if `linkageImportForRS`, `linkageExportForAS`, and `linkageExportForRS` are all `false`.
     * - Must be set if any of those are `true`.
     * - Can be a web URL or platform-dependent local path (forward/backward slashes).
     *
     * @example
     * ```js
     * fl.getDocumentDOM().library.items[0].linkageURL = "theShareSWF.swf";
     * ```
     *
     * @see {@link linkageIdentifier}
     */
    linkageURL: string;

    /**
     * A string that specifies the name of the library item, including folder structure.
     * Example: If `Symbol_1` is inside folder `Folder_1`, then `name` is `"Folder_1/Symbol_1"`.
     *
     * @example
     * ```js
     * fl.trace(fl.getDocumentDOM().library.items[0].name);
     * ```
     */
    name: string;
}




