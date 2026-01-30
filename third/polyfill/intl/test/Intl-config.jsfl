/**
 * @file: Intl-config.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2025/7/7 21:49
 * @project: AnJsflScript
 * @description:
 */

define(["@third/Intl"], function(Intl) {

    const global = window;
    // Expose `IntlPolyfill` as global to add locale data into runtime later on.
    global.IntlPolyfill = Intl;

    // Require all locale data for `Intl`. This module will be
    // ignored when bundling for the browser with Browserify/Webpack.
    require(["@third/intl-locale-data"]);

    // hack to export the polyfill as global Intl if needed
    if (!global.Intl) {
        console.log("Intl");
        global.Intl = global.IntlPolyfill;
        global.IntlPolyfill.__applyLocaleSensitivePrototypes();
    }

    // providing an idiomatic api for the nodejs version of this module
    return  global.IntlPolyfill;

});
//
// // Expose `IntlPolyfill` as global to add locale data into runtime later on.
// global.IntlPolyfill = require('./lib/core.js');
//
// // Require all locale data for `Intl`. This module will be
// // ignored when bundling for the browser with Browserify/Webpack.
// require('./locale-data/complete.js');
//
// // hack to export the polyfill as global Intl if needed
// if (!global.Intl) {
//     global.Intl = global.IntlPolyfill;
//     global.IntlPolyfill.__applyLocaleSensitivePrototypes();
// }
//
// // providing an idiomatic api for the nodejs version of this module
// module.exports = global.IntlPolyfill;
