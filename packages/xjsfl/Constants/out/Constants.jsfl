(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Constants"] = factory();
	else
		root["Constants"] = factory();
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
  JSFLConstants: function() { return /* reexport */ JSFLConstants; },
  JSFLNumerics: function() { return /* reexport */ JSFLNumerics; }
});

;// ./src/JSFLConstants.ts
var JSFLConstants = {
    bitmap: {
        compressionType: {
            PHOTO: 'photo',
            LOSSLESS: 'lossless'
        }
    },
    element: {
        elementType: {
            SHAPE: 'shape',
            TEXT: 'text',
            TLF_TEXT: 'tlfText',
            INSTANCE: 'instance',
            SHAPE_OBJ: 'shapeObj'
        }
    },
    filter: {
        type: {
            INNER: 'inner',
            OUTER: 'outer',
            FULL: 'full'
        },
        name: {
            ADJUST_COLOR_FILTER: 'adjustColorFilter',
            BEVEL_FILTER: 'bevelFilter',
            BLUR_FILTER: 'blurFilter',
            DROP_SHADOW_FILTER: 'dropShadowFilter',
            GLOW_FILTER: 'glowFilter',
            GRADIENT_BEVEL_FILTER: 'gradientBevelFilter',
            GRADIENT_GLOW_FILTER: 'gradientGlowFilter'
        },
        property: {
            BLUR_X: 'blurX',
            BLUR_Y: 'blurY',
            QUALITY: 'quality',
            DISTANCE: 'distance',
            STRENGTH: 'strength',
            KNOCKOUT: 'knockout',
            INNER: 'inner',
            BEVEL_TYPE: 'bevelType',
            COLOR: 'color',
            SHADOW_COLOR: 'shadowColor',
            HIGHLIGHT_COLOR: 'highlightColor'
        }
    },
    fill: {
        fillStyle: {
            BITMAP: 'bitmap',
            SOLID: 'solid',
            LINEAR_GRADIENT: 'linearGradient',
            RADIAL_GRADIENT: 'radialGradient',
            NO_FILL: 'noFill'
        }
    },
    frame: {
        labelType: {
            NONE: 'none',
            NAME: 'name',
            COMMENT: 'comment',
            ANCHOR: 'anchor'
        },
        tweenType: {
            MOTION: 'motion',
            SHAPE: 'shape',
            NONE: 'none'
        },
        easeCurve: {
            ALL: 'all',
            POSITION: 'position',
            ROTATION: 'rotation',
            SCALE: 'scale',
            COLOR: 'color',
            FILTERS: 'filters'
        }
    },
    instance: {
        instanceType: {
            SYMBOL: 'symbol',
            BITMAP: 'bitmap',
            EMBEDDED_VIDEO: 'embedded video',
            LINKED_VIDEO: 'linked video',
            VIDEO: 'video',
            COMPILED_CLIP: 'compiled clip'
        }
    },
    item: {
        itemType: {
            UNDEFINED: 'undefined',
            COMPONENT: 'component',
            MOVIE_CLIP: 'movie clip',
            GRAPHIC: 'graphic',
            BUTTON: 'button',
            FOLDER: 'folder',
            FONT: 'font',
            SOUND: 'sound',
            BITMAP: 'bitmap',
            COMPILED_CLIP: 'compiled clip',
            SCREEN: 'screen',
            VIDEO: 'video'
        }
    },
    layer: {
        animationType: {
            NONE: 'none',
            MOTION_OBJECT: 'motion object',
            IK_POSE: 'IK pose'
        },
        layerType: {
            NORMAL: 'normal',
            GUIDE: 'guide',
            GUIDED: 'guided',
            MASK: 'mask',
            MASKED: 'masked',
            FOLDER: 'folder'
        }
    },
    parameter: {
        valueType: {
            DEFAULT: 'Default',
            ARRAY: 'Array',
            OBJECT: 'Object',
            LIST: 'List',
            STRING: 'String',
            NUMBER: 'Number',
            BOOLEAN: 'Boolean',
            FONT_NAME: 'Font Name',
            COLOR: 'Color',
            COLLECTION: 'Collection',
            WEB_SERVICE_URL: 'Web Service URL',
            WEB_SERVICE_OPERATION: 'Web Service Operation'
        }
    },
    symbol: {
        symbolType: {
            BUTTON: 'button',
            MOVIE_CLIP: 'movie clip',
            GRAPHIC: 'graphic'
        },
        blendMode: {
            NORMAL: 'normal',
            LAYER: 'layer',
            MULTIPLY: 'multiply',
            SCREEN: 'screen',
            OVERLAY: 'overlay',
            HARDLIGHT: 'hardlight',
            LIGHTEN: 'lighten',
            DARKEN: 'darken',
            DIFFERENCE: 'difference',
            ADD: 'add',
            SUBTRACT: 'subtract',
            INVERT: 'invert',
            ALPHA: 'alpha',
            ERASE: 'erase'
        }
    },
    sound: {
        compressionType: {
            DEFAULT: 'Default',
            ADPCM: 'ADPCM',
            MP3: 'MP3',
            RAW: 'Raw',
            SPEECH: 'Speech'
        }
    },
    stroke: {
        capType: {
            NONE: 'none',
            ROUND: 'round',
            SQUARE: 'square'
        },
        joinType: {
            MITER: 'miter',
            ROUND: 'round',
            BEVEL: 'bevel'
        },
        scaleType: {
            NORMAL: 'normal',
            HORIZONTAL: 'horizontal',
            VERTICAL: 'vertical',
            NONE: 'none'
        },
        style: {
            NO_STROKE: 'noStroke',
            SOLID: 'solid',
            DASHED: 'dashed',
            DOTTED: 'dotted',
            RAGGED: 'ragged',
            STIPPLE: 'stipple',
            HATCHED: 'hatched'
        }
    },
    text: {
        textType: {
            STATIC: 'static',
            DYNAMIC: 'dynamic',
            INPUT: 'input'
        },
        lineType: {
            SINGLE_LINE: 'single line',
            MULTILINE: 'multiline',
            MULTILINE_NO_WRAP: 'multiline no wrap',
            PASSWORD: 'password'
        },
        alignment: {
            LEFT: 'left',
            CENTER: 'center',
            RIGHT: 'right',
            JUSTIFY: 'justify'
        }
    },
    transform: {
        align: {
            LEFT: 'left',
            RIGHT: 'right',
            TOP: 'top',
            BOTTOM: 'bottom',
            VERTICAL_CENTER: 'vertical center',
            HORIZONTAL_CENTER: 'horizontal center'
        },
        corner: {
            BOTTOM_LEFT: 'bottom left',
            BOTTOM_RIGHT: 'bottom right',
            TOP_RIGHT: 'top right',
            TOP_LEFT: 'top left',
            TOP_CENTER: 'top center',
            RIGHT_CENTER: 'right center',
            BOTTOM_CENTER: 'bottom center',
            LEFT_CENTER: 'left center'
        },
        distribute: {
            LEFT_EDGE: 'left edge',
            HORIZONTAL_CENTER: 'horizontal center',
            RIGHT_EDGE: 'right edge',
            TOP_EDGE: 'top edge',
            VERTICAL_CENTER: 'vertical center',
            BOTTOM_EDGE: 'bottom edge'
        }
    },
    video: {
        videoType: {
            EMBEDDED_VIDEO: 'embedded video',
            LINKED_VIDEO: 'linked video',
            VIDEO: 'video'
        }
    }
};

;// ./src/JSFLNumerics.ts
function getRate() {
    var doc = fl.getDocumentDOM();
    var frameRate = doc.frameRate;
    return frameRate;
}
var JSFLNumerics = {
    bitmap: {},
    element: {},
    filter: {
        blur: {
            MIN_BLUR: 0,
            MAX_BLUR: 255
        }
    },
    fill: {},
    frame: {
        frameRate: {
            FPS: getRate(),
            FPM: getRate() * 60,
            FPH: getRate() * 60 * 60,
            FPD: getRate() * 60 * 60 * 24,
            FPW: getRate() * 60 * 60 * 24 * 7,
            FPMonth: getRate() * 60 * 60 * 24 * 30,
            FPY: getRate() * 60 * 60 * 24 * 365
        },
        frameList: {
            FRAME_1: 1 - 1,
            FRAME_2: 2 - 1,
            FRAME_3: 3 - 1,
            FRAME_4: 4 - 1,
            FRAME_5: 5 - 1,
            FRAME_6: 6 - 1,
            FRAME_7: 7 - 1,
            FRAME_8: 8 - 1,
            FRAME_9: 9 - 1,
            FRAME_10: 10 - 1,
            FRAME_11: 11 - 1,
            FRAME_12: 12 - 1,
            FRAME_13: 13 - 1,
            FRAME_14: 14 - 1,
            FRAME_15: 15 - 1,
            FRAME_16: 16 - 1,
            FRAME_17: 17 - 1,
            FRAME_18: 18 - 1,
            FRAME_19: 19 - 1,
            FRAME_20: 20 - 1,
            FRAME_30: 30 - 1,
            FRAME_31: 31 - 1,
            FRAME_40: 40 - 1,
            FRAME_41: 40 - 1,
            FRAME_45: 45 - 1,
            FRAME_90: 90 - 1,
        }
    },
    instance: {},
    item: {},
    layer: {},
    parameter: {},
    symbol: {},
    sound: {
        channel: {
            MIN_CHANNEL: 0,
            MAX_CHANNEL: 32768
        },
        envelope: {
            ENVELOPE_PER_FRAME: 1472,
            MIN_ENVELOPE: 0,
            MAX_ENVELOPE: 1073741823
        }
    },
    stroke: {},
    text: {},
    transform: {},
    video: {}
};

;// ./src/index.ts




/******/ 	return __webpack_exports__;
/******/ })()
;
});