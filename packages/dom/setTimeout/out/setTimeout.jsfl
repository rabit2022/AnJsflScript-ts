(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("loglevel"));
	else if(typeof define === 'function' && define.amd)
		define(["loglevel"], factory);
	else if(typeof exports === 'object')
		exports["setTimeout"] = factory(require("loglevel"));
	else
		root["setTimeout"] = factory(root["loglevel"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__360__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 360:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__360__;

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
  clearAllTimers: function() { return /* reexport */ clearAllTimers; },
  clearInterval: function() { return /* reexport */ setInterval_clearInterval; },
  clearTimeout: function() { return /* reexport */ setTimeout_clearTimeout; },
  setInterval: function() { return /* reexport */ setInterval_setInterval; },
  setTimeout: function() { return /* reexport */ setTimeout_setTimeout; }
});

;// ./src/task_queue.ts
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
    TaskQueue.prototype.removeAll = function () {
        this.tasks = [];
        return true;
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


;// ./src/date_format.ts
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

// EXTERNAL MODULE: external "loglevel"
var external_loglevel_ = __webpack_require__(360);
;// ./src/manager.ts


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
        external_loglevel_.log("[Monitor] \u76D1\u542C\u5668\u5DF2\u5C31\u7EEA (\u5F53\u524D\u4EFB\u52A1\u6570: ".concat(taskSize, ")"));
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
                    external_loglevel_.log("[Monitor] \u4EFB\u52A1\u5217\u8868\u4E3A\u7A7A\uFF0C\u5DF2\u79FB\u9664\u76D1\u542C\u5668");
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
        external_loglevel_.log('[Timer] 触发回调:', JSON.stringify({
            taskId: task.id,
            注册时间: formatLocalDateTime(new Date(task.startTimeRecord)),
            当前时间: formatLocalDateTime(new Date(now)),
            延迟设定: "".concat(task.delay, "ms"),
            实际耗时: "".concat(elapsed, "ms"),
            超时: elapsed - task.delay,
        }));
        task.callback.apply(task, task.args);
    }
    catch (error) {
        external_loglevel_.error('[Timer] 回调执行错误', error);
    }
}

;// ./src/setTimeout.ts


var globalId = 0;
var taskQueue = new TaskQueue();
var eventManager = new EventListenerManager(taskQueue);
function setTimeout_setTimeout(callback, delay) {
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
function setTimeout_clearTimeout(id) {
    var wasRemoved = taskQueue.remove(id);
    if (wasRemoved) {
        eventManager.updateStrategy();
    }
}
function clearAllTimers() {
    var success = taskQueue.removeAll();
    if (success) {
        eventManager.updateStrategy();
    }
}

;// ./src/setInterval.ts

function setInterval_setInterval(callback, delay) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var timerId;
    function loop() {
        callback.apply(void 0, args);
        timerId = setTimeout_setTimeout(loop, delay);
    }
    timerId = setTimeout_setTimeout(loop, delay);
    return timerId;
}
function setInterval_clearInterval(timerId) {
    return setTimeout_clearTimeout(timerId);
}

;// ./src/index.ts



/******/ 	return __webpack_exports__;
/******/ })()
;
});