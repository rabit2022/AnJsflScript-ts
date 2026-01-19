/**
 * @file: require.config.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2025/3/6 19:28
 * @project: AnJsflScript
 * @description:
 */

require.config({
    // context: 'Core', // 设置模块的加载上下文
    baseUrl: window.AnJsflScript.$ProjectFileDir$, // 设置模块的基础路径
    // baseUrl: '.', // 设置模块的基础路径
    paths:

    // region REQUIRE MODULES PATHS
    {
        "Context": "third/_custom/xjsfl/Context",
        "JSFLInterface": "third/_custom/xjsfl/JSFLInterface",
        "linqUtil": "third/_custom/utils/linqUtil",
        "satUtil": "third/_custom/utils/satUtil",
        "_exports": "third/_bridge/exports/_exports",
        "document-cookie": "third/_bridge/document-cookie/document-cookie",
        "store-js": "third/utils/store-js/store-js",
        "progress": "third/utils/progress/progress",
        "lodash": "third/utils/lodash/lodash",
        "linq": "third/utils/linq/linq",
        "text": "third/require/text/text",
        "require-js": "third/require/requirejs/require-js",
        "typedarray": "third/polyfill/typedarray/typedarray",
        "symbol-es6": "third/polyfill/symbol-es6/symbol-es6",
        "es2017": "third/polyfill/js-polyfills/es2017",
        "es7-shim": "third/polyfill/es7-shim/es7-shim",
        "es6-sham": "third/polyfill/es6-shim/es6-sham",
        "es6-shim": "third/polyfill/es6-shim/es6-shim",
        "es5-sham": "third/polyfill/es5-shim/es5-sham",
        "es5-shim": "third/polyfill/es5-shim/es5-shim",
        "path-browserify": "third/nodejs/path-browserify/path-browserify",
        "assert": "third/nodejs/assert/assert",
        "loglevel": "third/log/loglevel/loglevel",
        "universal-cookie": "third/cookie/universal-cookie/universal-cookie",
        "Events": "src/lib/out/Events",
        "test": "src/lib/out/test",
        "Tips": "src/lib/out/Tips",
        "@anjsfl/validation": "packages/validation/out/validation",
        "@anjsfl/sat": "packages/sat-js/out/SAT",
        "process": "packages/process/out/process",
        "fs": "packages/fs/out/fs",
        "@xjsfl/Constants": "packages/Constants/out/Constants",
        "console": "packages/console/console"
    },
// endregion REQUIRE MODULES PATHS

    packages: []
});
