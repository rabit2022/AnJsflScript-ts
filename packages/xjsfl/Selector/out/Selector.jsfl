(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("tslib"), require("lodash"), require("@xjafl/Collection"), require("@xjsfl/Context"));
	else if(typeof define === 'function' && define.amd)
		define(["tslib", "lodash", "@xjafl/Collection", "@xjsfl/Context"], factory);
	else if(typeof exports === 'object')
		exports["Selector"] = factory(require("tslib"), require("lodash"), require("@xjafl/Collection"), require("@xjsfl/Context"));
	else
		root["Selector"] = factory(root["tslib"], root["lodash"], root["@xjafl/Collection"], root["@xjsfl/Context"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__652__, __WEBPACK_EXTERNAL_MODULE__773__, __WEBPACK_EXTERNAL_MODULE__332__, __WEBPACK_EXTERNAL_MODULE__761__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 332:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__332__;

/***/ }),

/***/ 652:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__652__;

/***/ }),

/***/ 761:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__761__;

/***/ }),

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
  $: function() { return /* reexport */ $; },
  $$: function() { return /* reexport */ $$; },
  Selectors: function() { return /* reexport */ Selectors; }
});

// EXTERNAL MODULE: external "tslib"
var external_tslib_ = __webpack_require__(652);
;// ./src/Selectors/Selectors.types.ts
var scopeTypeMap = {
    Library: "Item",
    Document: "Element",
    Timeline: "Layer",
    Layer: "Frame",
};

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(773);
;// ./src/Selectors/expression/parser.ts

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
        for (var expression_1 = (0,external_tslib_.__values)(expression), expression_1_1 = expression_1.next(); !expression_1_1.done; expression_1_1 = expression_1.next()) {
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

;// ./src/Selector/Selector.ts

var Selector = (function () {
    function Selector(pattern) {
        this.pattern = "";
        this.object = "";
        this.name = "";
        this.method = null;
        this.params = null;
        this.range = null;
        this.keep = true;
        this.pattern = pattern;
    }
    Selector.prototype.filter = function (items) {
        if (!this.method || !this.params)
            return [];
        this.params[0] = items;
        var results = this.method.apply(this, (0,external_tslib_.__spreadArray)([], (0,external_tslib_.__read)(this.params), false));
        return Array.from(new Set(results));
    };
    Selector.prototype.test = function (item) {
        if (!this.method || !this.params)
            return false;
        this.params[0] = item;
        var state = Boolean(this.method.apply(this, (0,external_tslib_.__spreadArray)([], (0,external_tslib_.__read)(this.params), false)));
        return this.keep ? state : !state;
    };
    Selector.prototype.toString = function () {
        return "[object Selector type=\"".concat(this.type, "\" pattern=\"").concat(this.pattern, "\"]");
    };
    Selector.toString = function () {
        return "[class Selector]";
    };
    Selector.makeRX = function (expression, selector) {
        expression = expression.replace(/\*/g, ".*?");
        expression = Selector.makeRange(expression, selector)
            .replace(/\//g, "\\/")
            .replace(/([\(\)])/g, "\\$1");
        return new RegExp("^".concat(expression, "$"), "i");
    };
    Selector.makeRange = function (expression, selector) {
        var rxRange = /{(-?[\d.]+)\|(-?[\d.]+)}/;
        var matches = expression.match(rxRange);
        if (matches) {
            expression = expression.replace(rxRange, "([\\d\\.]+)");
            selector.range = {
                min: parseFloat(matches[1]),
                max: parseFloat(matches[2])
            };
        }
        return expression;
    };
    return Selector;
}());


;// ./src/Selectors/core/core/attribures.ts

function attribute(item, name, operand, value, range, custom) {
    if (custom === void 0) { custom = {}; }
    var _a = resolveProp(item, name, custom), prop = _a.prop, callbackUsed = _a.callbackUsed;
    if (!operand) {
        return callbackUsed ? Boolean(prop) : name in item;
    }
    if (typeof value === 'number') {
        if (range) {
            return inRange(prop, range);
        }
        return compareNumber(prop, operand, value);
    }
    var str = String(prop);
    if (value instanceof RegExp) {
        return compareRegex(str, operand, value);
    }
    if (isPatternMatchOperator(operand)) {
        return comparePattern(str, operand, String(value));
    }
    return compareString(str, operand, String(value));
}
function resolveProp(item, name, custom) {
    if (name.includes('.')) {
        return {
            prop: external_lodash_.get(item, name),
            callbackUsed: false,
        };
    }
    if (name in item) {
        return {
            prop: item[name],
            callbackUsed: false,
        };
    }
    var callback = custom[name];
    if (!callback) {
        throw new ReferenceError("Callback for custom attribute \"".concat(name, "\" not registered"));
    }
    return {
        prop: callback(item),
        callbackUsed: true,
    };
}
function compareNumber(prop, operand, value) {
    switch (operand) {
        case '=':
            return prop == value;
        case '!=':
            return prop != value;
        case '<':
            return prop < value;
        case '<=':
            return prop <= value;
        case '>':
            return prop > value;
        case '>=':
            return prop >= value;
        default:
            return false;
    }
}
function inRange(prop, range) {
    return prop >= range.min && prop <= range.max;
}
function compareRegex(prop, operand, regex) {
    switch (operand) {
        case '=':
            return regex.test(prop);
        case '!=':
            return !regex.test(prop);
        default:
            return false;
    }
}
function isPatternMatchOperator(op) {
    return op === '^=' || op === '$=' || op === '*=';
}
function comparePattern(prop, operand, value) {
    var pattern = "";
    switch (operand) {
        case '^=':
            pattern = "^".concat(value);
            break;
        case '$=':
            pattern = "".concat(value, "$");
            break;
        case '*=':
            pattern = value;
            break;
        default:
            throw new ReferenceError("Unsupported operand");
    }
    return new RegExp(pattern).test(prop);
}
function compareString(prop, operand, value) {
    switch (operand) {
        case '=':
            return prop === value;
        case '!=':
            return prop !== value;
        default:
            return false;
    }
}

;// ./src/Selectors/core/core/nth.ts
function nth(items, expression) {
    var matcher = parseNth(expression);
    if (!matcher)
        return [];
    return items.filter(function (_, i) { return matcher(i); });
}
function parseNth(expression) {
    var exp = expression.trim();
    if (exp === 'odd')
        return function (i) { return i % 2 === 0; };
    if (exp === 'even')
        return function (i) { return i % 2 === 1; };
    if (exp === 'random')
        return function () { return Math.random() < 0.5; };
    return parseAnPlusB(exp);
}
function parseAnPlusB(exp) {
    var match = exp.match(/^(\d+)?n([+-]\d+)?$|^\d+$/);
    if (!match)
        return null;
    if (!exp.includes('n')) {
        var index_1 = parseInt(exp, 10);
        return function (i) { return i === index_1 - 1; };
    }
    var a = match[1] ? parseInt(match[1], 10) : 1;
    var b = match[2] ? parseInt(match[2], 10) : 0;
    return function (i) {
        var pos = i + 1;
        return (pos - b) % a === 0 && pos >= b;
    };
}

;// ./src/Selectors/core/Core.ts



var Core;
(function (Core) {
    var filter;
    (function (filter) {
        filter.attribute = attribute;
    })(filter = Core.filter || (Core.filter = {}));
    var math;
    (function (math) {
        function range(str, range) {
            var value = parseFloat(str);
            return value >= range.min && value <= range.max;
        }
        math.range = range;
    })(math = Core.math || (Core.math = {}));
    var find;
    (function (find) {
        function first(items) {
            return items.length ? [items.shift()] : [];
        }
        find.first = first;
        function last(items) {
            return items.length ? [items.pop()] : [];
        }
        find.last = last;
        function even(items) {
            return Core.combo.nth(items, 'even');
        }
        find.even = even;
        function odd(items) {
            return Core.combo.nth(items, 'odd');
        }
        find.odd = odd;
        function random(items, amount) {
            if (amount === void 0) { amount = 0.5; }
            return items.filter(function () { return Math.random() < amount; });
        }
        find.random = random;
    })(find = Core.find || (Core.find = {}));
    var pseudo;
    (function (pseudo) {
        function Empty() {
        }
        pseudo.Empty = Empty;
    })(pseudo = Core.pseudo || (Core.pseudo = {}));
    var combo;
    (function (combo) {
        function not(items, expression, type) {
            var selectors = Selectors.parse(expression, type);
            selectors.forEach(function (s) {
                s.keep = false;
            });
            return Selectors.test(selectors, items);
        }
        combo.not = not;
        function contains() {
            throw new ReferenceError(':contains() not implemented');
        }
        combo.contains = contains;
        function has() {
            throw new ReferenceError(':has() not implemented');
        }
        combo.has = has;
        function random(items, expression) {
            var amount = parseFloat(expression);
            return Core.find.random(items, amount);
        }
        combo.random = random;
        combo.nth = nth;
    })(combo = Core.combo || (Core.combo = {}));
})(Core || (Core = {}));

;// ./src/Selectors/utils/processAttributeValue.ts

function processAttributeValue(attValue, selector) {
    var val = parseFloat(attValue);
    if (!Number.isNaN(val))
        return val;
    if (/[\*{}]/.test(attValue)) {
        return Selector.makeRX(attValue, selector);
    }
    return attValue;
}

;// ./src/Debug/debug.ts
var config = {
    DEBUG: false
};

;// ./src/Debug/index.ts


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
    UI.getItemName = function (item) {
        if (!item || !item.name) {
            return "";
        }
        var parts = item.name.split("/");
        return parts[parts.length - 1];
    };
    UI.setItemName = function (item, value) {
        if (item) {
            var parts = item.name.split("/");
            if (parts.length > 1) {
                parts[parts.length - 1] = value;
                item.name = parts.join("/");
            }
            else {
                item.name = value;
            }
        }
    };
    return UI;
}());


// EXTERNAL MODULE: external "@xjafl/Collection"
var Collection_ = __webpack_require__(332);
;// ./src/Selectors/Cases/timeline.ts

var TIMELINE;
(function (TIMELINE) {
    var pseudo;
    (function (pseudo) {
        function empty(timeline) {
            return !Collection_.SelectorIterators.layers(timeline, null, function (frame) { return frame.elements.length > 0; });
        }
        pseudo.empty = empty;
        function animated(timeline) {
            return Collection_.SelectorIterators.layers(timeline, null, function (frame) { return frame.tweenType !== 'none'; });
        }
        pseudo.animated = animated;
        function keyframed(timeline) {
            return Collection_.SelectorIterators.layers(timeline, null, function (frame) {
                return frame.startFrame > 0 && frame.elements.length > 0;
            });
        }
        pseudo.keyframed = keyframed;
        function scripted(timeline) {
            return Collection_.SelectorIterators.layers(timeline, null, function (frame) { return frame.actionScript !== ''; });
        }
        pseudo.scripted = scripted;
        function audible(timeline) {
            return Collection_.SelectorIterators.layers(timeline, null, function (frame) { return frame.soundLibraryItem != null; });
        }
        pseudo.audible = audible;
    })(pseudo = TIMELINE.pseudo || (TIMELINE.pseudo = {}));
})(TIMELINE || (TIMELINE = {}));

;// ./src/Selectors/Cases/item.ts






var ITEM;
(function (ITEM) {
    function register(pattern, callback) {
        return Selectors.register(pattern, callback, 'item');
    }
    ITEM.register = register;
    var filter;
    (function (filter) {
        function name(item, rx, range) {
            var itemName = UI.getItemName(item);
            var matches = itemName.match(rx);
            if (matches) {
                if (range) {
                    return Core.math.range(matches[1], range);
                }
                return true;
            }
            return false;
        }
        filter.name = name;
        function path(item, rx, range) {
            var matches = item.name.match(rx);
            if (matches) {
                if (range) {
                    return Core.math.range(matches[1], range);
                }
                return true;
            }
            return false;
        }
        filter.path = path;
        function Package(item, rx) {
            return !!item.linkageClassName && rx.test(item.linkageClassName);
        }
        filter.Package = Package;
        function Class(item, rxClass) {
            if (item.linkageClassName) {
                var cls = item.linkageClassName.split('.').pop();
                return rxClass.test(cls);
            }
            return false;
        }
        filter.Class = Class;
        function type(item, type) {
            var itemType = item.itemType.replace(/ /g, '');
            if (type === 'symbol') {
                return /movieclip|graphic|button/.test(itemType);
            }
            if (itemType === 'video' &&
                /video|linkedvideo|embeddedvideo/.test(type)) {
                return type === 'video' ? true :
                    item.videoType.replace(/ /g, '') === type;
            }
            return itemType === type;
        }
        filter.type = type;
    })(filter = ITEM.filter || (ITEM.filter = {}));
    var find;
    (function (find) {
        function parent(items) {
            var e_1, _a, e_2, _b;
            var paths = [];
            try {
                for (var items_1 = (0,external_tslib_.__values)(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                    var item = items_1_1.value;
                    if (item.name.includes('/')) {
                        var parent_1 = item.name.replace(/\/[^/]+$/, '');
                        paths.push(parent_1);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var unique = Array.from(new Set(paths));
            var result = [];
            try {
                for (var unique_1 = (0,external_tslib_.__values)(unique), unique_1_1 = unique_1.next(); !unique_1_1.done; unique_1_1 = unique_1.next()) {
                    var path = unique_1_1.value;
                    var index = UI.$library.findItemIndex(path);
                    if (index !== -1) {
                        result.push(UI.$library.items[index]);
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (unique_1_1 && !unique_1_1.done && (_b = unique_1.return)) _b.call(unique_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return result;
        }
        find.parent = parent;
        function children(parents) {
            var e_3, _a, e_4, _b;
            var result = [];
            try {
                for (var parents_1 = (0,external_tslib_.__values)(parents), parents_1_1 = parents_1.next(); !parents_1_1.done; parents_1_1 = parents_1.next()) {
                    var parent_2 = parents_1_1.value;
                    if (parent_2.itemType !== 'folder')
                        continue;
                    try {
                        for (var _c = (e_4 = void 0, (0,external_tslib_.__values)(UI.$library.items)), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var item = _d.value;
                            if (item !== parent_2 && item.name.startsWith(parent_2.name)) {
                                var path = item.name.slice(parent_2.name.length + 1);
                                if (!path.includes('/')) {
                                    result.push(item);
                                }
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (parents_1_1 && !parents_1_1.done && (_a = parents_1.return)) _a.call(parents_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return result;
        }
        find.children = children;
        function descendants(parents) {
            var e_5, _a, e_6, _b;
            var result = [];
            try {
                for (var parents_2 = (0,external_tslib_.__values)(parents), parents_2_1 = parents_2.next(); !parents_2_1.done; parents_2_1 = parents_2.next()) {
                    var parent_3 = parents_2_1.value;
                    if (parent_3.itemType !== 'folder')
                        continue;
                    try {
                        for (var _c = (e_6 = void 0, (0,external_tslib_.__values)(UI.$library.items)), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var item = _d.value;
                            if (item !== parent_3 && item.name.startsWith(parent_3.name)) {
                                result.push(item);
                            }
                        }
                    }
                    catch (e_6_1) { e_6 = { error: e_6_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                        }
                        finally { if (e_6) throw e_6.error; }
                    }
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (parents_2_1 && !parents_2_1.done && (_a = parents_2.return)) _a.call(parents_2);
                }
                finally { if (e_5) throw e_5.error; }
            }
            return result;
        }
        find.descendants = descendants;
        function selected(items) {
            var selected = UI.$library.getSelectedItems() || [];
            return external_lodash_.intersection(items, selected);
        }
        find.selected = selected;
    })(find = ITEM.find || (ITEM.find = {}));
    var pseudo;
    (function (pseudo) {
        function exported(item) {
            return item.linkageExportForAS === true;
        }
        pseudo.exported = exported;
        function timeline(item) {
            return /^(movie clip|graphic|button)/.test(item.itemType);
        }
        pseudo.timeline = timeline;
        function empty(item) {
            if (item.itemType === 'folder') {
                var children = ITEM.find.children([item]);
                return children.length === 0;
            }
            if (ITEM.filter.type(item, 'symbol')) {
                return TIMELINE.pseudo.empty(item.timeline);
            }
            return false;
        }
        pseudo.empty = empty;
        function animated(item) {
            if (ITEM.filter.type(item, 'symbol')) {
                return TIMELINE.pseudo.animated(item.timeline);
            }
            return false;
        }
        pseudo.animated = animated;
        function keyframed(item) {
            if (ITEM.filter.type(item, 'symbol')) {
                return TIMELINE.pseudo.keyframed(item.timeline);
            }
            return false;
        }
        pseudo.keyframed = keyframed;
        function scripted(item) {
            if (ITEM.filter.type(item, 'symbol')) {
                return TIMELINE.pseudo.scripted(item.timeline);
            }
            return false;
        }
        pseudo.scripted = scripted;
        function audible(item) {
            if (ITEM.filter.type(item, 'symbol')) {
                return TIMELINE.pseudo.audible(item.timeline);
            }
            return false;
        }
        pseudo.audible = audible;
    })(pseudo = ITEM.pseudo || (ITEM.pseudo = {}));
    var custom;
    (function (custom) {
        function Empty() {
        }
        custom.Empty = Empty;
    })(custom = ITEM.custom || (ITEM.custom = {}));
})(ITEM || (ITEM = {}));

;// ./src/Selectors/Cases/element.ts




var ELEMENT;
(function (ELEMENT) {
    function register(pattern, callback) {
        return Selectors.register(pattern, callback, 'element');
    }
    ELEMENT.register = register;
    var filter;
    (function (filter) {
        function name(item, rx, range) {
            return ITEM.filter.path(item, rx, range);
        }
        filter.name = name;
        function path(item, rx, range) {
            if ((item).libraryItem) {
                return ITEM.filter.path((item).libraryItem, rx, range);
            }
            return false;
        }
        filter.path = path;
        function type(item, type) {
            switch (item.elementType) {
                case 'instance':
                    if (item.symbolType) {
                        if (type === 'symbol')
                            return true;
                        return (type === 'instance' ||
                            item.symbolType.replace(/ /g, '') === type);
                    }
                    return (type === 'instance' ||
                        item.instanceType.replace(/ /g, '') === type);
                case 'text':
                    if (type === 'text')
                        return true;
                    return item.textType.replace(/ /g, '') === type;
                case 'shape':
                    if (item.isRectangleObject || item.isOvalObject) {
                        return type === 'primitive';
                    }
                    if (item.isGroup) {
                        return type === 'group';
                    }
                    return type === 'shape';
            }
            return false;
        }
        filter.type = type;
        function Package(item, rx) {
            return ((item).libraryItem &&
                ITEM.filter.Package((item).libraryItem, rx));
        }
        filter.Package = Package;
        function Class(item, rx) {
            return ((item).libraryItem &&
                ITEM.filter.Class((item).libraryItem, rx));
        }
        filter.Class = Class;
    })(filter = ELEMENT.filter || (ELEMENT.filter = {}));
    var find;
    (function (find) {
        function selected(items) {
            var selection = UI.$dom.selection;
            return items.filter(function (el) { return selection.indexOf(el) !== -1; });
        }
        find.selected = selected;
    })(find = ELEMENT.find || (ELEMENT.find = {}));
    var pseudo;
    (function (pseudo) {
        function empty(element) {
            if ((element).symbolType) {
                return TIMELINE.pseudo.empty((element).libraryItem.timeline);
            }
            return false;
        }
        pseudo.empty = empty;
        function animated(element) {
            if ((element).symbolType) {
                return TIMELINE.pseudo.animated((element).libraryItem.timeline);
            }
            return false;
        }
        pseudo.animated = animated;
        function keyframed(element) {
            if ((element).symbolType) {
                return TIMELINE.pseudo.keyframed((element).libraryItem.timeline);
            }
            return false;
        }
        pseudo.keyframed = keyframed;
        function scripted(element) {
            if ((element).symbolType) {
                return TIMELINE.pseudo.scripted((element).libraryItem.timeline);
            }
            return false;
        }
        pseudo.scripted = scripted;
        function scriptable(element) {
            var NotGraphicAndNotBitmap = !(element.symbolType === 'graphic' || element.instanceType === 'bitmap');
            var InstanceFiltered = element.elementType === 'instance' && NotGraphicAndNotBitmap;
            var TextFiltered = (element.elementType === 'text' && /(dynamic|input)/.test(element.textType));
            var IstlfText = element.elementType === 'tlfText';
            return (InstanceFiltered || TextFiltered || IstlfText);
        }
        pseudo.scriptable = scriptable;
        function audible(element) {
            if (element.symbolType) {
                return TIMELINE.pseudo.audible(element.libraryItem.timeline);
            }
            return false;
        }
        pseudo.audible = audible;
        function exported(element) {
            if (element.libraryItem) {
                return ITEM.pseudo.exported(element.libraryItem);
            }
            return false;
        }
        pseudo.exported = exported;
        function filtered(element) {
            return !!(element.filters && element.filters.length > 0);
        }
        pseudo.filtered = filtered;
        function tinted(element) {
            return element.colorMode === 'tint';
        }
        pseudo.tinted = tinted;
        function transparent(element) {
            return element.colorMode === 'alpha';
        }
        pseudo.transparent = transparent;
        function component(element) {
            return element.instanceType === 'compiled clip';
        }
        pseudo.component = component;
    })(pseudo = ELEMENT.pseudo || (ELEMENT.pseudo = {}));
    var custom;
    (function (custom) {
        function Empty() {
        }
        custom.Empty = Empty;
    })(custom = ELEMENT.custom || (ELEMENT.custom = {}));
})(ELEMENT || (ELEMENT = {}));

;// ./src/Selectors/Cases/index.ts


var Cases;
(function (Cases) {
    Cases.element = ELEMENT;
    Cases.item = ITEM;
})(Cases || (Cases = {}));

;// ./src/Selectors/Selectors.ts









var Selectors = (function () {
    function Selectors() {
    }
    Selectors.select = function (expression, items, scope) {
        var e_1, _a;
        if (items.length === 0) {
            return items;
        }
        var key = scope.constructor.name;
        var type = scopeTypeMap[key];
        if (!type) {
            throw new TypeError("Invalid scope \"".concat(scope, "\" supplied to Selector.select()"));
        }
        if (expression === "*") {
            return items;
        }
        if (type === "Item" &&
            /:(first|last|even|odd|nth)\b/.test(expression)) {
            items = external_lodash_.sortBy(items, function (item) { return String(item.name).toLowerCase(); });
        }
        var expressions = parseExpression(expression);
        var results = [];
        try {
            for (var expressions_1 = (0,external_tslib_.__values)(expressions), expressions_1_1 = expressions_1.next(); !expressions_1_1.done; expressions_1_1 = expressions_1.next()) {
                var expr = expressions_1_1.value;
                var selectors = this.parse(expr, type);
                var _results = Selectors.test(selectors, items);
                results = results.concat(_results);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (expressions_1_1 && !expressions_1_1.done && (_a = expressions_1.return)) _a.call(expressions_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return Array.from(new Set(results));
    };
    Selectors.register = function (pattern, callback, type) {
        var matches = String(pattern).match(/([:\[])(\w+)/);
        if (!matches) {
            throw new Error("Invalid pattern \"".concat(pattern, "\" supplied"));
        }
        if (!/^(item|element)$/i.test(type)) {
            throw new Error("Invalid type \"".concat(type, "\" supplied"));
        }
        var selector = matches[2];
        var group = "pseudo";
        if (matches[1] === ":") {
            group = "pseudo";
        }
        else if (matches[1] == '[') {
            group = "custom";
        }
        Cases[type][group][selector] = callback;
        return Selectors;
    };
    Selectors.parse = function (expression, type) {
        var chunker = /(:([\-\w]+)\((.+)\))|([A-Za-z0-9_*][^:\[]*)|\/([\-\w\s\/_*{|}]+)|\.([*A-Z][\w*]+)|\.([a-z][\w.*]+)|:([a-z]\w+)|\[(([\w\.]+)([\^$*!=<>]{1,2})?(.+?)?)\]/g;
        var selectors = [];
        var exec;
        var object = Cases[type.toLowerCase()];
        var core = Core;
        while ((exec = chunker.exec(expression))) {
            var result = {
                full: exec[0],
                combo: exec[1],
                combo_type: exec[2],
                combo_selector: exec[3],
                name: exec[4],
                path: exec[5],
                Class: exec[6],
                package: exec[7],
                pseudo: exec[8],
                attribute: exec[9],
                attribute_name: exec[10],
                attribute_operator: exec[11],
                attribute_value: exec[12],
            };
            var selector = new Selector(result.full);
            if (result.combo) {
                selector.type = "combo";
                selector.name = result.combo_type;
                selector.method = core.combo[result.combo_type];
                selector.params = [null, result.combo_selector, type];
            }
            else if (result.name) {
                selector.type = "filter";
                selector.name = "name";
                selector.method = object.filter.name;
                selector.params = [null, Selector.makeRX(result.name, selector), selector.range];
            }
            else if (result.path) {
                selector.type = "filter";
                selector.name = "path";
                selector.method = object.filter.path;
                selector.params = [
                    null,
                    Selector.makeRX(result.path.replace(/(^\/+|\/+$)/g, ""), selector),
                    selector.range
                ];
            }
            else if (result.Class) {
                selector.type = 'filter';
                selector.name = 'Class';
                selector.method = object.filter.Class;
                selector.params = [null, Selector.makeRX(result.Class, selector)];
            }
            else if (result.package) {
                selector.type = 'filter';
                selector.name = 'Package';
                selector.method = object.filter.Package;
                selector.params = [null, Selector.makeRX(result.package, selector)];
            }
            else if (result.pseudo) {
                var name = result.pseudo;
                selector.name = name;
                var method = void 0;
                if (/instance|symbol|bitmap|sound|embeddedvideo|linkedvideo|video|compiledclip|text|folder|static|dynamic|input|primitive|group|shape|movieclip|graphic|button/.test(name)) {
                    name;
                    selector.type = 'type';
                    selector.params = [null, name];
                    method = object.filter.type;
                }
                else if (/selected|children|descendants|parent|first|last|even|odd|random/.test(name)) {
                    name;
                    selector.type = 'find';
                    selector.params = [null];
                    method = object.find[name]
                        || core.find[name];
                }
                else {
                    name;
                    selector.type = 'pseudo';
                    selector.params = [null, name];
                    method = object.pseudo[name] || core.pseudo[name];
                }
                selector.name = name;
                selector.method = method;
            }
            else if (result.attribute) {
                selector.type = 'filter';
                selector.name = 'attribute';
                selector.method = core.filter.attribute;
                var attName = result.attribute_name;
                var attOperand = result.attribute_operator;
                var attValue = processAttributeValue(result.attribute_value, selector);
                selector.params = [null, attName, attOperand, attValue, selector.range, object.custom];
            }
            else {
                throw new TypeError("TypeError in Selectors.parse(): Unrecognised pattern \"".concat(selector.pattern, "\""));
            }
            if (!selector.method) {
                throw new TypeError("Unrecognised selector \"".concat(selector.pattern, "\"  in ").concat(type, "  Selector function"));
            }
            selectors.push(selector);
        }
        return selectors;
    };
    Selectors.test = function (selectors, items) {
        var e_2, _a, e_3, _b;
        if (selectors.length === 0) {
            return [];
        }
        if (config.DEBUG) {
            console.log("Selectors");
            console.inspect(selectors, "Selectors");
        }
        try {
            for (var selectors_1 = (0,external_tslib_.__values)(selectors), selectors_1_1 = selectors_1.next(); !selectors_1_1.done; selectors_1_1 = selectors_1.next()) {
                var selector = selectors_1_1.value;
                var temp = [];
                if (selector.type === "find" || selector.type === "combo") {
                    var result = selector.filter(items);
                    temp.push.apply(temp, (0,external_tslib_.__spreadArray)([], (0,external_tslib_.__read)(result), false));
                }
                else {
                    try {
                        for (var items_1 = (e_3 = void 0, (0,external_tslib_.__values)(items)), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                            var item = items_1_1.value;
                            var state = selector.test(item);
                            if (state) {
                                temp.push(item);
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (items_1_1 && !items_1_1.done && (_b = items_1.return)) _b.call(items_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
                items = temp;
                if (items.length === 0) {
                    break;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (selectors_1_1 && !selectors_1_1.done && (_a = selectors_1.return)) _a.call(selectors_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return items;
    };
    Selectors.toString = function () {
        return "[class Selectors]";
    };
    return Selectors;
}());


;// ./src/Selectors/index.ts


;// ./src/ItemSelector/ItemSelector.ts



function resolveParams(expression, elements, dom, context) {
    var documentRef = dom || (context ? context.dom : null);
    if (!documentRef) {
        throw new ReferenceError("ReferenceError in $$(): Open a document before attempting to select items");
    }
    var library = documentRef.library;
    var items = library.items;
    if (elements instanceof LibraryItem) {
        if (elements && elements instanceof FolderItem) {
            items = library.items.filter(function (element) { return element.name.startsWith("".concat(elements.name, "/")); });
        }
    }
    else if (elements instanceof Collection_.ElementCollection) {
        items = elements.items.toArray();
        documentRef = elements.dom || documentRef;
    }
    else if (elements instanceof Collection_.ItemCollection) {
        items = elements.toArray();
        documentRef = elements.dom || documentRef;
    }
    else if (Array.isArray(elements)) {
        items = elements;
    }
    return { expression: expression, items: items, dom: documentRef, library: library };
}
function $$() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _a = resolveParams.apply(void 0, (0,external_tslib_.__spreadArray)([], (0,external_tslib_.__read)(args), false)), expression = _a.expression, items = _a.items, dom = _a.dom, library = _a.library;
    if (items && !expression) {
        return new Collection_.ItemCollection(items, dom);
    }
    var filteredItems = Selectors.select(expression, items, library);
    return new Collection_.ItemCollection(filteredItems, dom);
}

;// ./src/ItemSelector/index.ts


// EXTERNAL MODULE: external "@xjsfl/Context"
var Context_ = __webpack_require__(761);
;// ./src/ElementSelector/ElementSelector.ts





function ElementSelector_resolveParams(expression, elements, dom, context) {
    var elements1;
    var context1;
    if (Array.isArray(elements))
        elements1 = elements;
    else if (elements instanceof Collection_.ElementCollection) {
        elements1 = elements.toArray();
        dom = elements.dom;
    }
    if (context && context.dom) {
        dom = context.dom || UI.$dom;
        context1 = context;
    }
    else if (dom) {
        var ctx = new Context_.Context();
        ctx.setDOM(dom);
        ctx.setTimeline(true);
        context1 = ctx;
    }
    else if (UI.$dom) {
        context1 = Context_.Context.create();
        dom = context1.dom;
    }
    if (!dom) {
        throw new ReferenceError('ReferenceError in $(): Open a document before attempting to select elements');
    }
    return { expression: expression, elements: elements1, dom: dom, context: context1 };
}
function getAllElements(ctx) {
    var e_1, _a;
    var result = [];
    try {
        for (var _b = (0,external_tslib_.__values)(ctx.timeline.layers), _c = _b.next(); !_c.done; _c = _b.next()) {
            var layer = _c.value;
            if (layer.layerType === 'folder')
                continue;
            if (layer.locked)
                continue;
            ctx.setLayer(layer).setFrame(true);
            result.push.apply(result, (0,external_tslib_.__spreadArray)([], (0,external_tslib_.__read)(ctx.frame.elements), false));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
function $() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _a = ElementSelector_resolveParams.apply(void 0, (0,external_tslib_.__spreadArray)([], (0,external_tslib_.__read)(args), false)), expression = _a.expression, srcElements = _a.elements, document1 = _a.dom, context = _a.context;
    var elements = srcElements;
    if (elements && !expression) {
        return new Collection_.ElementCollection(elements, document1);
    }
    if (!elements) {
        elements = getAllElements(context);
    }
    var result = Selectors.select(expression, elements, document1);
    return new Collection_.ElementCollection(result, document1);
}

;// ./src/ElementSelector/index.ts


;// ./src/index.ts




/******/ 	return __webpack_exports__;
/******/ })()
;
});