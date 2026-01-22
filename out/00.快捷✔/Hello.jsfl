// 这个文件由脚本 00.快捷✔\Hello.ts 自动生成，任何手动修改都将会被覆盖.

require(["require", "_exports", "@anjsfl/validation"], function (require, exports, validation_1) {
    "use strict";
    // console.log(__dirname);
    // console.log(__filename);
    fl.outputPanel.clear();



    function Main() {
        var toCheckes = ["目标图层", "起始图层", "结束图层"];
        var toChheck = (0, validation_1.CheckSelection)(toCheckes, validation_1.CheckMode.SelectElement, validation_1.CheckCondition.OnlyOne, "额外的提示信息");
        if (!toChheck) {
            console.error("check faied");
            return;
        }
        console.log("check success");
    }
    Main();



});
