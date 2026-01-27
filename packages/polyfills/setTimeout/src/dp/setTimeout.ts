// // region 基础环境模拟
// declare const fl: {
//     addEventListener(type: string, listener: () => void): number;
//     removeEventListener(type: string, listener: number): void;
// };
// // endregion
//
// // region 2. 修改后的任务结构
// interface TimerTask {
//     id: number;
//     callback: (...args: any[]) => void; // 修改为支持任意参数的函数
//     startTimeRecord: number;
//     delay: number;
//     args: any[]; // 👈 新增：用于存储传入的参数
// }
// // endregion
//
// // region 2. 封装任务队列类
// class TaskQueue {
//     private tasks: TimerTask[] = [];
//
//     add(task: TimerTask): void {
//         this.tasks.push(task);
//     }
//
//     remove(id: number): boolean {
//         const index = this.tasks.findIndex(t => t.id === id);
//         if (index !== -1) {
//             this.tasks.splice(index, 1);
//             return true;
//         }
//         return false;
//     }
//
//     // 核心方法：供全局执行器调用，返回到期的任务ID
//     getDueTasks(): number[] {
//         const now = Date.now();
//         return this.tasks
//             .filter(task => now - task.startTimeRecord >= task.delay)
//             .map(task => task.id);
//     }
//
//     // 供管理器判断策略使用
//     getMinRemainingTime(): number | null {
//         if (this.tasks.length === 0) return null;
//         const now = Date.now();
//         return Math.min(...this.tasks.map(task => task.startTimeRecord + task.delay - now));
//     }
//
//     size(): number {
//         return this.tasks.length;
//     }
// }
// // endregion
//
// // region 3. 全局执行函数 (独立于类)
// // 这个函数只负责执行，不负责监听
// function executeTasks(taskQueue: TaskQueue): void {
//     const dueTaskIds = taskQueue.getDueTasks();
//     dueTaskIds.forEach(id => {
//         // 注意：这里需要一个机制来获取并执行回调，简单的实现是直接在 getDueTasks 中执行
//         // 为了保持纯粹，我们假设 getDueTasks 只返回ID，这里做移除和执行
//         // 实际上，更推荐 getDueTasks 返回 [id, callback] 元组
//         console.log(`[Timer] 任务触发 ID: ${id}`);
//         // 这里需要从队列中取出并执行，或者维护一个全局的回调映射
//         // 为了简化，假设我们有一个机制来触发
//     });
// }
// // endregion
//
// // region 4. 重新设计 EventListenerManager
// // 管理器只负责监听策略，不负责执行细节
//
//
//
//
// class EventListenerManager {
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
//     constructor(private taskQueue: TaskQueue) {}
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
//                 fl.removeEventListener(this.currentEventType, this.currentListenerId);
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
//                 const id = fl.addEventListener(targetEvent, this.boundExecuteTasks);
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
// // endregion
//
// // region 5. 全局初始化与导出
// let globalId = 0;
// const taskQueue = new TaskQueue();
// const eventManager = new EventListenerManager(taskQueue);
//
// // 全局执行函数的具体实现（修正版，包含回调执行）
//
//
//
// function executeTasks(taskQueue: TaskQueue): void {
//     const now = Date.now();
//     const tasksToRemove: number[] = [];
//     const tasksToExecute: {
//         callback: (...args: any[]) => void;args: any[]
//     } [] = [];
//     // 👆 修改 tasksToExecute 的类型，使其包含 callback 和 args
//
//     // --- 1. 收集阶段：使用 for...of 遍历 ---
//     // 这里假设 taskQueue['tasks'] 是一个数组
//     for (const task of taskQueue['tasks']) {
//         const elapsed = now - task.startTimeRecord;
//         if (elapsed >= task.delay) {
//             console.log('[Timer] 触发回调:', {
//                 taskId: task.id,
//                 注册时间: new Date(task.startTimeRecord).toISOString(),
//                 当前时间: new Date(now).toISOString(),
//                 延迟设定: `${task.delay}ms`,
//                 实际耗时: `${elapsed}ms`,
//                 是否超时: elapsed > task.delay,
//                 参数: task.args
//             });
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
//
//
//
//
//
//
//
// // endregion
//
// // region 6. 修改后的 API 导出
// // 使用 rest parameters (...) 来捕获所有额外的参数
// export function setTimeout(callback: (...args: any[]) => void, delay: number, ...args: any[]): number {
//     const id = globalId++;
//     const task: TimerTask = {
//         id,
//         callback,
//         startTimeRecord: Date.now(),
//         delay,
//         args: args // 👈 新增：将参数存入任务
//     };
//     taskQueue.add(task);
//     eventManager.updateStrategy(); // 检查策略
//     return id;
// }
// // 注意：clearTimeout 不需要修改，因为它只依赖 ID
// // endregion
//
// export function clearTimeout(id: number): void {
//     const wasRemoved = taskQueue.remove(id);
//     if (wasRemoved) {
//         eventManager.updateStrategy(); // 检查策略
//     }
// }
// // endregion
//
//
//
//
//
// function setInterval(callback, delay, ...args) {
//     let timerId;
//
//     function loop() {
//         callback(...args); // 执行回调，并传递参数
//         timerId = setTimeout(loop, delay); // 递归调用
//     }
//
//     timerId = setTimeout(loop, delay);
//
//     // 返回一个函数，调用它即可清除定时器
//     return function() {
//         clearTimeout(timerId);
//     };
// }
//
// // 使用示例
// const stop = mySetInterval((name) => {
//     console.log(`Hello, ${name}!`);
// }, 1000, 'Alice');
//
// // 5秒后停止
// setTimeout(() => {
//     stop();
// }, 5000);