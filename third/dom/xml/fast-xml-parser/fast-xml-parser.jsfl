(function(){
 "use strict";
// @ts-nocheck
// import "_exports";
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
    return /******/ (function () {
        /******/ var __webpack_modules__ = ({
            /***/ 603: 
            /***/ (function (module) {
                (function () {
                    "use strict";
                    var t = { d: function (e, n) { for (var i in n)
                            t.o(n, i) && !t.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: n[i] }); }, o: function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, r: function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }); } }, e = {};
                    t.r(e), t.d(e, { XMLBuilder: function () { return pt; }, XMLParser: function () { return st; }, XMLValidator: function () { return xt; } });
                    var n = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", i = new RegExp("^[" + n + "][" + n + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$");
                    function s(t, e) { var n = []; var i = e.exec(t); for (; i;) {
                        var s_1 = [];
                        s_1.startIndex = e.lastIndex - i[0].length;
                        var r_1 = i.length;
                        for (var t_1 = 0; t_1 < r_1; t_1++)
                            s_1.push(i[t_1]);
                        n.push(s_1), i = e.exec(t);
                    } return n; }
                    var r = function (t) { return !(null == i.exec(t)); }, o = { allowBooleanAttributes: !1, unpairedTags: [] };
                    function a(t, e) { e = Object.assign({}, o, e); var n = []; var i = !1, s = !1; "\ufeff" === t[0] && (t = t.substr(1)); for (var r_2 = 0; r_2 < t.length; r_2++)
                        if ("<" === t[r_2] && "?" === t[r_2 + 1]) {
                            if (r_2 += 2, r_2 = u(t, r_2), r_2.err)
                                return r_2;
                        }
                        else {
                            if ("<" !== t[r_2]) {
                                if (l(t[r_2]))
                                    continue;
                                return m("InvalidChar", "char '" + t[r_2] + "' is not expected.", N(t, r_2));
                            }
                            {
                                var o_1 = r_2;
                                if (r_2++, "!" === t[r_2]) {
                                    r_2 = h(t, r_2);
                                    continue;
                                }
                                {
                                    var a_1 = !1;
                                    "/" === t[r_2] && (a_1 = !0, r_2++);
                                    var d_1 = "";
                                    for (; r_2 < t.length && ">" !== t[r_2] && " " !== t[r_2] && "\t" !== t[r_2] && "\n" !== t[r_2] && "\r" !== t[r_2]; r_2++)
                                        d_1 += t[r_2];
                                    if (d_1 = d_1.trim(), "/" === d_1[d_1.length - 1] && (d_1 = d_1.substring(0, d_1.length - 1), r_2--), !b(d_1)) {
                                        var e_1 = void 0;
                                        return e_1 = 0 === d_1.trim().length ? "Invalid space after '<'." : "Tag '" + d_1 + "' is an invalid name.", m("InvalidTag", e_1, N(t, r_2));
                                    }
                                    var p_1 = f(t, r_2);
                                    if (!1 === p_1)
                                        return m("InvalidAttr", "Attributes for '" + d_1 + "' have open quote.", N(t, r_2));
                                    var c_1 = p_1.value;
                                    if (r_2 = p_1.index, "/" === c_1[c_1.length - 1]) {
                                        var n_1 = r_2 - c_1.length;
                                        c_1 = c_1.substring(0, c_1.length - 1);
                                        var s_2 = g(c_1, e);
                                        if (!0 !== s_2)
                                            return m(s_2.err.code, s_2.err.msg, N(t, n_1 + s_2.err.line));
                                        i = !0;
                                    }
                                    else if (a_1) {
                                        if (!p_1.tagClosed)
                                            return m("InvalidTag", "Closing tag '" + d_1 + "' doesn't have proper closing.", N(t, r_2));
                                        if (c_1.trim().length > 0)
                                            return m("InvalidTag", "Closing tag '" + d_1 + "' can't have attributes or invalid starting.", N(t, o_1));
                                        if (0 === n.length)
                                            return m("InvalidTag", "Closing tag '" + d_1 + "' has not been opened.", N(t, o_1));
                                        {
                                            var e_2 = n.pop();
                                            if (d_1 !== e_2.tagName) {
                                                var n_2 = N(t, e_2.tagStartPos);
                                                return m("InvalidTag", "Expected closing tag '" + e_2.tagName + "' (opened in line " + n_2.line + ", col " + n_2.col + ") instead of closing tag '" + d_1 + "'.", N(t, o_1));
                                            }
                                            0 == n.length && (s = !0);
                                        }
                                    }
                                    else {
                                        var a_2 = g(c_1, e);
                                        if (!0 !== a_2)
                                            return m(a_2.err.code, a_2.err.msg, N(t, r_2 - c_1.length + a_2.err.line));
                                        if (!0 === s)
                                            return m("InvalidXml", "Multiple possible root nodes found.", N(t, r_2));
                                        -1 !== e.unpairedTags.indexOf(d_1) || n.push({ tagName: d_1, tagStartPos: o_1 }), i = !0;
                                    }
                                    for (r_2++; r_2 < t.length; r_2++)
                                        if ("<" === t[r_2]) {
                                            if ("!" === t[r_2 + 1]) {
                                                r_2++, r_2 = h(t, r_2);
                                                continue;
                                            }
                                            if ("?" !== t[r_2 + 1])
                                                break;
                                            if (r_2 = u(t, ++r_2), r_2.err)
                                                return r_2;
                                        }
                                        else if ("&" === t[r_2]) {
                                            var e_3 = x(t, r_2);
                                            if (-1 == e_3)
                                                return m("InvalidChar", "char '&' is not expected.", N(t, r_2));
                                            r_2 = e_3;
                                        }
                                        else if (!0 === s && !l(t[r_2]))
                                            return m("InvalidXml", "Extra text at the end", N(t, r_2));
                                    "<" === t[r_2] && r_2--;
                                }
                            }
                        } return i ? 1 == n.length ? m("InvalidTag", "Unclosed tag '" + n[0].tagName + "'.", N(t, n[0].tagStartPos)) : !(n.length > 0) || m("InvalidXml", "Invalid '" + JSON.stringify(n.map(function (t) { return t.tagName; }), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 }) : m("InvalidXml", "Start tag expected.", 1); }
                    function l(t) { return " " === t || "\t" === t || "\n" === t || "\r" === t; }
                    function u(t, e) { var n = e; for (; e < t.length; e++)
                        if ("?" == t[e] || " " == t[e]) {
                            var i_1 = t.substr(n, e - n);
                            if (e > 5 && "xml" === i_1)
                                return m("InvalidXml", "XML declaration allowed only at the start of the document.", N(t, e));
                            if ("?" == t[e] && ">" == t[e + 1]) {
                                e++;
                                break;
                            }
                            continue;
                        } return e; }
                    function h(t, e) { if (t.length > e + 5 && "-" === t[e + 1] && "-" === t[e + 2]) {
                        for (e += 3; e < t.length; e++)
                            if ("-" === t[e] && "-" === t[e + 1] && ">" === t[e + 2]) {
                                e += 2;
                                break;
                            }
                    }
                    else if (t.length > e + 8 && "D" === t[e + 1] && "O" === t[e + 2] && "C" === t[e + 3] && "T" === t[e + 4] && "Y" === t[e + 5] && "P" === t[e + 6] && "E" === t[e + 7]) {
                        var n_3 = 1;
                        for (e += 8; e < t.length; e++)
                            if ("<" === t[e])
                                n_3++;
                            else if (">" === t[e] && (n_3--, 0 === n_3))
                                break;
                    }
                    else if (t.length > e + 9 && "[" === t[e + 1] && "C" === t[e + 2] && "D" === t[e + 3] && "A" === t[e + 4] && "T" === t[e + 5] && "A" === t[e + 6] && "[" === t[e + 7])
                        for (e += 8; e < t.length; e++)
                            if ("]" === t[e] && "]" === t[e + 1] && ">" === t[e + 2]) {
                                e += 2;
                                break;
                            } return e; }
                    var d = '"', p = "'";
                    function f(t, e) { var n = "", i = "", s = !1; for (; e < t.length; e++) {
                        if (t[e] === d || t[e] === p)
                            "" === i ? i = t[e] : i !== t[e] || (i = "");
                        else if (">" === t[e] && "" === i) {
                            s = !0;
                            break;
                        }
                        n += t[e];
                    } return "" === i && { value: n, index: e, tagClosed: s }; }
                    var c = new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?", "g");
                    function g(t, e) { var n = s(t, c), i = {}; for (var t_2 = 0; t_2 < n.length; t_2++) {
                        if (0 === n[t_2][1].length)
                            return m("InvalidAttr", "Attribute '" + n[t_2][2] + "' has no space in starting.", y(n[t_2]));
                        if (void 0 !== n[t_2][3] && void 0 === n[t_2][4])
                            return m("InvalidAttr", "Attribute '" + n[t_2][2] + "' is without value.", y(n[t_2]));
                        if (void 0 === n[t_2][3] && !e.allowBooleanAttributes)
                            return m("InvalidAttr", "boolean attribute '" + n[t_2][2] + "' is not allowed.", y(n[t_2]));
                        var s_3 = n[t_2][2];
                        if (!E(s_3))
                            return m("InvalidAttr", "Attribute '" + s_3 + "' is an invalid name.", y(n[t_2]));
                        if (i.hasOwnProperty(s_3))
                            return m("InvalidAttr", "Attribute '" + s_3 + "' is repeated.", y(n[t_2]));
                        i[s_3] = 1;
                    } return !0; }
                    function x(t, e) { if (";" === t[++e])
                        return -1; if ("#" === t[e])
                        return function (t, e) { var n = /\d/; for ("x" === t[e] && (e++, n = /[\da-fA-F]/); e < t.length; e++) {
                            if (";" === t[e])
                                return e;
                            if (!t[e].match(n))
                                break;
                        } return -1; }(t, ++e); var n = 0; for (; e < t.length; e++, n++)
                        if (!(t[e].match(/\w/) && n < 20)) {
                            if (";" === t[e])
                                break;
                            return -1;
                        } return e; }
                    function m(t, e, n) { return { err: { code: t, msg: e, line: n.line || n, col: n.col } }; }
                    function E(t) { return r(t); }
                    function b(t) { return r(t); }
                    function N(t, e) { var n = t.substring(0, e).split(/\r?\n/); return { line: n.length, col: n[n.length - 1].length + 1 }; }
                    function y(t) { return t.startIndex + t[1].length; }
                    var T = { preserveOrder: !1, attributeNamePrefix: "@_", attributesGroupName: !1, textNodeName: "#text", ignoreAttributes: !0, removeNSPrefix: !1, allowBooleanAttributes: !1, parseTagValue: !0, parseAttributeValue: !1, trimValues: !0, cdataPropName: !1, numberParseOptions: { hex: !0, leadingZeros: !0, eNotation: !0 }, tagValueProcessor: function (t, e) { return e; }, attributeValueProcessor: function (t, e) { return e; }, stopNodes: [], alwaysCreateTextNode: !1, isArray: function () { return !1; }, commentPropName: !1, unpairedTags: [], processEntities: !0, htmlEntities: !1, ignoreDeclaration: !1, ignorePiTags: !1, transformTagName: !1, transformAttributeName: !1, updateTag: function (t, e, n) { return t; }, captureMetaData: !1 };
                    function w(t) { var _a, _b, _c, _d, _e, _f; return "boolean" == typeof t ? { enabled: t, maxEntitySize: 1e4, maxExpansionDepth: 10, maxTotalExpansions: 1e3, maxExpandedLength: 1e5, allowedTags: null, tagFilter: null } : "object" == typeof t && null !== t ? { enabled: !1 !== t.enabled, maxEntitySize: (_a = t.maxEntitySize) !== null && _a !== void 0 ? _a : 1e4, maxExpansionDepth: (_b = t.maxExpansionDepth) !== null && _b !== void 0 ? _b : 10, maxTotalExpansions: (_c = t.maxTotalExpansions) !== null && _c !== void 0 ? _c : 1e3, maxExpandedLength: (_d = t.maxExpandedLength) !== null && _d !== void 0 ? _d : 1e5, allowedTags: (_e = t.allowedTags) !== null && _e !== void 0 ? _e : null, tagFilter: (_f = t.tagFilter) !== null && _f !== void 0 ? _f : null } : w(!0); }
                    var v = function (t) { var e = Object.assign({}, T, t); return e.processEntities = w(e.processEntities), e; };
                    var I;
                    I = "function" != typeof Symbol ? "@@xmlMetadata" : Symbol("XML Node Metadata");
                    var O = /** @class */ (function () {
                        function O(t) {
                            this.tagname = t, this.child = [], this[":@"] = {};
                        }
                        O.prototype.add = function (t, e) {
                            var _a;
                            "__proto__" === t && (t = "#__proto__"), this.child.push((_a = {}, _a[t] = e, _a));
                        };
                        O.prototype.addChild = function (t, e) {
                            var _a, _b;
                            "__proto__" === t.tagname && (t.tagname = "#__proto__"), t[":@"] && Object.keys(t[":@"]).length > 0 ? this.child.push((_a = {}, _a[t.tagname] = t.child, _a[":@"] = t[":@"], _a)) : this.child.push((_b = {}, _b[t.tagname] = t.child, _b)), void 0 !== e && (this.child[this.child.length - 1][I] = { startIndex: e });
                        };
                        O.getMetaDataSymbol = function () { return I; };
                        return O;
                    }());
                    var P = /** @class */ (function () {
                        function P(t) {
                            this.suppressValidationErr = !t, this.options = t;
                        }
                        P.prototype.readDocType = function (t, e) {
                            var _a;
                            var n = {};
                            if ("O" !== t[e + 3] || "C" !== t[e + 4] || "T" !== t[e + 5] || "Y" !== t[e + 6] || "P" !== t[e + 7] || "E" !== t[e + 8])
                                throw new Error("Invalid Tag instead of DOCTYPE");
                            {
                                e += 9;
                                var i_2 = 1, s_4 = !1, r_3 = !1, o_2 = "";
                                for (; e < t.length; e++)
                                    if ("<" !== t[e] || r_3)
                                        if (">" === t[e]) {
                                            if (r_3 ? "-" === t[e - 1] && "-" === t[e - 2] && (r_3 = !1, i_2--) : i_2--, 0 === i_2)
                                                break;
                                        }
                                        else
                                            "[" === t[e] ? s_4 = !0 : o_2 += t[e];
                                    else {
                                        if (s_4 && S(t, "!ENTITY", e)) {
                                            var i_3 = void 0, s_5 = void 0;
                                            if (e += 7, _a = this.readEntityExp(t, e + 1, this.suppressValidationErr), i_3 = _a[0], s_5 = _a[1], e = _a[2], -1 === s_5.indexOf("&")) {
                                                var t_3 = i_3.replace(/[.\-+*:]/g, "\\.");
                                                n[i_3] = { regx: RegExp("&".concat(t_3, ";"), "g"), val: s_5 };
                                            }
                                        }
                                        else if (s_4 && S(t, "!ELEMENT", e)) {
                                            e += 8;
                                            var n_4 = this.readElementExp(t, e + 1).index;
                                            e = n_4;
                                        }
                                        else if (s_4 && S(t, "!ATTLIST", e))
                                            e += 8;
                                        else if (s_4 && S(t, "!NOTATION", e)) {
                                            e += 9;
                                            var n_5 = this.readNotationExp(t, e + 1, this.suppressValidationErr).index;
                                            e = n_5;
                                        }
                                        else {
                                            if (!S(t, "!--", e))
                                                throw new Error("Invalid DOCTYPE");
                                            r_3 = !0;
                                        }
                                        i_2++, o_2 = "";
                                    }
                                if (0 !== i_2)
                                    throw new Error("Unclosed DOCTYPE");
                            }
                            return { entities: n, i: e };
                        };
                        P.prototype.readEntityExp = function (t, e) {
                            var _a;
                            e = A(t, e);
                            var n = "";
                            for (; e < t.length && !/\s/.test(t[e]) && '"' !== t[e] && "'" !== t[e];)
                                n += t[e], e++;
                            if (C(n), e = A(t, e), !this.suppressValidationErr) {
                                if ("SYSTEM" === t.substring(e, e + 6).toUpperCase())
                                    throw new Error("External entities are not supported");
                                if ("%" === t[e])
                                    throw new Error("Parameter entities are not supported");
                            }
                            var i = "";
                            if (_a = this.readIdentifierVal(t, e, "entity"), e = _a[0], i = _a[1], !1 !== this.options.enabled && this.options.maxEntitySize && i.length > this.options.maxEntitySize)
                                throw new Error("Entity \"".concat(n, "\" size (").concat(i.length, ") exceeds maximum allowed size (").concat(this.options.maxEntitySize, ")"));
                            return [n, i, --e];
                        };
                        P.prototype.readNotationExp = function (t, e) {
                            var _a, _b, _c;
                            e = A(t, e);
                            var n = "";
                            for (; e < t.length && !/\s/.test(t[e]);)
                                n += t[e], e++;
                            !this.suppressValidationErr && C(n), e = A(t, e);
                            var i = t.substring(e, e + 6).toUpperCase();
                            if (!this.suppressValidationErr && "SYSTEM" !== i && "PUBLIC" !== i)
                                throw new Error("Expected SYSTEM or PUBLIC, found \"".concat(i, "\""));
                            e += i.length, e = A(t, e);
                            var s = null, r = null;
                            if ("PUBLIC" === i)
                                _a = this.readIdentifierVal(t, e, "publicIdentifier"), e = _a[0], s = _a[1], '"' !== t[e = A(t, e)] && "'" !== t[e] || (_b = this.readIdentifierVal(t, e, "systemIdentifier"), e = _b[0], r = _b[1], _b);
                            else if ("SYSTEM" === i && (_c = this.readIdentifierVal(t, e, "systemIdentifier"), e = _c[0], r = _c[1], !this.suppressValidationErr && !r))
                                throw new Error("Missing mandatory system identifier for SYSTEM notation");
                            return { notationName: n, publicIdentifier: s, systemIdentifier: r, index: --e };
                        };
                        P.prototype.readIdentifierVal = function (t, e, n) { var i = ""; var s = t[e]; if ('"' !== s && "'" !== s)
                            throw new Error("Expected quoted string, found \"".concat(s, "\"")); for (e++; e < t.length && t[e] !== s;)
                            i += t[e], e++; if (t[e] !== s)
                            throw new Error("Unterminated ".concat(n, " value")); return [++e, i]; };
                        P.prototype.readElementExp = function (t, e) { e = A(t, e); var n = ""; for (; e < t.length && !/\s/.test(t[e]);)
                            n += t[e], e++; if (!this.suppressValidationErr && !r(n))
                            throw new Error("Invalid element name: \"".concat(n, "\"")); var i = ""; if ("E" === t[e = A(t, e)] && S(t, "MPTY", e))
                            e += 4;
                        else if ("A" === t[e] && S(t, "NY", e))
                            e += 2;
                        else if ("(" === t[e]) {
                            for (e++; e < t.length && ")" !== t[e];)
                                i += t[e], e++;
                            if (")" !== t[e])
                                throw new Error("Unterminated content model");
                        }
                        else if (!this.suppressValidationErr)
                            throw new Error("Invalid Element Expression, found \"".concat(t[e], "\"")); return { elementName: n, contentModel: i.trim(), index: e }; };
                        P.prototype.readAttlistExp = function (t, e) {
                            var _a;
                            e = A(t, e);
                            var n = "";
                            for (; e < t.length && !/\s/.test(t[e]);)
                                n += t[e], e++;
                            C(n), e = A(t, e);
                            var i = "";
                            for (; e < t.length && !/\s/.test(t[e]);)
                                i += t[e], e++;
                            if (!C(i))
                                throw new Error("Invalid attribute name: \"".concat(i, "\""));
                            e = A(t, e);
                            var s = "";
                            if ("NOTATION" === t.substring(e, e + 8).toUpperCase()) {
                                if (s = "NOTATION", "(" !== t[e = A(t, e += 8)])
                                    throw new Error("Expected '(', found \"".concat(t[e], "\""));
                                e++;
                                var n_6 = [];
                                for (; e < t.length && ")" !== t[e];) {
                                    var i_4 = "";
                                    for (; e < t.length && "|" !== t[e] && ")" !== t[e];)
                                        i_4 += t[e], e++;
                                    if (i_4 = i_4.trim(), !C(i_4))
                                        throw new Error("Invalid notation name: \"".concat(i_4, "\""));
                                    n_6.push(i_4), "|" === t[e] && (e++, e = A(t, e));
                                }
                                if (")" !== t[e])
                                    throw new Error("Unterminated list of notations");
                                e++, s += " (" + n_6.join("|") + ")";
                            }
                            else {
                                for (; e < t.length && !/\s/.test(t[e]);)
                                    s += t[e], e++;
                                var n_7 = ["CDATA", "ID", "IDREF", "IDREFS", "ENTITY", "ENTITIES", "NMTOKEN", "NMTOKENS"];
                                if (!this.suppressValidationErr && !n_7.includes(s.toUpperCase()))
                                    throw new Error("Invalid attribute type: \"".concat(s, "\""));
                            }
                            e = A(t, e);
                            var r = "";
                            return "#REQUIRED" === t.substring(e, e + 8).toUpperCase() ? (r = "#REQUIRED", e += 8) : "#IMPLIED" === t.substring(e, e + 7).toUpperCase() ? (r = "#IMPLIED", e += 7) : (_a = this.readIdentifierVal(t, e, "ATTLIST"), e = _a[0], r = _a[1], _a), { elementName: n, attributeName: i, attributeType: s, defaultValue: r, index: e };
                        };
                        return P;
                    }());
                    var A = function (t, e) { for (; e < t.length && /\s/.test(t[e]);)
                        e++; return e; };
                    function S(t, e, n) { for (var i_5 = 0; i_5 < e.length; i_5++)
                        if (e[i_5] !== t[n + i_5 + 1])
                            return !1; return !0; }
                    function C(t) { if (r(t))
                        return t; throw new Error("Invalid entity name ".concat(t)); }
                    var $ = /^[-+]?0x[a-fA-F0-9]+$/, V = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, D = { hex: !0, leadingZeros: !0, decimalPoint: ".", eNotation: !0 };
                    var L = /^([-+])?(0*)(\d*(\.\d*)?[eE][-\+]?\d+)$/;
                    function F(t) { return "function" == typeof t ? t : Array.isArray(t) ? function (e) { for (var _i = 0, t_4 = t; _i < t_4.length; _i++) {
                        var n_8 = t_4[_i];
                        if ("string" == typeof n_8 && e === n_8)
                            return !0;
                        if (n_8 instanceof RegExp && n_8.test(e))
                            return !0;
                    } } : function () { return !1; }; }
                    var j = /** @class */ (function () {
                        function j(t) {
                            if (this.options = t, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = { apos: { regex: /&(apos|#39|#x27);/g, val: "'" }, gt: { regex: /&(gt|#62|#x3E);/g, val: ">" }, lt: { regex: /&(lt|#60|#x3C);/g, val: "<" }, quot: { regex: /&(quot|#34|#x22);/g, val: '"' } }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = { space: { regex: /&(nbsp|#160);/g, val: " " }, cent: { regex: /&(cent|#162);/g, val: "¢" }, pound: { regex: /&(pound|#163);/g, val: "£" }, yen: { regex: /&(yen|#165);/g, val: "¥" }, euro: { regex: /&(euro|#8364);/g, val: "€" }, copyright: { regex: /&(copy|#169);/g, val: "©" }, reg: { regex: /&(reg|#174);/g, val: "®" }, inr: { regex: /&(inr|#8377);/g, val: "₹" }, num_dec: { regex: /&#([0-9]{1,7});/g, val: function (t, e) { return Q(e, 10, "&#"); } }, num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: function (t, e) { return Q(e, 16, "&#x"); } } }, this.addExternalEntities = M, this.parseXml = R, this.parseTextData = _, this.resolveNameSpace = k, this.buildAttributesMap = B, this.isItStopNode = z, this.replaceEntitiesValue = G, this.readStopNodeData = Z, this.saveTextToParentTag = X, this.addChild = Y, this.ignoreAttributesFn = F(this.options.ignoreAttributes), this.entityExpansionCount = 0, this.currentExpandedLength = 0, this.options.stopNodes && this.options.stopNodes.length > 0) {
                                this.stopNodesExact = new Set, this.stopNodesWildcard = new Set;
                                for (var t_5 = 0; t_5 < this.options.stopNodes.length; t_5++) {
                                    var e_4 = this.options.stopNodes[t_5];
                                    "string" == typeof e_4 && (e_4.startsWith("*.") ? this.stopNodesWildcard.add(e_4.substring(2)) : this.stopNodesExact.add(e_4));
                                }
                            }
                        }
                        return j;
                    }());
                    function M(t) { var e = Object.keys(t); for (var n_9 = 0; n_9 < e.length; n_9++) {
                        var i_6 = e[n_9], s_6 = i_6.replace(/[.\-+*:]/g, "\\.");
                        this.lastEntities[i_6] = { regex: new RegExp("&" + s_6 + ";", "g"), val: t[i_6] };
                    } }
                    function _(t, e, n, i, s, r, o) { if (void 0 !== t && (this.options.trimValues && !i && (t = t.trim()), t.length > 0)) {
                        o || (t = this.replaceEntitiesValue(t, e, n));
                        var i_7 = this.options.tagValueProcessor(e, t, n, s, r);
                        return null == i_7 ? t : typeof i_7 != typeof t || i_7 !== t ? i_7 : this.options.trimValues || t.trim() === t ? K(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
                    } }
                    function k(t) { if (this.options.removeNSPrefix) {
                        var e_5 = t.split(":"), n_10 = "/" === t.charAt(0) ? "/" : "";
                        if ("xmlns" === e_5[0])
                            return "";
                        2 === e_5.length && (t = n_10 + e_5[1]);
                    } return t; }
                    var U = new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])([\\s\\S]*?)\\3)?", "gm");
                    function B(t, e, n) { if (!0 !== this.options.ignoreAttributes && "string" == typeof t) {
                        var i_8 = s(t, U), r_4 = i_8.length, o_3 = {};
                        for (var t_6 = 0; t_6 < r_4; t_6++) {
                            var s_7 = this.resolveNameSpace(i_8[t_6][1]);
                            if (this.ignoreAttributesFn(s_7, e))
                                continue;
                            var r_5 = i_8[t_6][4], a_3 = this.options.attributeNamePrefix + s_7;
                            if (s_7.length)
                                if (this.options.transformAttributeName && (a_3 = this.options.transformAttributeName(a_3)), "__proto__" === a_3 && (a_3 = "#__proto__"), void 0 !== r_5) {
                                    this.options.trimValues && (r_5 = r_5.trim()), r_5 = this.replaceEntitiesValue(r_5, n, e);
                                    var t_7 = this.options.attributeValueProcessor(s_7, r_5, e);
                                    o_3[a_3] = null == t_7 ? r_5 : typeof t_7 != typeof r_5 || t_7 !== r_5 ? t_7 : K(r_5, this.options.parseAttributeValue, this.options.numberParseOptions);
                                }
                                else
                                    this.options.allowBooleanAttributes && (o_3[a_3] = !0);
                        }
                        if (!Object.keys(o_3).length)
                            return;
                        if (this.options.attributesGroupName) {
                            var t_8 = {};
                            return t_8[this.options.attributesGroupName] = o_3, t_8;
                        }
                        return o_3;
                    } }
                    var R = function (t) {
                        var _a, _b;
                        t = t.replace(/\r\n?/g, "\n");
                        var e = new O("!xml");
                        var n = e, i = "", s = "";
                        this.entityExpansionCount = 0, this.currentExpandedLength = 0;
                        var r = new P(this.options.processEntities);
                        for (var o_4 = 0; o_4 < t.length; o_4++)
                            if ("<" === t[o_4])
                                if ("/" === t[o_4 + 1]) {
                                    var e_6 = W(t, ">", o_4, "Closing Tag is not closed.");
                                    var r_6 = t.substring(o_4 + 2, e_6).trim();
                                    if (this.options.removeNSPrefix) {
                                        var t_9 = r_6.indexOf(":");
                                        -1 !== t_9 && (r_6 = r_6.substr(t_9 + 1));
                                    }
                                    this.options.transformTagName && (r_6 = this.options.transformTagName(r_6)), n && (i = this.saveTextToParentTag(i, n, s));
                                    var a_4 = s.substring(s.lastIndexOf(".") + 1);
                                    if (r_6 && -1 !== this.options.unpairedTags.indexOf(r_6))
                                        throw new Error("Unpaired tag can not be used as closing tag: </".concat(r_6, ">"));
                                    var l_1 = 0;
                                    a_4 && -1 !== this.options.unpairedTags.indexOf(a_4) ? (l_1 = s.lastIndexOf(".", s.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : l_1 = s.lastIndexOf("."), s = s.substring(0, l_1), n = this.tagsNodeStack.pop(), i = "", o_4 = e_6;
                                }
                                else if ("?" === t[o_4 + 1]) {
                                    var e_7 = q(t, o_4, !1, "?>");
                                    if (!e_7)
                                        throw new Error("Pi Tag is not closed.");
                                    if (i = this.saveTextToParentTag(i, n, s), this.options.ignoreDeclaration && "?xml" === e_7.tagName || this.options.ignorePiTags)
                                        ;
                                    else {
                                        var t_10 = new O(e_7.tagName);
                                        t_10.add(this.options.textNodeName, ""), e_7.tagName !== e_7.tagExp && e_7.attrExpPresent && (t_10[":@"] = this.buildAttributesMap(e_7.tagExp, s, e_7.tagName)), this.addChild(n, t_10, s, o_4);
                                    }
                                    o_4 = e_7.closeIndex + 1;
                                }
                                else if ("!--" === t.substr(o_4 + 1, 3)) {
                                    var e_8 = W(t, "--\x3e", o_4 + 4, "Comment is not closed.");
                                    if (this.options.commentPropName) {
                                        var r_7 = t.substring(o_4 + 4, e_8 - 2);
                                        i = this.saveTextToParentTag(i, n, s), n.add(this.options.commentPropName, [(_a = {}, _a[this.options.textNodeName] = r_7, _a)]);
                                    }
                                    o_4 = e_8;
                                }
                                else if ("!D" === t.substr(o_4 + 1, 2)) {
                                    var e_9 = r.readDocType(t, o_4);
                                    this.docTypeEntities = e_9.entities, o_4 = e_9.i;
                                }
                                else if ("![" === t.substr(o_4 + 1, 2)) {
                                    var e_10 = W(t, "]]>", o_4, "CDATA is not closed.") - 2, r_8 = t.substring(o_4 + 9, e_10);
                                    i = this.saveTextToParentTag(i, n, s);
                                    var a_5 = this.parseTextData(r_8, n.tagname, s, !0, !1, !0, !0);
                                    null == a_5 && (a_5 = ""), this.options.cdataPropName ? n.add(this.options.cdataPropName, [(_b = {}, _b[this.options.textNodeName] = r_8, _b)]) : n.add(this.options.textNodeName, a_5), o_4 = e_10 + 2;
                                }
                                else {
                                    var r_9 = q(t, o_4, this.options.removeNSPrefix), a_6 = r_9.tagName;
                                    var l_2 = r_9.rawTagName;
                                    var u_1 = r_9.tagExp, h_1 = r_9.attrExpPresent, d_2 = r_9.closeIndex;
                                    if (this.options.transformTagName) {
                                        var t_11 = this.options.transformTagName(a_6);
                                        u_1 === a_6 && (u_1 = t_11), a_6 = t_11;
                                    }
                                    n && i && "!xml" !== n.tagname && (i = this.saveTextToParentTag(i, n, s, !1));
                                    var p_2 = n;
                                    p_2 && -1 !== this.options.unpairedTags.indexOf(p_2.tagname) && (n = this.tagsNodeStack.pop(), s = s.substring(0, s.lastIndexOf("."))), a_6 !== e.tagname && (s += s ? "." + a_6 : a_6);
                                    var f_1 = o_4;
                                    if (this.isItStopNode(this.stopNodesExact, this.stopNodesWildcard, s, a_6)) {
                                        var e_11 = "";
                                        if (u_1.length > 0 && u_1.lastIndexOf("/") === u_1.length - 1)
                                            "/" === a_6[a_6.length - 1] ? (a_6 = a_6.substr(0, a_6.length - 1), s = s.substr(0, s.length - 1), u_1 = a_6) : u_1 = u_1.substr(0, u_1.length - 1), o_4 = r_9.closeIndex;
                                        else if (-1 !== this.options.unpairedTags.indexOf(a_6))
                                            o_4 = r_9.closeIndex;
                                        else {
                                            var n_11 = this.readStopNodeData(t, l_2, d_2 + 1);
                                            if (!n_11)
                                                throw new Error("Unexpected end of ".concat(l_2));
                                            o_4 = n_11.i, e_11 = n_11.tagContent;
                                        }
                                        var i_9 = new O(a_6);
                                        a_6 !== u_1 && h_1 && (i_9[":@"] = this.buildAttributesMap(u_1, s, a_6)), e_11 && (e_11 = this.parseTextData(e_11, a_6, s, !0, h_1, !0, !0)), s = s.substr(0, s.lastIndexOf(".")), i_9.add(this.options.textNodeName, e_11), this.addChild(n, i_9, s, f_1);
                                    }
                                    else {
                                        if (u_1.length > 0 && u_1.lastIndexOf("/") === u_1.length - 1) {
                                            if ("/" === a_6[a_6.length - 1] ? (a_6 = a_6.substr(0, a_6.length - 1), s = s.substr(0, s.length - 1), u_1 = a_6) : u_1 = u_1.substr(0, u_1.length - 1), this.options.transformTagName) {
                                                var t_12 = this.options.transformTagName(a_6);
                                                u_1 === a_6 && (u_1 = t_12), a_6 = t_12;
                                            }
                                            var t_13 = new O(a_6);
                                            a_6 !== u_1 && h_1 && (t_13[":@"] = this.buildAttributesMap(u_1, s, a_6)), this.addChild(n, t_13, s, f_1), s = s.substr(0, s.lastIndexOf("."));
                                        }
                                        else {
                                            var t_14 = new O(a_6);
                                            this.tagsNodeStack.push(n), a_6 !== u_1 && h_1 && (t_14[":@"] = this.buildAttributesMap(u_1, s, a_6)), this.addChild(n, t_14, s, f_1), n = t_14;
                                        }
                                        i = "", o_4 = d_2;
                                    }
                                }
                            else
                                i += t[o_4];
                        return e.child;
                    };
                    function Y(t, e, n, i) { this.options.captureMetaData || (i = void 0); var s = this.options.updateTag(e.tagname, n, e[":@"]); !1 === s || ("string" == typeof s ? (e.tagname = s, t.addChild(e, i)) : t.addChild(e, i)); }
                    var G = function (t, e, n) { if (-1 === t.indexOf("&"))
                        return t; var i = this.options.processEntities; if (!i.enabled)
                        return t; if (i.allowedTags && !i.allowedTags.includes(e))
                        return t; if (i.tagFilter && !i.tagFilter(e, n))
                        return t; for (var e_12 in this.docTypeEntities) {
                        var n_12 = this.docTypeEntities[e_12], s_8 = t.match(n_12.regx);
                        if (s_8) {
                            if (this.entityExpansionCount += s_8.length, i.maxTotalExpansions && this.entityExpansionCount > i.maxTotalExpansions)
                                throw new Error("Entity expansion limit exceeded: ".concat(this.entityExpansionCount, " > ").concat(i.maxTotalExpansions));
                            var e_13 = t.length;
                            if (t = t.replace(n_12.regx, n_12.val), i.maxExpandedLength && (this.currentExpandedLength += t.length - e_13, this.currentExpandedLength > i.maxExpandedLength))
                                throw new Error("Total expanded content size exceeded: ".concat(this.currentExpandedLength, " > ").concat(i.maxExpandedLength));
                        }
                    } if (-1 === t.indexOf("&"))
                        return t; for (var e_14 in this.lastEntities) {
                        var n_13 = this.lastEntities[e_14];
                        t = t.replace(n_13.regex, n_13.val);
                    } if (-1 === t.indexOf("&"))
                        return t; if (this.options.htmlEntities)
                        for (var e_15 in this.htmlEntities) {
                            var n_14 = this.htmlEntities[e_15];
                            t = t.replace(n_14.regex, n_14.val);
                        } return t.replace(this.ampEntity.regex, this.ampEntity.val); };
                    function X(t, e, n, i) { return t && (void 0 === i && (i = 0 === e.child.length), void 0 !== (t = this.parseTextData(t, e.tagname, n, !1, !!e[":@"] && 0 !== Object.keys(e[":@"]).length, i)) && "" !== t && e.add(this.options.textNodeName, t), t = ""), t; }
                    function z(t, e, n, i) { return !(!e || !e.has(i)) || !(!t || !t.has(n)); }
                    function W(t, e, n, i) { var s = t.indexOf(e, n); if (-1 === s)
                        throw new Error(i); return s + e.length - 1; }
                    function q(t, e, n, i) {
                        if (i === void 0) { i = ">"; }
                        var s = function (t, e, n) {
                            if (n === void 0) { n = ">"; }
                            var i, s = "";
                            for (var r_10 = e; r_10 < t.length; r_10++) {
                                var e_16 = t[r_10];
                                if (i)
                                    e_16 === i && (i = "");
                                else if ('"' === e_16 || "'" === e_16)
                                    i = e_16;
                                else if (e_16 === n[0]) {
                                    if (!n[1])
                                        return { data: s, index: r_10 };
                                    if (t[r_10 + 1] === n[1])
                                        return { data: s, index: r_10 };
                                }
                                else
                                    "\t" === e_16 && (e_16 = " ");
                                s += e_16;
                            }
                        }(t, e + 1, i);
                        if (!s)
                            return;
                        var r = s.data;
                        var o = s.index, a = r.search(/\s/);
                        var l = r, u = !0;
                        -1 !== a && (l = r.substring(0, a), r = r.substring(a + 1).trimStart());
                        var h = l;
                        if (n) {
                            var t_15 = l.indexOf(":");
                            -1 !== t_15 && (l = l.substr(t_15 + 1), u = l !== s.data.substr(t_15 + 1));
                        }
                        return { tagName: l, tagExp: r, closeIndex: o, attrExpPresent: u, rawTagName: h };
                    }
                    function Z(t, e, n) { var i = n; var s = 1; for (; n < t.length; n++)
                        if ("<" === t[n])
                            if ("/" === t[n + 1]) {
                                var r_11 = W(t, ">", n, "".concat(e, " is not closed"));
                                if (t.substring(n + 2, r_11).trim() === e && (s--, 0 === s))
                                    return { tagContent: t.substring(i, n), i: r_11 };
                                n = r_11;
                            }
                            else if ("?" === t[n + 1])
                                n = W(t, "?>", n + 1, "StopNode is not closed.");
                            else if ("!--" === t.substr(n + 1, 3))
                                n = W(t, "--\x3e", n + 3, "StopNode is not closed.");
                            else if ("![" === t.substr(n + 1, 2))
                                n = W(t, "]]>", n, "StopNode is not closed.") - 2;
                            else {
                                var i_10 = q(t, n, ">");
                                i_10 && ((i_10 && i_10.tagName) === e && "/" !== i_10.tagExp[i_10.tagExp.length - 1] && s++, n = i_10.closeIndex);
                            } }
                    function K(t, e, n) {
                        if (e && "string" == typeof t) {
                            var e_17 = t.trim();
                            return "true" === e_17 || "false" !== e_17 && function (t, e) {
                                if (e === void 0) { e = {}; }
                                if (e = Object.assign({}, D, e), !t || "string" != typeof t)
                                    return t;
                                var n = t.trim();
                                if (void 0 !== e.skipLike && e.skipLike.test(n))
                                    return t;
                                if ("0" === t)
                                    return 0;
                                if (e.hex && $.test(n))
                                    return function (t) { if (parseInt)
                                        return parseInt(t, 16); if (Number.parseInt)
                                        return Number.parseInt(t, 16); if (window && window.parseInt)
                                        return window.parseInt(t, 16); throw new Error("parseInt, Number.parseInt, window.parseInt are not supported"); }(n);
                                if (n.includes("e") || n.includes("E"))
                                    return function (t, e, n) { if (!n.eNotation)
                                        return t; var i = e.match(L); if (i) {
                                        var s_9 = i[1] || "";
                                        var r_12 = -1 === i[3].indexOf("e") ? "E" : "e", o_5 = i[2], a_7 = s_9 ? t[o_5.length + 1] === r_12 : t[o_5.length] === r_12;
                                        return o_5.length > 1 && a_7 ? t : 1 !== o_5.length || !i[3].startsWith(".".concat(r_12)) && i[3][0] !== r_12 ? n.leadingZeros && !a_7 ? (e = (i[1] || "") + i[3], Number(e)) : t : Number(e);
                                    } return t; }(t, n, e);
                                {
                                    var s_10 = V.exec(n);
                                    if (s_10) {
                                        var r_13 = s_10[1] || "", o_6 = s_10[2];
                                        var a_8 = (i = s_10[3]) && -1 !== i.indexOf(".") ? ("." === (i = i.replace(/0+$/, "")) ? i = "0" : "." === i[0] ? i = "0" + i : "." === i[i.length - 1] && (i = i.substring(0, i.length - 1)), i) : i;
                                        var l_3 = r_13 ? "." === t[o_6.length + 1] : "." === t[o_6.length];
                                        if (!e.leadingZeros && (o_6.length > 1 || 1 === o_6.length && !l_3))
                                            return t;
                                        {
                                            var i_11 = Number(n), s_11 = String(i_11);
                                            if (0 === i_11)
                                                return i_11;
                                            if (-1 !== s_11.search(/[eE]/))
                                                return e.eNotation ? i_11 : t;
                                            if (-1 !== n.indexOf("."))
                                                return "0" === s_11 || s_11 === a_8 || s_11 === "".concat(r_13).concat(a_8) ? i_11 : t;
                                            var l_4 = o_6 ? a_8 : n;
                                            return o_6 ? l_4 === s_11 || r_13 + l_4 === s_11 ? i_11 : t : l_4 === s_11 || l_4 === r_13 + s_11 ? i_11 : t;
                                        }
                                    }
                                    return t;
                                } // removed by dead control flow
                                var i;
                            }(t, n);
                        }
                        return void 0 !== t ? t : "";
                    }
                    function Q(t, e, n) { var i = Number.parseInt(t, e); return i >= 0 && i <= 1114111 ? String.fromCodePoint(i) : n + t + ";"; }
                    var J = O.getMetaDataSymbol();
                    function H(t, e) { return tt(t, e); }
                    function tt(t, e, n) { var i; var s = {}; for (var r_14 = 0; r_14 < t.length; r_14++) {
                        var o_7 = t[r_14], a_9 = et(o_7);
                        var l_5 = "";
                        if (l_5 = void 0 === n ? a_9 : n + "." + a_9, a_9 === e.textNodeName)
                            void 0 === i ? i = o_7[a_9] : i += "" + o_7[a_9];
                        else {
                            if (void 0 === a_9)
                                continue;
                            if (o_7[a_9]) {
                                var t_16 = tt(o_7[a_9], e, l_5);
                                var n_15 = it(t_16, e);
                                void 0 !== o_7[J] && (t_16[J] = o_7[J]), o_7[":@"] ? nt(t_16, o_7[":@"], l_5, e) : 1 !== Object.keys(t_16).length || void 0 === t_16[e.textNodeName] || e.alwaysCreateTextNode ? 0 === Object.keys(t_16).length && (e.alwaysCreateTextNode ? t_16[e.textNodeName] = "" : t_16 = "") : t_16 = t_16[e.textNodeName], void 0 !== s[a_9] && s.hasOwnProperty(a_9) ? (Array.isArray(s[a_9]) || (s[a_9] = [s[a_9]]), s[a_9].push(t_16)) : e.isArray(a_9, l_5, n_15) ? s[a_9] = [t_16] : s[a_9] = t_16;
                            }
                        }
                    } return "string" == typeof i ? i.length > 0 && (s[e.textNodeName] = i) : void 0 !== i && (s[e.textNodeName] = i), s; }
                    function et(t) { var e = Object.keys(t); for (var t_17 = 0; t_17 < e.length; t_17++) {
                        var n_16 = e[t_17];
                        if (":@" !== n_16)
                            return n_16;
                    } }
                    function nt(t, e, n, i) { if (e) {
                        var s_12 = Object.keys(e), r_15 = s_12.length;
                        for (var o_8 = 0; o_8 < r_15; o_8++) {
                            var r_16 = s_12[o_8];
                            i.isArray(r_16, n + "." + r_16, !0, !0) ? t[r_16] = [e[r_16]] : t[r_16] = e[r_16];
                        }
                    } }
                    function it(t, e) { var n = e.textNodeName, i = Object.keys(t).length; return 0 === i || !(1 !== i || !t[n] && "boolean" != typeof t[n] && 0 !== t[n]); }
                    var st = /** @class */ (function () {
                        function st(t) {
                            this.externalEntities = {}, this.options = v(t);
                        }
                        st.prototype.parse = function (t, e) { if ("string" != typeof t && t.toString)
                            t = t.toString();
                        else if ("string" != typeof t)
                            throw new Error("XML data is accepted in String or Bytes[] form."); if (e) {
                            !0 === e && (e = {});
                            var n_17 = a(t, e);
                            if (!0 !== n_17)
                                throw Error("".concat(n_17.err.msg, ":").concat(n_17.err.line, ":").concat(n_17.err.col));
                        } var n = new j(this.options); n.addExternalEntities(this.externalEntities); var i = n.parseXml(t); return this.options.preserveOrder || void 0 === i ? i : H(i, this.options); };
                        st.prototype.addEntity = function (t, e) { if (-1 !== e.indexOf("&"))
                            throw new Error("Entity value can't have '&'"); if (-1 !== t.indexOf("&") || -1 !== t.indexOf(";"))
                            throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'"); if ("&" === e)
                            throw new Error("An entity with value '&' is not permitted"); this.externalEntities[t] = e; };
                        st.getMetaDataSymbol = function () { return O.getMetaDataSymbol(); };
                        return st;
                    }());
                    function rt(t, e) { var n = ""; return e.format && e.indentBy.length > 0 && (n = "\n"), ot(t, e, "", n); }
                    function ot(t, e, n, i) { var s = "", r = !1; for (var o_9 = 0; o_9 < t.length; o_9++) {
                        var a_10 = t[o_9], l_6 = at(a_10);
                        if (void 0 === l_6)
                            continue;
                        var u_2 = "";
                        if (u_2 = 0 === n.length ? l_6 : "".concat(n, ".").concat(l_6), l_6 === e.textNodeName) {
                            var t_18 = a_10[l_6];
                            ut(u_2, e) || (t_18 = e.tagValueProcessor(l_6, t_18), t_18 = ht(t_18, e)), r && (s += i), s += t_18, r = !1;
                            continue;
                        }
                        if (l_6 === e.cdataPropName) {
                            r && (s += i), s += "<![CDATA[".concat(a_10[l_6][0][e.textNodeName], "]]>"), r = !1;
                            continue;
                        }
                        if (l_6 === e.commentPropName) {
                            s += i + "<!--".concat(a_10[l_6][0][e.textNodeName], "-->"), r = !0;
                            continue;
                        }
                        if ("?" === l_6[0]) {
                            var t_19 = lt(a_10[":@"], e), n_18 = "?xml" === l_6 ? "" : i;
                            var o_10 = a_10[l_6][0][e.textNodeName];
                            o_10 = 0 !== o_10.length ? " " + o_10 : "", s += n_18 + "<".concat(l_6).concat(o_10).concat(t_19, "?>"), r = !0;
                            continue;
                        }
                        var h_2 = i;
                        "" !== h_2 && (h_2 += e.indentBy);
                        var d_3 = i + "<".concat(l_6).concat(lt(a_10[":@"], e)), p_3 = ot(a_10[l_6], e, u_2, h_2);
                        -1 !== e.unpairedTags.indexOf(l_6) ? e.suppressUnpairedNode ? s += d_3 + ">" : s += d_3 + "/>" : p_3 && 0 !== p_3.length || !e.suppressEmptyNode ? p_3 && p_3.endsWith(">") ? s += d_3 + ">".concat(p_3).concat(i, "</").concat(l_6, ">") : (s += d_3 + ">", p_3 && "" !== i && (p_3.includes("/>") || p_3.includes("</")) ? s += i + e.indentBy + p_3 + i : s += p_3, s += "</".concat(l_6, ">")) : s += d_3 + "/>", r = !0;
                    } return s; }
                    function at(t) { var e = Object.keys(t); for (var n_19 = 0; n_19 < e.length; n_19++) {
                        var i_12 = e[n_19];
                        if (t.hasOwnProperty(i_12) && ":@" !== i_12)
                            return i_12;
                    } }
                    function lt(t, e) { var n = ""; if (t && !e.ignoreAttributes)
                        for (var i_13 in t) {
                            if (!t.hasOwnProperty(i_13))
                                continue;
                            var s_13 = e.attributeValueProcessor(i_13, t[i_13]);
                            s_13 = ht(s_13, e), !0 === s_13 && e.suppressBooleanAttributes ? n += " ".concat(i_13.substr(e.attributeNamePrefix.length)) : n += " ".concat(i_13.substr(e.attributeNamePrefix.length), "=\"").concat(s_13, "\"");
                        } return n; }
                    function ut(t, e) { var n = (t = t.substr(0, t.length - e.textNodeName.length - 1)).substr(t.lastIndexOf(".") + 1); for (var i_14 in e.stopNodes)
                        if (e.stopNodes[i_14] === t || e.stopNodes[i_14] === "*." + n)
                            return !0; return !1; }
                    function ht(t, e) { if (t && t.length > 0 && e.processEntities)
                        for (var n_20 = 0; n_20 < e.entities.length; n_20++) {
                            var i_15 = e.entities[n_20];
                            t = t.replace(i_15.regex, i_15.val);
                        } return t; }
                    var dt = { attributeNamePrefix: "@_", attributesGroupName: !1, textNodeName: "#text", ignoreAttributes: !0, cdataPropName: !1, format: !1, indentBy: "  ", suppressEmptyNode: !1, suppressUnpairedNode: !0, suppressBooleanAttributes: !0, tagValueProcessor: function (t, e) { return e; }, attributeValueProcessor: function (t, e) { return e; }, preserveOrder: !1, commentPropName: !1, unpairedTags: [], entities: [{ regex: new RegExp("&", "g"), val: "&amp;" }, { regex: new RegExp(">", "g"), val: "&gt;" }, { regex: new RegExp("<", "g"), val: "&lt;" }, { regex: new RegExp("'", "g"), val: "&apos;" }, { regex: new RegExp('"', "g"), val: "&quot;" }], processEntities: !0, stopNodes: [], oneListGroup: !1 };
                    function pt(t) { this.options = Object.assign({}, dt, t), !0 === this.options.ignoreAttributes || this.options.attributesGroupName ? this.isAttribute = function () { return !1; } : (this.ignoreAttributesFn = F(this.options.ignoreAttributes), this.attrPrefixLen = this.options.attributeNamePrefix.length, this.isAttribute = gt), this.processTextOrObjNode = ft, this.options.format ? (this.indentate = ct, this.tagEndChar = ">\n", this.newLine = "\n") : (this.indentate = function () { return ""; }, this.tagEndChar = ">", this.newLine = ""); }
                    function ft(t, e, n, i) { var s = this.j2x(t, n + 1, i.concat(e)); return void 0 !== t[this.options.textNodeName] && 1 === Object.keys(t).length ? this.buildTextValNode(t[this.options.textNodeName], e, s.attrStr, n) : this.buildObjectNode(s.val, e, s.attrStr, n); }
                    function ct(t) { return this.options.indentBy.repeat(t); }
                    function gt(t) { return !(!t.startsWith(this.options.attributeNamePrefix) || t === this.options.textNodeName) && t.substr(this.attrPrefixLen); }
                    pt.prototype.build = function (t) {
                        var _a;
                        return this.options.preserveOrder ? rt(t, this.options) : (Array.isArray(t) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1 && (t = (_a = {}, _a[this.options.arrayNodeName] = t, _a)), this.j2x(t, 0, []).val);
                    }, pt.prototype.j2x = function (t, e, n) { var i = "", s = ""; var r = n.join("."); for (var o_11 in t)
                        if (Object.prototype.hasOwnProperty.call(t, o_11))
                            if (void 0 === t[o_11])
                                this.isAttribute(o_11) && (s += "");
                            else if (null === t[o_11])
                                this.isAttribute(o_11) || o_11 === this.options.cdataPropName ? s += "" : "?" === o_11[0] ? s += this.indentate(e) + "<" + o_11 + "?" + this.tagEndChar : s += this.indentate(e) + "<" + o_11 + "/" + this.tagEndChar;
                            else if (t[o_11] instanceof Date)
                                s += this.buildTextValNode(t[o_11], o_11, "", e);
                            else if ("object" != typeof t[o_11]) {
                                var n_21 = this.isAttribute(o_11);
                                if (n_21 && !this.ignoreAttributesFn(n_21, r))
                                    i += this.buildAttrPairStr(n_21, "" + t[o_11]);
                                else if (!n_21)
                                    if (o_11 === this.options.textNodeName) {
                                        var e_18 = this.options.tagValueProcessor(o_11, "" + t[o_11]);
                                        s += this.replaceEntitiesValue(e_18);
                                    }
                                    else
                                        s += this.buildTextValNode(t[o_11], o_11, "", e);
                            }
                            else if (Array.isArray(t[o_11])) {
                                var i_16 = t[o_11].length;
                                var r_17 = "", a_11 = "";
                                for (var l_7 = 0; l_7 < i_16; l_7++) {
                                    var i_17 = t[o_11][l_7];
                                    if (void 0 === i_17)
                                        ;
                                    else if (null === i_17)
                                        "?" === o_11[0] ? s += this.indentate(e) + "<" + o_11 + "?" + this.tagEndChar : s += this.indentate(e) + "<" + o_11 + "/" + this.tagEndChar;
                                    else if ("object" == typeof i_17)
                                        if (this.options.oneListGroup) {
                                            var t_20 = this.j2x(i_17, e + 1, n.concat(o_11));
                                            r_17 += t_20.val, this.options.attributesGroupName && i_17.hasOwnProperty(this.options.attributesGroupName) && (a_11 += t_20.attrStr);
                                        }
                                        else
                                            r_17 += this.processTextOrObjNode(i_17, o_11, e, n);
                                    else if (this.options.oneListGroup) {
                                        var t_21 = this.options.tagValueProcessor(o_11, i_17);
                                        t_21 = this.replaceEntitiesValue(t_21), r_17 += t_21;
                                    }
                                    else
                                        r_17 += this.buildTextValNode(i_17, o_11, "", e);
                                }
                                this.options.oneListGroup && (r_17 = this.buildObjectNode(r_17, o_11, a_11, e)), s += r_17;
                            }
                            else if (this.options.attributesGroupName && o_11 === this.options.attributesGroupName) {
                                var e_19 = Object.keys(t[o_11]), n_22 = e_19.length;
                                for (var s_14 = 0; s_14 < n_22; s_14++)
                                    i += this.buildAttrPairStr(e_19[s_14], "" + t[o_11][e_19[s_14]]);
                            }
                            else
                                s += this.processTextOrObjNode(t[o_11], o_11, e, n); return { attrStr: i, val: s }; }, pt.prototype.buildAttrPairStr = function (t, e) { return e = this.options.attributeValueProcessor(t, "" + e), e = this.replaceEntitiesValue(e), this.options.suppressBooleanAttributes && "true" === e ? " " + t : " " + t + '="' + e + '"'; }, pt.prototype.buildObjectNode = function (t, e, n, i) { if ("" === t)
                        return "?" === e[0] ? this.indentate(i) + "<" + e + n + "?" + this.tagEndChar : this.indentate(i) + "<" + e + n + this.closeTag(e) + this.tagEndChar; {
                        var s_15 = "</" + e + this.tagEndChar, r_18 = "";
                        return "?" === e[0] && (r_18 = "?", s_15 = ""), !n && "" !== n || -1 !== t.indexOf("<") ? !1 !== this.options.commentPropName && e === this.options.commentPropName && 0 === r_18.length ? this.indentate(i) + "<!--".concat(t, "-->") + this.newLine : this.indentate(i) + "<" + e + n + r_18 + this.tagEndChar + t + this.indentate(i) + s_15 : this.indentate(i) + "<" + e + n + r_18 + ">" + t + s_15;
                    } }, pt.prototype.closeTag = function (t) { var e = ""; return -1 !== this.options.unpairedTags.indexOf(t) ? this.options.suppressUnpairedNode || (e = "/") : e = this.options.suppressEmptyNode ? "/" : "></".concat(t), e; }, pt.prototype.buildTextValNode = function (t, e, n, i) { if (!1 !== this.options.cdataPropName && e === this.options.cdataPropName)
                        return this.indentate(i) + "<![CDATA[".concat(t, "]]>") + this.newLine; if (!1 !== this.options.commentPropName && e === this.options.commentPropName)
                        return this.indentate(i) + "<!--".concat(t, "-->") + this.newLine; if ("?" === e[0])
                        return this.indentate(i) + "<" + e + n + "?" + this.tagEndChar; {
                        var s_16 = this.options.tagValueProcessor(e, t);
                        return s_16 = this.replaceEntitiesValue(s_16), "" === s_16 ? this.indentate(i) + "<" + e + n + this.closeTag(e) + this.tagEndChar : this.indentate(i) + "<" + e + n + ">" + s_16 + "</" + e + this.tagEndChar;
                    } }, pt.prototype.replaceEntitiesValue = function (t) { if (t && t.length > 0 && this.options.processEntities)
                        for (var e_20 = 0; e_20 < this.options.entities.length; e_20++) {
                            var n_23 = this.options.entities[e_20];
                            t = t.replace(n_23.regex, n_23.val);
                        } return t; };
                    var xt = { validate: a };
                    module.exports = e;
                })();
                /***/ 
            }),
            /***/ 956: 
            /***/ (function (module, __unused_webpack_exports, __webpack_require__) {
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
        });
        /************************************************************************/
        /******/ // The module cache
        /******/ var __webpack_module_cache__ = {};
        /******/
        /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ // Check if module is in cache
            /******/ var cachedModule = __webpack_module_cache__[moduleId];
            /******/ if (cachedModule !== undefined) {
                /******/ return cachedModule.exports;
                /******/ }
            /******/ // Create a new module (and put it into the cache)
            /******/ var module = __webpack_module_cache__[moduleId] = {
                /******/ // no module.id needed
                /******/ // no module.loaded needed
                /******/ exports: {}
                /******/ 
            };
            /******/
            /******/ // Execute the module function
            /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
            /******/
            /******/ // Return the exports of the module
            /******/ return module.exports;
            /******/ 
        }
        /******/
        /************************************************************************/
        /******/
        /******/ // startup
        /******/ // Load entry module and return exports
        /******/ // This entry module used 'module' so it can't be inlined
        /******/ var __webpack_exports__ = __webpack_require__(956);
        /******/
        /******/ return __webpack_exports__;
        /******/ 
    })();
});

})();