// 这个文件由脚本 flash\check\rules\CheckSelectionRules.ts 自动生成，任何手动修改都将会被覆盖.

define(["require", "exports", "ruleUtils"], function (require, exports, ruleUtils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CheckSelectionAll = CheckSelectionAll;
    exports.CheckSelectionAny = CheckSelectionAny;
    function CheckSelectionAll(selection, rules, tips) {
        var _a;
        if (!Array.isArray(selection)) {
            return { success: false, message: "selection 必须是数组" };
        }
        var len = selection.length;
        for (var i = 0; i < rules.length; i++) {
            try {
                var rule = (0, ruleUtils_1.parseRule)(rules[i]);
                if (!(0, ruleUtils_1.checkRule)(len, rule)) {
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
                var rule = (0, ruleUtils_1.parseRule)(ruleStr);
                if ((0, ruleUtils_1.checkRule)(len, rule)) {
                    return { success: true, data: selection };
                }
            }
            catch (e) {
                return { success: false, message: e.message };
            }
        }
        return { success: false, message: tip || "数量不符合任一规则要求" };
    }
});
