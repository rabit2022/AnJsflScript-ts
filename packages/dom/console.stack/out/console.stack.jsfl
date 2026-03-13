(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("error-stack-parser"), require("console.table"), require("fs"), require("path-browserify"));
	else if(typeof define === 'function' && define.amd)
		define(["error-stack-parser", "console.table", "fs", "path-browserify"], factory);
	else if(typeof exports === 'object')
		exports["console.stack"] = factory(require("error-stack-parser"), require("console.table"), require("fs"), require("path-browserify"));
	else
		root["console.stack"] = factory(root["error-stack-parser"], root["console.table"], root["fs"], root["path-browserify"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__417__, __WEBPACK_EXTERNAL_MODULE__615__, __WEBPACK_EXTERNAL_MODULE__947__, __WEBPACK_EXTERNAL_MODULE__248__) {
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

/***/ 615:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__615__;

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
  stackTracer: function() { return /* binding */ stackTracer; }
});

// EXTERNAL MODULE: external "error-stack-parser"
var external_error_stack_parser_ = __webpack_require__(417);
;// ./src/core/parser.ts
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

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
            var source = _a.source, rest = __rest(_a, ["source"]);
            return rest;
        });
    }
    if (!options.includeArgs) {
        frames = frames.map(function (_a) {
            var args = _a.args, rest = __rest(_a, ["args"]);
            return rest;
        });
    }
    return frames;
}

// EXTERNAL MODULE: external "console.table"
var external_console_table_ = __webpack_require__(615);
;// ./src/core/formatter.ts

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
            return (0,external_console_table_.tableToString)(frames);
    }
}

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(947);
;// ./src/config/paths.ts
var _a;
var isJsfl = typeof AnJsflScript !== 'undefined' || typeof fl !== 'undefined';
var Paths;
if (isJsfl) {
    var Root = AnJsflScript.folders.Log;
    Paths = {
        currentText: "".concat(Root, "Errors/human error.txt"),
        allText: "".concat(Root, "Errors/human all errors.txt"),
        currentJson: "".concat(Root, "Errors/error.json"),
        allJson: "".concat(Root, "Errors/all errors.json"),
    };
}
else if (typeof process !== 'undefined' && ((_a = process.versions) === null || _a === void 0 ? void 0 : _a.node)) {
    Paths = {
        currentText: './logs/human error.txt',
        allText: './logs/human all errors.txt',
        currentJson: './logs/error.json',
        allJson: './logs/all errors.json'
    };
}
else {
    Paths = {
        currentText: '/logs/human error.txt',
        allText: '/logs/human all errors.txt',
        currentJson: '/logs/error.json',
        allJson: '/logs/all errors.json'
    };
}


// EXTERNAL MODULE: external "path-browserify"
var external_path_browserify_ = __webpack_require__(248);
;// ./src/storage/fileStore.ts



var FileStore = (function () {
    function FileStore() {
    }
    FileStore.prototype.readCurrent = function () {
        return this.readJson(Paths.currentJson);
    };
    FileStore.prototype.readAll = function () {
        var _a;
        return (_a = this.readJson(Paths.allJson)) !== null && _a !== void 0 ? _a : [];
    };
    FileStore.prototype.writeCurrent = function (data) {
        this.writeJson(Paths.currentJson, data);
    };
    FileStore.prototype.writeAll = function (list) {
        var limited = list.slice(-1000);
        this.writeJson(Paths.allJson, limited);
    };
    FileStore.prototype.writeCurrentText = function (text) {
        this.ensureDir(Paths.currentText);
        external_fs_.writeFileSync(Paths.currentText, text, "utf8");
    };
    FileStore.prototype.appendAllText = function (text) {
        this.ensureDir(Paths.allText);
        external_fs_.appendFileSync(Paths.allText, text + "\n", "utf8");
    };
    FileStore.prototype.readCurrentText = function () {
        return this.readText(Paths.currentText);
    };
    FileStore.prototype.readAllText = function () {
        return this.readText(Paths.allText);
    };
    FileStore.prototype.clear = function () {
        Object.values(Paths).forEach(function (file) {
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


;// ./src/storage/historyStore.ts



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
        Object.values(Paths).forEach(function (p) {
            if (external_fs_.existsSync(p))
                external_fs_.unlinkSync(p);
        });
    };
    return HistoryStore;
}());


;// ./src/api/stackTracer.ts
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
        var opt = __assign(__assign({}, this.defaults), options);
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
        console.log(output);
        if (opt.logToFile) {
            this.historyStore.save(record, output);
        }
    };
    StackTracer.prototype.clear = function () {
        this.historyStore.clear();
    };
    return StackTracer;
}());


;// ./src/index.ts

var stackTracer = new StackTracer();
console.stack = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var stackTracer = new StackTracer();
    return stackTracer.trace.apply(stackTracer, args);
};

/******/ 	return __webpack_exports__;
/******/ })()
;
});