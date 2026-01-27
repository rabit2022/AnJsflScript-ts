/**
 * @file: FirstRun.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2024/12/16 16:45
 * @project: AnJsflScript
 * @description:每一次打开An时，都要 执行此脚本，用于初始化一些必要的模块。
 */

(function() {

    require([

        // "es6-promise", // babel 转译 依赖 Promise

        // 导入shims, 避免其他模块依赖时报错
        "es5-shim", // es5,es2009
        "es5-sham",

        // @nodejs/url need es6
        "es6-shim", // es6,es2015
        "es6-sham",

        // "es7-shim", // es7,es2016
        // "es2017", // es8,es2017

        "json3",

        "@nodejs/__filename",


        // loglevel 依赖 console
        "console",

        // loglevel,store.js 依赖 document.cookie
        "document-cookie"
    ]);

    require(["loglevel", "Tips","lodash"], function(log, Tips,_) {
        // 禁用log
        log.setDefaultLevel(log.levels.SILENT);

        // 显示提示信息
        const {
            alertMessage
        } = Tips;
        alertMessage("loading success!");
        // if (!(window.AnJsflScript.$ProjectFileDir$.indexOf("AnJsflScript") !== -1)) {
        if (!_.includes(window.AnJsflScript.$ProjectFileDir$,"AnJsflScript")) {
            alertMessage("loading might be not allowed!");
        }
    });
})();