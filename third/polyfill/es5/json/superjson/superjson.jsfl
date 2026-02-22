(function(){
 "use strict";

 // shims
 var URL;
 require(["url","typedarray","es8-shim"],function(url,typedarray,es8Shim){
   URL = url.URL;
   // typedarray
   // ArrayBuffer.isView
   // es8
   // Object.entries
 });

function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
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
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function webpackUniversalModuleDefinition(root, factory) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && (typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') exports["superjson"] = factory();else root["superjson"] = factory();
})(void 0, function () {
  return /******/function () {
    // webpackBootstrap
    /******/
    var __webpack_modules__ = {
      /***/97: (/***/function _(module, __unused_webpack_exports, __webpack_require__) {
        /*
        
        // npx browserify entry.js -o dist/superjson.js --standalone superjson
        // npx babel dist/superjson.js --out-file dist/superjson.jsfl
        
        webpack
        npx babel dist/superjson.js --out-file dist/superjson.jsfl
        node wrap-iife.js
        
        
         */

        module.exports = __webpack_require__(662);

        /***/
      }),
      /***/662: (/***/function _(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
        "use strict";

        // ESM COMPAT FLAG
        __webpack_require__.r(__webpack_exports__);

        // EXPORTS
        __webpack_require__.d(__webpack_exports__, {
          SuperJSON: function SuperJSON() {
            return /* binding */_SuperJSON;
          },
          allowErrorProps: function allowErrorProps() {
            return /* binding */_allowErrorProps;
          },
          "default": function _default() {
            return /* binding */dist;
          },
          deserialize: function deserialize() {
            return /* binding */_deserialize;
          },
          parse: function parse() {
            return /* binding */_parse;
          },
          registerClass: function registerClass() {
            return /* binding */_registerClass;
          },
          registerCustom: function registerCustom() {
            return /* binding */_registerCustom;
          },
          registerSymbol: function registerSymbol() {
            return /* binding */_registerSymbol;
          },
          serialize: function serialize() {
            return /* binding */_serialize;
          },
          stringify: function stringify() {
            return /* binding */_stringify;
          }
        });
        ; // ./node_modules/superjson/dist/double-indexed-kv.js
        var DoubleIndexedKV = /*#__PURE__*/function () {
          function DoubleIndexedKV() {
            _classCallCheck(this, DoubleIndexedKV);
            this.keyToValue = new Map();
            this.valueToKey = new Map();
          }
          return _createClass(DoubleIndexedKV, [{
            key: "set",
            value: function set(key, value) {
              this.keyToValue.set(key, value);
              this.valueToKey.set(value, key);
            }
          }, {
            key: "getByKey",
            value: function getByKey(key) {
              return this.keyToValue.get(key);
            }
          }, {
            key: "getByValue",
            value: function getByValue(value) {
              return this.valueToKey.get(value);
            }
          }, {
            key: "clear",
            value: function clear() {
              this.keyToValue.clear();
              this.valueToKey.clear();
            }
          }]);
        }();
        ; // ./node_modules/superjson/dist/registry.js
        var Registry = /*#__PURE__*/function () {
          function Registry(generateIdentifier) {
            _classCallCheck(this, Registry);
            this.generateIdentifier = generateIdentifier;
            this.kv = new DoubleIndexedKV();
          }
          return _createClass(Registry, [{
            key: "register",
            value: function register(value, identifier) {
              if (this.kv.getByValue(value)) {
                return;
              }
              if (!identifier) {
                identifier = this.generateIdentifier(value);
              }
              this.kv.set(identifier, value);
            }
          }, {
            key: "clear",
            value: function clear() {
              this.kv.clear();
            }
          }, {
            key: "getIdentifier",
            value: function getIdentifier(value) {
              return this.kv.getByValue(value);
            }
          }, {
            key: "getValue",
            value: function getValue(identifier) {
              return this.kv.getByKey(identifier);
            }
          }]);
        }();
        ; // ./node_modules/superjson/dist/class-registry.js
        var ClassRegistry = /*#__PURE__*/function (_Registry) {
          function ClassRegistry() {
            var _this;
            _classCallCheck(this, ClassRegistry);
            _this = _callSuper(this, ClassRegistry, [function (c) {
              return c.name;
            }]);
            _this.classToAllowedProps = new Map();
            return _this;
          }
          _inherits(ClassRegistry, _Registry);
          return _createClass(ClassRegistry, [{
            key: "register",
            value: function register(value, options) {
              if (_typeof(options) === 'object') {
                if (options.allowProps) {
                  this.classToAllowedProps.set(value, options.allowProps);
                }
                _superPropGet(ClassRegistry, "register", this, 3)([value, options.identifier]);
              } else {
                _superPropGet(ClassRegistry, "register", this, 3)([value, options]);
              }
            }
          }, {
            key: "getAllowedProps",
            value: function getAllowedProps(value) {
              return this.classToAllowedProps.get(value);
            }
          }]);
        }(Registry);
        ; // ./node_modules/superjson/dist/util.js
        function valuesOfObj(record) {
          if ('values' in Object) {
            // eslint-disable-next-line es5/no-es6-methods
            return Object.values(record);
          }
          var values = [];
          // eslint-disable-next-line no-restricted-syntax
          for (var key in record) {
            if (record.hasOwnProperty(key)) {
              values.push(record[key]);
            }
          }
          return values;
        }
        function find(record, predicate) {
          var values = valuesOfObj(record);
          if ('find' in values) {
            // eslint-disable-next-line es5/no-es6-methods
            return values.find(predicate);
          }
          var valuesNotNever = values;
          for (var i = 0; i < valuesNotNever.length; i++) {
            var value = valuesNotNever[i];
            if (predicate(value)) {
              return value;
            }
          }
          return undefined;
        }
        function forEach(record, run) {
          Object.entries(record).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];
            return run(value, key);
          });
        }
        function includes(arr, value) {
          return arr.indexOf(value) !== -1;
        }
        function findArr(record, predicate) {
          for (var i = 0; i < record.length; i++) {
            var value = record[i];
            if (predicate(value)) {
              return value;
            }
          }
          return undefined;
        }
        ; // ./node_modules/superjson/dist/custom-transformer-registry.js
        var CustomTransformerRegistry = /*#__PURE__*/function () {
          function CustomTransformerRegistry() {
            _classCallCheck(this, CustomTransformerRegistry);
            this.transfomers = {};
          }
          return _createClass(CustomTransformerRegistry, [{
            key: "register",
            value: function register(transformer) {
              this.transfomers[transformer.name] = transformer;
            }
          }, {
            key: "findApplicable",
            value: function findApplicable(v) {
              return find(this.transfomers, function (transformer) {
                return transformer.isApplicable(v);
              });
            }
          }, {
            key: "findByName",
            value: function findByName(name) {
              return this.transfomers[name];
            }
          }]);
        }();
        ; // ./node_modules/superjson/dist/is.js
        var getType = function getType(payload) {
          return Object.prototype.toString.call(payload).slice(8, -1);
        };
        var isUndefined = function isUndefined(payload) {
          return typeof payload === 'undefined';
        };
        var isNull = function isNull(payload) {
          return payload === null;
        };
        var isPlainObject = function isPlainObject(payload) {
          if (_typeof(payload) !== 'object' || payload === null) return false;
          if (payload === Object.prototype) return false;
          if (Object.getPrototypeOf(payload) === null) return true;
          return Object.getPrototypeOf(payload) === Object.prototype;
        };
        var isEmptyObject = function isEmptyObject(payload) {
          return isPlainObject(payload) && Object.keys(payload).length === 0;
        };
        var isArray = function isArray(payload) {
          return Array.isArray(payload);
        };
        var isString = function isString(payload) {
          return typeof payload === 'string';
        };
        var isNumber = function isNumber(payload) {
          return typeof payload === 'number' && !isNaN(payload);
        };
        var isBoolean = function isBoolean(payload) {
          return typeof payload === 'boolean';
        };
        var isRegExp = function isRegExp(payload) {
          return payload instanceof RegExp;
        };
        var isMap = function isMap(payload) {
          return payload instanceof Map;
        };
        var isSet = function isSet(payload) {
          return payload instanceof Set;
        };
        var isSymbol = function isSymbol(payload) {
          return getType(payload) === 'Symbol';
        };
        var isDate = function isDate(payload) {
          return payload instanceof Date && !isNaN(payload.valueOf());
        };
        var isError = function isError(payload) {
          return payload instanceof Error;
        };
        var isNaNValue = function isNaNValue(payload) {
          return typeof payload === 'number' && isNaN(payload);
        };
        var isPrimitive = function isPrimitive(payload) {
          return isBoolean(payload) || isNull(payload) || isUndefined(payload) || isNumber(payload) || isString(payload) || isSymbol(payload);
        };
        var isBigint = function isBigint(payload) {
          return typeof payload === 'bigint';
        };
        var isInfinite = function isInfinite(payload) {
          return payload === Infinity || payload === -Infinity;
        };
        var isTypedArray = function isTypedArray(payload) {
          return ArrayBuffer.isView(payload) && !(payload instanceof DataView);
        };
        var isURL = function isURL(payload) {
          return payload instanceof URL;
        };
        ; // ./node_modules/superjson/dist/pathstringifier.js
        var escapeKey = function escapeKey(key) {
          return key.replace(/\\/g, '\\\\').replace(/\./g, '\\.');
        };
        var stringifyPath = function stringifyPath(path) {
          return path.map(String).map(escapeKey).join('.');
        };
        var parsePath = function parsePath(string, legacyPaths) {
          var result = [];
          var segment = '';
          for (var i = 0; i < string.length; i++) {
            var char = string.charAt(i);
            if (!legacyPaths && char === '\\') {
              var escaped = string.charAt(i + 1);
              if (escaped === '\\') {
                segment += '\\';
                i++;
                continue;
              } else if (escaped !== '.') {
                throw Error('invalid path');
              }
            }
            var isEscapedDot = char === '\\' && string.charAt(i + 1) === '.';
            if (isEscapedDot) {
              segment += '.';
              i++;
              continue;
            }
            var isEndOfSegment = char === '.';
            if (isEndOfSegment) {
              result.push(segment);
              segment = '';
              continue;
            }
            segment += char;
          }
          var lastSegment = segment;
          result.push(lastSegment);
          return result;
        };
        ; // ./node_modules/superjson/dist/transformer.js

        function simpleTransformation(isApplicable, annotation, transform, untransform) {
          return {
            isApplicable: isApplicable,
            annotation: annotation,
            transform: transform,
            untransform: untransform
          };
        }
        var simpleRules = [simpleTransformation(isUndefined, 'undefined', function () {
          return null;
        }, function () {
          return undefined;
        }), simpleTransformation(isBigint, 'bigint', function (v) {
          return v.toString();
        }, function (v) {
          if (typeof BigInt !== 'undefined') {
            return BigInt(v);
          }
          console.error('Please add a BigInt polyfill.');
          return v;
        }), simpleTransformation(isDate, 'Date', function (v) {
          return v.toISOString();
        }, function (v) {
          return new Date(v);
        }), simpleTransformation(isError, 'Error', function (v, superJson) {
          var baseError = {
            name: v.name,
            message: v.message
          };
          if ('cause' in v) {
            baseError.cause = v.cause;
          }
          superJson.allowedErrorProps.forEach(function (prop) {
            baseError[prop] = v[prop];
          });
          return baseError;
        }, function (v, superJson) {
          var e = new Error(v.message, {
            cause: v.cause
          });
          e.name = v.name;
          e.stack = v.stack;
          superJson.allowedErrorProps.forEach(function (prop) {
            e[prop] = v[prop];
          });
          return e;
        }), simpleTransformation(isRegExp, 'regexp', function (v) {
          return '' + v;
        }, function (regex) {
          var body = regex.slice(1, regex.lastIndexOf('/'));
          var flags = regex.slice(regex.lastIndexOf('/') + 1);
          return new RegExp(body, flags);
        }), simpleTransformation(isSet, 'set',
        // (sets only exist in es6+)
        // eslint-disable-next-line es5/no-es6-methods
        function (v) {
          return _toConsumableArray(v.values());
        }, function (v) {
          return new Set(v);
        }), simpleTransformation(isMap, 'map', function (v) {
          return _toConsumableArray(v.entries());
        }, function (v) {
          return new Map(v);
        }), simpleTransformation(function (v) {
          return isNaNValue(v) || isInfinite(v);
        }, 'number', function (v) {
          if (isNaNValue(v)) {
            return 'NaN';
          }
          if (v > 0) {
            return 'Infinity';
          } else {
            return '-Infinity';
          }
        }, Number), simpleTransformation(function (v) {
          return v === 0 && 1 / v === -Infinity;
        }, 'number', function () {
          return '-0';
        }, Number), simpleTransformation(isURL, 'URL', function (v) {
          return v.toString();
        }, function (v) {
          return new URL(v);
        })];
        function compositeTransformation(isApplicable, annotation, transform, untransform) {
          return {
            isApplicable: isApplicable,
            annotation: annotation,
            transform: transform,
            untransform: untransform
          };
        }
        var symbolRule = compositeTransformation(function (s, superJson) {
          if (isSymbol(s)) {
            var isRegistered = !!superJson.symbolRegistry.getIdentifier(s);
            return isRegistered;
          }
          return false;
        }, function (s, superJson) {
          var identifier = superJson.symbolRegistry.getIdentifier(s);
          return ['symbol', identifier];
        }, function (v) {
          return v.description;
        }, function (_, a, superJson) {
          var value = superJson.symbolRegistry.getValue(a[1]);
          if (!value) {
            throw new Error('Trying to deserialize unknown symbol');
          }
          return value;
        });
        var constructorToName = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, Uint8ClampedArray].reduce(function (obj, ctor) {
          obj[ctor.name] = ctor;
          return obj;
        }, {});
        var typedArrayRule = compositeTransformation(isTypedArray, function (v) {
          return ['typed-array', v.constructor.name];
        }, function (v) {
          return _toConsumableArray(v);
        }, function (v, a) {
          var ctor = constructorToName[a[1]];
          if (!ctor) {
            throw new Error('Trying to deserialize unknown typed array');
          }
          return new ctor(v);
        });
        function isInstanceOfRegisteredClass(potentialClass, superJson) {
          if (potentialClass !== null && potentialClass !== void 0 && potentialClass.constructor) {
            var isRegistered = !!superJson.classRegistry.getIdentifier(potentialClass.constructor);
            return isRegistered;
          }
          return false;
        }
        var classRule = compositeTransformation(isInstanceOfRegisteredClass, function (clazz, superJson) {
          var identifier = superJson.classRegistry.getIdentifier(clazz.constructor);
          return ['class', identifier];
        }, function (clazz, superJson) {
          var allowedProps = superJson.classRegistry.getAllowedProps(clazz.constructor);
          if (!allowedProps) {
            return _objectSpread({}, clazz);
          }
          var result = {};
          allowedProps.forEach(function (prop) {
            result[prop] = clazz[prop];
          });
          return result;
        }, function (v, a, superJson) {
          var clazz = superJson.classRegistry.getValue(a[1]);
          if (!clazz) {
            throw new Error("Trying to deserialize unknown class '".concat(a[1], "' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564"));
          }
          return Object.assign(Object.create(clazz.prototype), v);
        });
        var customRule = compositeTransformation(function (value, superJson) {
          return !!superJson.customTransformerRegistry.findApplicable(value);
        }, function (value, superJson) {
          var transformer = superJson.customTransformerRegistry.findApplicable(value);
          return ['custom', transformer.name];
        }, function (value, superJson) {
          var transformer = superJson.customTransformerRegistry.findApplicable(value);
          return transformer.serialize(value);
        }, function (v, a, superJson) {
          var transformer = superJson.customTransformerRegistry.findByName(a[1]);
          if (!transformer) {
            throw new Error('Trying to deserialize unknown custom value');
          }
          return transformer.deserialize(v);
        });
        var compositeRules = [classRule, symbolRule, customRule, typedArrayRule];
        var transformValue = function transformValue(value, superJson) {
          var applicableCompositeRule = findArr(compositeRules, function (rule) {
            return rule.isApplicable(value, superJson);
          });
          if (applicableCompositeRule) {
            return {
              value: applicableCompositeRule.transform(value, superJson),
              type: applicableCompositeRule.annotation(value, superJson)
            };
          }
          var applicableSimpleRule = findArr(simpleRules, function (rule) {
            return rule.isApplicable(value, superJson);
          });
          if (applicableSimpleRule) {
            return {
              value: applicableSimpleRule.transform(value, superJson),
              type: applicableSimpleRule.annotation
            };
          }
          return undefined;
        };
        var simpleRulesByAnnotation = {};
        simpleRules.forEach(function (rule) {
          simpleRulesByAnnotation[rule.annotation] = rule;
        });
        var untransformValue = function untransformValue(json, type, superJson) {
          if (isArray(type)) {
            switch (type[0]) {
              case 'symbol':
                return symbolRule.untransform(json, type, superJson);
              case 'class':
                return classRule.untransform(json, type, superJson);
              case 'custom':
                return customRule.untransform(json, type, superJson);
              case 'typed-array':
                return typedArrayRule.untransform(json, type, superJson);
              default:
                throw new Error('Unknown transformation: ' + type);
            }
          } else {
            var transformation = simpleRulesByAnnotation[type];
            if (!transformation) {
              throw new Error('Unknown transformation: ' + type);
            }
            return transformation.untransform(json, superJson);
          }
        };
        ; // ./node_modules/superjson/dist/accessDeep.js

        var getNthKey = function getNthKey(value, n) {
          if (n > value.size) throw new Error('index out of bounds');
          var keys = value.keys();
          while (n > 0) {
            keys.next();
            n--;
          }
          return keys.next().value;
        };
        function validatePath(path) {
          if (includes(path, '__proto__')) {
            throw new Error('__proto__ is not allowed as a property');
          }
          if (includes(path, 'prototype')) {
            throw new Error('prototype is not allowed as a property');
          }
          if (includes(path, 'constructor')) {
            throw new Error('constructor is not allowed as a property');
          }
        }
        var getDeep = function getDeep(object, path) {
          validatePath(path);
          for (var i = 0; i < path.length; i++) {
            var key = path[i];
            if (isSet(object)) {
              object = getNthKey(object, +key);
            } else if (isMap(object)) {
              var row = +key;
              var type = +path[++i] === 0 ? 'key' : 'value';
              var keyOfRow = getNthKey(object, row);
              switch (type) {
                case 'key':
                  object = keyOfRow;
                  break;
                case 'value':
                  object = object.get(keyOfRow);
                  break;
              }
            } else {
              object = object[key];
            }
          }
          return object;
        };
        var setDeep = function setDeep(object, path, mapper) {
          validatePath(path);
          if (path.length === 0) {
            return mapper(object);
          }
          var parent = object;
          for (var i = 0; i < path.length - 1; i++) {
            var key = path[i];
            if (isArray(parent)) {
              var index = +key;
              parent = parent[index];
            } else if (isPlainObject(parent)) {
              parent = parent[key];
            } else if (isSet(parent)) {
              var row = +key;
              parent = getNthKey(parent, row);
            } else if (isMap(parent)) {
              var isEnd = i === path.length - 2;
              if (isEnd) {
                break;
              }
              var _row = +key;
              var type = +path[++i] === 0 ? 'key' : 'value';
              var keyOfRow = getNthKey(parent, _row);
              switch (type) {
                case 'key':
                  parent = keyOfRow;
                  break;
                case 'value':
                  parent = parent.get(keyOfRow);
                  break;
              }
            }
          }
          var lastKey = path[path.length - 1];
          if (isArray(parent)) {
            parent[+lastKey] = mapper(parent[+lastKey]);
          } else if (isPlainObject(parent)) {
            parent[lastKey] = mapper(parent[lastKey]);
          }
          if (isSet(parent)) {
            var oldValue = getNthKey(parent, +lastKey);
            var newValue = mapper(oldValue);
            if (oldValue !== newValue) {
              parent.delete(oldValue);
              parent.add(newValue);
            }
          }
          if (isMap(parent)) {
            var _row2 = +path[path.length - 2];
            var keyToRow = getNthKey(parent, _row2);
            var _type = +lastKey === 0 ? 'key' : 'value';
            switch (_type) {
              case 'key':
                {
                  var newKey = mapper(keyToRow);
                  parent.set(newKey, parent.get(keyToRow));
                  if (newKey !== keyToRow) {
                    parent.delete(keyToRow);
                  }
                  break;
                }
              case 'value':
                {
                  parent.set(keyToRow, mapper(parent.get(keyToRow)));
                  break;
                }
            }
          }
          return object;
        };
        ; // ./node_modules/superjson/dist/plainer.js

        var enableLegacyPaths = function enableLegacyPaths(version) {
          return version < 1;
        };
        function traverse(tree, walker, version) {
          var origin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
          if (!tree) {
            return;
          }
          var legacyPaths = enableLegacyPaths(version);
          if (!isArray(tree)) {
            forEach(tree, function (subtree, key) {
              return traverse(subtree, walker, version, [].concat(_toConsumableArray(origin), _toConsumableArray(parsePath(key, legacyPaths))));
            });
            return;
          }
          var _tree = _slicedToArray(tree, 2),
            nodeValue = _tree[0],
            children = _tree[1];
          if (children) {
            forEach(children, function (child, key) {
              traverse(child, walker, version, [].concat(_toConsumableArray(origin), _toConsumableArray(parsePath(key, legacyPaths))));
            });
          }
          walker(nodeValue, origin);
        }
        function applyValueAnnotations(plain, annotations, version, superJson) {
          traverse(annotations, function (type, path) {
            plain = setDeep(plain, path, function (v) {
              return untransformValue(v, type, superJson);
            });
          }, version);
          return plain;
        }
        function applyReferentialEqualityAnnotations(plain, annotations, version) {
          var legacyPaths = enableLegacyPaths(version);
          function apply(identicalPaths, path) {
            var object = getDeep(plain, parsePath(path, legacyPaths));
            identicalPaths.map(function (path) {
              return parsePath(path, legacyPaths);
            }).forEach(function (identicalObjectPath) {
              plain = setDeep(plain, identicalObjectPath, function () {
                return object;
              });
            });
          }
          if (isArray(annotations)) {
            var _annotations = _slicedToArray(annotations, 2),
              root = _annotations[0],
              other = _annotations[1];
            root.forEach(function (identicalPath) {
              plain = setDeep(plain, parsePath(identicalPath, legacyPaths), function () {
                return plain;
              });
            });
            if (other) {
              forEach(other, apply);
            }
          } else {
            forEach(annotations, apply);
          }
          return plain;
        }
        var isDeep = function isDeep(object, superJson) {
          return isPlainObject(object) || isArray(object) || isMap(object) || isSet(object) || isError(object) || isInstanceOfRegisteredClass(object, superJson);
        };
        function addIdentity(object, path, identities) {
          var existingSet = identities.get(object);
          if (existingSet) {
            existingSet.push(path);
          } else {
            identities.set(object, [path]);
          }
        }
        function generateReferentialEqualityAnnotations(identitites, dedupe) {
          var result = {};
          var rootEqualityPaths = undefined;
          identitites.forEach(function (paths) {
            if (paths.length <= 1) {
              return;
            }
            // if we're not deduping, all of these objects continue existing.
            // putting the shortest path first makes it easier to parse for humans
            // if we're deduping though, only the first entry will still exist, so we can't do this optimisation.
            if (!dedupe) {
              paths = paths.map(function (path) {
                return path.map(String);
              }).sort(function (a, b) {
                return a.length - b.length;
              });
            }
            var _paths = paths,
              _paths2 = _toArray(_paths),
              representativePath = _paths2[0],
              identicalPaths = _arrayLikeToArray(_paths2).slice(1);
            if (representativePath.length === 0) {
              rootEqualityPaths = identicalPaths.map(stringifyPath);
            } else {
              result[stringifyPath(representativePath)] = identicalPaths.map(stringifyPath);
            }
          });
          if (rootEqualityPaths) {
            if (isEmptyObject(result)) {
              return [rootEqualityPaths];
            } else {
              return [rootEqualityPaths, result];
            }
          } else {
            return isEmptyObject(result) ? undefined : result;
          }
        }
        var _walker = function walker(object, identities, superJson, dedupe) {
          var _transformationResult;
          var path = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
          var objectsInThisPath = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
          var seenObjects = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new Map();
          var primitive = isPrimitive(object);
          if (!primitive) {
            addIdentity(object, path, identities);
            var seen = seenObjects.get(object);
            if (seen) {
              // short-circuit result if we've seen this object before
              return dedupe ? {
                transformedValue: null
              } : seen;
            }
          }
          if (!isDeep(object, superJson)) {
            var _transformed = transformValue(object, superJson);
            var _result = _transformed ? {
              transformedValue: _transformed.value,
              annotations: [_transformed.type]
            } : {
              transformedValue: object
            };
            if (!primitive) {
              seenObjects.set(object, _result);
            }
            return _result;
          }
          if (includes(objectsInThisPath, object)) {
            // prevent circular references
            return {
              transformedValue: null
            };
          }
          var transformationResult = transformValue(object, superJson);
          var transformed = (_transformationResult = transformationResult === null || transformationResult === void 0 ? void 0 : transformationResult.value) !== null && _transformationResult !== void 0 ? _transformationResult : object;
          var transformedValue = isArray(transformed) ? [] : {};
          var innerAnnotations = {};
          forEach(transformed, function (value, index) {
            if (index === '__proto__' || index === 'constructor' || index === 'prototype') {
              throw new Error("Detected property ".concat(index, ". This is a prototype pollution risk, please remove it from your object."));
            }
            var recursiveResult = _walker(value, identities, superJson, dedupe, [].concat(_toConsumableArray(path), [index]), [].concat(_toConsumableArray(objectsInThisPath), [object]), seenObjects);
            transformedValue[index] = recursiveResult.transformedValue;
            if (isArray(recursiveResult.annotations)) {
              innerAnnotations[escapeKey(index)] = recursiveResult.annotations;
            } else if (isPlainObject(recursiveResult.annotations)) {
              forEach(recursiveResult.annotations, function (tree, key) {
                innerAnnotations[escapeKey(index) + '.' + key] = tree;
              });
            }
          });
          var result = isEmptyObject(innerAnnotations) ? {
            transformedValue: transformedValue,
            annotations: !!transformationResult ? [transformationResult.type] : undefined
          } : {
            transformedValue: transformedValue,
            annotations: !!transformationResult ? [transformationResult.type, innerAnnotations] : innerAnnotations
          };
          if (!primitive) {
            seenObjects.set(object, result);
          }
          return result;
        };
        ; // ./node_modules/is-what/dist/getType.js
        /** Returns the object type of the given payload */
        function getType_getType(payload) {
          return Object.prototype.toString.call(payload).slice(8, -1);
        }
        ; // ./node_modules/is-what/dist/isArray.js

        /** Returns whether the payload is an array */
        function isArray_isArray(payload) {
          return getType_getType(payload) === 'Array';
        }
        ; // ./node_modules/is-what/dist/isPlainObject.js

        /**
         * Returns whether the payload is a plain JavaScript object (excluding special classes or objects
         * with other prototypes)
         */
        function isPlainObject_isPlainObject(payload) {
          if (getType_getType(payload) !== 'Object') return false;
          var prototype = Object.getPrototypeOf(payload);
          return !!prototype && prototype.constructor === Object && prototype === Object.prototype;
        }
        ; // ./node_modules/copy-anything/dist/index.js

        function assignProp(carry, key, newVal, originalObject, includeNonenumerable) {
          var propType = {}.propertyIsEnumerable.call(originalObject, key) ? 'enumerable' : 'nonenumerable';
          if (propType === 'enumerable') carry[key] = newVal;
          if (includeNonenumerable && propType === 'nonenumerable') {
            Object.defineProperty(carry, key, {
              value: newVal,
              enumerable: false,
              writable: true,
              configurable: true
            });
          }
        }
        /**
         * Copy (clone) an object and all its props recursively to get rid of any prop referenced of the
         * original object. Arrays are also cloned, however objects inside arrays are still linked.
         *
         * @param target Target can be anything
         * @param [options={}] See type {@link Options} for more details.
         *
         *   - `{ props: ['key1'] }` will only copy the `key1` property. When using this you will need to cast
         *       the return type manually (in order to keep the TS implementation in here simple I didn't
         *       built a complex auto resolved type for those few cases people want to use this option)
         *   - `{ nonenumerable: true }` will copy all non-enumerable properties. Default is `{}`
         *
         * @returns The target with replaced values
         */
        function copy(target) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          if (isArray_isArray(target)) {
            return target.map(function (item) {
              return copy(item, options);
            });
          }
          if (!isPlainObject_isPlainObject(target)) {
            return target;
          }
          var props = Object.getOwnPropertyNames(target);
          var symbols = Object.getOwnPropertySymbols(target);
          return [].concat(_toConsumableArray(props), _toConsumableArray(symbols)).reduce(function (carry, key) {
            // Skip __proto__ properties to prevent prototype pollution
            if (key === '__proto__') return carry;
            if (isArray_isArray(options.props) && !options.props.includes(key)) {
              return carry;
            }
            var val = target[key];
            var newVal = copy(val, options);
            assignProp(carry, key, newVal, target, options.nonenumerable);
            return carry;
          }, {});
        }
        ; // ./node_modules/superjson/dist/index.js
        var _SuperJSON = /*#__PURE__*/function () {
          /**
           * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
           */
          function _SuperJSON() {
            var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              _ref3$dedupe = _ref3.dedupe,
              dedupe = _ref3$dedupe === void 0 ? false : _ref3$dedupe;
            _classCallCheck(this, _SuperJSON);
            this.classRegistry = new ClassRegistry();
            this.symbolRegistry = new Registry(function (s) {
              var _s$description;
              return (_s$description = s.description) !== null && _s$description !== void 0 ? _s$description : '';
            });
            this.customTransformerRegistry = new CustomTransformerRegistry();
            this.allowedErrorProps = [];
            this.dedupe = dedupe;
          }
          return _createClass(_SuperJSON, [{
            key: "serialize",
            value: function serialize(object) {
              var identities = new Map();
              var output = _walker(object, identities, this, this.dedupe);
              var res = {
                json: output.transformedValue
              };
              if (output.annotations) {
                res.meta = _objectSpread(_objectSpread({}, res.meta), {}, {
                  values: output.annotations
                });
              }
              var equalityAnnotations = generateReferentialEqualityAnnotations(identities, this.dedupe);
              if (equalityAnnotations) {
                res.meta = _objectSpread(_objectSpread({}, res.meta), {}, {
                  referentialEqualities: equalityAnnotations
                });
              }
              if (res.meta) res.meta.v = 1;
              return res;
            }
          }, {
            key: "deserialize",
            value: function deserialize(payload, options) {
              var json = payload.json,
                meta = payload.meta;
              var result = options !== null && options !== void 0 && options.inPlace ? json : copy(json);
              if (meta !== null && meta !== void 0 && meta.values) {
                var _meta$v;
                result = applyValueAnnotations(result, meta.values, (_meta$v = meta.v) !== null && _meta$v !== void 0 ? _meta$v : 0, this);
              }
              if (meta !== null && meta !== void 0 && meta.referentialEqualities) {
                var _meta$v2;
                result = applyReferentialEqualityAnnotations(result, meta.referentialEqualities, (_meta$v2 = meta.v) !== null && _meta$v2 !== void 0 ? _meta$v2 : 0);
              }
              return result;
            }
          }, {
            key: "stringify",
            value: function stringify(object) {
              return JSON.stringify(this.serialize(object));
            }
          }, {
            key: "parse",
            value: function parse(string) {
              return this.deserialize(JSON.parse(string), {
                inPlace: true
              });
            }
          }, {
            key: "registerClass",
            value: function registerClass(v, options) {
              this.classRegistry.register(v, options);
            }
          }, {
            key: "registerSymbol",
            value: function registerSymbol(v, identifier) {
              this.symbolRegistry.register(v, identifier);
            }
          }, {
            key: "registerCustom",
            value: function registerCustom(transformer, name) {
              this.customTransformerRegistry.register(_objectSpread({
                name: name
              }, transformer));
            }
          }, {
            key: "allowErrorProps",
            value: function allowErrorProps() {
              var _this$allowedErrorPro;
              (_this$allowedErrorPro = this.allowedErrorProps).push.apply(_this$allowedErrorPro, arguments);
            }
          }]);
        }();
        _SuperJSON.defaultInstance = new _SuperJSON();
        _SuperJSON.serialize = _SuperJSON.defaultInstance.serialize.bind(_SuperJSON.defaultInstance);
        _SuperJSON.deserialize = _SuperJSON.defaultInstance.deserialize.bind(_SuperJSON.defaultInstance);
        _SuperJSON.stringify = _SuperJSON.defaultInstance.stringify.bind(_SuperJSON.defaultInstance);
        _SuperJSON.parse = _SuperJSON.defaultInstance.parse.bind(_SuperJSON.defaultInstance);
        _SuperJSON.registerClass = _SuperJSON.defaultInstance.registerClass.bind(_SuperJSON.defaultInstance);
        _SuperJSON.registerSymbol = _SuperJSON.defaultInstance.registerSymbol.bind(_SuperJSON.defaultInstance);
        _SuperJSON.registerCustom = _SuperJSON.defaultInstance.registerCustom.bind(_SuperJSON.defaultInstance);
        _SuperJSON.allowErrorProps = _SuperJSON.defaultInstance.allowErrorProps.bind(_SuperJSON.defaultInstance);
        /* harmony default export */
        var dist = _SuperJSON;
        var _serialize = _SuperJSON.serialize;
        var _deserialize = _SuperJSON.deserialize;
        var _stringify = _SuperJSON.stringify;
        var _parse = _SuperJSON.parse;
        var _registerClass = _SuperJSON.registerClass;
        var _registerCustom = _SuperJSON.registerCustom;
        var _registerSymbol = _SuperJSON.registerSymbol;
        var _allowErrorProps = _SuperJSON.allowErrorProps;

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
    /******/ /* webpack/runtime/define property getters */
    /******/
    !function () {
      /******/ // define getter functions for harmony exports
      /******/__webpack_require__.d = function (exports, definition) {
        /******/for (var key in definition) {
          /******/if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            /******/Object.defineProperty(exports, key, {
              enumerable: true,
              get: definition[key]
            });
            /******/
          }
          /******/
        }
        /******/
      };
      /******/
    }();
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/
    !function () {
      /******/__webpack_require__.o = function (obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      };
      /******/
    }();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/
    !function () {
      /******/ // define __esModule on exports
      /******/__webpack_require__.r = function (exports) {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/
    }();
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