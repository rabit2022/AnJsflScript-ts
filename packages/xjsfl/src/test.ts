// test.ts

// 1. 导入我们需要的类
import { Events, DocumentEvent, LayerEvent, FrameEvent, MouseEvent } from "./Events";

// --------------------------------------------------
// 📝 初始化 / 启动测试
// --------------------------------------------------

(function init() {
    fl.trace("=== JSFL Events 库测试开始 ===");

    // --- 测试 1: 文档打开事件 ---
    // 注意：如果你在运行脚本时没有打开其他文档，可以手动打开一个测试
    Events.add(DocumentEvent.OPENED, handleDocumentOpened, "Test_DocumentOpened");

    // --- 测试 2: 图层变化事件 ---
    Events.add(LayerEvent.CHANGED, handleLayerChange, "Test_LayerChanged");

    // --- 测试 3: 帧变化事件 ---
    Events.add(FrameEvent.CHANGED, handleFrameChange, "Test_FrameChanged");

    // --- 测试 4: 鼠标移动事件 ---
    // ⚠️ 警告：此事件触发极快，建议在控制台观察，不要频繁 trace
    Events.add(MouseEvent.MOVE, handleMouseMove, "Test_MouseMove");

    // --- 测试 5: 文档新建事件 ---
    Events.add(DocumentEvent.NEW, handleDocumentNew, "Test_DocumentNew");

    fl.trace("✅ 所有事件监听器已注册。");
})();

// --------------------------------------------------
// 👂 回调函数定义
// --------------------------------------------------

/**
 * 处理文档打开
 */
function handleDocumentOpened(event: DocumentEvent) {
    fl.trace(`🎉 文档打开: ${event.document?.name}`);
    fl.trace(`   路径: ${event.document?.path}`);
    fl.trace(`   时间: ${event.time.toLocaleTimeString()}`);
}

/**
 * 处理图层切换
 */
function handleLayerChange(event: LayerEvent) {
    const timelineName = event.timeline?.name || "未知";
    const layerName = event.layer?.name || "未知";
    fl.trace(`🎨 图层切换: [${timelineName}] -> ${layerName}`);
}

/**
 * 处理帧切换
 */
function handleFrameChange(event: FrameEvent) {
    const layerName = event.layer?.name || "未知";
    const frameIndex = event.timeline?.currentFrame || 0;
    fl.trace(`🎬 帧更新: 当前帧=${frameIndex}, 图层=${layerName}`);
}

/**
 * 处理鼠标移动
 * 注意：性能敏感
 */
let mouseMoveCounter = 0;
function handleMouseMove(event: MouseEvent) {
    // 为了性能，只打印 1/100 的事件，或者只在控制台看
    mouseMoveCounter++;
    if (mouseMoveCounter % 100 === 0) {
        fl.trace(
            `🖱️ 鼠标移动: (${event.x}, ${event.y}) 按键: Shift=${event.shift}, Ctrl=${event.ctrl}`
        );
    }
}

/**
 * 处理新建文档
 */
function handleDocumentNew(event: DocumentEvent) {
    fl.trace(`🆕 新建了一个文档！`);
}

// --------------------------------------------------
// 🛑 清理函数示例 (如果你想停止监听)
// --------------------------------------------------

/**
 * 如果你想在某个时刻移除所有监听
 */
function cleanupAll() {
    Events.removeAll();
    fl.trace("🧹 所有事件监听器已移除。");
}

/**
 * 移除特定的鼠标监听（用于停止性能消耗）
 */
function stopMouseTracking() {
    Events.remove(MouseEvent.MOVE, "Test_MouseMove");
    fl.trace("⏸️ 停止了鼠标移动跟踪。");
}

// --------------------------------------------------
// 💡 提示
// --------------------------------------------------

// 调用 cleanupAll() 或 stopMouseTracking() 来测试移除功能
// cleanupAll();
// stopMouseTracking();
