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
        "Context": "packages/xjsfl/Context/src/Selectors",
        "JSFLInterface": "third/_custom/xjsfl/JSFLInterface",
        "_exports": "third/_bridge/exports/_exports",
        "document-cookie": "third/_bridge/document-cookie/document-cookie",
        "progress": "third/utils/progress/progress",
        "lodash": "third/utils/lodash/lodash",
        "linq": "third/utils/linq/linq",
        "stackframe": "third/stack/stackframe-1.3.4/stackframe",
        "error-stack-parser": "third/stack/error-stack-parser-3.0.0/error-stack-parser",
        "test": "third/stack/error-stack-parser-3.0.0/test/test",
        "test2": "third/stack/error-stack-parser-3.0.0/test/test2",
        "test3": "third/stack/error-stack-parser-3.0.0/test/test3",
        "test4": "third/stack/error-stack-parser-3.0.0/test/test4",
        "test45": "third/stack/error-stack-parser-3.0.0/test/test45",
        "text": "third/require/text/text",
        "require-js": "third/require/requirejs/require-js",
        "es6-sham": "third/polyfill/es6-shim/es6-sham",
        "es6-shim": "third/polyfill/es6-shim/es6-shim",
        "es5-sham": "third/polyfill/es5-shim/es5-sham",
        "es5-shim": "third/polyfill/es5-shim/es5-shim",
        "path-browserify": "third/nodejs/path-browserify/path-browserify",
        "loglevel": "third/log/loglevel/loglevel",
        "json3": "third/json/json3/json3",
        "circular-json.amd": "third/json/circular-json-0.5.9/circular-json.amd",
        "universal-cookie": "third/cookie/universal-cookie/universal-cookie",
        "cli-table3": "third/console/cli-table3/cli-table3",
        "chroma-js": "third/color/chroma.js/chroma-js",
        "Tips": "src/lib/out/Tips",
        "@xjsfl/UI": "packages/xjsfl/UI/out/UI",
        "@xjsfl/super": "packages/xjsfl/super/out/super",
        "@xjsfl/Events": "packages/xjsfl/Events/out/Events",
        "@xjsfl/Constants": "packages/xjsfl/Constants/out/Constants",
        "setTimeout": "packages/polyfills/setTimeout/out/setTimeout",
        "@nodejs/__filename": "packages/nodejs/__filename/out/__filename",
        "url": "packages/nodejs/url/out/url",
        "process": "packages/nodejs/process/out/process",
        "fs": "packages/nodejs/fs/out/fs",
        "assert": "packages/nodejs/assert/assert",
        "console.table": "packages/dom/console.table/out/console-table",
        "console": "packages/dom/console/out/console",
        "@anjsfl/validation": "packages/anjsfl/validation/out/validation",
        "@anjsfl/tween": "packages/anjsfl/tween/src/dp/Tween",
        "@anjsfl/sat": "packages/anjsfl/sat-js/out/SAT",
        "@anjsfl/random": "packages/anjsfl/random/out/random",
        "@anjsfl/more-element": "packages/anjsfl/MoreElement/out/more-element",
        "@anjsfl/Context": "packages/anjsfl/Context/src/flash/Element/ElementTransform",
        "@xjsfl/XUL": "packages/xjsfl/XUL/src/XUL",
        "@xjsfl/XUL/XML": "packages/xjsfl/XUL/src/XML",
        "@xjsfl/XUL/XUL": "packages/xjsfl/XUL/src/XUL",
        "@xjsfl/XUL/XULControl": "packages/xjsfl/XUL/src/XULControl",
        "@xjsfl/XUL/XULEvent": "packages/xjsfl/XUL/src/XULEvent",
        "@xjsfl/XUL/Utils": "packages/xjsfl/XUL/src/Utils",
        "@xjsfl/XUL/xjsfl": "packages/xjsfl/XUL/src/xjsfl"
    },
// endregion REQUIRE MODULES PATHS

    packages: []
});
