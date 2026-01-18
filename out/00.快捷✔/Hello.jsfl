// 这个文件由脚本 00.快捷✔\Hello.ts 自动生成，任何手动修改都将会被覆盖.

require(["require", "_exports", "@anjsfl/validation","Events"], function (require, exports, validation_1,Events) {
    "use strict";
    console.log("Hello World!");
    function Main() {
        // var toCheckes = ["目标图层", "起始图层", "结束图层"];
        // var toChheck = (0, validation_1.CheckSelection)(toCheckes, validation_1.CheckMode.SelectElement, validation_1.CheckCondition.OnlyOne, "额外的提示信息");
        // if (!toChheck) {
        //     console.error("check faied");
        //     return;
        // }
        //
        // toCheckes.includes()
        // toCheckes.map()
        // var tweenObj = fl.getDocumentDOM().getTimeline().layers[0].frames[0].tweenObj;
        //
        // console.log("check success");
        const flashId = fl.addEventListener("layerChanged", handleLayerChange);
        function handleLayerChange(event) {
            fl.trace("jjjjjj")
        }
        console.log(flashId);

    }
    Main();
});
