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


;// ./src/manager.ts
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