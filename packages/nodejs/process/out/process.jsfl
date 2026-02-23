(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["process"] = factory();
	else
		root["process"] = factory();
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
  cwd: function() { return /* reexport */ cwd; },
  exit: function() { return /* reexport */ exit; },
  exitCode: function() { return /* reexport */ exitCode; },
  off: function() { return /* reexport */ off; },
  on: function() { return /* reexport */ on; },
  once: function() { return /* reexport */ once; },
  platform: function() { return /* reexport */ platform; }
});

;// ./src/cwd/index.ts
function cwd() {
    if (fl.scriptURI) {
        var scriptPath = FLfile.uriToPlatformPath(fl.scriptURI);
        var lastSlash = Math.max(scriptPath.lastIndexOf("/"), scriptPath.lastIndexOf("\\"));
        if (lastSlash === -1)
            return scriptPath;
        scriptPath = scriptPath.replace(/\\/g, "/");
        return scriptPath.substring(0, lastSlash);
    }
    throw new Error("Could not find script uri");
}

;// ./src/exit/runtime.ts
function createRuntime() {
    return {
        exited: false,
        handlers: {
            beforeExit: [],
            exit: [],
        },
    };
}
var exitCode = 0;

;// ./src/exit/exit.ts

function trace(msg) {
    try {
        if (typeof fl !== 'undefined' && fl.trace) {
            fl.trace(msg);
        }
    }
    catch (_a) { }
}
function exitInner(rt, code) {
    if (rt.exited) {
        throw new Error('Process already exited');
    }
    var finalCode = typeof code === 'number' ? code : exitCode;
    rt.exited = true;
    if (finalCode !== 0) {
        trace("Process exited with code ".concat(finalCode));
    }
    for (var _i = 0, _a = rt.handlers.beforeExit; _i < _a.length; _i++) {
        var fn = _a[_i];
        try {
            fn(finalCode);
        }
        catch (_b) { }
    }
    for (var _c = 0, _d = rt.handlers.exit; _c < _d.length; _c++) {
        var fn = _d[_c];
        try {
            fn(finalCode);
        }
        catch (_e) { }
    }
    throw new Error("Process.exit(".concat(finalCode, ")"));
}

;// ./src/exit/handlers.ts
function onExit(rt, event, listener) {
    rt.handlers[event].push(listener);
    return {
        off: function () {
            var list = rt.handlers[event];
            var i = list.indexOf(listener);
            if (i >= 0)
                list.splice(i, 1);
        },
    };
}
function onceExit(rt, event, listener) {
    var wrapper = function (code) {
        off();
        listener(code);
    };
    var off = onExit(rt, event, wrapper).off;
    return { off: off };
}

;// ./src/exit/index.ts



var rt = createRuntime();
function exit(code) {
    return exitInner(rt, code);
}
function on(event, fn) {
    return onExit(rt, event, fn);
}
function once(event, fn) {
    return onceExit(rt, event, fn);
}
function off(event, fn) {
    var list = rt.handlers[event];
    var i = list.indexOf(fn);
    if (i >= 0)
        list.splice(i, 1);
}


;// ./src/platform/index.ts
var WIN = "win32", MAC = "darwin", LINUX = "linux", UNKNOWN = "unknown";
var platform = (function () {
    if (typeof AnJsflScript !== 'undefined' && AnJsflScript.app) {
        var currentOS = AnJsflScript.app.os;
        if (currentOS.win) {
            return WIN;
        }
        else if (currentOS.mac) {
            return MAC;
        }
    }
    return UNKNOWN;
})();

;// ./src/index.ts




/******/ 	return __webpack_exports__;
/******/ })()
;
});