(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("process"), require("@xjsfl/UI"), require("@anjsfl/validation"), require("loglevel"), require("fs"), require("url"), require("path-browserify"), require("luxon"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		require(["process", "@xjsfl/UI", "@anjsfl/validation", "loglevel", "fs", "url", "path-browserify", "luxon", "lodash"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("process"), require("@xjsfl/UI"), require("@anjsfl/validation"), require("loglevel"), require("fs"), require("url"), require("path-browserify"), require("luxon"), require("lodash")) : factory(root["process"], root["@xjsfl/UI"], root["@anjsfl/validation"], root["loglevel"], root["fs"], root["url"], root["path-browserify"], root["luxon"], root["lodash"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__192__, __WEBPACK_EXTERNAL_MODULE__760__, __WEBPACK_EXTERNAL_MODULE__360__, __WEBPACK_EXTERNAL_MODULE__947__, __WEBPACK_EXTERNAL_MODULE__917__, __WEBPACK_EXTERNAL_MODULE__248__, __WEBPACK_EXTERNAL_MODULE__796__, __WEBPACK_EXTERNAL_MODULE__773__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 1:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),

/***/ 192:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__192__;

/***/ }),

/***/ 248:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__248__;

/***/ }),

/***/ 360:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__360__;

/***/ }),

/***/ 760:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__760__;

/***/ }),

/***/ 773:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__773__;

/***/ }),

/***/ 796:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__796__;

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
/************************************************************************/
var __webpack_exports__ = {};

;// ./src/DESC/Descriptions.ts
var AUTHOR = "\u7A79\u7684\u5154\u5154";
var VERSION = 1;
var TIME = "2026-01-29";

// EXTERNAL MODULE: external "process"
var external_process_ = __webpack_require__(1);
// EXTERNAL MODULE: external "@xjsfl/UI"
var UI_ = __webpack_require__(192);
// EXTERNAL MODULE: external "@anjsfl/validation"
var validation_ = __webpack_require__(760);
// EXTERNAL MODULE: external "loglevel"
var external_loglevel_ = __webpack_require__(360);
;// ./src/CHECK/CheckDom.ts




var result = (0,validation_.CheckDocument)(UI_.UI.dom);
var doc;
if (result.isOk()) {
    doc = result.unwrap();
    external_loglevel_.log("文档有效:", doc);
}
else {
    var errorMsg = result.unwrapErr();
    external_loglevel_.error("文档无效:", errorMsg);
    external_process_.exit();
}


;// ./src/CONSTANTS/constants.ts

var MAX_SAVE_COUNT = 10;
var ORIGINAL_DOC_URI = doc.pathURI;

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(947);
// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(917);
// EXTERNAL MODULE: external "path-browserify"
var external_path_browserify_ = __webpack_require__(248);
var external_path_browserify_default = /*#__PURE__*/__webpack_require__.n(external_path_browserify_);
// EXTERNAL MODULE: external "luxon"
var external_luxon_ = __webpack_require__(796);
;// ./src/CONSTANTS/time.ts


var time_TIME_FORMAT = "yyyy年MM月dd日HH时mm分ss秒";
var SAVE_INTERVAL = (/* unused pure expression or super */ null && (3 * 60 * 1000));
var TimeData = (function () {
    function TimeData(flaFile) {
        var baseName = external_path_browserify_.basename(flaFile, ".fla");
        var _a = baseName.split("_"), timestamp = _a[0], fileName = _a[1];
        var dateTime = external_luxon_.DateTime.fromFormat(timestamp, time_TIME_FORMAT);
        this.flaFile = flaFile;
        this.fileName = fileName;
        this.timeStamp = dateTime.isValid ? dateTime.toISO() : "";
    }
    return TimeData;
}());


;// ./src/clean/clean.ts




function clean_cleanFolder(saveFolder) {
    var flaFiles = external_fs_.readdirSync(saveFolder);
    var timeDataList = flaFiles.map(function (f) { return new TimeData(f); });
    timeDataList.sort(function (a, b) { return a.timeStamp.localeCompare(b.timeStamp); });
    deleteInvalidFlaFiles(timeDataList, saveFolder);
    deleteOverflowFiles(timeDataList, saveFolder);
}
function deleteInvalidFlaFiles(list, saveFolder) {
    list.filter(function (item) { return !item.flaFile.endsWith(".fla") || !/^\d{4}年/.test(item.flaFile); }).forEach(function (item) {
        var fullPath = external_path_browserify_default().join(saveFolder, item.flaFile);
        external_fs_.existsSync(fullPath) && external_fs_.unlinkSync(fullPath);
    });
}
function deleteOverflowFiles(list, saveFolder) {
    if (list.length <= MAX_SAVE_COUNT)
        return;
    var deleteList = list.slice(0, list.length - MAX_SAVE_COUNT);
    deleteList.forEach(function (item) {
        var fullPath = external_path_browserify_default().join(saveFolder, item.flaFile);
        external_fs_.existsSync(fullPath) && external_fs_.unlinkSync(fullPath);
    });
}

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(773);
;// ./src/CONSTANTS/savefolder.ts




AUTHOR;
function getSaveFolder() {
    var drives = getWindowsDrives();
    var rootDrive = external_lodash_.includes(drives, "D:") ? "D:" : "C:";
    var saveFolder = external_path_browserify_.join(rootDrive, "AnJsflScript");
    if (!external_fs_.existsSync(saveFolder)) {
        external_fs_.mkdirSync(saveFolder, { recursive: true });
    }
    return saveFolder;
}
function getWindowsDrives() {
    var drives = [];
    for (var i = 65; i <= 90; i++) {
        var drive = String.fromCharCode(i) + ":";
        try {
            if (external_fs_.existsSync(drive + "/")) {
                drives.push(drive);
            }
        }
        catch (_a) {
        }
    }
    return drives;
}
var savefolder_SAVE_FOLDER = getSaveFolder();

;// ./src/CONSTANTS/save_path.ts






AUTHOR;
function getBaseNameWithoutExt(filePath) {
    return external_path_browserify_.basename(filePath, external_path_browserify_.extname(filePath));
}
function getSavePath(originalFilePath, saveFolder) {
    var baseName = getBaseNameWithoutExt(originalFilePath);
    var now = external_luxon_.DateTime.now().toFormat(time_TIME_FORMAT);
    var fileName = "".concat(now, "_").concat(baseName, ".fla");
    return external_path_browserify_.join(saveFolder, fileName);
}
var save_path_SAVE_PATH = getSavePath(ORIGINAL_DOC_URI, savefolder_SAVE_FOLDER);

;// ./src/Main.ts










AUTHOR;
function saveDom(targetPath) {
    var url = (0,external_url_.pathToFileURL)(targetPath).href;
    fl.saveDocument(doc, url);
    fl.saveDocument(doc, ORIGINAL_DOC_URI);
}
function AutoSave() {
    if (!fs.existsSync(SAVE_FOLDER)) {
        fs.mkdirSync(SAVE_FOLDER, { recursive: true });
    }
    saveDom(SAVE_PATH);
    cleanFolder(SAVE_FOLDER);
    var nextSaveTime = DateTime.now().plus({ minutes: 3 });
    var formattedTime = nextSaveTime.toFormat(TIME_FORMAT);
    console.log("\u4FDD\u5B58\u6210\u529F\uFF0C\u4FDD\u5B58\u5230 ".concat(SAVE_PATH, ",\u4E0B\u4E00\u6B21\u4FDD\u5B58\u65F6\u95F4 3\u5206\u949F\u540E ").concat(formattedTime));
}
function OnlySave() {
    if (!external_fs_.existsSync(savefolder_SAVE_FOLDER)) {
        external_fs_.mkdirSync(savefolder_SAVE_FOLDER, { recursive: true });
    }
    saveDom(save_path_SAVE_PATH);
    clean_cleanFolder(savefolder_SAVE_FOLDER);
    console.log("\u4FDD\u5B58\u6210\u529F\uFF0C\u4FDD\u5B58\u5230 ".concat(save_path_SAVE_PATH));
}

;// ./src/out/onlySave.ts


AUTHOR;
if (AUTHOR === AUTHOR) {
    OnlySave();
}

/******/ 	return __webpack_exports__;
/******/ })()
;
});