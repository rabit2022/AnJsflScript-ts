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
        "xpath": "third/xml/xpath-0.0.34/xpath",
        "xmldom": "third/xml/xmldom-0.6.0/xmldom",
        "fast-xml-parser": "third/xml/fast-xml-parser-5.0.9/fast-xml-parser",
        "progress": "third/utils/progress/progress",
        "lodash": "third/utils/lodash/lodash",
        "linq": "third/utils/linq/linq",
        "oxide.ts": "third/types/oxide.ts/oxide.ts",
        "luxon": "third/time/luxon-3.6.1/luxon",
        "date-fns": "third/time/date-fns-4.1.0/date-fns",
        "text": "third/require/text/text",
        "require-js": "third/require/requirejs/require-js",
        "xregexp": "third/regexp/xregexp/xregexp",
        "symbol-es6": "third/polyfill/symbol-es6/symbol-es6",
        "json3": "third/polyfill/json/json3/json3",
        "Intl-complete": "third/polyfill/intl/Intl-complete",
        "Intl": "third/polyfill/intl/Intl",
        "es6-sham": "third/polyfill/es6-shim/es6-sham",
        "es6-shim": "third/polyfill/es6-shim/es6-shim",
        "es6-promise.auto": "third/polyfill/es6-promise/es6-promise.auto",
        "es5-sham": "third/polyfill/es5-shim/es5-sham",
        "es5-shim": "third/polyfill/es5-shim/es5-shim",
        "universal-cookie": "third/polyfill/cookie/universal-cookie/universal-cookie",
        "path-browserify": "third/nodejs/path-browserify/path-browserify",
        "rxjs.umd": "third/event/rxjs/rxjs.umd",
        "eventemitter3": "third/event/eventemitter3/eventemitter3",
        "stackframe": "third/console/stack/stackframe-1.3.4/stackframe",
        "error-stack-parser": "third/console/stack/error-stack-parser-3.0.0/error-stack-parser",
        "loglevel": "third/console/loglevel/loglevel",
        "cli-table3": "third/console/cli-table3/cli-table3",
        "chroma-js": "third/color/chroma.js/chroma-js",
        "fl-checker": "third/checker/es5-checker/out/fl-checker",
        "Tips": "src/lib/out/Tips",
        "@xjsfl/XUL": "packages/xjsfl/XUL/src/XUL",
        "@xjsfl/UI": "packages/xjsfl/UI/out/UI",
        "@xjsfl/super": "packages/xjsfl/super/out/super",
        "@xjsfl/Events": "packages/xjsfl/Events/out/Events",
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
