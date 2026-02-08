(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("chroma-js"), require("oxide.ts"));
	else if(typeof define === 'function' && define.amd)
		define(["chroma-js", "oxide.ts"], factory);
	else if(typeof exports === 'object')
		exports["parser"] = factory(require("chroma-js"), require("oxide.ts"));
	else
		root["parser"] = factory(root["chroma-js"], root["oxide.ts"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__534__, __WEBPACK_EXTERNAL_MODULE__508__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 508:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__508__;

/***/ }),

/***/ 534:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__534__;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
  parseColor: function() { return /* reexport */ parseColor; },
  parseDirection: function() { return /* reexport */ parseDirection; },
  parseNumber: function() { return /* reexport */ parseNumber; },
  parseNumberWithSignCore: function() { return /* reexport */ parseNumberWithSignCore; },
  parseString: function() { return /* reexport */ parseString; }
});

// EXTERNAL MODULE: external "chroma-js"
var external_chroma_js_ = __webpack_require__(534);
var external_chroma_js_default = /*#__PURE__*/__webpack_require__.n(external_chroma_js_);
;// ./src/utils.ts
function generateRange(startOrStop, stop, step) {
    if (step === void 0) { step = 1; }
    var start;
    var end;
    if (stop === undefined) {
        start = 0;
        end = startOrStop;
    }
    else {
        start = startOrStop;
        end = stop;
    }
    if (step === 0) {
        throw new Error("Step argument must not be zero.");
    }
    var range = [];
    if (step > 0) {
        for (var i = start; i < end; i += step) {
            range.push(i);
        }
    }
    else {
        for (var i = start; i > end; i += step) {
            range.push(i);
        }
    }
    return range;
}

// EXTERNAL MODULE: external "oxide.ts"
var external_oxide_ts_ = __webpack_require__(508);
;// ./src/BasePaser.ts



function parseColor(inputColor, alertMsg) {
    if (!inputColor) {
        return (0,external_oxide_ts_.Err)(alertMsg || "颜色输入无效");
    }
    try {
        var color = external_chroma_js_default()(inputColor);
        if (!external_chroma_js_default().valid(color)) {
            return (0,external_oxide_ts_.Err)(alertMsg || "颜色格式不正确");
        }
        return (0,external_oxide_ts_.Ok)(color.hex());
    }
    catch (error) {
        return (0,external_oxide_ts_.Err)(alertMsg || "颜色解析异常");
    }
}
function parseString(inputStr, alertMsg) {
    if (inputStr === null || inputStr.trim() === "") {
        return (0,external_oxide_ts_.Err)(alertMsg || "字符串不能为空");
    }
    return (0,external_oxide_ts_.Ok)(inputStr.trim());
}
function parseNumber(input, errorMessage, rangeConfig) {
    if (errorMessage === void 0) { errorMessage = "请输入合法的数字。"; }
    if (!input || input.trim() === "") {
        return (0,external_oxide_ts_.Err)(errorMessage || "输入不能为空");
    }
    var numericValue = Number(input);
    if (isNaN(numericValue)) {
        return (0,external_oxide_ts_.Err)(errorMessage || "无法解析为有效数字");
    }
    if (rangeConfig) {
        var min = rangeConfig.start, max = rangeConfig.end, step = rangeConfig.step;
        if ((min !== undefined && numericValue < min) ||
            (max !== undefined && numericValue > max)) {
            var rangeDesc = [min !== undefined ? "\u6700\u5C0F\u503C ".concat(min) : "", max !== undefined ? "\u6700\u5927\u503C ".concat(max) : ""]
                .filter(Boolean).join("，");
            return (0,external_oxide_ts_.Err)("\u6570\u503C\u8D85\u51FA\u8303\u56F4 [".concat(rangeDesc, "]"));
        }
        if (step !== undefined) {
            var rangeStart = min !== undefined ? min : Math.min(numericValue, max);
            var rangeEnd = max !== undefined ? max : Math.max(numericValue, min);
            var validNumbers = generateRange(rangeStart, rangeEnd, step);
            var valueStr_1 = numericValue.toFixed(10);
            var isValidStep = validNumbers.some(function (num) { return num.toFixed(10) === valueStr_1; });
            if (!isValidStep) {
                var sampleValues = validNumbers.slice(0, 3).join(", ");
                return (0,external_oxide_ts_.Err)("\u6570\u503C\u4E0D\u7B26\u5408\u6B65\u8FDB\u89C4\u5219\u3002\u5408\u6CD5\u793A\u4F8B: ".concat(sampleValues, "..."));
            }
        }
    }
    return (0,external_oxide_ts_.Ok)(numericValue);
}
function parseDirection(input, customDict) {
    var defaultDict = { 右: 1, 左: -1, " ": -1 };
    var dict = customDict || defaultDict;
    var trimmedInput = input.trim();
    if (!trimmedInput) {
        return (0,external_oxide_ts_.Err)("方向输入不能为空");
    }
    if (!(trimmedInput in dict)) {
        var validKeys = Object.keys(dict).join("/");
        return (0,external_oxide_ts_.Err)("\u65E0\u6548\u7684\u65B9\u5411\u3002\u5141\u8BB8\u7684\u503C: ".concat(validKeys));
    }
    return (0,external_oxide_ts_.Ok)(dict[trimmedInput]);
}
function parseNumberWithSignCore(input) {
    if (!input.trim()) {
        return (0,external_oxide_ts_.Err)("输入不能为空");
    }
    var num = Number(input);
    if (!isNaN(num)) {
        var intNum = parseInt(input, 10);
        var hasSign = num !== 0 ? Math.sign(num) !== 1 : input.trim().startsWith("+");
        return (0,external_oxide_ts_.Ok)({ num: intNum, hasSign: hasSign });
    }
    var trimmed = input.trim();
    if (trimmed.startsWith("+")) {
        var value = parseInt(trimmed.slice(1), 10);
        if (isNaN(value))
            return (0,external_oxide_ts_.Err)("无效的数字");
        return (0,external_oxide_ts_.Ok)({ num: value, hasSign: true });
    }
    else if (trimmed.startsWith("-")) {
        var value = parseInt(trimmed.slice(1), 10);
        if (isNaN(value))
            return (0,external_oxide_ts_.Err)("无效的数字");
        return (0,external_oxide_ts_.Ok)({ num: -value, hasSign: true });
    }
    return (0,external_oxide_ts_.Err)("无法解析为有效数字");
}

;// ./src/index.ts


/******/ 	return __webpack_exports__;
/******/ })()
;
});