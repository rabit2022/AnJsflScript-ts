/**
 * The TextureAtlasExporter object is a subclass of the Item object.
 * @see {@link Item}
 */
interface TextureAtlasExporter extends Item {
    /**
     * Sets the encoding algorithm for the TextureAtlas.
     * Valid values are "basic", and "maxRects" (the default).
     * @example
     * var exporter = new TextureAtlasExporter;
     * exporter.algorithm = "maxRects";
     */
    algorithm: "basic" | "maxRects";

    /**
     * Allows sprites to be rotated when added to the TextureAtlas.
     * @example
     * var exporter = new TextureAtlasExporter;
     * exporter.allowRotate = true;
     */
    allowRotate: boolean;

    /**
     * A string indicating the name of the application that is generating the TextureAtlas.
     * This property is provided for use by any future TextureAtlas generator plugins that may be created for Animate 2020.
     * Read-only.
     * @example
     * var exporter = new TextureAtlasExporter;
     * alert(exporter.app); // "Adobe Animate"
     */
    readonly app: string;

    /**
     * A boolean value indicating whether the TextureAtlasExporter should calculate the overall size of TextureAtlas on its own.
     * @example
     * var exporter = new TextureAtlasExporter;
     * exporter.autoSize = false;
     */
    autoSize: boolean;

    /**
     * An integer indicating the number of pixels of padding to add around each texture in the texture atlas.
     * @example
     * var exporter = new TextureAtlasExporter;
     * exporter.borderPadding = 5;
     */
    borderPadding: number;

    /**
     * A boolean value indicating whether the framework specified by the TextureAtlasExporter.layoutFormat property may rotate textures when adding them to the texture atlas.
     * Read-only.
     * @example
     * var exporter = new TextureAtlasExporter;
     * alert(exporter.canRotate);
     */
    readonly canRotate: boolean;

    /**
     * It's the location where the texture atlas files needs to be exported.
     * @example
     * var exporter = new TextureAtlasExporter;
     * exporter.filePath = "file:///Downloads/TextureAtlasExporter";
     */
    filePath: string;

    /**
     * Boolean value which indicates whether skewed assets needs to be flattened to the texture atlas.
     * @example
     * var exporter = new TextureAtlasExporter;
     * exporter.flattenSkewObject = true;
     */
    flattenSkewObject: boolean;

    /**
     * The format of the texture atlas bitmaps 32 bit and 8 bit represented as “RGB8888” and “RGB8” respectively.
     * @example
     * var exporter = new TextureAtlasExporter;
     * exporter.imageFormat = "RGB8";
     */
    imageFormat: "RGB8888" | "RGB8";

    /**
     * Boolean value which indicates whether texture atlas bitmaps needs to be optimized by removing extra spaces.
     * @example
     * var exporter = new TextureAtlasExporter;
     * exporter.optimizeBitmap = true;
     */
    optimizeBitmap: boolean;

    /**
     * Boolean value which indicates whether animation.json needs to be optimized by removing indentation, decomposed matrix and use shortened names.
     * @example
     * var exporter = new TextureAtlasExporter;
     * exporter.optimizeJson = true;
     */
    optimizeJson: boolean;

    /**
     * Read-only property; Boolean value which indicates, if any assets are remaining after packing into texture atlas.
     * @example
     * var exporter = new TextureAtlasExporter;
     * alert(exporter.overflowed);
     */
    readonly overflowed: boolean;

    /**
     * Floating value which indicates in which resolution the textures needs to be exported.
     * @example
     * var exporter = new TextureAtlasExporter;
     * exporter.resolution = 1.5;
     */
    resolution: number;

    /**
     * An integer value indicating how many pixels of padding should be added to each exported symbol frame when adding it to the TextureAtlas.
     * @example
     * var exporter = new TextureAtlasExporter;
     * exporter.shapePadding = 1.5;
     */
    shapePadding: number;

    /**
     * An integer value specifying the height of the texture atlas.
     * This value is read-only if TextureAtlasExporter.autoSize is set to true.
     * @example
     * var exporter = new TextureAtlasExporter;
     * exporter.sheetHeight = 512;
     */
    sheetHeight: number;

    /**
     * An integer value specifying the width of the texture atlas.
     * This value is read-only if TextureAtlasExporter.autoSize is set to true.
     * @example
     * var exporter = new TextureAtlasExporter;
     * exporter.sheetwidth = 512;
     */
    sheetWidth: number;

    /**
     * Read-only property; A string indicating the version number of the Animate application.
     * This property is provided for use by texture atlas plugins.
     * @example
     * var exporter = new TextureAtlasExporter;
     * alert(exporter.version); // "20.0.1.19255"
     */
    readonly version: string;

    /**
     * Exports the texture atlas for the selected symbol.
     * @param symbol The SymbolItem or SymbolInstance on which texture atlas should be generated.
     * @returns Boolean indicating success.
     * @example
     * symbolsArr=fl.getDocumentDOM().getTimeline().layers[0].frames[0].elements;
     * TextureAtlasExporter.exportTextureAtlas(symbolsArr[0].libraryItem)
     */
    exportTextureAtlas(symbol: SymbolItem | SymbolInstance): boolean;
}