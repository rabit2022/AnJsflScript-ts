(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("path-browserify"), require("tslib"), require("@xjsfl/XULControl_constructor"), require("url"), require("fs"));
	else if(typeof define === 'function' && define.amd)
		define(["path-browserify", "tslib", "@xjsfl/XULControl_constructor", "url", "fs"], factory);
	else if(typeof exports === 'object')
		exports["@xjsfl/XUL"] = factory(require("path-browserify"), require("tslib"), require("@xjsfl/XULControl_constructor"), require("url"), require("fs"));
	else
		root["@xjsfl/XUL"] = factory(root["path-browserify"], root["tslib"], root["@xjsfl/XULControl_constructor"], root["url"], root["fs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__248__, __WEBPACK_EXTERNAL_MODULE__652__, __WEBPACK_EXTERNAL_MODULE__847__, __WEBPACK_EXTERNAL_MODULE__917__, __WEBPACK_EXTERNAL_MODULE__947__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.parseExpression = parseExpression;
    function parseExpression(expression, delimiter, nestStart, nestEnd) {
        var e_1, _a;
        if (delimiter === void 0) { delimiter = ","; }
        if (nestStart === void 0) { nestStart = "([{"; }
        if (nestEnd === void 0) { nestEnd = "}])"; }
        var result = [];
        var buffer = "";
        var depth = 0;
        var isDelimiter = function (ch) { return delimiter.includes(ch); };
        var isNestStart = function (ch) { return nestStart.includes(ch); };
        var isNestEnd = function (ch) { return nestEnd.includes(ch); };
        try {
            for (var expression_1 = tslib_1.__values(expression), expression_1_1 = expression_1.next(); !expression_1_1.done; expression_1_1 = expression_1.next()) {
                var ch = expression_1_1.value;
                if (isDelimiter(ch) && depth === 0) {
                    if (buffer.trim()) {
                        result.push(buffer.trim());
                    }
                    buffer = "";
                    continue;
                }
                buffer += ch;
                if (isNestStart(ch)) {
                    depth++;
                }
                else if (isNestEnd(ch)) {
                    depth--;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (expression_1_1 && !expression_1_1.done && (_a = expression_1.return)) _a.call(expression_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        if (buffer.trim()) {
            result.push(buffer.trim());
        }
        return result;
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(976), __webpack_require__(847)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, utils_1, XULControl_constructor_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.XULControl = void 0;
    var XULControl = (function () {
        function XULControl(id, type, xul, xml) {
            this.elements = [];
            this.id = id;
            this.type = type;
            this._xul = xul;
            this._xml = xml;
            this.enumerable = !/^button|flash$/.test(type);
            this.compound = /^radiogroup|checkboxgroup|menulist|listbox$/.test(type);
            if (this.compound) {
                this.elements = (0, XULControl_constructor_1.processCompoundElements)(xml, type);
            }
        }
        XULControl.prototype.getXUL = function () {
            return this._xul;
        };
        XULControl.prototype.getXML = function () {
            return this._xml;
        };
        Object.defineProperty(XULControl.prototype, "rawValue", {
            get: function () {
                var settings = this._xul.settings;
                var open = settings && settings.dismiss === undefined;
                var value = open ? fl.xmlui.get(this.id) : settings[this.id];
                return value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(XULControl.prototype, "value", {
            get: function () {
                var e_1, _a;
                var settings = this._xul.settings;
                var open = settings && settings.dismiss === undefined;
                var value = this.rawValue;
                switch (this.type) {
                    case "checkboxgroup":
                        var arr = [];
                        if (this.elements) {
                            try {
                                for (var _b = tslib_1.__values(this.elements), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    var element = _c.value;
                                    var state = open
                                        ? fl.xmlui.get(element.id)
                                        : settings[element.id];
                                    if (state === "true") {
                                        arr.push(element.value);
                                    }
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                        value = arr;
                        break;
                    case "colorchip":
                        value = value.toString().startsWith("0x")
                            ? parseInt(value, 16)
                            : value.substring(1);
                        break;
                    case "popupslider":
                        value = parseInt(value);
                        value = isNaN(value) ? null : value;
                        break;
                    case "textbox":
                    case "checkbox":
                    case "targetlist":
                        value = (0, utils_1.parseValue)(value);
                        if (this.type === "textbox" && typeof value === "string") {
                            value = value.replace(/\r\n/g, "\n");
                        }
                        break;
                    case "choosefile":
                        value = value.replace(/unknown:/, "");
                        break;
                    default:
                        value = (0, utils_1.parseValue)(value);
                }
                return typeof value === "string" && value === "" ? null : value;
            },
            set: function (value) {
                var e_2, _a;
                switch (this.type) {
                    case "checkboxgroup":
                        if (this.elements) {
                            var _loop_1 = function (element) {
                                var state = value.some(function (v) { return String(v) === String(element.value); });
                                fl.xmlui.set(element.id, state);
                            };
                            try {
                                for (var _b = tslib_1.__values(this.elements), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    var element = _c.value;
                                    _loop_1(element);
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                        break;
                    case "choosefile":
                        break;
                    default:
                        fl.xmlui.set(this.id, value);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(XULControl.prototype, "visible", {
            get: function () {
                return fl.xmlui.getVisible(this.id);
            },
            set: function (state) {
                fl.xmlui.setVisible(this.id, state);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(XULControl.prototype, "enabled", {
            get: function () {
                return fl.xmlui.getEnabled(this.id);
            },
            set: function (state) {
                fl.xmlui.setEnabled(this.id, state);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(XULControl.prototype, "values", {
            get: function () {
                if (!this.elements)
                    return [];
                return this.elements.map(function (e) { return e.value; });
            },
            set: function (values) {
                var e_3, _a;
                if (!/^menulist|listbox$/.test(this.type))
                    return;
                var elements = [];
                try {
                    for (var values_1 = tslib_1.__values(values), values_1_1 = values_1.next(); !values_1_1.done; values_1_1 = values_1.next()) {
                        var v = values_1_1.value;
                        if (typeof v === "object") {
                            for (var label in v) {
                                if (Object.prototype.hasOwnProperty.call(v, label)) {
                                    elements.push({ label: label, value: v[label], id: "" });
                                }
                            }
                        }
                        else {
                            elements.push({ label: v, value: v, id: "" });
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                fl.xmlui.setControlItemElements(this.id, elements);
                this.elements = elements;
                this.selectedIndex = 0;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(XULControl.prototype, "selectedIndex", {
            get: function () {
                if (!this.compound)
                    return -1;
                return this.values.indexOf(this.value);
            },
            set: function (index) {
                if (this.compound) {
                    this.value = this.values[index];
                }
            },
            enumerable: false,
            configurable: true
        });
        XULControl.prototype.update = function (settings) {
            var e_4, _a;
            var value = settings[this.id];
            switch (this.type) {
                case "checkboxgroup":
                    if (this.elements) {
                        try {
                            for (var _b = tslib_1.__values(this.elements), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var element = _c.value;
                                var id = element.id;
                                var state = settings[id];
                                fl.xmlui.set(id, state);
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                    }
                    break;
                case "checkbox":
                    fl.xmlui.set(this.id, value || false);
                    break;
                case "choosefile":
                case "colorchip":
                case "popupslider":
                case "textbox":
                case "targetlist":
                default:
                    fl.xmlui.set(this.id, value || "");
            }
        };
        XULControl.prototype.validate = function () {
            var valid = true;
            switch (this.type) {
                case "popupslider":
                    valid = this.value !== null;
                    break;
                case "textbox":
                case "expression":
                case "colorchip":
                    if (String(this.rawValue).trim() === "")
                        valid = false;
                    break;
            }
            return valid ? null : "Field \"".concat(this.id, "\" is required");
        };
        XULControl.prototype.toString = function () {
            return "[object XULControl id=\"".concat(this.id, "\" type=\"").concat(this.type, "\" value=\"").concat(this.value, "\"]");
        };
        return XULControl;
    }());
    exports.XULControl = XULControl;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(947), __webpack_require__(248), __webpack_require__(917)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, fs, path, url_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.ensureUriExists = ensureUriExists;
    fs = tslib_1.__importStar(fs);
    path = tslib_1.__importStar(path);
    function ensureUriExists(uri) {
        var filePath = (0, url_1.fileURLToPath)(uri).replace(/\\/g, "/");
        var dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, '');
        }
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 248:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__248__;

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.xjsfl = void 0;
    exports.xjsfl = {};
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.BASEURI = void 0;
    exports.BASEURI = AnJsflScript.folders["@xjsfl/XUL"];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(248), __webpack_require__(917), __webpack_require__(490)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, path, url_1, uri_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.XjsflFile = void 0;
    path = tslib_1.__importStar(path);
    var XjsflFile = (function () {
        function XjsflFile() {
        }
        XjsflFile.load = function (pathOrName, type) {
            var templatePath;
            switch (type) {
                case "template":
                    templatePath = "assets/templates/";
                    break;
                default:
                    throw new Error("Unsupported type: " + type);
            }
            var xjsflPath = (0, url_1.fileURLToPath)(uri_1.BASEURI);
            var fullTemplate = path.join(xjsflPath, templatePath, pathOrName);
            var uri = (0, url_1.pathToFileURL)(fullTemplate).href;
            var content;
            var ext = path.extname(fullTemplate).slice(1);
            switch (ext) {
                case "xul":
                case "xml":
                    content = FLfile.read(uri);
                    content = content.replace(/<\?.+?>/, "");
                    content = new XML(content);
                    break;
                default:
                    content = FLfile.read(uri);
            }
            return content;
        };
        return XjsflFile;
    }());
    exports.XjsflFile = XjsflFile;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 652:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__652__;

/***/ }),

/***/ 662:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.parseValue = parseValue;
    function parseValue(value, trim) {
        if (trim === void 0) { trim = true; }
        if (value == null)
            return value;
        var str = String(value);
        if (trim)
            str = str.trim();
        if (str === "undefined")
            return undefined;
        if (str === "null" || str === "")
            return null;
        if (/^(true|false)$/i.test(str)) {
            return str.toLowerCase() === "true";
        }
        if (!Number.isNaN(Number(str)) && str !== "") {
            return Number(str);
        }
        if (/^(#|0x)[0-9a-f]{6}$/i.test(str)) {
            return parseInt(str.replace("#", ""), 16);
        }
        if (/^<(\w+)\b[\s\S]*(<\/\1>|\/>)$/.test(value)) {
            var xml = void 0;
            try {
                xml = new XML(value);
            }
            catch (err) {
                try {
                    xml = new XMLList(value);
                }
                catch (err) {
                    xml = value;
                }
            }
            return xml;
        }
        if (/^[\[{]/.test(str)) {
            try {
                return JSON.parse(str);
            }
            catch (_a) {
            }
        }
        var time = Date.parse(str);
        if (!Number.isNaN(time)) {
            return new Date(time);
        }
        return str;
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 720:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(490), __webpack_require__(160)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, uri_1, ensureUriExists_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.XjsflUI = void 0;
    var XjsflUI = (function () {
        function XjsflUI() {
        }
        XjsflUI.show = function (xul) {
            var _a;
            var xulid = fl.xmlui.get("xulid");
            if (xulid === undefined) {
                XjsflUI.dialogs = [];
            }
            xul.id = XjsflUI.dialogs.length;
            var xml = xul.xml
                .prettyPrint()
                .replace(/{xulid}/g, String(xul.id))
                .replace(/xjsfl\.ui\.handleEvent\(0,/g, "xjsfl.ui.handleEvent(".concat(xul.id, ","));
            var uri = xul.uri || "".concat(uri_1.BASEURI, "core/ui/dialog.xul");
            (0, ensureUriExists_1.ensureUriExists)(uri);
            FLfile.write(uri, xml);
            XjsflUI.dialogs.push(xul);
            console.log("Showing XUL dialog \"".concat((_a = xul.title) !== null && _a !== void 0 ? _a : "", "\""));
            var settings = fl.xmlPanel(uri);
            XjsflUI.dialogs.pop();
            return settings;
        };
        XjsflUI.handleEvent = function (xulid, type, id) {
            var dialog = XjsflUI.dialogs[xulid];
            if (dialog) {
                dialog.handleEvent(type, id);
            }
        };
        XjsflUI.getFlashData = function () {
            var xul = XjsflUI.dialogs[XjsflUI.dialogs.length - 1];
            return xul ? xul.flashData : null;
        };
        XjsflUI.setFlashData = function (data) {
            var xul = XjsflUI.dialogs[XjsflUI.dialogs.length - 1];
            if (xul) {
                xul.flashData = data;
            }
        };
        XjsflUI.dialogs = [];
        return XjsflUI;
    }());
    exports.XjsflUI = XjsflUI;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 800:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(413), __webpack_require__(720), __webpack_require__(580), __webpack_require__(490)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, xjsfl_1, ui_1, file_1, uri_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.xjsfl = void 0;
    Object.defineProperty(exports, "xjsfl", ({ enumerable: true, get: function () { return xjsfl_1.xjsfl; } }));
    xjsfl_1.xjsfl.ui = ui_1.XjsflUI;
    xjsfl_1.xjsfl.file = file_1.XjsflFile;
    xjsfl_1.xjsfl.uri = uri_1.BASEURI;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 847:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__847__;

/***/ }),

/***/ 917:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__917__;

/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(138), __webpack_require__(971), __webpack_require__(976), __webpack_require__(800)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, XULControl_1, XULEvent_1, utils_1, xjsfl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.xjsfl = exports.parseExpression = exports.parseValue = exports.XULEvent = exports.XULControl = void 0;
    Object.defineProperty(exports, "XULControl", ({ enumerable: true, get: function () { return XULControl_1.XULControl; } }));
    Object.defineProperty(exports, "XULEvent", ({ enumerable: true, get: function () { return XULEvent_1.XULEvent; } }));
    Object.defineProperty(exports, "parseValue", ({ enumerable: true, get: function () { return utils_1.parseValue; } }));
    Object.defineProperty(exports, "parseExpression", ({ enumerable: true, get: function () { return utils_1.parseExpression; } }));
    Object.defineProperty(exports, "xjsfl", ({ enumerable: true, get: function () { return xjsfl_1.xjsfl; } }));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 947:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__947__;

/***/ }),

/***/ 971:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.XULEvent = void 0;
    var XULEvent = (function () {
        function XULEvent(type, control, xul, xmlui) {
            this.type = type;
            this.control = control;
            this.xul = xul;
            this.xmlui = xmlui;
        }
        XULEvent.prototype.toString = function () {
            var controlId = this.control ? " control=\"".concat(this.control.id, "\"") : "";
            return "[object XULEvent type=\"".concat(this.type, "\"").concat(controlId, " xul=\"").concat(this.xul.id, "\"]");
        };
        return XULEvent;
    }());
    exports.XULEvent = XULEvent;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 976:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(662), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, parseValue_1, parseExpression_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.parseExpression = exports.parseValue = void 0;
    Object.defineProperty(exports, "parseValue", ({ enumerable: true, get: function () { return parseValue_1.parseValue; } }));
    Object.defineProperty(exports, "parseExpression", ({ enumerable: true, get: function () { return parseExpression_1.parseExpression; } }));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(946);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});