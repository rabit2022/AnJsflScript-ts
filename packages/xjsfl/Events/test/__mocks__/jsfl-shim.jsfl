require(function() { return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.fl = void 0;
    var eventListeners = {
        'mouseMove': [],
        'documentChanged': [],
    };
    exports.fl = {
        addEventListener: function (type, handler) {
            console.log("[MOCK] addEventListener: ".concat(type));
            var id = Date.now() + Math.random();
            var normalizedType = type.toLowerCase().includes('mouse') ? 'mouseMove' : type;
            eventListeners[normalizedType] = eventListeners[normalizedType] || [];
            eventListeners[normalizedType].push({ id: id, handler: handler });
            return id;
        },
        removeEventListener: function (type, id) {
            var normalizedType = type.toLowerCase().includes('mouse') ? 'mouseMove' : type;
            if (eventListeners[normalizedType]) {
                eventListeners[normalizedType] = eventListeners[normalizedType].filter(function (l) { return l.id !== id; });
            }
            console.log("[MOCK] removeEventListener: ".concat(type, ", id=").concat(id));
        },
        __triggerMouseMove: function (x, y, opts) {
            if (opts === void 0) { opts = {}; }
            var _a = opts.shift, shift = _a === void 0 ? false : _a, _b = opts.ctrl, ctrl = _b === void 0 ? false : _b, _c = opts.alt, alt = _c === void 0 ? false : _c;
            exports.fl.tools.shiftIsDown = shift;
            exports.fl.tools.ctlIsDown = ctrl;
            exports.fl.tools.altIsDown = alt;
            exports.fl.tools.penLoc.x = x;
            exports.fl.tools.penLoc.y = y;
            if (eventListeners.mouseMove) {
                for (var _i = 0, _d = eventListeners.mouseMove; _i < _d.length; _i++) {
                    var handler = _d[_i].handler;
                    try {
                        handler();
                    }
                    catch (e) {
                        console.error('[MOCK] Listener error:', e);
                    }
                }
            }
        },
        tools: {
            shiftIsDown: false,
            ctlIsDown: false,
            altIsDown: false,
            penLoc: { x: 0, y: 0 }
        },
        getDocumentDOM: function () {
            return null;
        },
        trace: function (msg) {
            console.log("[fl.trace] ".concat(msg));
        },
        outputPanel: {
            clear: function () { },
            trace: function (msg) { console.log("[Output] ".concat(msg)); }
        }
    };
    if (typeof globalThis !== 'undefined') {
        globalThis.fl = exports.fl;
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(494);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;