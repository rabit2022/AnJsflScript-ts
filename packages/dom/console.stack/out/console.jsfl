(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("tslib"), require("url"), require("path-browserify"), require("fs"), require("lodash"), require("cli-table3"), require("error-stack-parser"));
	else if(typeof define === 'function' && define.amd)
		define(["tslib", "url", "path-browserify", "fs", "lodash", "cli-table3", "error-stack-parser"], factory);
	else if(typeof exports === 'object')
		exports["console"] = factory(require("tslib"), require("url"), require("path-browserify"), require("fs"), require("lodash"), require("cli-table3"), require("error-stack-parser"));
	else
		root["console"] = factory(root["tslib"], root["url"], root["path-browserify"], root["fs"], root["lodash"], root["cli-table3"], root["error-stack-parser"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__652__, __WEBPACK_EXTERNAL_MODULE__917__, __WEBPACK_EXTERNAL_MODULE__248__, __WEBPACK_EXTERNAL_MODULE__947__, __WEBPACK_EXTERNAL_MODULE__773__, __WEBPACK_EXTERNAL_MODULE__420__, __WEBPACK_EXTERNAL_MODULE__417__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 248:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__248__;

/***/ }),

/***/ 417:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__417__;

/***/ }),

/***/ 420:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__420__;

/***/ }),

/***/ 652:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__652__;

/***/ }),

/***/ 773:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__773__;

/***/ }),

/***/ 917:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__917__;

/***/ }),

/***/ 947:
/***/ (function(module) {

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
  assert: function() { return /* reexport */ assert; },
  clear: function() { return /* reexport */ clear; },
  count: function() { return /* reexport */ count; },
  countReset: function() { return /* reexport */ countReset; },
  debug: function() { return /* reexport */ debug; },
  error: function() { return /* reexport */ error; },
  file: function() { return /* reexport */ file; },
  group: function() { return /* reexport */ group; },
  groupEnd: function() { return /* reexport */ groupEnd; },
  info: function() { return /* reexport */ info; },
  log: function() { return /* reexport */ log; },
  resetAll: function() { return /* reexport */ resetAll; },
  stack: function() { return /* reexport */ stack; },
  table: function() { return /* reexport */ table; },
  time: function() { return /* reexport */ time; },
  timeEnd: function() { return /* reexport */ timeEnd; },
  warn: function() { return /* reexport */ warn; }
});

;// ./src/console/core/assert.ts
function assert(expression, message) {
    if (!expression) {
        throw new Error(message || "Assertion failed");
    }
}

// EXTERNAL MODULE: external "tslib"
var external_tslib_ = __webpack_require__(652);
// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(917);
// EXTERNAL MODULE: external "path-browserify"
var external_path_browserify_ = __webpack_require__(248);
;// ./src/console/constant/index.ts
var LogLevel;
(function (LogLevel) {
    LogLevel["TRACE"] = "TRACE";
    LogLevel["DEBUG"] = "DEBUG";
    LogLevel["LOG"] = "LOG";
    LogLevel["INFO"] = "INFO";
    LogLevel["WARN"] = "WARN";
    LogLevel["ERROR"] = "ERROR";
    LogLevel["FILE"] = "FILE";
})(LogLevel || (LogLevel = {}));

;// ./src/ENV/index.ts
var isBrowser = !!(typeof window !== "undefined" &&
    typeof navigator !== "undefined" &&
    window.document), isWebWorker = !isBrowser && typeof importScripts !== "undefined", isNode = !isBrowser &&
    !isWebWorker &&
    !!(typeof process !== "undefined" &&
        process.release &&
        process.release.name === "node"), isFlash = !isBrowser &&
    !isNode &&
    !isWebWorker &&
    typeof window !== "undefined" &&
    typeof fl !== "undefined";

;// ./src/console/config/paths.ts

var Paths;
if (isFlash) {
    var Root = AnJsflScript.folders.Log;
    Paths = {
        LOG_FOLDER: Root,
        MAIN_LOG: "".concat(Root, "main.log"),
        FILE_LOG: "".concat(Root, "file.log")
    };
}
else if (isNode) {
    var Root = "./logs/";
    Paths = {
        LOG_FOLDER: Root,
        MAIN_LOG: "".concat(Root, "main.log"),
        FILE_LOG: "".concat(Root, "file.log")
    };
}
else {
    var Root = "./logs/";
    Paths = {
        LOG_FOLDER: Root,
        MAIN_LOG: "".concat(Root, "main.log"),
        FILE_LOG: "".concat(Root, "file.log")
    };
}


// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(947);
;// ./src/console/utils/ensureDir.ts


function ensureDir(file) {
    var dir = external_path_browserify_.dirname(file);
    if (!external_fs_.existsSync(dir)) {
        external_fs_.mkdirSync(dir, { recursive: true });
    }
}

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(773);
;// ./src/console/utils/string.ts

function center(str, totalLength, padChar) {
    if (padChar === void 0) { padChar = " "; }
    var length = str.length;
    if (length >= totalLength)
        return str;
    var totalPadding = totalLength - length;
    var leftPadding = Math.floor(totalPadding / 2);
    var rightPadding = Math.ceil(totalPadding / 2);
    return external_lodash_.padEnd(external_lodash_.padStart(str, length + leftPadding, padChar), totalLength, padChar);
}

;// ./src/console/utils/writeToLog.ts







var pad = function (num, length) { return external_lodash_.padStart(String(num), length, '0'); };
function writeToLog(message, type, level) {
    if (type === void 0) { type = LogLevel.INFO; }
    if (level === void 0) { level = 0; }
    var logType = typeof type === "string" ? type : LogLevel.INFO;
    var logLevel = typeof level === "number" ? level : level ? 1 : 0;
    var now = new Date();
    var asctime = "".concat(now.getFullYear(), "-").concat(pad(now.getMonth() + 1, 2), "-").concat(pad(now.getDate(), 2), " ") +
        "".concat(pad(now.getHours(), 2), ":").concat(pad(now.getMinutes(), 2), ":").concat(pad(now.getSeconds(), 2), ".") +
        "".concat(pad(now.getMilliseconds(), 3));
    var levelname = center(logType.toUpperCase(), 8);
    var scriptURI = fl.scriptURI;
    var baseDir = AnJsflScript.folders.AnJsflScript;
    var p1 = (0,external_url_.fileURLToPath)(scriptURI), p2 = (0,external_url_.fileURLToPath)(baseDir);
    var short_path = external_path_browserify_.relative(p2, p1);
    var logLine = "".concat(asctime, " | ").concat(levelname, " | ").concat(short_path, " | ").concat(message);
    ensureDir(Paths.MAIN_LOG);
    FLfile.write(Paths.MAIN_LOG, logLine + "\n", "append");
    if (logType === LogLevel.FILE) {
        ensureDir(Paths.FILE_LOG);
        FLfile.write(Paths.FILE_LOG, logLine + "\n", "append");
    }
}

;// ./src/console/core/log.ts



var trace = fl.trace;
function formatMessage(args) {
    return Array.prototype.slice.call(args).join(" ");
}
function debug() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var msg = formatMessage(arguments);
    trace("\n⚡admin DEBUG ❯❯ " + msg + "\n");
    writeToLog(msg, LogLevel.DEBUG, 3);
}
function log() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var msg = formatMessage(arguments);
    trace("\n⚡admin LOG ❯❯ " + msg + "\n");
    writeToLog(msg, LogLevel.LOG, 3);
}
function info() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var msg = formatMessage(arguments);
    trace("\n⚡admin INFO ❯❯ " + msg + "\n");
    writeToLog(msg, LogLevel.INFO, 3);
}
function warn() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var msg = formatMessage(arguments);
    trace("\n⚡admin WARNING ❯❯ " + msg + "\n");
    writeToLog(msg, LogLevel.WARN, 3);
}
function error() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var msg = formatMessage(arguments);
    trace("\n⚡admin ERROR ❯❯ " + msg + "\n");
    writeToLog(msg, LogLevel.ERROR, 3);
}
function file() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var msg = formatMessage(arguments);
    writeToLog(msg, LogLevel.FILE);
}
function clear(type) {
    fl.outputPanel.clear();
    var name = type === LogLevel.FILE ? "file" : "main";
    FLfile.remove("".concat(Paths.LOG_FOLDER, "/").concat(name, ".log"));
    trace(name + ".log reset");
}

;// ./src/console/core/counter.ts


var counters = {};
function count(label) {
    if (label === void 0) { label = "default"; }
    counters[label] = (counters[label] || 0) + 1;
    info('"' + label + '" was called ' + counters[label] + " times.");
}
function countReset(label) {
    if (label === void 0) { label = "default"; }
    if (counters[label] === undefined) {
        warn('Counter "' + label + '" does not exist.');
        return;
    }
    delete counters[label];
    info('Counter "' + label + '" has been reset.');
}
function getCounters() {
    return __assign({}, counters);
}
function resetCounters() {
    counters = {};
    info("All timers and counters have been reset.");
}

;// ./src/console/core/group.ts
var groupStack = [];
var group_trace = fl.trace;
function group(label) {
    if (label === void 0) { label = "default"; }
    var indent = "  ".repeat(groupStack.length);
    var lineLength = Math.max(30 - label.length - groupStack.length * 2, 10);
    group_trace("".concat(indent, "\u250C\u2500 ").concat(label, " ").concat("─".repeat(lineLength), "\u2510"));
    groupStack.push(label);
}
function groupEnd() {
    if (groupStack.length === 0)
        return;
    var label = groupStack.pop() || "";
    var indent = "  ".repeat(groupStack.length);
    var lineLength = Math.max(30 - label.length - groupStack.length * 2, 10);
    group_trace("".concat(indent, "\u2514\u2500 ").concat(label, " ").concat("─".repeat(lineLength), "\u2518"));
}

;// ./src/console/core/timer.ts


var timers = {};
function time(label) {
    if (label === void 0) { label = "default"; }
    if (timers[label]) {
        warn('Timer "' + label + '" already exists.');
        return;
    }
    timers[label] = Date.now();
    info('Timer "' + label + '" started.');
}
function timeEnd(label) {
    if (label === void 0) { label = "default"; }
    if (!timers[label]) {
        warn('Timer "' + label + '" does not exist.');
        return;
    }
    var duration = Date.now() - timers[label];
    delete timers[label];
    info('Timer "' + label + '": ' + duration + "ms");
}
function getTimers() {
    return __assign({}, timers);
}
function resetTimers() {
    timers = {};
    info("All timers and counters have been reset.");
}

;// ./src/console/core/reset.ts



function resetAll() {
    resetTimers();
    resetCounters();
    info("All timers and counters have been reset.");
}

;// ./src/console/core/index.ts







;// ./src/global/console.ts
var EnhancedConsole = {};

;// ./src/console/index.ts


EnhancedConsole.assert = assert;
EnhancedConsole.count = count;
EnhancedConsole.countReset = countReset;
EnhancedConsole.group = group;
EnhancedConsole.groupEnd = groupEnd;
EnhancedConsole.debug = debug;
EnhancedConsole.log = log;
EnhancedConsole.info = info;
EnhancedConsole.warn = warn;
EnhancedConsole.error = error;
EnhancedConsole.file = file;
EnhancedConsole.clear = clear;
EnhancedConsole.resetAll = resetAll;
EnhancedConsole.time = time;
EnhancedConsole.timeEnd = timeEnd;


;// ./src/table/table.ts


var Table = __webpack_require__(420);
function formatValue(value) {
    if (value === null)
        return "null";
    if (value === undefined)
        return "undefined";
    if (typeof value === "string")
        return value;
    if (typeof value === "number" || typeof value === "boolean")
        return String(value);
    if (Array.isArray(value))
        return JSON.stringify(Array.from(value));
    if (typeof value === "object")
        return "{...}";
    return String(value);
}
function printArrayTable(array, columns) {
    if (array.length === 0)
        return "[]";
    var firstItem = array[0];
    if (firstItem !== null &&
        typeof firstItem === "object" &&
        !Array.isArray(firstItem)) {
        var allKeys_1 = new Set();
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var item = array_1[_i];
            if (item && typeof item === "object" && !Array.isArray(item)) {
                Object.keys(item).forEach(function (key) { return allKeys_1.add(key); });
            }
        }
        var columnList_1 = columns
            ? columns.filter(function (col) { return allKeys_1.has(col); })
            : Array.from(allKeys_1);
        var table_1 = new Table({
            head: (0,external_tslib_.__spreadArray)(["(index)"], columnList_1, true),
            chars: {
                top: "─",
                "top-mid": "┬",
                "top-left": "┌",
                "top-right": "┐",
                bottom: "─",
                "bottom-mid": "┴",
                "bottom-left": "└",
                "bottom-right": "┘",
                left: "│",
                "left-mid": "├",
                mid: "─",
                "mid-mid": "┼",
                right: "│",
                "right-mid": "┤",
                middle: "│"
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
    var table = new Table({
        head: ["(index)", "Value"],
        chars: {
            top: "─",
            "top-mid": "┬",
            "top-left": "┌",
            "top-right": "┐",
            bottom: "─",
            "bottom-mid": "┴",
            "bottom-left": "└",
            "bottom-right": "┘",
            left: "│",
            "left-mid": "├",
            mid: "─",
            "mid-mid": "┼",
            right: "│",
            "right-mid": "┤",
            middle: "│"
        }
    });
    array.forEach(function (item, index) {
        table.push([index, formatValue(item)]);
    });
    return table.toString();
}
function printObjectTable(obj, columns) {
    var keys = columns !== null && columns !== void 0 ? columns : Object.keys(obj);
    var table = new Table({
        head: ["Key", "Value"],
        chars: {
            top: "─",
            "top-mid": "┬",
            "top-left": "┌",
            "top-right": "┐",
            bottom: "─",
            "bottom-mid": "┴",
            "bottom-left": "└",
            "bottom-right": "┘",
            left: "│",
            "left-mid": "├",
            mid: "─",
            "mid-mid": "┼",
            right: "│",
            "right-mid": "┤",
            middle: "│"
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
        return "undefined";
    }
    if (Array.isArray(data)) {
        if (data.length === 0) {
            return "[]";
        }
        return printArrayTable(data, columns);
    }
    if (typeof data === "object") {
        return printObjectTable(data, columns);
    }
    return String(data);
}
var CustomTable = (function () {
    function CustomTable(indentLevel, indentStr) {
        if (indentLevel === void 0) { indentLevel = 0; }
        if (indentStr === void 0) { indentStr = " "; }
        this._indentLevel = indentLevel;
        this._indentStr = indentStr;
    }
    CustomTable.prototype.table = function (data, columns) {
        var output = tableToString(data, columns);
        var indent = this._indentStr.repeat(this._indentLevel);
        var indented = output
            .split("\n")
            .map(function (line) { return (line ? indent + line : ""); })
            .join("\n");
        log("\n".concat(indented));
    };
    return CustomTable;
}());


;// ./src/table/index.ts


var customTable = new CustomTable(1);
function table() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    customTable.table.apply(customTable, args);
}
EnhancedConsole.table = table;


// EXTERNAL MODULE: external "error-stack-parser"
var external_error_stack_parser_ = __webpack_require__(417);
;// ./src/stack/core/parser.ts


function parseStack(error, options) {
    var frames = external_error_stack_parser_.parse(error);
    if (options.fuck) {
        return frames;
    }
    if (options.skipSelf) {
        frames = frames.filter(function (f) { var _a; return !((_a = f.fileName) === null || _a === void 0 ? void 0 : _a.includes("console.stack")); });
    }
    if (options.skipRequireJs) {
        frames = frames.filter(function (f) { var _a; return !((_a = f.fileName) === null || _a === void 0 ? void 0 : _a.includes("requirejs")); });
    }
    if (options.depth) {
        frames = frames.slice(0, options.depth);
    }
    if (!options.includeSource) {
        frames = frames.map(function (_a) {
            var source = _a.source, rest = (0,external_tslib_.__rest)(_a, ["source"]);
            return rest;
        });
    }
    if (!options.includeArgs) {
        frames = frames.map(function (_a) {
            var args = _a.args, rest = (0,external_tslib_.__rest)(_a, ["args"]);
            return rest;
        });
    }
    return frames;
}

;// ./src/stack/core/formatter.ts

function formatFrames(frames, format) {
    switch (format) {
        case "json":
            return JSON.stringify(frames, null, 2);
        case "list":
            return frames
                .map(function (f, i) {
                return "".concat(i + 1, ". ").concat(f.functionName, " (").concat(f.fileName, ":").concat(f.lineNumber, ")");
            })
                .join("\n");
        default:
            return tableToString(frames);
    }
}

;// ./src/stack/config/paths.ts

var paths_Paths;
if (isFlash) {
    var paths_Root = AnJsflScript.folders.Log;
    paths_Paths = {
        currentText: "".concat(paths_Root, "Errors/human error.txt"),
        allText: "".concat(paths_Root, "Errors/human all errors.txt"),
        currentJson: "".concat(paths_Root, "Errors/error.json"),
        allJson: "".concat(paths_Root, "Errors/all errors.json"),
    };
}
else if (isNode) {
    paths_Paths = {
        currentText: './logs/human error.txt',
        allText: './logs/human all errors.txt',
        currentJson: './logs/error.json',
        allJson: './logs/all errors.json'
    };
}
else {
    paths_Paths = {
        currentText: '/logs/human error.txt',
        allText: '/logs/human all errors.txt',
        currentJson: '/logs/error.json',
        allJson: '/logs/all errors.json'
    };
}


;// ./src/stack/storage/fileStore.ts



var FileStore = (function () {
    function FileStore() {
    }
    FileStore.prototype.readCurrent = function () {
        return this.readJson(paths_Paths.currentJson);
    };
    FileStore.prototype.readAll = function () {
        var _a;
        return (_a = this.readJson(paths_Paths.allJson)) !== null && _a !== void 0 ? _a : [];
    };
    FileStore.prototype.writeCurrent = function (data) {
        this.writeJson(paths_Paths.currentJson, data);
    };
    FileStore.prototype.writeAll = function (list) {
        var limited = list.slice(-1000);
        this.writeJson(paths_Paths.allJson, limited);
    };
    FileStore.prototype.writeCurrentText = function (text) {
        this.ensureDir(paths_Paths.currentText);
        external_fs_.writeFileSync(paths_Paths.currentText, text, "utf8");
    };
    FileStore.prototype.appendAllText = function (text) {
        this.ensureDir(paths_Paths.allText);
        external_fs_.appendFileSync(paths_Paths.allText, text + "\n", "utf8");
    };
    FileStore.prototype.readCurrentText = function () {
        return this.readText(paths_Paths.currentText);
    };
    FileStore.prototype.readAllText = function () {
        return this.readText(paths_Paths.allText);
    };
    FileStore.prototype.clear = function () {
        Object.values(paths_Paths).forEach(function (file) {
            if (external_fs_.existsSync(file)) {
                external_fs_.unlinkSync(file);
            }
        });
    };
    FileStore.prototype.readJson = function (file) {
        if (!external_fs_.existsSync(file))
            return null;
        try {
            var content = external_fs_.readFileSync(file, "utf8");
            return JSON.parse(content);
        }
        catch (_a) {
            return null;
        }
    };
    FileStore.prototype.writeJson = function (file, data) {
        this.ensureDir(file);
        external_fs_.writeFileSync(file, JSON.stringify(data, null, 2), "utf8");
    };
    FileStore.prototype.readText = function (file) {
        if (!external_fs_.existsSync(file))
            return null;
        try {
            return external_fs_.readFileSync(file, "utf8");
        }
        catch (_a) {
            return null;
        }
    };
    FileStore.prototype.ensureDir = function (file) {
        var dir = external_path_browserify_.dirname(file);
        if (!external_fs_.existsSync(dir)) {
            external_fs_.mkdirSync(dir, { recursive: true });
        }
    };
    return FileStore;
}());


;// ./src/stack/storage/historyStore.ts



var HistoryStore = (function () {
    function HistoryStore() {
    }
    HistoryStore.prototype.save = function (record, output) {
        var store = new FileStore();
        store.writeCurrent(record);
        store.writeCurrentText(output);
        var all = store.readAll();
        var exist = all.find(function (r) {
            return r.message === record.message &&
                JSON.stringify(r.frames) === JSON.stringify(record.frames);
        });
        if (exist) {
            exist.count++;
            exist.timestamp = record.timestamp;
        }
        else {
            all.push(record);
        }
        store.writeAll(all);
        store.appendAllText(output);
    };
    HistoryStore.prototype.clear = function () {
        Object.values(paths_Paths).forEach(function (p) {
            if (external_fs_.existsSync(p))
                external_fs_.unlinkSync(p);
        });
    };
    return HistoryStore;
}());


;// ./src/stack/api/stackTracer.ts





var StackTracer = (function () {
    function StackTracer() {
        this.historyStore = new HistoryStore();
        this.defaults = {
            includeSource: false,
            includeArgs: false,
            depth: 5,
            skipSelf: true,
            skipRequireJs: true,
            format: "table",
            logToFile: true,
            fuck: false
        };
    }
    StackTracer.prototype.trace = function (input, options) {
        if (input === void 0) { input = "Stack trace"; }
        var opt = (0,external_tslib_.__assign)((0,external_tslib_.__assign)({}, this.defaults), options);
        var message = input instanceof Error ? input.message : String(input);
        var error = new Error(message);
        var frames = parseStack(error, opt);
        var output = formatFrames(frames, opt.format);
        var record = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            message: message,
            frames: frames,
            count: 1
        };
        output = "Stack Trace:\nid:".concat(record.id, " timestamp:").concat(record.timestamp, " message:").concat(record.message, " count:").concat(record.count, "\n\n").concat(output, "\n\n\n    ");
        log(output);
        if (opt.logToFile) {
            this.historyStore.save(record, output);
        }
    };
    StackTracer.prototype.clear = function () {
        this.historyStore.clear();
    };
    return StackTracer;
}());


;// ./src/stack/index.ts


var stackTracer = new StackTracer();
function stack() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return stackTracer.trace.apply(stackTracer, args);
}
;
EnhancedConsole.stack = stack;

;// ./src/index.ts




if (typeof window.console === "undefined") {
    window.console = EnhancedConsole;
}




/******/ 	return __webpack_exports__;
/******/ })()
;
});