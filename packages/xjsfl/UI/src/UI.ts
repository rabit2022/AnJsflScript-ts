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
 * @overview    User Interface class to provide structured access to core Flash UI elements like Document, Timeline, etc
 * @instance    UI
 */

// --------------------------------------------------------------------------------
// Library

// var doc = fl.getDocumentDOM(); //文档
// if (!checkDom(doc)) return;
//
// var selection = doc.selection; //选择
//
// var library = doc.library; //库文件
// var items = library.items;
//
//
// var timeline = doc.getTimeline(); //时间轴
//
// var layers = timeline.layers; //图层
// var curLayerIndex = timeline.currentLayer; //当前图层索引
// var curLayer = layers[curLayerIndex]; //当前图层
//
// var curFrameIndex = timeline.currentFrame; //当前帧索引
// var curFrame = curLayer.frames[curFrameIndex]; //当前帧
//
// var elements = curFrame.elements;

// 当前模块不再承担alert职责，Validation负责弹出窗口
const _alert = console.warn;

/**
 * @class UI
 */
export const UI = {
    /**
     * Get the current Document DOM, or issue a standard warning if not available
     * @returns    {Document}        A Document object
     * @returns    {Boolean}        False if not available
     * @name    UI.dom
     * @static
     */
    get dom() {
        var dom = fl.getDocumentDOM();
        if (dom) {
            return dom;
        }
        _alert("Open a Flash document (FLA) before running this script");
        return false;
    },

    /**
     * Get the current selection, or issue a standard warning if nothing is selected
     * @returns    {Array}            An array of elements
     * @returns    {Boolean}        False if no selection
     * @static
     */
    get selection() {
        if (UI.dom) {
            var selection = UI.dom.selection;
            if (selection.length > 0) {
                return selection;
            }
            _alert("Make a selection before running this script");
            return false;
        }
        return false;
    },

    get library() {
        if (UI.dom) {
            return UI.dom.library;
        }
        return false;
    },

    /**
     * Get the currently selected library items, or issue a standard warning if not selected
     * @returns    {Array}            An array of library items
     * @returns    {Boolean}        False if not available
     * @static
     */
    get items() {
        if (UI.library) {
            var items = UI.library.getSelectedItems();
            if (items.length > 0) {
                return items;
            }
            _alert("Select some library items before running this script");
            return false;
        }
        return false;
    },
    /**
     * Get the current Timeline, or issue a standard warning if not available
     * @returns    {Timeline}        A Timelineobject
     * @returns    {Boolean}        False if not available
     * @static
     */
    get timeline() {
        if (UI.dom) {
            return UI.dom.getTimeline();
        }
        _alert("Open a Flash document (FLA) before running this script");
        return false;
    },

    /**
     * Get all layers in the current timeline.
     * Returns an empty array if timeline is unavailable.
     */
    get layers() {
        if (UI.timeline) {
            return UI.timeline.layers;
        }
        _alert("Select some library items before running this script");
        return false;
    },

    /**
     * Get the index of the currently active layer (0-based).
     * Returns -1 if timeline is unavailable.
     */
    get currentLayerIndex() {
        if (UI.timeline) {
            return UI.timeline.currentLayer;
        }
        _alert("Select some library items before running this script");
        return -1;
    },

    /**
     * Get the currently active layer object.
     * Returns null if layer index is invalid or timeline is unavailable.
     */
    get currentLayer() {
        const layers = UI.layers;
        const layerIndex = UI.currentLayerIndex;
        if (!layers || layerIndex < 0 || layerIndex > layers.length) {
            _alert("Select some library items before running this script");
            return false;
        }
        return layers[layerIndex];
    },

    get frames() {
        if (UI.currentLayer) {
            return UI.currentLayer.frames;
        }
        _alert("Select some library items before running this script");
        return false;
    },

    /**
     * Get the index of the currently active frame (0-based).
     * Returns -1 if timeline is unavailable.
     */
    get currentFrameIndex(): number {
        if (UI.timeline) {
            return UI.timeline.currentFrame;
        }
        _alert("Select some library items before running this script");
        return -1;
    },

    /**
     * Get the currently active frame object (from the current layer).
     * Returns null if frame or layer is unavailable.
     */
    get currentFrame() {
        const frames = UI.frames;
        const frameIdx = this.currentFrameIndex;
        if (!frames || frameIdx < 0 || frameIdx >= frames.length) {
            _alert("Invalid current frame.");
            return false;
        }
        return frames[frameIdx];
    },

    get elements() {
        if (UI.currentFrame) {
            return UI.currentFrame.elements;
        }
        _alert("Select some library items before running this script");
        return false;
    },

    get firstElement() {
        if (UI.selection) {
            const selection = UI.selection;
            return selection.length > 0 ? selection[0] : false;
        }
        _alert("Select some library items before running this script");
        return false;
    },

    get firstElementIndex() {
        const elements = UI.elements;
        const element = UI.firstElement;
        if (!elements || elements.length == 0 || !element) {
            _alert("Select some library items before running this script");
            return -1;
        }
        return elements.indexOf(element);
    },

    /**
     * Lightweight function to return the current UI state
     * @returns    {Object}
     * @static
     */
    get state() {
        //TODO Add in boolean to also get the selected elements
        var obj = {};
        var dom = UI.dom;
        if (dom) {
            //BUG CS5.5 won't allow you to get a timeline sometimes
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
