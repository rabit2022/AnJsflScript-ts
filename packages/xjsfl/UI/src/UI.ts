// ------------------------------------------------------------------------------------------------------------------------
//
//  ██  ██ ██
//  ██  ██ ██
//  ██  ██ ██
//  ██  ██ ██
//  ██  ██ ██
//  ██  ██ ██
//  ██████ ██
//
// ------------------------------------------------------------------------------------------------------------------------
// UI

/**
 * UI
 * @overview User Interface class to provide structured access to core Flash UI elements like Document, Timeline, etc
 * @instance UI
 */

// --------------------------------------------------------------------------------
// Library

// var doc = fl.getDocumentDOM(); // Document
// if (!checkDom(doc)) return;
//
// var selection = doc.selection; // Selection
//
// var library = doc.library; // Library
// var items = library.items;
//
//
// var timeline = doc.getTimeline(); // Timeline
//
// var layers = timeline.layers; // Layers
// var curLayerIndex = timeline.currentLayer; // Current layer index
// var curLayer = layers[curLayerIndex]; // Current layer
//
// var curFrameIndex = timeline.currentFrame; // Current frame index
// var curFrame = curLayer.frames[curFrameIndex]; // Current frame
//
// var elements = curFrame.elements; // Elements

// This module no longer handles alert responsibilities, Validation is responsible for pop-up windows
const _alert = console.warn;

/**
 * @class UI
 */
export const UI = {
    /**
     * Get the current Document DOM object
     * Shows a warning if no document is open
     * @name UI.dom
     * @static
     */
    get dom(): FlashDocument | undefined {
        var dom = fl.getDocumentDOM();
        if (dom) {
            return dom;
        }
        _alert("Open a Flash document (FLA) first");
        return undefined;
    },

    /**
     * Get the current selection in the document
     * Shows a warning if nothing is selected or no document is open
     * @static
     */
    get selection(): FlashElement[] | undefined {
        if (UI.dom) {
            var selection = UI.dom.selection;
            if (selection.length > 0) {
                return selection;
            }
            _alert("Select some elements in the document");
            return undefined;
        }
        return undefined;
    },

    /**
     * Get the library object of the current document
     * Returns undefined if no document is open
     * @static
     */
    get library() {
        if (UI.dom) {
            return UI.dom.library;
        }
        return undefined;
    },

    /**
     * Get currently selected library items
     * Shows a warning if no library items are selected or no document is open
     * @static
     */
    get items() {
        if (UI.library) {
            var items = UI.library.getSelectedItems();
            if (items.length > 0) {
                return items;
            }
            _alert("Select some items in the Library panel");
            return undefined;
        }
        return undefined;
    },

    /**
     * Get the Timeline object of the current document
     * Shows a warning if no document is open
     * @static
     */
    get timeline() {
        if (UI.dom) {
            return UI.dom.getTimeline();
        }
        return undefined;
    },

    /**
     * Get all layers in the current timeline
     * Returns undefined if timeline is unavailable
     * @static
     */
    get layers(): Layer[] | undefined {
        if (UI.timeline) {
            return UI.timeline.layers;
        }
        return undefined;
    },

    /**
     * Get the index of the currently active layer (0-based)
     * Returns undefined if timeline is unavailable
     * @static
     */
    get currentLayerIndex() {
        if (UI.timeline) {
            return UI.timeline.currentLayer;
        }
        return undefined;
    },

    /**
     * Get the currently active layer object
     * Returns undefined if layer index is invalid or timeline is unavailable
     * @static
     */
    get currentLayer() {
        const layers = UI.layers;
        const layerIndex = UI.currentLayerIndex;
        if (!layers || layerIndex === undefined || layerIndex < 0 || layerIndex >= layers.length) {
            _alert("No valid layer is selected in the timeline");
            return undefined;
        }
        return layers[layerIndex];
    },

    /**
     * Get all frames in the current layer
     * Returns undefined if current layer is unavailable
     * @static
     */
    get frames(): Frame[] | undefined {
        if (UI.currentLayer) {
            return UI.currentLayer.frames;
        }
        return undefined;
    },

    /**
     * Get the index of the currently active frame (0-based)
     * Returns undefined if timeline is unavailable
     * @static
     */
    get currentFrameIndex() {
        if (UI.timeline) {
            return UI.timeline.currentFrame;
        }
        return undefined;
    },

    /**
     * Get the currently active frame object (from the current layer)
     * Returns undefined if frame or layer is unavailable
     * @static
     */
    get currentFrame(): Frame | undefined {
        const frames = UI.frames;
        const frameIdx = UI.currentFrameIndex;
        if (!frames || frameIdx === undefined || frameIdx < 0 || frameIdx >= frames.length) {
            _alert("Invalid current frame or no frame selected");
            return undefined;
        }
        return frames[frameIdx];
    },

    /**
     * Get all elements in the current frame
     * Returns undefined if current frame is unavailable
     * @static
     */
    get elements():FlashElement[] | undefined {
        if (UI.currentFrame) {
            return UI.currentFrame.elements;
        }
        return undefined;
    },

    /**
     * Get the first element in the current selection
     * Returns undefined if no selection exists
     * @static
     */
    get firstElement():FlashElement|undefined {
        if (UI.selection) {
            const selection = UI.selection;
            return selection.length > 0 ? selection[0] : undefined;
        }
        return undefined;
    },

    /**
     * Get the index of the first selected element within the current frame elements
     * Returns undefined if no elements or selection exists
     * @static
     */
    get firstElementIndex() {
        const elements = UI.elements;
        const element = UI.firstElement;
        if (!elements || elements.length == 0 || !element) {
            _alert("No elements selected in the current frame");
            return undefined;
        }
        return elements.indexOf(element);
    },

    // ----------------------------------------------------------------------------------------------------
    // Document Methods (from Flash.jsfl)

    /**
     * Updates the document to enable live preview
     * Equivalent to: document.livePreview = true
     */
    updateDocument(): void {
        if (UI.dom) {
            UI.dom.livePreview = true;
        }
    },

    // ----------------------------------------------------------------------------------------------------
    // Timeline Methods (from Flash.jsfl)

    /**
     * Gets the selected layers of a Timeline
     * Returns undefined if timeline is unavailable
     * @returns An Array of Layer objects
     */
    get selectedLayers():Layer[]|undefined {
        if (!UI.timeline) {
            return undefined;
        }

        const indices  = UI.timeline.getSelectedLayers();
        // Sort indices in ascending order
        const sortedIndices = indices.sort((a, b) => a - b);
        const selectedLayers = [];

        // Get layers corresponding to sorted indices
        for (let i = 0; i < sortedIndices.length; i++) {
            const index = sortedIndices[i];
            if (index >= 0 && index < UI.timeline.layers.length) {
                selectedLayers.push(UI.timeline.layers[index]);
            }
        }

        return selectedLayers;
    },

    /**
     * Gets the selected frames of a Timeline as an Array of Objects with 'index', 'start', 'end' and 'layer' properties
     * Returns undefined if timeline is unavailable
     * @returns An Array of frame objects
     */
    get selectedFrames() {
        if (!UI.timeline) {
            return undefined;
        }

        const frames = [];
        const indices = UI.timeline.getSelectedFrames();

        // Process indices in groups of 3 (layer index, start frame, end frame)
        for (let i = 0; i < indices.length; i += 3) {
            if (i + 2 < indices.length) {
                const index = indices[i];
                const start = indices[i + 1];
                const end = indices[i + 2];

                if (index >= 0 && index < UI.timeline.layers.length) {
                    const layer = UI.timeline.layers[index];
                    frames.push({ index, start, end, layer });
                }
            }
        }

        return frames;
    },

    // ----------------------------------------------------------------------------------------------------
    // Library Methods (from Flash.jsfl)

    /**
     * Gets all or optionally selected library items, sorted by name
     * Returns empty array if library is unavailable
     * @param selected Optional boolean to return selected items only (defaults to all items)
     * @returns An Array of LibraryItems sorted alphabetically by name
     */
    getLibraryItems(selected?: boolean): LibraryItem[]|undefined {
        if (!UI.library) {
            return undefined;
        }

        let items: any[];
        if (selected) {
            items = UI.library.getSelectedItems();
        } else {
            items = UI.library.items;
        }

        // Sort items alphabetically by name (case-insensitive)
        return items.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
        });
    },

    /**
     * Gets the name of a library item without the full library path
     * Returns empty string if item is invalid or has no name
     * @param item A LibraryItem object
     * @returns The item name without path
     */
    getItemName(item: any): string {
        if (!item || !item.name) {
            return "";
        }
        const parts = item.name.split("/");
        return parts[parts.length - 1];
    },

    /**
     * Sets the name of a library item without affecting its path
     * Does nothing if item is invalid
     * @param item A LibraryItem object
     * @param value The new item name
     */
    setItemName(item: any, value: string): void {
        if (item) {
            // Get current path
            const parts = item.name.split("/");
            if (parts.length > 1) {
                // Keep the path, change only the last part (the name)
                parts[parts.length - 1] = value;
                item.name = parts.join("/");
            } else {
                // No path, just set the name
                item.name = value;
            }
        }
    },

    // ----------------------------------------------------------------------------------------------------
    // Lightweight function to return the current UI state

    /**
     * Lightweight function to return the current UI state
     * Returns an object with document, timeline, and selection information
     * @returns Object containing UI state information
     * @static
     */
    get state() {
        // TODO: Add boolean parameter to also get selected elements
        var obj = {};
        var dom = UI.dom;
        if (dom) {
            // BUG: CS5.5 won't allow you to get a timeline sometimes
            var timeline = dom.getTimeline();
            obj = {
                document: dom.pathURI || dom.name,
                timeline: timeline.name,
                layers: String(timeline.getSelectedLayers()),
                frames: String(timeline.getSelectedFrames()),
                numLayers: timeline.layers.length,
                numFrames: timeline.frameCount,
                selection: null
            };
        }
        return obj;
    }
};