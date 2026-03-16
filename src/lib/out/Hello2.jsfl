/**
 * @file: Hello2.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/16 13:18
 * @project: AnJsflScript-ts
 * @description:
 */

// 这个文件由脚本 Hello2.ts 自动生成，任何手动修改都将会被覆盖.

(function(){
define(["require", "exports", "@anjsfl/validation"], function (require, exports, validation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log("Hello World!");
    var dom = fl.getDocumentDOM();
    var check = (0, validation_1.CheckDocument)(dom);
    if (check.isOk()) {
        var doc = check.unwrap();
        console.log("文档有效:", doc);
    }
    else {
        var errorMsg = check.unwrapErr();
        console.log("文档无效:", errorMsg);
    }
});

})();