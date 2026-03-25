(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("fs"), require("fast-xml-parser"), require("tslib"), require("lodash"), require("url"), require("jsonpath-plus"));
	else if(typeof define === 'function' && define.amd)
		define(["fs", "fast-xml-parser", "tslib", "lodash", "url", "jsonpath-plus"], factory);
	else if(typeof exports === 'object')
		exports["@xjsfl/XUL"] = factory(require("fs"), require("fast-xml-parser"), require("tslib"), require("lodash"), require("url"), require("jsonpath-plus"));
	else
		root["@xjsfl/XUL"] = factory(root["fs"], root["fast-xml-parser"], root["tslib"], root["lodash"], root["url"], root["jsonpath-plus"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__2947__, __WEBPACK_EXTERNAL_MODULE__3490__, __WEBPACK_EXTERNAL_MODULE__5652__, __WEBPACK_EXTERNAL_MODULE__6773__, __WEBPACK_EXTERNAL_MODULE__7917__, __WEBPACK_EXTERNAL_MODULE__9584__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(6389)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, BaseControl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Property = void 0;
    var Property = (function (_super) {
        tslib_1.__extends(Property, _super);
        function Property(id) {
            var _this = _super.call(this, "property", id) || this;
            var xml = _this.json.row.property;
            xml["@id"] = id;
            return _this;
        }
        return Property;
    }(BaseControl_1.BaseControl));
    exports.Property = Property;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(7246), __webpack_require__(6925), __webpack_require__(342), __webpack_require__(9190)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, SimpleControls_1, CompoundControls_1, spacer_1, Flash_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Flash = exports.Label = exports.Property = exports.Script = exports.Separator = exports.XML = exports.Spacer = exports.Listbox = exports.Menulist = exports.Checkboxgroup = exports.Radiogroup = exports.Targetlist = exports.PopupSlider = exports.TextBox = exports.Colorchip = exports.Choosefile = exports.Checkbox = exports.Button = void 0;
    Object.defineProperty(exports, "Button", ({ enumerable: true, get: function () { return SimpleControls_1.Button; } }));
    Object.defineProperty(exports, "Checkbox", ({ enumerable: true, get: function () { return SimpleControls_1.Checkbox; } }));
    Object.defineProperty(exports, "Choosefile", ({ enumerable: true, get: function () { return SimpleControls_1.Choosefile; } }));
    Object.defineProperty(exports, "Colorchip", ({ enumerable: true, get: function () { return SimpleControls_1.Colorchip; } }));
    Object.defineProperty(exports, "TextBox", ({ enumerable: true, get: function () { return SimpleControls_1.TextBox; } }));
    Object.defineProperty(exports, "PopupSlider", ({ enumerable: true, get: function () { return SimpleControls_1.PopupSlider; } }));
    Object.defineProperty(exports, "Targetlist", ({ enumerable: true, get: function () { return SimpleControls_1.Targetlist; } }));
    Object.defineProperty(exports, "Radiogroup", ({ enumerable: true, get: function () { return CompoundControls_1.Radiogroup; } }));
    Object.defineProperty(exports, "Checkboxgroup", ({ enumerable: true, get: function () { return CompoundControls_1.Checkboxgroup; } }));
    Object.defineProperty(exports, "Menulist", ({ enumerable: true, get: function () { return CompoundControls_1.Menulist; } }));
    Object.defineProperty(exports, "Listbox", ({ enumerable: true, get: function () { return CompoundControls_1.Listbox; } }));
    Object.defineProperty(exports, "Spacer", ({ enumerable: true, get: function () { return spacer_1.Spacer; } }));
    Object.defineProperty(exports, "XML", ({ enumerable: true, get: function () { return spacer_1.XML; } }));
    Object.defineProperty(exports, "Separator", ({ enumerable: true, get: function () { return spacer_1.Separator; } }));
    Object.defineProperty(exports, "Script", ({ enumerable: true, get: function () { return spacer_1.Script; } }));
    Object.defineProperty(exports, "Property", ({ enumerable: true, get: function () { return spacer_1.Property; } }));
    Object.defineProperty(exports, "Label", ({ enumerable: true, get: function () { return spacer_1.Label; } }));
    Object.defineProperty(exports, "Flash", ({ enumerable: true, get: function () { return Flash_1.Flash; } }));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9835), __webpack_require__(2856), __webpack_require__(4449), __webpack_require__(8223), __webpack_require__(69), __webpack_require__(7496)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, XML_1, Spacer_1, Separator_1, Script_1, Property_1, Label_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Label = exports.Property = exports.Script = exports.Separator = exports.Spacer = exports.XML = void 0;
    Object.defineProperty(exports, "XML", ({ enumerable: true, get: function () { return XML_1.XML; } }));
    Object.defineProperty(exports, "Spacer", ({ enumerable: true, get: function () { return Spacer_1.Spacer; } }));
    Object.defineProperty(exports, "Separator", ({ enumerable: true, get: function () { return Separator_1.Separator; } }));
    Object.defineProperty(exports, "Script", ({ enumerable: true, get: function () { return Script_1.Script; } }));
    Object.defineProperty(exports, "Property", ({ enumerable: true, get: function () { return Property_1.Property; } }));
    Object.defineProperty(exports, "Label", ({ enumerable: true, get: function () { return Label_1.Label; } }));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(6389)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, BaseControl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.BaseSettings = void 0;
    var BaseSettings = (function (_super) {
        tslib_1.__extends(BaseSettings, _super);
        function BaseSettings(type, id) {
            var _this = _super.call(this, type, id) || this;
            _this.settings = {};
            return _this;
        }
        BaseSettings.prototype.setAttributes = function (type, id, label, attributes) {
            var _this = this;
            var row = this.json.row;
            if (row.label) {
                row.label["@value"] = label ? label + ' : ' : ' ';
            }
            var controlKey = Object.keys(row).find(function (k) { return k !== "label" && !k.startsWith("@"); });
            if (!controlKey) {
                throw new Error("Invalid template: ".concat(type));
            }
            var control = row[controlKey];
            control["@id"] = id;
            Object.keys(attributes).forEach(function (key) {
                if (/^(value|checked)$/.test(key)) {
                    _this.settings[id] = attributes[key];
                }
                else {
                    control["@".concat(key)] = attributes[key];
                }
            });
        };
        return BaseSettings;
    }(BaseControl_1.BaseControl));
    exports.BaseSettings = BaseSettings;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 716:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.PROPERTY_CONTROL_NAME = exports.SPACER_CONTROL_NAMES = exports.COMPOUND_CONTROL_NAMES = exports.SIMPLE_CONTROL_NAMES = void 0;
    exports.SIMPLE_CONTROL_NAMES = ["textbox", "colorchip", "popupslider", "checkbox", "button", "targetlist", "choosefile"];
    exports.COMPOUND_CONTROL_NAMES = ["radiogroup", "checkboxgroup", "menulist", "listbox"];
    exports.SPACER_CONTROL_NAMES = ["property", "separator", "spacer", "label", "script"];
    exports.PROPERTY_CONTROL_NAME = "property";
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 791:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(695), __webpack_require__(7868)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, BaseSettings_1, uniqueID_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.SimpleControls = void 0;
    var SimpleControls = (function (_super) {
        tslib_1.__extends(SimpleControls, _super);
        function SimpleControls(type, id, label, attributes) {
            if (label === void 0) { label = ""; }
            if (attributes === void 0) { attributes = {}; }
            var _this = this;
            id = id || uniqueID_1.IdGenerator.generate(label);
            _this = _super.call(this, type, id) || this;
            _this.setAttributes(type, id, label, attributes);
            return _this;
        }
        return SimpleControls;
    }(BaseSettings_1.BaseSettings));
    exports.SimpleControls = SimpleControls;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 1015:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(716), __webpack_require__(4931), __webpack_require__(3755)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, Templates_types_1, XMLSelector_1, ControlFactory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.parseUserXML = parseUserXML;
    function parseUserXML(xml) {
        var e_1, _a, e_2, _b;
        var _c;
        var tempXml = {
            "temp": xml
        };
        var resXml = xml;
        var types = tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(Templates_types_1.SIMPLE_CONTROL_NAMES), false), [
            'listbox', 'menulist',
            'radiogroup',
            'property'
        ], false);
        try {
            for (var types_1 = tslib_1.__values(types), types_1_1 = types_1.next(); !types_1_1.done; types_1_1 = types_1.next()) {
                var type = types_1_1.value;
                var selector = new XMLSelector_1.XMLSelector(tempXml, "$..".concat(type));
                var controls = selector.select();
                if (controls.length > 0) {
                    try {
                        for (var controls_1 = (e_2 = void 0, tslib_1.__values(controls)), controls_1_1 = controls_1.next(); !controls_1_1.done; controls_1_1 = controls_1.next()) {
                            var control = controls_1_1.value;
                            var id = control["@id"].toString();
                            var value = control["@value"].toString();
                            var cleanedAttr = Object.entries(control).reduce(function (acc, _a) {
                                var _b = tslib_1.__read(_a, 2), key = _b[0], val = _b[1];
                                var newKey = key.startsWith('@') ? key.substring(1) : key;
                                acc[newKey] = val;
                                return acc;
                            }, {});
                            var attributes = tslib_1.__assign(tslib_1.__assign({}, cleanedAttr), { value: value });
                            var factory = new ControlFactory_1.ControlFactory(type, id, "", attributes);
                            resXml = (_c = factory.control) === null || _c === void 0 ? void 0 : _c.toJSON();
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (controls_1_1 && !controls_1_1.done && (_b = controls_1.return)) _b.call(controls_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (types_1_1 && !types_1_1.done && (_a = types_1.return)) _a.call(types_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return resXml;
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 1559:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.ChildrenMap = void 0;
    exports.ChildrenMap = {
        "listbox": "row.listbox.listitem",
        "menulist": "row.menulist.menupop.menuitem",
        "radiogroup": "row.radiogroup.radio",
        "checkboxgroup": "row.vbox.checkbox"
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 1750:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * is-glob <https://github.com/jonschlinkert/is-glob>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

var isExtglob = __webpack_require__(9548);

module.exports = function isGlob(str) {
  return typeof str === 'string'
    && (/[*!?{}(|)[\]]/.test(str)
     || isExtglob(str));
};

/***/ }),

/***/ 2152:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(8172)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, CompoundControls_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Listbox = void 0;
    var Listbox = (function (_super) {
        tslib_1.__extends(Listbox, _super);
        function Listbox(id, label, attributes, values) {
            if (attributes === void 0) { attributes = {}; }
            if (values === void 0) { values = {}; }
            var _this = _super.call(this, "listbox", id, label, attributes, values) || this;
            _this.setSettings();
            return _this;
        }
        return Listbox;
    }(CompoundControls_1.CompoundControls));
    exports.Listbox = Listbox;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 2353:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3490)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, fast_xml_parser_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.XMLObject = void 0;
    var XMLObject = (function () {
        function XMLObject(xml) {
            var options = {
                ignoreAttributes: false,
                attributeNamePrefix: "@",
                parseAttributeValue: true,
            };
            var parser = new fast_xml_parser_1.XMLParser(options);
            var jObj = parser.parse(xml);
            this.json = jObj;
        }
        Object.defineProperty(XMLObject.prototype, "JSON", {
            get: function () {
                return this.json;
            },
            set: function (value) {
                this.json = value;
            },
            enumerable: false,
            configurable: true
        });
        XMLObject.prototype.build = function () {
            var builderOptions = {
                ignoreAttributes: false,
                attributeNamePrefix: "@",
            };
            var builder = new fast_xml_parser_1.XMLBuilder(builderOptions);
            var xmlContent = builder.build(this.json);
            return xmlContent;
        };
        return XMLObject;
    }());
    exports.XMLObject = XMLObject;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 2856:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(6389)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, BaseControl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Spacer = void 0;
    var Spacer = (function (_super) {
        tslib_1.__extends(Spacer, _super);
        function Spacer() {
            return _super.call(this, "spacer", "spacer") || this;
        }
        return Spacer;
    }(BaseControl_1.BaseControl));
    exports.Spacer = Spacer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 2947:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__2947__;

/***/ }),

/***/ 3353:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3490)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, fast_xml_parser_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.XMLBuilderr = void 0;
    var XMLBuilderr = (function () {
        function XMLBuilderr(json) {
            this.json = json;
        }
        Object.defineProperty(XMLBuilderr.prototype, "JSON", {
            get: function () {
                return this.json;
            },
            set: function (value) {
                this.json = value;
            },
            enumerable: false,
            configurable: true
        });
        XMLBuilderr.prototype.build = function () {
            var builderOptions = {
                ignoreAttributes: false,
                attributeNamePrefix: "@",
                format: true
            };
            var builder = new fast_xml_parser_1.XMLBuilder(builderOptions);
            var xmlContent = builder.build(this.json);
            return xmlContent;
        };
        return XMLBuilderr;
    }());
    exports.XMLBuilderr = XMLBuilderr;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 3420:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(791)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, SimpleControls_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Button = void 0;
    var Button = (function (_super) {
        tslib_1.__extends(Button, _super);
        function Button(id, label, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var _this = this;
            var newLabel = '';
            _this = _super.call(this, "button", id, newLabel, attributes) || this;
            var JSON = _this.json;
            var checkbox = JSON.row.button;
            checkbox["@label"] = label;
            return _this;
        }
        return Button;
    }(SimpleControls_1.SimpleControls));
    exports.Button = Button;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 3490:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__3490__;

/***/ }),

/***/ 3577:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(2947), __webpack_require__(2353), __webpack_require__(6865)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, fs, XMLObject_1, IsPath_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.XMLLoader = void 0;
    fs = tslib_1.__importStar(fs);
    var XMLLoader = (function (_super) {
        tslib_1.__extends(XMLLoader, _super);
        function XMLLoader(pathOrXML, type) {
            var finalPath = "";
            var xmlStr = "";
            switch (type) {
                case "url":
                    finalPath = (0, IsPath_1.toPath)(pathOrXML);
                    xmlStr = fs.readFileSync(finalPath, 'utf-8');
                    break;
                case "path":
                    finalPath = pathOrXML;
                    xmlStr = fs.readFileSync(finalPath, 'utf-8');
                    break;
                case "xml":
                    xmlStr = pathOrXML;
                    break;
                default:
                    throw new Error("Unknown type '" + type + "'");
            }
            return _super.call(this, xmlStr) || this;
        }
        return XMLLoader;
    }(XMLObject_1.XMLObject));
    exports.XMLLoader = XMLLoader;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 3755:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(716), __webpack_require__(791), __webpack_require__(8172), __webpack_require__(69)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Templates_types_1, SimpleControls_1, CompoundControls_1, Property_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.ControlFactory = void 0;
    var ControlFactory = (function () {
        function ControlFactory(type, id, label, attributes, values) {
            if (label === void 0) { label = ""; }
            if (attributes === void 0) { attributes = {}; }
            if (values === void 0) { values = {}; }
            if (Templates_types_1.SIMPLE_CONTROL_NAMES.includes(type)) {
                this.control = new SimpleControls_1.SimpleControls(type, id, label, attributes);
            }
            else if (Templates_types_1.COMPOUND_CONTROL_NAMES.includes(type)) {
                this.control = new CompoundControls_1.CompoundControls(type, id, label, attributes, values);
            }
            else if (Templates_types_1.PROPERTY_CONTROL_NAME.includes(type)) {
                this.control = new Property_1.Property(id);
            }
        }
        return ControlFactory;
    }());
    exports.ControlFactory = ControlFactory;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 4361:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(8172)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, CompoundControls_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Checkboxgroup = void 0;
    var Checkboxgroup = (function (_super) {
        tslib_1.__extends(Checkboxgroup, _super);
        function Checkboxgroup(id, label, attributes, values) {
            if (attributes === void 0) { attributes = {}; }
            if (values === void 0) { values = {}; }
            return _super.call(this, "checkboxgroup", id, label, attributes, values) || this;
        }
        return Checkboxgroup;
    }(CompoundControls_1.CompoundControls));
    exports.Checkboxgroup = Checkboxgroup;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 4449:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(6389)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, BaseControl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Separator = void 0;
    var Separator = (function (_super) {
        tslib_1.__extends(Separator, _super);
        function Separator() {
            return _super.call(this, "separator", "separator") || this;
        }
        return Separator;
    }(BaseControl_1.BaseControl));
    exports.Separator = Separator;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 4646:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(8172)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, CompoundControls_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Menulist = void 0;
    var Menulist = (function (_super) {
        tslib_1.__extends(Menulist, _super);
        function Menulist(id, label, attributes, values) {
            if (attributes === void 0) { attributes = {}; }
            if (values === void 0) { values = {}; }
            var _this = _super.call(this, "menulist", id, label, attributes, values) || this;
            _this.setSettings();
            return _this;
        }
        return Menulist;
    }(CompoundControls_1.CompoundControls));
    exports.Menulist = Menulist;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 4931:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9584)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, jsonpath_plus_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.XMLSelector = void 0;
    var XMLSelector = (function () {
        function XMLSelector(json, path) {
            this.json = json;
            this.pathsToDelete = (0, jsonpath_plus_1.JSONPath)({
                path: path,
                json: json,
                resultType: 'value'
            });
        }
        XMLSelector.prototype.select = function () {
            return this.pathsToDelete;
        };
        return XMLSelector;
    }());
    exports.XMLSelector = XMLSelector;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 4983:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(791)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, SimpleControls_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Colorchip = void 0;
    var Colorchip = (function (_super) {
        tslib_1.__extends(Colorchip, _super);
        function Colorchip(id, label, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var _this = this;
            normalizeColorValue(attributes);
            _this = _super.call(this, "colorchip", id, label, attributes) || this;
            var JSON = _this.json;
            var colorchip = JSON.row.colorchip;
            return _this;
        }
        return Colorchip;
    }(SimpleControls_1.SimpleControls));
    exports.Colorchip = Colorchip;
    function normalizeColorValue(attributes) {
        var rawValue = attributes.value;
        if (rawValue === null || rawValue === undefined) {
            return;
        }
        var valueStr = String(rawValue);
        if (valueStr.startsWith('0x')) {
            attributes.format = 'hex';
        }
        else if (valueStr.startsWith('#')) {
            attributes.format = 'string';
        }
        else {
            attributes.format = 'string';
            var parsedInt = parseInt(valueStr, 10);
            if (!isNaN(parsedInt)) {
                var hexColor = parsedInt.toString(16).toUpperCase().padStart(6, '0');
                attributes.value = "#".concat(hexColor);
            }
            else {
                attributes.value = "#".concat(valueStr);
            }
        }
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 5652:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__5652__;

/***/ }),

/***/ 6003:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.TEMPLATES = void 0;
    exports.TEMPLATES = {
        "textbox": {
            "row": {
                "label": { "@value": "Textbox:" },
                "textbox": {
                    "@class": "control",
                    "@id": "textbox",
                    "@value": "",
                    "@maxlength": "",
                    "@prompt": "",
                    "@size": "",
                    "@multiline": false,
                    "@width": "",
                    "@flex": 1
                },
                "@template": "textbox"
            }
        },
        "colorchip": {
            "row": {
                "label": { "@value": "Colorchip:" },
                "colorchip": { "@class": "control", "@id": "colorchip", "@color": "", "@format": "hex", "@width": 100 },
                "@template": "colorchip"
            }
        },
        "popupslider": {
            "row": {
                "label": { "@value": "Popupslider:" },
                "popupslider": {
                    "@class": "control",
                    "@id": "popupslider",
                    "@value": "",
                    "@minvalue": 0,
                    "@maxvalue": 100,
                    "@orientation": "horz",
                    "@tabindex": "",
                    "@width": 60,
                    "@flex": ""
                },
                "@template": "popupslider"
            }
        },
        "checkbox": {
            "row": {
                "label": { "@value": "Checkbox:" },
                "checkbox": {
                    "@class": "control",
                    "@id": "checkbox",
                    "@label": "Checkbox",
                    "@checked": true,
                    "@tabindex": "",
                    "@acceskey": ""
                },
                "@template": "checkbox"
            }
        },
        "button": {
            "row": {
                "label": { "@value": "Button:", "@align": "", "@control": "" },
                "button": {
                    "@class": "control",
                    "@id": "button",
                    "@label": "Button",
                    "@width": "",
                    "@flex": 1,
                    "@tabindex": "",
                    "@acceskey": "",
                    "@oncommand": ""
                },
                "@template": "button"
            }
        },
        "choosefile": {
            "row": {
                "label": { "@value": "Choose File:", "@align": "", "@control": "" },
                "choosefile": {
                    "@id": "choosefile",
                    "@literal": false,
                    "@pathtype": "",
                    "@required": "",
                    "@size": "",
                    "@type": "",
                    "@width": "",
                    "@flex": 1,
                    "@tabindex": ""
                },
                "@template": "choosefile"
            }
        },
        "targetlist": {
            "row": {
                "label": { "@value": "Targetlist:" },
                "targetlist": {
                    "@id": "targetlist",
                    "@class": "",
                    "@width": 300,
                    "@height": "",
                    "@flex": 1,
                    "@pathtype": "absolute"
                },
                "property": { "@id": "targetlist" },
                "@template": "targetlist"
            }
        },
        "listbox": {
            "row": {
                "label": { "@value": "Listbox:" },
                "listbox": {
                    "listitem": [],
                    "@class": "control",
                    "@id": "listbox",
                    "@width": "",
                    "@flex": 1,
                    "@rows": 6,
                    "@tabindex": ""
                },
                "@template": "listbox"
            }
        },
        "menulist": {
            "row": {
                "label": { "@value": "Menu List:" },
                "menulist": {
                    "menupop": {
                        "menuitem": [], "@class": "control", "@id": "menupop"
                    },
                    "@class": "control",
                    "@id": "menulist",
                    "@editable": "",
                    "@width": "",
                    "@flex": 1,
                    "@tabindex": "",
                    "@oncreate": "",
                    "@onsetfocus": ""
                },
                "@template": "menulist"
            }
        },
        "radiogroup": {
            "row": {
                "label": { "@value": "Radio Group:" },
                "radiogroup": {
                    "radio": [], "@class": "control", "@id": "radiogroup", "@tabindex": "", "@groupbox": true
                },
                "@template": "radiogroup"
            }
        },
        "checkboxgroup": {
            "row": {
                "label": { "@value": "Checkbox Group:" },
                "vbox": {
                    "checkbox": [], "@class": "control", "@groupbox": true
                },
                "@template": "checkboxgroup"
            }
        },
        "separator": { row: { separator: '', '@template': 'separator' } },
        "spacer": { "row": { "spacer": "", "label": "", "@template": "spacer" } },
        "property": { "row": { "property": { "@template": "property", "@id": "property" } } },
        "label": { "row": { "label": { "@value": "Label", "@align": "", "@width": 100 }, "@template": "label" } },
        "script": {
            "row": {
                "script": "function EMPTY() {}"
            }
        },
        "flash": {
            "element": {
                "flash": {
                    "@class": "control",
                    "@id": "flash",
                    "@src": "assets/flash.swf",
                    "@width": 250,
                    "@height": 100
                }, "@template": "flash"
            },
            "row": []
        },
        "custom": {}
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 6045:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(791)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, SimpleControls_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Targetlist = void 0;
    var Targetlist = (function (_super) {
        tslib_1.__extends(Targetlist, _super);
        function Targetlist(id, label, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var _this = _super.call(this, "targetlist", id, label, attributes) || this;
            var property = _this.json.row
                .property;
            property["@id"] = id;
            return _this;
        }
        return Targetlist;
    }(SimpleControls_1.SimpleControls));
    exports.Targetlist = Targetlist;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 6389:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(6003), __webpack_require__(7457), __webpack_require__(3353), __webpack_require__(7868)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Templates_1, deepCopy_1, XMLBuilderr_1, uniqueID_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.BaseControl = void 0;
    var BaseControl = (function () {
        function BaseControl(type, id) {
            this.id = uniqueID_1.IdGenerator.generate(id);
            this.type = type;
            var template = Templates_1.TEMPLATES[type];
            if (!template) {
                throw new Error("Template not found: ".concat(type));
            }
            var copy = deepCopy_1.Copy.deepCopy(template);
            this.json = copy;
        }
        BaseControl.prototype.toJSON = function () {
            return this.json;
        };
        BaseControl.prototype.toXMLString = function () {
            var builder = new XMLBuilderr_1.XMLBuilderr(this.json);
            return builder.build();
        };
        return BaseControl;
    }());
    exports.BaseControl = BaseControl;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 6438:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(791)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, SimpleControls_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.TextBox = void 0;
    var TextBox = (function (_super) {
        tslib_1.__extends(TextBox, _super);
        function TextBox(id, label, attributes) {
            if (attributes === void 0) { attributes = {}; }
            return _super.call(this, "textbox", id, label, attributes) || this;
        }
        return TextBox;
    }(SimpleControls_1.SimpleControls));
    exports.TextBox = TextBox;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 6773:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__6773__;

/***/ }),

/***/ 6865:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(8017), __webpack_require__(7917), __webpack_require__(2947), __webpack_require__(7521)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, IsURL_1, url_1, fs, isValidPath) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.isValidPath = void 0;
    exports.isExistingPath = isExistingPath;
    exports.toPath = toPath;
    fs = tslib_1.__importStar(fs);
    function isExistingPath(pathOrUri) {
        var target = toPath(pathOrUri);
        return fs.existsSync(target);
    }
    function toPath(pathOrUri) {
        var target = pathOrUri;
        if ((0, IsURL_1.isFileUri)(pathOrUri)) {
            target = (0, url_1.fileURLToPath)(pathOrUri);
        }
        return target;
    }
    exports.isValidPath = isValidPath;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 6925:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9491), __webpack_require__(4361), __webpack_require__(4646), __webpack_require__(2152)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Radiogroup_1, Checkboxgroup_1, Menulist_1, Listbox_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Listbox = exports.Menulist = exports.Checkboxgroup = exports.Radiogroup = void 0;
    Object.defineProperty(exports, "Radiogroup", ({ enumerable: true, get: function () { return Radiogroup_1.Radiogroup; } }));
    Object.defineProperty(exports, "Checkboxgroup", ({ enumerable: true, get: function () { return Checkboxgroup_1.Checkboxgroup; } }));
    Object.defineProperty(exports, "Menulist", ({ enumerable: true, get: function () { return Menulist_1.Menulist; } }));
    Object.defineProperty(exports, "Listbox", ({ enumerable: true, get: function () { return Listbox_1.Listbox; } }));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 7246:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3420), __webpack_require__(9525), __webpack_require__(8043), __webpack_require__(4983), __webpack_require__(8097), __webpack_require__(6045), __webpack_require__(6438)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Button_1, Checkbox_1, Choosefile_1, Colorchip_1, PopupSlider_1, Targetlist_1, TextBox_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.TextBox = exports.Targetlist = exports.PopupSlider = exports.Colorchip = exports.Choosefile = exports.Checkbox = exports.Button = void 0;
    Object.defineProperty(exports, "Button", ({ enumerable: true, get: function () { return Button_1.Button; } }));
    Object.defineProperty(exports, "Checkbox", ({ enumerable: true, get: function () { return Checkbox_1.Checkbox; } }));
    Object.defineProperty(exports, "Choosefile", ({ enumerable: true, get: function () { return Choosefile_1.Choosefile; } }));
    Object.defineProperty(exports, "Colorchip", ({ enumerable: true, get: function () { return Colorchip_1.Colorchip; } }));
    Object.defineProperty(exports, "PopupSlider", ({ enumerable: true, get: function () { return PopupSlider_1.PopupSlider; } }));
    Object.defineProperty(exports, "Targetlist", ({ enumerable: true, get: function () { return Targetlist_1.Targetlist; } }));
    Object.defineProperty(exports, "TextBox", ({ enumerable: true, get: function () { return TextBox_1.TextBox; } }));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 7314:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/*!
 * is-invalid-path <https://github.com/jonschlinkert/is-invalid-path>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



var isGlob = __webpack_require__(1750);
var re = /[‘“!#$%&+^<=>`]/;

module.exports = function (str) {
  return (typeof str !== 'string') || isGlob(str) || re.test(str);
};


/***/ }),

/***/ 7457:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Copy = void 0;
    var Copy = (function () {
        function Copy() {
        }
        Copy.deepCopy = function (obj) {
            return JSON.parse(JSON.stringify(obj));
        };
        return Copy;
    }());
    exports.Copy = Copy;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 7496:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(6389), __webpack_require__(9539)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, BaseControl_1, COLUMNS_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Label = void 0;
    var Label = (function (_super) {
        tslib_1.__extends(Label, _super);
        function Label(label, id) {
            var _this = _super.call(this, "label", id) || this;
            var sum = COLUMNS_1.COLUMNS.reduce(function (a, b) { return a + b; }, 0);
            var json = _this.json;
            var xml = json.row;
            xml.label["@width"] = sum;
            xml.label["@value"] = label;
            return _this;
        }
        return Label;
    }(BaseControl_1.BaseControl));
    exports.Label = Label;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 7521:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/*!
 * is-valid-path <https://github.com/jonschlinkert/is-valid-path>
 *
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */



var isInvalidPath = __webpack_require__(7314);

module.exports = function (str) {
  return isInvalidPath(str) === false;
};


/***/ }),

/***/ 7868:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.IdGenerator = void 0;
    var IdGenerator = (function () {
        function IdGenerator() {
        }
        IdGenerator.reset = function () {
            IdGenerator.idCountMap = Object.create(null);
        };
        IdGenerator.generate = function (input) {
            if (!input) {
                return IdGenerator.resolveUnique('id');
            }
            var baseId = input
                .split(IdGenerator.SPLIT_REGEX)[0]
                .toLowerCase()
                .replace(IdGenerator.CLEAN_REGEX, '');
            if (!baseId) {
                baseId = 'id';
            }
            return IdGenerator.resolveUnique(baseId);
        };
        IdGenerator.resolveUnique = function (baseId) {
            var map = IdGenerator.idCountMap;
            var currentCount = map[baseId] || 0;
            if (currentCount === 0) {
                map[baseId] = 1;
                return baseId;
            }
            else {
                map[baseId] = currentCount + 1;
                return "".concat(baseId).concat(currentCount);
            }
        };
        IdGenerator.SPLIT_REGEX = /[^\d\w ]/;
        IdGenerator.CLEAN_REGEX = /[^a-z0-9]/g;
        IdGenerator.idCountMap = Object.create(null);
        return IdGenerator;
    }());
    exports.IdGenerator = IdGenerator;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 7917:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__7917__;

/***/ }),

/***/ 7946:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(269)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, Controls_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    tslib_1.__exportStar(Controls_1, exports);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 8017:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(7917)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, url_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.isFileUri = isFileUri;
    function isFileUri(str) {
        if (!str || typeof str !== 'string')
            return false;
        try {
            var url = new url_1.URL(str.trim());
            return url.protocol === 'file:';
        }
        catch (e) {
            return false;
        }
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 8043:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(791)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, SimpleControls_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Choosefile = void 0;
    var Choosefile = (function (_super) {
        tslib_1.__extends(Choosefile, _super);
        function Choosefile(id, label, attributes) {
            if (attributes === void 0) { attributes = {}; }
            return _super.call(this, "choosefile", id, label, attributes) || this;
        }
        return Choosefile;
    }(SimpleControls_1.SimpleControls));
    exports.Choosefile = Choosefile;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 8097:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(791)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, SimpleControls_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.PopupSlider = void 0;
    var PopupSlider = (function (_super) {
        tslib_1.__extends(PopupSlider, _super);
        function PopupSlider(id, label, values, attributes) {
            if (values === void 0) { values = [0, 0, 100]; }
            if (attributes === void 0) { attributes = {}; }
            var _this = _super.call(this, "popupslider", id, label, attributes) || this;
            var JSON = _this.json;
            var slider = JSON.row.popupslider;
            slider["@value"] = values[0];
            slider["@minvalue"] = values[1];
            slider["@maxvalue"] = values[2];
            return _this;
        }
        return PopupSlider;
    }(SimpleControls_1.SimpleControls));
    exports.PopupSlider = PopupSlider;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 8172:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(9584), __webpack_require__(1559), __webpack_require__(6773), __webpack_require__(695), __webpack_require__(7868)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, jsonpath_plus_1, CompoundControls_types_1, _, BaseSettings_1, uniqueID_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.CompoundControls = void 0;
    _ = tslib_1.__importStar(_);
    var CompoundControls = (function (_super) {
        tslib_1.__extends(CompoundControls, _super);
        function CompoundControls(type, id, label, attributes, values) {
            if (attributes === void 0) { attributes = {}; }
            if (values === void 0) { values = {}; }
            var _this = this;
            id = id || uniqueID_1.IdGenerator.generate(label);
            _this = _super.call(this, type, id) || this;
            _this.type = type;
            _this.addChildren(id, values);
            _this.setAttributes(type, id, label, attributes);
            return _this;
        }
        CompoundControls.prototype.getChildrenContainer = function () {
            var children = CompoundControls_types_1.ChildrenMap[this.type];
            return _.get(this.json, children);
        };
        CompoundControls.prototype.addChildren = function (id, values, selected) {
            if (values === void 0) { values = {}; }
            var container = this.getChildrenContainer();
            Object.entries(values).forEach(function (_a, i) {
                var _b = tslib_1.__read(_a, 2), name = _b[0], value = _b[1];
                var item = {
                    "@value": "",
                    "@label": "",
                };
                var subId;
                if (typeof value === "object" && value !== null && "label" in value) {
                    item["@value"] = value.value;
                    item["@label"] = value.label;
                    subId = value.value;
                }
                else if (Array.isArray(values)) {
                    item["@value"] = value;
                    item["@label"] = value;
                    subId = value;
                }
                else {
                    item["@value"] = value;
                    item["@label"] = name;
                    subId = value;
                }
                if (id) {
                    item["@id"] = "".concat(id, "[").concat(subId, "]");
                }
                if ((selected === undefined && i === 0) || value === selected) {
                    item["@selected"] = true;
                }
                else {
                    delete item["@selected"];
                }
                container.push(item);
            });
        };
        CompoundControls.prototype.setSettings = function () {
            var selected = (0, jsonpath_plus_1.JSONPath)({
                path: "$..*[?(@['@selected'] == true || @['@selected'] == 'true')]",
                json: this.json,
                resultType: "value",
            });
            if (selected.length > 0) {
                var onlyOne = selected[0];
                this.settings[this.id] = onlyOne["@value"];
            }
        };
        return CompoundControls;
    }(BaseSettings_1.BaseSettings));
    exports.CompoundControls = CompoundControls;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 8223:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(6389)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, BaseControl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Script = void 0;
    var Script = (function (_super) {
        tslib_1.__extends(Script, _super);
        function Script(script) {
            var _this = _super.call(this, "script", "script") || this;
            var source = script.toString();
            var json = _this.json;
            json.row.script = source;
            return _this;
        }
        return Script;
    }(BaseControl_1.BaseControl));
    exports.Script = Script;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 9190:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(69), __webpack_require__(6389)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, Property_1, BaseControl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Flash = void 0;
    var Flash = (function (_super) {
        tslib_1.__extends(Flash, _super);
        function Flash(relativeSwf, width, height, properties) {
            var _this = _super.call(this, "flash", "flash") || this;
            var json = _this.json;
            var flash = json.element.flash;
            flash["@src"] = relativeSwf;
            var attributes = { width: width, height: height };
            _this.setAttributes("flash", _this.id, "", attributes);
            var container = json.row;
            for (var property in attributes) {
                var control = new Property_1.Property(property);
                container.push(control.toJSON().row);
            }
            return _this;
        }
        Flash.prototype.setFlashData = function (data) {
            this.flashData = data;
            return this;
        };
        Flash.prototype.setAttributes = function (type, id, label, attributes) {
            var _this = this;
            var row = this.json.element;
            var controlKey = Object.keys(row).find(function (k) { return k !== "label" && !k.startsWith("@"); });
            if (!controlKey) {
                throw new Error("Invalid template: ".concat(type));
            }
            var control = row[controlKey];
            control["@id"] = id;
            Object.keys(attributes).forEach(function (key) {
                if (/^(value|checked)$/.test(key)) {
                    _this.settings[id] = attributes[key];
                }
                else {
                    control["@".concat(key)] = attributes[key];
                }
            });
        };
        return Flash;
    }(BaseControl_1.BaseControl));
    exports.Flash = Flash;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 9491:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(8172)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, CompoundControls_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Radiogroup = void 0;
    var Radiogroup = (function (_super) {
        tslib_1.__extends(Radiogroup, _super);
        function Radiogroup(id, label, attributes, values) {
            if (attributes === void 0) { attributes = {}; }
            if (values === void 0) { values = {}; }
            var _this = _super.call(this, "radiogroup", id, label, attributes, values) || this;
            _this.setSettings();
            return _this;
        }
        return Radiogroup;
    }(CompoundControls_1.CompoundControls));
    exports.Radiogroup = Radiogroup;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 9525:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(791)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, SimpleControls_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Checkbox = void 0;
    var Checkbox = (function (_super) {
        tslib_1.__extends(Checkbox, _super);
        function Checkbox(id, label, attributes) {
            if (attributes === void 0) { attributes = {}; }
            var _this = this;
            var newLabel = '';
            _this = _super.call(this, "checkbox", id, newLabel, attributes) || this;
            var JSON = _this.json;
            var checkbox = JSON.row.checkbox;
            checkbox["@label"] = label;
            return _this;
        }
        return Checkbox;
    }(SimpleControls_1.SimpleControls));
    exports.Checkbox = Checkbox;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 9539:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.COLUMNS = void 0;
    exports.COLUMNS = [100, 180];
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 9548:
/***/ (function(module) {

/*!
 * is-extglob <https://github.com/jonschlinkert/is-extglob>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

module.exports = function isExtglob(str) {
  return typeof str === 'string'
    && /[@?!+*]\(/.test(str);
};


/***/ }),

/***/ 9584:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__9584__;

/***/ }),

/***/ 9835:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5652), __webpack_require__(3577), __webpack_require__(1015), __webpack_require__(6389)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, XMLLoader_1, parseUserXML_1, BaseControl_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.XML = void 0;
    var XML = (function (_super) {
        tslib_1.__extends(XML, _super);
        function XML(xml) {
            var _this = _super.call(this, "custom", "xml") || this;
            var loader = new XMLLoader_1.XMLLoader(xml, "xml");
            _this.json = (0, parseUserXML_1.parseUserXML)(loader.JSON);
            return _this;
        }
        return XML;
    }(BaseControl_1.BaseControl));
    exports.XML = XML;
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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(7946);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});