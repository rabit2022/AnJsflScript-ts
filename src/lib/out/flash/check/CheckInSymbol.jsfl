// 这个文件由脚本 flash\check\CheckInSymbol.ts 自动生成，任何手动修改都将会被覆盖.

define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CheckInSymbol = CheckInSymbol;
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
});
