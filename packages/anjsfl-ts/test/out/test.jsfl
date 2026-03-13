(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("_exports"), require("tslib"));
	else if(typeof define === 'function' && define.amd)
		define(["_exports", "tslib"], factory);
	else if(typeof exports === 'object')
		exports["test"] = factory(require("_exports"), require("tslib"));
	else
		root["test"] = factory(root["_exports"], root["tslib"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__388__, __WEBPACK_EXTERNAL_MODULE__652__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(388)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1) {
    "use strict";
    var e_1, _a;
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    var MyUtils = (function () {
        function MyUtils() {
        }
        MyUtils.numbers = function (list) {
            var nums, nums_1, nums_1_1, n, e_2_1;
            var e_2, _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        nums = list !== null && list !== void 0 ? list : [1, 2, 3];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, 7, 8]);
                        nums_1 = tslib_1.__values(nums), nums_1_1 = nums_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!nums_1_1.done) return [3, 5];
                        n = nums_1_1.value;
                        return [4, n * 2];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        nums_1_1 = nums_1.next();
                        return [3, 2];
                    case 5: return [3, 8];
                    case 6:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3, 8];
                    case 7:
                        try {
                            if (nums_1_1 && !nums_1_1.done && (_a = nums_1.return)) _a.call(nums_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7];
                    case 8: return [2];
                }
            });
        };
        return MyUtils;
    }());
    var gen = MyUtils.numbers([10, 20]);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    try {
        for (var _b = tslib_1.__values(MyUtils.numbers()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var val = _c.value;
            console.log(val);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 388:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__388__;

/***/ }),

/***/ 652:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__652__;

/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(142)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
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
/******/ 	var __webpack_exports__ = __webpack_require__(946);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});