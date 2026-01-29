"use strict";

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;
    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }
    (g.oxide || (g.oxide = {})).ts = f();
  }
})(function () {
  var define, module, exports;
  return function () {
    function r(e, n, t) {
      function o(i, f) {
        if (!n[i]) {
          if (!e[i]) {
            var c = "function" == typeof require && require;
            if (!f && c) return c(i, !0);
            if (u) return u(i, !0);
            var a = new Error("Cannot find module '" + i + "'");
            throw a.code = "MODULE_NOT_FOUND", a;
          }
          var p = n[i] = {
            exports: {}
          };
          e[i][0].call(p.exports, function (r) {
            var n = e[i][1][r];
            return o(n || r);
          }, p, p.exports, r, e, n, t);
        }
        return n[i].exports;
      }
      for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
      return o;
    }
    return r;
  }()({
    1: [function (require, module, exports) {
      /*
      
      npx browserify entry.js -o dist/oxide.ts.js --standalone oxide.ts
      npx babel dist/oxide.ts.js --out-file dist/oxide.ts.jsfl
      
      
       */
      module.exports = require('oxide.ts');
    }, {
      "oxide.ts": 3
    }],
    2: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isTruthy = exports.EmptyArray = exports.FnVal = exports.Val = exports.T = void 0;
      /**
       * Unique marker for `Option` and `Result` types.
       *
       * ### Warning
       * This library sometimes assumes a value with this key is an Option or Result
       * without explicitly checking the instance type or other properties.
       */
      exports.T = Symbol("T");
      exports.Val = Symbol("Val");
      exports.FnVal = Symbol("FnVal");
      exports.EmptyArray = Object.freeze([]);
      function isTruthy(val) {
        return val instanceof Date ? val.getTime() === val.getTime() : !!val;
      }
      exports.isTruthy = isTruthy;
    }, {}],
    3: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports._ = exports.Default = exports.Fn = exports.match = exports.Err = exports.Ok = exports.Result = exports.None = exports.Some = exports.Option = void 0;
      var option_1 = require("./option");
      Object.defineProperty(exports, "Option", {
        enumerable: true,
        get: function get() {
          return option_1.Option;
        }
      });
      Object.defineProperty(exports, "Some", {
        enumerable: true,
        get: function get() {
          return option_1.Some;
        }
      });
      Object.defineProperty(exports, "None", {
        enumerable: true,
        get: function get() {
          return option_1.None;
        }
      });
      var result_1 = require("./result");
      Object.defineProperty(exports, "Result", {
        enumerable: true,
        get: function get() {
          return result_1.Result;
        }
      });
      Object.defineProperty(exports, "Ok", {
        enumerable: true,
        get: function get() {
          return result_1.Ok;
        }
      });
      Object.defineProperty(exports, "Err", {
        enumerable: true,
        get: function get() {
          return result_1.Err;
        }
      });
      var match_1 = require("./match");
      Object.defineProperty(exports, "match", {
        enumerable: true,
        get: function get() {
          return match_1.match;
        }
      });
      Object.defineProperty(exports, "Fn", {
        enumerable: true,
        get: function get() {
          return match_1.Fn;
        }
      });
      Object.defineProperty(exports, "Default", {
        enumerable: true,
        get: function get() {
          return match_1.Default;
        }
      });
      Object.defineProperty(exports, "_", {
        enumerable: true,
        get: function get() {
          return match_1._;
        }
      });
    }, {
      "./match": 4,
      "./option": 5,
      "./result": 6
    }],
    4: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Fn = exports._ = exports.Default = exports.match = void 0;
      var common_1 = require("./common");
      var option_1 = require("./option");
      var result_1 = require("./result");
      /**
       * Concisely determine what action should be taken for a given input value.
       *
       * ### Mapped Matching
       *
       * Mapped matching is possible on `Option` and `Result` types. Passing any
       * other type will throw an invalid pattern error.
       *
       * ```
       * const num = Option(10);
       * const res = match(num, {
       *    Some: (n) => n + 1,
       *    None: () => 0,
       * });
       *
       * assert.equal(res, 11);
       * ```
       *
       * You can nest mapped matching patterns and provide defaults. If a default is
       * not found in the current level it will fall back to the previous level. When
       * no suitable match or default is found, an exhausted error is thrown.
       *
       * ```
       * function nested(val: Result<Option<number>, string>): string {
       *    return match(val, {
       *       Ok: { Some: (num) => `found ${num}` },
       *       _: () => "nothing",
       *    });
       * }
       *
       * assert.equal(nested(Ok(Some(10))), "found 10");
       * assert.equal(nested(Ok(None)), "nothing");
       * assert.equal(nested(Err("Not a number")), "nothing");
       * ```
       *
       * ### Combined Matching
       *
       * Mapped Matching and Chained Matching can be combined. A match chain can be
       * provided instead of a function for `Some`, `Ok` and `Err`. E.g.
       *
       * ```
       * function matchNum(val: Option<number>): string {
       *    return match(val, {
       *       Some: [
       *          [5, "5"],
       *          [(x) => x < 10, "< 10"],
       *          [(x) => x > 20, "> 20"],
       *       ],
       *       _: () => "none or not matched",
       *    });
       * }
       *
       * assert.equal(matchNum(Some(5)), "5");
       * assert.equal(matchNum(Some(7)), "< 10");
       * assert.equal(matchNum(Some(25)), "> 20");
       * assert.equal(matchNum(Some(15)), "none or not matched");
       * assert.equal(matchNum(None), "none or not matched");
       * ```
       *
       * ### Async
       *
       * A `condition` is always a sync function. The `result` can be an async
       * function, providing that all branches return an async function.
       *
       * ### Chained Matching
       *
       * Chained matching is possible on any type. Branches are formed by associating
       * a `condition` with a `result`, and the chain is an array of branches. The
       * last item in a chain may be a function (called to determine the default
       * result when no branches match).
       *
       * A `condition` can be a:
       * - primitive (to test for equality)
       * - filter function which returns a boolean (to use a custom test)
       * - partial object/array of `conditions` (to test for matching keys)
       * - `Some`, `Ok` or `Err` containing a `condition` which is not a filter
       *   function (and which does not included a nested filter function).
       * - function wrapped with `Fn` (to test for equality)
       * - `_` or `Default` (to match any value at this position)
       *
       * A `result` can be:
       * - any non-function value to be used as the result
       * - a function which returns the result when called
       * - a function wrapped with `Fn` to be used as the result
       *
       * If no branch matches and there is no default available, an exhausted error
       * is thrown.
       *
       * #### Primitive
       *
       * The branch succeeds if the `condition` is strictly equal to the provided
       * value.
       *
       * ```
       * function matchNum(num: number): string {
       *    return match(num, [
       *       [5, "five"],
       *       [10, "ten"],
       *       [15, (x) => `fifteen (${x})`], // result function
       *       () => "other",
       *    ]);
       * }
       *
       * assert.equal(matchNum(5), "five");
       * assert.equal(matchNum(10), "ten");
       * assert.equal(matchNum(15), "fifteen (15)");
       * assert.equal(matchNum(20), "other");
       * ```
       *
       * #### Filter Function
       *
       * The branch succeeds if the `condition` returns true.
       *
       * ```
       * function matchNum(num: number): string {
       *    return match(num, [
       *       [5, "five"], // Primitive Match
       *       [(x) => x < 20, "< 20"],
       *       [(x) => x > 30, "> 30"],
       *       () => "other",
       *    ]);
       * }
       *
       * assert.equal(matchNum(5), "five");
       * assert.equal(matchNum(15), "< 20");
       * assert.equal(matchNum(50), "> 30");
       * assert.equal(matchNum(25), "other");
       * ```
       *
       * #### Object
       *
       * The branch succeeds if all the keys in `condition` match those in the
       * provided value. Using `_` allows any value (even undefined), but the key
       * must still be present.
       *
       *
       * ```
       * interface ExampleObj {
       *    a: number;
       *    b?: { c: number };
       *    o?: number;
       * }
       *
       * function matchObj(obj: ExampleObj): string {
       *    return match(obj, [
       *       [{ a: 5 }, "a = 5"],
       *       [{ b: { c: 5 } }, "c = 5"],
       *       [{ a: 10, o: _ }, "a = 10, o = _"],
       *       [{ a: 15, b: { c: (n) => n > 10 } }, "a = 15; c > 10"],
       *       () => "other",
       *    ]);
       * }
       *
       * assert.equal(matchObj({ a: 5 }), "a = 5");
       * assert.equal(matchObj({ a: 50, b: { c: 5 } }), "c = 5");
       * assert.equal(matchObj({ a: 10 }), "other");
       * assert.equal(matchObj({ a: 10, o: 1 }), "a = 10, o = _");
       * assert.equal(matchObj({ a: 15, b: { c: 20 } }), "a = 15; c > 10");
       * assert.equal(matchObj({ a: 8, b: { c: 8 }, o: 1 }), "other");
       * ```
       *
       * #### Array
       *
       * The branch succeeds if all the indexes in `condition` match those in the
       * provided value. Using `_` allows any value (even undefined), but the index
       * must still be present.
       *
       * ```
       * function matchArr(arr: number[]): string {
       *    return match(arr, [
       *       [[1], "1"],
       *       [[2, (x) => x > 10], "2, > 10"],
       *       [[_, 6, 9, _], (a) => a.join(", ")],
       *       () => "other",
       *    ]);
       * }
       *
       * assert.equal(matchArr([1, 2, 3]), "1");
       * assert.equal(matchArr([2, 12, 6]), "2, > 10");
       * assert.equal(matchArr([3, 6, 9]), "other");
       * assert.equal(matchArr([3, 6, 9, 12]), "3, 6, 9, 12");
       * assert.equal(matchArr([2, 4, 6]), "other");
       * ```
       *
       * #### Some, Ok and Err
       *
       * The branch succeeds if the wrapping monad (e.g. `Some`) is the same as the
       * provided value and the inner `condition` matches the inner value.
       *
       * **Note:** Filter functions are not called for any condition wrapped in a
       * monad. See the section on Combined Matching for a way to match inner values.
       *
       * ```
       * type NumberMonad = Option<number> | Result<number, number>;
       *
       * function matchMonad(val: NumberMonad): string {
       *    return match(val, [
       *       [Some(1), "Some"],
       *       [Ok(1), "Ok"],
       *       [Err(1), "Err"],
       *       () => "None",
       *    ]);
       * }
       *
       * assert.equal(matchMonad(Some(1)), "Some");
       * assert.equal(matchMonad(Ok(1)), "Ok");
       * assert.equal(matchMonad(Err(1)), "Err");
       * assert.equal(matchMonad(None), "None");
       * ```
       *
       * #### Fn (function as value)
       *
       * This wrapper distinguishes between a function to be called and a function to
       * be treated as a value. It is needed where the function value could be confused
       * with a filter function or result function.
       *
       * ```
       * const fnOne = () => 1;
       * const fnTwo = () => 2;
       * const fnDefault = () => "fnDefault";
       *
       * function matchFn(fnVal: (...args: any) => any): () => string {
       *    return match(fnVal, [
       *       [Fn(fnOne), () => () => "fnOne"], // Manual result wrapper
       *       [Fn(fnTwo), Fn(() => "fnTwo")], // Fn result wrapper
       *       () => fnDefault,
       *    ]);
       * }
       *
       * assert.equal(matchFn(fnOne)(), "fnOne");
       * assert.equal(matchFn(fnTwo)(), "fnTwo");
       * assert.equal(matchFn(() => 0)(), "fnDefault");
       * ```
       */
      function match(val, pattern) {
        return matchDispatch(val, pattern, exports.Default);
      }
      exports.match = match;
      match.compile = compile;
      function compile(pattern) {
        return function (val) {
          return match(val, pattern);
        };
      }
      /**
       * The `Default` (or `_`) value. Used as a marker to indicate "any value".
       */
      var Default = function Default() {
        throw new Error("Match failed (exhausted)");
      };
      exports.Default = Default;
      /**
       * The `_` value. Used as a marker to indicate "any value".
       */
      exports._ = exports.Default;
      /**
       * Creates a wrapper for a function so that it will be treated as a value
       * within a chained matching block. See `match` for more information about
       * when this needs to be used.
       */
      function Fn(fn) {
        var val = function val() {
          return throwFnCalled();
        };
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
              } else {
                return matchDispatch(val[common_1.Val], pattern.Some, typeof pattern._ === "function" ? pattern._ : defaultBranch);
              }
            }
          } else if (typeof pattern.None === "function") {
            return pattern.None();
          }
        } else if (result_1.Result.is(val)) {
          var Branch = val[common_1.T] ? pattern.Ok : pattern.Err;
          if (Branch) {
            if (typeof Branch === "function") {
              return Branch(val[common_1.Val]);
            } else {
              return matchDispatch(val[common_1.Val], Branch, typeof pattern._ === "function" ? pattern._ : defaultBranch);
            }
          }
        } else {
          throwInvalidPattern();
        }
        return typeof pattern._ === "function" ? pattern._() : defaultBranch();
      }
      function matchChained(val, pattern, defaultBranch) {
        var _iterator = _createForOfIteratorHelper(pattern),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var branch = _step.value;
            if (typeof branch === "function") {
              return branch[common_1.FnVal] ? branch[common_1.FnVal] : branch();
            } else {
              var _branch = _slicedToArray(branch, 2),
                cond = _branch[0],
                result = _branch[1];
              if (matches(cond, val, true)) {
                if (typeof result === "function") {
                  return result[common_1.FnVal] ? result[common_1.FnVal] : result(val);
                } else {
                  return result;
                }
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        return defaultBranch();
      }
      function matches(cond, val, evaluate) {
        if (cond === exports.Default || cond === val) {
          return true;
        }
        if (typeof cond === "function") {
          return cond[common_1.FnVal] ? cond[common_1.FnVal] === val : evaluate && cond(val);
        }
        if (isObjectLike(cond)) {
          if (common_1.T in cond) {
            return cond.isLike(val) && matches(cond[common_1.Val], val[common_1.Val], false);
          }
          if (isObjectLike(val) && Array.isArray(cond) === Array.isArray(val)) {
            for (var _i = 0, _Object$keys = Object.keys(cond); _i < _Object$keys.length; _i++) {
              var key = _Object$keys[_i];
              if (!(key in val) || !matches(cond[key], val[key], evaluate)) {
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
        } else if (isObjectLike(pattern)) {
          return matchMapped(val, pattern, defaultBranch);
        }
        throwInvalidPattern();
      }
      function isObjectLike(value) {
        return value !== null && _typeof(value) === "object";
      }
      function throwInvalidPattern() {
        throw new Error("Match failed (invalid pattern)");
      }
      function throwFnCalled() {
        throw new Error("Match error (wrapped function called)");
      }
    }, {
      "./common": 2,
      "./option": 5,
      "./result": 6
    }],
    5: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.None = exports.Some = exports.Option = void 0;
      var common_1 = require("./common");
      var result_1 = require("./result");
      var OptionType = /*#__PURE__*/function () {
        function OptionType(val, some) {
          _classCallCheck(this, OptionType);
          this[common_1.T] = some;
          this[common_1.Val] = val;
        }
        return _createClass(OptionType, [{
          key: Symbol.iterator,
          value: function value() {
            return this[common_1.T] ? this[common_1.Val][Symbol.iterator]() : common_1.EmptyArray[Symbol.iterator]();
          }
        }, {
          key: "into",
          value: function into(none) {
            return this[common_1.T] ? this[common_1.Val] : none;
          }
          /**
           * Compares the Option to `cmp`, returns true if both are `Some` or both
           * are `None` and acts as a type guard.
           *
           * ```
           * const s: Option<number> = Some(1);
           * const n: Option<number> = None;
           *
           * assert.equal(s.isLike(Some(10)), true);
           * assert.equal(n.isLike(None), true);
           * assert.equal(s.isLike(n), false);
           * ```
           */
        }, {
          key: "isLike",
          value: function isLike(cmp) {
            return cmp instanceof OptionType && this[common_1.T] === cmp[common_1.T];
          }
          /**
           * Returns true if the Option is `Some` and acts as a type guard.
           *
           * ```
           * const x = Some(10);
           * assert.equal(x.Is(), true);
           *
           * const x: Option<number> = None;
           * assert.equal(x.Is(), false);
           * ```
           */
        }, {
          key: "isSome",
          value: function isSome() {
            return this[common_1.T];
          }
          /**
           * Returns true if the Option is `None` and acts as a type guard.
           *
           * ```
           * const x = Some(10);
           * assert.equal(x.isNone(), false);
           *
           * const x: Option<number> = None;
           * assert.equal(x.isNone(), true);
           * ```
           */
        }, {
          key: "isNone",
          value: function isNone() {
            return !this[common_1.T];
          }
          /**
           * Calls `f` with the contained `Some` value, converting `Some` to `None` if
           * the filter returns false.
           *
           * For more advanced filtering, consider `match`.
           *
           * ```
           * const x = Some(1);
           * assert.equal(x.filter((v) => v < 5).unwrap(), 1);
           *
           * const x = Some(10);
           * assert.equal(x.filter((v) => v < 5).isNone(), true);
           *
           * const x: Option<number> = None;
           * assert.equal(x.filter((v) => v < 5).isNone(), true);
           * ```
           */
        }, {
          key: "filter",
          value: function filter(f) {
            return this[common_1.T] && f(this[common_1.Val]) ? this : exports.None;
          }
          /**
           * Flatten a nested `Option<Option<T>>` to an `Option<T>`.
           *
           * ```
           * type NestedOption = Option<Option<number>>;
           *
           * const x: NestedOption = Some(Some(1));
           * assert.equal(x.flatten().unwrap(), 1);
           *
           * const x: NestedOption = Some(None);
           * assert.equal(x.flatten().isNone(), true);
           *
           * const x: NestedOption = None;
           * assert.equal(x.flatten().isNone(), true);
           * ```
           */
        }, {
          key: "flatten",
          value: function flatten() {
            return this[common_1.T] ? this[common_1.Val] : exports.None;
          }
          /**
           * Returns the contained `Some` value and throws `Error(msg)` if `None`.
           *
           * To avoid throwing, consider `Is`, `unwrapOr`, `unwrapOrElse` or
           * `match` to handle the `None` case.
           *
           * ```
           * const x = Some(1);
           * assert.equal(x.expect("Is empty"), 1);
           *
           * const x: Option<number> = None;
           * const y = x.expect("Is empty"); // throws
           * ```
           */
        }, {
          key: "expect",
          value: function expect(msg) {
            if (this[common_1.T]) {
              return this[common_1.Val];
            } else {
              throw new Error(msg);
            }
          }
          /**
           * Returns the contained `Some` value and throws if `None`.
           *
           * To avoid throwing, consider `isSome`, `unwrapOr`, `unwrapOrElse` or
           * `match` to handle the `None` case. To throw a more informative error use
           * `expect`.
           *
           * ```
           * const x = Some(1);
           * assert.equal(x.unwrap(), 1);
           *
           * const x: Option<number> = None;
           * const y = x.unwrap(); // throws
           * ```
           */
        }, {
          key: "unwrap",
          value: function unwrap() {
            return this.expect("Failed to unwrap Option (found None)");
          }
          /**
           * Returns the contained `Some` value or a provided default.
           *
           * The provided default is eagerly evaluated. If you are passing the result
           * of a function call, consider `unwrapOrElse`, which is lazily evaluated.
           *
           * ```
           * const x = Some(10);
           * assert.equal(x.unwrapOr(1), 10);
           *
           * const x: Option<number> = None;
           * assert.equal(x.unwrapOr(1), 1);
           * ```
           */
        }, {
          key: "unwrapOr",
          value: function unwrapOr(def) {
            return this[common_1.T] ? this[common_1.Val] : def;
          }
          /**
           * Returns the contained `Some` value or computes it from a function.
           *
           * ```
           * const x = Some(10);
           * assert.equal(x.unwrapOrElse(() => 1 + 1), 10);
           *
           * const x: Option<number> = None;
           * assert.equal(x.unwrapOrElse(() => 1 + 1), 2);
           * ```
           */
        }, {
          key: "unwrapOrElse",
          value: function unwrapOrElse(f) {
            return this[common_1.T] ? this[common_1.Val] : f();
          }
          /**
           * Returns the contained `Some` value or undefined if `None`.
           *
           * Most problems are better solved using one of the other `unwrap_` methods.
           * This method should only be used when you are certain that you need it.
           *
           * ```
           * const x = Some(10);
           * assert.equal(x.unwrapUnchecked(), 10);
           *
           * const x: Option<number> = None;
           * assert.equal(x.unwrapUnchecked(), undefined);
           * ```
           */
        }, {
          key: "unwrapUnchecked",
          value: function unwrapUnchecked() {
            return this[common_1.Val];
          }
          /**
           * Returns the Option if it is `Some`, otherwise returns `optb`.
           *
           * `optb` is eagerly evaluated. If you are passing the result of a function
           * call, consider `orElse`, which is lazily evaluated.
           *
           * ```
           * const x = Some(10);
           * const xor = x.or(Some(1));
           * assert.equal(xor.unwrap(), 10);
           *
           * const x: Option<number> = None;
           * const xor = x.or(Some(1));
           * assert.equal(xor.unwrap(), 1);
           * ```
           */
        }, {
          key: "or",
          value: function or(optb) {
            return this[common_1.T] ? this : optb;
          }
          /**
           * Returns the Option if it is `Some`, otherwise returns the value of `f()`.
           *
           * ```
           * const x = Some(10);
           * const xor = x.orElse(() => Some(1));
           * assert.equal(xor.unwrap(), 10);
           *
           * const x: Option<number> = None;
           * const xor = x.orElse(() => Some(1));
           * assert.equal(xor.unwrap(), 1);
           * ```
           */
        }, {
          key: "orElse",
          value: function orElse(f) {
            return this[common_1.T] ? this : f();
          }
          /**
           * Returns `None` if the Option is `None`, otherwise returns `optb`.
           *
           * ```
           * const x = Some(10);
           * const xand = x.and(Some(1));
           * assert.equal(xand.unwrap(), 1);
           *
           * const x: Option<number> = None;
           * const xand = x.and(Some(1));
           * assert.equal(xand.isNone(), true);
           *
           * const x = Some(10);
           * const xand = x.and(None);
           * assert.equal(xand.isNone(), true);
           * ```
           */
        }, {
          key: "and",
          value: function and(optb) {
            return this[common_1.T] ? optb : exports.None;
          }
          /**
           * Returns `None` if the option is `None`, otherwise calls `f` with the
           * `Some` value and returns the result.
           *
           * ```
           * const x = Some(10);
           * const xand = x.andThen((n) => n + 1);
           * assert.equal(xand.unwrap(), 11);
           *
           * const x: Option<number> = None;
           * const xand = x.andThen((n) => n + 1);
           * assert.equal(xand.isNone(), true);
           *
           * const x = Some(10);
           * const xand = x.andThen(() => None);
           * assert.equal(xand.isNone(), true);
           * ```
           */
        }, {
          key: "andThen",
          value: function andThen(f) {
            return this[common_1.T] ? f(this[common_1.Val]) : exports.None;
          }
          /**
           * Maps an `Option<T>` to `Option<U>` by applying a function to the `Some`
           * value.
           *
           * ```
           * const x = Some(10);
           * const xmap = x.map((n) => `number ${n}`);
           * assert.equal(xmap.unwrap(), "number 10");
           * ```
           */
        }, {
          key: "map",
          value: function map(f) {
            return this[common_1.T] ? new OptionType(f(this[common_1.Val]), true) : exports.None;
          }
          /**
           * Returns the provided default if `None`, otherwise calls `f` with the
           * `Some` value and returns the result.
           *
           * The provided default is eagerly evaluated. If you are passing the result
           * of a function call, consider `mapOrElse`, which is lazily evaluated.
           *
           * ```
           * const x = Some(10);
           * const xmap = x.mapOr(1, (n) => n + 1);
           * assert.equal(xmap.unwrap(), 11);
           *
           * const x: Option<number> = None;
           * const xmap = x.mapOr(1, (n) => n + 1);
           * assert.equal(xmap.unwrap(), 1);
           * ```
           */
        }, {
          key: "mapOr",
          value: function mapOr(def, f) {
            return this[common_1.T] ? f(this[common_1.Val]) : def;
          }
          /**
           * Computes a default return value if `None`, otherwise calls `f` with the
           * `Some` value and returns the result.
           *
           * const x = Some(10);
           * const xmap = x.mapOrElse(() => 1 + 1, (n) => n + 1);
           * assert.equal(xmap.unwrap(), 11);
           *
           * const x: Option<number> = None;
           * const xmap = x.mapOrElse(() => 1 + 1, (n) => n + 1);
           * assert.equal(xmap.unwrap(), 2);
           * ```
           */
        }, {
          key: "mapOrElse",
          value: function mapOrElse(def, f) {
            return this[common_1.T] ? f(this[common_1.Val]) : def();
          }
          /**
           * Transforms the `Option<T>` into a `Result<T, E>`, mapping `Some(v)` to
           * `Ok(v)` and `None` to `Err(err)`.
           *
           * ```
           * const x = Some(10);
           * const res = x.okOr("Is empty");
           * assert.equal(x.isOk(), true);
           * assert.equal(x.unwrap(), 10);
           *
           * const x: Option<number> = None;
           * const res = x.okOr("Is empty");
           * assert.equal(x.isErr(), true);
           * assert.equal(x.unwrap_err(), "Is empty");
           * ```
           */
        }, {
          key: "okOr",
          value: function okOr(err) {
            return this[common_1.T] ? (0, result_1.Ok)(this[common_1.Val]) : (0, result_1.Err)(err);
          }
          /**
           * Transforms the `Option<T>` into a `Result<T, E>`, mapping `Some(v)` to
           * `Ok(v)` and `None` to `Err(f())`.
           *
           * ```
           * const x = Some(10);
           * const res = x.okOrElse(() => ["Is", "empty"].join(" "));
           * assert.equal(x.isOk(), true);
           * assert.equal(x.unwrap(), 10);
           *
           * const x: Option<number> = None;
           * const res = x.okOrElse(() => ["Is", "empty"].join(" "));
           * assert.equal(x.isErr(), true);
           * assert.equal(x.unwrap_err(), "Is empty");
           * ```
           */
        }, {
          key: "okOrElse",
          value: function okOrElse(f) {
            return this[common_1.T] ? (0, result_1.Ok)(this[common_1.Val]) : (0, result_1.Err)(f());
          }
        }]);
      }();
      /**
       * An Option represents either something, or nothing. If we hold a value
       * of type `Option<T>`, we know it is either `Some<T>` or `None`.
       *
       * As a function, `Option` is an alias for `Option.from`.
       *
       * ```
       * const users = ["Fry", "Bender"];
       * function fetch_user(username: string): Option<string> {
       *    return users.includes(username) ? Some(username) : None;
       * }
       *
       * function greet(username: string): string {
       *    return fetch_user(username)
       *       .map((user) => `Good news everyone, ${user} is here!`)
       *       .unwrapOr("Wha?");
       * }
       *
       * assert.equal(greet("Bender"), "Good news everyone, Bender is here!");
       * assert.equal(greet("SuperKing"), "Wha?");
       * ```
       */
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
      /**
       * Creates a `Some<T>` value, which can be used where an `Option<T>` is
       * required. See Option for more examples.
       *
       * ```
       * const x = Some(10);
       * assert.equal(x.isSome(), true);
       * assert.equal(x.unwrap(), 10);
       * ```
       */
      function Some(val) {
        return new OptionType(val, true);
      }
      exports.Some = Some;
      /**
       * The `None` value, which can be used where an `Option<T>` is required.
       * See Option for more examples.
       *
       * ```
       * const x = None;
       * assert.equal(x.isNone(), true);
       * const y = x.unwrap(); // throws
       * ```
       */
      exports.None = Object.freeze(new OptionType(undefined, false));
      /**
       * Tests whether the provided `val` is an Option, and acts as a type guard.
       *
       * ```
       * assert.equal(Option.is(Some(1), true);
       * assert.equal(Option.is(None, true));
       * assert.equal(Option.is(Ok(1), false));
       * ```
       */
      function is(val) {
        return val instanceof OptionType;
      }
      /**
       * Creates a new `Option<T>` which is `Some` unless the provided `val` is
       * falsey, an instance of `Error` or an invalid `Date`. This function is
       * aliased by `Option`.
       *
       * The `T` type is narrowed to exclude falsey orError values.
       *
       * ```
       * assert.equal(Option.from(1).unwrap(), 1);
       * assert.equal(from(0).isNone(), true);
       *
       * const err = Option.from(new Error("msg"));
       * assert.equal(err.isNone(), true);
       * ```
       */
      function from(val) {
        return (0, common_1.isTruthy)(val) && !(val instanceof Error) ? Some(val) : exports.None;
      }
      /**
       * Creates a new `Option<T>` which is `Some` unless the provided `val` is
       * `undefined`, `null` or `NaN`.
       *
       * ```
       * assert.equal(Option.nonNull(1).unwrap(), 1);
       * assert.equal(Option.nonNull(0).unwrap(), 0);
       * assert.equal(Option.nonNull(null).isNone(), true);
       * ```
       */
      function nonNull(val) {
        return val === undefined || val === null || val !== val ? exports.None : Some(val);
      }
      /**
       * Creates a new Option<number> which is `Some` when the provided `val` is a
       * finite integer greater than or equal to 0.
       *
       * ```
       * const x = Option.qty("test".indexOf("s"));
       * assert.equal(x.unwrap(), 2);
       *
       * const x = Option.qty("test".indexOf("z"));
       * assert.equal(x.isNone(), true);
       * ```
       */
      function qty(val) {
        return val >= 0 && Number.isInteger(val) ? Some(val) : exports.None;
      }
      function safe(fn) {
        if (fn instanceof Promise) {
          return fn.then(function (val) {
            return Some(val);
          }, function () {
            return exports.None;
          });
        }
        try {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          return Some(fn.apply(void 0, args));
        } catch (_unused) {
          return exports.None;
        }
      }
      /**
       * Converts a number of `Option`s into a single Option. If any of the provided
       * Options are `None` then the new Option is also None. Otherwise the new
       * Option is `Some` and contains an array of all the unwrapped values.
       *
       * ```
       * function num(val: number): Option<number> {
       *    return val > 10 ? Some(val) : None;
       * }
       *
       * const xyz = Option.all(num(20), num(30), num(40));
       * const [x, y, z] = xyz.unwrap();
       * assert.equal(x, 20);
       * assert.equal(y, 30);
       * assert.equal(z, 40);
       *
       * const x = Option.all(num(20), num(5), num(40));
       * assert.equal(x.isNone(), true);
       * ```
       */
      function all() {
        var some = [];
        for (var _len2 = arguments.length, options = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          options[_key2] = arguments[_key2];
        }
        for (var _i2 = 0, _options = options; _i2 < _options.length; _i2++) {
          var option = _options[_i2];
          if (option.isSome()) {
            some.push(option.unwrapUnchecked());
          } else {
            return exports.None;
          }
        }
        return Some(some);
      }
      /**
       * Converts a number of `Options`s into a single Option. The first `Some` found
       * (if any) is returned, otherwise the new Option is `None`.
       *
       * ```
       * function num(val: number): Option<number> {
       *    return val > 10 ? Some(val) : None;
       * }
       *
       * const x = Option.any(num(5), num(20), num(2));
       * assert.equal(x.unwrap(), 20);
       *
       * const x = Option.any(num(2), num(5), num(8));
       * assert.equal(x.isNone(), true);
       * ```
       */
      function any() {
        for (var _len3 = arguments.length, options = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          options[_key3] = arguments[_key3];
        }
        for (var _i3 = 0, _options2 = options; _i3 < _options2.length; _i3++) {
          var option = _options2[_i3];
          if (option.isSome()) {
            return option;
          }
        }
        return exports.None;
      }
    }, {
      "./common": 2,
      "./result": 6
    }],
    6: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Err = exports.Ok = exports.Result = exports.ResultType = void 0;
      var common_1 = require("./common");
      var option_1 = require("./option");
      var ResultType = /*#__PURE__*/function () {
        function ResultType(val, ok) {
          _classCallCheck(this, ResultType);
          this[common_1.Val] = val;
          this[common_1.T] = ok;
        }
        return _createClass(ResultType, [{
          key: Symbol.iterator,
          value: function value() {
            return this[common_1.T] ? this[common_1.Val][Symbol.iterator]() : common_1.EmptyArray[Symbol.iterator]();
          }
        }, {
          key: "into",
          value: function into(err) {
            return this[common_1.T] ? this[common_1.Val] : err;
          }
          /**
           * Returns a tuple of `[null, T]` if the result is `Ok`, or `[E, null]`
           * otherwise.
           *
           * ```
           * const x: Result<number, string> = Ok(1);
           * assert.deepEqual(x.intoTuple(), [null, 1]);
           *
           * const x: Result<number, string> = Err("error")
           * assert.deepEqual(x.intoTuple(), ["error", null]);
           * ```
           */
        }, {
          key: "intoTuple",
          value: function intoTuple() {
            return this[common_1.T] ? [null, this[common_1.Val]] : [this[common_1.Val], null];
          }
          /**
           * Compares the Result to `cmp`, returns true if both are `Ok` or both
           * are `Err` and acts as a type guard.
           *
           * ```
           * const o = Ok(1);
           * const e = Err(1);
           *
           * assert.equal(o.isLike(Ok(1))), true);
           * assert.equal(e.isLike(Err(1)), true);
           * assert.equal(o.isLike(e), false);
           * ```
           */
        }, {
          key: "isLike",
          value: function isLike(cmp) {
            return cmp instanceof ResultType && this[common_1.T] === cmp[common_1.T];
          }
          /**
           * Returns true if the Result is `Ok` and acts as a type guard.
           *
           * ```
           * const x = Ok(10);
           * assert.equal(x.isOk(), true);
           *
           * const x = Err(10);
           * assert.equal(x.isOk(), false);
           * ```
           */
        }, {
          key: "isOk",
          value: function isOk() {
            return this[common_1.T];
          }
          /**
           * Returns true if the Result is `Err` and acts as a type guard.
           *
           * ```
           * const x = Ok(10);
           * assert.equal(x.isErr(), false);
           *
           * const x = Err(10);
           * assert.equal(x.isErr(), true);
           * ```
           */
        }, {
          key: "isErr",
          value: function isErr() {
            return !this[common_1.T];
          }
          /**
           * Creates an `Option<T>` by calling `f` with the contained `Ok` value.
           * Converts `Ok` to `Some` if the filter returns true, or `None` otherwise.
           *
           * For more advanced filtering, consider `match`.
           *
           * ```
           * const x = Ok(1);
           * assert.equal(x.filter((v) => v < 5).isLike(Some(1)), true);
           * assert.equal(x.filter((v) => v < 5).unwrap(), 1);
           *
           * const x = Ok(10);
           * assert.equal(x.filter((v) => v < 5).isNone(), true);
           *
           * const x = Err(1);
           * assert.equal(x.filter((v) => v < 5).isNone(), true);
           * ```
           */
        }, {
          key: "filter",
          value: function filter(f) {
            return this[common_1.T] && f(this[common_1.Val]) ? (0, option_1.Some)(this[common_1.Val]) : option_1.None;
          }
          /**
           * Flatten a nested `Result<Result<T, E>, F>` to a `Result<T, E | F>`.
           *
           * ```
           * type NestedResult = Result<Result<string, number>, boolean>;
           *
           * const x: NestedResult = Ok(Ok(1));
           * assert.equal(x.flatten().unwrap(), 1);
           *
           * const x: NestedResult = Ok(Err(1));
           * assert.equal(x.flatten().unwrapErr(), 1);
           *
           * const x: NestedResult = Err(false);
           * assert.equal(x.flatten().unwrapErr(), false);
           * ```
           */
        }, {
          key: "flatten",
          value: function flatten() {
            return this[common_1.T] ? this[common_1.Val] : this;
          }
          /**
           * Returns the contained `Ok` value and throws `Error(msg)` if `Err`.
           *
           * To avoid throwing, consider `isOk`, `unwrapOr`, `unwrapOrElse` or
           * `match` to handle the `Err` case.
           *
           * ```
           * const x = Ok(1);
           * assert.equal(x.expect("Was Err"), 1);
           *
           * const x = Err(1);
           * const y = x.expect("Was Err"); // throws
           * ```
           */
        }, {
          key: "expect",
          value: function expect(msg) {
            if (this[common_1.T]) {
              return this[common_1.Val];
            } else {
              throw new Error(msg);
            }
          }
          /**
           * Returns the contained `Err` value and throws `Error(msg)` if `Ok`.
           *
           * To avoid throwing, consider `isErr` or `match` to handle the `Ok` case.
           *
           * ```
           * const x = Ok(1);
           * const y = x.expectErr("Was Ok"); // throws
           *
           * const x = Err(1);
           * assert.equal(x.expectErr("Was Ok"), 1);
           * ```
           */
        }, {
          key: "expectErr",
          value: function expectErr(msg) {
            if (this[common_1.T]) {
              throw new Error(msg);
            } else {
              return this[common_1.Val];
            }
          }
          /**
           * Returns the contained `Ok` value and throws if `Err`.
           *
           * To avoid throwing, consider `isOk`, `unwrapOr`, `unwrapOrElse` or
           * `match` to handle the `Err` case. To throw a more informative error use
           * `expect`.
           *
           * ```
           * const x = Ok(1);
           * assert.equal(x.unwrap(), 1);
           *
           * const x = Err(1);
           * const y = x.unwrap(); // throws
           * ```
           */
        }, {
          key: "unwrap",
          value: function unwrap() {
            return this.expect("Failed to unwrap Result (found Err)");
          }
          /**
           * Returns the contained `Err` value and throws if `Ok`.
           *
           * To avoid throwing, consider `isErr` or `match` to handle the `Ok` case.
           * To throw a more informative error use `expectErr`.
           *
           * ```
           * const x = Ok(1);
           * const y = x.unwrap(); // throws
           *
           * const x = Err(1);
           * assert.equal(x.unwrap(), 1);
           * ```
           */
        }, {
          key: "unwrapErr",
          value: function unwrapErr() {
            return this.expectErr("Failed to unwrapErr Result (found Ok)");
          }
          /**
           * Returns the contained `Ok` value or a provided default.
           *
           * The provided default is eagerly evaluated. If you are passing the result
           * of a function call, consider `unwrapOrElse`, which is lazily evaluated.
           *
           * ```
           * const x = Ok(10);
           * assert.equal(x.unwrapOr(1), 10);
           *
           * const x = Err(10);
           * assert.equal(x.unwrapOr(1), 1);
           * ```
           */
        }, {
          key: "unwrapOr",
          value: function unwrapOr(def) {
            return this[common_1.T] ? this[common_1.Val] : def;
          }
          /**
           * Returns the contained `Ok` value or computes it from a function.
           *
           * ```
           * const x = Ok(10);
           * assert.equal(x.unwrapOrElse(() => 1 + 1), 10);
           *
           * const x = Err(10);
           * assert.equal(x.unwrapOrElse(() => 1 + 1), 2);
           * ```
           */
        }, {
          key: "unwrapOrElse",
          value: function unwrapOrElse(f) {
            return this[common_1.T] ? this[common_1.Val] : f();
          }
          /**
           * Returns the contained `Ok` or `Err` value.
           *
           * Most problems are better solved using one of the other `unwrap_` methods.
           * This method should only be used when you are certain that you need it.
           *
           * ```
           * const x = Ok(10);
           * assert.equal(x.unwrapUnchecked(), 10);
           *
           * const x = Err(20);
           * assert.equal(x.unwrapUnchecked(), 20);
           * ```
           */
        }, {
          key: "unwrapUnchecked",
          value: function unwrapUnchecked() {
            return this[common_1.Val];
          }
          /**
           * Returns the Option if it is `Ok`, otherwise returns `resb`.
           *
           * `resb` is eagerly evaluated. If you are passing the result of a function
           * call, consider `orElse`, which is lazily evaluated.
           *
           * ```
           * const x = Ok(10);
           * const xor = x.or(Ok(1));
           * assert.equal(xor.unwrap(), 10);
           *
           * const x = Err(10);
           * const xor = x.or(Ok(1));
           * assert.equal(xor.unwrap(), 1);
           * ```
           */
        }, {
          key: "or",
          value: function or(resb) {
            return this[common_1.T] ? this : resb;
          }
          /**
           * Returns the Result if it is `Ok`, otherwise returns the value of `f()`
           * mapping `Result<T, E>` to `Result<T, F>`.
           *
           * ```
           * const x = Ok(10);
           * const xor = x.orElse(() => Ok(1));
           * assert.equal(xor.unwrap(), 10);
           *
           * const x = Err(10);
           * const xor = x.orElse(() => Ok(1));
           * assert.equal(xor.unwrap(), 1);
           *
           * const x = Err(10);
           * const xor = x.orElse((e) => Err(`val ${e}`));
           * assert.equal(xor.unwrapErr(), "val 10");
           * ```
           */
        }, {
          key: "orElse",
          value: function orElse(f) {
            return this[common_1.T] ? this : f(this[common_1.Val]);
          }
          /**
           * Returns itself if the Result is `Err`, otherwise returns `resb`.
           *
           * ```
           * const x = Ok(10);
           * const xand = x.and(Ok(1));
           * assert.equal(xand.unwrap(), 1);
           *
           * const x = Err(10);
           * const xand = x.and(Ok(1));
           * assert.equal(xand.unwrapErr(), 10);
           *
           * const x = Ok(10);
           * const xand = x.and(Err(1));
           * assert.equal(xand.unwrapErr(), 1);
           * ```
           */
        }, {
          key: "and",
          value: function and(resb) {
            return this[common_1.T] ? resb : this;
          }
          /**
           * Returns itself if the Result is `Err`, otherwise calls `f` with the `Ok`
           * value and returns the result.
           *
           * ```
           * const x = Ok(10);
           * const xand = x.andThen((n) => n + 1);
           * assert.equal(xand.unwrap(), 11);
           *
           * const x = Err(10);
           * const xand = x.andThen((n) => n + 1);
           * assert.equal(xand.unwrapErr(), 10);
           *
           * const x = Ok(10);
           * const xand = x.and(Err(1));
           * assert.equal(xand.unwrapErr(), 1);
           * ```
           */
        }, {
          key: "andThen",
          value: function andThen(f) {
            return this[common_1.T] ? f(this[common_1.Val]) : this;
          }
          /**
           * Maps a `Result<T, E>` to `Result<U, E>` by applying a function to the
           * `Ok` value.
           *
           * ```
           * const x = Ok(10);
           * const xmap = x.map((n) => `number ${n}`);
           * assert.equal(xmap.unwrap(), "number 10");
           * ```
           */
        }, {
          key: "map",
          value: function map(f) {
            return new ResultType(this[common_1.T] ? f(this[common_1.Val]) : this[common_1.Val], this[common_1.T]);
          }
          /**
           * Maps a `Result<T, E>` to `Result<T, F>` by applying a function to the
           * `Err` value.
           *
           * ```
           * const x = Err(10);
           * const xmap = x.mapErr((n) => `number ${n}`);
           * assert.equal(xmap.unwrapErr(), "number 10");
           * ```
           */
        }, {
          key: "mapErr",
          value: function mapErr(op) {
            return new ResultType(this[common_1.T] ? this[common_1.Val] : op(this[common_1.Val]), this[common_1.T]);
          }
          /**
           * Returns the provided default if `Err`, otherwise calls `f` with the
           * `Ok` value and returns the result.
           *
           * The provided default is eagerly evaluated. If you are passing the result
           * of a function call, consider `mapOrElse`, which is lazily evaluated.
           *
           * ```
           * const x = Ok(10);
           * const xmap = x.mapOr(1, (n) => n + 1);
           * assert.equal(xmap.unwrap(), 11);
           *
           * const x = Err(10);
           * const xmap = x.mapOr(1, (n) => n + 1);
           * assert.equal(xmap.unwrap(), 1);
           * ```
           */
        }, {
          key: "mapOr",
          value: function mapOr(def, f) {
            return this[common_1.T] ? f(this[common_1.Val]) : def;
          }
          /**
           * Computes a default return value if `Err`, otherwise calls `f` with the
           * `Ok` value and returns the result.
           *
           * ```
           * const x = Ok(10);
           * const xmap = x.mapOrElse(() => 1 + 1, (n) => n + 1);
           * assert.equal(xmap.unwrap(), 11);
           *
           * const x = Err(10);
           * const xmap = x.mapOrElse(() => 1 + 1, (n) => n + 1);
           * assert.equal(xmap.unwrap(), 2);
           * ```
           */
        }, {
          key: "mapOrElse",
          value: function mapOrElse(def, f) {
            return this[common_1.T] ? f(this[common_1.Val]) : def(this[common_1.Val]);
          }
          /**
           * Transforms the `Result<T, E>` into an `Option<T>`, mapping `Ok(v)` to
           * `Some(v)`, discarding any `Err` value and mapping to None.
           *
           * ```
           * const x = Ok(10);
           * const opt = x.ok();
           * assert.equal(x.isSome(), true);
           * assert.equal(x.unwrap(), 10);
           *
           * const x = Err(10);
           * const opt = x.ok();
           * assert.equal(x.isNone(), true);
           * const y = x.unwrap(); // throws
           * ```
           */
        }, {
          key: "ok",
          value: function ok() {
            return this[common_1.T] ? (0, option_1.Some)(this[common_1.Val]) : option_1.None;
          }
        }]);
      }();
      exports.ResultType = ResultType;
      /**
       * Tests the provided `val` is an Result and acts as a type guard.
       *
       * ```
       * assert.equal(Result.is(Ok(1), true);
       * assert.equal(Result.is(Err(1), true));
       * assert.equal(Result.is(Some(1), false));
       * ```
       */
      function is(val) {
        return val instanceof ResultType;
      }
      /**
       * A Result represents success, or failure. If we hold a value
       * of type `Result<T, E>`, we know it is either `Ok<T>` or `Err<E>`.
       *
       * As a function, `Result` is an alias for `Result.from`.
       *
       * ```
       * const users = ["Fry", "Bender"];
       * function fetch_user(username: string): Result<string, string> {
       *    return users.includes(username) ? Ok(username) : Err("Wha?");
       * }
       *
       * function greet(username: string): string {
       *    return fetch_user(username).mapOrElse(
       *       (err) => `Error: ${err}`,
       *       (user) => `Good news everyone, ${user} is here!`
       *    );
       * }
       *
       * assert.equal(greet("Bender"), "Good news everyone, Bender is here!");
       * assert.equal(greet("SuperKing"), "Error: Wha?");
       * ```
       */
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
      /**
       * Creates an `Ok<T>` value, which can be used where a `Result<T, E>` is
       * required. See Result for more examples.
       *
       * Note that the counterpart `Err` type `E` is set to the same type as `T`
       * by default. TypeScript will usually infer the correct `E` type from the
       * context (e.g. a function which accepts or returns a Result).
       *
       * ```
       * const x = Ok(10);
       * assert.equal(x.isSome(), true);
       * assert.equal(x.unwrap(), 10);
       * ```
       */
      function Ok(val) {
        return new ResultType(val, true);
      }
      exports.Ok = Ok;
      /**
       * Creates an `Err<E>` value, which can be used where a `Result<T, E>` is
       * required. See Result for more examples.
       *
       * Note that the counterpart `Ok` type `T` is set to the same type as `E`
       * by default. TypeScript will usually infer the correct `T` type from the
       * context (e.g. a function which accepts or returns a Result).
       *
       * ```
       * const x = Err(10);
       * assert.equal(x.isErr(), true);
       * assert.equal(x.unwrapErr(), 10);
       * ```
       */
      function Err(val) {
        return new ResultType(val, false);
      }
      exports.Err = Err;
      /**
       * Creates a new `Result<T, E>` which is `Ok<T>` unless the provided `val` is
       * falsey, an instance of `Error` or an invalid `Date`.
       *
       * The `T` is narrowed to exclude any falsey values or Errors.
       *
       * The `E` type includes:
       * - `null` (if `val` could have been falsey or an invalid date)
       * - `Error` types excluded from `T` (if there are any)
       *
       * **Note:** `null` is not a useful value. Consider `Option.from` or `mapErr`.
       *
       * ```
       * assert.equal(Result.from(1).unwrap(), 1);
       * assert.equal(Result(0).isErr(), true);
       *
       * const err = Result.from(new Error("msg"));
       * assert.equal(err.unwrapErr().message, "msg");
       *
       * // Create a Result<number, string>
       * const x = Option.from(1).okOr("Falsey Value");
       * ```
       */
      function from(val) {
        return (0, common_1.isTruthy)(val) ? new ResultType(val, !(val instanceof Error)) : Err(null);
      }
      /**
       * Creates a new `Result<T, null>` which is `Ok` unless the provided `val` is
       * `undefined`, `null` or `NaN`.
       *
       * **Note:** `null` is not a useful value. Consider `Option.nonNull` or
       * `mapErr`.
       *
       * ```
       * assert.equal(Result.nonNull(1).unwrap(), 1);
       * assert.equal(Result.nonNull(0).unwrap(), 0);
       * assert.equal(Result.nonNull(null).isErr(), true);
       *
       * // Create a Result<number, string>
       * const x = Option.nonNull(1).okOr("Nullish Value");
       * ```
       */
      function nonNull(val) {
        return val === undefined || val === null || val !== val ? Err(null) : Ok(val);
      }
      /**
       * Creates a new Result<number, null> which is `Ok` when the provided `val` is
       * a finite integer greater than or equal to 0.
       *
       * **Note:** `null` is not a useful value. Consider `Option.qty` or `mapErr`.
       *
       * ```
       * const x = Result.qty("test".indexOf("s"));
       * assert.equal(x.unwrap(), 2);
       *
       * const x = Result.qty("test".indexOf("z"));
       * assert.equal(x.unwrapErr(), null);
       *
       * // Create a Result<number, string>
       * const x = Result.qty("test".indexOf("s")).mapErr(() => "Not Found");
       * ```
       */
      function qty(val) {
        return val >= 0 && Number.isInteger(val) ? Ok(val) : Err(null);
      }
      function safe(fn) {
        if (fn instanceof Promise) {
          return fn.then(function (val) {
            return Ok(val);
          }, toError);
        }
        try {
          for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            args[_key4 - 1] = arguments[_key4];
          }
          return Ok(fn.apply(void 0, args));
        } catch (err) {
          return toError(err);
        }
      }
      function toError(err) {
        return err instanceof Error ? Err(err) : Err(new Error(String(err)));
      }
      /**
       * Converts a number of `Result`s into a single Result. The first `Err` found
       * (if any) is returned, otherwise the new Result is `Ok` and contains an array
       * of all the unwrapped values.
       *
       * ```
       * function num(val: number): Result<number, string> {
       *    return val > 10 ? Ok(val) : Err(`Value ${val} is too low.`);
       * }
       *
       * const xyz = Result.all(num(20), num(30), num(40));
       * const [x, y, z] = xyz.unwrap();
       * assert.equal(x, 20);
       * assert.equal(y, 30);
       * assert.equal(z, 40);
       *
       * const err = Result.all(num(20), num(5), num(40));
       * assert.equal(err.isErr(), true);
       * assert.equal(err.unwrapErr(), "Value 5 is too low.");
       * ```
       */
      function all() {
        var ok = [];
        for (var _len5 = arguments.length, results = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          results[_key5] = arguments[_key5];
        }
        for (var _i4 = 0, _results = results; _i4 < _results.length; _i4++) {
          var result = _results[_i4];
          if (result.isOk()) {
            ok.push(result.unwrapUnchecked());
          } else {
            return result;
          }
        }
        return Ok(ok);
      }
      /**
       * Converts a number of `Result`s into a single Result. The first `Ok` found
       * (if any) is returned, otherwise the new Result is an `Err` containing an
       * array of all the unwrapped errors.
       *
       * ```
       * function num(val: number): Result<number, string> {
       *    return val > 10 ? Ok(val) : Err(`Value ${val} is too low.`);
       * }
       *
       * const x = Result.any(num(5), num(20), num(2));
       * assert.equal(x.unwrap(), 20);
       *
       * const efg = Result.any(num(2), num(5), num(8));
       * const [e, f, g] = efg.unwrapErr();
       * assert.equal(e, "Value 2 is too low.");
       * assert.equal(f, "Value 5 is too low.");
       * assert.equal(g, "Value 8 is too low.");
       * ```
       */
      function any() {
        var err = [];
        for (var _len6 = arguments.length, results = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          results[_key6] = arguments[_key6];
        }
        for (var _i5 = 0, _results2 = results; _i5 < _results2.length; _i5++) {
          var result = _results2[_i5];
          if (result.isOk()) {
            return result;
          } else {
            err.push(result.unwrapUnchecked());
          }
        }
        return Err(err);
      }
    }, {
      "./common": 2,
      "./option": 5
    }]
  }, {}, [1])(1);
});
