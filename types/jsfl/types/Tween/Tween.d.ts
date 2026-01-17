/**
 * Represents interpolated properties of a tween span.
 * Accessing properties for a non-tween frame throws errors.
 */
interface Tween {
    // --- Properties ---

    /**
     * Duration of tween span (number of frames in tween).
     *
     * @example
     * var tweenObj = fl.getDocumentDOM().getTimeline().layers[0].frames[0].tweenObj;
     * if (tweenObj.tweenType == "shape") {
     *   for (var i = 1; i < tweenObj.duration; i++) {
     *     var shape = tweenObj.getShape(i);
     *     ///// code to perform some operation on returned shape
     *   }
     * }
     */
    readonly duration: number;

    /**
     * Start frame of the tween (zero-based index).
     *
     * @example
     * var tweenObj = fl.getDocumentDOM().getTimeline().layers[0].frames[0].tweenObj;
     * fl.trace(tweenObj.startFrame);
     */
    readonly startFrame: number;

    /**
     * Type of tween ("motion" or "shape").
     *
     * @example
     * var tweenObj = fl.getDocumentDOM().getTimeline().layers[0].frames[0].tweenObj;
     * if (tweenObj.tweenType == "shape") {
     *   for (var i = 1; i < tweenObj.duration; i++) {
     *     var shape = tweenObj.getShape(i);
     *     ///// code to perform some operation on returned shape
     *   }
     * }
     */
    readonly tweenType: "motion" | "shape";

    // --- Methods ---

    /**
     * Returns color transformation data between frames.
     *
     * @param frameIndex Offset index of interpolated frame (relative to tween start)
     * @returns Object containing color transform values
     *
     * @example
     * var mat;
     * var frame = fl.getDocumentDOM().getTimeline().layers[0].frames[0];
     * var tweenObj = frame.tweenObj;
     * var frame1 = fl.getDocumentDOM().getTimeline().layers[1].frames[0];
     * fl.trace(" Tween duration = " + tweenObj.duration);
     * for (var i = 1; i < tweenObj.duration; i++) {
     *   mat = tweenObj.getGeometricTransform(i);
     *   var colors = tweenObj.getColorTransform(i);
     *   fl.trace(" Frame " + i + " Matrix = a = " + mat.a + " b = " + mat.b + " c = " + mat.c + " d = " + mat.d + " tx = " + mat.tx + " ty = " + mat.ty);
     *   fl.trace(" color transform : ");
     *   fl.trace(" alpha : amount = " + colors.colorAlphaAmount + " percent = " + colors.colorAlphaPercent);
     *   fl.trace(" red : amount = " + colors.colorRedAmount + " percent = " + colors.colorRedPercent);
     *   fl.trace(" green : amount = " + colors.colorGreenAmount + " percent = " + colors.colorGreenPercent);
     *   fl.trace(" blue : amount = " + colors.colorBlueAmount + " percent = " + colors.colorBluePercent);
     * }
     */
    getColorTransform(frameIndex: number): {
        colorAlphaAmount: number;
        colorAlphaPercent: number;
        colorRedAmount: number;
        colorRedPercent: number;
        colorGreenAmount: number;
        colorGreenPercent: number;
        colorBlueAmount: number;
        colorBluePercent: number;
    };

    /**
     * Returns filters data of a selected frame from a tween span.
     *
     * @param frameIndex Index of frame from which filter data is retrieved (relative to tween start)
     * @returns Array of Filter objects
     *
     * @example
     * var tweenObj = fl.getDocumentDOM().getTimeline().layers[0].frames[0].tweenObj;
     * for (var i = 0; i < tweenObj.duration; i++) {
     *   var filterList = tweenObj.getFilters(i);
     *   for (var j = 0; j < filterList.length; j++) {
     *     var filter = filterList[j];
     *     fl.trace(filter.name);
     *     fl.trace("Blur x = " + filter.blurX + " y = " + filter.blurY);
     *   }
     * }
     */
    getFilters(frameIndex: number): Filter[];

    /**
     * Returns Matrix object representing geometric transformation of tween within user-defined range.
     *
     * @param frameIndex Offset index of frame from which geometric transformations are retrieved (relative to tween start)
     * @returns Matrix object representing geometric transformation at frame offset
     *
     * @example
     * var mat;
     * var frame = fl.getDocumentDOM().getTimeline().layers[0].frames[0];
     * var tweenObj = frame.tweenObj;
     * var frame1 = fl.getDocumentDOM().getTimeline().layers[1].frames[0];
     * fl.trace(" Tween duration = " + tweenObj.duration);
     * for (var i = 1; i < tweenObj.duration; i++) {
     *   mat = tweenObj.getGeometricTransform(i);
     *   var colors = tweenObj.getColorTransform(i);
     *   fl.trace(" Frame " + i + " Matrix = a = " + mat.a + " b = " + mat.b + " c = " + mat.c + " d = " + mat.d + " tx = " + mat.tx + " ty = " + mat.ty);
     *   fl.trace(" color transform : ");
     *   fl.trace(" alpha : amount = " + colors.colorAlphaAmount + " percent = " + colors.colorAlphaPercent);
     *   fl.trace(" red : amount = " + colors.colorRedAmount + " percent = " + colors.colorRedPercent);
     *   fl.trace(" green : amount = " + colors.colorGreenAmount + " percent = " + colors.colorGreenPercent);
     *   fl.trace(" blue : amount = " + colors.colorBlueAmount + " percent = " + colors.colorBluePercent);
     * }
     */
    getGeometricTransform(frameIndex: number): Matrix;

    /**
     * Returns interpolated shape of a selected frame within a tween-span.
     *
     * @param frameIndex Offset index of frame from which shape data is retrieved (relative to tween start)
     * @returns Shape coordinates at the frame offset
     *
     * @example
     * var tweenObj = fl.getDocumentDOM().getTimeline().layers[0].frames[0].tweenObj;
     * if (tweenObj.tweenType == "shape") {
     *   for (var i = 1; i < tweenObj.duration; i++) {
     *     var shape = tweenObj.getShape(i);
     *     ///// code to perform some operation on returned shape
     *   }
     * }
     */
    getShape(frameIndex: number): any; // Actual shape type not specified in docs
}

