(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("table"));
	else if(typeof define === 'function' && define.amd) {
        console.log("amd ");
        require(["table"], factory);
    }
	else if(typeof exports === 'object')
		exports["console-table"] = factory(require("table"));
	else
		root["console-table"] = factory(root["table"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__552__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 552:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__552__;

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
var __webpack_exports__ = {};

// EXTERNAL MODULE: external "table"
var external_table_ = __webpack_require__(552);
console.log(external_table_)
;// ./src/tablePrinter.ts
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

function ensureRows(data, columns) {
    if (data == null)
        return [['null']];
    var items = Array.isArray(data) ? data : [data];
    if (items.length === 0)
        return [['(empty)']];
    var cols = columns || (typeof items[0] === 'object' && items[0] !== null
        ? Object.keys(items[0])
        : ['value']);
    var head = cols;
    var body = items.map(function (item) {
        return cols.map(function (col) {
            return String(typeof item === 'object' && item !== null
                ? item[col]
                : item);
        });
    });
    return __spreadArray([head], body, true);
}
var ConsoleTablePrinter = (function () {
    function ConsoleTablePrinter(indentLevel, indentChar) {
        if (indentLevel === void 0) { indentLevel = 0; }
        if (indentChar === void 0) { indentChar = ' '; }
        this.indent = indentChar.repeat(indentLevel);
    }
    ConsoleTablePrinter.prototype.table = function (data, columns) {
        var _this = this;
        var rows = ensureRows(data, columns);
        var output = (0,external_table_.table)(rows);
        var indented = output
            .split('\n')
            .map(function (line) { return line ? _this.indent + line : ''; })
            .join('\n');
        console.log(indented);
    };
    return ConsoleTablePrinter;
}());


;// ./src/index.ts

    console.log("Hello")
var c = new ConsoleTablePrinter(2);
c.table([{ name: 'Alice', age: 30 }], ['name', 'age']);

/******/ 	return __webpack_exports__;
/******/ })()
;
});