/**
 * @file: Tips.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:06
 * @project: AnJsflScript-ts
 * @description:
 */// 这个文件由脚本 Tips.ts 自动生成，任何手动修改都将会被覆盖.

define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.alertMessage = alertMessage;
    var author = "作者：@穹的兔兔\n QQ：3101829204";
    var alertMessageConfig = {
        XUL: "【温馨提示】\n1.这个脚本 由于导入了XUL库，属于重型库，可能会导致卡顿异常，闪退，不兼容等情况\n2.这个脚本 会生成多个元件，用于组成字符画，以保证效果的完美，可能造成画面过于复杂，导出时可能出现问题。\n请确认是否继续!!!\n\n作者: " +
            author,
        "default!": "是否加载模块？\n\n " + author + "\n 模块名：",
        "failed!": "加载模块失败，请联系作者！！！\n\n " + author + "\n 模块名：",
        "loading success!": "【温馨提示】导入成功！！！\n 如果有bug,或者建议，请@我。\n\n【注意】这个文件只是导入所需的模块，并没有安装功能。 \n" +
            author,
        "loading might be not allowed!": "【温馨提示】你可能使用的是盗版软件，这个是开源的项目，如果花费了金钱购买，请退款。\n\n " +
            author +
            "\n 地址：https://github.com/rabit2022/AnJsflScript"
    };
    function alertMessage(mode) {
        var msg = alertMessageConfig[mode];
        if (msg) {
            alert(msg);
        }
    }
});
