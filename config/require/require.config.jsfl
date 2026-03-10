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
    // baseUrl: window.AnJsflScript.$ProjectFileDir$, // 设置模块的基础路径
    baseUrl: window.AnJsflScript.folders.AnJsflScript, // 设置模块的基础路径
    paths:

    // region REQUIRE MODULES PATHS
    {
        "lodash": "third/utils/lodash/lodash",
        "linq": "third/utils/linq/linq",
        "tslib": "third/types/tslib/tslib",
        "oxide.ts": "third/types/oxide.ts/oxide.ts",
        "requirejs": "third/require/requirejs/require-js",
        "AnJsflScript-ts": "third/nodejs/assert/assert",
        "micromatch": "third/regex/micromatch/micromatch",
        "es8-shim": "third/polyfill/es8/es8-shim/es8-shim",
        "es7-shim": "third/polyfill/es7/es7-shim/es7-shim",
        "typedarray": "third/polyfill/es6/typedarray/typedarray",
        "symbol-es6": "third/polyfill/es6/symbol-es6/symbol-es6",
        "intl": "third/polyfill/es6/intl/intl",
        "harmony-reflect": "third/polyfill/es6/harmony-reflect/reflect",
        "es6-promise": "third/polyfill/es6/es6-promise/es6-promise.auto",
        "es6-collections": "third/polyfill/es6/es6-collections/es6-collections",
        "json5": "third/polyfill/es5/json/json5/index",
        "json3": "third/polyfill/es5/json/json3/json3",
        "@polyfill/symbol-dispose": "third/polyfill/es2025/symbol-dispose/symbol-dispose",
        "jsbi": "third/polyfill/es2020/jsbi/jsbi-umd",
        "es10-shim": "third/polyfill/es2019/es10-shim/es10-shim",
        "util": "third/nodejs/util/util",
        "path-browserify": "third/nodejs/path/path-browserify/path-browserify",
        "eventemitter3": "third/nodejs/event/eventemitter3/eventemitter3",
        "seedrandom": "third/math/seedrandom/seedrandom",
        "random-js": "third/math/random-js/random-js",
        "chance": "third/math/chance/chance",
        "store-js": "third/dom/store-js/store-js",
        "stackframe": "third/console/stack/stackframe/stackframe",
        "error-stack-parser": "third/console/stack/error-stack-parser/error-stack-parser",
        "progress": "third/console/progress/progress",
        "loglevel": "third/console/loglevel/loglevel",
        "cli-table3": "third/console/cli-table3/cli-table3",
        "chroma-js": "third/color/chroma.js/chroma-js",
        "@third/luxon": "third/time/luxon/luxon",
        "luxon": "third/time/luxon/config",
        "@third/date-fns": "third/time/date-fns/date-fns",
        "date-fns": "third/time/date-fns/config",
        "_exports": "third/require/exports/exports",
        "es6-sham": "third/polyfill/es6/es6-shim/es6-sham",
        "es6-shim": "third/polyfill/es6/es6-shim/es6-shim",
        "@third/superjson": "third/polyfill/es5/json/superjson/superjson",
        "superjson": "third/polyfill/es5/json/superjson/config",
        "es5-sham": "third/polyfill/es5/es5-shim/es5-sham",
        "es5-shim": "third/polyfill/es5/es5-shim/es5-shim",
        "assert": "third/nodejs/assert/assert",
        "@third/fast-xml-parser": "third/dom/xml/fast-xml-parser/fast-xml-parser",
        "fast-xml-parser": "third/dom/xml/fast-xml-parser/config",
        "@third/universal-cookie": "third/dom/cookie/universal-cookie/universal-cookie",
        "@polyfill/cookie": "third/dom/cookie/universal-cookie/document-cookie",
        "atob": "third/dom/base-64/atob",
        "base-64": "third/dom/base-64/base-64",
        "Hello2": "src/lib/out/Hello2",
        "@xjsfl/UI": "packages/xjsfl/UI/out/UI",
        "@xjsfl/super": "packages/xjsfl/super/out/super",
        "@xjsfl/Selector": "packages/xjsfl/Selector/src/Selector/Selector",
        "@xjsfl/Events": "packages/xjsfl/Events/out/Events",
        "@xjsfl/Context": "packages/xjsfl/Context/src/Context",
        "@xjsfl/Constants": "packages/xjsfl/Constants/out/Constants",
        "@xjafl/Collection": "packages/xjsfl/Collection/src/ItemCollection/ItemCollection",
        "overload-js": "packages/polyfills/overload-js/dp/overload-js",
        "@nodejs/__filename": "packages/nodejs/__filename/out/__filename",
        "url": "packages/nodejs/url/out/url",
        "process": "packages/nodejs/process/out/process",
        "fs": "packages/nodejs/fs/out/fs",
        "child_process": "packages/nodejs/child-process/out/child_process",
        "@dom/setTimeout": "packages/dom/setTimeout/out/setTimeout",
        "console.table": "packages/dom/console.table/out/console-table",
        "console.stack": "packages/dom/console.stack/out/stack",
        "console": "packages/dom/console/out/console",
        "@anjsfl-ts/Sessions": "packages/anjsfl-ts/Sessions/out/EditSession",
        "@anjsfl-ts/dev": "packages/anjsfl-ts/dev/out/@anjsfl-ts/dev",
        "@anjsfl/validation": "packages/anjsfl/validation/out/validation",
        "@anjsfl/sat": "packages/anjsfl/sat-js/out/SAT",
        "@anjsfl/random": "packages/anjsfl/random/out/random",
        "@anjsfl/parser": "packages/anjsfl/parser/out/parser",
        "@anjsfl/more-element": "packages/anjsfl/MoreElement/out/more-element",
        "@anjsfl/checker": "packages/anjsfl/checker/out/@anjsfl/checker",
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
