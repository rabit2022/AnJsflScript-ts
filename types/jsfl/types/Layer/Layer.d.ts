/**
 * Represents a layer in the timeline.
 *
 * @see {@link https://helpx.adobe.com/animate/using/flash-javascript-api.html}
 */
interface Layer {
    /**
     * Read-only property; a string value indicating the animation type of the layer.
     * Possible values include: `"none"`, `"motion object"`, `"IK pose"`.
     *
     * @since Flash Pro CS6
     * @example
     * ```js
     * var layer = fl.getDocumentDOM().getTimeline().layers[0];
     * fl.trace("animationType: " + layer.animationType);
     * ```
     */
    readonly animationType: "none" | "motion object" | "IK pose";

    /**
     * The color assigned to outline the layer.
     *
     * Acceptable formats:
     * - A string in the format `"#RRGGBB"` or `"#RRGGBBAA"`
     * - A hexadecimal number in the format `0xRRGGBB`
     * - An integer that represents the decimal equivalent of a hexadecimal number
     *
     * Equivalent to the Outline color setting in the Layer Properties dialog box.
     *
     * @since Flash MX 2004
     * @example
     * ```js
     * var colorValue = fl.getDocumentDOM().getTimeline().layers[0].color;
     * // Three ways to set the color of the first layer to red:
     * fl.getDocumentDOM().getTimeline().layers[0].color = 16711680;
     * fl.getDocumentDOM().getTimeline().layers[0].color = "#ff0000";
     * fl.getDocumentDOM().getTimeline().layers[0].color = 0xFF0000;
     * ```
     */
    color: string | number;

    /**
     * Read-only; an integer that specifies the number of frames in the layer.
     *
     * @since Flash MX 2004
     * @example
     * ```js
     * var fcNum = fl.getDocumentDOM().getTimeline().layers[0].frameCount;
     * ```
     */
    readonly frameCount: number;

    /**
     * Read-only; an array of Frame objects.
     *
     * @since Flash MX 2004
     * @example
     * ```js
     * var frameArray = fl.getDocumentDOM().getTimeline().layers[0].frames;
     * // To determine if a frame is a keyframe:
     * var n = frameArray.length;
     * for (let i = 0; i < n; i++) {
     *   if (i == frameArray[i].startFrame) {
     *     alert("Keyframe at: " + i);
     *   }
     * }
     * ```
     */
    readonly frames: Frame[];

    /**
     * An integer that specifies the percentage layer height;
     * equivalent to the Layer height value in the Layer Properties dialog box.
     * Acceptable values: 100, 200, or 300.
     *
     * @since Flash MX 2004
     * @example
     * ```js
     * var layerHeight = fl.getDocumentDOM().getTimeline().layers[0].height;
     * fl.getDocumentDOM().getTimeline().layers[0].height = 300;
     * ```
     */
    height: 100 | 200 | 300;

    /**
     * A string that specifies the current use of the layer;
     * equivalent to the Type setting in the Layer Properties dialog box.
     * Acceptable values: `"normal"`, `"guide"`, `"guided"`, `"mask"`, `"masked"`, `"folder"`.
     *
     * @since Flash MX 2004
     * @example
     * ```js
     * fl.getDocumentDOM().getTimeline().layers[0].layerType = "folder";
     * ```
     */
    layerType: "normal" | "guide" | "guided" | "mask" | "masked" | "folder";

    /**
     * A Boolean value that specifies the locked status of the layer.
     * If `true`, the layer is locked. Default is `false`.
     *
     * @since Flash MX 2004
     * @example
     * ```js
     * var lockStatus = fl.getDocumentDOM().getTimeline().layers[0].locked;
     * fl.getDocumentDOM().getTimeline().layers[0].locked = false;
     * ```
     */
    locked: boolean;

    /**
     * A string that specifies the name of the layer.
     *
     * @since Flash MX 2004
     * @example
     * ```js
     * fl.getDocumentDOM().getTimeline().layers[0].name = "foreground";
     * ```
     */
    name: string;

    /**
     * A Boolean value that specifies the status of outlines for all objects in the layer.
     * If `true`, all objects appear only with outlines.
     *
     * @since Flash MX 2004
     * @example
     * ```js
     * fl.getDocumentDOM().getTimeline().layers[0].outline = true;
     * ```
     */
    outline: boolean;

    /**
     * A Layer object that represents the layer’s containing folder, guiding, or masking layer.
     * Uses `null` for a top-level layer.
     *
     * Setting this does not move the layer’s position in the list.
     *
     * @since Flash MX 2004
     * @example
     * ```js
     * var parLayer = fl.getDocumentDOM().getTimeline().layers[0];
     * parLayer.layerType = "folder";
     * fl.getDocumentDOM().getTimeline().layers[1].parentLayer = parLayer;
     * ```
     */
    parentLayer: Layer | null;

    /**
     * A Boolean value that specifies whether the layer’s objects on the Stage are shown or hidden.
     * If `true`, all objects in the layer are visible; if `false`, they are hidden. Default is `true`.
     *
     * @since Flash MX 2004
     * @example
     * ```js
     * fl.getDocumentDOM().getTimeline().layers[0].visible = false;
     * ```
     */
    visible: boolean;

    /**
     * A string value that specifies the blend mode applied at the particular frame.
     *
     * @param frameIndex - Absolute frame index (0-based).
     * @returns A string specifying the blending mode at the frame.
     * @since Animate 2020
     * @example
     * ```js
     * an.trace(an.getDocumentDOM().getTimeline().layers[0].getBlendModeAtFrame(0));
     * ```
     */
    getBlendModeAtFrame(frameIndex: number): string;

    /**
     * Returns a value object describing the color transform at the specified frame.
     *
     * The returned object contains fields based on the active mode (e.g., tint, brightness).
     * Example fields: `"mode"`, `"tintPercent"`, `"tintRed"`, `"brightnessPercent"`, `"alphaPercent"`,
     * `"colorAlphaAmount"`, `"colorRedAmount"`, etc.
     *
     * @param frameIndex - Absolute frame index (0-based).
     * @returns Value object describing the color transform.
     * @since Animate 2020
     * @example
     * ```js
     * var myCxform = an.getDocumentDOM().getTimeline().layers[0].getColorTransformAtFrame(4);
     * ```
     */
    getColorTransformAtFrame(frameIndex: number): ColorTransformObject;

    /**
     * Returns an array of filters applied to the frame at the given index.
     *
     * @param frameIndex - Absolute frame index (0-based).
     * @returns Array of filter objects.
     * @since Animate 2020
     * @example
     * ```js
     * var myFilters = an.getDocumentDOM().getTimeline().layers[0].getFiltersAtFrame(0);
     * ```
     */
    getFiltersAtFrame(frameIndex: number): FilterObject[];

    /**
     * Returns the Z-depth value at the specified frame.
     *
     * @param frameIndex - Frame index (0-based).
     * @returns Integer ZDepth value (range: -5000 to 10000).
     * @since Animate 2019
     * @example
     * ```js
     * fl.getDocumentDOM().getTimeline().layers[0].getZDepthAtFrame(0);
     * ```
     */
    getZDepthAtFrame(frameIndex: number): number;

    /**
     * Sets the blending mode at the specified frame.
     *
     * @param frameIndex - Absolute frame index (0-based).
     * @param blendModeString - Blend mode name (e.g., `"Subtract"`).
     * @since Animate 2020
     * @example
     * ```js
     * an.getDocumentDOM().getTimeline().layers[0].setBlendModeAtFrame(4, "Subtract");
     * ```
     */
    setBlendModeAtFrame(frameIndex: number, blendModeString: BlendMode): void;

    /**
     * Sets the color transform at the specified frame.
     *
     * @param frameIndex - Absolute frame index (0-based).
     * @param cxFormObject - The color transform object to apply.
     * @since Animate 2020
     * @example
     * ```js
     * var myCxform = an.getDocumentDOM().getTimeline().layers[0].getColorTransformAtFrame(0);
     * an.getDocumentDOM().getTimeline().layers[0].setColorTransformAtFrame(9, myCxform);
     * ```
     */
    setColorTransformAtFrame(frameIndex: number, cxFormObject: ColorTransformObject): void;

    /**
     * Applies an array of filters to the specified frame.
     *
     * @param frameIndex - Absolute frame index (0-based).
     * @param filterArray - Array of filter objects to apply.
     * @since Animate 2020
     * @example
     * ```js
     * var myFilters = an.getDocumentDOM().getTimeline().layers[0].getFiltersAtFrame(0);
     * an.getDocumentDOM().getTimeline().layers[0].setFiltersAtFrame(9, myFilters);
     * ```
     */
    setFiltersAtFrame(frameIndex: number, filterArray: FilterObject[]): void;

    /**
     * Sets the Z-depth value at the specified frame.
     *
     * @param frameNumber - Frame index (0-based).
     * @param zVal - Z-depth value (range: -5000 to 10000).
     * @since Animate 2019
     * @example
     * ```js
     * fl.getDocumentDOM().getTimeline().layers[0].setZDepthAtFrame(0, 100);
     * ```
     */
    setZDepthAtFrame(frameNumber: number, zVal: number): void;
}

