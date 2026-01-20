(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["fs"] = factory(require("lodash"));
	else
		root["fs"] = factory(root["lodash"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__773__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 773:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__773__;

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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendFileSync: function() { return /* binding */ appendFileSync; },
/* harmony export */   copyFileSync: function() { return /* binding */ copyFileSync; },
/* harmony export */   existsSync: function() { return /* binding */ existsSync; },
/* harmony export */   mkdirSync: function() { return /* binding */ mkdirSync; },
/* harmony export */   readFileSync: function() { return /* binding */ readFileSync; },
/* harmony export */   readdirSync: function() { return /* binding */ readdirSync; },
/* harmony export */   rmSync: function() { return /* binding */ rmSync; },
/* harmony export */   rmdirSync: function() { return /* binding */ rmdirSync; },
/* harmony export */   statSync: function() { return /* binding */ statSync; },
/* harmony export */   unlinkSync: function() { return /* binding */ unlinkSync; },
/* harmony export */   writeFileSync: function() { return /* binding */ writeFileSync; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(773);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function toFileURI(path) {
    if (typeof path !== "string") {
        throw new TypeError("[fl] Path must be a string");
    }
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.startsWith)(path, "file:///")) {
        return path;
    }
    return FLfile.platformPathToURI(path);
}
function throwErr(code, message) {
    var err = new Error("[fs] ".concat(message));
    err.code = code;
    throw err;
}
function existsSync(path) {
    return FLfile.exists(toFileURI(path));
}
function readFileSync(path, _encoding) {
    var uri = toFileURI(path);
    if (!FLfile.exists(uri)) {
        throwErr("ENOENT", "no such file or directory, open '".concat(path, "'"));
    }
    var content = FLfile.read(uri);
    if (content === null) {
        throwErr("EIO", "unable to read file '".concat(path, "'"));
    }
    return content;
}
function writeFileSync(path, data, _options) {
    var uri = toFileURI(path);
    var strData = typeof data === "string" ? data : String(data);
    var parentDir = uri.substring(0, uri.lastIndexOf("/"));
    if (parentDir && !FLfile.exists(parentDir)) {
        throwErr("ENOENT", "no such file or directory, open '".concat(path, "'"));
    }
    var success = FLfile.write(uri, strData);
    if (!success) {
        throwErr("EIO", "unable to write file '".concat(path, "'"));
    }
}
function appendFileSync(path, data, _encoding) {
    var uri = toFileURI(path);
    var strData = typeof data === "string" ? data : String(data);
    if (!FLfile.exists(uri)) {
        var parentDir = uri.substring(0, uri.lastIndexOf("/"));
        if (parentDir && !FLfile.exists(parentDir)) {
            throwErr("ENOENT", "no such file or directory, open '".concat(path, "'"));
        }
        FLfile.write(uri, "");
    }
    var success = FLfile.write(uri, strData, "append");
    if (!success) {
        throwErr("EIO", "unable to append to file '".concat(path, "'"));
    }
}
function mkdirSync(path, _options) {
    var uri = toFileURI(path);
    var success = FLfile.createFolder(uri);
    if (!success && !FLfile.exists(uri)) {
        throwErr("EIO", "unable to create directory '".concat(path, "'"));
    }
}
function readdirSync(path, _options) {
    var uri = toFileURI(path);
    if (!FLfile.exists(uri)) {
        throwErr("ENOENT", "no such file or directory, scandir '".concat(path, "'"));
    }
    var attrs = FLfile.getAttributes(uri);
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(attrs, "D")) {
        throwErr("ENOTDIR", "not a directory, scandir '".concat(path, "'"));
    }
    var result = FLfile.listFolder(uri);
    if (!result || !Array.isArray(result)) {
        throwErr("EIO", "unable to read directory '".concat(path, "'"));
    }
    return result;
}
function statSync(path) {
    var uri = toFileURI(path);
    if (!FLfile.exists(uri)) {
        throwErr("ENOENT", "no such file or directory, stat '".concat(path, "'"));
    }
    var attrs = FLfile.getAttributes(uri);
    var isDir = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(attrs, "D");
    return {
        isDirectory: function () { return isDir; },
        isFile: function () { return !isDir; },
        size: 0
    };
}
function unlinkSync(path) {
    var uri = toFileURI(path);
    if (!FLfile.exists(uri)) {
        throwErr("ENOENT", "no such file or directory, unlink '".concat(path, "'"));
    }
    var attrs = FLfile.getAttributes(uri);
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(attrs, "D")) {
        throwErr("EISDIR", "illegal operation on a directory, unlink '".concat(path, "'"));
    }
    var success = FLfile.remove(uri);
    if (!success) {
        throwErr("EIO", "unable to delete file '".concat(path, "'"));
    }
}
function rmdirSync(path) {
    var uri = toFileURI(path);
    if (!FLfile.exists(uri)) {
        throwErr("ENOENT", "no such file or directory, rmdir '".concat(path, "'"));
    }
    var attrs = FLfile.getAttributes(uri);
    if (!(0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(attrs, "D")) {
        throwErr("ENOTDIR", "not a directory, rmdir '".concat(path, "'"));
    }
    var success = FLfile.remove(uri);
    if (!success) {
        throwErr("EIO", "unable to delete directory '".concat(path, "' (may not be empty)"));
    }
}
function copyFileSync(src, dest) {
    var srcContent = readFileSync(src);
    writeFileSync(dest, srcContent);
}
function rmSync(path, _options) {
    var uri = toFileURI(path);
    if (!FLfile.exists(uri)) {
        throwErr("ENOENT", "no such file or directory, rm '".concat(path, "'"));
    }
    var attrs = FLfile.getAttributes(uri);
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_0__.includes)(attrs, "D")) {
        rmdirSync(path);
    }
    else {
        unlinkSync(path);
    }
}

/******/ 	return __webpack_exports__;
/******/ })()
;
});