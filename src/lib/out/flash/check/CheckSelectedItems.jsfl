// 这个文件由脚本 flash\check\CheckSelectedItems.ts 自动生成，任何手动修改都将会被覆盖.

define(["require", "exports", "CheckSelection", "conditionTypes", "selectionTypes"], function (require, exports, CheckSelection_1, conditionTypes_1, selectionTypes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CheckSelectedItems = CheckSelectedItems;
    function CheckSelectedItems(library, condition, exTips) {
        if (condition === void 0) { condition = conditionTypes_1.LibraryCondition.NotZero; }
        var selectedItems = library.getSelectedItems();
        var isValid = (0, CheckSelection_1.CheckSelection)(selectedItems, selectionTypes_1.CheckMode.SelectLibItem, condition, exTips);
        return isValid ? selectedItems : null;
    }
});
