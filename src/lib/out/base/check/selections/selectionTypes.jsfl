// 这个文件由脚本 base\check\selections\selectionTypes.ts 自动生成，任何手动修改都将会被覆盖.

define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CheckCondition = exports.CheckMode = void 0;
    var CheckMode;
    (function (CheckMode) {
        CheckMode["SelectElement"] = "selectElement";
        CheckMode["SelectFrame"] = "selectFrame";
        CheckMode["ElementOnFrame"] = "elementOnFrame";
        CheckMode["SelectLibItem"] = "selectLibItem";
        CheckMode["SelectLayer"] = "selectLayer";
        CheckMode["SelectedFrameDuration"] = "selectedFrameDuration";
        CheckMode["SelectedFrameFirstDuration"] = "selectedFrameFirstDuration";
    })(CheckMode || (exports.CheckMode = CheckMode = {}));
    var CheckCondition;
    (function (CheckCondition) {
        CheckCondition["NoLimit"] = "No limit";
        CheckCondition["NotZero"] = "Not Zero";
        CheckCondition["Zero"] = "Zero";
        CheckCondition["OnlyOne"] = "Only one";
        CheckCondition["OnlyTwo"] = "Only two";
        CheckCondition["More"] = "More";
    })(CheckCondition || (exports.CheckCondition = CheckCondition = {}));
});
