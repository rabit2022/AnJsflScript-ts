/**
 * @file: jsfl-shim.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// __mocks__/jsfl-shim.ts

// 存储所有注册的监听器（用于测试时手动触发）
const eventListeners: Record<string, Array<{ id: number; handler: Function }>> = {
    mouseMove: [], // JSFL 中鼠标移动事件类型是 "mouseMove"
    documentChanged: []
    // 其他事件按需添加
};

export const fl = {
    addEventListener(type: string, handler: Function): number {
        console.log(`[MOCK] addEventListener: ${type}`);
        const id = Date.now() + Math.random(); // 更安全的 ID
        const normalizedType = type.toLowerCase().includes("mouse") ? "mouseMove" : type;
        eventListeners[normalizedType] = eventListeners[normalizedType] || [];
        eventListeners[normalizedType].push({ id, handler });
        return id;
    },

    removeEventListener(type: string, id: number): void {
        const normalizedType = type.toLowerCase().includes("mouse") ? "mouseMove" : type;
        if (eventListeners[normalizedType]) {
            eventListeners[normalizedType] = eventListeners[normalizedType].filter(
                (l) => l.id !== id
            );
        }
        console.log(`[MOCK] removeEventListener: ${type}, id=${id}`);
    },

    // 👇 新增：测试用 —— 手动触发鼠标移动事件
    __triggerMouseMove(
        x: number,
        y: number,
        opts: { shift?: boolean; ctrl?: boolean; alt?: boolean } = {}
    ) {
        const { shift = false, ctrl = false, alt = false } = opts;
        // 模拟 tools 状态
        (fl.tools as any).shiftIsDown = shift;
        (fl.tools as any).ctlIsDown = ctrl; // 注意：JSFL 是 ctlIsDown
        (fl.tools as any).altIsDown = alt;
        (fl.tools.penLoc as any).x = x;
        (fl.tools.penLoc as any).y = y;

        // 触发所有 mouseMove 监听器
        if (eventListeners.mouseMove) {
            for (const { handler } of eventListeners.mouseMove) {
                try {
                    // JSFL 的 mouseMove 事件回调不传参数！
                    // 但你的 EventBus 会从 fl.tools 和 penLoc 读取状态
                    handler(); // 👈 关键：调用原始监听器
                } catch (e) {
                    console.error("[MOCK] Listener error:", e);
                }
            }
        }
    },

    tools: {
        shiftIsDown: false,
        ctlIsDown: false,
        altIsDown: false,
        penLoc: { x: 0, y: 0 }
    },

    getDocumentDOM() {
        return null; // 或 mock document
    },

    trace(msg: string) {
        console.log(`[fl.trace] ${msg}`);
    },

    outputPanel: {
        clear() {},
        trace(msg: string) {
            console.log(`[Output] ${msg}`);
        }
    }
};

// 挂载到全局
if (typeof globalThis !== "undefined") {
    (globalThis as any).fl = fl;
}
