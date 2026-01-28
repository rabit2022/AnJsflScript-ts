(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("cli-table3"));
	else if(typeof define === 'function' && define.amd)
		define(["cli-table3"], factory);
	else if(typeof exports === 'object')
		exports["console-table"] = factory(require("cli-table3"));
	else
		root["console-table"] = factory(root["cli-table3"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__420__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 420:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__420__;

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
  tableToString: function() { return /* reexport */ tableToString; }
});

// EXTERNAL MODULE: external "cli-table3"
var external_cli_table3_ = __webpack_require__(420);
var external_cli_table3_default = /*#__PURE__*/__webpack_require__.n(external_cli_table3_);
;// ./src/table.ts
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

function formatValue(value) {
    if (value === null)
        return 'null';
    if (value === undefined)
        return 'undefined';
    if (typeof value === 'string')
        return value;
    if (typeof value === 'number' || typeof value === 'boolean')
        return String(value);
    if (Array.isArray(value))
        return "[ $ {value.length} items]";
    if (typeof value === 'object')
        return '{...}';
    return String(value);
}
function printArrayTable(array, columns) {
    if (array.length === 0)
        return '[]';
    var firstItem = array[0];
    if (firstItem !== null && typeof firstItem === 'object' && !Array.isArray(firstItem)) {
        var allKeys_1 = new Set();
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var item = array_1[_i];
            if (item && typeof item === 'object' && !Array.isArray(item)) {
                Object.keys(item).forEach(function (key) { return allKeys_1.add(key); });
            }
        }
        var columnList_1 = columns
            ? columns.filter(function (col) { return allKeys_1.has(col); })
            : Array.from(allKeys_1);
        var table_1 = new (external_cli_table3_default())({
            head: __spreadArray(['(index)'], columnList_1, true),
            chars: {
                top: '─', 'top-mid': '┬', 'top-left': '┌', 'top-right': '┐',
                bottom: '─', 'bottom-mid': '┴', 'bottom-left': '└', 'bottom-right': '┘',
                left: '│', 'left-mid': '├', 'mid': '─', 'mid-mid': '┼',
                right: '│', 'right-mid': '┤', middle: '│'
            },
            style: { head: [], border: [] }
        });
        array.forEach(function (item, index) {
            var row = [index];
            for (var _i = 0, columnList_2 = columnList_1; _i < columnList_2.length; _i++) {
                var col = columnList_2[_i];
                var val = item === null || item === void 0 ? void 0 : item[col];
                row.push(formatValue(val));
            }
            table_1.push(row);
        });
        return table_1.toString();
    }
    var table = new (external_cli_table3_default())({
        head: ['(index)', 'Value'],
        chars: {
            top: '─', 'top-mid': '┬', 'top-left': '┌', 'top-right': '┐',
            bottom: '─', 'bottom-mid': '┴', 'bottom-left': '└', 'bottom-right': '┘',
            left: '│', 'left-mid': '├', 'mid': '─', 'mid-mid': '┼',
            right: '│', 'right-mid': '┤', middle: '│'
        }
    });
    array.forEach(function (item, index) {
        table.push([index, formatValue(item)]);
    });
    return table.toString();
}
function printObjectTable(obj, columns) {
    var keys = columns !== null && columns !== void 0 ? columns : Object.keys(obj);
    var table = new (external_cli_table3_default())({
        head: ['Key', 'Value'],
        chars: {
            top: '─', 'top-mid': '┬', 'top-left': '┌', 'top-right': '┐',
            bottom: '─', 'bottom-mid': '┴', 'bottom-left': '└', 'bottom-right': '┘',
            left: '│', 'left-mid': '├', 'mid': '─', 'mid-mid': '┼',
            right: '│', 'right-mid': '┤', middle: '│'
        }
    });
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (obj.hasOwnProperty(key)) {
            table.push([key, formatValue(obj[key])]);
        }
    }
    return table.toString();
}
function tableToString(data, columns) {
    if (data == null) {
        return 'undefined';
    }
    if (Array.isArray(data)) {
        if (data.length === 0) {
            return '[]';
        }
        return printArrayTable(data, columns);
    }
    if (typeof data === 'object') {
        return printObjectTable(data, columns);
    }
    return String(data);
}
var CustomConsole = (function () {
    function CustomConsole(indentLevel, indentStr) {
        if (indentLevel === void 0) { indentLevel = 0; }
        if (indentStr === void 0) { indentStr = ' '; }
        this._indentLevel = indentLevel;
        this._indentStr = indentStr;
    }
    CustomConsole.prototype.table = function (data, columns) {
        var output = tableToString(data, columns);
        var indent = this._indentStr.repeat(this._indentLevel);
        var indented = output
            .split('\n')
            .map(function (line) { return line ? indent + line : ''; })
            .join('\n');
        console.log("\n".concat(indented));
    };
    return CustomConsole;
}());


;// ./src/index.ts

var customConsole = new CustomConsole(1);
if (typeof window !== 'undefined' && window.console) {
    window.console.table = customConsole.table.bind(customConsole);
}


/******/ 	return __webpack_exports__;
/******/ })()
;
});