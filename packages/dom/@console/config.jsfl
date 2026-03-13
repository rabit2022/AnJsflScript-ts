// dom 相关
require(["util",

    // loglevel 依赖 console
    "console",

    // debug
    "console.stack", "console.table"], function (util) {
    const inspect = util.inspect

    window.console.inspect = function () {
        // 1. 【ES5 核心】将 arguments 对象转换为真正的数组
        // 这样我们就可以使用 slice, forEach 等数组方法了
        var args = Array.prototype.slice.call(arguments);

        // 3. 调用 util.inspect
        // 使用 apply 动态传递参数数组，兼容 (obj, options) 或 (obj, showHidden, depth, colors)
        var resultStr;
        try {
            resultStr = inspect.apply(null, args);
        } catch (e) {
            resultStr = '[Error inspecting object]: ' + e.message;
        }

        // 4. 【关键】主动打印到控制台
        console.log(resultStr);

        // 5. 返回字符串
        return resultStr;
    };

    window.console.json = function () {
        var args = Array.prototype.slice.call(arguments);
        var jsonStr = JSON.stringify.apply(null, args);
        console.log(jsonStr);
        return jsonStr;
    }
});



