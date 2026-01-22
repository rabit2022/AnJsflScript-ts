/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

var __webpack_unused_export__;
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(751)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, src_1) {
    "use strict";
    __webpack_unused_export__ = ({ value: true });
    console.log("%c🚀 开始执行 setTimeout 模拟器压力测试", "color: blue; font-weight: bold;");
    console.log("%c--- 测试 2: 取消功能 (2秒后取消3秒任务)", "color: green;");
    var taskToCancelId = (0, src_1.setTimeout)(function () {
        console.log("❌ 这个任务不应该出现 (ID: taskToCancel)");
    }, 3000);
    (0, src_1.setTimeout)(function () {
        console.log("⏳ 正在取消 3秒任务...");
        (0, src_1.clearTimeout)(taskToCancelId);
        console.log("✅ 测试2: 取消任务验证通过");
    }, 2000);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.setTimeout = setTimeout;
    exports.clearTimeout = clearTimeout;
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
    function setTimeout(callback, delay) {
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
    function clearTimeout(id) {
        for (var i = 0; i < taskQueue.length; i++) {
            if (taskQueue[i].id === id) {
                taskQueue.splice(i, 1);
                console.log("[Timer] \u53D6\u6D88 #".concat(id));
                updateMonitoring();
                return;
            }
        }
    }
    window.setTimeout = setTimeout;
    window.clearTimeout = clearTimeout;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(484)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, setTimeout_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.clearTimeout = exports.setTimeout = void 0;
    Object.defineProperty(exports, "setTimeout", ({ enumerable: true, get: function () { return setTimeout_1.setTimeout; } }));
    Object.defineProperty(exports, "clearTimeout", ({ enumerable: true, get: function () { return setTimeout_1.clearTimeout; } }));
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
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(244);
/******/ 	
/******/ })()
;