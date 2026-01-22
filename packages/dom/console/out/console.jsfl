(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["console"] = factory();
	else
		root["console"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
  console: function() { return /* reexport */ console; }
});

;// ./src/console.ts
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var trace = fl.trace;
var uriToPath = FLfile.uriToPlatformPath;
var LOG_FOLDER = AnJsflScript.FOLDERS.Log;
var MAIN_LOG = "".concat(LOG_FOLDER, "/main.log");
var FILE_LOG = "".concat(LOG_FOLDER, "/file.log");
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
function padLeft(input, width, padChar) {
    if (padChar === void 0) { padChar = '0'; }
    var str = String(input);
    while (str.length < width)
        str = padChar + str;
    return str;
}
function pathResolve(target, base) {
    try {
        var scriptPath = uriToPath(target);
        var basePath = uriToPath(base);
        if (scriptPath.indexOf(basePath) !== 0) {
            fl.trace("\u26A0\uFE0F \u811A\u672C\u4E0D\u5728\u9879\u76EE\u76EE\u5F55\u4E0B,\u53EF\u80FD\u5728\u4E8B\u4EF6\u5FAA\u73AF\u4E2D ".concat(scriptPath, ",").concat(basePath));
            return scriptPath;
        }
        if (basePath.charAt(basePath.length - 1) !== '/')
            basePath += '/';
        return scriptPath.substring(basePath.length);
    }
    catch (e) {
        return "unknown.jsfl";
    }
}
function formatMessage(args) {
    return Array.prototype.slice.call(args).join(' ');
}
function writeToLog(message, type, level) {
    if (type === void 0) { type = LogLevel.INFO; }
    if (level === void 0) { level = 0; }
    var logType = typeof type === "string" ? type : LogLevel.INFO;
    var logLevel = typeof level === "number" ? level : (level === true ? 1 : 0);
    var now = new Date();
    var asctime = now.getFullYear() + "-" +
        padLeft(now.getMonth() + 1, 2) + "-" +
        padLeft(now.getDate(), 2) + " " +
        padLeft(now.getHours(), 2) + ":" +
        padLeft(now.getMinutes(), 2) + ":" +
        padLeft(now.getSeconds(), 2) + "." +
        padLeft(now.getMilliseconds(), 3);
    var levelname = (logType || "INFO").toUpperCase();
    while (levelname.length < 8) {
        levelname += " ";
    }
    var scriptURI = fl.scriptURI;
    var baseDir = AnJsflScript.$ProjectFileDir$;
    var short_path = pathResolve(scriptURI, baseDir);
    var logLine = "".concat(asctime, " | ").concat(levelname, " | ").concat(short_path, " | ").concat(message);
    FLfile.write(MAIN_LOG, logLine + "\n", "append");
    if (logType === LogLevel.FILE) {
        FLfile.write(FILE_LOG, logLine + "\n", "append");
    }
}
var EnhancedConsole = (function () {
    function EnhancedConsole() {
        this.timers = {};
        this.counters = {};
    }
    EnhancedConsole.prototype.trace = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var msg = formatMessage(arguments);
        trace("\n⚡admin TRACE ❯❯ " + msg + "\n");
        writeToLog(msg, LogLevel.TRACE, 3);
    };
    EnhancedConsole.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var msg = formatMessage(arguments);
        trace("\n⚡admin DEBUG ❯❯ " + msg + "\n");
        writeToLog(msg, LogLevel.DEBUG, 3);
    };
    EnhancedConsole.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var msg = formatMessage(arguments);
        trace("\n⚡admin LOG ❯❯ " + msg + "\n");
        writeToLog(msg, LogLevel.LOG, 3);
    };
    EnhancedConsole.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var msg = formatMessage(arguments);
        trace("\n⚡admin INFO ❯❯ " + msg + "\n");
        writeToLog(msg, LogLevel.INFO, 3);
    };
    EnhancedConsole.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var msg = formatMessage(arguments);
        trace("\n⚡admin WARNING ❯❯ " + msg + "\n");
        writeToLog(msg, LogLevel.WARN, 3);
    };
    EnhancedConsole.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var msg = formatMessage(arguments);
        trace("\n⚡admin ERROR ❯❯ " + msg + "\n");
        writeToLog(msg, LogLevel.ERROR, 3);
    };
    EnhancedConsole.prototype.file = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var msg = formatMessage(arguments);
        writeToLog(msg, LogLevel.FILE);
    };
    EnhancedConsole.prototype.clear = function (type) {
        fl.outputPanel.clear();
        var name = (type === LogLevel.FILE) ? "file" : "main";
        FLfile.remove("".concat(LOG_FOLDER, "/").concat(name, ".log"));
        trace(name + ".log reset");
    };
    EnhancedConsole.prototype.time = function (label) {
        if (label === void 0) { label = "default"; }
        if (this.timers[label]) {
            this.warn('Timer "' + label + '" already exists.');
            return;
        }
        this.timers[label] = Date.now();
        this.info('Timer "' + label + '" started.');
    };
    EnhancedConsole.prototype.timeEnd = function (label) {
        if (label === void 0) { label = "default"; }
        if (!this.timers[label]) {
            this.warn('Timer "' + label + '" does not exist.');
            return;
        }
        var duration = Date.now() - this.timers[label];
        delete this.timers[label];
        this.info('Timer "' + label + '": ' + duration + 'ms');
    };
    EnhancedConsole.prototype.count = function (label) {
        if (label === void 0) { label = "default"; }
        this.counters[label] = (this.counters[label] || 0) + 1;
        this.info('"' + label + '" was called ' + this.counters[label] + ' times.');
    };
    EnhancedConsole.prototype.countReset = function (label) {
        if (label === void 0) { label = "default"; }
        if (this.counters[label] === undefined) {
            this.warn('Counter "' + label + '" does not exist.');
            return;
        }
        delete this.counters[label];
        this.info('Counter "' + label + '" has been reset.');
    };
    EnhancedConsole.prototype.assert = function (expression, message) {
        if (!expression) {
            throw new Error(message || "Assertion failed");
        }
    };
    EnhancedConsole.prototype.getTimers = function () {
        return __assign({}, this.timers);
    };
    EnhancedConsole.prototype.getCounters = function () {
        return __assign({}, this.counters);
    };
    EnhancedConsole.prototype.resetAll = function () {
        this.timers = {};
        this.counters = {};
        this.info("All timers and counters have been reset.");
    };
    return EnhancedConsole;
}());
var console = new EnhancedConsole();
window.console = console;


;// ./src/index.ts


/******/ 	return __webpack_exports__;
/******/ })()
;
});