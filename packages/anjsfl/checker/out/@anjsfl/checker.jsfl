(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("tslib"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["tslib", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["@anjsfl/checker"] = factory(require("tslib"), require("lodash"));
	else
		root["@anjsfl/checker"] = factory(root["tslib"], root["lodash"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__652__, __WEBPACK_EXTERNAL_MODULE__773__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(843)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, ItemCheck) {
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

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(773), __webpack_require__(856)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, _, Shape_1) {
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
        return !(0, Shape_1.IsGroup)(element) && (InstanceIsBitmap);
    }
    function IsGraphicSymbol(element) {
        var SymbolTypeIsGraphic = element.symbolType === "graphic";
        return IsSymbolInstance(element) && SymbolTypeIsGraphic;
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(843), __webpack_require__(244)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, ItemChecker_1, Instance_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.IsSymbol = IsSymbol;
    exports.IsBitmap = IsBitmap;
    exports.IsGraphic = IsGraphic;
    function IsSymbol(element) {
        return (0, Instance_1.IsSymbolInstance)(element) || (0, ItemChecker_1.IsSymbolItem)(element);
    }
    function IsBitmap(element) {
        return (0, Instance_1.IsBitmapInstance)(element) || (0, ItemChecker_1.IsBitmapItem)(element);
    }
    function IsGraphic(element) {
        return (0, Instance_1.IsGraphicSymbol)(element) || (0, ItemChecker_1.IsGraphicItem)(element);
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 652:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__652__;

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(762), __webpack_require__(221), __webpack_require__(702)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, Element_1, Item_1, Symbol_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    tslib_1.__exportStar(Element_1, exports);
    tslib_1.__exportStar(Item_1, exports);
    tslib_1.__exportStar(Symbol_1, exports);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(405)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, Common) {
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

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(244), __webpack_require__(856)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, SymbolCheck, ShapeChecker) {
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

/***/ 773:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__773__;

/***/ }),

/***/ 843:
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

/***/ 856:
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
            (element.elementType === "shapeObj" && element.isDrawingObject));
    }
    function IsOvalObject(element) {
        return !IsGroup(element) && element.isOvalObject;
    }
    function IsRectangleObject(element) {
        return !IsGroup(element) && element.isRectangleObject;
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


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
/******/ 	var __webpack_exports__ = __webpack_require__(701);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});