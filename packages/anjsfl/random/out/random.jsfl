(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["random"] = factory(require("lodash"));
	else
		root["random"] = factory(root["lodash"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__773__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 773:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__773__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
  random: function() { return /* reexport */ random; },
  symbolNameGenerator: function() { return /* reexport */ symbolNameGenerator; }
});

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(773);
;// ./src/random.ts
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var Random = (function () {
    function Random() {
        this._random = function () { return Math.random(); };
    }
    Random.prototype.setRandomGenerator = function (randomFn) {
        this._random = randomFn;
    };
    Random.prototype.randrange = function (start, stop, step) {
        if (step === void 0) { step = 1; }
        if (stop === undefined) {
            stop = start;
            start = 0;
        }
        if (step < 1) {
            throw new Error('Step must be 1 or greater');
        }
        var num = Math.floor(this._random() * Math.ceil((stop - start) / step));
        return start + num * step;
    };
    Random.prototype.randint = function (a, b) {
        return this.randrange(a, b + 1);
    };
    Random.prototype.choice = function (seq) {
        if (seq.length === 0) {
            throw new Error('Cannot choose from an empty sequence');
        }
        return seq[Math.floor(this._random() * seq.length)];
    };
    Random.prototype.choices = function (population, weights, cumWeights, k) {
        if (weights === void 0) { weights = null; }
        if (cumWeights === void 0) { cumWeights = null; }
        if (k === void 0) { k = 1; }
        if (k > population.length && weights === null && cumWeights === null) {
        }
        if (weights !== null) {
            if (cumWeights !== null) {
                throw new Error('Cannot specify both weights and cumWeights');
            }
            cumWeights = [];
            var total = 0;
            for (var _i = 0, weights_1 = weights; _i < weights_1.length; _i++) {
                var w = weights_1[_i];
                total += w;
                cumWeights.push(total);
            }
        }
        if (cumWeights !== null) {
            if (cumWeights.length !== population.length) {
                throw new Error('The number of weights does not match the population');
            }
            var result_1 = [];
            var totalWeight = cumWeights[cumWeights.length - 1];
            var _loop_1 = function (i) {
                var u = this_1._random() * totalWeight;
                var j = (0,external_lodash_.findIndex)(cumWeights, function (cw) { return cw >= u; });
                result_1.push(population[j]);
            };
            var this_1 = this;
            for (var i = 0; i < k; i++) {
                _loop_1(i);
            }
            return result_1;
        }
        var result = [];
        for (var i = 0; i < k; i++) {
            result.push(this.choice(population));
        }
        return result;
    };
    Random.prototype.shuffle = function (seq) {
        var _a;
        for (var i = seq.length - 1; i > 0; i--) {
            var j = Math.floor(this._random() * (i + 1));
            _a = [seq[j], seq[i]], seq[i] = _a[0], seq[j] = _a[1];
        }
        return seq;
    };
    Random.prototype.sample = function (population, k) {
        if (k > population.length) {
            throw new Error('Sample larger than population');
        }
        var pool = __spreadArray([], population, true);
        var result = [];
        for (var i = 0; i < k; i++) {
            var j = Math.floor(this._random() * pool.length);
            result.push(pool.splice(j, 1)[0]);
        }
        return result;
    };
    Random.prototype.uniform = function (a, b) {
        return a + (b - a) * this._random();
    };
    Random.prototype.gauss = function (mu, sigma) {
        var x, y, z;
        do {
            x = this.uniform(-1, 1);
            y = this.uniform(-1, 1);
            z = x * x + y * y;
        } while (z >= 1 || z === 0);
        var multiplier = Math.sqrt((-2 * Math.log(z)) / z);
        return mu + sigma * x * multiplier;
    };
    Random.prototype.expovariate = function (lambd) {
        if (lambd <= 0) {
            throw new Error('Lambda must be positive');
        }
        return -Math.log(1 - this._random()) / lambd;
    };
    Random.prototype.vonmisesvariate = function (mu, kappa) {
        if (kappa <= 0) {
            throw new Error('Kappa must be positive');
        }
        var s = 0;
        var r = 1;
        while (true) {
            var u = this._random();
            s += Math.log(1 - u) / kappa;
            if (s <= -Math.PI)
                break;
            r++;
        }
        return mu + Math.atan2(Math.sin(s), Math.cos(kappa * s));
    };
    Random.prototype.paretovariate = function (alpha) {
        if (alpha <= 0) {
            throw new Error('Alpha must be positive');
        }
        return 1 / Math.pow(this._random(), 1 / alpha);
    };
    Random.prototype.weibullvariate = function (alpha, beta) {
        if (alpha <= 0 || beta <= 0) {
            throw new Error('Alpha and beta must be positive');
        }
        return alpha * Math.pow(-Math.log(1 - this._random()), 1 / beta);
    };
    return Random;
}());
var random = new Random();

;// ./src/SymbolNameGenerator.ts


var PAD_DIGITS = 3;
var SymbolNameGenerator = (function () {
    function SymbolNameGenerator() {
        this.lastCount = this.generateRandomSuffix();
        this._lastName = '';
    }
    SymbolNameGenerator.prototype.generateRandomSuffix = function (digits) {
        if (digits === void 0) { digits = PAD_DIGITS; }
        var num = random.randint(1, Math.pow(10, digits) - 1);
        return (0,external_lodash_.padStart)(num.toString(), digits, '0');
    };
    Object.defineProperty(SymbolNameGenerator.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    SymbolNameGenerator.prototype.findDuplicateNameInLib = function (name) {
        var doc = fl.getDocumentDOM();
        if (!(doc === null || doc === void 0 ? void 0 : doc.library))
            return false;
        var items = doc.library.items;
        for (var i = 0; i < items.length; i++) {
            if (items[i].name === name) {
                return true;
            }
        }
        return false;
    };
    SymbolNameGenerator.prototype.generateUniqueName = function (baseName) {
        var attempts = 0;
        var name;
        do {
            this.lastCount = this.generateRandomSuffix();
            name = baseName + this.lastCount;
            attempts++;
            if (attempts > 10) {
                throw new Error("\u5DF2\u5C1D\u8BD5 ".concat(attempts, " \u6B21\uFF0C\u4ECD\u65E0\u6CD5\u751F\u6210\u552F\u4E00\u540D\u79F0\uFF01\u5F53\u524D\u540D\u79F0: ").concat(name));
            }
        } while (this.findDuplicateNameInLib(name));
        this._lastName = name;
        return name;
    };
    SymbolNameGenerator.prototype.generateUniqueNameWithCachedSuffix = function (baseName) {
        var name = baseName + this.lastCount;
        while (this.findDuplicateNameInLib(name)) {
            this.lastCount = this.generateRandomSuffix();
            name = baseName + this.lastCount;
        }
        this._lastName = name;
        return name;
    };
    return SymbolNameGenerator;
}());

var symbolNameGenerator = new SymbolNameGenerator();

;// ./src/index.ts



/******/ 	return __webpack_exports__;
/******/ })()
;
});