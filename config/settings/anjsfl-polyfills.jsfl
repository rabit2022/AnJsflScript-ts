/**
 * @file: FirstRun.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2024/12/16 16:45
 * @project: AnJsflScript
 * @description:每一次打开An时，都要 执行此脚本，用于初始化一些必要的模块。
 */

(function () {
    // 导入shims, 避免其他模块依赖时报错
    require(["es5-shim", // es5,es2009
        "es5-sham",

        "json3",// es5,es2009

        // Symbol    oxide.ts need
        // Set iterator need Symbol,sometimes babel translate code might be use [Symbol.Iterator] function to adjust it.
        "symbol-es6",


        // @nodejs/url need es6
        "es6-shim", // es6,es2015
        "es6-sham",

        // luxon need es7
        // "es7-shim", // es7,es2016   es8,es2017
    ]);

    // dom 相关
    require(["console",// loglevel 依赖 console

        // debug
        "console.stack", "console.table"]);

    // path-browserify need process global variable
    require(['process', "@nodejs/__filename"], function (process) {
        window.process = process;
    })

    // loglevel依赖 document.cookie
    require(["@polyfill/cookie", "loglevel"], function (cookie, log) {
        // 禁用log
        log.setDefaultLevel(log.levels.ERROR);
    });

    // Promise的实现
    require(["@dom/setTimeout"], function (__setTimeout__) {
        window.AnJsflScript.__setTimeout__ = __setTimeout__;
    })

    // console.inspect
    require(["util"], function (util) {
        const inspect = util.inspect

        // 重写 console.inspect
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
    })
})();