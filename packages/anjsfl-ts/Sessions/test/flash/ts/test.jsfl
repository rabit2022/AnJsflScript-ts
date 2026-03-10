require(["tslib","@xjsfl/UI","@anjsfl-ts/EditSession"], function(__WEBPACK_EXTERNAL_MODULE__280__, __WEBPACK_EXTERNAL_MODULE__628__, __WEBPACK_EXTERNAL_MODULE__775__) { return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 280:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__280__;

/***/ }),

/***/ 628:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__628__;

/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(280), __webpack_require__(775), __webpack_require__(628)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, EditSession_1, UI_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    function testEdit() {
        var env_1 = { stack: [], error: void 0, hasError: false };
        try {
            var edit = tslib_1.__addDisposableResource(env_1, new EditSession_1.EditSession(UI_1.UI.dom), false);
            console.log("Test edit mode");
        }
        catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
        }
        finally {
            tslib_1.__disposeResources(env_1);
        }
    }
    testEdit();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 775:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__775__;

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
/******/ 	var __webpack_exports__ = __webpack_require__(671);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;