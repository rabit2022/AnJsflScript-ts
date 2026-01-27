/**
 * @file: Tips.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/27 21:25
 * @project: AnJsflScript-ts
 * @description:
 */

// 这个文件由脚本 Tips.ts 自动生成，任何手动修改都将会被覆盖.

define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.alertMessage = alertMessage;
    var author = "\u4F5C\u8005\uFF1A@\u7A79\u7684\u5154\u5154\nQQ\uFF1A3101829204";
    var alertMessageConfig = {
        "default!": "\u662F\u5426\u52A0\u8F7D\u6A21\u5757\uFF1F\n    \n".concat(author, "\n\u6A21\u5757\u540D\uFF1A"),
        "failed!": "\u52A0\u8F7D\u6A21\u5757\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u4F5C\u8005\uFF01\uFF01\uFF01\n    \n".concat(author, "\n\u6A21\u5757\u540D\uFF1A"),
        "loading success!": "\u3010\u6E29\u99A8\u63D0\u793A\u3011\u5BFC\u5165\u6210\u529F\uFF01\uFF01\uFF01\n\u5982\u679C\u6709bug,\u6216\u8005\u5EFA\u8BAE\uFF0C\u8BF7@\u6211\u3002\n\n\u3010\u6CE8\u610F\u3011\u8FD9\u4E2A\u6587\u4EF6\u53EA\u662F\u5BFC\u5165\u6240\u9700\u7684\u6A21\u5757\uFF0C\u5E76\u6CA1\u6709\u5B89\u88C5\u529F\u80FD\u3002\n".concat(author),
        "loading might be not allowed!": "\u3010\u6E29\u99A8\u63D0\u793A\u3011\u4F60\u53EF\u80FD\u4F7F\u7528\u7684\u662F\u76D7\u7248\u8F6F\u4EF6\uFF0C\u8FD9\u4E2A\u662F\u5F00\u6E90\u7684\u9879\u76EE\uFF0C\u5982\u679C\u82B1\u8D39\u4E86\u91D1\u94B1\u8D2D\u4E70\uFF0C\u8BF7\u9000\u6B3E\u3002\n\n".concat(author, "\n\u5730\u5740\uFF1Ahttps://github.com/rabit2022/AnJsflScript")
    };
    function alertMessage(mode) {
        var msg = alertMessageConfig[mode];
        if (msg) {
            alert(msg);
        }
    }
});
