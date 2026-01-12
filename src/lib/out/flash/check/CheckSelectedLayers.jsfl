// 这个文件由脚本 flash\check\CheckSelectedLayers.ts 自动生成，任何手动修改都将会被覆盖.

define(["require", "exports", "CheckSelection", "conditionTypes", "selectionTypes"], function (require, exports, CheckSelection_1, conditionTypes_1, selectionTypes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CheckSelectedLayers = CheckSelectedLayers;
    function CheckSelectedLayers(timeline, condition, exTips) {
        if (condition === void 0) { condition = conditionTypes_1.LayerCondition.NotZero; }
        var selectedLayers = timeline.getSelectedLayers();
        var isValid = (0, CheckSelection_1.CheckSelection)(selectedLayers, selectionTypes_1.CheckMode.SelectLayer, condition, exTips);
        return isValid ? selectedLayers : null;
    }
});
