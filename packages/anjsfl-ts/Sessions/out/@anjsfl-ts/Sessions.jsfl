(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@polyfill/symbol-dispose"), require("loglevel"), require("fs"), require("path-browserify"));
	else if(typeof define === 'function' && define.amd)
		define(["@polyfill/symbol-dispose", "loglevel", "fs", "path-browserify"], factory);
	else if(typeof exports === 'object')
		exports["@anjsfl-ts/Sessions"] = factory(require("@polyfill/symbol-dispose"), require("loglevel"), require("fs"), require("path-browserify"));
	else
		root["@anjsfl-ts/Sessions"] = factory(root["@polyfill/symbol-dispose"], root["loglevel"], root["fs"], root["path-browserify"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__408__, __WEBPACK_EXTERNAL_MODULE__360__, __WEBPACK_EXTERNAL_MODULE__947__, __WEBPACK_EXTERNAL_MODULE__248__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 248:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__248__;

/***/ }),

/***/ 360:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__360__;

/***/ }),

/***/ 408:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__408__;

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
  EditSession: function() { return /* reexport */ EditSession; },
  open: function() { return /* reexport */ open_open; }
});

// EXTERNAL MODULE: external "@polyfill/symbol-dispose"
var symbol_dispose_ = __webpack_require__(408);
// EXTERNAL MODULE: external "loglevel"
var external_loglevel_ = __webpack_require__(360);
;// ./src/edit/EditSession.ts


var EditSession = (function () {
    function EditSession(doc) {
        this.doc = doc;
        this.exited = false;
        if (!doc || typeof doc.enterEditMode !== "function") {
            throw new Error("Invalid document object: missing enterEditMode");
        }
        doc.enterEditMode("inPlace");
        external_loglevel_.log("✅ Entered in-place edit mode");
    }
    EditSession.prototype[Symbol.dispose] = function () {
        if (!this.exited && this.doc && typeof this.doc.exitEditMode === "function") {
            this.doc.exitEditMode();
            this.exited = true;
            external_loglevel_.log("🔒 Exited in-place edit mode");
        }
    };
    return EditSession;
}());


;// ./src/edit/index.ts


// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(947);
// EXTERNAL MODULE: external "path-browserify"
var external_path_browserify_ = __webpack_require__(248);
;// ./src/open/open.ts


var FileHandle = (function () {
    function FileHandle(filePath, mode, encoding) {
        if (mode === void 0) { mode = 'r'; }
        if (encoding === void 0) { encoding = 'utf-8'; }
        this.readLineIndex = 0;
        this.isClosed = false;
        if (encoding.toLowerCase() !== 'utf-8') {
            throw new Error("暂不支持非 utf-8 编码的文件");
        }
        this.absolutePath = external_path_browserify_.resolve(filePath);
        this.name = this.absolutePath;
        this.mode = mode;
    }
    FileHandle.prototype.checkClosed = function () {
        if (this.isClosed) {
            throw new Error("File already closed");
        }
    };
    FileHandle.prototype.performClose = function () {
        if (this.isClosed)
            return;
        this.fileContentCache = undefined;
        this.fileLinesCache = undefined;
        this.readLineIndex = 0;
        this.isClosed = true;
        console.log("[System] File ".concat(this.name, " disposed/closed."));
    };
    FileHandle.prototype.read = function (size) {
        this.checkClosed();
        if (this.fileContentCache === undefined) {
            if (this.mode === 'r' || this.mode === 'a') {
                try {
                    this.fileContentCache = external_fs_.readFileSync(this.absolutePath, 'utf-8');
                }
                catch (err) {
                    if (err.code === 'ENOENT') {
                        throw new Error("File not found: ".concat(this.absolutePath));
                    }
                    throw err;
                }
            }
            else {
                this.fileContentCache = "";
            }
        }
        var content = this.fileContentCache || "";
        if (size === undefined || size === -1) {
            return content;
        }
        return content.substr(0, size);
    };
    FileHandle.prototype.readLine = function () {
        this.checkClosed();
        var content = this.read();
        if (this.fileLinesCache === undefined) {
            this.fileLinesCache = content.split(/\r?\n/);
        }
        if (this.readLineIndex >= this.fileLinesCache.length) {
            return null;
        }
        return this.fileLinesCache[this.readLineIndex++];
    };
    FileHandle.prototype.readLines = function () {
        this.checkClosed();
        var content = this.read();
        if (this.fileLinesCache === undefined) {
            this.fileLinesCache = content.split(/\r?\n/);
        }
        return this.fileLinesCache;
    };
    FileHandle.prototype.write = function (text) {
        this.checkClosed();
        if (!['w', 'a', 'x'].includes(this.mode)) {
            throw new Error("Invalid mode for writing: ".concat(this.mode, ". Use 'w', 'a', or 'x'."));
        }
        var flag = 'w';
        if (this.mode === 'a') {
            flag = 'a';
        }
        else if (this.mode === 'x') {
            flag = 'w';
        }
        try {
            external_fs_.writeFileSync(this.absolutePath, text, {
                encoding: 'utf-8',
                flag: flag
            });
            if (this.mode === 'w' || this.mode === 'x') {
                this.fileContentCache = text;
                this.fileLinesCache = undefined;
                this.readLineIndex = 0;
            }
            else if (this.mode === 'a') {
                this.fileContentCache = external_fs_.readFileSync(this.absolutePath, 'utf-8');
                this.fileLinesCache = undefined;
                this.readLineIndex = 0;
            }
            return true;
        }
        catch (err) {
            if (err.code === 'EEXIST' && flag === 'wx') {
                throw new Error("File already exists: ".concat(this.absolutePath));
            }
            throw err;
        }
    };
    FileHandle.prototype.writeLines = function (lines) {
        this.checkClosed();
        if (!Array.isArray(lines)) {
            throw new Error("writeLines expects an array of strings");
        }
        return this.write(lines.join("\n"));
    };
    FileHandle.prototype.close = function () {
        this.performClose();
    };
    FileHandle.prototype[Symbol.dispose] = function () {
        this.close();
    };
    return FileHandle;
}());


;// ./src/open/index.ts

function open_open(filePath, mode, encoding) {
    return new FileHandle(filePath, mode, encoding);
}

;// ./src/index.ts



/******/ 	return __webpack_exports__;
/******/ })()
;
});