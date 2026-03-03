/**
 * Represents the Animate timeline.
 * Accessible via fl.getDocumentDOM().getTimeline() for current scene/symbol.
 * For scenes, timelines can also be accessed via fl.getDocumentDOM().timelines[i].
 * Frame indices are zero-based (first frame = index 0).
 */
interface Timeline {
    // --- Properties ---

    /**
     * Boolean: enables/disables advanced layers mode (Animate 2020+).
     *
     * @example
     * var timeline = fl.getDocumentDOM().getTimeline();
     * timeline.advancedLayersEnabled = true;
     */
    advancedLayersEnabled: boolean;

    /**
     * Zero-based index of the frame at current playhead location.
     *
     * @example
     * // Set playhead to Frame 10 (index 9)
     * fl.getDocumentDOM().getTimeline().currentFrame = 9;
     * // Store current playhead location
     * var curFrame = fl.getDocumentDOM().getTimeline().currentFrame;
     */
    currentFrame: number;

    /**
     * Zero-based index of currently active layer (0 = top layer).
     *
     * @example
     * // Make top layer active
     * fl.getDocumentDOM().getTimeline().currentLayer = 0;
     * // Store index of active layer
     * var curLayer = fl.getDocumentDOM().getTimeline().currentLayer;
     */
    currentLayer: number;

    /**
     * Read-only integer: number of frames in timeline's longest layer.
     *
     * @example
     * var countNum = fl.getDocumentDOM().getTimeline().frameCount;
     */
    readonly frameCount: number;

    /**
     * Read-only integer: number of layers in timeline.
     *
     * @example
     * var NumLayer = fl.getDocumentDOM().getTimeline().layerCount;
     */
    readonly layerCount: number;

    /**
     * Read-only array of Layer objects.
     *
     * @example
     * var currentLayers = fl.getDocumentDOM().getTimeline().layers;
     */
    readonly layers: Layer[];

    /**
     * Read-only property:
     * - null → timeline belongs to a scene
     * - non-null → treat as LibraryItem object (symbol/screen)
     *
     * @example
     * var item = fl.getDocumentDOM().getTimeline().libraryItem;
     * if (item)
     *   fl.trace("libraryItem name: " + item.name);
     * else
     *   fl.trace("scene name: " + fl.getDocumentDOM().getTimeline().name);
     */
    readonly libraryItem: LibraryItem | null;

    /**
     * String: name of current timeline (scene, screen, or symbol name).
     *
     * @example
     * // Get first scene name
     * var sceneName = fl.getDocumentDOM().timelines[0].name;
     * // Set first scene name
     * fl.getDocumentDOM().timelines[0].name = "FirstScene";
     */
    name: string;

    // --- Methods ---

    /**
     * Adds motion guide layer above current layer and attaches current layer to it.
     * Only works on "Normal" layers; returns -1 for other types.
     * Converts current layer to "Guided".
     *
     * @returns Zero-based index of new guide layer, or -1 if failed
     *
     * @example
     * fl.getDocumentDOM().getTimeline().addMotionGuide();
     */
    addMotionGuide(): number;

    /**
     * Adds new layer to document and makes it current.
     *
     * @param name Optional layer name (default: "Layer n")
     * @param layerType Optional type ("normal", "guide", "guided", "mask", "masked", "folder")
     * @param bAddAbove Optional: true=add above current (default), false=add below
     * @returns Zero-based index of new layer
     *
     * @example
     * // Add default layer
     * fl.getDocumentDOM().getTimeline().addNewLayer();
     * // Add named folder above current layer
     * fl.getDocumentDOM().getTimeline().addNewLayer("Folder1", "folder", true);
     */
    addNewLayer(name?: string, layerType?: "normal" | "guide" | "guided" | "mask" | "masked" | "folder", bAddAbove?: boolean): number;

    /**
     * Deletes contents from frame(s) on current layer.
     *
     * @param startFrameIndex Optional zero-based start index (uses selection if omitted)
     * @param endFrameIndex Optional zero-based end index (not included; defaults to startFrameIndex if only start given)
     *
     * @example
     * // Clear frames 6-10 (indices 5-9)
     * fl.getDocumentDOM().getTimeline().clearFrames(5, 10);
     * // Clear Frame 15 (index 14)
     * fl.getDocumentDOM().getTimeline().clearFrames(14);
     */
    clearFrames(startFrameIndex?: number, endFrameIndex?: number): void;

    /**
     * Converts keyframe(s) to regular frames and deletes contents.
     *
     * @param startFrameIndex Optional zero-based start index (uses selection if omitted)
     * @param endFrameIndex Optional zero-based end index (not included; defaults to startFrameIndex if only start given)
     *
     * @example
     * // Clear keyframes 5-9 (indices 4-8)
     * fl.getDocumentDOM().getTimeline().clearKeyframes(4, 9);
     * // Clear keyframe at Frame 15 (index 14)
     * fl.getDocumentDOM().getTimeline().clearKeyframes(14);
     */
    clearKeyframes(startFrameIndex?: number, endFrameIndex?: number): void;

    /**
     * Converts frame(s) to blank keyframes on current layer.
     *
     * @param startFrameIndex Optional zero-based start index (uses selection if omitted)
     * @param endFrameIndex Optional zero-based end index (not included; defaults to startFrameIndex if only start given)
     *
     * @example
     * // Convert frames 2-9 to blank keyframes (indices 1-8)
     * fl.getDocumentDOM().getTimeline().convertToBlankKeyframes(1, 9);
     * // Convert Frame 5 to blank keyframe (index 4)
     * fl.getDocumentDOM().getTimeline().convertToBlankKeyframes(4);
     */
    convertToBlankKeyframes(startFrameIndex?: number, endFrameIndex?: number): void;

    /**
     * Converts frame(s) to keyframes on current layer.
     *
     * @param startFrameIndex Optional zero-based start index (uses selection if omitted)
     * @param endFrameIndex Optional zero-based end index (not included; defaults to startFrameIndex if only start given)
     *
     * @example
     * // Convert selected frames to keyframes
     * fl.getDocumentDOM().getTimeline().convertToKeyframes();
     * // Convert frames 2-9 to keyframes (indices 1-8)
     * fl.getDocumentDOM().getTimeline().convertToKeyframes(1, 9);
     * // Convert Frame 5 to keyframe (index 4)
     * fl.getDocumentDOM().getTimeline().convertToKeyframes(4);
     */
    convertToKeyframes(startFrameIndex?: number, endFrameIndex?: number): void;

    /**
     * Copies frame(s) on current layer to clipboard.
     *
     * @param startFrameIndex Optional zero-based start index (uses selection if omitted)
     * @param endFrameIndex Optional zero-based end index (not included; defaults to startFrameIndex if only start given)
     *
     * @example
     * // Copy selected frames
     * fl.getDocumentDOM().getTimeline().copyFrames();
     * // Copy frames 2-9 (indices 1-8)
     * fl.getDocumentDOM().getTimeline().copyFrames(1, 9);
     * // Copy Frame 5 (index 4)
     * fl.getDocumentDOM().getTimeline().copyFrames(4);
     */
    copyFrames(startFrameIndex?: number, endFrameIndex?: number): void;

    /**
     * Copies selected layers or specified range to clipboard.
     *
     * @param startLayerIndex Optional zero-based start layer index (uses selection if omitted)
     * @param endLayerIndex Optional zero-based end layer index (included; defaults to startLayerIndex if only start given)
     *
     * @example
     * // Copy layers 2-7 (indices 2-7)
     * fl.getDocumentDOM().getTimeline().copyLayers(2, 7);
     */
    copyLayers(startLayerIndex?: number, endLayerIndex?: number): void;

    /**
     * Copies motion from selected frames (motion tween or frame-by-frame) to clipboard.
     * Use pasteMotion() to apply to other frames.
     *
     * @example
     * fl.getDocumentDOM().getTimeline().copyMotion();
     * @see pasteMotion
     */
    copyMotion(): void;

    /**
     * Copies motion from selected frames as ActionScript 3.0 code to clipboard.
     *
     * @example
     * fl.getDocumentDOM().getTimeline().copyMotionAsAS3();
     * @see copyMotion
     */
    copyMotionAsAS3(): void;

    /**
     * Creates new motion object at designated start/end frame.
     *
     * @param startFrame Optional start frame index (uses selection if omitted)
     * @param endFrame Optional end frame index (not included; defaults to startFrame if only start given)
     *
     * @example
     * // Create motion object at current playhead (top layer)
     * fl.getDocumentDOM().getTimeline().currentLayer = 0;
     * fl.getDocumentDOM().getTimeline().createMotionObject();
     * // Create motion object from Frame 5-14 (indices 5-14)
     * fl.getDocumentDOM().getTimeline().currentLayer = 0;
     * fl.getDocumentDOM().getTimeline().createMotionObject(5, 15);
     * @see removeMotionObject
     */
    createMotionObject(startFrame?: number, endFrame?: number): void;

    /**
     * Creates motion tween for selected keyframes on current layer.
     * Converts frame contents to single symbol instance if necessary.
     *
     * @param startFrameIndex Optional zero-based start index (uses selection if omitted)
     * @param endFrameIndex Optional zero-based end index (not included; defaults to startFrameIndex if only start given)
     *
     * @example
     * // Create motion tween for frames 1-9 (indices 0-8)
     * fl.getDocumentDOM().getTimeline().createMotionTween(0, 9);
     */
    createMotionTween(startFrameIndex?: number, endFrameIndex?: number): void;

    /**
     * Cuts frame(s) on current layer and saves to clipboard.
     *
     * @param startFrameIndex Optional zero-based start index (uses selection if omitted)
     * @param endFrameIndex Optional zero-based end index (not included; defaults to startFrameIndex if only start given)
     *
     * @example
     * // Cut selected frames
     * fl.getDocumentDOM().getTimeline().cutFrames();
     * // Cut frames 2-9 (indices 1-8)
     * fl.getDocumentDOM().getTimeline().cutFrames(1, 9);
     * // Cut Frame 5 (index 4)
     * fl.getDocumentDOM().getTimeline().cutFrames(4);
     */
    cutFrames(startFrameIndex?: number, endFrameIndex?: number): void;

    /**
     * Cuts selected layers or specified range to clipboard.
     *
     * @param startLayerIndex Optional zero-based start layer index (uses selection if omitted)
     * @param endLayerIndex Optional zero-based end layer index (included; defaults to startLayerIndex if only start given)
     *
     * @example
     * // Cut layers 2-7 (indices 2-7)
     * fl.getDocumentDOM().getTimeline().cutLayers(2, 7);
     * @see copyLayers, pasteLayers, duplicateLayers
     */
    cutLayers(startLayerIndex?: number, endLayerIndex?: number): void;

    /**
     * Deletes layer(s). If layer is folder, deletes all nested layers.
     * No effect if only one layer exists.
     *
     * @param index Optional zero-based layer index (deletes selected layers if omitted)
     *
     * @example
     * // Delete second layer (index 1)
     * fl.getDocumentDOM().getTimeline().deleteLayer(1);
     * // Delete selected layers
     * fl.getDocumentDOM().getTimeline().deleteLayer();
     */
    deleteLayer(index?: number): void;

    /**
     * Duplicates selected layers or specified range.
     *
     * @param startLayerIndex Optional zero-based start layer index (uses selection if omitted)
     * @param endLayerIndex Optional zero-based end layer index (included; defaults to startLayerIndex if only start given)
     *
     * @example
     * // Duplicate selected layer
     * fl.getDocumentDOM().getTimeline().duplicateLayers();
     * // Duplicate layers 2-7 above layer 2
     * fl.getDocumentDOM().getTimeline().duplicateLayers(2, 7);
     * @see copyLayers, cutLayers, pasteLayers
     */
    duplicateLayers(startLayerIndex?: number, endLayerIndex?: number): void;

    /**
     * Expands or collapses folder(s).
     *
     * @param bExpand true=expand, false=collapse
     * @param bRecurseNestedParents Optional: true=apply to all nested layers (default: false)
     * @param index Optional zero-based folder index (-1=all folders; requires bRecurseNestedParents=true)
     *
     * @example
     * // Expand Folder 1 (assuming it's current layer)
     * fl.getDocumentDOM().getTimeline().currentLayer = 1;
     * fl.getDocumentDOM().getTimeline().expandFolder(true);
     * // Collapse all folders
     * fl.getDocumentDOM().getTimeline().expandFolder(false, true, -1);
     */
    expandFolder(bExpand: boolean, bRecurseNestedParents?: boolean, index?: number): void;

    /**
     * Finds layer indexes by name.
     *
     * @param name Layer name to find
     * @returns Array of zero-based indexes, or undefined if not found
     *
     * @example
     * // Show indexes of "Layer 7"
     * var layerIndex = fl.getDocumentDOM().getTimeline().findLayerIndex("Layer 7");
     * fl.trace(layerIndex);
     * // Select found layers
     * var layerIndex = fl.getDocumentDOM().getTimeline().findLayerIndex("Layer 1");
     * fl.getDocumentDOM().getTimeline().setSelectedLayers(layerIndex[0], true);
     */
    findLayerIndex(name: string): number[] | undefined;

    /**
     * Returns bounding rectangle for all elements on all layers at given frame.
     *
     * @param frame Optional frame number (defaults to 1)
     * @param includeHiddenLayers Optional: include hidden layers (defaults to SWF publish setting)
     * @returns Bounding rectangle {left, top, right, bottom} or 0 if empty
     *
     * @example
     * var doc = fl.getDocumentDOM();
     * var tl = doc.getTimeline();
     * for (var f = 1; f <= 20; f++) {
     *   var rect = tl.getBounds(f, true);
     *   if (rect != 0) {
     *     var width = rect.right - rect.left;
     *     var height = rect.bottom - rect.top;
     *     fl.trace("" + rect.left + "," + rect.top + "," + width + "," + height);
     *   }
     * }
     */
    getBounds(frame?: number, includeHiddenLayers?: boolean): {
        left: number;
        top: number;
        right: number;
        bottom: number
    } | 0;

    /**
     * Retrieves frame property value for selected frames.
     *
     * @param property Name of Frame property
     * @param startFrameIndex Optional zero-based start index (uses selection if omitted)
     * @param endFrameIndex Optional zero-based end index (not included; defaults to startFrameIndex if only start given)
     * @returns Property value, or undefined if inconsistent across frames
     *
     * @example
     * // Get name of first frame (top layer)
     * fl.getDocumentDOM().getTimeline().currentLayer = 0;
     * fl.getDocumentDOM().getTimeline().setSelectedFrames(0, 0, true);
     * var frameName = fl.getDocumentDOM().getTimeline().getFrameProperty("name");
     * fl.trace(frameName);
     * @see setFrameProperty
     */
    getFrameProperty(property: string, startFrameIndex?: number, endFrameIndex?: number): any;

    /**
     * Returns XML string of current horizontal/vertical guide positions.
     *
     * @returns XML string representing guides
     *
     * @example
     * // Get guides from first timeline
     * var currentTimeline = fl.getDocumentDOM().timelines[0];
     * fl.trace(currentTimeline.getGuidelines());
     * @see setGuidelines
     */
    getGuidelines(): string;

    /**
     * Retrieves layer property value for selected layers.
     *
     * @param property Name of Layer property
     * @returns Property value, or undefined if inconsistent across layers
     *
     * @example
     * // Get name of top layer
     * fl.getDocumentDOM().getTimeline().currentLayer = 0;
     * var layerName = fl.getDocumentDOM().getTimeline().getLayerProperty("name");
     * fl.trace(layerName);
     * @see setLayerProperty
     */
    getLayerProperty(property: string): any;

    /**
     * Retrieves currently selected frames as array.
     * Returns [layerIndex, startFrame, endFrame, ...] where endFrame is not included.
     *
     * @returns Array of 3n integers (n = number of selections)
     *
     * @example
     * // With top layer selected, select frames 5-9 and 20-24
     * var timeline = fl.getDocumentDOM().getTimeline();
     * timeline.setSelectedFrames(5, 10);
     * timeline.setSelectedFrames(20, 25, false);
     * var theSelectedFrames = timeline.getSelectedFrames();
     * fl.trace(theSelectedFrames); // Outputs: 0,5,10,0,20,25
     * @see setSelectedFrames
     */
    getSelectedFrames(): number[];

    /**
     * Retrieves zero-based indexes of currently selected layers.
     *
     * @returns Array of layer indexes
     *
     * @example
     * fl.getDocumentDOM().getTimeline().setSelectedLayers(0);
     * fl.getDocumentDOM().getTimeline().setSelectedLayers(1, false);
     * var layerArray = fl.getDocumentDOM().getTimeline().getSelectedLayers();
     * fl.trace(layerArray); // Outputs: 1,0
     * @see setSelectedLayers
     */
    getSelectedLayers(): number[];

    /**
     * Inserts blank keyframe at specified frame.
     * If frame is regular → converts to blank keyframe.
     * If frame is keyframe → inserts blank keyframe at next frame.
     *
     * @param frameNumIndex Optional zero-based frame index (uses playhead/selection if omitted)
     *
     * @example
     * // Insert blank keyframe at Frame 20 (index 19)
     * fl.getDocumentDOM().getTimeline().insertBlankKeyframe(19);
     * // Insert at current selection/playhead
     * fl.getDocumentDOM().getTimeline().insertBlankKeyframe();
     * @see insertKeyframe
     */
    insertBlankKeyframe(frameNumIndex?: number): void;

    /**
     * Inserts specified number of frames.
     *
     * @param numFrames Optional number of frames to insert (default: based on selection)
     * @param bAllLayers Optional: true=insert in all layers (default: false=current layer)
     * @param frameNumIndex Optional zero-based frame index (default: current frame)
     *
     * @example
     * // Insert frames based on selection
     * fl.getDocumentDOM().getTimeline().insertFrames();
     * // Insert 5 frames in all layers at current frame
     * fl.getDocumentDOM().getTimeline().insertFrames(5);
     * // Insert 3 frames in current layer only
     * fl.getDocumentDOM().getTimeline().insertFrames(3, false);
     * // Insert 4 frames in all layers starting from Frame 1 (index 0)
     * fl.getDocumentDOM().getTimeline().insertFrames(4, true, 0);
     */
    insertFrames(numFrames?: number, bAllLayers?: boolean, frameNumIndex?: number): void;

    /**
     * Inserts keyframe at specified frame (copies content from previous keyframe).
     *
     * @param frameNumIndex Optional zero-based frame index (uses playhead/selection if omitted)
     *
     * @example
     * // Insert keyframe at playhead
     * fl.getDocumentDOM().getTimeline().insertKeyframe();
     * // Insert keyframe at Frame 10 (index 9) on second layer (index 1)
     * fl.getDocumentDOM().getTimeline().currentLayer = 1;
     * fl.getDocumentDOM().getTimeline().insertKeyframe(9);
     * @see insertBlankKeyframe
     */
    insertKeyframe(frameNumIndex?: number): void;

    /**
     * Merges layers within specified index range (Animate 2020+).
     *
     * @param startLayerNum Starting layer index (inclusive)
     * @param endLayerNum Ending layer index (inclusive)
     * @returns Merged Layer object
     *
     * @example
     * // Merge layers 0-3
     * fl.getDocumentDOM().getTimeline().mergeLayers(0, 3);
     */
    mergeLayers(startLayerNum: number, endLayerNum: number): Layer;

    /**
     * Pastes frames from clipboard into specified location.
     *
     * @param startFrameIndex Optional zero-based start index (uses selection if omitted)
     * @param endFrameIndex Optional zero-based end index (not included; defaults to startFrameIndex if only start given)
     *
     * @example
     * // Paste at current selection/playhead
     * fl.getDocumentDOM().getTimeline().pasteFrames();
     * // Paste at frames 2-9 (indices 1-8)
     * fl.getDocumentDOM().getTimeline().pasteFrames(1, 9);
     * // Paste starting at Frame 5 (index 4)
     * fl.getDocumentDOM().getTimeline().pasteFrames(4);
     */
    pasteFrames(startFrameIndex?: number, endFrameIndex?: number): void;

    /**
     * Pastes layers from clipboard above specified layer.
     * If target is folder → pastes into folder.
     *
     * @param layerIndex Optional zero-based layer index (pastes above selected layer if omitted)
     * @returns Lowest layer index of pasted layers
     *
     * @example
     * // Paste above selected layer
     * fl.getDocumentDOM().getTimeline().pasteLayers();
     * // Paste above layer index 2
     * fl.getDocumentDOM().getTimeline().pasteLayers(2);
     * @see copyLayers, cutLayers, duplicateLayers
     */
    pasteLayers(layerIndex?: number): number;

    /**
     * Pastes motion frames retrieved by copyMotion().
     * Displaces existing frames to make room.
     *
     * @example
     * fl.getDocumentDOM().getTimeline().pasteMotion();
     * @see copyMotion
     */
    pasteMotion(): void;

    /**
     * Pastes classic tween motion with dialog to choose properties to apply.
     * Only for classic tweens (not motion tweens).
     *
     * @example
     * fl.getDocumentDOM().getTimeline().pasteMotionSpecial();
     * @see pasteMotion
     */
    pasteMotionSpecial(): void;

    /**
     * Deletes frame(s).
     *
     * @param startFrameIndex Optional zero-based start index (uses selection if omitted)
     * @param endFrameIndex Optional zero-based end index (not included; defaults to startFrameIndex if only start given)
     *
     * @example
     * // Delete frames 5-9 (indices 4-8) on top layer
     * fl.getDocumentDOM().getTimeline().currentLayer = 0;
     * fl.getDocumentDOM().getTimeline().removeFrames(4, 9);
     * // Delete Frame 8 (index 7) on top layer
     * fl.getDocumentDOM().getTimeline().currentLayer = 0;
     * fl.getDocumentDOM().getTimeline().removeFrames(7);
     */
    removeFrames(startFrameIndex?: number, endFrameIndex?: number): void;

    /**
     * Removes motion object and converts frames back to static.
     *
     * @param startFrame Optional start frame index (uses selection if omitted)
     * @param endFrame Optional end frame index (not included; defaults to startFrame if only start given)
     *
     * @example
     * // Remove motion object at current playhead (top layer)
     * fl.getDocumentDOM().getTimeline().currentLayer = 0;
     * fl.getDocumentDOM().getTimeline().removeMotionObject();
     * // Remove motion objects from Frame 5-14 (indices 5-14)
     * fl.getDocumentDOM().getTimeline().currentLayer = 0;
     * fl.getDocumentDOM().getTimeline().removeMotionObject(5, 15);
     * @see createMotionObject
     */
    removeMotionObject(startFrame?: number, endFrame?: number): void;

    /**
     * Moves layer before or after another layer.
     *
     * @param layerToMove Zero-based index of layer to move
     * @param layerToPutItBy Zero-based index of target layer
     * @param bAddBefore Optional: true=move before target (default), false=move after
     *
     * @example
     * // Move layer 2 to top (before layer 0)
     * fl.getDocumentDOM().getTimeline().reorderLayer(2, 0);
     * // Move layer 3 after layer 5
     * fl.getDocumentDOM().getTimeline().reorderLayer(3, 5, false);
     */
    reorderLayer(layerToMove: number, layerToPutItBy: number, bAddBefore?: boolean): void;

    /**
     * Reverses frame(s).
     *
     * @param startFrameIndex Optional zero-based start index (uses selection if omitted)
     * @param endFrameIndex Optional zero-based end index (not included; defaults to startFrameIndex if only start given)
     *
     * @example
     * // Reverse selected frames
     * fl.getDocumentDOM().getTimeline().reverseFrames();
     * // Reverse frames 10-14 (indices 9-13)
     * fl.getDocumentDOM().getTimeline().reverseFrames(9, 14);
     */
    reverseFrames(startFrameIndex?: number, endFrameIndex?: number): void;

    /**
     * Selects all frames in current timeline.
     *
     * @example
     * fl.getDocumentDOM().getTimeline().selectAllFrames();
     */
    selectAllFrames(): void;

    /**
     * Sets frame property for selected frames.
     * Cannot set read-only properties (e.g., duration, elements).
     *
     * @param property Name of Frame property
     * @param value Value to set
     * @param startFrameIndex Optional zero-based start index (uses selection if omitted)
     * @param endFrameIndex Optional zero-based end index (not included; defaults to startFrameIndex if only start given)
     *
     * @example
     * // Assign stop() to first frame (top layer)
     * fl.getDocumentDOM().getTimeline().currentLayer = 0;
     * fl.getDocumentDOM().getTimeline().setSelectedFrames(0, 0, true);
     * fl.getDocumentDOM().getTimeline().setFrameProperty("actionScript", "stop();");
     * // Set motion tween for frames 2-4 (indices 1-3)
     * var doc = fl.getDocumentDOM();
     * doc.getTimeline().setFrameProperty("tweenType", "motion", 1, 4);
     * @see getFrameProperty
     */
    setFrameProperty(property: string, value: any, startFrameIndex?: number, endFrameIndex?: number): void;

    /**
     * Replaces timeline guides with specified XML string.
     *
     * @param xmlString XML string from getGuidelines()
     * @returns true if successful, false otherwise
     *
     * @example
     * // Apply guides from doc0 to doc1
     * var doc0 = fl.documents[0];
     * var guides0 = doc0.timelines[0].getGuidelines();
     * var doc1 = fl.documents[1];
     * doc1.timelines[0].setGuidelines(guides0);
     * @see getGuidelines
     */
    setGuidelines(xmlString: string): boolean;

    /**
     * Sets layer property for selected/all/others layers.
     *
     * @param property Name of Layer property
     * @param value Value to set
     * @param layersToChange Optional: "selected" (default), "all", or "others"
     *
     * @example
     * // Hide selected layer(s)
     * fl.getDocumentDOM().getTimeline().setLayerProperty("visible", false);
     * // Rename selected layer(s)
     * fl.getDocumentDOM().getTimeline().setLayerProperty("name", "selLayer");
     * @see getLayerProperty
     */
    setLayerProperty(property: string, value: any, layersToChange?: "selected" | "all" | "others"): void;

    /**
     * Selects frame range in current layer or sets selection from array.
     *
     * @param startFrameIndex Zero-based start frame index OR selection array from getSelectedFrames()
     * @param endFrameIndex Optional zero-based end frame index (not included) OR bReplaceCurrentSelection
     * @param bReplaceCurrentSelection Optional: true=replace selection (default), false=extend selection
     *
     * @example
     * // Select frames 1-9 (indices 0-8) on top layer
     * fl.getDocumentDOM().getTimeline().setSelectedFrames(0, 9);
     * // Add frames 12-14 (indices 11-13) to selection
     * fl.getDocumentDOM().getTimeline().setSelectedFrames(11, 14, false);
     * // Using selection array format [layer, start, end]
     * fl.getDocumentDOM().getTimeline().setSelectedFrames([0, 0, 9]);
     * fl.getDocumentDOM().getTimeline().setSelectedFrames([0, 11, 14], false);
     * // Restore saved selection
     * var savedSelectionList = fl.getDocumentDOM().getTimeline().getSelectedFrames();
     * // ... do something ...
     * fl.getDocumentDOM().getTimeline().setSelectedFrames(savedSelectionList);
     * @see getSelectedFrames
     */
    setSelectedFrames(startFrameIndex: number, endFrameIndex: number, bReplaceCurrentSelection?: boolean): void;

    setSelectedFrames(selectionList: number[], bReplaceCurrentSelection?: boolean): void;

    /**
     * Selects layer(s) and makes specified layer current.
     * Selecting layer also selects all its frames.
     *
     * @param index Zero-based layer index
     * @param bReplaceCurrentSelection Optional: true=replace selection (default), false=extend selection
     *
     * @example
     * // Select top layer
     * fl.getDocumentDOM().getTimeline().setSelectedLayers(0);
     * // Add next layer to selection
     * fl.getDocumentDOM().getTimeline().setSelectedLayers(1, false);
     * @see getSelectedLayers
     */
    setSelectedLayers(index: number, bReplaceCurrentSelection?: boolean): void;

    /**
     * Shows layer masking during authoring by locking mask/masked layers.
     *
     * @param layer Optional zero-based index of mask/masked layer (uses current layer if omitted)
     *
     * @example
     * // Show masking for first layer
     * fl.getDocumentDOM().getTimeline().showLayerMasking(0);
     */
    showLayerMasking(layer?: number): void;

    /**
     * Starts automatic timeline playback (authoring environment).
     *
     * @example
     * fl.getDocumentDOM().getTimeline().startPlayback();
     * @see stopPlayback
     */
    startPlayback(): void;

    /**
     * Stops automatic timeline playback (authoring environment).
     *
     * @example
     * fl.getDocumentDOM().getTimeline().stopPlayback();
     * @see startPlayback
     */
    stopPlayback(): void;

    /**
     * @since Animate 2019
     * @type {Camera}
     */
    readonly camera :Camera ;
}
