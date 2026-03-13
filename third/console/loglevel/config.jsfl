/**
 * @file: date-fns-config.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2025/7/7 21:54
 * @project: AnJsflScript
 * @description:
 */

// loglevel依赖 document.cookie
define(["@polyfill/console", "@polyfill/cookie", "@third/loglevel"], function (console, cookie, log) {
    return log;
});