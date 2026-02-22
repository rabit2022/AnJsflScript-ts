(function(){
 "use strict";

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function webpackUniversalModuleDefinition(root, factory) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && (typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object') module.exports = factory(require("util"), require("path-browserify"), require("picomatch"));else if (typeof define === 'function' && define.amd) define(["util", "path-browserify", "picomatch"], factory);else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') exports["micromatch"] = factory(require("util"), require("path-browserify"), require("picomatch"));else root["micromatch"] = factory(root["util"], root["path-browserify"], root["picomatch"]);
})(void 0, function (__WEBPACK_EXTERNAL_MODULE__24__, __WEBPACK_EXTERNAL_MODULE__248__, __WEBPACK_EXTERNAL_MODULE__878__) {
  return /******/function () {
    // webpackBootstrap
    /******/
    var __webpack_modules__ = {
      /***/24: (/***/function _(module) {
        "use strict";

        module.exports = __WEBPACK_EXTERNAL_MODULE__24__;

        /***/
      }),
      /***/28: (/***/function _(module, __unused_webpack_exports, __webpack_require__) {
        "use strict";

        /*!
         * fill-range <https://github.com/jonschlinkert/fill-range>
         *
         * Copyright (c) 2014-present, Jon Schlinkert.
         * Licensed under the MIT License.
         */
        var util = __webpack_require__(24);
        var toRegexRange = __webpack_require__(54);
        var isObject = function isObject(val) {
          return val !== null && _typeof(val) === 'object' && !Array.isArray(val);
        };
        var transform = function transform(toNumber) {
          return function (value) {
            return toNumber === true ? Number(value) : String(value);
          };
        };
        var isValidValue = function isValidValue(value) {
          return typeof value === 'number' || typeof value === 'string' && value !== '';
        };
        var isNumber = function isNumber(num) {
          return Number.isInteger(+num);
        };
        var zeros = function zeros(input) {
          var value = "".concat(input);
          var index = -1;
          if (value[0] === '-') value = value.slice(1);
          if (value === '0') return false;
          while (value[++index] === '0');
          return index > 0;
        };
        var stringify = function stringify(start, end, options) {
          if (typeof start === 'string' || typeof end === 'string') {
            return true;
          }
          return options.stringify === true;
        };
        var pad = function pad(input, maxLength, toNumber) {
          if (maxLength > 0) {
            var dash = input[0] === '-' ? '-' : '';
            if (dash) input = input.slice(1);
            input = dash + input.padStart(dash ? maxLength - 1 : maxLength, '0');
          }
          if (toNumber === false) {
            return String(input);
          }
          return input;
        };
        var toMaxLen = function toMaxLen(input, maxLength) {
          var negative = input[0] === '-' ? '-' : '';
          if (negative) {
            input = input.slice(1);
            maxLength--;
          }
          while (input.length < maxLength) input = '0' + input;
          return negative ? '-' + input : input;
        };
        var toSequence = function toSequence(parts, options, maxLen) {
          parts.negatives.sort(function (a, b) {
            return a < b ? -1 : a > b ? 1 : 0;
          });
          parts.positives.sort(function (a, b) {
            return a < b ? -1 : a > b ? 1 : 0;
          });
          var prefix = options.capture ? '' : '?:';
          var positives = '';
          var negatives = '';
          var result;
          if (parts.positives.length) {
            positives = parts.positives.map(function (v) {
              return toMaxLen(String(v), maxLen);
            }).join('|');
          }
          if (parts.negatives.length) {
            negatives = "-(".concat(prefix).concat(parts.negatives.map(function (v) {
              return toMaxLen(String(v), maxLen);
            }).join('|'), ")");
          }
          if (positives && negatives) {
            result = "".concat(positives, "|").concat(negatives);
          } else {
            result = positives || negatives;
          }
          if (options.wrap) {
            return "(".concat(prefix).concat(result, ")");
          }
          return result;
        };
        var toRange = function toRange(a, b, isNumbers, options) {
          if (isNumbers) {
            return toRegexRange(a, b, _objectSpread({
              wrap: false
            }, options));
          }
          var start = String.fromCharCode(a);
          if (a === b) return start;
          var stop = String.fromCharCode(b);
          return "[".concat(start, "-").concat(stop, "]");
        };
        var toRegex = function toRegex(start, end, options) {
          if (Array.isArray(start)) {
            var wrap = options.wrap === true;
            var prefix = options.capture ? '' : '?:';
            return wrap ? "(".concat(prefix).concat(start.join('|'), ")") : start.join('|');
          }
          return toRegexRange(start, end, options);
        };
        var rangeError = function rangeError() {
          return new RangeError('Invalid range arguments: ' + util.inspect.apply(util, arguments));
        };
        var invalidRange = function invalidRange(start, end, options) {
          if (options.strictRanges === true) throw rangeError([start, end]);
          return [];
        };
        var invalidStep = function invalidStep(step, options) {
          if (options.strictRanges === true) {
            throw new TypeError("Expected step \"".concat(step, "\" to be a number"));
          }
          return [];
        };
        var fillNumbers = function fillNumbers(start, end) {
          var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          var a = Number(start);
          var b = Number(end);
          if (!Number.isInteger(a) || !Number.isInteger(b)) {
            if (options.strictRanges === true) throw rangeError([start, end]);
            return [];
          }

          // fix negative zero
          if (a === 0) a = 0;
          if (b === 0) b = 0;
          var descending = a > b;
          var startString = String(start);
          var endString = String(end);
          var stepString = String(step);
          step = Math.max(Math.abs(step), 1);
          var padded = zeros(startString) || zeros(endString) || zeros(stepString);
          var maxLen = padded ? Math.max(startString.length, endString.length, stepString.length) : 0;
          var toNumber = padded === false && stringify(start, end, options) === false;
          var format = options.transform || transform(toNumber);
          if (options.toRegex && step === 1) {
            return toRange(toMaxLen(start, maxLen), toMaxLen(end, maxLen), true, options);
          }
          var parts = {
            negatives: [],
            positives: []
          };
          var push = function push(num) {
            return parts[num < 0 ? 'negatives' : 'positives'].push(Math.abs(num));
          };
          var range = [];
          var index = 0;
          while (descending ? a >= b : a <= b) {
            if (options.toRegex === true && step > 1) {
              push(a);
            } else {
              range.push(pad(format(a, index), maxLen, toNumber));
            }
            a = descending ? a - step : a + step;
            index++;
          }
          if (options.toRegex === true) {
            return step > 1 ? toSequence(parts, options, maxLen) : toRegex(range, null, _objectSpread({
              wrap: false
            }, options));
          }
          return range;
        };
        var fillLetters = function fillLetters(start, end) {
          var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          if (!isNumber(start) && start.length > 1 || !isNumber(end) && end.length > 1) {
            return invalidRange(start, end, options);
          }
          var format = options.transform || function (val) {
            return String.fromCharCode(val);
          };
          var a = "".concat(start).charCodeAt(0);
          var b = "".concat(end).charCodeAt(0);
          var descending = a > b;
          var min = Math.min(a, b);
          var max = Math.max(a, b);
          if (options.toRegex && step === 1) {
            return toRange(min, max, false, options);
          }
          var range = [];
          var index = 0;
          while (descending ? a >= b : a <= b) {
            range.push(format(a, index));
            a = descending ? a - step : a + step;
            index++;
          }
          if (options.toRegex === true) {
            return toRegex(range, null, {
              wrap: false,
              options: options
            });
          }
          return range;
        };
        var _fill = function fill(start, end, step) {
          var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          if (end == null && isValidValue(start)) {
            return [start];
          }
          if (!isValidValue(start) || !isValidValue(end)) {
            return invalidRange(start, end, options);
          }
          if (typeof step === 'function') {
            return _fill(start, end, 1, {
              transform: step
            });
          }
          if (isObject(step)) {
            return _fill(start, end, 0, step);
          }
          var opts = _objectSpread({}, options);
          if (opts.capture === true) opts.wrap = true;
          step = step || opts.step || 1;
          if (!isNumber(step)) {
            if (step != null && !isObject(step)) return invalidStep(step, opts);
            return _fill(start, end, 1, step);
          }
          if (isNumber(start) && isNumber(end)) {
            return fillNumbers(start, end, step, opts);
          }
          return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
        };
        module.exports = _fill;

        /***/
      }),
      /***/54: (/***/function _(module, __unused_webpack_exports, __webpack_require__) {
        "use strict";

        /*!
         * to-regex-range <https://github.com/micromatch/to-regex-range>
         *
         * Copyright (c) 2015-present, Jon Schlinkert.
         * Released under the MIT License.
         */
        var isNumber = __webpack_require__(929);
        var _toRegexRange = function toRegexRange(min, max, options) {
          if (isNumber(min) === false) {
            throw new TypeError('toRegexRange: expected the first argument to be a number');
          }
          if (max === void 0 || min === max) {
            return String(min);
          }
          if (isNumber(max) === false) {
            throw new TypeError('toRegexRange: expected the second argument to be a number.');
          }
          var opts = _objectSpread({
            relaxZeros: true
          }, options);
          if (typeof opts.strictZeros === 'boolean') {
            opts.relaxZeros = opts.strictZeros === false;
          }
          var relax = String(opts.relaxZeros);
          var shorthand = String(opts.shorthand);
          var capture = String(opts.capture);
          var wrap = String(opts.wrap);
          var cacheKey = min + ':' + max + '=' + relax + shorthand + capture + wrap;
          if (_toRegexRange.cache.hasOwnProperty(cacheKey)) {
            return _toRegexRange.cache[cacheKey].result;
          }
          var a = Math.min(min, max);
          var b = Math.max(min, max);
          if (Math.abs(a - b) === 1) {
            var result = min + '|' + max;
            if (opts.capture) {
              return "(".concat(result, ")");
            }
            if (opts.wrap === false) {
              return result;
            }
            return "(?:".concat(result, ")");
          }
          var isPadded = hasPadding(min) || hasPadding(max);
          var state = {
            min: min,
            max: max,
            a: a,
            b: b
          };
          var positives = [];
          var negatives = [];
          if (isPadded) {
            state.isPadded = isPadded;
            state.maxLen = String(state.max).length;
          }
          if (a < 0) {
            var newMin = b < 0 ? Math.abs(b) : 1;
            negatives = splitToPatterns(newMin, Math.abs(a), state, opts);
            a = state.a = 0;
          }
          if (b >= 0) {
            positives = splitToPatterns(a, b, state, opts);
          }
          state.negatives = negatives;
          state.positives = positives;
          state.result = collatePatterns(negatives, positives, opts);
          if (opts.capture === true) {
            state.result = "(".concat(state.result, ")");
          } else if (opts.wrap !== false && positives.length + negatives.length > 1) {
            state.result = "(?:".concat(state.result, ")");
          }
          _toRegexRange.cache[cacheKey] = state;
          return state.result;
        };
        function collatePatterns(neg, pos, options) {
          var onlyNegative = filterPatterns(neg, pos, '-', false, options) || [];
          var onlyPositive = filterPatterns(pos, neg, '', false, options) || [];
          var intersected = filterPatterns(neg, pos, '-?', true, options) || [];
          var subpatterns = onlyNegative.concat(intersected).concat(onlyPositive);
          return subpatterns.join('|');
        }
        function splitToRanges(min, max) {
          var nines = 1;
          var zeros = 1;
          var stop = countNines(min, nines);
          var stops = new Set([max]);
          while (min <= stop && stop <= max) {
            stops.add(stop);
            nines += 1;
            stop = countNines(min, nines);
          }
          stop = countZeros(max + 1, zeros) - 1;
          while (min < stop && stop <= max) {
            stops.add(stop);
            zeros += 1;
            stop = countZeros(max + 1, zeros) - 1;
          }
          stops = _toConsumableArray(stops);
          stops.sort(compare);
          return stops;
        }

        /**
         * Convert a range to a regex pattern
         * @param {Number} `start`
         * @param {Number} `stop`
         * @return {String}
         */

        function rangeToPattern(start, stop, options) {
          if (start === stop) {
            return {
              pattern: start,
              count: [],
              digits: 0
            };
          }
          var zipped = zip(start, stop);
          var digits = zipped.length;
          var pattern = '';
          var count = 0;
          for (var i = 0; i < digits; i++) {
            var _zipped$i = _slicedToArray(zipped[i], 2),
              startDigit = _zipped$i[0],
              stopDigit = _zipped$i[1];
            if (startDigit === stopDigit) {
              pattern += startDigit;
            } else if (startDigit !== '0' || stopDigit !== '9') {
              pattern += toCharacterClass(startDigit, stopDigit, options);
            } else {
              count++;
            }
          }
          if (count) {
            pattern += options.shorthand === true ? '\\d' : '[0-9]';
          }
          return {
            pattern: pattern,
            count: [count],
            digits: digits
          };
        }
        function splitToPatterns(min, max, tok, options) {
          var ranges = splitToRanges(min, max);
          var tokens = [];
          var start = min;
          var prev;
          for (var i = 0; i < ranges.length; i++) {
            var _max = ranges[i];
            var obj = rangeToPattern(String(start), String(_max), options);
            var zeros = '';
            if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
              if (prev.count.length > 1) {
                prev.count.pop();
              }
              prev.count.push(obj.count[0]);
              prev.string = prev.pattern + toQuantifier(prev.count);
              start = _max + 1;
              continue;
            }
            if (tok.isPadded) {
              zeros = padZeros(_max, tok, options);
            }
            obj.string = zeros + obj.pattern + toQuantifier(obj.count);
            tokens.push(obj);
            start = _max + 1;
            prev = obj;
          }
          return tokens;
        }
        function filterPatterns(arr, comparison, prefix, intersection, options) {
          var result = [];
          var _iterator = _createForOfIteratorHelper(arr),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var ele = _step.value;
              var string = ele.string;

              // only push if _both_ are negative...
              if (!intersection && !contains(comparison, 'string', string)) {
                result.push(prefix + string);
              }

              // or _both_ are positive
              if (intersection && contains(comparison, 'string', string)) {
                result.push(prefix + string);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return result;
        }

        /**
         * Zip strings
         */

        function zip(a, b) {
          var arr = [];
          for (var i = 0; i < a.length; i++) arr.push([a[i], b[i]]);
          return arr;
        }
        function compare(a, b) {
          return a > b ? 1 : b > a ? -1 : 0;
        }
        function contains(arr, key, val) {
          return arr.some(function (ele) {
            return ele[key] === val;
          });
        }
        function countNines(min, len) {
          return Number(String(min).slice(0, -len) + '9'.repeat(len));
        }
        function countZeros(integer, zeros) {
          return integer - integer % Math.pow(10, zeros);
        }
        function toQuantifier(digits) {
          var _digits = _slicedToArray(digits, 2),
            _digits$ = _digits[0],
            start = _digits$ === void 0 ? 0 : _digits$,
            _digits$2 = _digits[1],
            stop = _digits$2 === void 0 ? '' : _digits$2;
          if (stop || start > 1) {
            return "{".concat(start + (stop ? ',' + stop : ''), "}");
          }
          return '';
        }
        function toCharacterClass(a, b, options) {
          return "[".concat(a).concat(b - a === 1 ? '' : '-').concat(b, "]");
        }
        function hasPadding(str) {
          return /^-?(0+)\d/.test(str);
        }
        function padZeros(value, tok, options) {
          if (!tok.isPadded) {
            return value;
          }
          var diff = Math.abs(tok.maxLen - String(value).length);
          var relax = options.relaxZeros !== false;
          switch (diff) {
            case 0:
              return '';
            case 1:
              return relax ? '0?' : '0';
            case 2:
              return relax ? '0{0,2}' : '00';
            default:
              {
                return relax ? "0{0,".concat(diff, "}") : "0{".concat(diff, "}");
              }
          }
        }

        /**
         * Cache
         */

        _toRegexRange.cache = {};
        _toRegexRange.clearCache = function () {
          return _toRegexRange.cache = {};
        };

        /**
         * Expose `toRegexRange`
         */

        module.exports = _toRegexRange;

        /***/
      }),
      /***/97: (/***/function _(module, __unused_webpack_exports, __webpack_require__) {
        /*
        
        // npx browserify entry.js -o dist/micromatch.js --standalone micromatch
        // npx babel dist/micromatch.js --out-file dist/micromatch.jsfl
        
        webpack
        npx babel dist/micromatch.js --out-file dist/micromatch.jsfl
        node wrap-iife.js
        
        
         */

        module.exports = __webpack_require__(628);

        /***/
      }),
      /***/248: (/***/function _(module) {
        "use strict";

        module.exports = __WEBPACK_EXTERNAL_MODULE__248__;

        /***/
      }),
      /***/280: (/***/function _(__unused_webpack_module, exports, __webpack_require__) {
        "use strict";

        var path = __webpack_require__(248);
        var win32 = process.platform === 'win32';
        var _webpack_require__ = __webpack_require__(940),
          REGEX_BACKSLASH = _webpack_require__.REGEX_BACKSLASH,
          REGEX_REMOVE_BACKSLASH = _webpack_require__.REGEX_REMOVE_BACKSLASH,
          REGEX_SPECIAL_CHARS = _webpack_require__.REGEX_SPECIAL_CHARS,
          REGEX_SPECIAL_CHARS_GLOBAL = _webpack_require__.REGEX_SPECIAL_CHARS_GLOBAL;
        exports.isObject = function (val) {
          return val !== null && _typeof(val) === 'object' && !Array.isArray(val);
        };
        exports.hasRegexChars = function (str) {
          return REGEX_SPECIAL_CHARS.test(str);
        };
        exports.isRegexChar = function (str) {
          return str.length === 1 && exports.hasRegexChars(str);
        };
        exports.escapeRegex = function (str) {
          return str.replace(REGEX_SPECIAL_CHARS_GLOBAL, '\\$1');
        };
        exports.toPosixSlashes = function (str) {
          return str.replace(REGEX_BACKSLASH, '/');
        };
        exports.removeBackslashes = function (str) {
          return str.replace(REGEX_REMOVE_BACKSLASH, function (match) {
            return match === '\\' ? '' : match;
          });
        };
        exports.supportsLookbehinds = function () {
          var segs = process.version.slice(1).split('.').map(Number);
          if (segs.length === 3 && segs[0] >= 9 || segs[0] === 8 && segs[1] >= 10) {
            return true;
          }
          return false;
        };
        exports.isWindows = function (options) {
          if (options && typeof options.windows === 'boolean') {
            return options.windows;
          }
          return win32 === true || path.sep === '\\';
        };
        exports.escapeLast = function (input, char, lastIdx) {
          var idx = input.lastIndexOf(char, lastIdx);
          if (idx === -1) return input;
          if (input[idx - 1] === '\\') return exports.escapeLast(input, char, idx - 1);
          return "".concat(input.slice(0, idx), "\\").concat(input.slice(idx));
        };
        exports.removePrefix = function (input) {
          var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var output = input;
          if (output.startsWith('./')) {
            output = output.slice(2);
            state.prefix = './';
          }
          return output;
        };
        exports.wrapOutput = function (input) {
          var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var prepend = options.contains ? '' : '^';
          var append = options.contains ? '' : '$';
          var output = "".concat(prepend, "(?:").concat(input, ")").concat(append);
          if (state.negated === true) {
            output = "(?:^(?!".concat(output, ").*$)");
          }
          return output;
        };

        /***/
      }),
      /***/537: (/***/function _(module, __unused_webpack_exports, __webpack_require__) {
        "use strict";

        var stringify = __webpack_require__(720);
        var compile = __webpack_require__(712);
        var expand = __webpack_require__(697);
        var parse = __webpack_require__(598);

        /**
         * Expand the given pattern or create a regex-compatible string.
         *
         * ```js
         * const braces = require('braces');
         * console.log(braces('{a,b,c}', { compile: true })); //=> ['(a|b|c)']
         * console.log(braces('{a,b,c}')); //=> ['a', 'b', 'c']
         * ```
         * @param {String} `str`
         * @param {Object} `options`
         * @return {String}
         * @api public
         */

        var _braces = function braces(input) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var output = [];
          if (Array.isArray(input)) {
            var _iterator2 = _createForOfIteratorHelper(input),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var pattern = _step2.value;
                var result = _braces.create(pattern, options);
                if (Array.isArray(result)) {
                  var _output;
                  (_output = output).push.apply(_output, _toConsumableArray(result));
                } else {
                  output.push(result);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } else {
            output = [].concat(_braces.create(input, options));
          }
          if (options && options.expand === true && options.nodupes === true) {
            output = _toConsumableArray(new Set(output));
          }
          return output;
        };

        /**
         * Parse the given `str` with the given `options`.
         *
         * ```js
         * // braces.parse(pattern, [, options]);
         * const ast = braces.parse('a/{b,c}/d');
         * console.log(ast);
         * ```
         * @param {String} pattern Brace pattern to parse
         * @param {Object} options
         * @return {Object} Returns an AST
         * @api public
         */

        _braces.parse = function (input) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return parse(input, options);
        };

        /**
         * Creates a braces string from an AST, or an AST node.
         *
         * ```js
         * const braces = require('braces');
         * let ast = braces.parse('foo/{a,b}/bar');
         * console.log(stringify(ast.nodes[2])); //=> '{a,b}'
         * ```
         * @param {String} `input` Brace pattern or AST.
         * @param {Object} `options`
         * @return {Array} Returns an array of expanded values.
         * @api public
         */

        _braces.stringify = function (input) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          if (typeof input === 'string') {
            return stringify(_braces.parse(input, options), options);
          }
          return stringify(input, options);
        };

        /**
         * Compiles a brace pattern into a regex-compatible, optimized string.
         * This method is called by the main [braces](#braces) function by default.
         *
         * ```js
         * const braces = require('braces');
         * console.log(braces.compile('a/{b,c}/d'));
         * //=> ['a/(b|c)/d']
         * ```
         * @param {String} `input` Brace pattern or AST.
         * @param {Object} `options`
         * @return {Array} Returns an array of expanded values.
         * @api public
         */

        _braces.compile = function (input) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          if (typeof input === 'string') {
            input = _braces.parse(input, options);
          }
          return compile(input, options);
        };

        /**
         * Expands a brace pattern into an array. This method is called by the
         * main [braces](#braces) function when `options.expand` is true. Before
         * using this method it's recommended that you read the [performance notes](#performance))
         * and advantages of using [.compile](#compile) instead.
         *
         * ```js
         * const braces = require('braces');
         * console.log(braces.expand('a/{b,c}/d'));
         * //=> ['a/b/d', 'a/c/d'];
         * ```
         * @param {String} `pattern` Brace pattern
         * @param {Object} `options`
         * @return {Array} Returns an array of expanded values.
         * @api public
         */

        _braces.expand = function (input) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          if (typeof input === 'string') {
            input = _braces.parse(input, options);
          }
          var result = expand(input, options);

          // filter out empty strings if specified
          if (options.noempty === true) {
            result = result.filter(Boolean);
          }

          // filter out duplicates if specified
          if (options.nodupes === true) {
            result = _toConsumableArray(new Set(result));
          }
          return result;
        };

        /**
         * Processes a brace pattern and returns either an expanded array
         * (if `options.expand` is true), a highly optimized regex-compatible string.
         * This method is called by the main [braces](#braces) function.
         *
         * ```js
         * const braces = require('braces');
         * console.log(braces.create('user-{200..300}/project-{a,b,c}-{1..10}'))
         * //=> 'user-(20[0-9]|2[1-9][0-9]|300)/project-(a|b|c)-([1-9]|10)'
         * ```
         * @param {String} `pattern` Brace pattern
         * @param {Object} `options`
         * @return {Array} Returns an array of expanded values.
         * @api public
         */

        _braces.create = function (input) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          if (input === '' || input.length < 3) {
            return [input];
          }
          return options.expand !== true ? _braces.compile(input, options) : _braces.expand(input, options);
        };

        /**
         * Expose "braces"
         */

        module.exports = _braces;

        /***/
      }),
      /***/598: (/***/function _(module, __unused_webpack_exports, __webpack_require__) {
        "use strict";

        var stringify = __webpack_require__(720);

        /**
         * Constants
         */

        var _webpack_require__2 = __webpack_require__(776),
          MAX_LENGTH = _webpack_require__2.MAX_LENGTH,
          CHAR_BACKSLASH = _webpack_require__2.CHAR_BACKSLASH,
          CHAR_BACKTICK = _webpack_require__2.CHAR_BACKTICK,
          CHAR_COMMA = _webpack_require__2.CHAR_COMMA,
          CHAR_DOT = _webpack_require__2.CHAR_DOT,
          CHAR_LEFT_PARENTHESES = _webpack_require__2.CHAR_LEFT_PARENTHESES,
          CHAR_RIGHT_PARENTHESES = _webpack_require__2.CHAR_RIGHT_PARENTHESES,
          CHAR_LEFT_CURLY_BRACE = _webpack_require__2.CHAR_LEFT_CURLY_BRACE,
          CHAR_RIGHT_CURLY_BRACE = _webpack_require__2.CHAR_RIGHT_CURLY_BRACE,
          CHAR_LEFT_SQUARE_BRACKET = _webpack_require__2.CHAR_LEFT_SQUARE_BRACKET,
          CHAR_RIGHT_SQUARE_BRACKET = _webpack_require__2.CHAR_RIGHT_SQUARE_BRACKET,
          CHAR_DOUBLE_QUOTE = _webpack_require__2.CHAR_DOUBLE_QUOTE,
          CHAR_SINGLE_QUOTE = _webpack_require__2.CHAR_SINGLE_QUOTE,
          CHAR_NO_BREAK_SPACE = _webpack_require__2.CHAR_NO_BREAK_SPACE,
          CHAR_ZERO_WIDTH_NOBREAK_SPACE = _webpack_require__2.CHAR_ZERO_WIDTH_NOBREAK_SPACE;

        /**
         * parse
         */

        var parse = function parse(input) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          if (typeof input !== 'string') {
            throw new TypeError('Expected a string');
          }
          var opts = options || {};
          var max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
          if (input.length > max) {
            throw new SyntaxError("Input length (".concat(input.length, "), exceeds max characters (").concat(max, ")"));
          }
          var ast = {
            type: 'root',
            input: input,
            nodes: []
          };
          var stack = [ast];
          var block = ast;
          var prev = ast;
          var brackets = 0;
          var length = input.length;
          var index = 0;
          var depth = 0;
          var value;

          /**
           * Helpers
           */

          var advance = function advance() {
            return input[index++];
          };
          var push = function push(node) {
            if (node.type === 'text' && prev.type === 'dot') {
              prev.type = 'text';
            }
            if (prev && prev.type === 'text' && node.type === 'text') {
              prev.value += node.value;
              return;
            }
            block.nodes.push(node);
            node.parent = block;
            node.prev = prev;
            prev = node;
            return node;
          };
          push({
            type: 'bos'
          });
          while (index < length) {
            block = stack[stack.length - 1];
            value = advance();

            /**
             * Invalid chars
             */

            if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
              continue;
            }

            /**
             * Escaped chars
             */

            if (value === CHAR_BACKSLASH) {
              push({
                type: 'text',
                value: (options.keepEscaping ? value : '') + advance()
              });
              continue;
            }

            /**
             * Right square bracket (literal): ']'
             */

            if (value === CHAR_RIGHT_SQUARE_BRACKET) {
              push({
                type: 'text',
                value: '\\' + value
              });
              continue;
            }

            /**
             * Left square bracket: '['
             */

            if (value === CHAR_LEFT_SQUARE_BRACKET) {
              brackets++;
              var next = void 0;
              while (index < length && (next = advance())) {
                value += next;
                if (next === CHAR_LEFT_SQUARE_BRACKET) {
                  brackets++;
                  continue;
                }
                if (next === CHAR_BACKSLASH) {
                  value += advance();
                  continue;
                }
                if (next === CHAR_RIGHT_SQUARE_BRACKET) {
                  brackets--;
                  if (brackets === 0) {
                    break;
                  }
                }
              }
              push({
                type: 'text',
                value: value
              });
              continue;
            }

            /**
             * Parentheses
             */

            if (value === CHAR_LEFT_PARENTHESES) {
              block = push({
                type: 'paren',
                nodes: []
              });
              stack.push(block);
              push({
                type: 'text',
                value: value
              });
              continue;
            }
            if (value === CHAR_RIGHT_PARENTHESES) {
              if (block.type !== 'paren') {
                push({
                  type: 'text',
                  value: value
                });
                continue;
              }
              block = stack.pop();
              push({
                type: 'text',
                value: value
              });
              block = stack[stack.length - 1];
              continue;
            }

            /**
             * Quotes: '|"|`
             */

            if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
              var open = value;
              var _next = void 0;
              if (options.keepQuotes !== true) {
                value = '';
              }
              while (index < length && (_next = advance())) {
                if (_next === CHAR_BACKSLASH) {
                  value += _next + advance();
                  continue;
                }
                if (_next === open) {
                  if (options.keepQuotes === true) value += _next;
                  break;
                }
                value += _next;
              }
              push({
                type: 'text',
                value: value
              });
              continue;
            }

            /**
             * Left curly brace: '{'
             */

            if (value === CHAR_LEFT_CURLY_BRACE) {
              depth++;
              var dollar = prev.value && prev.value.slice(-1) === '$' || block.dollar === true;
              var brace = {
                type: 'brace',
                open: true,
                close: false,
                dollar: dollar,
                depth: depth,
                commas: 0,
                ranges: 0,
                nodes: []
              };
              block = push(brace);
              stack.push(block);
              push({
                type: 'open',
                value: value
              });
              continue;
            }

            /**
             * Right curly brace: '}'
             */

            if (value === CHAR_RIGHT_CURLY_BRACE) {
              if (block.type !== 'brace') {
                push({
                  type: 'text',
                  value: value
                });
                continue;
              }
              var type = 'close';
              block = stack.pop();
              block.close = true;
              push({
                type: type,
                value: value
              });
              depth--;
              block = stack[stack.length - 1];
              continue;
            }

            /**
             * Comma: ','
             */

            if (value === CHAR_COMMA && depth > 0) {
              if (block.ranges > 0) {
                block.ranges = 0;
                var _open = block.nodes.shift();
                block.nodes = [_open, {
                  type: 'text',
                  value: stringify(block)
                }];
              }
              push({
                type: 'comma',
                value: value
              });
              block.commas++;
              continue;
            }

            /**
             * Dot: '.'
             */

            if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
              var siblings = block.nodes;
              if (depth === 0 || siblings.length === 0) {
                push({
                  type: 'text',
                  value: value
                });
                continue;
              }
              if (prev.type === 'dot') {
                block.range = [];
                prev.value += value;
                prev.type = 'range';
                if (block.nodes.length !== 3 && block.nodes.length !== 5) {
                  block.invalid = true;
                  block.ranges = 0;
                  prev.type = 'text';
                  continue;
                }
                block.ranges++;
                block.args = [];
                continue;
              }
              if (prev.type === 'range') {
                siblings.pop();
                var before = siblings[siblings.length - 1];
                before.value += prev.value + value;
                prev = before;
                block.ranges--;
                continue;
              }
              push({
                type: 'dot',
                value: value
              });
              continue;
            }

            /**
             * Text
             */

            push({
              type: 'text',
              value: value
            });
          }

          // Mark imbalanced braces and brackets as invalid
          do {
            block = stack.pop();
            if (block.type !== 'root') {
              var _parent$nodes;
              block.nodes.forEach(function (node) {
                if (!node.nodes) {
                  if (node.type === 'open') node.isOpen = true;
                  if (node.type === 'close') node.isClose = true;
                  if (!node.nodes) node.type = 'text';
                  node.invalid = true;
                }
              });

              // get the location of the block on parent.nodes (block's siblings)
              var parent = stack[stack.length - 1];
              var _index = parent.nodes.indexOf(block);
              // replace the (invalid) block with it's nodes
              (_parent$nodes = parent.nodes).splice.apply(_parent$nodes, [_index, 1].concat(_toConsumableArray(block.nodes)));
            }
          } while (stack.length > 0);
          push({
            type: 'eos'
          });
          return ast;
        };
        module.exports = parse;

        /***/
      }),
      /***/612: (/***/function _(__unused_webpack_module, exports) {
        "use strict";

        exports.isInteger = function (num) {
          if (typeof num === 'number') {
            return Number.isInteger(num);
          }
          if (typeof num === 'string' && num.trim() !== '') {
            return Number.isInteger(Number(num));
          }
          return false;
        };

        /**
         * Find a node of the given type
         */

        exports.find = function (node, type) {
          return node.nodes.find(function (node) {
            return node.type === type;
          });
        };

        /**
         * Find a node of the given type
         */

        exports.exceedsLimit = function (min, max) {
          var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          var limit = arguments.length > 3 ? arguments[3] : undefined;
          if (limit === false) return false;
          if (!exports.isInteger(min) || !exports.isInteger(max)) return false;
          return (Number(max) - Number(min)) / Number(step) >= limit;
        };

        /**
         * Escape the given node with '\\' before node.value
         */

        exports.escapeNode = function (block) {
          var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
          var type = arguments.length > 2 ? arguments[2] : undefined;
          var node = block.nodes[n];
          if (!node) return;
          if (type && node.type === type || node.type === 'open' || node.type === 'close') {
            if (node.escaped !== true) {
              node.value = '\\' + node.value;
              node.escaped = true;
            }
          }
        };

        /**
         * Returns true if the given brace node should be enclosed in literal braces
         */

        exports.encloseBrace = function (node) {
          if (node.type !== 'brace') return false;
          if (node.commas >> 0 + node.ranges >> 0 === 0) {
            node.invalid = true;
            return true;
          }
          return false;
        };

        /**
         * Returns true if a brace node is invalid.
         */

        exports.isInvalidBrace = function (block) {
          if (block.type !== 'brace') return false;
          if (block.invalid === true || block.dollar) return true;
          if (block.commas >> 0 + block.ranges >> 0 === 0) {
            block.invalid = true;
            return true;
          }
          if (block.open !== true || block.close !== true) {
            block.invalid = true;
            return true;
          }
          return false;
        };

        /**
         * Returns true if a node is an open or close node
         */

        exports.isOpenOrClose = function (node) {
          if (node.type === 'open' || node.type === 'close') {
            return true;
          }
          return node.open === true || node.close === true;
        };

        /**
         * Reduce an array of text nodes.
         */

        exports.reduce = function (nodes) {
          return nodes.reduce(function (acc, node) {
            if (node.type === 'text') acc.push(node.value);
            if (node.type === 'range') node.type = 'text';
            return acc;
          }, []);
        };

        /**
         * Flatten an array
         */

        exports.flatten = function () {
          var result = [];
          var _flat = function flat(arr) {
            for (var i = 0; i < arr.length; i++) {
              var ele = arr[i];
              if (Array.isArray(ele)) {
                _flat(ele);
                continue;
              }
              if (ele !== undefined) {
                result.push(ele);
              }
            }
            return result;
          };
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _flat(args);
          return result;
        };

        /***/
      }),
      /***/628: (/***/function _(module, __unused_webpack_exports, __webpack_require__) {
        "use strict";

        var util = __webpack_require__(24);
        var braces = __webpack_require__(537);
        var picomatch = __webpack_require__(878);
        var utils = __webpack_require__(280);
        var isEmptyString = function isEmptyString(v) {
          return v === '' || v === './';
        };
        var hasBraces = function hasBraces(v) {
          var index = v.indexOf('{');
          return index > -1 && v.indexOf('}', index) > -1;
        };

        /**
         * Returns an array of strings that match one or more glob patterns.
         *
         * ```js
         * const mm = require('micromatch');
         * // mm(list, patterns[, options]);
         *
         * console.log(mm(['a.js', 'a.txt'], ['*.js']));
         * //=> [ 'a.js' ]
         * ```
         * @param {String|Array<string>} `list` List of strings to match.
         * @param {String|Array<string>} `patterns` One or more glob patterns to use for matching.
         * @param {Object} `options` See available [options](#options)
         * @return {Array} Returns an array of matches
         * @summary false
         * @api public
         */

        var micromatch = function micromatch(list, patterns, options) {
          patterns = [].concat(patterns);
          list = [].concat(list);
          var omit = new Set();
          var keep = new Set();
          var items = new Set();
          var negatives = 0;
          var onResult = function onResult(state) {
            items.add(state.output);
            if (options && options.onResult) {
              options.onResult(state);
            }
          };
          for (var i = 0; i < patterns.length; i++) {
            var isMatch = picomatch(String(patterns[i]), _objectSpread(_objectSpread({}, options), {}, {
              onResult: onResult
            }), true);
            var negated = isMatch.state.negated || isMatch.state.negatedExtglob;
            if (negated) negatives++;
            var _iterator3 = _createForOfIteratorHelper(list),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var item = _step3.value;
                var matched = isMatch(item, true);
                var match = negated ? !matched.isMatch : matched.isMatch;
                if (!match) continue;
                if (negated) {
                  omit.add(matched.output);
                } else {
                  omit.delete(matched.output);
                  keep.add(matched.output);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
          var result = negatives === patterns.length ? _toConsumableArray(items) : _toConsumableArray(keep);
          var matches = result.filter(function (item) {
            return !omit.has(item);
          });
          if (options && matches.length === 0) {
            if (options.failglob === true) {
              throw new Error("No matches found for \"".concat(patterns.join(', '), "\""));
            }
            if (options.nonull === true || options.nullglob === true) {
              return options.unescape ? patterns.map(function (p) {
                return p.replace(/\\/g, '');
              }) : patterns;
            }
          }
          return matches;
        };

        /**
         * Backwards compatibility
         */

        micromatch.match = micromatch;

        /**
         * Returns a matcher function from the given glob `pattern` and `options`.
         * The returned function takes a string to match as its only argument and returns
         * true if the string is a match.
         *
         * ```js
         * const mm = require('micromatch');
         * // mm.matcher(pattern[, options]);
         *
         * const isMatch = mm.matcher('*.!(*a)');
         * console.log(isMatch('a.a')); //=> false
         * console.log(isMatch('a.b')); //=> true
         * ```
         * @param {String} `pattern` Glob pattern
         * @param {Object} `options`
         * @return {Function} Returns a matcher function.
         * @api public
         */

        micromatch.matcher = function (pattern, options) {
          return picomatch(pattern, options);
        };

        /**
         * Returns true if **any** of the given glob `patterns` match the specified `string`.
         *
         * ```js
         * const mm = require('micromatch');
         * // mm.isMatch(string, patterns[, options]);
         *
         * console.log(mm.isMatch('a.a', ['b.*', '*.a'])); //=> true
         * console.log(mm.isMatch('a.a', 'b.*')); //=> false
         * ```
         * @param {String} `str` The string to test.
         * @param {String|Array} `patterns` One or more glob patterns to use for matching.
         * @param {Object} `[options]` See available [options](#options).
         * @return {Boolean} Returns true if any patterns match `str`
         * @api public
         */

        micromatch.isMatch = function (str, patterns, options) {
          return picomatch(patterns, options)(str);
        };

        /**
         * Backwards compatibility
         */

        micromatch.any = micromatch.isMatch;

        /**
         * Returns a list of strings that _**do not match any**_ of the given `patterns`.
         *
         * ```js
         * const mm = require('micromatch');
         * // mm.not(list, patterns[, options]);
         *
         * console.log(mm.not(['a.a', 'b.b', 'c.c'], '*.a'));
         * //=> ['b.b', 'c.c']
         * ```
         * @param {Array} `list` Array of strings to match.
         * @param {String|Array} `patterns` One or more glob pattern to use for matching.
         * @param {Object} `options` See available [options](#options) for changing how matches are performed
         * @return {Array} Returns an array of strings that **do not match** the given patterns.
         * @api public
         */

        micromatch.not = function (list, patterns) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          patterns = [].concat(patterns).map(String);
          var result = new Set();
          var items = [];
          var onResult = function onResult(state) {
            if (options.onResult) options.onResult(state);
            items.push(state.output);
          };
          var matches = new Set(micromatch(list, patterns, _objectSpread(_objectSpread({}, options), {}, {
            onResult: onResult
          })));
          for (var _i = 0, _items = items; _i < _items.length; _i++) {
            var item = _items[_i];
            if (!matches.has(item)) {
              result.add(item);
            }
          }
          return _toConsumableArray(result);
        };

        /**
         * Returns true if the given `string` contains the given pattern. Similar
         * to [.isMatch](#isMatch) but the pattern can match any part of the string.
         *
         * ```js
         * var mm = require('micromatch');
         * // mm.contains(string, pattern[, options]);
         *
         * console.log(mm.contains('aa/bb/cc', '*b'));
         * //=> true
         * console.log(mm.contains('aa/bb/cc', '*d'));
         * //=> false
         * ```
         * @param {String} `str` The string to match.
         * @param {String|Array} `patterns` Glob pattern to use for matching.
         * @param {Object} `options` See available [options](#options) for changing how matches are performed
         * @return {Boolean} Returns true if any of the patterns matches any part of `str`.
         * @api public
         */

        micromatch.contains = function (str, pattern, options) {
          if (typeof str !== 'string') {
            throw new TypeError("Expected a string: \"".concat(util.inspect(str), "\""));
          }
          if (Array.isArray(pattern)) {
            return pattern.some(function (p) {
              return micromatch.contains(str, p, options);
            });
          }
          if (typeof pattern === 'string') {
            if (isEmptyString(str) || isEmptyString(pattern)) {
              return false;
            }
            if (str.includes(pattern) || str.startsWith('./') && str.slice(2).includes(pattern)) {
              return true;
            }
          }
          return micromatch.isMatch(str, pattern, _objectSpread(_objectSpread({}, options), {}, {
            contains: true
          }));
        };

        /**
         * Filter the keys of the given object with the given `glob` pattern
         * and `options`. Does not attempt to match nested keys. If you need this feature,
         * use [glob-object][] instead.
         *
         * ```js
         * const mm = require('micromatch');
         * // mm.matchKeys(object, patterns[, options]);
         *
         * const obj = { aa: 'a', ab: 'b', ac: 'c' };
         * console.log(mm.matchKeys(obj, '*b'));
         * //=> { ab: 'b' }
         * ```
         * @param {Object} `object` The object with keys to filter.
         * @param {String|Array} `patterns` One or more glob patterns to use for matching.
         * @param {Object} `options` See available [options](#options) for changing how matches are performed
         * @return {Object} Returns an object with only keys that match the given patterns.
         * @api public
         */

        micromatch.matchKeys = function (obj, patterns, options) {
          if (!utils.isObject(obj)) {
            throw new TypeError('Expected the first argument to be an object');
          }
          var keys = micromatch(Object.keys(obj), patterns, options);
          var res = {};
          var _iterator4 = _createForOfIteratorHelper(keys),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var key = _step4.value;
              res[key] = obj[key];
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          return res;
        };

        /**
         * Returns true if some of the strings in the given `list` match any of the given glob `patterns`.
         *
         * ```js
         * const mm = require('micromatch');
         * // mm.some(list, patterns[, options]);
         *
         * console.log(mm.some(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
         * // true
         * console.log(mm.some(['foo.js'], ['*.js', '!foo.js']));
         * // false
         * ```
         * @param {String|Array} `list` The string or array of strings to test. Returns as soon as the first match is found.
         * @param {String|Array} `patterns` One or more glob patterns to use for matching.
         * @param {Object} `options` See available [options](#options) for changing how matches are performed
         * @return {Boolean} Returns true if any `patterns` matches any of the strings in `list`
         * @api public
         */

        micromatch.some = function (list, patterns, options) {
          var items = [].concat(list);
          var _iterator5 = _createForOfIteratorHelper([].concat(patterns)),
            _step5;
          try {
            var _loop = function _loop() {
                var pattern = _step5.value;
                var isMatch = picomatch(String(pattern), options);
                if (items.some(function (item) {
                  return isMatch(item);
                })) {
                  return {
                    v: true
                  };
                }
              },
              _ret;
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              _ret = _loop();
              if (_ret) return _ret.v;
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
          return false;
        };

        /**
         * Returns true if every string in the given `list` matches
         * any of the given glob `patterns`.
         *
         * ```js
         * const mm = require('micromatch');
         * // mm.every(list, patterns[, options]);
         *
         * console.log(mm.every('foo.js', ['foo.js']));
         * // true
         * console.log(mm.every(['foo.js', 'bar.js'], ['*.js']));
         * // true
         * console.log(mm.every(['foo.js', 'bar.js'], ['*.js', '!foo.js']));
         * // false
         * console.log(mm.every(['foo.js'], ['*.js', '!foo.js']));
         * // false
         * ```
         * @param {String|Array} `list` The string or array of strings to test.
         * @param {String|Array} `patterns` One or more glob patterns to use for matching.
         * @param {Object} `options` See available [options](#options) for changing how matches are performed
         * @return {Boolean} Returns true if all `patterns` matches all of the strings in `list`
         * @api public
         */

        micromatch.every = function (list, patterns, options) {
          var items = [].concat(list);
          var _iterator6 = _createForOfIteratorHelper([].concat(patterns)),
            _step6;
          try {
            var _loop2 = function _loop2() {
                var pattern = _step6.value;
                var isMatch = picomatch(String(pattern), options);
                if (!items.every(function (item) {
                  return isMatch(item);
                })) {
                  return {
                    v: false
                  };
                }
              },
              _ret2;
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              _ret2 = _loop2();
              if (_ret2) return _ret2.v;
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
          return true;
        };

        /**
         * Returns true if **all** of the given `patterns` match
         * the specified string.
         *
         * ```js
         * const mm = require('micromatch');
         * // mm.all(string, patterns[, options]);
         *
         * console.log(mm.all('foo.js', ['foo.js']));
         * // true
         *
         * console.log(mm.all('foo.js', ['*.js', '!foo.js']));
         * // false
         *
         * console.log(mm.all('foo.js', ['*.js', 'foo.js']));
         * // true
         *
         * console.log(mm.all('foo.js', ['*.js', 'f*', '*o*', '*o.js']));
         * // true
         * ```
         * @param {String|Array} `str` The string to test.
         * @param {String|Array} `patterns` One or more glob patterns to use for matching.
         * @param {Object} `options` See available [options](#options) for changing how matches are performed
         * @return {Boolean} Returns true if any patterns match `str`
         * @api public
         */

        micromatch.all = function (str, patterns, options) {
          if (typeof str !== 'string') {
            throw new TypeError("Expected a string: \"".concat(util.inspect(str), "\""));
          }
          return [].concat(patterns).every(function (p) {
            return picomatch(p, options)(str);
          });
        };

        /**
         * Returns an array of matches captured by `pattern` in `string, or `null` if the pattern did not match.
         *
         * ```js
         * const mm = require('micromatch');
         * // mm.capture(pattern, string[, options]);
         *
         * console.log(mm.capture('test/*.js', 'test/foo.js'));
         * //=> ['foo']
         * console.log(mm.capture('test/*.js', 'foo/bar.css'));
         * //=> null
         * ```
         * @param {String} `glob` Glob pattern to use for matching.
         * @param {String} `input` String to match
         * @param {Object} `options` See available [options](#options) for changing how matches are performed
         * @return {Array|null} Returns an array of captures if the input matches the glob pattern, otherwise `null`.
         * @api public
         */

        micromatch.capture = function (glob, input, options) {
          var posix = utils.isWindows(options);
          var regex = picomatch.makeRe(String(glob), _objectSpread(_objectSpread({}, options), {}, {
            capture: true
          }));
          var match = regex.exec(posix ? utils.toPosixSlashes(input) : input);
          if (match) {
            return match.slice(1).map(function (v) {
              return v === void 0 ? '' : v;
            });
          }
        };

        /**
         * Create a regular expression from the given glob `pattern`.
         *
         * ```js
         * const mm = require('micromatch');
         * // mm.makeRe(pattern[, options]);
         *
         * console.log(mm.makeRe('*.js'));
         * //=> /^(?:(\.[\\\/])?(?!\.)(?=.)[^\/]*?\.js)$/
         * ```
         * @param {String} `pattern` A glob pattern to convert to regex.
         * @param {Object} `options`
         * @return {RegExp} Returns a regex created from the given pattern.
         * @api public
         */

        micromatch.makeRe = function () {
          return picomatch.makeRe.apply(picomatch, arguments);
        };

        /**
         * Scan a glob pattern to separate the pattern into segments. Used
         * by the [split](#split) method.
         *
         * ```js
         * const mm = require('micromatch');
         * const state = mm.scan(pattern[, options]);
         * ```
         * @param {String} `pattern`
         * @param {Object} `options`
         * @return {Object} Returns an object with
         * @api public
         */

        micromatch.scan = function () {
          return picomatch.scan.apply(picomatch, arguments);
        };

        /**
         * Parse a glob pattern to create the source string for a regular
         * expression.
         *
         * ```js
         * const mm = require('micromatch');
         * const state = mm.parse(pattern[, options]);
         * ```
         * @param {String} `glob`
         * @param {Object} `options`
         * @return {Object} Returns an object with useful properties and output to be used as regex source string.
         * @api public
         */

        micromatch.parse = function (patterns, options) {
          var res = [];
          var _iterator7 = _createForOfIteratorHelper([].concat(patterns || [])),
            _step7;
          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var pattern = _step7.value;
              var _iterator8 = _createForOfIteratorHelper(braces(String(pattern), options)),
                _step8;
              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var str = _step8.value;
                  res.push(picomatch.parse(str, options));
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
          return res;
        };

        /**
         * Process the given brace `pattern`.
         *
         * ```js
         * const { braces } = require('micromatch');
         * console.log(braces('foo/{a,b,c}/bar'));
         * //=> [ 'foo/(a|b|c)/bar' ]
         *
         * console.log(braces('foo/{a,b,c}/bar', { expand: true }));
         * //=> [ 'foo/a/bar', 'foo/b/bar', 'foo/c/bar' ]
         * ```
         * @param {String} `pattern` String with brace pattern to process.
         * @param {Object} `options` Any [options](#options) to change how expansion is performed. See the [braces][] library for all available options.
         * @return {Array}
         * @api public
         */

        micromatch.braces = function (pattern, options) {
          if (typeof pattern !== 'string') throw new TypeError('Expected a string');
          if (options && options.nobrace === true || !hasBraces(pattern)) {
            return [pattern];
          }
          return braces(pattern, options);
        };

        /**
         * Expand braces
         */

        micromatch.braceExpand = function (pattern, options) {
          if (typeof pattern !== 'string') throw new TypeError('Expected a string');
          return micromatch.braces(pattern, _objectSpread(_objectSpread({}, options), {}, {
            expand: true
          }));
        };

        /**
         * Expose micromatch
         */

        // exposed for tests
        micromatch.hasBraces = hasBraces;
        module.exports = micromatch;

        /***/
      }),
      /***/697: (/***/function _(module, __unused_webpack_exports, __webpack_require__) {
        "use strict";

        var fill = __webpack_require__(28);
        var stringify = __webpack_require__(720);
        var utils = __webpack_require__(612);
        var _append = function append() {
          var queue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var stash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var enclose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var result = [];
          queue = [].concat(queue);
          stash = [].concat(stash);
          if (!stash.length) return queue;
          if (!queue.length) {
            return enclose ? utils.flatten(stash).map(function (ele) {
              return "{".concat(ele, "}");
            }) : stash;
          }
          var _iterator9 = _createForOfIteratorHelper(queue),
            _step9;
          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var item = _step9.value;
              if (Array.isArray(item)) {
                var _iterator0 = _createForOfIteratorHelper(item),
                  _step0;
                try {
                  for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
                    var value = _step0.value;
                    result.push(_append(value, stash, enclose));
                  }
                } catch (err) {
                  _iterator0.e(err);
                } finally {
                  _iterator0.f();
                }
              } else {
                var _iterator1 = _createForOfIteratorHelper(stash),
                  _step1;
                try {
                  for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
                    var ele = _step1.value;
                    if (enclose === true && typeof ele === 'string') ele = "{".concat(ele, "}");
                    result.push(Array.isArray(ele) ? _append(item, ele, enclose) : item + ele);
                  }
                } catch (err) {
                  _iterator1.e(err);
                } finally {
                  _iterator1.f();
                }
              }
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
          return utils.flatten(result);
        };
        var expand = function expand(ast) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var rangeLimit = options.rangeLimit === undefined ? 1000 : options.rangeLimit;
          var _walk = function walk(node) {
            var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            node.queue = [];
            var p = parent;
            var q = parent.queue;
            while (p.type !== 'brace' && p.type !== 'root' && p.parent) {
              p = p.parent;
              q = p.queue;
            }
            if (node.invalid || node.dollar) {
              q.push(_append(q.pop(), stringify(node, options)));
              return;
            }
            if (node.type === 'brace' && node.invalid !== true && node.nodes.length === 2) {
              q.push(_append(q.pop(), ['{}']));
              return;
            }
            if (node.nodes && node.ranges > 0) {
              var args = utils.reduce(node.nodes);
              if (utils.exceedsLimit.apply(utils, _toConsumableArray(args).concat([options.step, rangeLimit]))) {
                throw new RangeError('expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.');
              }
              var range = fill.apply(void 0, _toConsumableArray(args).concat([options]));
              if (range.length === 0) {
                range = stringify(node, options);
              }
              q.push(_append(q.pop(), range));
              node.nodes = [];
              return;
            }
            var enclose = utils.encloseBrace(node);
            var queue = node.queue;
            var block = node;
            while (block.type !== 'brace' && block.type !== 'root' && block.parent) {
              block = block.parent;
              queue = block.queue;
            }
            for (var i = 0; i < node.nodes.length; i++) {
              var child = node.nodes[i];
              if (child.type === 'comma' && node.type === 'brace') {
                if (i === 1) queue.push('');
                queue.push('');
                continue;
              }
              if (child.type === 'close') {
                q.push(_append(q.pop(), queue, enclose));
                continue;
              }
              if (child.value && child.type !== 'open') {
                queue.push(_append(queue.pop(), child.value));
                continue;
              }
              if (child.nodes) {
                _walk(child, node);
              }
            }
            return queue;
          };
          return utils.flatten(_walk(ast));
        };
        module.exports = expand;

        /***/
      }),
      /***/712: (/***/function _(module, __unused_webpack_exports, __webpack_require__) {
        "use strict";

        var fill = __webpack_require__(28);
        var utils = __webpack_require__(612);
        var compile = function compile(ast) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _walk2 = function walk(node) {
            var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var invalidBlock = utils.isInvalidBrace(parent);
            var invalidNode = node.invalid === true && options.escapeInvalid === true;
            var invalid = invalidBlock === true || invalidNode === true;
            var prefix = options.escapeInvalid === true ? '\\' : '';
            var output = '';
            if (node.isOpen === true) {
              return prefix + node.value;
            }
            if (node.isClose === true) {
              console.log('node.isClose', prefix, node.value);
              return prefix + node.value;
            }
            if (node.type === 'open') {
              return invalid ? prefix + node.value : '(';
            }
            if (node.type === 'close') {
              return invalid ? prefix + node.value : ')';
            }
            if (node.type === 'comma') {
              return node.prev.type === 'comma' ? '' : invalid ? node.value : '|';
            }
            if (node.value) {
              return node.value;
            }
            if (node.nodes && node.ranges > 0) {
              var args = utils.reduce(node.nodes);
              var range = fill.apply(void 0, _toConsumableArray(args).concat([_objectSpread(_objectSpread({}, options), {}, {
                wrap: false,
                toRegex: true,
                strictZeros: true
              })]));
              if (range.length !== 0) {
                return args.length > 1 && range.length > 1 ? "(".concat(range, ")") : range;
              }
            }
            if (node.nodes) {
              var _iterator10 = _createForOfIteratorHelper(node.nodes),
                _step10;
              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var child = _step10.value;
                  output += _walk2(child, node);
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
            }
            return output;
          };
          return _walk2(ast);
        };
        module.exports = compile;

        /***/
      }),
      /***/720: (/***/function _(module, __unused_webpack_exports, __webpack_require__) {
        "use strict";

        var utils = __webpack_require__(612);
        module.exports = function (ast) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _stringify = function stringify(node) {
            var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            var invalidBlock = options.escapeInvalid && utils.isInvalidBrace(parent);
            var invalidNode = node.invalid === true && options.escapeInvalid === true;
            var output = '';
            if (node.value) {
              if ((invalidBlock || invalidNode) && utils.isOpenOrClose(node)) {
                return '\\' + node.value;
              }
              return node.value;
            }
            if (node.value) {
              return node.value;
            }
            if (node.nodes) {
              var _iterator11 = _createForOfIteratorHelper(node.nodes),
                _step11;
              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var child = _step11.value;
                  output += _stringify(child);
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }
            }
            return output;
          };
          return _stringify(ast);
        };

        /***/
      }),
      /***/776: (/***/function _(module) {
        "use strict";

        module.exports = {
          MAX_LENGTH: 10000,
          // Digits
          CHAR_0: '0',
          /* 0 */
          CHAR_9: '9',
          /* 9 */

          // Alphabet chars.
          CHAR_UPPERCASE_A: 'A',
          /* A */
          CHAR_LOWERCASE_A: 'a',
          /* a */
          CHAR_UPPERCASE_Z: 'Z',
          /* Z */
          CHAR_LOWERCASE_Z: 'z',
          /* z */

          CHAR_LEFT_PARENTHESES: '(',
          /* ( */
          CHAR_RIGHT_PARENTHESES: ')',
          /* ) */

          CHAR_ASTERISK: '*',
          /* * */

          // Non-alphabetic chars.
          CHAR_AMPERSAND: '&',
          /* & */
          CHAR_AT: '@',
          /* @ */
          CHAR_BACKSLASH: '\\',
          /* \ */
          CHAR_BACKTICK: '`',
          /* ` */
          CHAR_CARRIAGE_RETURN: '\r',
          /* \r */
          CHAR_CIRCUMFLEX_ACCENT: '^',
          /* ^ */
          CHAR_COLON: ':',
          /* : */
          CHAR_COMMA: ',',
          /* , */
          CHAR_DOLLAR: '$',
          /* . */
          CHAR_DOT: '.',
          /* . */
          CHAR_DOUBLE_QUOTE: '"',
          /* " */
          CHAR_EQUAL: '=',
          /* = */
          CHAR_EXCLAMATION_MARK: '!',
          /* ! */
          CHAR_FORM_FEED: '\f',
          /* \f */
          CHAR_FORWARD_SLASH: '/',
          /* / */
          CHAR_HASH: '#',
          /* # */
          CHAR_HYPHEN_MINUS: '-',
          /* - */
          CHAR_LEFT_ANGLE_BRACKET: '<',
          /* < */
          CHAR_LEFT_CURLY_BRACE: '{',
          /* { */
          CHAR_LEFT_SQUARE_BRACKET: '[',
          /* [ */
          CHAR_LINE_FEED: '\n',
          /* \n */
          CHAR_NO_BREAK_SPACE: "\xA0",
          /* \u00A0 */
          CHAR_PERCENT: '%',
          /* % */
          CHAR_PLUS: '+',
          /* + */
          CHAR_QUESTION_MARK: '?',
          /* ? */
          CHAR_RIGHT_ANGLE_BRACKET: '>',
          /* > */
          CHAR_RIGHT_CURLY_BRACE: '}',
          /* } */
          CHAR_RIGHT_SQUARE_BRACKET: ']',
          /* ] */
          CHAR_SEMICOLON: ';',
          /* ; */
          CHAR_SINGLE_QUOTE: '\'',
          /* ' */
          CHAR_SPACE: ' ',
          /*   */
          CHAR_TAB: '\t',
          /* \t */
          CHAR_UNDERSCORE: '_',
          /* _ */
          CHAR_VERTICAL_LINE: '|',
          /* | */
          CHAR_ZERO_WIDTH_NOBREAK_SPACE: "\uFEFF" /* \uFEFF */
        };

        /***/
      }),
      /***/878: (/***/function _(module) {
        "use strict";

        module.exports = __WEBPACK_EXTERNAL_MODULE__878__;

        /***/
      }),
      /***/929: (/***/function _(module) {
        "use strict";

        /*!
         * is-number <https://github.com/jonschlinkert/is-number>
         *
         * Copyright (c) 2014-present, Jon Schlinkert.
         * Released under the MIT License.
         */
        module.exports = function (num) {
          if (typeof num === 'number') {
            return num - num === 0;
          }
          if (typeof num === 'string' && num.trim() !== '') {
            return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
          }
          return false;
        };

        /***/
      }),
      /***/940: (/***/function _(module, __unused_webpack_exports, __webpack_require__) {
        "use strict";

        var path = __webpack_require__(248);
        var WIN_SLASH = '\\\\/';
        var WIN_NO_SLASH = "[^".concat(WIN_SLASH, "]");

        /**
         * Posix glob regex
         */

        var DOT_LITERAL = '\\.';
        var PLUS_LITERAL = '\\+';
        var QMARK_LITERAL = '\\?';
        var SLASH_LITERAL = '\\/';
        var ONE_CHAR = '(?=.)';
        var QMARK = '[^/]';
        var END_ANCHOR = "(?:".concat(SLASH_LITERAL, "|$)");
        var START_ANCHOR = "(?:^|".concat(SLASH_LITERAL, ")");
        var DOTS_SLASH = "".concat(DOT_LITERAL, "{1,2}").concat(END_ANCHOR);
        var NO_DOT = "(?!".concat(DOT_LITERAL, ")");
        var NO_DOTS = "(?!".concat(START_ANCHOR).concat(DOTS_SLASH, ")");
        var NO_DOT_SLASH = "(?!".concat(DOT_LITERAL, "{0,1}").concat(END_ANCHOR, ")");
        var NO_DOTS_SLASH = "(?!".concat(DOTS_SLASH, ")");
        var QMARK_NO_DOT = "[^.".concat(SLASH_LITERAL, "]");
        var STAR = "".concat(QMARK, "*?");
        var POSIX_CHARS = {
          DOT_LITERAL: DOT_LITERAL,
          PLUS_LITERAL: PLUS_LITERAL,
          QMARK_LITERAL: QMARK_LITERAL,
          SLASH_LITERAL: SLASH_LITERAL,
          ONE_CHAR: ONE_CHAR,
          QMARK: QMARK,
          END_ANCHOR: END_ANCHOR,
          DOTS_SLASH: DOTS_SLASH,
          NO_DOT: NO_DOT,
          NO_DOTS: NO_DOTS,
          NO_DOT_SLASH: NO_DOT_SLASH,
          NO_DOTS_SLASH: NO_DOTS_SLASH,
          QMARK_NO_DOT: QMARK_NO_DOT,
          STAR: STAR,
          START_ANCHOR: START_ANCHOR
        };

        /**
         * Windows glob regex
         */

        var WINDOWS_CHARS = _objectSpread(_objectSpread({}, POSIX_CHARS), {}, {
          SLASH_LITERAL: "[".concat(WIN_SLASH, "]"),
          QMARK: WIN_NO_SLASH,
          STAR: "".concat(WIN_NO_SLASH, "*?"),
          DOTS_SLASH: "".concat(DOT_LITERAL, "{1,2}(?:[").concat(WIN_SLASH, "]|$)"),
          NO_DOT: "(?!".concat(DOT_LITERAL, ")"),
          NO_DOTS: "(?!(?:^|[".concat(WIN_SLASH, "])").concat(DOT_LITERAL, "{1,2}(?:[").concat(WIN_SLASH, "]|$))"),
          NO_DOT_SLASH: "(?!".concat(DOT_LITERAL, "{0,1}(?:[").concat(WIN_SLASH, "]|$))"),
          NO_DOTS_SLASH: "(?!".concat(DOT_LITERAL, "{1,2}(?:[").concat(WIN_SLASH, "]|$))"),
          QMARK_NO_DOT: "[^.".concat(WIN_SLASH, "]"),
          START_ANCHOR: "(?:^|[".concat(WIN_SLASH, "])"),
          END_ANCHOR: "(?:[".concat(WIN_SLASH, "]|$)")
        });

        /**
         * POSIX Bracket Regex
         */

        var POSIX_REGEX_SOURCE = {
          alnum: 'a-zA-Z0-9',
          alpha: 'a-zA-Z',
          ascii: '\\x00-\\x7F',
          blank: ' \\t',
          cntrl: '\\x00-\\x1F\\x7F',
          digit: '0-9',
          graph: '\\x21-\\x7E',
          lower: 'a-z',
          print: '\\x20-\\x7E ',
          punct: '\\-!"#$%&\'()\\*+,./:;<=>?@[\\]^_`{|}~',
          space: ' \\t\\r\\n\\v\\f',
          upper: 'A-Z',
          word: 'A-Za-z0-9_',
          xdigit: 'A-Fa-f0-9'
        };
        module.exports = {
          MAX_LENGTH: 1024 * 64,
          POSIX_REGEX_SOURCE: POSIX_REGEX_SOURCE,
          // regular expressions
          REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
          REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
          REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
          REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
          REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
          REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
          // Replace globs with equivalent patterns to reduce parsing time.
          REPLACEMENTS: {
            '***': '*',
            '**/**': '**',
            '**/**/**': '**'
          },
          // Digits
          CHAR_0: 48,
          /* 0 */
          CHAR_9: 57,
          /* 9 */

          // Alphabet chars.
          CHAR_UPPERCASE_A: 65,
          /* A */
          CHAR_LOWERCASE_A: 97,
          /* a */
          CHAR_UPPERCASE_Z: 90,
          /* Z */
          CHAR_LOWERCASE_Z: 122,
          /* z */

          CHAR_LEFT_PARENTHESES: 40,
          /* ( */
          CHAR_RIGHT_PARENTHESES: 41,
          /* ) */

          CHAR_ASTERISK: 42,
          /* * */

          // Non-alphabetic chars.
          CHAR_AMPERSAND: 38,
          /* & */
          CHAR_AT: 64,
          /* @ */
          CHAR_BACKWARD_SLASH: 92,
          /* \ */
          CHAR_CARRIAGE_RETURN: 13,
          /* \r */
          CHAR_CIRCUMFLEX_ACCENT: 94,
          /* ^ */
          CHAR_COLON: 58,
          /* : */
          CHAR_COMMA: 44,
          /* , */
          CHAR_DOT: 46,
          /* . */
          CHAR_DOUBLE_QUOTE: 34,
          /* " */
          CHAR_EQUAL: 61,
          /* = */
          CHAR_EXCLAMATION_MARK: 33,
          /* ! */
          CHAR_FORM_FEED: 12,
          /* \f */
          CHAR_FORWARD_SLASH: 47,
          /* / */
          CHAR_GRAVE_ACCENT: 96,
          /* ` */
          CHAR_HASH: 35,
          /* # */
          CHAR_HYPHEN_MINUS: 45,
          /* - */
          CHAR_LEFT_ANGLE_BRACKET: 60,
          /* < */
          CHAR_LEFT_CURLY_BRACE: 123,
          /* { */
          CHAR_LEFT_SQUARE_BRACKET: 91,
          /* [ */
          CHAR_LINE_FEED: 10,
          /* \n */
          CHAR_NO_BREAK_SPACE: 160,
          /* \u00A0 */
          CHAR_PERCENT: 37,
          /* % */
          CHAR_PLUS: 43,
          /* + */
          CHAR_QUESTION_MARK: 63,
          /* ? */
          CHAR_RIGHT_ANGLE_BRACKET: 62,
          /* > */
          CHAR_RIGHT_CURLY_BRACE: 125,
          /* } */
          CHAR_RIGHT_SQUARE_BRACKET: 93,
          /* ] */
          CHAR_SEMICOLON: 59,
          /* ; */
          CHAR_SINGLE_QUOTE: 39,
          /* ' */
          CHAR_SPACE: 32,
          /*   */
          CHAR_TAB: 9,
          /* \t */
          CHAR_UNDERSCORE: 95,
          /* _ */
          CHAR_VERTICAL_LINE: 124,
          /* | */
          CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
          /* \uFEFF */

          SEP: path.sep,
          /**
           * Create EXTGLOB_CHARS
           */
          extglobChars: function extglobChars(chars) {
            return {
              '!': {
                type: 'negate',
                open: '(?:(?!(?:',
                close: "))".concat(chars.STAR, ")")
              },
              '?': {
                type: 'qmark',
                open: '(?:',
                close: ')?'
              },
              '+': {
                type: 'plus',
                open: '(?:',
                close: ')+'
              },
              '*': {
                type: 'star',
                open: '(?:',
                close: ')*'
              },
              '@': {
                type: 'at',
                open: '(?:',
                close: ')'
              }
            };
          },
          /**
           * Create GLOB_CHARS
           */
          globChars: function globChars(win32) {
            return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
          }
        };

        /***/
      })

      /******/
    };
    /************************************************************************/
    /******/ // The module cache
    /******/
    var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
      /******/ // Check if module is in cache
      /******/var cachedModule = __webpack_module_cache__[moduleId];
      /******/
      if (cachedModule !== undefined) {
        /******/return cachedModule.exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/
      var module = __webpack_module_cache__[moduleId] = {
        /******/ // no module.id needed
        /******/ // no module.loaded needed
        /******/exports: {}
        /******/
      };
      /******/
      /******/ // Execute the module function
      /******/
      __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
      /******/
      /******/ // Return the exports of the module
      /******/
      return module.exports;
      /******/
    }
    /******/
    /************************************************************************/
    /******/
    /******/ // startup
    /******/ // Load entry module and return exports
    /******/ // This entry module used 'module' so it can't be inlined
    /******/
    var __webpack_exports__ = __webpack_require__(97);
    /******/
    /******/
    return __webpack_exports__;
    /******/
  }();
});

})();