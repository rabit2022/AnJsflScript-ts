/**
 * @file: exports.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2025/7/9 20:19
 * @project: AnJsflScript
 * @description:
 * 1. to resolve this questions
 * if ts to js,will get this:
 * ```JavaScript
 * define(["require", "exports", "SAT"], function (require, exports, SAT_1) {
 *     "use strict";
 *     Object.defineProperty(exports, "__esModule", { value: true });//<--
 * ```
 *
 * now I need require module,must do this:
 * ```JavaScript
 * require(["require", "_exports", "SAT"], function (require, exports, SAT_1) {
 *     "use strict";
 *     Object.defineProperty(exports, "__esModule", { value: true });//<--
 * ```
 *
 * "exports" is undefined,we need use "_exports" instead.
 *
 * 2. empty modules;
 * if use nodejs builtin modules,could use it;
 */

define(function() {
    return {};
});