/**
 * Represents a bitmap asset in the Flash/Animate document library.
 *
 * @extends Item
 * @availability Flash MX 2004 and later
 */
interface BitmapItem extends Item {
    // --- Properties ---

    /**
     * Specifies whether to allow smoothing of the bitmap.
     *
     * @availability Flash MX 2004
     * @example
     * fl.getDocumentDOM().library.items[0].allowSmoothing = true;
     * alert(fl.getDocumentDOM().library.items[0].allowSmoothing);
     */
    allowSmoothing: boolean;

    /**
     * Determines the type of image compression applied to the bitmap.
     * Acceptable values: `"photo"` (JPEG) or `"lossless"` (GIF/PNG).
     *
     * - If `useImportedJPEGQuality` is `false`, `"photo"` uses custom JPEG quality (0–100).
     * - If `useImportedJPEGQuality` is `true`, `"photo"` uses the default document quality.
     *
     * @availability Flash MX 2004
     * @example
     * fl.getDocumentDOM().library.items[0].compressionType = "photo";
     * alert(fl.getDocumentDOM().library.items[0].compressionType);
     */
    compressionType: 'photo' | 'lossless';

    /**
     * The number of seconds since January 1, 1970 (Unix epoch) until the modification date
     * of the original source file **at the time it was imported**.
     * Represented as a hexadecimal string. If the file no longer exists, this value is `"00000000"`.
     *
     * @availability Flash CS4 Professional
     * @example
     * var libItem = fl.getDocumentDOM().library.items[0];
     * fl.trace("Mod date when imported = " + libItem.fileLastModifiedDate);
     *
     * @see bitmapItem.sourceFileExists
     * @see bitmapItem.sourceFileIsCurrent
     * @see bitmapItem.sourceFilePath
     * @see FLfile.getModificationDate
     */
    readonly fileLastModifiedDate: string;

    /**
     * Indicates whether the bitmap has a valid/useful alpha channel.
     * Useful for deciding whether to as PNG (supports alpha) vs JPEG (no alpha).
     *
     * @availability Flash CS6 Professional
     * @example
     * var bitmapItem = fl.getDocumentDOM().library.items[0];
     * var uri = fl.browseForFileURI("open");
     * if (bitmapItem.hasValidAlphaLayer) uri += ".png";
     * else uri += ".jpg";
     * bitmapItem.exportToFile(uri);
     *
     * @see bitmapItem.exportToFile
     */
    readonly hasValidAlphaLayer: boolean;

    /**
     * The width of the bitmap, in pixels.
     *
     * @availability Flash CS6 Professional
     * @example
     * var bmItemObj = fl.getDocumentDOM().library.items[0];
     * var numHorizontalPixels = bmItemObj.hPixels;
     *
     * @see bitmapItem.vPixels
     */
    readonly hPixels: number;

    /**
     * The modification date/time of the bitmap item **in the Library**, as a hexadecimal string.
     * This value updates every time the bitmap is re-imported (e.g., via "Update" in Bitmap Properties).
     *
     * @availability Flash Pro CS6
     * @example
     * var libItem = fl.getDocumentDOM().library.items[0];
     * fl.trace("Mod date when imported = " + libItem.lastModifiedDate);
     *
     * @see bitmapItem.sourceFileExists
     * @see bitmapItem.sourceFileIsCurrent
     * @see bitmapItem.sourceFilePath
     * @see FLfile.getModificationDate
     */
    readonly lastModifiedDate: string;

    /**
     * Specifies whether the item was originally imported as a JPEG file.
     * Possible values:
     * - `"photo"` → imported as JPEG
     * - `"lossless"` → imported as GIF, PNG, or other lossless format
     *
     * @availability Flash CS4 Professional
     * @example
     * var libItem = fl.getDocumentDOM().library.items[0];
     * fl.trace("Imported compression type = " + libItem.originalCompressionType);
     *
     * @see bitmapItem.compressionType
     */
    readonly originalCompressionType: 'photo' | 'lossless';

    /**
     * Indicates whether the original source file still exists at the path from which it was imported.
     *
     * @availability Flash CS4 Professional
     * @example
     * var libItem = fl.getDocumentDOM().library.items[0];
     * fl.trace("sourceFileExists = " + libItem.sourceFileExists);
     *
     * @see bitmapItem.sourceFileIsCurrent
     * @see bitmapItem.sourceFilePath
     */
    readonly sourceFileExists: boolean;

    /**
     * Indicates whether the modification date of the library item matches the current
     * modification date of the source file on disk.
     * Returns `false` if the file has been modified externally since import.
     *
     * @availability Flash CS4 Professional
     * @example
     * var libItem = fl.getDocumentDOM().library.items[0];
     * fl.trace("fileIsCurrent = " + libItem.sourceFileIsCurrent);
     *
     * @see bitmapItem.fileLastModifiedDate
     * @see bitmapItem.sourceFilePath
     */
    readonly sourceFileIsCurrent: boolean;

    /**
     * The full path and filename of the original source file that was imported into the Library,
     * expressed as a `file:///` URI.
     *
     * @availability Flash CS4 Professional
     * @example
     * for (var idx in fl.getDocumentDOM().library.items) {
     *   if (fl.getDocumentDOM().library.items[idx].itemType == "bitmap") {
     *     var myItem = fl.getDocumentDOM().library.items[idx];
     *     fl.trace(myItem.name + " source is " + myItem.sourceFilePath);
     *   }
     * }
     *
     * @see bitmapItem.sourceFileExists
     */
    readonly sourceFilePath: string;

    /**
     * Specifies whether deblocking (JPEG artifact reduction) is enabled.
     *
     * @availability Flash CS4 Professional
     * @example
     * var libItem = fl.getDocumentDOM().library.items[0];
     * libItem.useDeblocking = true;
     */
    useDeblocking: boolean;

    /**
     * Specifies whether to use the **original imported JPEG quality** instead of a custom quality setting.
     * Only applicable when `compressionType` is `"photo"`.
     *
     * @availability Flash MX 2004
     * @example
     * fl.getDocumentDOM().library.items[0].useImportedJPEGQuality = true;
     * alert(fl.getDocumentDOM().library.items[0].useImportedJPEGQuality);
     */
    useImportedJPEGQuality: boolean;

    /**
     * The height of the bitmap, in pixels.
     *
     * @availability Flash CS6 Professional
     * @example
     * var bmitemObj = fl.getDocumentDOM().library.items[0];
     * var numHorizontalPixels = bmitemObj.vPixels;
     *
     * @see bitmapItem.hPixels
     */
    readonly vPixels: number;

    /**
     * Specifies the JPEG quality level (0–100) for the bitmap.
     * - Use `-1` to apply the default document quality.
     * - Only used when `compressionType` is `"photo"` and `useImportedJPEGQuality` is `false`.
     *
     * @availability Flash MX 2004
     * @example
     * fl.getDocumentDOM().library.items[0].quality = 65;
     * alert(fl.getDocumentDOM().library.items[0].quality);
     */
    quality: number;

    // --- Methods ---

    /**
     * Exports the bitmap item to a PNG or JPG file.
     * - File extension determines format: `.png` or `.jpg`/`.jpeg`
     * - If the bitmap has a valid alpha layer, PNG is recommended.
     *
     * @param fileURI - Full path as a `file:///` URI (e.g., `"file:///C|/export/out.jpg"`)
     * @param quality - Optional. JPEG quality from 1 to 100 (default: 80). Ignored for PNG.
     * @returns `true` if succeeded; otherwise `false`.
     *
     * @availability Flash CS4 Professional (quality parameter added in Flash CS6)
     * @example
     * var imageFileURL = "file:///C|/exportTest/out.jpg";
     * var libItem = fl.getDocumentDOM().library.items[0];
     * libItem.exportToFile(imageFileURL);
     *
     * @example
     * // With quality
     * libItem.exportToFile("file:///C|/out.jpg", 90);
     */
    exportToFile(fileURI: string, quality?: number): boolean;
}

