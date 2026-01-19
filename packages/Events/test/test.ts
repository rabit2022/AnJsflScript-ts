// 示例使用方式

// 1. 创建配置
import { EventManager, EventType } from "../src";

const config = {
    getDocumentDOM: () => fl.getDocumentDOM(),
    tools: {
        shiftIsDown: fl.tools.shiftIsDown,
        ctlIsDown: fl.tools.ctlIsDown,
        altIsDown: fl.tools.altIsDown,
        penLoc: fl.tools.penLoc
    },
    flashVersion: fl.version,
    eventListener: {
        add: (type, handler) => fl.addEventListener(type, handler),
        remove: (type, id) => fl.removeEventListener(type, id)
    },
    logger: {
        trace: (...args) => console.log(...args),
        warn: (...args) => console.warn(...args)
    }
};

// 2. 创建事件管理器
const eventManager = new EventManager(config);

// 3. 添加事件监听器
eventManager.add(
    EventType.DOCUMENT_CHANGED,
    (event) => {
        console.log("Document changed:", event.document?.name);
    },
    "my-doc-change"
);

eventManager.add(
    EventType.LAYER_CHANGED,
    (event) => {
        console.log("Layer changed:", event.layer?.name);
    },
    "my-layer-change",
    this
);

// 4. 移除事件监听器
eventManager.remove(EventType.DOCUMENT_CHANGED, "my-doc-change");

// 5. 清空所有事件
eventManager.clear();

// 6. 销毁管理器
eventManager.destroy();
