(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fs"), require("url"), require("loglevel"));
	else if(typeof define === 'function' && define.amd)
		define(["fs", "url", "loglevel"], factory);
	else if(typeof exports === 'object')
		exports["child_process"] = factory(require("fs"), require("url"), require("loglevel"));
	else
		root["child_process"] = factory(root["fs"], root["url"], root["loglevel"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__947__, __WEBPACK_EXTERNAL_MODULE__917__, __WEBPACK_EXTERNAL_MODULE__360__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 360:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__360__;

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
  exec: function() { return /* reexport */ exec; },
  execSync: function() { return /* reexport */ execSync; }
});

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(947);
// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(917);
// EXTERNAL MODULE: external "loglevel"
var external_loglevel_ = __webpack_require__(360);
;// ./src/exec/index.ts
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



function execSync(command, options) {
    var opts = __assign({ encoding: "utf-8", timeout: 0, maxBuffer: 200 * 1024 * 1024, shell: "powershell" }, options);
    if (opts.maxBuffer <= 0) {
        throw new Error("maxBuffer must be a positive number");
    }
    var tempDir = "".concat(AnJsflScript.folders.Log, "cmd/");
    var timestamp = Date.now();
    var randomStr = Math.random().toString(36).substr(2, 8);
    var tempOutputFile = "".concat(tempDir, "execSync.txt");
    var tempErrorFile = "".concat(tempDir, "execSync_error.txt");
    external_fs_.mkdirSync(tempDir, { recursive: true });
    var fullCommand;
    if (isWindows()) {
        if (opts.shell === "cmd") {
            fullCommand = "cmd /c \"".concat(command, "\" > \"").concat((0,external_url_.fileURLToPath)(tempOutputFile), "\" 2> \"").concat((0,external_url_.fileURLToPath)(tempErrorFile), "\"");
        }
        else if (opts.shell === "powershell") {
            var outPath = (0,external_url_.fileURLToPath)(tempOutputFile);
            var errPath = (0,external_url_.fileURLToPath)(tempErrorFile);
            var safeOutPath = outPath.replace(/'/g, "''");
            var safeErrPath = errPath.replace(/'/g, "''");
            var safeCommand = command.replace(/"/g, "'").replace(/'/g, "''");
            var psScript = "& { ".concat(safeCommand, " } 2> '").concat(safeErrPath, "' | Out-File -FilePath '").concat(safeOutPath, "' -Encoding UTF8");
            var argumentsPrefix = [
                '-NoProfile',
                '-NonInteractive',
                '-ExecutionPolicy',
                'Bypass',
                '-Command'
            ];
            fullCommand = "powershell ".concat(argumentsPrefix.join(" "), " \"").concat(psScript, "\"");
        }
        else {
            throw new Error("Unknown shell " + opts.shell);
        }
        external_loglevel_.log("Executing: ".concat(fullCommand));
        FLfile.runCommandLine(fullCommand);
        var output = external_fs_.readFileSync(tempOutputFile, opts.encoding);
        if (FLfile.exists(tempErrorFile)) {
            var errorOutput = external_fs_.readFileSync(tempErrorFile, opts.encoding);
            if (errorOutput && errorOutput.trim().length > 0) {
                var error = new Error("Command failed: ".concat(errorOutput.trim()));
                error.stderr = errorOutput;
                error.stdout = output;
                throw error;
            }
        }
        return output;
    }
    else {
        throw new Error("Unknown shell " + opts.shell);
    }
}
function isWindows() {
    return AnJsflScript.app.os.win;
}
function cleanupTempFiles(files) {
    files.forEach(function (file) {
        try {
            if (FLfile.exists(file)) {
                FLfile.remove(file);
            }
        }
        catch (e) {
        }
    });
}
function exec(command, options) {
    return new Promise(function (resolve, reject) {
        try {
            var stdout = execSync(command, options);
            resolve({
                stdout: stdout,
                stderr: null,
                status: 0,
                signal: null
            });
        }
        catch (error) {
            resolve({
                stdout: error.stdout,
                stderr: error.stderr,
                status: error.status || 1,
                signal: null,
                error: error
            });
        }
    });
}
function execSyncNoThrow(command, options) {
    try {
        var stdout = execSync(command, options);
        return {
            stdout: stdout,
            stderr: null,
            status: 0,
            signal: null
        };
    }
    catch (error) {
        return {
            stdout: error.stdout,
            stderr: error.stderr,
            status: error.status || 1,
            signal: null,
            error: error
        };
    }
}

;// ./src/index.ts


/******/ 	return __webpack_exports__;
/******/ })()
;
});