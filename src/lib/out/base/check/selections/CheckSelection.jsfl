// 这个文件由脚本 base\check\selections\CheckSelection.ts 自动生成，任何手动修改都将会被覆盖.

define(["require", "exports", "CheckVariableRedeclaration", "selectionTypes", "selectionUtils"], function (require, exports, CheckVariableRedeclaration_1, selectionTypes_1, selectionUtils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CheckSelection = CheckSelection;
    function CheckSelection(selection, mode, condition, exTips) {
        if (mode === void 0) { mode = selectionTypes_1.CheckMode.SelectElement; }
        if (condition === void 0) { condition = selectionTypes_1.CheckCondition.NoLimit; }
        if (exTips === void 0) { exTips = null; }
        (0, CheckVariableRedeclaration_1.CheckVariableRedeclaration)(selection, "selection");
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
            if (Object.values(selectionTypes_1.CheckCondition).includes(condition)) {
                resolvedCondition = condition;
            }
            else if (selectionUtils_1.CONDITION_ALIAS_MAP[condition]) {
                resolvedCondition = selectionUtils_1.CONDITION_ALIAS_MAP[condition];
            }
            else {
                alert("无效的条件：" + condition);
                return false;
            }
        }
        else {
            resolvedCondition = condition;
        }
        if (!Object.values(selectionTypes_1.CheckMode).includes(mode)) {
            alert("无效的模式：" + mode);
            return false;
        }
        var length = selection.length;
        if (!(0, selectionUtils_1.checkCondition)(resolvedCondition, length)) {
            var defaultMessage = selectionUtils_1.MESSAGES[mode][resolvedCondition];
            var message = exTips !== null && exTips !== void 0 ? exTips : defaultMessage;
            if (message)
                alert(message);
            return false;
        }
        return true;
    }
});
