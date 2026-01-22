// events-manager.ts
import {DocumentEvent, Event, FrameEvent, LayerEvent, MouseEvent} from "./events";

import * as _ from "lodash";


type EventHandler = (event: Event) => void;
type CallbackStore = Record<string, EventHandler>;

interface EventHandlerConfig {
    callbacks: CallbackStore | null;
    handler: () => void;
    id: number | -1;
}

const validEventTypesCS4 = [
    'documentNew', 'documentOpened', 'documentClosed', 'documentChanged',
    'layerChanged', 'frameChanged', 'mouseMove'
] as const;

export const validEventTypesCS5 = [...validEventTypesCS4, 'prePublish', 'postPublish', 'documentSaved'] as const;

type EventTypeCS4 = typeof validEventTypesCS4[number];
type EventTypeCS5 = typeof validEventTypesCS5[number];
export type XJSFLEventType = EventTypeCS5;

function isValidEventType(type: string, appVersion: number): type is XJSFLEventType {
    if (appVersion >= 11) {
        return _.includes(validEventTypesCS5, type as EventTypeCS5);
    } else {
        return _.includes(validEventTypesCS4, type as EventTypeCS4);
    }
}

// 模拟 xsettings.app.version（实际应从配置读取）
const APP_VERSION = 12; // 假设 CS6+

export class events {
    public handlers = {} as Record<XJSFLEventType, EventHandlerConfig>;


    constructor() {
        // 初始化所有事件处理器占位
        for (const type of validEventTypesCS5) {
            this.handlers[type] = {
                callbacks: null,
                handler: this.createGatewayHandler(type),
                id: -1
            };
        }
    }

    createGatewayHandler(type: XJSFLEventType): () => void {
        return () => {
            let event: Event;
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
            this.fire(event);
        };
    };


    // 重载签名
    add(type: 'documentNew' | 'documentOpened' | 'documentClosed' | 'documentChanged' | 'prePublish' | 'postPublish' | 'documentSaved',
        callback: (e: DocumentEvent) => void,
        name: string,
        scope?: any): void;

    add(type: 'layerChanged',
        callback: (e: LayerEvent) => void,
        name: string,
        scope?: any): void;

    add(type: 'frameChanged',
        callback: (e: FrameEvent) => void,
        name: string,
        scope?: any): void;

    add(type: 'mouseMove',
        callback: (e: MouseEvent) => void,
        name: string,
        scope?: any): void;

    // add(type: XJSFLEventType, callback: EventHandler, name: string, scope?: any): boolean {
    add(type: XJSFLEventType, callback: Function, name: string, scope?: any): boolean {
        if (!isValidEventType(type, APP_VERSION)) {
            throw new Error(`xjsfl events:add(): Invalid or unsupported event type "${type}"`);
        }

        if (typeof callback !== 'function') {
            throw new Error('xjsfl events:add(): Parameter "callback" must be a Function');
        }

        const handlerConfig = this.handlers[type];

        // 注册网关监听器（仅一次）
        if (handlerConfig.callbacks === null) {
            handlerConfig.id = fl.addEventListener(type as EventType, handlerConfig.handler);
            handlerConfig.callbacks = {};

            console.log(`add event [${type}] [${name}] : ${handlerConfig.id}`)

        }

        // 绑定作用域
        const fn = scope ? (e: Event) => callback.call(scope, e) : callback;
        handlerConfig.callbacks[name] = fn as EventHandler;

        return true;
    }

    remove(type: XJSFLEventType, name: string): void;
    remove(name: string): void;

    remove(...args: [XJSFLEventType, string] | [string]): void {
        if (args.length === 2) {
            const [type, name] = args;
            const config = this.handlers[type];
            if (config.callbacks && config.callbacks[name]) {
                delete config.callbacks[name];
                if (Object.keys(config.callbacks).length === 0) {
                    if (config.id !== -1) {
                        fl.removeEventListener(type as EventType, config.id);
                        console.log(`remove event [${type}] [${name}] : ${config.id}`)
                    }
                    config.callbacks = null;
                    config.id = -1;
                }
            }
        } else {
            // 移除所有类型中名为 name 的回调
            const name = args[0];
            for (const type in this.handlers) {
                this.remove(type as XJSFLEventType, name);
            }
        }
    }

    removeAll(type?: XJSFLEventType): void {
        if (type) {
            console.log(`remove all event ${type}`)

            const config = this.handlers[type];
            if (config.callbacks) {
                for (const name in config.callbacks) {
                    this.remove(type, name);
                }
            }
        } else {
            console.log(`remove all event`)

            for (const t in this.handlers) {
                this.removeAll(t as XJSFLEventType);
            }
        }
    }

    get(type: XJSFLEventType, name: string): EventHandler | null {
        return this.handlers[type]?.callbacks?.[name] ?? null;
    }

    fire(event: Event): void {
        const callbacks = this.handlers[event.type as XJSFLEventType]?.callbacks;
        if (callbacks) {
            for (const key in callbacks) {
                callbacks[key](event);
            }
        }
    }

    toString(): string {
        return '[class Events]';
    }
};


export const EventBus = new events();

