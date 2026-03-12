(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("tslib"), require("lodash"), require("@anjsfl/sat"));
	else if(typeof define === 'function' && define.amd)
		define(["tslib", "lodash", "@anjsfl/sat"], factory);
	else if(typeof exports === 'object')
		exports["@anjsfl/checker"] = factory(require("tslib"), require("lodash"), require("@anjsfl/sat"));
	else
		root["@anjsfl/checker"] = factory(root["tslib"], root["lodash"], root["@anjsfl/sat"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__652__, __WEBPACK_EXTERNAL_MODULE__773__, __WEBPACK_EXTERNAL_MODULE__957__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(773), __webpack_require__(299)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, _, Shape_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.IsSymbolInstance = IsSymbolInstance;
    exports.IsBitmapInstance = IsBitmapInstance;
    exports.IsGraphicSymbol = IsGraphicSymbol;
    _ = tslib_1.__importStar(_);
    var SymbolTypeArr = ["movie clip", "graphic", "button"];
    function IsSymbolInstance(element) {
        var IsSymbolInstance = (element === null || element === void 0 ? void 0 : element.elementType) === "instance" &&
            (element === null || element === void 0 ? void 0 : element.instanceType) === "symbol" &&
            _.includes(SymbolTypeArr, element === null || element === void 0 ? void 0 : element.symbolType);
        return (!(0, Shape_1.IsGroup)(element) && IsSymbolInstance);
    }
    function IsBitmapInstance(element) {
        var InstanceIsBitmap = element.elementType === "instance" &&
            element.instanceType === "bitmap";
        return !(0, Shape_1.IsGroup)(element) && InstanceIsBitmap;
    }
    function IsGraphicSymbol(element) {
        var SymbolTypeIsGraphic = element.symbolType === "graphic";
        return IsSymbolInstance(element) && SymbolTypeIsGraphic;
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(790)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, FrameChecker) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Frame = void 0;
    FrameChecker = tslib_1.__importStar(FrameChecker);
    var Frame;
    (function (Frame) {
        Frame.IsFrameBlank = FrameChecker.IsFrameBlank;
        Frame.IsInvalidFrame = FrameChecker.IsInvalidFrame;
    })(Frame || (exports.Frame = Frame = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(9), __webpack_require__(299)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, SymbolCheck, ShapeChecker) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Element = void 0;
    SymbolCheck = tslib_1.__importStar(SymbolCheck);
    ShapeChecker = tslib_1.__importStar(ShapeChecker);
    var Element;
    (function (Element) {
        Element.IsBitmapInstance = SymbolCheck.IsBitmapInstance;
        Element.IsGraphicSymbol = SymbolCheck.IsGraphicSymbol;
        Element.IsSymbolInstance = SymbolCheck.IsSymbolInstance;
        Element.IsGroup = ShapeChecker.IsGroup;
        Element.IsShape = ShapeChecker.IsShape;
        Element.IsDrawingObject = ShapeChecker.IsDrawingObject;
        Element.IsOvalObject = ShapeChecker.IsOvalObject;
        Element.IsRectangleObject = ShapeChecker.IsRectangleObject;
    })(Element || (exports.Element = Element = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(566)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, SoundChecker) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Sound = void 0;
    SoundChecker = tslib_1.__importStar(SoundChecker);
    var Sound;
    (function (Sound) {
        Sound.hasSound = SoundChecker.hasSound;
    })(Sound || (exports.Sound = Sound = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.IsGroup = IsGroup;
    exports.IsShape = IsShape;
    exports.IsDrawingObject = IsDrawingObject;
    exports.IsOvalObject = IsOvalObject;
    exports.IsRectangleObject = IsRectangleObject;
    function IsGroup(element) {
        var _a;
        return (_a = element === null || element === void 0 ? void 0 : element.isGroup) !== null && _a !== void 0 ? _a : false;
    }
    function IsShape(element) {
        var isShape = element.elementType === "shape";
        return isShape;
    }
    function IsDrawingObject(element) {
        return (!IsGroup(element) &&
            element.elementType === "shapeObj" &&
            element.isDrawingObject);
    }
    function IsOvalObject(element) {
        return !IsGroup(element) && element.isOvalObject;
    }
    function IsRectangleObject(element) {
        return !IsGroup(element) && element.isRectangleObject;
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(844)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, Common) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Symbol = void 0;
    Common = tslib_1.__importStar(Common);
    var Symbol;
    (function (Symbol) {
        Symbol.IsSymbol = Common.IsSymbol;
        Symbol.IsBitmap = Common.IsBitmap;
        Symbol.IsGraphic = Common.IsGraphic;
    })(Symbol || (exports.Symbol = Symbol = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(668), __webpack_require__(911)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, KeyFrameChecker, KeyFrameQuery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.KeyFrame = void 0;
    KeyFrameChecker = tslib_1.__importStar(KeyFrameChecker);
    KeyFrameQuery = tslib_1.__importStar(KeyFrameQuery);
    var KeyFrame;
    (function (KeyFrame) {
        KeyFrame.IsKeyFrame = KeyFrameChecker.IsKeyFrame;
        KeyFrame.getSelectedFrameRanges = KeyFrameQuery.getSelectedFrameRanges;
        KeyFrame.getKeyFrames = KeyFrameQuery.getKeyFrames;
        KeyFrame.getKeyFrameRangesOfLayer = KeyFrameQuery.getKeyFrameRangesOfLayer;
        KeyFrame.findKeyFrameRangeBySelection = KeyFrameQuery.findKeyFrameRangeBySelection;
    })(KeyFrame || (exports.KeyFrame = KeyFrame = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(773)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.IsSymbolItem = IsSymbolItem;
    exports.IsBitmapItem = IsBitmapItem;
    exports.IsGraphicItem = IsGraphicItem;
    _ = tslib_1.__importStar(_);
    var SymbolTypeArr = ["movie clip", "graphic", "button"];
    function IsSymbolItem(element) {
        return (_.includes(SymbolTypeArr, element === null || element === void 0 ? void 0 : element.itemType) &&
            _.includes(SymbolTypeArr, element === null || element === void 0 ? void 0 : element.symbolType));
    }
    function IsBitmapItem(element) {
        var ItemIsBitmap = element.itemType === "bitmap";
        return ItemIsBitmap;
    }
    function IsGraphicItem(element) {
        var SymbolTypeIsGraphic = element.symbolType === "graphic";
        return IsSymbolItem(element) && SymbolTypeIsGraphic;
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(859)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, FilterChecker) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Filter = void 0;
    FilterChecker = tslib_1.__importStar(FilterChecker);
    var Filter;
    (function (Filter) {
        Filter.hasFilter = FilterChecker.hasFilter;
    })(Filter || (exports.Filter = Filter = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(911), __webpack_require__(957)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, KeyFrameQuery_1, sat_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.hasSound = hasSound;
    var FrameRange = sat_1.SAT.FrameRange;
    function hasSound(layers, layer) {
        var keyFrameRanges = (0, KeyFrameQuery_1.getKeyFrameRangesOfLayer)(layers, layer);
        for (var _i = 0, keyFrameRanges_1 = keyFrameRanges; _i < keyFrameRanges_1.length; _i++) {
            var kfr = keyFrameRanges_1[_i];
            var keyFrameIndex = kfr.startFrame;
            var keyFrame = layer.frames[keyFrameIndex];
            if (keyFrame === undefined)
                continue;
            if (keyFrame.soundName) {
                return true;
            }
        }
        return false;
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 652:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__652__;

/***/ }),

/***/ 668:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.IsKeyFrame = IsKeyFrame;
    function IsKeyFrame(layer, frameIndex) {
        var frame = layer.frames[frameIndex];
        return frame.startFrame === frameIndex;
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 736:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(426)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, ItemCheck) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Item = void 0;
    ItemCheck = tslib_1.__importStar(ItemCheck);
    var Item;
    (function (Item) {
        Item.IsBitmapItem = ItemCheck.IsBitmapItem;
        Item.IsGraphicItem = ItemCheck.IsGraphicItem;
        Item.IsSymbolItem = ItemCheck.IsSymbolItem;
    })(Item || (exports.Item = Item = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 773:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__773__;

/***/ }),

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.IsFrameBlank = IsFrameBlank;
    exports.IsInvalidFrame = IsInvalidFrame;
    function IsFrameBlank(frame) {
        return frame.isEmpty() && frame.actionScript !== "";
    }
    function IsInvalidFrame(layer, frameIndex) {
        var max_frames = layer.frames.length;
        return frameIndex >= max_frames;
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 844:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(426), __webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, ItemChecker_1, Instance_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.IsSymbol = IsSymbol;
    exports.IsBitmap = IsBitmap;
    exports.IsGraphic = IsGraphic;
    function IsSymbol(element) {
        return ((0, Instance_1.IsSymbolInstance)(element) || (0, ItemChecker_1.IsSymbolItem)(element));
    }
    function IsBitmap(element) {
        return ((0, Instance_1.IsBitmapInstance)(element) || (0, ItemChecker_1.IsBitmapItem)(element));
    }
    function IsGraphic(element) {
        return ((0, Instance_1.IsGraphicSymbol)(element) || (0, ItemChecker_1.IsGraphicItem)(element));
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 859:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.hasFilter = hasFilter;
    function hasFilter(element) {
        var filters = element.filters;
        return filters.length > 0;
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(24), __webpack_require__(911), __webpack_require__(566), __webpack_require__(957)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Frame_1, KeyFrameQuery_1, SoundChecker_1, sat_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.IsLayerBlank = IsLayerBlank;
    var IsFrameBlank = Frame_1.Frame.IsFrameBlank;
    var FrameRange = sat_1.SAT.FrameRange;
    function IsLayerBlank(layers, layer) {
        if ((0, SoundChecker_1.hasSound)(layers, layer)) {
            return false;
        }
        var keyFrameRanges = (0, KeyFrameQuery_1.getKeyFrameRangesOfLayer)(layers, layer);
        for (var _i = 0, keyFrameRanges_1 = keyFrameRanges; _i < keyFrameRanges_1.length; _i++) {
            var kfr = keyFrameRanges_1[_i];
            var keyFrameIndex = kfr.startFrame;
            var keyFrame = layer.frames[keyFrameIndex];
            if (keyFrame === undefined)
                continue;
            if (!IsFrameBlank(keyFrame)) {
                return false;
            }
        }
        return true;
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(870)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, BlankLayerChecker) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Layer = void 0;
    BlankLayerChecker = tslib_1.__importStar(BlankLayerChecker);
    var Layer;
    (function (Layer) {
        Layer.IsLayerBlank = BlankLayerChecker.IsLayerBlank;
    })(Layer || (exports.Layer = Layer = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(957)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, sat_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.getSelectedFrameRanges = getSelectedFrameRanges;
    exports.getKeyFrames = getKeyFrames;
    exports.getKeyFrameRangesOfLayer = getKeyFrameRangesOfLayer;
    exports.findKeyFrameRangeBySelection = findKeyFrameRangeBySelection;
    var FrameRange = sat_1.SAT.FrameRange;
    function getSelectedFrameRanges(timeline) {
        var selectedFrames = timeline.getSelectedFrames();
        var ranges = [];
        for (var i = 0; i < selectedFrames.length; i += 3) {
            ranges.push(new FrameRange(selectedFrames[i], selectedFrames[i + 1], selectedFrames[i + 2]));
        }
        return ranges;
    }
    function getKeyFrames(layer) {
        var frames = layer.frames;
        var keyFrameIndexes = [];
        for (var i = frames.length - 1; i >= 0; i--) {
            var startFrame = frames[i].startFrame;
            i = startFrame;
            keyFrameIndexes.push(startFrame);
        }
        return keyFrameIndexes.sort(function (a, b) { return a - b; });
    }
    function getKeyFrameRangesOfLayer(layers, currentLayer) {
        var layerIndex = typeof currentLayer === "number" ? currentLayer : layers.indexOf(currentLayer);
        var layer = typeof currentLayer === "number" ? layers[currentLayer] : currentLayer;
        var keyFrameIndexes = getKeyFrames(layer);
        keyFrameIndexes.push(layer.frameCount);
        var ranges = [];
        for (var i = 0; i < keyFrameIndexes.length - 1; i++) {
            ranges.push(new FrameRange(layerIndex, keyFrameIndexes[i], keyFrameIndexes[i + 1]));
        }
        return ranges.length ? ranges : [];
    }
    function findKeyFrameRangeBySelection(selectedRange, keyFrameRanges) {
        for (var _i = 0, keyFrameRanges_1 = keyFrameRanges; _i < keyFrameRanges_1.length; _i++) {
            var range = keyFrameRanges_1[_i];
            if (range.contain(selectedRange)) {
                return range;
            }
        }
        return null;
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(117), __webpack_require__(498), __webpack_require__(24), __webpack_require__(736), __webpack_require__(367), __webpack_require__(896), __webpack_require__(174), __webpack_require__(311)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, Element_1, Filter_1, Frame_1, Item_1, KeyFrame_1, Layer_1, sound_1, Symbol_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    tslib_1.__exportStar(Element_1, exports);
    tslib_1.__exportStar(Filter_1, exports);
    tslib_1.__exportStar(Frame_1, exports);
    tslib_1.__exportStar(Item_1, exports);
    tslib_1.__exportStar(KeyFrame_1, exports);
    tslib_1.__exportStar(Layer_1, exports);
    tslib_1.__exportStar(sound_1, exports);
    tslib_1.__exportStar(Symbol_1, exports);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 957:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__957__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(946);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});