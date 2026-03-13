(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["overload-js"] = factory();
	else
		root["overload-js"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  overload: function() { return /* reexport */ overload; }
});

;// ./src/runtime/Dispatcher.ts
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Dispatcher = (function () {
    function Dispatcher(self, parent) {
        this.self = self;
        this.parent = parent;
    }
    Dispatcher.prototype.dispatch = function (ctx, args) {
        var all = this.collect();
        var bestScore = -1;
        var best = null;
        for (var _i = 0, all_1 = all; _i < all_1.length; _i++) {
            var m = all_1[_i];
            var s = m.match(args);
            if (s > bestScore) {
                bestScore = s;
                best = m;
            }
        }
        if (best) {
            return best.invoke(ctx, args);
        }
        if (this.self.errorFn) {
            return this.self.errorFn.apply(ctx, args);
        }
        if (this.parent) {
            return this.parent.dispatch(ctx, args);
        }
        throw new Error('No overload matched');
    };
    Dispatcher.prototype.collect = function () {
        var own = this.self.mappings;
        var parent = this.parent ? this.parent.collect() : [];
        return __spreadArray(__spreadArray([], own, true), parent, true);
    };
    return Dispatcher;
}());


;// ./src/model/Score.ts
var SCORE = {
    FAIL: -1,
    LEN_BASE: 100,
    ARG_BASE: 200,
    MAP_BASE: 150,
    EXACT_TYPE: 20,
    CUSTOM: 10,
    WILD: 1,
};

;// ./src/matcher/Custom.ts
var Custom = (function () {
    function Custom(check, name) {
        this.check = check;
        this.name = name;
    }
    Custom.prototype.toString = function () {
        return this.name
            ? "[Type ".concat(this.name, "]")
            : '[CustomType]';
    };
    return Custom;
}());


;// ./src/matcher/Type.ts
function isNaNValue(v) {
    return typeof v === 'number' && Number.isNaN(v);
}
function isInfinity(v) {
    return v === Infinity || v === -Infinity;
}
function getCtor(v) {
    if (v === null)
        return null;
    if (v === undefined)
        return undefined;
    return v.constructor;
}

;// ./src/matcher/ArgMatcher.ts



function matchArg(rule, value) {
    if (rule === undefined) {
        return SCORE.WILD;
    }
    if (rule instanceof Custom) {
        return rule.check(value) ? SCORE.CUSTOM : SCORE.FAIL;
    }
    if (rule === Number && isNaNValue(value)) {
        return SCORE.EXACT_TYPE;
    }
    if (rule === Number && isInfinity(value)) {
        return SCORE.EXACT_TYPE;
    }
    var ctor = getCtor(value);
    if (ctor === rule) {
        return SCORE.EXACT_TYPE;
    }
    return SCORE.FAIL;
}

;// ./src/model/ArgMapping.ts


var ArgMapping = (function () {
    function ArgMapping(params, fn) {
        this.params = params;
        this.fn = fn;
        this.type = 'args';
        this.priority = SCORE.ARG_BASE;
    }
    ArgMapping.prototype.match = function (args) {
        if (args.length !== this.params.length)
            return -1;
        var score = this.priority;
        for (var i = 0; i < args.length; i++) {
            var s = matchArg(this.params[i], args[i]);
            if (s < 0)
                return -1;
            score += s;
        }
        return score;
    };
    ArgMapping.prototype.invoke = function (ctx, args) {
        return this.fn.apply(ctx, args);
    };
    return ArgMapping;
}());


;// ./src/matcher/LenMatcher.ts

function matchLen(expected, args) {
    return args.length === expected
        ? SCORE.LEN_BASE
        : SCORE.FAIL;
}

;// ./src/model/LenMapping.ts


var LenMapping = (function () {
    function LenMapping(len, fn) {
        this.len = len;
        this.fn = fn;
        this.type = 'len';
        this.priority = SCORE.LEN_BASE;
    }
    LenMapping.prototype.match = function (args) {
        return matchLen(this.len, args);
    };
    LenMapping.prototype.invoke = function (ctx, args) {
        return this.fn.apply(ctx, args);
    };
    return LenMapping;
}());


;// ./src/matcher/MapMatcher.ts


function matchMap(rule, arg) {
    if (typeof arg !== 'object' || arg == null)
        return SCORE.FAIL;
    var score = SCORE.MAP_BASE;
    for (var k in rule) {
        if (!(k in arg))
            return SCORE.FAIL;
        var s = matchArg(rule[k], arg[k]);
        if (s < 0)
            return SCORE.FAIL;
        score += s;
    }
    return score;
}

;// ./src/model/MapMapping.ts


var MapMapping = (function () {
    function MapMapping(rule, fn) {
        this.rule = rule;
        this.fn = fn;
        this.type = 'map';
        this.priority = SCORE.MAP_BASE;
    }
    MapMapping.prototype.match = function (args) {
        if (!args.length)
            return -1;
        return matchMap(this.rule, args[0]);
    };
    MapMapping.prototype.invoke = function (ctx, args) {
        return this.fn.apply(ctx, args);
    };
    return MapMapping;
}());


;// ./src/core/Overload.ts




var Overload = (function () {
    function Overload(parent) {
        this.mappings = [];
        this.dispatcher = new Dispatcher(this, parent === null || parent === void 0 ? void 0 : parent.dispatcher);
    }
    Overload.prototype.args = function () {
        var rules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rules[_i] = arguments[_i];
        }
        this.pending = { type: 'args', value: rules };
        return this;
    };
    Overload.prototype.len = function (n) {
        this.pending = { type: 'len', value: n };
        return this;
    };
    Overload.prototype.map = function (rule) {
        this.pending = { type: 'map', value: rule };
        return this;
    };
    Overload.prototype.use = function (fn) {
        if (!this.pending) {
            throw new Error('use() must follow args / len / map');
        }
        switch (this.pending.type) {
            case 'args':
                this.mappings.push(new ArgMapping(this.pending.value, fn));
                break;
            case 'len':
                this.mappings.push(new LenMapping(this.pending.value, fn));
                break;
            case 'map':
                this.mappings.push(new MapMapping(this.pending.value, fn));
                break;
        }
        this.pending = undefined;
        return this._caller;
    };
    Overload.prototype.error = function (fn) {
        this.errorFn = fn;
        return this._caller;
    };
    Overload.prototype.fallback = function (fn) {
        this.fallbackFn = fn;
        return this._caller;
    };
    Overload.prototype.call = function (ctx, args) {
        try {
            return this.dispatcher.dispatch(ctx, args);
        }
        catch (_a) {
            if (this.fallbackFn)
                return this.fallbackFn.apply(ctx, args);
            if (this.errorFn)
                return this.errorFn.apply(ctx, args);
            throw new Error('overload: no methods matched');
        }
    };
    Overload.prototype.expose = function () {
        var self = this;
        var fn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return self.call(self, args);
        };
        return fn;
    };
    return Overload;
}());


;// ./src/runtime/createCaller.ts
function createCaller(ov) {
    var caller = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return ov.call(this, args);
    };
    ov._caller = caller;
    caller.args = ov.args.bind(ov);
    caller.len = ov.len.bind(ov);
    caller.map = ov.map.bind(ov);
    caller.use = ov.use.bind(ov);
    caller.error = ov.error.bind(ov);
    caller.fallback = ov.fallback.bind(ov);
    caller.expose = ov.expose.bind(ov);
    return caller;
}

;// ./src/operators/normalize.ts
function normalizeRules(input) {
    if (Array.isArray(input))
        return input.map(normalizeRules);
    if (typeof input === 'object' && input !== null) {
        var out = {};
        for (var k in input) {
            out[k] = normalizeRules(input[k]);
        }
        return out;
    }
    return input;
}

;// ./src/operators/matchAny.ts
function matchAny(rules, val) {
    for (var _i = 0, rules_1 = rules; _i < rules_1.length; _i++) {
        var r = rules_1[_i];
        if (r instanceof Object && typeof r.check === 'function') {
            if (r.check(val))
                return true;
        }
        else if (val != null && val.constructor === r) {
            return true;
        }
    }
    return false;
}

;// ./src/operators/matchMap_op.ts
function matchMap_op(config, target) {
    if (typeof target !== 'object' || target == null)
        return false;
    for (var k in config) {
        if (!(k in target))
            return false;
        var rule = config[k];
        var val = target[k];
        if (rule instanceof Object && typeof rule.check === 'function') {
            if (!rule.check(val))
                return false;
        }
        else if ((val === null || val === void 0 ? void 0 : val.constructor) !== rule) {
            return false;
        }
    }
    return true;
}

;// ./src/operators/operators.ts
var __assign = (undefined && undefined.__assign) || function () {
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




var operator = {
    wild: new Custom(function () { return true; }),
    truthy: new Custom(function (val) { return !!val === true; }),
    falsy: new Custom(function (val) { return !!val === false; }),
    any: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var rules = normalizeRules(args);
        return new Custom(function (val) { return matchAny(rules, val); });
    },
    except: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var rules = normalizeRules(args);
        return new Custom(function (val) { return !matchAny(rules, val); });
    },
    map: function (map) {
        var config = normalizeRules(map);
        return new Custom(function (val) { return matchMap_op(config, val); });
    },
    instanceOf: function (Ctor) {
        return new Custom(function (val) { return val instanceof Ctor; });
    },
};
var common = {
    number: new Custom(function (val) {
        return typeof val === 'number' && !Number.isNaN(val);
    }),
    string: new Custom(function (val) {
        return typeof val === 'string';
    }),
    boolean: new Custom(function (val) {
        return typeof val === 'boolean';
    }),
    bigint: new Custom(function (val) {
        return typeof val === 'bigint';
    }),
    symbol: new Custom(function (val) {
        return typeof val === 'symbol';
    }),
    undefined: new Custom(function (val) {
        return val === undefined;
    }),
    null: new Custom(function (val) {
        return val === null;
    }),
    int: new Custom(function (val) {
        return typeof val === 'number' && Number.isInteger(val);
    }),
    finite: new Custom(function (val) {
        return typeof val === 'number' && Number.isFinite(val);
    }),
    nan: new Custom(function (val) {
        return Number.isNaN(val);
    }),
    array: new Custom(function (val) {
        return Array.isArray(val);
    }),
    object: new Custom(function (val) {
        return val !== null && typeof val === 'object' && !Array.isArray(val);
    }),
    func: new Custom(function (val) {
        return typeof val === 'function';
    }),
    date: new Custom(function (val) {
        return val instanceof Date && !Number.isNaN(val.getTime());
    }),
    regexp: new Custom(function (val) {
        return val instanceof RegExp;
    }),
    promise: new Custom(function (val) {
        return val instanceof Promise;
    }),
    defined: new Custom(function (val) {
        return val !== null && val !== undefined;
    }),
};
var o = __assign(__assign({}, operator), common);

;// ./src/registry/Registry.ts


var Registry = (function () {
    function Registry() {
    }
    Registry.define = function (name, check) {
        var c = new Custom(check);
        o[name] = c;
        return c;
    };
    Registry.defineTypes = function (map) {
        for (var k in map) {
            this.define(k, map[k]);
        }
    };
    return Registry;
}());
var RegistryAPI = {
    define: Registry.define.bind(Registry),
    defineType: Registry.define.bind(Registry),
    defineTypes: Registry.defineTypes.bind(Registry),
};

;// ./src/api/overload.ts




var root = new Overload();
var rootCaller = createCaller(root);
function overloadFactory(parent) {
    return createCaller(new Overload(parent));
}
var overload = Object.assign(overloadFactory, rootCaller, RegistryAPI, { o: o });

;// ./src/index.ts


/******/ 	return __webpack_exports__;
/******/ })()
;
});