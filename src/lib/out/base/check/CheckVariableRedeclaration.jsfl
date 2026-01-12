// 这个文件由脚本 base\check\CheckVariableRedeclaration.ts 自动生成，任何手动修改都将会被覆盖.

define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CheckVariableRedeclaration = CheckVariableRedeclaration;
    function CheckVariableRedeclaration(variable, name, expectedValue) {
        if (expectedValue !== undefined) {
            if (variable !== expectedValue) {
                var msg = "\u53D8\u91CF \"".concat(name, "\" \u7684\u503C\u88AB\u610F\u5916\u4FEE\u6539\u6216\u906E\u853D\u3002\u671F\u671B: ").concat(String(expectedValue), ", \u5B9E\u9645: ").concat(String(variable));
                console.warn("[Redeclaration Check] " + msg);
                throw new Error(msg);
            }
        }
        else if (variable === undefined) {
            var msg = "\u53D8\u91CF \"".concat(name, "\" \u5728\u4F5C\u7528\u57DF\u5185\u88AB\u91CD\u65B0\u58F0\u660E\uFF08\u5982 var/let\uFF09\uFF0C\u5BFC\u81F4\u5176\u503C\u4E3A undefined\uFF0C\u53EF\u80FD\u906E\u853D\u4E86\u5916\u90E8\u53D8\u91CF\u3002");
            console.warn("[Redeclaration Check] " + msg);
        }
    }
});
