// --- EventListenerManager 类 (修正逻辑) ---
import {TaskQueue} from "./task_queue";
import {TimerTask} from "./types";
import {formatLocalDateTime} from "./date_format";

import * as log from 'loglevel';

export class EventListenerManager {
    private currentListenerId: number | null = null;
    private boundExecuteTasks: (() => void) | null = null;
    private lastExecutionTime: number = 0;

    private static readonly MOUSE_MOVE = 'mouseMove';

    constructor(private taskQueue: TaskQueue) {
    }

    updateStrategy(): void {
        // 获取当前任务数量
        const taskSize = this.taskQueue.getSize();


        // --- 任务不为空：创建或更新节流回调 ---

        // 1. 创建新的节流函数 (无论之前是否存在，我们都生成新的逻辑)
        this.boundExecuteTasks = this.createThrottledCallback();

        // 3. 添加新的监听
        this.currentListenerId = fl.addEventListener(EventListenerManager.MOUSE_MOVE as EventType, this.boundExecuteTasks);

        log.log(`[Monitor] 监听器已就绪 (当前任务数: ${taskSize})`);
    }

    private lastMinRemainingTime: number = 0;
    private interval: number = 0;

    private createThrottledCallback(): () => void {
        return () => {
            const now = Date.now();
            const minRemainingTime = this.taskQueue.getMinRemainingTime();

            // 获取当前任务数量
            const taskSize = this.taskQueue.getSize();

            // --- 核心修改：只有在任务数为 0 时才移除 ---
            if (minRemainingTime === null || taskSize === 0) {
                if (this.currentListenerId !== null) {
                    fl.removeEventListener(EventListenerManager.MOUSE_MOVE as EventType, this.currentListenerId);
                    this.currentListenerId = null;
                    this.boundExecuteTasks = null;
                    log.log(`[Monitor] 任务列表为空，已移除监听器`);
                }
                return; // 任务为空，直接返回，不再执行下面的绑定逻辑
            }


            // 修改 interval
            if (this.lastMinRemainingTime !== minRemainingTime) {
                this.lastMinRemainingTime = minRemainingTime;


                // --- 核心逻辑修改 ---
                // 1. 如果任务快到期了 (< 2秒)，取消节流，尽可能高频检查 (防止错过)
                if (minRemainingTime < 2000) {
                    this.interval = 0;
                }
                // 2. 如果任务在 2秒~10秒之间，使用精准时间，减少无效检查
                else if (minRemainingTime < 10000) {
                    this.interval = minRemainingTime - 1000;
                }
                    // 3. 如果任务很远 (> 10秒)，回归固定间隔策略
                //    目的是防止添加新任务时被“饿死” (确保至少每5/10秒检查一次)
                else if (minRemainingTime < 60000) {
                    this.interval = 5000;
                } else {
                    this.interval = 10000;
                }
            }

            if (this.interval === 0 || (now - this.lastExecutionTime) >= this.interval) {
                this.lastExecutionTime = now;
                executeTasks(this.taskQueue);
            }
        };
    }
}


// --- 配置常量 ---
const BATCH_SIZE = 10; // 分片大小：每次只处理 10 个任务
const THRESHOLD = 10; // 阈值：当任务数量超过 10 个时，才开启优化

// --- 状态变量 (如果在类外，需挂载在对象上；在类内则为 private 属性) ---
let _currentTaskIndex: number = 0;

function executeTasks(taskQueue: TaskQueue): void {
    const now = Date.now();
    const tasks = taskQueue['tasks'];
    const taskCount = tasks.length;

    // --- 情况 1：任务数量少于阈值，直接全量执行 (无任何优化) ---
    if (taskCount <= THRESHOLD) {

        const tasksToRemove: number[] = [];

        // 简单的全量遍历
        for (const task of tasks) {
            const elapsed = now - task.startTimeRecord;
            if (elapsed >= task.delay) {
                tasksToRemove.push(task.id);
                invokeTask(task);
            }
        }

        // 批量移除
        for (const id of tasksToRemove) {
            taskQueue.remove(id);
        }
        return;
    } else {
        // --- 情况 2：任务数量多，开启采样 + 分片优化 ---
        // 2. 分片：只处理一部分任务
        const endIndex = Math.min(_currentTaskIndex + BATCH_SIZE, taskCount);

        // 临时存储本次分片中需要移除的任务ID
        const tasksToRemove: number[] = [];

        // 只遍历当前分片 [startIndex, endIndex)
        for (let i = _currentTaskIndex; i < endIndex; i++) {
            const task = tasks[i];
            const elapsed = now - task.startTimeRecord;

            if (elapsed >= task.delay) {
                tasksToRemove.push(task.id);
                invokeTask(task);
            }
        }

        // 批量移除
        for (const id of tasksToRemove) {
            taskQueue.remove(id);
        }

        // 3. 更新索引，为下一次分片做准备
        _currentTaskIndex = endIndex;

        // 如果已经处理完一轮，重置索引
        if (_currentTaskIndex >= taskCount) {
            _currentTaskIndex = 0;
        }

        return;
    }

}


function invokeTask(task: TimerTask) {
    try {
        const now = Date.now();
        const elapsed = now - task.startTimeRecord;

        log.log('[Timer] 触发回调:', JSON.stringify({
            taskId: task.id,
            注册时间: formatLocalDateTime(new Date(task.startTimeRecord)),
            当前时间: formatLocalDateTime(new Date(now)),
            延迟设定: `${task.delay}ms`,
            实际耗时: `${elapsed}ms`,
            // 是否超时: elapsed > task.delay,
            超时: elapsed - task.delay,
            // 参数: task.args
        }));
        task.callback(...task.args);
    } catch (error) {
        log.error('[Timer] 回调执行错误', error);
    }
}



