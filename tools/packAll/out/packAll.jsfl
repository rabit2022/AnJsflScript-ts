(function(){
 "use strict";

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n22 = 0, F = function F() {}; return { s: F, n: function n() { return _n22 >= r.length ? { done: !0 } : { done: !1, value: r[_n22++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function webpackUniversalModuleDefinition(root, factory) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && (typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') exports["packAll"] = factory();else root["packAll"] = factory();
})(void 0, function () {
  return /******/function () {
    // webpackBootstrap
    /******/
    var __webpack_modules__ = {
      /***/603: (/***/function _(module) {
        (function () {
          "use strict";

          var t = {
              d: function d(e, n) {
                for (var i in n) t.o(n, i) && !t.o(e, i) && Object.defineProperty(e, i, {
                  enumerable: !0,
                  get: n[i]
                });
              },
              o: function o(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              },
              r: function r(t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Module"
                }), Object.defineProperty(t, "__esModule", {
                  value: !0
                });
              }
            },
            e = {};
          t.r(e), t.d(e, {
            XMLBuilder: function XMLBuilder() {
              return pt;
            },
            XMLParser: function XMLParser() {
              return st;
            },
            XMLValidator: function XMLValidator() {
              return xt;
            }
          });
          var n = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
            i = new RegExp("^[" + n + "][" + n + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
          function s(t, e) {
            var n = [];
            var i = e.exec(t);
            for (; i;) {
              var _s = [];
              _s.startIndex = e.lastIndex - i[0].length;
              var _r = i.length;
              for (var _t = 0; _t < _r; _t++) _s.push(i[_t]);
              n.push(_s), i = e.exec(t);
            }
            return n;
          }
          var r = function r(t) {
              return !(null == i.exec(t));
            },
            o = {
              allowBooleanAttributes: !1,
              unpairedTags: []
            };
          function a(t, e) {
            e = Object.assign({}, o, e);
            var n = [];
            var i = !1,
              s = !1;
            "\uFEFF" === t[0] && (t = t.substr(1));
            for (var _r2 = 0; _r2 < t.length; _r2++) if ("<" === t[_r2] && "?" === t[_r2 + 1]) {
              if (_r2 += 2, _r2 = u(t, _r2), _r2.err) return _r2;
            } else {
              if ("<" !== t[_r2]) {
                if (l(t[_r2])) continue;
                return m("InvalidChar", "char '" + t[_r2] + "' is not expected.", N(t, _r2));
              }
              {
                var _o = _r2;
                if (_r2++, "!" === t[_r2]) {
                  _r2 = h(t, _r2);
                  continue;
                }
                {
                  var _a = !1;
                  "/" === t[_r2] && (_a = !0, _r2++);
                  var _d = "";
                  for (; _r2 < t.length && ">" !== t[_r2] && " " !== t[_r2] && "\t" !== t[_r2] && "\n" !== t[_r2] && "\r" !== t[_r2]; _r2++) _d += t[_r2];
                  if (_d = _d.trim(), "/" === _d[_d.length - 1] && (_d = _d.substring(0, _d.length - 1), _r2--), !b(_d)) {
                    var _e = void 0;
                    return _e = 0 === _d.trim().length ? "Invalid space after '<'." : "Tag '" + _d + "' is an invalid name.", m("InvalidTag", _e, N(t, _r2));
                  }
                  var _p = f(t, _r2);
                  if (!1 === _p) return m("InvalidAttr", "Attributes for '" + _d + "' have open quote.", N(t, _r2));
                  var _c = _p.value;
                  if (_r2 = _p.index, "/" === _c[_c.length - 1]) {
                    var _n = _r2 - _c.length;
                    _c = _c.substring(0, _c.length - 1);
                    var _s2 = g(_c, e);
                    if (!0 !== _s2) return m(_s2.err.code, _s2.err.msg, N(t, _n + _s2.err.line));
                    i = !0;
                  } else if (_a) {
                    if (!_p.tagClosed) return m("InvalidTag", "Closing tag '" + _d + "' doesn't have proper closing.", N(t, _r2));
                    if (_c.trim().length > 0) return m("InvalidTag", "Closing tag '" + _d + "' can't have attributes or invalid starting.", N(t, _o));
                    if (0 === n.length) return m("InvalidTag", "Closing tag '" + _d + "' has not been opened.", N(t, _o));
                    {
                      var _e2 = n.pop();
                      if (_d !== _e2.tagName) {
                        var _n2 = N(t, _e2.tagStartPos);
                        return m("InvalidTag", "Expected closing tag '" + _e2.tagName + "' (opened in line " + _n2.line + ", col " + _n2.col + ") instead of closing tag '" + _d + "'.", N(t, _o));
                      }
                      0 == n.length && (s = !0);
                    }
                  } else {
                    var _a2 = g(_c, e);
                    if (!0 !== _a2) return m(_a2.err.code, _a2.err.msg, N(t, _r2 - _c.length + _a2.err.line));
                    if (!0 === s) return m("InvalidXml", "Multiple possible root nodes found.", N(t, _r2));
                    -1 !== e.unpairedTags.indexOf(_d) || n.push({
                      tagName: _d,
                      tagStartPos: _o
                    }), i = !0;
                  }
                  for (_r2++; _r2 < t.length; _r2++) if ("<" === t[_r2]) {
                    if ("!" === t[_r2 + 1]) {
                      _r2++, _r2 = h(t, _r2);
                      continue;
                    }
                    if ("?" !== t[_r2 + 1]) break;
                    if (_r2 = u(t, ++_r2), _r2.err) return _r2;
                  } else if ("&" === t[_r2]) {
                    var _e3 = x(t, _r2);
                    if (-1 == _e3) return m("InvalidChar", "char '&' is not expected.", N(t, _r2));
                    _r2 = _e3;
                  } else if (!0 === s && !l(t[_r2])) return m("InvalidXml", "Extra text at the end", N(t, _r2));
                  "<" === t[_r2] && _r2--;
                }
              }
            }
            return i ? 1 == n.length ? m("InvalidTag", "Unclosed tag '" + n[0].tagName + "'.", N(t, n[0].tagStartPos)) : !(n.length > 0) || m("InvalidXml", "Invalid '" + JSON.stringify(n.map(function (t) {
              return t.tagName;
            }), null, 4).replace(/\r?\n/g, "") + "' found.", {
              line: 1,
              col: 1
            }) : m("InvalidXml", "Start tag expected.", 1);
          }
          function l(t) {
            return " " === t || "\t" === t || "\n" === t || "\r" === t;
          }
          function u(t, e) {
            var n = e;
            for (; e < t.length; e++) if ("?" == t[e] || " " == t[e]) {
              var _i = t.substr(n, e - n);
              if (e > 5 && "xml" === _i) return m("InvalidXml", "XML declaration allowed only at the start of the document.", N(t, e));
              if ("?" == t[e] && ">" == t[e + 1]) {
                e++;
                break;
              }
              continue;
            }
            return e;
          }
          function h(t, e) {
            if (t.length > e + 5 && "-" === t[e + 1] && "-" === t[e + 2]) {
              for (e += 3; e < t.length; e++) if ("-" === t[e] && "-" === t[e + 1] && ">" === t[e + 2]) {
                e += 2;
                break;
              }
            } else if (t.length > e + 8 && "D" === t[e + 1] && "O" === t[e + 2] && "C" === t[e + 3] && "T" === t[e + 4] && "Y" === t[e + 5] && "P" === t[e + 6] && "E" === t[e + 7]) {
              var _n3 = 1;
              for (e += 8; e < t.length; e++) if ("<" === t[e]) _n3++;else if (">" === t[e] && (_n3--, 0 === _n3)) break;
            } else if (t.length > e + 9 && "[" === t[e + 1] && "C" === t[e + 2] && "D" === t[e + 3] && "A" === t[e + 4] && "T" === t[e + 5] && "A" === t[e + 6] && "[" === t[e + 7]) for (e += 8; e < t.length; e++) if ("]" === t[e] && "]" === t[e + 1] && ">" === t[e + 2]) {
              e += 2;
              break;
            }
            return e;
          }
          var d = '"',
            p = "'";
          function f(t, e) {
            var n = "",
              i = "",
              s = !1;
            for (; e < t.length; e++) {
              if (t[e] === d || t[e] === p) "" === i ? i = t[e] : i !== t[e] || (i = "");else if (">" === t[e] && "" === i) {
                s = !0;
                break;
              }
              n += t[e];
            }
            return "" === i && {
              value: n,
              index: e,
              tagClosed: s
            };
          }
          var c = new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?", "g");
          function g(t, e) {
            var n = s(t, c),
              i = {};
            for (var _t2 = 0; _t2 < n.length; _t2++) {
              if (0 === n[_t2][1].length) return m("InvalidAttr", "Attribute '" + n[_t2][2] + "' has no space in starting.", y(n[_t2]));
              if (void 0 !== n[_t2][3] && void 0 === n[_t2][4]) return m("InvalidAttr", "Attribute '" + n[_t2][2] + "' is without value.", y(n[_t2]));
              if (void 0 === n[_t2][3] && !e.allowBooleanAttributes) return m("InvalidAttr", "boolean attribute '" + n[_t2][2] + "' is not allowed.", y(n[_t2]));
              var _s3 = n[_t2][2];
              if (!E(_s3)) return m("InvalidAttr", "Attribute '" + _s3 + "' is an invalid name.", y(n[_t2]));
              if (i.hasOwnProperty(_s3)) return m("InvalidAttr", "Attribute '" + _s3 + "' is repeated.", y(n[_t2]));
              i[_s3] = 1;
            }
            return !0;
          }
          function x(t, e) {
            if (";" === t[++e]) return -1;
            if ("#" === t[e]) return function (t, e) {
              var n = /\d/;
              for ("x" === t[e] && (e++, n = /[\da-fA-F]/); e < t.length; e++) {
                if (";" === t[e]) return e;
                if (!t[e].match(n)) break;
              }
              return -1;
            }(t, ++e);
            var n = 0;
            for (; e < t.length; e++, n++) if (!(t[e].match(/\w/) && n < 20)) {
              if (";" === t[e]) break;
              return -1;
            }
            return e;
          }
          function m(t, e, n) {
            return {
              err: {
                code: t,
                msg: e,
                line: n.line || n,
                col: n.col
              }
            };
          }
          function E(t) {
            return r(t);
          }
          function b(t) {
            return r(t);
          }
          function N(t, e) {
            var n = t.substring(0, e).split(/\r?\n/);
            return {
              line: n.length,
              col: n[n.length - 1].length + 1
            };
          }
          function y(t) {
            return t.startIndex + t[1].length;
          }
          var T = {
            preserveOrder: !1,
            attributeNamePrefix: "@_",
            attributesGroupName: !1,
            textNodeName: "#text",
            ignoreAttributes: !0,
            removeNSPrefix: !1,
            allowBooleanAttributes: !1,
            parseTagValue: !0,
            parseAttributeValue: !1,
            trimValues: !0,
            cdataPropName: !1,
            numberParseOptions: {
              hex: !0,
              leadingZeros: !0,
              eNotation: !0
            },
            tagValueProcessor: function tagValueProcessor(t, e) {
              return e;
            },
            attributeValueProcessor: function attributeValueProcessor(t, e) {
              return e;
            },
            stopNodes: [],
            alwaysCreateTextNode: !1,
            isArray: function isArray() {
              return !1;
            },
            commentPropName: !1,
            unpairedTags: [],
            processEntities: !0,
            htmlEntities: !1,
            ignoreDeclaration: !1,
            ignorePiTags: !1,
            transformTagName: !1,
            transformAttributeName: !1,
            updateTag: function updateTag(t, e, n) {
              return t;
            },
            captureMetaData: !1
          };
          function w(t) {
            var _t$maxEntitySize, _t$maxExpansionDepth, _t$maxTotalExpansions, _t$maxExpandedLength, _t$allowedTags, _t$tagFilter;
            return "boolean" == typeof t ? {
              enabled: t,
              maxEntitySize: 1e4,
              maxExpansionDepth: 10,
              maxTotalExpansions: 1e3,
              maxExpandedLength: 1e5,
              allowedTags: null,
              tagFilter: null
            } : "object" == _typeof(t) && null !== t ? {
              enabled: !1 !== t.enabled,
              maxEntitySize: (_t$maxEntitySize = t.maxEntitySize) !== null && _t$maxEntitySize !== void 0 ? _t$maxEntitySize : 1e4,
              maxExpansionDepth: (_t$maxExpansionDepth = t.maxExpansionDepth) !== null && _t$maxExpansionDepth !== void 0 ? _t$maxExpansionDepth : 10,
              maxTotalExpansions: (_t$maxTotalExpansions = t.maxTotalExpansions) !== null && _t$maxTotalExpansions !== void 0 ? _t$maxTotalExpansions : 1e3,
              maxExpandedLength: (_t$maxExpandedLength = t.maxExpandedLength) !== null && _t$maxExpandedLength !== void 0 ? _t$maxExpandedLength : 1e5,
              allowedTags: (_t$allowedTags = t.allowedTags) !== null && _t$allowedTags !== void 0 ? _t$allowedTags : null,
              tagFilter: (_t$tagFilter = t.tagFilter) !== null && _t$tagFilter !== void 0 ? _t$tagFilter : null
            } : w(!0);
          }
          var v = function v(t) {
            var e = Object.assign({}, T, t);
            return e.processEntities = w(e.processEntities), e;
          };
          var I;
          I = "function" != typeof Symbol ? "@@xmlMetadata" : Symbol("XML Node Metadata");
          var O = /*#__PURE__*/function () {
            function O(t) {
              _classCallCheck(this, O);
              this.tagname = t, this.child = [], this[":@"] = {};
            }
            return _createClass(O, [{
              key: "add",
              value: function add(t, e) {
                "__proto__" === t && (t = "#__proto__"), this.child.push(_defineProperty({}, t, e));
              }
            }, {
              key: "addChild",
              value: function addChild(t, e) {
                "__proto__" === t.tagname && (t.tagname = "#__proto__"), t[":@"] && Object.keys(t[":@"]).length > 0 ? this.child.push(_defineProperty(_defineProperty({}, t.tagname, t.child), ":@", t[":@"])) : this.child.push(_defineProperty({}, t.tagname, t.child)), void 0 !== e && (this.child[this.child.length - 1][I] = {
                  startIndex: e
                });
              }
            }], [{
              key: "getMetaDataSymbol",
              value: function getMetaDataSymbol() {
                return I;
              }
            }]);
          }();
          var P = /*#__PURE__*/function () {
            function P(t) {
              _classCallCheck(this, P);
              this.suppressValidationErr = !t, this.options = t;
            }
            return _createClass(P, [{
              key: "readDocType",
              value: function readDocType(t, e) {
                var n = {};
                if ("O" !== t[e + 3] || "C" !== t[e + 4] || "T" !== t[e + 5] || "Y" !== t[e + 6] || "P" !== t[e + 7] || "E" !== t[e + 8]) throw new Error("Invalid Tag instead of DOCTYPE");
                {
                  e += 9;
                  var _i2 = 1,
                    _s4 = !1,
                    _r3 = !1,
                    _o2 = "";
                  for (; e < t.length; e++) if ("<" !== t[e] || _r3) {
                    if (">" === t[e]) {
                      if (_r3 ? "-" === t[e - 1] && "-" === t[e - 2] && (_r3 = !1, _i2--) : _i2--, 0 === _i2) break;
                    } else "[" === t[e] ? _s4 = !0 : _o2 += t[e];
                  } else {
                    if (_s4 && S(t, "!ENTITY", e)) {
                      var _this$readEntityExp, _this$readEntityExp2;
                      var _i3 = void 0,
                        _s5 = void 0;
                      if (e += 7, _this$readEntityExp = this.readEntityExp(t, e + 1, this.suppressValidationErr), _this$readEntityExp2 = _slicedToArray(_this$readEntityExp, 3), _i3 = _this$readEntityExp2[0], _s5 = _this$readEntityExp2[1], e = _this$readEntityExp2[2], -1 === _s5.indexOf("&")) {
                        var _t3 = _i3.replace(/[.\-+*:]/g, "\\.");
                        n[_i3] = {
                          regx: RegExp("&".concat(_t3, ";"), "g"),
                          val: _s5
                        };
                      }
                    } else if (_s4 && S(t, "!ELEMENT", e)) {
                      e += 8;
                      var _this$readElementExp = this.readElementExp(t, e + 1),
                        _n4 = _this$readElementExp.index;
                      e = _n4;
                    } else if (_s4 && S(t, "!ATTLIST", e)) e += 8;else if (_s4 && S(t, "!NOTATION", e)) {
                      e += 9;
                      var _this$readNotationExp = this.readNotationExp(t, e + 1, this.suppressValidationErr),
                        _n5 = _this$readNotationExp.index;
                      e = _n5;
                    } else {
                      if (!S(t, "!--", e)) throw new Error("Invalid DOCTYPE");
                      _r3 = !0;
                    }
                    _i2++, _o2 = "";
                  }
                  if (0 !== _i2) throw new Error("Unclosed DOCTYPE");
                }
                return {
                  entities: n,
                  i: e
                };
              }
            }, {
              key: "readEntityExp",
              value: function readEntityExp(t, e) {
                var _this$readIdentifierV, _this$readIdentifierV2;
                e = A(t, e);
                var n = "";
                for (; e < t.length && !/\s/.test(t[e]) && '"' !== t[e] && "'" !== t[e];) n += t[e], e++;
                if (C(n), e = A(t, e), !this.suppressValidationErr) {
                  if ("SYSTEM" === t.substring(e, e + 6).toUpperCase()) throw new Error("External entities are not supported");
                  if ("%" === t[e]) throw new Error("Parameter entities are not supported");
                }
                var i = "";
                if (_this$readIdentifierV = this.readIdentifierVal(t, e, "entity"), _this$readIdentifierV2 = _slicedToArray(_this$readIdentifierV, 2), e = _this$readIdentifierV2[0], i = _this$readIdentifierV2[1], !1 !== this.options.enabled && this.options.maxEntitySize && i.length > this.options.maxEntitySize) throw new Error("Entity \"".concat(n, "\" size (").concat(i.length, ") exceeds maximum allowed size (").concat(this.options.maxEntitySize, ")"));
                return [n, i, --e];
              }
            }, {
              key: "readNotationExp",
              value: function readNotationExp(t, e) {
                var _this$readIdentifierV3, _this$readIdentifierV4, _this$readIdentifierV5, _this$readIdentifierV6, _this$readIdentifierV7, _this$readIdentifierV8;
                e = A(t, e);
                var n = "";
                for (; e < t.length && !/\s/.test(t[e]);) n += t[e], e++;
                !this.suppressValidationErr && C(n), e = A(t, e);
                var i = t.substring(e, e + 6).toUpperCase();
                if (!this.suppressValidationErr && "SYSTEM" !== i && "PUBLIC" !== i) throw new Error("Expected SYSTEM or PUBLIC, found \"".concat(i, "\""));
                e += i.length, e = A(t, e);
                var s = null,
                  r = null;
                if ("PUBLIC" === i) _this$readIdentifierV3 = this.readIdentifierVal(t, e, "publicIdentifier"), _this$readIdentifierV4 = _slicedToArray(_this$readIdentifierV3, 2), e = _this$readIdentifierV4[0], s = _this$readIdentifierV4[1], '"' !== t[e = A(t, e)] && "'" !== t[e] || (_this$readIdentifierV5 = this.readIdentifierVal(t, e, "systemIdentifier"), _this$readIdentifierV6 = _slicedToArray(_this$readIdentifierV5, 2), e = _this$readIdentifierV6[0], r = _this$readIdentifierV6[1], _this$readIdentifierV5);else if ("SYSTEM" === i && (_this$readIdentifierV7 = this.readIdentifierVal(t, e, "systemIdentifier"), _this$readIdentifierV8 = _slicedToArray(_this$readIdentifierV7, 2), e = _this$readIdentifierV8[0], r = _this$readIdentifierV8[1], !this.suppressValidationErr && !r)) throw new Error("Missing mandatory system identifier for SYSTEM notation");
                return {
                  notationName: n,
                  publicIdentifier: s,
                  systemIdentifier: r,
                  index: --e
                };
              }
            }, {
              key: "readIdentifierVal",
              value: function readIdentifierVal(t, e, n) {
                var i = "";
                var s = t[e];
                if ('"' !== s && "'" !== s) throw new Error("Expected quoted string, found \"".concat(s, "\""));
                for (e++; e < t.length && t[e] !== s;) i += t[e], e++;
                if (t[e] !== s) throw new Error("Unterminated ".concat(n, " value"));
                return [++e, i];
              }
            }, {
              key: "readElementExp",
              value: function readElementExp(t, e) {
                e = A(t, e);
                var n = "";
                for (; e < t.length && !/\s/.test(t[e]);) n += t[e], e++;
                if (!this.suppressValidationErr && !r(n)) throw new Error("Invalid element name: \"".concat(n, "\""));
                var i = "";
                if ("E" === t[e = A(t, e)] && S(t, "MPTY", e)) e += 4;else if ("A" === t[e] && S(t, "NY", e)) e += 2;else if ("(" === t[e]) {
                  for (e++; e < t.length && ")" !== t[e];) i += t[e], e++;
                  if (")" !== t[e]) throw new Error("Unterminated content model");
                } else if (!this.suppressValidationErr) throw new Error("Invalid Element Expression, found \"".concat(t[e], "\""));
                return {
                  elementName: n,
                  contentModel: i.trim(),
                  index: e
                };
              }
            }, {
              key: "readAttlistExp",
              value: function readAttlistExp(t, e) {
                var _this$readIdentifierV9, _this$readIdentifierV0;
                e = A(t, e);
                var n = "";
                for (; e < t.length && !/\s/.test(t[e]);) n += t[e], e++;
                C(n), e = A(t, e);
                var i = "";
                for (; e < t.length && !/\s/.test(t[e]);) i += t[e], e++;
                if (!C(i)) throw new Error("Invalid attribute name: \"".concat(i, "\""));
                e = A(t, e);
                var s = "";
                if ("NOTATION" === t.substring(e, e + 8).toUpperCase()) {
                  if (s = "NOTATION", "(" !== t[e = A(t, e += 8)]) throw new Error("Expected '(', found \"".concat(t[e], "\""));
                  e++;
                  var _n6 = [];
                  for (; e < t.length && ")" !== t[e];) {
                    var _i4 = "";
                    for (; e < t.length && "|" !== t[e] && ")" !== t[e];) _i4 += t[e], e++;
                    if (_i4 = _i4.trim(), !C(_i4)) throw new Error("Invalid notation name: \"".concat(_i4, "\""));
                    _n6.push(_i4), "|" === t[e] && (e++, e = A(t, e));
                  }
                  if (")" !== t[e]) throw new Error("Unterminated list of notations");
                  e++, s += " (" + _n6.join("|") + ")";
                } else {
                  for (; e < t.length && !/\s/.test(t[e]);) s += t[e], e++;
                  var _n7 = ["CDATA", "ID", "IDREF", "IDREFS", "ENTITY", "ENTITIES", "NMTOKEN", "NMTOKENS"];
                  if (!this.suppressValidationErr && !_n7.includes(s.toUpperCase())) throw new Error("Invalid attribute type: \"".concat(s, "\""));
                }
                e = A(t, e);
                var r = "";
                return "#REQUIRED" === t.substring(e, e + 8).toUpperCase() ? (r = "#REQUIRED", e += 8) : "#IMPLIED" === t.substring(e, e + 7).toUpperCase() ? (r = "#IMPLIED", e += 7) : (_this$readIdentifierV9 = this.readIdentifierVal(t, e, "ATTLIST"), _this$readIdentifierV0 = _slicedToArray(_this$readIdentifierV9, 2), e = _this$readIdentifierV0[0], r = _this$readIdentifierV0[1], _this$readIdentifierV9), {
                  elementName: n,
                  attributeName: i,
                  attributeType: s,
                  defaultValue: r,
                  index: e
                };
              }
            }]);
          }();
          var A = function A(t, e) {
            for (; e < t.length && /\s/.test(t[e]);) e++;
            return e;
          };
          function S(t, e, n) {
            for (var _i5 = 0; _i5 < e.length; _i5++) if (e[_i5] !== t[n + _i5 + 1]) return !1;
            return !0;
          }
          function C(t) {
            if (r(t)) return t;
            throw new Error("Invalid entity name ".concat(t));
          }
          var $ = /^[-+]?0x[a-fA-F0-9]+$/,
            V = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/,
            D = {
              hex: !0,
              leadingZeros: !0,
              decimalPoint: ".",
              eNotation: !0
            };
          var L = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
          function F(t) {
            return "function" == typeof t ? t : Array.isArray(t) ? function (e) {
              var _iterator = _createForOfIteratorHelper(t),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var _n8 = _step.value;
                  if ("string" == typeof _n8 && e === _n8) return !0;
                  if (_n8 instanceof RegExp && _n8.test(e)) return !0;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            } : function () {
              return !1;
            };
          }
          var j = /*#__PURE__*/_createClass(function j(t) {
            _classCallCheck(this, j);
            if (this.options = t, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
              apos: {
                regex: /&(apos|#39|#x27);/g,
                val: "'"
              },
              gt: {
                regex: /&(gt|#62|#x3E);/g,
                val: ">"
              },
              lt: {
                regex: /&(lt|#60|#x3C);/g,
                val: "<"
              },
              quot: {
                regex: /&(quot|#34|#x22);/g,
                val: '"'
              }
            }, this.ampEntity = {
              regex: /&(amp|#38|#x26);/g,
              val: "&"
            }, this.htmlEntities = {
              space: {
                regex: /&(nbsp|#160);/g,
                val: " "
              },
              cent: {
                regex: /&(cent|#162);/g,
                val: "¢"
              },
              pound: {
                regex: /&(pound|#163);/g,
                val: "£"
              },
              yen: {
                regex: /&(yen|#165);/g,
                val: "¥"
              },
              euro: {
                regex: /&(euro|#8364);/g,
                val: "€"
              },
              copyright: {
                regex: /&(copy|#169);/g,
                val: "©"
              },
              reg: {
                regex: /&(reg|#174);/g,
                val: "®"
              },
              inr: {
                regex: /&(inr|#8377);/g,
                val: "₹"
              },
              num_dec: {
                regex: /&#([0-9]{1,7});/g,
                val: function val(t, e) {
                  return Q(e, 10, "&#");
                }
              },
              num_hex: {
                regex: /&#x([0-9a-fA-F]{1,6});/g,
                val: function val(t, e) {
                  return Q(e, 16, "&#x");
                }
              }
            }, this.addExternalEntities = M, this.parseXml = R, this.parseTextData = _, this.resolveNameSpace = k, this.buildAttributesMap = B, this.isItStopNode = z, this.replaceEntitiesValue = G, this.readStopNodeData = Z, this.saveTextToParentTag = X, this.addChild = Y, this.ignoreAttributesFn = F(this.options.ignoreAttributes), this.entityExpansionCount = 0, this.currentExpandedLength = 0, this.options.stopNodes && this.options.stopNodes.length > 0) {
              this.stopNodesExact = new Set(), this.stopNodesWildcard = new Set();
              for (var _t4 = 0; _t4 < this.options.stopNodes.length; _t4++) {
                var _e4 = this.options.stopNodes[_t4];
                "string" == typeof _e4 && (_e4.startsWith("*.") ? this.stopNodesWildcard.add(_e4.substring(2)) : this.stopNodesExact.add(_e4));
              }
            }
          });
          function M(t) {
            var e = Object.keys(t);
            for (var _n9 = 0; _n9 < e.length; _n9++) {
              var _i6 = e[_n9],
                _s6 = _i6.replace(/[.\-+*:]/g, "\\.");
              this.lastEntities[_i6] = {
                regex: new RegExp("&" + _s6 + ";", "g"),
                val: t[_i6]
              };
            }
          }
          function _(t, e, n, i, s, r, o) {
            if (void 0 !== t && (this.options.trimValues && !i && (t = t.trim()), t.length > 0)) {
              o || (t = this.replaceEntitiesValue(t, e, n));
              var _i7 = this.options.tagValueProcessor(e, t, n, s, r);
              return null == _i7 ? t : _typeof(_i7) != _typeof(t) || _i7 !== t ? _i7 : this.options.trimValues || t.trim() === t ? K(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
            }
          }
          function k(t) {
            if (this.options.removeNSPrefix) {
              var _e5 = t.split(":"),
                _n0 = "/" === t.charAt(0) ? "/" : "";
              if ("xmlns" === _e5[0]) return "";
              2 === _e5.length && (t = _n0 + _e5[1]);
            }
            return t;
          }
          var U = new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?", "gm");
          function B(t, e, n) {
            if (!0 !== this.options.ignoreAttributes && "string" == typeof t) {
              var _i8 = s(t, U),
                _r4 = _i8.length,
                _o3 = {};
              for (var _t5 = 0; _t5 < _r4; _t5++) {
                var _s7 = this.resolveNameSpace(_i8[_t5][1]);
                if (this.ignoreAttributesFn(_s7, e)) continue;
                var _r5 = _i8[_t5][4],
                  _a3 = this.options.attributeNamePrefix + _s7;
                if (_s7.length) if (this.options.transformAttributeName && (_a3 = this.options.transformAttributeName(_a3)), "__proto__" === _a3 && (_a3 = "#__proto__"), void 0 !== _r5) {
                  this.options.trimValues && (_r5 = _r5.trim()), _r5 = this.replaceEntitiesValue(_r5, n, e);
                  var _t6 = this.options.attributeValueProcessor(_s7, _r5, e);
                  _o3[_a3] = null == _t6 ? _r5 : _typeof(_t6) != _typeof(_r5) || _t6 !== _r5 ? _t6 : K(_r5, this.options.parseAttributeValue, this.options.numberParseOptions);
                } else this.options.allowBooleanAttributes && (_o3[_a3] = !0);
              }
              if (!Object.keys(_o3).length) return;
              if (this.options.attributesGroupName) {
                var _t7 = {};
                return _t7[this.options.attributesGroupName] = _o3, _t7;
              }
              return _o3;
            }
          }
          var R = function R(t) {
            t = t.replace(/\r\n?/g, "\n");
            var e = new O("!xml");
            var n = e,
              i = "",
              s = "";
            this.entityExpansionCount = 0, this.currentExpandedLength = 0;
            var r = new P(this.options.processEntities);
            for (var _o4 = 0; _o4 < t.length; _o4++) if ("<" === t[_o4]) {
              if ("/" === t[_o4 + 1]) {
                var _e6 = W(t, ">", _o4, "Closing Tag is not closed.");
                var _r6 = t.substring(_o4 + 2, _e6).trim();
                if (this.options.removeNSPrefix) {
                  var _t8 = _r6.indexOf(":");
                  -1 !== _t8 && (_r6 = _r6.substr(_t8 + 1));
                }
                this.options.transformTagName && (_r6 = this.options.transformTagName(_r6)), n && (i = this.saveTextToParentTag(i, n, s));
                var _a4 = s.substring(s.lastIndexOf(".") + 1);
                if (_r6 && -1 !== this.options.unpairedTags.indexOf(_r6)) throw new Error("Unpaired tag can not be used as closing tag: </".concat(_r6, ">"));
                var _l = 0;
                _a4 && -1 !== this.options.unpairedTags.indexOf(_a4) ? (_l = s.lastIndexOf(".", s.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : _l = s.lastIndexOf("."), s = s.substring(0, _l), n = this.tagsNodeStack.pop(), i = "", _o4 = _e6;
              } else if ("?" === t[_o4 + 1]) {
                var _e7 = q(t, _o4, !1, "?>");
                if (!_e7) throw new Error("Pi Tag is not closed.");
                if (i = this.saveTextToParentTag(i, n, s), this.options.ignoreDeclaration && "?xml" === _e7.tagName || this.options.ignorePiTags) ;else {
                  var _t9 = new O(_e7.tagName);
                  _t9.add(this.options.textNodeName, ""), _e7.tagName !== _e7.tagExp && _e7.attrExpPresent && (_t9[":@"] = this.buildAttributesMap(_e7.tagExp, s, _e7.tagName)), this.addChild(n, _t9, s, _o4);
                }
                _o4 = _e7.closeIndex + 1;
              } else if ("!--" === t.substr(_o4 + 1, 3)) {
                var _e8 = W(t, "--\x3e", _o4 + 4, "Comment is not closed.");
                if (this.options.commentPropName) {
                  var _r7 = t.substring(_o4 + 4, _e8 - 2);
                  i = this.saveTextToParentTag(i, n, s), n.add(this.options.commentPropName, [_defineProperty({}, this.options.textNodeName, _r7)]);
                }
                _o4 = _e8;
              } else if ("!D" === t.substr(_o4 + 1, 2)) {
                var _e9 = r.readDocType(t, _o4);
                this.docTypeEntities = _e9.entities, _o4 = _e9.i;
              } else if ("![" === t.substr(_o4 + 1, 2)) {
                var _e0 = W(t, "]]>", _o4, "CDATA is not closed.") - 2,
                  _r8 = t.substring(_o4 + 9, _e0);
                i = this.saveTextToParentTag(i, n, s);
                var _a5 = this.parseTextData(_r8, n.tagname, s, !0, !1, !0, !0);
                null == _a5 && (_a5 = ""), this.options.cdataPropName ? n.add(this.options.cdataPropName, [_defineProperty({}, this.options.textNodeName, _r8)]) : n.add(this.options.textNodeName, _a5), _o4 = _e0 + 2;
              } else {
                var _r9 = q(t, _o4, this.options.removeNSPrefix),
                  _a6 = _r9.tagName;
                var _l2 = _r9.rawTagName;
                var _u = _r9.tagExp,
                  _h = _r9.attrExpPresent,
                  _d2 = _r9.closeIndex;
                if (this.options.transformTagName) {
                  var _t0 = this.options.transformTagName(_a6);
                  _u === _a6 && (_u = _t0), _a6 = _t0;
                }
                n && i && "!xml" !== n.tagname && (i = this.saveTextToParentTag(i, n, s, !1));
                var _p2 = n;
                _p2 && -1 !== this.options.unpairedTags.indexOf(_p2.tagname) && (n = this.tagsNodeStack.pop(), s = s.substring(0, s.lastIndexOf("."))), _a6 !== e.tagname && (s += s ? "." + _a6 : _a6);
                var _f = _o4;
                if (this.isItStopNode(this.stopNodesExact, this.stopNodesWildcard, s, _a6)) {
                  var _e1 = "";
                  if (_u.length > 0 && _u.lastIndexOf("/") === _u.length - 1) "/" === _a6[_a6.length - 1] ? (_a6 = _a6.substr(0, _a6.length - 1), s = s.substr(0, s.length - 1), _u = _a6) : _u = _u.substr(0, _u.length - 1), _o4 = _r9.closeIndex;else if (-1 !== this.options.unpairedTags.indexOf(_a6)) _o4 = _r9.closeIndex;else {
                    var _n1 = this.readStopNodeData(t, _l2, _d2 + 1);
                    if (!_n1) throw new Error("Unexpected end of ".concat(_l2));
                    _o4 = _n1.i, _e1 = _n1.tagContent;
                  }
                  var _i9 = new O(_a6);
                  _a6 !== _u && _h && (_i9[":@"] = this.buildAttributesMap(_u, s, _a6)), _e1 && (_e1 = this.parseTextData(_e1, _a6, s, !0, _h, !0, !0)), s = s.substr(0, s.lastIndexOf(".")), _i9.add(this.options.textNodeName, _e1), this.addChild(n, _i9, s, _f);
                } else {
                  if (_u.length > 0 && _u.lastIndexOf("/") === _u.length - 1) {
                    if ("/" === _a6[_a6.length - 1] ? (_a6 = _a6.substr(0, _a6.length - 1), s = s.substr(0, s.length - 1), _u = _a6) : _u = _u.substr(0, _u.length - 1), this.options.transformTagName) {
                      var _t1 = this.options.transformTagName(_a6);
                      _u === _a6 && (_u = _t1), _a6 = _t1;
                    }
                    var _t10 = new O(_a6);
                    _a6 !== _u && _h && (_t10[":@"] = this.buildAttributesMap(_u, s, _a6)), this.addChild(n, _t10, s, _f), s = s.substr(0, s.lastIndexOf("."));
                  } else {
                    var _t11 = new O(_a6);
                    this.tagsNodeStack.push(n), _a6 !== _u && _h && (_t11[":@"] = this.buildAttributesMap(_u, s, _a6)), this.addChild(n, _t11, s, _f), n = _t11;
                  }
                  i = "", _o4 = _d2;
                }
              }
            } else i += t[_o4];
            return e.child;
          };
          function Y(t, e, n, i) {
            this.options.captureMetaData || (i = void 0);
            var s = this.options.updateTag(e.tagname, n, e[":@"]);
            !1 === s || ("string" == typeof s ? (e.tagname = s, t.addChild(e, i)) : t.addChild(e, i));
          }
          var G = function G(t, e, n) {
            if (-1 === t.indexOf("&")) return t;
            var i = this.options.processEntities;
            if (!i.enabled) return t;
            if (i.allowedTags && !i.allowedTags.includes(e)) return t;
            if (i.tagFilter && !i.tagFilter(e, n)) return t;
            for (var _e10 in this.docTypeEntities) {
              var _n10 = this.docTypeEntities[_e10],
                _s8 = t.match(_n10.regx);
              if (_s8) {
                if (this.entityExpansionCount += _s8.length, i.maxTotalExpansions && this.entityExpansionCount > i.maxTotalExpansions) throw new Error("Entity expansion limit exceeded: ".concat(this.entityExpansionCount, " > ").concat(i.maxTotalExpansions));
                var _e11 = t.length;
                if (t = t.replace(_n10.regx, _n10.val), i.maxExpandedLength && (this.currentExpandedLength += t.length - _e11, this.currentExpandedLength > i.maxExpandedLength)) throw new Error("Total expanded content size exceeded: ".concat(this.currentExpandedLength, " > ").concat(i.maxExpandedLength));
              }
            }
            if (-1 === t.indexOf("&")) return t;
            for (var _e12 in this.lastEntities) {
              var _n11 = this.lastEntities[_e12];
              t = t.replace(_n11.regex, _n11.val);
            }
            if (-1 === t.indexOf("&")) return t;
            if (this.options.htmlEntities) for (var _e13 in this.htmlEntities) {
              var _n12 = this.htmlEntities[_e13];
              t = t.replace(_n12.regex, _n12.val);
            }
            return t.replace(this.ampEntity.regex, this.ampEntity.val);
          };
          function X(t, e, n, i) {
            return t && (void 0 === i && (i = 0 === e.child.length), void 0 !== (t = this.parseTextData(t, e.tagname, n, !1, !!e[":@"] && 0 !== Object.keys(e[":@"]).length, i)) && "" !== t && e.add(this.options.textNodeName, t), t = ""), t;
          }
          function z(t, e, n, i) {
            return !(!e || !e.has(i)) || !(!t || !t.has(n));
          }
          function W(t, e, n, i) {
            var s = t.indexOf(e, n);
            if (-1 === s) throw new Error(i);
            return s + e.length - 1;
          }
          function q(t, e, n) {
            var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ">";
            var s = function (t, e) {
              var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ">";
              var i,
                s = "";
              for (var _r0 = e; _r0 < t.length; _r0++) {
                var _e14 = t[_r0];
                if (i) _e14 === i && (i = "");else if ('"' === _e14 || "'" === _e14) i = _e14;else if (_e14 === n[0]) {
                  if (!n[1]) return {
                    data: s,
                    index: _r0
                  };
                  if (t[_r0 + 1] === n[1]) return {
                    data: s,
                    index: _r0
                  };
                } else "\t" === _e14 && (_e14 = " ");
                s += _e14;
              }
            }(t, e + 1, i);
            if (!s) return;
            var r = s.data;
            var o = s.index,
              a = r.search(/\s/);
            var l = r,
              u = !0;
            -1 !== a && (l = r.substring(0, a), r = r.substring(a + 1).trimStart());
            var h = l;
            if (n) {
              var _t12 = l.indexOf(":");
              -1 !== _t12 && (l = l.substr(_t12 + 1), u = l !== s.data.substr(_t12 + 1));
            }
            return {
              tagName: l,
              tagExp: r,
              closeIndex: o,
              attrExpPresent: u,
              rawTagName: h
            };
          }
          function Z(t, e, n) {
            var i = n;
            var s = 1;
            for (; n < t.length; n++) if ("<" === t[n]) if ("/" === t[n + 1]) {
              var _r1 = W(t, ">", n, "".concat(e, " is not closed"));
              if (t.substring(n + 2, _r1).trim() === e && (s--, 0 === s)) return {
                tagContent: t.substring(i, n),
                i: _r1
              };
              n = _r1;
            } else if ("?" === t[n + 1]) n = W(t, "?>", n + 1, "StopNode is not closed.");else if ("!--" === t.substr(n + 1, 3)) n = W(t, "--\x3e", n + 3, "StopNode is not closed.");else if ("![" === t.substr(n + 1, 2)) n = W(t, "]]>", n, "StopNode is not closed.") - 2;else {
              var _i0 = q(t, n, ">");
              _i0 && ((_i0 && _i0.tagName) === e && "/" !== _i0.tagExp[_i0.tagExp.length - 1] && s++, n = _i0.closeIndex);
            }
          }
          function K(t, e, n) {
            if (e && "string" == typeof t) {
              var _e15 = t.trim();
              return "true" === _e15 || "false" !== _e15 && function (t) {
                var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                if (e = Object.assign({}, D, e), !t || "string" != typeof t) return t;
                var n = t.trim();
                if (void 0 !== e.skipLike && e.skipLike.test(n)) return t;
                if ("0" === t) return 0;
                if (e.hex && $.test(n)) return function (t) {
                  if (parseInt) return parseInt(t, 16);
                  if (Number.parseInt) return Number.parseInt(t, 16);
                  if (window && window.parseInt) return window.parseInt(t, 16);
                  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
                }(n);
                if (n.includes("e") || n.includes("E")) return function (t, e, n) {
                  if (!n.eNotation) return t;
                  var i = e.match(L);
                  if (i) {
                    var _s9 = i[1] || "";
                    var _r10 = -1 === i[3].indexOf("e") ? "E" : "e",
                      _o5 = i[2],
                      _a7 = _s9 ? t[_o5.length + 1] === _r10 : t[_o5.length] === _r10;
                    return _o5.length > 1 && _a7 ? t : 1 !== _o5.length || !i[3].startsWith(".".concat(_r10)) && i[3][0] !== _r10 ? n.leadingZeros && !_a7 ? (e = (i[1] || "") + i[3], Number(e)) : t : Number(e);
                  }
                  return t;
                }(t, n, e);
                {
                  var _s0 = V.exec(n);
                  if (_s0) {
                    var _r11 = _s0[1] || "",
                      _o6 = _s0[2];
                    var _a8 = (i = _s0[3]) && -1 !== i.indexOf(".") ? ("." === (i = i.replace(/0+$/, "")) ? i = "0" : "." === i[0] ? i = "0" + i : "." === i[i.length - 1] && (i = i.substring(0, i.length - 1)), i) : i;
                    var _l3 = _r11 ? "." === t[_o6.length + 1] : "." === t[_o6.length];
                    if (!e.leadingZeros && (_o6.length > 1 || 1 === _o6.length && !_l3)) return t;
                    {
                      var _i1 = Number(n),
                        _s1 = String(_i1);
                      if (0 === _i1) return _i1;
                      if (-1 !== _s1.search(/[eE]/)) return e.eNotation ? _i1 : t;
                      if (-1 !== n.indexOf(".")) return "0" === _s1 || _s1 === _a8 || _s1 === "".concat(_r11).concat(_a8) ? _i1 : t;
                      var _l4 = _o6 ? _a8 : n;
                      return _o6 ? _l4 === _s1 || _r11 + _l4 === _s1 ? _i1 : t : _l4 === _s1 || _l4 === _r11 + _s1 ? _i1 : t;
                    }
                  }
                  return t;
                } // removed by dead control flow
                var i;
              }(t, n);
            }
            return void 0 !== t ? t : "";
          }
          function Q(t, e, n) {
            var i = Number.parseInt(t, e);
            return i >= 0 && i <= 1114111 ? String.fromCodePoint(i) : n + t + ";";
          }
          var J = O.getMetaDataSymbol();
          function H(t, e) {
            return tt(t, e);
          }
          function tt(t, e, n) {
            var i;
            var s = {};
            for (var _r12 = 0; _r12 < t.length; _r12++) {
              var _o7 = t[_r12],
                _a9 = et(_o7);
              var _l5 = "";
              if (_l5 = void 0 === n ? _a9 : n + "." + _a9, _a9 === e.textNodeName) void 0 === i ? i = _o7[_a9] : i += "" + _o7[_a9];else {
                if (void 0 === _a9) continue;
                if (_o7[_a9]) {
                  var _t13 = tt(_o7[_a9], e, _l5);
                  var _n13 = it(_t13, e);
                  void 0 !== _o7[J] && (_t13[J] = _o7[J]), _o7[":@"] ? nt(_t13, _o7[":@"], _l5, e) : 1 !== Object.keys(_t13).length || void 0 === _t13[e.textNodeName] || e.alwaysCreateTextNode ? 0 === Object.keys(_t13).length && (e.alwaysCreateTextNode ? _t13[e.textNodeName] = "" : _t13 = "") : _t13 = _t13[e.textNodeName], void 0 !== s[_a9] && s.hasOwnProperty(_a9) ? (Array.isArray(s[_a9]) || (s[_a9] = [s[_a9]]), s[_a9].push(_t13)) : e.isArray(_a9, _l5, _n13) ? s[_a9] = [_t13] : s[_a9] = _t13;
                }
              }
            }
            return "string" == typeof i ? i.length > 0 && (s[e.textNodeName] = i) : void 0 !== i && (s[e.textNodeName] = i), s;
          }
          function et(t) {
            var e = Object.keys(t);
            for (var _t14 = 0; _t14 < e.length; _t14++) {
              var _n14 = e[_t14];
              if (":@" !== _n14) return _n14;
            }
          }
          function nt(t, e, n, i) {
            if (e) {
              var _s10 = Object.keys(e),
                _r13 = _s10.length;
              for (var _o8 = 0; _o8 < _r13; _o8++) {
                var _r14 = _s10[_o8];
                i.isArray(_r14, n + "." + _r14, !0, !0) ? t[_r14] = [e[_r14]] : t[_r14] = e[_r14];
              }
            }
          }
          function it(t, e) {
            var n = e.textNodeName,
              i = Object.keys(t).length;
            return 0 === i || !(1 !== i || !t[n] && "boolean" != typeof t[n] && 0 !== t[n]);
          }
          var st = /*#__PURE__*/function () {
            function st(t) {
              _classCallCheck(this, st);
              this.externalEntities = {}, this.options = v(t);
            }
            return _createClass(st, [{
              key: "parse",
              value: function parse(t, e) {
                if ("string" != typeof t && t.toString) t = t.toString();else if ("string" != typeof t) throw new Error("XML data is accepted in String or Bytes[] form.");
                if (e) {
                  !0 === e && (e = {});
                  var _n15 = a(t, e);
                  if (!0 !== _n15) throw Error("".concat(_n15.err.msg, ":").concat(_n15.err.line, ":").concat(_n15.err.col));
                }
                var n = new j(this.options);
                n.addExternalEntities(this.externalEntities);
                var i = n.parseXml(t);
                return this.options.preserveOrder || void 0 === i ? i : H(i, this.options);
              }
            }, {
              key: "addEntity",
              value: function addEntity(t, e) {
                if (-1 !== e.indexOf("&")) throw new Error("Entity value can't have '&'");
                if (-1 !== t.indexOf("&") || -1 !== t.indexOf(";")) throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
                if ("&" === e) throw new Error("An entity with value '&' is not permitted");
                this.externalEntities[t] = e;
              }
            }], [{
              key: "getMetaDataSymbol",
              value: function getMetaDataSymbol() {
                return O.getMetaDataSymbol();
              }
            }]);
          }();
          function rt(t, e) {
            var n = "";
            return e.format && e.indentBy.length > 0 && (n = "\n"), ot(t, e, "", n);
          }
          function ot(t, e, n, i) {
            var s = "",
              r = !1;
            for (var _o9 = 0; _o9 < t.length; _o9++) {
              var _a0 = t[_o9],
                _l6 = at(_a0);
              if (void 0 === _l6) continue;
              var _u2 = "";
              if (_u2 = 0 === n.length ? _l6 : "".concat(n, ".").concat(_l6), _l6 === e.textNodeName) {
                var _t15 = _a0[_l6];
                ut(_u2, e) || (_t15 = e.tagValueProcessor(_l6, _t15), _t15 = ht(_t15, e)), r && (s += i), s += _t15, r = !1;
                continue;
              }
              if (_l6 === e.cdataPropName) {
                r && (s += i), s += "<![CDATA[".concat(_a0[_l6][0][e.textNodeName], "]]>"), r = !1;
                continue;
              }
              if (_l6 === e.commentPropName) {
                s += i + "<!--".concat(_a0[_l6][0][e.textNodeName], "-->"), r = !0;
                continue;
              }
              if ("?" === _l6[0]) {
                var _t16 = lt(_a0[":@"], e),
                  _n16 = "?xml" === _l6 ? "" : i;
                var _o0 = _a0[_l6][0][e.textNodeName];
                _o0 = 0 !== _o0.length ? " " + _o0 : "", s += _n16 + "<".concat(_l6).concat(_o0).concat(_t16, "?>"), r = !0;
                continue;
              }
              var _h2 = i;
              "" !== _h2 && (_h2 += e.indentBy);
              var _d3 = i + "<".concat(_l6).concat(lt(_a0[":@"], e)),
                _p3 = ot(_a0[_l6], e, _u2, _h2);
              -1 !== e.unpairedTags.indexOf(_l6) ? e.suppressUnpairedNode ? s += _d3 + ">" : s += _d3 + "/>" : _p3 && 0 !== _p3.length || !e.suppressEmptyNode ? _p3 && _p3.endsWith(">") ? s += _d3 + ">".concat(_p3).concat(i, "</").concat(_l6, ">") : (s += _d3 + ">", _p3 && "" !== i && (_p3.includes("/>") || _p3.includes("</")) ? s += i + e.indentBy + _p3 + i : s += _p3, s += "</".concat(_l6, ">")) : s += _d3 + "/>", r = !0;
            }
            return s;
          }
          function at(t) {
            var e = Object.keys(t);
            for (var _n17 = 0; _n17 < e.length; _n17++) {
              var _i10 = e[_n17];
              if (t.hasOwnProperty(_i10) && ":@" !== _i10) return _i10;
            }
          }
          function lt(t, e) {
            var n = "";
            if (t && !e.ignoreAttributes) for (var _i11 in t) {
              if (!t.hasOwnProperty(_i11)) continue;
              var _s11 = e.attributeValueProcessor(_i11, t[_i11]);
              _s11 = ht(_s11, e), !0 === _s11 && e.suppressBooleanAttributes ? n += " ".concat(_i11.substr(e.attributeNamePrefix.length)) : n += " ".concat(_i11.substr(e.attributeNamePrefix.length), "=\"").concat(_s11, "\"");
            }
            return n;
          }
          function ut(t, e) {
            var n = (t = t.substr(0, t.length - e.textNodeName.length - 1)).substr(t.lastIndexOf(".") + 1);
            for (var _i12 in e.stopNodes) if (e.stopNodes[_i12] === t || e.stopNodes[_i12] === "*." + n) return !0;
            return !1;
          }
          function ht(t, e) {
            if (t && t.length > 0 && e.processEntities) for (var _n18 = 0; _n18 < e.entities.length; _n18++) {
              var _i13 = e.entities[_n18];
              t = t.replace(_i13.regex, _i13.val);
            }
            return t;
          }
          var dt = {
            attributeNamePrefix: "@_",
            attributesGroupName: !1,
            textNodeName: "#text",
            ignoreAttributes: !0,
            cdataPropName: !1,
            format: !1,
            indentBy: "  ",
            suppressEmptyNode: !1,
            suppressUnpairedNode: !0,
            suppressBooleanAttributes: !0,
            tagValueProcessor: function tagValueProcessor(t, e) {
              return e;
            },
            attributeValueProcessor: function attributeValueProcessor(t, e) {
              return e;
            },
            preserveOrder: !1,
            commentPropName: !1,
            unpairedTags: [],
            entities: [{
              regex: new RegExp("&", "g"),
              val: "&amp;"
            }, {
              regex: new RegExp(">", "g"),
              val: "&gt;"
            }, {
              regex: new RegExp("<", "g"),
              val: "&lt;"
            }, {
              regex: new RegExp("'", "g"),
              val: "&apos;"
            }, {
              regex: new RegExp('"', "g"),
              val: "&quot;"
            }],
            processEntities: !0,
            stopNodes: [],
            oneListGroup: !1
          };
          function pt(t) {
            this.options = Object.assign({}, dt, t), !0 === this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function () {
              return !1;
            } : (this.ignoreAttributesFn = F(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = gt), this.processTextOrObjNode = ft, this.options.format ? (this.indentate = ct, this.tagEndChar = ">\n", this.newLine = "\n") : (this.indentate = function () {
              return "";
            }, this.tagEndChar = ">", this.newLine = "");
          }
          function ft(t, e, n, i) {
            var s = this.j2x(t, n + 1, i.concat(e));
            return void 0 !== t[this.options.textNodeName] && 1 === Object.keys(t).length ? this.buildTextValNode(t[this.options.textNodeName], e, s.attrStr, n) : this.buildObjectNode(s.val, e, s.attrStr, n);
          }
          function ct(t) {
            return this.options.indentBy.repeat(t);
          }
          function gt(t) {
            return !(!t.startsWith(this.options.attributeNamePrefix) || t === this.options.textNodeName) && t.substr(this.attrPrefixLen);
          }
          pt.prototype.build = function (t) {
            return this.options.preserveOrder ? rt(t, this.options) : (Array.isArray(t) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (t = _defineProperty({}, this.options.arrayNodeName, t)), this.j2x(t, 0, []).val);
          }, pt.prototype.j2x = function (t, e, n) {
            var i = "",
              s = "";
            var r = n.join(".");
            for (var _o1 in t) if (Object.prototype.hasOwnProperty.call(t, _o1)) if (void 0 === t[_o1]) this.isAttribute(_o1) && (s += "");else if (null === t[_o1]) this.isAttribute(_o1) || _o1 === this.options.cdataPropName ? s += "" : "?" === _o1[0] ? s += this.indentate(e) + "<" + _o1 + "?" + this.tagEndChar : s += this.indentate(e) + "<" + _o1 + "/" + this.tagEndChar;else if (t[_o1] instanceof Date) s += this.buildTextValNode(t[_o1], _o1, "", e);else if ("object" != _typeof(t[_o1])) {
              var _n19 = this.isAttribute(_o1);
              if (_n19 && !this.ignoreAttributesFn(_n19, r)) i += this.buildAttrPairStr(_n19, "" + t[_o1]);else if (!_n19) if (_o1 === this.options.textNodeName) {
                var _e16 = this.options.tagValueProcessor(_o1, "" + t[_o1]);
                s += this.replaceEntitiesValue(_e16);
              } else s += this.buildTextValNode(t[_o1], _o1, "", e);
            } else if (Array.isArray(t[_o1])) {
              var _i14 = t[_o1].length;
              var _r15 = "",
                _a1 = "";
              for (var _l7 = 0; _l7 < _i14; _l7++) {
                var _i15 = t[_o1][_l7];
                if (void 0 === _i15) ;else if (null === _i15) "?" === _o1[0] ? s += this.indentate(e) + "<" + _o1 + "?" + this.tagEndChar : s += this.indentate(e) + "<" + _o1 + "/" + this.tagEndChar;else if ("object" == _typeof(_i15)) {
                  if (this.options.oneListGroup) {
                    var _t18 = this.j2x(_i15, e + 1, n.concat(_o1));
                    _r15 += _t18.val, this.options.attributesGroupName && _i15.hasOwnProperty(this.options.attributesGroupName) && (_a1 += _t18.attrStr);
                  } else _r15 += this.processTextOrObjNode(_i15, _o1, e, n);
                } else if (this.options.oneListGroup) {
                  var _t19 = this.options.tagValueProcessor(_o1, _i15);
                  _t19 = this.replaceEntitiesValue(_t19), _r15 += _t19;
                } else _r15 += this.buildTextValNode(_i15, _o1, "", e);
              }
              this.options.oneListGroup && (_r15 = this.buildObjectNode(_r15, _o1, _a1, e)), s += _r15;
            } else if (this.options.attributesGroupName && _o1 === this.options.attributesGroupName) {
              var _e17 = Object.keys(t[_o1]),
                _n20 = _e17.length;
              for (var _s12 = 0; _s12 < _n20; _s12++) i += this.buildAttrPairStr(_e17[_s12], "" + t[_o1][_e17[_s12]]);
            } else s += this.processTextOrObjNode(t[_o1], _o1, e, n);
            return {
              attrStr: i,
              val: s
            };
          }, pt.prototype.buildAttrPairStr = function (t, e) {
            return e = this.options.attributeValueProcessor(t, "" + e), e = this.replaceEntitiesValue(e), this.options.suppressBooleanAttributes && "true" === e ? " " + t : " " + t + '="' + e + '"';
          }, pt.prototype.buildObjectNode = function (t, e, n, i) {
            if ("" === t) return "?" === e[0] ? this.indentate(i) + "<" + e + n + "?" + this.tagEndChar : this.indentate(i) + "<" + e + n + this.closeTag(e) + this.tagEndChar;
            {
              var _s13 = "</" + e + this.tagEndChar,
                _r16 = "";
              return "?" === e[0] && (_r16 = "?", _s13 = ""), !n && "" !== n || -1 !== t.indexOf("<") ? !1 !== this.options.commentPropName && e === this.options.commentPropName && 0 === _r16.length ? this.indentate(i) + "<!--".concat(t, "-->") + this.newLine : this.indentate(i) + "<" + e + n + _r16 + this.tagEndChar + t + this.indentate(i) + _s13 : this.indentate(i) + "<" + e + n + _r16 + ">" + t + _s13;
            }
          }, pt.prototype.closeTag = function (t) {
            var e = "";
            return -1 !== this.options.unpairedTags.indexOf(t) ? this.options.suppressUnpairedNode || (e = "/") : e = this.options.suppressEmptyNode ? "/" : "></".concat(t), e;
          }, pt.prototype.buildTextValNode = function (t, e, n, i) {
            if (!1 !== this.options.cdataPropName && e === this.options.cdataPropName) return this.indentate(i) + "<![CDATA[".concat(t, "]]>") + this.newLine;
            if (!1 !== this.options.commentPropName && e === this.options.commentPropName) return this.indentate(i) + "<!--".concat(t, "-->") + this.newLine;
            if ("?" === e[0]) return this.indentate(i) + "<" + e + n + "?" + this.tagEndChar;
            {
              var _s14 = this.options.tagValueProcessor(e, t);
              return _s14 = this.replaceEntitiesValue(_s14), "" === _s14 ? this.indentate(i) + "<" + e + n + this.closeTag(e) + this.tagEndChar : this.indentate(i) + "<" + e + n + ">" + _s14 + "</" + e + this.tagEndChar;
            }
          }, pt.prototype.replaceEntitiesValue = function (t) {
            if (t && t.length > 0 && this.options.processEntities) for (var _e18 = 0; _e18 < this.options.entities.length; _e18++) {
              var _n21 = this.options.entities[_e18];
              t = t.replace(_n21.regex, _n21.val);
            }
            return t;
          };
          var xt = {
            validate: a
          };
          module.exports = e;
        })();

        /***/
      }),
      /***/956: (/***/function _(module, __unused_webpack_exports, __webpack_require__) {
        /*
        
        npx browserify ./src/entry.js -o out/packAll.js
        npx babel out/packAll.js --out-file out/packAll.jsfl
        
        // webpack
        // npx babel out/packAll.js --out-file out/packAll.jsfl
        // node ./tools/iife/wrap-iife.js
        
        
         */

        module.exports = __webpack_require__(603);

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
    var __webpack_exports__ = __webpack_require__(956);
    /******/
    /******/
    return __webpack_exports__;
    /******/
  }();
});

})();