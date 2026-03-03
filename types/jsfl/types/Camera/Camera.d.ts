/**
 * Represents the camera object in Adobe Animate (2019+), allowing control over cinematic effects
 * such as panning, zooming, rotation, tint, and color filters at any frame in the timeline.
 *
 * @availability Adobe Animate 2019
 */
interface Camera {
    /**
     * Enable or disable the camera.
     * - `true`: camera is enabled.
     * - `false`: camera is disabled.
     *
     * @example
     * ```javascript
     * var timeline = an.getDocumentDOM().getTimeline();
     * timeline.camera.cameraEnabled = true;
     * ```
     */
    cameraEnabled: boolean;

    /**
     * Enable or disable the camera's color filter.
     * - `true`: color filter is applied.
     * - `false`: color filter is ignored.
     *
     * @example
     * ```javascript
     * var timeline = an.getDocumentDOM().getTimeline();
     * timeline.camera.colorFilterEnabled = true;
     * ```
     */
    colorFilterEnabled: boolean;

    /**
     * Enable or disable the camera tint.
     * - `true`: tint is applied.
     * - `false`: tint is ignored.
     *
     * @example
     * ```javascript
     * var timeline = an.getDocumentDOM().getTimeline();
     * timeline.camera.tintEnabled = true;
     * ```
     */
    tintEnabled: boolean;

    /**
     * Returns the current Z Depth value of the camera.
     *
     * @param frameIndex - Frame number in the timeline (0-based).
     * @returns The current Z depth in pixels.
     *
     * @example
     * ```javascript
     * var timeline = an.getDocumentDOM().getTimeline();
     * timeline.camera.cameraEnabled = true;
     * var depth = timeline.camera.getZDepth(0);
     * ```
     */
    getZDepth(frameIndex: number): number;

    /**
     * Returns the current zoom value of the camera. Default is 100%.
     *
     * @param frameIndex - Frame number in the timeline.
     * @returns The current zoom percentage (e.g., 100 for 100%).
     *
     * @example
     * ```javascript
     * var timeline = an.getDocumentDOM().getTimeline();
     * timeline.camera.cameraEnabled = true;
     * var zoomval = timeline.camera.getZoom(0);
     * ```
     */
    getZoom(frameIndex: number): number;

    /**
     * Returns the current rotation angle of the camera.
     *
     * @param frameIndex - Frame number in the timeline.
     * @returns The current angle in degrees.
     *
     * @example
     * ```javascript
     * var timeline = an.getDocumentDOM().getTimeline();
     * timeline.camera.cameraEnabled = true;
     * var val = timeline.camera.getRotation(0);
     * ```
     */
    getRotation(frameIndex: number): number;

    /**
     * Returns the current position of the camera.
     *
     * @param frameIndex - Frame number in the timeline.
     * @returns An object with `x`, `y`, and `z` properties (in pixels).
     *
     * @example
     * ```javascript
     * var tl = an.getDocumentDOM().getTimeline();
     * var cameraPos = tl.camera.getPosition(3); // get the camera position at 4th frame in timeline
     * an.trace("Camera position: x = " + cameraPos.x + ", y = " + cameraPos.y);
     * ```
     */
    getPosition(frameIndex: number): FlashPoint3D;

    /**
     * Returns the current tint settings of the camera.
     *
     * @param frameIndex - Frame number in the timeline.
     * @returns An object with:
     * - `percent`: tint intensity (0–100)
     * - `red`: red component (0–255)
     * - `green`: green component (0–255)
     * - `blue`: blue component (0–255)
     *
     * @example
     * ```javascript
     * var timeline = an.getDocumentDOM().getTimeline();
     * timeline.camera.cameraEnabled = true;
     * timeline.camera.tintEnabled = true;
     * var tintVal = timeline.camera.getTint(0);
     * fl.trace("Tint Percentage: " + tintVal.percent +
     *          " Red: " + tintVal.red +
     *          " Green: " + tintVal.green +
     *          " Blue: " + tintVal.blue);
     * ```
     */
    getTint(frameIndex: number): {
        percent: number;
        red: number;
        green: number;
        blue: number;
    };

    /**
     * Gets the current color filter values of the camera.
     *
     * @param frameIndex - Frame number in the timeline.
     * @returns An object with:
     * - `brightness`: number
     * - `contrast`: number
     * - `saturation`: number
     * - `hue`: number
     *
     * @example
     * ```javascript
     * var timeline = an.getDocumentDOM().getTimeline();
     * timeline.camera.cameraEnabled = true;
     * timeline.camera.colorFilterEnabled = true;
     * var filterVal = timeline.camera.getColorFilter(0);
     * fl.trace(" Brightness: " + filterVal.brightness +
     *          " Contrast: " + filterVal.contrast +
     *          " Saturation: " + filterVal.saturation +
     *          " Hue: " + filterVal.hue);
     * ```
     */
    getColorFilter(frameIndex: number): {
        brightness: number;
        contrast: number;
        saturation: number;
        hue: number;
    };

    /**
     * Sets the camera's Z Depth value.
     *
     * @param frameIndex - Frame number in the timeline.
     * @param tz - Z depth in pixels.
     * @returns void
     *
     * @example
     * ```javascript
     * cameraObj.setZDepth(200);
     * ```
     */
    setZDepth(frameIndex: number, tz: number): void;

    /**
     * Zooms the camera to an absolute percentage value.
     *
     * @param frameIndex - Frame number in the timeline.
     * @param zoomVal - Zoom percentage (e.g., 150 for 150%).
     * @returns void
     *
     * @example
     * ```javascript
     * var timeline = an.getDocumentDOM().getTimeline();
     * timeline.camera.setZoom(37, 150);
     * ```
     */
    setZoom(frameIndex: number, zoomVal: number): void;

    /**
     * Rotates the camera to an absolute angle.
     *
     * @param frameIndex - Frame number in the timeline.
     * @param angleDegree - Rotation angle in degrees.
     * @returns void
     *
     * @example
     * ```javascript
     * var timeline = an.getDocumentDOM().getTimeline();
     * timeline.camera.setRotation(37, -100);
     * ```
     */
    setRotation(frameIndex: number, angleDegree: number): void;

    /**
     * Sets the camera tint using RGB color and intensity.
     *
     * > ⚠️ **Note**: The original documentation incorrectly lists this as `setRotation` in the usage line.
     * This is corrected here based on context and parameters.
     *
     * @param frameIndex - Frame number in the timeline.
     * @param amount - Tint intensity percentage (0–100).
     * @param red - Red component (0–255).
     * @param green - Green component (0–255).
     * @param blue - Blue component (0–255).
     * @returns void
     *
     * @example
     * ```javascript
     * var timeline = an.getDocumentDOM().getTimeline();
     * timeline.camera.cameraEnabled = true;
     * timeline.camera.tintEnabled = true;
     * timeline.camera.setTint(0, 100, 255, 255, 255);
     * ```
     */
    setTint(frameIndex: number, amount: number, red: number, green: number, blue: number): void;

    /**
     * Sets the camera color filter using decomposed color adjustments.
     *
     * @param frameIndex - Frame number in the timeline.
     * @param brightness - Brightness adjustment.
     * @param contrast - Contrast adjustment.
     * @param saturation - Saturation adjustment.
     * @param hue - Hue adjustment.
     * @returns void
     *
     * @example
     * ```javascript
     * var timeline = an.getDocumentDOM().getTimeline();
     * timeline.camera.cameraEnabled = true;
     * timeline.camera.colorFilterEnabled = true;
     * timeline.camera.setColorFilter(0, 50, 255, 255, 100);
     * ```
     */
    setColorFilter(
        frameIndex: number,
        brightness: number,
        contrast: number,
        saturation: number,
        hue: number
    ): void;

    /**
     * Resets camera zoom to default (100%).
     *
     * @param frameIndex - Frame number in the timeline.
     * @returns void
     *
     * @example
     * ```javascript
     * var timeline = an.getDocumentDOM().getTimeline();
     * timeline.camera.resetZoom(0);
     * ```
     */
    resetZoom(frameIndex: number): void;

    /**
     * Resets camera rotation to 0 degrees.
     *
     * @param frameIndex - Frame number in the timeline.
     * @returns void
     *
     * @example
     * ```javascript
     * var timeline = an.getDocumentDOM().getTimeline();
     * timeline.camera.resetRotation(0);
     * ```
     */
    resetRotation(frameIndex: number): void;

    /**
     * Resets camera position to (0, 0, 0).
     *
     * @param frameIndex - Frame number in the timeline.
     * @returns void
     *
     * @example
     * ```javascript
     * var timeline = an.getDocumentDOM().getTimeline();
     * timeline.camera.resetPosition(0);
     * ```
     */
    resetPosition(frameIndex: number): void;

    /**
     * Removes camera tint (resets to no tint).
     *
     * @param frameIndex - Frame number in the timeline.
     * @returns void
     *
     * @example
     * ```javascript
     * var tl = an.getDocumentDOM().getTimeline();
     * tl.camera.resetTint(0); // reset camera tint at first frame in timeline
     * ```
     */
    resetTint(frameIndex: number): void;

    /**
     * Removes the camera color filter.
     *
     * @param frameIndex - Frame number in the timeline.
     * @returns void
     *
     * @example
     * ```javascript
     * var timeline = an.getDocumentDOM().getTimeline();
     * timeline.camera.resetColorFilter(0);
     * ```
     */
    resetColorFilter(frameIndex: number): void;

    /**
     * Resets all camera properties to their defaults:
     * - position: (0, 0, 0)
     * - rotation: 0°
     * - zoom: 100%
     * - tint: disabled
     * - color filter: disabled
     *
     * @param frameIndex - Frame number in the timeline.
     * @returns void
     *
     * @example
     * ```javascript
     * var timeline = an.getDocumentDOM().getTimeline();
     * timeline.camera.reset(0);
     * ```
     */
    reset(frameIndex: number): void;


    /**
     * 必须为非0的整数
     * @since Animate 2019
     * @param  frameIndex
     * @param  tx  必须为非0的整数
     * @param  ty  必须为非0的整数
     */
    setPosition(frameIndex: number, tx: number, ty: number): void;

}