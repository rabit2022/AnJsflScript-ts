require(["path-browserify", "luxon", "process", "fs", "url", "lodash", "loglevel", "@dom/setTimeout", "@xjsfl/UI", "@anjsfl/validation"], function (__WEBPACK_EXTERNAL_MODULE__12__, __WEBPACK_EXTERNAL_MODULE__32__, __WEBPACK_EXTERNAL_MODULE__53__, __WEBPACK_EXTERNAL_MODULE__87__, __WEBPACK_EXTERNAL_MODULE__209__, __WEBPACK_EXTERNAL_MODULE__241__, __WEBPACK_EXTERNAL_MODULE__356__, __WEBPACK_EXTERNAL_MODULE__394__, __WEBPACK_EXTERNAL_MODULE__628__, __WEBPACK_EXTERNAL_MODULE__964__) {
    return /******/ (function () { // webpackBootstrap
        /******/
        "use strict";
        /******/
        var __webpack_modules__ = ({

            /***/ 12:
            /***/ (function (module) {

                module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

                /***/
            }),

            /***/ 32:
            /***/ (function (module) {

                module.exports = __WEBPACK_EXTERNAL_MODULE__32__;

                /***/
            }),

            /***/ 53:
            /***/ (function (module) {

                module.exports = __WEBPACK_EXTERNAL_MODULE__53__;

                /***/
            }),

            /***/ 87:
            /***/ (function (module) {

                module.exports = __WEBPACK_EXTERNAL_MODULE__87__;

                /***/
            }),

            /***/ 209:
            /***/ (function (module) {

                module.exports = __WEBPACK_EXTERNAL_MODULE__209__;

                /***/
            }),

            /***/ 241:
            /***/ (function (module) {

                module.exports = __WEBPACK_EXTERNAL_MODULE__241__;

                /***/
            }),

            /***/ 356:
            /***/ (function (module) {

                module.exports = __WEBPACK_EXTERNAL_MODULE__356__;

                /***/
            }),

            /***/ 394:
            /***/ (function (module) {

                module.exports = __WEBPACK_EXTERNAL_MODULE__394__;

                /***/
            }),

            /***/ 628:
            /***/ (function (module) {

                module.exports = __WEBPACK_EXTERNAL_MODULE__628__;

                /***/
            }),

            /***/ 964:
            /***/ (function (module) {

                module.exports = __WEBPACK_EXTERNAL_MODULE__964__;

                /***/
            })

            /******/
        });
        /************************************************************************/
        /******/ 	// The module cache
        /******/
        var __webpack_module_cache__ = {};
        /******/
        /******/ 	// The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/ 		// Check if module is in cache
            /******/
            var cachedModule = __webpack_module_cache__[moduleId];
            /******/
            if (cachedModule !== undefined) {
                /******/
                return cachedModule.exports;
                /******/
            }
            /******/ 		// Create a new module (and put it into the cache)
            /******/
            var module = __webpack_module_cache__[moduleId] = {
                /******/ 			// no module.id needed
                /******/ 			// no module.loaded needed
                /******/            exports: {}
                /******/
            };
            /******/
            /******/ 		// Execute the module function
            /******/
            __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
            /******/
            /******/ 		// Return the exports of the module
            /******/
            return module.exports;
            /******/
        }

        /******/
        /************************************************************************/
        var __webpack_exports__ = {};

        ;// ./src/DESC/Descriptions.ts
        var AUTHOR = "\u7A79\u7684\u5154\u5154";
        var VERSION = 1;
        var TIME = "2026-01-29";

// EXTERNAL MODULE: external "process"
        var external_process_ = __webpack_require__(53);
// EXTERNAL MODULE: external "@xjsfl/UI"
        var UI_ = __webpack_require__(628);
// EXTERNAL MODULE: external "@anjsfl/validation"
        var validation_ = __webpack_require__(964);
// EXTERNAL MODULE: external "loglevel"
        var external_loglevel_ = __webpack_require__(356);
        ;// ./src/CHECK/CheckDom.ts


        var result = (0, validation_.CheckDocument)(UI_.UI.dom);
        var doc;
        if (result.isOk()) {
            doc = result.unwrap();
            external_loglevel_.log("文档有效:", doc);
        } else {
            var errorMsg = result.unwrapErr();
            external_loglevel_.error("文档无效:", errorMsg);
            external_process_.exit();
        }


        ;// ./src/CONSTANTS/constants.ts

        var MAX_SAVE_COUNT = 10;
        var ORIGINAL_DOC_URI = doc.pathURI;

// EXTERNAL MODULE: external "fs"
        var external_fs_ = __webpack_require__(87);
// EXTERNAL MODULE: external "url"
        var external_url_ = __webpack_require__(209);
// EXTERNAL MODULE: external "path-browserify"
        var external_path_browserify_ = __webpack_require__(12);
// EXTERNAL MODULE: external "luxon"
        var external_luxon_ = __webpack_require__(32);
        ;// ./src/CONSTANTS/time.ts
        var TIME_FORMAT = "yyyy年MM月dd日HH时mm分ss秒";
        var SAVE_INTERVAL = 3 * 60 * 1000;

        ;// ./src/time/time_data.ts


        AUTHOR;
        var TimeData = (function () {
            function TimeData(flaFile) {
                var baseName = external_path_browserify_.basename(flaFile, ".fla");
                var _a = baseName.split("_"), timestamp = _a[0], fileName = _a[1];
                var dateTime = external_luxon_.DateTime.fromFormat(timestamp, TIME_FORMAT);
                this.flaFile = flaFile;
                this.fileName = fileName;
                this.timeStamp = dateTime.isValid ? dateTime.toISO() : "";
            }

            return TimeData;
        }());


        ;// ./src/delete/delete.ts


        function deleteInvalidFlaFiles(list, saveFolder) {
            list
                .filter(function (item) {
                    return !item.flaFile.endsWith(".fla") ||
                        !/^\d{4}年/.test(item.flaFile);
                })
                .forEach(function (item) {
                    var fullPath = external_path_browserify_.join(saveFolder, item.flaFile);
                    external_fs_.existsSync(fullPath) && external_fs_.unlinkSync(fullPath);
                });
        }

        function deleteOverflowFiles(list, saveFolder) {
            if (list.length <= MAX_SAVE_COUNT)
                return;
            var deleteList = list.slice(0, list.length - MAX_SAVE_COUNT);
            deleteList.forEach(function (item) {
                var fullPath = external_path_browserify_.join(saveFolder, item.flaFile);
                external_fs_.existsSync(fullPath) && external_fs_.unlinkSync(fullPath);
            });
        }

        ;// ./src/clean/clean.ts


        function clean_cleanFolder(saveFolder) {
            var flaFiles = external_fs_.readdirSync(saveFolder);
            var timeDataList = flaFiles.map(function (f) {
                return new TimeData(f);
            });
            timeDataList.sort(function (a, b) {
                return a.timeStamp.localeCompare(b.timeStamp);
            });
            deleteInvalidFlaFiles(timeDataList, saveFolder);
            deleteOverflowFiles(timeDataList, saveFolder);
        }

// EXTERNAL MODULE: external "lodash"
        var external_lodash_ = __webpack_require__(241);
        ;// ./src/CONSTANTS/savefolder.ts


        AUTHOR;

        function getSaveFolder() {
            var drives = getWindowsDrives();
            var rootDrive = external_lodash_.includes(drives, "D:") ? "D:" : "C:";
            var saveFolder = external_path_browserify_.join(rootDrive, "AnJsflScript");
            if (!external_fs_.existsSync(saveFolder)) {
                external_fs_.mkdirSync(saveFolder, {recursive: true});
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
                } catch (_a) {
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
            var now = external_luxon_.DateTime.now().toFormat(TIME_FORMAT);
            var fileName = "".concat(now, "_").concat(baseName, ".fla");
            return external_path_browserify_.join(saveFolder, fileName);
        }

        var save_path_SAVE_PATH = getSavePath(ORIGINAL_DOC_URI, savefolder_SAVE_FOLDER);

        ;// ./src/Main.ts


        AUTHOR;

        function saveDom(targetPath) {
            var url = (0, external_url_.pathToFileURL)(targetPath).href;
            fl.saveDocument(doc, url);
            fl.saveDocument(doc, ORIGINAL_DOC_URI);
        }

        function AutoSave() {
            if (!external_fs_.existsSync(savefolder_SAVE_FOLDER)) {
                external_fs_.mkdirSync(savefolder_SAVE_FOLDER, {recursive: true});
            }
            saveDom(save_path_SAVE_PATH);
            clean_cleanFolder(savefolder_SAVE_FOLDER);
            var nextSaveTime = external_luxon_.DateTime.now().plus({minutes: 3});
            var formattedTime = nextSaveTime.toFormat(TIME_FORMAT);
            console.log("\u4FDD\u5B58\u6210\u529F\uFF0C\u4FDD\u5B58\u5230 ".concat(save_path_SAVE_PATH, ",\u4E0B\u4E00\u6B21\u4FDD\u5B58\u65F6\u95F4 3\u5206\u949F\u540E ").concat(formattedTime));
        }

        function OnlySave() {
            if (!fs.existsSync(SAVE_FOLDER)) {
                fs.mkdirSync(SAVE_FOLDER, {recursive: true});
            }
            saveDom(SAVE_PATH);
            cleanFolder(SAVE_FOLDER);
            console.log("\u4FDD\u5B58\u6210\u529F\uFF0C\u4FDD\u5B58\u5230 ".concat(SAVE_PATH));
        }

// EXTERNAL MODULE: external "@dom/setTimeout"
        var setTimeout_ = __webpack_require__(394);
        ;// ./src/out/index.ts


        AUTHOR;
        if (AUTHOR === AUTHOR) {
            (0, setTimeout_.setTimeout)(AutoSave, 0);
            (0, setTimeout_.setInterval)(AutoSave, SAVE_INTERVAL);
        }

        /******/
        return __webpack_exports__;
        /******/
    })()
        ;
});
;