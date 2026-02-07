import {TimerTask} from "./types";
import {TaskQueue} from "./task_queue";
import {EventListenerManager} from "./manager";

let globalId = 0;
const taskQueue = new TaskQueue();
const eventManager = new EventListenerManager(taskQueue);

export function setTimeout(callback: (...args: any[]) => void, delay: number, ...args: any[]): number {
    const id = globalId++;
    const task: TimerTask = {
        id,
        callback,
        startTimeRecord: Date.now(),
        delay,
        args: args // 👈 新增：将参数存入任务
    };
    taskQueue.add(task);
    eventManager.updateStrategy(); // 检查策略
    return id;
}


export function clearTimeout(id: number): void {
    const wasRemoved = taskQueue.remove(id);
    if (wasRemoved) {
        eventManager.updateStrategy(); // 检查策略
    }
}

export function clearAllTimers(): void {
    const success = taskQueue.removeAll();
    if (success) {
        eventManager.updateStrategy();
    }
}


