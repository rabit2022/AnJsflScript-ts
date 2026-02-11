(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["UI"] = factory();
	else
		root["UI"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  UI: function() { return /* reexport */ UI; }
});

;// ./src/UI.ts
var _alert = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
};
var UI = {
    get dom() {
        var dom = fl.getDocumentDOM();
        if (dom) {
            return dom;
        }
        _alert("Open a Flash document (FLA) first");
        return undefined;
    },
    get selection() {
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
    get library() {
        if (UI.dom) {
            return UI.dom.library;
        }
        return undefined;
    },
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
    get timeline() {
        if (UI.dom) {
            return UI.dom.getTimeline();
        }
        return undefined;
    },
    get layers() {
        if (UI.timeline) {
            var layers = UI.timeline.layers;
            if (layers.length > 0) {
                return layers;
            }
            _alert("Select some layers in the layers");
        }
        return undefined;
    },
    get currentLayerIndex() {
        if (UI.timeline) {
            return UI.timeline.currentLayer;
        }
        return undefined;
    },
    get currentLayer() {
        var layers = UI.layers;
        var layerIndex = UI.currentLayerIndex;
        if (!layers || layerIndex === undefined || layerIndex < 0 || layerIndex >= layers.length) {
            _alert("No valid layer is selected in the timeline");
            return undefined;
        }
        return layers[layerIndex];
    },
    get frames() {
        if (UI.currentLayer) {
            return UI.currentLayer.frames;
        }
        return undefined;
    },
    get currentFrameIndex() {
        if (UI.timeline) {
            return UI.timeline.currentFrame;
        }
        return undefined;
    },
    get currentFrame() {
        var frames = UI.frames;
        var frameIdx = UI.currentFrameIndex;
        if (!frames || frameIdx === undefined || frameIdx < 0 || frameIdx >= frames.length) {
            _alert("Invalid current frame or no frame selected");
            return undefined;
        }
        return frames[frameIdx];
    },
    get elements() {
        if (UI.currentFrame) {
            return UI.currentFrame.elements;
        }
        return undefined;
    },
    get firstElement() {
        if (UI.selection) {
            var selection = UI.selection;
            return selection.length > 0 ? selection[0] : undefined;
        }
        return undefined;
    },
    get firstElementIndex() {
        var elements = UI.elements;
        var element = UI.firstElement;
        if (!elements || elements.length == 0 || !element) {
            _alert("No elements selected in the current frame");
            return undefined;
        }
        return elements.indexOf(element);
    },
    updateDocument: function () {
        if (UI.dom) {
            UI.dom.livePreview = true;
        }
    },
    get selectedLayerIndexs() {
        if (!UI.timeline) {
            return undefined;
        }
        var indices = UI.timeline.getSelectedLayers();
        return indices.length > 0 ? indices : undefined;
    },
    get selectedLayers() {
        var indices = UI.selectedLayerIndexs;
        if (!indices) {
            return undefined;
        }
        var layers = UI.layers;
        if (!layers) {
            return undefined;
        }
        var sortedIndices = indices.sort(function (a, b) { return a - b; });
        var selectedLayers = [];
        for (var i = 0; i < sortedIndices.length; i++) {
            var index = sortedIndices[i];
            if (index >= 0 && index < layers.length) {
                selectedLayers.push(layers[index]);
            }
        }
        return selectedLayers;
    },
    get selectedFrameIndexs() {
        if (!UI.timeline) {
            return undefined;
        }
        var indices = UI.timeline.getSelectedFrames();
        return indices.length > 0 ? indices : undefined;
    },
    get selectedFrames() {
        var indices = UI.selectedFrameIndexs;
        if (!indices) {
            return undefined;
        }
        var layers = UI.layers;
        if (!layers) {
            return undefined;
        }
        var frames = [];
        for (var i = 0; i < indices.length; i += 3) {
            if (i + 2 < indices.length) {
                var index = indices[i];
                var start = indices[i + 1];
                var end = indices[i + 2];
                if (index >= 0 && index < layers.length) {
                    var layer = layers[index];
                    frames.push({ index: index, start: start, end: end, layer: layer });
                }
            }
        }
        return frames;
    },
    get selectedItems() {
        var library = UI.library;
        if (!library) {
            return undefined;
        }
        var items = library.getSelectedItems();
        return items.sort(function (a, b) {
            var nameA = a.name.toLowerCase();
            var nameB = b.name.toLowerCase();
            if (nameA < nameB)
                return -1;
            if (nameA > nameB)
                return 1;
            return 0;
        });
    },
    getItemName: function (item) {
        if (!item || !item.name) {
            return "";
        }
        var parts = item.name.split("/");
        return parts[parts.length - 1];
    },
    setItemName: function (item, value) {
        if (item) {
            var parts = item.name.split("/");
            if (parts.length > 1) {
                parts[parts.length - 1] = value;
                item.name = parts.join("/");
            }
            else {
                item.name = value;
            }
        }
    },
    get state() {
        var obj = {};
        var dom = UI.dom;
        if (dom) {
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

;// ./src/index.ts


/******/ 	return __webpack_exports__;
/******/ })()
;
});