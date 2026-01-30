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
        "xpath": "third/xml/xpath-0.0.34/xpath",
        "xmldom": "third/xml/xmldom-0.6.0/xmldom",
        "fast-xml-parser": "third/xml/fast-xml-parser-5.0.9/fast-xml-parser",
        "progress": "third/utils/progress/progress",
        "lodash": "third/utils/lodash/lodash",
        "linq": "third/utils/linq/linq",
        "oxide.ts": "third/types/oxide.ts/oxide.ts",
        "requirejs": "third/require/requirejs/require-js",
        "AnJsflScript-ts": "third/require/exports/_exports",
        "xregexp": "third/regexp/xregexp/xregexp",
        "symbol-es6": "third/polyfill/symbol-es6/symbol-es6",
        "json3": "third/polyfill/json/json3/json3",
        "intl": "third/polyfill/intl/intl",
        "es7-shim": "third/polyfill/es7-shim/es7-shim",
        "es6-promise": "third/polyfill/es6-promise/es6-promise.auto",
        "path-browserify": "third/nodejs/path-browserify/path-browserify",
        "rxjs": "third/event/rxjs/rxjs.umd",
        "eventemitter3": "third/event/eventemitter3/eventemitter3",
        "stackframe": "third/console/stack/stackframe/stackframe",
        "error-stack-parser": "third/console/stack/error-stack-parser/error-stack-parser",
        "loglevel": "third/console/loglevel/loglevel",
        "cli-table3": "third/console/cli-table3/cli-table3",
        "chroma-js": "third/color/chroma.js/chroma-js",
        "@third/luxon": "third/time/luxon/luxon",
        "luxon": "third/time/luxon/luxon-config",
        "_exports": "third/_bridge/exports/_exports",
        "@third/Intl": "third/polyfill/intl/Intl",
        "@third/intl-locale-data": "third/polyfill/intl/intl-locale-data",
        "Intl": "third/polyfill/intl/Intl-config",
        "es6-sham": "third/polyfill/es6-shim/es6-sham",
        "es6-shim": "third/polyfill/es6-shim/es6-shim",
        "es5-sham": "third/polyfill/es5-shim/es5-sham",
        "es5-shim": "third/polyfill/es5-shim/es5-shim",
        "@third/universal-cookie": "third/polyfill/cookie/universal-cookie/universal-cookie",
        "@polyfill/cookie": "third/polyfill/cookie/universal-cookie/document-cookie",
        "Tips": "src/lib/out/Tips",
        "@xjsfl/UI": "packages/xjsfl/UI/out/UI",
        "@xjsfl/super": "packages/xjsfl/super/out/super",
        "@xjsfl/Events": "packages/xjsfl/Events/out/Events",
        "Context": "packages/xjsfl/Context/src/Selectors",
        "@xjsfl/Constants": "packages/xjsfl/Constants/out/Constants",
        "setTimeout": "packages/polyfills/setTimeout/dp/history/test_zero",
        "@nodejs/__filename": "packages/nodejs/__filename/out/__filename",
        "url": "packages/nodejs/url/out/url",
        "process": "packages/nodejs/process/out/process",
        "fs": "packages/nodejs/fs/out/fs",
        "assert": "packages/nodejs/assert/assert",
        "console.table": "packages/dom/console.table/out/console-table",
        "console": "packages/dom/console/out/console",
        "@anjsfl/validation": "packages/anjsfl/validation/out/validation",
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
