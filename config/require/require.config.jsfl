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
    paths:

    // region REQUIRE MODULES PATHS
    {
        "Context": "third/_custom/xjsfl/Context",
        "JSFLInterface": "third/_custom/xjsfl/JSFLInterface",
        "linqUtil": "third/_custom/utils/linqUtil",
        "satUtil": "third/_custom/utils/satUtil",
        "_exports": "third/_bridge/exports/_exports",
        "document-cookie": "third/_bridge/document-cookie/document-cookie",
        "progress": "third/utils/progress/progress",
        "linq": "third/utils/linq/linq",
        "text": "third/require/text/text",
        "require-js": "third/require/requirejs/require-js",
        "es6-sham": "third/polyfill/es6-shim/es6-sham",
        "es6-shim": "third/polyfill/es6-shim/es6-shim",
        "es5-sham": "third/polyfill/es5-shim/es5-sham",
        "es5-shim": "third/polyfill/es5-shim/es5-shim",
        "loglevel": "third/log/loglevel/loglevel",
        "universal-cookie": "third/cookie/universal-cookie/universal-cookie",
        "Events": "src/lib/out/Events",
        "test": "src/lib/out/test",
        "Tips": "src/lib/out/Tips",
        "@xjsfl/UI": "packages/xjsfl/UI/out/UI",
        "@xjsfl/Constants": "packages/xjsfl/Constants/out/Constants",
        "@nodejs/__filename": "packages/nodejs/__filename/out/__filename",
        "url": "packages/nodejs/url/out/url",
        "process": "packages/nodejs/process/out/process",
        "fs": "packages/nodejs/fs/out/fs",
        "assert": "packages/nodejs/assert/assert",
        "console": "packages/dom/console/console",
        "@anjsfl/validation": "packages/anjsfl/validation/out/validation",
        "@anjsfl/sat": "packages/anjsfl/sat-js/out/SAT"
    },
// endregion REQUIRE MODULES PATHS

    packages: []
});
