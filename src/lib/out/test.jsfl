require(["require", "_exports", "Events"], function (require, exports, Events_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // (function init() {
        fl.trace("=== JSFL Events 库测试开始 ===");
        Events_1.Events.add(Events_1.DocumentEvent.OPENED, handleDocumentOpened, "Test_DocumentOpened");
        Events_1.Events.add(Events_1.LayerEvent.CHANGED, handleLayerChange, "Test_LayerChanged");
        Events_1.Events.add(Events_1.FrameEvent.CHANGED, handleFrameChange, "Test_FrameChanged");
        Events_1.Events.add(Events_1.MouseEvent.MOVE, handleMouseMove, "Test_MouseMove");
        Events_1.Events.add(Events_1.DocumentEvent.NEW, handleDocumentNew, "Test_DocumentNew");
        fl.trace("✅ 所有事件监听器已注册。");


        /**
         * 如果你想在某个时刻移除所有监听
         */
        function cleanupAll() {
            Events_1.Events.removeAll();
            fl.trace("🧹 所有事件监听器已移除。");
        }


        // cleanupAll();
    // })();
    function handleDocumentOpened(event) {
        var _a, _b;
        fl.trace("\uD83C\uDF89 \u6587\u6863\u6253\u5F00: ".concat((_a = event.document) === null || _a === void 0 ? void 0 : _a.name));
        fl.trace("   \u8DEF\u5F84: ".concat((_b = event.document) === null || _b === void 0 ? void 0 : _b.path));
        fl.trace("   \u65F6\u95F4: ".concat(event.time.toLocaleTimeString()));
    }
    function handleLayerChange(event) {
        var _a, _b;
        var timelineName = ((_a = event.timeline) === null || _a === void 0 ? void 0 : _a.name) || "未知";
        var layerName = ((_b = event.layer) === null || _b === void 0 ? void 0 : _b.name) || "未知";
        fl.trace("\uD83C\uDFA8 \u56FE\u5C42\u5207\u6362: [".concat(timelineName, "] -> ").concat(layerName));
    }
    function handleFrameChange(event) {
        var _a, _b;
        var layerName = ((_a = event.layer) === null || _a === void 0 ? void 0 : _a.name) || "未知";
        var frameIndex = ((_b = event.timeline) === null || _b === void 0 ? void 0 : _b.currentFrame) || 0;
        fl.trace("\uD83C\uDFAC \u5E27\u66F4\u65B0: \u5F53\u524D\u5E27=".concat(frameIndex, ", \u56FE\u5C42=").concat(layerName));
    }
    var mouseMoveCounter = 0;
    function handleMouseMove(event) {
        mouseMoveCounter++;
        if (mouseMoveCounter % 100 === 0) {
            fl.trace("\uD83D\uDDB1\uFE0F \u9F20\u6807\u79FB\u52A8: (".concat(event.x, ", ").concat(event.y, ") \u6309\u952E: Shift=").concat(event.shift, ", Ctrl=").concat(event.ctrl));
        }
    }
    function handleDocumentNew(event) {
        fl.trace("\uD83C\uDD95 \u65B0\u5EFA\u4E86\u4E00\u4E2A\u6587\u6863\uFF01");
    }
    function cleanupAll() {
        Events_1.Events.removeAll();
        fl.trace("🧹 所有事件监听器已移除。");
    }
    function stopMouseTracking() {
        Events_1.Events.remove(Events_1.MouseEvent.MOVE, "Test_MouseMove");
        fl.trace("⏸️ 停止了鼠标移动跟踪。");
    }




});
