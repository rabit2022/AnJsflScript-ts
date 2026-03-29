type EventCallback<T = any> = (payload: T) => void;

export class XULEventBus {
    private events: Map<string, Set<EventCallback>> = new Map();

    // 注册事件
    on<T = any>(event: string, callback: EventCallback<T>): void {
        if (!this.events.has(event)) {
            this.events.set(event, new Set());
        }
        this.events.get(event)!.add(callback);
    }

    // 触发事件
    emit<T = any>(event: string, payload?: T): void {
        const callbacks = this.events.get(event);
        if (!callbacks) return;

        callbacks.forEach(cb => cb(payload as T));
    }

    // 移除事件
    off<T = any>(event: string, callback?: EventCallback<T>): void {
        const callbacks = this.events.get(event);
        if (!callbacks) return;

        if (callback) {
            callbacks.delete(callback);
        } else {
            this.events.delete(event);
        }
    }

    // 只执行一次
    once<T = any>(event: string, callback: EventCallback<T>): void {
        const wrapper: EventCallback<T> = (payload) => {
            callback(payload);
            this.off(event, wrapper);
        };

        this.on(event, wrapper);
    }

    // 清空
    clear(): void {
        this.events.clear();
    }
}
