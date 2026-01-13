(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Validation"] = factory();
	else
		root["Validation"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
  CheckCondition: function() { return /* reexport */ CheckCondition; },
  CheckDocument: function() { return /* reexport */ CheckDocument; },
  CheckInSymbol: function() { return /* reexport */ CheckInSymbol; },
  CheckMode: function() { return /* reexport */ CheckMode; },
  CheckSelectedItems: function() { return /* reexport */ CheckSelectedItems; },
  CheckSelectedLayers: function() { return /* reexport */ CheckSelectedLayers; },
  CheckSelection: function() { return /* reexport */ CheckSelection; },
  CheckSelectionAll: function() { return /* reexport */ CheckSelectionAll; },
  CheckSelectionAny: function() { return /* reexport */ CheckSelectionAny; },
  CheckVariableRedeclaration: function() { return /* reexport */ CheckVariableRedeclaration; },
  LayerCondition: function() { return /* reexport */ LayerCondition; },
  LibraryCondition: function() { return /* reexport */ LibraryCondition; }
});

;// ./src/types/validation/conditionTypes.ts
var LayerCondition;
(function (LayerCondition) {
    LayerCondition["NoLimit"] = "No limit";
    LayerCondition["NotZero"] = "Not Zero";
    LayerCondition["Zero"] = "Zero";
    LayerCondition["OnlyOne"] = "Only one";
    LayerCondition["OnlyTwo"] = "Only two";
    LayerCondition["More"] = "More";
    LayerCondition["GT0"] = ">0";
    LayerCondition["EQ0"] = "=0";
    LayerCondition["EQ1"] = "=1";
    LayerCondition["EQ2"] = "=2";
    LayerCondition["GT1"] = ">1";
})(LayerCondition || (LayerCondition = {}));
var LibraryCondition;
(function (LibraryCondition) {
    LibraryCondition["NoLimit"] = "No limit";
    LibraryCondition["NotZero"] = "Not Zero";
    LibraryCondition["Zero"] = "Zero";
    LibraryCondition["OnlyOne"] = "Only one";
    LibraryCondition["OnlyTwo"] = "Only two";
    LibraryCondition["More"] = "More";
    LibraryCondition["GT0"] = ">0";
    LibraryCondition["EQ0"] = "=0";
    LibraryCondition["EQ1"] = "=1";
    LibraryCondition["EQ2"] = "=2";
    LibraryCondition["GT1"] = ">1";
})(LibraryCondition || (LibraryCondition = {}));

;// ./src/types/validation/selectionTypes.ts
var CheckMode;
(function (CheckMode) {
    CheckMode["SelectElement"] = "selectElement";
    CheckMode["SelectFrame"] = "selectFrame";
    CheckMode["ElementOnFrame"] = "elementOnFrame";
    CheckMode["SelectLibItem"] = "selectLibItem";
    CheckMode["SelectLayer"] = "selectLayer";
    CheckMode["SelectedFrameDuration"] = "selectedFrameDuration";
    CheckMode["SelectedFrameFirstDuration"] = "selectedFrameFirstDuration";
})(CheckMode || (CheckMode = {}));
var CheckCondition;
(function (CheckCondition) {
    CheckCondition["NoLimit"] = "No limit";
    CheckCondition["NotZero"] = "Not Zero";
    CheckCondition["Zero"] = "Zero";
    CheckCondition["OnlyOne"] = "Only one";
    CheckCondition["OnlyTwo"] = "Only two";
    CheckCondition["More"] = "More";
})(CheckCondition || (CheckCondition = {}));

;// ./src/validation/base/check/CheckVariableRedeclaration.ts
function CheckVariableRedeclaration(variable, name, expectedValue) {
    if (expectedValue !== undefined) {
        if (variable !== expectedValue) {
            var msg = "\u53D8\u91CF \"".concat(name, "\" \u7684\u503C\u88AB\u610F\u5916\u4FEE\u6539\u6216\u906E\u853D\u3002\u671F\u671B: ").concat(String(expectedValue), ", \u5B9E\u9645: ").concat(String(variable));
            console.warn("[Redeclaration Check] " + msg);
            throw new Error(msg);
        }
    }
    else if (variable === undefined) {
        var msg = "\u53D8\u91CF \"".concat(name, "\" \u5728\u4F5C\u7528\u57DF\u5185\u88AB\u91CD\u65B0\u58F0\u660E\uFF08\u5982 var/let\uFF09\uFF0C\u5BFC\u81F4\u5176\u503C\u4E3A undefined\uFF0C\u53EF\u80FD\u906E\u853D\u4E86\u5916\u90E8\u53D8\u91CF\u3002");
        console.warn("[Redeclaration Check] " + msg);
    }
}

;// ./src/validation/base/check/selections/selectionUtils.ts
var _a, _b, _c, _d, _e, _f, _g, _h;

var CONDITION_ALIAS_MAP = {
    "=0": CheckCondition.Zero,
    ">0": CheckCondition.NotZero,
    "=1": CheckCondition.OnlyOne,
    "=2": CheckCondition.OnlyTwo,
    ">=2": CheckCondition.More
};
var MESSAGES = (_a = {},
    _a[CheckMode.SelectElement] = (_b = {},
        _b[CheckCondition.NoLimit] = null,
        _b[CheckCondition.NotZero] = "请选择一个元件。",
        _b[CheckCondition.Zero] = "请至少选择一个元件。",
        _b[CheckCondition.OnlyOne] = "请只选择一个元件。",
        _b[CheckCondition.OnlyTwo] = "请同时选择两个元件。",
        _b[CheckCondition.More] = "请选择多个元件。",
        _b),
    _a[CheckMode.SelectFrame] = (_c = {},
        _c[CheckCondition.NoLimit] = null,
        _c[CheckCondition.NotZero] = "请选择一个帧。",
        _c[CheckCondition.Zero] = "请至少选择一个帧。",
        _c[CheckCondition.OnlyOne] = "请只选择一个帧。",
        _c[CheckCondition.OnlyTwo] = "请同时选择两个帧。",
        _c[CheckCondition.More] = "请选择多个帧。",
        _c),
    _a[CheckMode.ElementOnFrame] = (_d = {},
        _d[CheckCondition.NoLimit] = null,
        _d[CheckCondition.NotZero] = "当前帧上需要有元件。",
        _d[CheckCondition.Zero] = "当前帧上至少需要一个元件。",
        _d[CheckCondition.OnlyOne] = "当前帧上只能有一个元件。",
        _d[CheckCondition.OnlyTwo] = "当前帧上只能有两个元件。",
        _d[CheckCondition.More] = "当前帧上需要多个元件。",
        _d),
    _a[CheckMode.SelectLibItem] = (_e = {},
        _e[CheckCondition.NoLimit] = null,
        _e[CheckCondition.NotZero] = "请选择库中的一个项目。",
        _e[CheckCondition.Zero] = "请至少选择一个库项目。",
        _e[CheckCondition.OnlyOne] = "请只选择一个库项目。",
        _e[CheckCondition.OnlyTwo] = "请同时选择两个库项目。",
        _e[CheckCondition.More] = "请选择多个库项目。",
        _e),
    _a[CheckMode.SelectLayer] = (_f = {},
        _f[CheckCondition.NoLimit] = null,
        _f[CheckCondition.NotZero] = "请选择一个图层。",
        _f[CheckCondition.Zero] = "请至少选择一个图层。",
        _f[CheckCondition.OnlyOne] = "请只选择一个图层。",
        _f[CheckCondition.OnlyTwo] = "请同时选择两个图层。",
        _f[CheckCondition.More] = "请选择多个图层。",
        _f),
    _a[CheckMode.SelectedFrameDuration] = (_g = {},
        _g[CheckCondition.NoLimit] = null,
        _g[CheckCondition.NotZero] = "所选帧总时长 不能为 0 帧。",
        _g[CheckCondition.Zero] = "所选帧总时长 至少为 1 帧。",
        _g[CheckCondition.OnlyOne] = "所选帧总时长 只能为 1 帧。",
        _g[CheckCondition.OnlyTwo] = "所选帧总时长 只能为 2 帧。",
        _g[CheckCondition.More] = "所选帧总时长 不能小于 2 帧。",
        _g),
    _a[CheckMode.SelectedFrameFirstDuration] = (_h = {},
        _h[CheckCondition.NoLimit] = null,
        _h[CheckCondition.NotZero] = "所选帧的 第一段 时长 不能为 0 帧。",
        _h[CheckCondition.Zero] = "所选帧的 第一段 时长 至少为 1 帧。",
        _h[CheckCondition.OnlyOne] = "所选帧的 第一段 时长 只能为 1 帧。",
        _h[CheckCondition.OnlyTwo] = "所选帧的 第一段 时长 只能为 2 帧。",
        _h[CheckCondition.More] = "所选帧的 第一段 时长 不能小于 2 帧。",
        _h),
    _a);
function checkCondition(condition, length) {
    switch (condition) {
        case CheckCondition.NoLimit:
            return true;
        case CheckCondition.NotZero:
            return length > 0;
        case CheckCondition.Zero:
            return length === 0;
        case CheckCondition.OnlyOne:
            return length === 1;
        case CheckCondition.OnlyTwo:
            return length === 2;
        case CheckCondition.More:
            return length > 2;
        default:
            throw new Error("\u672A\u77E5\u6761\u4EF6: ".concat(condition));
    }
}

;// ./src/validation/base/check/selections/CheckSelection.ts



function IsEnumValue(enumObj, value) {
    if (typeof value !== 'string' && typeof value !== 'number') {
        return false;
    }
    var values = Object.keys(enumObj).map(function (key) { return enumObj[key]; });
    return values.indexOf(value) !== -1;
}
function CheckSelection(selection, mode, condition, exTips) {
    if (mode === void 0) { mode = CheckMode.SelectElement; }
    if (condition === void 0) { condition = CheckCondition.NoLimit; }
    if (exTips === void 0) { exTips = null; }
    CheckVariableRedeclaration(selection, "selection");
    if (mode === null) {
        alert("模式不能为 null，请指定一个有效的模式！");
        return false;
    }
    if (condition === null) {
        alert("条件不能为 null，请指定一个有效的条件！");
        return false;
    }
    var resolvedCondition;
    if (typeof condition === "string") {
        if (IsEnumValue(CheckCondition, condition)) {
            resolvedCondition = condition;
        }
        else if (CONDITION_ALIAS_MAP[condition]) {
            resolvedCondition = CONDITION_ALIAS_MAP[condition];
        }
        else {
            alert("无效的条件：" + condition);
            return false;
        }
    }
    else {
        resolvedCondition = condition;
    }
    if (!IsEnumValue(CheckMode, mode)) {
        alert("无效的模式：" + mode);
        return false;
    }
    var length = selection.length;
    if (!checkCondition(resolvedCondition, length)) {
        var defaultMessage = MESSAGES[mode][resolvedCondition];
        var message = exTips !== null && exTips !== void 0 ? exTips : defaultMessage;
        if (message)
            alert(message);
        return false;
    }
    return true;
}

;// ./src/validation/flash/check/CheckDocument.ts
function CheckDocument(doc) {
    var currentDoc = doc !== null && doc !== void 0 ? doc : (typeof fl !== "undefined" ? fl.getDocumentDOM() : null);
    if (!currentDoc) {
        return {
            success: false,
            message: "请打开一个 [.fla] 文件或者创建一个新文档"
        };
    }
    return { success: true, doc: currentDoc };
}

;// ./src/validation/flash/check/CheckInSymbol.ts
function CheckInSymbol() {
    var doc = fl.getDocumentDOM();
    if (!doc) {
        alert("未打开任何文档！");
        return null;
    }
    var currentTimeline = doc.getTimeline();
    var mainTimeline = doc.timelines[0];
    if (currentTimeline === mainTimeline) {
        alert("请进入元件后使用该功能！");
        return null;
    }
    return {
        currentTimeline: currentTimeline,
        mainTimeline: mainTimeline
    };
}

;// ./src/validation/flash/check/CheckSelectedItems.ts



function CheckSelectedItems(library, condition, exTips) {
    if (condition === void 0) { condition = LibraryCondition.NotZero; }
    var selectedItems = library.getSelectedItems();
    var isValid = CheckSelection(selectedItems, CheckMode.SelectLibItem, condition, exTips);
    return isValid ? selectedItems : null;
}

;// ./src/validation/flash/check/CheckSelectedLayers.ts



function CheckSelectedLayers(timeline, condition, exTips) {
    if (condition === void 0) { condition = LayerCondition.NotZero; }
    var selectedLayers = timeline.getSelectedLayers();
    var isValid = CheckSelection(selectedLayers, CheckMode.SelectLayer, condition, exTips);
    return isValid ? selectedLayers : null;
}

;// ./src/validation/flash/check/rules/ruleUtils.ts
function parseRule(ruleStr) {
    var trimmed = ruleStr.trim();
    var match = trimmed.match(/^(>=|<=|>|<|==|!=)\s*(-?\d+)$/);
    if (!match) {
        throw new Error("\u89C4\u5219\u683C\u5F0F\u9519\u8BEF\uFF1A\"".concat(ruleStr, "\"\u3002\u5E94\u4E3A\u64CD\u4F5C\u7B26+\u6570\u5B57\uFF0C\u5982 \">=2\""));
    }
    return {
        op: match[1],
        val: Number(match[2])
    };
}
function checkRule(length, rule) {
    var op = rule.op, val = rule.val;
    switch (op) {
        case ">":
            return length > val;
        case ">=":
            return length >= val;
        case "<":
            return length < val;
        case "<=":
            return length <= val;
        case "==":
            return length === val;
        case "!=":
            return length !== val;
        default:
            return false;
    }
}

;// ./src/validation/flash/check/rules/CheckSelectionRules.ts

function CheckSelectionAll(selection, rules, tips) {
    var _a;
    if (!Array.isArray(selection)) {
        return { success: false, message: "selection 必须是数组" };
    }
    var len = selection.length;
    for (var i = 0; i < rules.length; i++) {
        try {
            var rule = parseRule(rules[i]);
            if (!checkRule(len, rule)) {
                var msg = (_a = tips === null || tips === void 0 ? void 0 : tips[i]) !== null && _a !== void 0 ? _a : "\u89C4\u5219 #".concat(i + 1, " \"").concat(rules[i], "\" \u672A\u6EE1\u8DB3");
                return { success: false, message: msg };
            }
        }
        catch (e) {
            return { success: false, message: e.message };
        }
    }
    return { success: true, data: selection };
}
function CheckSelectionAny(selection, rules, tip) {
    if (!Array.isArray(selection)) {
        return { success: false, message: "selection 必须是数组" };
    }
    var ruleList = typeof rules === "string" ? [rules] : rules;
    var len = selection.length;
    for (var _i = 0, ruleList_1 = ruleList; _i < ruleList_1.length; _i++) {
        var ruleStr = ruleList_1[_i];
        try {
            var rule = parseRule(ruleStr);
            if (checkRule(len, rule)) {
                return { success: true, data: selection };
            }
        }
        catch (e) {
            return { success: false, message: e.message };
        }
    }
    return { success: false, message: tip || "数量不符合任一规则要求" };
}

;// ./src/index.ts











/******/ 	return __webpack_exports__;
/******/ })()
;
});