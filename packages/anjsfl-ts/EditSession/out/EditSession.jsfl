(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@polyfills/symbol-dispose"), require("loglevel"));
	else if(typeof define === 'function' && define.amd)
		define(["@polyfills/symbol-dispose", "loglevel"], factory);
	else if(typeof exports === 'object')
		exports["EditSession"] = factory(require("@polyfills/symbol-dispose"), require("loglevel"));
	else
		root["EditSession"] = factory(root["@polyfills/symbol-dispose"], root["loglevel"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__789__, __WEBPACK_EXTERNAL_MODULE__360__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 360:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__360__;

/***/ }),

/***/ 789:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__789__;

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
  EditSession: function() { return /* reexport */ EditSession; }
});

// EXTERNAL MODULE: external "@polyfills/symbol-dispose"
var symbol_dispose_ = __webpack_require__(789);
// EXTERNAL MODULE: external "loglevel"
var external_loglevel_ = __webpack_require__(360);
;// ./src/EditSession.ts


var EditSession = (function () {
    function EditSession(doc) {
        this.doc = doc;
        this.exited = false;
        if (!doc || typeof doc.enterEditMode !== 'function') {
            throw new Error('Invalid document object: missing enterEditMode');
        }
        doc.enterEditMode('inPlace');
        external_loglevel_.log('✅ Entered in-place edit mode');
    }
    EditSession.prototype[Symbol.dispose] = function () {
        if (!this.exited && this.doc && typeof this.doc.exitEditMode === 'function') {
            this.doc.exitEditMode();
            this.exited = true;
            external_loglevel_.log('🔒 Exited in-place edit mode');
        }
    };
    return EditSession;
}());


;// ./src/index.ts


/******/ 	return __webpack_exports__;
/******/ })()
;
});