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
var _alert = console.warn;
var UI = {
    get dom() {
        var dom = fl.getDocumentDOM();
        if (dom) {
            return dom;
        }
        _alert('Open a Flash document (FLA) before running this script');
        return false;
    },
    get selection() {
        if (UI.dom) {
            var selection = UI.dom.selection;
            if (selection.length > 0) {
                return selection;
            }
            _alert('Make a selection before running this script');
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
    get items() {
        if (UI.library) {
            var items = UI.library.getSelectedItems();
            if (items.length > 0) {
                return items;
            }
            _alert('Select some library items before running this script');
            return false;
        }
        return false;
    },
    get timeline() {
        if (UI.dom) {
            return UI.dom.getTimeline();
        }
        _alert('Open a Flash document (FLA) before running this script');
        return false;
    },
    get layers() {
        if (UI.timeline) {
            return UI.timeline.layers;
        }
        _alert('Select some library items before running this script');
        return false;
    },
    get currentLayerIndex() {
        if (UI.timeline) {
            return UI.timeline.currentLayer;
        }
        _alert('Select some library items before running this script');
        return -1;
    },
    get currentLayer() {
        var layers = UI.layers;
        var layerIndex = UI.currentLayerIndex;
        if (!layers || layerIndex < 0 || layerIndex > layers.length) {
            _alert('Select some library items before running this script');
            return false;
        }
        return layers[layerIndex];
    },
    get frames() {
        if (UI.currentLayer) {
            return UI.currentLayer.frames;
        }
        _alert('Select some library items before running this script');
        return false;
    },
    get currentFrameIndex() {
        if (UI.timeline) {
            return UI.timeline.currentFrame;
        }
        _alert('Select some library items before running this script');
        return -1;
    },
    get currentFrame() {
        var frames = UI.frames;
        var frameIdx = this.currentFrameIndex;
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
        _alert('Select some library items before running this script');
        return false;
    },
    get firstElement() {
        if (UI.selection) {
            var selection = UI.selection;
            return selection.length > 0 ? selection[0] : false;
        }
        _alert('Select some library items before running this script');
        return false;
    },
    get firstElementIndex() {
        var elements = UI.elements;
        var element = UI.firstElement;
        if (!elements || elements.length == 0 || !element) {
            _alert('Select some library items before running this script');
            return -1;
        }
        return elements.indexOf(element);
    },
    get state() {
        var obj = {};
        var dom = UI.dom;
        if (dom) {
            var timeline = dom.getTimeline();
            obj =
                {
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
    },
};

;// ./src/index.ts


/******/ 	return __webpack_exports__;
/******/ })()
;
});