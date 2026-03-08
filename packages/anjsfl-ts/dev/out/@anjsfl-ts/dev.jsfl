(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("loglevel"), require("tslib"), require("fs"));
	else if(typeof define === 'function' && define.amd)
		define(["loglevel", "tslib", "fs"], factory);
	else if(typeof exports === 'object')
		exports["@anjsfl-ts/dev"] = factory(require("loglevel"), require("tslib"), require("fs"));
	else
		root["@anjsfl-ts/dev"] = factory(root["loglevel"], root["tslib"], root["fs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__360__, __WEBPACK_EXTERNAL_MODULE__652__, __WEBPACK_EXTERNAL_MODULE__947__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.isFlash = exports.isNode = exports.isWebWorker = exports.isBrowser = void 0;
    exports.isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document), exports.isWebWorker = !exports.isBrowser && typeof importScripts !== 'undefined', exports.isNode = !exports.isBrowser && !exports.isWebWorker && !!(typeof process !== 'undefined' && process.release && process.release.name === 'node'), exports.isFlash = !exports.isBrowser && !exports.isNode && !exports.isWebWorker && (typeof window !== "undefined" && typeof fl !== "undefined");
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(109)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, ENV_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    if (ENV_1.isNode && (void 0)) {
        var fs_1 = __webpack_require__(947);
        var extensions = [".xml", ".txt", ".svg", ".html", ".json5", ".md"];
        for (var _i = 0, extensions_1 = extensions; _i < extensions_1.length; _i++) {
            var ext = extensions_1[_i];
            (void 0)[ext] = function (module, filename) {
                var content = fs_1.readFileSync(filename, "utf8");
                module.exports = content;
            };
        }
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(360), __webpack_require__(109)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, log, ENV_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    log = tslib_1.__importStar(log);
    if (ENV_1.isNode) {
        log.setLevel(log.levels.TRACE);
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 360:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__360__;

/***/ }),

/***/ 652:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__652__;

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(109), __webpack_require__(216), __webpack_require__(164)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, ENV_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.isFlash = exports.isNode = void 0;
    Object.defineProperty(exports, "isNode", ({ enumerable: true, get: function () { return ENV_1.isNode; } }));
    Object.defineProperty(exports, "isFlash", ({ enumerable: true, get: function () { return ENV_1.isFlash; } }));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 947:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__947__;

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
/******/ 	var __webpack_exports__ = __webpack_require__(701);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});