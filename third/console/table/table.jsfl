(function(){
 "use strict";


  // 7.3.21
  function EnumerableOwnProperties(o, kind) {
    var ownKeys = Object.keys(o);
    var properties = [];
    ownKeys.forEach(function (key) {
      var desc = Object.getOwnPropertyDescriptor(o, key);
      if (desc && desc.enumerable) {
        if (kind === 'key') properties.push(key);
        else {
          var value = o[key];
          if (kind === 'value') properties.push(value);
          else properties.push([key, value]);
        }
      }
    });
    return properties;
  }

  //----------------------------------------------------------------------
  // 19 Fundamental Objects
  //----------------------------------------------------------------------

  // 19.1 Object Objects
  // 19.1.2 Properties of the Object Constructor

  // 19.1.2.5 Object.entries
  define(Object, 'entries', function entries(o) {
    var obj = ToObject(o);
    return EnumerableOwnProperties(obj, 'key+value');
  });

var _excluded = ["row"],
  _excluded2 = ["content"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
    g.table = f();
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
      // shim for using process in browser
      var process = module.exports = {};

      // cached from whatever global is present so that test runners that stub it
      // don't break things.  But we need to wrap it in a try catch in case it is
      // wrapped in strict mode code which doesn't define any globals.  It's inside a
      // function because try/catches deoptimize in certain engines.

      var cachedSetTimeout;
      var cachedClearTimeout;
      function defaultSetTimout() {
        throw new Error('setTimeout has not been defined');
      }
      function defaultClearTimeout() {
        throw new Error('clearTimeout has not been defined');
      }
      (function () {
        try {
          if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          //normal enviroments in sane situations
          return setTimeout(fun, 0);
        }
        // if setTimeout wasn't available but was latter defined
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          //normal enviroments in sane situations
          return clearTimeout(marker);
        }
        // if clearTimeout wasn't available but was latter defined
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          // when when somebody has screwed with setTimeout but no I.E. maddness
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;
      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }
      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }
      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };

      // v8 likes predictible objects
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };
      process.title = 'browser';
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = ''; // empty string to avoid regexp issues
      process.versions = {};
      function noop() {}
      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;
      process.listeners = function (name) {
        return [];
      };
      process.binding = function (name) {
        throw new Error('process.binding is not supported');
      };
      process.cwd = function () {
        return '/';
      };
      process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
      };
      process.umask = function () {
        return 0;
      };
    }, {}],
    2: [function (require, module, exports) {
      /*
      npx browserify entry.js -o dist/table.js --standalone table
      npx babel dist/table.js --out-file dist/table.jsfl
       */
      module.exports = require('table');
    }, {
      "table": 33
    }],
    3: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      // https://github.com/ajv-validator/ajv/issues/889
      var equal = require("fast-deep-equal");
      equal.code = 'require("ajv/dist/runtime/equal").default';
      exports.default = equal;
    }, {
      "fast-deep-equal": 12
    }],
    4: [function (require, module, exports) {
      'use strict';

      module.exports = function () {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$onlyFirst = _ref.onlyFirst,
          onlyFirst = _ref$onlyFirst === void 0 ? false : _ref$onlyFirst;
        var pattern = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'].join('|');
        return new RegExp(pattern, onlyFirst ? undefined : 'g');
      };
    }, {}],
    5: [function (require, module, exports) {
      'use strict';

      var wrapAnsi16 = function wrapAnsi16(fn, offset) {
        return function () {
          var code = fn.apply(void 0, arguments);
          return "\x1B[".concat(code + offset, "m");
        };
      };
      var wrapAnsi256 = function wrapAnsi256(fn, offset) {
        return function () {
          var code = fn.apply(void 0, arguments);
          return "\x1B[".concat(38 + offset, ";5;").concat(code, "m");
        };
      };
      var wrapAnsi16m = function wrapAnsi16m(fn, offset) {
        return function () {
          var rgb = fn.apply(void 0, arguments);
          return "\x1B[".concat(38 + offset, ";2;").concat(rgb[0], ";").concat(rgb[1], ";").concat(rgb[2], "m");
        };
      };
      var ansi2ansi = function ansi2ansi(n) {
        return n;
      };
      var rgb2rgb = function rgb2rgb(r, g, b) {
        return [r, g, b];
      };
      var setLazyProperty = function setLazyProperty(object, property, _get) {
        Object.defineProperty(object, property, {
          get: function get() {
            var value = _get();
            Object.defineProperty(object, property, {
              value: value,
              enumerable: true,
              configurable: true
            });
            return value;
          },
          enumerable: true,
          configurable: true
        });
      };

      /** @type {typeof import('color-convert')} */
      var colorConvert;
      var makeDynamicStyles = function makeDynamicStyles(wrap, targetSpace, identity, isBackground) {
        if (colorConvert === undefined) {
          colorConvert = require('color-convert');
        }
        var offset = isBackground ? 10 : 0;
        var styles = {};
        for (var _i = 0, _Object$entries = Object.entries(colorConvert); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            sourceSpace = _Object$entries$_i[0],
            suite = _Object$entries$_i[1];
          var name = sourceSpace === 'ansi16' ? 'ansi' : sourceSpace;
          if (sourceSpace === targetSpace) {
            styles[name] = wrap(identity, offset);
          } else if (_typeof(suite) === 'object') {
            styles[name] = wrap(suite[targetSpace], offset);
          }
        }
        return styles;
      };
      function assembleStyles() {
        var codes = new Map();
        var styles = {
          modifier: {
            reset: [0, 0],
            // 21 isn't widely supported and 22 does the same thing
            bold: [1, 22],
            dim: [2, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            hidden: [8, 28],
            strikethrough: [9, 29]
          },
          color: {
            black: [30, 39],
            red: [31, 39],
            green: [32, 39],
            yellow: [33, 39],
            blue: [34, 39],
            magenta: [35, 39],
            cyan: [36, 39],
            white: [37, 39],
            // Bright color
            blackBright: [90, 39],
            redBright: [91, 39],
            greenBright: [92, 39],
            yellowBright: [93, 39],
            blueBright: [94, 39],
            magentaBright: [95, 39],
            cyanBright: [96, 39],
            whiteBright: [97, 39]
          },
          bgColor: {
            bgBlack: [40, 49],
            bgRed: [41, 49],
            bgGreen: [42, 49],
            bgYellow: [43, 49],
            bgBlue: [44, 49],
            bgMagenta: [45, 49],
            bgCyan: [46, 49],
            bgWhite: [47, 49],
            // Bright color
            bgBlackBright: [100, 49],
            bgRedBright: [101, 49],
            bgGreenBright: [102, 49],
            bgYellowBright: [103, 49],
            bgBlueBright: [104, 49],
            bgMagentaBright: [105, 49],
            bgCyanBright: [106, 49],
            bgWhiteBright: [107, 49]
          }
        };

        // Alias bright black as gray (and grey)
        styles.color.gray = styles.color.blackBright;
        styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
        styles.color.grey = styles.color.blackBright;
        styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
        for (var _i2 = 0, _Object$entries2 = Object.entries(styles); _i2 < _Object$entries2.length; _i2++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            groupName = _Object$entries2$_i[0],
            group = _Object$entries2$_i[1];
          for (var _i3 = 0, _Object$entries3 = Object.entries(group); _i3 < _Object$entries3.length; _i3++) {
            var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
              styleName = _Object$entries3$_i[0],
              style = _Object$entries3$_i[1];
            styles[styleName] = {
              open: "\x1B[".concat(style[0], "m"),
              close: "\x1B[".concat(style[1], "m")
            };
            group[styleName] = styles[styleName];
            codes.set(style[0], style[1]);
          }
          Object.defineProperty(styles, groupName, {
            value: group,
            enumerable: false
          });
        }
        Object.defineProperty(styles, 'codes', {
          value: codes,
          enumerable: false
        });
        styles.color.close = "\x1B[39m";
        styles.bgColor.close = "\x1B[49m";
        setLazyProperty(styles.color, 'ansi', function () {
          return makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, false);
        });
        setLazyProperty(styles.color, 'ansi256', function () {
          return makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, false);
        });
        setLazyProperty(styles.color, 'ansi16m', function () {
          return makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, false);
        });
        setLazyProperty(styles.bgColor, 'ansi', function () {
          return makeDynamicStyles(wrapAnsi16, 'ansi16', ansi2ansi, true);
        });
        setLazyProperty(styles.bgColor, 'ansi256', function () {
          return makeDynamicStyles(wrapAnsi256, 'ansi256', ansi2ansi, true);
        });
        setLazyProperty(styles.bgColor, 'ansi16m', function () {
          return makeDynamicStyles(wrapAnsi16m, 'rgb', rgb2rgb, true);
        });
        return styles;
      }

      // Make the export immutable
      Object.defineProperty(module, 'exports', {
        enumerable: true,
        get: assembleStyles
      });
    }, {
      "color-convert": 8
    }],
    6: [function (require, module, exports) {
      'use strict';

      var regex = "[\uD800-\uDBFF][\uDC00-\uDFFF]";
      var astralRegex = function astralRegex(options) {
        return options && options.exact ? new RegExp("^".concat(regex, "$")) : new RegExp(regex, 'g');
      };
      module.exports = astralRegex;
    }, {}],
    7: [function (require, module, exports) {
      /* MIT license */
      /* eslint-disable no-mixed-operators */
      var cssKeywords = require('color-name');

      // NOTE: conversions should only return primitive values (i.e. arrays, or
      //       values that give correct `typeof` results).
      //       do not use box values types (i.e. Number(), String(), etc.)

      var reverseKeywords = {};
      for (var _i4 = 0, _Object$keys = Object.keys(cssKeywords); _i4 < _Object$keys.length; _i4++) {
        var key = _Object$keys[_i4];
        reverseKeywords[cssKeywords[key]] = key;
      }
      var convert = {
        rgb: {
          channels: 3,
          labels: 'rgb'
        },
        hsl: {
          channels: 3,
          labels: 'hsl'
        },
        hsv: {
          channels: 3,
          labels: 'hsv'
        },
        hwb: {
          channels: 3,
          labels: 'hwb'
        },
        cmyk: {
          channels: 4,
          labels: 'cmyk'
        },
        xyz: {
          channels: 3,
          labels: 'xyz'
        },
        lab: {
          channels: 3,
          labels: 'lab'
        },
        lch: {
          channels: 3,
          labels: 'lch'
        },
        hex: {
          channels: 1,
          labels: ['hex']
        },
        keyword: {
          channels: 1,
          labels: ['keyword']
        },
        ansi16: {
          channels: 1,
          labels: ['ansi16']
        },
        ansi256: {
          channels: 1,
          labels: ['ansi256']
        },
        hcg: {
          channels: 3,
          labels: ['h', 'c', 'g']
        },
        apple: {
          channels: 3,
          labels: ['r16', 'g16', 'b16']
        },
        gray: {
          channels: 1,
          labels: ['gray']
        }
      };
      module.exports = convert;

      // Hide .channels and .labels properties
      for (var _i5 = 0, _Object$keys2 = Object.keys(convert); _i5 < _Object$keys2.length; _i5++) {
        var model = _Object$keys2[_i5];
        if (!('channels' in convert[model])) {
          throw new Error('missing channels property: ' + model);
        }
        if (!('labels' in convert[model])) {
          throw new Error('missing channel labels property: ' + model);
        }
        if (convert[model].labels.length !== convert[model].channels) {
          throw new Error('channel and label counts mismatch: ' + model);
        }
        var _convert$model = convert[model],
          channels = _convert$model.channels,
          labels = _convert$model.labels;
        delete convert[model].channels;
        delete convert[model].labels;
        Object.defineProperty(convert[model], 'channels', {
          value: channels
        });
        Object.defineProperty(convert[model], 'labels', {
          value: labels
        });
      }
      convert.rgb.hsl = function (rgb) {
        var r = rgb[0] / 255;
        var g = rgb[1] / 255;
        var b = rgb[2] / 255;
        var min = Math.min(r, g, b);
        var max = Math.max(r, g, b);
        var delta = max - min;
        var h;
        var s;
        if (max === min) {
          h = 0;
        } else if (r === max) {
          h = (g - b) / delta;
        } else if (g === max) {
          h = 2 + (b - r) / delta;
        } else if (b === max) {
          h = 4 + (r - g) / delta;
        }
        h = Math.min(h * 60, 360);
        if (h < 0) {
          h += 360;
        }
        var l = (min + max) / 2;
        if (max === min) {
          s = 0;
        } else if (l <= 0.5) {
          s = delta / (max + min);
        } else {
          s = delta / (2 - max - min);
        }
        return [h, s * 100, l * 100];
      };
      convert.rgb.hsv = function (rgb) {
        var rdif;
        var gdif;
        var bdif;
        var h;
        var s;
        var r = rgb[0] / 255;
        var g = rgb[1] / 255;
        var b = rgb[2] / 255;
        var v = Math.max(r, g, b);
        var diff = v - Math.min(r, g, b);
        var diffc = function diffc(c) {
          return (v - c) / 6 / diff + 1 / 2;
        };
        if (diff === 0) {
          h = 0;
          s = 0;
        } else {
          s = diff / v;
          rdif = diffc(r);
          gdif = diffc(g);
          bdif = diffc(b);
          if (r === v) {
            h = bdif - gdif;
          } else if (g === v) {
            h = 1 / 3 + rdif - bdif;
          } else if (b === v) {
            h = 2 / 3 + gdif - rdif;
          }
          if (h < 0) {
            h += 1;
          } else if (h > 1) {
            h -= 1;
          }
        }
        return [h * 360, s * 100, v * 100];
      };
      convert.rgb.hwb = function (rgb) {
        var r = rgb[0];
        var g = rgb[1];
        var b = rgb[2];
        var h = convert.rgb.hsl(rgb)[0];
        var w = 1 / 255 * Math.min(r, Math.min(g, b));
        b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
        return [h, w * 100, b * 100];
      };
      convert.rgb.cmyk = function (rgb) {
        var r = rgb[0] / 255;
        var g = rgb[1] / 255;
        var b = rgb[2] / 255;
        var k = Math.min(1 - r, 1 - g, 1 - b);
        var c = (1 - r - k) / (1 - k) || 0;
        var m = (1 - g - k) / (1 - k) || 0;
        var y = (1 - b - k) / (1 - k) || 0;
        return [c * 100, m * 100, y * 100, k * 100];
      };
      function comparativeDistance(x, y) {
        /*
        	See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
        */
        return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
      }
      convert.rgb.keyword = function (rgb) {
        var reversed = reverseKeywords[rgb];
        if (reversed) {
          return reversed;
        }
        var currentClosestDistance = Infinity;
        var currentClosestKeyword;
        for (var _i6 = 0, _Object$keys3 = Object.keys(cssKeywords); _i6 < _Object$keys3.length; _i6++) {
          var keyword = _Object$keys3[_i6];
          var value = cssKeywords[keyword];

          // Compute comparative distance
          var distance = comparativeDistance(rgb, value);

          // Check if its less, if so set as closest
          if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
          }
        }
        return currentClosestKeyword;
      };
      convert.keyword.rgb = function (keyword) {
        return cssKeywords[keyword];
      };
      convert.rgb.xyz = function (rgb) {
        var r = rgb[0] / 255;
        var g = rgb[1] / 255;
        var b = rgb[2] / 255;

        // Assume sRGB
        r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
        g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
        b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
        var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
        var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
        var z = r * 0.0193 + g * 0.1192 + b * 0.9505;
        return [x * 100, y * 100, z * 100];
      };
      convert.rgb.lab = function (rgb) {
        var xyz = convert.rgb.xyz(rgb);
        var x = xyz[0];
        var y = xyz[1];
        var z = xyz[2];
        x /= 95.047;
        y /= 100;
        z /= 108.883;
        x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
        y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
        z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
        var l = 116 * y - 16;
        var a = 500 * (x - y);
        var b = 200 * (y - z);
        return [l, a, b];
      };
      convert.hsl.rgb = function (hsl) {
        var h = hsl[0] / 360;
        var s = hsl[1] / 100;
        var l = hsl[2] / 100;
        var t2;
        var t3;
        var val;
        if (s === 0) {
          val = l * 255;
          return [val, val, val];
        }
        if (l < 0.5) {
          t2 = l * (1 + s);
        } else {
          t2 = l + s - l * s;
        }
        var t1 = 2 * l - t2;
        var rgb = [0, 0, 0];
        for (var i = 0; i < 3; i++) {
          t3 = h + 1 / 3 * -(i - 1);
          if (t3 < 0) {
            t3++;
          }
          if (t3 > 1) {
            t3--;
          }
          if (6 * t3 < 1) {
            val = t1 + (t2 - t1) * 6 * t3;
          } else if (2 * t3 < 1) {
            val = t2;
          } else if (3 * t3 < 2) {
            val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
          } else {
            val = t1;
          }
          rgb[i] = val * 255;
        }
        return rgb;
      };
      convert.hsl.hsv = function (hsl) {
        var h = hsl[0];
        var s = hsl[1] / 100;
        var l = hsl[2] / 100;
        var smin = s;
        var lmin = Math.max(l, 0.01);
        l *= 2;
        s *= l <= 1 ? l : 2 - l;
        smin *= lmin <= 1 ? lmin : 2 - lmin;
        var v = (l + s) / 2;
        var sv = l === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l + s);
        return [h, sv * 100, v * 100];
      };
      convert.hsv.rgb = function (hsv) {
        var h = hsv[0] / 60;
        var s = hsv[1] / 100;
        var v = hsv[2] / 100;
        var hi = Math.floor(h) % 6;
        var f = h - Math.floor(h);
        var p = 255 * v * (1 - s);
        var q = 255 * v * (1 - s * f);
        var t = 255 * v * (1 - s * (1 - f));
        v *= 255;
        switch (hi) {
          case 0:
            return [v, t, p];
          case 1:
            return [q, v, p];
          case 2:
            return [p, v, t];
          case 3:
            return [p, q, v];
          case 4:
            return [t, p, v];
          case 5:
            return [v, p, q];
        }
      };
      convert.hsv.hsl = function (hsv) {
        var h = hsv[0];
        var s = hsv[1] / 100;
        var v = hsv[2] / 100;
        var vmin = Math.max(v, 0.01);
        var sl;
        var l;
        l = (2 - s) * v;
        var lmin = (2 - s) * vmin;
        sl = s * vmin;
        sl /= lmin <= 1 ? lmin : 2 - lmin;
        sl = sl || 0;
        l /= 2;
        return [h, sl * 100, l * 100];
      };

      // http://dev.w3.org/csswg/css-color/#hwb-to-rgb
      convert.hwb.rgb = function (hwb) {
        var h = hwb[0] / 360;
        var wh = hwb[1] / 100;
        var bl = hwb[2] / 100;
        var ratio = wh + bl;
        var f;

        // Wh + bl cant be > 1
        if (ratio > 1) {
          wh /= ratio;
          bl /= ratio;
        }
        var i = Math.floor(6 * h);
        var v = 1 - bl;
        f = 6 * h - i;
        if ((i & 0x01) !== 0) {
          f = 1 - f;
        }
        var n = wh + f * (v - wh); // Linear interpolation

        var r;
        var g;
        var b;
        /* eslint-disable max-statements-per-line,no-multi-spaces */
        switch (i) {
          default:
          case 6:
          case 0:
            r = v;
            g = n;
            b = wh;
            break;
          case 1:
            r = n;
            g = v;
            b = wh;
            break;
          case 2:
            r = wh;
            g = v;
            b = n;
            break;
          case 3:
            r = wh;
            g = n;
            b = v;
            break;
          case 4:
            r = n;
            g = wh;
            b = v;
            break;
          case 5:
            r = v;
            g = wh;
            b = n;
            break;
        }
        /* eslint-enable max-statements-per-line,no-multi-spaces */

        return [r * 255, g * 255, b * 255];
      };
      convert.cmyk.rgb = function (cmyk) {
        var c = cmyk[0] / 100;
        var m = cmyk[1] / 100;
        var y = cmyk[2] / 100;
        var k = cmyk[3] / 100;
        var r = 1 - Math.min(1, c * (1 - k) + k);
        var g = 1 - Math.min(1, m * (1 - k) + k);
        var b = 1 - Math.min(1, y * (1 - k) + k);
        return [r * 255, g * 255, b * 255];
      };
      convert.xyz.rgb = function (xyz) {
        var x = xyz[0] / 100;
        var y = xyz[1] / 100;
        var z = xyz[2] / 100;
        var r;
        var g;
        var b;
        r = x * 3.2406 + y * -1.5372 + z * -0.4986;
        g = x * -0.9689 + y * 1.8758 + z * 0.0415;
        b = x * 0.0557 + y * -0.2040 + z * 1.0570;

        // Assume sRGB
        r = r > 0.0031308 ? 1.055 * Math.pow(r, 1.0 / 2.4) - 0.055 : r * 12.92;
        g = g > 0.0031308 ? 1.055 * Math.pow(g, 1.0 / 2.4) - 0.055 : g * 12.92;
        b = b > 0.0031308 ? 1.055 * Math.pow(b, 1.0 / 2.4) - 0.055 : b * 12.92;
        r = Math.min(Math.max(0, r), 1);
        g = Math.min(Math.max(0, g), 1);
        b = Math.min(Math.max(0, b), 1);
        return [r * 255, g * 255, b * 255];
      };
      convert.xyz.lab = function (xyz) {
        var x = xyz[0];
        var y = xyz[1];
        var z = xyz[2];
        x /= 95.047;
        y /= 100;
        z /= 108.883;
        x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
        y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
        z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
        var l = 116 * y - 16;
        var a = 500 * (x - y);
        var b = 200 * (y - z);
        return [l, a, b];
      };
      convert.lab.xyz = function (lab) {
        var l = lab[0];
        var a = lab[1];
        var b = lab[2];
        var x;
        var y;
        var z;
        y = (l + 16) / 116;
        x = a / 500 + y;
        z = y - b / 200;
        var y2 = Math.pow(y, 3);
        var x2 = Math.pow(x, 3);
        var z2 = Math.pow(z, 3);
        y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
        x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
        z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
        x *= 95.047;
        y *= 100;
        z *= 108.883;
        return [x, y, z];
      };
      convert.lab.lch = function (lab) {
        var l = lab[0];
        var a = lab[1];
        var b = lab[2];
        var h;
        var hr = Math.atan2(b, a);
        h = hr * 360 / 2 / Math.PI;
        if (h < 0) {
          h += 360;
        }
        var c = Math.sqrt(a * a + b * b);
        return [l, c, h];
      };
      convert.lch.lab = function (lch) {
        var l = lch[0];
        var c = lch[1];
        var h = lch[2];
        var hr = h / 360 * 2 * Math.PI;
        var a = c * Math.cos(hr);
        var b = c * Math.sin(hr);
        return [l, a, b];
      };
      convert.rgb.ansi16 = function (args) {
        var saturation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var _args = _slicedToArray(args, 3),
          r = _args[0],
          g = _args[1],
          b = _args[2];
        var value = saturation === null ? convert.rgb.hsv(args)[2] : saturation; // Hsv -> ansi16 optimization

        value = Math.round(value / 50);
        if (value === 0) {
          return 30;
        }
        var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r / 255));
        if (value === 2) {
          ansi += 60;
        }
        return ansi;
      };
      convert.hsv.ansi16 = function (args) {
        // Optimization here; we already know the value and don't need to get
        // it converted for us.
        return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
      };
      convert.rgb.ansi256 = function (args) {
        var r = args[0];
        var g = args[1];
        var b = args[2];

        // We use the extended greyscale palette here, with the exception of
        // black and white. normal palette only has 4 greyscale shades.
        if (r === g && g === b) {
          if (r < 8) {
            return 16;
          }
          if (r > 248) {
            return 231;
          }
          return Math.round((r - 8) / 247 * 24) + 232;
        }
        var ansi = 16 + 36 * Math.round(r / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
        return ansi;
      };
      convert.ansi16.rgb = function (args) {
        var color = args % 10;

        // Handle greyscale
        if (color === 0 || color === 7) {
          if (args > 50) {
            color += 3.5;
          }
          color = color / 10.5 * 255;
          return [color, color, color];
        }
        var mult = (~~(args > 50) + 1) * 0.5;
        var r = (color & 1) * mult * 255;
        var g = (color >> 1 & 1) * mult * 255;
        var b = (color >> 2 & 1) * mult * 255;
        return [r, g, b];
      };
      convert.ansi256.rgb = function (args) {
        // Handle greyscale
        if (args >= 232) {
          var c = (args - 232) * 10 + 8;
          return [c, c, c];
        }
        args -= 16;
        var rem;
        var r = Math.floor(args / 36) / 5 * 255;
        var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
        var b = rem % 6 / 5 * 255;
        return [r, g, b];
      };
      convert.rgb.hex = function (args) {
        var integer = ((Math.round(args[0]) & 0xFF) << 16) + ((Math.round(args[1]) & 0xFF) << 8) + (Math.round(args[2]) & 0xFF);
        var string = integer.toString(16).toUpperCase();
        return '000000'.substring(string.length) + string;
      };
      convert.hex.rgb = function (args) {
        var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
        if (!match) {
          return [0, 0, 0];
        }
        var colorString = match[0];
        if (match[0].length === 3) {
          colorString = colorString.split('').map(function (char) {
            return char + char;
          }).join('');
        }
        var integer = parseInt(colorString, 16);
        var r = integer >> 16 & 0xFF;
        var g = integer >> 8 & 0xFF;
        var b = integer & 0xFF;
        return [r, g, b];
      };
      convert.rgb.hcg = function (rgb) {
        var r = rgb[0] / 255;
        var g = rgb[1] / 255;
        var b = rgb[2] / 255;
        var max = Math.max(Math.max(r, g), b);
        var min = Math.min(Math.min(r, g), b);
        var chroma = max - min;
        var grayscale;
        var hue;
        if (chroma < 1) {
          grayscale = min / (1 - chroma);
        } else {
          grayscale = 0;
        }
        if (chroma <= 0) {
          hue = 0;
        } else if (max === r) {
          hue = (g - b) / chroma % 6;
        } else if (max === g) {
          hue = 2 + (b - r) / chroma;
        } else {
          hue = 4 + (r - g) / chroma;
        }
        hue /= 6;
        hue %= 1;
        return [hue * 360, chroma * 100, grayscale * 100];
      };
      convert.hsl.hcg = function (hsl) {
        var s = hsl[1] / 100;
        var l = hsl[2] / 100;
        var c = l < 0.5 ? 2.0 * s * l : 2.0 * s * (1.0 - l);
        var f = 0;
        if (c < 1.0) {
          f = (l - 0.5 * c) / (1.0 - c);
        }
        return [hsl[0], c * 100, f * 100];
      };
      convert.hsv.hcg = function (hsv) {
        var s = hsv[1] / 100;
        var v = hsv[2] / 100;
        var c = s * v;
        var f = 0;
        if (c < 1.0) {
          f = (v - c) / (1 - c);
        }
        return [hsv[0], c * 100, f * 100];
      };
      convert.hcg.rgb = function (hcg) {
        var h = hcg[0] / 360;
        var c = hcg[1] / 100;
        var g = hcg[2] / 100;
        if (c === 0.0) {
          return [g * 255, g * 255, g * 255];
        }
        var pure = [0, 0, 0];
        var hi = h % 1 * 6;
        var v = hi % 1;
        var w = 1 - v;
        var mg = 0;

        /* eslint-disable max-statements-per-line */
        switch (Math.floor(hi)) {
          case 0:
            pure[0] = 1;
            pure[1] = v;
            pure[2] = 0;
            break;
          case 1:
            pure[0] = w;
            pure[1] = 1;
            pure[2] = 0;
            break;
          case 2:
            pure[0] = 0;
            pure[1] = 1;
            pure[2] = v;
            break;
          case 3:
            pure[0] = 0;
            pure[1] = w;
            pure[2] = 1;
            break;
          case 4:
            pure[0] = v;
            pure[1] = 0;
            pure[2] = 1;
            break;
          default:
            pure[0] = 1;
            pure[1] = 0;
            pure[2] = w;
        }
        /* eslint-enable max-statements-per-line */

        mg = (1.0 - c) * g;
        return [(c * pure[0] + mg) * 255, (c * pure[1] + mg) * 255, (c * pure[2] + mg) * 255];
      };
      convert.hcg.hsv = function (hcg) {
        var c = hcg[1] / 100;
        var g = hcg[2] / 100;
        var v = c + g * (1.0 - c);
        var f = 0;
        if (v > 0.0) {
          f = c / v;
        }
        return [hcg[0], f * 100, v * 100];
      };
      convert.hcg.hsl = function (hcg) {
        var c = hcg[1] / 100;
        var g = hcg[2] / 100;
        var l = g * (1.0 - c) + 0.5 * c;
        var s = 0;
        if (l > 0.0 && l < 0.5) {
          s = c / (2 * l);
        } else if (l >= 0.5 && l < 1.0) {
          s = c / (2 * (1 - l));
        }
        return [hcg[0], s * 100, l * 100];
      };
      convert.hcg.hwb = function (hcg) {
        var c = hcg[1] / 100;
        var g = hcg[2] / 100;
        var v = c + g * (1.0 - c);
        return [hcg[0], (v - c) * 100, (1 - v) * 100];
      };
      convert.hwb.hcg = function (hwb) {
        var w = hwb[1] / 100;
        var b = hwb[2] / 100;
        var v = 1 - b;
        var c = v - w;
        var g = 0;
        if (c < 1) {
          g = (v - c) / (1 - c);
        }
        return [hwb[0], c * 100, g * 100];
      };
      convert.apple.rgb = function (apple) {
        return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
      };
      convert.rgb.apple = function (rgb) {
        return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
      };
      convert.gray.rgb = function (args) {
        return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
      };
      convert.gray.hsl = function (args) {
        return [0, 0, args[0]];
      };
      convert.gray.hsv = convert.gray.hsl;
      convert.gray.hwb = function (gray) {
        return [0, 100, gray[0]];
      };
      convert.gray.cmyk = function (gray) {
        return [0, 0, 0, gray[0]];
      };
      convert.gray.lab = function (gray) {
        return [gray[0], 0, 0];
      };
      convert.gray.hex = function (gray) {
        var val = Math.round(gray[0] / 100 * 255) & 0xFF;
        var integer = (val << 16) + (val << 8) + val;
        var string = integer.toString(16).toUpperCase();
        return '000000'.substring(string.length) + string;
      };
      convert.rgb.gray = function (rgb) {
        var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
        return [val / 255 * 100];
      };
    }, {
      "color-name": 10
    }],
    8: [function (require, module, exports) {
      var conversions = require('./conversions');
      var route = require('./route');
      var convert = {};
      var models = Object.keys(conversions);
      function wrapRaw(fn) {
        var wrappedFn = function wrappedFn() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var arg0 = args[0];
          if (arg0 === undefined || arg0 === null) {
            return arg0;
          }
          if (arg0.length > 1) {
            args = arg0;
          }
          return fn(args);
        };

        // Preserve .conversion property if there is one
        if ('conversion' in fn) {
          wrappedFn.conversion = fn.conversion;
        }
        return wrappedFn;
      }
      function wrapRounded(fn) {
        var wrappedFn = function wrappedFn() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          var arg0 = args[0];
          if (arg0 === undefined || arg0 === null) {
            return arg0;
          }
          if (arg0.length > 1) {
            args = arg0;
          }
          var result = fn(args);

          // We're assuming the result is an array here.
          // see notice in conversions.js; don't use box types
          // in conversion functions.
          if (_typeof(result) === 'object') {
            for (var len = result.length, i = 0; i < len; i++) {
              result[i] = Math.round(result[i]);
            }
          }
          return result;
        };

        // Preserve .conversion property if there is one
        if ('conversion' in fn) {
          wrappedFn.conversion = fn.conversion;
        }
        return wrappedFn;
      }
      models.forEach(function (fromModel) {
        convert[fromModel] = {};
        Object.defineProperty(convert[fromModel], 'channels', {
          value: conversions[fromModel].channels
        });
        Object.defineProperty(convert[fromModel], 'labels', {
          value: conversions[fromModel].labels
        });
        var routes = route(fromModel);
        var routeModels = Object.keys(routes);
        routeModels.forEach(function (toModel) {
          var fn = routes[toModel];
          convert[fromModel][toModel] = wrapRounded(fn);
          convert[fromModel][toModel].raw = wrapRaw(fn);
        });
      });
      module.exports = convert;
    }, {
      "./conversions": 7,
      "./route": 9
    }],
    9: [function (require, module, exports) {
      var conversions = require('./conversions');

      /*
      	This function routes a model to all other models.
      
      	all functions that are routed have a property `.conversion` attached
      	to the returned synthetic function. This property is an array
      	of strings, each with the steps in between the 'from' and 'to'
      	color models (inclusive).
      
      	conversions that are not possible simply are not included.
      */

      function buildGraph() {
        var graph = {};
        // https://jsperf.com/object-keys-vs-for-in-with-closure/3
        var models = Object.keys(conversions);
        for (var len = models.length, i = 0; i < len; i++) {
          graph[models[i]] = {
            // http://jsperf.com/1-vs-infinity
            // micro-opt, but this is simple.
            distance: -1,
            parent: null
          };
        }
        return graph;
      }

      // https://en.wikipedia.org/wiki/Breadth-first_search
      function deriveBFS(fromModel) {
        var graph = buildGraph();
        var queue = [fromModel]; // Unshift -> queue -> pop

        graph[fromModel].distance = 0;
        while (queue.length) {
          var current = queue.pop();
          var adjacents = Object.keys(conversions[current]);
          for (var len = adjacents.length, i = 0; i < len; i++) {
            var adjacent = adjacents[i];
            var node = graph[adjacent];
            if (node.distance === -1) {
              node.distance = graph[current].distance + 1;
              node.parent = current;
              queue.unshift(adjacent);
            }
          }
        }
        return graph;
      }
      function link(from, to) {
        return function (args) {
          return to(from(args));
        };
      }
      function wrapConversion(toModel, graph) {
        var path = [graph[toModel].parent, toModel];
        var fn = conversions[graph[toModel].parent][toModel];
        var cur = graph[toModel].parent;
        while (graph[cur].parent) {
          path.unshift(graph[cur].parent);
          fn = link(conversions[graph[cur].parent][cur], fn);
          cur = graph[cur].parent;
        }
        fn.conversion = path;
        return fn;
      }
      module.exports = function (fromModel) {
        var graph = deriveBFS(fromModel);
        var conversion = {};
        var models = Object.keys(graph);
        for (var len = models.length, i = 0; i < len; i++) {
          var toModel = models[i];
          var node = graph[toModel];
          if (node.parent === null) {
            // No possible conversion, or this node is the source model.
            continue;
          }
          conversion[toModel] = wrapConversion(toModel, graph);
        }
        return conversion;
      };
    }, {
      "./conversions": 7
    }],
    10: [function (require, module, exports) {
      'use strict';

      module.exports = {
        "aliceblue": [240, 248, 255],
        "antiquewhite": [250, 235, 215],
        "aqua": [0, 255, 255],
        "aquamarine": [127, 255, 212],
        "azure": [240, 255, 255],
        "beige": [245, 245, 220],
        "bisque": [255, 228, 196],
        "black": [0, 0, 0],
        "blanchedalmond": [255, 235, 205],
        "blue": [0, 0, 255],
        "blueviolet": [138, 43, 226],
        "brown": [165, 42, 42],
        "burlywood": [222, 184, 135],
        "cadetblue": [95, 158, 160],
        "chartreuse": [127, 255, 0],
        "chocolate": [210, 105, 30],
        "coral": [255, 127, 80],
        "cornflowerblue": [100, 149, 237],
        "cornsilk": [255, 248, 220],
        "crimson": [220, 20, 60],
        "cyan": [0, 255, 255],
        "darkblue": [0, 0, 139],
        "darkcyan": [0, 139, 139],
        "darkgoldenrod": [184, 134, 11],
        "darkgray": [169, 169, 169],
        "darkgreen": [0, 100, 0],
        "darkgrey": [169, 169, 169],
        "darkkhaki": [189, 183, 107],
        "darkmagenta": [139, 0, 139],
        "darkolivegreen": [85, 107, 47],
        "darkorange": [255, 140, 0],
        "darkorchid": [153, 50, 204],
        "darkred": [139, 0, 0],
        "darksalmon": [233, 150, 122],
        "darkseagreen": [143, 188, 143],
        "darkslateblue": [72, 61, 139],
        "darkslategray": [47, 79, 79],
        "darkslategrey": [47, 79, 79],
        "darkturquoise": [0, 206, 209],
        "darkviolet": [148, 0, 211],
        "deeppink": [255, 20, 147],
        "deepskyblue": [0, 191, 255],
        "dimgray": [105, 105, 105],
        "dimgrey": [105, 105, 105],
        "dodgerblue": [30, 144, 255],
        "firebrick": [178, 34, 34],
        "floralwhite": [255, 250, 240],
        "forestgreen": [34, 139, 34],
        "fuchsia": [255, 0, 255],
        "gainsboro": [220, 220, 220],
        "ghostwhite": [248, 248, 255],
        "gold": [255, 215, 0],
        "goldenrod": [218, 165, 32],
        "gray": [128, 128, 128],
        "green": [0, 128, 0],
        "greenyellow": [173, 255, 47],
        "grey": [128, 128, 128],
        "honeydew": [240, 255, 240],
        "hotpink": [255, 105, 180],
        "indianred": [205, 92, 92],
        "indigo": [75, 0, 130],
        "ivory": [255, 255, 240],
        "khaki": [240, 230, 140],
        "lavender": [230, 230, 250],
        "lavenderblush": [255, 240, 245],
        "lawngreen": [124, 252, 0],
        "lemonchiffon": [255, 250, 205],
        "lightblue": [173, 216, 230],
        "lightcoral": [240, 128, 128],
        "lightcyan": [224, 255, 255],
        "lightgoldenrodyellow": [250, 250, 210],
        "lightgray": [211, 211, 211],
        "lightgreen": [144, 238, 144],
        "lightgrey": [211, 211, 211],
        "lightpink": [255, 182, 193],
        "lightsalmon": [255, 160, 122],
        "lightseagreen": [32, 178, 170],
        "lightskyblue": [135, 206, 250],
        "lightslategray": [119, 136, 153],
        "lightslategrey": [119, 136, 153],
        "lightsteelblue": [176, 196, 222],
        "lightyellow": [255, 255, 224],
        "lime": [0, 255, 0],
        "limegreen": [50, 205, 50],
        "linen": [250, 240, 230],
        "magenta": [255, 0, 255],
        "maroon": [128, 0, 0],
        "mediumaquamarine": [102, 205, 170],
        "mediumblue": [0, 0, 205],
        "mediumorchid": [186, 85, 211],
        "mediumpurple": [147, 112, 219],
        "mediumseagreen": [60, 179, 113],
        "mediumslateblue": [123, 104, 238],
        "mediumspringgreen": [0, 250, 154],
        "mediumturquoise": [72, 209, 204],
        "mediumvioletred": [199, 21, 133],
        "midnightblue": [25, 25, 112],
        "mintcream": [245, 255, 250],
        "mistyrose": [255, 228, 225],
        "moccasin": [255, 228, 181],
        "navajowhite": [255, 222, 173],
        "navy": [0, 0, 128],
        "oldlace": [253, 245, 230],
        "olive": [128, 128, 0],
        "olivedrab": [107, 142, 35],
        "orange": [255, 165, 0],
        "orangered": [255, 69, 0],
        "orchid": [218, 112, 214],
        "palegoldenrod": [238, 232, 170],
        "palegreen": [152, 251, 152],
        "paleturquoise": [175, 238, 238],
        "palevioletred": [219, 112, 147],
        "papayawhip": [255, 239, 213],
        "peachpuff": [255, 218, 185],
        "peru": [205, 133, 63],
        "pink": [255, 192, 203],
        "plum": [221, 160, 221],
        "powderblue": [176, 224, 230],
        "purple": [128, 0, 128],
        "rebeccapurple": [102, 51, 153],
        "red": [255, 0, 0],
        "rosybrown": [188, 143, 143],
        "royalblue": [65, 105, 225],
        "saddlebrown": [139, 69, 19],
        "salmon": [250, 128, 114],
        "sandybrown": [244, 164, 96],
        "seagreen": [46, 139, 87],
        "seashell": [255, 245, 238],
        "sienna": [160, 82, 45],
        "silver": [192, 192, 192],
        "skyblue": [135, 206, 235],
        "slateblue": [106, 90, 205],
        "slategray": [112, 128, 144],
        "slategrey": [112, 128, 144],
        "snow": [255, 250, 250],
        "springgreen": [0, 255, 127],
        "steelblue": [70, 130, 180],
        "tan": [210, 180, 140],
        "teal": [0, 128, 128],
        "thistle": [216, 191, 216],
        "tomato": [255, 99, 71],
        "turquoise": [64, 224, 208],
        "violet": [238, 130, 238],
        "wheat": [245, 222, 179],
        "white": [255, 255, 255],
        "whitesmoke": [245, 245, 245],
        "yellow": [255, 255, 0],
        "yellowgreen": [154, 205, 50]
      };
    }, {}],
    11: [function (require, module, exports) {
      "use strict";

      module.exports = function () {
        // https://mths.be/emoji
        return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
      };
    }, {}],
    12: [function (require, module, exports) {
      'use strict';

      // do not edit .js files directly - edit src/index.jst
      module.exports = function equal(a, b) {
        if (a === b) return true;
        if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
          if (a.constructor !== b.constructor) return false;
          var length, i, keys;
          if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length) return false;
            for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
            return true;
          }
          if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
          if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
          if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
          keys = Object.keys(a);
          length = keys.length;
          if (length !== Object.keys(b).length) return false;
          for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
          for (i = length; i-- !== 0;) {
            var key = keys[i];
            if (!equal(a[key], b[key])) return false;
          }
          return true;
        }

        // true if both NaN, false otherwise
        return a !== a && b !== b;
      };
    }, {}],
    13: [function (require, module, exports) {
      /* eslint-disable yoda */
      'use strict';

      var isFullwidthCodePoint = function isFullwidthCodePoint(codePoint) {
        if (Number.isNaN(codePoint)) {
          return false;
        }

        // Code points are derived from:
        // http://www.unix.org/Public/UNIDATA/EastAsianWidth.txt
        if (codePoint >= 0x1100 && (codePoint <= 0x115F ||
        // Hangul Jamo
        codePoint === 0x2329 ||
        // LEFT-POINTING ANGLE BRACKET
        codePoint === 0x232A ||
        // RIGHT-POINTING ANGLE BRACKET
        // CJK Radicals Supplement .. Enclosed CJK Letters and Months
        0x2E80 <= codePoint && codePoint <= 0x3247 && codePoint !== 0x303F ||
        // Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
        0x3250 <= codePoint && codePoint <= 0x4DBF ||
        // CJK Unified Ideographs .. Yi Radicals
        0x4E00 <= codePoint && codePoint <= 0xA4C6 ||
        // Hangul Jamo Extended-A
        0xA960 <= codePoint && codePoint <= 0xA97C ||
        // Hangul Syllables
        0xAC00 <= codePoint && codePoint <= 0xD7A3 ||
        // CJK Compatibility Ideographs
        0xF900 <= codePoint && codePoint <= 0xFAFF ||
        // Vertical Forms
        0xFE10 <= codePoint && codePoint <= 0xFE19 ||
        // CJK Compatibility Forms .. Small Form Variants
        0xFE30 <= codePoint && codePoint <= 0xFE6B ||
        // Halfwidth and Fullwidth Forms
        0xFF01 <= codePoint && codePoint <= 0xFF60 || 0xFFE0 <= codePoint && codePoint <= 0xFFE6 ||
        // Kana Supplement
        0x1B000 <= codePoint && codePoint <= 0x1B001 ||
        // Enclosed Ideographic Supplement
        0x1F200 <= codePoint && codePoint <= 0x1F251 ||
        // CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
        0x20000 <= codePoint && codePoint <= 0x3FFFD)) {
          return true;
        }
        return false;
      };
      module.exports = isFullwidthCodePoint;
      module.exports.default = isFullwidthCodePoint;
    }, {}],
    14: [function (require, module, exports) {
      (function (global) {
        (function () {
          /**
           * lodash (Custom Build) <https://lodash.com/>
           * Build: `lodash modularize exports="npm" -o ./`
           * Copyright jQuery Foundation and other contributors <https://jquery.org/>
           * Released under MIT license <https://lodash.com/license>
           * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
           * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
           */

          /** Used as default options for `_.truncate`. */
          var DEFAULT_TRUNC_LENGTH = 30,
            DEFAULT_TRUNC_OMISSION = '...';

          /** Used as references for various `Number` constants. */
          var INFINITY = 1 / 0,
            MAX_INTEGER = 1.7976931348623157e+308,
            NAN = 0 / 0;

          /** `Object#toString` result references. */
          var regexpTag = '[object RegExp]',
            symbolTag = '[object Symbol]';

          /** Used to match leading and trailing whitespace. */
          var reTrim = /^\s+|\s+$/g;

          /** Used to match `RegExp` flags from their coerced string values. */
          var reFlags = /\w*$/;

          /** Used to detect bad signed hexadecimal string values. */
          var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

          /** Used to detect binary string values. */
          var reIsBinary = /^0b[01]+$/i;

          /** Used to detect octal string values. */
          var reIsOctal = /^0o[0-7]+$/i;

          /** Used to compose unicode character classes. */
          var rsAstralRange = "\\ud800-\\udfff",
            rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23",
            rsComboSymbolsRange = "\\u20d0-\\u20f0",
            rsVarRange = "\\ufe0e\\ufe0f";

          /** Used to compose unicode capture groups. */
          var rsAstral = '[' + rsAstralRange + ']',
            rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
            rsFitz = "\\ud83c[\\udffb-\\udfff]",
            rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
            rsNonAstral = '[^' + rsAstralRange + ']',
            rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            rsZWJ = "\\u200d";

          /** Used to compose unicode regexes. */
          var reOptMod = rsModifier + '?',
            rsOptVar = '[' + rsVarRange + ']?',
            rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
            rsSeq = rsOptVar + reOptMod + rsOptJoin,
            rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

          /** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
          var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

          /** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
          var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

          /** Built-in method references without a dependency on `root`. */
          var freeParseInt = parseInt;

          /** Detect free variable `global` from Node.js. */
          var freeGlobal = _typeof(global) == 'object' && global && global.Object === Object && global;

          /** Detect free variable `self`. */
          var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;

          /** Used as a reference to the global object. */
          var root = freeGlobal || freeSelf || Function('return this')();

          /** Detect free variable `exports`. */
          var freeExports = _typeof(exports) == 'object' && exports && !exports.nodeType && exports;

          /** Detect free variable `module`. */
          var freeModule = freeExports && _typeof(module) == 'object' && module && !module.nodeType && module;

          /** Detect the popular CommonJS extension `module.exports`. */
          var moduleExports = freeModule && freeModule.exports === freeExports;

          /** Detect free variable `process` from Node.js. */
          var freeProcess = moduleExports && freeGlobal.process;

          /** Used to access faster Node.js helpers. */
          var nodeUtil = function () {
            try {
              return freeProcess && freeProcess.binding('util');
            } catch (e) {}
          }();

          /* Node.js helper references. */
          var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

          /**
           * Gets the size of an ASCII `string`.
           *
           * @private
           * @param {string} string The string inspect.
           * @returns {number} Returns the string size.
           */
          var asciiSize = baseProperty('length');

          /**
           * Converts an ASCII `string` to an array.
           *
           * @private
           * @param {string} string The string to convert.
           * @returns {Array} Returns the converted array.
           */
          function asciiToArray(string) {
            return string.split('');
          }

          /**
           * The base implementation of `_.property` without support for deep paths.
           *
           * @private
           * @param {string} key The key of the property to get.
           * @returns {Function} Returns the new accessor function.
           */
          function baseProperty(key) {
            return function (object) {
              return object == null ? undefined : object[key];
            };
          }

          /**
           * The base implementation of `_.unary` without support for storing metadata.
           *
           * @private
           * @param {Function} func The function to cap arguments for.
           * @returns {Function} Returns the new capped function.
           */
          function baseUnary(func) {
            return function (value) {
              return func(value);
            };
          }

          /**
           * Checks if `string` contains Unicode symbols.
           *
           * @private
           * @param {string} string The string to inspect.
           * @returns {boolean} Returns `true` if a symbol is found, else `false`.
           */
          function hasUnicode(string) {
            return reHasUnicode.test(string);
          }

          /**
           * Gets the number of symbols in `string`.
           *
           * @private
           * @param {string} string The string to inspect.
           * @returns {number} Returns the string size.
           */
          function stringSize(string) {
            return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
          }

          /**
           * Converts `string` to an array.
           *
           * @private
           * @param {string} string The string to convert.
           * @returns {Array} Returns the converted array.
           */
          function stringToArray(string) {
            return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
          }

          /**
           * Gets the size of a Unicode `string`.
           *
           * @private
           * @param {string} string The string inspect.
           * @returns {number} Returns the string size.
           */
          function unicodeSize(string) {
            var result = reUnicode.lastIndex = 0;
            while (reUnicode.test(string)) {
              result++;
            }
            return result;
          }

          /**
           * Converts a Unicode `string` to an array.
           *
           * @private
           * @param {string} string The string to convert.
           * @returns {Array} Returns the converted array.
           */
          function unicodeToArray(string) {
            return string.match(reUnicode) || [];
          }

          /** Used for built-in method references. */
          var objectProto = Object.prototype;

          /**
           * Used to resolve the
           * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
           * of values.
           */
          var objectToString = objectProto.toString;

          /** Built-in value references. */
          var _Symbol = root.Symbol;

          /** Used to convert symbols to primitives and strings. */
          var symbolProto = _Symbol ? _Symbol.prototype : undefined,
            symbolToString = symbolProto ? symbolProto.toString : undefined;

          /**
           * The base implementation of `_.isRegExp` without Node.js optimizations.
           *
           * @private
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
           */
          function baseIsRegExp(value) {
            return isObject(value) && objectToString.call(value) == regexpTag;
          }

          /**
           * The base implementation of `_.slice` without an iteratee call guard.
           *
           * @private
           * @param {Array} array The array to slice.
           * @param {number} [start=0] The start position.
           * @param {number} [end=array.length] The end position.
           * @returns {Array} Returns the slice of `array`.
           */
          function baseSlice(array, start, end) {
            var index = -1,
              length = array.length;
            if (start < 0) {
              start = -start > length ? 0 : length + start;
            }
            end = end > length ? length : end;
            if (end < 0) {
              end += length;
            }
            length = start > end ? 0 : end - start >>> 0;
            start >>>= 0;
            var result = Array(length);
            while (++index < length) {
              result[index] = array[index + start];
            }
            return result;
          }

          /**
           * The base implementation of `_.toString` which doesn't convert nullish
           * values to empty strings.
           *
           * @private
           * @param {*} value The value to process.
           * @returns {string} Returns the string.
           */
          function baseToString(value) {
            // Exit early for strings to avoid a performance hit in some environments.
            if (typeof value == 'string') {
              return value;
            }
            if (isSymbol(value)) {
              return symbolToString ? symbolToString.call(value) : '';
            }
            var result = value + '';
            return result == '0' && 1 / value == -INFINITY ? '-0' : result;
          }

          /**
           * Casts `array` to a slice if it's needed.
           *
           * @private
           * @param {Array} array The array to inspect.
           * @param {number} start The start position.
           * @param {number} [end=array.length] The end position.
           * @returns {Array} Returns the cast slice.
           */
          function castSlice(array, start, end) {
            var length = array.length;
            end = end === undefined ? length : end;
            return !start && end >= length ? array : baseSlice(array, start, end);
          }

          /**
           * Checks if `value` is the
           * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
           * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is an object, else `false`.
           * @example
           *
           * _.isObject({});
           * // => true
           *
           * _.isObject([1, 2, 3]);
           * // => true
           *
           * _.isObject(_.noop);
           * // => true
           *
           * _.isObject(null);
           * // => false
           */
          function isObject(value) {
            var type = _typeof(value);
            return !!value && (type == 'object' || type == 'function');
          }

          /**
           * Checks if `value` is object-like. A value is object-like if it's not `null`
           * and has a `typeof` result of "object".
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
           * @example
           *
           * _.isObjectLike({});
           * // => true
           *
           * _.isObjectLike([1, 2, 3]);
           * // => true
           *
           * _.isObjectLike(_.noop);
           * // => false
           *
           * _.isObjectLike(null);
           * // => false
           */
          function isObjectLike(value) {
            return !!value && _typeof(value) == 'object';
          }

          /**
           * Checks if `value` is classified as a `RegExp` object.
           *
           * @static
           * @memberOf _
           * @since 0.1.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
           * @example
           *
           * _.isRegExp(/abc/);
           * // => true
           *
           * _.isRegExp('/abc/');
           * // => false
           */
          var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

          /**
           * Checks if `value` is classified as a `Symbol` primitive or object.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
           * @example
           *
           * _.isSymbol(Symbol.iterator);
           * // => true
           *
           * _.isSymbol('abc');
           * // => false
           */
          function isSymbol(value) {
            return _typeof(value) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
          }

          /**
           * Converts `value` to a finite number.
           *
           * @static
           * @memberOf _
           * @since 4.12.0
           * @category Lang
           * @param {*} value The value to convert.
           * @returns {number} Returns the converted number.
           * @example
           *
           * _.toFinite(3.2);
           * // => 3.2
           *
           * _.toFinite(Number.MIN_VALUE);
           * // => 5e-324
           *
           * _.toFinite(Infinity);
           * // => 1.7976931348623157e+308
           *
           * _.toFinite('3.2');
           * // => 3.2
           */
          function toFinite(value) {
            if (!value) {
              return value === 0 ? value : 0;
            }
            value = toNumber(value);
            if (value === INFINITY || value === -INFINITY) {
              var sign = value < 0 ? -1 : 1;
              return sign * MAX_INTEGER;
            }
            return value === value ? value : 0;
          }

          /**
           * Converts `value` to an integer.
           *
           * **Note:** This method is loosely based on
           * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to convert.
           * @returns {number} Returns the converted integer.
           * @example
           *
           * _.toInteger(3.2);
           * // => 3
           *
           * _.toInteger(Number.MIN_VALUE);
           * // => 0
           *
           * _.toInteger(Infinity);
           * // => 1.7976931348623157e+308
           *
           * _.toInteger('3.2');
           * // => 3
           */
          function toInteger(value) {
            var result = toFinite(value),
              remainder = result % 1;
            return result === result ? remainder ? result - remainder : result : 0;
          }

          /**
           * Converts `value` to a number.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to process.
           * @returns {number} Returns the number.
           * @example
           *
           * _.toNumber(3.2);
           * // => 3.2
           *
           * _.toNumber(Number.MIN_VALUE);
           * // => 5e-324
           *
           * _.toNumber(Infinity);
           * // => Infinity
           *
           * _.toNumber('3.2');
           * // => 3.2
           */
          function toNumber(value) {
            if (typeof value == 'number') {
              return value;
            }
            if (isSymbol(value)) {
              return NAN;
            }
            if (isObject(value)) {
              var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
              value = isObject(other) ? other + '' : other;
            }
            if (typeof value != 'string') {
              return value === 0 ? value : +value;
            }
            value = value.replace(reTrim, '');
            var isBinary = reIsBinary.test(value);
            return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
          }

          /**
           * Converts `value` to a string. An empty string is returned for `null`
           * and `undefined` values. The sign of `-0` is preserved.
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category Lang
           * @param {*} value The value to process.
           * @returns {string} Returns the string.
           * @example
           *
           * _.toString(null);
           * // => ''
           *
           * _.toString(-0);
           * // => '-0'
           *
           * _.toString([1, 2, 3]);
           * // => '1,2,3'
           */
          function toString(value) {
            return value == null ? '' : baseToString(value);
          }

          /**
           * Truncates `string` if it's longer than the given maximum string length.
           * The last characters of the truncated string are replaced with the omission
           * string which defaults to "...".
           *
           * @static
           * @memberOf _
           * @since 4.0.0
           * @category String
           * @param {string} [string=''] The string to truncate.
           * @param {Object} [options={}] The options object.
           * @param {number} [options.length=30] The maximum string length.
           * @param {string} [options.omission='...'] The string to indicate text is omitted.
           * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
           * @returns {string} Returns the truncated string.
           * @example
           *
           * _.truncate('hi-diddly-ho there, neighborino');
           * // => 'hi-diddly-ho there, neighbo...'
           *
           * _.truncate('hi-diddly-ho there, neighborino', {
           *   'length': 24,
           *   'separator': ' '
           * });
           * // => 'hi-diddly-ho there,...'
           *
           * _.truncate('hi-diddly-ho there, neighborino', {
           *   'length': 24,
           *   'separator': /,? +/
           * });
           * // => 'hi-diddly-ho there...'
           *
           * _.truncate('hi-diddly-ho there, neighborino', {
           *   'omission': ' [...]'
           * });
           * // => 'hi-diddly-ho there, neig [...]'
           */
          function truncate(string, options) {
            var length = DEFAULT_TRUNC_LENGTH,
              omission = DEFAULT_TRUNC_OMISSION;
            if (isObject(options)) {
              var separator = 'separator' in options ? options.separator : separator;
              length = 'length' in options ? toInteger(options.length) : length;
              omission = 'omission' in options ? baseToString(options.omission) : omission;
            }
            string = toString(string);
            var strLength = string.length;
            if (hasUnicode(string)) {
              var strSymbols = stringToArray(string);
              strLength = strSymbols.length;
            }
            if (length >= strLength) {
              return string;
            }
            var end = length - stringSize(omission);
            if (end < 1) {
              return omission;
            }
            var result = strSymbols ? castSlice(strSymbols, 0, end).join('') : string.slice(0, end);
            if (separator === undefined) {
              return result + omission;
            }
            if (strSymbols) {
              end += result.length - end;
            }
            if (isRegExp(separator)) {
              if (string.slice(end).search(separator)) {
                var match,
                  substring = result;
                if (!separator.global) {
                  separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
                }
                separator.lastIndex = 0;
                while (match = separator.exec(substring)) {
                  var newEnd = match.index;
                }
                result = result.slice(0, newEnd === undefined ? end : newEnd);
              }
            } else if (string.indexOf(baseToString(separator), end) != end) {
              var index = result.lastIndexOf(separator);
              if (index > -1) {
                result = result.slice(0, index);
              }
            }
            return result + omission;
          }
          module.exports = truncate;
        }).call(this);
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {}],
    15: [function (require, module, exports) {
      'use strict';

      var isFullwidthCodePoint = require('is-fullwidth-code-point');
      var astralRegex = require('astral-regex');
      var ansiStyles = require('ansi-styles');
      var ESCAPES = ["\x1B", "\x9B"];
      var wrapAnsi = function wrapAnsi(code) {
        return "".concat(ESCAPES[0], "[").concat(code, "m");
      };
      var checkAnsi = function checkAnsi(ansiCodes, isEscapes, endAnsiCode) {
        var output = [];
        ansiCodes = _toConsumableArray(ansiCodes);
        var _iterator = _createForOfIteratorHelper(ansiCodes),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var ansiCode = _step.value;
            var ansiCodeOrigin = ansiCode;
            if (ansiCode.includes(';')) {
              ansiCode = ansiCode.split(';')[0][0] + '0';
            }
            var item = ansiStyles.codes.get(Number.parseInt(ansiCode, 10));
            if (item) {
              var indexEscape = ansiCodes.indexOf(item.toString());
              if (indexEscape === -1) {
                output.push(wrapAnsi(isEscapes ? item : ansiCodeOrigin));
              } else {
                ansiCodes.splice(indexEscape, 1);
              }
            } else if (isEscapes) {
              output.push(wrapAnsi(0));
              break;
            } else {
              output.push(wrapAnsi(ansiCodeOrigin));
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        if (isEscapes) {
          output = output.filter(function (element, index) {
            return output.indexOf(element) === index;
          });
          if (endAnsiCode !== undefined) {
            var fistEscapeCode = wrapAnsi(ansiStyles.codes.get(Number.parseInt(endAnsiCode, 10)));
            output = output.reduce(function (current, next) {
              return next === fistEscapeCode ? [next].concat(_toConsumableArray(current)) : [].concat(_toConsumableArray(current), [next]);
            }, []);
          }
        }
        return output.join('');
      };
      module.exports = function (string, begin, end) {
        var characters = _toConsumableArray(string);
        var ansiCodes = [];
        var stringEnd = typeof end === 'number' ? end : characters.length;
        var isInsideEscape = false;
        var ansiCode;
        var visible = 0;
        var output = '';
        var _iterator2 = _createForOfIteratorHelper(characters.entries()),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _step2$value = _slicedToArray(_step2.value, 2),
              index = _step2$value[0],
              character = _step2$value[1];
            var leftEscape = false;
            if (ESCAPES.includes(character)) {
              var code = /\d[^m]*/.exec(string.slice(index, index + 18));
              ansiCode = code && code.length > 0 ? code[0] : undefined;
              if (visible < stringEnd) {
                isInsideEscape = true;
                if (ansiCode !== undefined) {
                  ansiCodes.push(ansiCode);
                }
              }
            } else if (isInsideEscape && character === 'm') {
              isInsideEscape = false;
              leftEscape = true;
            }
            if (!isInsideEscape && !leftEscape) {
              visible++;
            }
            if (!astralRegex({
              exact: true
            }).test(character) && isFullwidthCodePoint(character.codePointAt())) {
              visible++;
              if (typeof end !== 'number') {
                stringEnd++;
              }
            }
            if (visible > begin && visible <= stringEnd) {
              output += character;
            } else if (visible === begin && !isInsideEscape && ansiCode !== undefined) {
              output = checkAnsi(ansiCodes);
            } else if (visible >= stringEnd) {
              output += checkAnsi(ansiCodes, true, ansiCode);
              break;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        return output;
      };
    }, {
      "ansi-styles": 5,
      "astral-regex": 6,
      "is-fullwidth-code-point": 13
    }],
    16: [function (require, module, exports) {
      'use strict';

      var stripAnsi = require('strip-ansi');
      var isFullwidthCodePoint = require('is-fullwidth-code-point');
      var emojiRegex = require('emoji-regex');
      var stringWidth = function stringWidth(string) {
        if (typeof string !== 'string' || string.length === 0) {
          return 0;
        }
        string = stripAnsi(string);
        if (string.length === 0) {
          return 0;
        }
        string = string.replace(emojiRegex(), '  ');
        var width = 0;
        for (var i = 0; i < string.length; i++) {
          var code = string.codePointAt(i);

          // Ignore control characters
          if (code <= 0x1F || code >= 0x7F && code <= 0x9F) {
            continue;
          }

          // Ignore combining characters
          if (code >= 0x300 && code <= 0x36F) {
            continue;
          }

          // Surrogates
          if (code > 0xFFFF) {
            i++;
          }
          width += isFullwidthCodePoint(code) ? 2 : 1;
        }
        return width;
      };
      module.exports = stringWidth;
      // TODO: remove this in the next major version
      module.exports.default = stringWidth;
    }, {
      "emoji-regex": 11,
      "is-fullwidth-code-point": 13,
      "strip-ansi": 17
    }],
    17: [function (require, module, exports) {
      'use strict';

      var ansiRegex = require('ansi-regex');
      module.exports = function (string) {
        return typeof string === 'string' ? string.replace(ansiRegex(), '') : string;
      };
    }, {
      "ansi-regex": 4
    }],
    18: [function (require, module, exports) {
      "use strict";

      var __importDefault = this && this.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.alignVerticalRangeContent = exports.wrapRangeContent = void 0;
      var string_width_1 = __importDefault(require("string-width"));
      var alignString_1 = require("./alignString");
      var mapDataUsingRowHeights_1 = require("./mapDataUsingRowHeights");
      var padTableData_1 = require("./padTableData");
      var truncateTableData_1 = require("./truncateTableData");
      var utils_1 = require("./utils");
      var wrapCell_1 = require("./wrapCell");
      /**
       * Fill content into all cells in range in order to calculate total height
       */
      var wrapRangeContent = function wrapRangeContent(rangeConfig, rangeWidth, context) {
        var topLeft = rangeConfig.topLeft,
          paddingRight = rangeConfig.paddingRight,
          paddingLeft = rangeConfig.paddingLeft,
          truncate = rangeConfig.truncate,
          wrapWord = rangeConfig.wrapWord,
          alignment = rangeConfig.alignment;
        var originalContent = context.rows[topLeft.row][topLeft.col];
        var contentWidth = rangeWidth - paddingLeft - paddingRight;
        return (0, wrapCell_1.wrapCell)((0, truncateTableData_1.truncateString)(originalContent, truncate), contentWidth, wrapWord).map(function (line) {
          var alignedLine = (0, alignString_1.alignString)(line, contentWidth, alignment);
          return (0, padTableData_1.padString)(alignedLine, paddingLeft, paddingRight);
        });
      };
      exports.wrapRangeContent = wrapRangeContent;
      var alignVerticalRangeContent = function alignVerticalRangeContent(range, content, context) {
        var rows = context.rows,
          drawHorizontalLine = context.drawHorizontalLine,
          rowHeights = context.rowHeights;
        var topLeft = range.topLeft,
          bottomRight = range.bottomRight,
          verticalAlignment = range.verticalAlignment;
        // They are empty before calculateRowHeights function run
        if (rowHeights.length === 0) {
          return [];
        }
        var totalCellHeight = (0, utils_1.sumArray)(rowHeights.slice(topLeft.row, bottomRight.row + 1));
        var totalBorderHeight = bottomRight.row - topLeft.row;
        var hiddenHorizontalBorderCount = (0, utils_1.sequence)(topLeft.row + 1, bottomRight.row).filter(function (horizontalBorderIndex) {
          return !drawHorizontalLine(horizontalBorderIndex, rows.length);
        }).length;
        var availableRangeHeight = totalCellHeight + totalBorderHeight - hiddenHorizontalBorderCount;
        return (0, mapDataUsingRowHeights_1.padCellVertically)(content, availableRangeHeight, verticalAlignment).map(function (line) {
          if (line.length === 0) {
            return ' '.repeat((0, string_width_1.default)(content[0]));
          }
          return line;
        });
      };
      exports.alignVerticalRangeContent = alignVerticalRangeContent;
    }, {
      "./alignString": 19,
      "./mapDataUsingRowHeights": 38,
      "./padTableData": 39,
      "./truncateTableData": 43,
      "./utils": 45,
      "./wrapCell": 49,
      "string-width": 16
    }],
    19: [function (require, module, exports) {
      "use strict";

      var __importDefault = this && this.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.alignString = void 0;
      var string_width_1 = __importDefault(require("string-width"));
      var utils_1 = require("./utils");
      var alignLeft = function alignLeft(subject, width) {
        return subject + ' '.repeat(width);
      };
      var alignRight = function alignRight(subject, width) {
        return ' '.repeat(width) + subject;
      };
      var alignCenter = function alignCenter(subject, width) {
        return ' '.repeat(Math.floor(width / 2)) + subject + ' '.repeat(Math.ceil(width / 2));
      };
      var alignJustify = function alignJustify(subject, width) {
        var spaceSequenceCount = (0, utils_1.countSpaceSequence)(subject);
        if (spaceSequenceCount === 0) {
          return alignLeft(subject, width);
        }
        var addingSpaces = (0, utils_1.distributeUnevenly)(width, spaceSequenceCount);
        if (Math.max.apply(Math, _toConsumableArray(addingSpaces)) > 3) {
          return alignLeft(subject, width);
        }
        var spaceSequenceIndex = 0;
        return subject.replace(/\s+/g, function (groupSpace) {
          return groupSpace + ' '.repeat(addingSpaces[spaceSequenceIndex++]);
        });
      };
      /**
       * Pads a string to the left and/or right to position the subject
       * text in a desired alignment within a container.
       */
      var alignString = function alignString(subject, containerWidth, alignment) {
        var subjectWidth = (0, string_width_1.default)(subject);
        if (subjectWidth === containerWidth) {
          return subject;
        }
        if (subjectWidth > containerWidth) {
          throw new Error('Subject parameter value width cannot be greater than the container width.');
        }
        if (subjectWidth === 0) {
          return ' '.repeat(containerWidth);
        }
        var availableWidth = containerWidth - subjectWidth;
        if (alignment === 'left') {
          return alignLeft(subject, availableWidth);
        }
        if (alignment === 'right') {
          return alignRight(subject, availableWidth);
        }
        if (alignment === 'justify') {
          return alignJustify(subject, availableWidth);
        }
        return alignCenter(subject, availableWidth);
      };
      exports.alignString = alignString;
    }, {
      "./utils": 45,
      "string-width": 16
    }],
    20: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.alignTableData = void 0;
      var alignString_1 = require("./alignString");
      var alignTableData = function alignTableData(rows, config) {
        return rows.map(function (row, rowIndex) {
          return row.map(function (cell, cellIndex) {
            var _a;
            var _config$columns$cellI = config.columns[cellIndex],
              width = _config$columns$cellI.width,
              alignment = _config$columns$cellI.alignment;
            var containingRange = (_a = config.spanningCellManager) === null || _a === void 0 ? void 0 : _a.getContainingRange({
              col: cellIndex,
              row: rowIndex
            }, {
              mapped: true
            });
            if (containingRange) {
              return cell;
            }
            return (0, alignString_1.alignString)(cell, width, alignment);
          });
        });
      };
      exports.alignTableData = alignTableData;
    }, {
      "./alignString": 19
    }],
    21: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.calculateCellHeight = void 0;
      var wrapCell_1 = require("./wrapCell");
      /**
       * Calculates height of cell content in regard to its width and word wrapping.
       */
      var calculateCellHeight = function calculateCellHeight(value, columnWidth) {
        var useWrapWord = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        return (0, wrapCell_1.wrapCell)(value, columnWidth, useWrapWord).length;
      };
      exports.calculateCellHeight = calculateCellHeight;
    }, {
      "./wrapCell": 49
    }],
    22: [function (require, module, exports) {
      "use strict";

      var __importDefault = this && this.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.calculateMaximumColumnWidths = exports.calculateMaximumCellWidth = void 0;
      var string_width_1 = __importDefault(require("string-width"));
      var utils_1 = require("./utils");
      var calculateMaximumCellWidth = function calculateMaximumCellWidth(cell) {
        return Math.max.apply(Math, _toConsumableArray(cell.split('\n').map(string_width_1.default)));
      };
      exports.calculateMaximumCellWidth = calculateMaximumCellWidth;
      /**
       * Produces an array of values that describe the largest value length (width) in every column.
       */
      var calculateMaximumColumnWidths = function calculateMaximumColumnWidths(rows) {
        var spanningCellConfigs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        var columnWidths = new Array(rows[0].length).fill(0);
        var rangeCoordinates = spanningCellConfigs.map(utils_1.calculateRangeCoordinate);
        var isSpanningCell = function isSpanningCell(rowIndex, columnIndex) {
          return rangeCoordinates.some(function (rangeCoordinate) {
            return (0, utils_1.isCellInRange)({
              col: columnIndex,
              row: rowIndex
            }, rangeCoordinate);
          });
        };
        rows.forEach(function (row, rowIndex) {
          row.forEach(function (cell, cellIndex) {
            if (isSpanningCell(rowIndex, cellIndex)) {
              return;
            }
            columnWidths[cellIndex] = Math.max(columnWidths[cellIndex], (0, exports.calculateMaximumCellWidth)(cell));
          });
        });
        return columnWidths;
      };
      exports.calculateMaximumColumnWidths = calculateMaximumColumnWidths;
    }, {
      "./utils": 45,
      "string-width": 16
    }],
    23: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.calculateOutputColumnWidths = void 0;
      var calculateOutputColumnWidths = function calculateOutputColumnWidths(config) {
        return config.columns.map(function (col) {
          return col.paddingLeft + col.width + col.paddingRight;
        });
      };
      exports.calculateOutputColumnWidths = calculateOutputColumnWidths;
    }, {}],
    24: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.calculateRowHeights = void 0;
      var calculateCellHeight_1 = require("./calculateCellHeight");
      var utils_1 = require("./utils");
      /**
       * Produces an array of values that describe the largest value length (height) in every row.
       */
      var calculateRowHeights = function calculateRowHeights(rows, config) {
        var rowHeights = [];
        var _iterator3 = _createForOfIteratorHelper(rows.entries()),
          _step3;
        try {
          var _loop = function _loop() {
            var _step3$value = _slicedToArray(_step3.value, 2),
              rowIndex = _step3$value[0],
              row = _step3$value[1];
            var rowHeight = 1;
            row.forEach(function (cell, cellIndex) {
              var _a;
              var containingRange = (_a = config.spanningCellManager) === null || _a === void 0 ? void 0 : _a.getContainingRange({
                col: cellIndex,
                row: rowIndex
              });
              if (!containingRange) {
                var cellHeight = (0, calculateCellHeight_1.calculateCellHeight)(cell, config.columns[cellIndex].width, config.columns[cellIndex].wrapWord);
                rowHeight = Math.max(rowHeight, cellHeight);
                return;
              }
              var topLeft = containingRange.topLeft,
                bottomRight = containingRange.bottomRight,
                height = containingRange.height;
              // bottom-most cell of a range needs to contain all remain lines of spanning cells
              if (rowIndex === bottomRight.row) {
                var totalOccupiedSpanningCellHeight = (0, utils_1.sumArray)(rowHeights.slice(topLeft.row));
                var totalHorizontalBorderHeight = bottomRight.row - topLeft.row;
                var totalHiddenHorizontalBorderHeight = (0, utils_1.sequence)(topLeft.row + 1, bottomRight.row).filter(function (horizontalBorderIndex) {
                  var _a;
                  /* istanbul ignore next */
                  return !((_a = config.drawHorizontalLine) === null || _a === void 0 ? void 0 : _a.call(config, horizontalBorderIndex, rows.length));
                }).length;
                var _cellHeight = height - totalOccupiedSpanningCellHeight - totalHorizontalBorderHeight + totalHiddenHorizontalBorderHeight;
                rowHeight = Math.max(rowHeight, _cellHeight);
              }
              // otherwise, just depend on other sibling cell heights in the row
            });
            rowHeights.push(rowHeight);
          };
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        return rowHeights;
      };
      exports.calculateRowHeights = calculateRowHeights;
    }, {
      "./calculateCellHeight": 21,
      "./utils": 45
    }],
    25: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.calculateSpanningCellWidth = void 0;
      var utils_1 = require("./utils");
      var calculateSpanningCellWidth = function calculateSpanningCellWidth(rangeConfig, dependencies) {
        var columnsConfig = dependencies.columnsConfig,
          drawVerticalLine = dependencies.drawVerticalLine;
        var topLeft = rangeConfig.topLeft,
          bottomRight = rangeConfig.bottomRight;
        var totalWidth = (0, utils_1.sumArray)(columnsConfig.slice(topLeft.col, bottomRight.col + 1).map(function (_ref2) {
          var width = _ref2.width;
          return width;
        }));
        var totalPadding = topLeft.col === bottomRight.col ? columnsConfig[topLeft.col].paddingRight + columnsConfig[bottomRight.col].paddingLeft : (0, utils_1.sumArray)(columnsConfig.slice(topLeft.col, bottomRight.col + 1).map(function (_ref3) {
          var paddingLeft = _ref3.paddingLeft,
            paddingRight = _ref3.paddingRight;
          return paddingLeft + paddingRight;
        }));
        var totalBorderWidths = bottomRight.col - topLeft.col;
        var totalHiddenVerticalBorders = (0, utils_1.sequence)(topLeft.col + 1, bottomRight.col).filter(function (verticalBorderIndex) {
          return !drawVerticalLine(verticalBorderIndex, columnsConfig.length);
        }).length;
        return totalWidth + totalPadding + totalBorderWidths - totalHiddenVerticalBorders;
      };
      exports.calculateSpanningCellWidth = calculateSpanningCellWidth;
    }, {
      "./utils": 45
    }],
    26: [function (require, module, exports) {
      (function (process) {
        (function () {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.createStream = void 0;
          var alignTableData_1 = require("./alignTableData");
          var calculateRowHeights_1 = require("./calculateRowHeights");
          var drawBorder_1 = require("./drawBorder");
          var drawRow_1 = require("./drawRow");
          var makeStreamConfig_1 = require("./makeStreamConfig");
          var mapDataUsingRowHeights_1 = require("./mapDataUsingRowHeights");
          var padTableData_1 = require("./padTableData");
          var stringifyTableData_1 = require("./stringifyTableData");
          var truncateTableData_1 = require("./truncateTableData");
          var utils_1 = require("./utils");
          var prepareData = function prepareData(data, config) {
            var rows = (0, stringifyTableData_1.stringifyTableData)(data);
            rows = (0, truncateTableData_1.truncateTableData)(rows, (0, utils_1.extractTruncates)(config));
            var rowHeights = (0, calculateRowHeights_1.calculateRowHeights)(rows, config);
            rows = (0, mapDataUsingRowHeights_1.mapDataUsingRowHeights)(rows, rowHeights, config);
            rows = (0, alignTableData_1.alignTableData)(rows, config);
            rows = (0, padTableData_1.padTableData)(rows, config);
            return rows;
          };
          var create = function create(row, columnWidths, config) {
            var rows = prepareData([row], config);
            var body = rows.map(function (literalRow) {
              return (0, drawRow_1.drawRow)(literalRow, config);
            }).join('');
            var output;
            output = '';
            output += (0, drawBorder_1.drawBorderTop)(columnWidths, config);
            output += body;
            output += (0, drawBorder_1.drawBorderBottom)(columnWidths, config);
            output = output.trimEnd();
            process.stdout.write(output);
          };
          var append = function append(row, columnWidths, config) {
            var rows = prepareData([row], config);
            var body = rows.map(function (literalRow) {
              return (0, drawRow_1.drawRow)(literalRow, config);
            }).join('');
            var output = '';
            var bottom = (0, drawBorder_1.drawBorderBottom)(columnWidths, config);
            if (bottom !== '\n') {
              output = "\r\x1B[K";
            }
            output += (0, drawBorder_1.drawBorderJoin)(columnWidths, config);
            output += body;
            output += bottom;
            output = output.trimEnd();
            process.stdout.write(output);
          };
          var createStream = function createStream(userConfig) {
            var config = (0, makeStreamConfig_1.makeStreamConfig)(userConfig);
            var columnWidths = Object.values(config.columns).map(function (column) {
              return column.width + column.paddingLeft + column.paddingRight;
            });
            var empty = true;
            return {
              write: function write(row) {
                if (row.length !== config.columnCount) {
                  throw new Error('Row cell count does not match the config.columnCount.');
                }
                if (empty) {
                  empty = false;
                  create(row, columnWidths, config);
                } else {
                  append(row, columnWidths, config);
                }
              }
            };
          };
          exports.createStream = createStream;
        }).call(this);
      }).call(this, require('_process'));
    }, {
      "./alignTableData": 20,
      "./calculateRowHeights": 24,
      "./drawBorder": 27,
      "./drawRow": 29,
      "./makeStreamConfig": 36,
      "./mapDataUsingRowHeights": 38,
      "./padTableData": 39,
      "./stringifyTableData": 41,
      "./truncateTableData": 43,
      "./utils": 45,
      "_process": 1
    }],
    27: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.createTableBorderGetter = exports.drawBorderBottom = exports.drawBorderJoin = exports.drawBorderTop = exports.drawBorder = exports.createSeparatorGetter = exports.drawBorderSegments = void 0;
      var drawContent_1 = require("./drawContent");
      var drawBorderSegments = function drawBorderSegments(columnWidths, parameters) {
        var separator = parameters.separator,
          horizontalBorderIndex = parameters.horizontalBorderIndex,
          spanningCellManager = parameters.spanningCellManager;
        return columnWidths.map(function (columnWidth, columnIndex) {
          var normalSegment = separator.body.repeat(columnWidth);
          if (horizontalBorderIndex === undefined) {
            return normalSegment;
          }
          /* istanbul ignore next */
          var range = spanningCellManager === null || spanningCellManager === void 0 ? void 0 : spanningCellManager.getContainingRange({
            col: columnIndex,
            row: horizontalBorderIndex
          });
          if (!range) {
            return normalSegment;
          }
          var topLeft = range.topLeft;
          // draw border segments as usual for top border of spanning cell
          if (horizontalBorderIndex === topLeft.row) {
            return normalSegment;
          }
          // if for first column/row of spanning cell, just skip
          if (columnIndex !== topLeft.col) {
            return '';
          }
          return range.extractBorderContent(horizontalBorderIndex);
        });
      };
      exports.drawBorderSegments = drawBorderSegments;
      var createSeparatorGetter = function createSeparatorGetter(dependencies) {
        var separator = dependencies.separator,
          spanningCellManager = dependencies.spanningCellManager,
          horizontalBorderIndex = dependencies.horizontalBorderIndex,
          rowCount = dependencies.rowCount;
        // eslint-disable-next-line complexity
        return function (verticalBorderIndex, columnCount) {
          var inSameRange = spanningCellManager === null || spanningCellManager === void 0 ? void 0 : spanningCellManager.inSameRange;
          if (horizontalBorderIndex !== undefined && inSameRange) {
            var topCell = {
              col: verticalBorderIndex,
              row: horizontalBorderIndex - 1
            };
            var leftCell = {
              col: verticalBorderIndex - 1,
              row: horizontalBorderIndex
            };
            var oppositeCell = {
              col: verticalBorderIndex - 1,
              row: horizontalBorderIndex - 1
            };
            var currentCell = {
              col: verticalBorderIndex,
              row: horizontalBorderIndex
            };
            var pairs = [[oppositeCell, topCell], [topCell, currentCell], [currentCell, leftCell], [leftCell, oppositeCell]];
            // left side of horizontal border
            if (verticalBorderIndex === 0) {
              if (inSameRange(currentCell, topCell) && separator.bodyJoinOuter) {
                return separator.bodyJoinOuter;
              }
              return separator.left;
            }
            // right side of horizontal border
            if (verticalBorderIndex === columnCount) {
              if (inSameRange(oppositeCell, leftCell) && separator.bodyJoinOuter) {
                return separator.bodyJoinOuter;
              }
              return separator.right;
            }
            // top horizontal border
            if (horizontalBorderIndex === 0) {
              if (inSameRange(currentCell, leftCell)) {
                return separator.body;
              }
              return separator.join;
            }
            // bottom horizontal border
            if (horizontalBorderIndex === rowCount) {
              if (inSameRange(topCell, oppositeCell)) {
                return separator.body;
              }
              return separator.join;
            }
            var sameRangeCount = pairs.map(function (pair) {
              return inSameRange.apply(void 0, _toConsumableArray(pair));
            }).filter(Boolean).length;
            // four cells are belongs to different spanning cells
            if (sameRangeCount === 0) {
              return separator.join;
            }
            // belong to one spanning cell
            if (sameRangeCount === 4) {
              return '';
            }
            // belongs to two spanning cell
            if (sameRangeCount === 2) {
              if (inSameRange.apply(void 0, _toConsumableArray(pairs[1])) && inSameRange.apply(void 0, _toConsumableArray(pairs[3])) && separator.bodyJoinInner) {
                return separator.bodyJoinInner;
              }
              return separator.body;
            }
            /* istanbul ignore next */
            if (sameRangeCount === 1) {
              if (!separator.joinRight || !separator.joinLeft || !separator.joinUp || !separator.joinDown) {
                throw new Error("Can not get border separator for position [".concat(horizontalBorderIndex, ", ").concat(verticalBorderIndex, "]"));
              }
              if (inSameRange.apply(void 0, _toConsumableArray(pairs[0]))) {
                return separator.joinDown;
              }
              if (inSameRange.apply(void 0, _toConsumableArray(pairs[1]))) {
                return separator.joinLeft;
              }
              if (inSameRange.apply(void 0, _toConsumableArray(pairs[2]))) {
                return separator.joinUp;
              }
              return separator.joinRight;
            }
            /* istanbul ignore next */
            throw new Error('Invalid case');
          }
          if (verticalBorderIndex === 0) {
            return separator.left;
          }
          if (verticalBorderIndex === columnCount) {
            return separator.right;
          }
          return separator.join;
        };
      };
      exports.createSeparatorGetter = createSeparatorGetter;
      var drawBorder = function drawBorder(columnWidths, parameters) {
        var borderSegments = (0, exports.drawBorderSegments)(columnWidths, parameters);
        var drawVerticalLine = parameters.drawVerticalLine,
          horizontalBorderIndex = parameters.horizontalBorderIndex,
          spanningCellManager = parameters.spanningCellManager;
        return (0, drawContent_1.drawContent)({
          contents: borderSegments,
          drawSeparator: drawVerticalLine,
          elementType: 'border',
          rowIndex: horizontalBorderIndex,
          separatorGetter: (0, exports.createSeparatorGetter)(parameters),
          spanningCellManager: spanningCellManager
        }) + '\n';
      };
      exports.drawBorder = drawBorder;
      var drawBorderTop = function drawBorderTop(columnWidths, parameters) {
        var border = parameters.border;
        var result = (0, exports.drawBorder)(columnWidths, _objectSpread(_objectSpread({}, parameters), {}, {
          separator: {
            body: border.topBody,
            join: border.topJoin,
            left: border.topLeft,
            right: border.topRight
          }
        }));
        if (result === '\n') {
          return '';
        }
        return result;
      };
      exports.drawBorderTop = drawBorderTop;
      var drawBorderJoin = function drawBorderJoin(columnWidths, parameters) {
        var border = parameters.border;
        return (0, exports.drawBorder)(columnWidths, _objectSpread(_objectSpread({}, parameters), {}, {
          separator: {
            body: border.joinBody,
            bodyJoinInner: border.bodyJoin,
            bodyJoinOuter: border.bodyLeft,
            join: border.joinJoin,
            joinDown: border.joinMiddleDown,
            joinLeft: border.joinMiddleLeft,
            joinRight: border.joinMiddleRight,
            joinUp: border.joinMiddleUp,
            left: border.joinLeft,
            right: border.joinRight
          }
        }));
      };
      exports.drawBorderJoin = drawBorderJoin;
      var drawBorderBottom = function drawBorderBottom(columnWidths, parameters) {
        var border = parameters.border;
        return (0, exports.drawBorder)(columnWidths, _objectSpread(_objectSpread({}, parameters), {}, {
          separator: {
            body: border.bottomBody,
            join: border.bottomJoin,
            left: border.bottomLeft,
            right: border.bottomRight
          }
        }));
      };
      exports.drawBorderBottom = drawBorderBottom;
      var createTableBorderGetter = function createTableBorderGetter(columnWidths, parameters) {
        return function (index, size) {
          var drawBorderParameters = _objectSpread(_objectSpread({}, parameters), {}, {
            horizontalBorderIndex: index
          });
          if (index === 0) {
            return (0, exports.drawBorderTop)(columnWidths, drawBorderParameters);
          } else if (index === size) {
            return (0, exports.drawBorderBottom)(columnWidths, drawBorderParameters);
          }
          return (0, exports.drawBorderJoin)(columnWidths, drawBorderParameters);
        };
      };
      exports.createTableBorderGetter = createTableBorderGetter;
    }, {
      "./drawContent": 28
    }],
    28: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.drawContent = void 0;
      var drawContent = function drawContent(parameters) {
        var contents = parameters.contents,
          separatorGetter = parameters.separatorGetter,
          drawSeparator = parameters.drawSeparator,
          spanningCellManager = parameters.spanningCellManager,
          rowIndex = parameters.rowIndex,
          elementType = parameters.elementType;
        var contentSize = contents.length;
        var result = [];
        if (drawSeparator(0, contentSize)) {
          result.push(separatorGetter(0, contentSize));
        }
        contents.forEach(function (content, contentIndex) {
          if (!elementType || elementType === 'border' || elementType === 'row') {
            result.push(content);
          }
          if (elementType === 'cell' && rowIndex === undefined) {
            result.push(content);
          }
          if (elementType === 'cell' && rowIndex !== undefined) {
            /* istanbul ignore next */
            var containingRange = spanningCellManager === null || spanningCellManager === void 0 ? void 0 : spanningCellManager.getContainingRange({
              col: contentIndex,
              row: rowIndex
            });
            // when drawing content row, just add a cell when it is a normal cell
            // or belongs to first column of spanning cell
            if (!containingRange || contentIndex === containingRange.topLeft.col) {
              result.push(content);
            }
          }
          // Only append the middle separator if the content is not the last
          if (contentIndex + 1 < contentSize && drawSeparator(contentIndex + 1, contentSize)) {
            var separator = separatorGetter(contentIndex + 1, contentSize);
            if (elementType === 'cell' && rowIndex !== undefined) {
              var currentCell = {
                col: contentIndex + 1,
                row: rowIndex
              };
              /* istanbul ignore next */
              var _containingRange = spanningCellManager === null || spanningCellManager === void 0 ? void 0 : spanningCellManager.getContainingRange(currentCell);
              if (!_containingRange || _containingRange.topLeft.col === currentCell.col) {
                result.push(separator);
              }
            } else {
              result.push(separator);
            }
          }
        });
        if (drawSeparator(contentSize, contentSize)) {
          result.push(separatorGetter(contentSize, contentSize));
        }
        return result.join('');
      };
      exports.drawContent = drawContent;
    }, {}],
    29: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.drawRow = void 0;
      var drawContent_1 = require("./drawContent");
      var drawRow = function drawRow(row, config) {
        var border = config.border,
          drawVerticalLine = config.drawVerticalLine,
          rowIndex = config.rowIndex,
          spanningCellManager = config.spanningCellManager;
        return (0, drawContent_1.drawContent)({
          contents: row,
          drawSeparator: drawVerticalLine,
          elementType: 'cell',
          rowIndex: rowIndex,
          separatorGetter: function separatorGetter(index, columnCount) {
            if (index === 0) {
              return border.bodyLeft;
            }
            if (index === columnCount) {
              return border.bodyRight;
            }
            return border.bodyJoin;
          },
          spanningCellManager: spanningCellManager
        }) + '\n';
      };
      exports.drawRow = drawRow;
    }, {
      "./drawContent": 28
    }],
    30: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.drawTable = void 0;
      var drawBorder_1 = require("./drawBorder");
      var drawContent_1 = require("./drawContent");
      var drawRow_1 = require("./drawRow");
      var utils_1 = require("./utils");
      var drawTable = function drawTable(rows, outputColumnWidths, rowHeights, config) {
        var drawHorizontalLine = config.drawHorizontalLine,
          singleLine = config.singleLine;
        var contents = (0, utils_1.groupBySizes)(rows, rowHeights).map(function (group, groupIndex) {
          return group.map(function (row) {
            return (0, drawRow_1.drawRow)(row, _objectSpread(_objectSpread({}, config), {}, {
              rowIndex: groupIndex
            }));
          }).join('');
        });
        return (0, drawContent_1.drawContent)({
          contents: contents,
          drawSeparator: function drawSeparator(index, size) {
            // Top/bottom border
            if (index === 0 || index === size) {
              return drawHorizontalLine(index, size);
            }
            return !singleLine && drawHorizontalLine(index, size);
          },
          elementType: 'row',
          rowIndex: -1,
          separatorGetter: (0, drawBorder_1.createTableBorderGetter)(outputColumnWidths, _objectSpread(_objectSpread({}, config), {}, {
            rowCount: contents.length
          })),
          spanningCellManager: config.spanningCellManager
        });
      };
      exports.drawTable = drawTable;
    }, {
      "./drawBorder": 27,
      "./drawContent": 28,
      "./drawRow": 29,
      "./utils": 45
    }],
    31: [function (require, module, exports) {
      "use strict";

      exports["config.json"] = validate43;
      var schema13 = {
        "$id": "config.json",
        "$schema": "http://json-schema.org/draft-07/schema#",
        "type": "object",
        "properties": {
          "border": {
            "$ref": "shared.json#/definitions/borders"
          },
          "header": {
            "type": "object",
            "properties": {
              "content": {
                "type": "string"
              },
              "alignment": {
                "$ref": "shared.json#/definitions/alignment"
              },
              "wrapWord": {
                "type": "boolean"
              },
              "truncate": {
                "type": "integer"
              },
              "paddingLeft": {
                "type": "integer"
              },
              "paddingRight": {
                "type": "integer"
              }
            },
            "required": ["content"],
            "additionalProperties": false
          },
          "columns": {
            "$ref": "shared.json#/definitions/columns"
          },
          "columnDefault": {
            "$ref": "shared.json#/definitions/column"
          },
          "drawVerticalLine": {
            "typeof": "function"
          },
          "drawHorizontalLine": {
            "typeof": "function"
          },
          "singleLine": {
            "typeof": "boolean"
          },
          "spanningCells": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "col": {
                  "type": "integer",
                  "minimum": 0
                },
                "row": {
                  "type": "integer",
                  "minimum": 0
                },
                "colSpan": {
                  "type": "integer",
                  "minimum": 1
                },
                "rowSpan": {
                  "type": "integer",
                  "minimum": 1
                },
                "alignment": {
                  "$ref": "shared.json#/definitions/alignment"
                },
                "verticalAlignment": {
                  "$ref": "shared.json#/definitions/verticalAlignment"
                },
                "wrapWord": {
                  "type": "boolean"
                },
                "truncate": {
                  "type": "integer"
                },
                "paddingLeft": {
                  "type": "integer"
                },
                "paddingRight": {
                  "type": "integer"
                }
              },
              "required": ["row", "col"],
              "additionalProperties": false
            }
          }
        },
        "additionalProperties": false
      };
      var schema15 = {
        "type": "object",
        "properties": {
          "topBody": {
            "$ref": "#/definitions/border"
          },
          "topJoin": {
            "$ref": "#/definitions/border"
          },
          "topLeft": {
            "$ref": "#/definitions/border"
          },
          "topRight": {
            "$ref": "#/definitions/border"
          },
          "bottomBody": {
            "$ref": "#/definitions/border"
          },
          "bottomJoin": {
            "$ref": "#/definitions/border"
          },
          "bottomLeft": {
            "$ref": "#/definitions/border"
          },
          "bottomRight": {
            "$ref": "#/definitions/border"
          },
          "bodyLeft": {
            "$ref": "#/definitions/border"
          },
          "bodyRight": {
            "$ref": "#/definitions/border"
          },
          "bodyJoin": {
            "$ref": "#/definitions/border"
          },
          "headerJoin": {
            "$ref": "#/definitions/border"
          },
          "joinBody": {
            "$ref": "#/definitions/border"
          },
          "joinLeft": {
            "$ref": "#/definitions/border"
          },
          "joinRight": {
            "$ref": "#/definitions/border"
          },
          "joinJoin": {
            "$ref": "#/definitions/border"
          },
          "joinMiddleUp": {
            "$ref": "#/definitions/border"
          },
          "joinMiddleDown": {
            "$ref": "#/definitions/border"
          },
          "joinMiddleLeft": {
            "$ref": "#/definitions/border"
          },
          "joinMiddleRight": {
            "$ref": "#/definitions/border"
          }
        },
        "additionalProperties": false
      };
      var func8 = Object.prototype.hasOwnProperty;
      var schema16 = {
        "type": "string"
      };
      function validate46(data) {
        var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref4$instancePath = _ref4.instancePath,
          instancePath = _ref4$instancePath === void 0 ? "" : _ref4$instancePath,
          parentData = _ref4.parentData,
          parentDataProperty = _ref4.parentDataProperty,
          _ref4$rootData = _ref4.rootData,
          rootData = _ref4$rootData === void 0 ? data : _ref4$rootData;
        var vErrors = null;
        var errors = 0;
        if (typeof data !== "string") {
          var err0 = {
            instancePath: instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {
              type: "string"
            },
            message: "must be string"
          };
          if (vErrors === null) {
            vErrors = [err0];
          } else {
            vErrors.push(err0);
          }
          errors++;
        }
        validate46.errors = vErrors;
        return errors === 0;
      }
      function validate45(data) {
        var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref5$instancePath = _ref5.instancePath,
          instancePath = _ref5$instancePath === void 0 ? "" : _ref5$instancePath,
          parentData = _ref5.parentData,
          parentDataProperty = _ref5.parentDataProperty,
          _ref5$rootData = _ref5.rootData,
          rootData = _ref5$rootData === void 0 ? data : _ref5$rootData;
        var vErrors = null;
        var errors = 0;
        if (data && _typeof(data) == "object" && !Array.isArray(data)) {
          for (var key0 in data) {
            if (!func8.call(schema15.properties, key0)) {
              var err0 = {
                instancePath: instancePath,
                schemaPath: "#/additionalProperties",
                keyword: "additionalProperties",
                params: {
                  additionalProperty: key0
                },
                message: "must NOT have additional properties"
              };
              if (vErrors === null) {
                vErrors = [err0];
              } else {
                vErrors.push(err0);
              }
              errors++;
            }
          }
          if (data.topBody !== undefined) {
            if (!validate46(data.topBody, {
              instancePath: instancePath + "/topBody",
              parentData: data,
              parentDataProperty: "topBody",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.topJoin !== undefined) {
            if (!validate46(data.topJoin, {
              instancePath: instancePath + "/topJoin",
              parentData: data,
              parentDataProperty: "topJoin",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.topLeft !== undefined) {
            if (!validate46(data.topLeft, {
              instancePath: instancePath + "/topLeft",
              parentData: data,
              parentDataProperty: "topLeft",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.topRight !== undefined) {
            if (!validate46(data.topRight, {
              instancePath: instancePath + "/topRight",
              parentData: data,
              parentDataProperty: "topRight",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.bottomBody !== undefined) {
            if (!validate46(data.bottomBody, {
              instancePath: instancePath + "/bottomBody",
              parentData: data,
              parentDataProperty: "bottomBody",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.bottomJoin !== undefined) {
            if (!validate46(data.bottomJoin, {
              instancePath: instancePath + "/bottomJoin",
              parentData: data,
              parentDataProperty: "bottomJoin",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.bottomLeft !== undefined) {
            if (!validate46(data.bottomLeft, {
              instancePath: instancePath + "/bottomLeft",
              parentData: data,
              parentDataProperty: "bottomLeft",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.bottomRight !== undefined) {
            if (!validate46(data.bottomRight, {
              instancePath: instancePath + "/bottomRight",
              parentData: data,
              parentDataProperty: "bottomRight",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.bodyLeft !== undefined) {
            if (!validate46(data.bodyLeft, {
              instancePath: instancePath + "/bodyLeft",
              parentData: data,
              parentDataProperty: "bodyLeft",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.bodyRight !== undefined) {
            if (!validate46(data.bodyRight, {
              instancePath: instancePath + "/bodyRight",
              parentData: data,
              parentDataProperty: "bodyRight",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.bodyJoin !== undefined) {
            if (!validate46(data.bodyJoin, {
              instancePath: instancePath + "/bodyJoin",
              parentData: data,
              parentDataProperty: "bodyJoin",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.headerJoin !== undefined) {
            if (!validate46(data.headerJoin, {
              instancePath: instancePath + "/headerJoin",
              parentData: data,
              parentDataProperty: "headerJoin",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.joinBody !== undefined) {
            if (!validate46(data.joinBody, {
              instancePath: instancePath + "/joinBody",
              parentData: data,
              parentDataProperty: "joinBody",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.joinLeft !== undefined) {
            if (!validate46(data.joinLeft, {
              instancePath: instancePath + "/joinLeft",
              parentData: data,
              parentDataProperty: "joinLeft",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.joinRight !== undefined) {
            if (!validate46(data.joinRight, {
              instancePath: instancePath + "/joinRight",
              parentData: data,
              parentDataProperty: "joinRight",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.joinJoin !== undefined) {
            if (!validate46(data.joinJoin, {
              instancePath: instancePath + "/joinJoin",
              parentData: data,
              parentDataProperty: "joinJoin",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.joinMiddleUp !== undefined) {
            if (!validate46(data.joinMiddleUp, {
              instancePath: instancePath + "/joinMiddleUp",
              parentData: data,
              parentDataProperty: "joinMiddleUp",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.joinMiddleDown !== undefined) {
            if (!validate46(data.joinMiddleDown, {
              instancePath: instancePath + "/joinMiddleDown",
              parentData: data,
              parentDataProperty: "joinMiddleDown",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.joinMiddleLeft !== undefined) {
            if (!validate46(data.joinMiddleLeft, {
              instancePath: instancePath + "/joinMiddleLeft",
              parentData: data,
              parentDataProperty: "joinMiddleLeft",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.joinMiddleRight !== undefined) {
            if (!validate46(data.joinMiddleRight, {
              instancePath: instancePath + "/joinMiddleRight",
              parentData: data,
              parentDataProperty: "joinMiddleRight",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
        } else {
          var err1 = {
            instancePath: instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {
              type: "object"
            },
            message: "must be object"
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
        validate45.errors = vErrors;
        return errors === 0;
      }
      var schema17 = {
        "type": "string",
        "enum": ["left", "right", "center", "justify"]
      };
      var func0 = require("ajv/dist/runtime/equal").default;
      function validate68(data) {
        var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref6$instancePath = _ref6.instancePath,
          instancePath = _ref6$instancePath === void 0 ? "" : _ref6$instancePath,
          parentData = _ref6.parentData,
          parentDataProperty = _ref6.parentDataProperty,
          _ref6$rootData = _ref6.rootData,
          rootData = _ref6$rootData === void 0 ? data : _ref6$rootData;
        var vErrors = null;
        var errors = 0;
        if (typeof data !== "string") {
          var err0 = {
            instancePath: instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {
              type: "string"
            },
            message: "must be string"
          };
          if (vErrors === null) {
            vErrors = [err0];
          } else {
            vErrors.push(err0);
          }
          errors++;
        }
        if (!(data === "left" || data === "right" || data === "center" || data === "justify")) {
          var err1 = {
            instancePath: instancePath,
            schemaPath: "#/enum",
            keyword: "enum",
            params: {
              allowedValues: schema17.enum
            },
            message: "must be equal to one of the allowed values"
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
        validate68.errors = vErrors;
        return errors === 0;
      }
      var schema18 = {
        "oneOf": [{
          "type": "object",
          "patternProperties": {
            "^[0-9]+$": {
              "$ref": "#/definitions/column"
            }
          },
          "additionalProperties": false
        }, {
          "type": "array",
          "items": {
            "$ref": "#/definitions/column"
          }
        }]
      };
      var pattern0 = new RegExp("^[0-9]+$", "u");
      var schema19 = {
        "type": "object",
        "properties": {
          "alignment": {
            "$ref": "#/definitions/alignment"
          },
          "verticalAlignment": {
            "$ref": "#/definitions/verticalAlignment"
          },
          "width": {
            "type": "integer",
            "minimum": 1
          },
          "wrapWord": {
            "type": "boolean"
          },
          "truncate": {
            "type": "integer"
          },
          "paddingLeft": {
            "type": "integer"
          },
          "paddingRight": {
            "type": "integer"
          }
        },
        "additionalProperties": false
      };
      function validate72(data) {
        var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref7$instancePath = _ref7.instancePath,
          instancePath = _ref7$instancePath === void 0 ? "" : _ref7$instancePath,
          parentData = _ref7.parentData,
          parentDataProperty = _ref7.parentDataProperty,
          _ref7$rootData = _ref7.rootData,
          rootData = _ref7$rootData === void 0 ? data : _ref7$rootData;
        var vErrors = null;
        var errors = 0;
        if (typeof data !== "string") {
          var err0 = {
            instancePath: instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {
              type: "string"
            },
            message: "must be string"
          };
          if (vErrors === null) {
            vErrors = [err0];
          } else {
            vErrors.push(err0);
          }
          errors++;
        }
        if (!(data === "left" || data === "right" || data === "center" || data === "justify")) {
          var err1 = {
            instancePath: instancePath,
            schemaPath: "#/enum",
            keyword: "enum",
            params: {
              allowedValues: schema17.enum
            },
            message: "must be equal to one of the allowed values"
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
        validate72.errors = vErrors;
        return errors === 0;
      }
      var schema21 = {
        "type": "string",
        "enum": ["top", "middle", "bottom"]
      };
      function validate74(data) {
        var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref8$instancePath = _ref8.instancePath,
          instancePath = _ref8$instancePath === void 0 ? "" : _ref8$instancePath,
          parentData = _ref8.parentData,
          parentDataProperty = _ref8.parentDataProperty,
          _ref8$rootData = _ref8.rootData,
          rootData = _ref8$rootData === void 0 ? data : _ref8$rootData;
        var vErrors = null;
        var errors = 0;
        if (typeof data !== "string") {
          var err0 = {
            instancePath: instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {
              type: "string"
            },
            message: "must be string"
          };
          if (vErrors === null) {
            vErrors = [err0];
          } else {
            vErrors.push(err0);
          }
          errors++;
        }
        if (!(data === "top" || data === "middle" || data === "bottom")) {
          var err1 = {
            instancePath: instancePath,
            schemaPath: "#/enum",
            keyword: "enum",
            params: {
              allowedValues: schema21.enum
            },
            message: "must be equal to one of the allowed values"
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
        validate74.errors = vErrors;
        return errors === 0;
      }
      function validate71(data) {
        var _ref9 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref9$instancePath = _ref9.instancePath,
          instancePath = _ref9$instancePath === void 0 ? "" : _ref9$instancePath,
          parentData = _ref9.parentData,
          parentDataProperty = _ref9.parentDataProperty,
          _ref9$rootData = _ref9.rootData,
          rootData = _ref9$rootData === void 0 ? data : _ref9$rootData;
        var vErrors = null;
        var errors = 0;
        if (data && _typeof(data) == "object" && !Array.isArray(data)) {
          for (var key0 in data) {
            if (!(key0 === "alignment" || key0 === "verticalAlignment" || key0 === "width" || key0 === "wrapWord" || key0 === "truncate" || key0 === "paddingLeft" || key0 === "paddingRight")) {
              var err0 = {
                instancePath: instancePath,
                schemaPath: "#/additionalProperties",
                keyword: "additionalProperties",
                params: {
                  additionalProperty: key0
                },
                message: "must NOT have additional properties"
              };
              if (vErrors === null) {
                vErrors = [err0];
              } else {
                vErrors.push(err0);
              }
              errors++;
            }
          }
          if (data.alignment !== undefined) {
            if (!validate72(data.alignment, {
              instancePath: instancePath + "/alignment",
              parentData: data,
              parentDataProperty: "alignment",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate72.errors : vErrors.concat(validate72.errors);
              errors = vErrors.length;
            }
          }
          if (data.verticalAlignment !== undefined) {
            if (!validate74(data.verticalAlignment, {
              instancePath: instancePath + "/verticalAlignment",
              parentData: data,
              parentDataProperty: "verticalAlignment",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate74.errors : vErrors.concat(validate74.errors);
              errors = vErrors.length;
            }
          }
          if (data.width !== undefined) {
            var data2 = data.width;
            if (!(typeof data2 == "number" && !(data2 % 1) && !isNaN(data2) && isFinite(data2))) {
              var err1 = {
                instancePath: instancePath + "/width",
                schemaPath: "#/properties/width/type",
                keyword: "type",
                params: {
                  type: "integer"
                },
                message: "must be integer"
              };
              if (vErrors === null) {
                vErrors = [err1];
              } else {
                vErrors.push(err1);
              }
              errors++;
            }
            if (typeof data2 == "number" && isFinite(data2)) {
              if (data2 < 1 || isNaN(data2)) {
                var err2 = {
                  instancePath: instancePath + "/width",
                  schemaPath: "#/properties/width/minimum",
                  keyword: "minimum",
                  params: {
                    comparison: ">=",
                    limit: 1
                  },
                  message: "must be >= 1"
                };
                if (vErrors === null) {
                  vErrors = [err2];
                } else {
                  vErrors.push(err2);
                }
                errors++;
              }
            }
          }
          if (data.wrapWord !== undefined) {
            if (typeof data.wrapWord !== "boolean") {
              var err3 = {
                instancePath: instancePath + "/wrapWord",
                schemaPath: "#/properties/wrapWord/type",
                keyword: "type",
                params: {
                  type: "boolean"
                },
                message: "must be boolean"
              };
              if (vErrors === null) {
                vErrors = [err3];
              } else {
                vErrors.push(err3);
              }
              errors++;
            }
          }
          if (data.truncate !== undefined) {
            var data4 = data.truncate;
            if (!(typeof data4 == "number" && !(data4 % 1) && !isNaN(data4) && isFinite(data4))) {
              var err4 = {
                instancePath: instancePath + "/truncate",
                schemaPath: "#/properties/truncate/type",
                keyword: "type",
                params: {
                  type: "integer"
                },
                message: "must be integer"
              };
              if (vErrors === null) {
                vErrors = [err4];
              } else {
                vErrors.push(err4);
              }
              errors++;
            }
          }
          if (data.paddingLeft !== undefined) {
            var data5 = data.paddingLeft;
            if (!(typeof data5 == "number" && !(data5 % 1) && !isNaN(data5) && isFinite(data5))) {
              var err5 = {
                instancePath: instancePath + "/paddingLeft",
                schemaPath: "#/properties/paddingLeft/type",
                keyword: "type",
                params: {
                  type: "integer"
                },
                message: "must be integer"
              };
              if (vErrors === null) {
                vErrors = [err5];
              } else {
                vErrors.push(err5);
              }
              errors++;
            }
          }
          if (data.paddingRight !== undefined) {
            var data6 = data.paddingRight;
            if (!(typeof data6 == "number" && !(data6 % 1) && !isNaN(data6) && isFinite(data6))) {
              var err6 = {
                instancePath: instancePath + "/paddingRight",
                schemaPath: "#/properties/paddingRight/type",
                keyword: "type",
                params: {
                  type: "integer"
                },
                message: "must be integer"
              };
              if (vErrors === null) {
                vErrors = [err6];
              } else {
                vErrors.push(err6);
              }
              errors++;
            }
          }
        } else {
          var err7 = {
            instancePath: instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {
              type: "object"
            },
            message: "must be object"
          };
          if (vErrors === null) {
            vErrors = [err7];
          } else {
            vErrors.push(err7);
          }
          errors++;
        }
        validate71.errors = vErrors;
        return errors === 0;
      }
      function validate70(data) {
        var _ref0 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref0$instancePath = _ref0.instancePath,
          instancePath = _ref0$instancePath === void 0 ? "" : _ref0$instancePath,
          parentData = _ref0.parentData,
          parentDataProperty = _ref0.parentDataProperty,
          _ref0$rootData = _ref0.rootData,
          rootData = _ref0$rootData === void 0 ? data : _ref0$rootData;
        var vErrors = null;
        var errors = 0;
        var _errs0 = errors;
        var valid0 = false;
        var passing0 = null;
        var _errs1 = errors;
        if (data && _typeof(data) == "object" && !Array.isArray(data)) {
          for (var key0 in data) {
            if (!pattern0.test(key0)) {
              var err0 = {
                instancePath: instancePath,
                schemaPath: "#/oneOf/0/additionalProperties",
                keyword: "additionalProperties",
                params: {
                  additionalProperty: key0
                },
                message: "must NOT have additional properties"
              };
              if (vErrors === null) {
                vErrors = [err0];
              } else {
                vErrors.push(err0);
              }
              errors++;
            }
          }
          for (var key1 in data) {
            if (pattern0.test(key1)) {
              if (!validate71(data[key1], {
                instancePath: instancePath + "/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"),
                parentData: data,
                parentDataProperty: key1,
                rootData: rootData
              })) {
                vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
                errors = vErrors.length;
              }
            }
          }
        } else {
          var err1 = {
            instancePath: instancePath,
            schemaPath: "#/oneOf/0/type",
            keyword: "type",
            params: {
              type: "object"
            },
            message: "must be object"
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
        var _valid0 = _errs1 === errors;
        if (_valid0) {
          valid0 = true;
          passing0 = 0;
        }
        var _errs5 = errors;
        if (Array.isArray(data)) {
          var len0 = data.length;
          for (var i0 = 0; i0 < len0; i0++) {
            if (!validate71(data[i0], {
              instancePath: instancePath + "/" + i0,
              parentData: data,
              parentDataProperty: i0,
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
              errors = vErrors.length;
            }
          }
        } else {
          var err2 = {
            instancePath: instancePath,
            schemaPath: "#/oneOf/1/type",
            keyword: "type",
            params: {
              type: "array"
            },
            message: "must be array"
          };
          if (vErrors === null) {
            vErrors = [err2];
          } else {
            vErrors.push(err2);
          }
          errors++;
        }
        var _valid0 = _errs5 === errors;
        if (_valid0 && valid0) {
          valid0 = false;
          passing0 = [passing0, 1];
        } else {
          if (_valid0) {
            valid0 = true;
            passing0 = 1;
          }
        }
        if (!valid0) {
          var err3 = {
            instancePath: instancePath,
            schemaPath: "#/oneOf",
            keyword: "oneOf",
            params: {
              passingSchemas: passing0
            },
            message: "must match exactly one schema in oneOf"
          };
          if (vErrors === null) {
            vErrors = [err3];
          } else {
            vErrors.push(err3);
          }
          errors++;
        } else {
          errors = _errs0;
          if (vErrors !== null) {
            if (_errs0) {
              vErrors.length = _errs0;
            } else {
              vErrors = null;
            }
          }
        }
        validate70.errors = vErrors;
        return errors === 0;
      }
      function validate79(data) {
        var _ref1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref1$instancePath = _ref1.instancePath,
          instancePath = _ref1$instancePath === void 0 ? "" : _ref1$instancePath,
          parentData = _ref1.parentData,
          parentDataProperty = _ref1.parentDataProperty,
          _ref1$rootData = _ref1.rootData,
          rootData = _ref1$rootData === void 0 ? data : _ref1$rootData;
        var vErrors = null;
        var errors = 0;
        if (data && _typeof(data) == "object" && !Array.isArray(data)) {
          for (var key0 in data) {
            if (!(key0 === "alignment" || key0 === "verticalAlignment" || key0 === "width" || key0 === "wrapWord" || key0 === "truncate" || key0 === "paddingLeft" || key0 === "paddingRight")) {
              var err0 = {
                instancePath: instancePath,
                schemaPath: "#/additionalProperties",
                keyword: "additionalProperties",
                params: {
                  additionalProperty: key0
                },
                message: "must NOT have additional properties"
              };
              if (vErrors === null) {
                vErrors = [err0];
              } else {
                vErrors.push(err0);
              }
              errors++;
            }
          }
          if (data.alignment !== undefined) {
            if (!validate72(data.alignment, {
              instancePath: instancePath + "/alignment",
              parentData: data,
              parentDataProperty: "alignment",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate72.errors : vErrors.concat(validate72.errors);
              errors = vErrors.length;
            }
          }
          if (data.verticalAlignment !== undefined) {
            if (!validate74(data.verticalAlignment, {
              instancePath: instancePath + "/verticalAlignment",
              parentData: data,
              parentDataProperty: "verticalAlignment",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate74.errors : vErrors.concat(validate74.errors);
              errors = vErrors.length;
            }
          }
          if (data.width !== undefined) {
            var data2 = data.width;
            if (!(typeof data2 == "number" && !(data2 % 1) && !isNaN(data2) && isFinite(data2))) {
              var err1 = {
                instancePath: instancePath + "/width",
                schemaPath: "#/properties/width/type",
                keyword: "type",
                params: {
                  type: "integer"
                },
                message: "must be integer"
              };
              if (vErrors === null) {
                vErrors = [err1];
              } else {
                vErrors.push(err1);
              }
              errors++;
            }
            if (typeof data2 == "number" && isFinite(data2)) {
              if (data2 < 1 || isNaN(data2)) {
                var err2 = {
                  instancePath: instancePath + "/width",
                  schemaPath: "#/properties/width/minimum",
                  keyword: "minimum",
                  params: {
                    comparison: ">=",
                    limit: 1
                  },
                  message: "must be >= 1"
                };
                if (vErrors === null) {
                  vErrors = [err2];
                } else {
                  vErrors.push(err2);
                }
                errors++;
              }
            }
          }
          if (data.wrapWord !== undefined) {
            if (typeof data.wrapWord !== "boolean") {
              var err3 = {
                instancePath: instancePath + "/wrapWord",
                schemaPath: "#/properties/wrapWord/type",
                keyword: "type",
                params: {
                  type: "boolean"
                },
                message: "must be boolean"
              };
              if (vErrors === null) {
                vErrors = [err3];
              } else {
                vErrors.push(err3);
              }
              errors++;
            }
          }
          if (data.truncate !== undefined) {
            var data4 = data.truncate;
            if (!(typeof data4 == "number" && !(data4 % 1) && !isNaN(data4) && isFinite(data4))) {
              var err4 = {
                instancePath: instancePath + "/truncate",
                schemaPath: "#/properties/truncate/type",
                keyword: "type",
                params: {
                  type: "integer"
                },
                message: "must be integer"
              };
              if (vErrors === null) {
                vErrors = [err4];
              } else {
                vErrors.push(err4);
              }
              errors++;
            }
          }
          if (data.paddingLeft !== undefined) {
            var data5 = data.paddingLeft;
            if (!(typeof data5 == "number" && !(data5 % 1) && !isNaN(data5) && isFinite(data5))) {
              var err5 = {
                instancePath: instancePath + "/paddingLeft",
                schemaPath: "#/properties/paddingLeft/type",
                keyword: "type",
                params: {
                  type: "integer"
                },
                message: "must be integer"
              };
              if (vErrors === null) {
                vErrors = [err5];
              } else {
                vErrors.push(err5);
              }
              errors++;
            }
          }
          if (data.paddingRight !== undefined) {
            var data6 = data.paddingRight;
            if (!(typeof data6 == "number" && !(data6 % 1) && !isNaN(data6) && isFinite(data6))) {
              var err6 = {
                instancePath: instancePath + "/paddingRight",
                schemaPath: "#/properties/paddingRight/type",
                keyword: "type",
                params: {
                  type: "integer"
                },
                message: "must be integer"
              };
              if (vErrors === null) {
                vErrors = [err6];
              } else {
                vErrors.push(err6);
              }
              errors++;
            }
          }
        } else {
          var err7 = {
            instancePath: instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {
              type: "object"
            },
            message: "must be object"
          };
          if (vErrors === null) {
            vErrors = [err7];
          } else {
            vErrors.push(err7);
          }
          errors++;
        }
        validate79.errors = vErrors;
        return errors === 0;
      }
      function validate84(data) {
        var _ref10 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref10$instancePath = _ref10.instancePath,
          instancePath = _ref10$instancePath === void 0 ? "" : _ref10$instancePath,
          parentData = _ref10.parentData,
          parentDataProperty = _ref10.parentDataProperty,
          _ref10$rootData = _ref10.rootData,
          rootData = _ref10$rootData === void 0 ? data : _ref10$rootData;
        var vErrors = null;
        var errors = 0;
        if (typeof data !== "string") {
          var err0 = {
            instancePath: instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {
              type: "string"
            },
            message: "must be string"
          };
          if (vErrors === null) {
            vErrors = [err0];
          } else {
            vErrors.push(err0);
          }
          errors++;
        }
        if (!(data === "top" || data === "middle" || data === "bottom")) {
          var err1 = {
            instancePath: instancePath,
            schemaPath: "#/enum",
            keyword: "enum",
            params: {
              allowedValues: schema21.enum
            },
            message: "must be equal to one of the allowed values"
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
        validate84.errors = vErrors;
        return errors === 0;
      }
      function validate43(data) {
        var _ref11 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref11$instancePath = _ref11.instancePath,
          instancePath = _ref11$instancePath === void 0 ? "" : _ref11$instancePath,
          parentData = _ref11.parentData,
          parentDataProperty = _ref11.parentDataProperty,
          _ref11$rootData = _ref11.rootData,
          rootData = _ref11$rootData === void 0 ? data : _ref11$rootData;
        /*# sourceURL="config.json" */;
        var vErrors = null;
        var errors = 0;
        if (data && _typeof(data) == "object" && !Array.isArray(data)) {
          for (var key0 in data) {
            if (!(key0 === "border" || key0 === "header" || key0 === "columns" || key0 === "columnDefault" || key0 === "drawVerticalLine" || key0 === "drawHorizontalLine" || key0 === "singleLine" || key0 === "spanningCells")) {
              var err0 = {
                instancePath: instancePath,
                schemaPath: "#/additionalProperties",
                keyword: "additionalProperties",
                params: {
                  additionalProperty: key0
                },
                message: "must NOT have additional properties"
              };
              if (vErrors === null) {
                vErrors = [err0];
              } else {
                vErrors.push(err0);
              }
              errors++;
            }
          }
          if (data.border !== undefined) {
            if (!validate45(data.border, {
              instancePath: instancePath + "/border",
              parentData: data,
              parentDataProperty: "border",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate45.errors : vErrors.concat(validate45.errors);
              errors = vErrors.length;
            }
          }
          if (data.header !== undefined) {
            var data1 = data.header;
            if (data1 && _typeof(data1) == "object" && !Array.isArray(data1)) {
              if (data1.content === undefined) {
                var err1 = {
                  instancePath: instancePath + "/header",
                  schemaPath: "#/properties/header/required",
                  keyword: "required",
                  params: {
                    missingProperty: "content"
                  },
                  message: "must have required property '" + "content" + "'"
                };
                if (vErrors === null) {
                  vErrors = [err1];
                } else {
                  vErrors.push(err1);
                }
                errors++;
              }
              for (var key1 in data1) {
                if (!(key1 === "content" || key1 === "alignment" || key1 === "wrapWord" || key1 === "truncate" || key1 === "paddingLeft" || key1 === "paddingRight")) {
                  var err2 = {
                    instancePath: instancePath + "/header",
                    schemaPath: "#/properties/header/additionalProperties",
                    keyword: "additionalProperties",
                    params: {
                      additionalProperty: key1
                    },
                    message: "must NOT have additional properties"
                  };
                  if (vErrors === null) {
                    vErrors = [err2];
                  } else {
                    vErrors.push(err2);
                  }
                  errors++;
                }
              }
              if (data1.content !== undefined) {
                if (typeof data1.content !== "string") {
                  var err3 = {
                    instancePath: instancePath + "/header/content",
                    schemaPath: "#/properties/header/properties/content/type",
                    keyword: "type",
                    params: {
                      type: "string"
                    },
                    message: "must be string"
                  };
                  if (vErrors === null) {
                    vErrors = [err3];
                  } else {
                    vErrors.push(err3);
                  }
                  errors++;
                }
              }
              if (data1.alignment !== undefined) {
                if (!validate68(data1.alignment, {
                  instancePath: instancePath + "/header/alignment",
                  parentData: data1,
                  parentDataProperty: "alignment",
                  rootData: rootData
                })) {
                  vErrors = vErrors === null ? validate68.errors : vErrors.concat(validate68.errors);
                  errors = vErrors.length;
                }
              }
              if (data1.wrapWord !== undefined) {
                if (typeof data1.wrapWord !== "boolean") {
                  var err4 = {
                    instancePath: instancePath + "/header/wrapWord",
                    schemaPath: "#/properties/header/properties/wrapWord/type",
                    keyword: "type",
                    params: {
                      type: "boolean"
                    },
                    message: "must be boolean"
                  };
                  if (vErrors === null) {
                    vErrors = [err4];
                  } else {
                    vErrors.push(err4);
                  }
                  errors++;
                }
              }
              if (data1.truncate !== undefined) {
                var data5 = data1.truncate;
                if (!(typeof data5 == "number" && !(data5 % 1) && !isNaN(data5) && isFinite(data5))) {
                  var err5 = {
                    instancePath: instancePath + "/header/truncate",
                    schemaPath: "#/properties/header/properties/truncate/type",
                    keyword: "type",
                    params: {
                      type: "integer"
                    },
                    message: "must be integer"
                  };
                  if (vErrors === null) {
                    vErrors = [err5];
                  } else {
                    vErrors.push(err5);
                  }
                  errors++;
                }
              }
              if (data1.paddingLeft !== undefined) {
                var data6 = data1.paddingLeft;
                if (!(typeof data6 == "number" && !(data6 % 1) && !isNaN(data6) && isFinite(data6))) {
                  var err6 = {
                    instancePath: instancePath + "/header/paddingLeft",
                    schemaPath: "#/properties/header/properties/paddingLeft/type",
                    keyword: "type",
                    params: {
                      type: "integer"
                    },
                    message: "must be integer"
                  };
                  if (vErrors === null) {
                    vErrors = [err6];
                  } else {
                    vErrors.push(err6);
                  }
                  errors++;
                }
              }
              if (data1.paddingRight !== undefined) {
                var data7 = data1.paddingRight;
                if (!(typeof data7 == "number" && !(data7 % 1) && !isNaN(data7) && isFinite(data7))) {
                  var err7 = {
                    instancePath: instancePath + "/header/paddingRight",
                    schemaPath: "#/properties/header/properties/paddingRight/type",
                    keyword: "type",
                    params: {
                      type: "integer"
                    },
                    message: "must be integer"
                  };
                  if (vErrors === null) {
                    vErrors = [err7];
                  } else {
                    vErrors.push(err7);
                  }
                  errors++;
                }
              }
            } else {
              var err8 = {
                instancePath: instancePath + "/header",
                schemaPath: "#/properties/header/type",
                keyword: "type",
                params: {
                  type: "object"
                },
                message: "must be object"
              };
              if (vErrors === null) {
                vErrors = [err8];
              } else {
                vErrors.push(err8);
              }
              errors++;
            }
          }
          if (data.columns !== undefined) {
            if (!validate70(data.columns, {
              instancePath: instancePath + "/columns",
              parentData: data,
              parentDataProperty: "columns",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate70.errors : vErrors.concat(validate70.errors);
              errors = vErrors.length;
            }
          }
          if (data.columnDefault !== undefined) {
            if (!validate79(data.columnDefault, {
              instancePath: instancePath + "/columnDefault",
              parentData: data,
              parentDataProperty: "columnDefault",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate79.errors : vErrors.concat(validate79.errors);
              errors = vErrors.length;
            }
          }
          if (data.drawVerticalLine !== undefined) {
            if (typeof data.drawVerticalLine != "function") {
              var err9 = {
                instancePath: instancePath + "/drawVerticalLine",
                schemaPath: "#/properties/drawVerticalLine/typeof",
                keyword: "typeof",
                params: {},
                message: "must pass \"typeof\" keyword validation"
              };
              if (vErrors === null) {
                vErrors = [err9];
              } else {
                vErrors.push(err9);
              }
              errors++;
            }
          }
          if (data.drawHorizontalLine !== undefined) {
            if (typeof data.drawHorizontalLine != "function") {
              var err10 = {
                instancePath: instancePath + "/drawHorizontalLine",
                schemaPath: "#/properties/drawHorizontalLine/typeof",
                keyword: "typeof",
                params: {},
                message: "must pass \"typeof\" keyword validation"
              };
              if (vErrors === null) {
                vErrors = [err10];
              } else {
                vErrors.push(err10);
              }
              errors++;
            }
          }
          if (data.singleLine !== undefined) {
            if (typeof data.singleLine != "boolean") {
              var err11 = {
                instancePath: instancePath + "/singleLine",
                schemaPath: "#/properties/singleLine/typeof",
                keyword: "typeof",
                params: {},
                message: "must pass \"typeof\" keyword validation"
              };
              if (vErrors === null) {
                vErrors = [err11];
              } else {
                vErrors.push(err11);
              }
              errors++;
            }
          }
          if (data.spanningCells !== undefined) {
            var data13 = data.spanningCells;
            if (Array.isArray(data13)) {
              var len0 = data13.length;
              for (var i0 = 0; i0 < len0; i0++) {
                var data14 = data13[i0];
                if (data14 && _typeof(data14) == "object" && !Array.isArray(data14)) {
                  if (data14.row === undefined) {
                    var err12 = {
                      instancePath: instancePath + "/spanningCells/" + i0,
                      schemaPath: "#/properties/spanningCells/items/required",
                      keyword: "required",
                      params: {
                        missingProperty: "row"
                      },
                      message: "must have required property '" + "row" + "'"
                    };
                    if (vErrors === null) {
                      vErrors = [err12];
                    } else {
                      vErrors.push(err12);
                    }
                    errors++;
                  }
                  if (data14.col === undefined) {
                    var err13 = {
                      instancePath: instancePath + "/spanningCells/" + i0,
                      schemaPath: "#/properties/spanningCells/items/required",
                      keyword: "required",
                      params: {
                        missingProperty: "col"
                      },
                      message: "must have required property '" + "col" + "'"
                    };
                    if (vErrors === null) {
                      vErrors = [err13];
                    } else {
                      vErrors.push(err13);
                    }
                    errors++;
                  }
                  for (var key2 in data14) {
                    if (!func8.call(schema13.properties.spanningCells.items.properties, key2)) {
                      var err14 = {
                        instancePath: instancePath + "/spanningCells/" + i0,
                        schemaPath: "#/properties/spanningCells/items/additionalProperties",
                        keyword: "additionalProperties",
                        params: {
                          additionalProperty: key2
                        },
                        message: "must NOT have additional properties"
                      };
                      if (vErrors === null) {
                        vErrors = [err14];
                      } else {
                        vErrors.push(err14);
                      }
                      errors++;
                    }
                  }
                  if (data14.col !== undefined) {
                    var data15 = data14.col;
                    if (!(typeof data15 == "number" && !(data15 % 1) && !isNaN(data15) && isFinite(data15))) {
                      var err15 = {
                        instancePath: instancePath + "/spanningCells/" + i0 + "/col",
                        schemaPath: "#/properties/spanningCells/items/properties/col/type",
                        keyword: "type",
                        params: {
                          type: "integer"
                        },
                        message: "must be integer"
                      };
                      if (vErrors === null) {
                        vErrors = [err15];
                      } else {
                        vErrors.push(err15);
                      }
                      errors++;
                    }
                    if (typeof data15 == "number" && isFinite(data15)) {
                      if (data15 < 0 || isNaN(data15)) {
                        var err16 = {
                          instancePath: instancePath + "/spanningCells/" + i0 + "/col",
                          schemaPath: "#/properties/spanningCells/items/properties/col/minimum",
                          keyword: "minimum",
                          params: {
                            comparison: ">=",
                            limit: 0
                          },
                          message: "must be >= 0"
                        };
                        if (vErrors === null) {
                          vErrors = [err16];
                        } else {
                          vErrors.push(err16);
                        }
                        errors++;
                      }
                    }
                  }
                  if (data14.row !== undefined) {
                    var data16 = data14.row;
                    if (!(typeof data16 == "number" && !(data16 % 1) && !isNaN(data16) && isFinite(data16))) {
                      var err17 = {
                        instancePath: instancePath + "/spanningCells/" + i0 + "/row",
                        schemaPath: "#/properties/spanningCells/items/properties/row/type",
                        keyword: "type",
                        params: {
                          type: "integer"
                        },
                        message: "must be integer"
                      };
                      if (vErrors === null) {
                        vErrors = [err17];
                      } else {
                        vErrors.push(err17);
                      }
                      errors++;
                    }
                    if (typeof data16 == "number" && isFinite(data16)) {
                      if (data16 < 0 || isNaN(data16)) {
                        var err18 = {
                          instancePath: instancePath + "/spanningCells/" + i0 + "/row",
                          schemaPath: "#/properties/spanningCells/items/properties/row/minimum",
                          keyword: "minimum",
                          params: {
                            comparison: ">=",
                            limit: 0
                          },
                          message: "must be >= 0"
                        };
                        if (vErrors === null) {
                          vErrors = [err18];
                        } else {
                          vErrors.push(err18);
                        }
                        errors++;
                      }
                    }
                  }
                  if (data14.colSpan !== undefined) {
                    var data17 = data14.colSpan;
                    if (!(typeof data17 == "number" && !(data17 % 1) && !isNaN(data17) && isFinite(data17))) {
                      var err19 = {
                        instancePath: instancePath + "/spanningCells/" + i0 + "/colSpan",
                        schemaPath: "#/properties/spanningCells/items/properties/colSpan/type",
                        keyword: "type",
                        params: {
                          type: "integer"
                        },
                        message: "must be integer"
                      };
                      if (vErrors === null) {
                        vErrors = [err19];
                      } else {
                        vErrors.push(err19);
                      }
                      errors++;
                    }
                    if (typeof data17 == "number" && isFinite(data17)) {
                      if (data17 < 1 || isNaN(data17)) {
                        var err20 = {
                          instancePath: instancePath + "/spanningCells/" + i0 + "/colSpan",
                          schemaPath: "#/properties/spanningCells/items/properties/colSpan/minimum",
                          keyword: "minimum",
                          params: {
                            comparison: ">=",
                            limit: 1
                          },
                          message: "must be >= 1"
                        };
                        if (vErrors === null) {
                          vErrors = [err20];
                        } else {
                          vErrors.push(err20);
                        }
                        errors++;
                      }
                    }
                  }
                  if (data14.rowSpan !== undefined) {
                    var data18 = data14.rowSpan;
                    if (!(typeof data18 == "number" && !(data18 % 1) && !isNaN(data18) && isFinite(data18))) {
                      var err21 = {
                        instancePath: instancePath + "/spanningCells/" + i0 + "/rowSpan",
                        schemaPath: "#/properties/spanningCells/items/properties/rowSpan/type",
                        keyword: "type",
                        params: {
                          type: "integer"
                        },
                        message: "must be integer"
                      };
                      if (vErrors === null) {
                        vErrors = [err21];
                      } else {
                        vErrors.push(err21);
                      }
                      errors++;
                    }
                    if (typeof data18 == "number" && isFinite(data18)) {
                      if (data18 < 1 || isNaN(data18)) {
                        var err22 = {
                          instancePath: instancePath + "/spanningCells/" + i0 + "/rowSpan",
                          schemaPath: "#/properties/spanningCells/items/properties/rowSpan/minimum",
                          keyword: "minimum",
                          params: {
                            comparison: ">=",
                            limit: 1
                          },
                          message: "must be >= 1"
                        };
                        if (vErrors === null) {
                          vErrors = [err22];
                        } else {
                          vErrors.push(err22);
                        }
                        errors++;
                      }
                    }
                  }
                  if (data14.alignment !== undefined) {
                    if (!validate68(data14.alignment, {
                      instancePath: instancePath + "/spanningCells/" + i0 + "/alignment",
                      parentData: data14,
                      parentDataProperty: "alignment",
                      rootData: rootData
                    })) {
                      vErrors = vErrors === null ? validate68.errors : vErrors.concat(validate68.errors);
                      errors = vErrors.length;
                    }
                  }
                  if (data14.verticalAlignment !== undefined) {
                    if (!validate84(data14.verticalAlignment, {
                      instancePath: instancePath + "/spanningCells/" + i0 + "/verticalAlignment",
                      parentData: data14,
                      parentDataProperty: "verticalAlignment",
                      rootData: rootData
                    })) {
                      vErrors = vErrors === null ? validate84.errors : vErrors.concat(validate84.errors);
                      errors = vErrors.length;
                    }
                  }
                  if (data14.wrapWord !== undefined) {
                    if (typeof data14.wrapWord !== "boolean") {
                      var err23 = {
                        instancePath: instancePath + "/spanningCells/" + i0 + "/wrapWord",
                        schemaPath: "#/properties/spanningCells/items/properties/wrapWord/type",
                        keyword: "type",
                        params: {
                          type: "boolean"
                        },
                        message: "must be boolean"
                      };
                      if (vErrors === null) {
                        vErrors = [err23];
                      } else {
                        vErrors.push(err23);
                      }
                      errors++;
                    }
                  }
                  if (data14.truncate !== undefined) {
                    var data22 = data14.truncate;
                    if (!(typeof data22 == "number" && !(data22 % 1) && !isNaN(data22) && isFinite(data22))) {
                      var err24 = {
                        instancePath: instancePath + "/spanningCells/" + i0 + "/truncate",
                        schemaPath: "#/properties/spanningCells/items/properties/truncate/type",
                        keyword: "type",
                        params: {
                          type: "integer"
                        },
                        message: "must be integer"
                      };
                      if (vErrors === null) {
                        vErrors = [err24];
                      } else {
                        vErrors.push(err24);
                      }
                      errors++;
                    }
                  }
                  if (data14.paddingLeft !== undefined) {
                    var data23 = data14.paddingLeft;
                    if (!(typeof data23 == "number" && !(data23 % 1) && !isNaN(data23) && isFinite(data23))) {
                      var err25 = {
                        instancePath: instancePath + "/spanningCells/" + i0 + "/paddingLeft",
                        schemaPath: "#/properties/spanningCells/items/properties/paddingLeft/type",
                        keyword: "type",
                        params: {
                          type: "integer"
                        },
                        message: "must be integer"
                      };
                      if (vErrors === null) {
                        vErrors = [err25];
                      } else {
                        vErrors.push(err25);
                      }
                      errors++;
                    }
                  }
                  if (data14.paddingRight !== undefined) {
                    var data24 = data14.paddingRight;
                    if (!(typeof data24 == "number" && !(data24 % 1) && !isNaN(data24) && isFinite(data24))) {
                      var err26 = {
                        instancePath: instancePath + "/spanningCells/" + i0 + "/paddingRight",
                        schemaPath: "#/properties/spanningCells/items/properties/paddingRight/type",
                        keyword: "type",
                        params: {
                          type: "integer"
                        },
                        message: "must be integer"
                      };
                      if (vErrors === null) {
                        vErrors = [err26];
                      } else {
                        vErrors.push(err26);
                      }
                      errors++;
                    }
                  }
                } else {
                  var err27 = {
                    instancePath: instancePath + "/spanningCells/" + i0,
                    schemaPath: "#/properties/spanningCells/items/type",
                    keyword: "type",
                    params: {
                      type: "object"
                    },
                    message: "must be object"
                  };
                  if (vErrors === null) {
                    vErrors = [err27];
                  } else {
                    vErrors.push(err27);
                  }
                  errors++;
                }
              }
            } else {
              var err28 = {
                instancePath: instancePath + "/spanningCells",
                schemaPath: "#/properties/spanningCells/type",
                keyword: "type",
                params: {
                  type: "array"
                },
                message: "must be array"
              };
              if (vErrors === null) {
                vErrors = [err28];
              } else {
                vErrors.push(err28);
              }
              errors++;
            }
          }
        } else {
          var err29 = {
            instancePath: instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {
              type: "object"
            },
            message: "must be object"
          };
          if (vErrors === null) {
            vErrors = [err29];
          } else {
            vErrors.push(err29);
          }
          errors++;
        }
        validate43.errors = vErrors;
        return errors === 0;
      }
      exports["streamConfig.json"] = validate86;
      var schema24 = {
        "$id": "streamConfig.json",
        "$schema": "http://json-schema.org/draft-07/schema#",
        "type": "object",
        "properties": {
          "border": {
            "$ref": "shared.json#/definitions/borders"
          },
          "columns": {
            "$ref": "shared.json#/definitions/columns"
          },
          "columnDefault": {
            "$ref": "shared.json#/definitions/column"
          },
          "columnCount": {
            "type": "integer",
            "minimum": 1
          },
          "drawVerticalLine": {
            "typeof": "function"
          }
        },
        "required": ["columnDefault", "columnCount"],
        "additionalProperties": false
      };
      function validate87(data) {
        var _ref12 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref12$instancePath = _ref12.instancePath,
          instancePath = _ref12$instancePath === void 0 ? "" : _ref12$instancePath,
          parentData = _ref12.parentData,
          parentDataProperty = _ref12.parentDataProperty,
          _ref12$rootData = _ref12.rootData,
          rootData = _ref12$rootData === void 0 ? data : _ref12$rootData;
        var vErrors = null;
        var errors = 0;
        if (data && _typeof(data) == "object" && !Array.isArray(data)) {
          for (var key0 in data) {
            if (!func8.call(schema15.properties, key0)) {
              var err0 = {
                instancePath: instancePath,
                schemaPath: "#/additionalProperties",
                keyword: "additionalProperties",
                params: {
                  additionalProperty: key0
                },
                message: "must NOT have additional properties"
              };
              if (vErrors === null) {
                vErrors = [err0];
              } else {
                vErrors.push(err0);
              }
              errors++;
            }
          }
          if (data.topBody !== undefined) {
            if (!validate46(data.topBody, {
              instancePath: instancePath + "/topBody",
              parentData: data,
              parentDataProperty: "topBody",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.topJoin !== undefined) {
            if (!validate46(data.topJoin, {
              instancePath: instancePath + "/topJoin",
              parentData: data,
              parentDataProperty: "topJoin",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.topLeft !== undefined) {
            if (!validate46(data.topLeft, {
              instancePath: instancePath + "/topLeft",
              parentData: data,
              parentDataProperty: "topLeft",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.topRight !== undefined) {
            if (!validate46(data.topRight, {
              instancePath: instancePath + "/topRight",
              parentData: data,
              parentDataProperty: "topRight",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.bottomBody !== undefined) {
            if (!validate46(data.bottomBody, {
              instancePath: instancePath + "/bottomBody",
              parentData: data,
              parentDataProperty: "bottomBody",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.bottomJoin !== undefined) {
            if (!validate46(data.bottomJoin, {
              instancePath: instancePath + "/bottomJoin",
              parentData: data,
              parentDataProperty: "bottomJoin",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.bottomLeft !== undefined) {
            if (!validate46(data.bottomLeft, {
              instancePath: instancePath + "/bottomLeft",
              parentData: data,
              parentDataProperty: "bottomLeft",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.bottomRight !== undefined) {
            if (!validate46(data.bottomRight, {
              instancePath: instancePath + "/bottomRight",
              parentData: data,
              parentDataProperty: "bottomRight",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.bodyLeft !== undefined) {
            if (!validate46(data.bodyLeft, {
              instancePath: instancePath + "/bodyLeft",
              parentData: data,
              parentDataProperty: "bodyLeft",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.bodyRight !== undefined) {
            if (!validate46(data.bodyRight, {
              instancePath: instancePath + "/bodyRight",
              parentData: data,
              parentDataProperty: "bodyRight",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.bodyJoin !== undefined) {
            if (!validate46(data.bodyJoin, {
              instancePath: instancePath + "/bodyJoin",
              parentData: data,
              parentDataProperty: "bodyJoin",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.headerJoin !== undefined) {
            if (!validate46(data.headerJoin, {
              instancePath: instancePath + "/headerJoin",
              parentData: data,
              parentDataProperty: "headerJoin",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.joinBody !== undefined) {
            if (!validate46(data.joinBody, {
              instancePath: instancePath + "/joinBody",
              parentData: data,
              parentDataProperty: "joinBody",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.joinLeft !== undefined) {
            if (!validate46(data.joinLeft, {
              instancePath: instancePath + "/joinLeft",
              parentData: data,
              parentDataProperty: "joinLeft",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.joinRight !== undefined) {
            if (!validate46(data.joinRight, {
              instancePath: instancePath + "/joinRight",
              parentData: data,
              parentDataProperty: "joinRight",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.joinJoin !== undefined) {
            if (!validate46(data.joinJoin, {
              instancePath: instancePath + "/joinJoin",
              parentData: data,
              parentDataProperty: "joinJoin",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.joinMiddleUp !== undefined) {
            if (!validate46(data.joinMiddleUp, {
              instancePath: instancePath + "/joinMiddleUp",
              parentData: data,
              parentDataProperty: "joinMiddleUp",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.joinMiddleDown !== undefined) {
            if (!validate46(data.joinMiddleDown, {
              instancePath: instancePath + "/joinMiddleDown",
              parentData: data,
              parentDataProperty: "joinMiddleDown",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.joinMiddleLeft !== undefined) {
            if (!validate46(data.joinMiddleLeft, {
              instancePath: instancePath + "/joinMiddleLeft",
              parentData: data,
              parentDataProperty: "joinMiddleLeft",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
          if (data.joinMiddleRight !== undefined) {
            if (!validate46(data.joinMiddleRight, {
              instancePath: instancePath + "/joinMiddleRight",
              parentData: data,
              parentDataProperty: "joinMiddleRight",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate46.errors : vErrors.concat(validate46.errors);
              errors = vErrors.length;
            }
          }
        } else {
          var err1 = {
            instancePath: instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {
              type: "object"
            },
            message: "must be object"
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
        validate87.errors = vErrors;
        return errors === 0;
      }
      function validate109(data) {
        var _ref13 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref13$instancePath = _ref13.instancePath,
          instancePath = _ref13$instancePath === void 0 ? "" : _ref13$instancePath,
          parentData = _ref13.parentData,
          parentDataProperty = _ref13.parentDataProperty,
          _ref13$rootData = _ref13.rootData,
          rootData = _ref13$rootData === void 0 ? data : _ref13$rootData;
        var vErrors = null;
        var errors = 0;
        var _errs0 = errors;
        var valid0 = false;
        var passing0 = null;
        var _errs1 = errors;
        if (data && _typeof(data) == "object" && !Array.isArray(data)) {
          for (var key0 in data) {
            if (!pattern0.test(key0)) {
              var err0 = {
                instancePath: instancePath,
                schemaPath: "#/oneOf/0/additionalProperties",
                keyword: "additionalProperties",
                params: {
                  additionalProperty: key0
                },
                message: "must NOT have additional properties"
              };
              if (vErrors === null) {
                vErrors = [err0];
              } else {
                vErrors.push(err0);
              }
              errors++;
            }
          }
          for (var key1 in data) {
            if (pattern0.test(key1)) {
              if (!validate71(data[key1], {
                instancePath: instancePath + "/" + key1.replace(/~/g, "~0").replace(/\//g, "~1"),
                parentData: data,
                parentDataProperty: key1,
                rootData: rootData
              })) {
                vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
                errors = vErrors.length;
              }
            }
          }
        } else {
          var err1 = {
            instancePath: instancePath,
            schemaPath: "#/oneOf/0/type",
            keyword: "type",
            params: {
              type: "object"
            },
            message: "must be object"
          };
          if (vErrors === null) {
            vErrors = [err1];
          } else {
            vErrors.push(err1);
          }
          errors++;
        }
        var _valid0 = _errs1 === errors;
        if (_valid0) {
          valid0 = true;
          passing0 = 0;
        }
        var _errs5 = errors;
        if (Array.isArray(data)) {
          var len0 = data.length;
          for (var i0 = 0; i0 < len0; i0++) {
            if (!validate71(data[i0], {
              instancePath: instancePath + "/" + i0,
              parentData: data,
              parentDataProperty: i0,
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate71.errors : vErrors.concat(validate71.errors);
              errors = vErrors.length;
            }
          }
        } else {
          var err2 = {
            instancePath: instancePath,
            schemaPath: "#/oneOf/1/type",
            keyword: "type",
            params: {
              type: "array"
            },
            message: "must be array"
          };
          if (vErrors === null) {
            vErrors = [err2];
          } else {
            vErrors.push(err2);
          }
          errors++;
        }
        var _valid0 = _errs5 === errors;
        if (_valid0 && valid0) {
          valid0 = false;
          passing0 = [passing0, 1];
        } else {
          if (_valid0) {
            valid0 = true;
            passing0 = 1;
          }
        }
        if (!valid0) {
          var err3 = {
            instancePath: instancePath,
            schemaPath: "#/oneOf",
            keyword: "oneOf",
            params: {
              passingSchemas: passing0
            },
            message: "must match exactly one schema in oneOf"
          };
          if (vErrors === null) {
            vErrors = [err3];
          } else {
            vErrors.push(err3);
          }
          errors++;
        } else {
          errors = _errs0;
          if (vErrors !== null) {
            if (_errs0) {
              vErrors.length = _errs0;
            } else {
              vErrors = null;
            }
          }
        }
        validate109.errors = vErrors;
        return errors === 0;
      }
      function validate113(data) {
        var _ref14 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref14$instancePath = _ref14.instancePath,
          instancePath = _ref14$instancePath === void 0 ? "" : _ref14$instancePath,
          parentData = _ref14.parentData,
          parentDataProperty = _ref14.parentDataProperty,
          _ref14$rootData = _ref14.rootData,
          rootData = _ref14$rootData === void 0 ? data : _ref14$rootData;
        var vErrors = null;
        var errors = 0;
        if (data && _typeof(data) == "object" && !Array.isArray(data)) {
          for (var key0 in data) {
            if (!(key0 === "alignment" || key0 === "verticalAlignment" || key0 === "width" || key0 === "wrapWord" || key0 === "truncate" || key0 === "paddingLeft" || key0 === "paddingRight")) {
              var err0 = {
                instancePath: instancePath,
                schemaPath: "#/additionalProperties",
                keyword: "additionalProperties",
                params: {
                  additionalProperty: key0
                },
                message: "must NOT have additional properties"
              };
              if (vErrors === null) {
                vErrors = [err0];
              } else {
                vErrors.push(err0);
              }
              errors++;
            }
          }
          if (data.alignment !== undefined) {
            if (!validate72(data.alignment, {
              instancePath: instancePath + "/alignment",
              parentData: data,
              parentDataProperty: "alignment",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate72.errors : vErrors.concat(validate72.errors);
              errors = vErrors.length;
            }
          }
          if (data.verticalAlignment !== undefined) {
            if (!validate74(data.verticalAlignment, {
              instancePath: instancePath + "/verticalAlignment",
              parentData: data,
              parentDataProperty: "verticalAlignment",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate74.errors : vErrors.concat(validate74.errors);
              errors = vErrors.length;
            }
          }
          if (data.width !== undefined) {
            var data2 = data.width;
            if (!(typeof data2 == "number" && !(data2 % 1) && !isNaN(data2) && isFinite(data2))) {
              var err1 = {
                instancePath: instancePath + "/width",
                schemaPath: "#/properties/width/type",
                keyword: "type",
                params: {
                  type: "integer"
                },
                message: "must be integer"
              };
              if (vErrors === null) {
                vErrors = [err1];
              } else {
                vErrors.push(err1);
              }
              errors++;
            }
            if (typeof data2 == "number" && isFinite(data2)) {
              if (data2 < 1 || isNaN(data2)) {
                var err2 = {
                  instancePath: instancePath + "/width",
                  schemaPath: "#/properties/width/minimum",
                  keyword: "minimum",
                  params: {
                    comparison: ">=",
                    limit: 1
                  },
                  message: "must be >= 1"
                };
                if (vErrors === null) {
                  vErrors = [err2];
                } else {
                  vErrors.push(err2);
                }
                errors++;
              }
            }
          }
          if (data.wrapWord !== undefined) {
            if (typeof data.wrapWord !== "boolean") {
              var err3 = {
                instancePath: instancePath + "/wrapWord",
                schemaPath: "#/properties/wrapWord/type",
                keyword: "type",
                params: {
                  type: "boolean"
                },
                message: "must be boolean"
              };
              if (vErrors === null) {
                vErrors = [err3];
              } else {
                vErrors.push(err3);
              }
              errors++;
            }
          }
          if (data.truncate !== undefined) {
            var data4 = data.truncate;
            if (!(typeof data4 == "number" && !(data4 % 1) && !isNaN(data4) && isFinite(data4))) {
              var err4 = {
                instancePath: instancePath + "/truncate",
                schemaPath: "#/properties/truncate/type",
                keyword: "type",
                params: {
                  type: "integer"
                },
                message: "must be integer"
              };
              if (vErrors === null) {
                vErrors = [err4];
              } else {
                vErrors.push(err4);
              }
              errors++;
            }
          }
          if (data.paddingLeft !== undefined) {
            var data5 = data.paddingLeft;
            if (!(typeof data5 == "number" && !(data5 % 1) && !isNaN(data5) && isFinite(data5))) {
              var err5 = {
                instancePath: instancePath + "/paddingLeft",
                schemaPath: "#/properties/paddingLeft/type",
                keyword: "type",
                params: {
                  type: "integer"
                },
                message: "must be integer"
              };
              if (vErrors === null) {
                vErrors = [err5];
              } else {
                vErrors.push(err5);
              }
              errors++;
            }
          }
          if (data.paddingRight !== undefined) {
            var data6 = data.paddingRight;
            if (!(typeof data6 == "number" && !(data6 % 1) && !isNaN(data6) && isFinite(data6))) {
              var err6 = {
                instancePath: instancePath + "/paddingRight",
                schemaPath: "#/properties/paddingRight/type",
                keyword: "type",
                params: {
                  type: "integer"
                },
                message: "must be integer"
              };
              if (vErrors === null) {
                vErrors = [err6];
              } else {
                vErrors.push(err6);
              }
              errors++;
            }
          }
        } else {
          var err7 = {
            instancePath: instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {
              type: "object"
            },
            message: "must be object"
          };
          if (vErrors === null) {
            vErrors = [err7];
          } else {
            vErrors.push(err7);
          }
          errors++;
        }
        validate113.errors = vErrors;
        return errors === 0;
      }
      function validate86(data) {
        var _ref15 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref15$instancePath = _ref15.instancePath,
          instancePath = _ref15$instancePath === void 0 ? "" : _ref15$instancePath,
          parentData = _ref15.parentData,
          parentDataProperty = _ref15.parentDataProperty,
          _ref15$rootData = _ref15.rootData,
          rootData = _ref15$rootData === void 0 ? data : _ref15$rootData;
        /*# sourceURL="streamConfig.json" */;
        var vErrors = null;
        var errors = 0;
        if (data && _typeof(data) == "object" && !Array.isArray(data)) {
          if (data.columnDefault === undefined) {
            var err0 = {
              instancePath: instancePath,
              schemaPath: "#/required",
              keyword: "required",
              params: {
                missingProperty: "columnDefault"
              },
              message: "must have required property '" + "columnDefault" + "'"
            };
            if (vErrors === null) {
              vErrors = [err0];
            } else {
              vErrors.push(err0);
            }
            errors++;
          }
          if (data.columnCount === undefined) {
            var err1 = {
              instancePath: instancePath,
              schemaPath: "#/required",
              keyword: "required",
              params: {
                missingProperty: "columnCount"
              },
              message: "must have required property '" + "columnCount" + "'"
            };
            if (vErrors === null) {
              vErrors = [err1];
            } else {
              vErrors.push(err1);
            }
            errors++;
          }
          for (var key0 in data) {
            if (!(key0 === "border" || key0 === "columns" || key0 === "columnDefault" || key0 === "columnCount" || key0 === "drawVerticalLine")) {
              var err2 = {
                instancePath: instancePath,
                schemaPath: "#/additionalProperties",
                keyword: "additionalProperties",
                params: {
                  additionalProperty: key0
                },
                message: "must NOT have additional properties"
              };
              if (vErrors === null) {
                vErrors = [err2];
              } else {
                vErrors.push(err2);
              }
              errors++;
            }
          }
          if (data.border !== undefined) {
            if (!validate87(data.border, {
              instancePath: instancePath + "/border",
              parentData: data,
              parentDataProperty: "border",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate87.errors : vErrors.concat(validate87.errors);
              errors = vErrors.length;
            }
          }
          if (data.columns !== undefined) {
            if (!validate109(data.columns, {
              instancePath: instancePath + "/columns",
              parentData: data,
              parentDataProperty: "columns",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate109.errors : vErrors.concat(validate109.errors);
              errors = vErrors.length;
            }
          }
          if (data.columnDefault !== undefined) {
            if (!validate113(data.columnDefault, {
              instancePath: instancePath + "/columnDefault",
              parentData: data,
              parentDataProperty: "columnDefault",
              rootData: rootData
            })) {
              vErrors = vErrors === null ? validate113.errors : vErrors.concat(validate113.errors);
              errors = vErrors.length;
            }
          }
          if (data.columnCount !== undefined) {
            var data3 = data.columnCount;
            if (!(typeof data3 == "number" && !(data3 % 1) && !isNaN(data3) && isFinite(data3))) {
              var err3 = {
                instancePath: instancePath + "/columnCount",
                schemaPath: "#/properties/columnCount/type",
                keyword: "type",
                params: {
                  type: "integer"
                },
                message: "must be integer"
              };
              if (vErrors === null) {
                vErrors = [err3];
              } else {
                vErrors.push(err3);
              }
              errors++;
            }
            if (typeof data3 == "number" && isFinite(data3)) {
              if (data3 < 1 || isNaN(data3)) {
                var err4 = {
                  instancePath: instancePath + "/columnCount",
                  schemaPath: "#/properties/columnCount/minimum",
                  keyword: "minimum",
                  params: {
                    comparison: ">=",
                    limit: 1
                  },
                  message: "must be >= 1"
                };
                if (vErrors === null) {
                  vErrors = [err4];
                } else {
                  vErrors.push(err4);
                }
                errors++;
              }
            }
          }
          if (data.drawVerticalLine !== undefined) {
            if (typeof data.drawVerticalLine != "function") {
              var err5 = {
                instancePath: instancePath + "/drawVerticalLine",
                schemaPath: "#/properties/drawVerticalLine/typeof",
                keyword: "typeof",
                params: {},
                message: "must pass \"typeof\" keyword validation"
              };
              if (vErrors === null) {
                vErrors = [err5];
              } else {
                vErrors.push(err5);
              }
              errors++;
            }
          }
        } else {
          var err6 = {
            instancePath: instancePath,
            schemaPath: "#/type",
            keyword: "type",
            params: {
              type: "object"
            },
            message: "must be object"
          };
          if (vErrors === null) {
            vErrors = [err6];
          } else {
            vErrors.push(err6);
          }
          errors++;
        }
        validate86.errors = vErrors;
        return errors === 0;
      }
    }, {
      "ajv/dist/runtime/equal": 3
    }],
    32: [function (require, module, exports) {
      "use strict";

      /* eslint-disable sort-keys-fix/sort-keys-fix */
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getBorderCharacters = void 0;
      var getBorderCharacters = function getBorderCharacters(name) {
        if (name === 'honeywell') {
          return {
            topBody: '═',
            topJoin: '╤',
            topLeft: '╔',
            topRight: '╗',
            bottomBody: '═',
            bottomJoin: '╧',
            bottomLeft: '╚',
            bottomRight: '╝',
            bodyLeft: '║',
            bodyRight: '║',
            bodyJoin: '│',
            headerJoin: '┬',
            joinBody: '─',
            joinLeft: '╟',
            joinRight: '╢',
            joinJoin: '┼',
            joinMiddleDown: '┬',
            joinMiddleUp: '┴',
            joinMiddleLeft: '┤',
            joinMiddleRight: '├'
          };
        }
        if (name === 'norc') {
          return {
            topBody: '─',
            topJoin: '┬',
            topLeft: '┌',
            topRight: '┐',
            bottomBody: '─',
            bottomJoin: '┴',
            bottomLeft: '└',
            bottomRight: '┘',
            bodyLeft: '│',
            bodyRight: '│',
            bodyJoin: '│',
            headerJoin: '┬',
            joinBody: '─',
            joinLeft: '├',
            joinRight: '┤',
            joinJoin: '┼',
            joinMiddleDown: '┬',
            joinMiddleUp: '┴',
            joinMiddleLeft: '┤',
            joinMiddleRight: '├'
          };
        }
        if (name === 'ramac') {
          return {
            topBody: '-',
            topJoin: '+',
            topLeft: '+',
            topRight: '+',
            bottomBody: '-',
            bottomJoin: '+',
            bottomLeft: '+',
            bottomRight: '+',
            bodyLeft: '|',
            bodyRight: '|',
            bodyJoin: '|',
            headerJoin: '+',
            joinBody: '-',
            joinLeft: '|',
            joinRight: '|',
            joinJoin: '|',
            joinMiddleDown: '+',
            joinMiddleUp: '+',
            joinMiddleLeft: '+',
            joinMiddleRight: '+'
          };
        }
        if (name === 'void') {
          return {
            topBody: '',
            topJoin: '',
            topLeft: '',
            topRight: '',
            bottomBody: '',
            bottomJoin: '',
            bottomLeft: '',
            bottomRight: '',
            bodyLeft: '',
            bodyRight: '',
            bodyJoin: '',
            headerJoin: '',
            joinBody: '',
            joinLeft: '',
            joinRight: '',
            joinJoin: '',
            joinMiddleDown: '',
            joinMiddleUp: '',
            joinMiddleLeft: '',
            joinMiddleRight: ''
          };
        }
        throw new Error('Unknown border template "' + name + '".');
      };
      exports.getBorderCharacters = getBorderCharacters;
    }, {}],
    33: [function (require, module, exports) {
      "use strict";

      var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function get() {
            return m[k];
          }
        });
      } : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
      var __exportStar = this && this.__exportStar || function (m, exports) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.getBorderCharacters = exports.createStream = exports.table = void 0;
      var createStream_1 = require("./createStream");
      Object.defineProperty(exports, "createStream", {
        enumerable: true,
        get: function get() {
          return createStream_1.createStream;
        }
      });
      var getBorderCharacters_1 = require("./getBorderCharacters");
      Object.defineProperty(exports, "getBorderCharacters", {
        enumerable: true,
        get: function get() {
          return getBorderCharacters_1.getBorderCharacters;
        }
      });
      var table_1 = require("./table");
      Object.defineProperty(exports, "table", {
        enumerable: true,
        get: function get() {
          return table_1.table;
        }
      });
      __exportStar(require("./types/api"), exports);
    }, {
      "./createStream": 26,
      "./getBorderCharacters": 32,
      "./table": 42,
      "./types/api": 44
    }],
    34: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.injectHeaderConfig = void 0;
      var injectHeaderConfig = function injectHeaderConfig(rows, config) {
        var _a;
        var spanningCellConfig = (_a = config.spanningCells) !== null && _a !== void 0 ? _a : [];
        var headerConfig = config.header;
        var adjustedRows = _toConsumableArray(rows);
        if (headerConfig) {
          spanningCellConfig = spanningCellConfig.map(function (_ref16) {
            var row = _ref16.row,
              rest = _objectWithoutProperties(_ref16, _excluded);
            return _objectSpread(_objectSpread({}, rest), {}, {
              row: row + 1
            });
          });
          var content = headerConfig.content,
            headerStyles = _objectWithoutProperties(headerConfig, _excluded2);
          spanningCellConfig.unshift(_objectSpread({
            alignment: 'center',
            col: 0,
            colSpan: rows[0].length,
            paddingLeft: 1,
            paddingRight: 1,
            row: 0,
            wrapWord: false
          }, headerStyles));
          adjustedRows.unshift([content].concat(_toConsumableArray(Array.from({
            length: rows[0].length - 1
          }).fill(''))));
        }
        return [adjustedRows, spanningCellConfig];
      };
      exports.injectHeaderConfig = injectHeaderConfig;
    }, {}],
    35: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.makeRangeConfig = void 0;
      var utils_1 = require("./utils");
      var makeRangeConfig = function makeRangeConfig(spanningCellConfig, columnsConfig) {
        var _a;
        var _ref17 = (0, utils_1.calculateRangeCoordinate)(spanningCellConfig),
          topLeft = _ref17.topLeft,
          bottomRight = _ref17.bottomRight;
        var cellConfig = _objectSpread(_objectSpread(_objectSpread({}, columnsConfig[topLeft.col]), spanningCellConfig), {}, {
          paddingRight: (_a = spanningCellConfig.paddingRight) !== null && _a !== void 0 ? _a : columnsConfig[bottomRight.col].paddingRight
        });
        return _objectSpread(_objectSpread({}, cellConfig), {}, {
          bottomRight: bottomRight,
          topLeft: topLeft
        });
      };
      exports.makeRangeConfig = makeRangeConfig;
    }, {
      "./utils": 45
    }],
    36: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.makeStreamConfig = void 0;
      var utils_1 = require("./utils");
      var validateConfig_1 = require("./validateConfig");
      /**
       * Creates a configuration for every column using default
       * values for the missing configuration properties.
       */
      var makeColumnsConfig = function makeColumnsConfig(columnCount) {
        var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var columnDefault = arguments.length > 2 ? arguments[2] : undefined;
        return Array.from({
          length: columnCount
        }).map(function (_, index) {
          return _objectSpread(_objectSpread({
            alignment: 'left',
            paddingLeft: 1,
            paddingRight: 1,
            truncate: Number.POSITIVE_INFINITY,
            verticalAlignment: 'top',
            wrapWord: false
          }, columnDefault), columns[index]);
        });
      };
      /**
       * Makes a new configuration object out of the userConfig object
       * using default values for the missing configuration properties.
       */
      var makeStreamConfig = function makeStreamConfig(config) {
        (0, validateConfig_1.validateConfig)('streamConfig.json', config);
        if (config.columnDefault.width === undefined) {
          throw new Error('Must provide config.columnDefault.width when creating a stream.');
        }
        return _objectSpread(_objectSpread({
          drawVerticalLine: function drawVerticalLine() {
            return true;
          }
        }, config), {}, {
          border: (0, utils_1.makeBorderConfig)(config.border),
          columns: makeColumnsConfig(config.columnCount, config.columns, config.columnDefault)
        });
      };
      exports.makeStreamConfig = makeStreamConfig;
    }, {
      "./utils": 45,
      "./validateConfig": 46
    }],
    37: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.makeTableConfig = void 0;
      var calculateMaximumColumnWidths_1 = require("./calculateMaximumColumnWidths");
      var spanningCellManager_1 = require("./spanningCellManager");
      var utils_1 = require("./utils");
      var validateConfig_1 = require("./validateConfig");
      var validateSpanningCellConfig_1 = require("./validateSpanningCellConfig");
      /**
       * Creates a configuration for every column using default
       * values for the missing configuration properties.
       */
      var makeColumnsConfig = function makeColumnsConfig(rows, columns, columnDefault, spanningCellConfigs) {
        var columnWidths = (0, calculateMaximumColumnWidths_1.calculateMaximumColumnWidths)(rows, spanningCellConfigs);
        return rows[0].map(function (_, columnIndex) {
          return _objectSpread(_objectSpread({
            alignment: 'left',
            paddingLeft: 1,
            paddingRight: 1,
            truncate: Number.POSITIVE_INFINITY,
            verticalAlignment: 'top',
            width: columnWidths[columnIndex],
            wrapWord: false
          }, columnDefault), columns === null || columns === void 0 ? void 0 : columns[columnIndex]);
        });
      };
      /**
       * Makes a new configuration object out of the userConfig object
       * using default values for the missing configuration properties.
       */
      var makeTableConfig = function makeTableConfig(rows) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var injectedSpanningCellConfig = arguments.length > 2 ? arguments[2] : undefined;
        var _a, _b, _c, _d, _e;
        (0, validateConfig_1.validateConfig)('config.json', config);
        (0, validateSpanningCellConfig_1.validateSpanningCellConfig)(rows, (_a = config.spanningCells) !== null && _a !== void 0 ? _a : []);
        var spanningCellConfigs = (_b = injectedSpanningCellConfig !== null && injectedSpanningCellConfig !== void 0 ? injectedSpanningCellConfig : config.spanningCells) !== null && _b !== void 0 ? _b : [];
        var columnsConfig = makeColumnsConfig(rows, config.columns, config.columnDefault, spanningCellConfigs);
        var drawVerticalLine = (_c = config.drawVerticalLine) !== null && _c !== void 0 ? _c : function () {
          return true;
        };
        var drawHorizontalLine = (_d = config.drawHorizontalLine) !== null && _d !== void 0 ? _d : function () {
          return true;
        };
        return _objectSpread(_objectSpread({}, config), {}, {
          border: (0, utils_1.makeBorderConfig)(config.border),
          columns: columnsConfig,
          drawHorizontalLine: drawHorizontalLine,
          drawVerticalLine: drawVerticalLine,
          singleLine: (_e = config.singleLine) !== null && _e !== void 0 ? _e : false,
          spanningCellManager: (0, spanningCellManager_1.createSpanningCellManager)({
            columnsConfig: columnsConfig,
            drawHorizontalLine: drawHorizontalLine,
            drawVerticalLine: drawVerticalLine,
            rows: rows,
            spanningCellConfigs: spanningCellConfigs
          })
        });
      };
      exports.makeTableConfig = makeTableConfig;
    }, {
      "./calculateMaximumColumnWidths": 22,
      "./spanningCellManager": 40,
      "./utils": 45,
      "./validateConfig": 46,
      "./validateSpanningCellConfig": 47
    }],
    38: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.mapDataUsingRowHeights = exports.padCellVertically = void 0;
      var utils_1 = require("./utils");
      var wrapCell_1 = require("./wrapCell");
      var createEmptyStrings = function createEmptyStrings(length) {
        return new Array(length).fill('');
      };
      var padCellVertically = function padCellVertically(lines, rowHeight, verticalAlignment) {
        var availableLines = rowHeight - lines.length;
        if (verticalAlignment === 'top') {
          return [].concat(_toConsumableArray(lines), _toConsumableArray(createEmptyStrings(availableLines)));
        }
        if (verticalAlignment === 'bottom') {
          return [].concat(_toConsumableArray(createEmptyStrings(availableLines)), _toConsumableArray(lines));
        }
        return [].concat(_toConsumableArray(createEmptyStrings(Math.floor(availableLines / 2))), _toConsumableArray(lines), _toConsumableArray(createEmptyStrings(Math.ceil(availableLines / 2))));
      };
      exports.padCellVertically = padCellVertically;
      var mapDataUsingRowHeights = function mapDataUsingRowHeights(unmappedRows, rowHeights, config) {
        var nColumns = unmappedRows[0].length;
        var mappedRows = unmappedRows.map(function (unmappedRow, unmappedRowIndex) {
          var outputRowHeight = rowHeights[unmappedRowIndex];
          var outputRow = Array.from({
            length: outputRowHeight
          }, function () {
            return new Array(nColumns).fill('');
          });
          unmappedRow.forEach(function (cell, cellIndex) {
            var _a;
            var containingRange = (_a = config.spanningCellManager) === null || _a === void 0 ? void 0 : _a.getContainingRange({
              col: cellIndex,
              row: unmappedRowIndex
            });
            if (containingRange) {
              containingRange.extractCellContent(unmappedRowIndex).forEach(function (cellLine, cellLineIndex) {
                outputRow[cellLineIndex][cellIndex] = cellLine;
              });
              return;
            }
            var cellLines = (0, wrapCell_1.wrapCell)(cell, config.columns[cellIndex].width, config.columns[cellIndex].wrapWord);
            var paddedCellLines = (0, exports.padCellVertically)(cellLines, outputRowHeight, config.columns[cellIndex].verticalAlignment);
            paddedCellLines.forEach(function (cellLine, cellLineIndex) {
              outputRow[cellLineIndex][cellIndex] = cellLine;
            });
          });
          return outputRow;
        });
        return (0, utils_1.flatten)(mappedRows);
      };
      exports.mapDataUsingRowHeights = mapDataUsingRowHeights;
    }, {
      "./utils": 45,
      "./wrapCell": 49
    }],
    39: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.padTableData = exports.padString = void 0;
      var padString = function padString(input, paddingLeft, paddingRight) {
        return ' '.repeat(paddingLeft) + input + ' '.repeat(paddingRight);
      };
      exports.padString = padString;
      var padTableData = function padTableData(rows, config) {
        return rows.map(function (cells, rowIndex) {
          return cells.map(function (cell, cellIndex) {
            var _a;
            var containingRange = (_a = config.spanningCellManager) === null || _a === void 0 ? void 0 : _a.getContainingRange({
              col: cellIndex,
              row: rowIndex
            }, {
              mapped: true
            });
            if (containingRange) {
              return cell;
            }
            var _config$columns$cellI2 = config.columns[cellIndex],
              paddingLeft = _config$columns$cellI2.paddingLeft,
              paddingRight = _config$columns$cellI2.paddingRight;
            return (0, exports.padString)(cell, paddingLeft, paddingRight);
          });
        });
      };
      exports.padTableData = padTableData;
    }, {}],
    40: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.createSpanningCellManager = void 0;
      var alignSpanningCell_1 = require("./alignSpanningCell");
      var calculateSpanningCellWidth_1 = require("./calculateSpanningCellWidth");
      var makeRangeConfig_1 = require("./makeRangeConfig");
      var utils_1 = require("./utils");
      var findRangeConfig = function findRangeConfig(cell, rangeConfigs) {
        return rangeConfigs.find(function (rangeCoordinate) {
          return (0, utils_1.isCellInRange)(cell, rangeCoordinate);
        });
      };
      var _getContainingRange = function getContainingRange(rangeConfig, context) {
        var width = (0, calculateSpanningCellWidth_1.calculateSpanningCellWidth)(rangeConfig, context);
        var wrappedContent = (0, alignSpanningCell_1.wrapRangeContent)(rangeConfig, width, context);
        var alignedContent = (0, alignSpanningCell_1.alignVerticalRangeContent)(rangeConfig, wrappedContent, context);
        var getCellContent = function getCellContent(rowIndex) {
          var topLeft = rangeConfig.topLeft;
          var drawHorizontalLine = context.drawHorizontalLine,
            rowHeights = context.rowHeights;
          var totalWithinHorizontalBorderHeight = rowIndex - topLeft.row;
          var totalHiddenHorizontalBorderHeight = (0, utils_1.sequence)(topLeft.row + 1, rowIndex).filter(function (index) {
            /* istanbul ignore next */
            return !(drawHorizontalLine === null || drawHorizontalLine === void 0 ? void 0 : drawHorizontalLine(index, rowHeights.length));
          }).length;
          var offset = (0, utils_1.sumArray)(rowHeights.slice(topLeft.row, rowIndex)) + totalWithinHorizontalBorderHeight - totalHiddenHorizontalBorderHeight;
          return alignedContent.slice(offset, offset + rowHeights[rowIndex]);
        };
        var getBorderContent = function getBorderContent(borderIndex) {
          var topLeft = rangeConfig.topLeft;
          var offset = (0, utils_1.sumArray)(context.rowHeights.slice(topLeft.row, borderIndex)) + (borderIndex - topLeft.row - 1);
          return alignedContent[offset];
        };
        return _objectSpread(_objectSpread({}, rangeConfig), {}, {
          extractBorderContent: getBorderContent,
          extractCellContent: getCellContent,
          height: wrappedContent.length,
          width: width
        });
      };
      var _inSameRange = function inSameRange(cell1, cell2, ranges) {
        var range1 = findRangeConfig(cell1, ranges);
        var range2 = findRangeConfig(cell2, ranges);
        if (range1 && range2) {
          return (0, utils_1.areCellEqual)(range1.topLeft, range2.topLeft);
        }
        return false;
      };
      var hashRange = function hashRange(range) {
        var _range$topLeft = range.topLeft,
          row = _range$topLeft.row,
          col = _range$topLeft.col;
        return "".concat(row, "/").concat(col);
      };
      var createSpanningCellManager = function createSpanningCellManager(parameters) {
        var spanningCellConfigs = parameters.spanningCellConfigs,
          columnsConfig = parameters.columnsConfig;
        var ranges = spanningCellConfigs.map(function (config) {
          return (0, makeRangeConfig_1.makeRangeConfig)(config, columnsConfig);
        });
        var rangeCache = {};
        var rowHeights = [];
        var rowIndexMapping = [];
        return {
          getContainingRange: function getContainingRange(cell, options) {
            var _a;
            var originalRow = (options === null || options === void 0 ? void 0 : options.mapped) ? rowIndexMapping[cell.row] : cell.row;
            var range = findRangeConfig(_objectSpread(_objectSpread({}, cell), {}, {
              row: originalRow
            }), ranges);
            if (!range) {
              return undefined;
            }
            if (rowHeights.length === 0) {
              return _getContainingRange(range, _objectSpread(_objectSpread({}, parameters), {}, {
                rowHeights: rowHeights
              }));
            }
            var hash = hashRange(range);
            (_a = rangeCache[hash]) !== null && _a !== void 0 ? _a : rangeCache[hash] = _getContainingRange(range, _objectSpread(_objectSpread({}, parameters), {}, {
              rowHeights: rowHeights
            }));
            return rangeCache[hash];
          },
          inSameRange: function inSameRange(cell1, cell2) {
            return _inSameRange(cell1, cell2, ranges);
          },
          rowHeights: rowHeights,
          rowIndexMapping: rowIndexMapping,
          setRowHeights: function setRowHeights(_rowHeights) {
            rowHeights = _rowHeights;
          },
          setRowIndexMapping: function setRowIndexMapping(mappedRowHeights) {
            rowIndexMapping = (0, utils_1.flatten)(mappedRowHeights.map(function (height, index) {
              return Array.from({
                length: height
              }, function () {
                return index;
              });
            }));
          }
        };
      };
      exports.createSpanningCellManager = createSpanningCellManager;
    }, {
      "./alignSpanningCell": 18,
      "./calculateSpanningCellWidth": 25,
      "./makeRangeConfig": 35,
      "./utils": 45
    }],
    41: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.stringifyTableData = void 0;
      var utils_1 = require("./utils");
      var stringifyTableData = function stringifyTableData(rows) {
        return rows.map(function (cells) {
          return cells.map(function (cell) {
            return (0, utils_1.normalizeString)(String(cell));
          });
        });
      };
      exports.stringifyTableData = stringifyTableData;
    }, {
      "./utils": 45
    }],
    42: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.table = void 0;
      var alignTableData_1 = require("./alignTableData");
      var calculateOutputColumnWidths_1 = require("./calculateOutputColumnWidths");
      var calculateRowHeights_1 = require("./calculateRowHeights");
      var drawTable_1 = require("./drawTable");
      var injectHeaderConfig_1 = require("./injectHeaderConfig");
      var makeTableConfig_1 = require("./makeTableConfig");
      var mapDataUsingRowHeights_1 = require("./mapDataUsingRowHeights");
      var padTableData_1 = require("./padTableData");
      var stringifyTableData_1 = require("./stringifyTableData");
      var truncateTableData_1 = require("./truncateTableData");
      var utils_1 = require("./utils");
      var validateTableData_1 = require("./validateTableData");
      var table = function table(data) {
        var userConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        (0, validateTableData_1.validateTableData)(data);
        var rows = (0, stringifyTableData_1.stringifyTableData)(data);
        var _ref18 = (0, injectHeaderConfig_1.injectHeaderConfig)(rows, userConfig),
          _ref19 = _slicedToArray(_ref18, 2),
          injectedRows = _ref19[0],
          injectedSpanningCellConfig = _ref19[1];
        var config = (0, makeTableConfig_1.makeTableConfig)(injectedRows, userConfig, injectedSpanningCellConfig);
        rows = (0, truncateTableData_1.truncateTableData)(injectedRows, (0, utils_1.extractTruncates)(config));
        var rowHeights = (0, calculateRowHeights_1.calculateRowHeights)(rows, config);
        config.spanningCellManager.setRowHeights(rowHeights);
        config.spanningCellManager.setRowIndexMapping(rowHeights);
        rows = (0, mapDataUsingRowHeights_1.mapDataUsingRowHeights)(rows, rowHeights, config);
        rows = (0, alignTableData_1.alignTableData)(rows, config);
        rows = (0, padTableData_1.padTableData)(rows, config);
        var outputColumnWidths = (0, calculateOutputColumnWidths_1.calculateOutputColumnWidths)(config);
        return (0, drawTable_1.drawTable)(rows, outputColumnWidths, rowHeights, config);
      };
      console.log(table);
      exports.table = table;
    }, {
      "./alignTableData": 20,
      "./calculateOutputColumnWidths": 23,
      "./calculateRowHeights": 24,
      "./drawTable": 30,
      "./injectHeaderConfig": 34,
      "./makeTableConfig": 37,
      "./mapDataUsingRowHeights": 38,
      "./padTableData": 39,
      "./stringifyTableData": 41,
      "./truncateTableData": 43,
      "./utils": 45,
      "./validateTableData": 48
    }],
    43: [function (require, module, exports) {
      "use strict";

      var __importDefault = this && this.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.truncateTableData = exports.truncateString = void 0;
      var lodash_truncate_1 = __importDefault(require("lodash.truncate"));
      var truncateString = function truncateString(input, length) {
        return (0, lodash_truncate_1.default)(input, {
          length: length,
          omission: '…'
        });
      };
      exports.truncateString = truncateString;
      /**
       * @todo Make it work with ASCII content.
       */
      var truncateTableData = function truncateTableData(rows, truncates) {
        return rows.map(function (cells) {
          return cells.map(function (cell, cellIndex) {
            return (0, exports.truncateString)(cell, truncates[cellIndex]);
          });
        });
      };
      exports.truncateTableData = truncateTableData;
    }, {
      "lodash.truncate": 14
    }],
    44: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
    }, {}],
    45: [function (require, module, exports) {
      "use strict";

      var __importDefault = this && this.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isCellInRange = exports.areCellEqual = exports.calculateRangeCoordinate = exports.flatten = exports.extractTruncates = exports.sumArray = exports.sequence = exports.distributeUnevenly = exports.countSpaceSequence = exports.groupBySizes = exports.makeBorderConfig = exports.splitAnsi = exports.normalizeString = void 0;
      var slice_ansi_1 = __importDefault(require("slice-ansi"));
      var string_width_1 = __importDefault(require("string-width"));
      var strip_ansi_1 = __importDefault(require("strip-ansi"));
      var getBorderCharacters_1 = require("./getBorderCharacters");
      /**
       * Converts Windows-style newline to Unix-style
       *
       * @internal
       */
      var normalizeString = function normalizeString(input) {
        return input.replace(/\r\n/g, '\n');
      };
      exports.normalizeString = normalizeString;
      /**
       * Splits ansi string by newlines
       *
       * @internal
       */
      var splitAnsi = function splitAnsi(input) {
        var lengths = (0, strip_ansi_1.default)(input).split('\n').map(string_width_1.default);
        var result = [];
        var startIndex = 0;
        lengths.forEach(function (length) {
          result.push(length === 0 ? '' : (0, slice_ansi_1.default)(input, startIndex, startIndex + length));
          // Plus 1 for the newline character itself
          startIndex += length + 1;
        });
        return result;
      };
      exports.splitAnsi = splitAnsi;
      /**
       * Merges user provided border characters with the default border ("honeywell") characters.
       *
       * @internal
       */
      var makeBorderConfig = function makeBorderConfig(border) {
        return _objectSpread(_objectSpread({}, (0, getBorderCharacters_1.getBorderCharacters)('honeywell')), border);
      };
      exports.makeBorderConfig = makeBorderConfig;
      /**
       * Groups the array into sub-arrays by sizes.
       *
       * @internal
       * @example
       * groupBySizes(['a', 'b', 'c', 'd', 'e'], [2, 1, 2]) = [ ['a', 'b'], ['c'], ['d', 'e'] ]
       */
      var groupBySizes = function groupBySizes(array, sizes) {
        var startIndex = 0;
        return sizes.map(function (size) {
          var group = array.slice(startIndex, startIndex + size);
          startIndex += size;
          return group;
        });
      };
      exports.groupBySizes = groupBySizes;
      /**
       * Counts the number of continuous spaces in a string
       *
       * @internal
       * @example
       * countGroupSpaces('a  bc  de f') = 3
       */
      var countSpaceSequence = function countSpaceSequence(input) {
        var _a, _b;
        return (_b = (_a = input.match(/\s+/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
      };
      exports.countSpaceSequence = countSpaceSequence;
      /**
       * Creates the non-increasing number array given sum and length
       * whose the difference between maximum and minimum is not greater than 1
       *
       * @internal
       * @example
       * distributeUnevenly(6, 3) = [2, 2, 2]
       * distributeUnevenly(8, 3) = [3, 3, 2]
       */
      var distributeUnevenly = function distributeUnevenly(sum, length) {
        var result = Array.from({
          length: length
        }).fill(Math.floor(sum / length));
        return result.map(function (element, index) {
          return element + (index < sum % length ? 1 : 0);
        });
      };
      exports.distributeUnevenly = distributeUnevenly;
      var sequence = function sequence(start, end) {
        return Array.from({
          length: end - start + 1
        }, function (_, index) {
          return index + start;
        });
      };
      exports.sequence = sequence;
      var sumArray = function sumArray(array) {
        return array.reduce(function (accumulator, element) {
          return accumulator + element;
        }, 0);
      };
      exports.sumArray = sumArray;
      var extractTruncates = function extractTruncates(config) {
        return config.columns.map(function (_ref20) {
          var truncate = _ref20.truncate;
          return truncate;
        });
      };
      exports.extractTruncates = extractTruncates;
      var flatten = function flatten(array) {
        var _ref21;
        return (_ref21 = []).concat.apply(_ref21, _toConsumableArray(array));
      };
      exports.flatten = flatten;
      var calculateRangeCoordinate = function calculateRangeCoordinate(spanningCellConfig) {
        var row = spanningCellConfig.row,
          col = spanningCellConfig.col,
          _spanningCellConfig$c = spanningCellConfig.colSpan,
          colSpan = _spanningCellConfig$c === void 0 ? 1 : _spanningCellConfig$c,
          _spanningCellConfig$r = spanningCellConfig.rowSpan,
          rowSpan = _spanningCellConfig$r === void 0 ? 1 : _spanningCellConfig$r;
        return {
          bottomRight: {
            col: col + colSpan - 1,
            row: row + rowSpan - 1
          },
          topLeft: {
            col: col,
            row: row
          }
        };
      };
      exports.calculateRangeCoordinate = calculateRangeCoordinate;
      var areCellEqual = function areCellEqual(cell1, cell2) {
        return cell1.row === cell2.row && cell1.col === cell2.col;
      };
      exports.areCellEqual = areCellEqual;
      var isCellInRange = function isCellInRange(cell, _ref22) {
        var topLeft = _ref22.topLeft,
          bottomRight = _ref22.bottomRight;
        return topLeft.row <= cell.row && cell.row <= bottomRight.row && topLeft.col <= cell.col && cell.col <= bottomRight.col;
      };
      exports.isCellInRange = isCellInRange;
    }, {
      "./getBorderCharacters": 32,
      "slice-ansi": 15,
      "string-width": 16,
      "strip-ansi": 17
    }],
    46: [function (require, module, exports) {
      "use strict";

      var __importDefault = this && this.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.validateConfig = void 0;
      var validators_1 = __importDefault(require("./generated/validators"));
      var validateConfig = function validateConfig(schemaId, config) {
        var validate = validators_1.default[schemaId];
        if (!validate(config) && validate.errors) {
          // eslint-disable-next-line promise/prefer-await-to-callbacks
          var errors = validate.errors.map(function (error) {
            return {
              message: error.message,
              params: error.params,
              schemaPath: error.schemaPath
            };
          });
          /* eslint-disable no-console */
          console.log('config', config);
          console.log('errors', errors);
          /* eslint-enable no-console */
          throw new Error('Invalid config.');
        }
      };
      exports.validateConfig = validateConfig;
    }, {
      "./generated/validators": 31
    }],
    47: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.validateSpanningCellConfig = void 0;
      var utils_1 = require("./utils");
      var inRange = function inRange(start, end, value) {
        return start <= value && value <= end;
      };
      var validateSpanningCellConfig = function validateSpanningCellConfig(rows, configs) {
        var _ref23 = [rows.length, rows[0].length],
          nRow = _ref23[0],
          nCol = _ref23[1];
        configs.forEach(function (config, configIndex) {
          var colSpan = config.colSpan,
            rowSpan = config.rowSpan;
          if (colSpan === undefined && rowSpan === undefined) {
            throw new Error("Expect at least colSpan or rowSpan is provided in config.spanningCells[".concat(configIndex, "]"));
          }
          if (colSpan !== undefined && colSpan < 1) {
            throw new Error("Expect colSpan is not equal zero, instead got: ".concat(colSpan, " in config.spanningCells[").concat(configIndex, "]"));
          }
          if (rowSpan !== undefined && rowSpan < 1) {
            throw new Error("Expect rowSpan is not equal zero, instead got: ".concat(rowSpan, " in config.spanningCells[").concat(configIndex, "]"));
          }
        });
        var rangeCoordinates = configs.map(utils_1.calculateRangeCoordinate);
        rangeCoordinates.forEach(function (_ref24, rangeIndex) {
          var topLeft = _ref24.topLeft,
            bottomRight = _ref24.bottomRight;
          if (!inRange(0, nCol - 1, topLeft.col) || !inRange(0, nRow - 1, topLeft.row) || !inRange(0, nCol - 1, bottomRight.col) || !inRange(0, nRow - 1, bottomRight.row)) {
            throw new Error("Some cells in config.spanningCells[".concat(rangeIndex, "] are out of the table"));
          }
        });
        var configOccupy = Array.from({
          length: nRow
        }, function () {
          return Array.from({
            length: nCol
          });
        });
        rangeCoordinates.forEach(function (_ref25, rangeIndex) {
          var topLeft = _ref25.topLeft,
            bottomRight = _ref25.bottomRight;
          (0, utils_1.sequence)(topLeft.row, bottomRight.row).forEach(function (row) {
            (0, utils_1.sequence)(topLeft.col, bottomRight.col).forEach(function (col) {
              if (configOccupy[row][col] !== undefined) {
                throw new Error("Spanning cells in config.spanningCells[".concat(configOccupy[row][col], "] and config.spanningCells[").concat(rangeIndex, "] are overlap each other"));
              }
              configOccupy[row][col] = rangeIndex;
            });
          });
        });
      };
      exports.validateSpanningCellConfig = validateSpanningCellConfig;
    }, {
      "./utils": 45
    }],
    48: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.validateTableData = void 0;
      var utils_1 = require("./utils");
      var validateTableData = function validateTableData(rows) {
        if (!Array.isArray(rows)) {
          throw new TypeError('Table data must be an array.');
        }
        if (rows.length === 0) {
          throw new Error('Table must define at least one row.');
        }
        if (rows[0].length === 0) {
          throw new Error('Table must define at least one column.');
        }
        var columnNumber = rows[0].length;
        var _iterator4 = _createForOfIteratorHelper(rows),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var row = _step4.value;
            if (!Array.isArray(row)) {
              throw new TypeError('Table row data must be an array.');
            }
            if (row.length !== columnNumber) {
              throw new Error('Table must have a consistent number of cells.');
            }
            var _iterator5 = _createForOfIteratorHelper(row),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var cell = _step5.value;
                // eslint-disable-next-line no-control-regex
                if (/[\u0001-\u0006\u0008\u0009\u000B-\u001A]/.test((0, utils_1.normalizeString)(String(cell)))) {
                  throw new Error('Table data must not contain control characters.');
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      };
      exports.validateTableData = validateTableData;
    }, {
      "./utils": 45
    }],
    49: [function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.wrapCell = void 0;
      var utils_1 = require("./utils");
      var wrapString_1 = require("./wrapString");
      var wrapWord_1 = require("./wrapWord");
      /**
       * Wrap a single cell value into a list of lines
       *
       * Always wraps on newlines, for the remainder uses either word or string wrapping
       * depending on user configuration.
       *
       */
      var wrapCell = function wrapCell(cellValue, cellWidth, useWrapWord) {
        // First split on literal newlines
        var cellLines = (0, utils_1.splitAnsi)(cellValue);
        // Then iterate over the list and word-wrap every remaining line if necessary.
        for (var lineNr = 0; lineNr < cellLines.length;) {
          var lineChunks = void 0;
          if (useWrapWord) {
            lineChunks = (0, wrapWord_1.wrapWord)(cellLines[lineNr], cellWidth);
          } else {
            lineChunks = (0, wrapString_1.wrapString)(cellLines[lineNr], cellWidth);
          }
          // Replace our original array element with whatever the wrapping returned
          cellLines.splice.apply(cellLines, [lineNr, 1].concat(_toConsumableArray(lineChunks)));
          lineNr += lineChunks.length;
        }
        return cellLines;
      };
      exports.wrapCell = wrapCell;
    }, {
      "./utils": 45,
      "./wrapString": 50,
      "./wrapWord": 51
    }],
    50: [function (require, module, exports) {
      "use strict";

      var __importDefault = this && this.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.wrapString = void 0;
      var slice_ansi_1 = __importDefault(require("slice-ansi"));
      var string_width_1 = __importDefault(require("string-width"));
      /**
       * Creates an array of strings split into groups the length of size.
       * This function works with strings that contain ASCII characters.
       *
       * wrapText is different from would-be "chunk" implementation
       * in that whitespace characters that occur on a chunk size limit are trimmed.
       *
       */
      var wrapString = function wrapString(subject, size) {
        var subjectSlice = subject;
        var chunks = [];
        do {
          chunks.push((0, slice_ansi_1.default)(subjectSlice, 0, size));
          subjectSlice = (0, slice_ansi_1.default)(subjectSlice, size).trim();
        } while ((0, string_width_1.default)(subjectSlice));
        return chunks;
      };
      exports.wrapString = wrapString;
    }, {
      "slice-ansi": 15,
      "string-width": 16
    }],
    51: [function (require, module, exports) {
      "use strict";

      var __importDefault = this && this.__importDefault || function (mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      };
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.wrapWord = void 0;
      var slice_ansi_1 = __importDefault(require("slice-ansi"));
      var strip_ansi_1 = __importDefault(require("strip-ansi"));
      var calculateStringLengths = function calculateStringLengths(input, size) {
        var subject = (0, strip_ansi_1.default)(input);
        var chunks = [];
        // https://regex101.com/r/gY5kZ1/1
        var re = new RegExp('(^.{1,' + String(Math.max(size, 1)) + '}(\\s+|$))|(^.{1,' + String(Math.max(size - 1, 1)) + '}(\\\\|/|_|\\.|,|;|-))');
        do {
          var chunk = void 0;
          var match = re.exec(subject);
          if (match) {
            chunk = match[0];
            subject = subject.slice(chunk.length);
            var trimmedLength = chunk.trim().length;
            var offset = chunk.length - trimmedLength;
            chunks.push([trimmedLength, offset]);
          } else {
            chunk = subject.slice(0, size);
            subject = subject.slice(size);
            chunks.push([chunk.length, 0]);
          }
        } while (subject.length);
        return chunks;
      };
      var wrapWord = function wrapWord(input, size) {
        var result = [];
        var startIndex = 0;
        calculateStringLengths(input, size).forEach(function (_ref26) {
          var _ref27 = _slicedToArray(_ref26, 2),
            length = _ref27[0],
            offset = _ref27[1];
          result.push((0, slice_ansi_1.default)(input, startIndex, startIndex + length));
          startIndex += length + offset;
        });
        return result;
      };
      exports.wrapWord = wrapWord;
    }, {
      "slice-ansi": 15,
      "strip-ansi": 17
    }]
  }, {}, [2])(2);
});

})();