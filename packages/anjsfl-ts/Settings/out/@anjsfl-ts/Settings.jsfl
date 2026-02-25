(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("tslib"));
	else if(typeof define === 'function' && define.amd)
		define(["tslib"], factory);
	else if(typeof exports === 'object')
		exports["@anjsfl-ts/Settings"] = factory(require("tslib"));
	else
		root["@anjsfl-ts/Settings"] = factory(root["tslib"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__652__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 652:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__652__;

/***/ }),

/***/ 701:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(836)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, settings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    tslib_1.__exportStar(settings_1, exports);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    var VERSION_MAP = {
        "9": "CS3",
        "10": "CS4",
        "11": "CS5",
        "12": "CS6",
        "13": "CC",
        "14": "CC 2014",
        "15": "CC 2015",
        "16": "Animate CC",
        "17": "Animate CC 2017",
        "18": "Animate CC 2018",
        "19": "Animate CC 2019",
        "20": "Animate 2020",
        "21": "Animate 2021",
        "22": "Animate 2022",
        "23": "Animate 2023",
        "24": "Animate 2024"
    };
    if (typeof fl === 'undefined') {
        throw new Error("JSFL Error: 'fl' object is not defined. This script must run inside Adobe Animate/Flash.");
    }
    var APP_VERSION_STRING = fl.version;
    var PLATFORM_CODE = APP_VERSION_STRING.length >= 3
        ? APP_VERSION_STRING.substr(0, 3).toLowerCase()
        : "unknown";
    var VERSION_NUMBER = 0;
    var VERSION_NAME = "Unknown";
    var versionMatch = APP_VERSION_STRING.match(/\w+\s+(\d+)/);
    if (versionMatch && versionMatch[1]) {
        VERSION_NUMBER = parseInt(versionMatch[1], 10);
        VERSION_NAME = (_a = VERSION_MAP[String(VERSION_NUMBER)]) !== null && _a !== void 0 ? _a : "Unknown";
    }
    if (!window.AnJsflScript) {
        window.AnJsflScript = {};
    }
    window.AnJsflScript.app = {
        platform: PLATFORM_CODE,
        version: VERSION_NUMBER,
        name: VERSION_NAME,
        os: {
            mac: PLATFORM_CODE === "mac",
            win: PLATFORM_CODE === "win",
        },
    };
    var projectDir = window.AnJsflScript.$ProjectFileDir$;
    var cwd = projectDir || "";
    window.AnJsflScript.folders = {
        AnJsflScript: cwd,
        Log: cwd ? "".concat(cwd, "/config/Log") : "",
        flash: fl.configURI,
        swf: "".concat(fl.configURI, "WindowSWF/"),
        "@xjsfl/XUL": cwd ? "".concat(cwd, "/packages/xjsfl/XUL/") : "",
    };
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