(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("tslib"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["tslib", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["@xjsfl/Context"] = factory(require("tslib"), require("lodash"));
	else
		root["@xjsfl/Context"] = factory(root["tslib"], root["lodash"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__652__, __WEBPACK_EXTERNAL_MODULE__773__) {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(652), __webpack_require__(773), __webpack_require__(492)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, tslib_1, _, from_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.Context = void 0;
    _ = tslib_1.__importStar(_);
    var trace = function (msg) { return fl.trace(msg); };
    var Context = (function () {
        function Context(dom, timeline, layer, frame, element) {
            this.dom = null;
            this.item = null;
            this.timeline = null;
            this.layer = null;
            this.frame = null;
            this.element = null;
            this.context = "";
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
            var dom;
            if (value === true || value === undefined) {
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
            if (!this.dom)
                this.setDOM(true);
            var timeline;
            var item;
            if (value === true || value === undefined) {
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
            if (!this.timeline)
                this.setTimeline(true);
            var layer;
            if (value === true || value === undefined) {
                layer = this.timeline.layers[this.timeline.currentLayer];
            }
            else if (typeof value === "number") {
                layer = this.timeline.layers[value];
            }
            else if (typeof value === "string") {
                var indexs = this.timeline.findLayerIndex(value);
                if (!indexs || indexs.length === 0) {
                    throw new ReferenceError('ReferenceError: "' + value + '" is not a valid layer in Context.setLayer()');
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
            if (!this.layer)
                throw new Error("Context has no layer");
            var frame;
            if (typeof value === "number") {
                frame = this.layer.frames[value];
            }
            else if (value === true || value === undefined) {
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
                throw new ReferenceError('ReferenceError: Cannot set Keyframe as Context has no Timeline');
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
            if (this.timeline !== undefined && this.timeline !== null) {
                if (timeline !== this.timeline) {
                    if (this.item) {
                        (_a = this.dom) === null || _a === void 0 ? void 0 : _a.library.editItem(this.item.name);
                    }
                    else {
                        (_b = this.dom) === null || _b === void 0 ? void 0 : _b.editScene(0);
                    }
                }
                if (this.layer && this.timeline) {
                    this.timeline.currentLayer = this.layerIndex;
                    if (this.frame) {
                        this.timeline.currentFrame = this.frame.startFrame;
                    }
                }
            }
            return this;
        };
        Context.prototype.select = function (addToSelection) {
            if (addToSelection === void 0) { addToSelection = false; }
            this.goto();
            switch (this.context) {
                case "layer":
                    this.selectLayer(addToSelection);
                    break;
                case "frame":
                case "keyframe":
                    this.selectFrame(addToSelection);
                    break;
                case "element":
                    this.selectElement(addToSelection);
                    break;
            }
            return this;
        };
        Context.prototype.selectLayer = function (addToSelection) {
            if (addToSelection === void 0) { addToSelection = false; }
            if (!this.timeline || !this.layer) {
                return this;
            }
            var timeline = this.timeline;
            var currentFrame = timeline.currentFrame;
            if (!addToSelection) {
                var currentLayer = timeline.currentLayer;
                timeline.currentLayer = 0;
                timeline.setSelectedFrames(0, 0);
                if (timeline.getSelectedFrames().length > 0) {
                    timeline.setSelectedFrames(0, 0, false);
                }
                timeline.currentLayer = currentLayer;
            }
            else {
                var layerIndex = this.layerIndex;
                if (layerIndex === -1)
                    return this;
                var selectedLayers = timeline.getSelectedLayers();
                trace("selectedLayers 2:" + selectedLayers);
                if (!_.includes(selectedLayers, layerIndex)) {
                    trace("Selecting > " + layerIndex);
                    timeline.setSelectedLayers(layerIndex, false);
                }
                else {
                    trace("NOT Selecting > " + layerIndex);
                    var selectedFrames = timeline.getSelectedFrames();
                    if (selectedFrames[0] === 0 && selectedFrames[1] === 0) {
                        trace("OK, SELECTING!");
                        timeline.setSelectedLayers(layerIndex, true);
                    }
                    trace("Sel frames > " + timeline.getSelectedFrames());
                }
            }
            timeline.currentFrame = currentFrame;
            return this;
        };
        Context.prototype.selectFrame = function (addToSelection) {
            if (addToSelection === void 0) { addToSelection = false; }
            if (!this.timeline || !this.layer || !this.frame) {
                return this;
            }
            var timeline = this.timeline;
            if (!addToSelection) {
                timeline.setSelectedFrames(0, 0);
            }
            else {
                var layerIndex = Number(timeline.findLayerIndex(this.layer.name) || -1);
                if (layerIndex !== -1) {
                    timeline.currentLayer = layerIndex;
                    timeline.setSelectedFrames(this.frame.startFrame, this.frame.startFrame + this.frame.duration, !addToSelection);
                    timeline.currentFrame = this.frame.startFrame;
                }
            }
            return this;
        };
        Context.prototype.selectElement = function (addToSelection) {
            if (addToSelection === void 0) { addToSelection = false; }
            if (!this.element || !this.dom) {
                return this;
            }
            if (!addToSelection) {
                this.dom.selectNone();
                this.dom.selection = [this.element];
            }
            else {
                var origionSelection = this.dom.selection;
                this.dom.selection = tslib_1.__spreadArray([this.element], origionSelection, true);
            }
            return this;
        };
        Context.prototype.clone = function () {
            return new Context(this.dom, this.timeline, this.layer, this.frame);
        };
        Context.prototype.toString = function () {
            var elementString = '';
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
            return "[object Context".concat(this.dom ? " dom=\"".concat(this.dom.name, "\"") : "").concat(this.timeline ? " timeline=\"".concat(this.timeline.name, "\"") : "").concat(this.layer ? " layer[".concat(this.layerIndex, "]=\"").concat(this.layer.name, "\"") : "").concat(this.frame ? " keyframe[".concat(this.keyframes.indexOf(this.frame), "]=").concat(this.frame.startFrame) : "").concat(this.element ? " element=\"".concat(elementString, "\"") : "", "]");
        };
        Context.toString = function () {
            return '[class Context]';
        };
        Context.from = from_1.from;
        return Context;
    }());
    exports.Context = Context;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 492:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(197)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Context_1) {
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
        if (value instanceof Document) {
            return ctx.setDOM(value);
        }
        if (value instanceof Timeline) {
            return ctx.setTimeline(value);
        }
        if (value instanceof Layer) {
            return ctx.setLayer(value);
        }
        if (value instanceof Frame) {
            return ctx.setFrame(value);
        }
        if (value instanceof Element) {
            return ctx.setElement(value);
        }
        return ctx;
    }
    function fromString(value) {
        var ctx = new Context_1.Context();
        value = value.trim();
        if (value.startsWith("file:///")) {
            ctx.setDOM(value);
            return ctx;
        }
        if (value.startsWith("/")) {
            ctx.setTimeline(value);
            return ctx;
        }
        if (value.startsWith("~")) {
            var layer = value.slice(1);
            if (layer.startsWith("[") && layer.endsWith("]")) {
                var layers = layer
                    .slice(1, -1)
                    .split(",")
                    .map(function (v) { return v.trim(); });
                layers.forEach(function (l) { return ctx.setLayer(l); });
            }
            else {
                var index = Number(layer);
                ctx.setLayer(isNaN(index) ? layer : index);
            }
            return ctx;
        }
        if (value.startsWith("@")) {
            var frame = value.slice(1);
            var index = Number(frame);
            ctx.setFrame(isNaN(index) ? frame : index);
            return ctx;
        }
        if (value.startsWith(":")) {
            ctx.setElement(value.slice(1));
            return ctx;
        }
        ctx.setElement(value);
        return ctx;
    }
    function parseContextPath(input) {
        var _a, _b, _c, _d, _e;
        var match = input.match(/^\s*(?:([^>~@:]+)\s*>)?\s*(?:([^>~@:]+)\s*~)?\s*(?:([^>~@:]+)\s*@)?\s*(?:([^>~@:]+)\s*:)?\s*([^>~@:]+)?\s*$/);
        if (!match) {
            throw new Error("Invalid context path");
        }
        return {
            dom: (_a = match[1]) === null || _a === void 0 ? void 0 : _a.trim(),
            item: (_b = match[2]) === null || _b === void 0 ? void 0 : _b.trim(),
            layer: (_c = match[3]) === null || _c === void 0 ? void 0 : _c.trim(),
            frame: (_d = match[4]) === null || _d === void 0 ? void 0 : _d.trim(),
            element: (_e = match[5]) === null || _e === void 0 ? void 0 : _e.trim(),
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

/***/ 773:
/***/ (function(module) {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__773__;

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