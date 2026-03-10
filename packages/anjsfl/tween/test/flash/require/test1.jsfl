// requirejs modules file test1.js
require(["@xjsfl/UI"], function ({UI}) {

    /**
     * 判断是否是 组
     * @param {Element} element 元素
     * @returns {boolean} 是否是 组
     */
    function IsGroup(element) {
        var _a;
        return (_a = element === null || element === void 0 ? void 0 : element.isGroup) !== null && _a !== void 0 ? _a : false;
    }

    /**
     * 判断是否是 元件
     * @param {Element} element 元素
     * @returns {boolean} 是否是 元件
     */
    function IsSymbol(element) {
        var InstanceIsSymbol =
            element.elementType === "instance" && element.instanceType === "symbol";
        var SymbolTypeIsNotUndefined = element.symbolType !== undefined;

        return (
            // 非空元素，非组
            !IsGroup(element) && (InstanceIsSymbol || SymbolTypeIsNotUndefined)
        );
    }
    // console.log(UI.selection.length);
    UI.selection.forEach(function (selection) {

        // var item = selection;
        // // 尝试打印构造函数名称
        // if (item.constructor && item.constructor.name) {
        //     an.trace("对象类名 (constructor.name): " + item.constructor.name);
        // } else {
        //     an.trace("无法通过 constructor.name 获取类名");
        // }


        console.log(IsGroup(selection),"=====",IsSymbol(selection));
        console.log(selection.elementType)
    })
});