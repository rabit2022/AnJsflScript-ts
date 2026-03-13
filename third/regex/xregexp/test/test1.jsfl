(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("xregexp"), require("tslib"));
	else if(typeof define === 'function' && define.amd)
		require(["xregexp", "tslib"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("xregexp"), require("tslib")) : factory(root["xregexp"], root["tslib"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE__237__, __WEBPACK_EXTERNAL_MODULE__652__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 237:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__237__;

/***/ }),

/***/ 652:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__652__;

/***/ }),

/***/ 817:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(237)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, xregexp_1) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    xregexp_1 = tslib_1.__importDefault(xregexp_1);
    // Using named capture and flag x for free-spacing and line comments
    var date = (0, xregexp_1.default)("(?<year>  [0-9]{4} ) -?  # year\n     (?<month> [0-9]{2} ) -?  # month\n     (?<day>   [0-9]{2} )     # day", "x");
    // XRegExp.exec provides named backreferences on the result's groups property
    var match = xregexp_1.default.exec("2021-02-22", date);
    var year = (_a = match === null || match === void 0 ? void 0 : match.groups) === null || _a === void 0 ? void 0 : _a.year; // -> '2021'
    console.log(year);
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
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(817);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});