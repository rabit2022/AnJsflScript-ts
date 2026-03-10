/**
 * @file: Hello.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/9 23:17
 * @project: AnJsflScript-ts
 * @description:
 */

// 这个文件由脚本 version-zcx\00.快捷✔\Hello.ts 自动生成，任何手动修改都将会被覆盖.

(function(){
"use strict";
function IsGroup(element) {
    var _a;
    return (_a = element === null || element === void 0 ? void 0 : element.isGroup) !== null && _a !== void 0 ? _a : null;
}



    /**
     * 判断是否是 元件
     * @param {Element} element 元素
     * @returns {boolean} 是否是 元件
     */
    function IsSymbol(element) {

        // Instance
        var InstanceIsSymbol =
            element.elementType === "instance" && element.instanceType === "symbol";
        // SymbolInstance
        var SymbolTypeIsNotUndefined = element.symbolType !== undefined;

        return (
            // 非空元素，非组
            !IsGroup(element) && (InstanceIsSymbol || SymbolTypeIsNotUndefined)
        );
    }

})();