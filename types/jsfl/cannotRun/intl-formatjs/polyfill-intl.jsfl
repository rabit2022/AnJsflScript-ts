"use strict";

var _excluded = ["dateFormat", "timeFormat", "dateTimeFormat", "formats", "intervalFormats"];
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function webpackUniversalModuleDefinition(root, factory) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) ? module.exports = factory() : "function" == typeof define && define.amd ? define([], factory) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? exports["polyfill-intl"] = factory() : root["polyfill-intl"] = factory();
}(void 0, function () {
  return function () {
    "use strict";

    var inexact,
      quadrant,
      EXP_LIMIT = 9e15,
      NUMERALS = "0123456789abcdef",
      LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
      PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
      DEFAULTS = {
        precision: 20,
        rounding: 4,
        modulo: 1,
        toExpNeg: -7,
        toExpPos: 21,
        minE: -EXP_LIMIT,
        maxE: EXP_LIMIT,
        crypto: !1
      },
      external = !0,
      invalidArgument = "[DecimalError] Invalid argument: ",
      tag = "[object Decimal]",
      mathfloor = Math.floor,
      mathpow = Math.pow,
      isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
      isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
      isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
      isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      BASE = 1e7,
      LN10_PRECISION = LN10.length - 1,
      PI_PRECISION = PI.length - 1,
      P = {
        toStringTag: tag
      };
    function digitsToString(d) {
      var i,
        k,
        ws,
        indexOfLastWord = d.length - 1,
        str = "",
        w = d[0];
      if (indexOfLastWord > 0) {
        for (str += w, i = 1; i < indexOfLastWord; i++) (k = 7 - (ws = d[i] + "").length) && (str += getZeroString(k)), str += ws;
        (k = 7 - (ws = (w = d[i]) + "").length) && (str += getZeroString(k));
      } else if (0 === w) return "0";
      for (; w % 10 == 0;) w /= 10;
      return str + w;
    }
    function checkInt32(i, min, max) {
      if (i !== ~~i || i < min || i > max) throw Error(invalidArgument + i);
    }
    function checkRoundingDigits(d, i, rm, repeating) {
      var di, k, r, rd;
      for (k = d[0]; k >= 10; k /= 10) --i;
      return --i < 0 ? (i += 7, di = 0) : (di = Math.ceil((i + 1) / 7), i %= 7), k = mathpow(10, 7 - i), rd = d[di] % k | 0, null == repeating ? i < 3 ? (0 == i ? rd = rd / 100 | 0 : 1 == i && (rd = rd / 10 | 0), r = rm < 4 && 99999 == rd || rm > 3 && 49999 == rd || 5e4 == rd || 0 == rd) : r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k / 2 || 0 == rd) && !(d[di + 1] / k / 100 | 0) : i < 4 ? (0 == i ? rd = rd / 1e3 | 0 : 1 == i ? rd = rd / 100 | 0 : 2 == i && (rd = rd / 10 | 0), r = (repeating || rm < 4) && 9999 == rd || !repeating && rm > 3 && 4999 == rd) : r = ((repeating || rm < 4) && rd + 1 == k || !repeating && rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 1e3 | 0) == mathpow(10, i - 3) - 1, r;
    }
    function convertBase(str, baseIn, baseOut) {
      for (var j, arrL, arr = [0], i = 0, strL = str.length; i < strL;) {
        for (arrL = arr.length; arrL--;) arr[arrL] *= baseIn;
        for (arr[0] += NUMERALS.indexOf(str.charAt(i++)), j = 0; j < arr.length; j++) arr[j] > baseOut - 1 && (void 0 === arr[j + 1] && (arr[j + 1] = 0), arr[j + 1] += arr[j] / baseOut | 0, arr[j] %= baseOut);
      }
      return arr.reverse();
    }
    P.absoluteValue = P.abs = function () {
      var x = new this.constructor(this);
      return x.s < 0 && (x.s = 1), finalise(x);
    }, P.ceil = function () {
      return finalise(new this.constructor(this), this.e + 1, 2);
    }, P.clampedTo = P.clamp = function (min, max) {
      var x = this,
        Ctor = x.constructor;
      if (min = new Ctor(min), max = new Ctor(max), !min.s || !max.s) return new Ctor(NaN);
      if (min.gt(max)) throw Error(invalidArgument + max);
      return x.cmp(min) < 0 ? min : x.cmp(max) > 0 ? max : new Ctor(x);
    }, P.comparedTo = P.cmp = function (y) {
      var i,
        j,
        xdL,
        ydL,
        x = this,
        xd = x.d,
        yd = (y = new x.constructor(y)).d,
        xs = x.s,
        ys = y.s;
      if (!xd || !yd) return xs && ys ? xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1 : NaN;
      if (!xd[0] || !yd[0]) return xd[0] ? xs : yd[0] ? -ys : 0;
      if (xs !== ys) return xs;
      if (x.e !== y.e) return x.e > y.e ^ xs < 0 ? 1 : -1;
      for (i = 0, j = (xdL = xd.length) < (ydL = yd.length) ? xdL : ydL; i < j; ++i) if (xd[i] !== yd[i]) return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
      return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
    }, P.cosine = P.cos = function () {
      var pr,
        rm,
        x = this,
        Ctor = x.constructor;
      return x.d ? x.d[0] ? (pr = Ctor.precision, rm = Ctor.rounding, Ctor.precision = pr + Math.max(x.e, x.sd()) + 7, Ctor.rounding = 1, x = function cosine(Ctor, x) {
        var k, len, y;
        if (x.isZero()) return x;
        len = x.d.length, len < 32 ? y = (1 / tinyPow(4, k = Math.ceil(len / 3))).toString() : (k = 16, y = "2.3283064365386962890625e-10");
        Ctor.precision += k, x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
        for (var i = k; i--;) {
          var cos2x = x.times(x);
          x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
        }
        return Ctor.precision -= k, x;
      }(Ctor, toLessThanHalfPi(Ctor, x)), Ctor.precision = pr, Ctor.rounding = rm, finalise(2 == quadrant || 3 == quadrant ? x.neg() : x, pr, rm, !0)) : new Ctor(1) : new Ctor(NaN);
    }, P.cubeRoot = P.cbrt = function () {
      var e,
        m,
        n,
        r,
        rep,
        s,
        sd,
        t,
        t3,
        t3plusx,
        x = this,
        Ctor = x.constructor;
      if (!x.isFinite() || x.isZero()) return new Ctor(x);
      for (external = !1, (s = x.s * mathpow(x.s * x, 1 / 3)) && Math.abs(s) != 1 / 0 ? r = new Ctor(s.toString()) : (n = digitsToString(x.d), (s = ((e = x.e) - n.length + 1) % 3) && (n += 1 == s || -2 == s ? "0" : "00"), s = mathpow(n, 1 / 3), e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), (r = new Ctor(n = s == 1 / 0 ? "5e" + e : (n = s.toExponential()).slice(0, n.indexOf("e") + 1) + e)).s = x.s), sd = (e = Ctor.precision) + 3;;) if (t3plusx = (t3 = (t = r).times(t).times(t)).plus(x), r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1), digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
        if ("9999" != (n = n.slice(sd - 3, sd + 1)) && (rep || "4999" != n)) {
          +n && (+n.slice(1) || "5" != n.charAt(0)) || (finalise(r, e + 1, 1), m = !r.times(r).times(r).eq(x));
          break;
        }
        if (!rep && (finalise(t, e + 1, 0), t.times(t).times(t).eq(x))) {
          r = t;
          break;
        }
        sd += 4, rep = 1;
      }
      return external = !0, finalise(r, e, Ctor.rounding, m);
    }, P.decimalPlaces = P.dp = function () {
      var w,
        d = this.d,
        n = NaN;
      if (d) {
        if (n = 7 * ((w = d.length - 1) - mathfloor(this.e / 7)), w = d[w]) for (; w % 10 == 0; w /= 10) n--;
        n < 0 && (n = 0);
      }
      return n;
    }, P.dividedBy = P.div = function (y) {
      return divide(this, new this.constructor(y));
    }, P.dividedToIntegerBy = P.divToInt = function (y) {
      var Ctor = this.constructor;
      return finalise(divide(this, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
    }, P.equals = P.eq = function (y) {
      return 0 === this.cmp(y);
    }, P.floor = function () {
      return finalise(new this.constructor(this), this.e + 1, 3);
    }, P.greaterThan = P.gt = function (y) {
      return this.cmp(y) > 0;
    }, P.greaterThanOrEqualTo = P.gte = function (y) {
      var k = this.cmp(y);
      return 1 == k || 0 === k;
    }, P.hyperbolicCosine = P.cosh = function () {
      var k,
        n,
        pr,
        rm,
        len,
        x = this,
        Ctor = x.constructor,
        one = new Ctor(1);
      if (!x.isFinite()) return new Ctor(x.s ? 1 / 0 : NaN);
      if (x.isZero()) return one;
      pr = Ctor.precision, rm = Ctor.rounding, Ctor.precision = pr + Math.max(x.e, x.sd()) + 4, Ctor.rounding = 1, (len = x.d.length) < 32 ? n = (1 / tinyPow(4, k = Math.ceil(len / 3))).toString() : (k = 16, n = "2.3283064365386962890625e-10"), x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), !0);
      for (var cosh2_x, i = k, d8 = new Ctor(8); i--;) cosh2_x = x.times(x), x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
      return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, !0);
    }, P.hyperbolicSine = P.sinh = function () {
      var k,
        pr,
        rm,
        len,
        x = this,
        Ctor = x.constructor;
      if (!x.isFinite() || x.isZero()) return new Ctor(x);
      if (pr = Ctor.precision, rm = Ctor.rounding, Ctor.precision = pr + Math.max(x.e, x.sd()) + 4, Ctor.rounding = 1, (len = x.d.length) < 3) x = taylorSeries(Ctor, 2, x, x, !0);else {
        k = (k = 1.4 * Math.sqrt(len)) > 16 ? 16 : 0 | k, x = taylorSeries(Ctor, 2, x = x.times(1 / tinyPow(5, k)), x, !0);
        for (var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20); k--;) sinh2_x = x.times(x), x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
      }
      return Ctor.precision = pr, Ctor.rounding = rm, finalise(x, pr, rm, !0);
    }, P.hyperbolicTangent = P.tanh = function () {
      var pr,
        rm,
        x = this,
        Ctor = x.constructor;
      return x.isFinite() ? x.isZero() ? new Ctor(x) : (pr = Ctor.precision, rm = Ctor.rounding, Ctor.precision = pr + 7, Ctor.rounding = 1, divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm)) : new Ctor(x.s);
    }, P.inverseCosine = P.acos = function () {
      var x = this,
        Ctor = x.constructor,
        k = x.abs().cmp(1),
        pr = Ctor.precision,
        rm = Ctor.rounding;
      return -1 !== k ? 0 === k ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN) : x.isZero() ? getPi(Ctor, pr + 4, rm).times(.5) : (Ctor.precision = pr + 6, Ctor.rounding = 1, x = new Ctor(1).minus(x).div(x.plus(1)).sqrt().atan(), Ctor.precision = pr, Ctor.rounding = rm, x.times(2));
    }, P.inverseHyperbolicCosine = P.acosh = function () {
      var pr,
        rm,
        x = this,
        Ctor = x.constructor;
      return x.lte(1) ? new Ctor(x.eq(1) ? 0 : NaN) : x.isFinite() ? (pr = Ctor.precision, rm = Ctor.rounding, Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4, Ctor.rounding = 1, external = !1, x = x.times(x).minus(1).sqrt().plus(x), external = !0, Ctor.precision = pr, Ctor.rounding = rm, x.ln()) : new Ctor(x);
    }, P.inverseHyperbolicSine = P.asinh = function () {
      var pr,
        rm,
        x = this,
        Ctor = x.constructor;
      return !x.isFinite() || x.isZero() ? new Ctor(x) : (pr = Ctor.precision, rm = Ctor.rounding, Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6, Ctor.rounding = 1, external = !1, x = x.times(x).plus(1).sqrt().plus(x), external = !0, Ctor.precision = pr, Ctor.rounding = rm, x.ln());
    }, P.inverseHyperbolicTangent = P.atanh = function () {
      var pr,
        rm,
        wpr,
        xsd,
        x = this,
        Ctor = x.constructor;
      return x.isFinite() ? x.e >= 0 ? new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN) : (pr = Ctor.precision, rm = Ctor.rounding, xsd = x.sd(), Math.max(xsd, pr) < 2 * -x.e - 1 ? finalise(new Ctor(x), pr, rm, !0) : (Ctor.precision = wpr = xsd - x.e, x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1), Ctor.precision = pr + 4, Ctor.rounding = 1, x = x.ln(), Ctor.precision = pr, Ctor.rounding = rm, x.times(.5))) : new Ctor(NaN);
    }, P.inverseSine = P.asin = function () {
      var halfPi,
        k,
        pr,
        rm,
        x = this,
        Ctor = x.constructor;
      return x.isZero() ? new Ctor(x) : (k = x.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding, -1 !== k ? 0 === k ? ((halfPi = getPi(Ctor, pr + 4, rm).times(.5)).s = x.s, halfPi) : new Ctor(NaN) : (Ctor.precision = pr + 6, Ctor.rounding = 1, x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan(), Ctor.precision = pr, Ctor.rounding = rm, x.times(2)));
    }, P.inverseTangent = P.atan = function () {
      var i,
        j,
        k,
        n,
        px,
        t,
        r,
        wpr,
        x2,
        x = this,
        Ctor = x.constructor,
        pr = Ctor.precision,
        rm = Ctor.rounding;
      if (x.isFinite()) {
        if (x.isZero()) return new Ctor(x);
        if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) return (r = getPi(Ctor, pr + 4, rm).times(.25)).s = x.s, r;
      } else {
        if (!x.s) return new Ctor(NaN);
        if (pr + 4 <= PI_PRECISION) return (r = getPi(Ctor, pr + 4, rm).times(.5)).s = x.s, r;
      }
      for (Ctor.precision = wpr = pr + 10, Ctor.rounding = 1, i = k = Math.min(28, wpr / 7 + 2 | 0); i; --i) x = x.div(x.times(x).plus(1).sqrt().plus(1));
      for (external = !1, j = Math.ceil(wpr / 7), n = 1, x2 = x.times(x), r = new Ctor(x), px = x; -1 !== i;) if (px = px.times(x2), t = r.minus(px.div(n += 2)), px = px.times(x2), void 0 !== (r = t.plus(px.div(n += 2))).d[j]) for (i = j; r.d[i] === t.d[i] && i--;);
      return k && (r = r.times(2 << k - 1)), external = !0, finalise(r, Ctor.precision = pr, Ctor.rounding = rm, !0);
    }, P.isFinite = function () {
      return !!this.d;
    }, P.isInteger = P.isInt = function () {
      return !!this.d && mathfloor(this.e / 7) > this.d.length - 2;
    }, P.isNaN = function () {
      return !this.s;
    }, P.isNegative = P.isNeg = function () {
      return this.s < 0;
    }, P.isPositive = P.isPos = function () {
      return this.s > 0;
    }, P.isZero = function () {
      return !!this.d && 0 === this.d[0];
    }, P.lessThan = P.lt = function (y) {
      return this.cmp(y) < 0;
    }, P.lessThanOrEqualTo = P.lte = function (y) {
      return this.cmp(y) < 1;
    }, P.logarithm = P.log = function (base) {
      var isBase10,
        d,
        denominator,
        k,
        inf,
        num,
        sd,
        r,
        Ctor = this.constructor,
        pr = Ctor.precision,
        rm = Ctor.rounding;
      if (null == base) base = new Ctor(10), isBase10 = !0;else {
        if (d = (base = new Ctor(base)).d, base.s < 0 || !d || !d[0] || base.eq(1)) return new Ctor(NaN);
        isBase10 = base.eq(10);
      }
      if (d = this.d, this.s < 0 || !d || !d[0] || this.eq(1)) return new Ctor(d && !d[0] ? -1 / 0 : 1 != this.s ? NaN : d ? 0 : 1 / 0);
      if (isBase10) if (d.length > 1) inf = !0;else {
        for (k = d[0]; k % 10 == 0;) k /= 10;
        inf = 1 !== k;
      }
      if (external = !1, num = naturalLogarithm(this, sd = pr + 5), denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd), checkRoundingDigits((r = divide(num, denominator, sd, 1)).d, k = pr, rm)) do {
        if (num = naturalLogarithm(this, sd += 10), denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd), r = divide(num, denominator, sd, 1), !inf) {
          +digitsToString(r.d).slice(k + 1, k + 15) + 1 == 1e14 && (r = finalise(r, pr + 1, 0));
          break;
        }
      } while (checkRoundingDigits(r.d, k += 10, rm));
      return external = !0, finalise(r, pr, rm);
    }, P.minus = P.sub = function (y) {
      var d,
        e,
        i,
        j,
        k,
        len,
        pr,
        rm,
        xd,
        xe,
        xLTy,
        yd,
        x = this,
        Ctor = x.constructor;
      if (y = new Ctor(y), !x.d || !y.d) return x.s && y.s ? x.d ? y.s = -y.s : y = new Ctor(y.d || x.s !== y.s ? x : NaN) : y = new Ctor(NaN), y;
      if (x.s != y.s) return y.s = -y.s, x.plus(y);
      if (xd = x.d, yd = y.d, pr = Ctor.precision, rm = Ctor.rounding, !xd[0] || !yd[0]) {
        if (yd[0]) y.s = -y.s;else {
          if (!xd[0]) return new Ctor(3 === rm ? -0 : 0);
          y = new Ctor(x);
        }
        return external ? finalise(y, pr, rm) : y;
      }
      if (e = mathfloor(y.e / 7), xe = mathfloor(x.e / 7), xd = xd.slice(), k = xe - e) {
        for ((xLTy = k < 0) ? (d = xd, k = -k, len = yd.length) : (d = yd, e = xe, len = xd.length), k > (i = Math.max(Math.ceil(pr / 7), len) + 2) && (k = i, d.length = 1), d.reverse(), i = k; i--;) d.push(0);
        d.reverse();
      } else {
        for ((xLTy = (i = xd.length) < (len = yd.length)) && (len = i), i = 0; i < len; i++) if (xd[i] != yd[i]) {
          xLTy = xd[i] < yd[i];
          break;
        }
        k = 0;
      }
      for (xLTy && (d = xd, xd = yd, yd = d, y.s = -y.s), len = xd.length, i = yd.length - len; i > 0; --i) xd[len++] = 0;
      for (i = yd.length; i > k;) {
        if (xd[--i] < yd[i]) {
          for (j = i; j && 0 === xd[--j];) xd[j] = BASE - 1;
          --xd[j], xd[i] += BASE;
        }
        xd[i] -= yd[i];
      }
      for (; 0 === xd[--len];) xd.pop();
      for (; 0 === xd[0]; xd.shift()) --e;
      return xd[0] ? (y.d = xd, y.e = getBase10Exponent(xd, e), external ? finalise(y, pr, rm) : y) : new Ctor(3 === rm ? -0 : 0);
    }, P.modulo = P.mod = function (y) {
      var q,
        x = this,
        Ctor = x.constructor;
      return y = new Ctor(y), !x.d || !y.s || y.d && !y.d[0] ? new Ctor(NaN) : !y.d || x.d && !x.d[0] ? finalise(new Ctor(x), Ctor.precision, Ctor.rounding) : (external = !1, 9 == Ctor.modulo ? (q = divide(x, y.abs(), 0, 3, 1)).s *= y.s : q = divide(x, y, 0, Ctor.modulo, 1), q = q.times(y), external = !0, x.minus(q));
    }, P.naturalExponential = P.exp = function () {
      return naturalExponential(this);
    }, P.naturalLogarithm = P.ln = function () {
      return naturalLogarithm(this);
    }, P.negated = P.neg = function () {
      var x = new this.constructor(this);
      return x.s = -x.s, finalise(x);
    }, P.plus = P.add = function (y) {
      var carry,
        d,
        e,
        i,
        k,
        len,
        pr,
        rm,
        xd,
        yd,
        x = this,
        Ctor = x.constructor;
      if (y = new Ctor(y), !x.d || !y.d) return x.s && y.s ? x.d || (y = new Ctor(y.d || x.s === y.s ? x : NaN)) : y = new Ctor(NaN), y;
      if (x.s != y.s) return y.s = -y.s, x.minus(y);
      if (xd = x.d, yd = y.d, pr = Ctor.precision, rm = Ctor.rounding, !xd[0] || !yd[0]) return yd[0] || (y = new Ctor(x)), external ? finalise(y, pr, rm) : y;
      if (k = mathfloor(x.e / 7), e = mathfloor(y.e / 7), xd = xd.slice(), i = k - e) {
        for (i < 0 ? (d = xd, i = -i, len = yd.length) : (d = yd, e = k, len = xd.length), i > (len = (k = Math.ceil(pr / 7)) > len ? k + 1 : len + 1) && (i = len, d.length = 1), d.reverse(); i--;) d.push(0);
        d.reverse();
      }
      for ((len = xd.length) - (i = yd.length) < 0 && (i = len, d = yd, yd = xd, xd = d), carry = 0; i;) carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0, xd[i] %= BASE;
      for (carry && (xd.unshift(carry), ++e), len = xd.length; 0 == xd[--len];) xd.pop();
      return y.d = xd, y.e = getBase10Exponent(xd, e), external ? finalise(y, pr, rm) : y;
    }, P.precision = P.sd = function (z) {
      var k,
        x = this;
      if (void 0 !== z && z !== !!z && 1 !== z && 0 !== z) throw Error(invalidArgument + z);
      return x.d ? (k = getPrecision(x.d), z && x.e + 1 > k && (k = x.e + 1)) : k = NaN, k;
    }, P.round = function () {
      var x = this,
        Ctor = x.constructor;
      return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
    }, P.sine = P.sin = function () {
      var pr,
        rm,
        x = this,
        Ctor = x.constructor;
      return x.isFinite() ? x.isZero() ? new Ctor(x) : (pr = Ctor.precision, rm = Ctor.rounding, Ctor.precision = pr + Math.max(x.e, x.sd()) + 7, Ctor.rounding = 1, x = function sine(Ctor, x) {
        var k,
          len = x.d.length;
        if (len < 3) return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
        k = (k = 1.4 * Math.sqrt(len)) > 16 ? 16 : 0 | k, x = x.times(1 / tinyPow(5, k)), x = taylorSeries(Ctor, 2, x, x);
        for (var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20); k--;) sin2_x = x.times(x), x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
        return x;
      }(Ctor, toLessThanHalfPi(Ctor, x)), Ctor.precision = pr, Ctor.rounding = rm, finalise(quadrant > 2 ? x.neg() : x, pr, rm, !0)) : new Ctor(NaN);
    }, P.squareRoot = P.sqrt = function () {
      var m,
        n,
        sd,
        r,
        rep,
        t,
        x = this,
        d = x.d,
        e = x.e,
        s = x.s,
        Ctor = x.constructor;
      if (1 !== s || !d || !d[0]) return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
      for (external = !1, 0 == (s = Math.sqrt(+x)) || s == 1 / 0 ? (((n = digitsToString(d)).length + e) % 2 == 0 && (n += "0"), s = Math.sqrt(n), e = mathfloor((e + 1) / 2) - (e < 0 || e % 2), r = new Ctor(n = s == 1 / 0 ? "5e" + e : (n = s.toExponential()).slice(0, n.indexOf("e") + 1) + e)) : r = new Ctor(s.toString()), sd = (e = Ctor.precision) + 3;;) if (r = (t = r).plus(divide(x, t, sd + 2, 1)).times(.5), digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
        if ("9999" != (n = n.slice(sd - 3, sd + 1)) && (rep || "4999" != n)) {
          +n && (+n.slice(1) || "5" != n.charAt(0)) || (finalise(r, e + 1, 1), m = !r.times(r).eq(x));
          break;
        }
        if (!rep && (finalise(t, e + 1, 0), t.times(t).eq(x))) {
          r = t;
          break;
        }
        sd += 4, rep = 1;
      }
      return external = !0, finalise(r, e, Ctor.rounding, m);
    }, P.tangent = P.tan = function () {
      var pr,
        rm,
        x = this,
        Ctor = x.constructor;
      return x.isFinite() ? x.isZero() ? new Ctor(x) : (pr = Ctor.precision, rm = Ctor.rounding, Ctor.precision = pr + 10, Ctor.rounding = 1, (x = x.sin()).s = 1, x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0), Ctor.precision = pr, Ctor.rounding = rm, finalise(2 == quadrant || 4 == quadrant ? x.neg() : x, pr, rm, !0)) : new Ctor(NaN);
    }, P.times = P.mul = function (y) {
      var carry,
        e,
        i,
        k,
        r,
        rL,
        t,
        xdL,
        ydL,
        x = this,
        Ctor = x.constructor,
        xd = x.d,
        yd = (y = new Ctor(y)).d;
      if (y.s *= x.s, !(xd && xd[0] && yd && yd[0])) return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : xd && yd ? 0 * y.s : y.s / 0);
      for (e = mathfloor(x.e / 7) + mathfloor(y.e / 7), (xdL = xd.length) < (ydL = yd.length) && (r = xd, xd = yd, yd = r, rL = xdL, xdL = ydL, ydL = rL), r = [], i = rL = xdL + ydL; i--;) r.push(0);
      for (i = ydL; --i >= 0;) {
        for (carry = 0, k = xdL + i; k > i;) t = r[k] + yd[i] * xd[k - i - 1] + carry, r[k--] = t % BASE | 0, carry = t / BASE | 0;
        r[k] = (r[k] + carry) % BASE | 0;
      }
      for (; !r[--rL];) r.pop();
      return carry ? ++e : r.shift(), y.d = r, y.e = getBase10Exponent(r, e), external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
    }, P.toBinary = function (sd, rm) {
      return toStringBinary(this, 2, sd, rm);
    }, P.toDecimalPlaces = P.toDP = function (dp, rm) {
      var x = this,
        Ctor = x.constructor;
      return x = new Ctor(x), void 0 === dp ? x : (checkInt32(dp, 0, 1e9), void 0 === rm ? rm = Ctor.rounding : checkInt32(rm, 0, 8), finalise(x, dp + x.e + 1, rm));
    }, P.toExponential = function (dp, rm) {
      var str,
        x = this,
        Ctor = x.constructor;
      return void 0 === dp ? str = finiteToString(x, !0) : (checkInt32(dp, 0, 1e9), void 0 === rm ? rm = Ctor.rounding : checkInt32(rm, 0, 8), str = finiteToString(x = finalise(new Ctor(x), dp + 1, rm), !0, dp + 1)), x.isNeg() && !x.isZero() ? "-" + str : str;
    }, P.toFixed = function (dp, rm) {
      var str,
        y,
        x = this,
        Ctor = x.constructor;
      return void 0 === dp ? str = finiteToString(x) : (checkInt32(dp, 0, 1e9), void 0 === rm ? rm = Ctor.rounding : checkInt32(rm, 0, 8), str = finiteToString(y = finalise(new Ctor(x), dp + x.e + 1, rm), !1, dp + y.e + 1)), x.isNeg() && !x.isZero() ? "-" + str : str;
    }, P.toFraction = function (maxD) {
      var d,
        d0,
        d1,
        d2,
        e,
        k,
        n,
        n0,
        n1,
        pr,
        q,
        r,
        x = this,
        xd = x.d,
        Ctor = x.constructor;
      if (!xd) return new Ctor(x);
      if (n1 = d0 = new Ctor(1), d1 = n0 = new Ctor(0), k = (e = (d = new Ctor(d1)).e = getPrecision(xd) - x.e - 1) % 7, d.d[0] = mathpow(10, k < 0 ? 7 + k : k), null == maxD) maxD = e > 0 ? d : n1;else {
        if (!(n = new Ctor(maxD)).isInt() || n.lt(n1)) throw Error(invalidArgument + n);
        maxD = n.gt(d) ? e > 0 ? d : n1 : n;
      }
      for (external = !1, n = new Ctor(digitsToString(xd)), pr = Ctor.precision, Ctor.precision = e = 7 * xd.length * 2; q = divide(n, d, 0, 1, 1), 1 != (d2 = d0.plus(q.times(d1))).cmp(maxD);) d0 = d1, d1 = d2, d2 = n1, n1 = n0.plus(q.times(d2)), n0 = d2, d2 = d, d = n.minus(q.times(d2)), n = d2;
      return d2 = divide(maxD.minus(d0), d1, 0, 1, 1), n0 = n0.plus(d2.times(n1)), d0 = d0.plus(d2.times(d1)), n0.s = n1.s = x.s, r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0], Ctor.precision = pr, external = !0, r;
    }, P.toHexadecimal = P.toHex = function (sd, rm) {
      return toStringBinary(this, 16, sd, rm);
    }, P.toNearest = function (y, rm) {
      var x = this,
        Ctor = x.constructor;
      if (x = new Ctor(x), null == y) {
        if (!x.d) return x;
        y = new Ctor(1), rm = Ctor.rounding;
      } else {
        if (y = new Ctor(y), void 0 === rm ? rm = Ctor.rounding : checkInt32(rm, 0, 8), !x.d) return y.s ? x : y;
        if (!y.d) return y.s && (y.s = x.s), y;
      }
      return y.d[0] ? (external = !1, x = divide(x, y, 0, rm, 1).times(y), external = !0, finalise(x)) : (y.s = x.s, x = y), x;
    }, P.toNumber = function () {
      return +this;
    }, P.toOctal = function (sd, rm) {
      return toStringBinary(this, 8, sd, rm);
    }, P.toPower = P.pow = function (y) {
      var e,
        k,
        pr,
        r,
        rm,
        s,
        x = this,
        Ctor = x.constructor,
        yn = +(y = new Ctor(y));
      if (!(x.d && y.d && x.d[0] && y.d[0])) return new Ctor(mathpow(+x, yn));
      if ((x = new Ctor(x)).eq(1)) return x;
      if (pr = Ctor.precision, rm = Ctor.rounding, y.eq(1)) return finalise(x, pr, rm);
      if ((e = mathfloor(y.e / 7)) >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= 9007199254740991) return r = intPow(Ctor, x, k, pr), y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
      if ((s = x.s) < 0) {
        if (e < y.d.length - 1) return new Ctor(NaN);
        if (1 & y.d[e] || (s = 1), 0 == x.e && 1 == x.d[0] && 1 == x.d.length) return x.s = s, x;
      }
      return (e = 0 != (k = mathpow(+x, yn)) && isFinite(k) ? new Ctor(k + "").e : mathfloor(yn * (Math.log("0." + digitsToString(x.d)) / Math.LN10 + x.e + 1))) > Ctor.maxE + 1 || e < Ctor.minE - 1 ? new Ctor(e > 0 ? s / 0 : 0) : (external = !1, Ctor.rounding = x.s = 1, k = Math.min(12, (e + "").length), (r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr)).d && checkRoundingDigits((r = finalise(r, pr + 5, 1)).d, pr, rm) && (e = pr + 10, +digitsToString((r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1)).d).slice(pr + 1, pr + 15) + 1 == 1e14 && (r = finalise(r, pr + 1, 0))), r.s = s, external = !0, Ctor.rounding = rm, finalise(r, pr, rm));
    }, P.toPrecision = function (sd, rm) {
      var str,
        x = this,
        Ctor = x.constructor;
      return void 0 === sd ? str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos) : (checkInt32(sd, 1, 1e9), void 0 === rm ? rm = Ctor.rounding : checkInt32(rm, 0, 8), str = finiteToString(x = finalise(new Ctor(x), sd, rm), sd <= x.e || x.e <= Ctor.toExpNeg, sd)), x.isNeg() && !x.isZero() ? "-" + str : str;
    }, P.toSignificantDigits = P.toSD = function (sd, rm) {
      var Ctor = this.constructor;
      return void 0 === sd ? (sd = Ctor.precision, rm = Ctor.rounding) : (checkInt32(sd, 1, 1e9), void 0 === rm ? rm = Ctor.rounding : checkInt32(rm, 0, 8)), finalise(new Ctor(this), sd, rm);
    }, P.toString = function () {
      var x = this,
        Ctor = x.constructor,
        str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
      return x.isNeg() && !x.isZero() ? "-" + str : str;
    }, P.truncated = P.trunc = function () {
      return finalise(new this.constructor(this), this.e + 1, 1);
    }, P.valueOf = P.toJSON = function () {
      var x = this,
        Ctor = x.constructor,
        str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
      return x.isNeg() ? "-" + str : str;
    };
    var divide = function () {
      function multiplyInteger(x, k, base) {
        var temp,
          carry = 0,
          i = x.length;
        for (x = x.slice(); i--;) temp = x[i] * k + carry, x[i] = temp % base | 0, carry = temp / base | 0;
        return carry && x.unshift(carry), x;
      }
      function compare(a, b, aL, bL) {
        var i, r;
        if (aL != bL) r = aL > bL ? 1 : -1;else for (i = r = 0; i < aL; i++) if (a[i] != b[i]) {
          r = a[i] > b[i] ? 1 : -1;
          break;
        }
        return r;
      }
      function subtract(a, b, aL, base) {
        for (var i = 0; aL--;) a[aL] -= i, i = a[aL] < b[aL] ? 1 : 0, a[aL] = i * base + a[aL] - b[aL];
        for (; !a[0] && a.length > 1;) a.shift();
      }
      return function (x, y, pr, rm, dp, base) {
        var cmp,
          e,
          i,
          k,
          logBase,
          more,
          prod,
          prodL,
          q,
          qd,
          rem,
          remL,
          rem0,
          sd,
          t,
          xi,
          xL,
          yd0,
          yL,
          yz,
          Ctor = x.constructor,
          sign = x.s == y.s ? 1 : -1,
          xd = x.d,
          yd = y.d;
        if (!(xd && xd[0] && yd && yd[0])) return new Ctor(x.s && y.s && (xd ? !yd || xd[0] != yd[0] : yd) ? xd && 0 == xd[0] || !yd ? 0 * sign : sign / 0 : NaN);
        for (base ? (logBase = 1, e = x.e - y.e) : (base = BASE, logBase = 7, e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase)), yL = yd.length, xL = xd.length, qd = (q = new Ctor(sign)).d = [], i = 0; yd[i] == (xd[i] || 0); i++);
        if (yd[i] > (xd[i] || 0) && e--, null == pr ? (sd = pr = Ctor.precision, rm = Ctor.rounding) : sd = dp ? pr + (x.e - y.e) + 1 : pr, sd < 0) qd.push(1), more = !0;else {
          if (sd = sd / logBase + 2 | 0, i = 0, 1 == yL) {
            for (k = 0, yd = yd[0], sd++; (i < xL || k) && sd--; i++) t = k * base + (xd[i] || 0), qd[i] = t / yd | 0, k = t % yd | 0;
            more = k || i < xL;
          } else {
            for ((k = base / (yd[0] + 1) | 0) > 1 && (yd = multiplyInteger(yd, k, base), xd = multiplyInteger(xd, k, base), yL = yd.length, xL = xd.length), xi = yL, remL = (rem = xd.slice(0, yL)).length; remL < yL;) rem[remL++] = 0;
            (yz = yd.slice()).unshift(0), yd0 = yd[0], yd[1] >= base / 2 && ++yd0;
            do {
              k = 0, (cmp = compare(yd, rem, yL, remL)) < 0 ? (rem0 = rem[0], yL != remL && (rem0 = rem0 * base + (rem[1] || 0)), (k = rem0 / yd0 | 0) > 1 ? (k >= base && (k = base - 1), 1 == (cmp = compare(prod = multiplyInteger(yd, k, base), rem, prodL = prod.length, remL = rem.length)) && (k--, subtract(prod, yL < prodL ? yz : yd, prodL, base))) : (0 == k && (cmp = k = 1), prod = yd.slice()), (prodL = prod.length) < remL && prod.unshift(0), subtract(rem, prod, remL, base), -1 == cmp && (cmp = compare(yd, rem, yL, remL = rem.length)) < 1 && (k++, subtract(rem, yL < remL ? yz : yd, remL, base)), remL = rem.length) : 0 === cmp && (k++, rem = [0]), qd[i++] = k, cmp && rem[0] ? rem[remL++] = xd[xi] || 0 : (rem = [xd[xi]], remL = 1);
            } while ((xi++ < xL || void 0 !== rem[0]) && sd--);
            more = void 0 !== rem[0];
          }
          qd[0] || qd.shift();
        }
        if (1 == logBase) q.e = e, inexact = more;else {
          for (i = 1, k = qd[0]; k >= 10; k /= 10) i++;
          q.e = i + e * logBase - 1, finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
        }
        return q;
      };
    }();
    function finalise(x, sd, rm, isTruncated) {
      var digits,
        i,
        j,
        k,
        rd,
        roundUp,
        w,
        xd,
        xdi,
        Ctor = x.constructor;
      out: if (null != sd) {
        if (!(xd = x.d)) return x;
        for (digits = 1, k = xd[0]; k >= 10; k /= 10) digits++;
        if ((i = sd - digits) < 0) i += 7, j = sd, rd = (w = xd[xdi = 0]) / mathpow(10, digits - j - 1) % 10 | 0;else if ((xdi = Math.ceil((i + 1) / 7)) >= (k = xd.length)) {
          if (!isTruncated) break out;
          for (; k++ <= xdi;) xd.push(0);
          w = rd = 0, digits = 1, j = (i %= 7) - 7 + 1;
        } else {
          for (w = k = xd[xdi], digits = 1; k >= 10; k /= 10) digits++;
          rd = (j = (i %= 7) - 7 + digits) < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
        }
        if (isTruncated = isTruncated || sd < 0 || void 0 !== xd[xdi + 1] || (j < 0 ? w : w % mathpow(10, digits - j - 1)), roundUp = rm < 4 ? (rd || isTruncated) && (0 == rm || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || 5 == rd && (4 == rm || isTruncated || 6 == rm && (i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7)), sd < 1 || !xd[0]) return xd.length = 0, roundUp ? (sd -= x.e + 1, xd[0] = mathpow(10, (7 - sd % 7) % 7), x.e = -sd || 0) : xd[0] = x.e = 0, x;
        if (0 == i ? (xd.length = xdi, k = 1, xdi--) : (xd.length = xdi + 1, k = mathpow(10, 7 - i), xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0), roundUp) for (;;) {
          if (0 == xdi) {
            for (i = 1, j = xd[0]; j >= 10; j /= 10) i++;
            for (j = xd[0] += k, k = 1; j >= 10; j /= 10) k++;
            i != k && (x.e++, xd[0] == BASE && (xd[0] = 1));
            break;
          }
          if (xd[xdi] += k, xd[xdi] != BASE) break;
          xd[xdi--] = 0, k = 1;
        }
        for (i = xd.length; 0 === xd[--i];) xd.pop();
      }
      return external && (x.e > Ctor.maxE ? (x.d = null, x.e = NaN) : x.e < Ctor.minE && (x.e = 0, x.d = [0])), x;
    }
    function finiteToString(x, isExp, sd) {
      if (!x.isFinite()) return nonFiniteToString(x);
      var k,
        e = x.e,
        str = digitsToString(x.d),
        len = str.length;
      return isExp ? (sd && (k = sd - len) > 0 ? str = str.charAt(0) + "." + str.slice(1) + getZeroString(k) : len > 1 && (str = str.charAt(0) + "." + str.slice(1)), str = str + (x.e < 0 ? "e" : "e+") + x.e) : e < 0 ? (str = "0." + getZeroString(-e - 1) + str, sd && (k = sd - len) > 0 && (str += getZeroString(k))) : e >= len ? (str += getZeroString(e + 1 - len), sd && (k = sd - e - 1) > 0 && (str = str + "." + getZeroString(k))) : ((k = e + 1) < len && (str = str.slice(0, k) + "." + str.slice(k)), sd && (k = sd - len) > 0 && (e + 1 === len && (str += "."), str += getZeroString(k))), str;
    }
    function getBase10Exponent(digits, e) {
      var w = digits[0];
      for (e *= 7; w >= 10; w /= 10) e++;
      return e;
    }
    function getLn10(Ctor, sd, pr) {
      if (sd > LN10_PRECISION) throw external = !0, pr && (Ctor.precision = pr), Error("[DecimalError] Precision limit exceeded");
      return finalise(new Ctor(LN10), sd, 1, !0);
    }
    function getPi(Ctor, sd, rm) {
      if (sd > PI_PRECISION) throw Error("[DecimalError] Precision limit exceeded");
      return finalise(new Ctor(PI), sd, rm, !0);
    }
    function getPrecision(digits) {
      var w = digits.length - 1,
        len = 7 * w + 1;
      if (w = digits[w]) {
        for (; w % 10 == 0; w /= 10) len--;
        for (w = digits[0]; w >= 10; w /= 10) len++;
      }
      return len;
    }
    function getZeroString(k) {
      for (var zs = ""; k--;) zs += "0";
      return zs;
    }
    function intPow(Ctor, x, n, pr) {
      var isTruncated,
        r = new Ctor(1),
        k = Math.ceil(pr / 7 + 4);
      for (external = !1;;) {
        if (n % 2 && truncate((r = r.times(x)).d, k) && (isTruncated = !0), 0 === (n = mathfloor(n / 2))) {
          n = r.d.length - 1, isTruncated && 0 === r.d[n] && ++r.d[n];
          break;
        }
        truncate((x = x.times(x)).d, k);
      }
      return external = !0, r;
    }
    function isOdd(n) {
      return 1 & n.d[n.d.length - 1];
    }
    function maxOrMin(Ctor, args, n) {
      for (var k, y, x = new Ctor(args[0]), i = 0; ++i < args.length;) {
        if (!(y = new Ctor(args[i])).s) {
          x = y;
          break;
        }
        ((k = x.cmp(y)) === n || 0 === k && x.s === n) && (x = y);
      }
      return x;
    }
    function naturalExponential(x, sd) {
      var denominator,
        guard,
        j,
        pow,
        sum,
        t,
        wpr,
        rep = 0,
        i = 0,
        k = 0,
        Ctor = x.constructor,
        rm = Ctor.rounding,
        pr = Ctor.precision;
      if (!x.d || !x.d[0] || x.e > 17) return new Ctor(x.d ? x.d[0] ? x.s < 0 ? 0 : 1 / 0 : 1 : x.s ? x.s < 0 ? 0 : x : NaN);
      for (null == sd ? (external = !1, wpr = pr) : wpr = sd, t = new Ctor(.03125); x.e > -2;) x = x.times(t), k += 5;
      for (wpr += guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0, denominator = pow = sum = new Ctor(1), Ctor.precision = wpr;;) {
        if (pow = finalise(pow.times(x), wpr, 1), denominator = denominator.times(++i), digitsToString((t = sum.plus(divide(pow, denominator, wpr, 1))).d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
          for (j = k; j--;) sum = finalise(sum.times(sum), wpr, 1);
          if (null != sd) return Ctor.precision = pr, sum;
          if (!(rep < 3 && checkRoundingDigits(sum.d, wpr - guard, rm, rep))) return finalise(sum, Ctor.precision = pr, rm, external = !0);
          Ctor.precision = wpr += 10, denominator = pow = t = new Ctor(1), i = 0, rep++;
        }
        sum = t;
      }
    }
    function naturalLogarithm(y, sd) {
      var c,
        c0,
        denominator,
        e,
        numerator,
        rep,
        sum,
        t,
        wpr,
        x1,
        x2,
        n = 1,
        x = y,
        xd = x.d,
        Ctor = x.constructor,
        rm = Ctor.rounding,
        pr = Ctor.precision;
      if (x.s < 0 || !xd || !xd[0] || !x.e && 1 == xd[0] && 1 == xd.length) return new Ctor(xd && !xd[0] ? -1 / 0 : 1 != x.s ? NaN : xd ? 0 : x);
      if (null == sd ? (external = !1, wpr = pr) : wpr = sd, Ctor.precision = wpr += 10, c0 = (c = digitsToString(xd)).charAt(0), !(Math.abs(e = x.e) < 15e14)) return t = getLn10(Ctor, wpr + 2, pr).times(e + ""), x = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - 10).plus(t), Ctor.precision = pr, null == sd ? finalise(x, pr, rm, external = !0) : x;
      for (; c0 < 7 && 1 != c0 || 1 == c0 && c.charAt(1) > 3;) c0 = (c = digitsToString((x = x.times(y)).d)).charAt(0), n++;
      for (e = x.e, c0 > 1 ? (x = new Ctor("0." + c), e++) : x = new Ctor(c0 + "." + c.slice(1)), x1 = x, sum = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1), x2 = finalise(x.times(x), wpr, 1), denominator = 3;;) {
        if (numerator = finalise(numerator.times(x2), wpr, 1), digitsToString((t = sum.plus(divide(numerator, new Ctor(denominator), wpr, 1))).d).slice(0, wpr) === digitsToString(sum.d).slice(0, wpr)) {
          if (sum = sum.times(2), 0 !== e && (sum = sum.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""))), sum = divide(sum, new Ctor(n), wpr, 1), null != sd) return Ctor.precision = pr, sum;
          if (!checkRoundingDigits(sum.d, wpr - 10, rm, rep)) return finalise(sum, Ctor.precision = pr, rm, external = !0);
          Ctor.precision = wpr += 10, t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1), x2 = finalise(x.times(x), wpr, 1), denominator = rep = 1;
        }
        sum = t, denominator += 2;
      }
    }
    function nonFiniteToString(x) {
      return String(x.s * x.s / 0);
    }
    function parseDecimal(x, str) {
      var e, i, len;
      for ((e = str.indexOf(".")) > -1 && (str = str.replace(".", "")), (i = str.search(/e/i)) > 0 ? (e < 0 && (e = i), e += +str.slice(i + 1), str = str.substring(0, i)) : e < 0 && (e = str.length), i = 0; 48 === str.charCodeAt(i); i++);
      for (len = str.length; 48 === str.charCodeAt(len - 1); --len);
      if (str = str.slice(i, len)) {
        if (len -= i, x.e = e = e - i - 1, x.d = [], i = (e + 1) % 7, e < 0 && (i += 7), i < len) {
          for (i && x.d.push(+str.slice(0, i)), len -= 7; i < len;) x.d.push(+str.slice(i, i += 7));
          i = 7 - (str = str.slice(i)).length;
        } else i -= len;
        for (; i--;) str += "0";
        x.d.push(+str), external && (x.e > x.constructor.maxE ? (x.d = null, x.e = NaN) : x.e < x.constructor.minE && (x.e = 0, x.d = [0]));
      } else x.e = 0, x.d = [0];
      return x;
    }
    function parseOther(x, str) {
      var base, Ctor, divisor, i, isFloat, len, p, xd, xe;
      if (str.indexOf("_") > -1) {
        if (str = str.replace(/(\d)_(?=\d)/g, "$1"), isDecimal.test(str)) return parseDecimal(x, str);
      } else if ("Infinity" === str || "NaN" === str) return +str || (x.s = NaN), x.e = NaN, x.d = null, x;
      if (isHex.test(str)) base = 16, str = str.toLowerCase();else if (isBinary.test(str)) base = 2;else {
        if (!isOctal.test(str)) throw Error(invalidArgument + str);
        base = 8;
      }
      for ((i = str.search(/p/i)) > 0 ? (p = +str.slice(i + 1), str = str.substring(2, i)) : str = str.slice(2), isFloat = (i = str.indexOf(".")) >= 0, Ctor = x.constructor, isFloat && (i = (len = (str = str.replace(".", "")).length) - i, divisor = intPow(Ctor, new Ctor(base), i, 2 * i)), i = xe = (xd = convertBase(str, base, BASE)).length - 1; 0 === xd[i]; --i) xd.pop();
      return i < 0 ? new Ctor(0 * x.s) : (x.e = getBase10Exponent(xd, xe), x.d = xd, external = !1, isFloat && (x = divide(x, divisor, 4 * len)), p && (x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p))), external = !0, x);
    }
    function taylorSeries(Ctor, n, x, y, isHyperbolic) {
      var j,
        t,
        u,
        x2,
        pr = Ctor.precision,
        k = Math.ceil(pr / 7);
      for (external = !1, x2 = x.times(x), u = new Ctor(y);;) {
        if (t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1), u = isHyperbolic ? y.plus(t) : y.minus(t), y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1), void 0 !== (t = u.plus(y)).d[k]) {
          for (j = k; t.d[j] === u.d[j] && j--;);
          if (-1 == j) break;
        }
        j = u, u = y, y = t, t = j;
      }
      return external = !0, t.d.length = k + 1, t;
    }
    function tinyPow(b, e) {
      for (var n = b; --e;) n *= b;
      return n;
    }
    function toLessThanHalfPi(Ctor, x) {
      var t,
        isNeg = x.s < 0,
        pi = getPi(Ctor, Ctor.precision, 1),
        halfPi = pi.times(.5);
      if ((x = x.abs()).lte(halfPi)) return quadrant = isNeg ? 4 : 1, x;
      if ((t = x.divToInt(pi)).isZero()) quadrant = isNeg ? 3 : 2;else {
        if ((x = x.minus(t.times(pi))).lte(halfPi)) return quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1, x;
        quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
      }
      return x.minus(pi).abs();
    }
    function toStringBinary(x, baseOut, sd, rm) {
      var base,
        e,
        i,
        k,
        len,
        roundUp,
        str,
        xd,
        y,
        Ctor = x.constructor,
        isExp = void 0 !== sd;
      if (isExp ? (checkInt32(sd, 1, 1e9), void 0 === rm ? rm = Ctor.rounding : checkInt32(rm, 0, 8)) : (sd = Ctor.precision, rm = Ctor.rounding), x.isFinite()) {
        for (isExp ? (base = 2, 16 == baseOut ? sd = 4 * sd - 3 : 8 == baseOut && (sd = 3 * sd - 2)) : base = baseOut, (i = (str = finiteToString(x)).indexOf(".")) >= 0 && (str = str.replace(".", ""), (y = new Ctor(1)).e = str.length - i, y.d = convertBase(finiteToString(y), 10, base), y.e = y.d.length), e = len = (xd = convertBase(str, 10, base)).length; 0 == xd[--len];) xd.pop();
        if (xd[0]) {
          if (i < 0 ? e-- : ((x = new Ctor(x)).d = xd, x.e = e, xd = (x = divide(x, y, sd, rm, 0, base)).d, e = x.e, roundUp = inexact), i = xd[sd], k = base / 2, roundUp = roundUp || void 0 !== xd[sd + 1], roundUp = rm < 4 ? (void 0 !== i || roundUp) && (0 === rm || rm === (x.s < 0 ? 3 : 2)) : i > k || i === k && (4 === rm || roundUp || 6 === rm && 1 & xd[sd - 1] || rm === (x.s < 0 ? 8 : 7)), xd.length = sd, roundUp) for (; ++xd[--sd] > base - 1;) xd[sd] = 0, sd || (++e, xd.unshift(1));
          for (len = xd.length; !xd[len - 1]; --len);
          for (i = 0, str = ""; i < len; i++) str += NUMERALS.charAt(xd[i]);
          if (isExp) {
            if (len > 1) if (16 == baseOut || 8 == baseOut) {
              for (i = 16 == baseOut ? 4 : 3, --len; len % i; len++) str += "0";
              for (len = (xd = convertBase(str, base, baseOut)).length; !xd[len - 1]; --len);
              for (i = 1, str = "1."; i < len; i++) str += NUMERALS.charAt(xd[i]);
            } else str = str.charAt(0) + "." + str.slice(1);
            str = str + (e < 0 ? "p" : "p+") + e;
          } else if (e < 0) {
            for (; ++e;) str = "0" + str;
            str = "0." + str;
          } else if (++e > len) for (e -= len; e--;) str += "0";else e < len && (str = str.slice(0, e) + "." + str.slice(e));
        } else str = isExp ? "0p+0" : "0";
        str = (16 == baseOut ? "0x" : 2 == baseOut ? "0b" : 8 == baseOut ? "0o" : "") + str;
      } else str = nonFiniteToString(x);
      return x.s < 0 ? "-" + str : str;
    }
    function truncate(arr, len) {
      if (arr.length > len) return arr.length = len, !0;
    }
    function abs(x) {
      return new this(x).abs();
    }
    function acos(x) {
      return new this(x).acos();
    }
    function acosh(x) {
      return new this(x).acosh();
    }
    function add(x, y) {
      return new this(x).plus(y);
    }
    function asin(x) {
      return new this(x).asin();
    }
    function asinh(x) {
      return new this(x).asinh();
    }
    function atan(x) {
      return new this(x).atan();
    }
    function atanh(x) {
      return new this(x).atanh();
    }
    function atan2(y, x) {
      y = new this(y), x = new this(x);
      var r,
        pr = this.precision,
        rm = this.rounding,
        wpr = pr + 4;
      return y.s && x.s ? y.d || x.d ? !x.d || y.isZero() ? (r = x.s < 0 ? getPi(this, pr, rm) : new this(0)).s = y.s : !y.d || x.isZero() ? (r = getPi(this, wpr, 1).times(.5)).s = y.s : x.s < 0 ? (this.precision = wpr, this.rounding = 1, r = this.atan(divide(y, x, wpr, 1)), x = getPi(this, wpr, 1), this.precision = pr, this.rounding = rm, r = y.s < 0 ? r.minus(x) : r.plus(x)) : r = this.atan(divide(y, x, wpr, 1)) : (r = getPi(this, wpr, 1).times(x.s > 0 ? .25 : .75)).s = y.s : r = new this(NaN), r;
    }
    function cbrt(x) {
      return new this(x).cbrt();
    }
    function ceil(x) {
      return finalise(x = new this(x), x.e + 1, 2);
    }
    function clamp(x, min, max) {
      return new this(x).clamp(min, max);
    }
    function config(obj) {
      if (!obj || "object" != _typeof(obj)) throw Error("[DecimalError] Object expected");
      var i,
        p,
        v,
        useDefaults = !0 === obj.defaults,
        ps = ["precision", 1, 1e9, "rounding", 0, 8, "toExpNeg", -EXP_LIMIT, 0, "toExpPos", 0, EXP_LIMIT, "maxE", 0, EXP_LIMIT, "minE", -EXP_LIMIT, 0, "modulo", 0, 9];
      for (i = 0; i < ps.length; i += 3) if (p = ps[i], useDefaults && (this[p] = DEFAULTS[p]), void 0 !== (v = obj[p])) {
        if (!(mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2])) throw Error(invalidArgument + p + ": " + v);
        this[p] = v;
      }
      if (p = "crypto", useDefaults && (this[p] = DEFAULTS[p]), void 0 !== (v = obj[p])) {
        if (!0 !== v && !1 !== v && 0 !== v && 1 !== v) throw Error(invalidArgument + p + ": " + v);
        if (v) {
          if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw Error("[DecimalError] crypto unavailable");
          this[p] = !0;
        } else this[p] = !1;
      }
      return this;
    }
    function cos(x) {
      return new this(x).cos();
    }
    function cosh(x) {
      return new this(x).cosh();
    }
    function div(x, y) {
      return new this(x).div(y);
    }
    function exp(x) {
      return new this(x).exp();
    }
    function floor(x) {
      return finalise(x = new this(x), x.e + 1, 3);
    }
    function hypot() {
      var i,
        n,
        t = new this(0);
      for (external = !1, i = 0; i < arguments.length;) if ((n = new this(arguments[i++])).d) t.d && (t = t.plus(n.times(n)));else {
        if (n.s) return external = !0, new this(1 / 0);
        t = n;
      }
      return external = !0, t.sqrt();
    }
    function isDecimalInstance(obj) {
      return obj instanceof Decimal || obj && obj.toStringTag === tag || !1;
    }
    function ln(x) {
      return new this(x).ln();
    }
    function log(x, y) {
      return new this(x).log(y);
    }
    function log2(x) {
      return new this(x).log(2);
    }
    function log10(x) {
      return new this(x).log(10);
    }
    function max() {
      return maxOrMin(this, arguments, -1);
    }
    function min() {
      return maxOrMin(this, arguments, 1);
    }
    function mod(x, y) {
      return new this(x).mod(y);
    }
    function mul(x, y) {
      return new this(x).mul(y);
    }
    function pow(x, y) {
      return new this(x).pow(y);
    }
    function random(sd) {
      var d,
        e,
        k,
        n,
        i = 0,
        r = new this(1),
        rd = [];
      if (void 0 === sd ? sd = this.precision : checkInt32(sd, 1, 1e9), k = Math.ceil(sd / 7), this.crypto) {
        if (crypto.getRandomValues) for (d = crypto.getRandomValues(new Uint32Array(k)); i < k;) (n = d[i]) >= 429e7 ? d[i] = crypto.getRandomValues(new Uint32Array(1))[0] : rd[i++] = n % 1e7;else {
          if (!crypto.randomBytes) throw Error("[DecimalError] crypto unavailable");
          for (d = crypto.randomBytes(k *= 4); i < k;) (n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((127 & d[i + 3]) << 24)) >= 214e7 ? crypto.randomBytes(4).copy(d, i) : (rd.push(n % 1e7), i += 4);
          i = k / 4;
        }
      } else for (; i < k;) rd[i++] = 1e7 * Math.random() | 0;
      for (sd %= 7, (k = rd[--i]) && sd && (n = mathpow(10, 7 - sd), rd[i] = (k / n | 0) * n); 0 === rd[i]; i--) rd.pop();
      if (i < 0) e = 0, rd = [0];else {
        for (e = -1; 0 === rd[0]; e -= 7) rd.shift();
        for (k = 1, n = rd[0]; n >= 10; n /= 10) k++;
        k < 7 && (e -= 7 - k);
      }
      return r.e = e, r.d = rd, r;
    }
    function round(x) {
      return finalise(x = new this(x), x.e + 1, this.rounding);
    }
    function sign(x) {
      return (x = new this(x)).d ? x.d[0] ? x.s : 0 * x.s : x.s || NaN;
    }
    function sin(x) {
      return new this(x).sin();
    }
    function sinh(x) {
      return new this(x).sinh();
    }
    function sqrt(x) {
      return new this(x).sqrt();
    }
    function sub(x, y) {
      return new this(x).sub(y);
    }
    function sum() {
      var i = 0,
        args = arguments,
        x = new this(args[i]);
      for (external = !1; x.s && ++i < args.length;) x = x.plus(args[i]);
      return external = !0, finalise(x, this.precision, this.rounding);
    }
    function tan(x) {
      return new this(x).tan();
    }
    function tanh(x) {
      return new this(x).tanh();
    }
    function trunc(x) {
      return finalise(x = new this(x), x.e + 1, 1);
    }
    P[Symbol.for("nodejs.util.inspect.custom")] = P.toString, P[Symbol.toStringTag] = "Decimal";
    var Decimal = P.constructor = function clone(obj) {
      var i, p, ps;
      function Decimal(v) {
        var e,
          i,
          t,
          x = this;
        if (!(x instanceof Decimal)) return new Decimal(v);
        if (x.constructor = Decimal, isDecimalInstance(v)) return x.s = v.s, void (external ? !v.d || v.e > Decimal.maxE ? (x.e = NaN, x.d = null) : v.e < Decimal.minE ? (x.e = 0, x.d = [0]) : (x.e = v.e, x.d = v.d.slice()) : (x.e = v.e, x.d = v.d ? v.d.slice() : v.d));
        if ("number" === (t = _typeof(v))) {
          if (0 === v) return x.s = 1 / v < 0 ? -1 : 1, x.e = 0, void (x.d = [0]);
          if (v < 0 ? (v = -v, x.s = -1) : x.s = 1, v === ~~v && v < 1e7) {
            for (e = 0, i = v; i >= 10; i /= 10) e++;
            return void (external ? e > Decimal.maxE ? (x.e = NaN, x.d = null) : e < Decimal.minE ? (x.e = 0, x.d = [0]) : (x.e = e, x.d = [v]) : (x.e = e, x.d = [v]));
          }
          return 0 * v != 0 ? (v || (x.s = NaN), x.e = NaN, void (x.d = null)) : parseDecimal(x, v.toString());
        }
        if ("string" === t) return 45 === (i = v.charCodeAt(0)) ? (v = v.slice(1), x.s = -1) : (43 === i && (v = v.slice(1)), x.s = 1), isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
        if ("bigint" === t) return v < 0 ? (v = -v, x.s = -1) : x.s = 1, parseDecimal(x, v.toString());
        throw Error(invalidArgument + v);
      }
      if (Decimal.prototype = P, Decimal.ROUND_UP = 0, Decimal.ROUND_DOWN = 1, Decimal.ROUND_CEIL = 2, Decimal.ROUND_FLOOR = 3, Decimal.ROUND_HALF_UP = 4, Decimal.ROUND_HALF_DOWN = 5, Decimal.ROUND_HALF_EVEN = 6, Decimal.ROUND_HALF_CEIL = 7, Decimal.ROUND_HALF_FLOOR = 8, Decimal.EUCLID = 9, Decimal.config = Decimal.set = config, Decimal.clone = clone, Decimal.isDecimal = isDecimalInstance, Decimal.abs = abs, Decimal.acos = acos, Decimal.acosh = acosh, Decimal.add = add, Decimal.asin = asin, Decimal.asinh = asinh, Decimal.atan = atan, Decimal.atanh = atanh, Decimal.atan2 = atan2, Decimal.cbrt = cbrt, Decimal.ceil = ceil, Decimal.clamp = clamp, Decimal.cos = cos, Decimal.cosh = cosh, Decimal.div = div, Decimal.exp = exp, Decimal.floor = floor, Decimal.hypot = hypot, Decimal.ln = ln, Decimal.log = log, Decimal.log10 = log10, Decimal.log2 = log2, Decimal.max = max, Decimal.min = min, Decimal.mod = mod, Decimal.mul = mul, Decimal.pow = pow, Decimal.random = random, Decimal.round = round, Decimal.sign = sign, Decimal.sin = sin, Decimal.sinh = sinh, Decimal.sqrt = sqrt, Decimal.sub = sub, Decimal.sum = sum, Decimal.tan = tan, Decimal.tanh = tanh, Decimal.trunc = trunc, void 0 === obj && (obj = {}), obj && !0 !== obj.defaults) for (ps = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], i = 0; i < ps.length;) obj.hasOwnProperty(p = ps[i++]) || (obj[p] = this[p]);
      return Decimal.config(obj), Decimal;
    }(DEFAULTS);
    LN10 = new Decimal(LN10), PI = new Decimal(PI);
    var decimal = Decimal;
    new Decimal(10);
    var ZERO = new Decimal(0);
    new Decimal(-0);
    function memoize(fn, options) {
      var cache = options && options.cache ? options.cache : cacheDefault,
        serializer = options && options.serializer ? options.serializer : serializerDefault;
      return (options && options.strategy ? options.strategy : strategyDefault)(fn, {
        cache: cache,
        serializer: serializer
      });
    }
    function monadic(fn, cache, serializer, arg) {
      var cacheKey = function isPrimitive(value) {
        return null == value || "number" == typeof value || "boolean" == typeof value;
      }(arg) ? arg : serializer(arg);
      var computedValue = cache.get(cacheKey);
      return void 0 === computedValue && (computedValue = fn.call(this, arg), cache.set(cacheKey, computedValue)), computedValue;
    }
    function variadic(fn, cache, serializer) {
      var args = Array.prototype.slice.call(arguments, 3),
        cacheKey = serializer(args);
      var computedValue = cache.get(cacheKey);
      return void 0 === computedValue && (computedValue = fn.apply(this, args), cache.set(cacheKey, computedValue)), computedValue;
    }
    function assemble(fn, context, strategy, cache, serialize) {
      return strategy.bind(context, fn, cache, serialize);
    }
    function strategyDefault(fn, options) {
      return assemble(fn, this, 1 === fn.length ? monadic : variadic, options.cache.create(), options.serializer);
    }
    var serializerDefault = function serializerDefault() {
      return JSON.stringify(arguments);
    };
    var ObjectWithoutPrototypeCache = /*#__PURE__*/function () {
      function ObjectWithoutPrototypeCache() {
        _classCallCheck(this, ObjectWithoutPrototypeCache);
        _defineProperty(this, "cache", void 0);
        this.cache = Object.create(null);
      }
      return _createClass(ObjectWithoutPrototypeCache, [{
        key: "get",
        value: function get(key) {
          return this.cache[key];
        }
      }, {
        key: "set",
        value: function set(key, value) {
          this.cache[key] = value;
        }
      }]);
    }();
    var cacheDefault = {
        create: function create() {
          return new ObjectWithoutPrototypeCache();
        }
      },
      strategies = {
        variadic: function strategyVariadic(fn, options) {
          return assemble(fn, this, variadic, options.cache.create(), options.serializer);
        },
        monadic: function strategyMonadic(fn, options) {
          return assemble(fn, this, monadic, options.cache.create(), options.serializer);
        }
      };
    function defineProperty(target, name, _ref) {
      var value = _ref.value;
      Object.defineProperty(target, name, {
        configurable: !0,
        enumerable: !1,
        writable: !0,
        value: value
      });
    }
    function invariant(condition, message) {
      var Err = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Error;
      if (!condition) throw new Err(message);
    }
    var createMemoizedNumberFormat = memoize(function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _construct(Intl.NumberFormat, args);
    }, {
      strategy: strategies.variadic
    });
    memoize(function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return _construct(Intl.PluralRules, args);
    }, {
      strategy: strategies.variadic
    }), memoize(function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return _construct(Intl.Locale, args);
    }, {
      strategy: strategies.variadic
    }), memoize(function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return _construct(Intl.ListFormat, args);
    }, {
      strategy: strategies.variadic
    });
    function ToNumber(arg) {
      if ("number" == typeof arg) return new Decimal(arg);
      if ("bigint" == typeof arg) return new Decimal(arg.toString());
      if (invariant("symbol" != _typeof(arg), "Symbol is not supported", TypeError), void 0 === arg) return new Decimal(NaN);
      if (null === arg || 0 === arg) return ZERO;
      if (!0 === arg) return new Decimal(1);
      if ("string" == typeof arg) try {
        return new Decimal(arg);
      } catch (_unused) {
        return new Decimal(NaN);
      }
      invariant("object" == _typeof(arg), "object expected", TypeError);
      var primValue = function ToPrimitive(input, preferredType) {
        if ("object" == _typeof(input) && null != input) {
          var exoticToPrim = Symbol.toPrimitive in input ? input[Symbol.toPrimitive] : void 0;
          var hint;
          if (void 0 !== exoticToPrim) {
            void 0 === preferredType ? hint = "default" : "string" === preferredType ? hint = "string" : (invariant("number" === preferredType, 'preferredType must be "string" or "number"'), hint = "number");
            var result = exoticToPrim.call(input, hint);
            if ("object" != _typeof(result)) return result;
            throw new TypeError("Cannot convert exotic object to primitive.");
          }
          return void 0 === preferredType && (preferredType = "number"), function OrdinaryToPrimitive(O, hint) {
            var methodNames;
            methodNames = "string" === hint ? ["toString", "valueOf"] : ["valueOf", "toString"];
            var _iterator = _createForOfIteratorHelper(methodNames),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var name = _step.value;
                var method = O[name];
                if (IsCallable(method)) {
                  var _result = method.call(O);
                  if ("object" != _typeof(_result)) return _result;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            throw new TypeError("Cannot convert object to primitive value");
          }(input, preferredType);
        }
        return input;
      }(arg, "number");
      return invariant("object" != _typeof(primValue), "object expected", TypeError), ToNumber(primValue);
    }
    function TimeClip(time) {
      return time.isFinite() ? time.abs().greaterThan(8640000000000001) ? new Decimal(NaN) : function ToInteger(n) {
        var number = ToNumber(n);
        if (number.isNaN() || number.isZero()) return ZERO;
        if (number.isFinite()) return number;
        var integer = number.abs().floor();
        return number.isNegative() && (integer = integer.negated()), integer;
      }(time) : new Decimal(NaN);
    }
    function ToObject(arg) {
      if (null == arg) throw new TypeError("undefined/null cannot be converted to object");
      return Object(arg);
    }
    function SameValue(x, y) {
      return Object.is ? Object.is(x, y) : x === y ? 0 !== x || 1 / x == 1 / y : x != x && y != y;
    }
    function _262_mod(x, y) {
      return x - Math.floor(x / y) * y;
    }
    function Day(t) {
      return Math.floor(t / 864e5);
    }
    function WeekDay(t) {
      return _262_mod(Day(t) + 4, 7);
    }
    function YearFromTime(t) {
      return new Date(t).getUTCFullYear();
    }
    function DayWithinYear(t) {
      return Day(t) - function DayFromYear(y) {
        if (y < 100) {
          var date = new Date(0);
          return date.setUTCFullYear(y, 0, 1), date.setUTCHours(0, 0, 0, 0), date.getTime() / 864e5;
        }
        return Date.UTC(y, 0) / 864e5;
      }(YearFromTime(t));
    }
    function InLeapYear(t) {
      return 365 === function DaysInYear(y) {
        return y % 4 != 0 ? 365 : y % 100 != 0 ? 366 : y % 400 != 0 ? 365 : 366;
      }(YearFromTime(t)) ? 0 : 1;
    }
    function MonthFromTime(t) {
      var dwy = DayWithinYear(t),
        leap = InLeapYear(t);
      if (dwy >= 0 && dwy < 31) return 0;
      if (dwy < 59 + leap) return 1;
      if (dwy < 90 + leap) return 2;
      if (dwy < 120 + leap) return 3;
      if (dwy < 151 + leap) return 4;
      if (dwy < 181 + leap) return 5;
      if (dwy < 212 + leap) return 6;
      if (dwy < 243 + leap) return 7;
      if (dwy < 273 + leap) return 8;
      if (dwy < 304 + leap) return 9;
      if (dwy < 334 + leap) return 10;
      if (dwy < 365 + leap) return 11;
      throw new Error("Invalid time");
    }
    function DateFromTime(t) {
      var dwy = DayWithinYear(t),
        mft = MonthFromTime(t),
        leap = InLeapYear(t);
      if (0 === mft) return dwy + 1;
      if (1 === mft) return dwy - 30;
      if (2 === mft) return dwy - 58 - leap;
      if (3 === mft) return dwy - 89 - leap;
      if (4 === mft) return dwy - 119 - leap;
      if (5 === mft) return dwy - 150 - leap;
      if (6 === mft) return dwy - 180 - leap;
      if (7 === mft) return dwy - 211 - leap;
      if (8 === mft) return dwy - 242 - leap;
      if (9 === mft) return dwy - 272 - leap;
      if (10 === mft) return dwy - 303 - leap;
      if (11 === mft) return dwy - 333 - leap;
      throw new Error("Invalid time");
    }
    function HourFromTime(t) {
      return _262_mod(Math.floor(t / 36e5), 24);
    }
    function MinFromTime(t) {
      return _262_mod(Math.floor(t / 6e4), 60);
    }
    function SecFromTime(t) {
      return _262_mod(Math.floor(t / 1e3), 60);
    }
    function IsCallable(fn) {
      return "function" == typeof fn;
    }
    function OrdinaryHasInstance(C, O, internalSlots) {
      if (!IsCallable(C)) return !1;
      if (internalSlots !== null && internalSlots !== void 0 && internalSlots.boundTargetFunction) {
        var BC = internalSlots === null || internalSlots === void 0 ? void 0 : internalSlots.boundTargetFunction;
        return O instanceof BC;
      }
      if ("object" != _typeof(O)) return !1;
      var P = C.prototype;
      if ("object" != _typeof(P)) throw new TypeError("OrdinaryHasInstance called on an object with an invalid prototype property.");
      return Object.prototype.isPrototypeOf.call(P, O);
    }
    function msFromTime(t) {
      return _262_mod(t, 1e3);
    }
    var availableLocalesSetCache = new WeakMap();
    function BestAvailableLocale(availableLocales, locale) {
      var availableSet = availableLocalesSetCache.get(availableLocales);
      availableSet || (availableSet = new Set(availableLocales), availableLocalesSetCache.set(availableLocales, availableSet));
      var candidate = locale;
      for (;;) {
        if (availableSet.has(candidate)) return candidate;
        var pos = candidate.lastIndexOf("-");
        if (!~pos) return;
        pos >= 2 && "-" === candidate[pos - 2] && (pos -= 2), candidate = candidate.slice(0, pos);
      }
    }
    var languageMatching_data = {
        supplemental: {
          languageMatching: {
            "written-new": [{
              paradigmLocales: {
                _locales: "en en_GB es es_419 pt_BR pt_PT"
              }
            }, {
              $enUS: {
                _value: "AS+CA+GU+MH+MP+PH+PR+UM+US+VI"
              }
            }, {
              $cnsar: {
                _value: "HK+MO"
              }
            }, {
              $americas: {
                _value: "019"
              }
            }, {
              $maghreb: {
                _value: "MA+DZ+TN+LY+MR+EH"
              }
            }, {
              no: {
                _desired: "nb",
                _distance: "1"
              }
            }, {
              bs: {
                _desired: "hr",
                _distance: "4"
              }
            }, {
              bs: {
                _desired: "sh",
                _distance: "4"
              }
            }, {
              hr: {
                _desired: "sh",
                _distance: "4"
              }
            }, {
              sr: {
                _desired: "sh",
                _distance: "4"
              }
            }, {
              aa: {
                _desired: "ssy",
                _distance: "4"
              }
            }, {
              de: {
                _desired: "gsw",
                _distance: "4",
                _oneway: "true"
              }
            }, {
              de: {
                _desired: "lb",
                _distance: "4",
                _oneway: "true"
              }
            }, {
              no: {
                _desired: "da",
                _distance: "8"
              }
            }, {
              nb: {
                _desired: "da",
                _distance: "8"
              }
            }, {
              ru: {
                _desired: "ab",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "ach",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              nl: {
                _desired: "af",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "ak",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "am",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              es: {
                _desired: "ay",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              ru: {
                _desired: "az",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              ur: {
                _desired: "bal",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              ru: {
                _desired: "be",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "bem",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              hi: {
                _desired: "bh",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "bn",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              zh: {
                _desired: "bo",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              fr: {
                _desired: "br",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              es: {
                _desired: "ca",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              fil: {
                _desired: "ceb",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "chr",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "ckb",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              fr: {
                _desired: "co",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              fr: {
                _desired: "crs",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              sk: {
                _desired: "cs",
                _distance: "20"
              }
            }, {
              en: {
                _desired: "cy",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "ee",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "eo",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              es: {
                _desired: "eu",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              da: {
                _desired: "fo",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              nl: {
                _desired: "fy",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "ga",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "gaa",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "gd",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              es: {
                _desired: "gl",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              es: {
                _desired: "gn",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              hi: {
                _desired: "gu",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "ha",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "haw",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              fr: {
                _desired: "ht",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              ru: {
                _desired: "hy",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "ia",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "ig",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "is",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              id: {
                _desired: "jv",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "ka",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              fr: {
                _desired: "kg",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              ru: {
                _desired: "kk",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "km",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "kn",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "kri",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              tr: {
                _desired: "ku",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              ru: {
                _desired: "ky",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              it: {
                _desired: "la",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "lg",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              fr: {
                _desired: "ln",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "lo",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "loz",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              fr: {
                _desired: "lua",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              hi: {
                _desired: "mai",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "mfe",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              fr: {
                _desired: "mg",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "mi",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "ml",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              ru: {
                _desired: "mn",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              hi: {
                _desired: "mr",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              id: {
                _desired: "ms",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "mt",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "my",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "ne",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              nb: {
                _desired: "nn",
                _distance: "20"
              }
            }, {
              no: {
                _desired: "nn",
                _distance: "20"
              }
            }, {
              en: {
                _desired: "nso",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "ny",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "nyn",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              fr: {
                _desired: "oc",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "om",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "or",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "pa",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "pcm",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "ps",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              es: {
                _desired: "qu",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              de: {
                _desired: "rm",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "rn",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              fr: {
                _desired: "rw",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              hi: {
                _desired: "sa",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "sd",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "si",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "sn",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "so",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "sq",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "st",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              id: {
                _desired: "su",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "sw",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "ta",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "te",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              ru: {
                _desired: "tg",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "ti",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              ru: {
                _desired: "tk",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "tlh",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "tn",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "to",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              ru: {
                _desired: "tt",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "tum",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              zh: {
                _desired: "ug",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              ru: {
                _desired: "uk",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "ur",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              ru: {
                _desired: "uz",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              fr: {
                _desired: "wo",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "xh",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "yi",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "yo",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              zh: {
                _desired: "za",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              en: {
                _desired: "zu",
                _distance: "30",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "aao",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "abh",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "abv",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "acm",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "acq",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "acw",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "acx",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "acy",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "adf",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "aeb",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "aec",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "afb",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "ajp",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "apc",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "apd",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "arq",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "ars",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "ary",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "arz",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "auz",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "avl",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "ayh",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "ayl",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "ayn",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "ayp",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "bbz",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "pga",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "shu",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ar: {
                _desired: "ssh",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              az: {
                _desired: "azb",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              et: {
                _desired: "vro",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ff: {
                _desired: "ffm",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ff: {
                _desired: "fub",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ff: {
                _desired: "fue",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ff: {
                _desired: "fuf",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ff: {
                _desired: "fuh",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ff: {
                _desired: "fui",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ff: {
                _desired: "fuq",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ff: {
                _desired: "fuv",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              gn: {
                _desired: "gnw",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              gn: {
                _desired: "gui",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              gn: {
                _desired: "gun",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              gn: {
                _desired: "nhd",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              iu: {
                _desired: "ikt",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              kln: {
                _desired: "enb",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              kln: {
                _desired: "eyo",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              kln: {
                _desired: "niq",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              kln: {
                _desired: "oki",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              kln: {
                _desired: "pko",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              kln: {
                _desired: "sgc",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              kln: {
                _desired: "tec",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              kln: {
                _desired: "tuy",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              kok: {
                _desired: "gom",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              kpe: {
                _desired: "gkp",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              luy: {
                _desired: "ida",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              luy: {
                _desired: "lkb",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              luy: {
                _desired: "lko",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              luy: {
                _desired: "lks",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              luy: {
                _desired: "lri",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              luy: {
                _desired: "lrm",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              luy: {
                _desired: "lsm",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              luy: {
                _desired: "lto",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              luy: {
                _desired: "lts",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              luy: {
                _desired: "lwg",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              luy: {
                _desired: "nle",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              luy: {
                _desired: "nyd",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              luy: {
                _desired: "rag",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              lv: {
                _desired: "ltg",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              mg: {
                _desired: "bhr",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              mg: {
                _desired: "bjq",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              mg: {
                _desired: "bmm",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              mg: {
                _desired: "bzc",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              mg: {
                _desired: "msh",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              mg: {
                _desired: "skg",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              mg: {
                _desired: "tdx",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              mg: {
                _desired: "tkg",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              mg: {
                _desired: "txy",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              mg: {
                _desired: "xmv",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              mg: {
                _desired: "xmw",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              mn: {
                _desired: "mvf",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "bjn",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "btj",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "bve",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "bvu",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "coa",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "dup",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "hji",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "id",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "jak",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "jax",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "kvb",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "kvr",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "kxd",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "lce",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "lcf",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "liw",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "max",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "meo",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "mfa",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "mfb",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "min",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "mqg",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "msi",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "mui",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "orn",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "ors",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "pel",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "pse",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "tmw",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "urk",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "vkk",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "vkt",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "xmm",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "zlm",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ms: {
                _desired: "zmi",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ne: {
                _desired: "dty",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              om: {
                _desired: "gax",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              om: {
                _desired: "hae",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              om: {
                _desired: "orc",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              or: {
                _desired: "spv",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ps: {
                _desired: "pbt",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              ps: {
                _desired: "pst",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qub",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qud",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "quf",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qug",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "quh",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "quk",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qul",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qup",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qur",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qus",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "quw",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qux",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "quy",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qva",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qvc",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qve",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qvh",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qvi",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qvj",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qvl",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qvm",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qvn",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qvo",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qvp",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qvs",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qvw",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qvz",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qwa",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qwc",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qwh",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qws",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qxa",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qxc",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qxh",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qxl",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qxn",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qxo",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qxp",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qxr",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qxt",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qxu",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              qu: {
                _desired: "qxw",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              sc: {
                _desired: "sdc",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              sc: {
                _desired: "sdn",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              sc: {
                _desired: "sro",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              sq: {
                _desired: "aae",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              sq: {
                _desired: "aat",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              sq: {
                _desired: "aln",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              syr: {
                _desired: "aii",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              uz: {
                _desired: "uzs",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              yi: {
                _desired: "yih",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              zh: {
                _desired: "cdo",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              zh: {
                _desired: "cjy",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              zh: {
                _desired: "cpx",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              zh: {
                _desired: "czh",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              zh: {
                _desired: "czo",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              zh: {
                _desired: "gan",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              zh: {
                _desired: "hak",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              zh: {
                _desired: "hsn",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              zh: {
                _desired: "lzh",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              zh: {
                _desired: "mnp",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              zh: {
                _desired: "nan",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              zh: {
                _desired: "wuu",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              zh: {
                _desired: "yue",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "*": {
                _desired: "*",
                _distance: "80"
              }
            }, {
              "en-Latn": {
                _desired: "am-Ethi",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "ru-Cyrl": {
                _desired: "az-Latn",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "en-Latn": {
                _desired: "bn-Beng",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "zh-Hans": {
                _desired: "bo-Tibt",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "ru-Cyrl": {
                _desired: "hy-Armn",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "en-Latn": {
                _desired: "ka-Geor",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "en-Latn": {
                _desired: "km-Khmr",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "en-Latn": {
                _desired: "kn-Knda",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "en-Latn": {
                _desired: "lo-Laoo",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "en-Latn": {
                _desired: "ml-Mlym",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "en-Latn": {
                _desired: "my-Mymr",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "en-Latn": {
                _desired: "ne-Deva",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "en-Latn": {
                _desired: "or-Orya",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "en-Latn": {
                _desired: "pa-Guru",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "en-Latn": {
                _desired: "ps-Arab",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "en-Latn": {
                _desired: "sd-Arab",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "en-Latn": {
                _desired: "si-Sinh",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "en-Latn": {
                _desired: "ta-Taml",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "en-Latn": {
                _desired: "te-Telu",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "en-Latn": {
                _desired: "ti-Ethi",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "ru-Cyrl": {
                _desired: "tk-Latn",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "en-Latn": {
                _desired: "ur-Arab",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "ru-Cyrl": {
                _desired: "uz-Latn",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "en-Latn": {
                _desired: "yi-Hebr",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "sr-Cyrl": {
                _desired: "sr-Latn",
                _distance: "5"
              }
            }, {
              "zh-Hans": {
                _desired: "za-Latn",
                _distance: "10",
                _oneway: "true"
              }
            }, {
              "zh-Hans": {
                _desired: "zh-Hani",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              "zh-Hant": {
                _desired: "zh-Hani",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              "ar-Arab": {
                _desired: "ar-Latn",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              "bn-Beng": {
                _desired: "bn-Latn",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              "gu-Gujr": {
                _desired: "gu-Latn",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              "hi-Deva": {
                _desired: "hi-Latn",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              "kn-Knda": {
                _desired: "kn-Latn",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              "ml-Mlym": {
                _desired: "ml-Latn",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              "mr-Deva": {
                _desired: "mr-Latn",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              "ta-Taml": {
                _desired: "ta-Latn",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              "te-Telu": {
                _desired: "te-Latn",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              "zh-Hans": {
                _desired: "zh-Latn",
                _distance: "20",
                _oneway: "true"
              }
            }, {
              "ja-Jpan": {
                _desired: "ja-Latn",
                _distance: "5",
                _oneway: "true"
              }
            }, {
              "ja-Jpan": {
                _desired: "ja-Hani",
                _distance: "5",
                _oneway: "true"
              }
            }, {
              "ja-Jpan": {
                _desired: "ja-Hira",
                _distance: "5",
                _oneway: "true"
              }
            }, {
              "ja-Jpan": {
                _desired: "ja-Kana",
                _distance: "5",
                _oneway: "true"
              }
            }, {
              "ja-Jpan": {
                _desired: "ja-Hrkt",
                _distance: "5",
                _oneway: "true"
              }
            }, {
              "ja-Hrkt": {
                _desired: "ja-Hira",
                _distance: "5",
                _oneway: "true"
              }
            }, {
              "ja-Hrkt": {
                _desired: "ja-Kana",
                _distance: "5",
                _oneway: "true"
              }
            }, {
              "ko-Kore": {
                _desired: "ko-Hani",
                _distance: "5",
                _oneway: "true"
              }
            }, {
              "ko-Kore": {
                _desired: "ko-Hang",
                _distance: "5",
                _oneway: "true"
              }
            }, {
              "ko-Kore": {
                _desired: "ko-Jamo",
                _distance: "5",
                _oneway: "true"
              }
            }, {
              "ko-Hang": {
                _desired: "ko-Jamo",
                _distance: "5",
                _oneway: "true"
              }
            }, {
              "*-*": {
                _desired: "*-*",
                _distance: "50"
              }
            }, {
              "ar-*-$maghreb": {
                _desired: "ar-*-$maghreb",
                _distance: "4"
              }
            }, {
              "ar-*-$!maghreb": {
                _desired: "ar-*-$!maghreb",
                _distance: "4"
              }
            }, {
              "ar-*-*": {
                _desired: "ar-*-*",
                _distance: "5"
              }
            }, {
              "en-*-$enUS": {
                _desired: "en-*-$enUS",
                _distance: "4"
              }
            }, {
              "en-*-GB": {
                _desired: "en-*-$!enUS",
                _distance: "3"
              }
            }, {
              "en-*-$!enUS": {
                _desired: "en-*-$!enUS",
                _distance: "4"
              }
            }, {
              "en-*-*": {
                _desired: "en-*-*",
                _distance: "5"
              }
            }, {
              "es-*-$americas": {
                _desired: "es-*-$americas",
                _distance: "4"
              }
            }, {
              "es-*-$!americas": {
                _desired: "es-*-$!americas",
                _distance: "4"
              }
            }, {
              "es-*-*": {
                _desired: "es-*-*",
                _distance: "5"
              }
            }, {
              "pt-*-$americas": {
                _desired: "pt-*-$americas",
                _distance: "4"
              }
            }, {
              "pt-*-$!americas": {
                _desired: "pt-*-$!americas",
                _distance: "4"
              }
            }, {
              "pt-*-*": {
                _desired: "pt-*-*",
                _distance: "5"
              }
            }, {
              "zh-Hant-$cnsar": {
                _desired: "zh-Hant-$cnsar",
                _distance: "4"
              }
            }, {
              "zh-Hant-$!cnsar": {
                _desired: "zh-Hant-$!cnsar",
                _distance: "4"
              }
            }, {
              "zh-Hant-*": {
                _desired: "zh-Hant-*",
                _distance: "5"
              }
            }, {
              "*-*-*": {
                _desired: "*-*-*",
                _distance: "4"
              }
            }]
          }
        }
      },
      regions = {
        "001": ["001", "001-status-grouping", "002", "005", "009", "011", "013", "014", "015", "017", "018", "019", "021", "029", "030", "034", "035", "039", "053", "054", "057", "061", "142", "143", "145", "150", "151", "154", "155", "AC", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CP", "CQ", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DG", "DJ", "DK", "DM", "DO", "DZ", "EA", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "EU", "EZ", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "IC", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "QO", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TA", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "UN", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"],
        "002": ["002", "002-status-grouping", "011", "014", "015", "017", "018", "202", "AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "CV", "DJ", "DZ", "EA", "EG", "EH", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "IC", "IO", "KE", "KM", "LR", "LS", "LY", "MA", "MG", "ML", "MR", "MU", "MW", "MZ", "NA", "NE", "NG", "RE", "RW", "SC", "SD", "SH", "SL", "SN", "SO", "SS", "ST", "SZ", "TD", "TF", "TG", "TN", "TZ", "UG", "YT", "ZA", "ZM", "ZW"],
        "003": ["003", "013", "021", "029", "AG", "AI", "AW", "BB", "BL", "BM", "BQ", "BS", "BZ", "CA", "CR", "CU", "CW", "DM", "DO", "GD", "GL", "GP", "GT", "HN", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PM", "PR", "SV", "SX", "TC", "TT", "US", "VC", "VG", "VI"],
        "005": ["005", "AR", "BO", "BR", "BV", "CL", "CO", "EC", "FK", "GF", "GS", "GY", "PE", "PY", "SR", "UY", "VE"],
        "009": ["009", "053", "054", "057", "061", "AC", "AQ", "AS", "AU", "CC", "CK", "CP", "CX", "DG", "FJ", "FM", "GU", "HM", "KI", "MH", "MP", "NC", "NF", "NR", "NU", "NZ", "PF", "PG", "PN", "PW", "QO", "SB", "TA", "TK", "TO", "TV", "UM", "VU", "WF", "WS"],
        "011": ["011", "BF", "BJ", "CI", "CV", "GH", "GM", "GN", "GW", "LR", "ML", "MR", "NE", "NG", "SH", "SL", "SN", "TG"],
        "013": ["013", "BZ", "CR", "GT", "HN", "MX", "NI", "PA", "SV"],
        "014": ["014", "BI", "DJ", "ER", "ET", "IO", "KE", "KM", "MG", "MU", "MW", "MZ", "RE", "RW", "SC", "SO", "SS", "TF", "TZ", "UG", "YT", "ZM", "ZW"],
        "015": ["015", "DZ", "EA", "EG", "EH", "IC", "LY", "MA", "SD", "TN"],
        "017": ["017", "AO", "CD", "CF", "CG", "CM", "GA", "GQ", "ST", "TD"],
        "018": ["018", "BW", "LS", "NA", "SZ", "ZA"],
        "019": ["003", "005", "013", "019", "019-status-grouping", "021", "029", "419", "AG", "AI", "AR", "AW", "BB", "BL", "BM", "BO", "BQ", "BR", "BS", "BV", "BZ", "CA", "CL", "CO", "CR", "CU", "CW", "DM", "DO", "EC", "FK", "GD", "GF", "GL", "GP", "GS", "GT", "GY", "HN", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PE", "PM", "PR", "PY", "SR", "SV", "SX", "TC", "TT", "US", "UY", "VC", "VE", "VG", "VI"],
        "021": ["021", "BM", "CA", "GL", "PM", "US"],
        "029": ["029", "AG", "AI", "AW", "BB", "BL", "BQ", "BS", "CU", "CW", "DM", "DO", "GD", "GP", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"],
        "030": ["030", "CN", "HK", "JP", "KP", "KR", "MN", "MO", "TW"],
        "034": ["034", "AF", "BD", "BT", "IN", "IR", "LK", "MV", "NP", "PK"],
        "035": ["035", "BN", "ID", "KH", "LA", "MM", "MY", "PH", "SG", "TH", "TL", "VN"],
        "039": ["039", "AD", "AL", "BA", "ES", "GI", "GR", "HR", "IT", "ME", "MK", "MT", "PT", "RS", "SI", "SM", "VA", "XK"],
        "053": ["053", "AU", "CC", "CX", "HM", "NF", "NZ"],
        "054": ["054", "FJ", "NC", "PG", "SB", "VU"],
        "057": ["057", "FM", "GU", "KI", "MH", "MP", "NR", "PW", "UM"],
        "061": ["061", "AS", "CK", "NU", "PF", "PN", "TK", "TO", "TV", "WF", "WS"],
        142: ["030", "034", "035", "142", "143", "145", "AE", "AF", "AM", "AZ", "BD", "BH", "BN", "BT", "CN", "CY", "GE", "HK", "ID", "IL", "IN", "IQ", "IR", "JO", "JP", "KG", "KH", "KP", "KR", "KW", "KZ", "LA", "LB", "LK", "MM", "MN", "MO", "MV", "MY", "NP", "OM", "PH", "PK", "PS", "QA", "SA", "SG", "SY", "TH", "TJ", "TL", "TM", "TR", "TW", "UZ", "VN", "YE"],
        143: ["143", "KG", "KZ", "TJ", "TM", "UZ"],
        145: ["145", "AE", "AM", "AZ", "BH", "CY", "GE", "IL", "IQ", "JO", "KW", "LB", "OM", "PS", "QA", "SA", "SY", "TR", "YE"],
        150: ["039", "150", "151", "154", "155", "AD", "AL", "AT", "AX", "BA", "BE", "BG", "BY", "CH", "CQ", "CZ", "DE", "DK", "EE", "ES", "FI", "FO", "FR", "GB", "GG", "GI", "GR", "HR", "HU", "IE", "IM", "IS", "IT", "JE", "LI", "LT", "LU", "LV", "MC", "MD", "ME", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RS", "RU", "SE", "SI", "SJ", "SK", "SM", "UA", "VA", "XK"],
        151: ["151", "BG", "BY", "CZ", "HU", "MD", "PL", "RO", "RU", "SK", "UA"],
        154: ["154", "AX", "CQ", "DK", "EE", "FI", "FO", "GB", "GG", "IE", "IM", "IS", "JE", "LT", "LV", "NO", "SE", "SJ"],
        155: ["155", "AT", "BE", "CH", "DE", "FR", "LI", "LU", "MC", "NL"],
        202: ["011", "014", "017", "018", "202", "AO", "BF", "BI", "BJ", "BW", "CD", "CF", "CG", "CI", "CM", "CV", "DJ", "ER", "ET", "GA", "GH", "GM", "GN", "GQ", "GW", "IO", "KE", "KM", "LR", "LS", "MG", "ML", "MR", "MU", "MW", "MZ", "NA", "NE", "NG", "RE", "RW", "SC", "SH", "SL", "SN", "SO", "SS", "ST", "SZ", "TD", "TF", "TG", "TZ", "UG", "YT", "ZA", "ZM", "ZW"],
        419: ["005", "013", "029", "419", "AG", "AI", "AR", "AW", "BB", "BL", "BO", "BQ", "BR", "BS", "BV", "BZ", "CL", "CO", "CR", "CU", "CW", "DM", "DO", "EC", "FK", "GD", "GF", "GP", "GS", "GT", "GY", "HN", "HT", "JM", "KN", "KY", "LC", "MF", "MQ", "MS", "MX", "NI", "PA", "PE", "PR", "PY", "SR", "SV", "SX", "TC", "TT", "UY", "VC", "VE", "VG", "VI"],
        EU: ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "EU", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"],
        EZ: ["AT", "BE", "CY", "DE", "EE", "ES", "EZ", "FI", "FR", "GR", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PT", "SI", "SK"],
        QO: ["AC", "AQ", "CP", "DG", "QO", "TA"],
        UN: ["AD", "AE", "AF", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CF", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IR", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MM", "MN", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PW", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SY", "SZ", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TZ", "UA", "UG", "UN", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "YE", "ZA", "ZM", "ZW"]
      },
      utils_UNICODE_EXTENSION_SEQUENCE_REGEX = /-u(?:-[0-9a-z]{2,8})+/gi;
    function utils_invariant(condition, message) {
      var Err = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Error;
      if (!condition) throw new Err(message);
    }
    var PROCESSED_DATA;
    function isMatched(locale, languageMatchInfoLocale, matchVariables) {
      var _languageMatchInfoLoc = languageMatchInfoLocale.split("-"),
        _languageMatchInfoLoc2 = _slicedToArray(_languageMatchInfoLoc, 3),
        language = _languageMatchInfoLoc2[0],
        script = _languageMatchInfoLoc2[1],
        region = _languageMatchInfoLoc2[2];
      var matches = !0;
      if (region && "$" === region[0]) {
        var shouldInclude = "!" !== region[1],
          expandedMatchedRegions = (shouldInclude ? matchVariables[region.slice(1)] : matchVariables[region.slice(2)]).map(function (r) {
            return regions[r] || [r];
          }).reduce(function (all, list) {
            return [].concat(_toConsumableArray(all), _toConsumableArray(list));
          }, []);
        matches && (matches = !(expandedMatchedRegions.indexOf(locale.region || "") > -1 != shouldInclude));
      } else matches && (matches = !locale.region || "*" === region || region === locale.region);
      return matches && (matches = !locale.script || "*" === script || script === locale.script), matches && (matches = !locale.language || "*" === language || language === locale.language), matches;
    }
    function serializeLSR(lsr) {
      return [lsr.language, lsr.script, lsr.region].filter(Boolean).join("-");
    }
    function findMatchingDistanceForLSR(desired, supported, data) {
      var _iterator2 = _createForOfIteratorHelper(data.matches),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var d = _step2.value;
          var matches = isMatched(desired, d.desired, data.matchVariables) && isMatched(supported, d.supported, data.matchVariables);
          if (d.oneway || matches || (matches = isMatched(desired, d.supported, data.matchVariables) && isMatched(supported, d.desired, data.matchVariables)), matches) {
            var distance = 10 * d.distance;
            return data.paradigmLocales.indexOf(serializeLSR(desired)) > -1 != data.paradigmLocales.indexOf(serializeLSR(supported)) > -1 ? distance - 1 : distance;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      throw new Error("No matching distance found");
    }
    var findMatchingDistance = memoize(function findMatchingDistanceImpl(desired, supported) {
      var desiredLocale = new Intl.Locale(desired).maximize(),
        supportedLocale = new Intl.Locale(supported).maximize(),
        desiredLSR = {
          language: desiredLocale.language,
          script: desiredLocale.script || "",
          region: desiredLocale.region || ""
        },
        supportedLSR = {
          language: supportedLocale.language,
          script: supportedLocale.script || "",
          region: supportedLocale.region || ""
        };
      var matchingDistance = 0;
      var data = function processData() {
        if (!PROCESSED_DATA) {
          var _languageMatching_dat;
          var paradigmLocales = (_languageMatching_dat = languageMatching_data.supplemental.languageMatching["written-new"][0]) === null || _languageMatching_dat === void 0 || (_languageMatching_dat = _languageMatching_dat.paradigmLocales) === null || _languageMatching_dat === void 0 ? void 0 : _languageMatching_dat._locales.split(" "),
            matchVariables = languageMatching_data.supplemental.languageMatching["written-new"].slice(1, 5),
            matches = languageMatching_data.supplemental.languageMatching["written-new"].slice(5).map(function (d) {
              var key = Object.keys(d)[0],
                value = d[key];
              return {
                supported: key,
                desired: value._desired,
                distance: +value._distance,
                oneway: "true" === value.oneway
              };
            }, {});
          PROCESSED_DATA = {
            matches: matches,
            matchVariables: matchVariables.reduce(function (all, d) {
              var key = Object.keys(d)[0],
                value = d[key];
              return all[key.slice(1)] = value._value.split("+"), all;
            }, {}),
            paradigmLocales: [].concat(_toConsumableArray(paradigmLocales), _toConsumableArray(paradigmLocales.map(function (l) {
              return new Intl.Locale(l.replace(/_/g, "-")).maximize().toString();
            })))
          };
        }
        return PROCESSED_DATA;
      }();
      return desiredLSR.language !== supportedLSR.language && (matchingDistance += findMatchingDistanceForLSR({
        language: desiredLocale.language,
        script: "",
        region: ""
      }, {
        language: supportedLocale.language,
        script: "",
        region: ""
      }, data)), desiredLSR.script !== supportedLSR.script && (matchingDistance += findMatchingDistanceForLSR({
        language: desiredLocale.language,
        script: desiredLSR.script,
        region: ""
      }, {
        language: supportedLocale.language,
        script: supportedLSR.script,
        region: ""
      }, data)), desiredLSR.region !== supportedLSR.region && (matchingDistance += findMatchingDistanceForLSR(desiredLSR, supportedLSR, data)), matchingDistance;
    }, {
      serializer: function serializer(args) {
        return "".concat(args[0], "|").concat(args[1]);
      }
    });
    function getFallbackCandidates(locale) {
      var candidates = [];
      var current = locale;
      for (; current;) {
        candidates.push(current);
        var lastDash = current.lastIndexOf("-");
        if (-1 === lastDash) break;
        current = current.substring(0, lastDash);
      }
      return candidates;
    }
    var canonicalizedSupportedCache = new WeakMap();
    function LookupSupportedLocales(availableLocales, requestedLocales) {
      var subset = [];
      var _iterator3 = _createForOfIteratorHelper(requestedLocales),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var locale = _step3.value;
          var availableLocale = BestAvailableLocale(availableLocales, locale.replace(utils_UNICODE_EXTENSION_SEQUENCE_REGEX, ""));
          availableLocale && subset.push(availableLocale);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return subset;
    }
    function GetOption(opts, prop, type, values, fallback) {
      if ("object" != _typeof(opts)) throw new TypeError("Options must be an object");
      var value = opts[prop];
      if (void 0 !== value) {
        if ("boolean" !== type && "string" !== type) throw new TypeError("invalid type");
        if ("boolean" === type && (value = Boolean(value)), "string" === type && (value = function ToString(o) {
          if ("symbol" == _typeof(o)) throw TypeError("Cannot convert a Symbol value to a string");
          return String(o);
        }(value)), void 0 !== values && !values.filter(function (val) {
          return val == value;
        }).length) throw new RangeError("".concat(value, " is not within ").concat(values.join(", ")));
        return value;
      }
      return fallback;
    }
    function CanonicalizeLocaleList(locales) {
      return Intl.getCanonicalLocales(locales);
    }
    var OFFSET_TIMEZONE_PREFIX_REGEX = /^[+-]/,
      OFFSET_TIMEZONE_FORMAT_REGEX = /^([+-])(\d{2})(?::?(\d{2}))?(?::?(\d{2}))?(?:\.(\d{1,9}))?$/;
    function IsValidTimeZoneName(tz, _ref2) {
      var zoneNamesFromData = _ref2.zoneNamesFromData,
        uppercaseLinks = _ref2.uppercaseLinks;
      if (function IsTimeZoneOffsetString(offsetString) {
        if (!OFFSET_TIMEZONE_PREFIX_REGEX.test(offsetString)) return !1;
        var match = OFFSET_TIMEZONE_FORMAT_REGEX.exec(offsetString);
        if (!match) return !1;
        var hours = parseInt(match[2], 10),
          minutes = match[3] ? parseInt(match[3], 10) : 0,
          seconds = match[4] ? parseInt(match[4], 10) : 0;
        return !(hours > 23 || minutes > 59 || seconds > 59);
      }(tz)) return !0;
      var uppercasedTz = tz.toUpperCase(),
        zoneNames = new Set(),
        linkNames = new Set();
      return zoneNamesFromData.map(function (z) {
        return z.toUpperCase();
      }).forEach(function (z) {
        return zoneNames.add(z);
      }), Object.keys(uppercaseLinks).forEach(function (linkName) {
        linkNames.add(linkName.toUpperCase()), zoneNames.add(uppercaseLinks[linkName].toUpperCase());
      }), !(!zoneNames.has(uppercasedTz) && !linkNames.has(uppercasedTz));
    }
    var CanonicalizeTimeZoneName_OFFSET_TIMEZONE_PREFIX_REGEX = /^[+-]/,
      CanonicalizeTimeZoneName_OFFSET_TIMEZONE_FORMAT_REGEX = /^([+-])(\d{2})(?::?(\d{2}))?(?::?(\d{2}))?(?:\.(\d{1,9}))?$/,
      TRAILING_ZEROS_REGEX = /0+$/;
    function CanonicalizeTimeZoneName(tz, _ref3) {
      var zoneNames = _ref3.zoneNames,
        uppercaseLinks = _ref3.uppercaseLinks;
      if (function CanonicalizeTimeZoneName_IsTimeZoneOffsetString(offsetString) {
        return CanonicalizeTimeZoneName_OFFSET_TIMEZONE_PREFIX_REGEX.test(offsetString);
      }(tz)) return function ParseTimeZoneOffsetString(offsetString) {
        var match = CanonicalizeTimeZoneName_OFFSET_TIMEZONE_FORMAT_REGEX.exec(offsetString);
        if (!match) return offsetString;
        var sign = match[1],
          hours = match[2],
          minutes = match[3] ? match[3] : "00",
          seconds = match[4],
          fractional = match[5];
        var canonical = "".concat(sign).concat(hours, ":").concat(minutes);
        if (seconds && (0 !== parseInt(seconds, 10) || fractional) && (canonical += ":".concat(seconds), fractional)) {
          var trimmedFractional = fractional.replace(TRAILING_ZEROS_REGEX, "");
          trimmedFractional && (canonical += ".".concat(trimmedFractional));
        }
        return canonical;
      }(tz);
      var uppercasedTz = tz.toUpperCase(),
        uppercasedZones = zoneNames.reduce(function (all, z) {
          return all[z.toUpperCase()] = z, all;
        }, {}),
        ianaTimeZone = uppercaseLinks[uppercasedTz] || uppercasedZones[uppercasedTz];
      return "Etc/UTC" === ianaTimeZone || "Etc/GMT" === ianaTimeZone ? "UTC" : ianaTimeZone;
    }
    function PartitionPattern(pattern) {
      var result = [];
      var beginIndex = pattern.indexOf("{"),
        endIndex = 0,
        nextIndex = 0;
      var length = pattern.length;
      for (; beginIndex < pattern.length && beginIndex > -1;) endIndex = pattern.indexOf("}", beginIndex), invariant(endIndex > beginIndex, "Invalid pattern ".concat(pattern)), beginIndex > nextIndex && result.push({
        type: "literal",
        value: pattern.substring(nextIndex, beginIndex)
      }), result.push({
        type: pattern.substring(beginIndex + 1, endIndex),
        value: void 0
      }), nextIndex = endIndex + 1, beginIndex = pattern.indexOf("{", nextIndex);
      return nextIndex < length && result.push({
        type: "literal",
        value: pattern.substring(nextIndex, length)
      }), result;
    }
    var ToLocalTime_OFFSET_TIMEZONE_PREFIX_REGEX = /^[+-]/,
      ToLocalTime_OFFSET_TIMEZONE_FORMAT_REGEX = /^([+-])(\d{2})(?::?(\d{2}))?(?::?(\d{2}))?(?:\.(\d{1,9}))?$/;
    function getApplicableZoneData(t, timeZone, tzData) {
      if (function ToLocalTime_IsTimeZoneOffsetString(offsetString) {
        return ToLocalTime_OFFSET_TIMEZONE_PREFIX_REGEX.test(offsetString);
      }(timeZone)) {
        var offsetMs = function ToLocalTime_ParseTimeZoneOffsetString(offsetString) {
          var match = ToLocalTime_OFFSET_TIMEZONE_FORMAT_REGEX.exec(offsetString);
          if (!match) return 0;
          var sign = "+" === match[1] ? 1 : -1,
            hours = parseInt(match[2], 10),
            minutes = match[3] ? parseInt(match[3], 10) : 0,
            seconds = match[4] ? parseInt(match[4], 10) : 0,
            paddedFractional = ((match[5] || "0") + "000000000").slice(0, 9);
          return sign * (36e5 * hours + 6e4 * minutes + 1e3 * seconds + parseInt(paddedFractional, 10) / 1e6);
        }(timeZone);
        return [offsetMs, !1];
      }
      var zoneData = tzData[timeZone];
      if (!zoneData) return [0, !1];
      var i = 0,
        offset = 0,
        dst = !1;
      for (; i <= zoneData.length; i++) if (i === zoneData.length || 1e3 * zoneData[i][0] > t) {
        var _zoneData = _slicedToArray(zoneData[i - 1], 4);
        offset = _zoneData[2];
        dst = _zoneData[3];
        break;
      }
      return [1e3 * offset, dst];
    }
    function ToLocalTime(t, calendar, timeZone, _ref4) {
      var tzData = _ref4.tzData;
      invariant("gregory" === calendar, "We only support Gregory calendar right now");
      var _getApplicableZoneDat = getApplicableZoneData(t.toNumber(), timeZone, tzData),
        _getApplicableZoneDat2 = _slicedToArray(_getApplicableZoneDat, 2),
        timeZoneOffset = _getApplicableZoneDat2[0],
        inDST = _getApplicableZoneDat2[1],
        tz = t.plus(timeZoneOffset).toNumber(),
        year = YearFromTime(tz);
      return {
        weekday: WeekDay(tz),
        era: year < 0 ? "BC" : "AD",
        year: year,
        relatedYear: void 0,
        yearName: void 0,
        month: MonthFromTime(tz),
        day: DateFromTime(tz),
        hour: HourFromTime(tz),
        minute: MinFromTime(tz),
        second: SecFromTime(tz),
        millisecond: msFromTime(tz),
        inDST: inDST,
        timeZoneOffset: timeZoneOffset
      };
    }
    var DATE_TIME_PROPS = ["weekday", "era", "year", "month", "day", "dayPeriod", "hour", "minute", "second", "fractionalSecondDigits", "timeZoneName"];
    function pad(n) {
      return n < 10 ? "0".concat(n) : String(n);
    }
    function offsetToGmtString(gmtFormat, hourFormat, offsetInMs, style) {
      var offsetInMinutes = Math.floor(offsetInMs / 6e4),
        mins = Math.abs(offsetInMinutes) % 60,
        hours = Math.floor(Math.abs(offsetInMinutes) / 60),
        _hourFormat$split = hourFormat.split(";"),
        _hourFormat$split2 = _slicedToArray(_hourFormat$split, 2),
        positivePattern = _hourFormat$split2[0],
        negativePattern = _hourFormat$split2[1];
      var offsetStr = "",
        pattern = offsetInMs < 0 ? negativePattern : positivePattern;
      return "long" === style ? offsetStr = pattern.replace("HH", pad(hours)).replace("H", String(hours)).replace("mm", pad(mins)).replace("m", String(mins)) : (mins || hours) && (mins || (pattern = pattern.replace(/:?m+/, "")), offsetStr = pattern.replace(/H+/, String(hours)).replace(/m+/, String(mins))), gmtFormat.replace("{0}", offsetStr);
    }
    function FormatDateTimePattern(dtf, patternParts, x, _ref5) {
      var getInternalSlots = _ref5.getInternalSlots,
        localeData = _ref5.localeData,
        getDefaultTimeZone = _ref5.getDefaultTimeZone,
        tzData = _ref5.tzData;
      x = TimeClip(x);
      var internalSlots = getInternalSlots(dtf),
        dataLocaleData = localeData[internalSlots.dataLocale],
        locale = internalSlots.locale,
        nfOptions = Object.create(null);
      nfOptions.useGrouping = !1;
      var nf = createMemoizedNumberFormat(locale, nfOptions),
        nf2Options = Object.create(null);
      nf2Options.minimumIntegerDigits = 2, nf2Options.useGrouping = !1;
      var nf2 = createMemoizedNumberFormat(locale, nf2Options),
        fractionalSecondDigits = internalSlots.fractionalSecondDigits;
      var nf3;
      if (void 0 !== fractionalSecondDigits) {
        var nf3Options = Object.create(null);
        nf3Options.minimumIntegerDigits = fractionalSecondDigits, nf3Options.useGrouping = !1, nf3 = createMemoizedNumberFormat(locale, nf3Options);
      }
      var tm = ToLocalTime(x, internalSlots.calendar, internalSlots.timeZone, {
          tzData: tzData
        }),
        result = [],
        hasMonth = patternParts.some(function (part) {
          return "month" === part.type;
        }),
        hasOtherDateFields = patternParts.some(function (part) {
          return "day" === part.type || "year" === part.type || "weekday" === part.type || "era" === part.type;
        }),
        isMonthStandalone = hasMonth && !hasOtherDateFields;
      var _iterator4 = _createForOfIteratorHelper(patternParts),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var patternPart = _step4.value;
          var p = patternPart.type;
          if ("literal" === p) result.push({
            type: "literal",
            value: patternPart.value
          });else if ("fractionalSecondDigits" === p) {
            var v = new decimal(tm.millisecond).times(10).pow((fractionalSecondDigits || 0) - 3).floor().toNumber();
            result.push({
              type: "fractionalSecond",
              value: nf3.format(v)
            });
          } else if ("dayPeriod" === p) {
            var fv = tm[internalSlots.dayPeriod];
            result.push({
              type: p,
              value: fv
            });
          } else if ("timeZoneName" === p) {
            var f = internalSlots.timeZoneName;
            var _fv = void 0;
            var timeZoneName = dataLocaleData.timeZoneName,
              gmtFormat = dataLocaleData.gmtFormat,
              hourFormat = dataLocaleData.hourFormat,
              timeZoneData = timeZoneName[internalSlots.timeZone || getDefaultTimeZone()];
            if (timeZoneData && timeZoneData[f]) {
              var names = timeZoneData[f];
              _fv = tm.inDST && names.length >= 2 && names[0] === names[1] ? offsetToGmtString(gmtFormat, hourFormat, tm.timeZoneOffset, f) : names[+tm.inDST];
            } else _fv = offsetToGmtString(gmtFormat, hourFormat, tm.timeZoneOffset, f);
            result.push({
              type: p,
              value: _fv
            });
          } else if (DATE_TIME_PROPS.indexOf(p) > -1) {
            var _fv2 = "";
            var _f = internalSlots[p];
            var _v = tm[p];
            "year" === p && _v <= 0 && (_v = 1 - _v), "month" === p && _v++;
            var hourCycle = internalSlots.hourCycle;
            if ("hour" !== p || "h11" !== hourCycle && "h12" !== hourCycle || (_v %= 12, 0 === _v && "h12" === hourCycle && (_v = 12)), "hour" === p && "h24" === hourCycle && 0 === _v && (_v = 24), "numeric" === _f) _fv2 = nf.format(_v);else if ("2-digit" === _f) _fv2 = nf2.format(_v), _fv2.length > 2 && (_fv2 = _fv2.slice(_fv2.length - 2, _fv2.length));else if ("narrow" === _f || "short" === _f || "long" === _f) if ("era" === p) _fv2 = dataLocaleData[p][_f][_v];else if ("month" === p) {
              _fv2 = (isMonthStandalone && dataLocaleData.monthStandalone ? dataLocaleData.monthStandalone : dataLocaleData.month)[_f][_v - 1];
            } else _fv2 = dataLocaleData[p][_f][_v];
            result.push({
              type: p,
              value: _fv2
            });
          } else if ("ampm" === p) {
            var _fv3 = void 0;
            _fv3 = tm.hour > 11 ? dataLocaleData.pm : dataLocaleData.am, result.push({
              type: "dayPeriod",
              value: _fv3
            });
          } else if ("relatedYear" === p) {
            var _v2 = tm.relatedYear,
              _fv4 = nf.format(_v2);
            result.push({
              type: "relatedYear",
              value: _fv4
            });
          } else if ("yearName" === p) {
            var _v3 = tm.yearName,
              _fv5 = nf.format(_v3);
            result.push({
              type: "yearName",
              value: _fv5
            });
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return result;
    }
    function PartitionDateTimePattern(dtf, x, implDetails) {
      invariant(!(x = TimeClip(x)).isNaN(), "Invalid time", RangeError);
      var getInternalSlots = implDetails.getInternalSlots,
        internalSlots = getInternalSlots(dtf),
        pattern = internalSlots.pattern;
      return FormatDateTimePattern(dtf, PartitionPattern(pattern), x, implDetails);
    }
    var RangePatternType = function (RangePatternType) {
      return RangePatternType.startRange = "startRange", RangePatternType.shared = "shared", RangePatternType.endRange = "endRange", RangePatternType;
    }({});
    var TABLE_2_FIELDS = ["era", "year", "month", "day", "dayPeriod", "ampm", "hour", "minute", "second", "fractionalSecondDigits"];
    function PartitionDateTimeRangePattern(dtf, x, y, implDetails) {
      if ((x = TimeClip(x)).isNaN()) throw new RangeError("Invalid start time");
      if ((y = TimeClip(y)).isNaN()) throw new RangeError("Invalid end time");
      var getInternalSlots = implDetails.getInternalSlots,
        tzData = implDetails.tzData,
        localeData = implDetails.localeData,
        internalSlots = getInternalSlots(dtf),
        dataLocaleData = localeData[internalSlots.dataLocale],
        tm1 = ToLocalTime(x, internalSlots.calendar, internalSlots.timeZone, {
          tzData: tzData
        }),
        tm2 = ToLocalTime(y, internalSlots.calendar, internalSlots.timeZone, {
          tzData: tzData
        }),
        pattern = internalSlots.pattern,
        rangePatterns = internalSlots.rangePatterns;
      var rangePattern,
        dateFieldsPracticallyEqual = !0,
        patternContainsLargerDateField = !1;
      for (var _i = 0, _TABLE_2_FIELDS = TABLE_2_FIELDS; _i < _TABLE_2_FIELDS.length; _i++) {
        var fieldName = _TABLE_2_FIELDS[_i];
        if (dateFieldsPracticallyEqual && !patternContainsLargerDateField) {
          var rp = fieldName in rangePatterns ? rangePatterns[fieldName] : void 0;
          if (void 0 !== rangePattern && void 0 === rp) patternContainsLargerDateField = !0;else if (rangePattern = rp, "ampm" === fieldName) {
            var v1 = tm1.hour,
              v2 = tm2.hour;
            (v1 > 11 && v2 < 11 || v1 < 11 && v2 > 11) && (dateFieldsPracticallyEqual = !1);
          } else if ("dayPeriod" === fieldName) ;else if ("fractionalSecondDigits" === fieldName) {
            var fractionalSecondDigits = internalSlots.fractionalSecondDigits;
            void 0 === fractionalSecondDigits && (fractionalSecondDigits = 3), SameValue(Math.floor(tm1.millisecond * Math.pow(10, fractionalSecondDigits - 3)), Math.floor(tm2.millisecond * Math.pow(10, fractionalSecondDigits - 3))) || (dateFieldsPracticallyEqual = !1);
          } else {
            SameValue(tm1[fieldName], tm2[fieldName]) || (dateFieldsPracticallyEqual = !1);
          }
        }
      }
      if (dateFieldsPracticallyEqual) {
        var _result2 = FormatDateTimePattern(dtf, PartitionPattern(pattern), x, implDetails);
        var _iterator5 = _createForOfIteratorHelper(_result2),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var r = _step5.value;
            r.source = RangePatternType.shared;
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        return _result2;
      }
      var result = [];
      if (void 0 === rangePattern) {
        if (rangePattern = rangePatterns.default, !rangePattern) {
          var fallback = dataLocaleData.intervalFormatFallback,
            start0 = fallback.indexOf("{0}"),
            start1 = fallback.indexOf("{1}"),
            separator = start0 < start1 ? fallback.substring(start0 + 3, start1) : fallback.substring(start1 + 3, start0);
          rangePattern = {
            patternParts: start0 < start1 ? [{
              source: RangePatternType.startRange,
              pattern: "{0}"
            }, {
              source: RangePatternType.shared,
              pattern: separator
            }, {
              source: RangePatternType.endRange,
              pattern: "{1}"
            }] : [{
              source: RangePatternType.endRange,
              pattern: "{1}"
            }, {
              source: RangePatternType.shared,
              pattern: separator
            }, {
              source: RangePatternType.startRange,
              pattern: "{0}"
            }]
          };
        }
        var _iterator6 = _createForOfIteratorHelper(rangePattern.patternParts),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var patternPart = _step6.value;
            "{0}" !== patternPart.pattern && "{1}" !== patternPart.pattern || (patternPart.pattern = pattern);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
      var _iterator7 = _createForOfIteratorHelper(rangePattern.patternParts),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var rangePatternPart = _step7.value;
          var source = rangePatternPart.source,
            _pattern = rangePatternPart.pattern;
          var z = void 0;
          z = source === RangePatternType.startRange || source === RangePatternType.shared ? x : y;
          var partResult = FormatDateTimePattern(dtf, PartitionPattern(_pattern), z, implDetails);
          var _iterator8 = _createForOfIteratorHelper(partResult),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var _r = _step8.value;
              _r.source = source;
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
          result = result.concat(partResult);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      return result;
    }
    function FormatDateTimeToParts(dtf, x, implDetails) {
      var parts = PartitionDateTimePattern(dtf, x, implDetails),
        result = function ArrayCreate(len) {
          return Array.from({
            length: len
          });
        }(0);
      var _iterator9 = _createForOfIteratorHelper(parts),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var part = _step9.value;
          result.push({
            type: part.type,
            value: part.value
          });
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      return result;
    }
    function GetNumberOption(options, property, minimum, maximum, fallback) {
      return function DefaultNumberOption(inputVal, min, max, fallback) {
        if (void 0 === inputVal) return fallback;
        var val = Number(inputVal);
        if (isNaN(val) || val < min || val > max) throw new RangeError("".concat(val, " is outside of range [").concat(min, ", ").concat(max, "]"));
        return Math.floor(val);
      }(options[property], minimum, maximum, fallback);
    }
    function BestFitMatcher(availableLocales, requestedLocales, getDefaultLocale) {
      var foundLocale, extension;
      var noExtensionLocales = [],
        noExtensionLocaleMap = requestedLocales.reduce(function (all, l) {
          var noExtensionLocale = l.replace(utils_UNICODE_EXTENSION_SEQUENCE_REGEX, "");
          return noExtensionLocales.push(noExtensionLocale), all[noExtensionLocale] = l, all;
        }, {}),
        result = function findBestMatch(requestedLocales, supportedLocales) {
          var threshold = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 838;
          var lowestDistance = 1 / 0,
            result = {
              matchedDesiredLocale: "",
              distances: {}
            },
            canonicalizedSupportedLocales = canonicalizedSupportedCache.get(supportedLocales);
          canonicalizedSupportedLocales || (canonicalizedSupportedLocales = supportedLocales.map(function (locale) {
            try {
              return Intl.getCanonicalLocales([locale])[0] || locale;
            } catch (_unused2) {
              return locale;
            }
          }), canonicalizedSupportedCache.set(supportedLocales, canonicalizedSupportedLocales));
          var supportedSet = new Set(canonicalizedSupportedLocales);
          for (var i = 0; i < requestedLocales.length; i++) {
            var desired = requestedLocales[i];
            if (supportedSet.has(desired)) {
              var distance = 0 + 40 * i;
              if (result.distances[desired] = _defineProperty({}, desired, distance), distance < lowestDistance && (lowestDistance = distance, result.matchedDesiredLocale = desired, result.matchedSupportedLocale = desired), 0 === i) return result;
            }
          }
          for (var _i2 = 0; _i2 < requestedLocales.length; _i2++) {
            var _desired = requestedLocales[_i2];
            try {
              var maximized = new Intl.Locale(_desired).maximize().toString();
              if (maximized !== _desired) {
                var maximizedCandidates = getFallbackCandidates(maximized);
                for (var j = 0; j < maximizedCandidates.length; j++) {
                  var candidate = maximizedCandidates[j];
                  if (candidate !== _desired && supportedSet.has(candidate)) {
                    var _distance = void 0;
                    try {
                      _distance = new Intl.Locale(candidate).maximize().toString() === maximized ? 0 + 40 * _i2 : 10 * j + 40 * _i2;
                    } catch (_unused3) {
                      _distance = 10 * j + 40 * _i2;
                    }
                    result.distances[_desired] || (result.distances[_desired] = {}), result.distances[_desired][candidate] = _distance, _distance < lowestDistance && (lowestDistance = _distance, result.matchedDesiredLocale = _desired, result.matchedSupportedLocale = candidate);
                    break;
                  }
                }
              }
            } catch (_unused4) {}
          }
          return result.matchedSupportedLocale && 0 === lowestDistance || (requestedLocales.forEach(function (desired, i) {
            result.distances[desired] || (result.distances[desired] = {}), canonicalizedSupportedLocales.forEach(function (canonicalLocale, supportedIndex) {
              var originalSupported = supportedLocales[supportedIndex],
                finalDistance = findMatchingDistance(desired, canonicalLocale) + 0 + 40 * i;
              result.distances[desired][originalSupported] = finalDistance, finalDistance < lowestDistance && (lowestDistance = finalDistance, result.matchedDesiredLocale = desired, result.matchedSupportedLocale = originalSupported);
            });
          }), lowestDistance >= threshold && (result.matchedDesiredLocale = void 0, result.matchedSupportedLocale = void 0)), result;
        }(noExtensionLocales, availableLocales);
      return result.matchedSupportedLocale && result.matchedDesiredLocale && (foundLocale = result.matchedSupportedLocale, extension = noExtensionLocaleMap[result.matchedDesiredLocale].slice(result.matchedDesiredLocale.length) || void 0), foundLocale ? {
        locale: foundLocale,
        extension: extension
      } : {
        locale: getDefaultLocale()
      };
    }
    function CanonicalizeUValue(ukey, uvalue) {
      var lowerValue = uvalue.toLowerCase();
      return utils_invariant(void 0 !== ukey, "ukey must be defined"), lowerValue;
    }
    function CanonicalizeUnicodeLocaleId(locale) {
      return Intl.getCanonicalLocales(locale)[0];
    }
    function ResolveLocale(availableLocales, requestedLocales, options, relevantExtensionKeys, localeData, getDefaultLocale) {
      var r;
      r = "lookup" === options.localeMatcher ? function LookupMatcher(availableLocales, requestedLocales, getDefaultLocale) {
        var result = {
          locale: ""
        };
        var _iterator0 = _createForOfIteratorHelper(requestedLocales),
          _step0;
        try {
          for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
            var locale = _step0.value;
            var noExtensionLocale = locale.replace(utils_UNICODE_EXTENSION_SEQUENCE_REGEX, ""),
              availableLocale = BestAvailableLocale(availableLocales, noExtensionLocale);
            if (availableLocale) return result.locale = availableLocale, locale !== noExtensionLocale && (result.extension = locale.slice(noExtensionLocale.length, locale.length)), result;
          }
        } catch (err) {
          _iterator0.e(err);
        } finally {
          _iterator0.f();
        }
        return result.locale = getDefaultLocale(), result;
      }(Array.from(availableLocales), requestedLocales, getDefaultLocale) : BestFitMatcher(Array.from(availableLocales), requestedLocales, getDefaultLocale), null == r && (r = {
        locale: getDefaultLocale(),
        extension: ""
      });
      var foundLocale = r.locale,
        foundLocaleData = localeData[foundLocale];
      var result = {
        locale: "en",
        dataLocale: foundLocale
      };
      var components, keywords;
      r.extension ? (components = function UnicodeExtensionComponents(extension) {
        utils_invariant(extension === extension.toLowerCase(), "Expected extension to be lowercase"), utils_invariant("-u-" === extension.slice(0, 3), "Expected extension to be a Unicode locale extension");
        var attributes = [],
          keywords = [];
        var keyword,
          size = extension.length,
          k = 3;
        for (; k < size;) {
          var _keyword2;
          var len = void 0,
            e = extension.indexOf("-", k);
          len = -1 === e ? size - k : e - k;
          var subtag = extension.slice(k, k + len);
          utils_invariant(len >= 2, "Expected a subtag to have at least 2 characters"), void 0 === keyword && 2 != len ? -1 === attributes.indexOf(subtag) && attributes.push(subtag) : 2 === len ? (keyword = {
            key: subtag,
            value: ""
          }, void 0 === keywords.find(function (k) {
            var _keyword;
            return k.key === ((_keyword = keyword) === null || _keyword === void 0 ? void 0 : _keyword.key);
          }) && keywords.push(keyword)) : "" === ((_keyword2 = keyword) === null || _keyword2 === void 0 ? void 0 : _keyword2.value) ? keyword.value = subtag : (utils_invariant(void 0 !== keyword, "Expected keyword to be defined"), keyword.value += "-" + subtag), k += len + 1;
        }
        return {
          attributes: attributes,
          keywords: keywords
        };
      }(r.extension), keywords = components.keywords) : keywords = [];
      var supportedKeywords = [];
      var _iterator1 = _createForOfIteratorHelper(relevantExtensionKeys),
        _step1;
      try {
        var _loop = function _loop() {
          var _foundLocaleData$key;
          var key = _step1.value;
          var keyLocaleData = (_foundLocaleData$key = foundLocaleData === null || foundLocaleData === void 0 ? void 0 : foundLocaleData[key]) !== null && _foundLocaleData$key !== void 0 ? _foundLocaleData$key : [];
          utils_invariant(Array.isArray(keyLocaleData), "keyLocaleData for ".concat(key, " must be an array"));
          var supportedKeyword,
            value = keyLocaleData[0];
          utils_invariant(void 0 === value || "string" == typeof value, "value must be a string or undefined");
          var entry = keywords.find(function (k) {
            return k.key === key;
          });
          if (entry) {
            var requestedValue = entry.value;
            "" !== requestedValue ? keyLocaleData.indexOf(requestedValue) > -1 && (value = requestedValue, supportedKeyword = {
              key: key,
              value: value
            }) : keyLocaleData.indexOf("true") > -1 && (value = "true", supportedKeyword = {
              key: key,
              value: value
            });
          }
          var optionsValue = options[key];
          if (utils_invariant(null == optionsValue || "string" == typeof optionsValue, "optionsValue must be a string or undefined"), "string" == typeof optionsValue) {
            optionsValue = CanonicalizeUValue(key.toLowerCase(), optionsValue), "" === optionsValue && (optionsValue = "true");
          }
          optionsValue !== value && keyLocaleData.indexOf(optionsValue) > -1 && (value = optionsValue, supportedKeyword = void 0), supportedKeyword && supportedKeywords.push(supportedKeyword), result[key] = value;
        };
        for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator1.e(err);
      } finally {
        _iterator1.f();
      }
      var supportedAttributes = [];
      return supportedKeywords.length > 0 && (supportedAttributes = [], foundLocale = function InsertUnicodeExtensionAndCanonicalize(locale, attributes, keywords) {
        utils_invariant(-1 === locale.indexOf("-u-"), "Expected locale to not have a Unicode locale extension");
        var extension = "-u";
        var _iterator10 = _createForOfIteratorHelper(attributes),
          _step10;
        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var attr = _step10.value;
            extension += "-".concat(attr);
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
        var _iterator11 = _createForOfIteratorHelper(keywords),
          _step11;
        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var kw = _step11.value;
            var key = kw.key,
              value = kw.value;
            extension += "-".concat(key), "" !== value && (extension += "-".concat(value));
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
        if ("-u" === extension) return CanonicalizeUnicodeLocaleId(locale);
        var newLocale,
          privateIndex = locale.indexOf("-x-");
        newLocale = -1 === privateIndex ? locale + extension : locale.slice(0, privateIndex) + extension + locale.slice(privateIndex);
        return CanonicalizeUnicodeLocaleId(newLocale);
      }(foundLocale, supportedAttributes, supportedKeywords)), result.locale = foundLocale, result;
    }
    var DATE_TIME_REGEX = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,
      expPatternTrimmer = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function matchSkeletonPattern(match, result) {
      var len = match.length;
      switch (match[0]) {
        case "G":
          return result.era = 4 === len ? "long" : 5 === len ? "narrow" : "short", "{era}";
        case "y":
        case "Y":
        case "u":
        case "U":
        case "r":
          return result.year = 2 === len ? "2-digit" : "numeric", "{year}";
        case "q":
        case "Q":
          throw new RangeError("`w/Q` (quarter) patterns are not supported");
        case "M":
        case "L":
          return result.month = ["numeric", "2-digit", "short", "long", "narrow"][len - 1], "{month}";
        case "w":
        case "W":
          throw new RangeError("`w/W` (week of year) patterns are not supported");
        case "d":
          return result.day = ["numeric", "2-digit"][len - 1], "{day}";
        case "D":
        case "F":
        case "g":
          return result.day = "numeric", "{day}";
        case "E":
          return result.weekday = 4 === len ? "long" : 5 === len ? "narrow" : "short", "{weekday}";
        case "e":
        case "c":
          return result.weekday = [void 0, void 0, "short", "long", "narrow", "short"][len - 1], "{weekday}";
        case "a":
        case "b":
        case "B":
          return result.hour12 = !0, "{ampm}";
        case "h":
        case "K":
          return result.hour = ["numeric", "2-digit"][len - 1], result.hour12 = !0, "{hour}";
        case "H":
        case "k":
          return result.hour = ["numeric", "2-digit"][len - 1], "{hour}";
        case "j":
        case "J":
        case "C":
          throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
        case "m":
          return result.minute = ["numeric", "2-digit"][len - 1], "{minute}";
        case "s":
          return result.second = ["numeric", "2-digit"][len - 1], "{second}";
        case "S":
        case "A":
          return result.second = "numeric", "{second}";
        case "z":
        case "Z":
        case "O":
        case "v":
        case "V":
        case "X":
        case "x":
          return result.timeZoneName = len < 4 ? "short" : "long", "{timeZoneName}";
      }
      return "";
    }
    function skeletonTokenToTable2(c) {
      switch (c) {
        case "G":
          return "era";
        case "y":
        case "Y":
        case "u":
        case "U":
        case "r":
          return "year";
        case "M":
        case "L":
          return "month";
        case "d":
        case "D":
        case "F":
        case "g":
          return "day";
        case "a":
        case "b":
        case "B":
          return "ampm";
        case "h":
        case "H":
        case "K":
        case "k":
          return "hour";
        case "m":
          return "minute";
        case "s":
        case "S":
        case "A":
          return "second";
        default:
          throw new RangeError("Invalid range pattern token");
      }
    }
    function processDateTimePattern(pattern, result) {
      var literals = [];
      var pattern12 = pattern.replace(/'{2}/g, "{apostrophe}").replace(/'(.*?)'/g, function (_, literal) {
        return literals.push(literal), "$$".concat(literals.length - 1, "$$");
      }).replace(DATE_TIME_REGEX, function (m) {
        return matchSkeletonPattern(m, result || {});
      });
      return literals.length && (pattern12 = pattern12.replace(/\$\$(\d+)\$\$/g, function (_, i) {
        return literals[+i];
      }).replace(/\{apostrophe\}/g, "'")), [pattern12.replace(/([\s\uFEFF\xA0])\{ampm\}([\s\uFEFF\xA0])/, "$1").replace("{ampm}", "").replace(expPatternTrimmer, ""), pattern12];
    }
    function parseDateTimeSkeleton(skeleton) {
      var rawPattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : skeleton;
      var rangePatterns = arguments.length > 2 ? arguments[2] : undefined;
      var intervalFormatFallback = arguments.length > 3 ? arguments[3] : undefined;
      var result = {
        pattern: "",
        pattern12: "",
        skeleton: skeleton,
        rawPattern: rawPattern,
        rangePatterns: {},
        rangePatterns12: {}
      };
      if (rangePatterns) for (var k in rangePatterns) {
        var key = skeletonTokenToTable2(k),
          _rawPattern = rangePatterns[k],
          intervalResult = {
            patternParts: []
          },
          _processDateTimePatte = processDateTimePattern(_rawPattern, intervalResult),
          _processDateTimePatte2 = _slicedToArray(_processDateTimePatte, 2),
          _pattern2 = _processDateTimePatte2[0],
          _pattern3 = _processDateTimePatte2[1];
        result.rangePatterns[key] = _objectSpread(_objectSpread({}, intervalResult), {}, {
          patternParts: splitRangePattern(_pattern2)
        }), result.rangePatterns12[key] = _objectSpread(_objectSpread({}, intervalResult), {}, {
          patternParts: splitRangePattern(_pattern3)
        });
      }
      if (intervalFormatFallback) {
        var patternParts = function splitFallbackRangePattern(pattern) {
          var parts = pattern.split(/(\{[0|1]\})/g).filter(Boolean);
          return parts.map(function (pattern) {
            switch (pattern) {
              case "{0}":
                return {
                  source: RangePatternType.startRange,
                  pattern: pattern
                };
              case "{1}":
                return {
                  source: RangePatternType.endRange,
                  pattern: pattern
                };
              default:
                return {
                  source: RangePatternType.shared,
                  pattern: pattern
                };
            }
          });
        }(intervalFormatFallback);
        result.rangePatterns.default = {
          patternParts: patternParts
        }, result.rangePatterns12.default = {
          patternParts: patternParts
        };
      }
      skeleton.replace(DATE_TIME_REGEX, function (m) {
        return matchSkeletonPattern(m, result);
      });
      var _processDateTimePatte3 = processDateTimePattern(rawPattern),
        _processDateTimePatte4 = _slicedToArray(_processDateTimePatte3, 2),
        pattern = _processDateTimePatte4[0],
        pattern12 = _processDateTimePatte4[1];
      return result.pattern = pattern, result.pattern12 = pattern12, result;
    }
    function splitRangePattern(pattern) {
      var PART_REGEX = /\{(.*?)\}/g,
        parts = {};
      var match,
        splitIndex = 0;
      for (; match = PART_REGEX.exec(pattern);) {
        if (match[0] in parts) {
          splitIndex = match.index;
          break;
        }
        parts[match[0]] = match.index;
      }
      return splitIndex ? [{
        source: RangePatternType.startRange,
        pattern: pattern.slice(0, splitIndex)
      }, {
        source: RangePatternType.endRange,
        pattern: pattern.slice(splitIndex)
      }] : [{
        source: RangePatternType.startRange,
        pattern: pattern
      }];
    }
    function isNumericType(t) {
      return "numeric" === t || "2-digit" === t;
    }
    function bestFitFormatMatcherScore(options, format) {
      var score = 0;
      options.hour12 && !format.hour12 ? score -= 120 : !options.hour12 && format.hour12 && (score -= 20);
      for (var _i3 = 0, _DATE_TIME_PROPS = DATE_TIME_PROPS; _i3 < _DATE_TIME_PROPS.length; _i3++) {
        var prop = _DATE_TIME_PROPS[_i3];
        var optionsProp = options[prop],
          formatProp = format[prop];
        if (void 0 === optionsProp && void 0 !== formatProp) score -= 20;else if (void 0 !== optionsProp && void 0 === formatProp) score -= 120;else if (optionsProp !== formatProp) if (isNumericType(optionsProp) !== isNumericType(formatProp)) score -= 15;else {
          var values = ["2-digit", "numeric", "narrow", "short", "long"],
            optionsPropIndex = values.indexOf(optionsProp),
            formatPropIndex = values.indexOf(formatProp),
            delta = Math.max(-2, Math.min(formatPropIndex - optionsPropIndex, 2));
          2 === delta ? score -= 6 : 1 === delta ? score -= 3 : -1 === delta ? score -= 6 : -2 === delta && (score -= 8);
        }
      }
      return score;
    }
    function resolveHourCycle(hc, hcDefault, hour12) {
      return null == hc && (hc = hcDefault), void 0 !== hour12 && (hour12 ? hc = "h11" === hcDefault || "h23" === hcDefault ? "h11" : "h12" : (invariant(!hour12, "hour12 must not be set"), hc = "h11" === hcDefault || "h23" === hcDefault ? "h23" : "h24")), hc;
    }
    var TYPE_REGEX = /^[a-z0-9]{3,8}$/i;
    function InitializeDateTimeFormat(dtf, locales, opts, _ref6) {
      var getInternalSlots = _ref6.getInternalSlots,
        availableLocales = _ref6.availableLocales,
        localeData = _ref6.localeData,
        getDefaultLocale = _ref6.getDefaultLocale,
        getDefaultTimeZone = _ref6.getDefaultTimeZone,
        relevantExtensionKeys = _ref6.relevantExtensionKeys,
        tzData = _ref6.tzData,
        uppercaseLinks = _ref6.uppercaseLinks;
      var requestedLocales = CanonicalizeLocaleList(locales),
        options = function ToDateTimeOptions(options, required, defaults) {
          options = void 0 === options ? null : ToObject(options), options = Object.create(options);
          var needDefaults = !0;
          if ("date" === required || "any" === required) for (var _i4 = 0, _arr = ["weekday", "year", "month", "day"]; _i4 < _arr.length; _i4++) {
            var prop = _arr[_i4];
            void 0 !== options[prop] && (needDefaults = !1);
          }
          if ("time" === required || "any" === required) for (var _i5 = 0, _arr2 = ["dayPeriod", "hour", "minute", "second", "fractionalSecondDigits"]; _i5 < _arr2.length; _i5++) {
            var _prop = _arr2[_i5];
            void 0 !== options[_prop] && (needDefaults = !1);
          }
          if (void 0 === options.dateStyle && void 0 === options.timeStyle || (needDefaults = !1), "date" === required && options.timeStyle) throw new TypeError("Intl.DateTimeFormat date was required but timeStyle was included");
          if ("time" === required && options.dateStyle) throw new TypeError("Intl.DateTimeFormat time was required but dateStyle was included");
          if (needDefaults && ("date" === defaults || "all" === defaults)) for (var _i6 = 0, _arr3 = ["year", "month", "day"]; _i6 < _arr3.length; _i6++) {
            var _prop2 = _arr3[_i6];
            options[_prop2] = "numeric";
          }
          if (needDefaults && ("time" === defaults || "all" === defaults)) for (var _i7 = 0, _arr4 = ["hour", "minute", "second"]; _i7 < _arr4.length; _i7++) {
            var _prop3 = _arr4[_i7];
            options[_prop3] = "numeric";
          }
          return options;
        }(opts, "any", "date");
      var opt = Object.create(null),
        matcher = GetOption(options, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
      opt.localeMatcher = matcher;
      var calendar = GetOption(options, "calendar", "string", void 0, void 0);
      if (void 0 !== calendar && !TYPE_REGEX.test(calendar)) throw new RangeError("Malformed calendar");
      var internalSlots = getInternalSlots(dtf);
      opt.ca = calendar;
      var numberingSystem = GetOption(options, "numberingSystem", "string", void 0, void 0);
      if (void 0 !== numberingSystem && !TYPE_REGEX.test(numberingSystem)) throw new RangeError("Malformed numbering system");
      opt.nu = numberingSystem;
      var hour12 = GetOption(options, "hour12", "boolean", void 0, void 0);
      var hourCycle = GetOption(options, "hourCycle", "string", ["h11", "h12", "h23", "h24"], void 0);
      void 0 !== hour12 && (hourCycle = null), opt.hc = hourCycle;
      var r = ResolveLocale(availableLocales, requestedLocales, opt, relevantExtensionKeys, localeData, getDefaultLocale);
      internalSlots.locale = r.locale, calendar = r.ca, internalSlots.calendar = calendar, internalSlots.hourCycle = r.hc, internalSlots.numberingSystem = r.nu;
      var dataLocale = r.dataLocale;
      internalSlots.dataLocale = dataLocale;
      var timeZone = options.timeZone;
      if (void 0 !== timeZone) {
        if (timeZone = String(timeZone), !IsValidTimeZoneName(timeZone, {
          zoneNamesFromData: Object.keys(tzData),
          uppercaseLinks: uppercaseLinks
        })) throw new RangeError("Invalid timeZoneName");
        timeZone = CanonicalizeTimeZoneName(timeZone, {
          zoneNames: Object.keys(tzData),
          uppercaseLinks: uppercaseLinks
        });
      } else timeZone = getDefaultTimeZone();
      internalSlots.timeZone = timeZone, opt = Object.create(null), opt.weekday = GetOption(options, "weekday", "string", ["narrow", "short", "long"], void 0), opt.era = GetOption(options, "era", "string", ["narrow", "short", "long"], void 0), opt.year = GetOption(options, "year", "string", ["2-digit", "numeric"], void 0), opt.month = GetOption(options, "month", "string", ["2-digit", "numeric", "narrow", "short", "long"], void 0), opt.day = GetOption(options, "day", "string", ["2-digit", "numeric"], void 0), opt.hour = GetOption(options, "hour", "string", ["2-digit", "numeric"], void 0), opt.minute = GetOption(options, "minute", "string", ["2-digit", "numeric"], void 0), opt.second = GetOption(options, "second", "string", ["2-digit", "numeric"], void 0), opt.timeZoneName = GetOption(options, "timeZoneName", "string", ["long", "short", "longOffset", "shortOffset", "longGeneric", "shortGeneric"], void 0), opt.fractionalSecondDigits = GetNumberOption(options, "fractionalSecondDigits", 1, 3, void 0);
      var dataLocaleData = localeData[dataLocale];
      invariant(!!dataLocaleData, "Missing locale data for ".concat(dataLocale));
      var formats = dataLocaleData.formats[calendar];
      if (!formats) throw new RangeError("Calendar \"".concat(calendar, "\" is not supported. Try setting \"calendar\" to 1 of the following: ").concat(Object.keys(dataLocaleData.formats).join(", ")));
      var formatMatcher = GetOption(options, "formatMatcher", "string", ["basic", "best fit"], "best fit"),
        dateStyle = GetOption(options, "dateStyle", "string", ["full", "long", "medium", "short"], void 0);
      internalSlots.dateStyle = dateStyle;
      var timeStyle = GetOption(options, "timeStyle", "string", ["full", "long", "medium", "short"], void 0);
      var bestFormat, pattern, rangePatterns;
      if (internalSlots.timeStyle = timeStyle, void 0 === dateStyle && void 0 === timeStyle) {
        if ("basic" === formatMatcher) bestFormat = function BasicFormatMatcher(options, formats) {
          var bestScore = -1 / 0,
            bestFormat = formats[0];
          invariant(Array.isArray(formats), "formats should be a list of things");
          var _iterator12 = _createForOfIteratorHelper(formats),
            _step12;
          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var format = _step12.value;
              var score = 0;
              for (var _i8 = 0, _DATE_TIME_PROPS2 = DATE_TIME_PROPS; _i8 < _DATE_TIME_PROPS2.length; _i8++) {
                var prop = _DATE_TIME_PROPS2[_i8];
                var optionsProp = options[prop],
                  formatProp = format[prop];
                if (void 0 === optionsProp && void 0 !== formatProp) score -= 20;else if (void 0 !== optionsProp && void 0 === formatProp) score -= 120;else if ("timeZoneName" === prop) "short" === optionsProp || "shortGeneric" === optionsProp ? "shortOffset" === formatProp ? score -= 1 : "longOffset" === formatProp ? score -= 4 : "short" === optionsProp && "long" === formatProp || "shortGeneric" === optionsProp && "longGeneric" === formatProp ? score -= 3 : optionsProp !== formatProp && (score -= 120) : "shortOffset" === optionsProp && "longOffset" === formatProp ? score -= 3 : "long" === optionsProp || "longGeneric" === optionsProp ? "longOffset" === formatProp ? score -= 1 : "shortOffset" === formatProp ? score -= 9 : "long" === optionsProp && "short" === formatProp || "longGeneric" === optionsProp && "shortGeneric" === formatProp ? score -= 8 : optionsProp !== formatProp && (score -= 120) : "longOffset" === optionsProp && "shortOffset" === formatProp ? score -= 8 : optionsProp !== formatProp && (score -= 120);else if (optionsProp !== formatProp) {
                  var values = void 0;
                  values = "fractionalSecondDigits" === prop ? [1, 2, 3] : ["2-digit", "numeric", "narrow", "short", "long"];
                  var optionsPropIndex = values.indexOf(optionsProp),
                    formatPropIndex = values.indexOf(formatProp),
                    delta = Math.max(-2, Math.min(formatPropIndex - optionsPropIndex, 2));
                  2 === delta ? score -= 6 : 1 === delta ? score -= 3 : -1 === delta ? score -= 6 : -2 === delta && (score -= 8);
                }
              }
              score > bestScore && (bestScore = score, bestFormat = format);
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }
          return _objectSpread({}, bestFormat);
        }(opt, formats);else {
          if (function isTimeRelated(opt) {
            for (var _i9 = 0, _arr5 = ["hour", "minute", "second"]; _i9 < _arr5.length; _i9++) {
              var prop = _arr5[_i9];
              if (void 0 !== opt[prop]) return !0;
            }
            return !1;
          }(opt)) {
            var hc = resolveHourCycle(internalSlots.hourCycle, dataLocaleData.hourCycle, hour12);
            opt.hour12 = "h11" === hc || "h12" === hc;
          }
          bestFormat = function BestFitFormatMatcher(options, formats) {
            var bestScore = -1 / 0,
              bestFormat = formats[0];
            invariant(Array.isArray(formats), "formats should be a list of things");
            var _iterator13 = _createForOfIteratorHelper(formats),
              _step13;
            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var format = _step13.value;
                var score = bestFitFormatMatcherScore(options, format);
                score > bestScore && (bestScore = score, bestFormat = format);
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
            var skeletonFormat = _objectSpread({}, bestFormat),
              patternFormat = {
                rawPattern: bestFormat.rawPattern
              };
            processDateTimePattern(bestFormat.rawPattern, patternFormat);
            for (var prop in skeletonFormat) {
              var skeletonValue = skeletonFormat[prop],
                patternValue = patternFormat[prop],
                requestedValue = options[prop];
              "minute" !== prop && "second" !== prop && requestedValue && (isNumericType(patternValue) && !isNumericType(requestedValue) || skeletonValue !== requestedValue && (patternFormat[prop] = requestedValue));
            }
            return patternFormat.pattern = skeletonFormat.pattern, patternFormat.pattern12 = skeletonFormat.pattern12, patternFormat.skeleton = skeletonFormat.skeleton, patternFormat.rangePatterns = skeletonFormat.rangePatterns, patternFormat.rangePatterns12 = skeletonFormat.rangePatterns12, patternFormat;
          }(opt, formats);
        }
      } else {
        for (var _i0 = 0, _DATE_TIME_PROPS3 = DATE_TIME_PROPS; _i0 < _DATE_TIME_PROPS3.length; _i0++) {
          var prop = _DATE_TIME_PROPS3[_i0];
          if (void 0 !== opt[prop]) throw new TypeError("Intl.DateTimeFormat can't set option ".concat(prop, " when ").concat(dateStyle ? "dateStyle" : "timeStyle", " is used"));
        }
        bestFormat = function DateTimeStyleFormat(dateStyle, timeStyle, dataLocaleData) {
          var dateFormat, timeFormat;
          if (void 0 !== timeStyle && (invariant("full" === timeStyle || "long" === timeStyle || "medium" === timeStyle || "short" === timeStyle, "invalid timeStyle"), timeFormat = dataLocaleData.timeFormat[timeStyle]), void 0 !== dateStyle && (invariant("full" === dateStyle || "long" === dateStyle || "medium" === dateStyle || "short" === dateStyle, "invalid dateStyle"), dateFormat = dataLocaleData.dateFormat[dateStyle]), void 0 !== dateStyle && void 0 !== timeStyle) {
            var format = {};
            for (var field in dateFormat) "pattern" !== field && "rangePatterns" !== field && "rangePatterns12" !== field && (format[field] = dateFormat[field]);
            for (var _field in timeFormat) "pattern" !== _field && "pattern12" !== _field && "rangePatterns" !== _field && "rangePatterns12" !== _field && (format[_field] = timeFormat[_field]);
            var connector = dataLocaleData.dateTimeFormat[dateStyle],
              _pattern4 = connector.replace("{0}", timeFormat.pattern).replace("{1}", dateFormat.pattern);
            if (format.pattern = _pattern4, "pattern12" in timeFormat) {
              var pattern12 = connector.replace("{0}", timeFormat.pattern12).replace("{1}", dateFormat.pattern);
              format.pattern12 = pattern12;
            }
            return timeFormat.rangePatterns && (format.rangePatterns = timeFormat.rangePatterns), timeFormat.rangePatterns12 && (format.rangePatterns12 = timeFormat.rangePatterns12), format;
          }
          return void 0 !== timeStyle ? timeFormat : (invariant(void 0 !== dateStyle, "dateStyle should not be undefined"), dateFormat);
        }(dateStyle, timeStyle, dataLocaleData);
      }
      internalSlots.format = bestFormat;
      for (var _prop4 in opt) {
        var p = bestFormat[_prop4];
        void 0 !== p && (internalSlots[_prop4] = p);
      }
      if (void 0 !== internalSlots.hour) {
        var _hc = resolveHourCycle(internalSlots.hourCycle, dataLocaleData.hourCycle, hour12);
        internalSlots.hourCycle = _hc, "h11" === _hc || "h12" === _hc ? (pattern = bestFormat.pattern12, rangePatterns = bestFormat.rangePatterns12) : (pattern = bestFormat.pattern, rangePatterns = bestFormat.rangePatterns);
      } else internalSlots.hourCycle = void 0, pattern = bestFormat.pattern, rangePatterns = bestFormat.rangePatterns;
      return internalSlots.pattern = pattern, internalSlots.rangePatterns = rangePatterns, dtf;
    }
    var links_generated = {
      "Africa/Accra": "Africa/Abidjan",
      "Africa/Addis_Ababa": "Africa/Nairobi",
      "Africa/Asmara": "Africa/Nairobi",
      "Africa/Asmera": "Africa/Nairobi",
      "Africa/Bamako": "Africa/Abidjan",
      "Africa/Bangui": "Africa/Lagos",
      "Africa/Banjul": "Africa/Abidjan",
      "Africa/Blantyre": "Africa/Maputo",
      "Africa/Brazzaville": "Africa/Lagos",
      "Africa/Bujumbura": "Africa/Maputo",
      "Africa/Conakry": "Africa/Abidjan",
      "Africa/Dakar": "Africa/Abidjan",
      "Africa/Dar_es_Salaam": "Africa/Nairobi",
      "Africa/Djibouti": "Africa/Nairobi",
      "Africa/Douala": "Africa/Lagos",
      "Africa/Freetown": "Africa/Abidjan",
      "Africa/Gaborone": "Africa/Maputo",
      "Africa/Harare": "Africa/Maputo",
      "Africa/Kampala": "Africa/Nairobi",
      "Africa/Kigali": "Africa/Maputo",
      "Africa/Kinshasa": "Africa/Lagos",
      "Africa/Libreville": "Africa/Lagos",
      "Africa/Lome": "Africa/Abidjan",
      "Africa/Luanda": "Africa/Lagos",
      "Africa/Lubumbashi": "Africa/Maputo",
      "Africa/Lusaka": "Africa/Maputo",
      "Africa/Malabo": "Africa/Lagos",
      "Africa/Maseru": "Africa/Johannesburg",
      "Africa/Mbabane": "Africa/Johannesburg",
      "Africa/Mogadishu": "Africa/Nairobi",
      "Africa/Niamey": "Africa/Lagos",
      "Africa/Nouakchott": "Africa/Abidjan",
      "Africa/Ouagadougou": "Africa/Abidjan",
      "Africa/Porto-Novo": "Africa/Lagos",
      "Africa/Timbuktu": "Africa/Abidjan",
      "America/Anguilla": "America/Puerto_Rico",
      "America/Antigua": "America/Puerto_Rico",
      "America/Argentina/ComodRivadavia": "America/Argentina/Catamarca",
      "America/Aruba": "America/Puerto_Rico",
      "America/Atikokan": "America/Panama",
      "America/Atka": "America/Adak",
      "America/Blanc-Sablon": "America/Puerto_Rico",
      "America/Buenos_Aires": "America/Argentina/Buenos_Aires",
      "America/Catamarca": "America/Argentina/Catamarca",
      "America/Cayman": "America/Panama",
      "America/Coral_Harbour": "America/Panama",
      "America/Cordoba": "America/Argentina/Cordoba",
      "America/Creston": "America/Phoenix",
      "America/Curacao": "America/Puerto_Rico",
      "America/Dominica": "America/Puerto_Rico",
      "America/Ensenada": "America/Tijuana",
      "America/Fort_Wayne": "America/Indiana/Indianapolis",
      "America/Godthab": "America/Nuuk",
      "America/Grenada": "America/Puerto_Rico",
      "America/Guadeloupe": "America/Puerto_Rico",
      "America/Indianapolis": "America/Indiana/Indianapolis",
      "America/Jujuy": "America/Argentina/Jujuy",
      "America/Knox_IN": "America/Indiana/Knox",
      "America/Kralendijk": "America/Puerto_Rico",
      "America/Louisville": "America/Kentucky/Louisville",
      "America/Lower_Princes": "America/Puerto_Rico",
      "America/Marigot": "America/Puerto_Rico",
      "America/Mendoza": "America/Argentina/Mendoza",
      "America/Montreal": "America/Toronto",
      "America/Montserrat": "America/Puerto_Rico",
      "America/Nassau": "America/Toronto",
      "America/Nipigon": "America/Toronto",
      "America/Pangnirtung": "America/Iqaluit",
      "America/Port_of_Spain": "America/Puerto_Rico",
      "America/Porto_Acre": "America/Rio_Branco",
      "America/Rainy_River": "America/Winnipeg",
      "America/Rosario": "America/Argentina/Cordoba",
      "America/Santa_Isabel": "America/Tijuana",
      "America/Shiprock": "America/Denver",
      "America/St_Barthelemy": "America/Puerto_Rico",
      "America/St_Kitts": "America/Puerto_Rico",
      "America/St_Lucia": "America/Puerto_Rico",
      "America/St_Thomas": "America/Puerto_Rico",
      "America/St_Vincent": "America/Puerto_Rico",
      "America/Thunder_Bay": "America/Toronto",
      "America/Tortola": "America/Puerto_Rico",
      "America/Virgin": "America/Puerto_Rico",
      "America/Yellowknife": "America/Edmonton",
      "Antarctica/DumontDUrville": "Pacific/Port_Moresby",
      "Antarctica/McMurdo": "Pacific/Auckland",
      "Antarctica/South_Pole": "Pacific/Auckland",
      "Antarctica/Syowa": "Asia/Riyadh",
      "Arctic/Longyearbyen": "Europe/Berlin",
      "Asia/Aden": "Asia/Riyadh",
      "Asia/Ashkhabad": "Asia/Ashgabat",
      "Asia/Bahrain": "Asia/Qatar",
      "Asia/Brunei": "Asia/Kuching",
      "Asia/Calcutta": "Asia/Kolkata",
      "Asia/Choibalsan": "Asia/Ulaanbaatar",
      "Asia/Chongqing": "Asia/Shanghai",
      "Asia/Chungking": "Asia/Shanghai",
      "Asia/Dacca": "Asia/Dhaka",
      "Asia/Harbin": "Asia/Shanghai",
      "Asia/Istanbul": "Europe/Istanbul",
      "Asia/Kashgar": "Asia/Urumqi",
      "Asia/Katmandu": "Asia/Kathmandu",
      "Asia/Kuala_Lumpur": "Asia/Singapore",
      "Asia/Kuwait": "Asia/Riyadh",
      "Asia/Macao": "Asia/Macau",
      "Asia/Muscat": "Asia/Dubai",
      "Asia/Phnom_Penh": "Asia/Bangkok",
      "Asia/Rangoon": "Asia/Yangon",
      "Asia/Saigon": "Asia/Ho_Chi_Minh",
      "Asia/Tel_Aviv": "Asia/Jerusalem",
      "Asia/Thimbu": "Asia/Thimphu",
      "Asia/Ujung_Pandang": "Asia/Makassar",
      "Asia/Ulan_Bator": "Asia/Ulaanbaatar",
      "Asia/Vientiane": "Asia/Bangkok",
      "Atlantic/Faeroe": "Atlantic/Faroe",
      "Atlantic/Jan_Mayen": "Europe/Berlin",
      "Atlantic/Reykjavik": "Africa/Abidjan",
      "Atlantic/St_Helena": "Africa/Abidjan",
      "Australia/ACT": "Australia/Sydney",
      "Australia/Canberra": "Australia/Sydney",
      "Australia/Currie": "Australia/Hobart",
      "Australia/LHI": "Australia/Lord_Howe",
      "Australia/NSW": "Australia/Sydney",
      "Australia/North": "Australia/Darwin",
      "Australia/Queensland": "Australia/Brisbane",
      "Australia/South": "Australia/Adelaide",
      "Australia/Tasmania": "Australia/Hobart",
      "Australia/Victoria": "Australia/Melbourne",
      "Australia/West": "Australia/Perth",
      "Australia/Yancowinna": "Australia/Broken_Hill",
      "Brazil/Acre": "America/Rio_Branco",
      "Brazil/DeNoronha": "America/Noronha",
      "Brazil/East": "America/Sao_Paulo",
      "Brazil/West": "America/Manaus",
      CET: "Europe/Brussels",
      CST6CDT: "America/Chicago",
      "Canada/Atlantic": "America/Halifax",
      "Canada/Central": "America/Winnipeg",
      "Canada/Eastern": "America/Toronto",
      "Canada/Mountain": "America/Edmonton",
      "Canada/Newfoundland": "America/St_Johns",
      "Canada/Pacific": "America/Vancouver",
      "Canada/Saskatchewan": "America/Regina",
      "Canada/Yukon": "America/Whitehorse",
      "Chile/Continental": "America/Santiago",
      "Chile/EasterIsland": "Pacific/Easter",
      Cuba: "America/Havana",
      EET: "Europe/Athens",
      EST: "America/Panama",
      EST5EDT: "America/New_York",
      Egypt: "Africa/Cairo",
      Eire: "Europe/Dublin",
      "Etc/GMT+0": "Etc/GMT",
      "Etc/GMT-0": "Etc/GMT",
      "Etc/GMT0": "Etc/GMT",
      "Etc/Greenwich": "Etc/GMT",
      "Etc/UCT": "Etc/UTC",
      "Etc/Universal": "Etc/UTC",
      "Etc/Zulu": "Etc/UTC",
      "Europe/Amsterdam": "Europe/Brussels",
      "Europe/Belfast": "Europe/London",
      "Europe/Bratislava": "Europe/Prague",
      "Europe/Busingen": "Europe/Zurich",
      "Europe/Copenhagen": "Europe/Berlin",
      "Europe/Guernsey": "Europe/London",
      "Europe/Isle_of_Man": "Europe/London",
      "Europe/Jersey": "Europe/London",
      "Europe/Kiev": "Europe/Kyiv",
      "Europe/Ljubljana": "Europe/Belgrade",
      "Europe/Luxembourg": "Europe/Brussels",
      "Europe/Mariehamn": "Europe/Helsinki",
      "Europe/Monaco": "Europe/Paris",
      "Europe/Nicosia": "Asia/Nicosia",
      "Europe/Oslo": "Europe/Berlin",
      "Europe/Podgorica": "Europe/Belgrade",
      "Europe/San_Marino": "Europe/Rome",
      "Europe/Sarajevo": "Europe/Belgrade",
      "Europe/Skopje": "Europe/Belgrade",
      "Europe/Stockholm": "Europe/Berlin",
      "Europe/Tiraspol": "Europe/Chisinau",
      "Europe/Uzhgorod": "Europe/Kyiv",
      "Europe/Vaduz": "Europe/Zurich",
      "Europe/Vatican": "Europe/Rome",
      "Europe/Zagreb": "Europe/Belgrade",
      "Europe/Zaporozhye": "Europe/Kyiv",
      GB: "Europe/London",
      "GB-Eire": "Europe/London",
      "GMT+0": "Etc/GMT",
      "GMT-0": "Etc/GMT",
      GMT0: "Etc/GMT",
      Greenwich: "Etc/GMT",
      HST: "Pacific/Honolulu",
      Hongkong: "Asia/Hong_Kong",
      Iceland: "Africa/Abidjan",
      "Indian/Antananarivo": "Africa/Nairobi",
      "Indian/Christmas": "Asia/Bangkok",
      "Indian/Cocos": "Asia/Yangon",
      "Indian/Comoro": "Africa/Nairobi",
      "Indian/Kerguelen": "Indian/Maldives",
      "Indian/Mahe": "Asia/Dubai",
      "Indian/Mayotte": "Africa/Nairobi",
      "Indian/Reunion": "Asia/Dubai",
      Iran: "Asia/Tehran",
      Israel: "Asia/Jerusalem",
      Jamaica: "America/Jamaica",
      Japan: "Asia/Tokyo",
      Kwajalein: "Pacific/Kwajalein",
      Libya: "Africa/Tripoli",
      MET: "Europe/Brussels",
      MST: "America/Phoenix",
      MST7MDT: "America/Denver",
      "Mexico/BajaNorte": "America/Tijuana",
      "Mexico/BajaSur": "America/Mazatlan",
      "Mexico/General": "America/Mexico_City",
      NZ: "Pacific/Auckland",
      "NZ-CHAT": "Pacific/Chatham",
      Navajo: "America/Denver",
      PRC: "Asia/Shanghai",
      PST8PDT: "America/Los_Angeles",
      "Pacific/Chuuk": "Pacific/Port_Moresby",
      "Pacific/Enderbury": "Pacific/Kanton",
      "Pacific/Funafuti": "Pacific/Tarawa",
      "Pacific/Johnston": "Pacific/Honolulu",
      "Pacific/Majuro": "Pacific/Tarawa",
      "Pacific/Midway": "Pacific/Pago_Pago",
      "Pacific/Pohnpei": "Pacific/Guadalcanal",
      "Pacific/Ponape": "Pacific/Guadalcanal",
      "Pacific/Saipan": "Pacific/Guam",
      "Pacific/Samoa": "Pacific/Pago_Pago",
      "Pacific/Truk": "Pacific/Port_Moresby",
      "Pacific/Wake": "Pacific/Tarawa",
      "Pacific/Wallis": "Pacific/Tarawa",
      "Pacific/Yap": "Pacific/Port_Moresby",
      Poland: "Europe/Warsaw",
      Portugal: "Europe/Lisbon",
      ROC: "Asia/Taipei",
      ROK: "Asia/Seoul",
      Singapore: "Asia/Singapore",
      Turkey: "Europe/Istanbul",
      UCT: "Etc/UTC",
      "US/Alaska": "America/Anchorage",
      "US/Aleutian": "America/Adak",
      "US/Arizona": "America/Phoenix",
      "US/Central": "America/Chicago",
      "US/East-Indiana": "America/Indiana/Indianapolis",
      "US/Eastern": "America/New_York",
      "US/Hawaii": "Pacific/Honolulu",
      "US/Indiana-Starke": "America/Indiana/Knox",
      "US/Michigan": "America/Detroit",
      "US/Mountain": "America/Denver",
      "US/Pacific": "America/Los_Angeles",
      "US/Samoa": "Pacific/Pago_Pago",
      UTC: "Etc/UTC",
      Universal: "Etc/UTC",
      "W-SU": "Europe/Moscow",
      WET: "Europe/Lisbon",
      Zulu: "Etc/UTC"
    };
    var internalSlotMap = new WeakMap();
    function getInternalSlots(x) {
      var internalSlots = internalSlotMap.get(x);
      return internalSlots || (internalSlots = Object.create(null), internalSlotMap.set(x, internalSlots)), internalSlots;
    }
    var UPPERCASED_LINKS = Object.keys(links_generated).reduce(function (all, l) {
        return all[l.toUpperCase()] = links_generated[l], all;
      }, {}),
      RESOLVED_OPTIONS_KEYS = ["locale", "calendar", "numberingSystem", "dateStyle", "timeStyle", "timeZone", "hourCycle", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"],
      formatDescriptor = {
        enumerable: !1,
        configurable: !0,
        get: function get() {
          if ("object" != _typeof(this) || !OrdinaryHasInstance(_DateTimeFormat, this)) throw TypeError("Intl.DateTimeFormat format property accessor called on incompatible receiver");
          var internalSlots = getInternalSlots(this),
            dtf = this;
          var boundFormat = internalSlots.boundFormat;
          if (void 0 === boundFormat) {
            boundFormat = function boundFormat(date) {
              var x;
              return x = void 0 === date ? new decimal(Date.now()) : ToNumber(date), function FormatDateTime(dtf, x, implDetails) {
                var parts = PartitionDateTimePattern(dtf, x, implDetails);
                var result = "";
                var _iterator14 = _createForOfIteratorHelper(parts),
                  _step14;
                try {
                  for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                    var part = _step14.value;
                    result += part.value;
                  }
                } catch (err) {
                  _iterator14.e(err);
                } finally {
                  _iterator14.f();
                }
                return result;
              }(dtf, x, {
                getInternalSlots: getInternalSlots,
                localeData: _DateTimeFormat.localeData,
                tzData: _DateTimeFormat.tzData,
                getDefaultTimeZone: _DateTimeFormat.getDefaultTimeZone
              });
            };
            try {
              Object.defineProperty(boundFormat, "name", {
                configurable: !0,
                enumerable: !1,
                writable: !1,
                value: ""
              });
            } catch (_unused5) {}
            internalSlots.boundFormat = boundFormat;
          }
          return boundFormat;
        }
      };
    try {
      Object.defineProperty(formatDescriptor.get, "name", {
        configurable: !0,
        enumerable: !1,
        writable: !1,
        value: "get format"
      });
    } catch (_unused6) {}
    var _DateTimeFormat = function DateTimeFormat(locales, options) {
      if (!this || !OrdinaryHasInstance(_DateTimeFormat, this)) return new _DateTimeFormat(locales, options);
      InitializeDateTimeFormat(this, locales, options, {
        tzData: _DateTimeFormat.tzData,
        uppercaseLinks: UPPERCASED_LINKS,
        availableLocales: _DateTimeFormat.availableLocales,
        relevantExtensionKeys: _DateTimeFormat.relevantExtensionKeys,
        getDefaultLocale: _DateTimeFormat.getDefaultLocale,
        getDefaultTimeZone: _DateTimeFormat.getDefaultTimeZone,
        getInternalSlots: getInternalSlots,
        localeData: _DateTimeFormat.localeData
      });
      var dataLocale = getInternalSlots(this).dataLocale;
      invariant(void 0 !== _DateTimeFormat.localeData[dataLocale], "Cannot load locale-dependent data for ".concat(dataLocale, "."));
    };
    defineProperty(_DateTimeFormat, "supportedLocalesOf", {
      value: function supportedLocalesOf(locales, options) {
        return function SupportedLocales(availableLocales, requestedLocales, options) {
          var matcher = "best fit";
          return void 0 !== options && (matcher = GetOption(options = ToObject(options), "localeMatcher", "string", ["lookup", "best fit"], "best fit")), LookupSupportedLocales(Array.from(availableLocales), requestedLocales);
        }(_DateTimeFormat.availableLocales, CanonicalizeLocaleList(locales), options);
      }
    }), defineProperty(_DateTimeFormat.prototype, "resolvedOptions", {
      value: function resolvedOptions() {
        if ("object" != _typeof(this) || !OrdinaryHasInstance(_DateTimeFormat, this)) throw TypeError("Method Intl.DateTimeFormat.prototype.resolvedOptions called on incompatible receiver");
        var internalSlots = getInternalSlots(this),
          ro = {};
        for (var _i1 = 0, _RESOLVED_OPTIONS_KEY = RESOLVED_OPTIONS_KEYS; _i1 < _RESOLVED_OPTIONS_KEY.length; _i1++) {
          var key = _RESOLVED_OPTIONS_KEY[_i1];
          var value = internalSlots[key];
          if ("hourCycle" === key) {
            var hour12 = "h11" === value || "h12" === value || "h23" !== value && "h24" !== value && void 0;
            void 0 !== hour12 && (ro.hour12 = hour12);
          }
          DATE_TIME_PROPS.indexOf(key) > -1 && (void 0 === internalSlots.dateStyle && void 0 === internalSlots.timeStyle || (value = void 0)), void 0 !== value && (ro[key] = value);
        }
        return ro;
      }
    }), defineProperty(_DateTimeFormat.prototype, "formatToParts", {
      value: function formatToParts(date) {
        var x;
        return x = void 0 === date ? new decimal(Date.now()) : ToNumber(date), FormatDateTimeToParts(this, x, {
          getInternalSlots: getInternalSlots,
          localeData: _DateTimeFormat.localeData,
          tzData: _DateTimeFormat.tzData,
          getDefaultTimeZone: _DateTimeFormat.getDefaultTimeZone
        });
      }
    }), defineProperty(_DateTimeFormat.prototype, "formatRangeToParts", {
      value: function formatRangeToParts(startDate, endDate) {
        return invariant("object" == _typeof(this), "receiver is not an object", TypeError), invariant(void 0 !== startDate && void 0 !== endDate, "startDate/endDate cannot be undefined", TypeError), function FormatDateTimeRangeToParts(dtf, x, y, implDetails) {
          var parts = PartitionDateTimeRangePattern(dtf, x, y, implDetails),
            result = [];
          var _iterator15 = _createForOfIteratorHelper(parts),
            _step15;
          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var part = _step15.value;
              result.push({
                type: part.type,
                value: part.value,
                source: part.source
              });
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }
          return result;
        }(this, ToNumber(startDate), ToNumber(endDate), {
          getInternalSlots: getInternalSlots,
          localeData: _DateTimeFormat.localeData,
          tzData: _DateTimeFormat.tzData,
          getDefaultTimeZone: _DateTimeFormat.getDefaultTimeZone
        });
      }
    }), defineProperty(_DateTimeFormat.prototype, "formatRange", {
      value: function formatRange(startDate, endDate) {
        return invariant("object" == _typeof(this), "receiver is not an object", TypeError), invariant(void 0 !== startDate && void 0 !== endDate, "startDate/endDate cannot be undefined", TypeError), function FormatDateTimeRange(dtf, x, y, implDetails) {
          var parts = PartitionDateTimeRangePattern(dtf, x, y, implDetails);
          var result = "";
          var _iterator16 = _createForOfIteratorHelper(parts),
            _step16;
          try {
            for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
              var part = _step16.value;
              result += part.value;
            }
          } catch (err) {
            _iterator16.e(err);
          } finally {
            _iterator16.f();
          }
          return result;
        }(this, ToNumber(startDate), ToNumber(endDate), {
          getInternalSlots: getInternalSlots,
          localeData: _DateTimeFormat.localeData,
          tzData: _DateTimeFormat.tzData,
          getDefaultTimeZone: _DateTimeFormat.getDefaultTimeZone
        });
      }
    });
    _DateTimeFormat.__setDefaultTimeZone = function (timeZone) {
      if (void 0 !== timeZone) {
        if (!IsValidTimeZoneName(timeZone = String(timeZone), {
          zoneNamesFromData: Object.keys(_DateTimeFormat.tzData),
          uppercaseLinks: UPPERCASED_LINKS
        })) throw new RangeError("Invalid timeZoneName");
        timeZone = CanonicalizeTimeZoneName(timeZone, {
          zoneNames: Object.keys(_DateTimeFormat.tzData),
          uppercaseLinks: UPPERCASED_LINKS
        });
      } else timeZone = "UTC";
      _DateTimeFormat.__defaultTimeZone = timeZone;
    }, _DateTimeFormat.relevantExtensionKeys = ["nu", "ca", "hc"], _DateTimeFormat.__defaultTimeZone = "UTC", _DateTimeFormat.getDefaultTimeZone = function () {
      return _DateTimeFormat.__defaultTimeZone;
    }, _DateTimeFormat.__addLocaleData = function __addLocaleData() {
      for (var _len5 = arguments.length, data = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        data[_key5] = arguments[_key5];
      }
      var _loop2 = function _loop2() {
        var _data$_i = _data[_i10],
          d = _data$_i.data,
          locale = _data$_i.locale;
        var dateFormat = d.dateFormat,
          timeFormat = d.timeFormat,
          dateTimeFormat = d.dateTimeFormat,
          formats = d.formats,
          intervalFormats = d.intervalFormats,
          rawData = _objectWithoutProperties(d, _excluded),
          processedData = _objectSpread(_objectSpread({}, rawData), {}, {
            dateFormat: {
              full: parseDateTimeSkeleton(dateFormat.full),
              long: parseDateTimeSkeleton(dateFormat.long),
              medium: parseDateTimeSkeleton(dateFormat.medium),
              short: parseDateTimeSkeleton(dateFormat.short)
            },
            timeFormat: {
              full: parseDateTimeSkeleton(timeFormat.full),
              long: parseDateTimeSkeleton(timeFormat.long),
              medium: parseDateTimeSkeleton(timeFormat.medium),
              short: parseDateTimeSkeleton(timeFormat.short)
            },
            dateTimeFormat: {
              full: parseDateTimeSkeleton(dateTimeFormat.full).pattern,
              long: parseDateTimeSkeleton(dateTimeFormat.long).pattern,
              medium: parseDateTimeSkeleton(dateTimeFormat.medium).pattern,
              short: parseDateTimeSkeleton(dateTimeFormat.short).pattern
            },
            intervalFormatFallback: intervalFormats.intervalFormatFallback,
            formats: {}
          });
        var _loop3 = function _loop3(calendar) {
          processedData.formats[calendar] = Object.keys(formats[calendar]).map(function (skeleton) {
            return parseDateTimeSkeleton(skeleton, formats[calendar][skeleton], intervalFormats[skeleton], intervalFormats.intervalFormatFallback);
          });
        };
        for (var calendar in formats) {
          _loop3(calendar);
        }
        var minimizedLocale = new Intl.Locale(locale).minimize().toString();
        _DateTimeFormat.localeData[locale] = _DateTimeFormat.localeData[minimizedLocale] = processedData, _DateTimeFormat.availableLocales.add(locale), _DateTimeFormat.availableLocales.add(minimizedLocale), _DateTimeFormat.__defaultLocale || (_DateTimeFormat.__defaultLocale = minimizedLocale);
      };
      for (var _i10 = 0, _data = data; _i10 < _data.length; _i10++) {
        _loop2();
      }
    }, Object.defineProperty(_DateTimeFormat.prototype, "format", formatDescriptor), _DateTimeFormat.__defaultLocale = "", _DateTimeFormat.localeData = {}, _DateTimeFormat.availableLocales = new Set(), _DateTimeFormat.getDefaultLocale = function () {
      return _DateTimeFormat.__defaultLocale;
    }, _DateTimeFormat.polyfilled = !0, _DateTimeFormat.tzData = {}, _DateTimeFormat.__addTZData = function (d) {
      _DateTimeFormat.tzData = function unpack(data) {
        var abbrvs = data.abbrvs.split("|"),
          offsets = data.offsets.split("|").map(function (n) {
            return parseInt(n, 36);
          }),
          packedZones = data.zones,
          zones = {};
        var _iterator17 = _createForOfIteratorHelper(packedZones),
          _step17;
        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var _d = _step17.value;
            var _d$split = _d.split("|"),
              _d$split2 = _toArray(_d$split),
              zone = _d$split2[0],
              zoneData = _arrayLikeToArray(_d$split2).slice(1);
            zones[zone] = zoneData.map(function (z) {
              return z.split(",");
            }).map(function (_ref7) {
              var _ref8 = _slicedToArray(_ref7, 4),
                ts = _ref8[0],
                abbrvIndex = _ref8[1],
                offsetIndex = _ref8[2],
                dst = _ref8[3];
              return ["" === ts ? -1 / 0 : parseInt(ts, 36), abbrvs[+abbrvIndex], offsets[+offsetIndex], "1" === dst];
            });
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }
        return zones;
      }(d);
    };
    try {
      "undefined" != typeof Symbol && Object.defineProperty(_DateTimeFormat.prototype, Symbol.toStringTag, {
        value: "Intl.DateTimeFormat",
        writable: !1,
        enumerable: !1,
        configurable: !0
      }), Object.defineProperty(_DateTimeFormat.prototype.constructor, "length", {
        value: 1,
        writable: !1,
        enumerable: !1,
        configurable: !0
      });
    } catch (_unused7) {}
    return Intl.DateTimeFormat && "function" == typeof Intl.DateTimeFormat.__addLocaleData && Intl.DateTimeFormat.__addLocaleData({
      data: {
        am: "AM",
        pm: "PM",
        weekday: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          long: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        },
        era: {
          narrow: {
            BC: "B",
            AD: "A"
          },
          short: {
            BC: "BC",
            AD: "AD"
          },
          long: {
            BC: "Before Christ",
            AD: "Anno Domini"
          }
        },
        month: {
          narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          long: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        },
        timeZoneName: {
          "Africa/Abidjan": {
            long: ["Greenwich Mean Time", "Greenwich Mean Time"],
            short: ["GMT", "GMT"]
          },
          "Africa/Accra": {
            long: ["Greenwich Mean Time", "Greenwich Mean Time"],
            short: ["GMT", "GMT"]
          },
          "Africa/Addis_Ababa": {
            long: ["East Africa Time", "East Africa Time"]
          },
          "Africa/Algiers": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Africa/Asmera": {
            long: ["East Africa Time", "East Africa Time"]
          },
          "Africa/Bamako": {
            long: ["Greenwich Mean Time", "Greenwich Mean Time"],
            short: ["GMT", "GMT"]
          },
          "Africa/Bangui": {
            long: ["West Africa Time", "West Africa Time"]
          },
          "Africa/Banjul": {
            long: ["Greenwich Mean Time", "Greenwich Mean Time"],
            short: ["GMT", "GMT"]
          },
          "Africa/Bissau": {
            long: ["Greenwich Mean Time", "Greenwich Mean Time"],
            short: ["GMT", "GMT"]
          },
          "Africa/Blantyre": {
            long: ["Central Africa Time", "Central Africa Time"]
          },
          "Africa/Brazzaville": {
            long: ["West Africa Time", "West Africa Time"]
          },
          "Africa/Bujumbura": {
            long: ["Central Africa Time", "Central Africa Time"]
          },
          "Africa/Cairo": {
            long: ["Eastern European Standard Time", "Eastern European Summer Time"]
          },
          "Africa/Casablanca": {
            long: ["Western European Standard Time", "Western European Summer Time"]
          },
          "Africa/Ceuta": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Africa/Conakry": {
            long: ["Greenwich Mean Time", "Greenwich Mean Time"],
            short: ["GMT", "GMT"]
          },
          "Africa/Dakar": {
            long: ["Greenwich Mean Time", "Greenwich Mean Time"],
            short: ["GMT", "GMT"]
          },
          "Africa/Dar_es_Salaam": {
            long: ["East Africa Time", "East Africa Time"]
          },
          "Africa/Djibouti": {
            long: ["East Africa Time", "East Africa Time"]
          },
          "Africa/Douala": {
            long: ["West Africa Time", "West Africa Time"]
          },
          "Africa/El_Aaiun": {
            long: ["Western European Standard Time", "Western European Summer Time"]
          },
          "Africa/Freetown": {
            long: ["Greenwich Mean Time", "Greenwich Mean Time"],
            short: ["GMT", "GMT"]
          },
          "Africa/Gaborone": {
            long: ["Central Africa Time", "Central Africa Time"]
          },
          "Africa/Harare": {
            long: ["Central Africa Time", "Central Africa Time"]
          },
          "Africa/Johannesburg": {
            long: ["South Africa Standard Time", "South Africa Standard Time"]
          },
          "Africa/Juba": {
            long: ["Central Africa Time", "Central Africa Time"]
          },
          "Africa/Kampala": {
            long: ["East Africa Time", "East Africa Time"]
          },
          "Africa/Khartoum": {
            long: ["Central Africa Time", "Central Africa Time"]
          },
          "Africa/Kigali": {
            long: ["Central Africa Time", "Central Africa Time"]
          },
          "Africa/Kinshasa": {
            long: ["West Africa Time", "West Africa Time"]
          },
          "Africa/Lagos": {
            long: ["West Africa Time", "West Africa Time"]
          },
          "Africa/Libreville": {
            long: ["West Africa Time", "West Africa Time"]
          },
          "Africa/Lome": {
            long: ["Greenwich Mean Time", "Greenwich Mean Time"],
            short: ["GMT", "GMT"]
          },
          "Africa/Luanda": {
            long: ["West Africa Time", "West Africa Time"]
          },
          "Africa/Lubumbashi": {
            long: ["Central Africa Time", "Central Africa Time"]
          },
          "Africa/Lusaka": {
            long: ["Central Africa Time", "Central Africa Time"]
          },
          "Africa/Malabo": {
            long: ["West Africa Time", "West Africa Time"]
          },
          "Africa/Maputo": {
            long: ["Central Africa Time", "Central Africa Time"]
          },
          "Africa/Maseru": {
            long: ["South Africa Standard Time", "South Africa Standard Time"]
          },
          "Africa/Mbabane": {
            long: ["South Africa Standard Time", "South Africa Standard Time"]
          },
          "Africa/Mogadishu": {
            long: ["East Africa Time", "East Africa Time"]
          },
          "Africa/Monrovia": {
            long: ["Greenwich Mean Time", "Greenwich Mean Time"],
            short: ["GMT", "GMT"]
          },
          "Africa/Nairobi": {
            long: ["East Africa Time", "East Africa Time"]
          },
          "Africa/Ndjamena": {
            long: ["West Africa Time", "West Africa Time"]
          },
          "Africa/Niamey": {
            long: ["West Africa Time", "West Africa Time"]
          },
          "Africa/Nouakchott": {
            long: ["Greenwich Mean Time", "Greenwich Mean Time"],
            short: ["GMT", "GMT"]
          },
          "Africa/Ouagadougou": {
            long: ["Greenwich Mean Time", "Greenwich Mean Time"],
            short: ["GMT", "GMT"]
          },
          "Africa/Porto-Novo": {
            long: ["West Africa Time", "West Africa Time"]
          },
          "Africa/Sao_Tome": {
            long: ["Greenwich Mean Time", "Greenwich Mean Time"],
            short: ["GMT", "GMT"]
          },
          "Africa/Tripoli": {
            long: ["Eastern European Standard Time", "Eastern European Summer Time"]
          },
          "Africa/Tunis": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Africa/Windhoek": {
            long: ["Central Africa Time", "Central Africa Time"]
          },
          "America/Adak": {
            long: ["Hawaii-Aleutian Standard Time", "Hawaii-Aleutian Daylight Time"],
            short: ["HAST", "HADT"]
          },
          "America/Anchorage": {
            long: ["Alaska Standard Time", "Alaska Daylight Time"],
            short: ["AKST", "AKDT"]
          },
          "America/Anguilla": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/Antigua": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/Araguaina": {
            long: ["Brasilia Standard Time", "Brasilia Summer Time"]
          },
          "America/Aruba": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/Asuncion": {
            long: ["Paraguay Standard Time", "Paraguay Summer Time"]
          },
          "America/Bahia": {
            long: ["Brasilia Standard Time", "Brasilia Summer Time"]
          },
          "America/Bahia_Banderas": {
            long: ["Central Standard Time", "Central Daylight Time"],
            short: ["CST", "CDT"]
          },
          "America/Barbados": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/Belem": {
            long: ["Brasilia Standard Time", "Brasilia Summer Time"]
          },
          "America/Belize": {
            long: ["Central Standard Time", "Central Daylight Time"],
            short: ["CST", "CDT"]
          },
          "America/Blanc-Sablon": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/Boa_Vista": {
            long: ["Amazon Standard Time", "Amazon Summer Time"]
          },
          "America/Bogota": {
            long: ["Colombia Standard Time", "Colombia Summer Time"]
          },
          "America/Boise": {
            long: ["Mountain Standard Time", "Mountain Daylight Time"],
            short: ["MST", "MDT"]
          },
          "America/Buenos_Aires": {
            long: ["Argentina Standard Time", "Argentina Summer Time"]
          },
          "America/Cambridge_Bay": {
            long: ["Mountain Standard Time", "Mountain Daylight Time"],
            short: ["MST", "MDT"]
          },
          "America/Campo_Grande": {
            long: ["Amazon Standard Time", "Amazon Summer Time"]
          },
          "America/Cancun": {
            long: ["Eastern Standard Time", "Eastern Daylight Time"],
            short: ["EST", "EDT"]
          },
          "America/Caracas": {
            long: ["Venezuela Time", "Venezuela Time"]
          },
          "America/Catamarca": {
            long: ["Argentina Standard Time", "Argentina Summer Time"]
          },
          "America/Cayenne": {
            long: ["French Guiana Time", "French Guiana Time"]
          },
          "America/Cayman": {
            long: ["Eastern Standard Time", "Eastern Daylight Time"],
            short: ["EST", "EDT"]
          },
          "America/Chicago": {
            long: ["Central Standard Time", "Central Daylight Time"],
            short: ["CST", "CDT"]
          },
          "America/Chihuahua": {
            long: ["Central Standard Time", "Central Daylight Time"],
            short: ["CST", "CDT"]
          },
          "America/Ciudad_Juarez": {
            long: ["Mountain Standard Time", "Mountain Daylight Time"],
            short: ["MST", "MDT"]
          },
          "America/Coral_Harbour": {
            long: ["Eastern Standard Time", "Eastern Daylight Time"],
            short: ["EST", "EDT"]
          },
          "America/Cordoba": {
            long: ["Argentina Standard Time", "Argentina Summer Time"]
          },
          "America/Costa_Rica": {
            long: ["Central Standard Time", "Central Daylight Time"],
            short: ["CST", "CDT"]
          },
          "America/Coyhaique": {
            long: ["Chile Standard Time", "Chile Summer Time"]
          },
          "America/Creston": {
            long: ["Mountain Standard Time", "Mountain Daylight Time"],
            short: ["MST", "MDT"]
          },
          "America/Cuiaba": {
            long: ["Amazon Standard Time", "Amazon Summer Time"]
          },
          "America/Curacao": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/Danmarkshavn": {
            long: ["Greenwich Mean Time", "Greenwich Mean Time"],
            short: ["GMT", "GMT"]
          },
          "America/Dawson": {
            long: ["Yukon Time", "Yukon Time"]
          },
          "America/Dawson_Creek": {
            long: ["Mountain Standard Time", "Mountain Daylight Time"],
            short: ["MST", "MDT"]
          },
          "America/Denver": {
            long: ["Mountain Standard Time", "Mountain Daylight Time"],
            short: ["MST", "MDT"]
          },
          "America/Detroit": {
            long: ["Eastern Standard Time", "Eastern Daylight Time"],
            short: ["EST", "EDT"]
          },
          "America/Dominica": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/Edmonton": {
            long: ["Mountain Standard Time", "Mountain Daylight Time"],
            short: ["MST", "MDT"]
          },
          "America/Eirunepe": {
            long: ["Acre Standard Time", "Acre Summer Time"]
          },
          "America/El_Salvador": {
            long: ["Central Standard Time", "Central Daylight Time"],
            short: ["CST", "CDT"]
          },
          "America/Fort_Nelson": {
            long: ["Mountain Standard Time", "Mountain Daylight Time"],
            short: ["MST", "MDT"]
          },
          "America/Fortaleza": {
            long: ["Brasilia Standard Time", "Brasilia Summer Time"]
          },
          "America/Glace_Bay": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/Godthab": {
            long: ["Greenland Standard Time", "Greenland Summer Time"]
          },
          "America/Goose_Bay": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/Grand_Turk": {
            long: ["Eastern Standard Time", "Eastern Daylight Time"],
            short: ["EST", "EDT"]
          },
          "America/Grenada": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/Guadeloupe": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/Guatemala": {
            long: ["Central Standard Time", "Central Daylight Time"],
            short: ["CST", "CDT"]
          },
          "America/Guayaquil": {
            long: ["Ecuador Time", "Ecuador Time"]
          },
          "America/Guyana": {
            long: ["Guyana Time", "Guyana Time"]
          },
          "America/Halifax": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/Havana": {
            long: ["Cuba Standard Time", "Cuba Daylight Time"]
          },
          "America/Hermosillo": {
            long: ["Mexican Pacific Standard Time", "Mexican Pacific Daylight Time"]
          },
          "America/Indianapolis": {
            long: ["Eastern Standard Time", "Eastern Daylight Time"],
            short: ["EST", "EDT"]
          },
          "America/Inuvik": {
            long: ["Mountain Standard Time", "Mountain Daylight Time"],
            short: ["MST", "MDT"]
          },
          "America/Iqaluit": {
            long: ["Eastern Standard Time", "Eastern Daylight Time"],
            short: ["EST", "EDT"]
          },
          "America/Jamaica": {
            long: ["Eastern Standard Time", "Eastern Daylight Time"],
            short: ["EST", "EDT"]
          },
          "America/Jujuy": {
            long: ["Argentina Standard Time", "Argentina Summer Time"]
          },
          "America/Juneau": {
            long: ["Alaska Standard Time", "Alaska Daylight Time"],
            short: ["AKST", "AKDT"]
          },
          "America/Kralendijk": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/La_Paz": {
            long: ["Bolivia Time", "Bolivia Time"]
          },
          "America/Lima": {
            long: ["Peru Standard Time", "Peru Summer Time"]
          },
          "America/Los_Angeles": {
            long: ["Pacific Standard Time", "Pacific Daylight Time"],
            short: ["PST", "PDT"]
          },
          "America/Louisville": {
            long: ["Eastern Standard Time", "Eastern Daylight Time"],
            short: ["EST", "EDT"]
          },
          "America/Lower_Princes": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/Maceio": {
            long: ["Brasilia Standard Time", "Brasilia Summer Time"]
          },
          "America/Managua": {
            long: ["Central Standard Time", "Central Daylight Time"],
            short: ["CST", "CDT"]
          },
          "America/Manaus": {
            long: ["Amazon Standard Time", "Amazon Summer Time"]
          },
          "America/Marigot": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/Martinique": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/Matamoros": {
            long: ["Central Standard Time", "Central Daylight Time"],
            short: ["CST", "CDT"]
          },
          "America/Mazatlan": {
            long: ["Mexican Pacific Standard Time", "Mexican Pacific Daylight Time"]
          },
          "America/Mendoza": {
            long: ["Argentina Standard Time", "Argentina Summer Time"]
          },
          "America/Menominee": {
            long: ["Central Standard Time", "Central Daylight Time"],
            short: ["CST", "CDT"]
          },
          "America/Merida": {
            long: ["Central Standard Time", "Central Daylight Time"],
            short: ["CST", "CDT"]
          },
          "America/Metlakatla": {
            long: ["Alaska Standard Time", "Alaska Daylight Time"],
            short: ["AKST", "AKDT"]
          },
          "America/Mexico_City": {
            long: ["Central Standard Time", "Central Daylight Time"],
            short: ["CST", "CDT"]
          },
          "America/Miquelon": {
            long: ["St. Pierre & Miquelon Standard Time", "St. Pierre & Miquelon Daylight Time"]
          },
          "America/Moncton": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/Monterrey": {
            long: ["Central Standard Time", "Central Daylight Time"],
            short: ["CST", "CDT"]
          },
          "America/Montevideo": {
            long: ["Uruguay Standard Time", "Uruguay Summer Time"]
          },
          "America/Montserrat": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/Nassau": {
            long: ["Eastern Standard Time", "Eastern Daylight Time"],
            short: ["EST", "EDT"]
          },
          "America/New_York": {
            long: ["Eastern Standard Time", "Eastern Daylight Time"],
            short: ["EST", "EDT"]
          },
          "America/Nome": {
            long: ["Alaska Standard Time", "Alaska Daylight Time"],
            short: ["AKST", "AKDT"]
          },
          "America/Noronha": {
            long: ["Fernando de Noronha Standard Time", "Fernando de Noronha Summer Time"]
          },
          "America/Ojinaga": {
            long: ["Central Standard Time", "Central Daylight Time"],
            short: ["CST", "CDT"]
          },
          "America/Panama": {
            long: ["Eastern Standard Time", "Eastern Daylight Time"],
            short: ["EST", "EDT"]
          },
          "America/Paramaribo": {
            long: ["Suriname Time", "Suriname Time"]
          },
          "America/Phoenix": {
            long: ["Mountain Standard Time", "Mountain Daylight Time"],
            short: ["MST", "MDT"]
          },
          "America/Port_of_Spain": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/Port-au-Prince": {
            long: ["Eastern Standard Time", "Eastern Daylight Time"],
            short: ["EST", "EDT"]
          },
          "America/Porto_Velho": {
            long: ["Amazon Standard Time", "Amazon Summer Time"]
          },
          "America/Puerto_Rico": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/Punta_Arenas": {
            long: ["Chile Standard Time", "Chile Summer Time"]
          },
          "America/Rankin_Inlet": {
            long: ["Central Standard Time", "Central Daylight Time"],
            short: ["CST", "CDT"]
          },
          "America/Recife": {
            long: ["Brasilia Standard Time", "Brasilia Summer Time"]
          },
          "America/Regina": {
            long: ["Central Standard Time", "Central Daylight Time"],
            short: ["CST", "CDT"]
          },
          "America/Resolute": {
            long: ["Central Standard Time", "Central Daylight Time"],
            short: ["CST", "CDT"]
          },
          "America/Rio_Branco": {
            long: ["Acre Standard Time", "Acre Summer Time"]
          },
          "America/Santarem": {
            long: ["Brasilia Standard Time", "Brasilia Summer Time"]
          },
          "America/Santiago": {
            long: ["Chile Standard Time", "Chile Summer Time"]
          },
          "America/Santo_Domingo": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/Sao_Paulo": {
            long: ["Brasilia Standard Time", "Brasilia Summer Time"]
          },
          "America/Scoresbysund": {
            long: ["Greenland Standard Time", "Greenland Summer Time"]
          },
          "America/Sitka": {
            long: ["Alaska Standard Time", "Alaska Daylight Time"],
            short: ["AKST", "AKDT"]
          },
          "America/St_Barthelemy": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/St_Johns": {
            long: ["Newfoundland Standard Time", "Newfoundland Daylight Time"]
          },
          "America/St_Kitts": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/St_Lucia": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/St_Thomas": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/St_Vincent": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/Swift_Current": {
            long: ["Central Standard Time", "Central Daylight Time"],
            short: ["CST", "CDT"]
          },
          "America/Tegucigalpa": {
            long: ["Central Standard Time", "Central Daylight Time"],
            short: ["CST", "CDT"]
          },
          "America/Thule": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/Tijuana": {
            long: ["Pacific Standard Time", "Pacific Daylight Time"],
            short: ["PST", "PDT"]
          },
          "America/Toronto": {
            long: ["Eastern Standard Time", "Eastern Daylight Time"],
            short: ["EST", "EDT"]
          },
          "America/Tortola": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "America/Vancouver": {
            long: ["Pacific Standard Time", "Pacific Daylight Time"],
            short: ["PST", "PDT"]
          },
          "America/Whitehorse": {
            long: ["Yukon Time", "Yukon Time"]
          },
          "America/Winnipeg": {
            long: ["Central Standard Time", "Central Daylight Time"],
            short: ["CST", "CDT"]
          },
          "America/Yakutat": {
            long: ["Alaska Standard Time", "Alaska Daylight Time"],
            short: ["AKST", "AKDT"]
          },
          "Antarctica/Casey": {
            long: ["Australian Western Standard Time", "Australian Western Daylight Time"]
          },
          "Antarctica/Davis": {
            long: ["Davis Time", "Davis Time"]
          },
          "Antarctica/DumontDUrville": {
            long: ["Dumont d’Urville Time", "Dumont d’Urville Time"]
          },
          "Antarctica/Macquarie": {
            long: ["Australian Eastern Standard Time", "Australian Eastern Daylight Time"]
          },
          "Antarctica/Mawson": {
            long: ["Mawson Time", "Mawson Time"]
          },
          "Antarctica/McMurdo": {
            long: ["New Zealand Standard Time", "New Zealand Daylight Time"]
          },
          "Antarctica/Palmer": {
            long: ["Chile Standard Time", "Chile Summer Time"]
          },
          "Antarctica/Rothera": {
            long: ["Rothera Time", "Rothera Time"]
          },
          "Antarctica/Syowa": {
            long: ["Syowa Time", "Syowa Time"]
          },
          "Antarctica/Troll": {
            long: ["Greenwich Mean Time", "Greenwich Mean Time"],
            short: ["GMT", "GMT"]
          },
          "Antarctica/Vostok": {
            long: ["Vostok Time", "Vostok Time"]
          },
          "Arctic/Longyearbyen": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Asia/Aden": {
            long: ["Arabian Standard Time", "Arabian Daylight Time"]
          },
          "Asia/Almaty": {
            long: ["Kazakhstan Time", "Kazakhstan Time"]
          },
          "Asia/Amman": {
            long: ["Eastern European Standard Time", "Eastern European Summer Time"]
          },
          "Asia/Anadyr": {
            long: ["Kamchatka Standard Time", "Kamchatka Summer Time"]
          },
          "Asia/Aqtau": {
            long: ["Kazakhstan Time", "Kazakhstan Time"]
          },
          "Asia/Aqtobe": {
            long: ["Kazakhstan Time", "Kazakhstan Time"]
          },
          "Asia/Ashgabat": {
            long: ["Turkmenistan Standard Time", "Turkmenistan Summer Time"]
          },
          "Asia/Atyrau": {
            long: ["Kazakhstan Time", "Kazakhstan Time"]
          },
          "Asia/Baghdad": {
            long: ["Arabian Standard Time", "Arabian Daylight Time"]
          },
          "Asia/Bahrain": {
            long: ["Arabian Standard Time", "Arabian Daylight Time"]
          },
          "Asia/Baku": {
            long: ["Azerbaijan Standard Time", "Azerbaijan Summer Time"]
          },
          "Asia/Bangkok": {
            long: ["Indochina Time", "Indochina Time"]
          },
          "Asia/Barnaul": {
            long: ["Krasnoyarsk Standard Time", "Krasnoyarsk Summer Time"]
          },
          "Asia/Beirut": {
            long: ["Eastern European Standard Time", "Eastern European Summer Time"]
          },
          "Asia/Bishkek": {
            long: ["Kyrgyzstan Time", "Kyrgyzstan Time"]
          },
          "Asia/Brunei": {
            long: ["Brunei Time", "Brunei Time"]
          },
          "Asia/Calcutta": {
            long: ["India Standard Time", "India Standard Time"]
          },
          "Asia/Chita": {
            long: ["Yakutsk Standard Time", "Yakutsk Summer Time"]
          },
          "Asia/Colombo": {
            long: ["India Standard Time", "India Standard Time"]
          },
          "Asia/Damascus": {
            long: ["Eastern European Standard Time", "Eastern European Summer Time"]
          },
          "Asia/Dhaka": {
            long: ["Bangladesh Standard Time", "Bangladesh Summer Time"]
          },
          "Asia/Dili": {
            long: ["Timor-Leste Time", "Timor-Leste Time"]
          },
          "Asia/Dubai": {
            long: ["Gulf Standard Time", "Gulf Standard Time"]
          },
          "Asia/Dushanbe": {
            long: ["Tajikistan Time", "Tajikistan Time"]
          },
          "Asia/Famagusta": {
            long: ["Eastern European Standard Time", "Eastern European Summer Time"]
          },
          "Asia/Gaza": {
            long: ["Eastern European Standard Time", "Eastern European Summer Time"]
          },
          "Asia/Hebron": {
            long: ["Eastern European Standard Time", "Eastern European Summer Time"]
          },
          "Asia/Hong_Kong": {
            long: ["Hong Kong Standard Time", "Hong Kong Summer Time"]
          },
          "Asia/Hovd": {
            long: ["Khovd Standard Time", "Khovd Summer Time"]
          },
          "Asia/Irkutsk": {
            long: ["Irkutsk Standard Time", "Irkutsk Summer Time"]
          },
          "Asia/Jakarta": {
            long: ["Western Indonesia Time", "Western Indonesia Time"]
          },
          "Asia/Jayapura": {
            long: ["Eastern Indonesia Time", "Eastern Indonesia Time"]
          },
          "Asia/Jerusalem": {
            long: ["Israel Standard Time", "Israel Daylight Time"]
          },
          "Asia/Kabul": {
            long: ["Afghanistan Time", "Afghanistan Time"]
          },
          "Asia/Kamchatka": {
            long: ["Kamchatka Standard Time", "Kamchatka Summer Time"]
          },
          "Asia/Karachi": {
            long: ["Pakistan Standard Time", "Pakistan Summer Time"]
          },
          "Asia/Katmandu": {
            long: ["Nepal Time", "Nepal Time"]
          },
          "Asia/Khandyga": {
            long: ["Yakutsk Standard Time", "Yakutsk Summer Time"]
          },
          "Asia/Krasnoyarsk": {
            long: ["Krasnoyarsk Standard Time", "Krasnoyarsk Summer Time"]
          },
          "Asia/Kuala_Lumpur": {
            long: ["Malaysia Time", "Malaysia Time"]
          },
          "Asia/Kuching": {
            long: ["Malaysia Time", "Malaysia Time"]
          },
          "Asia/Kuwait": {
            long: ["Arabian Standard Time", "Arabian Daylight Time"]
          },
          "Asia/Macau": {
            long: ["China Standard Time", "China Daylight Time"]
          },
          "Asia/Magadan": {
            long: ["Magadan Standard Time", "Magadan Summer Time"]
          },
          "Asia/Makassar": {
            long: ["Central Indonesia Time", "Central Indonesia Time"]
          },
          "Asia/Manila": {
            long: ["Philippine Standard Time", "Philippine Summer Time"]
          },
          "Asia/Muscat": {
            long: ["Gulf Standard Time", "Gulf Standard Time"]
          },
          "Asia/Nicosia": {
            long: ["Eastern European Standard Time", "Eastern European Summer Time"]
          },
          "Asia/Novokuznetsk": {
            long: ["Krasnoyarsk Standard Time", "Krasnoyarsk Summer Time"]
          },
          "Asia/Novosibirsk": {
            long: ["Krasnoyarsk Standard Time", "Krasnoyarsk Summer Time"]
          },
          "Asia/Omsk": {
            long: ["Omsk Standard Time", "Omsk Summer Time"]
          },
          "Asia/Oral": {
            long: ["Kazakhstan Time", "Kazakhstan Time"]
          },
          "Asia/Phnom_Penh": {
            long: ["Indochina Time", "Indochina Time"]
          },
          "Asia/Pontianak": {
            long: ["Western Indonesia Time", "Western Indonesia Time"]
          },
          "Asia/Pyongyang": {
            long: ["Korean Standard Time", "Korean Daylight Time"]
          },
          "Asia/Qatar": {
            long: ["Arabian Standard Time", "Arabian Daylight Time"]
          },
          "Asia/Qostanay": {
            long: ["Kazakhstan Time", "Kazakhstan Time"]
          },
          "Asia/Qyzylorda": {
            long: ["Kazakhstan Time", "Kazakhstan Time"]
          },
          "Asia/Rangoon": {
            long: ["Myanmar Time", "Myanmar Time"]
          },
          "Asia/Riyadh": {
            long: ["Arabian Standard Time", "Arabian Daylight Time"]
          },
          "Asia/Saigon": {
            long: ["Indochina Time", "Indochina Time"]
          },
          "Asia/Sakhalin": {
            long: ["Magadan Standard Time", "Magadan Summer Time"]
          },
          "Asia/Samarkand": {
            long: ["Uzbekistan Standard Time", "Uzbekistan Summer Time"]
          },
          "Asia/Seoul": {
            long: ["Korean Standard Time", "Korean Daylight Time"]
          },
          "Asia/Shanghai": {
            long: ["China Standard Time", "China Daylight Time"]
          },
          "Asia/Singapore": {
            long: ["Singapore Standard Time", "Singapore Standard Time"]
          },
          "Asia/Srednekolymsk": {
            long: ["Magadan Standard Time", "Magadan Summer Time"]
          },
          "Asia/Taipei": {
            long: ["Taiwan Standard Time", "Taiwan Daylight Time"]
          },
          "Asia/Tashkent": {
            long: ["Uzbekistan Standard Time", "Uzbekistan Summer Time"]
          },
          "Asia/Tbilisi": {
            long: ["Georgia Standard Time", "Georgia Summer Time"]
          },
          "Asia/Tehran": {
            long: ["Iran Standard Time", "Iran Daylight Time"]
          },
          "Asia/Thimphu": {
            long: ["Bhutan Time", "Bhutan Time"]
          },
          "Asia/Tokyo": {
            long: ["Japan Standard Time", "Japan Daylight Time"]
          },
          "Asia/Tomsk": {
            long: ["Krasnoyarsk Standard Time", "Krasnoyarsk Summer Time"]
          },
          "Asia/Ulaanbaatar": {
            long: ["Ulaanbaatar Standard Time", "Ulaanbaatar Summer Time"]
          },
          "Asia/Ust-Nera": {
            long: ["Vladivostok Standard Time", "Vladivostok Summer Time"]
          },
          "Asia/Vientiane": {
            long: ["Indochina Time", "Indochina Time"]
          },
          "Asia/Vladivostok": {
            long: ["Vladivostok Standard Time", "Vladivostok Summer Time"]
          },
          "Asia/Yakutsk": {
            long: ["Yakutsk Standard Time", "Yakutsk Summer Time"]
          },
          "Asia/Yekaterinburg": {
            long: ["Yekaterinburg Standard Time", "Yekaterinburg Summer Time"]
          },
          "Asia/Yerevan": {
            long: ["Armenia Standard Time", "Armenia Summer Time"]
          },
          "Atlantic/Azores": {
            long: ["Azores Standard Time", "Azores Summer Time"]
          },
          "Atlantic/Bermuda": {
            long: ["Atlantic Standard Time", "Atlantic Daylight Time"],
            short: ["AST", "ADT"]
          },
          "Atlantic/Canary": {
            long: ["Western European Standard Time", "Western European Summer Time"]
          },
          "Atlantic/Cape_Verde": {
            long: ["Cape Verde Standard Time", "Cape Verde Summer Time"]
          },
          "Atlantic/Faeroe": {
            long: ["Western European Standard Time", "Western European Summer Time"]
          },
          "Atlantic/Madeira": {
            long: ["Western European Standard Time", "Western European Summer Time"]
          },
          "Atlantic/Reykjavik": {
            long: ["Greenwich Mean Time", "Greenwich Mean Time"],
            short: ["GMT", "GMT"]
          },
          "Atlantic/South_Georgia": {
            long: ["South Georgia Time", "South Georgia Time"]
          },
          "Atlantic/St_Helena": {
            long: ["Greenwich Mean Time", "Greenwich Mean Time"],
            short: ["GMT", "GMT"]
          },
          "Atlantic/Stanley": {
            long: ["Falkland Islands Standard Time", "Falkland Islands Summer Time"]
          },
          "Australia/Adelaide": {
            long: ["Australian Central Standard Time", "Australian Central Daylight Time"]
          },
          "Australia/Brisbane": {
            long: ["Australian Eastern Standard Time", "Australian Eastern Daylight Time"]
          },
          "Australia/Broken_Hill": {
            long: ["Australian Central Standard Time", "Australian Central Daylight Time"]
          },
          "Australia/Darwin": {
            long: ["Australian Central Standard Time", "Australian Central Daylight Time"]
          },
          "Australia/Eucla": {
            long: ["Australian Central Western Standard Time", "Australian Central Western Daylight Time"]
          },
          "Australia/Hobart": {
            long: ["Australian Eastern Standard Time", "Australian Eastern Daylight Time"]
          },
          "Australia/Lindeman": {
            long: ["Australian Eastern Standard Time", "Australian Eastern Daylight Time"]
          },
          "Australia/Lord_Howe": {
            long: ["Lord Howe Standard Time", "Lord Howe Daylight Time"]
          },
          "Australia/Melbourne": {
            long: ["Australian Eastern Standard Time", "Australian Eastern Daylight Time"]
          },
          "Australia/Perth": {
            long: ["Australian Western Standard Time", "Australian Western Daylight Time"]
          },
          "Australia/Sydney": {
            long: ["Australian Eastern Standard Time", "Australian Eastern Daylight Time"]
          },
          "Etc/GMT": {
            long: ["Greenwich Mean Time", "Greenwich Mean Time"],
            short: ["GMT", "GMT"]
          },
          "Europe/Amsterdam": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Andorra": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Astrakhan": {
            long: ["Samara Standard Time", "Samara Summer Time"]
          },
          "Europe/Athens": {
            long: ["Eastern European Standard Time", "Eastern European Summer Time"]
          },
          "Europe/Belgrade": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Berlin": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Bratislava": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Brussels": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Bucharest": {
            long: ["Eastern European Standard Time", "Eastern European Summer Time"]
          },
          "Europe/Budapest": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Busingen": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Chisinau": {
            long: ["Eastern European Standard Time", "Eastern European Summer Time"]
          },
          "Europe/Copenhagen": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Dublin": {
            long: ["Greenwich Mean Time", "Greenwich Mean Time"],
            short: ["GMT", "GMT"]
          },
          "Europe/Gibraltar": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Guernsey": {
            long: ["Greenwich Mean Time", "Greenwich Mean Time"],
            short: ["GMT", "GMT"]
          },
          "Europe/Helsinki": {
            long: ["Eastern European Standard Time", "Eastern European Summer Time"]
          },
          "Europe/Isle_of_Man": {
            long: ["Greenwich Mean Time", "Greenwich Mean Time"],
            short: ["GMT", "GMT"]
          },
          "Europe/Istanbul": {
            long: ["Türkiye Standard Time", "Türkiye Summer Time"]
          },
          "Europe/Jersey": {
            long: ["Greenwich Mean Time", "Greenwich Mean Time"],
            short: ["GMT", "GMT"]
          },
          "Europe/Kaliningrad": {
            long: ["Eastern European Standard Time", "Eastern European Summer Time"]
          },
          "Europe/Kiev": {
            long: ["Eastern European Standard Time", "Eastern European Summer Time"]
          },
          "Europe/Kirov": {
            long: ["Moscow Standard Time", "Moscow Summer Time"]
          },
          "Europe/Lisbon": {
            long: ["Western European Standard Time", "Western European Summer Time"]
          },
          "Europe/Ljubljana": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/London": {
            long: ["Greenwich Mean Time", "Greenwich Mean Time"],
            short: ["GMT", "GMT"]
          },
          "Europe/Luxembourg": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Madrid": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Malta": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Mariehamn": {
            long: ["Eastern European Standard Time", "Eastern European Summer Time"]
          },
          "Europe/Minsk": {
            long: ["Moscow Standard Time", "Moscow Summer Time"]
          },
          "Europe/Monaco": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Moscow": {
            long: ["Moscow Standard Time", "Moscow Summer Time"]
          },
          "Europe/Oslo": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Paris": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Podgorica": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Prague": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Riga": {
            long: ["Eastern European Standard Time", "Eastern European Summer Time"]
          },
          "Europe/Rome": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Samara": {
            long: ["Samara Standard Time", "Samara Summer Time"]
          },
          "Europe/San_Marino": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Sarajevo": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Saratov": {
            long: ["Samara Standard Time", "Samara Summer Time"]
          },
          "Europe/Simferopol": {
            long: ["Moscow Standard Time", "Moscow Summer Time"]
          },
          "Europe/Skopje": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Sofia": {
            long: ["Eastern European Standard Time", "Eastern European Summer Time"]
          },
          "Europe/Stockholm": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Tallinn": {
            long: ["Eastern European Standard Time", "Eastern European Summer Time"]
          },
          "Europe/Tirane": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Ulyanovsk": {
            long: ["Samara Standard Time", "Samara Summer Time"]
          },
          "Europe/Vaduz": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Vatican": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Vienna": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Vilnius": {
            long: ["Eastern European Standard Time", "Eastern European Summer Time"]
          },
          "Europe/Volgograd": {
            long: ["Moscow Standard Time", "Moscow Summer Time"]
          },
          "Europe/Warsaw": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Zagreb": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Europe/Zurich": {
            long: ["Central European Standard Time", "Central European Summer Time"]
          },
          "Indian/Antananarivo": {
            long: ["East Africa Time", "East Africa Time"]
          },
          "Indian/Chagos": {
            long: ["Indian Ocean Time", "Indian Ocean Time"]
          },
          "Indian/Christmas": {
            long: ["Christmas Island Time", "Christmas Island Time"]
          },
          "Indian/Cocos": {
            long: ["Cocos Islands Time", "Cocos Islands Time"]
          },
          "Indian/Comoro": {
            long: ["East Africa Time", "East Africa Time"]
          },
          "Indian/Kerguelen": {
            long: ["French Southern & Antarctic Time", "French Southern & Antarctic Time"]
          },
          "Indian/Mahe": {
            long: ["Seychelles Time", "Seychelles Time"]
          },
          "Indian/Maldives": {
            long: ["Maldives Time", "Maldives Time"]
          },
          "Indian/Mauritius": {
            long: ["Mauritius Standard Time", "Mauritius Summer Time"]
          },
          "Indian/Mayotte": {
            long: ["East Africa Time", "East Africa Time"]
          },
          "Indian/Reunion": {
            long: ["Réunion Time", "Réunion Time"]
          },
          "Pacific/Apia": {
            long: ["Samoa Standard Time", "Samoa Daylight Time"]
          },
          "Pacific/Auckland": {
            long: ["New Zealand Standard Time", "New Zealand Daylight Time"]
          },
          "Pacific/Bougainville": {
            long: ["Papua New Guinea Time", "Papua New Guinea Time"]
          },
          "Pacific/Chatham": {
            long: ["Chatham Standard Time", "Chatham Daylight Time"]
          },
          "Pacific/Easter": {
            long: ["Easter Island Standard Time", "Easter Island Summer Time"]
          },
          "Pacific/Efate": {
            long: ["Vanuatu Standard Time", "Vanuatu Summer Time"]
          },
          "Pacific/Enderbury": {
            long: ["Phoenix Islands Time", "Phoenix Islands Time"]
          },
          "Pacific/Fakaofo": {
            long: ["Tokelau Time", "Tokelau Time"]
          },
          "Pacific/Fiji": {
            long: ["Fiji Standard Time", "Fiji Summer Time"]
          },
          "Pacific/Funafuti": {
            long: ["Tuvalu Time", "Tuvalu Time"]
          },
          "Pacific/Galapagos": {
            long: ["Galapagos Time", "Galapagos Time"]
          },
          "Pacific/Gambier": {
            long: ["Gambier Time", "Gambier Time"]
          },
          "Pacific/Guadalcanal": {
            long: ["Solomon Islands Time", "Solomon Islands Time"]
          },
          "Pacific/Guam": {
            long: ["Chamorro Standard Time", "Chamorro Standard Time"]
          },
          "Pacific/Honolulu": {
            long: ["Hawaii-Aleutian Standard Time", "Hawaii-Aleutian Standard Time"],
            short: ["HST", "HST"]
          },
          "Pacific/Kiritimati": {
            long: ["Line Islands Time", "Line Islands Time"]
          },
          "Pacific/Kosrae": {
            long: ["Kosrae Time", "Kosrae Time"]
          },
          "Pacific/Kwajalein": {
            long: ["Marshall Islands Time", "Marshall Islands Time"]
          },
          "Pacific/Majuro": {
            long: ["Marshall Islands Time", "Marshall Islands Time"]
          },
          "Pacific/Marquesas": {
            long: ["Marquesas Time", "Marquesas Time"]
          },
          "Pacific/Midway": {
            long: ["American Samoa Standard Time", "American Samoa Daylight Time"]
          },
          "Pacific/Nauru": {
            long: ["Nauru Time", "Nauru Time"]
          },
          "Pacific/Niue": {
            long: ["Niue Time", "Niue Time"]
          },
          "Pacific/Norfolk": {
            long: ["Norfolk Island Standard Time", "Norfolk Island Daylight Time"]
          },
          "Pacific/Noumea": {
            long: ["New Caledonia Standard Time", "New Caledonia Summer Time"]
          },
          "Pacific/Pago_Pago": {
            long: ["American Samoa Standard Time", "American Samoa Daylight Time"]
          },
          "Pacific/Palau": {
            long: ["Palau Time", "Palau Time"]
          },
          "Pacific/Pitcairn": {
            long: ["Pitcairn Time", "Pitcairn Time"]
          },
          "Pacific/Ponape": {
            long: ["Pohnpei Time", "Pohnpei Time"]
          },
          "Pacific/Port_Moresby": {
            long: ["Papua New Guinea Time", "Papua New Guinea Time"]
          },
          "Pacific/Rarotonga": {
            long: ["Cook Islands Standard Time", "Cook Islands Summer Time"]
          },
          "Pacific/Saipan": {
            long: ["Chamorro Standard Time", "Chamorro Standard Time"]
          },
          "Pacific/Tahiti": {
            long: ["Tahiti Time", "Tahiti Time"]
          },
          "Pacific/Tarawa": {
            long: ["Gilbert Islands Time", "Gilbert Islands Time"]
          },
          "Pacific/Tongatapu": {
            long: ["Tonga Standard Time", "Tonga Summer Time"]
          },
          "Pacific/Truk": {
            long: ["Chuuk Time", "Chuuk Time"]
          },
          "Pacific/Wake": {
            long: ["Wake Island Time", "Wake Island Time"]
          },
          "Pacific/Wallis": {
            long: ["Wallis & Futuna Time", "Wallis & Futuna Time"]
          },
          UTC: {
            long: ["Coordinated Universal Time", "Coordinated Universal Time"],
            short: ["UTC", "UTC"]
          }
        },
        gmtFormat: "GMT{0}",
        hourFormat: "+HH:mm;-HH:mm",
        dateFormat: {
          full: "EEEE, MMMM d, y",
          long: "MMMM d, y",
          medium: "MMM d, y",
          short: "M/d/yy"
        },
        timeFormat: {
          full: "h:mm:ss a zzzz",
          long: "h:mm:ss a z",
          medium: "h:mm:ss a",
          short: "h:mm a"
        },
        dateTimeFormat: {
          full: "{1}, {0}",
          long: "{1}, {0}",
          medium: "{1}, {0}",
          short: "{1}, {0}"
        },
        formats: {
          gregory: {
            Bh: "h B",
            Bhm: "h:mm B",
            Bhms: "h:mm:ss B",
            d: "d",
            E: "ccc",
            EBh: "E h B",
            EBhm: "E h:mm B",
            EBhms: "E h:mm:ss B",
            Ed: "d E",
            Eh: "E h a",
            "Eh-alt-ascii": "E h a",
            Ehm: "E h:mm a",
            "Ehm-alt-ascii": "E h:mm a",
            EHm: "E HH:mm",
            Ehms: "E h:mm:ss a",
            "Ehms-alt-ascii": "E h:mm:ss a",
            EHms: "E HH:mm:ss",
            Gy: "y G",
            GyM: "M/y G",
            GyMd: "M/d/y G",
            GyMEd: "E, M/d/y G",
            GyMMM: "MMM y G",
            GyMMMd: "MMM d, y G",
            GyMMMEd: "E, MMM d, y G",
            h: "h a",
            "h-alt-ascii": "h a",
            H: "HH",
            hm: "h:mm a",
            "hm-alt-ascii": "h:mm a",
            Hm: "HH:mm",
            hms: "h:mm:ss a",
            "hms-alt-ascii": "h:mm:ss a",
            Hms: "HH:mm:ss",
            hmsv: "h:mm:ss a v",
            "hmsv-alt-ascii": "h:mm:ss a v",
            Hmsv: "HH:mm:ss v",
            hmv: "h:mm a v",
            "hmv-alt-ascii": "h:mm a v",
            Hmv: "HH:mm v",
            hv: "h a v",
            "hv-alt-ascii": "h a v",
            Hv: "HH'h' v",
            M: "L",
            Md: "M/d",
            MEd: "E, M/d",
            MMM: "LLL",
            MMMd: "MMM d",
            MMMEd: "E, MMM d",
            MMMMd: "MMMM d",
            ms: "mm:ss",
            y: "y",
            yM: "M/y",
            yMd: "M/d/y",
            yMEd: "E, M/d/y",
            yMMM: "MMM y",
            yMMMd: "MMM d, y",
            yMMMEd: "E, MMM d, y",
            yMMMM: "MMMM y",
            "EEEE, MMMM d, y": "EEEE, MMMM d, y",
            "MMMM d, y": "MMMM d, y",
            "MMM d, y": "MMM d, y",
            "M/d/yy": "M/d/yy",
            "h:mm:ss a zzzz": "h:mm:ss a zzzz",
            "h:mm:ss a zzzz": "h:mm:ss a zzzz",
            "h:mm:ss a z": "h:mm:ss a z",
            "h:mm:ss a z": "h:mm:ss a z",
            "h:mm:ss a": "h:mm:ss a",
            "h:mm:ss a": "h:mm:ss a",
            "h:mm a": "h:mm a",
            "h:mm a": "h:mm a",
            "EEEE, MMMM d, y, h:mm:ss a zzzz": "EEEE, MMMM d, y, h:mm:ss a zzzz",
            "MMMM d, y, h:mm:ss a zzzz": "MMMM d, y, h:mm:ss a zzzz",
            "MMM d, y, h:mm:ss a zzzz": "MMM d, y, h:mm:ss a zzzz",
            "M/d/yy, h:mm:ss a zzzz": "M/d/yy, h:mm:ss a zzzz",
            "d, h:mm:ss a zzzz": "d, h:mm:ss a zzzz",
            "E, h:mm:ss a zzzz": "ccc, h:mm:ss a zzzz",
            "Ed, h:mm:ss a zzzz": "d E, h:mm:ss a zzzz",
            "Gy, h:mm:ss a zzzz": "y G, h:mm:ss a zzzz",
            "GyM, h:mm:ss a zzzz": "M/y G, h:mm:ss a zzzz",
            "GyMd, h:mm:ss a zzzz": "M/d/y G, h:mm:ss a zzzz",
            "GyMEd, h:mm:ss a zzzz": "E, M/d/y G, h:mm:ss a zzzz",
            "GyMMM, h:mm:ss a zzzz": "MMM y G, h:mm:ss a zzzz",
            "GyMMMd, h:mm:ss a zzzz": "MMM d, y G, h:mm:ss a zzzz",
            "GyMMMEd, h:mm:ss a zzzz": "E, MMM d, y G, h:mm:ss a zzzz",
            "M, h:mm:ss a zzzz": "L, h:mm:ss a zzzz",
            "Md, h:mm:ss a zzzz": "M/d, h:mm:ss a zzzz",
            "MEd, h:mm:ss a zzzz": "E, M/d, h:mm:ss a zzzz",
            "MMM, h:mm:ss a zzzz": "LLL, h:mm:ss a zzzz",
            "MMMd, h:mm:ss a zzzz": "MMM d, h:mm:ss a zzzz",
            "MMMEd, h:mm:ss a zzzz": "E, MMM d, h:mm:ss a zzzz",
            "MMMMd, h:mm:ss a zzzz": "MMMM d, h:mm:ss a zzzz",
            "y, h:mm:ss a zzzz": "y, h:mm:ss a zzzz",
            "yM, h:mm:ss a zzzz": "M/y, h:mm:ss a zzzz",
            "yMd, h:mm:ss a zzzz": "M/d/y, h:mm:ss a zzzz",
            "yMEd, h:mm:ss a zzzz": "E, M/d/y, h:mm:ss a zzzz",
            "yMMM, h:mm:ss a zzzz": "MMM y, h:mm:ss a zzzz",
            "yMMMd, h:mm:ss a zzzz": "MMM d, y, h:mm:ss a zzzz",
            "yMMMEd, h:mm:ss a zzzz": "E, MMM d, y, h:mm:ss a zzzz",
            "yMMMM, h:mm:ss a zzzz": "MMMM y, h:mm:ss a zzzz",
            "EEEE, MMMM d, y, h:mm:ss a zzzz": "EEEE, MMMM d, y, h:mm:ss a zzzz",
            "MMMM d, y, h:mm:ss a zzzz": "MMMM d, y, h:mm:ss a zzzz",
            "MMM d, y, h:mm:ss a zzzz": "MMM d, y, h:mm:ss a zzzz",
            "M/d/yy, h:mm:ss a zzzz": "M/d/yy, h:mm:ss a zzzz",
            "d, h:mm:ss a zzzz": "d, h:mm:ss a zzzz",
            "E, h:mm:ss a zzzz": "ccc, h:mm:ss a zzzz",
            "Ed, h:mm:ss a zzzz": "d E, h:mm:ss a zzzz",
            "Gy, h:mm:ss a zzzz": "y G, h:mm:ss a zzzz",
            "GyM, h:mm:ss a zzzz": "M/y G, h:mm:ss a zzzz",
            "GyMd, h:mm:ss a zzzz": "M/d/y G, h:mm:ss a zzzz",
            "GyMEd, h:mm:ss a zzzz": "E, M/d/y G, h:mm:ss a zzzz",
            "GyMMM, h:mm:ss a zzzz": "MMM y G, h:mm:ss a zzzz",
            "GyMMMd, h:mm:ss a zzzz": "MMM d, y G, h:mm:ss a zzzz",
            "GyMMMEd, h:mm:ss a zzzz": "E, MMM d, y G, h:mm:ss a zzzz",
            "M, h:mm:ss a zzzz": "L, h:mm:ss a zzzz",
            "Md, h:mm:ss a zzzz": "M/d, h:mm:ss a zzzz",
            "MEd, h:mm:ss a zzzz": "E, M/d, h:mm:ss a zzzz",
            "MMM, h:mm:ss a zzzz": "LLL, h:mm:ss a zzzz",
            "MMMd, h:mm:ss a zzzz": "MMM d, h:mm:ss a zzzz",
            "MMMEd, h:mm:ss a zzzz": "E, MMM d, h:mm:ss a zzzz",
            "MMMMd, h:mm:ss a zzzz": "MMMM d, h:mm:ss a zzzz",
            "y, h:mm:ss a zzzz": "y, h:mm:ss a zzzz",
            "yM, h:mm:ss a zzzz": "M/y, h:mm:ss a zzzz",
            "yMd, h:mm:ss a zzzz": "M/d/y, h:mm:ss a zzzz",
            "yMEd, h:mm:ss a zzzz": "E, M/d/y, h:mm:ss a zzzz",
            "yMMM, h:mm:ss a zzzz": "MMM y, h:mm:ss a zzzz",
            "yMMMd, h:mm:ss a zzzz": "MMM d, y, h:mm:ss a zzzz",
            "yMMMEd, h:mm:ss a zzzz": "E, MMM d, y, h:mm:ss a zzzz",
            "yMMMM, h:mm:ss a zzzz": "MMMM y, h:mm:ss a zzzz",
            "EEEE, MMMM d, y, h:mm:ss a z": "EEEE, MMMM d, y, h:mm:ss a z",
            "MMMM d, y, h:mm:ss a z": "MMMM d, y, h:mm:ss a z",
            "MMM d, y, h:mm:ss a z": "MMM d, y, h:mm:ss a z",
            "M/d/yy, h:mm:ss a z": "M/d/yy, h:mm:ss a z",
            "d, h:mm:ss a z": "d, h:mm:ss a z",
            "E, h:mm:ss a z": "ccc, h:mm:ss a z",
            "Ed, h:mm:ss a z": "d E, h:mm:ss a z",
            "Gy, h:mm:ss a z": "y G, h:mm:ss a z",
            "GyM, h:mm:ss a z": "M/y G, h:mm:ss a z",
            "GyMd, h:mm:ss a z": "M/d/y G, h:mm:ss a z",
            "GyMEd, h:mm:ss a z": "E, M/d/y G, h:mm:ss a z",
            "GyMMM, h:mm:ss a z": "MMM y G, h:mm:ss a z",
            "GyMMMd, h:mm:ss a z": "MMM d, y G, h:mm:ss a z",
            "GyMMMEd, h:mm:ss a z": "E, MMM d, y G, h:mm:ss a z",
            "M, h:mm:ss a z": "L, h:mm:ss a z",
            "Md, h:mm:ss a z": "M/d, h:mm:ss a z",
            "MEd, h:mm:ss a z": "E, M/d, h:mm:ss a z",
            "MMM, h:mm:ss a z": "LLL, h:mm:ss a z",
            "MMMd, h:mm:ss a z": "MMM d, h:mm:ss a z",
            "MMMEd, h:mm:ss a z": "E, MMM d, h:mm:ss a z",
            "MMMMd, h:mm:ss a z": "MMMM d, h:mm:ss a z",
            "y, h:mm:ss a z": "y, h:mm:ss a z",
            "yM, h:mm:ss a z": "M/y, h:mm:ss a z",
            "yMd, h:mm:ss a z": "M/d/y, h:mm:ss a z",
            "yMEd, h:mm:ss a z": "E, M/d/y, h:mm:ss a z",
            "yMMM, h:mm:ss a z": "MMM y, h:mm:ss a z",
            "yMMMd, h:mm:ss a z": "MMM d, y, h:mm:ss a z",
            "yMMMEd, h:mm:ss a z": "E, MMM d, y, h:mm:ss a z",
            "yMMMM, h:mm:ss a z": "MMMM y, h:mm:ss a z",
            "EEEE, MMMM d, y, h:mm:ss a z": "EEEE, MMMM d, y, h:mm:ss a z",
            "MMMM d, y, h:mm:ss a z": "MMMM d, y, h:mm:ss a z",
            "MMM d, y, h:mm:ss a z": "MMM d, y, h:mm:ss a z",
            "M/d/yy, h:mm:ss a z": "M/d/yy, h:mm:ss a z",
            "d, h:mm:ss a z": "d, h:mm:ss a z",
            "E, h:mm:ss a z": "ccc, h:mm:ss a z",
            "Ed, h:mm:ss a z": "d E, h:mm:ss a z",
            "Gy, h:mm:ss a z": "y G, h:mm:ss a z",
            "GyM, h:mm:ss a z": "M/y G, h:mm:ss a z",
            "GyMd, h:mm:ss a z": "M/d/y G, h:mm:ss a z",
            "GyMEd, h:mm:ss a z": "E, M/d/y G, h:mm:ss a z",
            "GyMMM, h:mm:ss a z": "MMM y G, h:mm:ss a z",
            "GyMMMd, h:mm:ss a z": "MMM d, y G, h:mm:ss a z",
            "GyMMMEd, h:mm:ss a z": "E, MMM d, y G, h:mm:ss a z",
            "M, h:mm:ss a z": "L, h:mm:ss a z",
            "Md, h:mm:ss a z": "M/d, h:mm:ss a z",
            "MEd, h:mm:ss a z": "E, M/d, h:mm:ss a z",
            "MMM, h:mm:ss a z": "LLL, h:mm:ss a z",
            "MMMd, h:mm:ss a z": "MMM d, h:mm:ss a z",
            "MMMEd, h:mm:ss a z": "E, MMM d, h:mm:ss a z",
            "MMMMd, h:mm:ss a z": "MMMM d, h:mm:ss a z",
            "y, h:mm:ss a z": "y, h:mm:ss a z",
            "yM, h:mm:ss a z": "M/y, h:mm:ss a z",
            "yMd, h:mm:ss a z": "M/d/y, h:mm:ss a z",
            "yMEd, h:mm:ss a z": "E, M/d/y, h:mm:ss a z",
            "yMMM, h:mm:ss a z": "MMM y, h:mm:ss a z",
            "yMMMd, h:mm:ss a z": "MMM d, y, h:mm:ss a z",
            "yMMMEd, h:mm:ss a z": "E, MMM d, y, h:mm:ss a z",
            "yMMMM, h:mm:ss a z": "MMMM y, h:mm:ss a z",
            "EEEE, MMMM d, y, h:mm:ss a": "EEEE, MMMM d, y, h:mm:ss a",
            "MMMM d, y, h:mm:ss a": "MMMM d, y, h:mm:ss a",
            "MMM d, y, h:mm:ss a": "MMM d, y, h:mm:ss a",
            "M/d/yy, h:mm:ss a": "M/d/yy, h:mm:ss a",
            "d, h:mm:ss a": "d, h:mm:ss a",
            "E, h:mm:ss a": "ccc, h:mm:ss a",
            "Ed, h:mm:ss a": "d E, h:mm:ss a",
            "Gy, h:mm:ss a": "y G, h:mm:ss a",
            "GyM, h:mm:ss a": "M/y G, h:mm:ss a",
            "GyMd, h:mm:ss a": "M/d/y G, h:mm:ss a",
            "GyMEd, h:mm:ss a": "E, M/d/y G, h:mm:ss a",
            "GyMMM, h:mm:ss a": "MMM y G, h:mm:ss a",
            "GyMMMd, h:mm:ss a": "MMM d, y G, h:mm:ss a",
            "GyMMMEd, h:mm:ss a": "E, MMM d, y G, h:mm:ss a",
            "M, h:mm:ss a": "L, h:mm:ss a",
            "Md, h:mm:ss a": "M/d, h:mm:ss a",
            "MEd, h:mm:ss a": "E, M/d, h:mm:ss a",
            "MMM, h:mm:ss a": "LLL, h:mm:ss a",
            "MMMd, h:mm:ss a": "MMM d, h:mm:ss a",
            "MMMEd, h:mm:ss a": "E, MMM d, h:mm:ss a",
            "MMMMd, h:mm:ss a": "MMMM d, h:mm:ss a",
            "y, h:mm:ss a": "y, h:mm:ss a",
            "yM, h:mm:ss a": "M/y, h:mm:ss a",
            "yMd, h:mm:ss a": "M/d/y, h:mm:ss a",
            "yMEd, h:mm:ss a": "E, M/d/y, h:mm:ss a",
            "yMMM, h:mm:ss a": "MMM y, h:mm:ss a",
            "yMMMd, h:mm:ss a": "MMM d, y, h:mm:ss a",
            "yMMMEd, h:mm:ss a": "E, MMM d, y, h:mm:ss a",
            "yMMMM, h:mm:ss a": "MMMM y, h:mm:ss a",
            "EEEE, MMMM d, y, h:mm:ss a": "EEEE, MMMM d, y, h:mm:ss a",
            "MMMM d, y, h:mm:ss a": "MMMM d, y, h:mm:ss a",
            "MMM d, y, h:mm:ss a": "MMM d, y, h:mm:ss a",
            "M/d/yy, h:mm:ss a": "M/d/yy, h:mm:ss a",
            "d, h:mm:ss a": "d, h:mm:ss a",
            "E, h:mm:ss a": "ccc, h:mm:ss a",
            "Ed, h:mm:ss a": "d E, h:mm:ss a",
            "Gy, h:mm:ss a": "y G, h:mm:ss a",
            "GyM, h:mm:ss a": "M/y G, h:mm:ss a",
            "GyMd, h:mm:ss a": "M/d/y G, h:mm:ss a",
            "GyMEd, h:mm:ss a": "E, M/d/y G, h:mm:ss a",
            "GyMMM, h:mm:ss a": "MMM y G, h:mm:ss a",
            "GyMMMd, h:mm:ss a": "MMM d, y G, h:mm:ss a",
            "GyMMMEd, h:mm:ss a": "E, MMM d, y G, h:mm:ss a",
            "M, h:mm:ss a": "L, h:mm:ss a",
            "Md, h:mm:ss a": "M/d, h:mm:ss a",
            "MEd, h:mm:ss a": "E, M/d, h:mm:ss a",
            "MMM, h:mm:ss a": "LLL, h:mm:ss a",
            "MMMd, h:mm:ss a": "MMM d, h:mm:ss a",
            "MMMEd, h:mm:ss a": "E, MMM d, h:mm:ss a",
            "MMMMd, h:mm:ss a": "MMMM d, h:mm:ss a",
            "y, h:mm:ss a": "y, h:mm:ss a",
            "yM, h:mm:ss a": "M/y, h:mm:ss a",
            "yMd, h:mm:ss a": "M/d/y, h:mm:ss a",
            "yMEd, h:mm:ss a": "E, M/d/y, h:mm:ss a",
            "yMMM, h:mm:ss a": "MMM y, h:mm:ss a",
            "yMMMd, h:mm:ss a": "MMM d, y, h:mm:ss a",
            "yMMMEd, h:mm:ss a": "E, MMM d, y, h:mm:ss a",
            "yMMMM, h:mm:ss a": "MMMM y, h:mm:ss a",
            "EEEE, MMMM d, y, h:mm a": "EEEE, MMMM d, y, h:mm a",
            "MMMM d, y, h:mm a": "MMMM d, y, h:mm a",
            "MMM d, y, h:mm a": "MMM d, y, h:mm a",
            "M/d/yy, h:mm a": "M/d/yy, h:mm a",
            "d, h:mm a": "d, h:mm a",
            "E, h:mm a": "ccc, h:mm a",
            "Ed, h:mm a": "d E, h:mm a",
            "Gy, h:mm a": "y G, h:mm a",
            "GyM, h:mm a": "M/y G, h:mm a",
            "GyMd, h:mm a": "M/d/y G, h:mm a",
            "GyMEd, h:mm a": "E, M/d/y G, h:mm a",
            "GyMMM, h:mm a": "MMM y G, h:mm a",
            "GyMMMd, h:mm a": "MMM d, y G, h:mm a",
            "GyMMMEd, h:mm a": "E, MMM d, y G, h:mm a",
            "M, h:mm a": "L, h:mm a",
            "Md, h:mm a": "M/d, h:mm a",
            "MEd, h:mm a": "E, M/d, h:mm a",
            "MMM, h:mm a": "LLL, h:mm a",
            "MMMd, h:mm a": "MMM d, h:mm a",
            "MMMEd, h:mm a": "E, MMM d, h:mm a",
            "MMMMd, h:mm a": "MMMM d, h:mm a",
            "y, h:mm a": "y, h:mm a",
            "yM, h:mm a": "M/y, h:mm a",
            "yMd, h:mm a": "M/d/y, h:mm a",
            "yMEd, h:mm a": "E, M/d/y, h:mm a",
            "yMMM, h:mm a": "MMM y, h:mm a",
            "yMMMd, h:mm a": "MMM d, y, h:mm a",
            "yMMMEd, h:mm a": "E, MMM d, y, h:mm a",
            "yMMMM, h:mm a": "MMMM y, h:mm a",
            "EEEE, MMMM d, y, h:mm a": "EEEE, MMMM d, y, h:mm a",
            "MMMM d, y, h:mm a": "MMMM d, y, h:mm a",
            "MMM d, y, h:mm a": "MMM d, y, h:mm a",
            "M/d/yy, h:mm a": "M/d/yy, h:mm a",
            "d, h:mm a": "d, h:mm a",
            "E, h:mm a": "ccc, h:mm a",
            "Ed, h:mm a": "d E, h:mm a",
            "Gy, h:mm a": "y G, h:mm a",
            "GyM, h:mm a": "M/y G, h:mm a",
            "GyMd, h:mm a": "M/d/y G, h:mm a",
            "GyMEd, h:mm a": "E, M/d/y G, h:mm a",
            "GyMMM, h:mm a": "MMM y G, h:mm a",
            "GyMMMd, h:mm a": "MMM d, y G, h:mm a",
            "GyMMMEd, h:mm a": "E, MMM d, y G, h:mm a",
            "M, h:mm a": "L, h:mm a",
            "Md, h:mm a": "M/d, h:mm a",
            "MEd, h:mm a": "E, M/d, h:mm a",
            "MMM, h:mm a": "LLL, h:mm a",
            "MMMd, h:mm a": "MMM d, h:mm a",
            "MMMEd, h:mm a": "E, MMM d, h:mm a",
            "MMMMd, h:mm a": "MMMM d, h:mm a",
            "y, h:mm a": "y, h:mm a",
            "yM, h:mm a": "M/y, h:mm a",
            "yMd, h:mm a": "M/d/y, h:mm a",
            "yMEd, h:mm a": "E, M/d/y, h:mm a",
            "yMMM, h:mm a": "MMM y, h:mm a",
            "yMMMd, h:mm a": "MMM d, y, h:mm a",
            "yMMMEd, h:mm a": "E, MMM d, y, h:mm a",
            "yMMMM, h:mm a": "MMMM y, h:mm a",
            "EEEE, MMMM d, y, Bh": "EEEE, MMMM d, y, h B",
            "MMMM d, y, Bh": "MMMM d, y, h B",
            "MMM d, y, Bh": "MMM d, y, h B",
            "M/d/yy, Bh": "M/d/yy, h B",
            "d, Bh": "d, h B",
            "E, Bh": "ccc, h B",
            "Ed, Bh": "d E, h B",
            "Gy, Bh": "y G, h B",
            "GyM, Bh": "M/y G, h B",
            "GyMd, Bh": "M/d/y G, h B",
            "GyMEd, Bh": "E, M/d/y G, h B",
            "GyMMM, Bh": "MMM y G, h B",
            "GyMMMd, Bh": "MMM d, y G, h B",
            "GyMMMEd, Bh": "E, MMM d, y G, h B",
            "M, Bh": "L, h B",
            "Md, Bh": "M/d, h B",
            "MEd, Bh": "E, M/d, h B",
            "MMM, Bh": "LLL, h B",
            "MMMd, Bh": "MMM d, h B",
            "MMMEd, Bh": "E, MMM d, h B",
            "MMMMd, Bh": "MMMM d, h B",
            "y, Bh": "y, h B",
            "yM, Bh": "M/y, h B",
            "yMd, Bh": "M/d/y, h B",
            "yMEd, Bh": "E, M/d/y, h B",
            "yMMM, Bh": "MMM y, h B",
            "yMMMd, Bh": "MMM d, y, h B",
            "yMMMEd, Bh": "E, MMM d, y, h B",
            "yMMMM, Bh": "MMMM y, h B",
            "EEEE, MMMM d, y, Bhm": "EEEE, MMMM d, y, h:mm B",
            "MMMM d, y, Bhm": "MMMM d, y, h:mm B",
            "MMM d, y, Bhm": "MMM d, y, h:mm B",
            "M/d/yy, Bhm": "M/d/yy, h:mm B",
            "d, Bhm": "d, h:mm B",
            "E, Bhm": "ccc, h:mm B",
            "Ed, Bhm": "d E, h:mm B",
            "Gy, Bhm": "y G, h:mm B",
            "GyM, Bhm": "M/y G, h:mm B",
            "GyMd, Bhm": "M/d/y G, h:mm B",
            "GyMEd, Bhm": "E, M/d/y G, h:mm B",
            "GyMMM, Bhm": "MMM y G, h:mm B",
            "GyMMMd, Bhm": "MMM d, y G, h:mm B",
            "GyMMMEd, Bhm": "E, MMM d, y G, h:mm B",
            "M, Bhm": "L, h:mm B",
            "Md, Bhm": "M/d, h:mm B",
            "MEd, Bhm": "E, M/d, h:mm B",
            "MMM, Bhm": "LLL, h:mm B",
            "MMMd, Bhm": "MMM d, h:mm B",
            "MMMEd, Bhm": "E, MMM d, h:mm B",
            "MMMMd, Bhm": "MMMM d, h:mm B",
            "y, Bhm": "y, h:mm B",
            "yM, Bhm": "M/y, h:mm B",
            "yMd, Bhm": "M/d/y, h:mm B",
            "yMEd, Bhm": "E, M/d/y, h:mm B",
            "yMMM, Bhm": "MMM y, h:mm B",
            "yMMMd, Bhm": "MMM d, y, h:mm B",
            "yMMMEd, Bhm": "E, MMM d, y, h:mm B",
            "yMMMM, Bhm": "MMMM y, h:mm B",
            "EEEE, MMMM d, y, Bhms": "EEEE, MMMM d, y, h:mm:ss B",
            "MMMM d, y, Bhms": "MMMM d, y, h:mm:ss B",
            "MMM d, y, Bhms": "MMM d, y, h:mm:ss B",
            "M/d/yy, Bhms": "M/d/yy, h:mm:ss B",
            "d, Bhms": "d, h:mm:ss B",
            "E, Bhms": "ccc, h:mm:ss B",
            "Ed, Bhms": "d E, h:mm:ss B",
            "Gy, Bhms": "y G, h:mm:ss B",
            "GyM, Bhms": "M/y G, h:mm:ss B",
            "GyMd, Bhms": "M/d/y G, h:mm:ss B",
            "GyMEd, Bhms": "E, M/d/y G, h:mm:ss B",
            "GyMMM, Bhms": "MMM y G, h:mm:ss B",
            "GyMMMd, Bhms": "MMM d, y G, h:mm:ss B",
            "GyMMMEd, Bhms": "E, MMM d, y G, h:mm:ss B",
            "M, Bhms": "L, h:mm:ss B",
            "Md, Bhms": "M/d, h:mm:ss B",
            "MEd, Bhms": "E, M/d, h:mm:ss B",
            "MMM, Bhms": "LLL, h:mm:ss B",
            "MMMd, Bhms": "MMM d, h:mm:ss B",
            "MMMEd, Bhms": "E, MMM d, h:mm:ss B",
            "MMMMd, Bhms": "MMMM d, h:mm:ss B",
            "y, Bhms": "y, h:mm:ss B",
            "yM, Bhms": "M/y, h:mm:ss B",
            "yMd, Bhms": "M/d/y, h:mm:ss B",
            "yMEd, Bhms": "E, M/d/y, h:mm:ss B",
            "yMMM, Bhms": "MMM y, h:mm:ss B",
            "yMMMd, Bhms": "MMM d, y, h:mm:ss B",
            "yMMMEd, Bhms": "E, MMM d, y, h:mm:ss B",
            "yMMMM, Bhms": "MMMM y, h:mm:ss B",
            "EEEE, MMMM d, y, h": "EEEE, MMMM d, y, h a",
            "MMMM d, y, h": "MMMM d, y, h a",
            "MMM d, y, h": "MMM d, y, h a",
            "M/d/yy, h": "M/d/yy, h a",
            "d, h": "d, h a",
            "E, h": "ccc, h a",
            "Ed, h": "d E, h a",
            "Gy, h": "y G, h a",
            "GyM, h": "M/y G, h a",
            "GyMd, h": "M/d/y G, h a",
            "GyMEd, h": "E, M/d/y G, h a",
            "GyMMM, h": "MMM y G, h a",
            "GyMMMd, h": "MMM d, y G, h a",
            "GyMMMEd, h": "E, MMM d, y G, h a",
            "M, h": "L, h a",
            "Md, h": "M/d, h a",
            "MEd, h": "E, M/d, h a",
            "MMM, h": "LLL, h a",
            "MMMd, h": "MMM d, h a",
            "MMMEd, h": "E, MMM d, h a",
            "MMMMd, h": "MMMM d, h a",
            "y, h": "y, h a",
            "yM, h": "M/y, h a",
            "yMd, h": "M/d/y, h a",
            "yMEd, h": "E, M/d/y, h a",
            "yMMM, h": "MMM y, h a",
            "yMMMd, h": "MMM d, y, h a",
            "yMMMEd, h": "E, MMM d, y, h a",
            "yMMMM, h": "MMMM y, h a",
            "EEEE, MMMM d, y, H": "EEEE, MMMM d, y, HH",
            "MMMM d, y, H": "MMMM d, y, HH",
            "MMM d, y, H": "MMM d, y, HH",
            "M/d/yy, H": "M/d/yy, HH",
            "d, H": "d, HH",
            "E, H": "ccc, HH",
            "Ed, H": "d E, HH",
            "Gy, H": "y G, HH",
            "GyM, H": "M/y G, HH",
            "GyMd, H": "M/d/y G, HH",
            "GyMEd, H": "E, M/d/y G, HH",
            "GyMMM, H": "MMM y G, HH",
            "GyMMMd, H": "MMM d, y G, HH",
            "GyMMMEd, H": "E, MMM d, y G, HH",
            "M, H": "L, HH",
            "Md, H": "M/d, HH",
            "MEd, H": "E, M/d, HH",
            "MMM, H": "LLL, HH",
            "MMMd, H": "MMM d, HH",
            "MMMEd, H": "E, MMM d, HH",
            "MMMMd, H": "MMMM d, HH",
            "y, H": "y, HH",
            "yM, H": "M/y, HH",
            "yMd, H": "M/d/y, HH",
            "yMEd, H": "E, M/d/y, HH",
            "yMMM, H": "MMM y, HH",
            "yMMMd, H": "MMM d, y, HH",
            "yMMMEd, H": "E, MMM d, y, HH",
            "yMMMM, H": "MMMM y, HH",
            "EEEE, MMMM d, y, hm": "EEEE, MMMM d, y, h:mm a",
            "MMMM d, y, hm": "MMMM d, y, h:mm a",
            "MMM d, y, hm": "MMM d, y, h:mm a",
            "M/d/yy, hm": "M/d/yy, h:mm a",
            "d, hm": "d, h:mm a",
            "E, hm": "ccc, h:mm a",
            "Ed, hm": "d E, h:mm a",
            "Gy, hm": "y G, h:mm a",
            "GyM, hm": "M/y G, h:mm a",
            "GyMd, hm": "M/d/y G, h:mm a",
            "GyMEd, hm": "E, M/d/y G, h:mm a",
            "GyMMM, hm": "MMM y G, h:mm a",
            "GyMMMd, hm": "MMM d, y G, h:mm a",
            "GyMMMEd, hm": "E, MMM d, y G, h:mm a",
            "M, hm": "L, h:mm a",
            "Md, hm": "M/d, h:mm a",
            "MEd, hm": "E, M/d, h:mm a",
            "MMM, hm": "LLL, h:mm a",
            "MMMd, hm": "MMM d, h:mm a",
            "MMMEd, hm": "E, MMM d, h:mm a",
            "MMMMd, hm": "MMMM d, h:mm a",
            "y, hm": "y, h:mm a",
            "yM, hm": "M/y, h:mm a",
            "yMd, hm": "M/d/y, h:mm a",
            "yMEd, hm": "E, M/d/y, h:mm a",
            "yMMM, hm": "MMM y, h:mm a",
            "yMMMd, hm": "MMM d, y, h:mm a",
            "yMMMEd, hm": "E, MMM d, y, h:mm a",
            "yMMMM, hm": "MMMM y, h:mm a",
            "EEEE, MMMM d, y, Hm": "EEEE, MMMM d, y, HH:mm",
            "MMMM d, y, Hm": "MMMM d, y, HH:mm",
            "MMM d, y, Hm": "MMM d, y, HH:mm",
            "M/d/yy, Hm": "M/d/yy, HH:mm",
            "d, Hm": "d, HH:mm",
            "E, Hm": "ccc, HH:mm",
            "Ed, Hm": "d E, HH:mm",
            "Gy, Hm": "y G, HH:mm",
            "GyM, Hm": "M/y G, HH:mm",
            "GyMd, Hm": "M/d/y G, HH:mm",
            "GyMEd, Hm": "E, M/d/y G, HH:mm",
            "GyMMM, Hm": "MMM y G, HH:mm",
            "GyMMMd, Hm": "MMM d, y G, HH:mm",
            "GyMMMEd, Hm": "E, MMM d, y G, HH:mm",
            "M, Hm": "L, HH:mm",
            "Md, Hm": "M/d, HH:mm",
            "MEd, Hm": "E, M/d, HH:mm",
            "MMM, Hm": "LLL, HH:mm",
            "MMMd, Hm": "MMM d, HH:mm",
            "MMMEd, Hm": "E, MMM d, HH:mm",
            "MMMMd, Hm": "MMMM d, HH:mm",
            "y, Hm": "y, HH:mm",
            "yM, Hm": "M/y, HH:mm",
            "yMd, Hm": "M/d/y, HH:mm",
            "yMEd, Hm": "E, M/d/y, HH:mm",
            "yMMM, Hm": "MMM y, HH:mm",
            "yMMMd, Hm": "MMM d, y, HH:mm",
            "yMMMEd, Hm": "E, MMM d, y, HH:mm",
            "yMMMM, Hm": "MMMM y, HH:mm",
            "EEEE, MMMM d, y, hms": "EEEE, MMMM d, y, h:mm:ss a",
            "MMMM d, y, hms": "MMMM d, y, h:mm:ss a",
            "MMM d, y, hms": "MMM d, y, h:mm:ss a",
            "M/d/yy, hms": "M/d/yy, h:mm:ss a",
            "d, hms": "d, h:mm:ss a",
            "E, hms": "ccc, h:mm:ss a",
            "Ed, hms": "d E, h:mm:ss a",
            "Gy, hms": "y G, h:mm:ss a",
            "GyM, hms": "M/y G, h:mm:ss a",
            "GyMd, hms": "M/d/y G, h:mm:ss a",
            "GyMEd, hms": "E, M/d/y G, h:mm:ss a",
            "GyMMM, hms": "MMM y G, h:mm:ss a",
            "GyMMMd, hms": "MMM d, y G, h:mm:ss a",
            "GyMMMEd, hms": "E, MMM d, y G, h:mm:ss a",
            "M, hms": "L, h:mm:ss a",
            "Md, hms": "M/d, h:mm:ss a",
            "MEd, hms": "E, M/d, h:mm:ss a",
            "MMM, hms": "LLL, h:mm:ss a",
            "MMMd, hms": "MMM d, h:mm:ss a",
            "MMMEd, hms": "E, MMM d, h:mm:ss a",
            "MMMMd, hms": "MMMM d, h:mm:ss a",
            "y, hms": "y, h:mm:ss a",
            "yM, hms": "M/y, h:mm:ss a",
            "yMd, hms": "M/d/y, h:mm:ss a",
            "yMEd, hms": "E, M/d/y, h:mm:ss a",
            "yMMM, hms": "MMM y, h:mm:ss a",
            "yMMMd, hms": "MMM d, y, h:mm:ss a",
            "yMMMEd, hms": "E, MMM d, y, h:mm:ss a",
            "yMMMM, hms": "MMMM y, h:mm:ss a",
            "EEEE, MMMM d, y, Hms": "EEEE, MMMM d, y, HH:mm:ss",
            "MMMM d, y, Hms": "MMMM d, y, HH:mm:ss",
            "MMM d, y, Hms": "MMM d, y, HH:mm:ss",
            "M/d/yy, Hms": "M/d/yy, HH:mm:ss",
            "d, Hms": "d, HH:mm:ss",
            "E, Hms": "ccc, HH:mm:ss",
            "Ed, Hms": "d E, HH:mm:ss",
            "Gy, Hms": "y G, HH:mm:ss",
            "GyM, Hms": "M/y G, HH:mm:ss",
            "GyMd, Hms": "M/d/y G, HH:mm:ss",
            "GyMEd, Hms": "E, M/d/y G, HH:mm:ss",
            "GyMMM, Hms": "MMM y G, HH:mm:ss",
            "GyMMMd, Hms": "MMM d, y G, HH:mm:ss",
            "GyMMMEd, Hms": "E, MMM d, y G, HH:mm:ss",
            "M, Hms": "L, HH:mm:ss",
            "Md, Hms": "M/d, HH:mm:ss",
            "MEd, Hms": "E, M/d, HH:mm:ss",
            "MMM, Hms": "LLL, HH:mm:ss",
            "MMMd, Hms": "MMM d, HH:mm:ss",
            "MMMEd, Hms": "E, MMM d, HH:mm:ss",
            "MMMMd, Hms": "MMMM d, HH:mm:ss",
            "y, Hms": "y, HH:mm:ss",
            "yM, Hms": "M/y, HH:mm:ss",
            "yMd, Hms": "M/d/y, HH:mm:ss",
            "yMEd, Hms": "E, M/d/y, HH:mm:ss",
            "yMMM, Hms": "MMM y, HH:mm:ss",
            "yMMMd, Hms": "MMM d, y, HH:mm:ss",
            "yMMMEd, Hms": "E, MMM d, y, HH:mm:ss",
            "yMMMM, Hms": "MMMM y, HH:mm:ss",
            "EEEE, MMMM d, y, hmsv": "EEEE, MMMM d, y, h:mm:ss a v",
            "MMMM d, y, hmsv": "MMMM d, y, h:mm:ss a v",
            "MMM d, y, hmsv": "MMM d, y, h:mm:ss a v",
            "M/d/yy, hmsv": "M/d/yy, h:mm:ss a v",
            "d, hmsv": "d, h:mm:ss a v",
            "E, hmsv": "ccc, h:mm:ss a v",
            "Ed, hmsv": "d E, h:mm:ss a v",
            "Gy, hmsv": "y G, h:mm:ss a v",
            "GyM, hmsv": "M/y G, h:mm:ss a v",
            "GyMd, hmsv": "M/d/y G, h:mm:ss a v",
            "GyMEd, hmsv": "E, M/d/y G, h:mm:ss a v",
            "GyMMM, hmsv": "MMM y G, h:mm:ss a v",
            "GyMMMd, hmsv": "MMM d, y G, h:mm:ss a v",
            "GyMMMEd, hmsv": "E, MMM d, y G, h:mm:ss a v",
            "M, hmsv": "L, h:mm:ss a v",
            "Md, hmsv": "M/d, h:mm:ss a v",
            "MEd, hmsv": "E, M/d, h:mm:ss a v",
            "MMM, hmsv": "LLL, h:mm:ss a v",
            "MMMd, hmsv": "MMM d, h:mm:ss a v",
            "MMMEd, hmsv": "E, MMM d, h:mm:ss a v",
            "MMMMd, hmsv": "MMMM d, h:mm:ss a v",
            "y, hmsv": "y, h:mm:ss a v",
            "yM, hmsv": "M/y, h:mm:ss a v",
            "yMd, hmsv": "M/d/y, h:mm:ss a v",
            "yMEd, hmsv": "E, M/d/y, h:mm:ss a v",
            "yMMM, hmsv": "MMM y, h:mm:ss a v",
            "yMMMd, hmsv": "MMM d, y, h:mm:ss a v",
            "yMMMEd, hmsv": "E, MMM d, y, h:mm:ss a v",
            "yMMMM, hmsv": "MMMM y, h:mm:ss a v",
            "EEEE, MMMM d, y, Hmsv": "EEEE, MMMM d, y, HH:mm:ss v",
            "MMMM d, y, Hmsv": "MMMM d, y, HH:mm:ss v",
            "MMM d, y, Hmsv": "MMM d, y, HH:mm:ss v",
            "M/d/yy, Hmsv": "M/d/yy, HH:mm:ss v",
            "d, Hmsv": "d, HH:mm:ss v",
            "E, Hmsv": "ccc, HH:mm:ss v",
            "Ed, Hmsv": "d E, HH:mm:ss v",
            "Gy, Hmsv": "y G, HH:mm:ss v",
            "GyM, Hmsv": "M/y G, HH:mm:ss v",
            "GyMd, Hmsv": "M/d/y G, HH:mm:ss v",
            "GyMEd, Hmsv": "E, M/d/y G, HH:mm:ss v",
            "GyMMM, Hmsv": "MMM y G, HH:mm:ss v",
            "GyMMMd, Hmsv": "MMM d, y G, HH:mm:ss v",
            "GyMMMEd, Hmsv": "E, MMM d, y G, HH:mm:ss v",
            "M, Hmsv": "L, HH:mm:ss v",
            "Md, Hmsv": "M/d, HH:mm:ss v",
            "MEd, Hmsv": "E, M/d, HH:mm:ss v",
            "MMM, Hmsv": "LLL, HH:mm:ss v",
            "MMMd, Hmsv": "MMM d, HH:mm:ss v",
            "MMMEd, Hmsv": "E, MMM d, HH:mm:ss v",
            "MMMMd, Hmsv": "MMMM d, HH:mm:ss v",
            "y, Hmsv": "y, HH:mm:ss v",
            "yM, Hmsv": "M/y, HH:mm:ss v",
            "yMd, Hmsv": "M/d/y, HH:mm:ss v",
            "yMEd, Hmsv": "E, M/d/y, HH:mm:ss v",
            "yMMM, Hmsv": "MMM y, HH:mm:ss v",
            "yMMMd, Hmsv": "MMM d, y, HH:mm:ss v",
            "yMMMEd, Hmsv": "E, MMM d, y, HH:mm:ss v",
            "yMMMM, Hmsv": "MMMM y, HH:mm:ss v",
            "EEEE, MMMM d, y, hmv": "EEEE, MMMM d, y, h:mm a v",
            "MMMM d, y, hmv": "MMMM d, y, h:mm a v",
            "MMM d, y, hmv": "MMM d, y, h:mm a v",
            "M/d/yy, hmv": "M/d/yy, h:mm a v",
            "d, hmv": "d, h:mm a v",
            "E, hmv": "ccc, h:mm a v",
            "Ed, hmv": "d E, h:mm a v",
            "Gy, hmv": "y G, h:mm a v",
            "GyM, hmv": "M/y G, h:mm a v",
            "GyMd, hmv": "M/d/y G, h:mm a v",
            "GyMEd, hmv": "E, M/d/y G, h:mm a v",
            "GyMMM, hmv": "MMM y G, h:mm a v",
            "GyMMMd, hmv": "MMM d, y G, h:mm a v",
            "GyMMMEd, hmv": "E, MMM d, y G, h:mm a v",
            "M, hmv": "L, h:mm a v",
            "Md, hmv": "M/d, h:mm a v",
            "MEd, hmv": "E, M/d, h:mm a v",
            "MMM, hmv": "LLL, h:mm a v",
            "MMMd, hmv": "MMM d, h:mm a v",
            "MMMEd, hmv": "E, MMM d, h:mm a v",
            "MMMMd, hmv": "MMMM d, h:mm a v",
            "y, hmv": "y, h:mm a v",
            "yM, hmv": "M/y, h:mm a v",
            "yMd, hmv": "M/d/y, h:mm a v",
            "yMEd, hmv": "E, M/d/y, h:mm a v",
            "yMMM, hmv": "MMM y, h:mm a v",
            "yMMMd, hmv": "MMM d, y, h:mm a v",
            "yMMMEd, hmv": "E, MMM d, y, h:mm a v",
            "yMMMM, hmv": "MMMM y, h:mm a v",
            "EEEE, MMMM d, y, Hmv": "EEEE, MMMM d, y, HH:mm v",
            "MMMM d, y, Hmv": "MMMM d, y, HH:mm v",
            "MMM d, y, Hmv": "MMM d, y, HH:mm v",
            "M/d/yy, Hmv": "M/d/yy, HH:mm v",
            "d, Hmv": "d, HH:mm v",
            "E, Hmv": "ccc, HH:mm v",
            "Ed, Hmv": "d E, HH:mm v",
            "Gy, Hmv": "y G, HH:mm v",
            "GyM, Hmv": "M/y G, HH:mm v",
            "GyMd, Hmv": "M/d/y G, HH:mm v",
            "GyMEd, Hmv": "E, M/d/y G, HH:mm v",
            "GyMMM, Hmv": "MMM y G, HH:mm v",
            "GyMMMd, Hmv": "MMM d, y G, HH:mm v",
            "GyMMMEd, Hmv": "E, MMM d, y G, HH:mm v",
            "M, Hmv": "L, HH:mm v",
            "Md, Hmv": "M/d, HH:mm v",
            "MEd, Hmv": "E, M/d, HH:mm v",
            "MMM, Hmv": "LLL, HH:mm v",
            "MMMd, Hmv": "MMM d, HH:mm v",
            "MMMEd, Hmv": "E, MMM d, HH:mm v",
            "MMMMd, Hmv": "MMMM d, HH:mm v",
            "y, Hmv": "y, HH:mm v",
            "yM, Hmv": "M/y, HH:mm v",
            "yMd, Hmv": "M/d/y, HH:mm v",
            "yMEd, Hmv": "E, M/d/y, HH:mm v",
            "yMMM, Hmv": "MMM y, HH:mm v",
            "yMMMd, Hmv": "MMM d, y, HH:mm v",
            "yMMMEd, Hmv": "E, MMM d, y, HH:mm v",
            "yMMMM, Hmv": "MMMM y, HH:mm v",
            "EEEE, MMMM d, y, hv": "EEEE, MMMM d, y, h a v",
            "MMMM d, y, hv": "MMMM d, y, h a v",
            "MMM d, y, hv": "MMM d, y, h a v",
            "M/d/yy, hv": "M/d/yy, h a v",
            "d, hv": "d, h a v",
            "E, hv": "ccc, h a v",
            "Ed, hv": "d E, h a v",
            "Gy, hv": "y G, h a v",
            "GyM, hv": "M/y G, h a v",
            "GyMd, hv": "M/d/y G, h a v",
            "GyMEd, hv": "E, M/d/y G, h a v",
            "GyMMM, hv": "MMM y G, h a v",
            "GyMMMd, hv": "MMM d, y G, h a v",
            "GyMMMEd, hv": "E, MMM d, y G, h a v",
            "M, hv": "L, h a v",
            "Md, hv": "M/d, h a v",
            "MEd, hv": "E, M/d, h a v",
            "MMM, hv": "LLL, h a v",
            "MMMd, hv": "MMM d, h a v",
            "MMMEd, hv": "E, MMM d, h a v",
            "MMMMd, hv": "MMMM d, h a v",
            "y, hv": "y, h a v",
            "yM, hv": "M/y, h a v",
            "yMd, hv": "M/d/y, h a v",
            "yMEd, hv": "E, M/d/y, h a v",
            "yMMM, hv": "MMM y, h a v",
            "yMMMd, hv": "MMM d, y, h a v",
            "yMMMEd, hv": "E, MMM d, y, h a v",
            "yMMMM, hv": "MMMM y, h a v",
            "EEEE, MMMM d, y, Hv": "EEEE, MMMM d, y, HH'h' v",
            "MMMM d, y, Hv": "MMMM d, y, HH'h' v",
            "MMM d, y, Hv": "MMM d, y, HH'h' v",
            "M/d/yy, Hv": "M/d/yy, HH'h' v",
            "d, Hv": "d, HH'h' v",
            "E, Hv": "ccc, HH'h' v",
            "Ed, Hv": "d E, HH'h' v",
            "Gy, Hv": "y G, HH'h' v",
            "GyM, Hv": "M/y G, HH'h' v",
            "GyMd, Hv": "M/d/y G, HH'h' v",
            "GyMEd, Hv": "E, M/d/y G, HH'h' v",
            "GyMMM, Hv": "MMM y G, HH'h' v",
            "GyMMMd, Hv": "MMM d, y G, HH'h' v",
            "GyMMMEd, Hv": "E, MMM d, y G, HH'h' v",
            "M, Hv": "L, HH'h' v",
            "Md, Hv": "M/d, HH'h' v",
            "MEd, Hv": "E, M/d, HH'h' v",
            "MMM, Hv": "LLL, HH'h' v",
            "MMMd, Hv": "MMM d, HH'h' v",
            "MMMEd, Hv": "E, MMM d, HH'h' v",
            "MMMMd, Hv": "MMMM d, HH'h' v",
            "y, Hv": "y, HH'h' v",
            "yM, Hv": "M/y, HH'h' v",
            "yMd, Hv": "M/d/y, HH'h' v",
            "yMEd, Hv": "E, M/d/y, HH'h' v",
            "yMMM, Hv": "MMM y, HH'h' v",
            "yMMMd, Hv": "MMM d, y, HH'h' v",
            "yMMMEd, Hv": "E, MMM d, y, HH'h' v",
            "yMMMM, Hv": "MMMM y, HH'h' v",
            "EEEE, MMMM d, y, ms": "EEEE, MMMM d, y, mm:ss",
            "MMMM d, y, ms": "MMMM d, y, mm:ss",
            "MMM d, y, ms": "MMM d, y, mm:ss",
            "M/d/yy, ms": "M/d/yy, mm:ss",
            "d, ms": "d, mm:ss",
            "E, ms": "ccc, mm:ss",
            "Ed, ms": "d E, mm:ss",
            "Gy, ms": "y G, mm:ss",
            "GyM, ms": "M/y G, mm:ss",
            "GyMd, ms": "M/d/y G, mm:ss",
            "GyMEd, ms": "E, M/d/y G, mm:ss",
            "GyMMM, ms": "MMM y G, mm:ss",
            "GyMMMd, ms": "MMM d, y G, mm:ss",
            "GyMMMEd, ms": "E, MMM d, y G, mm:ss",
            "M, ms": "L, mm:ss",
            "Md, ms": "M/d, mm:ss",
            "MEd, ms": "E, M/d, mm:ss",
            "MMM, ms": "LLL, mm:ss",
            "MMMd, ms": "MMM d, mm:ss",
            "MMMEd, ms": "E, MMM d, mm:ss",
            "MMMMd, ms": "MMMM d, mm:ss",
            "y, ms": "y, mm:ss",
            "yM, ms": "M/y, mm:ss",
            "yMd, ms": "M/d/y, mm:ss",
            "yMEd, ms": "E, M/d/y, mm:ss",
            "yMMM, ms": "MMM y, mm:ss",
            "yMMMd, ms": "MMM d, y, mm:ss",
            "yMMMEd, ms": "E, MMM d, y, mm:ss",
            "yMMMM, ms": "MMMM y, mm:ss"
          }
        },
        intervalFormats: {
          intervalFormatFallback: "{0} – {1}",
          Bh: {
            B: "h B – h B",
            h: "h – h B"
          },
          Bhm: {
            B: "h:mm B – h:mm B",
            h: "h:mm – h:mm B",
            m: "h:mm – h:mm B"
          },
          d: {
            d: "d – d"
          },
          Gy: {
            G: "y G – y G",
            y: "y – y G"
          },
          GyM: {
            G: "M/y G – M/y G",
            M: "M/y – M/y G",
            y: "M/y – M/y G"
          },
          GyMd: {
            d: "M/d/y – M/d/y G",
            G: "M/d/y G – M/d/y G",
            M: "M/d/y – M/d/y G",
            y: "M/d/y – M/d/y G"
          },
          GyMEd: {
            d: "E, M/d/y – E, M/d/y G",
            G: "E, M/d/y G – E, M/d/y G",
            M: "E, M/d/y – E, M/d/y G",
            y: "E, M/d/y – E, M/d/y G"
          },
          GyMMM: {
            G: "MMM y G – MMM y G",
            M: "MMM – MMM y G",
            y: "MMM y – MMM y G"
          },
          GyMMMd: {
            d: "MMM d – d, y G",
            G: "MMM d, y G – MMM d, y G",
            M: "MMM d – MMM d, y G",
            y: "MMM d, y – MMM d, y G"
          },
          GyMMMEd: {
            d: "E, MMM d – E, MMM d, y G",
            G: "E, MMM d, y G – E, MMM d, y G",
            M: "E, MMM d – E, MMM d, y G",
            y: "E, MMM d, y – E, MMM d, y G"
          },
          h: {
            a: "h a – h a",
            h: "h – h a"
          },
          H: {
            H: "HH – HH"
          },
          hm: {
            a: "h:mm a – h:mm a",
            h: "h:mm – h:mm a",
            m: "h:mm – h:mm a"
          },
          Hm: {
            H: "HH:mm – HH:mm",
            m: "HH:mm – HH:mm"
          },
          hmv: {
            a: "h:mm a – h:mm a v",
            h: "h:mm – h:mm a v",
            m: "h:mm – h:mm a v"
          },
          Hmv: {
            H: "HH:mm – HH:mm v",
            m: "HH:mm – HH:mm v"
          },
          hv: {
            a: "h a – h a v",
            h: "h – h a v"
          },
          Hv: {
            H: "HH – HH v"
          },
          M: {
            M: "M – M"
          },
          Md: {
            d: "M/d – M/d",
            M: "M/d – M/d"
          },
          MEd: {
            d: "E, M/d – E, M/d",
            M: "E, M/d – E, M/d"
          },
          MMM: {
            M: "MMM – MMM"
          },
          MMMd: {
            d: "MMM d – d",
            M: "MMM d – MMM d"
          },
          MMMEd: {
            d: "E, MMM d – E, MMM d",
            M: "E, MMM d – E, MMM d"
          },
          y: {
            y: "y – y"
          },
          yM: {
            M: "M/y – M/y",
            y: "M/y – M/y"
          },
          yMd: {
            d: "M/d/y – M/d/y",
            M: "M/d/y – M/d/y",
            y: "M/d/y – M/d/y"
          },
          yMEd: {
            d: "E, M/d/y – E, M/d/y",
            M: "E, M/d/y – E, M/d/y",
            y: "E, M/d/y – E, M/d/y"
          },
          yMMM: {
            M: "MMM – MMM y",
            y: "MMM y – MMM y"
          },
          yMMMd: {
            d: "MMM d – d, y",
            M: "MMM d – MMM d, y",
            y: "MMM d, y – MMM d, y"
          },
          yMMMEd: {
            d: "E, MMM d – E, MMM d, y",
            M: "E, MMM d – E, MMM d, y",
            y: "E, MMM d, y – E, MMM d, y"
          },
          yMMMM: {
            M: "MMMM – MMMM y",
            y: "MMMM y – MMMM y"
          },
          "EEEE, MMMM d, y, Bh": {
            B: "EEEE, MMMM d, y, h B – h B",
            h: "EEEE, MMMM d, y, h – h B"
          },
          "MMMM d, y, Bh": {
            B: "MMMM d, y, h B – h B",
            h: "MMMM d, y, h – h B"
          },
          "MMM d, y, Bh": {
            B: "MMM d, y, h B – h B",
            h: "MMM d, y, h – h B"
          },
          "M/d/yy, Bh": {
            B: "M/d/yy, h B – h B",
            h: "M/d/yy, h – h B"
          },
          "d, Bh": {
            B: "d, h B – h B",
            h: "d, h – h B"
          },
          "E, Bh": {
            B: "ccc, h B – h B",
            h: "ccc, h – h B"
          },
          "Ed, Bh": {
            B: "d E, h B – h B",
            h: "d E, h – h B"
          },
          "Gy, Bh": {
            B: "y G, h B – h B",
            h: "y G, h – h B"
          },
          "GyM, Bh": {
            B: "M/y G, h B – h B",
            h: "M/y G, h – h B"
          },
          "GyMd, Bh": {
            B: "M/d/y G, h B – h B",
            h: "M/d/y G, h – h B"
          },
          "GyMEd, Bh": {
            B: "E, M/d/y G, h B – h B",
            h: "E, M/d/y G, h – h B"
          },
          "GyMMM, Bh": {
            B: "MMM y G, h B – h B",
            h: "MMM y G, h – h B"
          },
          "GyMMMd, Bh": {
            B: "MMM d, y G, h B – h B",
            h: "MMM d, y G, h – h B"
          },
          "GyMMMEd, Bh": {
            B: "E, MMM d, y G, h B – h B",
            h: "E, MMM d, y G, h – h B"
          },
          "M, Bh": {
            B: "L, h B – h B",
            h: "L, h – h B"
          },
          "Md, Bh": {
            B: "M/d, h B – h B",
            h: "M/d, h – h B"
          },
          "MEd, Bh": {
            B: "E, M/d, h B – h B",
            h: "E, M/d, h – h B"
          },
          "MMM, Bh": {
            B: "LLL, h B – h B",
            h: "LLL, h – h B"
          },
          "MMMd, Bh": {
            B: "MMM d, h B – h B",
            h: "MMM d, h – h B"
          },
          "MMMEd, Bh": {
            B: "E, MMM d, h B – h B",
            h: "E, MMM d, h – h B"
          },
          "MMMMd, Bh": {
            B: "MMMM d, h B – h B",
            h: "MMMM d, h – h B"
          },
          "y, Bh": {
            B: "y, h B – h B",
            h: "y, h – h B"
          },
          "yM, Bh": {
            B: "M/y, h B – h B",
            h: "M/y, h – h B"
          },
          "yMd, Bh": {
            B: "M/d/y, h B – h B",
            h: "M/d/y, h – h B"
          },
          "yMEd, Bh": {
            B: "E, M/d/y, h B – h B",
            h: "E, M/d/y, h – h B"
          },
          "yMMM, Bh": {
            B: "MMM y, h B – h B",
            h: "MMM y, h – h B"
          },
          "yMMMd, Bh": {
            B: "MMM d, y, h B – h B",
            h: "MMM d, y, h – h B"
          },
          "yMMMEd, Bh": {
            B: "E, MMM d, y, h B – h B",
            h: "E, MMM d, y, h – h B"
          },
          "yMMMM, Bh": {
            B: "MMMM y, h B – h B",
            h: "MMMM y, h – h B"
          },
          "EEEE, MMMM d, y, Bhm": {
            B: "EEEE, MMMM d, y, h:mm B – h:mm B",
            h: "EEEE, MMMM d, y, h:mm – h:mm B",
            m: "EEEE, MMMM d, y, h:mm – h:mm B"
          },
          "MMMM d, y, Bhm": {
            B: "MMMM d, y, h:mm B – h:mm B",
            h: "MMMM d, y, h:mm – h:mm B",
            m: "MMMM d, y, h:mm – h:mm B"
          },
          "MMM d, y, Bhm": {
            B: "MMM d, y, h:mm B – h:mm B",
            h: "MMM d, y, h:mm – h:mm B",
            m: "MMM d, y, h:mm – h:mm B"
          },
          "M/d/yy, Bhm": {
            B: "M/d/yy, h:mm B – h:mm B",
            h: "M/d/yy, h:mm – h:mm B",
            m: "M/d/yy, h:mm – h:mm B"
          },
          "d, Bhm": {
            B: "d, h:mm B – h:mm B",
            h: "d, h:mm – h:mm B",
            m: "d, h:mm – h:mm B"
          },
          "E, Bhm": {
            B: "ccc, h:mm B – h:mm B",
            h: "ccc, h:mm – h:mm B",
            m: "ccc, h:mm – h:mm B"
          },
          "Ed, Bhm": {
            B: "d E, h:mm B – h:mm B",
            h: "d E, h:mm – h:mm B",
            m: "d E, h:mm – h:mm B"
          },
          "Gy, Bhm": {
            B: "y G, h:mm B – h:mm B",
            h: "y G, h:mm – h:mm B",
            m: "y G, h:mm – h:mm B"
          },
          "GyM, Bhm": {
            B: "M/y G, h:mm B – h:mm B",
            h: "M/y G, h:mm – h:mm B",
            m: "M/y G, h:mm – h:mm B"
          },
          "GyMd, Bhm": {
            B: "M/d/y G, h:mm B – h:mm B",
            h: "M/d/y G, h:mm – h:mm B",
            m: "M/d/y G, h:mm – h:mm B"
          },
          "GyMEd, Bhm": {
            B: "E, M/d/y G, h:mm B – h:mm B",
            h: "E, M/d/y G, h:mm – h:mm B",
            m: "E, M/d/y G, h:mm – h:mm B"
          },
          "GyMMM, Bhm": {
            B: "MMM y G, h:mm B – h:mm B",
            h: "MMM y G, h:mm – h:mm B",
            m: "MMM y G, h:mm – h:mm B"
          },
          "GyMMMd, Bhm": {
            B: "MMM d, y G, h:mm B – h:mm B",
            h: "MMM d, y G, h:mm – h:mm B",
            m: "MMM d, y G, h:mm – h:mm B"
          },
          "GyMMMEd, Bhm": {
            B: "E, MMM d, y G, h:mm B – h:mm B",
            h: "E, MMM d, y G, h:mm – h:mm B",
            m: "E, MMM d, y G, h:mm – h:mm B"
          },
          "M, Bhm": {
            B: "L, h:mm B – h:mm B",
            h: "L, h:mm – h:mm B",
            m: "L, h:mm – h:mm B"
          },
          "Md, Bhm": {
            B: "M/d, h:mm B – h:mm B",
            h: "M/d, h:mm – h:mm B",
            m: "M/d, h:mm – h:mm B"
          },
          "MEd, Bhm": {
            B: "E, M/d, h:mm B – h:mm B",
            h: "E, M/d, h:mm – h:mm B",
            m: "E, M/d, h:mm – h:mm B"
          },
          "MMM, Bhm": {
            B: "LLL, h:mm B – h:mm B",
            h: "LLL, h:mm – h:mm B",
            m: "LLL, h:mm – h:mm B"
          },
          "MMMd, Bhm": {
            B: "MMM d, h:mm B – h:mm B",
            h: "MMM d, h:mm – h:mm B",
            m: "MMM d, h:mm – h:mm B"
          },
          "MMMEd, Bhm": {
            B: "E, MMM d, h:mm B – h:mm B",
            h: "E, MMM d, h:mm – h:mm B",
            m: "E, MMM d, h:mm – h:mm B"
          },
          "MMMMd, Bhm": {
            B: "MMMM d, h:mm B – h:mm B",
            h: "MMMM d, h:mm – h:mm B",
            m: "MMMM d, h:mm – h:mm B"
          },
          "y, Bhm": {
            B: "y, h:mm B – h:mm B",
            h: "y, h:mm – h:mm B",
            m: "y, h:mm – h:mm B"
          },
          "yM, Bhm": {
            B: "M/y, h:mm B – h:mm B",
            h: "M/y, h:mm – h:mm B",
            m: "M/y, h:mm – h:mm B"
          },
          "yMd, Bhm": {
            B: "M/d/y, h:mm B – h:mm B",
            h: "M/d/y, h:mm – h:mm B",
            m: "M/d/y, h:mm – h:mm B"
          },
          "yMEd, Bhm": {
            B: "E, M/d/y, h:mm B – h:mm B",
            h: "E, M/d/y, h:mm – h:mm B",
            m: "E, M/d/y, h:mm – h:mm B"
          },
          "yMMM, Bhm": {
            B: "MMM y, h:mm B – h:mm B",
            h: "MMM y, h:mm – h:mm B",
            m: "MMM y, h:mm – h:mm B"
          },
          "yMMMd, Bhm": {
            B: "MMM d, y, h:mm B – h:mm B",
            h: "MMM d, y, h:mm – h:mm B",
            m: "MMM d, y, h:mm – h:mm B"
          },
          "yMMMEd, Bhm": {
            B: "E, MMM d, y, h:mm B – h:mm B",
            h: "E, MMM d, y, h:mm – h:mm B",
            m: "E, MMM d, y, h:mm – h:mm B"
          },
          "yMMMM, Bhm": {
            B: "MMMM y, h:mm B – h:mm B",
            h: "MMMM y, h:mm – h:mm B",
            m: "MMMM y, h:mm – h:mm B"
          },
          "EEEE, MMMM d, y, h": {
            a: "EEEE, MMMM d, y, h a – h a",
            h: "EEEE, MMMM d, y, h – h a"
          },
          "MMMM d, y, h": {
            a: "MMMM d, y, h a – h a",
            h: "MMMM d, y, h – h a"
          },
          "MMM d, y, h": {
            a: "MMM d, y, h a – h a",
            h: "MMM d, y, h – h a"
          },
          "M/d/yy, h": {
            a: "M/d/yy, h a – h a",
            h: "M/d/yy, h – h a"
          },
          "d, h": {
            a: "d, h a – h a",
            h: "d, h – h a"
          },
          "E, h": {
            a: "ccc, h a – h a",
            h: "ccc, h – h a"
          },
          "Ed, h": {
            a: "d E, h a – h a",
            h: "d E, h – h a"
          },
          "Gy, h": {
            a: "y G, h a – h a",
            h: "y G, h – h a"
          },
          "GyM, h": {
            a: "M/y G, h a – h a",
            h: "M/y G, h – h a"
          },
          "GyMd, h": {
            a: "M/d/y G, h a – h a",
            h: "M/d/y G, h – h a"
          },
          "GyMEd, h": {
            a: "E, M/d/y G, h a – h a",
            h: "E, M/d/y G, h – h a"
          },
          "GyMMM, h": {
            a: "MMM y G, h a – h a",
            h: "MMM y G, h – h a"
          },
          "GyMMMd, h": {
            a: "MMM d, y G, h a – h a",
            h: "MMM d, y G, h – h a"
          },
          "GyMMMEd, h": {
            a: "E, MMM d, y G, h a – h a",
            h: "E, MMM d, y G, h – h a"
          },
          "M, h": {
            a: "L, h a – h a",
            h: "L, h – h a"
          },
          "Md, h": {
            a: "M/d, h a – h a",
            h: "M/d, h – h a"
          },
          "MEd, h": {
            a: "E, M/d, h a – h a",
            h: "E, M/d, h – h a"
          },
          "MMM, h": {
            a: "LLL, h a – h a",
            h: "LLL, h – h a"
          },
          "MMMd, h": {
            a: "MMM d, h a – h a",
            h: "MMM d, h – h a"
          },
          "MMMEd, h": {
            a: "E, MMM d, h a – h a",
            h: "E, MMM d, h – h a"
          },
          "MMMMd, h": {
            a: "MMMM d, h a – h a",
            h: "MMMM d, h – h a"
          },
          "y, h": {
            a: "y, h a – h a",
            h: "y, h – h a"
          },
          "yM, h": {
            a: "M/y, h a – h a",
            h: "M/y, h – h a"
          },
          "yMd, h": {
            a: "M/d/y, h a – h a",
            h: "M/d/y, h – h a"
          },
          "yMEd, h": {
            a: "E, M/d/y, h a – h a",
            h: "E, M/d/y, h – h a"
          },
          "yMMM, h": {
            a: "MMM y, h a – h a",
            h: "MMM y, h – h a"
          },
          "yMMMd, h": {
            a: "MMM d, y, h a – h a",
            h: "MMM d, y, h – h a"
          },
          "yMMMEd, h": {
            a: "E, MMM d, y, h a – h a",
            h: "E, MMM d, y, h – h a"
          },
          "yMMMM, h": {
            a: "MMMM y, h a – h a",
            h: "MMMM y, h – h a"
          },
          "EEEE, MMMM d, y, H": {
            H: "EEEE, MMMM d, y, HH – HH"
          },
          "MMMM d, y, H": {
            H: "MMMM d, y, HH – HH"
          },
          "MMM d, y, H": {
            H: "MMM d, y, HH – HH"
          },
          "M/d/yy, H": {
            H: "M/d/yy, HH – HH"
          },
          "d, H": {
            H: "d, HH – HH"
          },
          "E, H": {
            H: "ccc, HH – HH"
          },
          "Ed, H": {
            H: "d E, HH – HH"
          },
          "Gy, H": {
            H: "y G, HH – HH"
          },
          "GyM, H": {
            H: "M/y G, HH – HH"
          },
          "GyMd, H": {
            H: "M/d/y G, HH – HH"
          },
          "GyMEd, H": {
            H: "E, M/d/y G, HH – HH"
          },
          "GyMMM, H": {
            H: "MMM y G, HH – HH"
          },
          "GyMMMd, H": {
            H: "MMM d, y G, HH – HH"
          },
          "GyMMMEd, H": {
            H: "E, MMM d, y G, HH – HH"
          },
          "M, H": {
            H: "L, HH – HH"
          },
          "Md, H": {
            H: "M/d, HH – HH"
          },
          "MEd, H": {
            H: "E, M/d, HH – HH"
          },
          "MMM, H": {
            H: "LLL, HH – HH"
          },
          "MMMd, H": {
            H: "MMM d, HH – HH"
          },
          "MMMEd, H": {
            H: "E, MMM d, HH – HH"
          },
          "MMMMd, H": {
            H: "MMMM d, HH – HH"
          },
          "y, H": {
            H: "y, HH – HH"
          },
          "yM, H": {
            H: "M/y, HH – HH"
          },
          "yMd, H": {
            H: "M/d/y, HH – HH"
          },
          "yMEd, H": {
            H: "E, M/d/y, HH – HH"
          },
          "yMMM, H": {
            H: "MMM y, HH – HH"
          },
          "yMMMd, H": {
            H: "MMM d, y, HH – HH"
          },
          "yMMMEd, H": {
            H: "E, MMM d, y, HH – HH"
          },
          "yMMMM, H": {
            H: "MMMM y, HH – HH"
          },
          "EEEE, MMMM d, y, hm": {
            a: "EEEE, MMMM d, y, h:mm a – h:mm a",
            h: "EEEE, MMMM d, y, h:mm – h:mm a",
            m: "EEEE, MMMM d, y, h:mm – h:mm a"
          },
          "MMMM d, y, hm": {
            a: "MMMM d, y, h:mm a – h:mm a",
            h: "MMMM d, y, h:mm – h:mm a",
            m: "MMMM d, y, h:mm – h:mm a"
          },
          "MMM d, y, hm": {
            a: "MMM d, y, h:mm a – h:mm a",
            h: "MMM d, y, h:mm – h:mm a",
            m: "MMM d, y, h:mm – h:mm a"
          },
          "M/d/yy, hm": {
            a: "M/d/yy, h:mm a – h:mm a",
            h: "M/d/yy, h:mm – h:mm a",
            m: "M/d/yy, h:mm – h:mm a"
          },
          "d, hm": {
            a: "d, h:mm a – h:mm a",
            h: "d, h:mm – h:mm a",
            m: "d, h:mm – h:mm a"
          },
          "E, hm": {
            a: "ccc, h:mm a – h:mm a",
            h: "ccc, h:mm – h:mm a",
            m: "ccc, h:mm – h:mm a"
          },
          "Ed, hm": {
            a: "d E, h:mm a – h:mm a",
            h: "d E, h:mm – h:mm a",
            m: "d E, h:mm – h:mm a"
          },
          "Gy, hm": {
            a: "y G, h:mm a – h:mm a",
            h: "y G, h:mm – h:mm a",
            m: "y G, h:mm – h:mm a"
          },
          "GyM, hm": {
            a: "M/y G, h:mm a – h:mm a",
            h: "M/y G, h:mm – h:mm a",
            m: "M/y G, h:mm – h:mm a"
          },
          "GyMd, hm": {
            a: "M/d/y G, h:mm a – h:mm a",
            h: "M/d/y G, h:mm – h:mm a",
            m: "M/d/y G, h:mm – h:mm a"
          },
          "GyMEd, hm": {
            a: "E, M/d/y G, h:mm a – h:mm a",
            h: "E, M/d/y G, h:mm – h:mm a",
            m: "E, M/d/y G, h:mm – h:mm a"
          },
          "GyMMM, hm": {
            a: "MMM y G, h:mm a – h:mm a",
            h: "MMM y G, h:mm – h:mm a",
            m: "MMM y G, h:mm – h:mm a"
          },
          "GyMMMd, hm": {
            a: "MMM d, y G, h:mm a – h:mm a",
            h: "MMM d, y G, h:mm – h:mm a",
            m: "MMM d, y G, h:mm – h:mm a"
          },
          "GyMMMEd, hm": {
            a: "E, MMM d, y G, h:mm a – h:mm a",
            h: "E, MMM d, y G, h:mm – h:mm a",
            m: "E, MMM d, y G, h:mm – h:mm a"
          },
          "M, hm": {
            a: "L, h:mm a – h:mm a",
            h: "L, h:mm – h:mm a",
            m: "L, h:mm – h:mm a"
          },
          "Md, hm": {
            a: "M/d, h:mm a – h:mm a",
            h: "M/d, h:mm – h:mm a",
            m: "M/d, h:mm – h:mm a"
          },
          "MEd, hm": {
            a: "E, M/d, h:mm a – h:mm a",
            h: "E, M/d, h:mm – h:mm a",
            m: "E, M/d, h:mm – h:mm a"
          },
          "MMM, hm": {
            a: "LLL, h:mm a – h:mm a",
            h: "LLL, h:mm – h:mm a",
            m: "LLL, h:mm – h:mm a"
          },
          "MMMd, hm": {
            a: "MMM d, h:mm a – h:mm a",
            h: "MMM d, h:mm – h:mm a",
            m: "MMM d, h:mm – h:mm a"
          },
          "MMMEd, hm": {
            a: "E, MMM d, h:mm a – h:mm a",
            h: "E, MMM d, h:mm – h:mm a",
            m: "E, MMM d, h:mm – h:mm a"
          },
          "MMMMd, hm": {
            a: "MMMM d, h:mm a – h:mm a",
            h: "MMMM d, h:mm – h:mm a",
            m: "MMMM d, h:mm – h:mm a"
          },
          "y, hm": {
            a: "y, h:mm a – h:mm a",
            h: "y, h:mm – h:mm a",
            m: "y, h:mm – h:mm a"
          },
          "yM, hm": {
            a: "M/y, h:mm a – h:mm a",
            h: "M/y, h:mm – h:mm a",
            m: "M/y, h:mm – h:mm a"
          },
          "yMd, hm": {
            a: "M/d/y, h:mm a – h:mm a",
            h: "M/d/y, h:mm – h:mm a",
            m: "M/d/y, h:mm – h:mm a"
          },
          "yMEd, hm": {
            a: "E, M/d/y, h:mm a – h:mm a",
            h: "E, M/d/y, h:mm – h:mm a",
            m: "E, M/d/y, h:mm – h:mm a"
          },
          "yMMM, hm": {
            a: "MMM y, h:mm a – h:mm a",
            h: "MMM y, h:mm – h:mm a",
            m: "MMM y, h:mm – h:mm a"
          },
          "yMMMd, hm": {
            a: "MMM d, y, h:mm a – h:mm a",
            h: "MMM d, y, h:mm – h:mm a",
            m: "MMM d, y, h:mm – h:mm a"
          },
          "yMMMEd, hm": {
            a: "E, MMM d, y, h:mm a – h:mm a",
            h: "E, MMM d, y, h:mm – h:mm a",
            m: "E, MMM d, y, h:mm – h:mm a"
          },
          "yMMMM, hm": {
            a: "MMMM y, h:mm a – h:mm a",
            h: "MMMM y, h:mm – h:mm a",
            m: "MMMM y, h:mm – h:mm a"
          },
          "EEEE, MMMM d, y, Hm": {
            H: "EEEE, MMMM d, y, HH:mm – HH:mm",
            m: "EEEE, MMMM d, y, HH:mm – HH:mm"
          },
          "MMMM d, y, Hm": {
            H: "MMMM d, y, HH:mm – HH:mm",
            m: "MMMM d, y, HH:mm – HH:mm"
          },
          "MMM d, y, Hm": {
            H: "MMM d, y, HH:mm – HH:mm",
            m: "MMM d, y, HH:mm – HH:mm"
          },
          "M/d/yy, Hm": {
            H: "M/d/yy, HH:mm – HH:mm",
            m: "M/d/yy, HH:mm – HH:mm"
          },
          "d, Hm": {
            H: "d, HH:mm – HH:mm",
            m: "d, HH:mm – HH:mm"
          },
          "E, Hm": {
            H: "ccc, HH:mm – HH:mm",
            m: "ccc, HH:mm – HH:mm"
          },
          "Ed, Hm": {
            H: "d E, HH:mm – HH:mm",
            m: "d E, HH:mm – HH:mm"
          },
          "Gy, Hm": {
            H: "y G, HH:mm – HH:mm",
            m: "y G, HH:mm – HH:mm"
          },
          "GyM, Hm": {
            H: "M/y G, HH:mm – HH:mm",
            m: "M/y G, HH:mm – HH:mm"
          },
          "GyMd, Hm": {
            H: "M/d/y G, HH:mm – HH:mm",
            m: "M/d/y G, HH:mm – HH:mm"
          },
          "GyMEd, Hm": {
            H: "E, M/d/y G, HH:mm – HH:mm",
            m: "E, M/d/y G, HH:mm – HH:mm"
          },
          "GyMMM, Hm": {
            H: "MMM y G, HH:mm – HH:mm",
            m: "MMM y G, HH:mm – HH:mm"
          },
          "GyMMMd, Hm": {
            H: "MMM d, y G, HH:mm – HH:mm",
            m: "MMM d, y G, HH:mm – HH:mm"
          },
          "GyMMMEd, Hm": {
            H: "E, MMM d, y G, HH:mm – HH:mm",
            m: "E, MMM d, y G, HH:mm – HH:mm"
          },
          "M, Hm": {
            H: "L, HH:mm – HH:mm",
            m: "L, HH:mm – HH:mm"
          },
          "Md, Hm": {
            H: "M/d, HH:mm – HH:mm",
            m: "M/d, HH:mm – HH:mm"
          },
          "MEd, Hm": {
            H: "E, M/d, HH:mm – HH:mm",
            m: "E, M/d, HH:mm – HH:mm"
          },
          "MMM, Hm": {
            H: "LLL, HH:mm – HH:mm",
            m: "LLL, HH:mm – HH:mm"
          },
          "MMMd, Hm": {
            H: "MMM d, HH:mm – HH:mm",
            m: "MMM d, HH:mm – HH:mm"
          },
          "MMMEd, Hm": {
            H: "E, MMM d, HH:mm – HH:mm",
            m: "E, MMM d, HH:mm – HH:mm"
          },
          "MMMMd, Hm": {
            H: "MMMM d, HH:mm – HH:mm",
            m: "MMMM d, HH:mm – HH:mm"
          },
          "y, Hm": {
            H: "y, HH:mm – HH:mm",
            m: "y, HH:mm – HH:mm"
          },
          "yM, Hm": {
            H: "M/y, HH:mm – HH:mm",
            m: "M/y, HH:mm – HH:mm"
          },
          "yMd, Hm": {
            H: "M/d/y, HH:mm – HH:mm",
            m: "M/d/y, HH:mm – HH:mm"
          },
          "yMEd, Hm": {
            H: "E, M/d/y, HH:mm – HH:mm",
            m: "E, M/d/y, HH:mm – HH:mm"
          },
          "yMMM, Hm": {
            H: "MMM y, HH:mm – HH:mm",
            m: "MMM y, HH:mm – HH:mm"
          },
          "yMMMd, Hm": {
            H: "MMM d, y, HH:mm – HH:mm",
            m: "MMM d, y, HH:mm – HH:mm"
          },
          "yMMMEd, Hm": {
            H: "E, MMM d, y, HH:mm – HH:mm",
            m: "E, MMM d, y, HH:mm – HH:mm"
          },
          "yMMMM, Hm": {
            H: "MMMM y, HH:mm – HH:mm",
            m: "MMMM y, HH:mm – HH:mm"
          },
          "EEEE, MMMM d, y, hmv": {
            a: "EEEE, MMMM d, y, h:mm a – h:mm a v",
            h: "EEEE, MMMM d, y, h:mm – h:mm a v",
            m: "EEEE, MMMM d, y, h:mm – h:mm a v"
          },
          "MMMM d, y, hmv": {
            a: "MMMM d, y, h:mm a – h:mm a v",
            h: "MMMM d, y, h:mm – h:mm a v",
            m: "MMMM d, y, h:mm – h:mm a v"
          },
          "MMM d, y, hmv": {
            a: "MMM d, y, h:mm a – h:mm a v",
            h: "MMM d, y, h:mm – h:mm a v",
            m: "MMM d, y, h:mm – h:mm a v"
          },
          "M/d/yy, hmv": {
            a: "M/d/yy, h:mm a – h:mm a v",
            h: "M/d/yy, h:mm – h:mm a v",
            m: "M/d/yy, h:mm – h:mm a v"
          },
          "d, hmv": {
            a: "d, h:mm a – h:mm a v",
            h: "d, h:mm – h:mm a v",
            m: "d, h:mm – h:mm a v"
          },
          "E, hmv": {
            a: "ccc, h:mm a – h:mm a v",
            h: "ccc, h:mm – h:mm a v",
            m: "ccc, h:mm – h:mm a v"
          },
          "Ed, hmv": {
            a: "d E, h:mm a – h:mm a v",
            h: "d E, h:mm – h:mm a v",
            m: "d E, h:mm – h:mm a v"
          },
          "Gy, hmv": {
            a: "y G, h:mm a – h:mm a v",
            h: "y G, h:mm – h:mm a v",
            m: "y G, h:mm – h:mm a v"
          },
          "GyM, hmv": {
            a: "M/y G, h:mm a – h:mm a v",
            h: "M/y G, h:mm – h:mm a v",
            m: "M/y G, h:mm – h:mm a v"
          },
          "GyMd, hmv": {
            a: "M/d/y G, h:mm a – h:mm a v",
            h: "M/d/y G, h:mm – h:mm a v",
            m: "M/d/y G, h:mm – h:mm a v"
          },
          "GyMEd, hmv": {
            a: "E, M/d/y G, h:mm a – h:mm a v",
            h: "E, M/d/y G, h:mm – h:mm a v",
            m: "E, M/d/y G, h:mm – h:mm a v"
          },
          "GyMMM, hmv": {
            a: "MMM y G, h:mm a – h:mm a v",
            h: "MMM y G, h:mm – h:mm a v",
            m: "MMM y G, h:mm – h:mm a v"
          },
          "GyMMMd, hmv": {
            a: "MMM d, y G, h:mm a – h:mm a v",
            h: "MMM d, y G, h:mm – h:mm a v",
            m: "MMM d, y G, h:mm – h:mm a v"
          },
          "GyMMMEd, hmv": {
            a: "E, MMM d, y G, h:mm a – h:mm a v",
            h: "E, MMM d, y G, h:mm – h:mm a v",
            m: "E, MMM d, y G, h:mm – h:mm a v"
          },
          "M, hmv": {
            a: "L, h:mm a – h:mm a v",
            h: "L, h:mm – h:mm a v",
            m: "L, h:mm – h:mm a v"
          },
          "Md, hmv": {
            a: "M/d, h:mm a – h:mm a v",
            h: "M/d, h:mm – h:mm a v",
            m: "M/d, h:mm – h:mm a v"
          },
          "MEd, hmv": {
            a: "E, M/d, h:mm a – h:mm a v",
            h: "E, M/d, h:mm – h:mm a v",
            m: "E, M/d, h:mm – h:mm a v"
          },
          "MMM, hmv": {
            a: "LLL, h:mm a – h:mm a v",
            h: "LLL, h:mm – h:mm a v",
            m: "LLL, h:mm – h:mm a v"
          },
          "MMMd, hmv": {
            a: "MMM d, h:mm a – h:mm a v",
            h: "MMM d, h:mm – h:mm a v",
            m: "MMM d, h:mm – h:mm a v"
          },
          "MMMEd, hmv": {
            a: "E, MMM d, h:mm a – h:mm a v",
            h: "E, MMM d, h:mm – h:mm a v",
            m: "E, MMM d, h:mm – h:mm a v"
          },
          "MMMMd, hmv": {
            a: "MMMM d, h:mm a – h:mm a v",
            h: "MMMM d, h:mm – h:mm a v",
            m: "MMMM d, h:mm – h:mm a v"
          },
          "y, hmv": {
            a: "y, h:mm a – h:mm a v",
            h: "y, h:mm – h:mm a v",
            m: "y, h:mm – h:mm a v"
          },
          "yM, hmv": {
            a: "M/y, h:mm a – h:mm a v",
            h: "M/y, h:mm – h:mm a v",
            m: "M/y, h:mm – h:mm a v"
          },
          "yMd, hmv": {
            a: "M/d/y, h:mm a – h:mm a v",
            h: "M/d/y, h:mm – h:mm a v",
            m: "M/d/y, h:mm – h:mm a v"
          },
          "yMEd, hmv": {
            a: "E, M/d/y, h:mm a – h:mm a v",
            h: "E, M/d/y, h:mm – h:mm a v",
            m: "E, M/d/y, h:mm – h:mm a v"
          },
          "yMMM, hmv": {
            a: "MMM y, h:mm a – h:mm a v",
            h: "MMM y, h:mm – h:mm a v",
            m: "MMM y, h:mm – h:mm a v"
          },
          "yMMMd, hmv": {
            a: "MMM d, y, h:mm a – h:mm a v",
            h: "MMM d, y, h:mm – h:mm a v",
            m: "MMM d, y, h:mm – h:mm a v"
          },
          "yMMMEd, hmv": {
            a: "E, MMM d, y, h:mm a – h:mm a v",
            h: "E, MMM d, y, h:mm – h:mm a v",
            m: "E, MMM d, y, h:mm – h:mm a v"
          },
          "yMMMM, hmv": {
            a: "MMMM y, h:mm a – h:mm a v",
            h: "MMMM y, h:mm – h:mm a v",
            m: "MMMM y, h:mm – h:mm a v"
          },
          "EEEE, MMMM d, y, Hmv": {
            H: "EEEE, MMMM d, y, HH:mm – HH:mm v",
            m: "EEEE, MMMM d, y, HH:mm – HH:mm v"
          },
          "MMMM d, y, Hmv": {
            H: "MMMM d, y, HH:mm – HH:mm v",
            m: "MMMM d, y, HH:mm – HH:mm v"
          },
          "MMM d, y, Hmv": {
            H: "MMM d, y, HH:mm – HH:mm v",
            m: "MMM d, y, HH:mm – HH:mm v"
          },
          "M/d/yy, Hmv": {
            H: "M/d/yy, HH:mm – HH:mm v",
            m: "M/d/yy, HH:mm – HH:mm v"
          },
          "d, Hmv": {
            H: "d, HH:mm – HH:mm v",
            m: "d, HH:mm – HH:mm v"
          },
          "E, Hmv": {
            H: "ccc, HH:mm – HH:mm v",
            m: "ccc, HH:mm – HH:mm v"
          },
          "Ed, Hmv": {
            H: "d E, HH:mm – HH:mm v",
            m: "d E, HH:mm – HH:mm v"
          },
          "Gy, Hmv": {
            H: "y G, HH:mm – HH:mm v",
            m: "y G, HH:mm – HH:mm v"
          },
          "GyM, Hmv": {
            H: "M/y G, HH:mm – HH:mm v",
            m: "M/y G, HH:mm – HH:mm v"
          },
          "GyMd, Hmv": {
            H: "M/d/y G, HH:mm – HH:mm v",
            m: "M/d/y G, HH:mm – HH:mm v"
          },
          "GyMEd, Hmv": {
            H: "E, M/d/y G, HH:mm – HH:mm v",
            m: "E, M/d/y G, HH:mm – HH:mm v"
          },
          "GyMMM, Hmv": {
            H: "MMM y G, HH:mm – HH:mm v",
            m: "MMM y G, HH:mm – HH:mm v"
          },
          "GyMMMd, Hmv": {
            H: "MMM d, y G, HH:mm – HH:mm v",
            m: "MMM d, y G, HH:mm – HH:mm v"
          },
          "GyMMMEd, Hmv": {
            H: "E, MMM d, y G, HH:mm – HH:mm v",
            m: "E, MMM d, y G, HH:mm – HH:mm v"
          },
          "M, Hmv": {
            H: "L, HH:mm – HH:mm v",
            m: "L, HH:mm – HH:mm v"
          },
          "Md, Hmv": {
            H: "M/d, HH:mm – HH:mm v",
            m: "M/d, HH:mm – HH:mm v"
          },
          "MEd, Hmv": {
            H: "E, M/d, HH:mm – HH:mm v",
            m: "E, M/d, HH:mm – HH:mm v"
          },
          "MMM, Hmv": {
            H: "LLL, HH:mm – HH:mm v",
            m: "LLL, HH:mm – HH:mm v"
          },
          "MMMd, Hmv": {
            H: "MMM d, HH:mm – HH:mm v",
            m: "MMM d, HH:mm – HH:mm v"
          },
          "MMMEd, Hmv": {
            H: "E, MMM d, HH:mm – HH:mm v",
            m: "E, MMM d, HH:mm – HH:mm v"
          },
          "MMMMd, Hmv": {
            H: "MMMM d, HH:mm – HH:mm v",
            m: "MMMM d, HH:mm – HH:mm v"
          },
          "y, Hmv": {
            H: "y, HH:mm – HH:mm v",
            m: "y, HH:mm – HH:mm v"
          },
          "yM, Hmv": {
            H: "M/y, HH:mm – HH:mm v",
            m: "M/y, HH:mm – HH:mm v"
          },
          "yMd, Hmv": {
            H: "M/d/y, HH:mm – HH:mm v",
            m: "M/d/y, HH:mm – HH:mm v"
          },
          "yMEd, Hmv": {
            H: "E, M/d/y, HH:mm – HH:mm v",
            m: "E, M/d/y, HH:mm – HH:mm v"
          },
          "yMMM, Hmv": {
            H: "MMM y, HH:mm – HH:mm v",
            m: "MMM y, HH:mm – HH:mm v"
          },
          "yMMMd, Hmv": {
            H: "MMM d, y, HH:mm – HH:mm v",
            m: "MMM d, y, HH:mm – HH:mm v"
          },
          "yMMMEd, Hmv": {
            H: "E, MMM d, y, HH:mm – HH:mm v",
            m: "E, MMM d, y, HH:mm – HH:mm v"
          },
          "yMMMM, Hmv": {
            H: "MMMM y, HH:mm – HH:mm v",
            m: "MMMM y, HH:mm – HH:mm v"
          },
          "EEEE, MMMM d, y, hv": {
            a: "EEEE, MMMM d, y, h a – h a v",
            h: "EEEE, MMMM d, y, h – h a v"
          },
          "MMMM d, y, hv": {
            a: "MMMM d, y, h a – h a v",
            h: "MMMM d, y, h – h a v"
          },
          "MMM d, y, hv": {
            a: "MMM d, y, h a – h a v",
            h: "MMM d, y, h – h a v"
          },
          "M/d/yy, hv": {
            a: "M/d/yy, h a – h a v",
            h: "M/d/yy, h – h a v"
          },
          "d, hv": {
            a: "d, h a – h a v",
            h: "d, h – h a v"
          },
          "E, hv": {
            a: "ccc, h a – h a v",
            h: "ccc, h – h a v"
          },
          "Ed, hv": {
            a: "d E, h a – h a v",
            h: "d E, h – h a v"
          },
          "Gy, hv": {
            a: "y G, h a – h a v",
            h: "y G, h – h a v"
          },
          "GyM, hv": {
            a: "M/y G, h a – h a v",
            h: "M/y G, h – h a v"
          },
          "GyMd, hv": {
            a: "M/d/y G, h a – h a v",
            h: "M/d/y G, h – h a v"
          },
          "GyMEd, hv": {
            a: "E, M/d/y G, h a – h a v",
            h: "E, M/d/y G, h – h a v"
          },
          "GyMMM, hv": {
            a: "MMM y G, h a – h a v",
            h: "MMM y G, h – h a v"
          },
          "GyMMMd, hv": {
            a: "MMM d, y G, h a – h a v",
            h: "MMM d, y G, h – h a v"
          },
          "GyMMMEd, hv": {
            a: "E, MMM d, y G, h a – h a v",
            h: "E, MMM d, y G, h – h a v"
          },
          "M, hv": {
            a: "L, h a – h a v",
            h: "L, h – h a v"
          },
          "Md, hv": {
            a: "M/d, h a – h a v",
            h: "M/d, h – h a v"
          },
          "MEd, hv": {
            a: "E, M/d, h a – h a v",
            h: "E, M/d, h – h a v"
          },
          "MMM, hv": {
            a: "LLL, h a – h a v",
            h: "LLL, h – h a v"
          },
          "MMMd, hv": {
            a: "MMM d, h a – h a v",
            h: "MMM d, h – h a v"
          },
          "MMMEd, hv": {
            a: "E, MMM d, h a – h a v",
            h: "E, MMM d, h – h a v"
          },
          "MMMMd, hv": {
            a: "MMMM d, h a – h a v",
            h: "MMMM d, h – h a v"
          },
          "y, hv": {
            a: "y, h a – h a v",
            h: "y, h – h a v"
          },
          "yM, hv": {
            a: "M/y, h a – h a v",
            h: "M/y, h – h a v"
          },
          "yMd, hv": {
            a: "M/d/y, h a – h a v",
            h: "M/d/y, h – h a v"
          },
          "yMEd, hv": {
            a: "E, M/d/y, h a – h a v",
            h: "E, M/d/y, h – h a v"
          },
          "yMMM, hv": {
            a: "MMM y, h a – h a v",
            h: "MMM y, h – h a v"
          },
          "yMMMd, hv": {
            a: "MMM d, y, h a – h a v",
            h: "MMM d, y, h – h a v"
          },
          "yMMMEd, hv": {
            a: "E, MMM d, y, h a – h a v",
            h: "E, MMM d, y, h – h a v"
          },
          "yMMMM, hv": {
            a: "MMMM y, h a – h a v",
            h: "MMMM y, h – h a v"
          },
          "EEEE, MMMM d, y, Hv": {
            H: "EEEE, MMMM d, y, HH – HH v"
          },
          "MMMM d, y, Hv": {
            H: "MMMM d, y, HH – HH v"
          },
          "MMM d, y, Hv": {
            H: "MMM d, y, HH – HH v"
          },
          "M/d/yy, Hv": {
            H: "M/d/yy, HH – HH v"
          },
          "d, Hv": {
            H: "d, HH – HH v"
          },
          "E, Hv": {
            H: "ccc, HH – HH v"
          },
          "Ed, Hv": {
            H: "d E, HH – HH v"
          },
          "Gy, Hv": {
            H: "y G, HH – HH v"
          },
          "GyM, Hv": {
            H: "M/y G, HH – HH v"
          },
          "GyMd, Hv": {
            H: "M/d/y G, HH – HH v"
          },
          "GyMEd, Hv": {
            H: "E, M/d/y G, HH – HH v"
          },
          "GyMMM, Hv": {
            H: "MMM y G, HH – HH v"
          },
          "GyMMMd, Hv": {
            H: "MMM d, y G, HH – HH v"
          },
          "GyMMMEd, Hv": {
            H: "E, MMM d, y G, HH – HH v"
          },
          "M, Hv": {
            H: "L, HH – HH v"
          },
          "Md, Hv": {
            H: "M/d, HH – HH v"
          },
          "MEd, Hv": {
            H: "E, M/d, HH – HH v"
          },
          "MMM, Hv": {
            H: "LLL, HH – HH v"
          },
          "MMMd, Hv": {
            H: "MMM d, HH – HH v"
          },
          "MMMEd, Hv": {
            H: "E, MMM d, HH – HH v"
          },
          "MMMMd, Hv": {
            H: "MMMM d, HH – HH v"
          },
          "y, Hv": {
            H: "y, HH – HH v"
          },
          "yM, Hv": {
            H: "M/y, HH – HH v"
          },
          "yMd, Hv": {
            H: "M/d/y, HH – HH v"
          },
          "yMEd, Hv": {
            H: "E, M/d/y, HH – HH v"
          },
          "yMMM, Hv": {
            H: "MMM y, HH – HH v"
          },
          "yMMMd, Hv": {
            H: "MMM d, y, HH – HH v"
          },
          "yMMMEd, Hv": {
            H: "E, MMM d, y, HH – HH v"
          },
          "yMMMM, Hv": {
            H: "MMMM y, HH – HH v"
          }
        },
        hourCycle: "h12",
        nu: ["latn"],
        ca: ["gregory"],
        hc: ["h12", "", "h23", ""]
      },
      locale: "en"
    }), Intl.DateTimeFormat && "function" == typeof Intl.DateTimeFormat.__addLocaleData && Intl.DateTimeFormat.__addLocaleData({
      data: {
        am: "上午",
        pm: "下午",
        weekday: {
          narrow: ["日", "一", "二", "三", "四", "五", "六"],
          short: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
          long: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
        },
        era: {
          narrow: {
            BC: "公元前",
            AD: "公元"
          },
          short: {
            BC: "公元前",
            AD: "公元"
          },
          long: {
            BC: "公元前",
            AD: "公元"
          }
        },
        month: {
          narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
          short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
          long: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
        },
        timeZoneName: {
          "Africa/Abidjan": {
            long: ["格林尼治标准时间", "格林尼治标准时间"]
          },
          "Africa/Accra": {
            long: ["格林尼治标准时间", "格林尼治标准时间"]
          },
          "Africa/Addis_Ababa": {
            long: ["东部非洲时间", "东部非洲时间"]
          },
          "Africa/Algiers": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Africa/Asmera": {
            long: ["东部非洲时间", "东部非洲时间"]
          },
          "Africa/Bamako": {
            long: ["格林尼治标准时间", "格林尼治标准时间"]
          },
          "Africa/Bangui": {
            long: ["西部非洲时间", "西部非洲时间"]
          },
          "Africa/Banjul": {
            long: ["格林尼治标准时间", "格林尼治标准时间"]
          },
          "Africa/Bissau": {
            long: ["格林尼治标准时间", "格林尼治标准时间"]
          },
          "Africa/Blantyre": {
            long: ["中部非洲时间", "中部非洲时间"]
          },
          "Africa/Brazzaville": {
            long: ["西部非洲时间", "西部非洲时间"]
          },
          "Africa/Bujumbura": {
            long: ["中部非洲时间", "中部非洲时间"]
          },
          "Africa/Cairo": {
            long: ["东欧标准时间", "东欧夏令时间"]
          },
          "Africa/Casablanca": {
            long: ["西欧标准时间", "西欧夏令时间"]
          },
          "Africa/Ceuta": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Africa/Conakry": {
            long: ["格林尼治标准时间", "格林尼治标准时间"]
          },
          "Africa/Dakar": {
            long: ["格林尼治标准时间", "格林尼治标准时间"]
          },
          "Africa/Dar_es_Salaam": {
            long: ["东部非洲时间", "东部非洲时间"]
          },
          "Africa/Djibouti": {
            long: ["东部非洲时间", "东部非洲时间"]
          },
          "Africa/Douala": {
            long: ["西部非洲时间", "西部非洲时间"]
          },
          "Africa/El_Aaiun": {
            long: ["西欧标准时间", "西欧夏令时间"]
          },
          "Africa/Freetown": {
            long: ["格林尼治标准时间", "格林尼治标准时间"]
          },
          "Africa/Gaborone": {
            long: ["中部非洲时间", "中部非洲时间"]
          },
          "Africa/Harare": {
            long: ["中部非洲时间", "中部非洲时间"]
          },
          "Africa/Johannesburg": {
            long: ["南非标准时间", "南非标准时间"]
          },
          "Africa/Juba": {
            long: ["中部非洲时间", "中部非洲时间"]
          },
          "Africa/Kampala": {
            long: ["东部非洲时间", "东部非洲时间"]
          },
          "Africa/Khartoum": {
            long: ["中部非洲时间", "中部非洲时间"]
          },
          "Africa/Kigali": {
            long: ["中部非洲时间", "中部非洲时间"]
          },
          "Africa/Kinshasa": {
            long: ["西部非洲时间", "西部非洲时间"]
          },
          "Africa/Lagos": {
            long: ["西部非洲时间", "西部非洲时间"]
          },
          "Africa/Libreville": {
            long: ["西部非洲时间", "西部非洲时间"]
          },
          "Africa/Lome": {
            long: ["格林尼治标准时间", "格林尼治标准时间"]
          },
          "Africa/Luanda": {
            long: ["西部非洲时间", "西部非洲时间"]
          },
          "Africa/Lubumbashi": {
            long: ["中部非洲时间", "中部非洲时间"]
          },
          "Africa/Lusaka": {
            long: ["中部非洲时间", "中部非洲时间"]
          },
          "Africa/Malabo": {
            long: ["西部非洲时间", "西部非洲时间"]
          },
          "Africa/Maputo": {
            long: ["中部非洲时间", "中部非洲时间"]
          },
          "Africa/Maseru": {
            long: ["南非标准时间", "南非标准时间"]
          },
          "Africa/Mbabane": {
            long: ["南非标准时间", "南非标准时间"]
          },
          "Africa/Mogadishu": {
            long: ["东部非洲时间", "东部非洲时间"]
          },
          "Africa/Monrovia": {
            long: ["格林尼治标准时间", "格林尼治标准时间"]
          },
          "Africa/Nairobi": {
            long: ["东部非洲时间", "东部非洲时间"]
          },
          "Africa/Ndjamena": {
            long: ["西部非洲时间", "西部非洲时间"]
          },
          "Africa/Niamey": {
            long: ["西部非洲时间", "西部非洲时间"]
          },
          "Africa/Nouakchott": {
            long: ["格林尼治标准时间", "格林尼治标准时间"]
          },
          "Africa/Ouagadougou": {
            long: ["格林尼治标准时间", "格林尼治标准时间"]
          },
          "Africa/Porto-Novo": {
            long: ["西部非洲时间", "西部非洲时间"]
          },
          "Africa/Sao_Tome": {
            long: ["格林尼治标准时间", "格林尼治标准时间"]
          },
          "Africa/Tripoli": {
            long: ["东欧标准时间", "东欧夏令时间"]
          },
          "Africa/Tunis": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Africa/Windhoek": {
            long: ["中部非洲时间", "中部非洲时间"]
          },
          "America/Adak": {
            long: ["夏威夷-阿留申标准时间", "夏威夷-阿留申夏令时间"]
          },
          "America/Anchorage": {
            long: ["阿拉斯加标准时间", "阿拉斯加夏令时间"]
          },
          "America/Anguilla": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/Antigua": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/Araguaina": {
            long: ["巴西利亚标准时间", "巴西利亚夏令时间"]
          },
          "America/Aruba": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/Asuncion": {
            long: ["巴拉圭标准时间", "巴拉圭夏令时间"]
          },
          "America/Bahia": {
            long: ["巴西利亚标准时间", "巴西利亚夏令时间"]
          },
          "America/Bahia_Banderas": {
            long: ["北美中部标准时间", "北美中部夏令时间"]
          },
          "America/Barbados": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/Belem": {
            long: ["巴西利亚标准时间", "巴西利亚夏令时间"]
          },
          "America/Belize": {
            long: ["北美中部标准时间", "北美中部夏令时间"]
          },
          "America/Blanc-Sablon": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/Boa_Vista": {
            long: ["亚马逊标准时间", "亚马逊夏令时间"]
          },
          "America/Bogota": {
            long: ["哥伦比亚标准时间", "哥伦比亚夏令时间"]
          },
          "America/Boise": {
            long: ["北美山区标准时间", "北美山区夏令时间"]
          },
          "America/Buenos_Aires": {
            long: ["阿根廷标准时间", "阿根廷夏令时间"]
          },
          "America/Cambridge_Bay": {
            long: ["北美山区标准时间", "北美山区夏令时间"]
          },
          "America/Campo_Grande": {
            long: ["亚马逊标准时间", "亚马逊夏令时间"]
          },
          "America/Cancun": {
            long: ["北美东部标准时间", "北美东部夏令时间"]
          },
          "America/Caracas": {
            long: ["委内瑞拉时间", "委内瑞拉时间"]
          },
          "America/Catamarca": {
            long: ["阿根廷标准时间", "阿根廷夏令时间"]
          },
          "America/Cayenne": {
            long: ["法属圭亚那标准时间", "法属圭亚那标准时间"]
          },
          "America/Cayman": {
            long: ["北美东部标准时间", "北美东部夏令时间"]
          },
          "America/Chicago": {
            long: ["北美中部标准时间", "北美中部夏令时间"]
          },
          "America/Chihuahua": {
            long: ["北美中部标准时间", "北美中部夏令时间"]
          },
          "America/Ciudad_Juarez": {
            long: ["北美山区标准时间", "北美山区夏令时间"]
          },
          "America/Coral_Harbour": {
            long: ["北美东部标准时间", "北美东部夏令时间"]
          },
          "America/Cordoba": {
            long: ["阿根廷标准时间", "阿根廷夏令时间"]
          },
          "America/Costa_Rica": {
            long: ["北美中部标准时间", "北美中部夏令时间"]
          },
          "America/Coyhaique": {
            long: ["智利标准时间", "智利夏令时间"]
          },
          "America/Creston": {
            long: ["北美山区标准时间", "北美山区夏令时间"]
          },
          "America/Cuiaba": {
            long: ["亚马逊标准时间", "亚马逊夏令时间"]
          },
          "America/Curacao": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/Danmarkshavn": {
            long: ["格林尼治标准时间", "格林尼治标准时间"]
          },
          "America/Dawson": {
            long: ["育空时间", "育空时间"]
          },
          "America/Dawson_Creek": {
            long: ["北美山区标准时间", "北美山区夏令时间"]
          },
          "America/Denver": {
            long: ["北美山区标准时间", "北美山区夏令时间"]
          },
          "America/Detroit": {
            long: ["北美东部标准时间", "北美东部夏令时间"]
          },
          "America/Dominica": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/Edmonton": {
            long: ["北美山区标准时间", "北美山区夏令时间"]
          },
          "America/Eirunepe": {
            long: ["阿克里标准时间", "阿克里夏令时间"]
          },
          "America/El_Salvador": {
            long: ["北美中部标准时间", "北美中部夏令时间"]
          },
          "America/Fort_Nelson": {
            long: ["北美山区标准时间", "北美山区夏令时间"]
          },
          "America/Fortaleza": {
            long: ["巴西利亚标准时间", "巴西利亚夏令时间"]
          },
          "America/Glace_Bay": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/Goose_Bay": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/Grand_Turk": {
            long: ["北美东部标准时间", "北美东部夏令时间"]
          },
          "America/Grenada": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/Guadeloupe": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/Guatemala": {
            long: ["北美中部标准时间", "北美中部夏令时间"]
          },
          "America/Guayaquil": {
            long: ["厄瓜多尔标准时间", "厄瓜多尔标准时间"]
          },
          "America/Guyana": {
            long: ["圭亚那时间", "圭亚那时间"]
          },
          "America/Halifax": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/Havana": {
            long: ["古巴标准时间", "古巴夏令时间"]
          },
          "America/Hermosillo": {
            long: ["墨西哥太平洋标准时间", "墨西哥太平洋夏令时间"]
          },
          "America/Indianapolis": {
            long: ["北美东部标准时间", "北美东部夏令时间"]
          },
          "America/Inuvik": {
            long: ["北美山区标准时间", "北美山区夏令时间"]
          },
          "America/Iqaluit": {
            long: ["北美东部标准时间", "北美东部夏令时间"]
          },
          "America/Jamaica": {
            long: ["北美东部标准时间", "北美东部夏令时间"]
          },
          "America/Jujuy": {
            long: ["阿根廷标准时间", "阿根廷夏令时间"]
          },
          "America/Juneau": {
            long: ["阿拉斯加标准时间", "阿拉斯加夏令时间"]
          },
          "America/Kralendijk": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/La_Paz": {
            long: ["玻利维亚标准时间", "玻利维亚标准时间"]
          },
          "America/Lima": {
            long: ["秘鲁标准时间", "秘鲁夏令时间"]
          },
          "America/Los_Angeles": {
            long: ["北美太平洋标准时间", "北美太平洋夏令时间"]
          },
          "America/Louisville": {
            long: ["北美东部标准时间", "北美东部夏令时间"]
          },
          "America/Lower_Princes": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/Maceio": {
            long: ["巴西利亚标准时间", "巴西利亚夏令时间"]
          },
          "America/Managua": {
            long: ["北美中部标准时间", "北美中部夏令时间"]
          },
          "America/Manaus": {
            long: ["亚马逊标准时间", "亚马逊夏令时间"]
          },
          "America/Marigot": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/Martinique": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/Matamoros": {
            long: ["北美中部标准时间", "北美中部夏令时间"]
          },
          "America/Mazatlan": {
            long: ["墨西哥太平洋标准时间", "墨西哥太平洋夏令时间"]
          },
          "America/Mendoza": {
            long: ["阿根廷标准时间", "阿根廷夏令时间"]
          },
          "America/Menominee": {
            long: ["北美中部标准时间", "北美中部夏令时间"]
          },
          "America/Merida": {
            long: ["北美中部标准时间", "北美中部夏令时间"]
          },
          "America/Metlakatla": {
            long: ["阿拉斯加标准时间", "阿拉斯加夏令时间"]
          },
          "America/Mexico_City": {
            long: ["北美中部标准时间", "北美中部夏令时间"]
          },
          "America/Miquelon": {
            long: ["圣皮埃尔和密克隆群岛标准时间", "圣皮埃尔和密克隆群岛夏令时间"]
          },
          "America/Moncton": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/Monterrey": {
            long: ["北美中部标准时间", "北美中部夏令时间"]
          },
          "America/Montevideo": {
            long: ["乌拉圭标准时间", "乌拉圭夏令时间"]
          },
          "America/Montserrat": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/Nassau": {
            long: ["北美东部标准时间", "北美东部夏令时间"]
          },
          "America/New_York": {
            long: ["北美东部标准时间", "北美东部夏令时间"]
          },
          "America/Nome": {
            long: ["阿拉斯加标准时间", "阿拉斯加夏令时间"]
          },
          "America/Noronha": {
            long: ["费尔南多-迪诺罗尼亚岛标准时间", "费尔南多-迪诺罗尼亚岛夏令时间"]
          },
          "America/Ojinaga": {
            long: ["北美中部标准时间", "北美中部夏令时间"]
          },
          "America/Panama": {
            long: ["北美东部标准时间", "北美东部夏令时间"]
          },
          "America/Paramaribo": {
            long: ["苏里南时间", "苏里南时间"]
          },
          "America/Phoenix": {
            long: ["北美山区标准时间", "北美山区夏令时间"]
          },
          "America/Port_of_Spain": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/Port-au-Prince": {
            long: ["北美东部标准时间", "北美东部夏令时间"]
          },
          "America/Porto_Velho": {
            long: ["亚马逊标准时间", "亚马逊夏令时间"]
          },
          "America/Puerto_Rico": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/Punta_Arenas": {
            long: ["智利标准时间", "智利夏令时间"]
          },
          "America/Rankin_Inlet": {
            long: ["北美中部标准时间", "北美中部夏令时间"]
          },
          "America/Recife": {
            long: ["巴西利亚标准时间", "巴西利亚夏令时间"]
          },
          "America/Regina": {
            long: ["北美中部标准时间", "北美中部夏令时间"]
          },
          "America/Resolute": {
            long: ["北美中部标准时间", "北美中部夏令时间"]
          },
          "America/Rio_Branco": {
            long: ["阿克里标准时间", "阿克里夏令时间"]
          },
          "America/Santarem": {
            long: ["巴西利亚标准时间", "巴西利亚夏令时间"]
          },
          "America/Santiago": {
            long: ["智利标准时间", "智利夏令时间"]
          },
          "America/Santo_Domingo": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/Sao_Paulo": {
            long: ["巴西利亚标准时间", "巴西利亚夏令时间"]
          },
          "America/Sitka": {
            long: ["阿拉斯加标准时间", "阿拉斯加夏令时间"]
          },
          "America/St_Barthelemy": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/St_Johns": {
            long: ["纽芬兰标准时间", "纽芬兰夏令时间"]
          },
          "America/St_Kitts": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/St_Lucia": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/St_Thomas": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/St_Vincent": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/Swift_Current": {
            long: ["北美中部标准时间", "北美中部夏令时间"]
          },
          "America/Tegucigalpa": {
            long: ["北美中部标准时间", "北美中部夏令时间"]
          },
          "America/Thule": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/Tijuana": {
            long: ["北美太平洋标准时间", "北美太平洋夏令时间"]
          },
          "America/Toronto": {
            long: ["北美东部标准时间", "北美东部夏令时间"]
          },
          "America/Tortola": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "America/Vancouver": {
            long: ["北美太平洋标准时间", "北美太平洋夏令时间"]
          },
          "America/Whitehorse": {
            long: ["育空时间", "育空时间"]
          },
          "America/Winnipeg": {
            long: ["北美中部标准时间", "北美中部夏令时间"]
          },
          "America/Yakutat": {
            long: ["阿拉斯加标准时间", "阿拉斯加夏令时间"]
          },
          "Antarctica/Casey": {
            long: ["澳大利亚西部标准时间", "澳大利亚西部夏令时间"]
          },
          "Antarctica/Davis": {
            long: ["戴维斯时间", "戴维斯时间"]
          },
          "Antarctica/DumontDUrville": {
            long: ["迪蒙·迪维尔时间", "迪蒙·迪维尔时间"]
          },
          "Antarctica/Macquarie": {
            long: ["澳大利亚东部标准时间", "澳大利亚东部夏令时间"]
          },
          "Antarctica/Mawson": {
            long: ["莫森时间", "莫森时间"]
          },
          "Antarctica/McMurdo": {
            long: ["新西兰标准时间", "新西兰夏令时间"]
          },
          "Antarctica/Palmer": {
            long: ["智利标准时间", "智利夏令时间"]
          },
          "Antarctica/Rothera": {
            long: ["罗瑟拉时间", "罗瑟拉时间"]
          },
          "Antarctica/Syowa": {
            long: ["昭和时间", "昭和时间"]
          },
          "Antarctica/Troll": {
            long: ["格林尼治标准时间", "格林尼治标准时间"]
          },
          "Antarctica/Vostok": {
            long: ["沃斯托克时间", "沃斯托克时间"]
          },
          "Arctic/Longyearbyen": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Asia/Aden": {
            long: ["阿拉伯标准时间", "阿拉伯夏令时间"]
          },
          "Asia/Almaty": {
            long: ["哈萨克斯坦时间", "哈萨克斯坦时间"]
          },
          "Asia/Amman": {
            long: ["东欧标准时间", "东欧夏令时间"]
          },
          "Asia/Anadyr": {
            long: ["彼得罗巴甫洛夫斯克-堪察加标准时间", "彼得罗巴甫洛夫斯克-堪察加夏令时间"]
          },
          "Asia/Aqtau": {
            long: ["哈萨克斯坦时间", "哈萨克斯坦时间"]
          },
          "Asia/Aqtobe": {
            long: ["哈萨克斯坦时间", "哈萨克斯坦时间"]
          },
          "Asia/Ashgabat": {
            long: ["土库曼斯坦标准时间", "土库曼斯坦夏令时间"]
          },
          "Asia/Atyrau": {
            long: ["哈萨克斯坦时间", "哈萨克斯坦时间"]
          },
          "Asia/Baghdad": {
            long: ["阿拉伯标准时间", "阿拉伯夏令时间"]
          },
          "Asia/Bahrain": {
            long: ["阿拉伯标准时间", "阿拉伯夏令时间"]
          },
          "Asia/Baku": {
            long: ["阿塞拜疆标准时间", "阿塞拜疆夏令时间"]
          },
          "Asia/Bangkok": {
            long: ["中南半岛时间", "中南半岛时间"]
          },
          "Asia/Barnaul": {
            long: ["克拉斯诺亚尔斯克标准时间", "克拉斯诺亚尔斯克夏令时间"]
          },
          "Asia/Beirut": {
            long: ["东欧标准时间", "东欧夏令时间"]
          },
          "Asia/Bishkek": {
            long: ["吉尔吉斯斯坦时间", "吉尔吉斯斯坦时间"]
          },
          "Asia/Brunei": {
            long: ["文莱达鲁萨兰时间", "文莱达鲁萨兰时间"]
          },
          "Asia/Calcutta": {
            long: ["印度时间", "印度时间"]
          },
          "Asia/Chita": {
            long: ["雅库茨克标准时间", "雅库茨克夏令时间"]
          },
          "Asia/Colombo": {
            long: ["印度时间", "印度时间"]
          },
          "Asia/Damascus": {
            long: ["东欧标准时间", "东欧夏令时间"]
          },
          "Asia/Dhaka": {
            long: ["孟加拉标准时间", "孟加拉夏令时间"]
          },
          "Asia/Dili": {
            long: ["东帝汶时间", "东帝汶时间"]
          },
          "Asia/Dubai": {
            long: ["海湾标准时间", "海湾标准时间"]
          },
          "Asia/Dushanbe": {
            long: ["塔吉克斯坦时间", "塔吉克斯坦时间"]
          },
          "Asia/Famagusta": {
            long: ["东欧标准时间", "东欧夏令时间"]
          },
          "Asia/Gaza": {
            long: ["东欧标准时间", "东欧夏令时间"]
          },
          "Asia/Hebron": {
            long: ["东欧标准时间", "东欧夏令时间"]
          },
          "Asia/Hong_Kong": {
            long: ["香港标准时间", "香港夏令时间"]
          },
          "Asia/Hovd": {
            long: ["科布多标准时间", "科布多夏令时间"]
          },
          "Asia/Irkutsk": {
            long: ["伊尔库茨克标准时间", "伊尔库茨克夏令时间"]
          },
          "Asia/Jakarta": {
            long: ["印度尼西亚西部时间", "印度尼西亚西部时间"]
          },
          "Asia/Jayapura": {
            long: ["印度尼西亚东部时间", "印度尼西亚东部时间"]
          },
          "Asia/Jerusalem": {
            long: ["以色列标准时间", "以色列夏令时间"]
          },
          "Asia/Kabul": {
            long: ["阿富汗时间", "阿富汗时间"]
          },
          "Asia/Kamchatka": {
            long: ["彼得罗巴甫洛夫斯克-堪察加标准时间", "彼得罗巴甫洛夫斯克-堪察加夏令时间"]
          },
          "Asia/Karachi": {
            long: ["巴基斯坦标准时间", "巴基斯坦夏令时间"]
          },
          "Asia/Katmandu": {
            long: ["尼泊尔时间", "尼泊尔时间"]
          },
          "Asia/Khandyga": {
            long: ["雅库茨克标准时间", "雅库茨克夏令时间"]
          },
          "Asia/Krasnoyarsk": {
            long: ["克拉斯诺亚尔斯克标准时间", "克拉斯诺亚尔斯克夏令时间"]
          },
          "Asia/Kuala_Lumpur": {
            long: ["马来西亚时间", "马来西亚时间"]
          },
          "Asia/Kuching": {
            long: ["马来西亚时间", "马来西亚时间"]
          },
          "Asia/Kuwait": {
            long: ["阿拉伯标准时间", "阿拉伯夏令时间"]
          },
          "Asia/Macau": {
            long: ["中国标准时间", "中国夏令时间"]
          },
          "Asia/Magadan": {
            long: ["马加丹标准时间", "马加丹夏令时间"]
          },
          "Asia/Makassar": {
            long: ["印度尼西亚中部时间", "印度尼西亚中部时间"]
          },
          "Asia/Manila": {
            long: ["菲律宾标准时间", "菲律宾夏令时间"]
          },
          "Asia/Muscat": {
            long: ["海湾标准时间", "海湾标准时间"]
          },
          "Asia/Nicosia": {
            long: ["东欧标准时间", "东欧夏令时间"]
          },
          "Asia/Novokuznetsk": {
            long: ["克拉斯诺亚尔斯克标准时间", "克拉斯诺亚尔斯克夏令时间"]
          },
          "Asia/Novosibirsk": {
            long: ["克拉斯诺亚尔斯克标准时间", "克拉斯诺亚尔斯克夏令时间"]
          },
          "Asia/Omsk": {
            long: ["鄂木斯克标准时间", "鄂木斯克夏令时间"]
          },
          "Asia/Oral": {
            long: ["哈萨克斯坦时间", "哈萨克斯坦时间"]
          },
          "Asia/Phnom_Penh": {
            long: ["中南半岛时间", "中南半岛时间"]
          },
          "Asia/Pontianak": {
            long: ["印度尼西亚西部时间", "印度尼西亚西部时间"]
          },
          "Asia/Pyongyang": {
            long: ["韩国标准时间", "韩国夏令时间"]
          },
          "Asia/Qatar": {
            long: ["阿拉伯标准时间", "阿拉伯夏令时间"]
          },
          "Asia/Qostanay": {
            long: ["哈萨克斯坦时间", "哈萨克斯坦时间"]
          },
          "Asia/Qyzylorda": {
            long: ["哈萨克斯坦时间", "哈萨克斯坦时间"]
          },
          "Asia/Rangoon": {
            long: ["缅甸时间", "缅甸时间"]
          },
          "Asia/Riyadh": {
            long: ["阿拉伯标准时间", "阿拉伯夏令时间"]
          },
          "Asia/Saigon": {
            long: ["中南半岛时间", "中南半岛时间"]
          },
          "Asia/Sakhalin": {
            long: ["马加丹标准时间", "马加丹夏令时间"]
          },
          "Asia/Samarkand": {
            long: ["乌兹别克斯坦标准时间", "乌兹别克斯坦夏令时间"]
          },
          "Asia/Seoul": {
            long: ["韩国标准时间", "韩国夏令时间"]
          },
          "Asia/Shanghai": {
            long: ["中国标准时间", "中国夏令时间"]
          },
          "Asia/Singapore": {
            long: ["新加坡标准时间", "新加坡标准时间"]
          },
          "Asia/Srednekolymsk": {
            long: ["马加丹标准时间", "马加丹夏令时间"]
          },
          "Asia/Taipei": {
            long: ["台北标准时间", "台北夏令时间"]
          },
          "Asia/Tashkent": {
            long: ["乌兹别克斯坦标准时间", "乌兹别克斯坦夏令时间"]
          },
          "Asia/Tbilisi": {
            long: ["格鲁吉亚标准时间", "格鲁吉亚夏令时间"]
          },
          "Asia/Tehran": {
            long: ["伊朗标准时间", "伊朗夏令时间"]
          },
          "Asia/Thimphu": {
            long: ["不丹时间", "不丹时间"]
          },
          "Asia/Tokyo": {
            long: ["日本标准时间", "日本夏令时间"]
          },
          "Asia/Tomsk": {
            long: ["克拉斯诺亚尔斯克标准时间", "克拉斯诺亚尔斯克夏令时间"]
          },
          "Asia/Ulaanbaatar": {
            long: ["乌兰巴托标准时间", "乌兰巴托夏令时间"]
          },
          "Asia/Ust-Nera": {
            long: ["海参崴标准时间", "海参崴夏令时间"]
          },
          "Asia/Vientiane": {
            long: ["中南半岛时间", "中南半岛时间"]
          },
          "Asia/Vladivostok": {
            long: ["海参崴标准时间", "海参崴夏令时间"]
          },
          "Asia/Yakutsk": {
            long: ["雅库茨克标准时间", "雅库茨克夏令时间"]
          },
          "Asia/Yekaterinburg": {
            long: ["叶卡捷琳堡标准时间", "叶卡捷琳堡夏令时间"]
          },
          "Asia/Yerevan": {
            long: ["亚美尼亚标准时间", "亚美尼亚夏令时间"]
          },
          "Atlantic/Azores": {
            long: ["亚速尔群岛标准时间", "亚速尔群岛夏令时间"]
          },
          "Atlantic/Bermuda": {
            long: ["大西洋标准时间", "大西洋夏令时间"]
          },
          "Atlantic/Canary": {
            long: ["西欧标准时间", "西欧夏令时间"]
          },
          "Atlantic/Cape_Verde": {
            long: ["佛得角标准时间", "佛得角夏令时间"]
          },
          "Atlantic/Faeroe": {
            long: ["西欧标准时间", "西欧夏令时间"]
          },
          "Atlantic/Madeira": {
            long: ["西欧标准时间", "西欧夏令时间"]
          },
          "Atlantic/Reykjavik": {
            long: ["格林尼治标准时间", "格林尼治标准时间"]
          },
          "Atlantic/South_Georgia": {
            long: ["南乔治亚岛时间", "南乔治亚岛时间"]
          },
          "Atlantic/St_Helena": {
            long: ["格林尼治标准时间", "格林尼治标准时间"]
          },
          "Atlantic/Stanley": {
            long: ["福克兰群岛标准时间", "福克兰群岛夏令时间"]
          },
          "Australia/Adelaide": {
            long: ["澳大利亚中部标准时间", "澳大利亚中部夏令时间"]
          },
          "Australia/Brisbane": {
            long: ["澳大利亚东部标准时间", "澳大利亚东部夏令时间"]
          },
          "Australia/Broken_Hill": {
            long: ["澳大利亚中部标准时间", "澳大利亚中部夏令时间"]
          },
          "Australia/Darwin": {
            long: ["澳大利亚中部标准时间", "澳大利亚中部夏令时间"]
          },
          "Australia/Eucla": {
            long: ["澳大利亚中西部标准时间", "澳大利亚中西部夏令时间"]
          },
          "Australia/Hobart": {
            long: ["澳大利亚东部标准时间", "澳大利亚东部夏令时间"]
          },
          "Australia/Lindeman": {
            long: ["澳大利亚东部标准时间", "澳大利亚东部夏令时间"]
          },
          "Australia/Lord_Howe": {
            long: ["豪勋爵岛标准时间", "豪勋爵岛夏令时间"]
          },
          "Australia/Melbourne": {
            long: ["澳大利亚东部标准时间", "澳大利亚东部夏令时间"]
          },
          "Australia/Perth": {
            long: ["澳大利亚西部标准时间", "澳大利亚西部夏令时间"]
          },
          "Australia/Sydney": {
            long: ["澳大利亚东部标准时间", "澳大利亚东部夏令时间"]
          },
          "Etc/GMT": {
            long: ["格林尼治标准时间", "格林尼治标准时间"]
          },
          "Europe/Amsterdam": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Andorra": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Astrakhan": {
            long: ["萨马拉标准时间", "萨马拉夏令时间"]
          },
          "Europe/Athens": {
            long: ["东欧标准时间", "东欧夏令时间"]
          },
          "Europe/Belgrade": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Berlin": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Bratislava": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Brussels": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Bucharest": {
            long: ["东欧标准时间", "东欧夏令时间"]
          },
          "Europe/Budapest": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Busingen": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Chisinau": {
            long: ["东欧标准时间", "东欧夏令时间"]
          },
          "Europe/Copenhagen": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Dublin": {
            long: ["格林尼治标准时间", "格林尼治标准时间"]
          },
          "Europe/Gibraltar": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Guernsey": {
            long: ["格林尼治标准时间", "格林尼治标准时间"]
          },
          "Europe/Helsinki": {
            long: ["东欧标准时间", "东欧夏令时间"]
          },
          "Europe/Isle_of_Man": {
            long: ["格林尼治标准时间", "格林尼治标准时间"]
          },
          "Europe/Istanbul": {
            long: ["土耳其标准时间", "土耳其夏令时间"]
          },
          "Europe/Jersey": {
            long: ["格林尼治标准时间", "格林尼治标准时间"]
          },
          "Europe/Kaliningrad": {
            long: ["东欧标准时间", "东欧夏令时间"]
          },
          "Europe/Kiev": {
            long: ["东欧标准时间", "东欧夏令时间"]
          },
          "Europe/Kirov": {
            long: ["莫斯科标准时间", "莫斯科夏令时间"]
          },
          "Europe/Lisbon": {
            long: ["西欧标准时间", "西欧夏令时间"]
          },
          "Europe/Ljubljana": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/London": {
            long: ["格林尼治标准时间", "格林尼治标准时间"]
          },
          "Europe/Luxembourg": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Madrid": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Malta": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Mariehamn": {
            long: ["东欧标准时间", "东欧夏令时间"]
          },
          "Europe/Minsk": {
            long: ["莫斯科标准时间", "莫斯科夏令时间"]
          },
          "Europe/Monaco": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Moscow": {
            long: ["莫斯科标准时间", "莫斯科夏令时间"]
          },
          "Europe/Oslo": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Paris": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Podgorica": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Prague": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Riga": {
            long: ["东欧标准时间", "东欧夏令时间"]
          },
          "Europe/Rome": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Samara": {
            long: ["萨马拉标准时间", "萨马拉夏令时间"]
          },
          "Europe/San_Marino": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Sarajevo": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Saratov": {
            long: ["萨马拉标准时间", "萨马拉夏令时间"]
          },
          "Europe/Simferopol": {
            long: ["莫斯科标准时间", "莫斯科夏令时间"]
          },
          "Europe/Skopje": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Sofia": {
            long: ["东欧标准时间", "东欧夏令时间"]
          },
          "Europe/Stockholm": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Tallinn": {
            long: ["东欧标准时间", "东欧夏令时间"]
          },
          "Europe/Tirane": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Ulyanovsk": {
            long: ["萨马拉标准时间", "萨马拉夏令时间"]
          },
          "Europe/Vaduz": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Vatican": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Vienna": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Vilnius": {
            long: ["东欧标准时间", "东欧夏令时间"]
          },
          "Europe/Volgograd": {
            long: ["莫斯科标准时间", "莫斯科夏令时间"]
          },
          "Europe/Warsaw": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Zagreb": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Europe/Zurich": {
            long: ["中欧标准时间", "中欧夏令时间"]
          },
          "Indian/Antananarivo": {
            long: ["东部非洲时间", "东部非洲时间"]
          },
          "Indian/Chagos": {
            long: ["印度洋时间", "印度洋时间"]
          },
          "Indian/Christmas": {
            long: ["圣诞岛时间", "圣诞岛时间"]
          },
          "Indian/Cocos": {
            long: ["科科斯群岛时间", "科科斯群岛时间"]
          },
          "Indian/Comoro": {
            long: ["东部非洲时间", "东部非洲时间"]
          },
          "Indian/Kerguelen": {
            long: ["法属南方和南极领地时间", "法属南方和南极领地时间"]
          },
          "Indian/Mahe": {
            long: ["塞舌尔时间", "塞舌尔时间"]
          },
          "Indian/Maldives": {
            long: ["马尔代夫时间", "马尔代夫时间"]
          },
          "Indian/Mauritius": {
            long: ["毛里求斯标准时间", "毛里求斯夏令时间"]
          },
          "Indian/Mayotte": {
            long: ["东部非洲时间", "东部非洲时间"]
          },
          "Indian/Reunion": {
            long: ["留尼汪时间", "留尼汪时间"]
          },
          "Pacific/Apia": {
            long: ["阿皮亚标准时间", "阿皮亚夏令时间"]
          },
          "Pacific/Auckland": {
            long: ["新西兰标准时间", "新西兰夏令时间"]
          },
          "Pacific/Bougainville": {
            long: ["巴布亚新几内亚时间", "巴布亚新几内亚时间"]
          },
          "Pacific/Chatham": {
            long: ["查塔姆标准时间", "查塔姆夏令时间"]
          },
          "Pacific/Easter": {
            long: ["复活节岛标准时间", "复活节岛夏令时间"]
          },
          "Pacific/Efate": {
            long: ["瓦努阿图标准时间", "瓦努阿图夏令时间"]
          },
          "Pacific/Enderbury": {
            long: ["菲尼克斯群岛时间", "菲尼克斯群岛时间"]
          },
          "Pacific/Fakaofo": {
            long: ["托克劳时间", "托克劳时间"]
          },
          "Pacific/Fiji": {
            long: ["斐济标准时间", "斐济夏令时间"]
          },
          "Pacific/Funafuti": {
            long: ["图瓦卢时间", "图瓦卢时间"]
          },
          "Pacific/Galapagos": {
            long: ["科隆群岛时间", "科隆群岛时间"]
          },
          "Pacific/Gambier": {
            long: ["甘比尔时间", "甘比尔时间"]
          },
          "Pacific/Guadalcanal": {
            long: ["所罗门群岛时间", "所罗门群岛时间"]
          },
          "Pacific/Guam": {
            long: ["查莫罗时间", "查莫罗时间"]
          },
          "Pacific/Honolulu": {
            long: ["夏威夷-阿留申标准时间", "夏威夷-阿留申标准时间"]
          },
          "Pacific/Kiritimati": {
            long: ["莱恩群岛时间", "莱恩群岛时间"]
          },
          "Pacific/Kosrae": {
            long: ["科斯雷时间", "科斯雷时间"]
          },
          "Pacific/Kwajalein": {
            long: ["马绍尔群岛时间", "马绍尔群岛时间"]
          },
          "Pacific/Majuro": {
            long: ["马绍尔群岛时间", "马绍尔群岛时间"]
          },
          "Pacific/Marquesas": {
            long: ["马克萨斯群岛时间", "马克萨斯群岛时间"]
          },
          "Pacific/Midway": {
            long: ["萨摩亚标准时间", "萨摩亚夏令时间"]
          },
          "Pacific/Nauru": {
            long: ["瑙鲁时间", "瑙鲁时间"]
          },
          "Pacific/Niue": {
            long: ["纽埃时间", "纽埃时间"]
          },
          "Pacific/Norfolk": {
            long: ["诺福克岛标准时间", "诺福克岛夏令时间"]
          },
          "Pacific/Noumea": {
            long: ["新喀里多尼亚标准时间", "新喀里多尼亚夏令时间"]
          },
          "Pacific/Pago_Pago": {
            long: ["萨摩亚标准时间", "萨摩亚夏令时间"]
          },
          "Pacific/Palau": {
            long: ["帕劳时间", "帕劳时间"]
          },
          "Pacific/Pitcairn": {
            long: ["皮特凯恩时间", "皮特凯恩时间"]
          },
          "Pacific/Ponape": {
            long: ["波纳佩时间", "波纳佩时间"]
          },
          "Pacific/Port_Moresby": {
            long: ["巴布亚新几内亚时间", "巴布亚新几内亚时间"]
          },
          "Pacific/Rarotonga": {
            long: ["库克群岛标准时间", "库克群岛仲夏时间"]
          },
          "Pacific/Saipan": {
            long: ["查莫罗时间", "查莫罗时间"]
          },
          "Pacific/Tahiti": {
            long: ["塔希提岛时间", "塔希提岛时间"]
          },
          "Pacific/Tarawa": {
            long: ["吉尔伯特群岛时间", "吉尔伯特群岛时间"]
          },
          "Pacific/Tongatapu": {
            long: ["汤加标准时间", "汤加夏令时间"]
          },
          "Pacific/Truk": {
            long: ["楚克时间", "楚克时间"]
          },
          "Pacific/Wake": {
            long: ["威克岛时间", "威克岛时间"]
          },
          "Pacific/Wallis": {
            long: ["瓦利斯和富图纳时间", "瓦利斯和富图纳时间"]
          },
          UTC: {
            long: ["协调世界时", "协调世界时"],
            short: ["UTC", "UTC"]
          }
        },
        gmtFormat: "GMT{0}",
        hourFormat: "+HH:mm;-HH:mm",
        dateFormat: {
          full: "y年M月d日EEEE",
          long: "y年M月d日",
          medium: "y年M月d日",
          short: "y/M/d"
        },
        timeFormat: {
          full: "zzzz HH:mm:ss",
          long: "z HH:mm:ss",
          medium: "HH:mm:ss",
          short: "HH:mm"
        },
        dateTimeFormat: {
          full: "{1} {0}",
          long: "{1} {0}",
          medium: "{1} {0}",
          short: "{1} {0}"
        },
        formats: {
          gregory: {
            Bh: "Bh时",
            Bhm: "Bh:mm",
            Bhms: "Bh:mm:ss",
            d: "d日",
            E: "ccc",
            EBh: "EBh时",
            EBhm: "EBh:mm",
            EBhms: "EBh:mm:ss",
            Ed: "d日E",
            Eh: "Eah时",
            Ehm: "Eah:mm",
            EHm: "EHH:mm",
            Ehms: "Eah:mm:ss",
            EHms: "EHH:mm:ss",
            Gy: "Gy年",
            GyM: "Gy年M月",
            GyMd: "Gy-MM-dd",
            GyMEd: "Gy-MM-ddE",
            GyMMM: "Gy年M月",
            GyMMMd: "Gy年M月d日",
            GyMMMEd: "Gy年M月d日E",
            h: "ah时",
            H: "H时",
            hm: "ah:mm",
            Hm: "HH:mm",
            hms: "ah:mm:ss",
            Hms: "HH:mm:ss",
            hmsv: "vah:mm:ss",
            Hmsv: "vHH:mm:ss",
            hmv: "vah:mm",
            Hmv: "v HH:mm",
            hv: "vah时",
            Hv: "vH时",
            M: "M月",
            Md: "M/d",
            MEd: "M/dE",
            MMdd: "MM/dd",
            MMM: "LLL",
            MMMd: "M月d日",
            MMMEd: "M月d日E",
            MMMMd: "M月d日",
            ms: "mm:ss",
            y: "y年",
            yM: "y/M",
            yMd: "y/M/d",
            yMEd: "y/M/dE",
            yMEEEEd: "y年M月d日EEEE",
            yMM: "y年M月",
            yMMM: "y年M月",
            yMMMd: "y年M月d日",
            yMMMEd: "y年M月d日E",
            yMMMM: "y年M月",
            "y年M月d日EEEE": "y年M月d日EEEE",
            "y年M月d日": "y年M月d日",
            "y/M/d": "y/M/d",
            "zzzz HH:mm:ss": "zzzz HH:mm:ss",
            "z HH:mm:ss": "z HH:mm:ss",
            "HH:mm:ss": "HH:mm:ss",
            "HH:mm": "HH:mm",
            "y年M月d日EEEE zzzz HH:mm:ss": "y年M月d日EEEE zzzz HH:mm:ss",
            "y年M月d日 zzzz HH:mm:ss": "y年M月d日 zzzz HH:mm:ss",
            "y/M/d zzzz HH:mm:ss": "y/M/d zzzz HH:mm:ss",
            "d zzzz HH:mm:ss": "d日 zzzz HH:mm:ss",
            "E zzzz HH:mm:ss": "ccc zzzz HH:mm:ss",
            "Ed zzzz HH:mm:ss": "d日E zzzz HH:mm:ss",
            "Gy zzzz HH:mm:ss": "Gy年 zzzz HH:mm:ss",
            "GyM zzzz HH:mm:ss": "Gy年M月 zzzz HH:mm:ss",
            "GyMd zzzz HH:mm:ss": "Gy-MM-dd zzzz HH:mm:ss",
            "GyMEd zzzz HH:mm:ss": "Gy-MM-ddE zzzz HH:mm:ss",
            "GyMMM zzzz HH:mm:ss": "Gy年M月 zzzz HH:mm:ss",
            "GyMMMd zzzz HH:mm:ss": "Gy年M月d日 zzzz HH:mm:ss",
            "GyMMMEd zzzz HH:mm:ss": "Gy年M月d日E zzzz HH:mm:ss",
            "M zzzz HH:mm:ss": "M月 zzzz HH:mm:ss",
            "Md zzzz HH:mm:ss": "M/d zzzz HH:mm:ss",
            "MEd zzzz HH:mm:ss": "M/dE zzzz HH:mm:ss",
            "MMdd zzzz HH:mm:ss": "MM/dd zzzz HH:mm:ss",
            "MMM zzzz HH:mm:ss": "LLL zzzz HH:mm:ss",
            "MMMd zzzz HH:mm:ss": "M月d日 zzzz HH:mm:ss",
            "MMMEd zzzz HH:mm:ss": "M月d日E zzzz HH:mm:ss",
            "MMMMd zzzz HH:mm:ss": "M月d日 zzzz HH:mm:ss",
            "y zzzz HH:mm:ss": "y年 zzzz HH:mm:ss",
            "yM zzzz HH:mm:ss": "y/M zzzz HH:mm:ss",
            "yMd zzzz HH:mm:ss": "y/M/d zzzz HH:mm:ss",
            "yMEd zzzz HH:mm:ss": "y/M/dE zzzz HH:mm:ss",
            "yMEEEEd zzzz HH:mm:ss": "y年M月d日EEEE zzzz HH:mm:ss",
            "yMM zzzz HH:mm:ss": "y年M月 zzzz HH:mm:ss",
            "yMMM zzzz HH:mm:ss": "y年M月 zzzz HH:mm:ss",
            "yMMMd zzzz HH:mm:ss": "y年M月d日 zzzz HH:mm:ss",
            "yMMMEd zzzz HH:mm:ss": "y年M月d日E zzzz HH:mm:ss",
            "yMMMM zzzz HH:mm:ss": "y年M月 zzzz HH:mm:ss",
            "y年M月d日EEEE z HH:mm:ss": "y年M月d日EEEE z HH:mm:ss",
            "y年M月d日 z HH:mm:ss": "y年M月d日 z HH:mm:ss",
            "y/M/d z HH:mm:ss": "y/M/d z HH:mm:ss",
            "d z HH:mm:ss": "d日 z HH:mm:ss",
            "E z HH:mm:ss": "ccc z HH:mm:ss",
            "Ed z HH:mm:ss": "d日E z HH:mm:ss",
            "Gy z HH:mm:ss": "Gy年 z HH:mm:ss",
            "GyM z HH:mm:ss": "Gy年M月 z HH:mm:ss",
            "GyMd z HH:mm:ss": "Gy-MM-dd z HH:mm:ss",
            "GyMEd z HH:mm:ss": "Gy-MM-ddE z HH:mm:ss",
            "GyMMM z HH:mm:ss": "Gy年M月 z HH:mm:ss",
            "GyMMMd z HH:mm:ss": "Gy年M月d日 z HH:mm:ss",
            "GyMMMEd z HH:mm:ss": "Gy年M月d日E z HH:mm:ss",
            "M z HH:mm:ss": "M月 z HH:mm:ss",
            "Md z HH:mm:ss": "M/d z HH:mm:ss",
            "MEd z HH:mm:ss": "M/dE z HH:mm:ss",
            "MMdd z HH:mm:ss": "MM/dd z HH:mm:ss",
            "MMM z HH:mm:ss": "LLL z HH:mm:ss",
            "MMMd z HH:mm:ss": "M月d日 z HH:mm:ss",
            "MMMEd z HH:mm:ss": "M月d日E z HH:mm:ss",
            "MMMMd z HH:mm:ss": "M月d日 z HH:mm:ss",
            "y z HH:mm:ss": "y年 z HH:mm:ss",
            "yM z HH:mm:ss": "y/M z HH:mm:ss",
            "yMd z HH:mm:ss": "y/M/d z HH:mm:ss",
            "yMEd z HH:mm:ss": "y/M/dE z HH:mm:ss",
            "yMEEEEd z HH:mm:ss": "y年M月d日EEEE z HH:mm:ss",
            "yMM z HH:mm:ss": "y年M月 z HH:mm:ss",
            "yMMM z HH:mm:ss": "y年M月 z HH:mm:ss",
            "yMMMd z HH:mm:ss": "y年M月d日 z HH:mm:ss",
            "yMMMEd z HH:mm:ss": "y年M月d日E z HH:mm:ss",
            "yMMMM z HH:mm:ss": "y年M月 z HH:mm:ss",
            "y年M月d日EEEE HH:mm:ss": "y年M月d日EEEE HH:mm:ss",
            "y年M月d日 HH:mm:ss": "y年M月d日 HH:mm:ss",
            "y/M/d HH:mm:ss": "y/M/d HH:mm:ss",
            "d HH:mm:ss": "d日 HH:mm:ss",
            "E HH:mm:ss": "ccc HH:mm:ss",
            "Ed HH:mm:ss": "d日E HH:mm:ss",
            "Gy HH:mm:ss": "Gy年 HH:mm:ss",
            "GyM HH:mm:ss": "Gy年M月 HH:mm:ss",
            "GyMd HH:mm:ss": "Gy-MM-dd HH:mm:ss",
            "GyMEd HH:mm:ss": "Gy-MM-ddE HH:mm:ss",
            "GyMMM HH:mm:ss": "Gy年M月 HH:mm:ss",
            "GyMMMd HH:mm:ss": "Gy年M月d日 HH:mm:ss",
            "GyMMMEd HH:mm:ss": "Gy年M月d日E HH:mm:ss",
            "M HH:mm:ss": "M月 HH:mm:ss",
            "Md HH:mm:ss": "M/d HH:mm:ss",
            "MEd HH:mm:ss": "M/dE HH:mm:ss",
            "MMdd HH:mm:ss": "MM/dd HH:mm:ss",
            "MMM HH:mm:ss": "LLL HH:mm:ss",
            "MMMd HH:mm:ss": "M月d日 HH:mm:ss",
            "MMMEd HH:mm:ss": "M月d日E HH:mm:ss",
            "MMMMd HH:mm:ss": "M月d日 HH:mm:ss",
            "y HH:mm:ss": "y年 HH:mm:ss",
            "yM HH:mm:ss": "y/M HH:mm:ss",
            "yMd HH:mm:ss": "y/M/d HH:mm:ss",
            "yMEd HH:mm:ss": "y/M/dE HH:mm:ss",
            "yMEEEEd HH:mm:ss": "y年M月d日EEEE HH:mm:ss",
            "yMM HH:mm:ss": "y年M月 HH:mm:ss",
            "yMMM HH:mm:ss": "y年M月 HH:mm:ss",
            "yMMMd HH:mm:ss": "y年M月d日 HH:mm:ss",
            "yMMMEd HH:mm:ss": "y年M月d日E HH:mm:ss",
            "yMMMM HH:mm:ss": "y年M月 HH:mm:ss",
            "y年M月d日EEEE HH:mm": "y年M月d日EEEE HH:mm",
            "y年M月d日 HH:mm": "y年M月d日 HH:mm",
            "y/M/d HH:mm": "y/M/d HH:mm",
            "d HH:mm": "d日 HH:mm",
            "E HH:mm": "ccc HH:mm",
            "Ed HH:mm": "d日E HH:mm",
            "Gy HH:mm": "Gy年 HH:mm",
            "GyM HH:mm": "Gy年M月 HH:mm",
            "GyMd HH:mm": "Gy-MM-dd HH:mm",
            "GyMEd HH:mm": "Gy-MM-ddE HH:mm",
            "GyMMM HH:mm": "Gy年M月 HH:mm",
            "GyMMMd HH:mm": "Gy年M月d日 HH:mm",
            "GyMMMEd HH:mm": "Gy年M月d日E HH:mm",
            "M HH:mm": "M月 HH:mm",
            "Md HH:mm": "M/d HH:mm",
            "MEd HH:mm": "M/dE HH:mm",
            "MMdd HH:mm": "MM/dd HH:mm",
            "MMM HH:mm": "LLL HH:mm",
            "MMMd HH:mm": "M月d日 HH:mm",
            "MMMEd HH:mm": "M月d日E HH:mm",
            "MMMMd HH:mm": "M月d日 HH:mm",
            "y HH:mm": "y年 HH:mm",
            "yM HH:mm": "y/M HH:mm",
            "yMd HH:mm": "y/M/d HH:mm",
            "yMEd HH:mm": "y/M/dE HH:mm",
            "yMEEEEd HH:mm": "y年M月d日EEEE HH:mm",
            "yMM HH:mm": "y年M月 HH:mm",
            "yMMM HH:mm": "y年M月 HH:mm",
            "yMMMd HH:mm": "y年M月d日 HH:mm",
            "yMMMEd HH:mm": "y年M月d日E HH:mm",
            "yMMMM HH:mm": "y年M月 HH:mm",
            "y年M月d日EEEE Bh": "y年M月d日EEEE Bh时",
            "y年M月d日 Bh": "y年M月d日 Bh时",
            "y/M/d Bh": "y/M/d Bh时",
            "d Bh": "d日 Bh时",
            "E Bh": "ccc Bh时",
            "Ed Bh": "d日E Bh时",
            "Gy Bh": "Gy年 Bh时",
            "GyM Bh": "Gy年M月 Bh时",
            "GyMd Bh": "Gy-MM-dd Bh时",
            "GyMEd Bh": "Gy-MM-ddE Bh时",
            "GyMMM Bh": "Gy年M月 Bh时",
            "GyMMMd Bh": "Gy年M月d日 Bh时",
            "GyMMMEd Bh": "Gy年M月d日E Bh时",
            "M Bh": "M月 Bh时",
            "Md Bh": "M/d Bh时",
            "MEd Bh": "M/dE Bh时",
            "MMdd Bh": "MM/dd Bh时",
            "MMM Bh": "LLL Bh时",
            "MMMd Bh": "M月d日 Bh时",
            "MMMEd Bh": "M月d日E Bh时",
            "MMMMd Bh": "M月d日 Bh时",
            "y Bh": "y年 Bh时",
            "yM Bh": "y/M Bh时",
            "yMd Bh": "y/M/d Bh时",
            "yMEd Bh": "y/M/dE Bh时",
            "yMEEEEd Bh": "y年M月d日EEEE Bh时",
            "yMM Bh": "y年M月 Bh时",
            "yMMM Bh": "y年M月 Bh时",
            "yMMMd Bh": "y年M月d日 Bh时",
            "yMMMEd Bh": "y年M月d日E Bh时",
            "yMMMM Bh": "y年M月 Bh时",
            "y年M月d日EEEE Bhm": "y年M月d日EEEE Bh:mm",
            "y年M月d日 Bhm": "y年M月d日 Bh:mm",
            "y/M/d Bhm": "y/M/d Bh:mm",
            "d Bhm": "d日 Bh:mm",
            "E Bhm": "ccc Bh:mm",
            "Ed Bhm": "d日E Bh:mm",
            "Gy Bhm": "Gy年 Bh:mm",
            "GyM Bhm": "Gy年M月 Bh:mm",
            "GyMd Bhm": "Gy-MM-dd Bh:mm",
            "GyMEd Bhm": "Gy-MM-ddE Bh:mm",
            "GyMMM Bhm": "Gy年M月 Bh:mm",
            "GyMMMd Bhm": "Gy年M月d日 Bh:mm",
            "GyMMMEd Bhm": "Gy年M月d日E Bh:mm",
            "M Bhm": "M月 Bh:mm",
            "Md Bhm": "M/d Bh:mm",
            "MEd Bhm": "M/dE Bh:mm",
            "MMdd Bhm": "MM/dd Bh:mm",
            "MMM Bhm": "LLL Bh:mm",
            "MMMd Bhm": "M月d日 Bh:mm",
            "MMMEd Bhm": "M月d日E Bh:mm",
            "MMMMd Bhm": "M月d日 Bh:mm",
            "y Bhm": "y年 Bh:mm",
            "yM Bhm": "y/M Bh:mm",
            "yMd Bhm": "y/M/d Bh:mm",
            "yMEd Bhm": "y/M/dE Bh:mm",
            "yMEEEEd Bhm": "y年M月d日EEEE Bh:mm",
            "yMM Bhm": "y年M月 Bh:mm",
            "yMMM Bhm": "y年M月 Bh:mm",
            "yMMMd Bhm": "y年M月d日 Bh:mm",
            "yMMMEd Bhm": "y年M月d日E Bh:mm",
            "yMMMM Bhm": "y年M月 Bh:mm",
            "y年M月d日EEEE Bhms": "y年M月d日EEEE Bh:mm:ss",
            "y年M月d日 Bhms": "y年M月d日 Bh:mm:ss",
            "y/M/d Bhms": "y/M/d Bh:mm:ss",
            "d Bhms": "d日 Bh:mm:ss",
            "E Bhms": "ccc Bh:mm:ss",
            "Ed Bhms": "d日E Bh:mm:ss",
            "Gy Bhms": "Gy年 Bh:mm:ss",
            "GyM Bhms": "Gy年M月 Bh:mm:ss",
            "GyMd Bhms": "Gy-MM-dd Bh:mm:ss",
            "GyMEd Bhms": "Gy-MM-ddE Bh:mm:ss",
            "GyMMM Bhms": "Gy年M月 Bh:mm:ss",
            "GyMMMd Bhms": "Gy年M月d日 Bh:mm:ss",
            "GyMMMEd Bhms": "Gy年M月d日E Bh:mm:ss",
            "M Bhms": "M月 Bh:mm:ss",
            "Md Bhms": "M/d Bh:mm:ss",
            "MEd Bhms": "M/dE Bh:mm:ss",
            "MMdd Bhms": "MM/dd Bh:mm:ss",
            "MMM Bhms": "LLL Bh:mm:ss",
            "MMMd Bhms": "M月d日 Bh:mm:ss",
            "MMMEd Bhms": "M月d日E Bh:mm:ss",
            "MMMMd Bhms": "M月d日 Bh:mm:ss",
            "y Bhms": "y年 Bh:mm:ss",
            "yM Bhms": "y/M Bh:mm:ss",
            "yMd Bhms": "y/M/d Bh:mm:ss",
            "yMEd Bhms": "y/M/dE Bh:mm:ss",
            "yMEEEEd Bhms": "y年M月d日EEEE Bh:mm:ss",
            "yMM Bhms": "y年M月 Bh:mm:ss",
            "yMMM Bhms": "y年M月 Bh:mm:ss",
            "yMMMd Bhms": "y年M月d日 Bh:mm:ss",
            "yMMMEd Bhms": "y年M月d日E Bh:mm:ss",
            "yMMMM Bhms": "y年M月 Bh:mm:ss",
            "y年M月d日EEEE h": "y年M月d日EEEE ah时",
            "y年M月d日 h": "y年M月d日 ah时",
            "y/M/d h": "y/M/d ah时",
            "d h": "d日 ah时",
            "E h": "ccc ah时",
            "Ed h": "d日E ah时",
            "Gy h": "Gy年 ah时",
            "GyM h": "Gy年M月 ah时",
            "GyMd h": "Gy-MM-dd ah时",
            "GyMEd h": "Gy-MM-ddE ah时",
            "GyMMM h": "Gy年M月 ah时",
            "GyMMMd h": "Gy年M月d日 ah时",
            "GyMMMEd h": "Gy年M月d日E ah时",
            "M h": "M月 ah时",
            "Md h": "M/d ah时",
            "MEd h": "M/dE ah时",
            "MMdd h": "MM/dd ah时",
            "MMM h": "LLL ah时",
            "MMMd h": "M月d日 ah时",
            "MMMEd h": "M月d日E ah时",
            "MMMMd h": "M月d日 ah时",
            "y h": "y年 ah时",
            "yM h": "y/M ah时",
            "yMd h": "y/M/d ah时",
            "yMEd h": "y/M/dE ah时",
            "yMEEEEd h": "y年M月d日EEEE ah时",
            "yMM h": "y年M月 ah时",
            "yMMM h": "y年M月 ah时",
            "yMMMd h": "y年M月d日 ah时",
            "yMMMEd h": "y年M月d日E ah时",
            "yMMMM h": "y年M月 ah时",
            "y年M月d日EEEE H": "y年M月d日EEEE H时",
            "y年M月d日 H": "y年M月d日 H时",
            "y/M/d H": "y/M/d H时",
            "d H": "d日 H时",
            "E H": "ccc H时",
            "Ed H": "d日E H时",
            "Gy H": "Gy年 H时",
            "GyM H": "Gy年M月 H时",
            "GyMd H": "Gy-MM-dd H时",
            "GyMEd H": "Gy-MM-ddE H时",
            "GyMMM H": "Gy年M月 H时",
            "GyMMMd H": "Gy年M月d日 H时",
            "GyMMMEd H": "Gy年M月d日E H时",
            "M H": "M月 H时",
            "Md H": "M/d H时",
            "MEd H": "M/dE H时",
            "MMdd H": "MM/dd H时",
            "MMM H": "LLL H时",
            "MMMd H": "M月d日 H时",
            "MMMEd H": "M月d日E H时",
            "MMMMd H": "M月d日 H时",
            "y H": "y年 H时",
            "yM H": "y/M H时",
            "yMd H": "y/M/d H时",
            "yMEd H": "y/M/dE H时",
            "yMEEEEd H": "y年M月d日EEEE H时",
            "yMM H": "y年M月 H时",
            "yMMM H": "y年M月 H时",
            "yMMMd H": "y年M月d日 H时",
            "yMMMEd H": "y年M月d日E H时",
            "yMMMM H": "y年M月 H时",
            "y年M月d日EEEE hm": "y年M月d日EEEE ah:mm",
            "y年M月d日 hm": "y年M月d日 ah:mm",
            "y/M/d hm": "y/M/d ah:mm",
            "d hm": "d日 ah:mm",
            "E hm": "ccc ah:mm",
            "Ed hm": "d日E ah:mm",
            "Gy hm": "Gy年 ah:mm",
            "GyM hm": "Gy年M月 ah:mm",
            "GyMd hm": "Gy-MM-dd ah:mm",
            "GyMEd hm": "Gy-MM-ddE ah:mm",
            "GyMMM hm": "Gy年M月 ah:mm",
            "GyMMMd hm": "Gy年M月d日 ah:mm",
            "GyMMMEd hm": "Gy年M月d日E ah:mm",
            "M hm": "M月 ah:mm",
            "Md hm": "M/d ah:mm",
            "MEd hm": "M/dE ah:mm",
            "MMdd hm": "MM/dd ah:mm",
            "MMM hm": "LLL ah:mm",
            "MMMd hm": "M月d日 ah:mm",
            "MMMEd hm": "M月d日E ah:mm",
            "MMMMd hm": "M月d日 ah:mm",
            "y hm": "y年 ah:mm",
            "yM hm": "y/M ah:mm",
            "yMd hm": "y/M/d ah:mm",
            "yMEd hm": "y/M/dE ah:mm",
            "yMEEEEd hm": "y年M月d日EEEE ah:mm",
            "yMM hm": "y年M月 ah:mm",
            "yMMM hm": "y年M月 ah:mm",
            "yMMMd hm": "y年M月d日 ah:mm",
            "yMMMEd hm": "y年M月d日E ah:mm",
            "yMMMM hm": "y年M月 ah:mm",
            "y年M月d日EEEE Hm": "y年M月d日EEEE HH:mm",
            "y年M月d日 Hm": "y年M月d日 HH:mm",
            "y/M/d Hm": "y/M/d HH:mm",
            "d Hm": "d日 HH:mm",
            "E Hm": "ccc HH:mm",
            "Ed Hm": "d日E HH:mm",
            "Gy Hm": "Gy年 HH:mm",
            "GyM Hm": "Gy年M月 HH:mm",
            "GyMd Hm": "Gy-MM-dd HH:mm",
            "GyMEd Hm": "Gy-MM-ddE HH:mm",
            "GyMMM Hm": "Gy年M月 HH:mm",
            "GyMMMd Hm": "Gy年M月d日 HH:mm",
            "GyMMMEd Hm": "Gy年M月d日E HH:mm",
            "M Hm": "M月 HH:mm",
            "Md Hm": "M/d HH:mm",
            "MEd Hm": "M/dE HH:mm",
            "MMdd Hm": "MM/dd HH:mm",
            "MMM Hm": "LLL HH:mm",
            "MMMd Hm": "M月d日 HH:mm",
            "MMMEd Hm": "M月d日E HH:mm",
            "MMMMd Hm": "M月d日 HH:mm",
            "y Hm": "y年 HH:mm",
            "yM Hm": "y/M HH:mm",
            "yMd Hm": "y/M/d HH:mm",
            "yMEd Hm": "y/M/dE HH:mm",
            "yMEEEEd Hm": "y年M月d日EEEE HH:mm",
            "yMM Hm": "y年M月 HH:mm",
            "yMMM Hm": "y年M月 HH:mm",
            "yMMMd Hm": "y年M月d日 HH:mm",
            "yMMMEd Hm": "y年M月d日E HH:mm",
            "yMMMM Hm": "y年M月 HH:mm",
            "y年M月d日EEEE hms": "y年M月d日EEEE ah:mm:ss",
            "y年M月d日 hms": "y年M月d日 ah:mm:ss",
            "y/M/d hms": "y/M/d ah:mm:ss",
            "d hms": "d日 ah:mm:ss",
            "E hms": "ccc ah:mm:ss",
            "Ed hms": "d日E ah:mm:ss",
            "Gy hms": "Gy年 ah:mm:ss",
            "GyM hms": "Gy年M月 ah:mm:ss",
            "GyMd hms": "Gy-MM-dd ah:mm:ss",
            "GyMEd hms": "Gy-MM-ddE ah:mm:ss",
            "GyMMM hms": "Gy年M月 ah:mm:ss",
            "GyMMMd hms": "Gy年M月d日 ah:mm:ss",
            "GyMMMEd hms": "Gy年M月d日E ah:mm:ss",
            "M hms": "M月 ah:mm:ss",
            "Md hms": "M/d ah:mm:ss",
            "MEd hms": "M/dE ah:mm:ss",
            "MMdd hms": "MM/dd ah:mm:ss",
            "MMM hms": "LLL ah:mm:ss",
            "MMMd hms": "M月d日 ah:mm:ss",
            "MMMEd hms": "M月d日E ah:mm:ss",
            "MMMMd hms": "M月d日 ah:mm:ss",
            "y hms": "y年 ah:mm:ss",
            "yM hms": "y/M ah:mm:ss",
            "yMd hms": "y/M/d ah:mm:ss",
            "yMEd hms": "y/M/dE ah:mm:ss",
            "yMEEEEd hms": "y年M月d日EEEE ah:mm:ss",
            "yMM hms": "y年M月 ah:mm:ss",
            "yMMM hms": "y年M月 ah:mm:ss",
            "yMMMd hms": "y年M月d日 ah:mm:ss",
            "yMMMEd hms": "y年M月d日E ah:mm:ss",
            "yMMMM hms": "y年M月 ah:mm:ss",
            "y年M月d日EEEE Hms": "y年M月d日EEEE HH:mm:ss",
            "y年M月d日 Hms": "y年M月d日 HH:mm:ss",
            "y/M/d Hms": "y/M/d HH:mm:ss",
            "d Hms": "d日 HH:mm:ss",
            "E Hms": "ccc HH:mm:ss",
            "Ed Hms": "d日E HH:mm:ss",
            "Gy Hms": "Gy年 HH:mm:ss",
            "GyM Hms": "Gy年M月 HH:mm:ss",
            "GyMd Hms": "Gy-MM-dd HH:mm:ss",
            "GyMEd Hms": "Gy-MM-ddE HH:mm:ss",
            "GyMMM Hms": "Gy年M月 HH:mm:ss",
            "GyMMMd Hms": "Gy年M月d日 HH:mm:ss",
            "GyMMMEd Hms": "Gy年M月d日E HH:mm:ss",
            "M Hms": "M月 HH:mm:ss",
            "Md Hms": "M/d HH:mm:ss",
            "MEd Hms": "M/dE HH:mm:ss",
            "MMdd Hms": "MM/dd HH:mm:ss",
            "MMM Hms": "LLL HH:mm:ss",
            "MMMd Hms": "M月d日 HH:mm:ss",
            "MMMEd Hms": "M月d日E HH:mm:ss",
            "MMMMd Hms": "M月d日 HH:mm:ss",
            "y Hms": "y年 HH:mm:ss",
            "yM Hms": "y/M HH:mm:ss",
            "yMd Hms": "y/M/d HH:mm:ss",
            "yMEd Hms": "y/M/dE HH:mm:ss",
            "yMEEEEd Hms": "y年M月d日EEEE HH:mm:ss",
            "yMM Hms": "y年M月 HH:mm:ss",
            "yMMM Hms": "y年M月 HH:mm:ss",
            "yMMMd Hms": "y年M月d日 HH:mm:ss",
            "yMMMEd Hms": "y年M月d日E HH:mm:ss",
            "yMMMM Hms": "y年M月 HH:mm:ss",
            "y年M月d日EEEE hmsv": "y年M月d日EEEE vah:mm:ss",
            "y年M月d日 hmsv": "y年M月d日 vah:mm:ss",
            "y/M/d hmsv": "y/M/d vah:mm:ss",
            "d hmsv": "d日 vah:mm:ss",
            "E hmsv": "ccc vah:mm:ss",
            "Ed hmsv": "d日E vah:mm:ss",
            "Gy hmsv": "Gy年 vah:mm:ss",
            "GyM hmsv": "Gy年M月 vah:mm:ss",
            "GyMd hmsv": "Gy-MM-dd vah:mm:ss",
            "GyMEd hmsv": "Gy-MM-ddE vah:mm:ss",
            "GyMMM hmsv": "Gy年M月 vah:mm:ss",
            "GyMMMd hmsv": "Gy年M月d日 vah:mm:ss",
            "GyMMMEd hmsv": "Gy年M月d日E vah:mm:ss",
            "M hmsv": "M月 vah:mm:ss",
            "Md hmsv": "M/d vah:mm:ss",
            "MEd hmsv": "M/dE vah:mm:ss",
            "MMdd hmsv": "MM/dd vah:mm:ss",
            "MMM hmsv": "LLL vah:mm:ss",
            "MMMd hmsv": "M月d日 vah:mm:ss",
            "MMMEd hmsv": "M月d日E vah:mm:ss",
            "MMMMd hmsv": "M月d日 vah:mm:ss",
            "y hmsv": "y年 vah:mm:ss",
            "yM hmsv": "y/M vah:mm:ss",
            "yMd hmsv": "y/M/d vah:mm:ss",
            "yMEd hmsv": "y/M/dE vah:mm:ss",
            "yMEEEEd hmsv": "y年M月d日EEEE vah:mm:ss",
            "yMM hmsv": "y年M月 vah:mm:ss",
            "yMMM hmsv": "y年M月 vah:mm:ss",
            "yMMMd hmsv": "y年M月d日 vah:mm:ss",
            "yMMMEd hmsv": "y年M月d日E vah:mm:ss",
            "yMMMM hmsv": "y年M月 vah:mm:ss",
            "y年M月d日EEEE Hmsv": "y年M月d日EEEE vHH:mm:ss",
            "y年M月d日 Hmsv": "y年M月d日 vHH:mm:ss",
            "y/M/d Hmsv": "y/M/d vHH:mm:ss",
            "d Hmsv": "d日 vHH:mm:ss",
            "E Hmsv": "ccc vHH:mm:ss",
            "Ed Hmsv": "d日E vHH:mm:ss",
            "Gy Hmsv": "Gy年 vHH:mm:ss",
            "GyM Hmsv": "Gy年M月 vHH:mm:ss",
            "GyMd Hmsv": "Gy-MM-dd vHH:mm:ss",
            "GyMEd Hmsv": "Gy-MM-ddE vHH:mm:ss",
            "GyMMM Hmsv": "Gy年M月 vHH:mm:ss",
            "GyMMMd Hmsv": "Gy年M月d日 vHH:mm:ss",
            "GyMMMEd Hmsv": "Gy年M月d日E vHH:mm:ss",
            "M Hmsv": "M月 vHH:mm:ss",
            "Md Hmsv": "M/d vHH:mm:ss",
            "MEd Hmsv": "M/dE vHH:mm:ss",
            "MMdd Hmsv": "MM/dd vHH:mm:ss",
            "MMM Hmsv": "LLL vHH:mm:ss",
            "MMMd Hmsv": "M月d日 vHH:mm:ss",
            "MMMEd Hmsv": "M月d日E vHH:mm:ss",
            "MMMMd Hmsv": "M月d日 vHH:mm:ss",
            "y Hmsv": "y年 vHH:mm:ss",
            "yM Hmsv": "y/M vHH:mm:ss",
            "yMd Hmsv": "y/M/d vHH:mm:ss",
            "yMEd Hmsv": "y/M/dE vHH:mm:ss",
            "yMEEEEd Hmsv": "y年M月d日EEEE vHH:mm:ss",
            "yMM Hmsv": "y年M月 vHH:mm:ss",
            "yMMM Hmsv": "y年M月 vHH:mm:ss",
            "yMMMd Hmsv": "y年M月d日 vHH:mm:ss",
            "yMMMEd Hmsv": "y年M月d日E vHH:mm:ss",
            "yMMMM Hmsv": "y年M月 vHH:mm:ss",
            "y年M月d日EEEE hmv": "y年M月d日EEEE vah:mm",
            "y年M月d日 hmv": "y年M月d日 vah:mm",
            "y/M/d hmv": "y/M/d vah:mm",
            "d hmv": "d日 vah:mm",
            "E hmv": "ccc vah:mm",
            "Ed hmv": "d日E vah:mm",
            "Gy hmv": "Gy年 vah:mm",
            "GyM hmv": "Gy年M月 vah:mm",
            "GyMd hmv": "Gy-MM-dd vah:mm",
            "GyMEd hmv": "Gy-MM-ddE vah:mm",
            "GyMMM hmv": "Gy年M月 vah:mm",
            "GyMMMd hmv": "Gy年M月d日 vah:mm",
            "GyMMMEd hmv": "Gy年M月d日E vah:mm",
            "M hmv": "M月 vah:mm",
            "Md hmv": "M/d vah:mm",
            "MEd hmv": "M/dE vah:mm",
            "MMdd hmv": "MM/dd vah:mm",
            "MMM hmv": "LLL vah:mm",
            "MMMd hmv": "M月d日 vah:mm",
            "MMMEd hmv": "M月d日E vah:mm",
            "MMMMd hmv": "M月d日 vah:mm",
            "y hmv": "y年 vah:mm",
            "yM hmv": "y/M vah:mm",
            "yMd hmv": "y/M/d vah:mm",
            "yMEd hmv": "y/M/dE vah:mm",
            "yMEEEEd hmv": "y年M月d日EEEE vah:mm",
            "yMM hmv": "y年M月 vah:mm",
            "yMMM hmv": "y年M月 vah:mm",
            "yMMMd hmv": "y年M月d日 vah:mm",
            "yMMMEd hmv": "y年M月d日E vah:mm",
            "yMMMM hmv": "y年M月 vah:mm",
            "y年M月d日EEEE Hmv": "y年M月d日EEEE v HH:mm",
            "y年M月d日 Hmv": "y年M月d日 v HH:mm",
            "y/M/d Hmv": "y/M/d v HH:mm",
            "d Hmv": "d日 v HH:mm",
            "E Hmv": "ccc v HH:mm",
            "Ed Hmv": "d日E v HH:mm",
            "Gy Hmv": "Gy年 v HH:mm",
            "GyM Hmv": "Gy年M月 v HH:mm",
            "GyMd Hmv": "Gy-MM-dd v HH:mm",
            "GyMEd Hmv": "Gy-MM-ddE v HH:mm",
            "GyMMM Hmv": "Gy年M月 v HH:mm",
            "GyMMMd Hmv": "Gy年M月d日 v HH:mm",
            "GyMMMEd Hmv": "Gy年M月d日E v HH:mm",
            "M Hmv": "M月 v HH:mm",
            "Md Hmv": "M/d v HH:mm",
            "MEd Hmv": "M/dE v HH:mm",
            "MMdd Hmv": "MM/dd v HH:mm",
            "MMM Hmv": "LLL v HH:mm",
            "MMMd Hmv": "M月d日 v HH:mm",
            "MMMEd Hmv": "M月d日E v HH:mm",
            "MMMMd Hmv": "M月d日 v HH:mm",
            "y Hmv": "y年 v HH:mm",
            "yM Hmv": "y/M v HH:mm",
            "yMd Hmv": "y/M/d v HH:mm",
            "yMEd Hmv": "y/M/dE v HH:mm",
            "yMEEEEd Hmv": "y年M月d日EEEE v HH:mm",
            "yMM Hmv": "y年M月 v HH:mm",
            "yMMM Hmv": "y年M月 v HH:mm",
            "yMMMd Hmv": "y年M月d日 v HH:mm",
            "yMMMEd Hmv": "y年M月d日E v HH:mm",
            "yMMMM Hmv": "y年M月 v HH:mm",
            "y年M月d日EEEE hv": "y年M月d日EEEE vah时",
            "y年M月d日 hv": "y年M月d日 vah时",
            "y/M/d hv": "y/M/d vah时",
            "d hv": "d日 vah时",
            "E hv": "ccc vah时",
            "Ed hv": "d日E vah时",
            "Gy hv": "Gy年 vah时",
            "GyM hv": "Gy年M月 vah时",
            "GyMd hv": "Gy-MM-dd vah时",
            "GyMEd hv": "Gy-MM-ddE vah时",
            "GyMMM hv": "Gy年M月 vah时",
            "GyMMMd hv": "Gy年M月d日 vah时",
            "GyMMMEd hv": "Gy年M月d日E vah时",
            "M hv": "M月 vah时",
            "Md hv": "M/d vah时",
            "MEd hv": "M/dE vah时",
            "MMdd hv": "MM/dd vah时",
            "MMM hv": "LLL vah时",
            "MMMd hv": "M月d日 vah时",
            "MMMEd hv": "M月d日E vah时",
            "MMMMd hv": "M月d日 vah时",
            "y hv": "y年 vah时",
            "yM hv": "y/M vah时",
            "yMd hv": "y/M/d vah时",
            "yMEd hv": "y/M/dE vah时",
            "yMEEEEd hv": "y年M月d日EEEE vah时",
            "yMM hv": "y年M月 vah时",
            "yMMM hv": "y年M月 vah时",
            "yMMMd hv": "y年M月d日 vah时",
            "yMMMEd hv": "y年M月d日E vah时",
            "yMMMM hv": "y年M月 vah时",
            "y年M月d日EEEE Hv": "y年M月d日EEEE vH时",
            "y年M月d日 Hv": "y年M月d日 vH时",
            "y/M/d Hv": "y/M/d vH时",
            "d Hv": "d日 vH时",
            "E Hv": "ccc vH时",
            "Ed Hv": "d日E vH时",
            "Gy Hv": "Gy年 vH时",
            "GyM Hv": "Gy年M月 vH时",
            "GyMd Hv": "Gy-MM-dd vH时",
            "GyMEd Hv": "Gy-MM-ddE vH时",
            "GyMMM Hv": "Gy年M月 vH时",
            "GyMMMd Hv": "Gy年M月d日 vH时",
            "GyMMMEd Hv": "Gy年M月d日E vH时",
            "M Hv": "M月 vH时",
            "Md Hv": "M/d vH时",
            "MEd Hv": "M/dE vH时",
            "MMdd Hv": "MM/dd vH时",
            "MMM Hv": "LLL vH时",
            "MMMd Hv": "M月d日 vH时",
            "MMMEd Hv": "M月d日E vH时",
            "MMMMd Hv": "M月d日 vH时",
            "y Hv": "y年 vH时",
            "yM Hv": "y/M vH时",
            "yMd Hv": "y/M/d vH时",
            "yMEd Hv": "y/M/dE vH时",
            "yMEEEEd Hv": "y年M月d日EEEE vH时",
            "yMM Hv": "y年M月 vH时",
            "yMMM Hv": "y年M月 vH时",
            "yMMMd Hv": "y年M月d日 vH时",
            "yMMMEd Hv": "y年M月d日E vH时",
            "yMMMM Hv": "y年M月 vH时",
            "y年M月d日EEEE ms": "y年M月d日EEEE mm:ss",
            "y年M月d日 ms": "y年M月d日 mm:ss",
            "y/M/d ms": "y/M/d mm:ss",
            "d ms": "d日 mm:ss",
            "E ms": "ccc mm:ss",
            "Ed ms": "d日E mm:ss",
            "Gy ms": "Gy年 mm:ss",
            "GyM ms": "Gy年M月 mm:ss",
            "GyMd ms": "Gy-MM-dd mm:ss",
            "GyMEd ms": "Gy-MM-ddE mm:ss",
            "GyMMM ms": "Gy年M月 mm:ss",
            "GyMMMd ms": "Gy年M月d日 mm:ss",
            "GyMMMEd ms": "Gy年M月d日E mm:ss",
            "M ms": "M月 mm:ss",
            "Md ms": "M/d mm:ss",
            "MEd ms": "M/dE mm:ss",
            "MMdd ms": "MM/dd mm:ss",
            "MMM ms": "LLL mm:ss",
            "MMMd ms": "M月d日 mm:ss",
            "MMMEd ms": "M月d日E mm:ss",
            "MMMMd ms": "M月d日 mm:ss",
            "y ms": "y年 mm:ss",
            "yM ms": "y/M mm:ss",
            "yMd ms": "y/M/d mm:ss",
            "yMEd ms": "y/M/dE mm:ss",
            "yMEEEEd ms": "y年M月d日EEEE mm:ss",
            "yMM ms": "y年M月 mm:ss",
            "yMMM ms": "y年M月 mm:ss",
            "yMMMd ms": "y年M月d日 mm:ss",
            "yMMMEd ms": "y年M月d日E mm:ss",
            "yMMMM ms": "y年M月 mm:ss"
          }
        },
        intervalFormats: {
          intervalFormatFallback: "{0} – {1}",
          Bh: {
            B: "Bh时至Bh时",
            h: "Bh时至h时"
          },
          Bhm: {
            B: "Bh:mm至Bh:mm",
            h: "Bh:mm至h:mm",
            m: "Bh:mm至h:mm"
          },
          d: {
            d: "d–d日"
          },
          Gy: {
            G: "Gy年 – Gy年",
            y: "Gy年–y年"
          },
          GyM: {
            G: "GGGGGy-MM – GGGGGy-MM",
            M: "GGGGGy-MM – y-MM",
            y: "GGGGGy-MM – y-MM"
          },
          GyMd: {
            d: "GGGGGy-MM-dd – y-MM-dd",
            G: "GGGGGy-MM-dd – GGGGGy-MM-dd",
            M: "GGGGGy-MM-dd – y-MM-dd",
            y: "GGGGGy-MM-dd – y-MM-dd"
          },
          GyMEd: {
            d: "GGGGGy-MM-ddE – y-MM-ddE",
            G: "GGGGGy-MM-ddE – GGGGGy-MM-ddE",
            M: "GGGGGy-MM-ddE – y-MM-ddE",
            y: "GGGGGy-MM-ddE – y-MM-ddE"
          },
          GyMMM: {
            G: "Gy年MMM – Gy年MMM",
            M: "Gy年MMM–MMM",
            y: "Gy年MMM – y年MMM"
          },
          GyMMMd: {
            d: "Gy年MMMd–d日",
            G: "Gy年MMMd日 – Gy年MMMd日",
            M: "Gy年MMMd日 – MMMd日",
            y: "Gy年MMMd日 – y年MMMd日"
          },
          GyMMMEd: {
            d: "Gy年MMMd日E – MMMd日E",
            G: "Gy年MMMd日E – Gy年MMMd日E",
            M: "Gy年MMMd日E – MMMd日E",
            y: "Gy年MMMd日E – y年MMMd日E"
          },
          h: {
            a: "ah时至ah时",
            h: "ah时至h时"
          },
          H: {
            H: "HH–HH"
          },
          hm: {
            a: "ah:mm至ah:mm",
            h: "ah:mm至h:mm",
            m: "ah:mm至h:mm"
          },
          Hm: {
            H: "HH:mm–HH:mm",
            m: "HH:mm–HH:mm"
          },
          hmv: {
            a: "vah:mm至ah:mm",
            h: "vah:mm至h:mm",
            m: "vah:mm至h:mm"
          },
          Hmv: {
            H: "v HH:mm–HH:mm",
            m: "v HH:mm–HH:mm"
          },
          hv: {
            a: "vah时至ah时",
            h: "vah时至h时"
          },
          Hv: {
            H: "v HH–HH"
          },
          M: {
            M: "M–M月"
          },
          Md: {
            d: "M/d – M/d",
            M: "M/d – M/d"
          },
          MEd: {
            d: "M/dE至M/dE",
            M: "M/dE至M/dE"
          },
          MMM: {
            M: "MMM – MMM"
          },
          MMMd: {
            d: "M月d日至d日",
            M: "M月d日至M月d日"
          },
          MMMEd: {
            d: "M月d日E至d日E",
            M: "M月d日E至M月d日E"
          },
          y: {
            y: "y–y年"
          },
          yM: {
            M: "y/M – y/M",
            y: "y/M – y/M"
          },
          yMd: {
            d: "y/M/d – y/M/d",
            M: "y/M/d – y/M/d",
            y: "y/M/d – y/M/d"
          },
          yMEd: {
            d: "y/M/dE至y/M/dE",
            M: "y/M/dE至y/M/dE",
            y: "y/M/dE – y/M/dE"
          },
          yMMM: {
            M: "y年MMM – MMM",
            y: "y年MMM – y年MMM"
          },
          yMMMd: {
            d: "y年MMMd日 – d日",
            M: "y年MMMd日 – MMMd日",
            y: "y年MMMd日 – y年MMMd日"
          },
          yMMMEd: {
            d: "y年MMMd日E – MMMd日E",
            M: "y年M月d日E至M月d日E",
            y: "y年M月d日E至y年M月d日E"
          },
          yMMMM: {
            M: "y年M月 – M月",
            y: "y年M月 – y年M月"
          },
          "y年M月d日EEEE Bh": {
            B: "y年M月d日EEEE Bh时至Bh时",
            h: "y年M月d日EEEE Bh时至h时"
          },
          "y年M月d日 Bh": {
            B: "y年M月d日 Bh时至Bh时",
            h: "y年M月d日 Bh时至h时"
          },
          "y/M/d Bh": {
            B: "y/M/d Bh时至Bh时",
            h: "y/M/d Bh时至h时"
          },
          "d Bh": {
            B: "d日 Bh时至Bh时",
            h: "d日 Bh时至h时"
          },
          "E Bh": {
            B: "ccc Bh时至Bh时",
            h: "ccc Bh时至h时"
          },
          "Ed Bh": {
            B: "d日E Bh时至Bh时",
            h: "d日E Bh时至h时"
          },
          "Gy Bh": {
            B: "Gy年 Bh时至Bh时",
            h: "Gy年 Bh时至h时"
          },
          "GyM Bh": {
            B: "Gy年M月 Bh时至Bh时",
            h: "Gy年M月 Bh时至h时"
          },
          "GyMd Bh": {
            B: "Gy-MM-dd Bh时至Bh时",
            h: "Gy-MM-dd Bh时至h时"
          },
          "GyMEd Bh": {
            B: "Gy-MM-ddE Bh时至Bh时",
            h: "Gy-MM-ddE Bh时至h时"
          },
          "GyMMM Bh": {
            B: "Gy年M月 Bh时至Bh时",
            h: "Gy年M月 Bh时至h时"
          },
          "GyMMMd Bh": {
            B: "Gy年M月d日 Bh时至Bh时",
            h: "Gy年M月d日 Bh时至h时"
          },
          "GyMMMEd Bh": {
            B: "Gy年M月d日E Bh时至Bh时",
            h: "Gy年M月d日E Bh时至h时"
          },
          "M Bh": {
            B: "M月 Bh时至Bh时",
            h: "M月 Bh时至h时"
          },
          "Md Bh": {
            B: "M/d Bh时至Bh时",
            h: "M/d Bh时至h时"
          },
          "MEd Bh": {
            B: "M/dE Bh时至Bh时",
            h: "M/dE Bh时至h时"
          },
          "MMdd Bh": {
            B: "MM/dd Bh时至Bh时",
            h: "MM/dd Bh时至h时"
          },
          "MMM Bh": {
            B: "LLL Bh时至Bh时",
            h: "LLL Bh时至h时"
          },
          "MMMd Bh": {
            B: "M月d日 Bh时至Bh时",
            h: "M月d日 Bh时至h时"
          },
          "MMMEd Bh": {
            B: "M月d日E Bh时至Bh时",
            h: "M月d日E Bh时至h时"
          },
          "MMMMd Bh": {
            B: "M月d日 Bh时至Bh时",
            h: "M月d日 Bh时至h时"
          },
          "y Bh": {
            B: "y年 Bh时至Bh时",
            h: "y年 Bh时至h时"
          },
          "yM Bh": {
            B: "y/M Bh时至Bh时",
            h: "y/M Bh时至h时"
          },
          "yMd Bh": {
            B: "y/M/d Bh时至Bh时",
            h: "y/M/d Bh时至h时"
          },
          "yMEd Bh": {
            B: "y/M/dE Bh时至Bh时",
            h: "y/M/dE Bh时至h时"
          },
          "yMEEEEd Bh": {
            B: "y年M月d日EEEE Bh时至Bh时",
            h: "y年M月d日EEEE Bh时至h时"
          },
          "yMM Bh": {
            B: "y年M月 Bh时至Bh时",
            h: "y年M月 Bh时至h时"
          },
          "yMMM Bh": {
            B: "y年M月 Bh时至Bh时",
            h: "y年M月 Bh时至h时"
          },
          "yMMMd Bh": {
            B: "y年M月d日 Bh时至Bh时",
            h: "y年M月d日 Bh时至h时"
          },
          "yMMMEd Bh": {
            B: "y年M月d日E Bh时至Bh时",
            h: "y年M月d日E Bh时至h时"
          },
          "yMMMM Bh": {
            B: "y年M月 Bh时至Bh时",
            h: "y年M月 Bh时至h时"
          },
          "y年M月d日EEEE Bhm": {
            B: "y年M月d日EEEE Bh:mm至Bh:mm",
            h: "y年M月d日EEEE Bh:mm至h:mm",
            m: "y年M月d日EEEE Bh:mm至h:mm"
          },
          "y年M月d日 Bhm": {
            B: "y年M月d日 Bh:mm至Bh:mm",
            h: "y年M月d日 Bh:mm至h:mm",
            m: "y年M月d日 Bh:mm至h:mm"
          },
          "y/M/d Bhm": {
            B: "y/M/d Bh:mm至Bh:mm",
            h: "y/M/d Bh:mm至h:mm",
            m: "y/M/d Bh:mm至h:mm"
          },
          "d Bhm": {
            B: "d日 Bh:mm至Bh:mm",
            h: "d日 Bh:mm至h:mm",
            m: "d日 Bh:mm至h:mm"
          },
          "E Bhm": {
            B: "ccc Bh:mm至Bh:mm",
            h: "ccc Bh:mm至h:mm",
            m: "ccc Bh:mm至h:mm"
          },
          "Ed Bhm": {
            B: "d日E Bh:mm至Bh:mm",
            h: "d日E Bh:mm至h:mm",
            m: "d日E Bh:mm至h:mm"
          },
          "Gy Bhm": {
            B: "Gy年 Bh:mm至Bh:mm",
            h: "Gy年 Bh:mm至h:mm",
            m: "Gy年 Bh:mm至h:mm"
          },
          "GyM Bhm": {
            B: "Gy年M月 Bh:mm至Bh:mm",
            h: "Gy年M月 Bh:mm至h:mm",
            m: "Gy年M月 Bh:mm至h:mm"
          },
          "GyMd Bhm": {
            B: "Gy-MM-dd Bh:mm至Bh:mm",
            h: "Gy-MM-dd Bh:mm至h:mm",
            m: "Gy-MM-dd Bh:mm至h:mm"
          },
          "GyMEd Bhm": {
            B: "Gy-MM-ddE Bh:mm至Bh:mm",
            h: "Gy-MM-ddE Bh:mm至h:mm",
            m: "Gy-MM-ddE Bh:mm至h:mm"
          },
          "GyMMM Bhm": {
            B: "Gy年M月 Bh:mm至Bh:mm",
            h: "Gy年M月 Bh:mm至h:mm",
            m: "Gy年M月 Bh:mm至h:mm"
          },
          "GyMMMd Bhm": {
            B: "Gy年M月d日 Bh:mm至Bh:mm",
            h: "Gy年M月d日 Bh:mm至h:mm",
            m: "Gy年M月d日 Bh:mm至h:mm"
          },
          "GyMMMEd Bhm": {
            B: "Gy年M月d日E Bh:mm至Bh:mm",
            h: "Gy年M月d日E Bh:mm至h:mm",
            m: "Gy年M月d日E Bh:mm至h:mm"
          },
          "M Bhm": {
            B: "M月 Bh:mm至Bh:mm",
            h: "M月 Bh:mm至h:mm",
            m: "M月 Bh:mm至h:mm"
          },
          "Md Bhm": {
            B: "M/d Bh:mm至Bh:mm",
            h: "M/d Bh:mm至h:mm",
            m: "M/d Bh:mm至h:mm"
          },
          "MEd Bhm": {
            B: "M/dE Bh:mm至Bh:mm",
            h: "M/dE Bh:mm至h:mm",
            m: "M/dE Bh:mm至h:mm"
          },
          "MMdd Bhm": {
            B: "MM/dd Bh:mm至Bh:mm",
            h: "MM/dd Bh:mm至h:mm",
            m: "MM/dd Bh:mm至h:mm"
          },
          "MMM Bhm": {
            B: "LLL Bh:mm至Bh:mm",
            h: "LLL Bh:mm至h:mm",
            m: "LLL Bh:mm至h:mm"
          },
          "MMMd Bhm": {
            B: "M月d日 Bh:mm至Bh:mm",
            h: "M月d日 Bh:mm至h:mm",
            m: "M月d日 Bh:mm至h:mm"
          },
          "MMMEd Bhm": {
            B: "M月d日E Bh:mm至Bh:mm",
            h: "M月d日E Bh:mm至h:mm",
            m: "M月d日E Bh:mm至h:mm"
          },
          "MMMMd Bhm": {
            B: "M月d日 Bh:mm至Bh:mm",
            h: "M月d日 Bh:mm至h:mm",
            m: "M月d日 Bh:mm至h:mm"
          },
          "y Bhm": {
            B: "y年 Bh:mm至Bh:mm",
            h: "y年 Bh:mm至h:mm",
            m: "y年 Bh:mm至h:mm"
          },
          "yM Bhm": {
            B: "y/M Bh:mm至Bh:mm",
            h: "y/M Bh:mm至h:mm",
            m: "y/M Bh:mm至h:mm"
          },
          "yMd Bhm": {
            B: "y/M/d Bh:mm至Bh:mm",
            h: "y/M/d Bh:mm至h:mm",
            m: "y/M/d Bh:mm至h:mm"
          },
          "yMEd Bhm": {
            B: "y/M/dE Bh:mm至Bh:mm",
            h: "y/M/dE Bh:mm至h:mm",
            m: "y/M/dE Bh:mm至h:mm"
          },
          "yMEEEEd Bhm": {
            B: "y年M月d日EEEE Bh:mm至Bh:mm",
            h: "y年M月d日EEEE Bh:mm至h:mm",
            m: "y年M月d日EEEE Bh:mm至h:mm"
          },
          "yMM Bhm": {
            B: "y年M月 Bh:mm至Bh:mm",
            h: "y年M月 Bh:mm至h:mm",
            m: "y年M月 Bh:mm至h:mm"
          },
          "yMMM Bhm": {
            B: "y年M月 Bh:mm至Bh:mm",
            h: "y年M月 Bh:mm至h:mm",
            m: "y年M月 Bh:mm至h:mm"
          },
          "yMMMd Bhm": {
            B: "y年M月d日 Bh:mm至Bh:mm",
            h: "y年M月d日 Bh:mm至h:mm",
            m: "y年M月d日 Bh:mm至h:mm"
          },
          "yMMMEd Bhm": {
            B: "y年M月d日E Bh:mm至Bh:mm",
            h: "y年M月d日E Bh:mm至h:mm",
            m: "y年M月d日E Bh:mm至h:mm"
          },
          "yMMMM Bhm": {
            B: "y年M月 Bh:mm至Bh:mm",
            h: "y年M月 Bh:mm至h:mm",
            m: "y年M月 Bh:mm至h:mm"
          },
          "y年M月d日EEEE h": {
            a: "y年M月d日EEEE ah时至ah时",
            h: "y年M月d日EEEE ah时至h时"
          },
          "y年M月d日 h": {
            a: "y年M月d日 ah时至ah时",
            h: "y年M月d日 ah时至h时"
          },
          "y/M/d h": {
            a: "y/M/d ah时至ah时",
            h: "y/M/d ah时至h时"
          },
          "d h": {
            a: "d日 ah时至ah时",
            h: "d日 ah时至h时"
          },
          "E h": {
            a: "ccc ah时至ah时",
            h: "ccc ah时至h时"
          },
          "Ed h": {
            a: "d日E ah时至ah时",
            h: "d日E ah时至h时"
          },
          "Gy h": {
            a: "Gy年 ah时至ah时",
            h: "Gy年 ah时至h时"
          },
          "GyM h": {
            a: "Gy年M月 ah时至ah时",
            h: "Gy年M月 ah时至h时"
          },
          "GyMd h": {
            a: "Gy-MM-dd ah时至ah时",
            h: "Gy-MM-dd ah时至h时"
          },
          "GyMEd h": {
            a: "Gy-MM-ddE ah时至ah时",
            h: "Gy-MM-ddE ah时至h时"
          },
          "GyMMM h": {
            a: "Gy年M月 ah时至ah时",
            h: "Gy年M月 ah时至h时"
          },
          "GyMMMd h": {
            a: "Gy年M月d日 ah时至ah时",
            h: "Gy年M月d日 ah时至h时"
          },
          "GyMMMEd h": {
            a: "Gy年M月d日E ah时至ah时",
            h: "Gy年M月d日E ah时至h时"
          },
          "M h": {
            a: "M月 ah时至ah时",
            h: "M月 ah时至h时"
          },
          "Md h": {
            a: "M/d ah时至ah时",
            h: "M/d ah时至h时"
          },
          "MEd h": {
            a: "M/dE ah时至ah时",
            h: "M/dE ah时至h时"
          },
          "MMdd h": {
            a: "MM/dd ah时至ah时",
            h: "MM/dd ah时至h时"
          },
          "MMM h": {
            a: "LLL ah时至ah时",
            h: "LLL ah时至h时"
          },
          "MMMd h": {
            a: "M月d日 ah时至ah时",
            h: "M月d日 ah时至h时"
          },
          "MMMEd h": {
            a: "M月d日E ah时至ah时",
            h: "M月d日E ah时至h时"
          },
          "MMMMd h": {
            a: "M月d日 ah时至ah时",
            h: "M月d日 ah时至h时"
          },
          "y h": {
            a: "y年 ah时至ah时",
            h: "y年 ah时至h时"
          },
          "yM h": {
            a: "y/M ah时至ah时",
            h: "y/M ah时至h时"
          },
          "yMd h": {
            a: "y/M/d ah时至ah时",
            h: "y/M/d ah时至h时"
          },
          "yMEd h": {
            a: "y/M/dE ah时至ah时",
            h: "y/M/dE ah时至h时"
          },
          "yMEEEEd h": {
            a: "y年M月d日EEEE ah时至ah时",
            h: "y年M月d日EEEE ah时至h时"
          },
          "yMM h": {
            a: "y年M月 ah时至ah时",
            h: "y年M月 ah时至h时"
          },
          "yMMM h": {
            a: "y年M月 ah时至ah时",
            h: "y年M月 ah时至h时"
          },
          "yMMMd h": {
            a: "y年M月d日 ah时至ah时",
            h: "y年M月d日 ah时至h时"
          },
          "yMMMEd h": {
            a: "y年M月d日E ah时至ah时",
            h: "y年M月d日E ah时至h时"
          },
          "yMMMM h": {
            a: "y年M月 ah时至ah时",
            h: "y年M月 ah时至h时"
          },
          "y年M月d日EEEE H": {
            H: "y年M月d日EEEE HH–HH"
          },
          "y年M月d日 H": {
            H: "y年M月d日 HH–HH"
          },
          "y/M/d H": {
            H: "y/M/d HH–HH"
          },
          "d H": {
            H: "d日 HH–HH"
          },
          "E H": {
            H: "ccc HH–HH"
          },
          "Ed H": {
            H: "d日E HH–HH"
          },
          "Gy H": {
            H: "Gy年 HH–HH"
          },
          "GyM H": {
            H: "Gy年M月 HH–HH"
          },
          "GyMd H": {
            H: "Gy-MM-dd HH–HH"
          },
          "GyMEd H": {
            H: "Gy-MM-ddE HH–HH"
          },
          "GyMMM H": {
            H: "Gy年M月 HH–HH"
          },
          "GyMMMd H": {
            H: "Gy年M月d日 HH–HH"
          },
          "GyMMMEd H": {
            H: "Gy年M月d日E HH–HH"
          },
          "M H": {
            H: "M月 HH–HH"
          },
          "Md H": {
            H: "M/d HH–HH"
          },
          "MEd H": {
            H: "M/dE HH–HH"
          },
          "MMdd H": {
            H: "MM/dd HH–HH"
          },
          "MMM H": {
            H: "LLL HH–HH"
          },
          "MMMd H": {
            H: "M月d日 HH–HH"
          },
          "MMMEd H": {
            H: "M月d日E HH–HH"
          },
          "MMMMd H": {
            H: "M月d日 HH–HH"
          },
          "y H": {
            H: "y年 HH–HH"
          },
          "yM H": {
            H: "y/M HH–HH"
          },
          "yMd H": {
            H: "y/M/d HH–HH"
          },
          "yMEd H": {
            H: "y/M/dE HH–HH"
          },
          "yMEEEEd H": {
            H: "y年M月d日EEEE HH–HH"
          },
          "yMM H": {
            H: "y年M月 HH–HH"
          },
          "yMMM H": {
            H: "y年M月 HH–HH"
          },
          "yMMMd H": {
            H: "y年M月d日 HH–HH"
          },
          "yMMMEd H": {
            H: "y年M月d日E HH–HH"
          },
          "yMMMM H": {
            H: "y年M月 HH–HH"
          },
          "y年M月d日EEEE hm": {
            a: "y年M月d日EEEE ah:mm至ah:mm",
            h: "y年M月d日EEEE ah:mm至h:mm",
            m: "y年M月d日EEEE ah:mm至h:mm"
          },
          "y年M月d日 hm": {
            a: "y年M月d日 ah:mm至ah:mm",
            h: "y年M月d日 ah:mm至h:mm",
            m: "y年M月d日 ah:mm至h:mm"
          },
          "y/M/d hm": {
            a: "y/M/d ah:mm至ah:mm",
            h: "y/M/d ah:mm至h:mm",
            m: "y/M/d ah:mm至h:mm"
          },
          "d hm": {
            a: "d日 ah:mm至ah:mm",
            h: "d日 ah:mm至h:mm",
            m: "d日 ah:mm至h:mm"
          },
          "E hm": {
            a: "ccc ah:mm至ah:mm",
            h: "ccc ah:mm至h:mm",
            m: "ccc ah:mm至h:mm"
          },
          "Ed hm": {
            a: "d日E ah:mm至ah:mm",
            h: "d日E ah:mm至h:mm",
            m: "d日E ah:mm至h:mm"
          },
          "Gy hm": {
            a: "Gy年 ah:mm至ah:mm",
            h: "Gy年 ah:mm至h:mm",
            m: "Gy年 ah:mm至h:mm"
          },
          "GyM hm": {
            a: "Gy年M月 ah:mm至ah:mm",
            h: "Gy年M月 ah:mm至h:mm",
            m: "Gy年M月 ah:mm至h:mm"
          },
          "GyMd hm": {
            a: "Gy-MM-dd ah:mm至ah:mm",
            h: "Gy-MM-dd ah:mm至h:mm",
            m: "Gy-MM-dd ah:mm至h:mm"
          },
          "GyMEd hm": {
            a: "Gy-MM-ddE ah:mm至ah:mm",
            h: "Gy-MM-ddE ah:mm至h:mm",
            m: "Gy-MM-ddE ah:mm至h:mm"
          },
          "GyMMM hm": {
            a: "Gy年M月 ah:mm至ah:mm",
            h: "Gy年M月 ah:mm至h:mm",
            m: "Gy年M月 ah:mm至h:mm"
          },
          "GyMMMd hm": {
            a: "Gy年M月d日 ah:mm至ah:mm",
            h: "Gy年M月d日 ah:mm至h:mm",
            m: "Gy年M月d日 ah:mm至h:mm"
          },
          "GyMMMEd hm": {
            a: "Gy年M月d日E ah:mm至ah:mm",
            h: "Gy年M月d日E ah:mm至h:mm",
            m: "Gy年M月d日E ah:mm至h:mm"
          },
          "M hm": {
            a: "M月 ah:mm至ah:mm",
            h: "M月 ah:mm至h:mm",
            m: "M月 ah:mm至h:mm"
          },
          "Md hm": {
            a: "M/d ah:mm至ah:mm",
            h: "M/d ah:mm至h:mm",
            m: "M/d ah:mm至h:mm"
          },
          "MEd hm": {
            a: "M/dE ah:mm至ah:mm",
            h: "M/dE ah:mm至h:mm",
            m: "M/dE ah:mm至h:mm"
          },
          "MMdd hm": {
            a: "MM/dd ah:mm至ah:mm",
            h: "MM/dd ah:mm至h:mm",
            m: "MM/dd ah:mm至h:mm"
          },
          "MMM hm": {
            a: "LLL ah:mm至ah:mm",
            h: "LLL ah:mm至h:mm",
            m: "LLL ah:mm至h:mm"
          },
          "MMMd hm": {
            a: "M月d日 ah:mm至ah:mm",
            h: "M月d日 ah:mm至h:mm",
            m: "M月d日 ah:mm至h:mm"
          },
          "MMMEd hm": {
            a: "M月d日E ah:mm至ah:mm",
            h: "M月d日E ah:mm至h:mm",
            m: "M月d日E ah:mm至h:mm"
          },
          "MMMMd hm": {
            a: "M月d日 ah:mm至ah:mm",
            h: "M月d日 ah:mm至h:mm",
            m: "M月d日 ah:mm至h:mm"
          },
          "y hm": {
            a: "y年 ah:mm至ah:mm",
            h: "y年 ah:mm至h:mm",
            m: "y年 ah:mm至h:mm"
          },
          "yM hm": {
            a: "y/M ah:mm至ah:mm",
            h: "y/M ah:mm至h:mm",
            m: "y/M ah:mm至h:mm"
          },
          "yMd hm": {
            a: "y/M/d ah:mm至ah:mm",
            h: "y/M/d ah:mm至h:mm",
            m: "y/M/d ah:mm至h:mm"
          },
          "yMEd hm": {
            a: "y/M/dE ah:mm至ah:mm",
            h: "y/M/dE ah:mm至h:mm",
            m: "y/M/dE ah:mm至h:mm"
          },
          "yMEEEEd hm": {
            a: "y年M月d日EEEE ah:mm至ah:mm",
            h: "y年M月d日EEEE ah:mm至h:mm",
            m: "y年M月d日EEEE ah:mm至h:mm"
          },
          "yMM hm": {
            a: "y年M月 ah:mm至ah:mm",
            h: "y年M月 ah:mm至h:mm",
            m: "y年M月 ah:mm至h:mm"
          },
          "yMMM hm": {
            a: "y年M月 ah:mm至ah:mm",
            h: "y年M月 ah:mm至h:mm",
            m: "y年M月 ah:mm至h:mm"
          },
          "yMMMd hm": {
            a: "y年M月d日 ah:mm至ah:mm",
            h: "y年M月d日 ah:mm至h:mm",
            m: "y年M月d日 ah:mm至h:mm"
          },
          "yMMMEd hm": {
            a: "y年M月d日E ah:mm至ah:mm",
            h: "y年M月d日E ah:mm至h:mm",
            m: "y年M月d日E ah:mm至h:mm"
          },
          "yMMMM hm": {
            a: "y年M月 ah:mm至ah:mm",
            h: "y年M月 ah:mm至h:mm",
            m: "y年M月 ah:mm至h:mm"
          },
          "y年M月d日EEEE Hm": {
            H: "y年M月d日EEEE HH:mm–HH:mm",
            m: "y年M月d日EEEE HH:mm–HH:mm"
          },
          "y年M月d日 Hm": {
            H: "y年M月d日 HH:mm–HH:mm",
            m: "y年M月d日 HH:mm–HH:mm"
          },
          "y/M/d Hm": {
            H: "y/M/d HH:mm–HH:mm",
            m: "y/M/d HH:mm–HH:mm"
          },
          "d Hm": {
            H: "d日 HH:mm–HH:mm",
            m: "d日 HH:mm–HH:mm"
          },
          "E Hm": {
            H: "ccc HH:mm–HH:mm",
            m: "ccc HH:mm–HH:mm"
          },
          "Ed Hm": {
            H: "d日E HH:mm–HH:mm",
            m: "d日E HH:mm–HH:mm"
          },
          "Gy Hm": {
            H: "Gy年 HH:mm–HH:mm",
            m: "Gy年 HH:mm–HH:mm"
          },
          "GyM Hm": {
            H: "Gy年M月 HH:mm–HH:mm",
            m: "Gy年M月 HH:mm–HH:mm"
          },
          "GyMd Hm": {
            H: "Gy-MM-dd HH:mm–HH:mm",
            m: "Gy-MM-dd HH:mm–HH:mm"
          },
          "GyMEd Hm": {
            H: "Gy-MM-ddE HH:mm–HH:mm",
            m: "Gy-MM-ddE HH:mm–HH:mm"
          },
          "GyMMM Hm": {
            H: "Gy年M月 HH:mm–HH:mm",
            m: "Gy年M月 HH:mm–HH:mm"
          },
          "GyMMMd Hm": {
            H: "Gy年M月d日 HH:mm–HH:mm",
            m: "Gy年M月d日 HH:mm–HH:mm"
          },
          "GyMMMEd Hm": {
            H: "Gy年M月d日E HH:mm–HH:mm",
            m: "Gy年M月d日E HH:mm–HH:mm"
          },
          "M Hm": {
            H: "M月 HH:mm–HH:mm",
            m: "M月 HH:mm–HH:mm"
          },
          "Md Hm": {
            H: "M/d HH:mm–HH:mm",
            m: "M/d HH:mm–HH:mm"
          },
          "MEd Hm": {
            H: "M/dE HH:mm–HH:mm",
            m: "M/dE HH:mm–HH:mm"
          },
          "MMdd Hm": {
            H: "MM/dd HH:mm–HH:mm",
            m: "MM/dd HH:mm–HH:mm"
          },
          "MMM Hm": {
            H: "LLL HH:mm–HH:mm",
            m: "LLL HH:mm–HH:mm"
          },
          "MMMd Hm": {
            H: "M月d日 HH:mm–HH:mm",
            m: "M月d日 HH:mm–HH:mm"
          },
          "MMMEd Hm": {
            H: "M月d日E HH:mm–HH:mm",
            m: "M月d日E HH:mm–HH:mm"
          },
          "MMMMd Hm": {
            H: "M月d日 HH:mm–HH:mm",
            m: "M月d日 HH:mm–HH:mm"
          },
          "y Hm": {
            H: "y年 HH:mm–HH:mm",
            m: "y年 HH:mm–HH:mm"
          },
          "yM Hm": {
            H: "y/M HH:mm–HH:mm",
            m: "y/M HH:mm–HH:mm"
          },
          "yMd Hm": {
            H: "y/M/d HH:mm–HH:mm",
            m: "y/M/d HH:mm–HH:mm"
          },
          "yMEd Hm": {
            H: "y/M/dE HH:mm–HH:mm",
            m: "y/M/dE HH:mm–HH:mm"
          },
          "yMEEEEd Hm": {
            H: "y年M月d日EEEE HH:mm–HH:mm",
            m: "y年M月d日EEEE HH:mm–HH:mm"
          },
          "yMM Hm": {
            H: "y年M月 HH:mm–HH:mm",
            m: "y年M月 HH:mm–HH:mm"
          },
          "yMMM Hm": {
            H: "y年M月 HH:mm–HH:mm",
            m: "y年M月 HH:mm–HH:mm"
          },
          "yMMMd Hm": {
            H: "y年M月d日 HH:mm–HH:mm",
            m: "y年M月d日 HH:mm–HH:mm"
          },
          "yMMMEd Hm": {
            H: "y年M月d日E HH:mm–HH:mm",
            m: "y年M月d日E HH:mm–HH:mm"
          },
          "yMMMM Hm": {
            H: "y年M月 HH:mm–HH:mm",
            m: "y年M月 HH:mm–HH:mm"
          },
          "y年M月d日EEEE hmv": {
            a: "y年M月d日EEEE vah:mm至ah:mm",
            h: "y年M月d日EEEE vah:mm至h:mm",
            m: "y年M月d日EEEE vah:mm至h:mm"
          },
          "y年M月d日 hmv": {
            a: "y年M月d日 vah:mm至ah:mm",
            h: "y年M月d日 vah:mm至h:mm",
            m: "y年M月d日 vah:mm至h:mm"
          },
          "y/M/d hmv": {
            a: "y/M/d vah:mm至ah:mm",
            h: "y/M/d vah:mm至h:mm",
            m: "y/M/d vah:mm至h:mm"
          },
          "d hmv": {
            a: "d日 vah:mm至ah:mm",
            h: "d日 vah:mm至h:mm",
            m: "d日 vah:mm至h:mm"
          },
          "E hmv": {
            a: "ccc vah:mm至ah:mm",
            h: "ccc vah:mm至h:mm",
            m: "ccc vah:mm至h:mm"
          },
          "Ed hmv": {
            a: "d日E vah:mm至ah:mm",
            h: "d日E vah:mm至h:mm",
            m: "d日E vah:mm至h:mm"
          },
          "Gy hmv": {
            a: "Gy年 vah:mm至ah:mm",
            h: "Gy年 vah:mm至h:mm",
            m: "Gy年 vah:mm至h:mm"
          },
          "GyM hmv": {
            a: "Gy年M月 vah:mm至ah:mm",
            h: "Gy年M月 vah:mm至h:mm",
            m: "Gy年M月 vah:mm至h:mm"
          },
          "GyMd hmv": {
            a: "Gy-MM-dd vah:mm至ah:mm",
            h: "Gy-MM-dd vah:mm至h:mm",
            m: "Gy-MM-dd vah:mm至h:mm"
          },
          "GyMEd hmv": {
            a: "Gy-MM-ddE vah:mm至ah:mm",
            h: "Gy-MM-ddE vah:mm至h:mm",
            m: "Gy-MM-ddE vah:mm至h:mm"
          },
          "GyMMM hmv": {
            a: "Gy年M月 vah:mm至ah:mm",
            h: "Gy年M月 vah:mm至h:mm",
            m: "Gy年M月 vah:mm至h:mm"
          },
          "GyMMMd hmv": {
            a: "Gy年M月d日 vah:mm至ah:mm",
            h: "Gy年M月d日 vah:mm至h:mm",
            m: "Gy年M月d日 vah:mm至h:mm"
          },
          "GyMMMEd hmv": {
            a: "Gy年M月d日E vah:mm至ah:mm",
            h: "Gy年M月d日E vah:mm至h:mm",
            m: "Gy年M月d日E vah:mm至h:mm"
          },
          "M hmv": {
            a: "M月 vah:mm至ah:mm",
            h: "M月 vah:mm至h:mm",
            m: "M月 vah:mm至h:mm"
          },
          "Md hmv": {
            a: "M/d vah:mm至ah:mm",
            h: "M/d vah:mm至h:mm",
            m: "M/d vah:mm至h:mm"
          },
          "MEd hmv": {
            a: "M/dE vah:mm至ah:mm",
            h: "M/dE vah:mm至h:mm",
            m: "M/dE vah:mm至h:mm"
          },
          "MMdd hmv": {
            a: "MM/dd vah:mm至ah:mm",
            h: "MM/dd vah:mm至h:mm",
            m: "MM/dd vah:mm至h:mm"
          },
          "MMM hmv": {
            a: "LLL vah:mm至ah:mm",
            h: "LLL vah:mm至h:mm",
            m: "LLL vah:mm至h:mm"
          },
          "MMMd hmv": {
            a: "M月d日 vah:mm至ah:mm",
            h: "M月d日 vah:mm至h:mm",
            m: "M月d日 vah:mm至h:mm"
          },
          "MMMEd hmv": {
            a: "M月d日E vah:mm至ah:mm",
            h: "M月d日E vah:mm至h:mm",
            m: "M月d日E vah:mm至h:mm"
          },
          "MMMMd hmv": {
            a: "M月d日 vah:mm至ah:mm",
            h: "M月d日 vah:mm至h:mm",
            m: "M月d日 vah:mm至h:mm"
          },
          "y hmv": {
            a: "y年 vah:mm至ah:mm",
            h: "y年 vah:mm至h:mm",
            m: "y年 vah:mm至h:mm"
          },
          "yM hmv": {
            a: "y/M vah:mm至ah:mm",
            h: "y/M vah:mm至h:mm",
            m: "y/M vah:mm至h:mm"
          },
          "yMd hmv": {
            a: "y/M/d vah:mm至ah:mm",
            h: "y/M/d vah:mm至h:mm",
            m: "y/M/d vah:mm至h:mm"
          },
          "yMEd hmv": {
            a: "y/M/dE vah:mm至ah:mm",
            h: "y/M/dE vah:mm至h:mm",
            m: "y/M/dE vah:mm至h:mm"
          },
          "yMEEEEd hmv": {
            a: "y年M月d日EEEE vah:mm至ah:mm",
            h: "y年M月d日EEEE vah:mm至h:mm",
            m: "y年M月d日EEEE vah:mm至h:mm"
          },
          "yMM hmv": {
            a: "y年M月 vah:mm至ah:mm",
            h: "y年M月 vah:mm至h:mm",
            m: "y年M月 vah:mm至h:mm"
          },
          "yMMM hmv": {
            a: "y年M月 vah:mm至ah:mm",
            h: "y年M月 vah:mm至h:mm",
            m: "y年M月 vah:mm至h:mm"
          },
          "yMMMd hmv": {
            a: "y年M月d日 vah:mm至ah:mm",
            h: "y年M月d日 vah:mm至h:mm",
            m: "y年M月d日 vah:mm至h:mm"
          },
          "yMMMEd hmv": {
            a: "y年M月d日E vah:mm至ah:mm",
            h: "y年M月d日E vah:mm至h:mm",
            m: "y年M月d日E vah:mm至h:mm"
          },
          "yMMMM hmv": {
            a: "y年M月 vah:mm至ah:mm",
            h: "y年M月 vah:mm至h:mm",
            m: "y年M月 vah:mm至h:mm"
          },
          "y年M月d日EEEE Hmv": {
            H: "y年M月d日EEEE v HH:mm–HH:mm",
            m: "y年M月d日EEEE v HH:mm–HH:mm"
          },
          "y年M月d日 Hmv": {
            H: "y年M月d日 v HH:mm–HH:mm",
            m: "y年M月d日 v HH:mm–HH:mm"
          },
          "y/M/d Hmv": {
            H: "y/M/d v HH:mm–HH:mm",
            m: "y/M/d v HH:mm–HH:mm"
          },
          "d Hmv": {
            H: "d日 v HH:mm–HH:mm",
            m: "d日 v HH:mm–HH:mm"
          },
          "E Hmv": {
            H: "ccc v HH:mm–HH:mm",
            m: "ccc v HH:mm–HH:mm"
          },
          "Ed Hmv": {
            H: "d日E v HH:mm–HH:mm",
            m: "d日E v HH:mm–HH:mm"
          },
          "Gy Hmv": {
            H: "Gy年 v HH:mm–HH:mm",
            m: "Gy年 v HH:mm–HH:mm"
          },
          "GyM Hmv": {
            H: "Gy年M月 v HH:mm–HH:mm",
            m: "Gy年M月 v HH:mm–HH:mm"
          },
          "GyMd Hmv": {
            H: "Gy-MM-dd v HH:mm–HH:mm",
            m: "Gy-MM-dd v HH:mm–HH:mm"
          },
          "GyMEd Hmv": {
            H: "Gy-MM-ddE v HH:mm–HH:mm",
            m: "Gy-MM-ddE v HH:mm–HH:mm"
          },
          "GyMMM Hmv": {
            H: "Gy年M月 v HH:mm–HH:mm",
            m: "Gy年M月 v HH:mm–HH:mm"
          },
          "GyMMMd Hmv": {
            H: "Gy年M月d日 v HH:mm–HH:mm",
            m: "Gy年M月d日 v HH:mm–HH:mm"
          },
          "GyMMMEd Hmv": {
            H: "Gy年M月d日E v HH:mm–HH:mm",
            m: "Gy年M月d日E v HH:mm–HH:mm"
          },
          "M Hmv": {
            H: "M月 v HH:mm–HH:mm",
            m: "M月 v HH:mm–HH:mm"
          },
          "Md Hmv": {
            H: "M/d v HH:mm–HH:mm",
            m: "M/d v HH:mm–HH:mm"
          },
          "MEd Hmv": {
            H: "M/dE v HH:mm–HH:mm",
            m: "M/dE v HH:mm–HH:mm"
          },
          "MMdd Hmv": {
            H: "MM/dd v HH:mm–HH:mm",
            m: "MM/dd v HH:mm–HH:mm"
          },
          "MMM Hmv": {
            H: "LLL v HH:mm–HH:mm",
            m: "LLL v HH:mm–HH:mm"
          },
          "MMMd Hmv": {
            H: "M月d日 v HH:mm–HH:mm",
            m: "M月d日 v HH:mm–HH:mm"
          },
          "MMMEd Hmv": {
            H: "M月d日E v HH:mm–HH:mm",
            m: "M月d日E v HH:mm–HH:mm"
          },
          "MMMMd Hmv": {
            H: "M月d日 v HH:mm–HH:mm",
            m: "M月d日 v HH:mm–HH:mm"
          },
          "y Hmv": {
            H: "y年 v HH:mm–HH:mm",
            m: "y年 v HH:mm–HH:mm"
          },
          "yM Hmv": {
            H: "y/M v HH:mm–HH:mm",
            m: "y/M v HH:mm–HH:mm"
          },
          "yMd Hmv": {
            H: "y/M/d v HH:mm–HH:mm",
            m: "y/M/d v HH:mm–HH:mm"
          },
          "yMEd Hmv": {
            H: "y/M/dE v HH:mm–HH:mm",
            m: "y/M/dE v HH:mm–HH:mm"
          },
          "yMEEEEd Hmv": {
            H: "y年M月d日EEEE v HH:mm–HH:mm",
            m: "y年M月d日EEEE v HH:mm–HH:mm"
          },
          "yMM Hmv": {
            H: "y年M月 v HH:mm–HH:mm",
            m: "y年M月 v HH:mm–HH:mm"
          },
          "yMMM Hmv": {
            H: "y年M月 v HH:mm–HH:mm",
            m: "y年M月 v HH:mm–HH:mm"
          },
          "yMMMd Hmv": {
            H: "y年M月d日 v HH:mm–HH:mm",
            m: "y年M月d日 v HH:mm–HH:mm"
          },
          "yMMMEd Hmv": {
            H: "y年M月d日E v HH:mm–HH:mm",
            m: "y年M月d日E v HH:mm–HH:mm"
          },
          "yMMMM Hmv": {
            H: "y年M月 v HH:mm–HH:mm",
            m: "y年M月 v HH:mm–HH:mm"
          },
          "y年M月d日EEEE hv": {
            a: "y年M月d日EEEE vah时至ah时",
            h: "y年M月d日EEEE vah时至h时"
          },
          "y年M月d日 hv": {
            a: "y年M月d日 vah时至ah时",
            h: "y年M月d日 vah时至h时"
          },
          "y/M/d hv": {
            a: "y/M/d vah时至ah时",
            h: "y/M/d vah时至h时"
          },
          "d hv": {
            a: "d日 vah时至ah时",
            h: "d日 vah时至h时"
          },
          "E hv": {
            a: "ccc vah时至ah时",
            h: "ccc vah时至h时"
          },
          "Ed hv": {
            a: "d日E vah时至ah时",
            h: "d日E vah时至h时"
          },
          "Gy hv": {
            a: "Gy年 vah时至ah时",
            h: "Gy年 vah时至h时"
          },
          "GyM hv": {
            a: "Gy年M月 vah时至ah时",
            h: "Gy年M月 vah时至h时"
          },
          "GyMd hv": {
            a: "Gy-MM-dd vah时至ah时",
            h: "Gy-MM-dd vah时至h时"
          },
          "GyMEd hv": {
            a: "Gy-MM-ddE vah时至ah时",
            h: "Gy-MM-ddE vah时至h时"
          },
          "GyMMM hv": {
            a: "Gy年M月 vah时至ah时",
            h: "Gy年M月 vah时至h时"
          },
          "GyMMMd hv": {
            a: "Gy年M月d日 vah时至ah时",
            h: "Gy年M月d日 vah时至h时"
          },
          "GyMMMEd hv": {
            a: "Gy年M月d日E vah时至ah时",
            h: "Gy年M月d日E vah时至h时"
          },
          "M hv": {
            a: "M月 vah时至ah时",
            h: "M月 vah时至h时"
          },
          "Md hv": {
            a: "M/d vah时至ah时",
            h: "M/d vah时至h时"
          },
          "MEd hv": {
            a: "M/dE vah时至ah时",
            h: "M/dE vah时至h时"
          },
          "MMdd hv": {
            a: "MM/dd vah时至ah时",
            h: "MM/dd vah时至h时"
          },
          "MMM hv": {
            a: "LLL vah时至ah时",
            h: "LLL vah时至h时"
          },
          "MMMd hv": {
            a: "M月d日 vah时至ah时",
            h: "M月d日 vah时至h时"
          },
          "MMMEd hv": {
            a: "M月d日E vah时至ah时",
            h: "M月d日E vah时至h时"
          },
          "MMMMd hv": {
            a: "M月d日 vah时至ah时",
            h: "M月d日 vah时至h时"
          },
          "y hv": {
            a: "y年 vah时至ah时",
            h: "y年 vah时至h时"
          },
          "yM hv": {
            a: "y/M vah时至ah时",
            h: "y/M vah时至h时"
          },
          "yMd hv": {
            a: "y/M/d vah时至ah时",
            h: "y/M/d vah时至h时"
          },
          "yMEd hv": {
            a: "y/M/dE vah时至ah时",
            h: "y/M/dE vah时至h时"
          },
          "yMEEEEd hv": {
            a: "y年M月d日EEEE vah时至ah时",
            h: "y年M月d日EEEE vah时至h时"
          },
          "yMM hv": {
            a: "y年M月 vah时至ah时",
            h: "y年M月 vah时至h时"
          },
          "yMMM hv": {
            a: "y年M月 vah时至ah时",
            h: "y年M月 vah时至h时"
          },
          "yMMMd hv": {
            a: "y年M月d日 vah时至ah时",
            h: "y年M月d日 vah时至h时"
          },
          "yMMMEd hv": {
            a: "y年M月d日E vah时至ah时",
            h: "y年M月d日E vah时至h时"
          },
          "yMMMM hv": {
            a: "y年M月 vah时至ah时",
            h: "y年M月 vah时至h时"
          },
          "y年M月d日EEEE Hv": {
            H: "y年M月d日EEEE v HH–HH"
          },
          "y年M月d日 Hv": {
            H: "y年M月d日 v HH–HH"
          },
          "y/M/d Hv": {
            H: "y/M/d v HH–HH"
          },
          "d Hv": {
            H: "d日 v HH–HH"
          },
          "E Hv": {
            H: "ccc v HH–HH"
          },
          "Ed Hv": {
            H: "d日E v HH–HH"
          },
          "Gy Hv": {
            H: "Gy年 v HH–HH"
          },
          "GyM Hv": {
            H: "Gy年M月 v HH–HH"
          },
          "GyMd Hv": {
            H: "Gy-MM-dd v HH–HH"
          },
          "GyMEd Hv": {
            H: "Gy-MM-ddE v HH–HH"
          },
          "GyMMM Hv": {
            H: "Gy年M月 v HH–HH"
          },
          "GyMMMd Hv": {
            H: "Gy年M月d日 v HH–HH"
          },
          "GyMMMEd Hv": {
            H: "Gy年M月d日E v HH–HH"
          },
          "M Hv": {
            H: "M月 v HH–HH"
          },
          "Md Hv": {
            H: "M/d v HH–HH"
          },
          "MEd Hv": {
            H: "M/dE v HH–HH"
          },
          "MMdd Hv": {
            H: "MM/dd v HH–HH"
          },
          "MMM Hv": {
            H: "LLL v HH–HH"
          },
          "MMMd Hv": {
            H: "M月d日 v HH–HH"
          },
          "MMMEd Hv": {
            H: "M月d日E v HH–HH"
          },
          "MMMMd Hv": {
            H: "M月d日 v HH–HH"
          },
          "y Hv": {
            H: "y年 v HH–HH"
          },
          "yM Hv": {
            H: "y/M v HH–HH"
          },
          "yMd Hv": {
            H: "y/M/d v HH–HH"
          },
          "yMEd Hv": {
            H: "y/M/dE v HH–HH"
          },
          "yMEEEEd Hv": {
            H: "y年M月d日EEEE v HH–HH"
          },
          "yMM Hv": {
            H: "y年M月 v HH–HH"
          },
          "yMMM Hv": {
            H: "y年M月 v HH–HH"
          },
          "yMMMd Hv": {
            H: "y年M月d日 v HH–HH"
          },
          "yMMMEd Hv": {
            H: "y年M月d日E v HH–HH"
          },
          "yMMMM Hv": {
            H: "y年M月 v HH–HH"
          }
        },
        hourCycle: "h23",
        nu: ["latn"],
        ca: ["gregory", "chinese"],
        hc: ["h23", "", "", "h12"]
      },
      locale: "zh"
    }), {};
  }();
});
