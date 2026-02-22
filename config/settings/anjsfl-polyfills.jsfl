/**
 * @file: FirstRun.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2024/12/16 16:45
 * @project: AnJsflScript
 * @description:每一次打开An时，都要 执行此脚本，用于初始化一些必要的模块。
 */

(function () {

    require(["Tips"], function (Tips) {
        const {alertMessage} = Tips;// 显示提示信息

        const dom = fl.getDocumentDOM();
        if (!dom) {
            alertMessage("failed!");
            return;
        }


        // if (!window.AnJsflScript.$ProjectFileDir$.includes("AnJsflScript")) {
        if (!window.AnJsflScript || !window.AnJsflScript.$ProjectFileDir$ || window.AnJsflScript.$ProjectFileDir$.indexOf("AnJsflScript") === -1) {
            alertMessage("loading might be not allowed!");
            // return;
        } else {
            alertMessage("loading success!");
        }
    });

    // 导入shims, 避免其他模块依赖时报错
    require([

        // "es6-promise", // babel 转译 依赖 Promise

        "es5-shim", // es5,es2009
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


        "@nodejs/__filename",
    ]);

    // debug
    require([
        // dom 相关
        "console",// loglevel 依赖 console
        "@polyfill/cookie",// loglevel依赖 document.cookie

        "console.stack", "console.table"
    ]);

    //
    require(['process'], function (process) {
        window.process = process;
    })

    require(["loglevel"], function (log) {
        // 禁用log
        log.setDefaultLevel(log.levels.ERROR);
    });
})();