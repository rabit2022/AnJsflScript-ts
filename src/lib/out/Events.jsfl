var __extends = (this && this.__extends) || (function () {
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
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MouseEvent = exports.FrameEvent = exports.LayerEvent = exports.DocumentEvent = exports.Events = void 0;
    var BaseEvent = (function () {
        function BaseEvent(type, subtype, time) {
            if (time === void 0) { time = new Date(); }
            this.type = type;
            this.subtype = subtype;
            this.time = time;
        }
        return BaseEvent;
    }());
    var DocumentEvent = (function (_super) {
        __extends(DocumentEvent, _super);
        function DocumentEvent(type, subtype) {
            var _this = _super.call(this, type, subtype) || this;
            _this.document = fl.getDocumentDOM() || null;
            return _this;
        }
        DocumentEvent.prototype.toString = function () {
            var docName = this.document ? this.document.name : 'null';
            var docId = this.document ? this.document.id : 'null';
            return "[object DocumentEvent type=\"".concat(this.type, "\" name=\"").concat(docName, "\" id=\"").concat(docId, "\"]");
        };
        DocumentEvent.NEW = 'documentNew';
        DocumentEvent.OPENED = 'documentOpened';
        DocumentEvent.CLOSED = 'documentClosed';
        DocumentEvent.CHANGED = 'documentChanged';
        DocumentEvent.PUBLISH = 'prePublish';
        DocumentEvent.PUBLISHED = 'postPublish';
        DocumentEvent.SAVED = 'documentSaved';
        return DocumentEvent;
    }(BaseEvent));
    exports.DocumentEvent = DocumentEvent;
    var LayerEvent = (function (_super) {
        __extends(LayerEvent, _super);
        function LayerEvent() {
            var _this = _super.call(this, LayerEvent.CHANGED, 'changed') || this;
            var dom = fl.getDocumentDOM();
            _this.document = dom;
            _this.timeline = dom ? dom.getTimeline() : null;
            _this.layer = _this.timeline ? _this.timeline.layers[_this.timeline.currentLayer] : null;
            return _this;
        }
        LayerEvent.prototype.toString = function () {
            var timelineName = this.timeline ? this.timeline.name : 'null';
            var layerName = this.layer ? this.layer.name : 'null';
            return "[object LayerEvent timeline=\"".concat(timelineName, "\" layer=\"").concat(layerName, "\"]");
        };
        LayerEvent.CHANGED = 'layerChanged';
        return LayerEvent;
    }(BaseEvent));
    exports.LayerEvent = LayerEvent;
    var FrameEvent = (function (_super) {
        __extends(FrameEvent, _super);
        function FrameEvent() {
            var _this = _super.call(this, FrameEvent.CHANGED, 'changed') || this;
            var dom = fl.getDocumentDOM();
            _this.document = dom;
            _this.timeline = dom ? dom.getTimeline() : null;
            _this.layer = _this.timeline ? _this.timeline.layers[_this.timeline.currentLayer] : null;
            _this.frame = _this.layer ? _this.layer.frames[_this.timeline.currentFrame] : null;
            return _this;
        }
        FrameEvent.prototype.toString = function () {
            var timelineName = this.timeline ? this.timeline.name : 'null';
            var layerName = this.layer ? this.layer.name : 'null';
            var frameIndex = this.timeline ? this.timeline.currentFrame : 'null';
            return "[object FrameEvent timeline=\"".concat(timelineName, "\" layer=\"").concat(layerName, "\" frame=\"").concat(frameIndex, "\"]");
        };
        FrameEvent.CHANGED = 'frameChanged';
        return FrameEvent;
    }(BaseEvent));
    exports.FrameEvent = FrameEvent;
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
        MouseEvent.MOVE = 'mouseMove';
        return MouseEvent;
    }(BaseEvent));
    exports.MouseEvent = MouseEvent;
    var EventManager = (function () {
        function EventManager() {
            this.registrations = new Map();
        }
        EventManager.prototype.add = function (type, callback, name, scope) {
            var _this = this;
            var eventType = type;
            var reg = this.registrations.get(eventType);
            if (!reg) {
                var flashId = fl.addEventListener(eventType, function () { return _this.fire(eventType); });
                reg = { id: flashId, callbacks: new Map() };
                this.registrations.set(eventType, reg);
            }
            reg.callbacks.set(name, { callback: callback, scope: scope });
            return true;
        };
        EventManager.prototype.remove = function (type, name) {
            var reg = this.registrations.get(type);
            if (reg && reg.callbacks.has(name)) {
                reg.callbacks.delete(name);
                if (reg.callbacks.size === 0) {
                    fl.removeEventListener(type, reg.id);
                    this.registrations.delete(type);
                }
            }
        };
        EventManager.prototype.removeAll = function (type) {
            if (type) {
                var reg = this.registrations.get(type);
                if (reg) {
                    fl.removeEventListener(type, reg.id);
                    this.registrations.delete(type);
                }
            }
            else {
                for (var _i = 0, _a = this.registrations; _i < _a.length; _i++) {
                    var _b = _a[_i], eventType = _b[0], reg = _b[1];
                    fl.removeEventListener(eventType, reg.id);
                }
                this.registrations.clear();
            }
        };
        EventManager.prototype.get = function (type, name) {
            var reg = this.registrations.get(type);
            if (reg && reg.callbacks.has(name)) {
                return reg.callbacks.get(name).callback;
            }
            return null;
        };
        EventManager.prototype.fire = function (type) {
            var eventType = type;
            var reg = this.registrations.get(eventType);
            if (!reg)
                return;
            var event;
            switch (eventType) {
                case DocumentEvent.NEW:
                case DocumentEvent.OPENED:
                case DocumentEvent.CLOSED:
                case DocumentEvent.CHANGED:
                case DocumentEvent.PUBLISH:
                case DocumentEvent.PUBLISHED:
                case DocumentEvent.SAVED:
                    event = new DocumentEvent(eventType, 'temp');
                    break;
                case LayerEvent.CHANGED:
                    event = new LayerEvent();
                    break;
                case FrameEvent.CHANGED:
                    event = new FrameEvent();
                    break;
                case MouseEvent.MOVE:
                    event = new MouseEvent();
                    break;
                default:
                    throw new Error('Unknown event type');
            }
            for (var _i = 0, _a = reg.callbacks.values(); _i < _a.length; _i++) {
                var record = _a[_i];
                try {
                    if (record.scope) {
                        record.callback.call(record.scope, event);
                    }
                    else {
                        record.callback(event);
                    }
                }
                catch (e) {
                    fl.trace("Event Error: ".concat(e));
                }
            }
        };
        return EventManager;
    }());
    var Events = new EventManager();
    exports.Events = Events;
});
