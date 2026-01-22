(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["setTimeout"] = factory();
	else
		root["setTimeout"] = factory();
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
  clearTimeout: function() { return /* reexport */ setTimeout_clearTimeout; },
  setTimeout: function() { return /* reexport */ setTimeout_setTimeout; }
});

;// ./src/setTimeout.ts
var taskQueue = [];
var globalId = 0;
var currentListenerId = null;
function updateMonitoring() {
    var shouldMonitor = taskQueue.length > 0;
    if (shouldMonitor && currentListenerId === null) {
        var id = fl.addEventListener("mouseMove", checkQueue);
        currentListenerId = id;
        console.log("[Monitor] 已开启 mouseMove 监听");
    }
    else if (!shouldMonitor && currentListenerId !== null) {
        fl.removeEventListener("mouseMove", currentListenerId);
        currentListenerId = null;
        console.log("[Monitor] 已关闭 mouseMove 监听，队列空闲");
    }
}
function checkQueue() {
    var now = Date.now();
    for (var i = taskQueue.length - 1; i >= 0; i--) {
        var task = taskQueue[i];
        var actualElapsed = now - task.startTimeRecord;
        var timeDiff = actualElapsed - task.delay;
        if (actualElapsed >= task.delay) {
            taskQueue.splice(i, 1);
            updateMonitoring();
            console.log("[Timer] \u4EFB\u52A1\u89E6\u53D1 | " +
                "ID: ".concat(task.id, " | ") +
                "\u8BBE\u5B9A\u5EF6\u8FDF: ".concat(task.delay, "ms | ") +
                "\u5B9E\u9645\u8017\u65F6: ".concat(actualElapsed, "ms | ") +
                "\u65F6\u95F4\u504F\u5DEE: ".concat(timeDiff, "ms"));
            try {
                task.callback();
            }
            catch (error) {
                console.error("[Timer] \u56DE\u8C03\u6267\u884C\u51FA\u9519 | ID: ".concat(task.id), error);
            }
        }
    }
}
function setTimeout_setTimeout(callback, delay) {
    var id = globalId++;
    var task = {
        id: id,
        callback: callback,
        startTimeRecord: Date.now(),
        delay: delay,
    };
    taskQueue.push(task);
    updateMonitoring();
    console.log("[Timer] \u6CE8\u518C #".concat(id, " (\u961F\u5217\u957F\u5EA6: ").concat(taskQueue.length, ")"));
    return id;
}
function setTimeout_clearTimeout(id) {
    for (var i = 0; i < taskQueue.length; i++) {
        if (taskQueue[i].id === id) {
            taskQueue.splice(i, 1);
            console.log("[Timer] \u53D6\u6D88 #".concat(id));
            updateMonitoring();
            return;
        }
    }
}
window.setTimeout = setTimeout_setTimeout;
window.clearTimeout = setTimeout_clearTimeout;

;// ./src/index.ts


/******/ 	return __webpack_exports__;
/******/ })()
;
});