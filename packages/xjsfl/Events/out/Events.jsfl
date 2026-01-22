(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["Events"] = factory(require("lodash"));
	else
		root["Events"] = factory(root["lodash"]);
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
  DocumentEvent: function() { return /* reexport */ DocumentEvent; },
  Event: function() { return /* reexport */ Event; },
  EventBus: function() { return /* reexport */ EventBus; },
  FrameEvent: function() { return /* reexport */ FrameEvent; },
  LayerEvent: function() { return /* reexport */ LayerEvent; },
  MouseEvent: function() { return /* reexport */ MouseEvent; }
});

;// ./src/events.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Event = (function () {
    function Event(type, subtype, time) {
        if (time === void 0) { time = new Date(); }
        this.type = type;
        this.subtype = subtype;
        this.time = time;
    }
    return Event;
}());

var DocumentEvent = (function (_super) {
    __extends(DocumentEvent, _super);
    function DocumentEvent(type, subtype) {
        var _this = _super.call(this, type, subtype) || this;
        _this.document = fl.getDocumentDOM();
        return _this;
    }
    DocumentEvent.prototype.toString = function () {
        var _a, _b, _c, _d;
        return "[object DocumentEvent type=\"".concat(this.type, "\" name=\"").concat((_b = (_a = this.document) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '', "\" id=\"").concat((_d = (_c = this.document) === null || _c === void 0 ? void 0 : _c.id) !== null && _d !== void 0 ? _d : '', "\"]");
    };
    DocumentEvent.toString = function () {
        return '[class DocumentEvent]';
    };
    DocumentEvent.PUBLISH = 'prePublish';
    DocumentEvent.PUBLISHED = 'postPublish';
    DocumentEvent.SAVED = 'documentSaved';
    DocumentEvent.NEW = 'documentNew';
    DocumentEvent.OPENED = 'documentOpened';
    DocumentEvent.CLOSED = 'documentClosed';
    DocumentEvent.CHANGED = 'documentChanged';
    return DocumentEvent;
}(Event));

var LayerEvent = (function (_super) {
    __extends(LayerEvent, _super);
    function LayerEvent() {
        var _a, _b;
        var _this = _super.call(this, LayerEvent.CHANGED, 'changed') || this;
        _this.document = fl.getDocumentDOM();
        _this.timeline = (_b = (_a = _this.document) === null || _a === void 0 ? void 0 : _a.getTimeline()) !== null && _b !== void 0 ? _b : null;
        _this.layer = _this.timeline
            ? _this.timeline.layers[_this.timeline.currentLayer]
            : null;
        return _this;
    }
    LayerEvent.prototype.toString = function () {
        var _a, _b, _c, _d;
        return "[object LayerEvent timeline=\"".concat((_b = (_a = this.timeline) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '', "\" layer=\"").concat((_d = (_c = this.layer) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : '', "\"]");
    };
    LayerEvent.toString = function () {
        return '[class LayerEvent]';
    };
    LayerEvent.CHANGED = 'layerChanged';
    return LayerEvent;
}(Event));

var FrameEvent = (function (_super) {
    __extends(FrameEvent, _super);
    function FrameEvent() {
        var _a, _b;
        var _this = _super.call(this, FrameEvent.CHANGED, 'changed') || this;
        _this.document = fl.getDocumentDOM();
        _this.timeline = (_b = (_a = _this.document) === null || _a === void 0 ? void 0 : _a.getTimeline()) !== null && _b !== void 0 ? _b : null;
        _this.layer = _this.timeline
            ? _this.timeline.layers[_this.timeline.currentLayer]
            : null;
        _this.frame = _this.layer
            ? _this.layer.frames[_this.timeline.currentFrame]
            : null;
        return _this;
    }
    FrameEvent.prototype.toString = function () {
        var _a, _b, _c, _d, _e, _f;
        return "[object FrameEvent timeline=\"".concat((_b = (_a = this.timeline) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : '', "\" layer=\"").concat((_d = (_c = this.layer) === null || _c === void 0 ? void 0 : _c.name) !== null && _d !== void 0 ? _d : '', "\" frame=\"").concat((_f = (_e = this.timeline) === null || _e === void 0 ? void 0 : _e.currentFrame) !== null && _f !== void 0 ? _f : '', "\"]");
    };
    FrameEvent.toString = function () {
        return '[class FrameEvent]';
    };
    FrameEvent.CHANGED = 'frameChanged';
    return FrameEvent;
}(Event));

var MouseEvent = (function (_super) {
    __extends(MouseEvent, _super);
    function MouseEvent() {
        var _this = _super.call(this, MouseEvent.MOVE, 'move') || this;
        _this.shift = fl.tools.shiftIsDown;
        _this.ctrl = fl.tools.ctlIsDown;
        _this.alt = fl.tools.altIsDown;
        _this.x = fl.tools.penLoc.x;
        _this.y = fl.tools.penLoc.y;
        return _this;
    }
    MouseEvent.prototype.toString = function () {
        return "[object MouseEvent x=\"".concat(this.x, "\" y=\"").concat(this.y, "\" shift=\"").concat(this.shift, "\" ctrl=\"").concat(this.ctrl, "\" alt=\"").concat(this.alt, "\"]");
    };
    MouseEvent.toString = function () {
        return '[class MouseEvent]';
    };
    MouseEvent.MOVE = 'mouseMove';
    return MouseEvent;
}(Event));


// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(773);
;// ./src/events-manager.ts
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};


var validEventTypesCS4 = [
    'documentNew', 'documentOpened', 'documentClosed', 'documentChanged',
    'layerChanged', 'frameChanged', 'mouseMove'
];
var validEventTypesCS5 = __spreadArray(__spreadArray([], validEventTypesCS4, true), ['prePublish', 'postPublish', 'documentSaved'], false);
function isValidEventType(type, appVersion) {
    if (appVersion >= 11) {
        return external_lodash_.includes(validEventTypesCS5, type);
    }
    else {
        return external_lodash_.includes(validEventTypesCS4, type);
    }
}
var APP_VERSION = 12;
var events = (function () {
    function events() {
        this.handlers = {};
        for (var _i = 0, validEventTypesCS5_1 = validEventTypesCS5; _i < validEventTypesCS5_1.length; _i++) {
            var type = validEventTypesCS5_1[_i];
            this.handlers[type] = {
                callbacks: null,
                handler: this.createGatewayHandler(type),
                id: -1
            };
        }
    }
    events.prototype.createGatewayHandler = function (type) {
        var _this = this;
        return function () {
            var event;
            switch (type) {
                case 'documentNew':
                    event = new DocumentEvent(DocumentEvent.NEW, 'new');
                    break;
                case 'documentOpened':
                    event = new DocumentEvent(DocumentEvent.OPENED, 'opened');
                    break;
                case 'documentClosed':
                    event = new DocumentEvent(DocumentEvent.CLOSED, 'closed');
                    break;
                case 'documentChanged':
                    event = new DocumentEvent(DocumentEvent.CHANGED, 'changed');
                    break;
                case 'prePublish':
                    event = new DocumentEvent(DocumentEvent.PUBLISH, 'publish');
                    break;
                case 'postPublish':
                    event = new DocumentEvent(DocumentEvent.PUBLISHED, 'published');
                    break;
                case 'documentSaved':
                    event = new DocumentEvent(DocumentEvent.SAVED, 'saved');
                    break;
                case 'layerChanged':
                    event = new LayerEvent();
                    break;
                case 'frameChanged':
                    event = new FrameEvent();
                    break;
                case 'mouseMove':
                    event = new MouseEvent();
                    break;
                default:
                    return;
            }
            _this.fire(event);
        };
    };
    ;
    events.prototype.add = function (type, callback, name, scope) {
        if (!isValidEventType(type, APP_VERSION)) {
            throw new Error("xjsfl events:add(): Invalid or unsupported event type \"".concat(type, "\""));
        }
        if (typeof callback !== 'function') {
            throw new Error('xjsfl events:add(): Parameter "callback" must be a Function');
        }
        var handlerConfig = this.handlers[type];
        if (handlerConfig.callbacks === null) {
            handlerConfig.id = fl.addEventListener(type, handlerConfig.handler);
            handlerConfig.callbacks = {};
            console.log("add event [".concat(type, "] [").concat(name, "] : ").concat(handlerConfig.id));
        }
        var fn = scope ? function (e) { return callback.call(scope, e); } : callback;
        handlerConfig.callbacks[name] = fn;
        return true;
    };
    events.prototype.remove = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length === 2) {
            var type = args[0], name = args[1];
            var config = this.handlers[type];
            if (config.callbacks && config.callbacks[name]) {
                delete config.callbacks[name];
                if (Object.keys(config.callbacks).length === 0) {
                    if (config.id !== -1) {
                        fl.removeEventListener(type, config.id);
                        console.log("remove event [".concat(type, "] [").concat(name, "] : ").concat(config.id));
                    }
                    config.callbacks = null;
                    config.id = -1;
                }
            }
        }
        else {
            var name = args[0];
            for (var type in this.handlers) {
                this.remove(type, name);
            }
        }
    };
    events.prototype.removeAll = function (type) {
        if (type) {
            console.log("remove all event ".concat(type));
            var config = this.handlers[type];
            if (config.callbacks) {
                for (var name in config.callbacks) {
                    this.remove(type, name);
                }
            }
        }
        else {
            console.log("remove all event");
            for (var t in this.handlers) {
                this.removeAll(t);
            }
        }
    };
    events.prototype.get = function (type, name) {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.handlers[type]) === null || _a === void 0 ? void 0 : _a.callbacks) === null || _b === void 0 ? void 0 : _b[name]) !== null && _c !== void 0 ? _c : null;
    };
    events.prototype.fire = function (event) {
        var _a;
        var callbacks = (_a = this.handlers[event.type]) === null || _a === void 0 ? void 0 : _a.callbacks;
        if (callbacks) {
            for (var key in callbacks) {
                callbacks[key](event);
            }
        }
    };
    events.prototype.toString = function () {
        return '[class Events]';
    };
    return events;
}());

;
var EventBus = new events();

;// ./src/index.ts



/******/ 	return __webpack_exports__;
/******/ })()
;
});