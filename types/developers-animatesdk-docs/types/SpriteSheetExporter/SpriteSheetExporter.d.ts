import {Item} from "../Item/Item";

/**
 * The SpriteSheetExporter object is a subclass of the Item object.
 * It is used to generate sprite sheets from symbols and bitmaps in Flash Pro CS6.
 */
export interface SpriteSheetExporter extends Item {
    /**
     * Read-only property; A string indicating the name of the application that is generating the sprite sheet.
     * This property is provided for use by any future sprite sheet generator plugins.
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * alert(exporter.app); // "Flash Pro CS6"
     */
    readonly app: string;

    /**
     * Property; A boolean value indicating whether the sprite sheet exporter should calculate
     * the overall size of the sprite sheet automatically.
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * exporter.autoSize = false;
     */
    autoSize: boolean;

    /**
     * Property; A boolean value indicating whether sprites can be rotated when added to the sprite sheet.
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * exporter.allowRotate = true;
     */
    allowRotate: boolean;

    /**
     * Property; A boolean value indicating whether symbol frames can be trimmed of extra whitespace
     * when packed into the sprite sheet. The default value is true.
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * exporter.allowTrimming = false;
     */
    allowTrimming: boolean;

    /**
     * Property; A string indicating which algorithm to use to pack the sprite sheet.
     * Valid values are "basic" (the default) and "maxRects".
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * exporter.algorithm = "maxRects";
     */
    algorithm: 'basic' | 'maxRects';

    /**
     * Read-only property; A boolean value indicating whether the framework specified by the
     * `layoutFormat` property supports border padding.
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * alert(exporter.canBorderPad);
     */
    readonly canBorderPad: boolean;

    /**
     * Read-only property; A boolean value indicating whether the framework specified by the
     * `layoutFormat` property supports rotating symbol frames.
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * alert(exporter.canRotate);
     */
    readonly canRotate: boolean;

    /**
     * Read-only property; A boolean value indicating whether the framework specified by the
     * `layoutFormat` property supports trimming extra whitespace from symbol frames.
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * alert(exporter.canTrim);
     */
    readonly canTrim: boolean;

    /**
     * Read-only property; A boolean value indicating whether the framework specified by the
     * `layoutFormat` property supports shape padding.
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * alert(exporter.canShapePad);
     */
    readonly canShapePad: boolean;

    /**
     * Read-only property; A boolean value indicating whether the framework specified by the
     * `layoutFormat` property supports stacking duplicate symbol frames.
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * alert(exporter.canStackDuplicateFrames);
     */
    readonly canStackDuplicateFrames: boolean;

    /**
     * Read-only property; A string value indicating the format of the sprite sheet image file.
     * Possible values include "RGBA8888", "RGB888x", and "RGB8".
     * This property is provided for use by sprite sheet generator plugins.
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * alert(exporter.format); // "RGBA8888"
     */
    readonly format: string;

    /**
     * Read-only property; A string value indicating the name of the sprite sheet image file.
     * This property is provided for use by sprite sheet generator plugins.
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * alert(exporter.image);
     */
    readonly image: string;

    /**
     * Property; A string value indicating the format of the sprite sheet metadata.
     * Valid values depend on installed Sprite Sheet Plugins (e.g., "JSON", "Starling", "cocos2D v2").
     * The value corresponds to a `.plugin.jsfl` file in the configuration directory.
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * exporter.layoutFormat = "JSON";
     */
    layoutFormat: string;

    /**
     * Controls the maximum height of the generated sprite sheet when `autoSize` is true.
     * Clipped to a maximum value of 8192.
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * exporter.autoSize = true;
     * exporter.maxSheetHeight = 512;
     */
    maxSheetHeight: number;

    /**
     * Controls the maximum width of the generated sprite sheet when `autoSize` is true.
     * Clipped to a maximum value of 8192.
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * exporter.autoSize = true;
     * exporter.maxSheetWidth = 512;
     */
    maxSheetWidth: number;

    /**
     * Read-only property; A boolean value indicating whether all the exported symbol frames
     * cannot fit within the currently specified size of the sprite sheet.
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * if (exporter.overflowed) {
     *   exporter.sheetWidth = 1024;
     * }
     */
    readonly overflowed: boolean;

    /**
     * Property; An integer indicating the number of pixels of padding to add around the
     * borders of the entire sprite sheet.
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * exporter.borderPadding = 5;
     */
    borderPadding: number;

    /**
     * Property; An integer value indicating how many pixels of padding should be added
     * around each individual sprite (symbol frame or bitmap).
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * exporter.shapePadding = 10;
     */
    shapePadding: number;

    /**
     * Property; An integer value specifying the height of the sprite sheet in pixels.
     * This value is read-only if `autoSize` is set to true.
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * exporter.sheetHeight = 512;
     */
    sheetHeight: number;

    /**
     * Property; An integer value specifying the width of the sprite sheet in pixels.
     * This value is read-only if `autoSize` is set to true.
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * exporter.sheetWidth = 512;
     */
    sheetWidth: number;

    /**
     * Property; A boolean value specifying whether to stack identical symbol frames in the sprite sheet.
     * The default is true.
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * exporter.stackDuplicateFrames = true;
     */
    stackDuplicateFrames: boolean;

    /**
     * Read-only property; A string indicating the version number of the Flash Pro application.
     * This property is provided for use by sprite sheet plugins.
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * alert(exporter.version); // "12.0.0.416"
     */
    readonly version: string;

    /**
     * Method; Adds the specified bitmap or BitmapItem to the sprite sheet.
     *
     * @param bitmap - The BitmapItem or Bitmap to include.
     * @returns Nothing.
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * exporter.addBitmap(myBitmap);
     */
    addBitmap(bitmap: any): void;

    /**
     * Method; Adds the specified SymbolItem or SymbolInstance to be used to generate the sprite sheet.
     *
     * @param symbol - The SymbolItem or SymbolInstance to include.
     * @param name - Optional. The name of the symbol instance.
     * @param beginFrame - Optional. The beginning frame of the symbol to include.
     * @param endFrame - Optional. The last frame of the symbol to include.
     * @returns Boolean indicating success.
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * exporter.addSymbol(mySymbol, "walk", 1, 10);
     */
    addSymbol(symbol: any, name?: string, beginFrame?: number, endFrame?: number): boolean;

    /**
     * Method; Initializes the SpriteSheetExporter to create a new sprite sheet.
     * This method is not necessary if you create the exporter using `new`.
     * It is necessary only if you reuse the same exporter for multiple exports.
     *
     * @returns Nothing.
     *
     * @example
     * var exporter = new SpriteSheetExporter();
     * exporter.beginExport(); // optional if newly created
     */
    beginExport(): void;

    /**
     * Method; Changes the frame range of a symbol that has already been added to the sprite sheet.
     *
     * @param symbol - A SymbolItem or SymbolInstance already in the exporter.
     * @param beginFrame - Optional. New beginning frame.
     * @param endFrame - Optional. New ending frame.
     * @returns Boolean indicating success.
     *
     * @example
     * exporter.changeSymbol(mySymbol, 5, 15);
     */
    changeSymbol(symbol: any, beginFrame?: number, endFrame?: number): boolean;

    /**
     * Method; Exports the sprite sheet into an image file and a metadata file.
     *
     * @param path - File path with no extension (base name for output files).
     * @param imageFormat - Either a string ("png" or "jpg") or an object with format details.
     * @param writeMetaData - Optional. Whether to write metadata file. Default is true.
     * @returns String containing the generated metadata, or empty string if error.
     *
     * ImageFormat Object may contain:
     * - format: "png" | "jpg"
     * - backgroundColor: string (e.g., "#FF0000" or "#00000000")
     * - quality: number (1–100, jpg only)
     * - bitDepth: 8 | 24 | 32 (png only)
     *
     * @example
     * var sse = new SpriteSheetExporter();
     * sse.exportSpriteSheet("file:///C|/xxx/sprite-sheet/test", {
     *   format: "png",
     *   bitDepth: 32,
     *   backgroundColor: "#00000000"
     * });
     */
    exportSpriteSheet(
        path: string,
        imageFormat: 'png' | 'jpg' | {
            format: 'png' | 'jpg';
            backgroundColor?: string;
            quality?: number; // 1–100, jpg only
            bitDepth?: 8 | 24 | 32; // png only
        },
        writeMetaData?: boolean
    ): string;

    /**
     * Method; Removes the specified bitmap or BitmapItem from the sprite sheet.
     *
     * @param bitmap - The BitmapItem or Bitmap to remove.
     * @returns Nothing.
     *
     * @example
     * exporter.removeBitmap(myBitmap);
     */
    removeBitmap(bitmap: any): void;

    /**
     * Method; Removes the specified SymbolItem or SymbolInstance from the sprite sheet.
     *
     * @param symbol - The SymbolItem or SymbolInstance to remove.
     * @returns Boolean indicating success.
     *
     * @example
     * exporter.removeSymbol(mySymbol);
     */
    removeSymbol(symbol: any): boolean;
}