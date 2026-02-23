(function(){
 "use strict";
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define([], factory);
    else if (typeof exports === 'object')
        exports["packAll"] = factory();
    else
        root["packAll"] = factory();
})(this, function () {
    return (function () {
        var __webpack_modules__ = ({
            87: (function (__unused_webpack_module, exports, __webpack_require__) {
                "use strict";
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                exports.Fn = exports._ = exports.Default = exports.match = void 0;
                var common_1 = __webpack_require__(193);
                var option_1 = __webpack_require__(813);
                var result_1 = __webpack_require__(241);
                function match(val, pattern) {
                    return matchDispatch(val, pattern, exports.Default);
                }
                exports.match = match;
                match.compile = compile;
                function compile(pattern) {
                    return function (val) { return match(val, pattern); };
                }
                var Default = function () {
                    throw new Error("Match failed (exhausted)");
                };
                exports.Default = Default;
                exports._ = exports.Default;
                function Fn(fn) {
                    var val = function () { return throwFnCalled(); };
                    val[common_1.FnVal] = fn;
                    return val;
                }
                exports.Fn = Fn;
                function matchMapped(val, pattern, defaultBranch) {
                    if (option_1.Option.is(val)) {
                        if (val[common_1.T]) {
                            if (pattern.Some) {
                                if (typeof pattern.Some === "function") {
                                    return pattern.Some(val[common_1.Val]);
                                }
                                else {
                                    return matchDispatch(val[common_1.Val], pattern.Some, typeof pattern._ === "function" ? pattern._ : defaultBranch);
                                }
                            }
                        }
                        else if (typeof pattern.None === "function") {
                            return pattern.None();
                        }
                    }
                    else if (result_1.Result.is(val)) {
                        var Branch = val[common_1.T] ? pattern.Ok : pattern.Err;
                        if (Branch) {
                            if (typeof Branch === "function") {
                                return Branch(val[common_1.Val]);
                            }
                            else {
                                return matchDispatch(val[common_1.Val], Branch, typeof pattern._ === "function" ? pattern._ : defaultBranch);
                            }
                        }
                    }
                    else {
                        throwInvalidPattern();
                    }
                    return typeof pattern._ === "function" ? pattern._() : defaultBranch();
                }
                function matchChained(val, pattern, defaultBranch) {
                    for (var _i = 0, pattern_1 = pattern; _i < pattern_1.length; _i++) {
                        var branch = pattern_1[_i];
                        if (typeof branch === "function") {
                            return branch[common_1.FnVal] ? branch[common_1.FnVal] : branch();
                        }
                        else {
                            var cond = branch[0], result = branch[1];
                            if (matches(cond, val, true)) {
                                if (typeof result === "function") {
                                    return result[common_1.FnVal]
                                        ? result[common_1.FnVal]
                                        : result(val);
                                }
                                else {
                                    return result;
                                }
                            }
                        }
                    }
                    return defaultBranch();
                }
                function matches(cond, val, evaluate) {
                    if (cond === exports.Default || cond === val) {
                        return true;
                    }
                    if (typeof cond === "function") {
                        return cond[common_1.FnVal]
                            ? cond[common_1.FnVal] === val
                            : evaluate && cond(val);
                    }
                    if (isObjectLike(cond)) {
                        if (common_1.T in cond) {
                            return (cond.isLike(val) &&
                                matches(cond[common_1.Val], val[common_1.Val], false));
                        }
                        if (isObjectLike(val) && Array.isArray(cond) === Array.isArray(val)) {
                            for (var _i = 0, _a = Object.keys(cond); _i < _a.length; _i++) {
                                var key = _a[_i];
                                if (!(key in val) ||
                                    !matches(cond[key], val[key], evaluate)) {
                                    return false;
                                }
                            }
                            return true;
                        }
                    }
                    return false;
                }
                function matchDispatch(val, pattern, defaultBranch) {
                    if (Array.isArray(pattern)) {
                        return matchChained(val, pattern, defaultBranch);
                    }
                    else if (isObjectLike(pattern)) {
                        return matchMapped(val, pattern, defaultBranch);
                    }
                    throwInvalidPattern();
                }
                function isObjectLike(value) {
                    return value !== null && typeof value === "object";
                }
                function throwInvalidPattern() {
                    throw new Error("Match failed (invalid pattern)");
                }
                function throwFnCalled() {
                    throw new Error("Match error (wrapped function called)");
                }
            }),
            102: (function (__unused_webpack_module, exports, __webpack_require__) {
                "use strict";
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                exports._ = exports.Default = exports.Fn = exports.match = exports.Err = exports.Ok = exports.Result = exports.None = exports.Some = exports.Option = void 0;
                var option_1 = __webpack_require__(813);
                Object.defineProperty(exports, "Option", ({ enumerable: true, get: function () { return option_1.Option; } }));
                Object.defineProperty(exports, "Some", ({ enumerable: true, get: function () { return option_1.Some; } }));
                Object.defineProperty(exports, "None", ({ enumerable: true, get: function () { return option_1.None; } }));
                var result_1 = __webpack_require__(241);
                Object.defineProperty(exports, "Result", ({ enumerable: true, get: function () { return result_1.Result; } }));
                Object.defineProperty(exports, "Ok", ({ enumerable: true, get: function () { return result_1.Ok; } }));
                Object.defineProperty(exports, "Err", ({ enumerable: true, get: function () { return result_1.Err; } }));
                var match_1 = __webpack_require__(87);
                Object.defineProperty(exports, "match", ({ enumerable: true, get: function () { return match_1.match; } }));
                Object.defineProperty(exports, "Fn", ({ enumerable: true, get: function () { return match_1.Fn; } }));
                Object.defineProperty(exports, "Default", ({ enumerable: true, get: function () { return match_1.Default; } }));
                Object.defineProperty(exports, "_", ({ enumerable: true, get: function () { return match_1._; } }));
            }),
            193: (function (__unused_webpack_module, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                exports.isTruthy = exports.EmptyArray = exports.FnVal = exports.Val = exports.T = void 0;
                exports.T = Symbol("T");
                exports.Val = Symbol("Val");
                exports.FnVal = Symbol("FnVal");
                exports.EmptyArray = Object.freeze([]);
                function isTruthy(val) {
                    return val instanceof Date ? val.getTime() === val.getTime() : !!val;
                }
                exports.isTruthy = isTruthy;
            }),
            241: (function (__unused_webpack_module, exports, __webpack_require__) {
                "use strict";
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                exports.Err = exports.Ok = exports.Result = exports.ResultType = void 0;
                var common_1 = __webpack_require__(193);
                var option_1 = __webpack_require__(813);
                var ResultType = (function () {
                    function ResultType(val, ok) {
                        this[common_1.Val] = val;
                        this[common_1.T] = ok;
                    }
                    ResultType.prototype[Symbol.iterator] = function () {
                        return this[common_1.T]
                            ? this[common_1.Val][Symbol.iterator]()
                            : common_1.EmptyArray[Symbol.iterator]();
                    };
                    ResultType.prototype.into = function (err) {
                        return this[common_1.T] ? this[common_1.Val] : err;
                    };
                    ResultType.prototype.intoTuple = function () {
                        return this[common_1.T] ? [null, this[common_1.Val]] : [this[common_1.Val], null];
                    };
                    ResultType.prototype.isLike = function (cmp) {
                        return cmp instanceof ResultType && this[common_1.T] === cmp[common_1.T];
                    };
                    ResultType.prototype.isOk = function () {
                        return this[common_1.T];
                    };
                    ResultType.prototype.isErr = function () {
                        return !this[common_1.T];
                    };
                    ResultType.prototype.filter = function (f) {
                        return this[common_1.T] && f(this[common_1.Val]) ? (0, option_1.Some)(this[common_1.Val]) : option_1.None;
                    };
                    ResultType.prototype.flatten = function () {
                        return this[common_1.T] ? this[common_1.Val] : this;
                    };
                    ResultType.prototype.expect = function (msg) {
                        if (this[common_1.T]) {
                            return this[common_1.Val];
                        }
                        else {
                            throw new Error(msg);
                        }
                    };
                    ResultType.prototype.expectErr = function (msg) {
                        if (this[common_1.T]) {
                            throw new Error(msg);
                        }
                        else {
                            return this[common_1.Val];
                        }
                    };
                    ResultType.prototype.unwrap = function () {
                        return this.expect("Failed to unwrap Result (found Err)");
                    };
                    ResultType.prototype.unwrapErr = function () {
                        return this.expectErr("Failed to unwrapErr Result (found Ok)");
                    };
                    ResultType.prototype.unwrapOr = function (def) {
                        return this[common_1.T] ? this[common_1.Val] : def;
                    };
                    ResultType.prototype.unwrapOrElse = function (f) {
                        return this[common_1.T] ? this[common_1.Val] : f();
                    };
                    ResultType.prototype.unwrapUnchecked = function () {
                        return this[common_1.Val];
                    };
                    ResultType.prototype.or = function (resb) {
                        return this[common_1.T] ? this : resb;
                    };
                    ResultType.prototype.orElse = function (f) {
                        return this[common_1.T] ? this : f(this[common_1.Val]);
                    };
                    ResultType.prototype.and = function (resb) {
                        return this[common_1.T] ? resb : this;
                    };
                    ResultType.prototype.andThen = function (f) {
                        return this[common_1.T] ? f(this[common_1.Val]) : this;
                    };
                    ResultType.prototype.map = function (f) {
                        return new ResultType(this[common_1.T] ? f(this[common_1.Val]) : this[common_1.Val], this[common_1.T]);
                    };
                    ResultType.prototype.mapErr = function (op) {
                        return new ResultType(this[common_1.T] ? this[common_1.Val] : op(this[common_1.Val]), this[common_1.T]);
                    };
                    ResultType.prototype.mapOr = function (def, f) {
                        return this[common_1.T] ? f(this[common_1.Val]) : def;
                    };
                    ResultType.prototype.mapOrElse = function (def, f) {
                        return this[common_1.T] ? f(this[common_1.Val]) : def(this[common_1.Val]);
                    };
                    ResultType.prototype.ok = function () {
                        return this[common_1.T] ? (0, option_1.Some)(this[common_1.Val]) : option_1.None;
                    };
                    return ResultType;
                }());
                exports.ResultType = ResultType;
                function is(val) {
                    return val instanceof ResultType;
                }
                function Result(val) {
                    return from(val);
                }
                exports.Result = Result;
                Result.is = is;
                Result.from = from;
                Result.nonNull = nonNull;
                Result.qty = qty;
                Result.safe = safe;
                Result.all = all;
                Result.any = any;
                function Ok(val) {
                    return new ResultType(val, true);
                }
                exports.Ok = Ok;
                function Err(val) {
                    return new ResultType(val, false);
                }
                exports.Err = Err;
                function from(val) {
                    return (0, common_1.isTruthy)(val)
                        ? new ResultType(val, !(val instanceof Error))
                        : Err(null);
                }
                function nonNull(val) {
                    return val === undefined || val === null || val !== val
                        ? Err(null)
                        : Ok(val);
                }
                function qty(val) {
                    return val >= 0 && Number.isInteger(val) ? Ok(val) : Err(null);
                }
                function safe(fn) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    if (fn instanceof Promise) {
                        return fn.then(function (val) { return Ok(val); }, toError);
                    }
                    try {
                        return Ok(fn.apply(void 0, args));
                    }
                    catch (err) {
                        return toError(err);
                    }
                }
                function toError(err) {
                    return err instanceof Error ? Err(err) : Err(new Error(String(err)));
                }
                function all() {
                    var results = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        results[_i] = arguments[_i];
                    }
                    var ok = [];
                    for (var _a = 0, results_1 = results; _a < results_1.length; _a++) {
                        var result = results_1[_a];
                        if (result.isOk()) {
                            ok.push(result.unwrapUnchecked());
                        }
                        else {
                            return result;
                        }
                    }
                    return Ok(ok);
                }
                function any() {
                    var results = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        results[_i] = arguments[_i];
                    }
                    var err = [];
                    for (var _a = 0, results_2 = results; _a < results_2.length; _a++) {
                        var result = results_2[_a];
                        if (result.isOk()) {
                            return result;
                        }
                        else {
                            err.push(result.unwrapUnchecked());
                        }
                    }
                    return Err(err);
                }
            }),
            813: (function (__unused_webpack_module, exports, __webpack_require__) {
                "use strict";
                Object.defineProperty(exports, "__esModule", ({ value: true }));
                exports.None = exports.Some = exports.Option = void 0;
                var common_1 = __webpack_require__(193);
                var result_1 = __webpack_require__(241);
                var OptionType = (function () {
                    function OptionType(val, some) {
                        this[common_1.T] = some;
                        this[common_1.Val] = val;
                    }
                    OptionType.prototype[Symbol.iterator] = function () {
                        return this[common_1.T]
                            ? this[common_1.Val][Symbol.iterator]()
                            : common_1.EmptyArray[Symbol.iterator]();
                    };
                    OptionType.prototype.into = function (none) {
                        return this[common_1.T] ? this[common_1.Val] : none;
                    };
                    OptionType.prototype.isLike = function (cmp) {
                        return cmp instanceof OptionType && this[common_1.T] === cmp[common_1.T];
                    };
                    OptionType.prototype.isSome = function () {
                        return this[common_1.T];
                    };
                    OptionType.prototype.isNone = function () {
                        return !this[common_1.T];
                    };
                    OptionType.prototype.filter = function (f) {
                        return this[common_1.T] && f(this[common_1.Val]) ? this : exports.None;
                    };
                    OptionType.prototype.flatten = function () {
                        return this[common_1.T] ? this[common_1.Val] : exports.None;
                    };
                    OptionType.prototype.expect = function (msg) {
                        if (this[common_1.T]) {
                            return this[common_1.Val];
                        }
                        else {
                            throw new Error(msg);
                        }
                    };
                    OptionType.prototype.unwrap = function () {
                        return this.expect("Failed to unwrap Option (found None)");
                    };
                    OptionType.prototype.unwrapOr = function (def) {
                        return this[common_1.T] ? this[common_1.Val] : def;
                    };
                    OptionType.prototype.unwrapOrElse = function (f) {
                        return this[common_1.T] ? this[common_1.Val] : f();
                    };
                    OptionType.prototype.unwrapUnchecked = function () {
                        return this[common_1.Val];
                    };
                    OptionType.prototype.or = function (optb) {
                        return this[common_1.T] ? this : optb;
                    };
                    OptionType.prototype.orElse = function (f) {
                        return this[common_1.T] ? this : f();
                    };
                    OptionType.prototype.and = function (optb) {
                        return this[common_1.T] ? optb : exports.None;
                    };
                    OptionType.prototype.andThen = function (f) {
                        return this[common_1.T] ? f(this[common_1.Val]) : exports.None;
                    };
                    OptionType.prototype.map = function (f) {
                        return this[common_1.T] ? new OptionType(f(this[common_1.Val]), true) : exports.None;
                    };
                    OptionType.prototype.mapOr = function (def, f) {
                        return this[common_1.T] ? f(this[common_1.Val]) : def;
                    };
                    OptionType.prototype.mapOrElse = function (def, f) {
                        return this[common_1.T] ? f(this[common_1.Val]) : def();
                    };
                    OptionType.prototype.okOr = function (err) {
                        return this[common_1.T] ? (0, result_1.Ok)(this[common_1.Val]) : (0, result_1.Err)(err);
                    };
                    OptionType.prototype.okOrElse = function (f) {
                        return this[common_1.T] ? (0, result_1.Ok)(this[common_1.Val]) : (0, result_1.Err)(f());
                    };
                    return OptionType;
                }());
                function Option(val) {
                    return from(val);
                }
                exports.Option = Option;
                Option.is = is;
                Option.from = from;
                Option.nonNull = nonNull;
                Option.qty = qty;
                Option.safe = safe;
                Option.all = all;
                Option.any = any;
                function Some(val) {
                    return new OptionType(val, true);
                }
                exports.Some = Some;
                exports.None = Object.freeze(new OptionType(undefined, false));
                function is(val) {
                    return val instanceof OptionType;
                }
                function from(val) {
                    return (0, common_1.isTruthy)(val) && !(val instanceof Error) ? Some(val) : exports.None;
                }
                function nonNull(val) {
                    return val === undefined || val === null || val !== val
                        ? exports.None
                        : Some(val);
                }
                function qty(val) {
                    return val >= 0 && Number.isInteger(val) ? Some(val) : exports.None;
                }
                function safe(fn) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    if (fn instanceof Promise) {
                        return fn.then(function (val) { return Some(val); }, function () { return exports.None; });
                    }
                    try {
                        return Some(fn.apply(void 0, args));
                    }
                    catch (_a) {
                        return exports.None;
                    }
                }
                function all() {
                    var options = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        options[_i] = arguments[_i];
                    }
                    var some = [];
                    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
                        var option = options_1[_a];
                        if (option.isSome()) {
                            some.push(option.unwrapUnchecked());
                        }
                        else {
                            return exports.None;
                        }
                    }
                    return Some(some);
                }
                function any() {
                    var options = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        options[_i] = arguments[_i];
                    }
                    for (var _a = 0, options_2 = options; _a < options_2.length; _a++) {
                        var option = options_2[_a];
                        if (option.isSome()) {
                            return option;
                        }
                    }
                    return exports.None;
                }
            }),
            956: (function (module, __unused_webpack_exports, __webpack_require__) {
                module.exports = __webpack_require__(102);
            })
        });
        var __webpack_module_cache__ = {};
        function __webpack_require__(moduleId) {
            var cachedModule = __webpack_module_cache__[moduleId];
            if (cachedModule !== undefined) {
                return cachedModule.exports;
            }
            var module = __webpack_module_cache__[moduleId] = {
                exports: {}
            };
            __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
            return module.exports;
        }
        var __webpack_exports__ = __webpack_require__(956);
        return __webpack_exports__;
    })();
});

})();