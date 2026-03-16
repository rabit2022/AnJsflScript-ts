(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("path-browserify"), require("tslib"), require("lodash"), require("url"));
	else if(typeof define === 'function' && define.amd)
		define(["path-browserify", "tslib", "lodash", "url"], factory);
	else if(typeof exports === 'object')
		exports["@xjsfl/Context"] = factory(require("path-browserify"), require("tslib"), require("lodash"), require("url"));
	else
		root["@xjsfl/Context"] = factory(root["path-browserify"], root["tslib"], root["lodash"], root["url"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__248__, __WEBPACK_EXTERNAL_MODULE__652__, __WEBPACK_EXTERNAL_MODULE__773__, __WEBPACK_EXTERNAL_MODULE__917__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.SelectionMode = void 0;
    var SelectionMode;
    (function (SelectionMode) {
        SelectionMode["Add"] = "add";
        SelectionMode["Replace"] = "replace";
        SelectionMode["Clear"] = "clear";
    })(SelectionMode || (exports.SelectionMode = SelectionMode = {}));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(683)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, from_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.from = void 0;
    Object.defineProperty(exports, "from", ({ enumerable: true, get: function () { return from_1.from; } }));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(168), __webpack_require__(419), __webpack_require__(523), __webpack_require__(507), __webpack_require__(90), __webpack_require__(174)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, isPathOrUrl_1, item_1, layer_1, frame_1, element_1, dom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.parseContextPath = parseContextPath;
    function parseContextPath(input) {
        var result = {};
        var restText = input.trim();
        if (!/[>~@:]/.test(restText)) {
            if ((0, isPathOrUrl_1.isPathOrUrl)(restText)) {
                result.dom = (0, dom_1.parseDom)(restText);
            }
            else {
                result.element = {
                    type: "name",
                    value: restText
                };
            }
            return result;
        }
        var domMatch = restText.match(/^[^>~@]+/);
        if (domMatch) {
            result.dom = (0, dom_1.parseDom)(domMatch[0]);
            restText = restText.replace(domMatch[0], "");
        }
        var itemMatch = restText.match(/>([^~@:]+)/);
        if (itemMatch) {
            result.item = (0, item_1.parseItem)(itemMatch[1]);
            restText = restText.replace(itemMatch[1], "");
        }
        var layerMatch = restText.match(/~([^@:]+)/);
        if (layerMatch) {
            result.layer = (0, layer_1.parseLayer)(layerMatch[1]);
            restText = restText.replace(layerMatch[1], "");
        }
        var frameMatch = restText.match(/@([^:]+)/);
        if (frameMatch) {
            result.frame = (0, frame_1.parseFrame)(frameMatch[1]);
            restText = restText.replace(frameMatch[1], "");
        }
        var elementMatch = restText.match(/:([^>~@]+)/);
        if (elementMatch) {
            result.element = (0, element_1.parseElement)(elementMatch[1]);
            restText = restText.replace(elementMatch[1], "");
        }
        return result;
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.parseElement = parseElement;
    function parseElement(v) {
        v = v.trim();
        if (/^\d+$/.test(v)) {
            return {
                type: "index",
                value: Number(v)
            };
        }
        return {
            type: "name",
            value: v
        };
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.isUrl = isUrl;
    exports.isPathOrUrl = isPathOrUrl;
    function isUrl(str) {
        return /^[a-zA-Z]+:\/\//.test(str);
    }
    function isWindowsPath(str) {
        return /^[a-zA-Z]:[\\/]/.test(str);
    }
    function isUnixPath(str) {
        return /^\//.test(str);
    }
    function isFile(str) {
        return /\.[a-zA-Z0-9]+$/.test(str);
    }
    function isPathOrUrl(str) {
        return isUrl(str) || isWindowsPath(str) || isUnixPath(str) || isFile(str);
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(168), __webpack_require__(248), __webpack_require__(917)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, isPathOrUrl_1, path, url_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.parseDom = parseDom;
    path = tslib_1.__importStar(path);
    function parseDom(v) {
        v = v.trim();
        if (v) {
            if (!(0, isPathOrUrl_1.isUrl)(v)) {
                var url = v;
                if (!path.isAbsolute(v)) {
                    url = path.resolve(v);
                }
                url = (0, url_1.pathToFileURL)(v).href;
                return {
                    type: "url",
                    value: url
                };
            }
        }
        return {
            type: "name",
            value: v
        };
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(33), __webpack_require__(51), __webpack_require__(773)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, select_types_1, factory_1, _) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Context = void 0;
    _ = tslib_1.__importStar(_);
    var Context = (function () {
        function Context(dom, timeline, layer, frame, element) {
            this.dom = null;
            this.item = null;
            this.timeline = null;
            this.layer = null;
            this.frame = null;
            this.element = null;
            this.context = "dom";
            if (dom)
                this.setDOM(dom);
            if (this.dom && timeline)
                this.setTimeline(timeline);
            if (this.timeline && layer)
                this.setLayer(layer);
            if (this.layer && this.layer.layerType !== "folder")
                this.setFrame(frame);
            if (this.frame && element)
                this.setElement(element);
        }
        Context.create = function (dom, timeline, layer, frame, element) {
            if (dom === void 0) { dom = true; }
            if (timeline === void 0) { timeline = true; }
            if (layer === void 0) { layer = true; }
            if (frame === void 0) { frame = true; }
            if (element === void 0) { element = true; }
            var context = new Context(dom, timeline, layer, frame, element);
            if (context.dom) {
                context.dom.livePreview = true;
            }
            return context;
        };
        Object.defineProperty(Context.prototype, "keyframes", {
            get: function () {
                if (!this.layer)
                    return [];
                var keyframes = [];
                for (var i = 0; i < this.layer.frameCount; i++) {
                    var frame = this.layer.frames[i];
                    if (frame.startFrame === i) {
                        keyframes.push(frame);
                    }
                }
                return keyframes;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Context.prototype, "layerIndex", {
            get: function () {
                if (!this.timeline || !this.layer)
                    return -1;
                var name = this.layer.name;
                this.layer.name = "__Context__";
                var index = this.timeline.findLayerIndex(this.layer.name)[0];
                this.layer.name = name;
                return index;
            },
            enumerable: false,
            configurable: true
        });
        Context.prototype.setDOM = function (value) {
            if (value === void 0) { value = true; }
            var dom;
            if (value === true) {
                dom = fl.getDocumentDOM();
            }
            else if (value instanceof Context) {
                dom = value.dom;
            }
            else if (typeof value === "number") {
                dom = fl.documents[value];
            }
            else if (typeof value === "string") {
                dom = fl.documents.find(function (d) { return d.name === value; });
            }
            else {
                dom = value;
            }
            if (dom) {
                if (this.dom !== dom) {
                    this.item = null;
                    this.timeline = null;
                    this.layer = null;
                    this.frame = null;
                }
                this.dom = dom;
                this.context = "dom";
            }
            return this;
        };
        Context.prototype.setTimeline = function (value) {
            if (value === void 0) { value = true; }
            if (!this.dom)
                this.setDOM(true);
            var timeline;
            var item;
            if (value === true) {
                timeline = this.dom.getTimeline();
            }
            else if (value instanceof Timeline) {
                timeline = value;
            }
            else if (value instanceof SymbolItem) {
                item = value;
                timeline = value.timeline;
            }
            else if (value instanceof SymbolInstance) {
                item = value.libraryItem;
                timeline = item.timeline;
            }
            else if (value instanceof Context) {
                timeline = value.timeline;
                item = value.item;
            }
            if (timeline) {
                if (this.timeline !== timeline) {
                    this.layer = null;
                    this.frame = null;
                }
                this.timeline = timeline;
                this.item = item || null;
                this.context = "timeline";
            }
            return this;
        };
        Context.prototype.setLayer = function (value) {
            if (value === void 0) { value = true; }
            if (!this.timeline)
                this.setTimeline(true);
            var layer;
            if (value === true) {
                layer = this.timeline.layers[this.timeline.currentLayer];
            }
            else if (typeof value === "number") {
                layer = this.timeline.layers[value];
            }
            else if (typeof value === "string") {
                var indexs = this.timeline.findLayerIndex(value);
                if (!indexs || indexs.length === 0) {
                    throw new ReferenceError("ReferenceError: \"".concat(value, "\" is not a valid layer in Context.setLayer()"));
                }
                var index = indexs[0];
                layer = this.timeline.layers[index];
            }
            else if (value instanceof Context) {
                layer = value.layer;
            }
            else {
                layer = value;
            }
            if (layer) {
                if (this.layer !== layer)
                    this.frame = null;
                this.layer = layer;
                this.context = "layer";
            }
            return this;
        };
        Context.prototype.setFrame = function (value) {
            if (value === void 0) { value = true; }
            if (!this.layer)
                throw new Error("Context has no layer");
            var frame;
            if (typeof value === "number") {
                frame = this.layer.frames[value];
            }
            else if (value === true) {
                frame = this.layer.frames[this.timeline.currentFrame];
            }
            else if (value instanceof Frame) {
                frame = value;
            }
            else if (value instanceof RegExp) {
                var index = Number(value.source);
                frame = this.keyframes[index];
            }
            else if (value instanceof Context) {
                frame = value.frame;
            }
            else if (typeof value === "string") {
                var layers = this.timeline.layers;
                for (var _i = 0, layers_1 = layers; _i < layers_1.length; _i++) {
                    var _layer = layers_1[_i];
                    for (var _a = 0, _b = _layer.frames; _a < _b.length; _a++) {
                        var _frame = _b[_a];
                        if (_frame.name === value) {
                            this.layer = _layer;
                            frame = _frame;
                            break;
                        }
                    }
                    if (frame) {
                        break;
                    }
                }
            }
            if (frame) {
                this.frame = frame;
                this.context = "frame";
            }
            return this;
        };
        Context.prototype.setKeyframe = function (keyframeIndex, layer) {
            if (layer) {
                this.setLayer(layer);
            }
            if (!this.timeline) {
                throw new ReferenceError("ReferenceError: Cannot set Keyframe as Context has no Timeline");
            }
            var keyframe = this.keyframes[keyframeIndex];
            if (keyframe) {
                this.setFrame(keyframe);
            }
            return this;
        };
        Context.prototype.setElement = function (value) {
            if (!this.frame)
                throw new Error("Context has no frame");
            if (value === true) {
                this.element = this.frame.elements[0];
            }
            else if (typeof value === "number") {
                this.element = this.frame.elements[value];
            }
            else if (typeof value === "string") {
                this.element = this.frame.elements.find(function (e) { return e.name === value; });
            }
            else if (value instanceof Context) {
                this.element = value.element;
            }
            else {
                this.element = value;
            }
            if (this.element)
                this.context = "element";
            return this;
        };
        Context.prototype.update = function (dom, timeline, layer, frame) {
            if (dom !== false)
                this.setDOM(true);
            if (timeline !== false)
                this.setTimeline(true);
            if (layer !== false)
                this.setLayer(true);
            if (frame !== false)
                this.setFrame(true);
        };
        Context.prototype.goto = function () {
            var _a, _b;
            var dom = fl.getDocumentDOM();
            var timeline = dom.getTimeline();
            if (dom !== this.dom && this.dom) {
                fl.setActiveWindow(this.dom);
            }
            if (this.timeline === undefined || this.timeline === null)
                return this;
            if (timeline !== this.timeline) {
                if (this.item) {
                    (_a = this.dom) === null || _a === void 0 ? void 0 : _a.library.editItem(this.item.name);
                }
                else {
                    (_b = this.dom) === null || _b === void 0 ? void 0 : _b.editScene(0);
                }
            }
            if (this.layer === undefined || this.layer === null)
                return this;
            this.timeline.currentLayer = this.layerIndex;
            if (this.frame === undefined || this.frame === null)
                return this;
            this.timeline.currentFrame = this.frame.startFrame;
            return this;
        };
        Context.prototype.select = function (mode) {
            if (mode === void 0) { mode = select_types_1.SelectionMode.Replace; }
            this.goto();
            switch (this.context) {
                case "layer":
                    this.selectLayer(mode);
                    break;
                case "frame":
                case "keyframe":
                    this.selectFrame(mode);
                    break;
                case "element":
                    this.selectElement(mode);
                    break;
            }
            return this;
        };
        Context.prototype.selectLayer = function (mode) {
            if (!this.timeline || !this.layer)
                return this;
            var timeline = this.timeline;
            var currentFrame = timeline.currentFrame;
            var layerIndex = this.layerIndex;
            switch (mode) {
                case select_types_1.SelectionMode.Clear: {
                    var currentLayer = timeline.currentLayer;
                    timeline.currentLayer = 0;
                    timeline.setSelectedFrames(0, 0);
                    if (timeline.getSelectedFrames().length > 0) {
                        timeline.setSelectedFrames(0, 0, false);
                    }
                    timeline.currentLayer = currentLayer;
                    break;
                }
                case select_types_1.SelectionMode.Add: {
                    if (layerIndex !== -1) {
                        var selectedLayers = timeline.getSelectedLayers();
                        if (!_.includes(selectedLayers, layerIndex)) {
                            timeline.setSelectedLayers(layerIndex, false);
                        }
                    }
                    break;
                }
                case select_types_1.SelectionMode.Replace: {
                    if (layerIndex !== -1) {
                        timeline.setSelectedLayers(layerIndex, true);
                    }
                    break;
                }
            }
            timeline.currentFrame = currentFrame;
            return this;
        };
        Context.prototype.selectFrame = function (mode) {
            var _a;
            if (!this.timeline || !this.layer || !this.frame)
                return this;
            var timeline = this.timeline;
            switch (mode) {
                case select_types_1.SelectionMode.Clear:
                    timeline.setSelectedFrames(0, 0);
                    break;
                case select_types_1.SelectionMode.Add:
                case select_types_1.SelectionMode.Replace: {
                    var layerIndex = Number((_a = timeline.findLayerIndex(this.layer.name)) !== null && _a !== void 0 ? _a : -1);
                    if (layerIndex !== -1) {
                        timeline.currentLayer = layerIndex;
                        var replace = mode === select_types_1.SelectionMode.Replace;
                        timeline.setSelectedFrames(this.frame.startFrame, this.frame.startFrame + this.frame.duration, replace);
                        timeline.currentFrame = this.frame.startFrame;
                    }
                    break;
                }
            }
            return this;
        };
        Context.prototype.selectElement = function (mode) {
            if (!this.element || !this.dom)
                return this;
            switch (mode) {
                case select_types_1.SelectionMode.Clear:
                    this.dom.selectNone();
                    break;
                case select_types_1.SelectionMode.Replace:
                    this.dom.selectNone();
                    this.dom.selection = [this.element];
                    break;
                case select_types_1.SelectionMode.Add:
                    this.dom.selection = [this.element];
                    break;
            }
            return this;
        };
        Context.prototype.clone = function () {
            return new Context(this.dom, this.timeline, this.layer, this.frame);
        };
        Context.prototype.toString = function () {
            var elementString = "";
            if (this.element) {
                if (this.element.name) {
                    elementString = "".concat(this.element.name);
                }
                else if (this.element.elementType === "instance") {
                    elementString = "<unnamed ".concat(this.element.elementType, ">");
                }
                else {
                    elementString = "<".concat(this.element.elementType, ">");
                }
            }
            return "[object Context".concat(this.dom ? " dom=\"".concat(this.dom.name, "\"") : "").concat(this.timeline ? " timeline=\"".concat(this.timeline.name, "\"") : "").concat(this.layer ? " layer[".concat(this.layerIndex, "]=\"").concat(this.layer.name, "\"") : "").concat(this.frame
                ? " keyframe[".concat(this.keyframes.indexOf(this.frame), "]=").concat(this.frame.startFrame)
                : "").concat(this.element ? " element=\"".concat(elementString, "\"") : "", "]");
        };
        Context.toString = function () {
            return "[class Context]";
        };
        Context.from = factory_1.from;
        return Context;
    }());
    exports.Context = Context;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 248:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__248__;

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.parseItem = parseItem;
    function parseItem(v) {
        v = v.trim();
        if (/^\d+$/.test(v)) {
            return {
                type: "index",
                value: Number(v)
            };
        }
        return {
            type: "name",
            value: v
        };
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.parseFrame = parseFrame;
    function parseFrame(v) {
        v = v.trim();
        if (/^\d+\.\.\d+$/.test(v)) {
            var _a = v.split(".."), a = _a[0], b = _a[1];
            return {
                type: "range",
                start: Number(a),
                end: Number(b)
            };
        }
        if (/^\d+$/.test(v)) {
            return {
                type: "index",
                value: Number(v)
            };
        }
        return {
            type: "name",
            value: v
        };
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.parseLayer = parseLayer;
    function parseLayer(v) {
        v = v.trim();
        if (v === "*") {
            return { type: "all" };
        }
        if (v.startsWith("[") && v.endsWith("]")) {
            var list = v
                .slice(1, -1)
                .split(",")
                .map(function (v) { return v.trim(); });
            return {
                type: "list",
                value: list
            };
        }
        if (/^\d+$/.test(v)) {
            return {
                type: "index",
                value: Number(v)
            };
        }
        return {
            type: "name",
            value: v
        };
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 652:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__652__;

/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(197), __webpack_require__(78)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Context_1, Selector_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.from = from;
    function from(value) {
        var ctx = new Context_1.Context();
        if (!value) {
            return ctx;
        }
        if (typeof value === "string") {
            return fromString(value);
        }
        else if (value instanceof Document) {
            return ctx.setDOM(value);
        }
        else if (value instanceof Timeline) {
            return ctx.setTimeline(value);
        }
        else if (value instanceof Layer) {
            return ctx.setLayer(value);
        }
        else if (value instanceof Frame) {
            return ctx.setFrame(value);
        }
        else if (value instanceof Element) {
            return ctx.setElement(value);
        }
        return ctx;
    }
    function fromString(value) {
        var ctx = new Context_1.Context();
        var parsed = (0, Selector_1.parseContextPath)(value);
        if (parsed.dom) {
            switch (parsed.dom.type) {
                case "url":
                    throw new Error("Not implemented " + parsed.dom.type);
                case "name":
                    ctx.setDOM(parsed.dom.value);
                    break;
                default:
                    throw new Error("Unrecognized dom type");
            }
        }
        if (parsed.item) {
            switch (parsed.item.type) {
                case "name":
                case "index":
                    throw new Error("Not implemented " + parsed.item.type);
                default:
                    throw new Error("Unrecognized item type");
            }
        }
        if (parsed.layer) {
            switch (parsed.layer.type) {
                case "name":
                    ctx.setLayer(parsed.layer.value);
                    break;
                case "index":
                    var index = Number(parsed.layer.value);
                    ctx.setLayer(index);
                    break;
                case "all":
                case "list":
                    throw new Error("Not implemented " + parsed.item);
                    // removed by dead control flow

                default:
                    throw new Error("Unrecognized layer type");
            }
        }
        if (parsed.frame) {
            switch (parsed.frame.type) {
                case "name":
                    ctx.setFrame(parsed.frame.value);
                    break;
                case "index":
                    var index = Number(parsed.frame.value);
                    ctx.setFrame(index);
                    break;
                case "range":
                    throw new Error("Not implemented " + parsed.frame);
                    // removed by dead control flow

                default:
                    throw new Error("Unrecognized frame type");
            }
        }
        if (parsed.element) {
            switch (parsed.element.type) {
                case "name":
                    ctx.setElement(parsed.element.value);
                    break;
                case "index":
                    var index = Number(parsed.element.value);
                    ctx.setElement(index);
                    break;
                default:
                    throw new Error("Unrecognized element type");
            }
        }
        return ctx;
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 773:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__773__;

/***/ }),

/***/ 917:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__917__;

/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(197)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Context_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Context = void 0;
    Object.defineProperty(exports, "Context", ({ enumerable: true, get: function () { return Context_1.Context; } }));
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