(function(){
 "use strict";

function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
    g.cliTable3 = f();
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
      (function (global) {
        (function () {
          'use strict';

          var possibleNames = require('possible-typed-array-names');
          var g = typeof globalThis === 'undefined' ? global : globalThis;

          /** @type {import('.')} */
          module.exports = function availableTypedArrays() {
            var /** @type {ReturnType<typeof availableTypedArrays>} */out = [];
            for (var i = 0; i < possibleNames.length; i++) {
              if (typeof g[possibleNames[i]] === 'function') {
                // @ts-expect-error
                out[out.length] = possibleNames[i];
              }
            }
            return out;
          };
        }).call(this);
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "possible-typed-array-names": 50
    }],
    2: [function (require, module, exports) {
      'use strict';

      var bind = require('function-bind');
      var $apply = require('./functionApply');
      var $call = require('./functionCall');
      var $reflectApply = require('./reflectApply');

      /** @type {import('./actualApply')} */
      module.exports = $reflectApply || bind.call($call, $apply);
    }, {
      "./functionApply": 4,
      "./functionCall": 5,
      "./reflectApply": 7,
      "function-bind": 23
    }],
    3: [function (require, module, exports) {
      'use strict';

      var bind = require('function-bind');
      var $apply = require('./functionApply');
      var actualApply = require('./actualApply');

      /** @type {import('./applyBind')} */
      module.exports = function applyBind() {
        return actualApply(bind, $apply, arguments);
      };
    }, {
      "./actualApply": 2,
      "./functionApply": 4,
      "function-bind": 23
    }],
    4: [function (require, module, exports) {
      'use strict';

      /** @type {import('./functionApply')} */
      module.exports = Function.prototype.apply;
    }, {}],
    5: [function (require, module, exports) {
      'use strict';

      /** @type {import('./functionCall')} */
      module.exports = Function.prototype.call;
    }, {}],
    6: [function (require, module, exports) {
      'use strict';

      var bind = require('function-bind');
      var $TypeError = require('es-errors/type');
      var $call = require('./functionCall');
      var $actualApply = require('./actualApply');

      /** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */
      module.exports = function callBindBasic(args) {
        if (args.length < 1 || typeof args[0] !== 'function') {
          throw new $TypeError('a function is required');
        }
        return $actualApply(bind, $call, args);
      };
    }, {
      "./actualApply": 2,
      "./functionCall": 5,
      "es-errors/type": 18,
      "function-bind": 23
    }],
    7: [function (require, module, exports) {
      'use strict';

      /** @type {import('./reflectApply')} */
      module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;
    }, {}],
    8: [function (require, module, exports) {
      'use strict';

      var setFunctionLength = require('set-function-length');
      var $defineProperty = require('es-define-property');
      var callBindBasic = require('call-bind-apply-helpers');
      var applyBind = require('call-bind-apply-helpers/applyBind');
      module.exports = function callBind(originalFunction) {
        var func = callBindBasic(arguments);
        var adjustedLength = originalFunction.length - (arguments.length - 1);
        return setFunctionLength(func, 1 + (adjustedLength > 0 ? adjustedLength : 0), true);
      };
      if ($defineProperty) {
        $defineProperty(module.exports, 'apply', {
          value: applyBind
        });
      } else {
        module.exports.apply = applyBind;
      }
    }, {
      "call-bind-apply-helpers": 6,
      "call-bind-apply-helpers/applyBind": 3,
      "es-define-property": 12,
      "set-function-length": 53
    }],
    9: [function (require, module, exports) {
      'use strict';

      var GetIntrinsic = require('get-intrinsic');
      var callBindBasic = require('call-bind-apply-helpers');

      /** @type {(thisArg: string, searchString: string, position?: number) => number} */
      var $indexOf = callBindBasic([GetIntrinsic('%String.prototype.indexOf%')]);

      /** @type {import('.')} */
      module.exports = function callBoundIntrinsic(name, allowMissing) {
        /* eslint no-extra-parens: 0 */

        var intrinsic = /** @type {(this: unknown, ...args: unknown[]) => unknown} */GetIntrinsic(name, !!allowMissing);
        if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
          return callBindBasic(/** @type {const} */[intrinsic]);
        }
        return intrinsic;
      };
    }, {
      "call-bind-apply-helpers": 6,
      "get-intrinsic": 24
    }],
    10: [function (require, module, exports) {
      'use strict';

      var $defineProperty = require('es-define-property');
      var $SyntaxError = require('es-errors/syntax');
      var $TypeError = require('es-errors/type');
      var gopd = require('gopd');

      /** @type {import('.')} */
      module.exports = function defineDataProperty(obj, property, value) {
        if (!obj || _typeof(obj) !== 'object' && typeof obj !== 'function') {
          throw new $TypeError('`obj` must be an object or a function`');
        }
        if (typeof property !== 'string' && _typeof(property) !== 'symbol') {
          throw new $TypeError('`property` must be a string or a symbol`');
        }
        if (arguments.length > 3 && typeof arguments[3] !== 'boolean' && arguments[3] !== null) {
          throw new $TypeError('`nonEnumerable`, if provided, must be a boolean or null');
        }
        if (arguments.length > 4 && typeof arguments[4] !== 'boolean' && arguments[4] !== null) {
          throw new $TypeError('`nonWritable`, if provided, must be a boolean or null');
        }
        if (arguments.length > 5 && typeof arguments[5] !== 'boolean' && arguments[5] !== null) {
          throw new $TypeError('`nonConfigurable`, if provided, must be a boolean or null');
        }
        if (arguments.length > 6 && typeof arguments[6] !== 'boolean') {
          throw new $TypeError('`loose`, if provided, must be a boolean');
        }
        var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
        var nonWritable = arguments.length > 4 ? arguments[4] : null;
        var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
        var loose = arguments.length > 6 ? arguments[6] : false;

        /* @type {false | TypedPropertyDescriptor<unknown>} */
        var desc = !!gopd && gopd(obj, property);
        if ($defineProperty) {
          $defineProperty(obj, property, {
            configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
            enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
            value: value,
            writable: nonWritable === null && desc ? desc.writable : !nonWritable
          });
        } else if (loose || !nonEnumerable && !nonWritable && !nonConfigurable) {
          // must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
          obj[property] = value; // eslint-disable-line no-param-reassign
        } else {
          throw new $SyntaxError('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
        }
      };
    }, {
      "es-define-property": 12,
      "es-errors/syntax": 17,
      "es-errors/type": 18,
      "gopd": 29
    }],
    11: [function (require, module, exports) {
      'use strict';

      var callBind = require('call-bind-apply-helpers');
      var gOPD = require('gopd');
      var hasProtoAccessor;
      try {
        // eslint-disable-next-line no-extra-parens, no-proto
        hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */[].__proto__ === Array.prototype;
      } catch (e) {
        if (!e || _typeof(e) !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
          throw e;
        }
      }

      // eslint-disable-next-line no-extra-parens
      var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, /** @type {keyof typeof Object.prototype} */'__proto__');
      var $Object = Object;
      var $getPrototypeOf = $Object.getPrototypeOf;

      /** @type {import('./get')} */
      module.exports = desc && typeof desc.get === 'function' ? callBind([desc.get]) : typeof $getPrototypeOf === 'function' ? /** @type {import('./get')} */function getDunder(value) {
        // eslint-disable-next-line eqeqeq
        return $getPrototypeOf(value == null ? value : $Object(value));
      } : false;
    }, {
      "call-bind-apply-helpers": 6,
      "gopd": 29
    }],
    12: [function (require, module, exports) {
      'use strict';

      /** @type {import('.')} */
      var $defineProperty = Object.defineProperty || false;
      if ($defineProperty) {
        try {
          $defineProperty({}, 'a', {
            value: 1
          });
        } catch (e) {
          // IE 8 has a broken defineProperty
          $defineProperty = false;
        }
      }
      module.exports = $defineProperty;
    }, {}],
    13: [function (require, module, exports) {
      'use strict';

      /** @type {import('./eval')} */
      module.exports = EvalError;
    }, {}],
    14: [function (require, module, exports) {
      'use strict';

      /** @type {import('.')} */
      module.exports = Error;
    }, {}],
    15: [function (require, module, exports) {
      'use strict';

      /** @type {import('./range')} */
      module.exports = RangeError;
    }, {}],
    16: [function (require, module, exports) {
      'use strict';

      /** @type {import('./ref')} */
      module.exports = ReferenceError;
    }, {}],
    17: [function (require, module, exports) {
      'use strict';

      /** @type {import('./syntax')} */
      module.exports = SyntaxError;
    }, {}],
    18: [function (require, module, exports) {
      'use strict';

      /** @type {import('./type')} */
      module.exports = TypeError;
    }, {}],
    19: [function (require, module, exports) {
      'use strict';

      /** @type {import('./uri')} */
      module.exports = URIError;
    }, {}],
    20: [function (require, module, exports) {
      'use strict';

      /** @type {import('.')} */
      module.exports = Object;
    }, {}],
    21: [function (require, module, exports) {
      'use strict';

      var isCallable = require('is-callable');
      var toStr = Object.prototype.toString;
      var hasOwnProperty = Object.prototype.hasOwnProperty;

      /** @type {<This, A extends readonly unknown[]>(arr: A, iterator: (this: This | void, value: A[number], index: number, arr: A) => void, receiver: This | undefined) => void} */
      var forEachArray = function forEachArray(array, iterator, receiver) {
        for (var i = 0, len = array.length; i < len; i++) {
          if (hasOwnProperty.call(array, i)) {
            if (receiver == null) {
              iterator(array[i], i, array);
            } else {
              iterator.call(receiver, array[i], i, array);
            }
          }
        }
      };

      /** @type {<This, S extends string>(string: S, iterator: (this: This | void, value: S[number], index: number, string: S) => void, receiver: This | undefined) => void} */
      var forEachString = function forEachString(string, iterator, receiver) {
        for (var i = 0, len = string.length; i < len; i++) {
          // no such thing as a sparse string.
          if (receiver == null) {
            iterator(string.charAt(i), i, string);
          } else {
            iterator.call(receiver, string.charAt(i), i, string);
          }
        }
      };

      /** @type {<This, O>(obj: O, iterator: (this: This | void, value: O[keyof O], index: keyof O, obj: O) => void, receiver: This | undefined) => void} */
      var forEachObject = function forEachObject(object, iterator, receiver) {
        for (var k in object) {
          if (hasOwnProperty.call(object, k)) {
            if (receiver == null) {
              iterator(object[k], k, object);
            } else {
              iterator.call(receiver, object[k], k, object);
            }
          }
        }
      };

      /** @type {(x: unknown) => x is readonly unknown[]} */
      function isArray(x) {
        return toStr.call(x) === '[object Array]';
      }

      /** @type {import('.')._internal} */
      module.exports = function forEach(list, iterator, thisArg) {
        if (!isCallable(iterator)) {
          throw new TypeError('iterator must be a function');
        }
        var receiver;
        if (arguments.length >= 3) {
          receiver = thisArg;
        }
        if (isArray(list)) {
          forEachArray(list, iterator, receiver);
        } else if (typeof list === 'string') {
          forEachString(list, iterator, receiver);
        } else {
          forEachObject(list, iterator, receiver);
        }
      };
    }, {
      "is-callable": 37
    }],
    22: [function (require, module, exports) {
      'use strict';

      /* eslint no-invalid-this: 1 */
      var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
      var toStr = Object.prototype.toString;
      var max = Math.max;
      var funcType = '[object Function]';
      var concatty = function concatty(a, b) {
        var arr = [];
        for (var i = 0; i < a.length; i += 1) {
          arr[i] = a[i];
        }
        for (var j = 0; j < b.length; j += 1) {
          arr[j + a.length] = b[j];
        }
        return arr;
      };
      var slicy = function slicy(arrLike, offset) {
        var arr = [];
        for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
          arr[j] = arrLike[i];
        }
        return arr;
      };
      var joiny = function joiny(arr, joiner) {
        var str = '';
        for (var i = 0; i < arr.length; i += 1) {
          str += arr[i];
          if (i + 1 < arr.length) {
            str += joiner;
          }
        }
        return str;
      };
      module.exports = function bind(that) {
        var target = this;
        if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
          throw new TypeError(ERROR_MESSAGE + target);
        }
        var args = slicy(arguments, 1);
        var bound;
        var binder = function binder() {
          if (this instanceof bound) {
            var result = target.apply(this, concatty(args, arguments));
            if (Object(result) === result) {
              return result;
            }
            return this;
          }
          return target.apply(that, concatty(args, arguments));
        };
        var boundLength = max(0, target.length - args.length);
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
          boundArgs[i] = '$' + i;
        }
        bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);
        if (target.prototype) {
          var Empty = function Empty() {};
          Empty.prototype = target.prototype;
          bound.prototype = new Empty();
          Empty.prototype = null;
        }
        return bound;
      };
    }, {}],
    23: [function (require, module, exports) {
      'use strict';

      var implementation = require('./implementation');
      module.exports = Function.prototype.bind || implementation;
    }, {
      "./implementation": 22
    }],
    24: [function (require, module, exports) {
      'use strict';

      var undefined;
      var $Object = require('es-object-atoms');
      var $Error = require('es-errors');
      var $EvalError = require('es-errors/eval');
      var $RangeError = require('es-errors/range');
      var $ReferenceError = require('es-errors/ref');
      var $SyntaxError = require('es-errors/syntax');
      var $TypeError = require('es-errors/type');
      var $URIError = require('es-errors/uri');
      var abs = require('math-intrinsics/abs');
      var floor = require('math-intrinsics/floor');
      var max = require('math-intrinsics/max');
      var min = require('math-intrinsics/min');
      var pow = require('math-intrinsics/pow');
      var round = require('math-intrinsics/round');
      var sign = require('math-intrinsics/sign');
      var $Function = Function;

      // eslint-disable-next-line consistent-return
      var getEvalledConstructor = function getEvalledConstructor(expressionSyntax) {
        try {
          return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
        } catch (e) {}
      };
      var $gOPD = require('gopd');
      var $defineProperty = require('es-define-property');
      var throwTypeError = function throwTypeError() {
        throw new $TypeError();
      };
      var ThrowTypeError = $gOPD ? function () {
        try {
          // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
          arguments.callee; // IE 8 does not throw here
          return throwTypeError;
        } catch (calleeThrows) {
          try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, 'callee').get;
          } catch (gOPDthrows) {
            return throwTypeError;
          }
        }
      }() : throwTypeError;
      var hasSymbols = require('has-symbols')();
      var getProto = require('get-proto');
      var $ObjectGPO = require('get-proto/Object.getPrototypeOf');
      var $ReflectGPO = require('get-proto/Reflect.getPrototypeOf');
      var $apply = require('call-bind-apply-helpers/functionApply');
      var $call = require('call-bind-apply-helpers/functionCall');
      var needsEval = {};
      var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);
      var INTRINSICS = {
        __proto__: null,
        '%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
        '%Array%': Array,
        '%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
        '%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
        '%AsyncFromSyncIteratorPrototype%': undefined,
        '%AsyncFunction%': needsEval,
        '%AsyncGenerator%': needsEval,
        '%AsyncGeneratorFunction%': needsEval,
        '%AsyncIteratorPrototype%': needsEval,
        '%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
        '%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
        '%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
        '%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
        '%Boolean%': Boolean,
        '%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
        '%Date%': Date,
        '%decodeURI%': decodeURI,
        '%decodeURIComponent%': decodeURIComponent,
        '%encodeURI%': encodeURI,
        '%encodeURIComponent%': encodeURIComponent,
        '%Error%': $Error,
        '%eval%': eval,
        // eslint-disable-line no-eval
        '%EvalError%': $EvalError,
        '%Float16Array%': typeof Float16Array === 'undefined' ? undefined : Float16Array,
        '%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
        '%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
        '%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
        '%Function%': $Function,
        '%GeneratorFunction%': needsEval,
        '%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
        '%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
        '%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
        '%isFinite%': isFinite,
        '%isNaN%': isNaN,
        '%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
        '%JSON%': (typeof JSON === "undefined" ? "undefined" : _typeof(JSON)) === 'object' ? JSON : undefined,
        '%Map%': typeof Map === 'undefined' ? undefined : Map,
        '%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
        '%Math%': Math,
        '%Number%': Number,
        '%Object%': $Object,
        '%Object.getOwnPropertyDescriptor%': $gOPD,
        '%parseFloat%': parseFloat,
        '%parseInt%': parseInt,
        '%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
        '%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
        '%RangeError%': $RangeError,
        '%ReferenceError%': $ReferenceError,
        '%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
        '%RegExp%': RegExp,
        '%Set%': typeof Set === 'undefined' ? undefined : Set,
        '%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
        '%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
        '%String%': String,
        '%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
        '%Symbol%': hasSymbols ? Symbol : undefined,
        '%SyntaxError%': $SyntaxError,
        '%ThrowTypeError%': ThrowTypeError,
        '%TypedArray%': TypedArray,
        '%TypeError%': $TypeError,
        '%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
        '%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
        '%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
        '%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
        '%URIError%': $URIError,
        '%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
        '%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
        '%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
        '%Function.prototype.call%': $call,
        '%Function.prototype.apply%': $apply,
        '%Object.defineProperty%': $defineProperty,
        '%Object.getPrototypeOf%': $ObjectGPO,
        '%Math.abs%': abs,
        '%Math.floor%': floor,
        '%Math.max%': max,
        '%Math.min%': min,
        '%Math.pow%': pow,
        '%Math.round%': round,
        '%Math.sign%': sign,
        '%Reflect.getPrototypeOf%': $ReflectGPO
      };
      if (getProto) {
        try {
          null.error; // eslint-disable-line no-unused-expressions
        } catch (e) {
          // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
          var errorProto = getProto(getProto(e));
          INTRINSICS['%Error.prototype%'] = errorProto;
        }
      }
      var doEval = function doEval(name) {
        var value;
        if (name === '%AsyncFunction%') {
          value = getEvalledConstructor('async function () {}');
        } else if (name === '%GeneratorFunction%') {
          value = getEvalledConstructor('function* () {}');
        } else if (name === '%AsyncGeneratorFunction%') {
          value = getEvalledConstructor('async function* () {}');
        } else if (name === '%AsyncGenerator%') {
          var fn = doEval('%AsyncGeneratorFunction%');
          if (fn) {
            value = fn.prototype;
          }
        } else if (name === '%AsyncIteratorPrototype%') {
          var gen = doEval('%AsyncGenerator%');
          if (gen && getProto) {
            value = getProto(gen.prototype);
          }
        }
        INTRINSICS[name] = value;
        return value;
      };
      var LEGACY_ALIASES = {
        __proto__: null,
        '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
        '%ArrayPrototype%': ['Array', 'prototype'],
        '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
        '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
        '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
        '%ArrayProto_values%': ['Array', 'prototype', 'values'],
        '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
        '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
        '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
        '%BooleanPrototype%': ['Boolean', 'prototype'],
        '%DataViewPrototype%': ['DataView', 'prototype'],
        '%DatePrototype%': ['Date', 'prototype'],
        '%ErrorPrototype%': ['Error', 'prototype'],
        '%EvalErrorPrototype%': ['EvalError', 'prototype'],
        '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
        '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
        '%FunctionPrototype%': ['Function', 'prototype'],
        '%Generator%': ['GeneratorFunction', 'prototype'],
        '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
        '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
        '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
        '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
        '%JSONParse%': ['JSON', 'parse'],
        '%JSONStringify%': ['JSON', 'stringify'],
        '%MapPrototype%': ['Map', 'prototype'],
        '%NumberPrototype%': ['Number', 'prototype'],
        '%ObjectPrototype%': ['Object', 'prototype'],
        '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
        '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
        '%PromisePrototype%': ['Promise', 'prototype'],
        '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
        '%Promise_all%': ['Promise', 'all'],
        '%Promise_reject%': ['Promise', 'reject'],
        '%Promise_resolve%': ['Promise', 'resolve'],
        '%RangeErrorPrototype%': ['RangeError', 'prototype'],
        '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
        '%RegExpPrototype%': ['RegExp', 'prototype'],
        '%SetPrototype%': ['Set', 'prototype'],
        '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
        '%StringPrototype%': ['String', 'prototype'],
        '%SymbolPrototype%': ['Symbol', 'prototype'],
        '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
        '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
        '%TypeErrorPrototype%': ['TypeError', 'prototype'],
        '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
        '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
        '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
        '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
        '%URIErrorPrototype%': ['URIError', 'prototype'],
        '%WeakMapPrototype%': ['WeakMap', 'prototype'],
        '%WeakSetPrototype%': ['WeakSet', 'prototype']
      };
      var bind = require('function-bind');
      var hasOwn = require('hasown');
      var $concat = bind.call($call, Array.prototype.concat);
      var $spliceApply = bind.call($apply, Array.prototype.splice);
      var $replace = bind.call($call, String.prototype.replace);
      var $strSlice = bind.call($call, String.prototype.slice);
      var $exec = bind.call($call, RegExp.prototype.exec);

      /* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
      var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
      var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
      var stringToPath = function stringToPath(string) {
        var first = $strSlice(string, 0, 1);
        var last = $strSlice(string, -1);
        if (first === '%' && last !== '%') {
          throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
        } else if (last === '%' && first !== '%') {
          throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
        }
        var result = [];
        $replace(string, rePropName, function (match, number, quote, subString) {
          result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
        });
        return result;
      };
      /* end adaptation */

      var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
        var intrinsicName = name;
        var alias;
        if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
          alias = LEGACY_ALIASES[intrinsicName];
          intrinsicName = '%' + alias[0] + '%';
        }
        if (hasOwn(INTRINSICS, intrinsicName)) {
          var value = INTRINSICS[intrinsicName];
          if (value === needsEval) {
            value = doEval(intrinsicName);
          }
          if (typeof value === 'undefined' && !allowMissing) {
            throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
          }
          return {
            alias: alias,
            name: intrinsicName,
            value: value
          };
        }
        throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
      };
      module.exports = function GetIntrinsic(name, allowMissing) {
        if (typeof name !== 'string' || name.length === 0) {
          throw new $TypeError('intrinsic name must be a non-empty string');
        }
        if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
          throw new $TypeError('"allowMissing" argument must be a boolean');
        }
        if ($exec(/^%?[^%]*%?$/, name) === null) {
          throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
        }
        var parts = stringToPath(name);
        var intrinsicBaseName = parts.length > 0 ? parts[0] : '';
        var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
        var intrinsicRealName = intrinsic.name;
        var value = intrinsic.value;
        var skipFurtherCaching = false;
        var alias = intrinsic.alias;
        if (alias) {
          intrinsicBaseName = alias[0];
          $spliceApply(parts, $concat([0, 1], alias));
        }
        for (var i = 1, isOwn = true; i < parts.length; i += 1) {
          var part = parts[i];
          var first = $strSlice(part, 0, 1);
          var last = $strSlice(part, -1);
          if ((first === '"' || first === "'" || first === '`' || last === '"' || last === "'" || last === '`') && first !== last) {
            throw new $SyntaxError('property names with quotes must have matching quotes');
          }
          if (part === 'constructor' || !isOwn) {
            skipFurtherCaching = true;
          }
          intrinsicBaseName += '.' + part;
          intrinsicRealName = '%' + intrinsicBaseName + '%';
          if (hasOwn(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
          } else if (value != null) {
            if (!(part in value)) {
              if (!allowMissing) {
                throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
              }
              return void undefined;
            }
            if ($gOPD && i + 1 >= parts.length) {
              var desc = $gOPD(value, part);
              isOwn = !!desc;

              // By convention, when a data property is converted to an accessor
              // property to emulate a data property that does not suffer from
              // the override mistake, that accessor's getter is marked with
              // an `originalValue` property. Here, when we detect this, we
              // uphold the illusion by pretending to see that original data
              // property, i.e., returning the value rather than the getter
              // itself.
              if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
                value = desc.get;
              } else {
                value = value[part];
              }
            } else {
              isOwn = hasOwn(value, part);
              value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
              INTRINSICS[intrinsicRealName] = value;
            }
          }
        }
        return value;
      };
    }, {
      "call-bind-apply-helpers/functionApply": 4,
      "call-bind-apply-helpers/functionCall": 5,
      "es-define-property": 12,
      "es-errors": 14,
      "es-errors/eval": 13,
      "es-errors/range": 15,
      "es-errors/ref": 16,
      "es-errors/syntax": 17,
      "es-errors/type": 18,
      "es-errors/uri": 19,
      "es-object-atoms": 20,
      "function-bind": 23,
      "get-proto": 27,
      "get-proto/Object.getPrototypeOf": 25,
      "get-proto/Reflect.getPrototypeOf": 26,
      "gopd": 29,
      "has-symbols": 31,
      "hasown": 34,
      "math-intrinsics/abs": 41,
      "math-intrinsics/floor": 42,
      "math-intrinsics/max": 44,
      "math-intrinsics/min": 45,
      "math-intrinsics/pow": 46,
      "math-intrinsics/round": 47,
      "math-intrinsics/sign": 48
    }],
    25: [function (require, module, exports) {
      'use strict';

      var $Object = require('es-object-atoms');

      /** @type {import('./Object.getPrototypeOf')} */
      module.exports = $Object.getPrototypeOf || null;
    }, {
      "es-object-atoms": 20
    }],
    26: [function (require, module, exports) {
      'use strict';

      /** @type {import('./Reflect.getPrototypeOf')} */
      module.exports = typeof Reflect !== 'undefined' && Reflect.getPrototypeOf || null;
    }, {}],
    27: [function (require, module, exports) {
      'use strict';

      var reflectGetProto = require('./Reflect.getPrototypeOf');
      var originalGetProto = require('./Object.getPrototypeOf');
      var getDunderProto = require('dunder-proto/get');

      /** @type {import('.')} */
      module.exports = reflectGetProto ? function getProto(O) {
        // @ts-expect-error TS can't narrow inside a closure, for some reason
        return reflectGetProto(O);
      } : originalGetProto ? function getProto(O) {
        if (!O || _typeof(O) !== 'object' && typeof O !== 'function') {
          throw new TypeError('getProto: not an object');
        }
        // @ts-expect-error TS can't narrow inside a closure, for some reason
        return originalGetProto(O);
      } : getDunderProto ? function getProto(O) {
        // @ts-expect-error TS can't narrow inside a closure, for some reason
        return getDunderProto(O);
      } : null;
    }, {
      "./Object.getPrototypeOf": 25,
      "./Reflect.getPrototypeOf": 26,
      "dunder-proto/get": 11
    }],
    28: [function (require, module, exports) {
      'use strict';

      /** @type {import('./gOPD')} */
      module.exports = Object.getOwnPropertyDescriptor;
    }, {}],
    29: [function (require, module, exports) {
      'use strict';

      /** @type {import('.')} */
      var $gOPD = require('./gOPD');
      if ($gOPD) {
        try {
          $gOPD([], 'length');
        } catch (e) {
          // IE 8 has a broken gOPD
          $gOPD = null;
        }
      }
      module.exports = $gOPD;
    }, {
      "./gOPD": 28
    }],
    30: [function (require, module, exports) {
      'use strict';

      var $defineProperty = require('es-define-property');
      var hasPropertyDescriptors = function hasPropertyDescriptors() {
        return !!$defineProperty;
      };
      hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
        // node v0.6 has a bug where array lengths can be Set but not Defined
        if (!$defineProperty) {
          return null;
        }
        try {
          return $defineProperty([], 'length', {
            value: 1
          }).length !== 1;
        } catch (e) {
          // In Firefox 4-22, defining length on an array throws an exception.
          return true;
        }
      };
      module.exports = hasPropertyDescriptors;
    }, {
      "es-define-property": 12
    }],
    31: [function (require, module, exports) {
      'use strict';

      var origSymbol = typeof Symbol !== 'undefined' && Symbol;
      var hasSymbolSham = require('./shams');

      /** @type {import('.')} */
      module.exports = function hasNativeSymbols() {
        if (typeof origSymbol !== 'function') {
          return false;
        }
        if (typeof Symbol !== 'function') {
          return false;
        }
        if (_typeof(origSymbol('foo')) !== 'symbol') {
          return false;
        }
        if (_typeof(Symbol('bar')) !== 'symbol') {
          return false;
        }
        return hasSymbolSham();
      };
    }, {
      "./shams": 32
    }],
    32: [function (require, module, exports) {
      'use strict';

      /** @type {import('./shams')} */
      /* eslint complexity: [2, 18], max-statements: [2, 33] */
      module.exports = function hasSymbols() {
        if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') {
          return false;
        }
        if (_typeof(Symbol.iterator) === 'symbol') {
          return true;
        }

        /** @type {{ [k in symbol]?: unknown }} */
        var obj = {};
        var sym = Symbol('test');
        var symObj = Object(sym);
        if (typeof sym === 'string') {
          return false;
        }
        if (Object.prototype.toString.call(sym) !== '[object Symbol]') {
          return false;
        }
        if (Object.prototype.toString.call(symObj) !== '[object Symbol]') {
          return false;
        }

        // temp disabled per https://github.com/ljharb/object.assign/issues/17
        // if (sym instanceof Symbol) { return false; }
        // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
        // if (!(symObj instanceof Symbol)) { return false; }

        // if (typeof Symbol.prototype.toString !== 'function') { return false; }
        // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

        var symVal = 42;
        obj[sym] = symVal;
        for (var _ in obj) {
          return false;
        } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
        if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) {
          return false;
        }
        if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) {
          return false;
        }
        var syms = Object.getOwnPropertySymbols(obj);
        if (syms.length !== 1 || syms[0] !== sym) {
          return false;
        }
        if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
          return false;
        }
        if (typeof Object.getOwnPropertyDescriptor === 'function') {
          // eslint-disable-next-line no-extra-parens
          var descriptor = /** @type {PropertyDescriptor} */Object.getOwnPropertyDescriptor(obj, sym);
          if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
          }
        }
        return true;
      };
    }, {}],
    33: [function (require, module, exports) {
      'use strict';

      var hasSymbols = require('has-symbols/shams');

      /** @type {import('.')} */
      module.exports = function hasToStringTagShams() {
        return hasSymbols() && !!Symbol.toStringTag;
      };
    }, {
      "has-symbols/shams": 32
    }],
    34: [function (require, module, exports) {
      'use strict';

      var call = Function.prototype.call;
      var $hasOwn = Object.prototype.hasOwnProperty;
      var bind = require('function-bind');

      /** @type {import('.')} */
      module.exports = bind.call(call, $hasOwn);
    }, {
      "function-bind": 23
    }],
    35: [function (require, module, exports) {
      if (typeof Object.create === 'function') {
        // implementation from standard node.js 'util' module
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            ctor.prototype = Object.create(superCtor.prototype, {
              constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
          }
        };
      } else {
        // old school shim for old browsers
        module.exports = function inherits(ctor, superCtor) {
          if (superCtor) {
            ctor.super_ = superCtor;
            var TempCtor = function TempCtor() {};
            TempCtor.prototype = superCtor.prototype;
            ctor.prototype = new TempCtor();
            ctor.prototype.constructor = ctor;
          }
        };
      }
    }, {}],
    36: [function (require, module, exports) {
      'use strict';

      var hasToStringTag = require('has-tostringtag/shams')();
      var callBound = require('call-bound');
      var $toString = callBound('Object.prototype.toString');

      /** @type {import('.')} */
      var isStandardArguments = function isArguments(value) {
        if (hasToStringTag && value && _typeof(value) === 'object' && Symbol.toStringTag in value) {
          return false;
        }
        return $toString(value) === '[object Arguments]';
      };

      /** @type {import('.')} */
      var isLegacyArguments = function isArguments(value) {
        if (isStandardArguments(value)) {
          return true;
        }
        return value !== null && _typeof(value) === 'object' && 'length' in value && typeof value.length === 'number' && value.length >= 0 && $toString(value) !== '[object Array]' && 'callee' in value && $toString(value.callee) === '[object Function]';
      };
      var supportsStandardArguments = function () {
        return isStandardArguments(arguments);
      }();

      // @ts-expect-error TODO make this not error
      isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

      /** @type {import('.')} */
      module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
    }, {
      "call-bound": 9,
      "has-tostringtag/shams": 33
    }],
    37: [function (require, module, exports) {
      'use strict';

      var fnToStr = Function.prototype.toString;
      var reflectApply = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === 'object' && Reflect !== null && Reflect.apply;
      var badArrayLike;
      var isCallableMarker;
      if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
        try {
          badArrayLike = Object.defineProperty({}, 'length', {
            get: function get() {
              throw isCallableMarker;
            }
          });
          isCallableMarker = {};
          // eslint-disable-next-line no-throw-literal
          reflectApply(function () {
            throw 42;
          }, null, badArrayLike);
        } catch (_) {
          if (_ !== isCallableMarker) {
            reflectApply = null;
          }
        }
      } else {
        reflectApply = null;
      }
      var constructorRegex = /^\s*class\b/;
      var isES6ClassFn = function isES6ClassFunction(value) {
        try {
          var fnStr = fnToStr.call(value);
          return constructorRegex.test(fnStr);
        } catch (e) {
          return false; // not a function
        }
      };
      var tryFunctionObject = function tryFunctionToStr(value) {
        try {
          if (isES6ClassFn(value)) {
            return false;
          }
          fnToStr.call(value);
          return true;
        } catch (e) {
          return false;
        }
      };
      var toStr = Object.prototype.toString;
      var objectClass = '[object Object]';
      var fnClass = '[object Function]';
      var genClass = '[object GeneratorFunction]';
      var ddaClass = '[object HTMLAllCollection]'; // IE 11
      var ddaClass2 = '[object HTML document.all class]';
      var ddaClass3 = '[object HTMLCollection]'; // IE 9-10
      var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`

      var isIE68 = !(0 in [,]); // eslint-disable-line no-sparse-arrays, comma-spacing

      var isDDA = function isDocumentDotAll() {
        return false;
      };
      if ((typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object') {
        // Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
        var all = document.all;
        if (toStr.call(all) === toStr.call(document.all)) {
          isDDA = function isDocumentDotAll(value) {
            /* globals document: false */
            // in IE 6-8, typeof document.all is "object" and it's truthy
            if ((isIE68 || !value) && (typeof value === 'undefined' || _typeof(value) === 'object')) {
              try {
                var str = toStr.call(value);
                return (str === ddaClass || str === ddaClass2 || str === ddaClass3 // opera 12.16
                || str === objectClass // IE 6-8
                ) && value('') == null; // eslint-disable-line eqeqeq
              } catch (e) {/**/}
            }
            return false;
          };
        }
      }
      module.exports = reflectApply ? function isCallable(value) {
        if (isDDA(value)) {
          return true;
        }
        if (!value) {
          return false;
        }
        if (typeof value !== 'function' && _typeof(value) !== 'object') {
          return false;
        }
        try {
          reflectApply(value, null, badArrayLike);
        } catch (e) {
          if (e !== isCallableMarker) {
            return false;
          }
        }
        return !isES6ClassFn(value) && tryFunctionObject(value);
      } : function isCallable(value) {
        if (isDDA(value)) {
          return true;
        }
        if (!value) {
          return false;
        }
        if (typeof value !== 'function' && _typeof(value) !== 'object') {
          return false;
        }
        if (hasToStringTag) {
          return tryFunctionObject(value);
        }
        if (isES6ClassFn(value)) {
          return false;
        }
        var strClass = toStr.call(value);
        if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) {
          return false;
        }
        return tryFunctionObject(value);
      };
    }, {}],
    38: [function (require, module, exports) {
      'use strict';

      var callBound = require('call-bound');
      var safeRegexTest = require('safe-regex-test');
      var isFnRegex = safeRegexTest(/^\s*(?:function)?\*/);
      var hasToStringTag = require('has-tostringtag/shams')();
      var getProto = require('get-proto');
      var toStr = callBound('Object.prototype.toString');
      var fnToStr = callBound('Function.prototype.toString');
      var getGeneratorFunc = function getGeneratorFunc() {
        // eslint-disable-line consistent-return
        if (!hasToStringTag) {
          return false;
        }
        try {
          return Function('return function*() {}')();
        } catch (e) {}
      };
      /** @type {undefined | false | null | GeneratorFunctionConstructor} */
      var GeneratorFunction;

      /** @type {import('.')} */
      module.exports = function isGeneratorFunction(fn) {
        if (typeof fn !== 'function') {
          return false;
        }
        if (isFnRegex(fnToStr(fn))) {
          return true;
        }
        if (!hasToStringTag) {
          var str = toStr(fn);
          return str === '[object GeneratorFunction]';
        }
        if (!getProto) {
          return false;
        }
        if (typeof GeneratorFunction === 'undefined') {
          var generatorFunc = getGeneratorFunc();
          GeneratorFunction = generatorFunc
          // eslint-disable-next-line no-extra-parens
          ? (/** @type {GeneratorFunctionConstructor} */getProto(generatorFunc)) : false;
        }
        return getProto(fn) === GeneratorFunction;
      };
    }, {
      "call-bound": 9,
      "get-proto": 27,
      "has-tostringtag/shams": 33,
      "safe-regex-test": 52
    }],
    39: [function (require, module, exports) {
      'use strict';

      var callBound = require('call-bound');
      var hasToStringTag = require('has-tostringtag/shams')();
      var hasOwn = require('hasown');
      var gOPD = require('gopd');

      /** @type {import('.')} */
      var fn;
      if (hasToStringTag) {
        /** @type {(receiver: ThisParameterType<typeof RegExp.prototype.exec>, ...args: Parameters<typeof RegExp.prototype.exec>) => ReturnType<typeof RegExp.prototype.exec>} */
        var $exec = callBound('RegExp.prototype.exec');
        /** @type {object} */
        var isRegexMarker = {};
        var throwRegexMarker = function throwRegexMarker() {
          throw isRegexMarker;
        };
        /** @type {{ toString(): never, valueOf(): never, [Symbol.toPrimitive]?(): never }} */
        var badStringifier = {
          toString: throwRegexMarker,
          valueOf: throwRegexMarker
        };
        if (_typeof(Symbol.toPrimitive) === 'symbol') {
          badStringifier[Symbol.toPrimitive] = throwRegexMarker;
        }

        /** @type {import('.')} */
        // @ts-expect-error TS can't figure out that the $exec call always throws
        // eslint-disable-next-line consistent-return
        fn = function isRegex(value) {
          if (!value || _typeof(value) !== 'object') {
            return false;
          }

          // eslint-disable-next-line no-extra-parens
          var descriptor = /** @type {NonNullable<typeof gOPD>} */gOPD(/** @type {{ lastIndex?: unknown }} */value, 'lastIndex');
          var hasLastIndexDataProperty = descriptor && hasOwn(descriptor, 'value');
          if (!hasLastIndexDataProperty) {
            return false;
          }
          try {
            // eslint-disable-next-line no-extra-parens
            $exec(value, /** @type {string} */ /** @type {unknown} */badStringifier);
          } catch (e) {
            return e === isRegexMarker;
          }
        };
      } else {
        /** @type {(receiver: ThisParameterType<typeof Object.prototype.toString>, ...args: Parameters<typeof Object.prototype.toString>) => ReturnType<typeof Object.prototype.toString>} */
        var $toString = callBound('Object.prototype.toString');
        /** @const @type {'[object RegExp]'} */
        var regexClass = '[object RegExp]';

        /** @type {import('.')} */
        fn = function isRegex(value) {
          // In older browsers, typeof regex incorrectly returns 'function'
          if (!value || _typeof(value) !== 'object' && typeof value !== 'function') {
            return false;
          }
          return $toString(value) === regexClass;
        };
      }
      module.exports = fn;
    }, {
      "call-bound": 9,
      "gopd": 29,
      "has-tostringtag/shams": 33,
      "hasown": 34
    }],
    40: [function (require, module, exports) {
      'use strict';

      var whichTypedArray = require('which-typed-array');

      /** @type {import('.')} */
      module.exports = function isTypedArray(value) {
        return !!whichTypedArray(value);
      };
    }, {
      "which-typed-array": 57
    }],
    41: [function (require, module, exports) {
      'use strict';

      /** @type {import('./abs')} */
      module.exports = Math.abs;
    }, {}],
    42: [function (require, module, exports) {
      'use strict';

      /** @type {import('./floor')} */
      module.exports = Math.floor;
    }, {}],
    43: [function (require, module, exports) {
      'use strict';

      /** @type {import('./isNaN')} */
      module.exports = Number.isNaN || function isNaN(a) {
        return a !== a;
      };
    }, {}],
    44: [function (require, module, exports) {
      'use strict';

      /** @type {import('./max')} */
      module.exports = Math.max;
    }, {}],
    45: [function (require, module, exports) {
      'use strict';

      /** @type {import('./min')} */
      module.exports = Math.min;
    }, {}],
    46: [function (require, module, exports) {
      'use strict';

      /** @type {import('./pow')} */
      module.exports = Math.pow;
    }, {}],
    47: [function (require, module, exports) {
      'use strict';

      /** @type {import('./round')} */
      module.exports = Math.round;
    }, {}],
    48: [function (require, module, exports) {
      'use strict';

      var $isNaN = require('./isNaN');

      /** @type {import('./sign')} */
      module.exports = function sign(number) {
        if ($isNaN(number) || number === 0) {
          return number;
        }
        return number < 0 ? -1 : +1;
      };
    }, {
      "./isNaN": 43
    }],
    49: [function (require, module, exports) {
      exports.endianness = function () {
        return 'LE';
      };
      exports.hostname = function () {
        if (typeof location !== 'undefined') {
          return location.hostname;
        } else return '';
      };
      exports.loadavg = function () {
        return [];
      };
      exports.uptime = function () {
        return 0;
      };
      exports.freemem = function () {
        return Number.MAX_VALUE;
      };
      exports.totalmem = function () {
        return Number.MAX_VALUE;
      };
      exports.cpus = function () {
        return [];
      };
      exports.type = function () {
        return 'Browser';
      };
      exports.release = function () {
        if (typeof navigator !== 'undefined') {
          return navigator.appVersion;
        }
        return '';
      };
      exports.networkInterfaces = exports.getNetworkInterfaces = function () {
        return {};
      };
      exports.arch = function () {
        return 'javascript';
      };
      exports.platform = function () {
        return 'browser';
      };
      exports.tmpdir = exports.tmpDir = function () {
        return '/tmp';
      };
      exports.EOL = '\n';
      exports.homedir = function () {
        return '/';
      };
    }, {}],
    50: [function (require, module, exports) {
      'use strict';

      /** @type {import('.')} */
      module.exports = ['Float16Array', 'Float32Array', 'Float64Array', 'Int8Array', 'Int16Array', 'Int32Array', 'Uint8Array', 'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'BigInt64Array', 'BigUint64Array'];
    }, {}],
    51: [function (require, module, exports) {
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
    52: [function (require, module, exports) {
      'use strict';

      var callBound = require('call-bound');
      var isRegex = require('is-regex');
      var $exec = callBound('RegExp.prototype.exec');
      var $TypeError = require('es-errors/type');

      /** @type {import('.')} */
      module.exports = function regexTester(regex) {
        if (!isRegex(regex)) {
          throw new $TypeError('`regex` must be a RegExp');
        }
        return function test(s) {
          return $exec(regex, s) !== null;
        };
      };
    }, {
      "call-bound": 9,
      "es-errors/type": 18,
      "is-regex": 39
    }],
    53: [function (require, module, exports) {
      'use strict';

      var GetIntrinsic = require('get-intrinsic');
      var define = require('define-data-property');
      var hasDescriptors = require('has-property-descriptors')();
      var gOPD = require('gopd');
      var $TypeError = require('es-errors/type');
      var $floor = GetIntrinsic('%Math.floor%');

      /** @type {import('.')} */
      module.exports = function setFunctionLength(fn, length) {
        if (typeof fn !== 'function') {
          throw new $TypeError('`fn` is not a function');
        }
        if (typeof length !== 'number' || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) {
          throw new $TypeError('`length` must be a positive 32-bit integer');
        }
        var loose = arguments.length > 2 && !!arguments[2];
        var functionLengthIsConfigurable = true;
        var functionLengthIsWritable = true;
        if ('length' in fn && gOPD) {
          var desc = gOPD(fn, 'length');
          if (desc && !desc.configurable) {
            functionLengthIsConfigurable = false;
          }
          if (desc && !desc.writable) {
            functionLengthIsWritable = false;
          }
        }
        if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
          if (hasDescriptors) {
            define(/** @type {Parameters<define>[0]} */fn, 'length', length, true, true);
          } else {
            define(/** @type {Parameters<define>[0]} */fn, 'length', length);
          }
        }
        return fn;
      };
    }, {
      "define-data-property": 10,
      "es-errors/type": 18,
      "get-intrinsic": 24,
      "gopd": 29,
      "has-property-descriptors": 30
    }],
    54: [function (require, module, exports) {
      module.exports = function isBuffer(arg) {
        return arg && _typeof(arg) === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
      };
    }, {}],
    55: [function (require, module, exports) {
      // Currently in sync with Node.js lib/internal/util/types.js
      // https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9

      'use strict';

      var isArgumentsObject = require('is-arguments');
      var isGeneratorFunction = require('is-generator-function');
      var whichTypedArray = require('which-typed-array');
      var isTypedArray = require('is-typed-array');
      function uncurryThis(f) {
        return f.call.bind(f);
      }
      var BigIntSupported = typeof BigInt !== 'undefined';
      var SymbolSupported = typeof Symbol !== 'undefined';
      var ObjectToString = uncurryThis(Object.prototype.toString);
      var numberValue = uncurryThis(Number.prototype.valueOf);
      var stringValue = uncurryThis(String.prototype.valueOf);
      var booleanValue = uncurryThis(Boolean.prototype.valueOf);
      if (BigIntSupported) {
        var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
      }
      if (SymbolSupported) {
        var symbolValue = uncurryThis(Symbol.prototype.valueOf);
      }
      function checkBoxedPrimitive(value, prototypeValueOf) {
        if (_typeof(value) !== 'object') {
          return false;
        }
        try {
          prototypeValueOf(value);
          return true;
        } catch (e) {
          return false;
        }
      }
      exports.isArgumentsObject = isArgumentsObject;
      exports.isGeneratorFunction = isGeneratorFunction;
      exports.isTypedArray = isTypedArray;

      // Taken from here and modified for better browser support
      // https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
      function isPromise(input) {
        return typeof Promise !== 'undefined' && input instanceof Promise || input !== null && _typeof(input) === 'object' && typeof input.then === 'function' && typeof input.catch === 'function';
      }
      exports.isPromise = isPromise;
      function isArrayBufferView(value) {
        if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
          return ArrayBuffer.isView(value);
        }
        return isTypedArray(value) || isDataView(value);
      }
      exports.isArrayBufferView = isArrayBufferView;
      function isUint8Array(value) {
        return whichTypedArray(value) === 'Uint8Array';
      }
      exports.isUint8Array = isUint8Array;
      function isUint8ClampedArray(value) {
        return whichTypedArray(value) === 'Uint8ClampedArray';
      }
      exports.isUint8ClampedArray = isUint8ClampedArray;
      function isUint16Array(value) {
        return whichTypedArray(value) === 'Uint16Array';
      }
      exports.isUint16Array = isUint16Array;
      function isUint32Array(value) {
        return whichTypedArray(value) === 'Uint32Array';
      }
      exports.isUint32Array = isUint32Array;
      function isInt8Array(value) {
        return whichTypedArray(value) === 'Int8Array';
      }
      exports.isInt8Array = isInt8Array;
      function isInt16Array(value) {
        return whichTypedArray(value) === 'Int16Array';
      }
      exports.isInt16Array = isInt16Array;
      function isInt32Array(value) {
        return whichTypedArray(value) === 'Int32Array';
      }
      exports.isInt32Array = isInt32Array;
      function isFloat32Array(value) {
        return whichTypedArray(value) === 'Float32Array';
      }
      exports.isFloat32Array = isFloat32Array;
      function isFloat64Array(value) {
        return whichTypedArray(value) === 'Float64Array';
      }
      exports.isFloat64Array = isFloat64Array;
      function isBigInt64Array(value) {
        return whichTypedArray(value) === 'BigInt64Array';
      }
      exports.isBigInt64Array = isBigInt64Array;
      function isBigUint64Array(value) {
        return whichTypedArray(value) === 'BigUint64Array';
      }
      exports.isBigUint64Array = isBigUint64Array;
      function isMapToString(value) {
        return ObjectToString(value) === '[object Map]';
      }
      isMapToString.working = typeof Map !== 'undefined' && isMapToString(new Map());
      function isMap(value) {
        if (typeof Map === 'undefined') {
          return false;
        }
        return isMapToString.working ? isMapToString(value) : value instanceof Map;
      }
      exports.isMap = isMap;
      function isSetToString(value) {
        return ObjectToString(value) === '[object Set]';
      }
      isSetToString.working = typeof Set !== 'undefined' && isSetToString(new Set());
      function isSet(value) {
        if (typeof Set === 'undefined') {
          return false;
        }
        return isSetToString.working ? isSetToString(value) : value instanceof Set;
      }
      exports.isSet = isSet;
      function isWeakMapToString(value) {
        return ObjectToString(value) === '[object WeakMap]';
      }
      isWeakMapToString.working = typeof WeakMap !== 'undefined' && isWeakMapToString(new WeakMap());
      function isWeakMap(value) {
        if (typeof WeakMap === 'undefined') {
          return false;
        }
        return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
      }
      exports.isWeakMap = isWeakMap;
      function isWeakSetToString(value) {
        return ObjectToString(value) === '[object WeakSet]';
      }
      isWeakSetToString.working = typeof WeakSet !== 'undefined' && isWeakSetToString(new WeakSet());
      function isWeakSet(value) {
        return isWeakSetToString(value);
      }
      exports.isWeakSet = isWeakSet;
      function isArrayBufferToString(value) {
        return ObjectToString(value) === '[object ArrayBuffer]';
      }
      isArrayBufferToString.working = typeof ArrayBuffer !== 'undefined' && isArrayBufferToString(new ArrayBuffer());
      function isArrayBuffer(value) {
        if (typeof ArrayBuffer === 'undefined') {
          return false;
        }
        return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
      }
      exports.isArrayBuffer = isArrayBuffer;
      function isDataViewToString(value) {
        return ObjectToString(value) === '[object DataView]';
      }
      isDataViewToString.working = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined' && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
      function isDataView(value) {
        if (typeof DataView === 'undefined') {
          return false;
        }
        return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
      }
      exports.isDataView = isDataView;

      // Store a copy of SharedArrayBuffer in case it's deleted elsewhere
      var SharedArrayBufferCopy = typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : undefined;
      function isSharedArrayBufferToString(value) {
        return ObjectToString(value) === '[object SharedArrayBuffer]';
      }
      function isSharedArrayBuffer(value) {
        if (typeof SharedArrayBufferCopy === 'undefined') {
          return false;
        }
        if (typeof isSharedArrayBufferToString.working === 'undefined') {
          isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
        }
        return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
      }
      exports.isSharedArrayBuffer = isSharedArrayBuffer;
      function isAsyncFunction(value) {
        return ObjectToString(value) === '[object AsyncFunction]';
      }
      exports.isAsyncFunction = isAsyncFunction;
      function isMapIterator(value) {
        return ObjectToString(value) === '[object Map Iterator]';
      }
      exports.isMapIterator = isMapIterator;
      function isSetIterator(value) {
        return ObjectToString(value) === '[object Set Iterator]';
      }
      exports.isSetIterator = isSetIterator;
      function isGeneratorObject(value) {
        return ObjectToString(value) === '[object Generator]';
      }
      exports.isGeneratorObject = isGeneratorObject;
      function isWebAssemblyCompiledModule(value) {
        return ObjectToString(value) === '[object WebAssembly.Module]';
      }
      exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
      function isNumberObject(value) {
        return checkBoxedPrimitive(value, numberValue);
      }
      exports.isNumberObject = isNumberObject;
      function isStringObject(value) {
        return checkBoxedPrimitive(value, stringValue);
      }
      exports.isStringObject = isStringObject;
      function isBooleanObject(value) {
        return checkBoxedPrimitive(value, booleanValue);
      }
      exports.isBooleanObject = isBooleanObject;
      function isBigIntObject(value) {
        return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
      }
      exports.isBigIntObject = isBigIntObject;
      function isSymbolObject(value) {
        return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
      }
      exports.isSymbolObject = isSymbolObject;
      function isBoxedPrimitive(value) {
        return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
      }
      exports.isBoxedPrimitive = isBoxedPrimitive;
      function isAnyArrayBuffer(value) {
        return typeof Uint8Array !== 'undefined' && (isArrayBuffer(value) || isSharedArrayBuffer(value));
      }
      exports.isAnyArrayBuffer = isAnyArrayBuffer;
      ['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(function (method) {
        Object.defineProperty(exports, method, {
          enumerable: false,
          value: function value() {
            throw new Error(method + ' is not supported in userland');
          }
        });
      });
    }, {
      "is-arguments": 36,
      "is-generator-function": 38,
      "is-typed-array": 40,
      "which-typed-array": 57
    }],
    56: [function (require, module, exports) {
      (function (process) {
        (function () {
          // Copyright Joyent, Inc. and other Node contributors.
          //
          // Permission is hereby granted, free of charge, to any person obtaining a
          // copy of this software and associated documentation files (the
          // "Software"), to deal in the Software without restriction, including
          // without limitation the rights to use, copy, modify, merge, publish,
          // distribute, sublicense, and/or sell copies of the Software, and to permit
          // persons to whom the Software is furnished to do so, subject to the
          // following conditions:
          //
          // The above copyright notice and this permission notice shall be included
          // in all copies or substantial portions of the Software.
          //
          // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
          // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
          // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
          // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
          // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
          // USE OR OTHER DEALINGS IN THE SOFTWARE.

          var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors(obj) {
            var keys = Object.keys(obj);
            var descriptors = {};
            for (var i = 0; i < keys.length; i++) {
              descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
            }
            return descriptors;
          };
          var formatRegExp = /%[sdj%]/g;
          exports.format = function (f) {
            if (!isString(f)) {
              var objects = [];
              for (var i = 0; i < arguments.length; i++) {
                objects.push(inspect(arguments[i]));
              }
              return objects.join(' ');
            }
            var i = 1;
            var args = arguments;
            var len = args.length;
            var str = String(f).replace(formatRegExp, function (x) {
              if (x === '%%') return '%';
              if (i >= len) return x;
              switch (x) {
                case '%s':
                  return String(args[i++]);
                case '%d':
                  return Number(args[i++]);
                case '%j':
                  try {
                    return JSON.stringify(args[i++]);
                  } catch (_) {
                    return '[Circular]';
                  }
                default:
                  return x;
              }
            });
            for (var x = args[i]; i < len; x = args[++i]) {
              if (isNull(x) || !isObject(x)) {
                str += ' ' + x;
              } else {
                str += ' ' + inspect(x);
              }
            }
            return str;
          };

          // Mark that a method should not be used.
          // Returns a modified function which warns once by default.
          // If --no-deprecation is set, then it is a no-op.
          exports.deprecate = function (fn, msg) {
            if (typeof process !== 'undefined' && process.noDeprecation === true) {
              return fn;
            }

            // Allow for deprecating things in the process of starting up.
            if (typeof process === 'undefined') {
              return function () {
                return exports.deprecate(fn, msg).apply(this, arguments);
              };
            }
            var warned = false;
            function deprecated() {
              if (!warned) {
                if (process.throwDeprecation) {
                  throw new Error(msg);
                } else if (process.traceDeprecation) {
                  console.trace(msg);
                } else {
                  console.error(msg);
                }
                warned = true;
              }
              return fn.apply(this, arguments);
            }
            return deprecated;
          };
          var debugs = {};
          var debugEnvRegex = /^$/;
          if (process.env.NODE_DEBUG) {
            var debugEnv = process.env.NODE_DEBUG;
            debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, '\\$&').replace(/\*/g, '.*').replace(/,/g, '$|^').toUpperCase();
            debugEnvRegex = new RegExp('^' + debugEnv + '$', 'i');
          }
          exports.debuglog = function (set) {
            set = set.toUpperCase();
            if (!debugs[set]) {
              if (debugEnvRegex.test(set)) {
                var pid = process.pid;
                debugs[set] = function () {
                  var msg = exports.format.apply(exports, arguments);
                  console.error('%s %d: %s', set, pid, msg);
                };
              } else {
                debugs[set] = function () {};
              }
            }
            return debugs[set];
          };

          /**
           * Echos the value of a value. Trys to print the value out
           * in the best way possible given the different types.
           *
           * @param {Object} obj The object to print out.
           * @param {Object} opts Optional options object that alters the output.
           */
          /* legacy: obj, showHidden, depth, colors*/
          function inspect(obj, opts) {
            // default options
            var ctx = {
              seen: [],
              stylize: stylizeNoColor
            };
            // legacy...
            if (arguments.length >= 3) ctx.depth = arguments[2];
            if (arguments.length >= 4) ctx.colors = arguments[3];
            if (isBoolean(opts)) {
              // legacy...
              ctx.showHidden = opts;
            } else if (opts) {
              // got an "options" object
              exports._extend(ctx, opts);
            }
            // set default options
            if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
            if (isUndefined(ctx.depth)) ctx.depth = 2;
            if (isUndefined(ctx.colors)) ctx.colors = false;
            if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
            if (ctx.colors) ctx.stylize = stylizeWithColor;
            return formatValue(ctx, obj, ctx.depth);
          }
          exports.inspect = inspect;

          // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
          inspect.colors = {
            'bold': [1, 22],
            'italic': [3, 23],
            'underline': [4, 24],
            'inverse': [7, 27],
            'white': [37, 39],
            'grey': [90, 39],
            'black': [30, 39],
            'blue': [34, 39],
            'cyan': [36, 39],
            'green': [32, 39],
            'magenta': [35, 39],
            'red': [31, 39],
            'yellow': [33, 39]
          };

          // Don't use 'blue' not visible on cmd.exe
          inspect.styles = {
            'special': 'cyan',
            'number': 'yellow',
            'boolean': 'yellow',
            'undefined': 'grey',
            'null': 'bold',
            'string': 'green',
            'date': 'magenta',
            // "name": intentionally not styling
            'regexp': 'red'
          };
          function stylizeWithColor(str, styleType) {
            var style = inspect.styles[styleType];
            if (style) {
              return "\x1B[" + inspect.colors[style][0] + 'm' + str + "\x1B[" + inspect.colors[style][1] + 'm';
            } else {
              return str;
            }
          }
          function stylizeNoColor(str, styleType) {
            return str;
          }
          function arrayToHash(array) {
            var hash = {};
            array.forEach(function (val, idx) {
              hash[val] = true;
            });
            return hash;
          }
          function formatValue(ctx, value, recurseTimes) {
            // Provide a hook for user-specified inspect functions.
            // Check that value is an object with an inspect function on it
            if (ctx.customInspect && value && isFunction(value.inspect) &&
            // Filter out the util module, it's inspect function is special
            value.inspect !== exports.inspect &&
            // Also filter out any prototype objects using the circular check.
            !(value.constructor && value.constructor.prototype === value)) {
              var ret = value.inspect(recurseTimes, ctx);
              if (!isString(ret)) {
                ret = formatValue(ctx, ret, recurseTimes);
              }
              return ret;
            }

            // Primitive types cannot have properties
            var primitive = formatPrimitive(ctx, value);
            if (primitive) {
              return primitive;
            }

            // Look up the keys of the object.
            var keys = Object.keys(value);
            var visibleKeys = arrayToHash(keys);
            if (ctx.showHidden) {
              keys = Object.getOwnPropertyNames(value);
            }

            // IE doesn't make error fields non-enumerable
            // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
            if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
              return formatError(value);
            }

            // Some type of object without properties can be shortcutted.
            if (keys.length === 0) {
              if (isFunction(value)) {
                var name = value.name ? ': ' + value.name : '';
                return ctx.stylize('[Function' + name + ']', 'special');
              }
              if (isRegExp(value)) {
                return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
              }
              if (isDate(value)) {
                return ctx.stylize(Date.prototype.toString.call(value), 'date');
              }
              if (isError(value)) {
                return formatError(value);
              }
            }
            var base = '',
              array = false,
              braces = ['{', '}'];

            // Make Array say that they are Array
            if (isArray(value)) {
              array = true;
              braces = ['[', ']'];
            }

            // Make functions say that they are functions
            if (isFunction(value)) {
              var n = value.name ? ': ' + value.name : '';
              base = ' [Function' + n + ']';
            }

            // Make RegExps say that they are RegExps
            if (isRegExp(value)) {
              base = ' ' + RegExp.prototype.toString.call(value);
            }

            // Make dates with properties first say the date
            if (isDate(value)) {
              base = ' ' + Date.prototype.toUTCString.call(value);
            }

            // Make error with message first say the error
            if (isError(value)) {
              base = ' ' + formatError(value);
            }
            if (keys.length === 0 && (!array || value.length == 0)) {
              return braces[0] + base + braces[1];
            }
            if (recurseTimes < 0) {
              if (isRegExp(value)) {
                return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
              } else {
                return ctx.stylize('[Object]', 'special');
              }
            }
            ctx.seen.push(value);
            var output;
            if (array) {
              output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
            } else {
              output = keys.map(function (key) {
                return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
              });
            }
            ctx.seen.pop();
            return reduceToSingleString(output, base, braces);
          }
          function formatPrimitive(ctx, value) {
            if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
            if (isString(value)) {
              var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
              return ctx.stylize(simple, 'string');
            }
            if (isNumber(value)) return ctx.stylize('' + value, 'number');
            if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
            // For some reason typeof null is "object", so special case here.
            if (isNull(value)) return ctx.stylize('null', 'null');
          }
          function formatError(value) {
            return '[' + Error.prototype.toString.call(value) + ']';
          }
          function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
            var output = [];
            for (var i = 0, l = value.length; i < l; ++i) {
              if (hasOwnProperty(value, String(i))) {
                output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
              } else {
                output.push('');
              }
            }
            keys.forEach(function (key) {
              if (!key.match(/^\d+$/)) {
                output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
              }
            });
            return output;
          }
          function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
            var name, str, desc;
            desc = Object.getOwnPropertyDescriptor(value, key) || {
              value: value[key]
            };
            if (desc.get) {
              if (desc.set) {
                str = ctx.stylize('[Getter/Setter]', 'special');
              } else {
                str = ctx.stylize('[Getter]', 'special');
              }
            } else {
              if (desc.set) {
                str = ctx.stylize('[Setter]', 'special');
              }
            }
            if (!hasOwnProperty(visibleKeys, key)) {
              name = '[' + key + ']';
            }
            if (!str) {
              if (ctx.seen.indexOf(desc.value) < 0) {
                if (isNull(recurseTimes)) {
                  str = formatValue(ctx, desc.value, null);
                } else {
                  str = formatValue(ctx, desc.value, recurseTimes - 1);
                }
                if (str.indexOf('\n') > -1) {
                  if (array) {
                    str = str.split('\n').map(function (line) {
                      return '  ' + line;
                    }).join('\n').slice(2);
                  } else {
                    str = '\n' + str.split('\n').map(function (line) {
                      return '   ' + line;
                    }).join('\n');
                  }
                }
              } else {
                str = ctx.stylize('[Circular]', 'special');
              }
            }
            if (isUndefined(name)) {
              if (array && key.match(/^\d+$/)) {
                return str;
              }
              name = JSON.stringify('' + key);
              if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                name = name.slice(1, -1);
                name = ctx.stylize(name, 'name');
              } else {
                name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
                name = ctx.stylize(name, 'string');
              }
            }
            return name + ': ' + str;
          }
          function reduceToSingleString(output, base, braces) {
            var numLinesEst = 0;
            var length = output.reduce(function (prev, cur) {
              numLinesEst++;
              if (cur.indexOf('\n') >= 0) numLinesEst++;
              return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
            }, 0);
            if (length > 60) {
              return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
            }
            return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
          }

          // NOTE: These type checking functions intentionally don't use `instanceof`
          // because it is fragile and can be easily faked with `Object.create()`.
          exports.types = require('./support/types');
          function isArray(ar) {
            return Array.isArray(ar);
          }
          exports.isArray = isArray;
          function isBoolean(arg) {
            return typeof arg === 'boolean';
          }
          exports.isBoolean = isBoolean;
          function isNull(arg) {
            return arg === null;
          }
          exports.isNull = isNull;
          function isNullOrUndefined(arg) {
            return arg == null;
          }
          exports.isNullOrUndefined = isNullOrUndefined;
          function isNumber(arg) {
            return typeof arg === 'number';
          }
          exports.isNumber = isNumber;
          function isString(arg) {
            return typeof arg === 'string';
          }
          exports.isString = isString;
          function isSymbol(arg) {
            return _typeof(arg) === 'symbol';
          }
          exports.isSymbol = isSymbol;
          function isUndefined(arg) {
            return arg === void 0;
          }
          exports.isUndefined = isUndefined;
          function isRegExp(re) {
            return isObject(re) && objectToString(re) === '[object RegExp]';
          }
          exports.isRegExp = isRegExp;
          exports.types.isRegExp = isRegExp;
          function isObject(arg) {
            return _typeof(arg) === 'object' && arg !== null;
          }
          exports.isObject = isObject;
          function isDate(d) {
            return isObject(d) && objectToString(d) === '[object Date]';
          }
          exports.isDate = isDate;
          exports.types.isDate = isDate;
          function isError(e) {
            return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
          }
          exports.isError = isError;
          exports.types.isNativeError = isError;
          function isFunction(arg) {
            return typeof arg === 'function';
          }
          exports.isFunction = isFunction;
          function isPrimitive(arg) {
            return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || _typeof(arg) === 'symbol' ||
            // ES6 symbol
            typeof arg === 'undefined';
          }
          exports.isPrimitive = isPrimitive;
          exports.isBuffer = require('./support/isBuffer');
          function objectToString(o) {
            return Object.prototype.toString.call(o);
          }
          function pad(n) {
            return n < 10 ? '0' + n.toString(10) : n.toString(10);
          }
          var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

          // 26 Feb 16:19:34
          function timestamp() {
            var d = new Date();
            var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
            return [d.getDate(), months[d.getMonth()], time].join(' ');
          }

          // log is just a thin wrapper to console.log that prepends a timestamp
          exports.log = function () {
            console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
          };

          /**
           * Inherit the prototype methods from one constructor into another.
           *
           * The Function.prototype.inherits from lang.js rewritten as a standalone
           * function (not on Function.prototype). NOTE: If this file is to be loaded
           * during bootstrapping this function needs to be rewritten using some native
           * functions as prototype setup using normal JavaScript does not work as
           * expected during bootstrapping (see mirror.js in r114903).
           *
           * @param {function} ctor Constructor function which needs to inherit the
           *     prototype.
           * @param {function} superCtor Constructor function to inherit prototype from.
           */
          exports.inherits = require('inherits');
          exports._extend = function (origin, add) {
            // Don't do anything if add isn't an object
            if (!add || !isObject(add)) return origin;
            var keys = Object.keys(add);
            var i = keys.length;
            while (i--) {
              origin[keys[i]] = add[keys[i]];
            }
            return origin;
          };
          function hasOwnProperty(obj, prop) {
            return Object.prototype.hasOwnProperty.call(obj, prop);
          }
          var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;
          exports.promisify = function promisify(original) {
            if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');
            if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
              var fn = original[kCustomPromisifiedSymbol];
              if (typeof fn !== 'function') {
                throw new TypeError('The "util.promisify.custom" argument must be of type Function');
              }
              Object.defineProperty(fn, kCustomPromisifiedSymbol, {
                value: fn,
                enumerable: false,
                writable: false,
                configurable: true
              });
              return fn;
            }
            function fn() {
              var promiseResolve, promiseReject;
              var promise = new Promise(function (resolve, reject) {
                promiseResolve = resolve;
                promiseReject = reject;
              });
              var args = [];
              for (var i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
              }
              args.push(function (err, value) {
                if (err) {
                  promiseReject(err);
                } else {
                  promiseResolve(value);
                }
              });
              try {
                original.apply(this, args);
              } catch (err) {
                promiseReject(err);
              }
              return promise;
            }
            Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
            if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
              value: fn,
              enumerable: false,
              writable: false,
              configurable: true
            });
            return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
          };
          exports.promisify.custom = kCustomPromisifiedSymbol;
          function callbackifyOnRejected(reason, cb) {
            // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
            // Because `null` is a special error value in callbacks which means "no error
            // occurred", we error-wrap so the callback consumer can distinguish between
            // "the promise rejected with null" or "the promise fulfilled with undefined".
            if (!reason) {
              var newReason = new Error('Promise was rejected with a falsy value');
              newReason.reason = reason;
              reason = newReason;
            }
            return cb(reason);
          }
          function callbackify(original) {
            if (typeof original !== 'function') {
              throw new TypeError('The "original" argument must be of type Function');
            }

            // We DO NOT return the promise as it gives the user a false sense that
            // the promise is actually somehow related to the callback's execution
            // and that the callback throwing will reject the promise.
            function callbackified() {
              var args = [];
              for (var i = 0; i < arguments.length; i++) {
                args.push(arguments[i]);
              }
              var maybeCb = args.pop();
              if (typeof maybeCb !== 'function') {
                throw new TypeError('The last argument must be of type Function');
              }
              var self = this;
              var cb = function cb() {
                return maybeCb.apply(self, arguments);
              };
              // In true node style we process the callback on `nextTick` with all the
              // implications (stack, `uncaughtException`, `async_hooks`)
              original.apply(this, args).then(function (ret) {
                process.nextTick(cb.bind(null, null, ret));
              }, function (rej) {
                process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
              });
            }
            Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
            Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
            return callbackified;
          }
          exports.callbackify = callbackify;
        }).call(this);
      }).call(this, require('_process'));
    }, {
      "./support/isBuffer": 54,
      "./support/types": 55,
      "_process": 51,
      "inherits": 35
    }],
    57: [function (require, module, exports) {
      (function (global) {
        (function () {
          'use strict';

          var forEach = require('for-each');
          var availableTypedArrays = require('available-typed-arrays');
          var callBind = require('call-bind');
          var callBound = require('call-bound');
          var gOPD = require('gopd');
          var getProto = require('get-proto');
          var $toString = callBound('Object.prototype.toString');
          var hasToStringTag = require('has-tostringtag/shams')();
          var g = typeof globalThis === 'undefined' ? global : globalThis;
          var typedArrays = availableTypedArrays();
          var $slice = callBound('String.prototype.slice');

          /** @type {<T = unknown>(array: readonly T[], value: unknown) => number} */
          var $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {
            for (var i = 0; i < array.length; i += 1) {
              if (array[i] === value) {
                return i;
              }
            }
            return -1;
          };

          /** @typedef {import('./types').Getter} Getter */
          /** @type {import('./types').Cache} */
          var cache = {
            __proto__: null
          };
          if (hasToStringTag && gOPD && getProto) {
            forEach(typedArrays, function (typedArray) {
              var arr = new g[typedArray]();
              if (Symbol.toStringTag in arr && getProto) {
                var proto = getProto(arr);
                // @ts-expect-error TS won't narrow inside a closure
                var descriptor = gOPD(proto, Symbol.toStringTag);
                if (!descriptor && proto) {
                  var superProto = getProto(proto);
                  // @ts-expect-error TS won't narrow inside a closure
                  descriptor = gOPD(superProto, Symbol.toStringTag);
                }
                // @ts-expect-error TODO: fix
                cache['$' + typedArray] = callBind(descriptor.get);
              }
            });
          } else {
            forEach(typedArrays, function (typedArray) {
              var arr = new g[typedArray]();
              var fn = arr.slice || arr.set;
              if (fn) {
                cache[(/** @type {`$${import('.').TypedArrayName}`} */'$' + typedArray)] = /** @type {import('./types').BoundSlice | import('./types').BoundSet} */
                // @ts-expect-error TODO FIXME
                callBind(fn);
              }
            });
          }

          /** @type {(value: object) => false | import('.').TypedArrayName} */
          var tryTypedArrays = function tryAllTypedArrays(value) {
            /** @type {ReturnType<typeof tryAllTypedArrays>} */var found = false;
            forEach(/** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */cache, /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */
            function (getter, typedArray) {
              if (!found) {
                try {
                  // @ts-expect-error a throw is fine here
                  if ('$' + getter(value) === typedArray) {
                    found = /** @type {import('.').TypedArrayName} */$slice(typedArray, 1);
                  }
                } catch (e) {/**/}
              }
            });
            return found;
          };

          /** @type {(value: object) => false | import('.').TypedArrayName} */
          var trySlices = function tryAllSlices(value) {
            /** @type {ReturnType<typeof tryAllSlices>} */var found = false;
            forEach(/** @type {Record<`\$${import('.').TypedArrayName}`, Getter>} */cache, /** @type {(getter: Getter, name: `\$${import('.').TypedArrayName}`) => void} */function (getter, name) {
              if (!found) {
                try {
                  // @ts-expect-error a throw is fine here
                  getter(value);
                  found = /** @type {import('.').TypedArrayName} */$slice(name, 1);
                } catch (e) {/**/}
              }
            });
            return found;
          };

          /** @type {import('.')} */
          module.exports = function whichTypedArray(value) {
            if (!value || _typeof(value) !== 'object') {
              return false;
            }
            if (!hasToStringTag) {
              /** @type {string} */
              var tag = $slice($toString(value), 8, -1);
              if ($indexOf(typedArrays, tag) > -1) {
                return tag;
              }
              if (tag !== 'Object') {
                return false;
              }
              // node < 0.6 hits here on real Typed Arrays
              return trySlices(value);
            }
            if (!gOPD) {
              return null;
            } // unknown engine
            return tryTypedArrays(value);
          };
        }).call(this);
      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
    }, {
      "available-typed-arrays": 1,
      "call-bind": 8,
      "call-bound": 9,
      "for-each": 21,
      "get-proto": 27,
      "gopd": 29,
      "has-tostringtag/shams": 33
    }],
    58: [function (require, module, exports) {
      /*
      
      npx browserify entry.js -o dist/cli-table3.js --standalone cli-table3
      npx babel dist/cli-table3.js --out-file dist/cli-table3.jsfl
      
      
       */
      module.exports = require('cli-table3');
    }, {
      "cli-table3": 71
    }],
    59: [function (require, module, exports) {
      /*
      
      The MIT License (MIT)
      
      Original Library
        - Copyright (c) Marak Squires
      
      Additional functionality
       - Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in
      all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
      THE SOFTWARE.
      
      */

      var colors = {};
      module['exports'] = colors;
      colors.themes = {};
      var util = require('util');
      var ansiStyles = colors.styles = require('./styles');
      var defineProps = Object.defineProperties;
      var newLineRegex = new RegExp(/[\r\n]+/g);
      colors.supportsColor = require('./system/supports-colors').supportsColor;
      if (typeof colors.enabled === 'undefined') {
        colors.enabled = colors.supportsColor() !== false;
      }
      colors.enable = function () {
        colors.enabled = true;
      };
      colors.disable = function () {
        colors.enabled = false;
      };
      colors.stripColors = colors.strip = function (str) {
        return ('' + str).replace(/\x1B\[\d+m/g, '');
      };

      // eslint-disable-next-line no-unused-vars
      var stylize = colors.stylize = function stylize(str, style) {
        if (!colors.enabled) {
          return str + '';
        }
        var styleMap = ansiStyles[style];

        // Stylize should work for non-ANSI styles, too
        if (!styleMap && style in colors) {
          // Style maps like trap operate as functions on strings;
          // they don't have properties like open or close.
          return colors[style](str);
        }
        return styleMap.open + str + styleMap.close;
      };
      var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
      var escapeStringRegexp = function escapeStringRegexp(str) {
        if (typeof str !== 'string') {
          throw new TypeError('Expected a string');
        }
        return str.replace(matchOperatorsRe, '\\$&');
      };
      function build(_styles) {
        var builder = function builder() {
          return applyStyle.apply(builder, arguments);
        };
        builder._styles = _styles;
        // __proto__ is used because we must return a function, but there is
        // no way to create a function with a different prototype.
        builder.__proto__ = proto;
        return builder;
      }
      var styles = function () {
        var ret = {};
        ansiStyles.grey = ansiStyles.gray;
        Object.keys(ansiStyles).forEach(function (key) {
          ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
          ret[key] = {
            get: function get() {
              return build(this._styles.concat(key));
            }
          };
        });
        return ret;
      }();
      var proto = defineProps(function colors() {}, styles);
      function applyStyle() {
        var args = Array.prototype.slice.call(arguments);
        var str = args.map(function (arg) {
          // Use weak equality check so we can colorize null/undefined in safe mode
          if (arg != null && arg.constructor === String) {
            return arg;
          } else {
            return util.inspect(arg);
          }
        }).join(' ');
        if (!colors.enabled || !str) {
          return str;
        }
        var newLinesPresent = str.indexOf('\n') != -1;
        var nestedStyles = this._styles;
        var i = nestedStyles.length;
        while (i--) {
          var code = ansiStyles[nestedStyles[i]];
          str = code.open + str.replace(code.closeRe, code.open) + code.close;
          if (newLinesPresent) {
            str = str.replace(newLineRegex, function (match) {
              return code.close + match + code.open;
            });
          }
        }
        return str;
      }
      colors.setTheme = function (theme) {
        if (typeof theme === 'string') {
          console.log('colors.setTheme now only accepts an object, not a string.  ' + 'If you are trying to set a theme from a file, it is now your (the ' + 'caller\'s) responsibility to require the file.  The old syntax ' + 'looked like colors.setTheme(__dirname + ' + '\'/../themes/generic-logging.js\'); The new syntax looks like ' + 'colors.setTheme(require(__dirname + ' + '\'/../themes/generic-logging.js\'));');
          return;
        }
        for (var style in theme) {
          (function (style) {
            colors[style] = function (str) {
              if (_typeof(theme[style]) === 'object') {
                var out = str;
                for (var i in theme[style]) {
                  out = colors[theme[style][i]](out);
                }
                return out;
              }
              return colors[theme[style]](str);
            };
          })(style);
        }
      };
      function init() {
        var ret = {};
        Object.keys(styles).forEach(function (name) {
          ret[name] = {
            get: function get() {
              return build([name]);
            }
          };
        });
        return ret;
      }
      var sequencer = function sequencer(map, str) {
        var exploded = str.split('');
        exploded = exploded.map(map);
        return exploded.join('');
      };

      // custom formatter methods
      colors.trap = require('./custom/trap');
      colors.zalgo = require('./custom/zalgo');

      // maps
      colors.maps = {};
      colors.maps.america = require('./maps/america')(colors);
      colors.maps.zebra = require('./maps/zebra')(colors);
      colors.maps.rainbow = require('./maps/rainbow')(colors);
      colors.maps.random = require('./maps/random')(colors);
      for (var map in colors.maps) {
        (function (map) {
          colors[map] = function (str) {
            return sequencer(colors.maps[map], str);
          };
        })(map);
      }
      defineProps(colors, init());
    }, {
      "./custom/trap": 60,
      "./custom/zalgo": 61,
      "./maps/america": 62,
      "./maps/rainbow": 63,
      "./maps/random": 64,
      "./maps/zebra": 65,
      "./styles": 66,
      "./system/supports-colors": 68,
      "util": 56
    }],
    60: [function (require, module, exports) {
      module['exports'] = function runTheTrap(text, options) {
        var result = '';
        text = text || 'Run the trap, drop the bass';
        text = text.split('');
        var trap = {
          a: ["@", "\u0104", "\u023A", "\u0245", "\u0394", "\u039B", "\u0414"],
          b: ["\xDF", "\u0181", "\u0243", "\u026E", "\u03B2", "\u0E3F"],
          c: ["\xA9", "\u023B", "\u03FE"],
          d: ["\xD0", "\u018A", "\u0500", "\u0501", "\u0502", "\u0503"],
          e: ["\xCB", "\u0115", "\u018E", "\u0258", "\u03A3", "\u03BE", "\u04BC", "\u0A6C"],
          f: ["\u04FA"],
          g: ["\u0262"],
          h: ["\u0126", "\u0195", "\u04A2", "\u04BA", "\u04C7", "\u050A"],
          i: ["\u0F0F"],
          j: ["\u0134"],
          k: ["\u0138", "\u04A0", "\u04C3", "\u051E"],
          l: ["\u0139"],
          m: ["\u028D", "\u04CD", "\u04CE", "\u0520", "\u0521", "\u0D69"],
          n: ["\xD1", "\u014B", "\u019D", "\u0376", "\u03A0", "\u048A"],
          o: ["\xD8", "\xF5", "\xF8", "\u01FE", "\u0298", "\u047A", "\u05DD", "\u06DD", "\u0E4F"],
          p: ["\u01F7", "\u048E"],
          q: ["\u09CD"],
          r: ["\xAE", "\u01A6", "\u0210", "\u024C", "\u0280", "\u042F"],
          s: ["\xA7", "\u03DE", "\u03DF", "\u03E8"],
          t: ["\u0141", "\u0166", "\u0373"],
          u: ["\u01B1", "\u054D"],
          v: ["\u05D8"],
          w: ["\u0428", "\u0460", "\u047C", "\u0D70"],
          x: ["\u04B2", "\u04FE", "\u04FC", "\u04FD"],
          y: ["\xA5", "\u04B0", "\u04CB"],
          z: ["\u01B5", "\u0240"]
        };
        text.forEach(function (c) {
          c = c.toLowerCase();
          var chars = trap[c] || [' '];
          var rand = Math.floor(Math.random() * chars.length);
          if (typeof trap[c] !== 'undefined') {
            result += trap[c][rand];
          } else {
            result += c;
          }
        });
        return result;
      };
    }, {}],
    61: [function (require, module, exports) {
      // please no
      module['exports'] = function zalgo(text, options) {
        text = text || '   he is here   ';
        var soul = {
          'up': ['̍', '̎', '̄', '̅', '̿', '̑', '̆', '̐', '͒', '͗', '͑', '̇', '̈', '̊', '͂', '̓', '̈', '͊', '͋', '͌', '̃', '̂', '̌', '͐', '̀', '́', '̋', '̏', '̒', '̓', '̔', '̽', '̉', 'ͣ', 'ͤ', 'ͥ', 'ͦ', 'ͧ', 'ͨ', 'ͩ', 'ͪ', 'ͫ', 'ͬ', 'ͭ', 'ͮ', 'ͯ', '̾', '͛', '͆', '̚'],
          'down': ['̖', '̗', '̘', '̙', '̜', '̝', '̞', '̟', '̠', '̤', '̥', '̦', '̩', '̪', '̫', '̬', '̭', '̮', '̯', '̰', '̱', '̲', '̳', '̹', '̺', '̻', '̼', 'ͅ', '͇', '͈', '͉', '͍', '͎', '͓', '͔', '͕', '͖', '͙', '͚', '̣'],
          'mid': ['̕', '̛', '̀', '́', '͘', '̡', '̢', '̧', '̨', '̴', '̵', '̶', '͜', '͝', '͞', '͟', '͠', '͢', '̸', '̷', '͡', ' ҉']
        };
        var all = [].concat(soul.up, soul.down, soul.mid);
        function randomNumber(range) {
          var r = Math.floor(Math.random() * range);
          return r;
        }
        function isChar(character) {
          var bool = false;
          all.filter(function (i) {
            bool = i === character;
          });
          return bool;
        }
        function heComes(text, options) {
          var result = '';
          var counts;
          var l;
          options = options || {};
          options['up'] = typeof options['up'] !== 'undefined' ? options['up'] : true;
          options['mid'] = typeof options['mid'] !== 'undefined' ? options['mid'] : true;
          options['down'] = typeof options['down'] !== 'undefined' ? options['down'] : true;
          options['size'] = typeof options['size'] !== 'undefined' ? options['size'] : 'maxi';
          text = text.split('');
          for (l in text) {
            if (isChar(l)) {
              continue;
            }
            result = result + text[l];
            counts = {
              'up': 0,
              'down': 0,
              'mid': 0
            };
            switch (options.size) {
              case 'mini':
                counts.up = randomNumber(8);
                counts.mid = randomNumber(2);
                counts.down = randomNumber(8);
                break;
              case 'maxi':
                counts.up = randomNumber(16) + 3;
                counts.mid = randomNumber(4) + 1;
                counts.down = randomNumber(64) + 3;
                break;
              default:
                counts.up = randomNumber(8) + 1;
                counts.mid = randomNumber(6) / 2;
                counts.down = randomNumber(8) + 1;
                break;
            }
            var arr = ['up', 'mid', 'down'];
            for (var d in arr) {
              var index = arr[d];
              for (var i = 0; i <= counts[index]; i++) {
                if (options[index]) {
                  result = result + soul[index][randomNumber(soul[index].length)];
                }
              }
            }
          }
          return result;
        }
        // don't summon him
        return heComes(text, options);
      };
    }, {}],
    62: [function (require, module, exports) {
      module['exports'] = function (colors) {
        return function (letter, i, exploded) {
          if (letter === ' ') return letter;
          switch (i % 3) {
            case 0:
              return colors.red(letter);
            case 1:
              return colors.white(letter);
            case 2:
              return colors.blue(letter);
          }
        };
      };
    }, {}],
    63: [function (require, module, exports) {
      module['exports'] = function (colors) {
        // RoY G BiV
        var rainbowColors = ['red', 'yellow', 'green', 'blue', 'magenta'];
        return function (letter, i, exploded) {
          if (letter === ' ') {
            return letter;
          } else {
            return colors[rainbowColors[i++ % rainbowColors.length]](letter);
          }
        };
      };
    }, {}],
    64: [function (require, module, exports) {
      module['exports'] = function (colors) {
        var available = ['underline', 'inverse', 'grey', 'yellow', 'red', 'green', 'blue', 'white', 'cyan', 'magenta', 'brightYellow', 'brightRed', 'brightGreen', 'brightBlue', 'brightWhite', 'brightCyan', 'brightMagenta'];
        return function (letter, i, exploded) {
          return letter === ' ' ? letter : colors[available[Math.round(Math.random() * (available.length - 2))]](letter);
        };
      };
    }, {}],
    65: [function (require, module, exports) {
      module['exports'] = function (colors) {
        return function (letter, i, exploded) {
          return i % 2 === 0 ? letter : colors.inverse(letter);
        };
      };
    }, {}],
    66: [function (require, module, exports) {
      /*
      The MIT License (MIT)
      
      Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in
      all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
      THE SOFTWARE.
      
      */

      var styles = {};
      module['exports'] = styles;
      var codes = {
        reset: [0, 0],
        bold: [1, 22],
        dim: [2, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        hidden: [8, 28],
        strikethrough: [9, 29],
        black: [30, 39],
        red: [31, 39],
        green: [32, 39],
        yellow: [33, 39],
        blue: [34, 39],
        magenta: [35, 39],
        cyan: [36, 39],
        white: [37, 39],
        gray: [90, 39],
        grey: [90, 39],
        brightRed: [91, 39],
        brightGreen: [92, 39],
        brightYellow: [93, 39],
        brightBlue: [94, 39],
        brightMagenta: [95, 39],
        brightCyan: [96, 39],
        brightWhite: [97, 39],
        bgBlack: [40, 49],
        bgRed: [41, 49],
        bgGreen: [42, 49],
        bgYellow: [43, 49],
        bgBlue: [44, 49],
        bgMagenta: [45, 49],
        bgCyan: [46, 49],
        bgWhite: [47, 49],
        bgGray: [100, 49],
        bgGrey: [100, 49],
        bgBrightRed: [101, 49],
        bgBrightGreen: [102, 49],
        bgBrightYellow: [103, 49],
        bgBrightBlue: [104, 49],
        bgBrightMagenta: [105, 49],
        bgBrightCyan: [106, 49],
        bgBrightWhite: [107, 49],
        // legacy styles for colors pre v1.0.0
        blackBG: [40, 49],
        redBG: [41, 49],
        greenBG: [42, 49],
        yellowBG: [43, 49],
        blueBG: [44, 49],
        magentaBG: [45, 49],
        cyanBG: [46, 49],
        whiteBG: [47, 49]
      };
      Object.keys(codes).forEach(function (key) {
        var val = codes[key];
        var style = styles[key] = [];
        style.open = "\x1B[" + val[0] + 'm';
        style.close = "\x1B[" + val[1] + 'm';
      });
    }, {}],
    67: [function (require, module, exports) {
      (function (process) {
        (function () {
          /*
          MIT License
          
          Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
          
          Permission is hereby granted, free of charge, to any person obtaining a copy of
          this software and associated documentation files (the "Software"), to deal in
          the Software without restriction, including without limitation the rights to
          use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
          of the Software, and to permit persons to whom the Software is furnished to do
          so, subject to the following conditions:
          
          The above copyright notice and this permission notice shall be included in all
          copies or substantial portions of the Software.
          
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
          SOFTWARE.
          */

          'use strict';

          module.exports = function (flag, argv) {
            argv = argv || process.argv;
            var terminatorPos = argv.indexOf('--');
            var prefix = /^-{1,2}/.test(flag) ? '' : '--';
            var pos = argv.indexOf(prefix + flag);
            return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
          };
        }).call(this);
      }).call(this, require('_process'));
    }, {
      "_process": 51
    }],
    68: [function (require, module, exports) {
      (function (process) {
        (function () {
          /*
          The MIT License (MIT)
          
          Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
          
          Permission is hereby granted, free of charge, to any person obtaining a copy
          of this software and associated documentation files (the "Software"), to deal
          in the Software without restriction, including without limitation the rights
          to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
          copies of the Software, and to permit persons to whom the Software is
          furnished to do so, subject to the following conditions:
          
          The above copyright notice and this permission notice shall be included in
          all copies or substantial portions of the Software.
          
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
          THE SOFTWARE.
          
          */

          'use strict';

          var os = require('os');
          var hasFlag = require('./has-flag.js');
          var env = process.env;
          var forceColor = void 0;
          if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {
            forceColor = false;
          } else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
            forceColor = true;
          }
          if ('FORCE_COLOR' in env) {
            forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
          }
          function translateLevel(level) {
            if (level === 0) {
              return false;
            }
            return {
              level: level,
              hasBasic: true,
              has256: level >= 2,
              has16m: level >= 3
            };
          }
          function supportsColor(stream) {
            if (forceColor === false) {
              return 0;
            }
            if (hasFlag('color=16m') || hasFlag('color=full') || hasFlag('color=truecolor')) {
              return 3;
            }
            if (hasFlag('color=256')) {
              return 2;
            }
            if (stream && !stream.isTTY && forceColor !== true) {
              return 0;
            }
            var min = forceColor ? 1 : 0;
            if (process.platform === 'win32') {
              // Node.js 7.5.0 is the first version of Node.js to include a patch to
              // libuv that enables 256 color output on Windows. Anything earlier and it
              // won't work. However, here we target Node.js 8 at minimum as it is an LTS
              // release, and Node.js 7 is not. Windows 10 build 10586 is the first
              // Windows release that supports 256 colors. Windows 10 build 14931 is the
              // first release that supports 16m/TrueColor.
              var osRelease = os.release().split('.');
              if (Number(process.versions.node.split('.')[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
                return Number(osRelease[2]) >= 14931 ? 3 : 2;
              }
              return 1;
            }
            if ('CI' in env) {
              if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(function (sign) {
                return sign in env;
              }) || env.CI_NAME === 'codeship') {
                return 1;
              }
              return min;
            }
            if ('TEAMCITY_VERSION' in env) {
              return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
            }
            if ('TERM_PROGRAM' in env) {
              var version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);
              switch (env.TERM_PROGRAM) {
                case 'iTerm.app':
                  return version >= 3 ? 3 : 2;
                case 'Hyper':
                  return 3;
                case 'Apple_Terminal':
                  return 2;
                // No default
              }
            }
            if (/-256(color)?$/i.test(env.TERM)) {
              return 2;
            }
            if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
              return 1;
            }
            if ('COLORTERM' in env) {
              return 1;
            }
            if (env.TERM === 'dumb') {
              return min;
            }
            return min;
          }
          function getSupportLevel(stream) {
            var level = supportsColor(stream);
            return translateLevel(level);
          }
          module.exports = {
            supportsColor: getSupportLevel,
            stdout: getSupportLevel(process.stdout),
            stderr: getSupportLevel(process.stderr)
          };
        }).call(this);
      }).call(this, require('_process'));
    }, {
      "./has-flag.js": 67,
      "_process": 51,
      "os": 49
    }],
    69: [function (require, module, exports) {
      //
      // Remark: Requiring this file will use the "safe" colors API,
      // which will not touch String.prototype.
      //
      //   var colors = require('colors/safe');
      //   colors.red("foo")
      //
      //
      var colors = require('./lib/colors');
      module['exports'] = colors;
    }, {
      "./lib/colors": 59
    }],
    70: [function (require, module, exports) {
      'use strict';

      module.exports = function () {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$onlyFirst = _ref.onlyFirst,
          onlyFirst = _ref$onlyFirst === void 0 ? false : _ref$onlyFirst;
        var pattern = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'].join('|');
        return new RegExp(pattern, onlyFirst ? undefined : 'g');
      };
    }, {}],
    71: [function (require, module, exports) {
      module.exports = require('./src/table');
    }, {
      "./src/table": 75
    }],
    72: [function (require, module, exports) {
      var _require = require('./debug'),
        info = _require.info,
        debug = _require.debug;
      var utils = require('./utils');
      var Cell = /*#__PURE__*/function () {
        /**
         * A representation of a cell within the table.
         * Implementations must have `init` and `draw` methods,
         * as well as `colSpan`, `rowSpan`, `desiredHeight` and `desiredWidth` properties.
         * @param options
         * @constructor
         */
        function Cell(options) {
          _classCallCheck(this, Cell);
          this.setOptions(options);

          /**
           * Each cell will have it's `x` and `y` values set by the `layout-manager` prior to
           * `init` being called;
           * @type {Number}
           */
          this.x = null;
          this.y = null;
        }
        return _createClass(Cell, [{
          key: "setOptions",
          value: function setOptions(options) {
            if (['boolean', 'number', 'bigint', 'string'].indexOf(_typeof(options)) !== -1) {
              options = {
                content: '' + options
              };
            }
            options = options || {};
            this.options = options;
            var content = options.content;
            if (['boolean', 'number', 'bigint', 'string'].indexOf(_typeof(content)) !== -1) {
              this.content = String(content);
            } else if (!content) {
              this.content = this.options.href || '';
            } else {
              throw new Error('Content needs to be a primitive, got: ' + _typeof(content));
            }
            this.colSpan = options.colSpan || 1;
            this.rowSpan = options.rowSpan || 1;
            if (this.options.href) {
              Object.defineProperty(this, 'href', {
                get: function get() {
                  return this.options.href;
                }
              });
            }
          }
        }, {
          key: "mergeTableOptions",
          value: function mergeTableOptions(tableOptions, cells) {
            this.cells = cells;
            var optionsChars = this.options.chars || {};
            var tableChars = tableOptions.chars;
            var chars = this.chars = {};
            CHAR_NAMES.forEach(function (name) {
              setOption(optionsChars, tableChars, name, chars);
            });
            this.truncate = this.options.truncate || tableOptions.truncate;
            var style = this.options.style = this.options.style || {};
            var tableStyle = tableOptions.style;
            setOption(style, tableStyle, 'padding-left', this);
            setOption(style, tableStyle, 'padding-right', this);
            this.head = style.head || tableStyle.head;
            this.border = style.border || tableStyle.border;
            this.fixedWidth = tableOptions.colWidths[this.x];
            this.lines = this.computeLines(tableOptions);
            this.desiredWidth = utils.strlen(this.content) + this.paddingLeft + this.paddingRight;
            this.desiredHeight = this.lines.length;
          }
        }, {
          key: "computeLines",
          value: function computeLines(tableOptions) {
            var tableWordWrap = tableOptions.wordWrap || tableOptions.textWrap;
            var _this$options$wordWra = this.options.wordWrap,
              wordWrap = _this$options$wordWra === void 0 ? tableWordWrap : _this$options$wordWra;
            if (this.fixedWidth && wordWrap) {
              this.fixedWidth -= this.paddingLeft + this.paddingRight;
              if (this.colSpan) {
                var i = 1;
                while (i < this.colSpan) {
                  this.fixedWidth += tableOptions.colWidths[this.x + i];
                  i++;
                }
              }
              var _tableOptions$wrapOnW = tableOptions.wrapOnWordBoundary,
                tableWrapOnWordBoundary = _tableOptions$wrapOnW === void 0 ? true : _tableOptions$wrapOnW;
              var _this$options$wrapOnW = this.options.wrapOnWordBoundary,
                wrapOnWordBoundary = _this$options$wrapOnW === void 0 ? tableWrapOnWordBoundary : _this$options$wrapOnW;
              return this.wrapLines(utils.wordWrap(this.fixedWidth, this.content, wrapOnWordBoundary));
            }
            return this.wrapLines(this.content.split('\n'));
          }
        }, {
          key: "wrapLines",
          value: function wrapLines(computedLines) {
            var _this = this;
            var lines = utils.colorizeLines(computedLines);
            if (this.href) {
              return lines.map(function (line) {
                return utils.hyperlink(_this.href, line);
              });
            }
            return lines;
          }

          /**
           * Initializes the Cells data structure.
           *
           * @param tableOptions - A fully populated set of tableOptions.
           * In addition to the standard default values, tableOptions must have fully populated the
           * `colWidths` and `rowWidths` arrays. Those arrays must have lengths equal to the number
           * of columns or rows (respectively) in this table, and each array item must be a Number.
           *
           */
        }, {
          key: "init",
          value: function init(tableOptions) {
            var x = this.x;
            var y = this.y;
            this.widths = tableOptions.colWidths.slice(x, x + this.colSpan);
            this.heights = tableOptions.rowHeights.slice(y, y + this.rowSpan);
            this.width = this.widths.reduce(sumPlusOne, -1);
            this.height = this.heights.reduce(sumPlusOne, -1);
            this.hAlign = this.options.hAlign || tableOptions.colAligns[x];
            this.vAlign = this.options.vAlign || tableOptions.rowAligns[y];
            this.drawRight = x + this.colSpan == tableOptions.colWidths.length;
          }

          /**
           * Draws the given line of the cell.
           * This default implementation defers to methods `drawTop`, `drawBottom`, `drawLine` and `drawEmpty`.
           * @param lineNum - can be `top`, `bottom` or a numerical line number.
           * @param spanningCell - will be a number if being called from a RowSpanCell, and will represent how
           * many rows below it's being called from. Otherwise it's undefined.
           * @returns {String} The representation of this line.
           */
        }, {
          key: "draw",
          value: function draw(lineNum, spanningCell) {
            if (lineNum == 'top') return this.drawTop(this.drawRight);
            if (lineNum == 'bottom') return this.drawBottom(this.drawRight);
            var content = utils.truncate(this.content, 10, this.truncate);
            if (!lineNum) {
              info("".concat(this.y, "-").concat(this.x, ": ").concat(this.rowSpan - lineNum, "x").concat(this.colSpan, " Cell ").concat(content));
            } else {
              // debug(`${lineNum}-${this.x}: 1x${this.colSpan} RowSpanCell ${content}`);
            }
            var padLen = Math.max(this.height - this.lines.length, 0);
            var padTop;
            switch (this.vAlign) {
              case 'center':
                padTop = Math.ceil(padLen / 2);
                break;
              case 'bottom':
                padTop = padLen;
                break;
              default:
                padTop = 0;
            }
            if (lineNum < padTop || lineNum >= padTop + this.lines.length) {
              return this.drawEmpty(this.drawRight, spanningCell);
            }
            var forceTruncation = this.lines.length > this.height && lineNum + 1 >= this.height;
            return this.drawLine(lineNum - padTop, this.drawRight, forceTruncation, spanningCell);
          }

          /**
           * Renders the top line of the cell.
           * @param drawRight - true if this method should render the right edge of the cell.
           * @returns {String}
           */
        }, {
          key: "drawTop",
          value: function drawTop(drawRight) {
            var content = [];
            if (this.cells) {
              //TODO: cells should always exist - some tests don't fill it in though
              this.widths.forEach(function (width, index) {
                content.push(this._topLeftChar(index));
                content.push(utils.repeat(this.chars[this.y == 0 ? 'top' : 'mid'], width));
              }, this);
            } else {
              content.push(this._topLeftChar(0));
              content.push(utils.repeat(this.chars[this.y == 0 ? 'top' : 'mid'], this.width));
            }
            if (drawRight) {
              content.push(this.chars[this.y == 0 ? 'topRight' : 'rightMid']);
            }
            return this.wrapWithStyleColors('border', content.join(''));
          }
        }, {
          key: "_topLeftChar",
          value: function _topLeftChar(offset) {
            var x = this.x + offset;
            var leftChar;
            if (this.y == 0) {
              leftChar = x == 0 ? 'topLeft' : offset == 0 ? 'topMid' : 'top';
            } else {
              if (x == 0) {
                leftChar = 'leftMid';
              } else {
                leftChar = offset == 0 ? 'midMid' : 'bottomMid';
                if (this.cells) {
                  //TODO: cells should always exist - some tests don't fill it in though
                  var spanAbove = this.cells[this.y - 1][x] instanceof Cell.ColSpanCell;
                  if (spanAbove) {
                    leftChar = offset == 0 ? 'topMid' : 'mid';
                  }
                  if (offset == 0) {
                    var i = 1;
                    while (this.cells[this.y][x - i] instanceof Cell.ColSpanCell) {
                      i++;
                    }
                    if (this.cells[this.y][x - i] instanceof Cell.RowSpanCell) {
                      leftChar = 'leftMid';
                    }
                  }
                }
              }
            }
            return this.chars[leftChar];
          }
        }, {
          key: "wrapWithStyleColors",
          value: function wrapWithStyleColors(styleProperty, content) {
            if (this[styleProperty] && this[styleProperty].length) {
              try {
                var colors = require('@colors/colors/safe');
                for (var i = this[styleProperty].length - 1; i >= 0; i--) {
                  colors = colors[this[styleProperty][i]];
                }
                return colors(content);
              } catch (e) {
                return content;
              }
            } else {
              return content;
            }
          }

          /**
           * Renders a line of text.
           * @param lineNum - Which line of text to render. This is not necessarily the line within the cell.
           * There may be top-padding above the first line of text.
           * @param drawRight - true if this method should render the right edge of the cell.
           * @param forceTruncationSymbol - `true` if the rendered text should end with the truncation symbol even
           * if the text fits. This is used when the cell is vertically truncated. If `false` the text should
           * only include the truncation symbol if the text will not fit horizontally within the cell width.
           * @param spanningCell - a number of if being called from a RowSpanCell. (how many rows below). otherwise undefined.
           * @returns {String}
           */
        }, {
          key: "drawLine",
          value: function drawLine(lineNum, drawRight, forceTruncationSymbol, spanningCell) {
            var left = this.chars[this.x == 0 ? 'left' : 'middle'];
            if (this.x && spanningCell && this.cells) {
              var cellLeft = this.cells[this.y + spanningCell][this.x - 1];
              while (cellLeft instanceof ColSpanCell) {
                cellLeft = this.cells[cellLeft.y][cellLeft.x - 1];
              }
              if (!(cellLeft instanceof RowSpanCell)) {
                left = this.chars['rightMid'];
              }
            }
            var leftPadding = utils.repeat(' ', this.paddingLeft);
            var right = drawRight ? this.chars['right'] : '';
            var rightPadding = utils.repeat(' ', this.paddingRight);
            var line = this.lines[lineNum];
            var len = this.width - (this.paddingLeft + this.paddingRight);
            if (forceTruncationSymbol) line += this.truncate || '…';
            var content = utils.truncate(line, len, this.truncate);
            content = utils.pad(content, len, ' ', this.hAlign);
            content = leftPadding + content + rightPadding;
            return this.stylizeLine(left, content, right);
          }
        }, {
          key: "stylizeLine",
          value: function stylizeLine(left, content, right) {
            left = this.wrapWithStyleColors('border', left);
            right = this.wrapWithStyleColors('border', right);
            if (this.y === 0) {
              content = this.wrapWithStyleColors('head', content);
            }
            return left + content + right;
          }

          /**
           * Renders the bottom line of the cell.
           * @param drawRight - true if this method should render the right edge of the cell.
           * @returns {String}
           */
        }, {
          key: "drawBottom",
          value: function drawBottom(drawRight) {
            var left = this.chars[this.x == 0 ? 'bottomLeft' : 'bottomMid'];
            var content = utils.repeat(this.chars.bottom, this.width);
            var right = drawRight ? this.chars['bottomRight'] : '';
            return this.wrapWithStyleColors('border', left + content + right);
          }

          /**
           * Renders a blank line of text within the cell. Used for top and/or bottom padding.
           * @param drawRight - true if this method should render the right edge of the cell.
           * @param spanningCell - a number of if being called from a RowSpanCell. (how many rows below). otherwise undefined.
           * @returns {String}
           */
        }, {
          key: "drawEmpty",
          value: function drawEmpty(drawRight, spanningCell) {
            var left = this.chars[this.x == 0 ? 'left' : 'middle'];
            if (this.x && spanningCell && this.cells) {
              var cellLeft = this.cells[this.y + spanningCell][this.x - 1];
              while (cellLeft instanceof ColSpanCell) {
                cellLeft = this.cells[cellLeft.y][cellLeft.x - 1];
              }
              if (!(cellLeft instanceof RowSpanCell)) {
                left = this.chars['rightMid'];
              }
            }
            var right = drawRight ? this.chars['right'] : '';
            var content = utils.repeat(' ', this.width);
            return this.stylizeLine(left, content, right);
          }
        }]);
      }();
      var ColSpanCell = /*#__PURE__*/function () {
        /**
         * A Cell that doesn't do anything. It just draws empty lines.
         * Used as a placeholder in column spanning.
         * @constructor
         */
        function ColSpanCell() {
          _classCallCheck(this, ColSpanCell);
        }
        return _createClass(ColSpanCell, [{
          key: "draw",
          value: function draw(lineNum) {
            if (typeof lineNum === 'number') {
              debug("".concat(this.y, "-").concat(this.x, ": 1x1 ColSpanCell"));
            }
            return '';
          }
        }, {
          key: "init",
          value: function init() {}
        }, {
          key: "mergeTableOptions",
          value: function mergeTableOptions() {}
        }]);
      }();
      var RowSpanCell = /*#__PURE__*/function () {
        /**
         * A placeholder Cell for a Cell that spans multiple rows.
         * It delegates rendering to the original cell, but adds the appropriate offset.
         * @param originalCell
         * @constructor
         */
        function RowSpanCell(originalCell) {
          _classCallCheck(this, RowSpanCell);
          this.originalCell = originalCell;
        }
        return _createClass(RowSpanCell, [{
          key: "init",
          value: function init(tableOptions) {
            var y = this.y;
            var originalY = this.originalCell.y;
            this.cellOffset = y - originalY;
            this.offset = findDimension(tableOptions.rowHeights, originalY, this.cellOffset);
          }
        }, {
          key: "draw",
          value: function draw(lineNum) {
            if (lineNum == 'top') {
              return this.originalCell.draw(this.offset, this.cellOffset);
            }
            if (lineNum == 'bottom') {
              return this.originalCell.draw('bottom');
            }
            debug("".concat(this.y, "-").concat(this.x, ": 1x").concat(this.colSpan, " RowSpanCell for ").concat(this.originalCell.content));
            return this.originalCell.draw(this.offset + 1 + lineNum);
          }
        }, {
          key: "mergeTableOptions",
          value: function mergeTableOptions() {}
        }]);
      }();
      function firstDefined() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return args.filter(function (v) {
          return v !== undefined && v !== null;
        }).shift();
      }

      // HELPER FUNCTIONS
      function setOption(objA, objB, nameB, targetObj) {
        var nameA = nameB.split('-');
        if (nameA.length > 1) {
          nameA[1] = nameA[1].charAt(0).toUpperCase() + nameA[1].substr(1);
          nameA = nameA.join('');
          targetObj[nameA] = firstDefined(objA[nameA], objA[nameB], objB[nameA], objB[nameB]);
        } else {
          targetObj[nameB] = firstDefined(objA[nameB], objB[nameB]);
        }
      }
      function findDimension(dimensionTable, startingIndex, span) {
        var ret = dimensionTable[startingIndex];
        for (var i = 1; i < span; i++) {
          ret += 1 + dimensionTable[startingIndex + i];
        }
        return ret;
      }
      function sumPlusOne(a, b) {
        return a + b + 1;
      }
      var CHAR_NAMES = ['top', 'top-mid', 'top-left', 'top-right', 'bottom', 'bottom-mid', 'bottom-left', 'bottom-right', 'left', 'left-mid', 'mid', 'mid-mid', 'right', 'right-mid', 'middle'];
      module.exports = Cell;
      module.exports.ColSpanCell = ColSpanCell;
      module.exports.RowSpanCell = RowSpanCell;
    }, {
      "./debug": 73,
      "./utils": 76,
      "@colors/colors/safe": 69
    }],
    73: [function (require, module, exports) {
      var messages = [];
      var level = 0;
      var debug = function debug(msg, min) {
        if (level >= min) {
          messages.push(msg);
        }
      };
      debug.WARN = 1;
      debug.INFO = 2;
      debug.DEBUG = 3;
      debug.reset = function () {
        messages = [];
      };
      debug.setDebugLevel = function (v) {
        level = v;
      };
      debug.warn = function (msg) {
        return debug(msg, debug.WARN);
      };
      debug.info = function (msg) {
        return debug(msg, debug.INFO);
      };
      debug.debug = function (msg) {
        return debug(msg, debug.DEBUG);
      };
      debug.debugMessages = function () {
        return messages;
      };
      module.exports = debug;
    }, {}],
    74: [function (require, module, exports) {
      var _require2 = require('./debug'),
        warn = _require2.warn,
        debug = _require2.debug;
      var Cell = require('./cell');
      var ColSpanCell = Cell.ColSpanCell,
        RowSpanCell = Cell.RowSpanCell;
      (function () {
        function next(alloc, col) {
          if (alloc[col] > 0) {
            return next(alloc, col + 1);
          }
          return col;
        }
        function layoutTable(table) {
          var alloc = {};
          table.forEach(function (row, rowIndex) {
            var col = 0;
            row.forEach(function (cell) {
              cell.y = rowIndex;
              // Avoid erroneous call to next() on first row
              cell.x = rowIndex ? next(alloc, col) : col;
              var rowSpan = cell.rowSpan || 1;
              var colSpan = cell.colSpan || 1;
              if (rowSpan > 1) {
                for (var cs = 0; cs < colSpan; cs++) {
                  alloc[cell.x + cs] = rowSpan;
                }
              }
              col = cell.x + colSpan;
            });
            Object.keys(alloc).forEach(function (idx) {
              alloc[idx]--;
              if (alloc[idx] < 1) delete alloc[idx];
            });
          });
        }
        function maxWidth(table) {
          var mw = 0;
          table.forEach(function (row) {
            row.forEach(function (cell) {
              mw = Math.max(mw, cell.x + (cell.colSpan || 1));
            });
          });
          return mw;
        }
        function maxHeight(table) {
          return table.length;
        }
        function cellsConflict(cell1, cell2) {
          var yMin1 = cell1.y;
          var yMax1 = cell1.y - 1 + (cell1.rowSpan || 1);
          var yMin2 = cell2.y;
          var yMax2 = cell2.y - 1 + (cell2.rowSpan || 1);
          var yConflict = !(yMin1 > yMax2 || yMin2 > yMax1);
          var xMin1 = cell1.x;
          var xMax1 = cell1.x - 1 + (cell1.colSpan || 1);
          var xMin2 = cell2.x;
          var xMax2 = cell2.x - 1 + (cell2.colSpan || 1);
          var xConflict = !(xMin1 > xMax2 || xMin2 > xMax1);
          return yConflict && xConflict;
        }
        function conflictExists(rows, x, y) {
          var i_max = Math.min(rows.length - 1, y);
          var cell = {
            x: x,
            y: y
          };
          for (var i = 0; i <= i_max; i++) {
            var row = rows[i];
            for (var j = 0; j < row.length; j++) {
              if (cellsConflict(cell, row[j])) {
                return true;
              }
            }
          }
          return false;
        }
        function allBlank(rows, y, xMin, xMax) {
          for (var x = xMin; x < xMax; x++) {
            if (conflictExists(rows, x, y)) {
              return false;
            }
          }
          return true;
        }
        function addRowSpanCells(table) {
          table.forEach(function (row, rowIndex) {
            row.forEach(function (cell) {
              for (var i = 1; i < cell.rowSpan; i++) {
                var rowSpanCell = new RowSpanCell(cell);
                rowSpanCell.x = cell.x;
                rowSpanCell.y = cell.y + i;
                rowSpanCell.colSpan = cell.colSpan;
                insertCell(rowSpanCell, table[rowIndex + i]);
              }
            });
          });
        }
        function addColSpanCells(cellRows) {
          for (var rowIndex = cellRows.length - 1; rowIndex >= 0; rowIndex--) {
            var cellColumns = cellRows[rowIndex];
            for (var columnIndex = 0; columnIndex < cellColumns.length; columnIndex++) {
              var cell = cellColumns[columnIndex];
              for (var k = 1; k < cell.colSpan; k++) {
                var colSpanCell = new ColSpanCell();
                colSpanCell.x = cell.x + k;
                colSpanCell.y = cell.y;
                cellColumns.splice(columnIndex + 1, 0, colSpanCell);
              }
            }
          }
        }
        function insertCell(cell, row) {
          var x = 0;
          while (x < row.length && row[x].x < cell.x) {
            x++;
          }
          row.splice(x, 0, cell);
        }
        function fillInTable(table) {
          var h_max = maxHeight(table);
          var w_max = maxWidth(table);
          debug("Max rows: ".concat(h_max, "; Max cols: ").concat(w_max));
          for (var y = 0; y < h_max; y++) {
            for (var x = 0; x < w_max; x++) {
              if (!conflictExists(table, x, y)) {
                var opts = {
                  x: x,
                  y: y,
                  colSpan: 1,
                  rowSpan: 1
                };
                x++;
                while (x < w_max && !conflictExists(table, x, y)) {
                  opts.colSpan++;
                  x++;
                }
                var y2 = y + 1;
                while (y2 < h_max && allBlank(table, y2, opts.x, opts.x + opts.colSpan)) {
                  opts.rowSpan++;
                  y2++;
                }
                var cell = new Cell(opts);
                cell.x = opts.x;
                cell.y = opts.y;
                warn("Missing cell at ".concat(cell.y, "-").concat(cell.x, "."));
                insertCell(cell, table[y]);
              }
            }
          }
        }
        function generateCells(rows) {
          return rows.map(function (row) {
            if (!Array.isArray(row)) {
              var key = Object.keys(row)[0];
              row = row[key];
              if (Array.isArray(row)) {
                row = row.slice();
                row.unshift(key);
              } else {
                row = [key, row];
              }
            }
            return row.map(function (cell) {
              return new Cell(cell);
            });
          });
        }
        function makeTableLayout(rows) {
          var cellRows = generateCells(rows);
          layoutTable(cellRows);
          fillInTable(cellRows);
          addRowSpanCells(cellRows);
          addColSpanCells(cellRows);
          return cellRows;
        }
        module.exports = {
          makeTableLayout: makeTableLayout,
          layoutTable: layoutTable,
          addRowSpanCells: addRowSpanCells,
          maxWidth: maxWidth,
          fillInTable: fillInTable,
          computeWidths: makeComputeWidths('colSpan', 'desiredWidth', 'x', 1),
          computeHeights: makeComputeWidths('rowSpan', 'desiredHeight', 'y', 1)
        };
      })();
      function makeComputeWidths(colSpan, desiredWidth, x, forcedMin) {
        return function (vals, table) {
          var result = [];
          var spanners = [];
          var auto = {};
          table.forEach(function (row) {
            row.forEach(function (cell) {
              if ((cell[colSpan] || 1) > 1) {
                spanners.push(cell);
              } else {
                result[cell[x]] = Math.max(result[cell[x]] || 0, cell[desiredWidth] || 0, forcedMin);
              }
            });
          });
          vals.forEach(function (val, index) {
            if (typeof val === 'number') {
              result[index] = val;
            }
          });

          //spanners.forEach(function(cell){
          for (var k = spanners.length - 1; k >= 0; k--) {
            var cell = spanners[k];
            var span = cell[colSpan];
            var col = cell[x];
            var existingWidth = result[col];
            var editableCols = typeof vals[col] === 'number' ? 0 : 1;
            if (typeof existingWidth === 'number') {
              for (var i = 1; i < span; i++) {
                existingWidth += 1 + result[col + i];
                if (typeof vals[col + i] !== 'number') {
                  editableCols++;
                }
              }
            } else {
              existingWidth = desiredWidth === 'desiredWidth' ? cell.desiredWidth - 1 : 1;
              if (!auto[col] || auto[col] < existingWidth) {
                auto[col] = existingWidth;
              }
            }
            if (cell[desiredWidth] > existingWidth) {
              var _i = 0;
              while (editableCols > 0 && cell[desiredWidth] > existingWidth) {
                if (typeof vals[col + _i] !== 'number') {
                  var dif = Math.round((cell[desiredWidth] - existingWidth) / editableCols);
                  existingWidth += dif;
                  result[col + _i] += dif;
                  editableCols--;
                }
                _i++;
              }
            }
          }
          Object.assign(vals, result, auto);
          for (var j = 0; j < vals.length; j++) {
            vals[j] = Math.max(forcedMin, vals[j] || 0);
          }
        };
      }
    }, {
      "./cell": 72,
      "./debug": 73
    }],
    75: [function (require, module, exports) {
      var debug = require('./debug');
      var utils = require('./utils');
      var tableLayout = require('./layout-manager');
      var Table = /*#__PURE__*/function (_Array) {
        function Table(opts) {
          var _this2;
          _classCallCheck(this, Table);
          _this2 = _callSuper(this, Table);
          var options = utils.mergeOptions(opts);
          Object.defineProperty(_this2, 'options', {
            value: options,
            enumerable: options.debug
          });
          if (options.debug) {
            switch (_typeof(options.debug)) {
              case 'boolean':
                debug.setDebugLevel(debug.WARN);
                break;
              case 'number':
                debug.setDebugLevel(options.debug);
                break;
              case 'string':
                debug.setDebugLevel(parseInt(options.debug, 10));
                break;
              default:
                debug.setDebugLevel(debug.WARN);
                debug.warn("Debug option is expected to be boolean, number, or string. Received a ".concat(_typeof(options.debug)));
            }
            Object.defineProperty(_this2, 'messages', {
              get: function get() {
                return debug.debugMessages();
              }
            });
          }
          return _this2;
        }
        _inherits(Table, _Array);
        return _createClass(Table, [{
          key: "toString",
          value: function toString() {
            var array = this;
            var headersPresent = this.options.head && this.options.head.length;
            if (headersPresent) {
              array = [this.options.head];
              if (this.length) {
                array.push.apply(array, this);
              }
            } else {
              this.options.style.head = [];
            }
            var cells = tableLayout.makeTableLayout(array);
            cells.forEach(function (row) {
              row.forEach(function (cell) {
                cell.mergeTableOptions(this.options, cells);
              }, this);
            }, this);
            tableLayout.computeWidths(this.options.colWidths, cells);
            tableLayout.computeHeights(this.options.rowHeights, cells);
            cells.forEach(function (row) {
              row.forEach(function (cell) {
                cell.init(this.options);
              }, this);
            }, this);
            var result = [];
            for (var rowIndex = 0; rowIndex < cells.length; rowIndex++) {
              var row = cells[rowIndex];
              var heightOfRow = this.options.rowHeights[rowIndex];
              if (rowIndex === 0 || !this.options.style.compact || rowIndex == 1 && headersPresent) {
                doDraw(row, 'top', result);
              }
              for (var lineNum = 0; lineNum < heightOfRow; lineNum++) {
                doDraw(row, lineNum, result);
              }
              if (rowIndex + 1 == cells.length) {
                doDraw(row, 'bottom', result);
              }
            }
            return result.join('\n');
          }
        }, {
          key: "width",
          get: function get() {
            var str = this.toString().split('\n');
            return str[0].length;
          }
        }]);
      }(/*#__PURE__*/_wrapNativeSuper(Array));
      Table.reset = function () {
        return debug.reset();
      };
      function doDraw(row, lineNum, result) {
        var line = [];
        row.forEach(function (cell) {
          line.push(cell.draw(lineNum));
        });
        var str = line.join('');
        if (str.length) result.push(str);
      }
      module.exports = Table;
    }, {
      "./debug": 73,
      "./layout-manager": 74,
      "./utils": 76
    }],
    76: [function (require, module, exports) {
      var stringWidth = require('string-width');
      function codeRegex(capture) {
        return capture ? /\u001b\[((?:\d*;){0,5}\d*)m/g : /\u001b\[(?:\d*;){0,5}\d*m/g;
      }
      function strlen(str) {
        var code = codeRegex();
        var stripped = ('' + str).replace(code, '');
        var split = stripped.split('\n');
        return split.reduce(function (memo, s) {
          return stringWidth(s) > memo ? stringWidth(s) : memo;
        }, 0);
      }
      function repeat(str, times) {
        return Array(times + 1).join(str);
      }
      function pad(str, len, pad, dir) {
        var length = strlen(str);
        if (len + 1 >= length) {
          var padlen = len - length;
          switch (dir) {
            case 'right':
              {
                str = repeat(pad, padlen) + str;
                break;
              }
            case 'center':
              {
                var right = Math.ceil(padlen / 2);
                var left = padlen - right;
                str = repeat(pad, left) + str + repeat(pad, right);
                break;
              }
            default:
              {
                str = str + repeat(pad, padlen);
                break;
              }
          }
        }
        return str;
      }
      var codeCache = {};
      function addToCodeCache(name, on, off) {
        on = "\x1B[" + on + 'm';
        off = "\x1B[" + off + 'm';
        codeCache[on] = {
          set: name,
          to: true
        };
        codeCache[off] = {
          set: name,
          to: false
        };
        codeCache[name] = {
          on: on,
          off: off
        };
      }

      //https://github.com/Marak/colors.js/blob/master/lib/styles.js
      addToCodeCache('bold', 1, 22);
      addToCodeCache('italics', 3, 23);
      addToCodeCache('underline', 4, 24);
      addToCodeCache('inverse', 7, 27);
      addToCodeCache('strikethrough', 9, 29);
      function updateState(state, controlChars) {
        var controlCode = controlChars[1] ? parseInt(controlChars[1].split(';')[0]) : 0;
        if (controlCode >= 30 && controlCode <= 39 || controlCode >= 90 && controlCode <= 97) {
          state.lastForegroundAdded = controlChars[0];
          return;
        }
        if (controlCode >= 40 && controlCode <= 49 || controlCode >= 100 && controlCode <= 107) {
          state.lastBackgroundAdded = controlChars[0];
          return;
        }
        if (controlCode === 0) {
          for (var i in state) {
            /* istanbul ignore else */
            if (Object.prototype.hasOwnProperty.call(state, i)) {
              delete state[i];
            }
          }
          return;
        }
        var info = codeCache[controlChars[0]];
        if (info) {
          state[info.set] = info.to;
        }
      }
      function readState(line) {
        var code = codeRegex(true);
        var controlChars = code.exec(line);
        var state = {};
        while (controlChars !== null) {
          updateState(state, controlChars);
          controlChars = code.exec(line);
        }
        return state;
      }
      function unwindState(state, ret) {
        var lastBackgroundAdded = state.lastBackgroundAdded;
        var lastForegroundAdded = state.lastForegroundAdded;
        delete state.lastBackgroundAdded;
        delete state.lastForegroundAdded;
        Object.keys(state).forEach(function (key) {
          if (state[key]) {
            ret += codeCache[key].off;
          }
        });
        if (lastBackgroundAdded && lastBackgroundAdded != "\x1B[49m") {
          ret += "\x1B[49m";
        }
        if (lastForegroundAdded && lastForegroundAdded != "\x1B[39m") {
          ret += "\x1B[39m";
        }
        return ret;
      }
      function rewindState(state, ret) {
        var lastBackgroundAdded = state.lastBackgroundAdded;
        var lastForegroundAdded = state.lastForegroundAdded;
        delete state.lastBackgroundAdded;
        delete state.lastForegroundAdded;
        Object.keys(state).forEach(function (key) {
          if (state[key]) {
            ret = codeCache[key].on + ret;
          }
        });
        if (lastBackgroundAdded && lastBackgroundAdded != "\x1B[49m") {
          ret = lastBackgroundAdded + ret;
        }
        if (lastForegroundAdded && lastForegroundAdded != "\x1B[39m") {
          ret = lastForegroundAdded + ret;
        }
        return ret;
      }
      function truncateWidth(str, desiredLength) {
        if (str.length === strlen(str)) {
          return str.substr(0, desiredLength);
        }
        while (strlen(str) > desiredLength) {
          str = str.slice(0, -1);
        }
        return str;
      }
      function truncateWidthWithAnsi(str, desiredLength) {
        var code = codeRegex(true);
        var split = str.split(codeRegex());
        var splitIndex = 0;
        var retLen = 0;
        var ret = '';
        var myArray;
        var state = {};
        while (retLen < desiredLength) {
          myArray = code.exec(str);
          var toAdd = split[splitIndex];
          splitIndex++;
          if (retLen + strlen(toAdd) > desiredLength) {
            toAdd = truncateWidth(toAdd, desiredLength - retLen);
          }
          ret += toAdd;
          retLen += strlen(toAdd);
          if (retLen < desiredLength) {
            if (!myArray) {
              break;
            } // full-width chars may cause a whitespace which cannot be filled
            ret += myArray[0];
            updateState(state, myArray);
          }
        }
        return unwindState(state, ret);
      }
      function truncate(str, desiredLength, truncateChar) {
        truncateChar = truncateChar || '…';
        var lengthOfStr = strlen(str);
        if (lengthOfStr <= desiredLength) {
          return str;
        }
        desiredLength -= strlen(truncateChar);
        var ret = truncateWidthWithAnsi(str, desiredLength);
        ret += truncateChar;
        var hrefTag = '\x1B]8;;\x07';
        if (str.includes(hrefTag) && !ret.includes(hrefTag)) {
          ret += hrefTag;
        }
        return ret;
      }
      function defaultOptions() {
        return {
          chars: {
            top: '─',
            'top-mid': '┬',
            'top-left': '┌',
            'top-right': '┐',
            bottom: '─',
            'bottom-mid': '┴',
            'bottom-left': '└',
            'bottom-right': '┘',
            left: '│',
            'left-mid': '├',
            mid: '─',
            'mid-mid': '┼',
            right: '│',
            'right-mid': '┤',
            middle: '│'
          },
          truncate: '…',
          colWidths: [],
          rowHeights: [],
          colAligns: [],
          rowAligns: [],
          style: {
            'padding-left': 1,
            'padding-right': 1,
            head: ['red'],
            border: ['grey'],
            compact: false
          },
          head: []
        };
      }
      function mergeOptions(options, defaults) {
        options = options || {};
        defaults = defaults || defaultOptions();
        var ret = Object.assign({}, defaults, options);
        ret.chars = Object.assign({}, defaults.chars, options.chars);
        ret.style = Object.assign({}, defaults.style, options.style);
        return ret;
      }

      // Wrap on word boundary
      function wordWrap(maxLength, input) {
        var lines = [];
        var split = input.split(/(\s+)/g);
        var line = [];
        var lineLength = 0;
        var whitespace;
        for (var i = 0; i < split.length; i += 2) {
          var word = split[i];
          var newLength = lineLength + strlen(word);
          if (lineLength > 0 && whitespace) {
            newLength += whitespace.length;
          }
          if (newLength > maxLength) {
            if (lineLength !== 0) {
              lines.push(line.join(''));
            }
            line = [word];
            lineLength = strlen(word);
          } else {
            line.push(whitespace || '', word);
            lineLength = newLength;
          }
          whitespace = split[i + 1];
        }
        if (lineLength) {
          lines.push(line.join(''));
        }
        return lines;
      }

      // Wrap text (ignoring word boundaries)
      function textWrap(maxLength, input) {
        var lines = [];
        var line = '';
        function pushLine(str, ws) {
          if (line.length && ws) line += ws;
          line += str;
          while (line.length > maxLength) {
            lines.push(line.slice(0, maxLength));
            line = line.slice(maxLength);
          }
        }
        var split = input.split(/(\s+)/g);
        for (var i = 0; i < split.length; i += 2) {
          pushLine(split[i], i && split[i - 1]);
        }
        if (line.length) lines.push(line);
        return lines;
      }
      function multiLineWordWrap(maxLength, input) {
        var wrapOnWordBoundary = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var output = [];
        input = input.split('\n');
        var handler = wrapOnWordBoundary ? wordWrap : textWrap;
        for (var i = 0; i < input.length; i++) {
          output.push.apply(output, handler(maxLength, input[i]));
        }
        return output;
      }
      function colorizeLines(input) {
        var state = {};
        var output = [];
        for (var i = 0; i < input.length; i++) {
          var line = rewindState(state, input[i]);
          state = readState(line);
          var temp = Object.assign({}, state);
          output.push(unwindState(temp, line));
        }
        return output;
      }

      /**
       * Credit: Matheus Sampaio https://github.com/matheussampaio
       */
      function hyperlink(url, text) {
        var OSC = "\x1B]";
        var BEL = "\x07";
        var SEP = ';';
        return [OSC, '8', SEP, SEP, url || text, BEL, text, OSC, '8', SEP, SEP, BEL].join('');
      }
      module.exports = {
        strlen: strlen,
        repeat: repeat,
        pad: pad,
        truncate: truncate,
        mergeOptions: mergeOptions,
        wordWrap: multiLineWordWrap,
        colorizeLines: colorizeLines,
        hyperlink: hyperlink
      };
    }, {
      "string-width": 79
    }],
    77: [function (require, module, exports) {
      "use strict";

      module.exports = function () {
        // https://mths.be/emoji
        return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
      };
    }, {}],
    78: [function (require, module, exports) {
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
    79: [function (require, module, exports) {
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
      "emoji-regex": 77,
      "is-fullwidth-code-point": 78,
      "strip-ansi": 80
    }],
    80: [function (require, module, exports) {
      'use strict';

      var ansiRegex = require('ansi-regex');
      module.exports = function (string) {
        return typeof string === 'string' ? string.replace(ansiRegex(), '') : string;
      };
    }, {
      "ansi-regex": 70
    }]
  }, {}, [58])(58);
});

})();