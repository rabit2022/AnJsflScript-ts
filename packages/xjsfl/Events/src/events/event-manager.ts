// events/event-manager.ts
import { IEventHandler, IEventManagerConfig } from "../types/event-types";
import { EventType } from "../constants/event-constants";
import { EventFactory } from "./event-factory";

export class EventManager {
    private config: IEventManagerConfig;
    private handlers: Map<string, IEventHandler>;
    private factory: EventFactory;
    private logger?: any;

    constructor(config: IEventManagerConfig = {}) {
        this.config = config;
        this.handlers = new Map();
        this.factory = new EventFactory({
            getDocumentDOM: config.getDocumentDOM,
            tools: config.tools
        });
        this.logger = config.logger;

        this.initializeDefaultHandlers();
    }

    /**
     * 添加事件监听器
     */
    add(
        type: string,
        callback: Function,
        name: string = "default",
        scope?: any
    ): boolean {
        // 检查事件类型是否有效
        if (!this.isValidEventType(type)) {
            throw new Error(`Invalid event type: "${type}"`);
        }

        // 检查CS5+事件支持
        if (!this.factory.isEventSupported(type, this.config.flashVersion)) {
            throw new Error(`CS5 or greater required for event type: "${type}"`);
        }

        // 检查回调函数
        if (typeof callback !== "function") {
            throw new Error("Callback must be a function");
        }

        // 获取或创建事件处理器
        if (!this.handlers.has(type)) {
            this.handlers.set(type, {
                callbacks: new Map(),
                handler: this.createGatewayHandler(type),
                id: undefined
            });
        }

        const handler = this.handlers.get(type)!;

        // 包装回调函数（支持作用域）
        const wrappedCallback = scope
            ? (event: any) => callback.call(scope, event)
            : callback;

        // 添加回调
        handler.callbacks.set(name, wrappedCallback);

        // 如果是第一个回调，注册到系统
        if (handler.callbacks.size === 1 && this.config.eventListener) {
            try {
                handler.id = this.config.eventListener.add(type, handler.handler);
                if (this.logger?.trace) {
                    this.logger.trace(`Registered system event listener for: ${type}`);
                }
            } catch (error) {
                if (this.logger?.warn) {
                    this.logger.warn(
                        `Failed to register event listener for ${type}:`,
                        error
                    );
                }
            }
        }

        if (this.logger?.trace) {
            this.logger.trace(`Added event callback: ${type}:${name}`);
        }

        return true;
    }

    /**
     * 移除事件监听器
     */
    remove(type?: string, name?: string): void {
        // 移除特定事件的特定回调
        if (type && name) {
            const handler = this.handlers.get(type);
            if (handler?.callbacks.has(name)) {
                handler.callbacks.delete(name);
                this.cleanupHandlerIfEmpty(type);
            }
        }
        // 移除特定类型的所有回调
        else if (type) {
            const handler = this.handlers.get(type);
            if (handler) {
                this.removeAllCallbacks(type);
                this.removeSystemListener(type);
                this.handlers.delete(type);
            }
        }
        // 移除所有回调
        else {
            // for (const [type] of this.handlers) {
            //     this.removeAllCallbacks(type);
            //     this.removeSystemListener(type);
            // }
            // 使用 forEach 迭代 Map
            this.handlers.forEach((handler, type) => {
                this.removeAllCallbacks(type);
                this.removeSystemListener(type);
            });
            this.handlers.clear();
        }
    }

    /**
     * 获取事件回调函数
     */
    get(type: string, name: string): Function | null {
        const handler = this.handlers.get(type);
        return handler?.callbacks.get(name) || null;
    }

    /**
     * 触发事件（主要用于测试）
     */
    trigger(type: string, eventData?: any): void {
        const handler = this.handlers.get(type);
        if (!handler) return;

        const event = eventData || this.factory.createEvent(type);
        this.fireCallbacks(type, event);
    }

    /**
     * 获取所有已注册的事件类型
     */
    getRegisteredTypes(): string[] {
        return Array.from(this.handlers.keys());
    }

    /**
     * 获取特定事件的所有回调名称
     */
    getCallbackNames(type: string): string[] {
        const handler = this.handlers.get(type);
        return handler ? Array.from(handler.callbacks.keys()) : [];
    }

    /**
     * 清空所有事件监听器
     */
    clear(): void {
        this.remove();
    }

    /**
     * 销毁事件管理器
     */
    destroy(): void {
        this.clear();
        this.handlers.clear();
        // 清除所有引用
        (this as any).config = null;
        (this as any).factory = null;
        (this as any).logger = null;
    }

    /**
     * 私有方法
     */
    private initializeDefaultHandlers(): void {
        // 预定义所有支持的事件类型
        const defaultTypes = Object.values(EventType);
        defaultTypes.forEach((type) => {
            if (!this.handlers.has(type)) {
                this.handlers.set(type, {
                    callbacks: new Map(),
                    handler: this.createGatewayHandler(type),
                    id: undefined
                });
            }
        });
    }

    private createGatewayHandler(type: string): Function {
        return () => {
            try {
                const event = this.factory.createEvent(type);
                this.fireCallbacks(type, event);
            } catch (error) {
                if (this.logger?.warn) {
                    this.logger.warn(
                        `Error in event gateway handler for ${type}:`,
                        error
                    );
                }
            }
        };
    }

    private fireCallbacks(type: string, event: any): void {
        const handler = this.handlers.get(type);
        if (!handler) return;

        handler.callbacks.forEach((callback, name) => {
            try {
                callback(event);
            } catch (error) {
                if (this.logger?.warn) {
                    this.logger.warn(`Error in event callback ${type}:${name}:`, error);
                }
            }
        });
    }

    private cleanupHandlerIfEmpty(type: string): void {
        const handler = this.handlers.get(type);
        if (handler && handler.callbacks.size === 0) {
            this.removeSystemListener(type);
            this.handlers.delete(type);
        }
    }

    private removeAllCallbacks(type: string): void {
        const handler = this.handlers.get(type);
        if (handler) {
            handler.callbacks.clear();
        }
    }

    private removeSystemListener(type: string): void {
        const handler = this.handlers.get(type);
        if (handler?.id && this.config.eventListener) {
            try {
                this.config.eventListener.remove(type, handler.id);
                handler.id = undefined;
            } catch (error) {
                if (this.logger?.warn) {
                    this.logger.warn(
                        `Failed to remove system listener for ${type}:`,
                        error
                    );
                }
            }
        }
    }

    private isValidEventType(type: string): boolean {
        const validTypes = [...Object.values(EventType)];
        return validTypes.includes(type as EventType);
    }
}
