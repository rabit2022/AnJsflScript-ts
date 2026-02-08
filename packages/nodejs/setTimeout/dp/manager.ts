/**
 * @file: manager.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

// import {TaskQueue} from "./task_queue";
//
// export class EventListenerManager {
//     private currentListenerId: number | null = null;
//     private currentEventType: string | null = null;
//
//     // 👇 新增：缓存回调函数的引用
//     // 这样在移除监听时，我们能确保引用一致
//     private boundExecuteTasks: (() => void) | null = null;
//
//     private static readonly MOUSE_MOVE = 'mouseMove';
//     private static readonly FRAME_CHANGED = 'frameChanged';
//     private static readonly LAYER_CHANGED = 'layerChanged';
//
//     constructor(private taskQueue: TaskQueue) {
//     }
//
//     updateStrategy(): void {
//         const minRemainingTime = this.taskQueue.getMinRemainingTime();
//         let targetEvent: string | null = null;
//
//         if (minRemainingTime === null) {
//             targetEvent = null;
//         } else if (minRemainingTime < 10000) {
//             targetEvent = EventListenerManager.MOUSE_MOVE;
//         } else if (minRemainingTime >= 60000) {
//             targetEvent = EventListenerManager.LAYER_CHANGED;
//         } else {
//             targetEvent = EventListenerManager.FRAME_CHANGED;
//         }
//
//         // --- 核心修改区域 ---
//         // 1. 如果目标事件和当前事件不同，先清理旧的
//         if (targetEvent !== this.currentEventType) {
//
//             // 1.1 无论是否添加新的，先移除旧的监听 (保护性操作)
//             if (this.currentListenerId !== null && this.currentEventType !== null) {
//                 fl.removeEventListener(this.currentEventType as EventType, this.currentListenerId);
//             }
//
//             // 1.2 清理旧的状态
//             this.currentListenerId = null;
//             this.currentEventType = null;
//             // 👇 清理旧的回调引用
//             this.boundExecuteTasks = null;
//
//             // 1.3 如果有新的目标事件，才进行添加
//             if (targetEvent !== null) {
//
//                 // 👇 创建新的回调函数
//                 this.boundExecuteTasks = () => executeTasks(this.taskQueue);
//
//                 // 👇 添加新的监听
//                 const id = fl.addEventListener(targetEvent as EventType, this.boundExecuteTasks);
//
//                 // 👇 更新状态
//                 this.currentListenerId = id;
//                 this.currentEventType = targetEvent;
//
//                 console.log(`[Monitor] 切换监听器至: ${targetEvent}`);
//             } else {
//                 console.log(`[Monitor] 所有任务结束，监听器已关闭`);
//             }
//         }
//         // --- 核心修改区域结束 ---
//     }
// }
//
//
// function executeTasks(taskQueue: TaskQueue): void {
//     const now = Date.now();
//     const tasksToRemove: number[] = [];
//     const tasksToExecute: {
//         callback: (...args: any[]) => void; args: any[]
//     } [] = [];
//     // 👆 修改 tasksToExecute 的类型，使其包含 callback 和 args
//
//     // --- 1. 收集阶段：使用 for...of 遍历 ---
//     // 这里假设 taskQueue['tasks'] 是一个数组
//     for (const task of taskQueue['tasks']) {
//         const elapsed = now - task.startTimeRecord;
//         if (elapsed >= task.delay) {
//             console.log('[Timer] 触发回调:', JSON.stringify({
//                 taskId: task.id,
//                 注册时间: new Date(task.startTimeRecord).toISOString(),
//                 当前时间: new Date(now).toISOString(),
//                 延迟设定: `${task.delay}ms`,
//                 实际耗时: `${elapsed}ms`,
//                 是否超时: elapsed > task.delay,
//                 超时: elapsed - task.delay,
//                 参数: task.args
//             }));
//
//             tasksToRemove.push(task.id);
//
//             // 👇 将 callback 和 args 一起存入，以便后续执行
//             tasksToExecute.push({
//                 callback: task.callback,
//                 args: task.args
//             });
//         }
//     }
//
//     // --- 2. 移除阶段 ---
//     // 先移除任务，避免在执行回调时队列状态不一致
//     for (const id of tasksToRemove) {
//         taskQueue.remove(id);
//     }
//
//     // --- 3. 执行阶段 ---
//     // 遍历要执行的任务列表
//     for (const task of tasksToExecute) {
//         try {
//             // 使用扩展运算符传入参数
//             task.callback(...task.args);
//         } catch (error) {
//             console.error('[Timer] 回调执行错误', error);
//         }
//     }
// }
