(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("oxide.ts"));
	else if(typeof define === 'function' && define.amd)
		define(["oxide.ts"], factory);
	else if(typeof exports === 'object')
		exports["Validation"] = factory(require("oxide.ts"));
	else
		root["Validation"] = factory(root["oxide.ts"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__508__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 508:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__508__;

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
  CheckCondition: function() { return /* reexport */ CheckCondition; },
  CheckDocument: function() { return /* reexport */ CheckDocument; },
  CheckMode: function() { return /* reexport */ CheckMode; },
  CheckSelectedItems: function() { return /* reexport */ CheckSelectedItems; },
  CheckSelectedLayers: function() { return /* reexport */ CheckSelectedLayers; },
  CheckSelection: function() { return /* reexport */ CheckSelection; },
  LayerCondition: function() { return /* reexport */ LayerCondition; },
  LibraryCondition: function() { return /* reexport */ LibraryCondition; }
});

;// ./src/types/conditionTypes.ts
/**
 * @file: conditionTypes.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/13 1:17
 * @project: AnJsflScript-ts
 * @description:
 */
/**
 * 图层选择数量条件枚举
 * 定义了针对“选中图层数量”的校验规则
 */
var LayerCondition;
(function (LayerCondition) {
    /** 无限制 */
    LayerCondition["NoLimit"] = "No limit";
    /** 至少选中一个 (数量 > 0) */
    LayerCondition["AtLeastOne"] = "At least one";
    /** 未选中任何图层 (数量 == 0) */
    LayerCondition["NoneSelected"] = "None selected";
    /** 必须且仅选中一个 (数量 == 1) */
    LayerCondition["ExactlyOne"] = "Exactly one";
    /** 必须选中两个 (数量 == 2) */
    LayerCondition["ExactlyTwo"] = "Exactly two";
    /** 选中多个 (数量 > 1) */
    LayerCondition["MultipleSelected"] = "Multiple selected";
})(LayerCondition || (LayerCondition = {}));
/** 库项目选择条件 */
/**
 * 图层选择数量条件枚举
 * 定义了针对“选中图层数量”的校验规则
 */
var LibraryCondition;
(function (LibraryCondition) {
    /** 无限制 */
    LibraryCondition["NoLimit"] = "No limit";
    /** 至少选中一个 (数量 > 0) */
    LibraryCondition["AtLeastOne"] = "At least one";
    /** 未选中任何图层 (数量 == 0) */
    LibraryCondition["NoneSelected"] = "None selected";
    /** 必须且仅选中一个 (数量 == 1) */
    LibraryCondition["ExactlyOne"] = "Exactly one";
    /** 必须选中两个 (数量 == 2) */
    LibraryCondition["ExactlyTwo"] = "Exactly two";
    /** 选中多个 (数量 > 1) */
    LibraryCondition["MultipleSelected"] = "Multiple selected";
})(LibraryCondition || (LibraryCondition = {}));

;// ./src/types/selectionTypes.ts
/**
 * @file: selectionTypes.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/13 1:17
 * @project: AnJsflScript-ts
 * @description:
 */
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
/**
 * 图层选择数量条件枚举
 * 定义了针对“选中图层数量”的校验规则
 */
var CheckCondition;
(function (CheckCondition) {
    /** 无限制 */
    CheckCondition["NoLimit"] = "No limit";
    /** 至少选中一个 (数量 > 0) */
    CheckCondition["AtLeastOne"] = "At least one";
    /** 未选中任何图层 (数量 == 0) */
    CheckCondition["NoneSelected"] = "None selected";
    /** 必须且仅选中一个 (数量 == 1) */
    CheckCondition["ExactlyOne"] = "Exactly one";
    /** 必须选中两个 (数量 == 2) */
    CheckCondition["ExactlyTwo"] = "Exactly two";
    /** 选中多个 (数量 > 1) */
    CheckCondition["MultipleSelected"] = "Multiple selected";
})(CheckCondition || (CheckCondition = {}));

;// ./src/types/index.ts



;// ./src/validation/base/CheckVariableRedeclaration.ts
/**
 * @file: CheckVariableRedeclaration.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/13 1:17
 * @project: AnJsflScript-ts
 * @description:
 */
/**
 * 检查变量是否被意外遮蔽（例如在函数内用 var/let 重声明）。
 *
 * 用法示例：
 * ```ts
 * const x = 42;
 * function foo() {
 *   checkVariableRedeclaration(x, 'x'); // 如果 x 被重声明为 undefined，会报警
 *   let x; // ← 这会导致遮蔽！
 * }
 * ```
 *
 * @param variable - 要检查的变量值
 * @param name - 变量名（用于错误提示）
 * @param expectedValue - （可选）预期的值，如果不传，则只检查是否为 undefined
 */
function CheckVariableRedeclaration(variable, name, expectedValue) {
    if (expectedValue !== undefined) {
        if (variable !== expectedValue) {
            var msg = "\u53D8\u91CF \"".concat(name, "\" \u7684\u503C\u88AB\u610F\u5916\u4FEE\u6539\u6216\u906E\u853D\u3002\u671F\u671B: ").concat(String(expectedValue), ", \u5B9E\u9645: ").concat(String(variable));
            console.warn("[Redeclaration Check] " + msg);
            throw new Error(msg); // 或仅 warn，根据需求
        }
    }
    else if (variable === undefined) {
        var msg = "\u53D8\u91CF \"".concat(name, "\" \u5728\u4F5C\u7528\u57DF\u5185\u88AB\u91CD\u65B0\u58F0\u660E\uFF08\u5982 var/let\uFF09\uFF0C\u5BFC\u81F4\u5176\u503C\u4E3A undefined\uFF0C\u53EF\u80FD\u906E\u853D\u4E86\u5916\u90E8\u53D8\u91CF\u3002");
        console.warn("[Redeclaration Check] " + msg);
        // 可选择抛出错误（中断执行）或仅警告
        // throw new ReferenceError(msg);
    }
}

;// ./src/validation/base/Message.ts
/**
 * @file: selectionUtils.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/13 1:17
 * @project: AnJsflScript-ts
 * @description:
 */
var _a, _b, _c, _d, _e, _f, _g, _h;

// 提示消息配置（按模式组织）
var MESSAGES = (_a = {},
    _a[CheckMode.SelectElement] = (_b = {},
        _b[CheckCondition.NoLimit] = null,
        _b[CheckCondition.AtLeastOne] = "请选择一个元件。",
        _b[CheckCondition.NoneSelected] = "请至少选择一个元件。",
        _b[CheckCondition.ExactlyOne] = "请只选择一个元件。",
        _b[CheckCondition.ExactlyTwo] = "请同时选择两个元件。",
        _b[CheckCondition.MultipleSelected] = "请选择多个元件。",
        _b),
    _a[CheckMode.SelectFrame] = (_c = {},
        _c[CheckCondition.NoLimit] = null,
        _c[CheckCondition.AtLeastOne] = "请选择一个帧。",
        _c[CheckCondition.NoneSelected] = "请至少选择一个帧。",
        _c[CheckCondition.ExactlyOne] = "请只选择一个帧。",
        _c[CheckCondition.ExactlyTwo] = "请同时选择两个帧。",
        _c[CheckCondition.MultipleSelected] = "请选择多个帧。",
        _c),
    _a[CheckMode.ElementOnFrame] = (_d = {},
        _d[CheckCondition.NoLimit] = null,
        _d[CheckCondition.AtLeastOne] = "当前帧上需要有元件。",
        _d[CheckCondition.NoneSelected] = "当前帧上至少需要一个元件。",
        _d[CheckCondition.ExactlyOne] = "当前帧上只能有一个元件。",
        _d[CheckCondition.ExactlyTwo] = "当前帧上只能有两个元件。",
        _d[CheckCondition.MultipleSelected] = "当前帧上需要多个元件。",
        _d),
    _a[CheckMode.SelectLibItem] = (_e = {},
        _e[CheckCondition.NoLimit] = null,
        _e[CheckCondition.AtLeastOne] = "请选择库中的一个项目。",
        _e[CheckCondition.NoneSelected] = "请至少选择一个库项目。",
        _e[CheckCondition.ExactlyOne] = "请只选择一个库项目。",
        _e[CheckCondition.ExactlyTwo] = "请同时选择两个库项目。",
        _e[CheckCondition.MultipleSelected] = "请选择多个库项目。",
        _e),
    _a[CheckMode.SelectLayer] = (_f = {},
        _f[CheckCondition.NoLimit] = null,
        _f[CheckCondition.AtLeastOne] = "请选择一个图层。",
        _f[CheckCondition.NoneSelected] = "请至少选择一个图层。",
        _f[CheckCondition.ExactlyOne] = "请只选择一个图层。",
        _f[CheckCondition.ExactlyTwo] = "请同时选择两个图层。",
        _f[CheckCondition.MultipleSelected] = "请选择多个图层。",
        _f),
    _a[CheckMode.SelectedFrameDuration] = (_g = {},
        _g[CheckCondition.NoLimit] = null,
        _g[CheckCondition.AtLeastOne] = "所选帧总时长 不能为 0 帧。",
        _g[CheckCondition.NoneSelected] = "所选帧总时长 至少为 1 帧。",
        _g[CheckCondition.ExactlyOne] = "所选帧总时长 只能为 1 帧。",
        _g[CheckCondition.ExactlyTwo] = "所选帧总时长 只能为 2 帧。",
        _g[CheckCondition.MultipleSelected] = "所选帧总时长 不能小于 2 帧。",
        _g),
    _a[CheckMode.SelectedFrameFirstDuration] = (_h = {},
        _h[CheckCondition.NoLimit] = null,
        _h[CheckCondition.AtLeastOne] = "所选帧的 第一段 时长 不能为 0 帧。",
        _h[CheckCondition.NoneSelected] = "所选帧的 第一段 时长 至少为 1 帧。",
        _h[CheckCondition.ExactlyOne] = "所选帧的 第一段 时长 只能为 1 帧。",
        _h[CheckCondition.ExactlyTwo] = "所选帧的 第一段 时长 只能为 2 帧。",
        _h[CheckCondition.MultipleSelected] = "所选帧的 第一段 时长 不能小于 2 帧。",
        _h),
    _a);

;// ./src/validation/base/CheckSelection.ts
/**
 * @file: CheckSelection.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/13 1:17
 * @project: AnJsflScript-ts
 * @description:
 */



/**
 * 判断 value 是否是某个 TypeScript 枚举（字符串/数字）的合法值
 * @example
 * enum Status { Active = 'active', Inactive = 'inactive' }
 * isEnumValue(Status, 'active') // true
 * isEnumValue(Status, 'deleted') // false
 */
function IsEnumValue(enumObj, value) {
    // Object.values(CheckCondition).includes(condition as CheckCondition)
    // 先确保 value 是 string 或 number
    if (typeof value !== "string" && typeof value !== "number") {
        return false;
    }
    // 使用 Object.keys + map 模拟 Object.values（兼容 ES5+）
    var values = Object.keys(enumObj).map(function (key) { return enumObj[key]; });
    return values.indexOf(value) !== -1;
}
/**
 * 检查选择的元件或帧是否符合指定的模式和条件。
 *
 * @param selection - 选择的元件或帧数组。
 * @param mode - 检查模式，默认为 {@link CheckMode.SelectElement}。
 * @param condition - 检查条件，可以是预定义的别名（如 `"=1"`）或 {@link CheckCondition} 枚举键名，默认为 {@link CheckCondition.NoLimit}。
 * @param exTips - 额外提示信息（可选）。
 *
 * @returns 如果选择符合指定条件，则返回 `true`；否则返回 `false`。
 *
 * @throws {Error} 如果 `mode` 或 `condition` 传入 `null`，将抛出错误并终止执行。
 *
 * @example
 * ```ts
 * const sel = [{}, {}]; // 假设有两个选中项
 * const ok = CheckSelection(sel, CheckMode.SelectElement, "=2");
 * console.log(ok); // true
 * ```
 *
 * @note
 * - 参数 `mode` 和 `condition` **不允许传入 `null`**。
 * - 若需使用默认值，请传入 `undefined` 或直接省略参数。
 */
function CheckSelection(selection, mode, condition, exTips) {
    if (mode === void 0) { mode = CheckMode.SelectElement; }
    if (condition === void 0) { condition = CheckCondition.NoLimit; }
    if (exTips === void 0) { exTips = null; }
    CheckVariableRedeclaration(selection, "selection");
    // 禁止传入 null
    if (mode === null) {
        alert("模式不能为 null，请指定一个有效的模式！");
        return false;
    }
    if (condition === null) {
        alert("条件不能为 null，请指定一个有效的条件！");
        return false;
    }
    // 解析 condition：支持别名
    var resolvedCondition;
    if (typeof condition === "string") {
        // if (Object.values(CheckCondition).includes(condition as CheckCondition)) {
        if (IsEnumValue(CheckCondition, condition)) {
            resolvedCondition = condition;
        }
        // else if (CONDITION_ALIAS_MAP[condition]) {
        //     resolvedCondition = CONDITION_ALIAS_MAP[condition];
        // }
        else {
            alert("无效的条件：" + condition);
            return false;
        }
    }
    else {
        resolvedCondition = condition;
    }
    // 校验 mode 是否有效（TS 枚举已保证，但运行时仍可防御）
    // if (!Object.values(CheckMode).includes(mode)) {
    if (!IsEnumValue(CheckMode, mode)) {
        alert("无效的模式：" + mode);
        return false;
    }
    // 执行检查
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
// 条件校验逻辑
function checkCondition(condition, length) {
    switch (condition) {
        case CheckCondition.NoLimit:
            return true;
        case CheckCondition.AtLeastOne:
            return length > 0;
        case CheckCondition.NoneSelected:
            return length === 0;
        case CheckCondition.ExactlyOne:
            return length === 1;
        case CheckCondition.ExactlyTwo:
            return length === 2;
        case CheckCondition.MultipleSelected:
            return length > 2;
        default:
            throw new Error("\u672A\u77E5\u6761\u4EF6: ".concat(condition));
    }
}

;// ./src/validation/base/index.ts


// EXTERNAL MODULE: external "oxide.ts"
var external_oxide_ts_ = __webpack_require__(508);
;// ./src/validation/flash/CheckDocument.ts
/**
 * @file: CheckDocument.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/13 1:17
 * @project: AnJsflScript-ts
 * @description:
 */

/**
 * 检查传入的文档对象是否有效
 * @param doc 传入的文档对象
 * @returns Ok(doc) 如果有效，Err(message) 如果无效
 */
function CheckDocument(doc) {
    if (!doc) {
        return (0,external_oxide_ts_.Err)("文档对象无效，请检查传入参数");
    }
    return (0,external_oxide_ts_.Ok)(doc);
}

;// ./src/validation/flash/CheckSelectedItems.ts
/**
 * @file: CheckSelectedItems.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/13 1:17
 * @project: AnJsflScript-ts
 * @description:
 */




/**
 * 检查传入的选中项目数组是否符合指定条件。
 *
 * @param selectedItems - 直接传入的选中项目数组
 * @param condition - 检查条件，默认为至少选中一个
 * @param exTips - 额外提示信息
 *
 * @returns Ok(选中项目数组) 如果符合条件；Err(错误信息) 如果不符合
 */
function CheckSelectedItems(selectedItems, // ✅ 直接传入数组
condition, exTips) {
    if (condition === void 0) { condition = LibraryCondition.AtLeastOne; }
    // 直接使用传入的数组进行检查
    var isValid = CheckSelection(selectedItems, CheckMode.SelectLibItem, condition, exTips);
    // 根据检查结果返回 Ok 或 Err
    if (isValid) {
        return (0,external_oxide_ts_.Ok)(selectedItems);
    }
    else {
        return (0,external_oxide_ts_.Err)("选中项目不符合条件");
    }
}

;// ./src/validation/flash/CheckSelectedLayers.ts




/**
 * 检查传入的选中图层索引数组是否符合指定条件。
 *
 * @param selectedLayers - 直接传入的选中图层索引数组
 * @param condition - 检查条件，默认为 LayerCondition.NotZero（即至少选中一个）
 * @param exTips - 额外提示信息
 *
 * @returns Ok(图层索引数组) 如果符合条件；Err(错误信息) 如果不符合
 */
function CheckSelectedLayers(selectedLayers, // ✅ 直接传入数据，不再依赖 Timeline
condition, exTips) {
    if (condition === void 0) { condition = LayerCondition.AtLeastOne; }
    // 直接使用传入的数组进行检查
    var isValid = CheckSelection(selectedLayers, CheckMode.SelectLayer, condition, exTips);
    // 根据检查结果返回 Ok 或 Err
    if (isValid) {
        return (0,external_oxide_ts_.Ok)(selectedLayers);
    }
    else {
        return (0,external_oxide_ts_.Err)("选中图层不符合条件");
    }
}

;// ./src/validation/flash/index.ts




;// ./src/index.ts
/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */
// 类型




/******/ 	return __webpack_exports__;
/******/ })()
;
});