require(["tslib","@dom/setTimeout","es6-promise"], function(__WEBPACK_EXTERNAL_MODULE__280__, __WEBPACK_EXTERNAL_MODULE__394__, __WEBPACK_EXTERNAL_MODULE__786__) { return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(280), __webpack_require__(394), __webpack_require__(786)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, setTimeout_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    console.log('\n🧪 6. Async/Await');
    function testAsync() {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var val, delayed, err_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, Promise.resolve('async value')];
                    case 1:
                        val = _a.sent();
                        console.log(val, 'await 获取 resolve 值');
                        return [4, new Promise(function (resolve) {
                                return (0, setTimeout_1.setTimeout)(function () { return resolve('delayed'); }, 10);
                            })];
                    case 2:
                        delayed = _a.sent();
                        console.log(delayed, 'await 等待异步操作');
                        console.log('✅ Async/Await 正常工作');
                        return [3, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.error('Async 错误:', err_1);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    }
    // function main() {
    //     return tslib_1.__awaiter(this, void 0, void 0, function () {
    //         return tslib_1.__generator(this, function (_a) {
    //             switch (_a.label) {
    //                 case 0: return [4, testAsync()];
    //                 case 1:
    //                     _a.sent();
    //                     return [2];
    //             }
    //         });
    //     });
    // }


                testAsync().catch(function (err) {
        console.stack('Async error:'+err);
    });
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 280:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__280__;

/***/ }),

/***/ 394:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__394__;

/***/ }),

/***/ 786:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__786__;

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
/******/ 	var __webpack_exports__ = __webpack_require__(187);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;