/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.formatLocalDateTime = formatLocalDateTime;
    function padZero(num) {
        return num < 10 ? '0' + num : '' + num;
    }
    function formatLocalDateTime(date) {
        var year = date.getFullYear();
        var month = padZero(date.getMonth() + 1);
        var day = padZero(date.getDate());
        var hours = padZero(date.getHours());
        var minutes = padZero(date.getMinutes());
        var seconds = padZero(date.getSeconds());
        return "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes, ":").concat(seconds);
    }
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(77)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, date_format_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", ({ value: true }));
    exports.EventListenerManager = void 0;
    var EventListenerManager = (function () {
        function EventListenerManager(taskQueue) {
            this.taskQueue = taskQueue;
            this.currentListenerId = null;
            this.boundExecuteTasks = null;
            this.lastExecutionTime = 0;
            this.lastMinRemainingTime = 0;
            this.interval = 0;
        }
        EventListenerManager.prototype.updateStrategy = function () {
            var taskSize = this.taskQueue.getSize();
            this.boundExecuteTasks = this.createThrottledCallback();
            this.currentListenerId = fl.addEventListener(EventListenerManager.MOUSE_MOVE, this.boundExecuteTasks);
            console.log("[Monitor] \u76D1\u542C\u5668\u5DF2\u5C31\u7EEA (\u5F53\u524D\u4EFB\u52A1\u6570: ".concat(taskSize, ")"));
        };
        EventListenerManager.prototype.createThrottledCallback = function () {
            var _this = this;
            return function () {
                var now = Date.now();
                var minRemainingTime = _this.taskQueue.getMinRemainingTime();
                var taskSize = _this.taskQueue.getSize();
                if (minRemainingTime === null || taskSize === 0) {
                    if (_this.currentListenerId !== null) {
                        fl.removeEventListener(EventListenerManager.MOUSE_MOVE, _this.currentListenerId);
                        _this.currentListenerId = null;
                        _this.boundExecuteTasks = null;
                        console.log("[Monitor] \u4EFB\u52A1\u5217\u8868\u4E3A\u7A7A\uFF0C\u5DF2\u79FB\u9664\u76D1\u542C\u5668");
                    }
                    return;
                }
                if (_this.lastMinRemainingTime !== minRemainingTime) {
                    _this.lastMinRemainingTime = minRemainingTime;
                    if (minRemainingTime < 2000) {
                        _this.interval = 0;
                    }
                    else if (minRemainingTime < 10000) {
                        _this.interval = minRemainingTime - 1000;
                    }
                    else if (minRemainingTime < 60000) {
                        _this.interval = 5000;
                    }
                    else {
                        _this.interval = 10000;
                    }
                }
                if (_this.interval === 0 || (now - _this.lastExecutionTime) >= _this.interval) {
                    _this.lastExecutionTime = now;
                    executeTasks(_this.taskQueue);
                }
            };
        };
        EventListenerManager.MOUSE_MOVE = 'mouseMove';
        return EventListenerManager;
    }());
    exports.EventListenerManager = EventListenerManager;
    var BATCH_SIZE = 10;
    var THRESHOLD = 10;
    var _currentTaskIndex = 0;
    function executeTasks(taskQueue) {
        var now = Date.now();
        var tasks = taskQueue['tasks'];
        var taskCount = tasks.length;
        if (taskCount <= THRESHOLD) {
            var tasksToRemove = [];
            for (var _i = 0, tasks_1 = tasks; _i < tasks_1.length; _i++) {
                var task = tasks_1[_i];
                var elapsed = now - task.startTimeRecord;
                if (elapsed >= task.delay) {
                    tasksToRemove.push(task.id);
                    invokeTask(task);
                }
            }
            for (var _a = 0, tasksToRemove_1 = tasksToRemove; _a < tasksToRemove_1.length; _a++) {
                var id = tasksToRemove_1[_a];
                taskQueue.remove(id);
            }
            return;
        }
        else {
            var endIndex = Math.min(_currentTaskIndex + BATCH_SIZE, taskCount);
            var tasksToRemove = [];
            for (var i = _currentTaskIndex; i < endIndex; i++) {
                var task = tasks[i];
                var elapsed = now - task.startTimeRecord;
                if (elapsed >= task.delay) {
                    tasksToRemove.push(task.id);
                    invokeTask(task);
                }
            }
            for (var _b = 0, tasksToRemove_2 = tasksToRemove; _b < tasksToRemove_2.length; _b++) {
                var id = tasksToRemove_2[_b];
                taskQueue.remove(id);
            }
            _currentTaskIndex = endIndex;
            if (_currentTaskIndex >= taskCount) {
                _currentTaskIndex = 0;
            }
            return;
        }
    }
    function invokeTask(task) {
        try {
            var now = Date.now();
            var elapsed = now - task.startTimeRecord;
            console.log('[Timer] 触发回调:', JSON.stringify({
                taskId: task.id,
                注册时间: (0, date_format_1.formatLocalDateTime)(new Date(task.startTimeRecord)),
                当前时间: (0, date_format_1.formatLocalDateTime)(new Date(now)),
                延迟设定: "".concat(task.delay, "ms"),
                实际耗时: "".concat(elapsed, "ms"),
                超时: elapsed - task.delay,
            }));
            task.callback.apply(task, task.args);
        }
        catch (error) {
            console.error('[Timer] 回调执行错误', error);
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
        TaskQueue.prototype.getSize = function () {
            return this.tasks.length;
        };
        return TaskQueue;
    }());
    exports.TaskQueue = TaskQueue;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

var __webpack_unused_export__;
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(751)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, src_1) {
    "use strict";
    __webpack_unused_export__ = ({ value: true });
    console.log("%c🚀 开始执行 setTimeout 模拟器压力测试", "color: blue; font-weight: bold;");
    console.log("%c--- 测试 1: 正常执行 (9秒和15秒)", "color: green;");
    (0, src_1.setTimeout)(function () {
        console.log("✅ 测试1.1: 9秒任务完成");
    }, 9000);
    (0, src_1.setTimeout)(function () {
        console.log("✅ 测试1.2: 15秒任务完成");
    }, 15000);
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
/******/ 	var __webpack_exports__ = __webpack_require__(522);
/******/ 	
/******/ })()
;