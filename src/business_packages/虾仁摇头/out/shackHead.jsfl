require(["process", "fs", "@anjsfl/parser", "oxide.ts", "loglevel"], function (__WEBPACK_EXTERNAL_MODULE__53__, __WEBPACK_EXTERNAL_MODULE__87__, __WEBPACK_EXTERNAL_MODULE__244__, __WEBPACK_EXTERNAL_MODULE__328__, __WEBPACK_EXTERNAL_MODULE__356__) {
    return /******/ (function () { // webpackBootstrap
        /******/
        "use strict";
        /******/
        var __webpack_modules__ = ({

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

            /***/ 244:
            /***/ (function (module) {

                module.exports = __WEBPACK_EXTERNAL_MODULE__244__;

                /***/
            }),

            /***/ 328:
            /***/ (function (module) {

                module.exports = __WEBPACK_EXTERNAL_MODULE__328__;

                /***/
            }),

            /***/ 356:
            /***/ (function (module) {

                module.exports = __WEBPACK_EXTERNAL_MODULE__356__;

                /***/
            }),

            /***/ 440:
            /***/ (function (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


                if (typeof window === 'undefined' && (void 0)) {
                    var fs_1 = __webpack_require__(87);
                    var extensions = ['.xml', '.txt', '.svg', '.html', '.json5', '.md'];
                    for (var _i = 0, extensions_1 = extensions; _i < extensions_1.length; _i++) {
                        var ext = extensions_1[_i];
                        (void 0)[ext] = function (module, filename) {
                            var content = fs_1.readFileSync(filename, 'utf8');
                            module.exports = content;
                        };
                    }
                }


                /***/
            }),

            /***/ 559:
            /***/ (function (module) {

                module.exports = "﻿<?xml version=\"1.0\"?>\r\n<dialog id=\"characterLayoutDialog\" title=\"人物排列设置\" buttons=\"accept,cancel\">\r\n    <grid>\r\n        <!--                <columns>-->\r\n        <!--                    <column/>-->\r\n        <!--                    <column/>-->\r\n        <!--                </columns>-->\r\n        <rows>\r\n            <row>\r\n                <label value=\"摇头力度:\"/>\r\n            </row>\r\n            <row>\r\n                <textbox id=\"shakeIntensity\" value=\"6\"/>\r\n            </row>\r\n            <separator/>\r\n\r\n            <row>\r\n                <label value=\"请选择头部朝向:\"/>\r\n            </row>\r\n            <row>\r\n                <radiogroup id=\"headDirection\" orient=\"horizontal\">\r\n                    <hbox>\r\n                        <spacer flex=\"1\"/> <!-- 添加一个spacer来填充剩余空间 -->\r\n                        <radio id=\"left\" label=\"头部向左\" value=\"-1\" selected=\"true\"/>\r\n                        <radio id=\"right\" label=\"头部向右\" value=\"1\"/>\r\n                    </hbox>\r\n                </radiogroup>\r\n            </row>\r\n            <separator/>\r\n        </rows>\r\n    </grid>\r\n\r\n\r\n</dialog>";

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

// EXTERNAL MODULE: external "loglevel"
        var external_loglevel_ = __webpack_require__(356);
        ;// ./src/DEV/env.ts
        function IsFlash() {
            return typeof window !== 'undefined' && typeof fl !== 'undefined';
        }

        ;// ./src/DEV/init.ts


        if (!IsFlash()) {
            external_loglevel_.setLevel(external_loglevel_.levels.TRACE);
        }

// EXTERNAL MODULE: external "process"
        var external_process_ = __webpack_require__(53);
// EXTERNAL MODULE: external "oxide.ts"
        var external_oxide_ts_ = __webpack_require__(328);
// EXTERNAL MODULE: external "@anjsfl/parser"
        var parser_ = __webpack_require__(244);
        ;// ./src/DESC/Descriptions.ts
        var descriptions = {
            file: "01.虾仁摇头.jsfl",
            "file description": "输出 摇头动作的元件,没有说话时的头部动作",
            selection: "仅一个元件",
            "selection description": "选中头部",
            XMLPanel: true,
            "input parameters": {
                摇头力度: 6,
                头部朝向: null
            },
            detail: "包装元件",
            "detail description": "",
            steps: ["包装元件", "设置变形点", "更改旋转", "设置传统补间"]
        };
        var AUTHOR = "\u7A79\u7684\u5154\u5154";
        var VERSION = 1;
        var TIME = "2026-02-08";

        ;// ./src/DESC/XmlDialogue.ts


        if (!IsFlash()) {
            __webpack_require__(440);
        }
        AUTHOR;
        var DIALOGUE = __webpack_require__(559);

        ;// ./src/CHECK/CheckXML.ts
        var _a;


        function checkXMLPanel() {
            var panel;
            if (IsFlash()) {
                panel = fl.xmlPanelFromString(DIALOGUE);
            } else {
                panel = {headDirection: '-1', shakeIntensity: '6', dismiss: 'accept'};
            }
            if ((panel === null || panel === void 0 ? void 0 : panel.dismiss) === "cancel") {
                return (0, external_oxide_ts_.Err)("取消修改");
            }
            var shakeIntensity_result = (0, parser_.parseNumber)(panel.shakeIntensity, "摇头力度只能输入数字，请重新输入。");
            var shakeIntensity = 0;
            if (shakeIntensity_result.isOk()) {
                shakeIntensity = shakeIntensity_result.unwrap();
            } else {
                var errorMsg = shakeIntensity_result.unwrapErr();
                return (0, external_oxide_ts_.Err)(errorMsg);
            }
            var headDirection_result = (0, parser_.parseNumber)(panel.headDirection, "头部朝向只能输入数字，请重新输入。");
            var headDirection = 0;
            if (headDirection_result.isOk()) {
                headDirection = headDirection_result.unwrap();
            } else {
                var errorMsg = headDirection_result.unwrapErr();
                return (0, external_oxide_ts_.Err)(errorMsg);
            }
            var result = {shakeIntensity: shakeIntensity, headDirection: headDirection};
            return (0, external_oxide_ts_.Ok)(result);
        }

        var config = checkXMLPanel();
        if (!config.isOk()) {
            var errorMsg = config.unwrapErr();
            external_loglevel_.error("checkXMLPanel 错误:", errorMsg);
            external_process_.exit();
        }
        var shakeIntensity = (_a = config.unwrap(), _a.shakeIntensity), headDirection = _a.headDirection;
        AUTHOR;

        ;// ./src/index.ts


        AUTHOR;
        console.log(shakeIntensity, headDirection);

        /******/
        return __webpack_exports__;
        /******/
    })()
        ;
});
;