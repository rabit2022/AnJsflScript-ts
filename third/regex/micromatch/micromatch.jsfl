(function(){
 "use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function _iterableToArray(r) {if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return _iterableToArray(from) || to.concat(ar || Array.prototype.slice.call(from));
};
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory(require("util"), require("path-browserify"));
    else if (typeof define === 'function' && define.amd)
        define(["util", "path-browserify"], factory);
    else if (typeof exports === 'object')
        exports["packAll"] = factory(require("util"), require("path-browserify"));
    else
        root["packAll"] = factory(root["util"], root["path-browserify"]);
})(this, function (__WEBPACK_EXTERNAL_MODULE__24__, __WEBPACK_EXTERNAL_MODULE__248__) {
    return (function () {
        var __webpack_modules__ = ({
            24: (function (module) {
                "use strict";
                module.exports = __WEBPACK_EXTERNAL_MODULE__24__;
            }),
            28: (function (module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var util = __webpack_require__(24);
                var toRegexRange = __webpack_require__(54);
                var isObject = function (val) { return val !== null && typeof val === 'object' && !Array.isArray(val); };
                var transform = function (toNumber) {
                    return function (value) { return toNumber === true ? Number(value) : String(value); };
                };
                var isValidValue = function (value) {
                    return typeof value === 'number' || (typeof value === 'string' && value !== '');
                };
                var isNumber = function (num) { return Number.isInteger(+num); };
                var zeros = function (input) {
                    var value = "".concat(input);
                    var index = -1;
                    if (value[0] === '-')
                        value = value.slice(1);
                    if (value === '0')
                        return false;
                    while (value[++index] === '0')
                        ;
                    return index > 0;
                };
                var stringify = function (start, end, options) {
                    if (typeof start === 'string' || typeof end === 'string') {
                        return true;
                    }
                    return options.stringify === true;
                };
                var pad = function (input, maxLength, toNumber) {
                    if (maxLength > 0) {
                        var dash = input[0] === '-' ? '-' : '';
                        if (dash)
                            input = input.slice(1);
                        input = (dash + input.padStart(dash ? maxLength - 1 : maxLength, '0'));
                    }
                    if (toNumber === false) {
                        return String(input);
                    }
                    return input;
                };
                var toMaxLen = function (input, maxLength) {
                    var negative = input[0] === '-' ? '-' : '';
                    if (negative) {
                        input = input.slice(1);
                        maxLength--;
                    }
                    while (input.length < maxLength)
                        input = '0' + input;
                    return negative ? ('-' + input) : input;
                };
                var toSequence = function (parts, options, maxLen) {
                    parts.negatives.sort(function (a, b) { return a < b ? -1 : a > b ? 1 : 0; });
                    parts.positives.sort(function (a, b) { return a < b ? -1 : a > b ? 1 : 0; });
                    var prefix = options.capture ? '' : '?:';
                    var positives = '';
                    var negatives = '';
                    var result;
                    if (parts.positives.length) {
                        positives = parts.positives.map(function (v) { return toMaxLen(String(v), maxLen); }).join('|');
                    }
                    if (parts.negatives.length) {
                        negatives = "-(".concat(prefix).concat(parts.negatives.map(function (v) { return toMaxLen(String(v), maxLen); }).join('|'), ")");
                    }
                    if (positives && negatives) {
                        result = "".concat(positives, "|").concat(negatives);
                    }
                    else {
                        result = positives || negatives;
                    }
                    if (options.wrap) {
                        return "(".concat(prefix).concat(result, ")");
                    }
                    return result;
                };
                var toRange = function (a, b, isNumbers, options) {
                    if (isNumbers) {
                        return toRegexRange(a, b, __assign({ wrap: false }, options));
                    }
                    var start = String.fromCharCode(a);
                    if (a === b)
                        return start;
                    var stop = String.fromCharCode(b);
                    return "[".concat(start, "-").concat(stop, "]");
                };
                var toRegex = function (start, end, options) {
                    if (Array.isArray(start)) {
                        var wrap = options.wrap === true;
                        var prefix = options.capture ? '' : '?:';
                        return wrap ? "(".concat(prefix).concat(start.join('|'), ")") : start.join('|');
                    }
                    return toRegexRange(start, end, options);
                };
                var rangeError = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return new RangeError('Invalid range arguments: ' + util.inspect.apply(util, args));
                };
                var invalidRange = function (start, end, options) {
                    if (options.strictRanges === true)
                        throw rangeError([start, end]);
                    return [];
                };
                var invalidStep = function (step, options) {
                    if (options.strictRanges === true) {
                        throw new TypeError("Expected step \"".concat(step, "\" to be a number"));
                    }
                    return [];
                };
                var fillNumbers = function (start, end, step, options) {
                    if (step === void 0) { step = 1; }
                    if (options === void 0) { options = {}; }
                    var a = Number(start);
                    var b = Number(end);
                    if (!Number.isInteger(a) || !Number.isInteger(b)) {
                        if (options.strictRanges === true)
                            throw rangeError([start, end]);
                        return [];
                    }
                    if (a === 0)
                        a = 0;
                    if (b === 0)
                        b = 0;
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
                    var parts = { negatives: [], positives: [] };
                    var push = function (num) { return parts[num < 0 ? 'negatives' : 'positives'].push(Math.abs(num)); };
                    var range = [];
                    var index = 0;
                    while (descending ? a >= b : a <= b) {
                        if (options.toRegex === true && step > 1) {
                            push(a);
                        }
                        else {
                            range.push(pad(format(a, index), maxLen, toNumber));
                        }
                        a = descending ? a - step : a + step;
                        index++;
                    }
                    if (options.toRegex === true) {
                        return step > 1
                            ? toSequence(parts, options, maxLen)
                            : toRegex(range, null, __assign({ wrap: false }, options));
                    }
                    return range;
                };
                var fillLetters = function (start, end, step, options) {
                    if (step === void 0) { step = 1; }
                    if (options === void 0) { options = {}; }
                    if ((!isNumber(start) && start.length > 1) || (!isNumber(end) && end.length > 1)) {
                        return invalidRange(start, end, options);
                    }
                    var format = options.transform || (function (val) { return String.fromCharCode(val); });
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
                        return toRegex(range, null, { wrap: false, options: options });
                    }
                    return range;
                };
                var fill = function (start, end, step, options) {
                    if (options === void 0) { options = {}; }
                    if (end == null && isValidValue(start)) {
                        return [start];
                    }
                    if (!isValidValue(start) || !isValidValue(end)) {
                        return invalidRange(start, end, options);
                    }
                    if (typeof step === 'function') {
                        return fill(start, end, 1, { transform: step });
                    }
                    if (isObject(step)) {
                        return fill(start, end, 0, step);
                    }
                    var opts = __assign({}, options);
                    if (opts.capture === true)
                        opts.wrap = true;
                    step = step || opts.step || 1;
                    if (!isNumber(step)) {
                        if (step != null && !isObject(step))
                            return invalidStep(step, opts);
                        return fill(start, end, 1, step);
                    }
                    if (isNumber(start) && isNumber(end)) {
                        return fillNumbers(start, end, step, opts);
                    }
                    return fillLetters(start, end, Math.max(Math.abs(step), 1), opts);
                };
                module.exports = fill;
            }),
            54: (function (module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var isNumber = __webpack_require__(929);
                var toRegexRange = function (min, max, options) {
                    if (isNumber(min) === false) {
                        throw new TypeError('toRegexRange: expected the first argument to be a number');
                    }
                    if (max === void 0 || min === max) {
                        return String(min);
                    }
                    if (isNumber(max) === false) {
                        throw new TypeError('toRegexRange: expected the second argument to be a number.');
                    }
                    var opts = __assign({ relaxZeros: true }, options);
                    if (typeof opts.strictZeros === 'boolean') {
                        opts.relaxZeros = opts.strictZeros === false;
                    }
                    var relax = String(opts.relaxZeros);
                    var shorthand = String(opts.shorthand);
                    var capture = String(opts.capture);
                    var wrap = String(opts.wrap);
                    var cacheKey = min + ':' + max + '=' + relax + shorthand + capture + wrap;
                    if (toRegexRange.cache.hasOwnProperty(cacheKey)) {
                        return toRegexRange.cache[cacheKey].result;
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
                    var state = { min: min, max: max, a: a, b: b };
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
                    }
                    else if (opts.wrap !== false && (positives.length + negatives.length) > 1) {
                        state.result = "(?:".concat(state.result, ")");
                    }
                    toRegexRange.cache[cacheKey] = state;
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
                    stops = __spreadArray([], stops, true);
                    stops.sort(compare);
                    return stops;
                }
                function rangeToPattern(start, stop, options) {
                    if (start === stop) {
                        return { pattern: start, count: [], digits: 0 };
                    }
                    var zipped = zip(start, stop);
                    var digits = zipped.length;
                    var pattern = '';
                    var count = 0;
                    for (var i = 0; i < digits; i++) {
                        var _a = zipped[i], startDigit = _a[0], stopDigit = _a[1];
                        if (startDigit === stopDigit) {
                            pattern += startDigit;
                        }
                        else if (startDigit !== '0' || stopDigit !== '9') {
                            pattern += toCharacterClass(startDigit, stopDigit, options);
                        }
                        else {
                            count++;
                        }
                    }
                    if (count) {
                        pattern += options.shorthand === true ? '\\d' : '[0-9]';
                    }
                    return { pattern: pattern, count: [count], digits: digits };
                }
                function splitToPatterns(min, max, tok, options) {
                    var ranges = splitToRanges(min, max);
                    var tokens = [];
                    var start = min;
                    var prev;
                    for (var i = 0; i < ranges.length; i++) {
                        var max_1 = ranges[i];
                        var obj = rangeToPattern(String(start), String(max_1), options);
                        var zeros = '';
                        if (!tok.isPadded && prev && prev.pattern === obj.pattern) {
                            if (prev.count.length > 1) {
                                prev.count.pop();
                            }
                            prev.count.push(obj.count[0]);
                            prev.string = prev.pattern + toQuantifier(prev.count);
                            start = max_1 + 1;
                            continue;
                        }
                        if (tok.isPadded) {
                            zeros = padZeros(max_1, tok, options);
                        }
                        obj.string = zeros + obj.pattern + toQuantifier(obj.count);
                        tokens.push(obj);
                        start = max_1 + 1;
                        prev = obj;
                    }
                    return tokens;
                }
                function filterPatterns(arr, comparison, prefix, intersection, options) {
                    var result = [];
                    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                        var ele = arr_1[_i];
                        var string = ele.string;
                        if (!intersection && !contains(comparison, 'string', string)) {
                            result.push(prefix + string);
                        }
                        if (intersection && contains(comparison, 'string', string)) {
                            result.push(prefix + string);
                        }
                    }
                    return result;
                }
                function zip(a, b) {
                    var arr = [];
                    for (var i = 0; i < a.length; i++)
                        arr.push([a[i], b[i]]);
                    return arr;
                }
                function compare(a, b) {
                    return a > b ? 1 : b > a ? -1 : 0;
                }
                function contains(arr, key, val) {
                    return arr.some(function (ele) { return ele[key] === val; });
                }
                function countNines(min, len) {
                    return Number(String(min).slice(0, -len) + '9'.repeat(len));
                }
                function countZeros(integer, zeros) {
                    return integer - (integer % Math.pow(10, zeros));
                }
                function toQuantifier(digits) {
                    var _a = digits[0], start = _a === void 0 ? 0 : _a, _b = digits[1], stop = _b === void 0 ? '' : _b;
                    if (stop || start > 1) {
                        return "{".concat(start + (stop ? ',' + stop : ''), "}");
                    }
                    return '';
                }
                function toCharacterClass(a, b, options) {
                    return "[".concat(a).concat((b - a === 1) ? '' : '-').concat(b, "]");
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
                        default: {
                            return relax ? "0{0,".concat(diff, "}") : "0{".concat(diff, "}");
                        }
                    }
                }
                toRegexRange.cache = {};
                toRegexRange.clearCache = function () { return (toRegexRange.cache = {}); };
                module.exports = toRegexRange;
            }),
            154: (function (module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var constants = __webpack_require__(940);
                var utils = __webpack_require__(280);
                var MAX_LENGTH = constants.MAX_LENGTH, POSIX_REGEX_SOURCE = constants.POSIX_REGEX_SOURCE, REGEX_NON_SPECIAL_CHARS = constants.REGEX_NON_SPECIAL_CHARS, REGEX_SPECIAL_CHARS_BACKREF = constants.REGEX_SPECIAL_CHARS_BACKREF, REPLACEMENTS = constants.REPLACEMENTS;
                var expandRange = function (args, options) {
                    if (typeof options.expandRange === 'function') {
                        return options.expandRange.apply(options, __spreadArray(__spreadArray([], args, false), [options], false));
                    }
                    args.sort();
                    var value = "[".concat(args.join('-'), "]");
                    try {
                        new RegExp(value);
                    }
                    catch (ex) {
                        return args.map(function (v) { return utils.escapeRegex(v); }).join('..');
                    }
                    return value;
                };
                var syntaxError = function (type, char) {
                    return "Missing ".concat(type, ": \"").concat(char, "\" - use \"\\\\").concat(char, "\" to match literal characters");
                };
                var parse = function (input, options) {
                    if (typeof input !== 'string') {
                        throw new TypeError('Expected a string');
                    }
                    input = REPLACEMENTS[input] || input;
                    var opts = __assign({}, options);
                    var max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
                    var len = input.length;
                    if (len > max) {
                        throw new SyntaxError("Input length: ".concat(len, ", exceeds maximum allowed length: ").concat(max));
                    }
                    var bos = { type: 'bos', value: '', output: opts.prepend || '' };
                    var tokens = [bos];
                    var capture = opts.capture ? '' : '?:';
                    var win32 = utils.isWindows(options);
                    var PLATFORM_CHARS = constants.globChars(win32);
                    var EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);
                    var DOT_LITERAL = PLATFORM_CHARS.DOT_LITERAL, PLUS_LITERAL = PLATFORM_CHARS.PLUS_LITERAL, SLASH_LITERAL = PLATFORM_CHARS.SLASH_LITERAL, ONE_CHAR = PLATFORM_CHARS.ONE_CHAR, DOTS_SLASH = PLATFORM_CHARS.DOTS_SLASH, NO_DOT = PLATFORM_CHARS.NO_DOT, NO_DOT_SLASH = PLATFORM_CHARS.NO_DOT_SLASH, NO_DOTS_SLASH = PLATFORM_CHARS.NO_DOTS_SLASH, QMARK = PLATFORM_CHARS.QMARK, QMARK_NO_DOT = PLATFORM_CHARS.QMARK_NO_DOT, STAR = PLATFORM_CHARS.STAR, START_ANCHOR = PLATFORM_CHARS.START_ANCHOR;
                    var globstar = function (opts) {
                        return "(".concat(capture, "(?:(?!").concat(START_ANCHOR).concat(opts.dot ? DOTS_SLASH : DOT_LITERAL, ").)*?)");
                    };
                    var nodot = opts.dot ? '' : NO_DOT;
                    var qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
                    var star = opts.bash === true ? globstar(opts) : STAR;
                    if (opts.capture) {
                        star = "(".concat(star, ")");
                    }
                    if (typeof opts.noext === 'boolean') {
                        opts.noextglob = opts.noext;
                    }
                    var state = {
                        input: input,
                        index: -1,
                        start: 0,
                        dot: opts.dot === true,
                        consumed: '',
                        output: '',
                        prefix: '',
                        backtrack: false,
                        negated: false,
                        brackets: 0,
                        braces: 0,
                        parens: 0,
                        quotes: 0,
                        globstar: false,
                        tokens: tokens
                    };
                    input = utils.removePrefix(input, state);
                    len = input.length;
                    var extglobs = [];
                    var braces = [];
                    var stack = [];
                    var prev = bos;
                    var value;
                    var eos = function () { return state.index === len - 1; };
                    var peek = state.peek = function (n) {
                        if (n === void 0) { n = 1; }
                        return input[state.index + n];
                    };
                    var advance = state.advance = function () { return input[++state.index] || ''; };
                    var remaining = function () { return input.slice(state.index + 1); };
                    var consume = function (value, num) {
                        if (value === void 0) { value = ''; }
                        if (num === void 0) { num = 0; }
                        state.consumed += value;
                        state.index += num;
                    };
                    var append = function (token) {
                        state.output += token.output != null ? token.output : token.value;
                        consume(token.value);
                    };
                    var negate = function () {
                        var count = 1;
                        while (peek() === '!' && (peek(2) !== '(' || peek(3) === '?')) {
                            advance();
                            state.start++;
                            count++;
                        }
                        if (count % 2 === 0) {
                            return false;
                        }
                        state.negated = true;
                        state.start++;
                        return true;
                    };
                    var increment = function (type) {
                        state[type]++;
                        stack.push(type);
                    };
                    var decrement = function (type) {
                        state[type]--;
                        stack.pop();
                    };
                    var push = function (tok) {
                        if (prev.type === 'globstar') {
                            var isBrace = state.braces > 0 && (tok.type === 'comma' || tok.type === 'brace');
                            var isExtglob = tok.extglob === true || (extglobs.length && (tok.type === 'pipe' || tok.type === 'paren'));
                            if (tok.type !== 'slash' && tok.type !== 'paren' && !isBrace && !isExtglob) {
                                state.output = state.output.slice(0, -prev.output.length);
                                prev.type = 'star';
                                prev.value = '*';
                                prev.output = star;
                                state.output += prev.output;
                            }
                        }
                        if (extglobs.length && tok.type !== 'paren') {
                            extglobs[extglobs.length - 1].inner += tok.value;
                        }
                        if (tok.value || tok.output)
                            append(tok);
                        if (prev && prev.type === 'text' && tok.type === 'text') {
                            prev.value += tok.value;
                            prev.output = (prev.output || '') + tok.value;
                            return;
                        }
                        tok.prev = prev;
                        tokens.push(tok);
                        prev = tok;
                    };
                    var extglobOpen = function (type, value) {
                        var token = __assign(__assign({}, EXTGLOB_CHARS[value]), { conditions: 1, inner: '' });
                        token.prev = prev;
                        token.parens = state.parens;
                        token.output = state.output;
                        var output = (opts.capture ? '(' : '') + token.open;
                        increment('parens');
                        push({ type: type, value: value, output: state.output ? '' : ONE_CHAR });
                        push({ type: 'paren', extglob: true, value: advance(), output: output });
                        extglobs.push(token);
                    };
                    var extglobClose = function (token) {
                        var output = token.close + (opts.capture ? ')' : '');
                        var rest;
                        if (token.type === 'negate') {
                            var extglobStar = star;
                            if (token.inner && token.inner.length > 1 && token.inner.includes('/')) {
                                extglobStar = globstar(opts);
                            }
                            if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
                                output = token.close = ")$))".concat(extglobStar);
                            }
                            if (token.inner.includes('*') && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
                                var expression = parse(rest, __assign(__assign({}, options), { fastpaths: false })).output;
                                output = token.close = ")".concat(expression, ")").concat(extglobStar, ")");
                            }
                            if (token.prev.type === 'bos') {
                                state.negatedExtglob = true;
                            }
                        }
                        push({ type: 'paren', extglob: true, value: value, output: output });
                        decrement('parens');
                    };
                    if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
                        var backslashes_1 = false;
                        var output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, function (m, esc, chars, first, rest, index) {
                            if (first === '\\') {
                                backslashes_1 = true;
                                return m;
                            }
                            if (first === '?') {
                                if (esc) {
                                    return esc + first + (rest ? QMARK.repeat(rest.length) : '');
                                }
                                if (index === 0) {
                                    return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : '');
                                }
                                return QMARK.repeat(chars.length);
                            }
                            if (first === '.') {
                                return DOT_LITERAL.repeat(chars.length);
                            }
                            if (first === '*') {
                                if (esc) {
                                    return esc + first + (rest ? star : '');
                                }
                                return star;
                            }
                            return esc ? m : "\\".concat(m);
                        });
                        if (backslashes_1 === true) {
                            if (opts.unescape === true) {
                                output = output.replace(/\\/g, '');
                            }
                            else {
                                output = output.replace(/\\+/g, function (m) {
                                    return m.length % 2 === 0 ? '\\\\' : (m ? '\\' : '');
                                });
                            }
                        }
                        if (output === input && opts.contains === true) {
                            state.output = input;
                            return state;
                        }
                        state.output = utils.wrapOutput(output, state, options);
                        return state;
                    }
                    while (!eos()) {
                        value = advance();
                        if (value === '\u0000') {
                            continue;
                        }
                        if (value === '\\') {
                            var next = peek();
                            if (next === '/' && opts.bash !== true) {
                                continue;
                            }
                            if (next === '.' || next === ';') {
                                continue;
                            }
                            if (!next) {
                                value += '\\';
                                push({ type: 'text', value: value });
                                continue;
                            }
                            var match = /^\\+/.exec(remaining());
                            var slashes = 0;
                            if (match && match[0].length > 2) {
                                slashes = match[0].length;
                                state.index += slashes;
                                if (slashes % 2 !== 0) {
                                    value += '\\';
                                }
                            }
                            if (opts.unescape === true) {
                                value = advance();
                            }
                            else {
                                value += advance();
                            }
                            if (state.brackets === 0) {
                                push({ type: 'text', value: value });
                                continue;
                            }
                        }
                        if (state.brackets > 0 && (value !== ']' || prev.value === '[' || prev.value === '[^')) {
                            if (opts.posix !== false && value === ':') {
                                var inner = prev.value.slice(1);
                                if (inner.includes('[')) {
                                    prev.posix = true;
                                    if (inner.includes(':')) {
                                        var idx = prev.value.lastIndexOf('[');
                                        var pre = prev.value.slice(0, idx);
                                        var rest_1 = prev.value.slice(idx + 2);
                                        var posix = POSIX_REGEX_SOURCE[rest_1];
                                        if (posix) {
                                            prev.value = pre + posix;
                                            state.backtrack = true;
                                            advance();
                                            if (!bos.output && tokens.indexOf(prev) === 1) {
                                                bos.output = ONE_CHAR;
                                            }
                                            continue;
                                        }
                                    }
                                }
                            }
                            if ((value === '[' && peek() !== ':') || (value === '-' && peek() === ']')) {
                                value = "\\".concat(value);
                            }
                            if (value === ']' && (prev.value === '[' || prev.value === '[^')) {
                                value = "\\".concat(value);
                            }
                            if (opts.posix === true && value === '!' && prev.value === '[') {
                                value = '^';
                            }
                            prev.value += value;
                            append({ value: value });
                            continue;
                        }
                        if (state.quotes === 1 && value !== '"') {
                            value = utils.escapeRegex(value);
                            prev.value += value;
                            append({ value: value });
                            continue;
                        }
                        if (value === '"') {
                            state.quotes = state.quotes === 1 ? 0 : 1;
                            if (opts.keepQuotes === true) {
                                push({ type: 'text', value: value });
                            }
                            continue;
                        }
                        if (value === '(') {
                            increment('parens');
                            push({ type: 'paren', value: value });
                            continue;
                        }
                        if (value === ')') {
                            if (state.parens === 0 && opts.strictBrackets === true) {
                                throw new SyntaxError(syntaxError('opening', '('));
                            }
                            var extglob = extglobs[extglobs.length - 1];
                            if (extglob && state.parens === extglob.parens + 1) {
                                extglobClose(extglobs.pop());
                                continue;
                            }
                            push({ type: 'paren', value: value, output: state.parens ? ')' : '\\)' });
                            decrement('parens');
                            continue;
                        }
                        if (value === '[') {
                            if (opts.nobracket === true || !remaining().includes(']')) {
                                if (opts.nobracket !== true && opts.strictBrackets === true) {
                                    throw new SyntaxError(syntaxError('closing', ']'));
                                }
                                value = "\\".concat(value);
                            }
                            else {
                                increment('brackets');
                            }
                            push({ type: 'bracket', value: value });
                            continue;
                        }
                        if (value === ']') {
                            if (opts.nobracket === true || (prev && prev.type === 'bracket' && prev.value.length === 1)) {
                                push({ type: 'text', value: value, output: "\\".concat(value) });
                                continue;
                            }
                            if (state.brackets === 0) {
                                if (opts.strictBrackets === true) {
                                    throw new SyntaxError(syntaxError('opening', '['));
                                }
                                push({ type: 'text', value: value, output: "\\".concat(value) });
                                continue;
                            }
                            decrement('brackets');
                            var prevValue = prev.value.slice(1);
                            if (prev.posix !== true && prevValue[0] === '^' && !prevValue.includes('/')) {
                                value = "/".concat(value);
                            }
                            prev.value += value;
                            append({ value: value });
                            if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
                                continue;
                            }
                            var escaped = utils.escapeRegex(prev.value);
                            state.output = state.output.slice(0, -prev.value.length);
                            if (opts.literalBrackets === true) {
                                state.output += escaped;
                                prev.value = escaped;
                                continue;
                            }
                            prev.value = "(".concat(capture).concat(escaped, "|").concat(prev.value, ")");
                            state.output += prev.value;
                            continue;
                        }
                        if (value === '{' && opts.nobrace !== true) {
                            increment('braces');
                            var open = {
                                type: 'brace',
                                value: value,
                                output: '(',
                                outputIndex: state.output.length,
                                tokensIndex: state.tokens.length
                            };
                            braces.push(open);
                            push(open);
                            continue;
                        }
                        if (value === '}') {
                            var brace = braces[braces.length - 1];
                            if (opts.nobrace === true || !brace) {
                                push({ type: 'text', value: value, output: value });
                                continue;
                            }
                            var output = ')';
                            if (brace.dots === true) {
                                var arr = tokens.slice();
                                var range = [];
                                for (var i = arr.length - 1; i >= 0; i--) {
                                    tokens.pop();
                                    if (arr[i].type === 'brace') {
                                        break;
                                    }
                                    if (arr[i].type !== 'dots') {
                                        range.unshift(arr[i].value);
                                    }
                                }
                                output = expandRange(range, opts);
                                state.backtrack = true;
                            }
                            if (brace.comma !== true && brace.dots !== true) {
                                var out = state.output.slice(0, brace.outputIndex);
                                var toks = state.tokens.slice(brace.tokensIndex);
                                brace.value = brace.output = '\\{';
                                value = output = '\\}';
                                state.output = out;
                                for (var _i = 0, toks_1 = toks; _i < toks_1.length; _i++) {
                                    var t = toks_1[_i];
                                    state.output += (t.output || t.value);
                                }
                            }
                            push({ type: 'brace', value: value, output: output });
                            decrement('braces');
                            braces.pop();
                            continue;
                        }
                        if (value === '|') {
                            if (extglobs.length > 0) {
                                extglobs[extglobs.length - 1].conditions++;
                            }
                            push({ type: 'text', value: value });
                            continue;
                        }
                        if (value === ',') {
                            var output = value;
                            var brace = braces[braces.length - 1];
                            if (brace && stack[stack.length - 1] === 'braces') {
                                brace.comma = true;
                                output = '|';
                            }
                            push({ type: 'comma', value: value, output: output });
                            continue;
                        }
                        if (value === '/') {
                            if (prev.type === 'dot' && state.index === state.start + 1) {
                                state.start = state.index + 1;
                                state.consumed = '';
                                state.output = '';
                                tokens.pop();
                                prev = bos;
                                continue;
                            }
                            push({ type: 'slash', value: value, output: SLASH_LITERAL });
                            continue;
                        }
                        if (value === '.') {
                            if (state.braces > 0 && prev.type === 'dot') {
                                if (prev.value === '.')
                                    prev.output = DOT_LITERAL;
                                var brace = braces[braces.length - 1];
                                prev.type = 'dots';
                                prev.output += value;
                                prev.value += value;
                                brace.dots = true;
                                continue;
                            }
                            if ((state.braces + state.parens) === 0 && prev.type !== 'bos' && prev.type !== 'slash') {
                                push({ type: 'text', value: value, output: DOT_LITERAL });
                                continue;
                            }
                            push({ type: 'dot', value: value, output: DOT_LITERAL });
                            continue;
                        }
                        if (value === '?') {
                            var isGroup = prev && prev.value === '(';
                            if (!isGroup && opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
                                extglobOpen('qmark', value);
                                continue;
                            }
                            if (prev && prev.type === 'paren') {
                                var next = peek();
                                var output = value;
                                if (next === '<' && !utils.supportsLookbehinds()) {
                                    throw new Error('Node.js v10 or higher is required for regex lookbehinds');
                                }
                                if ((prev.value === '(' && !/[!=<:]/.test(next)) || (next === '<' && !/<([!=]|\w+>)/.test(remaining()))) {
                                    output = "\\".concat(value);
                                }
                                push({ type: 'text', value: value, output: output });
                                continue;
                            }
                            if (opts.dot !== true && (prev.type === 'slash' || prev.type === 'bos')) {
                                push({ type: 'qmark', value: value, output: QMARK_NO_DOT });
                                continue;
                            }
                            push({ type: 'qmark', value: value, output: QMARK });
                            continue;
                        }
                        if (value === '!') {
                            if (opts.noextglob !== true && peek() === '(') {
                                if (peek(2) !== '?' || !/[!=<:]/.test(peek(3))) {
                                    extglobOpen('negate', value);
                                    continue;
                                }
                            }
                            if (opts.nonegate !== true && state.index === 0) {
                                negate();
                                continue;
                            }
                        }
                        if (value === '+') {
                            if (opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
                                extglobOpen('plus', value);
                                continue;
                            }
                            if ((prev && prev.value === '(') || opts.regex === false) {
                                push({ type: 'plus', value: value, output: PLUS_LITERAL });
                                continue;
                            }
                            if ((prev && (prev.type === 'bracket' || prev.type === 'paren' || prev.type === 'brace')) || state.parens > 0) {
                                push({ type: 'plus', value: value });
                                continue;
                            }
                            push({ type: 'plus', value: PLUS_LITERAL });
                            continue;
                        }
                        if (value === '@') {
                            if (opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
                                push({ type: 'at', extglob: true, value: value, output: '' });
                                continue;
                            }
                            push({ type: 'text', value: value });
                            continue;
                        }
                        if (value !== '*') {
                            if (value === '$' || value === '^') {
                                value = "\\".concat(value);
                            }
                            var match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
                            if (match) {
                                value += match[0];
                                state.index += match[0].length;
                            }
                            push({ type: 'text', value: value });
                            continue;
                        }
                        if (prev && (prev.type === 'globstar' || prev.star === true)) {
                            prev.type = 'star';
                            prev.star = true;
                            prev.value += value;
                            prev.output = star;
                            state.backtrack = true;
                            state.globstar = true;
                            consume(value);
                            continue;
                        }
                        var rest = remaining();
                        if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
                            extglobOpen('star', value);
                            continue;
                        }
                        if (prev.type === 'star') {
                            if (opts.noglobstar === true) {
                                consume(value);
                                continue;
                            }
                            var prior = prev.prev;
                            var before = prior.prev;
                            var isStart = prior.type === 'slash' || prior.type === 'bos';
                            var afterStar = before && (before.type === 'star' || before.type === 'globstar');
                            if (opts.bash === true && (!isStart || (rest[0] && rest[0] !== '/'))) {
                                push({ type: 'star', value: value, output: '' });
                                continue;
                            }
                            var isBrace = state.braces > 0 && (prior.type === 'comma' || prior.type === 'brace');
                            var isExtglob = extglobs.length && (prior.type === 'pipe' || prior.type === 'paren');
                            if (!isStart && prior.type !== 'paren' && !isBrace && !isExtglob) {
                                push({ type: 'star', value: value, output: '' });
                                continue;
                            }
                            while (rest.slice(0, 3) === '/**') {
                                var after = input[state.index + 4];
                                if (after && after !== '/') {
                                    break;
                                }
                                rest = rest.slice(3);
                                consume('/**', 3);
                            }
                            if (prior.type === 'bos' && eos()) {
                                prev.type = 'globstar';
                                prev.value += value;
                                prev.output = globstar(opts);
                                state.output = prev.output;
                                state.globstar = true;
                                consume(value);
                                continue;
                            }
                            if (prior.type === 'slash' && prior.prev.type !== 'bos' && !afterStar && eos()) {
                                state.output = state.output.slice(0, -(prior.output + prev.output).length);
                                prior.output = "(?:".concat(prior.output);
                                prev.type = 'globstar';
                                prev.output = globstar(opts) + (opts.strictSlashes ? ')' : '|$)');
                                prev.value += value;
                                state.globstar = true;
                                state.output += prior.output + prev.output;
                                consume(value);
                                continue;
                            }
                            if (prior.type === 'slash' && prior.prev.type !== 'bos' && rest[0] === '/') {
                                var end = rest[1] !== void 0 ? '|$' : '';
                                state.output = state.output.slice(0, -(prior.output + prev.output).length);
                                prior.output = "(?:".concat(prior.output);
                                prev.type = 'globstar';
                                prev.output = "".concat(globstar(opts)).concat(SLASH_LITERAL, "|").concat(SLASH_LITERAL).concat(end, ")");
                                prev.value += value;
                                state.output += prior.output + prev.output;
                                state.globstar = true;
                                consume(value + advance());
                                push({ type: 'slash', value: '/', output: '' });
                                continue;
                            }
                            if (prior.type === 'bos' && rest[0] === '/') {
                                prev.type = 'globstar';
                                prev.value += value;
                                prev.output = "(?:^|".concat(SLASH_LITERAL, "|").concat(globstar(opts)).concat(SLASH_LITERAL, ")");
                                state.output = prev.output;
                                state.globstar = true;
                                consume(value + advance());
                                push({ type: 'slash', value: '/', output: '' });
                                continue;
                            }
                            state.output = state.output.slice(0, -prev.output.length);
                            prev.type = 'globstar';
                            prev.output = globstar(opts);
                            prev.value += value;
                            state.output += prev.output;
                            state.globstar = true;
                            consume(value);
                            continue;
                        }
                        var token = { type: 'star', value: value, output: star };
                        if (opts.bash === true) {
                            token.output = '.*?';
                            if (prev.type === 'bos' || prev.type === 'slash') {
                                token.output = nodot + token.output;
                            }
                            push(token);
                            continue;
                        }
                        if (prev && (prev.type === 'bracket' || prev.type === 'paren') && opts.regex === true) {
                            token.output = value;
                            push(token);
                            continue;
                        }
                        if (state.index === state.start || prev.type === 'slash' || prev.type === 'dot') {
                            if (prev.type === 'dot') {
                                state.output += NO_DOT_SLASH;
                                prev.output += NO_DOT_SLASH;
                            }
                            else if (opts.dot === true) {
                                state.output += NO_DOTS_SLASH;
                                prev.output += NO_DOTS_SLASH;
                            }
                            else {
                                state.output += nodot;
                                prev.output += nodot;
                            }
                            if (peek() !== '*') {
                                state.output += ONE_CHAR;
                                prev.output += ONE_CHAR;
                            }
                        }
                        push(token);
                    }
                    while (state.brackets > 0) {
                        if (opts.strictBrackets === true)
                            throw new SyntaxError(syntaxError('closing', ']'));
                        state.output = utils.escapeLast(state.output, '[');
                        decrement('brackets');
                    }
                    while (state.parens > 0) {
                        if (opts.strictBrackets === true)
                            throw new SyntaxError(syntaxError('closing', ')'));
                        state.output = utils.escapeLast(state.output, '(');
                        decrement('parens');
                    }
                    while (state.braces > 0) {
                        if (opts.strictBrackets === true)
                            throw new SyntaxError(syntaxError('closing', '}'));
                        state.output = utils.escapeLast(state.output, '{');
                        decrement('braces');
                    }
                    if (opts.strictSlashes !== true && (prev.type === 'star' || prev.type === 'bracket')) {
                        push({ type: 'maybe_slash', value: '', output: "".concat(SLASH_LITERAL, "?") });
                    }
                    if (state.backtrack === true) {
                        state.output = '';
                        for (var _a = 0, _b = state.tokens; _a < _b.length; _a++) {
                            var token = _b[_a];
                            state.output += token.output != null ? token.output : token.value;
                            if (token.suffix) {
                                state.output += token.suffix;
                            }
                        }
                    }
                    return state;
                };
                parse.fastpaths = function (input, options) {
                    var opts = __assign({}, options);
                    var max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
                    var len = input.length;
                    if (len > max) {
                        throw new SyntaxError("Input length: ".concat(len, ", exceeds maximum allowed length: ").concat(max));
                    }
                    input = REPLACEMENTS[input] || input;
                    var win32 = utils.isWindows(options);
                    var _a = constants.globChars(win32), DOT_LITERAL = _a.DOT_LITERAL, SLASH_LITERAL = _a.SLASH_LITERAL, ONE_CHAR = _a.ONE_CHAR, DOTS_SLASH = _a.DOTS_SLASH, NO_DOT = _a.NO_DOT, NO_DOTS = _a.NO_DOTS, NO_DOTS_SLASH = _a.NO_DOTS_SLASH, STAR = _a.STAR, START_ANCHOR = _a.START_ANCHOR;
                    var nodot = opts.dot ? NO_DOTS : NO_DOT;
                    var slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
                    var capture = opts.capture ? '' : '?:';
                    var state = { negated: false, prefix: '' };
                    var star = opts.bash === true ? '.*?' : STAR;
                    if (opts.capture) {
                        star = "(".concat(star, ")");
                    }
                    var globstar = function (opts) {
                        if (opts.noglobstar === true)
                            return star;
                        return "(".concat(capture, "(?:(?!").concat(START_ANCHOR).concat(opts.dot ? DOTS_SLASH : DOT_LITERAL, ").)*?)");
                    };
                    var create = function (str) {
                        switch (str) {
                            case '*':
                                return "".concat(nodot).concat(ONE_CHAR).concat(star);
                            case '.*':
                                return "".concat(DOT_LITERAL).concat(ONE_CHAR).concat(star);
                            case '*.*':
                                return "".concat(nodot).concat(star).concat(DOT_LITERAL).concat(ONE_CHAR).concat(star);
                            case '*/*':
                                return "".concat(nodot).concat(star).concat(SLASH_LITERAL).concat(ONE_CHAR).concat(slashDot).concat(star);
                            case '**':
                                return nodot + globstar(opts);
                            case '**/*':
                                return "(?:".concat(nodot).concat(globstar(opts)).concat(SLASH_LITERAL, ")?").concat(slashDot).concat(ONE_CHAR).concat(star);
                            case '**/*.*':
                                return "(?:".concat(nodot).concat(globstar(opts)).concat(SLASH_LITERAL, ")?").concat(slashDot).concat(star).concat(DOT_LITERAL).concat(ONE_CHAR).concat(star);
                            case '**/.*':
                                return "(?:".concat(nodot).concat(globstar(opts)).concat(SLASH_LITERAL, ")?").concat(DOT_LITERAL).concat(ONE_CHAR).concat(star);
                            default: {
                                var match = /^(.*?)\.(\w+)$/.exec(str);
                                if (!match)
                                    return;
                                var source_1 = create(match[1]);
                                if (!source_1)
                                    return;
                                return source_1 + DOT_LITERAL + match[2];
                            }
                        }
                    };
                    var output = utils.removePrefix(input, state);
                    var source = create(output);
                    if (source && opts.strictSlashes !== true) {
                        source += "".concat(SLASH_LITERAL, "?");
                    }
                    return source;
                };
                module.exports = parse;
            }),
            157: (function (module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                module.exports = __webpack_require__(675);
            }),
            248: (function (module) {
                "use strict";
                module.exports = __WEBPACK_EXTERNAL_MODULE__248__;
            }),
            280: (function (__unused_webpack_module, exports, __webpack_require__) {
                "use strict";
                var path = __webpack_require__(248);
                var win32 = process.platform === 'win32';
                var _a = __webpack_require__(940), REGEX_BACKSLASH = _a.REGEX_BACKSLASH, REGEX_REMOVE_BACKSLASH = _a.REGEX_REMOVE_BACKSLASH, REGEX_SPECIAL_CHARS = _a.REGEX_SPECIAL_CHARS, REGEX_SPECIAL_CHARS_GLOBAL = _a.REGEX_SPECIAL_CHARS_GLOBAL;
                exports.isObject = function (val) { return val !== null && typeof val === 'object' && !Array.isArray(val); };
                exports.hasRegexChars = function (str) { return REGEX_SPECIAL_CHARS.test(str); };
                exports.isRegexChar = function (str) { return str.length === 1 && exports.hasRegexChars(str); };
                exports.escapeRegex = function (str) { return str.replace(REGEX_SPECIAL_CHARS_GLOBAL, '\\$1'); };
                exports.toPosixSlashes = function (str) { return str.replace(REGEX_BACKSLASH, '/'); };
                exports.removeBackslashes = function (str) {
                    return str.replace(REGEX_REMOVE_BACKSLASH, function (match) {
                        return match === '\\' ? '' : match;
                    });
                };
                exports.supportsLookbehinds = function () {
                    var segs = process.version.slice(1).split('.').map(Number);
                    if (segs.length === 3 && segs[0] >= 9 || (segs[0] === 8 && segs[1] >= 10)) {
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
                    if (idx === -1)
                        return input;
                    if (input[idx - 1] === '\\')
                        return exports.escapeLast(input, char, idx - 1);
                    return "".concat(input.slice(0, idx), "\\").concat(input.slice(idx));
                };
                exports.removePrefix = function (input, state) {
                    if (state === void 0) { state = {}; }
                    var output = input;
                    if (output.startsWith('./')) {
                        output = output.slice(2);
                        state.prefix = './';
                    }
                    return output;
                };
                exports.wrapOutput = function (input, state, options) {
                    if (state === void 0) { state = {}; }
                    if (options === void 0) { options = {}; }
                    var prepend = options.contains ? '' : '^';
                    var append = options.contains ? '' : '$';
                    var output = "".concat(prepend, "(?:").concat(input, ")").concat(append);
                    if (state.negated === true) {
                        output = "(?:^(?!".concat(output, ").*$)");
                    }
                    return output;
                };
            }),
            537: (function (module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var stringify = __webpack_require__(720);
                var compile = __webpack_require__(712);
                var expand = __webpack_require__(697);
                var parse = __webpack_require__(598);
                var braces = function (input, options) {
                    if (options === void 0) { options = {}; }
                    var output = [];
                    if (Array.isArray(input)) {
                        for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
                            var pattern = input_1[_i];
                            var result = braces.create(pattern, options);
                            if (Array.isArray(result)) {
                                output.push.apply(output, result);
                            }
                            else {
                                output.push(result);
                            }
                        }
                    }
                    else {
                        output = [].concat(braces.create(input, options));
                    }
                    if (options && options.expand === true && options.nodupes === true) {
                        output = __spreadArray([], new Set(output), true);
                    }
                    return output;
                };
                braces.parse = function (input, options) {
                    if (options === void 0) { options = {}; }
                    return parse(input, options);
                };
                braces.stringify = function (input, options) {
                    if (options === void 0) { options = {}; }
                    if (typeof input === 'string') {
                        return stringify(braces.parse(input, options), options);
                    }
                    return stringify(input, options);
                };
                braces.compile = function (input, options) {
                    if (options === void 0) { options = {}; }
                    if (typeof input === 'string') {
                        input = braces.parse(input, options);
                    }
                    return compile(input, options);
                };
                braces.expand = function (input, options) {
                    if (options === void 0) { options = {}; }
                    if (typeof input === 'string') {
                        input = braces.parse(input, options);
                    }
                    var result = expand(input, options);
                    if (options.noempty === true) {
                        result = result.filter(Boolean);
                    }
                    if (options.nodupes === true) {
                        result = __spreadArray([], new Set(result), true);
                    }
                    return result;
                };
                braces.create = function (input, options) {
                    if (options === void 0) { options = {}; }
                    if (input === '' || input.length < 3) {
                        return [input];
                    }
                    return options.expand !== true
                        ? braces.compile(input, options)
                        : braces.expand(input, options);
                };
                module.exports = braces;
            }),
            598: (function (module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var stringify = __webpack_require__(720);
                var _a = __webpack_require__(776), MAX_LENGTH = _a.MAX_LENGTH, CHAR_BACKSLASH = _a.CHAR_BACKSLASH, CHAR_BACKTICK = _a.CHAR_BACKTICK, CHAR_COMMA = _a.CHAR_COMMA, CHAR_DOT = _a.CHAR_DOT, CHAR_LEFT_PARENTHESES = _a.CHAR_LEFT_PARENTHESES, CHAR_RIGHT_PARENTHESES = _a.CHAR_RIGHT_PARENTHESES, CHAR_LEFT_CURLY_BRACE = _a.CHAR_LEFT_CURLY_BRACE, CHAR_RIGHT_CURLY_BRACE = _a.CHAR_RIGHT_CURLY_BRACE, CHAR_LEFT_SQUARE_BRACKET = _a.CHAR_LEFT_SQUARE_BRACKET, CHAR_RIGHT_SQUARE_BRACKET = _a.CHAR_RIGHT_SQUARE_BRACKET, CHAR_DOUBLE_QUOTE = _a.CHAR_DOUBLE_QUOTE, CHAR_SINGLE_QUOTE = _a.CHAR_SINGLE_QUOTE, CHAR_NO_BREAK_SPACE = _a.CHAR_NO_BREAK_SPACE, CHAR_ZERO_WIDTH_NOBREAK_SPACE = _a.CHAR_ZERO_WIDTH_NOBREAK_SPACE;
                var parse = function (input, options) {
                    var _a;
                    if (options === void 0) { options = {}; }
                    if (typeof input !== 'string') {
                        throw new TypeError('Expected a string');
                    }
                    var opts = options || {};
                    var max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
                    if (input.length > max) {
                        throw new SyntaxError("Input length (".concat(input.length, "), exceeds max characters (").concat(max, ")"));
                    }
                    var ast = { type: 'root', input: input, nodes: [] };
                    var stack = [ast];
                    var block = ast;
                    var prev = ast;
                    var brackets = 0;
                    var length = input.length;
                    var index = 0;
                    var depth = 0;
                    var value;
                    var advance = function () { return input[index++]; };
                    var push = function (node) {
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
                    push({ type: 'bos' });
                    while (index < length) {
                        block = stack[stack.length - 1];
                        value = advance();
                        if (value === CHAR_ZERO_WIDTH_NOBREAK_SPACE || value === CHAR_NO_BREAK_SPACE) {
                            continue;
                        }
                        if (value === CHAR_BACKSLASH) {
                            push({ type: 'text', value: (options.keepEscaping ? value : '') + advance() });
                            continue;
                        }
                        if (value === CHAR_RIGHT_SQUARE_BRACKET) {
                            push({ type: 'text', value: '\\' + value });
                            continue;
                        }
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
                            push({ type: 'text', value: value });
                            continue;
                        }
                        if (value === CHAR_LEFT_PARENTHESES) {
                            block = push({ type: 'paren', nodes: [] });
                            stack.push(block);
                            push({ type: 'text', value: value });
                            continue;
                        }
                        if (value === CHAR_RIGHT_PARENTHESES) {
                            if (block.type !== 'paren') {
                                push({ type: 'text', value: value });
                                continue;
                            }
                            block = stack.pop();
                            push({ type: 'text', value: value });
                            block = stack[stack.length - 1];
                            continue;
                        }
                        if (value === CHAR_DOUBLE_QUOTE || value === CHAR_SINGLE_QUOTE || value === CHAR_BACKTICK) {
                            var open = value;
                            var next = void 0;
                            if (options.keepQuotes !== true) {
                                value = '';
                            }
                            while (index < length && (next = advance())) {
                                if (next === CHAR_BACKSLASH) {
                                    value += next + advance();
                                    continue;
                                }
                                if (next === open) {
                                    if (options.keepQuotes === true)
                                        value += next;
                                    break;
                                }
                                value += next;
                            }
                            push({ type: 'text', value: value });
                            continue;
                        }
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
                            push({ type: 'open', value: value });
                            continue;
                        }
                        if (value === CHAR_RIGHT_CURLY_BRACE) {
                            if (block.type !== 'brace') {
                                push({ type: 'text', value: value });
                                continue;
                            }
                            var type = 'close';
                            block = stack.pop();
                            block.close = true;
                            push({ type: type, value: value });
                            depth--;
                            block = stack[stack.length - 1];
                            continue;
                        }
                        if (value === CHAR_COMMA && depth > 0) {
                            if (block.ranges > 0) {
                                block.ranges = 0;
                                var open = block.nodes.shift();
                                block.nodes = [open, { type: 'text', value: stringify(block) }];
                            }
                            push({ type: 'comma', value: value });
                            block.commas++;
                            continue;
                        }
                        if (value === CHAR_DOT && depth > 0 && block.commas === 0) {
                            var siblings = block.nodes;
                            if (depth === 0 || siblings.length === 0) {
                                push({ type: 'text', value: value });
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
                            push({ type: 'dot', value: value });
                            continue;
                        }
                        push({ type: 'text', value: value });
                    }
                    do {
                        block = stack.pop();
                        if (block.type !== 'root') {
                            block.nodes.forEach(function (node) {
                                if (!node.nodes) {
                                    if (node.type === 'open')
                                        node.isOpen = true;
                                    if (node.type === 'close')
                                        node.isClose = true;
                                    if (!node.nodes)
                                        node.type = 'text';
                                    node.invalid = true;
                                }
                            });
                            var parent = stack[stack.length - 1];
                            var index_1 = parent.nodes.indexOf(block);
                            (_a = parent.nodes).splice.apply(_a, __spreadArray([index_1, 1], block.nodes, false));
                        }
                    } while (stack.length > 0);
                    push({ type: 'eos' });
                    return ast;
                };
                module.exports = parse;
            }),
            608: (function (module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var utils = __webpack_require__(280);
                var _a = __webpack_require__(940), CHAR_ASTERISK = _a.CHAR_ASTERISK, CHAR_AT = _a.CHAR_AT, CHAR_BACKWARD_SLASH = _a.CHAR_BACKWARD_SLASH, CHAR_COMMA = _a.CHAR_COMMA, CHAR_DOT = _a.CHAR_DOT, CHAR_EXCLAMATION_MARK = _a.CHAR_EXCLAMATION_MARK, CHAR_FORWARD_SLASH = _a.CHAR_FORWARD_SLASH, CHAR_LEFT_CURLY_BRACE = _a.CHAR_LEFT_CURLY_BRACE, CHAR_LEFT_PARENTHESES = _a.CHAR_LEFT_PARENTHESES, CHAR_LEFT_SQUARE_BRACKET = _a.CHAR_LEFT_SQUARE_BRACKET, CHAR_PLUS = _a.CHAR_PLUS, CHAR_QUESTION_MARK = _a.CHAR_QUESTION_MARK, CHAR_RIGHT_CURLY_BRACE = _a.CHAR_RIGHT_CURLY_BRACE, CHAR_RIGHT_PARENTHESES = _a.CHAR_RIGHT_PARENTHESES, CHAR_RIGHT_SQUARE_BRACKET = _a.CHAR_RIGHT_SQUARE_BRACKET;
                var isPathSeparator = function (code) {
                    return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
                };
                var depth = function (token) {
                    if (token.isPrefix !== true) {
                        token.depth = token.isGlobstar ? Infinity : 1;
                    }
                };
                var scan = function (input, options) {
                    var opts = options || {};
                    var length = input.length - 1;
                    var scanToEnd = opts.parts === true || opts.scanToEnd === true;
                    var slashes = [];
                    var tokens = [];
                    var parts = [];
                    var str = input;
                    var index = -1;
                    var start = 0;
                    var lastIndex = 0;
                    var isBrace = false;
                    var isBracket = false;
                    var isGlob = false;
                    var isExtglob = false;
                    var isGlobstar = false;
                    var braceEscaped = false;
                    var backslashes = false;
                    var negated = false;
                    var negatedExtglob = false;
                    var finished = false;
                    var braces = 0;
                    var prev;
                    var code;
                    var token = { value: '', depth: 0, isGlob: false };
                    var eos = function () { return index >= length; };
                    var peek = function () { return str.charCodeAt(index + 1); };
                    var advance = function () {
                        prev = code;
                        return str.charCodeAt(++index);
                    };
                    while (index < length) {
                        code = advance();
                        var next = void 0;
                        if (code === CHAR_BACKWARD_SLASH) {
                            backslashes = token.backslashes = true;
                            code = advance();
                            if (code === CHAR_LEFT_CURLY_BRACE) {
                                braceEscaped = true;
                            }
                            continue;
                        }
                        if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
                            braces++;
                            while (eos() !== true && (code = advance())) {
                                if (code === CHAR_BACKWARD_SLASH) {
                                    backslashes = token.backslashes = true;
                                    advance();
                                    continue;
                                }
                                if (code === CHAR_LEFT_CURLY_BRACE) {
                                    braces++;
                                    continue;
                                }
                                if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
                                    isBrace = token.isBrace = true;
                                    isGlob = token.isGlob = true;
                                    finished = true;
                                    if (scanToEnd === true) {
                                        continue;
                                    }
                                    break;
                                }
                                if (braceEscaped !== true && code === CHAR_COMMA) {
                                    isBrace = token.isBrace = true;
                                    isGlob = token.isGlob = true;
                                    finished = true;
                                    if (scanToEnd === true) {
                                        continue;
                                    }
                                    break;
                                }
                                if (code === CHAR_RIGHT_CURLY_BRACE) {
                                    braces--;
                                    if (braces === 0) {
                                        braceEscaped = false;
                                        isBrace = token.isBrace = true;
                                        finished = true;
                                        break;
                                    }
                                }
                            }
                            if (scanToEnd === true) {
                                continue;
                            }
                            break;
                        }
                        if (code === CHAR_FORWARD_SLASH) {
                            slashes.push(index);
                            tokens.push(token);
                            token = { value: '', depth: 0, isGlob: false };
                            if (finished === true)
                                continue;
                            if (prev === CHAR_DOT && index === (start + 1)) {
                                start += 2;
                                continue;
                            }
                            lastIndex = index + 1;
                            continue;
                        }
                        if (opts.noext !== true) {
                            var isExtglobChar = code === CHAR_PLUS
                                || code === CHAR_AT
                                || code === CHAR_ASTERISK
                                || code === CHAR_QUESTION_MARK
                                || code === CHAR_EXCLAMATION_MARK;
                            if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
                                isGlob = token.isGlob = true;
                                isExtglob = token.isExtglob = true;
                                finished = true;
                                if (code === CHAR_EXCLAMATION_MARK && index === start) {
                                    negatedExtglob = true;
                                }
                                if (scanToEnd === true) {
                                    while (eos() !== true && (code = advance())) {
                                        if (code === CHAR_BACKWARD_SLASH) {
                                            backslashes = token.backslashes = true;
                                            code = advance();
                                            continue;
                                        }
                                        if (code === CHAR_RIGHT_PARENTHESES) {
                                            isGlob = token.isGlob = true;
                                            finished = true;
                                            break;
                                        }
                                    }
                                    continue;
                                }
                                break;
                            }
                        }
                        if (code === CHAR_ASTERISK) {
                            if (prev === CHAR_ASTERISK)
                                isGlobstar = token.isGlobstar = true;
                            isGlob = token.isGlob = true;
                            finished = true;
                            if (scanToEnd === true) {
                                continue;
                            }
                            break;
                        }
                        if (code === CHAR_QUESTION_MARK) {
                            isGlob = token.isGlob = true;
                            finished = true;
                            if (scanToEnd === true) {
                                continue;
                            }
                            break;
                        }
                        if (code === CHAR_LEFT_SQUARE_BRACKET) {
                            while (eos() !== true && (next = advance())) {
                                if (next === CHAR_BACKWARD_SLASH) {
                                    backslashes = token.backslashes = true;
                                    advance();
                                    continue;
                                }
                                if (next === CHAR_RIGHT_SQUARE_BRACKET) {
                                    isBracket = token.isBracket = true;
                                    isGlob = token.isGlob = true;
                                    finished = true;
                                    break;
                                }
                            }
                            if (scanToEnd === true) {
                                continue;
                            }
                            break;
                        }
                        if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
                            negated = token.negated = true;
                            start++;
                            continue;
                        }
                        if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
                            isGlob = token.isGlob = true;
                            if (scanToEnd === true) {
                                while (eos() !== true && (code = advance())) {
                                    if (code === CHAR_LEFT_PARENTHESES) {
                                        backslashes = token.backslashes = true;
                                        code = advance();
                                        continue;
                                    }
                                    if (code === CHAR_RIGHT_PARENTHESES) {
                                        finished = true;
                                        break;
                                    }
                                }
                                continue;
                            }
                            break;
                        }
                        if (isGlob === true) {
                            finished = true;
                            if (scanToEnd === true) {
                                continue;
                            }
                            break;
                        }
                    }
                    if (opts.noext === true) {
                        isExtglob = false;
                        isGlob = false;
                    }
                    var base = str;
                    var prefix = '';
                    var glob = '';
                    if (start > 0) {
                        prefix = str.slice(0, start);
                        str = str.slice(start);
                        lastIndex -= start;
                    }
                    if (base && isGlob === true && lastIndex > 0) {
                        base = str.slice(0, lastIndex);
                        glob = str.slice(lastIndex);
                    }
                    else if (isGlob === true) {
                        base = '';
                        glob = str;
                    }
                    else {
                        base = str;
                    }
                    if (base && base !== '' && base !== '/' && base !== str) {
                        if (isPathSeparator(base.charCodeAt(base.length - 1))) {
                            base = base.slice(0, -1);
                        }
                    }
                    if (opts.unescape === true) {
                        if (glob)
                            glob = utils.removeBackslashes(glob);
                        if (base && backslashes === true) {
                            base = utils.removeBackslashes(base);
                        }
                    }
                    var state = {
                        prefix: prefix,
                        input: input,
                        start: start,
                        base: base,
                        glob: glob,
                        isBrace: isBrace,
                        isBracket: isBracket,
                        isGlob: isGlob,
                        isExtglob: isExtglob,
                        isGlobstar: isGlobstar,
                        negated: negated,
                        negatedExtglob: negatedExtglob
                    };
                    if (opts.tokens === true) {
                        state.maxDepth = 0;
                        if (!isPathSeparator(code)) {
                            tokens.push(token);
                        }
                        state.tokens = tokens;
                    }
                    if (opts.parts === true || opts.tokens === true) {
                        var prevIndex = void 0;
                        for (var idx = 0; idx < slashes.length; idx++) {
                            var n = prevIndex ? prevIndex + 1 : start;
                            var i = slashes[idx];
                            var value = input.slice(n, i);
                            if (opts.tokens) {
                                if (idx === 0 && start !== 0) {
                                    tokens[idx].isPrefix = true;
                                    tokens[idx].value = prefix;
                                }
                                else {
                                    tokens[idx].value = value;
                                }
                                depth(tokens[idx]);
                                state.maxDepth += tokens[idx].depth;
                            }
                            if (idx !== 0 || value !== '') {
                                parts.push(value);
                            }
                            prevIndex = i;
                        }
                        if (prevIndex && prevIndex + 1 < input.length) {
                            var value = input.slice(prevIndex + 1);
                            parts.push(value);
                            if (opts.tokens) {
                                tokens[tokens.length - 1].value = value;
                                depth(tokens[tokens.length - 1]);
                                state.maxDepth += tokens[tokens.length - 1].depth;
                            }
                        }
                        state.slashes = slashes;
                        state.parts = parts;
                    }
                    return state;
                };
                module.exports = scan;
            }),
            612: (function (__unused_webpack_module, exports) {
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
                exports.find = function (node, type) { return node.nodes.find(function (node) { return node.type === type; }); };
                exports.exceedsLimit = function (min, max, step, limit) {
                    if (step === void 0) { step = 1; }
                    if (limit === false)
                        return false;
                    if (!exports.isInteger(min) || !exports.isInteger(max))
                        return false;
                    return ((Number(max) - Number(min)) / Number(step)) >= limit;
                };
                exports.escapeNode = function (block, n, type) {
                    if (n === void 0) { n = 0; }
                    var node = block.nodes[n];
                    if (!node)
                        return;
                    if ((type && node.type === type) || node.type === 'open' || node.type === 'close') {
                        if (node.escaped !== true) {
                            node.value = '\\' + node.value;
                            node.escaped = true;
                        }
                    }
                };
                exports.encloseBrace = function (node) {
                    if (node.type !== 'brace')
                        return false;
                    if ((node.commas >> 0 + node.ranges >> 0) === 0) {
                        node.invalid = true;
                        return true;
                    }
                    return false;
                };
                exports.isInvalidBrace = function (block) {
                    if (block.type !== 'brace')
                        return false;
                    if (block.invalid === true || block.dollar)
                        return true;
                    if ((block.commas >> 0 + block.ranges >> 0) === 0) {
                        block.invalid = true;
                        return true;
                    }
                    if (block.open !== true || block.close !== true) {
                        block.invalid = true;
                        return true;
                    }
                    return false;
                };
                exports.isOpenOrClose = function (node) {
                    if (node.type === 'open' || node.type === 'close') {
                        return true;
                    }
                    return node.open === true || node.close === true;
                };
                exports.reduce = function (nodes) { return nodes.reduce(function (acc, node) {
                    if (node.type === 'text')
                        acc.push(node.value);
                    if (node.type === 'range')
                        node.type = 'text';
                    return acc;
                }, []); };
                exports.flatten = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var result = [];
                    var flat = function (arr) {
                        for (var i = 0; i < arr.length; i++) {
                            var ele = arr[i];
                            if (Array.isArray(ele)) {
                                flat(ele);
                                continue;
                            }
                            if (ele !== undefined) {
                                result.push(ele);
                            }
                        }
                        return result;
                    };
                    flat(args);
                    return result;
                };
            }),
            628: (function (module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var util = __webpack_require__(24);
                var braces = __webpack_require__(537);
                var picomatch = __webpack_require__(157);
                var utils = __webpack_require__(280);
                var isEmptyString = function (v) { return v === '' || v === './'; };
                var hasBraces = function (v) {
                    var index = v.indexOf('{');
                    return index > -1 && v.indexOf('}', index) > -1;
                };
                var micromatch = function (list, patterns, options) {
                    patterns = [].concat(patterns);
                    list = [].concat(list);
                    var omit = new Set();
                    var keep = new Set();
                    var items = new Set();
                    var negatives = 0;
                    var onResult = function (state) {
                        items.add(state.output);
                        if (options && options.onResult) {
                            options.onResult(state);
                        }
                    };
                    for (var i = 0; i < patterns.length; i++) {
                        var isMatch = picomatch(String(patterns[i]), __assign(__assign({}, options), { onResult: onResult }), true);
                        var negated = isMatch.state.negated || isMatch.state.negatedExtglob;
                        if (negated)
                            negatives++;
                        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                            var item = list_1[_i];
                            var matched = isMatch(item, true);
                            var match = negated ? !matched.isMatch : matched.isMatch;
                            if (!match)
                                continue;
                            if (negated) {
                                omit.add(matched.output);
                            }
                            else {
                                omit.delete(matched.output);
                                keep.add(matched.output);
                            }
                        }
                    }
                    var result = negatives === patterns.length ? __spreadArray([], items, true) : __spreadArray([], keep, true);
                    var matches = result.filter(function (item) { return !omit.has(item); });
                    if (options && matches.length === 0) {
                        if (options.failglob === true) {
                            throw new Error("No matches found for \"".concat(patterns.join(', '), "\""));
                        }
                        if (options.nonull === true || options.nullglob === true) {
                            return options.unescape ? patterns.map(function (p) { return p.replace(/\\/g, ''); }) : patterns;
                        }
                    }
                    return matches;
                };
                micromatch.match = micromatch;
                micromatch.matcher = function (pattern, options) { return picomatch(pattern, options); };
                micromatch.isMatch = function (str, patterns, options) { return picomatch(patterns, options)(str); };
                micromatch.any = micromatch.isMatch;
                micromatch.not = function (list, patterns, options) {
                    if (options === void 0) { options = {}; }
                    patterns = [].concat(patterns).map(String);
                    var result = new Set();
                    var items = [];
                    var onResult = function (state) {
                        if (options.onResult)
                            options.onResult(state);
                        items.push(state.output);
                    };
                    var matches = new Set(micromatch(list, patterns, __assign(__assign({}, options), { onResult: onResult })));
                    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                        var item = items_1[_i];
                        if (!matches.has(item)) {
                            result.add(item);
                        }
                    }
                    return __spreadArray([], result, true);
                };
                micromatch.contains = function (str, pattern, options) {
                    if (typeof str !== 'string') {
                        throw new TypeError("Expected a string: \"".concat(util.inspect(str), "\""));
                    }
                    if (Array.isArray(pattern)) {
                        return pattern.some(function (p) { return micromatch.contains(str, p, options); });
                    }
                    if (typeof pattern === 'string') {
                        if (isEmptyString(str) || isEmptyString(pattern)) {
                            return false;
                        }
                        if (str.includes(pattern) || (str.startsWith('./') && str.slice(2).includes(pattern))) {
                            return true;
                        }
                    }
                    return micromatch.isMatch(str, pattern, __assign(__assign({}, options), { contains: true }));
                };
                micromatch.matchKeys = function (obj, patterns, options) {
                    if (!utils.isObject(obj)) {
                        throw new TypeError('Expected the first argument to be an object');
                    }
                    var keys = micromatch(Object.keys(obj), patterns, options);
                    var res = {};
                    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                        var key = keys_1[_i];
                        res[key] = obj[key];
                    }
                    return res;
                };
                micromatch.some = function (list, patterns, options) {
                    var items = [].concat(list);
                    var _loop_1 = function (pattern) {
                        var isMatch = picomatch(String(pattern), options);
                        if (items.some(function (item) { return isMatch(item); })) {
                            return { value: true };
                        }
                    };
                    for (var _i = 0, _a = [].concat(patterns); _i < _a.length; _i++) {
                        var pattern = _a[_i];
                        var state_1 = _loop_1(pattern);
                        if (typeof state_1 === "object")
                            return state_1.value;
                    }
                    return false;
                };
                micromatch.every = function (list, patterns, options) {
                    var items = [].concat(list);
                    var _loop_2 = function (pattern) {
                        var isMatch = picomatch(String(pattern), options);
                        if (!items.every(function (item) { return isMatch(item); })) {
                            return { value: false };
                        }
                    };
                    for (var _i = 0, _a = [].concat(patterns); _i < _a.length; _i++) {
                        var pattern = _a[_i];
                        var state_2 = _loop_2(pattern);
                        if (typeof state_2 === "object")
                            return state_2.value;
                    }
                    return true;
                };
                micromatch.all = function (str, patterns, options) {
                    if (typeof str !== 'string') {
                        throw new TypeError("Expected a string: \"".concat(util.inspect(str), "\""));
                    }
                    return [].concat(patterns).every(function (p) { return picomatch(p, options)(str); });
                };
                micromatch.capture = function (glob, input, options) {
                    var posix = utils.isWindows(options);
                    var regex = picomatch.makeRe(String(glob), __assign(__assign({}, options), { capture: true }));
                    var match = regex.exec(posix ? utils.toPosixSlashes(input) : input);
                    if (match) {
                        return match.slice(1).map(function (v) { return v === void 0 ? '' : v; });
                    }
                };
                micromatch.makeRe = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return picomatch.makeRe.apply(picomatch, args);
                };
                micromatch.scan = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return picomatch.scan.apply(picomatch, args);
                };
                micromatch.parse = function (patterns, options) {
                    var res = [];
                    for (var _i = 0, _a = [].concat(patterns || []); _i < _a.length; _i++) {
                        var pattern = _a[_i];
                        for (var _b = 0, _c = braces(String(pattern), options); _b < _c.length; _b++) {
                            var str = _c[_b];
                            res.push(picomatch.parse(str, options));
                        }
                    }
                    return res;
                };
                micromatch.braces = function (pattern, options) {
                    if (typeof pattern !== 'string')
                        throw new TypeError('Expected a string');
                    if ((options && options.nobrace === true) || !hasBraces(pattern)) {
                        return [pattern];
                    }
                    return braces(pattern, options);
                };
                micromatch.braceExpand = function (pattern, options) {
                    if (typeof pattern !== 'string')
                        throw new TypeError('Expected a string');
                    return micromatch.braces(pattern, __assign(__assign({}, options), { expand: true }));
                };
                micromatch.hasBraces = hasBraces;
                module.exports = micromatch;
            }),
            675: (function (module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var path = __webpack_require__(248);
                var scan = __webpack_require__(608);
                var parse = __webpack_require__(154);
                var utils = __webpack_require__(280);
                var constants = __webpack_require__(940);
                var isObject = function (val) { return val && typeof val === 'object' && !Array.isArray(val); };
                var picomatch = function (glob, options, returnState) {
                    if (returnState === void 0) { returnState = false; }
                    if (Array.isArray(glob)) {
                        var fns_1 = glob.map(function (input) { return picomatch(input, options, returnState); });
                        var arrayMatcher = function (str) {
                            for (var _i = 0, fns_2 = fns_1; _i < fns_2.length; _i++) {
                                var isMatch = fns_2[_i];
                                var state_3 = isMatch(str);
                                if (state_3)
                                    return state_3;
                            }
                            return false;
                        };
                        return arrayMatcher;
                    }
                    var isState = isObject(glob) && glob.tokens && glob.input;
                    if (glob === '' || (typeof glob !== 'string' && !isState)) {
                        throw new TypeError('Expected pattern to be a non-empty string');
                    }
                    var opts = options || {};
                    var posix = utils.isWindows(options);
                    var regex = isState
                        ? picomatch.compileRe(glob, options)
                        : picomatch.makeRe(glob, options, false, true);
                    var state = regex.state;
                    delete regex.state;
                    var isIgnored = function () { return false; };
                    if (opts.ignore) {
                        var ignoreOpts = __assign(__assign({}, options), { ignore: null, onMatch: null, onResult: null });
                        isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
                    }
                    var matcher = function (input, returnObject) {
                        if (returnObject === void 0) { returnObject = false; }
                        var _a = picomatch.test(input, regex, options, { glob: glob, posix: posix }), isMatch = _a.isMatch, match = _a.match, output = _a.output;
                        var result = { glob: glob, state: state, regex: regex, posix: posix, input: input, output: output, match: match, isMatch: isMatch };
                        if (typeof opts.onResult === 'function') {
                            opts.onResult(result);
                        }
                        if (isMatch === false) {
                            result.isMatch = false;
                            return returnObject ? result : false;
                        }
                        if (isIgnored(input)) {
                            if (typeof opts.onIgnore === 'function') {
                                opts.onIgnore(result);
                            }
                            result.isMatch = false;
                            return returnObject ? result : false;
                        }
                        if (typeof opts.onMatch === 'function') {
                            opts.onMatch(result);
                        }
                        return returnObject ? result : true;
                    };
                    if (returnState) {
                        matcher.state = state;
                    }
                    return matcher;
                };
                picomatch.test = function (input, regex, options, _a) {
                    var _b = _a === void 0 ? {} : _a, glob = _b.glob, posix = _b.posix;
                    if (typeof input !== 'string') {
                        throw new TypeError('Expected input to be a string');
                    }
                    if (input === '') {
                        return { isMatch: false, output: '' };
                    }
                    var opts = options || {};
                    var format = opts.format || (posix ? utils.toPosixSlashes : null);
                    var match = input === glob;
                    var output = (match && format) ? format(input) : input;
                    if (match === false) {
                        output = format ? format(input) : input;
                        match = output === glob;
                    }
                    if (match === false || opts.capture === true) {
                        if (opts.matchBase === true || opts.basename === true) {
                            match = picomatch.matchBase(input, regex, options, posix);
                        }
                        else {
                            match = regex.exec(output);
                        }
                    }
                    return { isMatch: Boolean(match), match: match, output: output };
                };
                picomatch.matchBase = function (input, glob, options, posix) {
                    if (posix === void 0) { posix = utils.isWindows(options); }
                    var regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
                    return regex.test(path.basename(input));
                };
                picomatch.isMatch = function (str, patterns, options) { return picomatch(patterns, options)(str); };
                picomatch.parse = function (pattern, options) {
                    if (Array.isArray(pattern))
                        return pattern.map(function (p) { return picomatch.parse(p, options); });
                    return parse(pattern, __assign(__assign({}, options), { fastpaths: false }));
                };
                picomatch.scan = function (input, options) { return scan(input, options); };
                picomatch.compileRe = function (state, options, returnOutput, returnState) {
                    if (returnOutput === void 0) { returnOutput = false; }
                    if (returnState === void 0) { returnState = false; }
                    if (returnOutput === true) {
                        return state.output;
                    }
                    var opts = options || {};
                    var prepend = opts.contains ? '' : '^';
                    var append = opts.contains ? '' : '$';
                    var source = "".concat(prepend, "(?:").concat(state.output, ")").concat(append);
                    if (state && state.negated === true) {
                        source = "^(?!".concat(source, ").*$");
                    }
                    var regex = picomatch.toRegex(source, options);
                    if (returnState === true) {
                        regex.state = state;
                    }
                    return regex;
                };
                picomatch.makeRe = function (input, options, returnOutput, returnState) {
                    if (options === void 0) { options = {}; }
                    if (returnOutput === void 0) { returnOutput = false; }
                    if (returnState === void 0) { returnState = false; }
                    if (!input || typeof input !== 'string') {
                        throw new TypeError('Expected a non-empty string');
                    }
                    var parsed = { negated: false, fastpaths: true };
                    if (options.fastpaths !== false && (input[0] === '.' || input[0] === '*')) {
                        parsed.output = parse.fastpaths(input, options);
                    }
                    if (!parsed.output) {
                        parsed = parse(input, options);
                    }
                    return picomatch.compileRe(parsed, options, returnOutput, returnState);
                };
                picomatch.toRegex = function (source, options) {
                    try {
                        var opts = options || {};
                        return new RegExp(source, opts.flags || (opts.nocase ? 'i' : ''));
                    }
                    catch (err) {
                        if (options && options.debug === true)
                            throw err;
                        return /$^/;
                    }
                };
                picomatch.constants = constants;
                module.exports = picomatch;
            }),
            697: (function (module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var fill = __webpack_require__(28);
                var stringify = __webpack_require__(720);
                var utils = __webpack_require__(612);
                var append = function (queue, stash, enclose) {
                    if (queue === void 0) { queue = ''; }
                    if (stash === void 0) { stash = ''; }
                    if (enclose === void 0) { enclose = false; }
                    var result = [];
                    queue = [].concat(queue);
                    stash = [].concat(stash);
                    if (!stash.length)
                        return queue;
                    if (!queue.length) {
                        return enclose ? utils.flatten(stash).map(function (ele) { return "{".concat(ele, "}"); }) : stash;
                    }
                    for (var _i = 0, queue_1 = queue; _i < queue_1.length; _i++) {
                        var item = queue_1[_i];
                        if (Array.isArray(item)) {
                            for (var _a = 0, item_1 = item; _a < item_1.length; _a++) {
                                var value = item_1[_a];
                                result.push(append(value, stash, enclose));
                            }
                        }
                        else {
                            for (var _b = 0, stash_1 = stash; _b < stash_1.length; _b++) {
                                var ele = stash_1[_b];
                                if (enclose === true && typeof ele === 'string')
                                    ele = "{".concat(ele, "}");
                                result.push(Array.isArray(ele) ? append(item, ele, enclose) : item + ele);
                            }
                        }
                    }
                    return utils.flatten(result);
                };
                var expand = function (ast, options) {
                    if (options === void 0) { options = {}; }
                    var rangeLimit = options.rangeLimit === undefined ? 1000 : options.rangeLimit;
                    var walk = function (node, parent) {
                        if (parent === void 0) { parent = {}; }
                        node.queue = [];
                        var p = parent;
                        var q = parent.queue;
                        while (p.type !== 'brace' && p.type !== 'root' && p.parent) {
                            p = p.parent;
                            q = p.queue;
                        }
                        if (node.invalid || node.dollar) {
                            q.push(append(q.pop(), stringify(node, options)));
                            return;
                        }
                        if (node.type === 'brace' && node.invalid !== true && node.nodes.length === 2) {
                            q.push(append(q.pop(), ['{}']));
                            return;
                        }
                        if (node.nodes && node.ranges > 0) {
                            var args = utils.reduce(node.nodes);
                            if (utils.exceedsLimit.apply(utils, __spreadArray(__spreadArray([], args, false), [options.step, rangeLimit], false))) {
                                throw new RangeError('expanded array length exceeds range limit. Use options.rangeLimit to increase or disable the limit.');
                            }
                            var range = fill.apply(void 0, __spreadArray(__spreadArray([], args, false), [options], false));
                            if (range.length === 0) {
                                range = stringify(node, options);
                            }
                            q.push(append(q.pop(), range));
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
                                if (i === 1)
                                    queue.push('');
                                queue.push('');
                                continue;
                            }
                            if (child.type === 'close') {
                                q.push(append(q.pop(), queue, enclose));
                                continue;
                            }
                            if (child.value && child.type !== 'open') {
                                queue.push(append(queue.pop(), child.value));
                                continue;
                            }
                            if (child.nodes) {
                                walk(child, node);
                            }
                        }
                        return queue;
                    };
                    return utils.flatten(walk(ast));
                };
                module.exports = expand;
            }),
            712: (function (module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var fill = __webpack_require__(28);
                var utils = __webpack_require__(612);
                var compile = function (ast, options) {
                    if (options === void 0) { options = {}; }
                    var walk = function (node, parent) {
                        if (parent === void 0) { parent = {}; }
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
                            var range = fill.apply(void 0, __spreadArray(__spreadArray([], args, false), [__assign(__assign({}, options), { wrap: false, toRegex: true, strictZeros: true })], false));
                            if (range.length !== 0) {
                                return args.length > 1 && range.length > 1 ? "(".concat(range, ")") : range;
                            }
                        }
                        if (node.nodes) {
                            for (var _i = 0, _a = node.nodes; _i < _a.length; _i++) {
                                var child = _a[_i];
                                output += walk(child, node);
                            }
                        }
                        return output;
                    };
                    return walk(ast);
                };
                module.exports = compile;
            }),
            720: (function (module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var utils = __webpack_require__(612);
                module.exports = function (ast, options) {
                    if (options === void 0) { options = {}; }
                    var stringify = function (node, parent) {
                        if (parent === void 0) { parent = {}; }
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
                            for (var _i = 0, _a = node.nodes; _i < _a.length; _i++) {
                                var child = _a[_i];
                                output += stringify(child);
                            }
                        }
                        return output;
                    };
                    return stringify(ast);
                };
            }),
            776: (function (module) {
                "use strict";
                module.exports = {
                    MAX_LENGTH: 10000,
                    CHAR_0: '0',
                    CHAR_9: '9',
                    CHAR_UPPERCASE_A: 'A',
                    CHAR_LOWERCASE_A: 'a',
                    CHAR_UPPERCASE_Z: 'Z',
                    CHAR_LOWERCASE_Z: 'z',
                    CHAR_LEFT_PARENTHESES: '(',
                    CHAR_RIGHT_PARENTHESES: ')',
                    CHAR_ASTERISK: '*',
                    CHAR_AMPERSAND: '&',
                    CHAR_AT: '@',
                    CHAR_BACKSLASH: '\\',
                    CHAR_BACKTICK: '`',
                    CHAR_CARRIAGE_RETURN: '\r',
                    CHAR_CIRCUMFLEX_ACCENT: '^',
                    CHAR_COLON: ':',
                    CHAR_COMMA: ',',
                    CHAR_DOLLAR: '$',
                    CHAR_DOT: '.',
                    CHAR_DOUBLE_QUOTE: '"',
                    CHAR_EQUAL: '=',
                    CHAR_EXCLAMATION_MARK: '!',
                    CHAR_FORM_FEED: '\f',
                    CHAR_FORWARD_SLASH: '/',
                    CHAR_HASH: '#',
                    CHAR_HYPHEN_MINUS: '-',
                    CHAR_LEFT_ANGLE_BRACKET: '<',
                    CHAR_LEFT_CURLY_BRACE: '{',
                    CHAR_LEFT_SQUARE_BRACKET: '[',
                    CHAR_LINE_FEED: '\n',
                    CHAR_NO_BREAK_SPACE: '\u00A0',
                    CHAR_PERCENT: '%',
                    CHAR_PLUS: '+',
                    CHAR_QUESTION_MARK: '?',
                    CHAR_RIGHT_ANGLE_BRACKET: '>',
                    CHAR_RIGHT_CURLY_BRACE: '}',
                    CHAR_RIGHT_SQUARE_BRACKET: ']',
                    CHAR_SEMICOLON: ';',
                    CHAR_SINGLE_QUOTE: '\'',
                    CHAR_SPACE: ' ',
                    CHAR_TAB: '\t',
                    CHAR_UNDERSCORE: '_',
                    CHAR_VERTICAL_LINE: '|',
                    CHAR_ZERO_WIDTH_NOBREAK_SPACE: '\uFEFF'
                };
            }),
            929: (function (module) {
                "use strict";
                module.exports = function (num) {
                    if (typeof num === 'number') {
                        return num - num === 0;
                    }
                    if (typeof num === 'string' && num.trim() !== '') {
                        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
                    }
                    return false;
                };
            }),
            940: (function (module, __unused_webpack_exports, __webpack_require__) {
                "use strict";
                var path = __webpack_require__(248);
                var WIN_SLASH = '\\\\/';
                var WIN_NO_SLASH = "[^".concat(WIN_SLASH, "]");
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
                var WINDOWS_CHARS = __assign(__assign({}, POSIX_CHARS), { SLASH_LITERAL: "[".concat(WIN_SLASH, "]"), QMARK: WIN_NO_SLASH, STAR: "".concat(WIN_NO_SLASH, "*?"), DOTS_SLASH: "".concat(DOT_LITERAL, "{1,2}(?:[").concat(WIN_SLASH, "]|$)"), NO_DOT: "(?!".concat(DOT_LITERAL, ")"), NO_DOTS: "(?!(?:^|[".concat(WIN_SLASH, "])").concat(DOT_LITERAL, "{1,2}(?:[").concat(WIN_SLASH, "]|$))"), NO_DOT_SLASH: "(?!".concat(DOT_LITERAL, "{0,1}(?:[").concat(WIN_SLASH, "]|$))"), NO_DOTS_SLASH: "(?!".concat(DOT_LITERAL, "{1,2}(?:[").concat(WIN_SLASH, "]|$))"), QMARK_NO_DOT: "[^.".concat(WIN_SLASH, "]"), START_ANCHOR: "(?:^|[".concat(WIN_SLASH, "])"), END_ANCHOR: "(?:[".concat(WIN_SLASH, "]|$)") });
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
                    REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
                    REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
                    REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
                    REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
                    REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
                    REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
                    REPLACEMENTS: {
                        '***': '*',
                        '**/**': '**',
                        '**/**/**': '**'
                    },
                    CHAR_0: 48,
                    CHAR_9: 57,
                    CHAR_UPPERCASE_A: 65,
                    CHAR_LOWERCASE_A: 97,
                    CHAR_UPPERCASE_Z: 90,
                    CHAR_LOWERCASE_Z: 122,
                    CHAR_LEFT_PARENTHESES: 40,
                    CHAR_RIGHT_PARENTHESES: 41,
                    CHAR_ASTERISK: 42,
                    CHAR_AMPERSAND: 38,
                    CHAR_AT: 64,
                    CHAR_BACKWARD_SLASH: 92,
                    CHAR_CARRIAGE_RETURN: 13,
                    CHAR_CIRCUMFLEX_ACCENT: 94,
                    CHAR_COLON: 58,
                    CHAR_COMMA: 44,
                    CHAR_DOT: 46,
                    CHAR_DOUBLE_QUOTE: 34,
                    CHAR_EQUAL: 61,
                    CHAR_EXCLAMATION_MARK: 33,
                    CHAR_FORM_FEED: 12,
                    CHAR_FORWARD_SLASH: 47,
                    CHAR_GRAVE_ACCENT: 96,
                    CHAR_HASH: 35,
                    CHAR_HYPHEN_MINUS: 45,
                    CHAR_LEFT_ANGLE_BRACKET: 60,
                    CHAR_LEFT_CURLY_BRACE: 123,
                    CHAR_LEFT_SQUARE_BRACKET: 91,
                    CHAR_LINE_FEED: 10,
                    CHAR_NO_BREAK_SPACE: 160,
                    CHAR_PERCENT: 37,
                    CHAR_PLUS: 43,
                    CHAR_QUESTION_MARK: 63,
                    CHAR_RIGHT_ANGLE_BRACKET: 62,
                    CHAR_RIGHT_CURLY_BRACE: 125,
                    CHAR_RIGHT_SQUARE_BRACKET: 93,
                    CHAR_SEMICOLON: 59,
                    CHAR_SINGLE_QUOTE: 39,
                    CHAR_SPACE: 32,
                    CHAR_TAB: 9,
                    CHAR_UNDERSCORE: 95,
                    CHAR_VERTICAL_LINE: 124,
                    CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
                    SEP: path.sep,
                    extglobChars: function (chars) {
                        return {
                            '!': { type: 'negate', open: '(?:(?!(?:', close: "))".concat(chars.STAR, ")") },
                            '?': { type: 'qmark', open: '(?:', close: ')?' },
                            '+': { type: 'plus', open: '(?:', close: ')+' },
                            '*': { type: 'star', open: '(?:', close: ')*' },
                            '@': { type: 'at', open: '(?:', close: ')' }
                        };
                    },
                    globChars: function (win32) {
                        return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
                    }
                };
            }),
            956: (function (module, __unused_webpack_exports, __webpack_require__) {
                module.exports = __webpack_require__(628);
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