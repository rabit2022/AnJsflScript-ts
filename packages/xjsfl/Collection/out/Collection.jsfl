(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("tslib"), require("@xjsfl/Context"));
	else if(typeof define === 'function' && define.amd)
		define(["tslib", "@xjsfl/Context"], factory);
	else if(typeof exports === 'object')
		exports["Collection"] = factory(require("tslib"), require("@xjsfl/Context"));
	else
		root["Collection"] = factory(root["tslib"], root["@xjsfl/Context"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__652__, __WEBPACK_EXTERNAL_MODULE__761__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 652:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__652__;

/***/ }),

/***/ 761:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__761__;

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
  ElementCollection: function() { return /* reexport */ ElementCollection; },
  ItemCollection: function() { return /* reexport */ ItemCollection; },
  Iterators: function() { return /* reexport */ Iterators; },
  LayerList: function() { return /* reexport */ LayerList; },
  Walker: function() { return /* reexport */ Walker; }
});

// EXTERNAL MODULE: external "tslib"
var external_tslib_ = __webpack_require__(652);
;// ./src/base/UI.ts
var UI = (function () {
    function UI() {
    }
    Object.defineProperty(UI, "$dom", {
        get: function () {
            return fl.getDocumentDOM();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UI, "$timeline", {
        get: function () {
            return UI.$dom.getTimeline();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UI, "$library", {
        get: function () {
            return UI.$dom.library;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UI, "$selection", {
        get: function () {
            return UI.$dom.selection;
        },
        set: function (elements) {
            var dom = fl.getDocumentDOM();
            if (dom) {
                dom.selectNone();
                dom.selection = elements instanceof Array ? elements : [elements];
            }
        },
        enumerable: false,
        configurable: true
    });
    return UI;
}());


;// ./src/ElementCollection/operations/selection.ts



function selection_select(element) {
    this.dom.selectNone();
    var self_elements = this.toArray();
    if (element === true || element === undefined) {
        this.dom.selection = self_elements;
    }
    else {
        var el = typeof element === "number"
            ? self_elements[element]
            : self_elements.find(function (e) { return e.name === element; });
        if (el)
            this.dom.selection = [el];
    }
    return this;
}
function group() {
    var self_elements = this.toArray();
    UI.$selection = self_elements;
    this.dom.group();
    return this;
}
function duplicate(add) {
    if (add === void 0) { add = false; }
    var self_elements = this.toArray();
    this._deselect();
    this.dom.duplicateSelection();
    var elements = this.dom.selection;
    var name = "";
    var num = 0;
    var pad = 0;
    var parseNames = function (element) {
        if (!element.name)
            return;
        var matches = element.name.match(/(.+?)_(\d+$)/);
        if (matches) {
            var _name = matches[1];
            var _pad = matches[2].length;
            var _num = parseInt(matches[2]);
            if (_num > num) {
                name = _name;
                num = _num;
                pad = _pad;
            }
        }
    };
    self_elements.forEach(parseNames);
    name = name || "Item";
    num = num === 0 ? 1 : num + 1;
    new ElementCollection(elements, this.dom).rename(name, pad, num);
    var new_elements = add ? (0,external_tslib_.__spreadArray)((0,external_tslib_.__spreadArray)([], (0,external_tslib_.__read)(self_elements), false), (0,external_tslib_.__read)(elements), false) : elements;
    this.clear();
    this.addMany(new_elements);
    this.refresh();
    return this;
}
function deleteElements() {
    var self_elements = this.toArray();
    if (!self_elements.length)
        return this;
    this.dom.selection = self_elements;
    this.dom.deleteSelection();
    this.clear();
    return this;
}

;// ./src/ElementCollection/operations/transform.ts

function move(x, y, relative) {
    var e_1, _a, e_2, _b;
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    if (relative === void 0) { relative = false; }
    var self_elements = this.toArray();
    if (relative) {
        try {
            for (var self_elements_1 = (0,external_tslib_.__values)(self_elements), self_elements_1_1 = self_elements_1.next(); !self_elements_1_1.done; self_elements_1_1 = self_elements_1.next()) {
                var el = self_elements_1_1.value;
                el.x += x;
                el.y += y;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (self_elements_1_1 && !self_elements_1_1.done && (_a = self_elements_1.return)) _a.call(self_elements_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    else {
        var bounds = this.dom.getSelectionRect();
        this._deselect();
        try {
            for (var self_elements_2 = (0,external_tslib_.__values)(self_elements), self_elements_2_1 = self_elements_2.next(); !self_elements_2_1.done; self_elements_2_1 = self_elements_2.next()) {
                var element = self_elements_2_1.value;
                element.x = element.left - bounds.left + (element.x - element.left) + x;
                element.y = element.top - bounds.top + (element.y - element.top) + y;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (self_elements_2_1 && !self_elements_2_1.done && (_b = self_elements_2.return)) _b.call(self_elements_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this._reselect();
    }
    this.refresh();
    return this;
}
function rotate(angle, corner) {
    this.select();
    this.dom.rotateSelection(angle, corner);
    return this;
}
function scale(x, y, corner) {
    if (x === void 0) { x = 1; }
    if (y === void 0) { y = 1; }
    this.select();
    this.dom.scaleSelection(x, y, corner);
    return this;
}
function resetTransform() {
    this._deselect();
    this.dom.resetTransformation();
    this._reselect();
    this.refresh();
    return this;
}
function centerTransformPoint(donnotrun) {
    if (donnotrun === void 0) { donnotrun = true; }
    if (!donnotrun)
        return this;
    var center = function (e) {
        var mat = e.matrix;
        var tempMatrix = {
            a: mat.a,
            b: 0,
            c: 0,
            d: mat.d,
            tx: mat.tx,
            ty: mat.ty
        };
        e.matrix = tempMatrix;
        e.setTransformationPoint({
            x: (e.width / 2) * (1 / e.scaleX),
            y: (e.height / 2) * (1 / e.scaleY)
        });
        e.matrix = mat;
    };
    this.each(center);
    return this;
}

;// ./src/ElementCollection/operations/attributes.ts

var TwoDMap = {
    pos: ["x", "y"],
    position: ["x", "y"],
    size: ["width", "height"],
    scale: ["scaleX", "scaleY"]
};
function attr(prop, value) {
    var e_1, _a;
    var elements = this.toArray();
    if (typeof prop === "object" && prop !== null) {
        try {
            for (var _b = (0,external_tslib_.__values)(Object.entries(prop)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = (0,external_tslib_.__read)(_c.value, 2), k = _d[0], v = _d[1];
                this.attr(k, v);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return this;
    }
    var name = prop;
    if (is2DProperty(name)) {
        set2DProperty(elements, name, value);
        this.refresh();
        return this;
    }
    if (isColorProperty(name)) {
        setColorProperty.call(this, name, value);
        return this;
    }
    setNormalProperty(elements, name, value);
    this.refresh();
    return this;
}
function is2DProperty(prop) {
    return prop in TwoDMap;
}
function isColorProperty(prop) {
    return prop === "tint" || prop === "alpha" || prop === "brightness";
}
function set2DProperty(elements, prop, value) {
    var _a = (0,external_tslib_.__read)(TwoDMap[prop], 2), xProp = _a[0], yProp = _a[1];
    elements.forEach(function (el, i) {
        var val = typeof value === "function"
            ? value(el, i, elements)
            : value;
        var _a = (0,external_tslib_.__read)(normalizeXY(val), 2), x = _a[0], y = _a[1];
        el[xProp] = x;
        el[yProp] = y;
    });
}
function normalizeXY(value) {
    if (typeof value === "number") {
        return [value, value];
    }
    if (Array.isArray(value)) {
        return [value[0], value[1]];
    }
    if (value && typeof value === "object") {
        if ("x" in value && "y" in value) {
            var v = value;
            return [v.x, v.y];
        }
    }
    return [0, 0];
}
function setColorProperty(prop, value) {
    switch (prop) {
        case "tint":
            var tint = value;
            if (typeof tint === "string" && tint[0] !== "#") {
                tint = "#" + tint;
            }
            this.dom.setInstanceTint(tint, 100);
            break;
        case "alpha":
            this.dom.setInstanceAlpha(value);
            break;
        case "brightness":
            this.dom.setInstanceBrightness(value);
            break;
    }
}
function setNormalProperty(elements, prop, value) {
    var fn = typeof value === "function" ? value : function () { return value; };
    elements.forEach(function (el, i) {
        el[prop] = fn(el, i, elements);
    });
}

;// ./src/ElementCollection/operations/rename.ts

function createRenameCallback(baseName, padding, startIndex, separator) {
    if (padding === void 0) { padding = 0; }
    if (startIndex === void 0) { startIndex = 1; }
    if (separator === void 0) { separator = "_"; }
    var patternMatch = baseName.match(/(.+?)(#+|\d+)$/);
    if (patternMatch) {
        var _a = (0,external_tslib_.__read)(patternMatch, 3), name_1 = _a[1], numPart = _a[2];
        var padLength_1 = numPart.length;
        var start_1 = Number.isNaN(Number(numPart)) ? 1 : parseInt(numPart, 10);
        return function (_, index) { return name_1 + (index + start_1).toString().padStart(padLength_1, "0"); };
    }
    var resolvedBaseName = (baseName || "clip") + separator;
    return function (_, index) {
        var num = index + startIndex;
        var suffix = padding > 0 ? num.toString().padStart(padding, "0") : String(num);
        return resolvedBaseName + suffix;
    };
}
function rename(base, padding, startIndex, separator) {
    var callback = typeof base === "function"
        ? base
        : createRenameCallback(base, padding, startIndex, separator);
    var self_elements = this.toArray();
    self_elements.forEach(function (el, index, elements) {
        el.name = callback(el, index, elements);
    });
    return this;
}

;// ./src/ElementCollection/utils/mathUtils.ts
function randomValue(a, b, round) {
    if (Array.isArray(a)) {
        var min_1 = a[0];
        var max_1 = a[1];
        var shouldRound = b;
        var value_1 = min_1 + (max_1 - min_1) * Math.random();
        return shouldRound ? Math.round(value_1) : value_1;
    }
    var min = a;
    var max = b;
    var value = min + (max - min) * Math.random();
    return round ? Math.round(value) : value;
}
function randomizeValue(value, modifier) {
    if (typeof value !== "number")
        return value;
    if (modifier === undefined) {
        return value * Math.random();
    }
    if (typeof modifier === "number") {
        return value + modifier * Math.random();
    }
    if (typeof modifier === "string") {
        var matches = modifier.match(/([+\-*/])?(\d+(\.\d+)?)(%)?/);
        if (!matches)
            return value;
        var sign = matches[1];
        var offset = parseFloat(matches[2]);
        var percent = matches[4];
        if (percent) {
            if (sign === "+" || sign === "-") {
                offset = value * (offset / 100);
            }
            else if (sign === "*" || sign === "/") {
                offset = offset / 100;
            }
        }
        switch (sign) {
            case "+":
                return value + offset * Math.random();
            case "-":
                return value - offset * Math.random();
            case "*":
                return value * offset * Math.random();
            case "/":
                return (value / offset) * Math.random();
            default:
                return value + offset * Math.random() - offset / 2;
        }
    }
    return value;
}

;// ./src/ElementCollection/operations/randomize.ts


var self_elements = [];
var self_ref;
function randomize(prop, modifier) {
    self_ref = this;
    self_elements = this.toArray();
    if (typeof prop === "object") {
        randomizeObject(prop);
        return this;
    }
    if (isSingleProperty(prop)) {
        randomizeSingleProperty(prop, modifier);
    }
    else if (isCompoundProperty(prop)) {
        randomizeCompoundProperty(prop, modifier);
    }
    this.refresh();
    return this;
}
function randomizeObject(props) {
    for (var key in props) {
        randomize.call(self_ref, key, props[key]);
    }
}
function isSingleProperty(prop) {
    var set = new Set([
        "x",
        "y",
        "width",
        "height",
        "rotation",
        "scaleX",
        "scaleY",
        "transformX",
        "transformY",
        "skewX",
        "skewY"
    ]);
    return set.has(prop);
}
function isCompoundProperty(prop) {
    var set = new Set(["pos", "position", "scale", "size"]);
    return set.has(prop);
}
function randomizeSingleProperty(prop, modifier) {
    var e_1, _a;
    var isArray = Array.isArray(modifier);
    try {
        for (var self_elements_1 = (0,external_tslib_.__values)(self_elements), self_elements_1_1 = self_elements_1.next(); !self_elements_1_1.done; self_elements_1_1 = self_elements_1.next()) {
            var element = self_elements_1_1.value;
            var value = element[prop];
            element[prop] = isArray
                ? randomValue(modifier)
                : randomizeValue(value, modifier);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (self_elements_1_1 && !self_elements_1_1.done && (_a = self_elements_1.return)) _a.call(self_elements_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function randomizeCompoundProperty(prop, modifier) {
    if (prop === "pos")
        prop = "position";
    switch (prop) {
        case "position":
            randomizePosition(modifier);
            break;
        case "scale":
        case "size":
            randomizeScaleOrSize(prop, modifier);
            break;
    }
}
function randomizePosition(modifier) {
    var values = Array.isArray(modifier) ? modifier : [modifier, modifier];
    randomize.call(self_ref, {
        x: values[0],
        y: values[1]
    });
}
function randomizeScaleOrSize(prop, modifier) {
    var e_2, _a;
    var attrs = {
        scale: ["scaleX", "scaleY"],
        size: ["width", "height"]
    };
    var _b = (0,external_tslib_.__read)(attrs[prop], 2), px = _b[0], py = _b[1];
    try {
        for (var self_elements_2 = (0,external_tslib_.__values)(self_elements), self_elements_2_1 = self_elements_2.next(); !self_elements_2_1.done; self_elements_2_1 = self_elements_2.next()) {
            var element = self_elements_2_1.value;
            var values = [];
            if (Array.isArray(modifier)) {
                values[0] = randomizeValue(element[px], modifier[0]);
                values[1] = randomizeValue(element[py], modifier[1]);
            }
            else if (typeof modifier === "string") {
                var value = randomizeValue(element[px], modifier);
                values = [value, value];
            }
            else {
                var max = Math.max(element[px], element[py]);
                var value = randomizeValue(max, modifier);
                values = [value, value];
            }
            element[px] = values[0];
            element[py] = values[1];
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (self_elements_2_1 && !self_elements_2_1.done && (_a = self_elements_2.return)) _a.call(self_elements_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
}

;// ./src/ElementCollection/operations/order.ts

function orderBy(prop, reverseOrder) {
    var e_1, _a;
    if (reverseOrder === void 0) { reverseOrder = false; }
    var cmp;
    if (typeof prop === "function") {
        cmp = prop;
    }
    else if (prop === "random") {
        cmp = function () { return (Math.random() > 0.5 ? 1 : -1); };
    }
    else {
        cmp = createPropertyComparator(prop);
    }
    if (!cmp) {
        console.warn("Invalid property to sort by");
        return this;
    }
    this._deselect(false);
    var self_elements = this.toArray();
    var arr = self_elements.sort(cmp);
    this.dom.selectNone();
    try {
        for (var arr_1 = (0,external_tslib_.__values)(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
            var element = arr_1_1.value;
            this.dom.selection = [element];
            this.dom.arrange(reverseOrder ? "back" : "front");
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    this.clear();
    this.addMany(arr);
    this._reselect();
    return this;
}
function createPropertyComparator(prop) {
    return function (a, b) {
        var aVal = getOrderValue(a, prop);
        var bVal = getOrderValue(b, prop);
        if (aVal < bVal)
            return -1;
        if (aVal > bVal)
            return 1;
        return 0;
    };
}
function getOrderValue(element, prop) {
    switch (prop) {
        case "size":
            return element.width * element.height;
        default:
            return element[prop];
    }
}

;// ./src/ElementCollection/operations/arrangement/align.ts

function align(options) {
    var e_1, _a;
    if (!this.size)
        return this;
    var opts = typeof options === "string" ? { mode: options } : (options !== null && options !== void 0 ? options : {});
    var _b = opts.mode, mode = _b === void 0 ? "center" : _b, _c = opts.useDocumentBounds, useDocumentBounds = _c === void 0 ? false : _c;
    this._deselect(false);
    this.dom.selectNone();
    var commands = resolveAlignCommands(mode);
    try {
        for (var commands_1 = (0,external_tslib_.__values)(commands), commands_1_1 = commands_1.next(); !commands_1_1.done; commands_1_1 = commands_1.next()) {
            var cmd = commands_1_1.value;
            this.dom.align(cmd, useDocumentBounds);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (commands_1_1 && !commands_1_1.done && (_a = commands_1.return)) _a.call(commands_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    this._reselect();
    return this;
}
function resolveAlignCommands(prop) {
    var map = {
        center: ["vertical center", "horizontal center"],
        horizontal: ["horizontal center"],
        vertical: ["vertical center"],
        "top left": ["top", "left"],
        "top right": ["top", "right"],
        "bottom left": ["bottom", "left"],
        "bottom right": ["bottom", "right"]
    };
    if (prop in map) {
        return map[prop];
    }
    return [prop];
}

;// ./src/ElementCollection/operations/arrangement/distribute.ts

function distribute(options, toStage) {
    var e_1, _a;
    if (toStage === void 0) { toStage = false; }
    if (!this.size) {
        return this;
    }
    var opts = typeof options === "string" || Array.isArray(options)
        ? { props: options, toStage: toStage }
        : options;
    var propsArray = Array.isArray(opts.props) ? opts.props : [opts.props];
    this._deselect(false);
    try {
        for (var propsArray_1 = (0,external_tslib_.__values)(propsArray), propsArray_1_1 = propsArray_1.next(); !propsArray_1_1.done; propsArray_1_1 = propsArray_1.next()) {
            var prop = propsArray_1_1.value;
            var cmd = resolveDistributeCommand(prop);
            if (cmd) {
                this.dom.distribute(cmd, opts.toStage);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (propsArray_1_1 && !propsArray_1_1.done && (_a = propsArray_1.return)) _a.call(propsArray_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    this._reselect();
    return this;
}
function resolveDistributeCommand(prop) {
    switch (prop) {
        case "horizontal":
            return "horizontal center";
        case "vertical":
            return "vertical center";
        case "left":
        case "right":
        case "top":
        case "bottom":
            return "".concat(prop, " edge");
        default:
            return null;
    }
}

;// ./src/ElementCollection/operations/arrangement/grid.ts

var Rounding;
(function (Rounding) {
    Rounding[Rounding["Down"] = -1] = "Down";
    Rounding[Rounding["Nearest"] = 0] = "Nearest";
    Rounding[Rounding["Up"] = 1] = "Up";
})(Rounding || (Rounding = {}));
function toGrid(precision, rounding) {
    var e_1, _a;
    if (rounding === void 0) { rounding = Rounding.Nearest; }
    var p = normalizePrecision(precision);
    var offset = getGridOffset(p, rounding);
    var self_elements = this.toArray();
    try {
        for (var self_elements_1 = (0,external_tslib_.__values)(self_elements), self_elements_1_1 = self_elements_1.next(); !self_elements_1_1.done; self_elements_1_1 = self_elements_1.next()) {
            var element = self_elements_1_1.value;
            var x = element.x + offset.x;
            var y = element.y + offset.y;
            x -= x % p.x;
            y -= y % p.y;
            element.x = x;
            element.y = y;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (self_elements_1_1 && !self_elements_1_1.done && (_a = self_elements_1.return)) _a.call(self_elements_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    this.refresh();
    return this;
}
function normalizePrecision(precision) {
    var p;
    if (typeof precision === "number") {
        p = { x: precision, y: precision };
    }
    else if (Array.isArray(precision)) {
        p = { x: precision[0], y: precision[1] };
    }
    else if (precision) {
        p = { x: precision.x, y: precision.y };
    }
    else {
        p = { x: 1, y: 1 };
    }
    return p;
}
function getGridOffset(precision, rounding) {
    if (rounding === void 0) { rounding = Rounding.Nearest; }
    var offset;
    switch (rounding) {
        case Rounding.Down:
            offset = { x: 0.001, y: 0.001 };
            break;
        case Rounding.Up:
            offset = { x: precision.x - 0.001, y: precision.y - 0.001 };
            break;
        case Rounding.Nearest:
        default:
            offset = { x: precision.x * 0.5, y: precision.y * 0.5 };
            break;
    }
    return offset;
}

;// ./src/ElementCollection/operations/arrangement/layout.ts
function layout(columns, gutter, spacing) {
    if (columns === void 0) { columns = 0; }
    if (gutter === void 0) { gutter = 0; }
    if (spacing === void 0) { spacing = 0; }
    var self_elements = this.toArray();
    columns = self_elements.length;
    if (!self_elements.length) {
        return this;
    }
    var startX = self_elements[0].x;
    var startY = self_elements[0].y;
    for (var i = 0; i < self_elements.length; i++) {
        var element = self_elements[i];
        var col = i % columns;
        var row = Math.floor(i / columns);
        var width = element.width * element.scaleX;
        var height = element.height * element.scaleY;
        element.x = startX + col * (width + gutter);
        element.y = startY + row * (height + spacing);
    }
    this.refresh();
    return this;
}

;// ./src/ElementCollection/utils/elementUtils.ts
function rxEscape(value) {
    return String(value).replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function makeWildcard(value, exactMatch) {
    if (exactMatch === void 0) { exactMatch = false; }
    var str = rxEscape(value).replace(/\\\*/g, ".*?");
    if (exactMatch) {
        str = "^".concat(str, "$");
    }
    return new RegExp(str);
}
function getExtremeValues(elements, prop, returnElement) {
    if (returnElement === void 0) { returnElement = false; }
    if (elements.length === 0) {
        return [undefined, undefined];
    }
    var minEl = elements[0];
    var maxEl = elements[0];
    var minVal = elements[0][prop];
    var maxVal = elements[0][prop];
    for (var i = 1; i < elements.length; i++) {
        var el = elements[i];
        var value = el[prop];
        if (value > maxVal) {
            maxVal = value;
            maxEl = el;
        }
        else if (value < minVal) {
            minVal = value;
            minEl = el;
        }
    }
    return returnElement ? [minEl, maxEl] : [minVal, maxVal];
}
function sortOn(arr, prop, asc) {
    if (asc === void 0) { asc = true; }
    return arr.sort(function (a, b) {
        var av = a[prop];
        var bv = b[prop];
        if (av < bv)
            return asc ? -1 : 1;
        if (av > bv)
            return asc ? 1 : -1;
        return 0;
    });
}

;// ./src/ElementCollection/operations/arrangement/match.ts


function match(prop, element) {
    if (element === void 0) { element = true; }
    var self_elements = this.toArray();
    if (self_elements.length === 0) {
        return this;
    }
    var target;
    if (typeof element === "boolean") {
        var _a = (0,external_tslib_.__read)(getExtremeValues(self_elements, "width", true), 2), minWidthEl = _a[0], maxWidthEl = _a[1];
        var _b = (0,external_tslib_.__read)(getExtremeValues(self_elements, "height", true), 2), minHeightEl = _b[0], maxHeightEl = _b[1];
        target = {
            width: element ? maxWidthEl.width : minWidthEl.width,
            height: element ? maxHeightEl.height : minHeightEl.height
        };
    }
    else if (typeof element === "string" || typeof element === "number") {
        var new_elements = this.find(element);
        target = new_elements[0];
    }
    else {
        target = element;
    }
    if (target && target instanceof Element) {
        switch (prop) {
            case "width":
                this.attr.call("width", target.width);
                break;
            case "height":
                this.attr("height", target.height);
                break;
            case "size":
                this.attr.call("width", target.width);
                this.attr("height", target.height);
                break;
            default:
                throw new Error("Unknown target element \"".concat(prop, "\""));
        }
    }
    this.refresh();
    return this;
}

;// ./src/ElementCollection/operations/arrangement/space.ts
var space_self_elements = [];
function space(options, secondary) {
    var _a, _b;
    space_self_elements = this.toArray();
    if (!space_self_elements.length) {
        return this;
    }
    var direction = "horizontal";
    var gap;
    var useDocumentBounds = false;
    if (typeof options === "string") {
        direction = options;
        if (typeof secondary === "number")
            gap = secondary;
        if (typeof secondary === "boolean")
            useDocumentBounds = secondary;
    }
    else if (typeof options === "number") {
        gap = options;
    }
    else {
        (_a = options.direction, direction = _a === void 0 ? "horizontal" : _a, gap = options.gap, _b = options.useDocumentBounds, useDocumentBounds = _b === void 0 ? false : _b);
    }
    if (typeof gap === "number") {
        this.orderBy(direction === "horizontal" ? "left" : "top");
        spaceWithGap(direction, gap);
        return this;
    }
    this._deselect(false);
    this.dom.selectNone();
    this.dom.selection = space_self_elements;
    this.dom.space(direction, useDocumentBounds);
    this._reselect();
    return this;
}
function spaceWithGap(direction, gap) {
    var cursor = 0;
    for (var i = 0; i < space_self_elements.length; i++) {
        var el = space_self_elements[i];
        if (direction === "horizontal") {
            var offset = el.x - el.left;
            if (i === 0) {
                cursor = el.x - offset;
            }
            else {
                el.x = cursor + offset;
            }
            cursor += el.width + gap;
        }
        else {
            var offset = el.y - el.top;
            if (i === 0) {
                cursor = el.y - offset;
            }
            else {
                el.y = cursor + offset;
            }
            cursor += el.height + gap;
        }
    }
}

;// ./src/ElementCollection/operations/arrangement/index.ts







;// ./src/base/Collection.ts


var Collection = (function (_super) {
    (0,external_tslib_.__extends)(Collection, _super);
    function Collection(elements) {
        var _this = _super.call(this) || this;
        if (elements) {
            _this.addMany(elements);
        }
        return _this;
    }
    Collection.prototype.toArray = function () {
        return Array.from(this);
    };
    Collection.prototype.addMany = function (elements) {
        var _this = this;
        if (Array.isArray(elements)) {
            elements.forEach(function (e) { return _this.add(e); });
        }
        else {
            this.add(elements);
        }
        return this;
    };
    Collection.prototype.each = function (callback) {
        var arr = this.toArray();
        arr.forEach(function (el, i) {
            callback(el, i, arr);
        });
        return this;
    };
    Collection.prototype.reach = function (callback) {
        var arr = this.toArray().reverse();
        arr.forEach(function (el, i) {
            callback(el, i, arr);
        });
        return this;
    };
    Collection.prototype.indexOf = function (element) {
        return this.toArray().indexOf(element);
    };
    Collection.prototype.get = function (index) {
        return this.toArray()[index];
    };
    Collection.prototype.find = function (value, property) {
        if (property === void 0) { property = "name"; }
        var arr = this.toArray();
        if (typeof value === "string" && value.includes("*")) {
            value = makeWildcard(value, true);
        }
        if (value instanceof RegExp) {
            return arr.filter(function (e) { return value.test(String(e[property])); });
        }
        return arr.filter(function (e) { return e[property] === value; });
    };
    Collection.prototype.remove = function (elementsOrValue, property) {
        var _this = this;
        if (property === void 0) { property = "name"; }
        if (Array.isArray(elementsOrValue)) {
            elementsOrValue.forEach(function (e) { return _this.delete(e); });
        }
        else {
            var found = this.find(elementsOrValue, property);
            found.forEach(function (e) { return _this.delete(e); });
        }
        return this;
    };
    Collection.prototype.filter = function (callback) {
        var _this = this;
        var arr = this.toArray();
        var filtered = arr.filter(callback);
        this.clear();
        filtered.forEach(function (e) { return _this.add(e); });
        return this;
    };
    Collection.prototype.attr = function (prop, value) {
        var arr = this.toArray();
        var fn = typeof value === "function"
            ? value
            : function () { return value; };
        arr.forEach(function (el, i) {
            el[prop] = fn(el, i, arr);
        });
        return this;
    };
    Collection.prototype.invoke = function (name) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        this.forEach(function (el) {
            var fn = el[name];
            if (typeof fn === "function") {
                fn.apply(el, params);
            }
        });
        return this;
    };
    Collection.prototype.sort = function (compareFn) {
        var _this = this;
        var arr = this.toArray().sort(compareFn);
        this.clear();
        arr.forEach(function (e) { return _this.add(e); });
        return this;
    };
    Collection.prototype.list = function (label) {
        console.log(label !== null && label !== void 0 ? label : this.toString(), this.toArray());
        return this;
    };
    Collection.prototype.toString = function () {
        return "[object Collection length=".concat(this.size, "]");
    };
    Collection.toString = function () {
        return "[class Collection]";
    };
    return Collection;
}(Set));


;// ./src/ItemCollection/operators/rename.ts
function rename_rename(base, padding, startIndex, separator) {
    if (padding === void 0) { padding = true; }
    if (startIndex === void 0) { startIndex = 1; }
    if (separator === void 0) { separator = "_"; }
    var callback = typeof base === "function"
        ? base
        : rename_createRenameCallback(base, padding, startIndex, separator);
    this.each(function (el, index, all) {
        el.name = callback(el, index, all);
    });
    return this;
}
function rename_createRenameCallback(baseName, padding, startIndex, separator) {
    if (padding === void 0) { padding = true; }
    if (startIndex === void 0) { startIndex = 1; }
    if (separator === void 0) { separator = "_"; }
    return function (_item, index, all) {
        var num = index + startIndex;
        var padLength = padding
            ? String(all.length).length
            : typeof padding === "number"
                ? padding
                : 0;
        var suffix = padLength > 0 ? String(num).padStart(padLength, "0") : String(num);
        return "".concat(baseName).concat(separator).concat(suffix);
    };
}

// EXTERNAL MODULE: external "@xjsfl/Context"
var Context_ = __webpack_require__(761);
;// ./src/ItemCollection/core/ItemCollection.ts






var ItemCollection = (function (_super) {
    (0,external_tslib_.__extends)(ItemCollection, _super);
    function ItemCollection(elements, dom) {
        if (dom === void 0) { dom = UI.$dom; }
        var _this = _super.call(this, elements instanceof Array ? elements : [elements]) || this;
        _this.rename = rename_rename.bind(_this);
        if (!dom) {
            throw new Error("ItemCollection requires an open document");
        }
        _this.library = dom.library;
        return _this;
    }
    Object.defineProperty(ItemCollection.prototype, "Library", {
        get: function () {
            return this.library;
        },
        enumerable: false,
        configurable: true
    });
    ItemCollection.prototype.deleteItems = function () {
        var lib = this.Library;
        this.forEach(function (item) {
            lib.deleteItem(item.name);
        });
        return this;
    };
    ItemCollection.prototype.select = function () {
        var lib = this.Library;
        lib.selectNone();
        this.forEach(function (item) {
            lib.selectItem(item.name, false, true);
        });
        this.reveal();
        return this;
    };
    ItemCollection.prototype.expand = function (state, recurse) {
        if (state === void 0) { state = true; }
        var lib = this.Library;
        this.forEach(function (item) {
            if (item.itemType === "folder") {
                lib.expandFolder(state, recurse, item.name);
            }
        });
        return this;
    };
    ItemCollection.prototype.reveal = function () {
        var lib = this.Library;
        var cache = new Set();
        this.forEach(function (item) {
            var path = item.name;
            while (path.includes("/")) {
                path = path.replace(/\/[^\/]*$/, "");
                if (!cache.has(path)) {
                    lib.expandFolder(true, false, path);
                    cache.add(path);
                }
            }
            lib.expandFolder(true, false, path);
        });
        return this;
    };
    ItemCollection.prototype.move = function (path, replace, expand) {
        if (replace === void 0) { replace = false; }
        if (expand === void 0) { expand = true; }
        var lib = this.Library;
        path = path.replace(/[:()\[\]*+]/g, "").replace(/(^\/+|\/+$)/g, "");
        if (!lib.itemExists(path)) {
            lib.addNewItem("folder", path);
        }
        this.forEach(function (item) {
            lib.moveToFolder(path, item.name, replace);
        });
        if (expand) {
        }
        return this;
    };
    ItemCollection.prototype.exec = function (callback, params) {
        var _this = this;
        if (params === void 0) { params = []; }
        var lib = this.Library;
        this.each(function (item, index) {
            lib.editItem(item.name);
            callback.apply(_this, (0,external_tslib_.__spreadArray)([item, index], (0,external_tslib_.__read)(params), false));
        });
        return this;
    };
    ItemCollection.prototype.addToStage = function (context, x, y) {
        if (context === void 0) { context = Context_.Context.create(); }
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        var elements = [];
        context.goto();
        var types = new RegExp("movie clip|graphic|button|bitmap|component|compiled clip|video|linked video|embedded video");
        this.forEach(function (item) {
            if (types.test(item.itemType)) {
                context.dom.addItem({ x: x, y: y }, item);
                elements.push(context.dom.selection[0]);
            }
        });
        return new ElementCollection(elements).select();
    };
    ItemCollection.prototype.attr = function (prop, value) {
        _super.prototype.attr.call(this, prop, value);
        return this.update();
    };
    ItemCollection.prototype.update = function () {
        var lib = this.Library;
        this.forEach(function (item) {
            lib.updateItem(item.name);
        });
        return this;
    };
    ItemCollection.prototype.list = function (label) {
        console.log(label !== null && label !== void 0 ? label : "ItemCollection");
        this.forEach(function (item) {
            console.log(item.name);
        });
        return this;
    };
    ItemCollection.toString = function () {
        return "[class ItemCollection]";
    };
    return ItemCollection;
}(Collection));


;// ./src/ItemCollection/index.ts


;// ./src/ElementCollection/core/ElementCollection.ts











var ElementCollection = (function (_super) {
    (0,external_tslib_.__extends)(ElementCollection, _super);
    function ElementCollection(elements, dom) {
        var _this = this;
        var elementsArray = Array.isArray(elements) ? elements : [elements];
        var processedElements = elementsArray.filter(function (el) { return el != null; });
        _this = _super.apply(this, (0,external_tslib_.__spreadArray)([], (0,external_tslib_.__read)(processedElements), false)) || this;
        _this._selection = [];
        _this.select = selection_select.bind(_this);
        _this.group = group.bind(_this);
        _this.duplicate = duplicate.bind(_this);
        _this.deleteElements = deleteElements.bind(_this);
        _this.move = move.bind(_this);
        _this.rotate = rotate.bind(_this);
        _this.scale = scale.bind(_this);
        _this.resetTransform = resetTransform.bind(_this);
        _this.centerTransformPoint = centerTransformPoint.bind(_this);
        _this.attr = attr.bind(_this);
        _this.rename = rename.bind(_this);
        _this.align = align.bind(_this);
        _this.distribute = distribute.bind(_this);
        _this.space = space.bind(_this);
        _this.match = match.bind(_this);
        _this.layout = layout.bind(_this);
        _this.toGrid = toGrid.bind(_this);
        _this.randomize = randomize.bind(_this);
        _this.orderBy = orderBy.bind(_this);
        _this.dom = dom || UI.$dom;
        if (!_this.dom) {
            throw new Error("ElementCollection requires that a document be open before instantiation");
        }
        return _this;
    }
    Object.defineProperty(ElementCollection.prototype, "items", {
        get: function () {
            var items = this.toArray()
                .map(function (el) { return el.libraryItem; })
                .filter(function (item) { return item !== undefined; });
            var uniqueItems = Array.from(new Set(items));
            return new ItemCollection(uniqueItems, this.dom);
        },
        enumerable: false,
        configurable: true
    });
    ElementCollection.prototype.refresh = function () {
        this.dom.livePreview = true;
        return this;
    };
    ElementCollection.prototype._deselect = function (shouldSelect) {
        if (shouldSelect === void 0) { shouldSelect = true; }
        this._selection = UI.$selection || [];
        if (shouldSelect) {
            var self_elements = this.toArray();
            this.dom.selectNone();
            this.dom.selection = self_elements;
        }
    };
    ElementCollection.prototype._reselect = function () {
        this.dom.selectNone();
        this.dom.selection = this._selection;
    };
    return ElementCollection;
}(Collection));


;// ./src/ElementCollection/index.ts


;// ./src/LayerList/LayerList.ts
var LayerList = (function () {
    function LayerList(timeline, mode) {
        if (mode === void 0) { mode = "all"; }
        var doc = fl.getDocumentDOM();
        this._timeline = timeline || doc.getTimeline();
        this._mode = mode;
    }
    Object.defineProperty(LayerList.prototype, "layers", {
        get: function () {
            switch (this._mode) {
                case "selected":
                    var selectedLayers = this._timeline.getSelectedLayers();
                    var globalLayers_1 = this._timeline.layers;
                    return selectedLayers.map(function (layer) { return globalLayers_1[layer]; });
                case "all":
                    return this._timeline.layers;
                default:
                    throw new Error("Invalid mode: " + this._mode);
            }
        },
        enumerable: false,
        configurable: true
    });
    LayerList.prototype.append = function (layerName, layerType) {
        if (layerType === void 0) { layerType = "normal"; }
        var globalEndIndex = this._toGlobalIndex(this.layers.length - 1);
        this._timeline.currentLayer = globalEndIndex;
        var newLayerIndex = this._timeline.addNewLayer(layerName || undefined, layerType, false);
        return newLayerIndex;
    };
    LayerList.prototype.insert = function (index, layerName, layerType) {
        if (layerType === void 0) { layerType = "normal"; }
        var globalIndex = this._toGlobalIndex(index);
        this._timeline.currentLayer = globalIndex;
        var newLayerIndex = this._timeline.addNewLayer(layerName || "", layerType, true);
        return newLayerIndex;
    };
    LayerList.prototype.sort = function (compareFn) {
        for (var i = 0; i < this.layers.length; i++) {
            for (var j = i + 1; j < this.layers.length; j++) {
                if (compareFn(this.layers[i], this.layers[j]) > 0) {
                    var global_i = this._toGlobalIndex(i);
                    var global_j = this._toGlobalIndex(j);
                    swapLayers(this._timeline, global_i, global_j);
                }
            }
        }
    };
    LayerList.prototype.reverse = function () {
        for (var i = 0; i < this.layers.length / 2; i++) {
            var from = this._toGlobalIndex(i);
            var to = this._toGlobalIndex(this.layers.length - 1 - i);
            swapLayers(this._timeline, from, to);
        }
    };
    LayerList.prototype._toGlobalIndex = function (localIndex) {
        if (localIndex < 0 || localIndex >= this.layers.length) {
            throw new Error("\u5C40\u90E8\u7D22\u5F15 ".concat(localIndex, " \u8D85\u51FA\u8303\u56F4"));
        }
        var toMoveLayer = this.layers[localIndex];
        var globalLayers = this._timeline.layers;
        var globalIndex = globalLayers.indexOf(toMoveLayer);
        if (globalIndex === -1) {
            throw new Error("\u65E0\u6CD5\u627E\u5230\u56FE\u5C42\u5BF9\u5E94\u7684\u5168\u5C40\u7D22\u5F15");
        }
        return globalIndex;
    };
    return LayerList;
}());

function swapLayers(timeline, layerIndex1, layerIndex2) {
    var layers = timeline.layers;
    if (!(layerIndex1 >= 0 &&
        layerIndex1 < layers.length &&
        layerIndex2 >= 0 &&
        layerIndex2 < layers.length)) {
        console.error("图层索引超出范围。");
        return;
    }
    if (layerIndex1 === layerIndex2) {
        console.info("图层索引相同，无需交换。");
        return;
    }
    timeline.reorderLayer(layerIndex1, layerIndex2);
    timeline.reorderLayer(layerIndex2, layerIndex1);
    console.info("layerUtil.js:\u56FE\u5C42".concat(layerIndex1, "(").concat(layers[layerIndex1].name, ")\u548C\u56FE\u5C42").concat(layerIndex2, "(").concat(layers[layerIndex2].name, ")\u4EA4\u6362\u6210\u529F\u3002"));
}

;// ./src/LayerList/index.ts


;// ./src/Iterators/iter/Iterators.ts



var Iterators = (function () {
    function Iterators() {
    }
    Iterators.documents = function (docs) {
        var documents, documents_1, documents_1_1, dom, e_1_1;
        var e_1, _a;
        return (0,external_tslib_.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    documents = docs !== null && docs !== void 0 ? docs : fl.documents;
                    if (!documents || documents.length === 0)
                        return [2];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 8]);
                    documents_1 = (0,external_tslib_.__values)(documents), documents_1_1 = documents_1.next();
                    _b.label = 2;
                case 2:
                    if (!!documents_1_1.done) return [3, 5];
                    dom = documents_1_1.value;
                    return [4, new Context_.Context(dom)];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    documents_1_1 = documents_1.next();
                    return [3, 2];
                case 5: return [3, 8];
                case 6:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 8];
                case 7:
                    try {
                        if (documents_1_1 && !documents_1_1.done && (_a = documents_1.return)) _a.call(documents_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7];
                case 8: return [2];
            }
        });
    };
    Iterators.items = function (context) {
        var dom, items, items_1, items_1_1, item, e_2_1;
        var e_2, _a;
        var _b;
        return (0,external_tslib_.__generator)(this, function (_c) {
            switch (_c.label) {
                case 0:
                    dom = (_b = context === null || context === void 0 ? void 0 : context.dom) !== null && _b !== void 0 ? _b : UI.$dom;
                    if (!dom || !dom.library)
                        return [2];
                    items = dom.library.items;
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 6, 7, 8]);
                    items_1 = (0,external_tslib_.__values)(items), items_1_1 = items_1.next();
                    _c.label = 2;
                case 2:
                    if (!!items_1_1.done) return [3, 5];
                    item = items_1_1.value;
                    if (!item.timeline)
                        return [3, 4];
                    return [4, new Context_.Context(dom, item.timeline)];
                case 3:
                    _c.sent();
                    _c.label = 4;
                case 4:
                    items_1_1 = items_1.next();
                    return [3, 2];
                case 5: return [3, 8];
                case 6:
                    e_2_1 = _c.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 8];
                case 7:
                    try {
                        if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7];
                case 8: return [2];
            }
        });
    };
    Iterators.layers = function (context) {
        var _a, _b, layer, dom, timeline, e_3_1;
        var e_3, _c;
        return (0,external_tslib_.__generator)(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (!context.timeline)
                        return [2];
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, 7, 8]);
                    _a = (0,external_tslib_.__values)(context.timeline.layers), _b = _a.next();
                    _d.label = 2;
                case 2:
                    if (!!_b.done) return [3, 5];
                    layer = _b.value;
                    dom = context.dom, timeline = context.timeline;
                    return [4, new Context_.Context(dom, timeline, layer)];
                case 3:
                    _d.sent();
                    _d.label = 4;
                case 4:
                    _b = _a.next();
                    return [3, 2];
                case 5: return [3, 8];
                case 6:
                    e_3_1 = _d.sent();
                    e_3 = { error: e_3_1 };
                    return [3, 8];
                case 7:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7];
                case 8: return [2];
            }
        });
    };
    Iterators.frames = function (context) {
        var frames, i, dom, timeline, layer;
        return (0,external_tslib_.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!context.layer)
                        return [2];
                    frames = context.layer.frames;
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < frames.length)) return [3, 4];
                    if (i !== frames[i].startFrame)
                        return [3, 3];
                    dom = context.dom, timeline = context.timeline, layer = context.layer;
                    return [4, new Context_.Context(dom, timeline, layer, frames[i])];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3, 1];
                case 4: return [2];
            }
        });
    };
    Iterators.elements = function (context) {
        var _a, _b, element, dom, timeline, layer, frame, e_4_1;
        var e_4, _c;
        return (0,external_tslib_.__generator)(this, function (_d) {
            switch (_d.label) {
                case 0:
                    if (!context.frame)
                        return [2];
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, 7, 8]);
                    _a = (0,external_tslib_.__values)(context.frame.elements), _b = _a.next();
                    _d.label = 2;
                case 2:
                    if (!!_b.done) return [3, 5];
                    element = _b.value;
                    dom = context.dom, timeline = context.timeline, layer = context.layer, frame = context.frame;
                    return [4, new Context_.Context(dom, timeline, layer, frame, element)];
                case 3:
                    _d.sent();
                    _d.label = 4;
                case 4:
                    _b = _a.next();
                    return [3, 2];
                case 5: return [3, 8];
                case 6:
                    e_4_1 = _d.sent();
                    e_4 = { error: e_4_1 };
                    return [3, 8];
                case 7:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_4) throw e_4.error; }
                    return [7];
                case 8: return [2];
            }
        });
    };
    return Iterators;
}());


;// ./src/Iterators/iter/Walker.ts


var Walker = (function () {
    function Walker() {
    }
    Walker.walkElements = function () {
        var _a, _b, doc, _c, _d, item, _e, _f, layer, _g, _h, frame, _j, _k, elCtx, el, e_1_1, e_2_1, e_3_1, e_4_1, e_5_1;
        var e_5, _l, e_4, _m, e_3, _o, e_2, _p, e_1, _q;
        return (0,external_tslib_.__generator)(this, function (_r) {
            switch (_r.label) {
                case 0:
                    _r.trys.push([0, 29, 30, 31]);
                    _a = (0,external_tslib_.__values)(Iterators.documents()), _b = _a.next();
                    _r.label = 1;
                case 1:
                    if (!!_b.done) return [3, 28];
                    doc = _b.value;
                    _r.label = 2;
                case 2:
                    _r.trys.push([2, 25, 26, 27]);
                    _c = (e_4 = void 0, (0,external_tslib_.__values)(Iterators.items(doc))), _d = _c.next();
                    _r.label = 3;
                case 3:
                    if (!!_d.done) return [3, 24];
                    item = _d.value;
                    _r.label = 4;
                case 4:
                    _r.trys.push([4, 21, 22, 23]);
                    _e = (e_3 = void 0, (0,external_tslib_.__values)(Iterators.layers(item))), _f = _e.next();
                    _r.label = 5;
                case 5:
                    if (!!_f.done) return [3, 20];
                    layer = _f.value;
                    _r.label = 6;
                case 6:
                    _r.trys.push([6, 17, 18, 19]);
                    _g = (e_2 = void 0, (0,external_tslib_.__values)(Iterators.frames(layer))), _h = _g.next();
                    _r.label = 7;
                case 7:
                    if (!!_h.done) return [3, 16];
                    frame = _h.value;
                    _r.label = 8;
                case 8:
                    _r.trys.push([8, 13, 14, 15]);
                    _j = (e_1 = void 0, (0,external_tslib_.__values)(Iterators.elements(frame))), _k = _j.next();
                    _r.label = 9;
                case 9:
                    if (!!_k.done) return [3, 12];
                    elCtx = _k.value;
                    el = elCtx.element;
                    return [4, el];
                case 10:
                    _r.sent();
                    _r.label = 11;
                case 11:
                    _k = _j.next();
                    return [3, 9];
                case 12: return [3, 15];
                case 13:
                    e_1_1 = _r.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 15];
                case 14:
                    try {
                        if (_k && !_k.done && (_q = _j.return)) _q.call(_j);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7];
                case 15:
                    _h = _g.next();
                    return [3, 7];
                case 16: return [3, 19];
                case 17:
                    e_2_1 = _r.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 19];
                case 18:
                    try {
                        if (_h && !_h.done && (_p = _g.return)) _p.call(_g);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7];
                case 19:
                    _f = _e.next();
                    return [3, 5];
                case 20: return [3, 23];
                case 21:
                    e_3_1 = _r.sent();
                    e_3 = { error: e_3_1 };
                    return [3, 23];
                case 22:
                    try {
                        if (_f && !_f.done && (_o = _e.return)) _o.call(_e);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7];
                case 23:
                    _d = _c.next();
                    return [3, 3];
                case 24: return [3, 27];
                case 25:
                    e_4_1 = _r.sent();
                    e_4 = { error: e_4_1 };
                    return [3, 27];
                case 26:
                    try {
                        if (_d && !_d.done && (_m = _c.return)) _m.call(_c);
                    }
                    finally { if (e_4) throw e_4.error; }
                    return [7];
                case 27:
                    _b = _a.next();
                    return [3, 1];
                case 28: return [3, 31];
                case 29:
                    e_5_1 = _r.sent();
                    e_5 = { error: e_5_1 };
                    return [3, 31];
                case 30:
                    try {
                        if (_b && !_b.done && (_l = _a.return)) _l.call(_a);
                    }
                    finally { if (e_5) throw e_5.error; }
                    return [7];
                case 31: return [2];
            }
        });
    };
    Walker.walkFrames = function () {
        var _a, _b, doc, _c, _d, item, _e, _f, layer, _g, _h, frameCtx, frame, e_6_1, e_7_1, e_8_1, e_9_1;
        var e_9, _j, e_8, _k, e_7, _l, e_6, _m;
        return (0,external_tslib_.__generator)(this, function (_o) {
            switch (_o.label) {
                case 0:
                    _o.trys.push([0, 23, 24, 25]);
                    _a = (0,external_tslib_.__values)(Iterators.documents()), _b = _a.next();
                    _o.label = 1;
                case 1:
                    if (!!_b.done) return [3, 22];
                    doc = _b.value;
                    _o.label = 2;
                case 2:
                    _o.trys.push([2, 19, 20, 21]);
                    _c = (e_8 = void 0, (0,external_tslib_.__values)(Iterators.items(doc))), _d = _c.next();
                    _o.label = 3;
                case 3:
                    if (!!_d.done) return [3, 18];
                    item = _d.value;
                    _o.label = 4;
                case 4:
                    _o.trys.push([4, 15, 16, 17]);
                    _e = (e_7 = void 0, (0,external_tslib_.__values)(Iterators.layers(item))), _f = _e.next();
                    _o.label = 5;
                case 5:
                    if (!!_f.done) return [3, 14];
                    layer = _f.value;
                    _o.label = 6;
                case 6:
                    _o.trys.push([6, 11, 12, 13]);
                    _g = (e_6 = void 0, (0,external_tslib_.__values)(Iterators.frames(layer))), _h = _g.next();
                    _o.label = 7;
                case 7:
                    if (!!_h.done) return [3, 10];
                    frameCtx = _h.value;
                    frame = frameCtx.frame;
                    return [4, frame];
                case 8:
                    _o.sent();
                    _o.label = 9;
                case 9:
                    _h = _g.next();
                    return [3, 7];
                case 10: return [3, 13];
                case 11:
                    e_6_1 = _o.sent();
                    e_6 = { error: e_6_1 };
                    return [3, 13];
                case 12:
                    try {
                        if (_h && !_h.done && (_m = _g.return)) _m.call(_g);
                    }
                    finally { if (e_6) throw e_6.error; }
                    return [7];
                case 13:
                    _f = _e.next();
                    return [3, 5];
                case 14: return [3, 17];
                case 15:
                    e_7_1 = _o.sent();
                    e_7 = { error: e_7_1 };
                    return [3, 17];
                case 16:
                    try {
                        if (_f && !_f.done && (_l = _e.return)) _l.call(_e);
                    }
                    finally { if (e_7) throw e_7.error; }
                    return [7];
                case 17:
                    _d = _c.next();
                    return [3, 3];
                case 18: return [3, 21];
                case 19:
                    e_8_1 = _o.sent();
                    e_8 = { error: e_8_1 };
                    return [3, 21];
                case 20:
                    try {
                        if (_d && !_d.done && (_k = _c.return)) _k.call(_c);
                    }
                    finally { if (e_8) throw e_8.error; }
                    return [7];
                case 21:
                    _b = _a.next();
                    return [3, 1];
                case 22: return [3, 25];
                case 23:
                    e_9_1 = _o.sent();
                    e_9 = { error: e_9_1 };
                    return [3, 25];
                case 24:
                    try {
                        if (_b && !_b.done && (_j = _a.return)) _j.call(_a);
                    }
                    finally { if (e_9) throw e_9.error; }
                    return [7];
                case 25: return [2];
            }
        });
    };
    Walker.walkLayers = function () {
        var _a, _b, doc, _c, _d, item, _e, _f, layerCtx, layer, e_10_1, e_11_1, e_12_1;
        var e_12, _g, e_11, _h, e_10, _j;
        return (0,external_tslib_.__generator)(this, function (_k) {
            switch (_k.label) {
                case 0:
                    _k.trys.push([0, 17, 18, 19]);
                    _a = (0,external_tslib_.__values)(Iterators.documents()), _b = _a.next();
                    _k.label = 1;
                case 1:
                    if (!!_b.done) return [3, 16];
                    doc = _b.value;
                    _k.label = 2;
                case 2:
                    _k.trys.push([2, 13, 14, 15]);
                    _c = (e_11 = void 0, (0,external_tslib_.__values)(Iterators.items(doc))), _d = _c.next();
                    _k.label = 3;
                case 3:
                    if (!!_d.done) return [3, 12];
                    item = _d.value;
                    _k.label = 4;
                case 4:
                    _k.trys.push([4, 9, 10, 11]);
                    _e = (e_10 = void 0, (0,external_tslib_.__values)(Iterators.layers(item))), _f = _e.next();
                    _k.label = 5;
                case 5:
                    if (!!_f.done) return [3, 8];
                    layerCtx = _f.value;
                    layer = layerCtx.layer;
                    return [4, layer];
                case 6:
                    _k.sent();
                    _k.label = 7;
                case 7:
                    _f = _e.next();
                    return [3, 5];
                case 8: return [3, 11];
                case 9:
                    e_10_1 = _k.sent();
                    e_10 = { error: e_10_1 };
                    return [3, 11];
                case 10:
                    try {
                        if (_f && !_f.done && (_j = _e.return)) _j.call(_e);
                    }
                    finally { if (e_10) throw e_10.error; }
                    return [7];
                case 11:
                    _d = _c.next();
                    return [3, 3];
                case 12: return [3, 15];
                case 13:
                    e_11_1 = _k.sent();
                    e_11 = { error: e_11_1 };
                    return [3, 15];
                case 14:
                    try {
                        if (_d && !_d.done && (_h = _c.return)) _h.call(_c);
                    }
                    finally { if (e_11) throw e_11.error; }
                    return [7];
                case 15:
                    _b = _a.next();
                    return [3, 1];
                case 16: return [3, 19];
                case 17:
                    e_12_1 = _k.sent();
                    e_12 = { error: e_12_1 };
                    return [3, 19];
                case 18:
                    try {
                        if (_b && !_b.done && (_g = _a.return)) _g.call(_a);
                    }
                    finally { if (e_12) throw e_12.error; }
                    return [7];
                case 19: return [2];
            }
        });
    };
    Walker.walkItems = function () {
        var _a, _b, doc, _c, _d, itemCtx, item, e_13_1, e_14_1;
        var e_14, _e, e_13, _f;
        return (0,external_tslib_.__generator)(this, function (_g) {
            switch (_g.label) {
                case 0:
                    _g.trys.push([0, 11, 12, 13]);
                    _a = (0,external_tslib_.__values)(Iterators.documents()), _b = _a.next();
                    _g.label = 1;
                case 1:
                    if (!!_b.done) return [3, 10];
                    doc = _b.value;
                    _g.label = 2;
                case 2:
                    _g.trys.push([2, 7, 8, 9]);
                    _c = (e_13 = void 0, (0,external_tslib_.__values)(Iterators.items(doc))), _d = _c.next();
                    _g.label = 3;
                case 3:
                    if (!!_d.done) return [3, 6];
                    itemCtx = _d.value;
                    item = itemCtx.item;
                    return [4, item];
                case 4:
                    _g.sent();
                    _g.label = 5;
                case 5:
                    _d = _c.next();
                    return [3, 3];
                case 6: return [3, 9];
                case 7:
                    e_13_1 = _g.sent();
                    e_13 = { error: e_13_1 };
                    return [3, 9];
                case 8:
                    try {
                        if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                    }
                    finally { if (e_13) throw e_13.error; }
                    return [7];
                case 9:
                    _b = _a.next();
                    return [3, 1];
                case 10: return [3, 13];
                case 11:
                    e_14_1 = _g.sent();
                    e_14 = { error: e_14_1 };
                    return [3, 13];
                case 12:
                    try {
                        if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                    }
                    finally { if (e_14) throw e_14.error; }
                    return [7];
                case 13: return [2];
            }
        });
    };
    Walker.walkDocs = function () {
        var _a, _b, docCtx, doc, e_15_1;
        var e_15, _c;
        return (0,external_tslib_.__generator)(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 5, 6, 7]);
                    _a = (0,external_tslib_.__values)(Iterators.documents()), _b = _a.next();
                    _d.label = 1;
                case 1:
                    if (!!_b.done) return [3, 4];
                    docCtx = _b.value;
                    doc = docCtx.dom;
                    return [4, doc];
                case 2:
                    _d.sent();
                    _d.label = 3;
                case 3:
                    _b = _a.next();
                    return [3, 1];
                case 4: return [3, 7];
                case 5:
                    e_15_1 = _d.sent();
                    e_15 = { error: e_15_1 };
                    return [3, 7];
                case 6:
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_15) throw e_15.error; }
                    return [7];
                case 7: return [2];
            }
        });
    };
    return Walker;
}());


;// ./src/Iterators/index.ts



;// ./src/index.ts





/******/ 	return __webpack_exports__;
/******/ })()
;
});