// types.d.ts 或直接写在主文件顶部

// --- 事件系统核心类型 ---
type EventCallback<T extends BaseEvent> = (event: T) => void;
type EventMap = {
    [DocumentEvent.CHANGED]: DocumentEvent;
    [DocumentEvent.CLOSED]: DocumentEvent;
    [DocumentEvent.NEW]: DocumentEvent;
    [DocumentEvent.OPENED]: DocumentEvent;
    [DocumentEvent.PUBLISH]: DocumentEvent;
    [DocumentEvent.PUBLISHED]: DocumentEvent;
    [DocumentEvent.SAVED]: DocumentEvent;
    [FrameEvent.CHANGED]: FrameEvent;
    [LayerEvent.CHANGED]: LayerEvent;
    [MouseEvent.MOVE]: MouseEvent;
};

// src/Events.ts

/**
 * 基础事件类
 */
class BaseEvent {
    constructor(
        public type: string,
        public subtype: string,
        public time: Date = new Date()
    ) {}
}

/**
 * DocumentEvent
 */
class DocumentEvent extends BaseEvent {
    static NEW = "documentNew";
    static OPENED = "documentOpened";
    static CLOSED = "documentClosed";
    static CHANGED = "documentChanged";
    static PUBLISH = "prePublish";
    static PUBLISHED = "postPublish";
    static SAVED = "documentSaved";

    constructor(type: string, subtype: string) {
        super(type, subtype);
        this.document = fl.getDocumentDOM() || null;
    }

    readonly document: Document | null;

    toString() {
        const docName = this.document ? this.document.name : "null";
        const docId = this.document ? this.document.id : "null";
        return `[object DocumentEvent type="${this.type}" name="${docName}" id="${docId}"]`;
    }
}

/**
 * LayerEvent
 */
class LayerEvent extends BaseEvent {
    static CHANGED = "layerChanged";

    constructor() {
        super(LayerEvent.CHANGED, "changed");
        const dom = fl.getDocumentDOM();
        this.document = dom;
        this.timeline = dom ? dom.getTimeline() : null;
        this.layer = this.timeline
            ? this.timeline.layers[this.timeline.currentLayer]
            : null;
    }

    readonly document: Document | null;
    readonly timeline: Timeline | null;
    readonly layer: Layer | null;

    toString() {
        const timelineName = this.timeline ? this.timeline.name : "null";
        const layerName = this.layer ? this.layer.name : "null";
        return `[object LayerEvent timeline="${timelineName}" layer="${layerName}"]`;
    }
}

/**
 * FrameEvent
 */
class FrameEvent extends BaseEvent {
    static CHANGED = "frameChanged";

    constructor() {
        super(FrameEvent.CHANGED, "changed");
        const dom = fl.getDocumentDOM();
        this.document = dom;
        this.timeline = dom ? dom.getTimeline() : null;
        this.layer = this.timeline
            ? this.timeline.layers[this.timeline.currentLayer]
            : null;
        this.frame = this.layer ? this.layer.frames[this.timeline!.currentFrame] : null;
    }

    readonly document: Document | null;
    readonly timeline: Timeline | null;
    readonly layer: Layer | null;
    readonly frame: Frame | null;

    toString() {
        const timelineName = this.timeline ? this.timeline.name : "null";
        const layerName = this.layer ? this.layer.name : "null";
        const frameIndex = this.timeline ? this.timeline.currentFrame : "null";
        return `[object FrameEvent timeline="${timelineName}" layer="${layerName}" frame="${frameIndex}"]`;
    }
}

/**
 * MouseEvent
 */
class MouseEvent extends BaseEvent {
    static MOVE = "mouseMove";

    constructor() {
        super(MouseEvent.MOVE, "move");
        this.shift = fl.tools.shiftIsDown;
        this.ctrl = fl.tools.ctlIsDown; // JSFL 特有拼写
        this.alt = fl.tools.altIsDown;
        this.x = fl.tools.penLoc.x;
        this.y = fl.tools.penLoc.y;
    }

    readonly shift: boolean;
    readonly ctrl: boolean;
    readonly alt: boolean;
    readonly x: number;
    readonly y: number;

    toString() {
        return `[object MouseEvent x="${this.x}" y="${this.y}" shift="${this.shift}" ctrl="${this.ctrl}" alt="${this.alt}"]`;
    }
}

// ------------------------------------------------------------------------------
// 事件管理器核心
// ------------------------------------------------------------------------------

interface EventHandler<T extends BaseEvent> {
    (event: T): void;
}

interface CallbackRecord<T extends BaseEvent> {
    callback: EventHandler<T>;
    scope?: any; // 如果需要绑定 this
}

interface EventRegistration {
    id: number; // Flash 返回的监听 ID
    callbacks: Map<string, CallbackRecord<any>>; // 名字 -> 回调函数
}

class EventManager {
    private registrations = new Map<string, EventRegistration>();

    // 1. 添加事件监听
    add<K extends keyof EventMap>(
        type: K,
        callback: EventHandler<EventMap[K]>,
        name: string,
        scope?: any
    ): boolean {
        // 👇 关键：将 type 显式视为 string
        const eventType = type as EventType;

        // // 检查 Flash 版本 (简化版，实际可能需要更复杂的检测)
        // const isCS5Event = [
        //     DocumentEvent.PUBLISH,
        //     DocumentEvent.PUBLISHED,
        //     DocumentEvent.SAVED,
        // ].includes(type as string);

        // if (isCS5Event && !this.isCS5OrLater()) {
        //   throw new Error(`EventManager.add(): CS5 or greater required for event type "${eventType}"`);
        // }

        // 获取或创建该类型的注册记录
        let reg = this.registrations.get(eventType);
        if (!reg) {
            const flashId = fl.addEventListener(eventType, () => this.fire(eventType));
            reg = { id: flashId, callbacks: new Map() };
            this.registrations.set(eventType, reg);
        }

        // 存储回调
        reg.callbacks.set(name, { callback, scope });
        return true;
    }

    // 2. 移除指定事件
    remove(type: EventType, name: string): void {
        const reg = this.registrations.get(type);
        if (reg && reg.callbacks.has(name)) {
            reg.callbacks.delete(name);

            // 如果没有回调了，移除 Flash 监听
            if (reg.callbacks.size === 0) {
                fl.removeEventListener(type, reg.id);
                this.registrations.delete(type);
            }
        }
    }

    // 3. 移除所有
    removeAll(type?: EventType): void {
        if (type) {
            const reg = this.registrations.get(type);
            if (reg) {
                fl.removeEventListener(type, reg.id);
                this.registrations.delete(type);
            }
        } else {
            for (const [eventType, reg] of this.registrations) {
                fl.removeEventListener(eventType, reg.id);
            }
            this.registrations.clear();
        }
    }

    // 4. 获取回调
    get<K extends keyof EventMap>(
        type: K,
        name: string
    ): EventHandler<EventMap[K]> | null {
        const reg = this.registrations.get(type);
        if (reg && reg.callbacks.has(name)) {
            return reg.callbacks.get(name)!.callback as EventHandler<EventMap[K]>;
        }
        return null;
    }

    // 内部：触发事件
    private fire<K extends keyof EventMap>(type: K): void {
        const eventType = type as string; // 👈

        const reg = this.registrations.get(eventType);
        if (!reg) return;
        // 创建具体的事件对象
        let event: EventMap[K];
        switch (eventType) {
            case DocumentEvent.NEW:
            case DocumentEvent.OPENED:
            case DocumentEvent.CLOSED:
            case DocumentEvent.CHANGED:
            case DocumentEvent.PUBLISH:
            case DocumentEvent.PUBLISHED:
            case DocumentEvent.SAVED:
                event = new DocumentEvent(eventType, "temp") as EventMap[K];
                break;
            case LayerEvent.CHANGED:
                event = new LayerEvent() as EventMap[K];
                break;
            case FrameEvent.CHANGED:
                event = new FrameEvent() as EventMap[K];
                break;
            case MouseEvent.MOVE:
                event = new MouseEvent() as EventMap[K];
                break;
            default:
                throw new Error("Unknown event type");
        }

        // 执行所有回调
        for (const record of reg.callbacks.values()) {
            try {
                if (record.scope) {
                    record.callback.call(record.scope, event);
                } else {
                    record.callback(event);
                }
            } catch (e) {
                fl.trace(`Event Error: ${e}`);
            }
        }
    }

    // 辅助方法：检查版本 (伪代码)
    // private isCS5OrLater(): boolean {
    //   // 实际实现需要读取 fl.version 或其他方式
    //   return true;
    // }
}

// ------------------------------------------------------------------------------
// 导出单例实例
// ------------------------------------------------------------------------------

const Events = new EventManager();
export { Events, DocumentEvent, LayerEvent, FrameEvent, MouseEvent };
