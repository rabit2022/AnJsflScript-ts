/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.EventListenerManager = void 0;
    var EventListenerManager = (function () {
        function EventListenerManager(taskQueue) {
            this.taskQueue = taskQueue;
            this.currentListenerId = null;
            this.currentEventType = null;
            this.boundExecuteTasks = null;
        }
        EventListenerManager.prototype.updateStrategy = function () {
            var _this = this;
            var minRemainingTime = this.taskQueue.getMinRemainingTime();
            var targetEvent = null;
            if (minRemainingTime === null) {
                targetEvent = null;
            }
            else if (minRemainingTime < 10000) {
                targetEvent = EventListenerManager.MOUSE_MOVE;
            }
            else if (minRemainingTime >= 60000) {
                targetEvent = EventListenerManager.LAYER_CHANGED;
            }
            else {
                targetEvent = EventListenerManager.FRAME_CHANGED;
            }
            if (targetEvent !== this.currentEventType) {
                if (this.currentListenerId !== null && this.currentEventType !== null) {
                    fl.removeEventListener(this.currentEventType, this.currentListenerId);
                }
                this.currentListenerId = null;
                this.currentEventType = null;
                this.boundExecuteTasks = null;
                if (targetEvent !== null) {
                    this.boundExecuteTasks = function () { return executeTasks(_this.taskQueue); };
                    var id = fl.addEventListener(targetEvent, this.boundExecuteTasks);
                    this.currentListenerId = id;
                    this.currentEventType = targetEvent;
                    console.log("[Monitor] \u5207\u6362\u76D1\u542C\u5668\u81F3: ".concat(targetEvent));
                }
                else {
                    console.log("[Monitor] \u6240\u6709\u4EFB\u52A1\u7ED3\u675F\uFF0C\u76D1\u542C\u5668\u5DF2\u5173\u95ED");
                }
            }
        };
        EventListenerManager.MOUSE_MOVE = 'mouseMove';
        EventListenerManager.FRAME_CHANGED = 'frameChanged';
        EventListenerManager.LAYER_CHANGED = 'layerChanged';
        return EventListenerManager;
    }());
    exports.EventListenerManager = EventListenerManager;
    function executeTasks(taskQueue) {
        var now = Date.now();
        var tasksToRemove = [];
        var tasksToExecute = [];
        for (var _i = 0, _a = taskQueue['tasks']; _i < _a.length; _i++) {
            var task = _a[_i];
            var elapsed = now - task.startTimeRecord;
            if (elapsed >= task.delay) {
                console.log('[Timer] 触发回调:', JSON.stringify({
                    taskId: task.id,
                    注册时间: new Date(task.startTimeRecord).toISOString(),
                    当前时间: new Date(now).toISOString(),
                    延迟设定: "".concat(task.delay, "ms"),
                    实际耗时: "".concat(elapsed, "ms"),
                    是否超时: elapsed > task.delay,
                    参数: task.args
                }));
                tasksToRemove.push(task.id);
                tasksToExecute.push({
                    callback: task.callback,
                    args: task.args
                });
            }
        }
        for (var _b = 0, tasksToRemove_1 = tasksToRemove; _b < tasksToRemove_1.length; _b++) {
            var id = tasksToRemove_1[_b];
            taskQueue.remove(id);
        }
        for (var _c = 0, tasksToExecute_1 = tasksToExecute; _c < tasksToExecute_1.length; _c++) {
            var task = tasksToExecute_1[_c];
            try {
                task.callback.apply(task, task.args);
            }
            catch (error) {
                console.error('[Timer] 回调执行错误', error);
            }
        }
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(494), __webpack_require__(248)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, task_queue_1, manager_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.setTimeout = setTimeout;
    exports.clearTimeout = clearTimeout;
    var globalId = 0;
    var taskQueue = new task_queue_1.TaskQueue();
    var eventManager = new manager_1.EventListenerManager(taskQueue);
    function setTimeout(callback, delay) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var id = globalId++;
        var task = {
            id: id,
            callback: callback,
            startTimeRecord: Date.now(),
            delay: delay,
            args: args
        };
        taskQueue.add(task);
        eventManager.updateStrategy();
        return id;
    }
    function clearTimeout(id) {
        var wasRemoved = taskQueue.remove(id);
        if (wasRemoved) {
            eventManager.updateStrategy();
        }
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.TaskQueue = void 0;
    var TaskQueue = (function () {
        function TaskQueue() {
            this.tasks = [];
        }
        TaskQueue.prototype.add = function (task) {
            this.tasks.push(task);
        };
        TaskQueue.prototype.remove = function (id) {
            var index = this.tasks.findIndex(function (t) { return t.id === id; });
            if (index !== -1) {
                this.tasks.splice(index, 1);
                return true;
            }
            return false;
        };
        TaskQueue.prototype.getDueTasks = function () {
            var now = Date.now();
            return this.tasks
                .filter(function (task) { return now - task.startTimeRecord >= task.delay; })
                .map(function (task) { return task.id; });
        };
        TaskQueue.prototype.getMinRemainingTime = function () {
            if (this.tasks.length === 0)
                return null;
            var now = Date.now();
            return Math.min.apply(Math, this.tasks.map(function (task) { return task.startTimeRecord + task.delay - now; }));
        };
        TaskQueue.prototype.size = function () {
            return this.tasks.length;
        };
        return TaskQueue;
    }());
    exports.TaskQueue = TaskQueue;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 584:
/***/ (function(module, exports, __webpack_require__) {

var __webpack_unused_export__;
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(751)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, src_1) {
    "use strict";
    __webpack_unused_export__ = ({ value: true });
    console.log("%c🚀 开始执行 setTimeout 模拟器压力测试", "color: blue; font-weight: bold;");
    console.log("%c--- 测试 1: 正常执行 (1秒和0.5秒)", "color: green;");
    (0, src_1.setTimeout)(function () {
        console.log("✅ 测试1.1: 1秒任务完成");
    }, 1000);
    (0, src_1.setTimeout)(function () {
        console.log("✅ 测试1.2: 0.5秒任务完成");
    }, 500);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(484), __webpack_require__(870)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, setTimeout_1, setInterval_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.clearInterval = exports.setInterval = exports.clearTimeout = exports.setTimeout = void 0;
    Object.defineProperty(exports, "setTimeout", ({ enumerable: true, get: function () { return setTimeout_1.setTimeout; } }));
    Object.defineProperty(exports, "clearTimeout", ({ enumerable: true, get: function () { return setTimeout_1.clearTimeout; } }));
    Object.defineProperty(exports, "setInterval", ({ enumerable: true, get: function () { return setInterval_1.setInterval; } }));
    Object.defineProperty(exports, "clearInterval", ({ enumerable: true, get: function () { return setInterval_1.clearInterval; } }));
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 870:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(484)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, setTimeout_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.setInterval = setInterval;
    exports.clearInterval = clearInterval;
    function setInterval(callback, delay) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var timerId;
        function loop() {
            callback.apply(void 0, args);
            timerId = (0, setTimeout_1.setTimeout)(loop, delay);
        }
        timerId = (0, setTimeout_1.setTimeout)(loop, delay);
        return timerId;
    }
    function clearInterval(timerId) {
        return (0, setTimeout_1.clearTimeout)(timerId);
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
/******/ 	// This entry module used 'module' so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(584);
/******/ 	
/******/ })()
;