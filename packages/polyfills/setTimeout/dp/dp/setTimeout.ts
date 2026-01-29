// /**
//  * @file: setTimeout.ts
//  * @author: 穹的兔兔
//  * @email: 3101829204@qq.com
//  * @date: 2026/1/25 21:10
//  * @project: AnJsflScript-ts
//  * @description:
//  */// // region 基础环境模拟
// // declare const fl: {
// //   addEventListener(type: string, listener: () => void): number;
// //   removeEventListener(type: string, listener: number): void;
// // };
// // // endregion
//
// // region 1. 定义任务结构
// interface TimerTask {
//     id: number;
//     callback: () => void;
//     startTimeRecord: number;
//     delay: number;
// }
// // endregion
//
// // region 2. 全局状态
// const taskQueue: TimerTask[] = [];
// let globalId = 0;
//
// // 保存当前的事件监听器ID，用于后续移除
// let currentListenerId: number | null = null;
// // endregion
//
// // region 3. 核心驱动：智能监听控制
// /**
//  * 检查队列状态，并决定是否开启或关闭监听
//  */
// function updateMonitoring(): void {
//     const shouldMonitor = taskQueue.length > 0;
//
//     // 如果需要监听，但还没开启
//     if (shouldMonitor && currentListenerId === null) {
//         const id = fl.addEventListener("mouseMove", checkQueue);
//         currentListenerId = id;
//         console.log("[Monitor] 已开启 mouseMove 监听");
//     }
//
//     // 如果不需要监听，且已经开启
//     else if (!shouldMonitor && currentListenerId !== null) {
//         fl.removeEventListener("mouseMove", currentListenerId);
//         currentListenerId = null;
//         console.log("[Monitor] 已关闭 mouseMove 监听，队列空闲");
//     }
// }
//
// /**
//  * 这是真正的执行引擎
//  * 只有当鼠标移动时才会触发这个函数
//  */
// function checkQueue(): void {
//     const now = Date.now();
//
//     // 倒序遍历，防止删除元素导致索引错乱
//     for (let i = taskQueue.length - 1; i >= 0; i--) {
//         const task = taskQueue[i];
//         const actualElapsed = now - task.startTimeRecord; // 实际经过的时间
//         const timeDiff = actualElapsed - task.delay; // 实际与设定的偏差
//
//         // 判断任务是否到期
//         if (actualElapsed >= task.delay) {
//             // 1. 从队列中移除任务
//             taskQueue.splice(i, 1);
//
//             // 2. 立即检查是否需要更新监听状态（如果队列空了，就关闭监听）
//             updateMonitoring();
//
//             // 3. 打印详细的执行日志
//             console.log(
//                 `[Timer] 任务触发 | ` +
//                     `ID: ${task.id} | ` +
//                     `设定延迟: ${task.delay}ms | ` +
//                     `实际耗时: ${actualElapsed}ms | ` +
//                     `时间偏差: ${timeDiff}ms`
//             );
//
//             // 4. 执行回调函数 (放在最后，防止回调里的错误影响上面的清理逻辑)
//             try {
//                 task.callback();
//             } catch (error) {
//                 console.error(`[Timer] 回调执行出错 | ID: ${task.id}`, error);
//             }
//         }
//     }
// }
//
// // endregion
//
// // region 4. setTimeout & clearTimeout
// export function setTimeout(callback: () => void, delay: number): number {
//     const id = globalId++;
//     const task: TimerTask = {
//         id,
//         callback,
//         startTimeRecord: Date.now(),
//         delay
//     };
//
//     taskQueue.push(task);
//     // 状态变了，重新评估是否需要监听
//     updateMonitoring();
//
//     console.log(`[Timer] 注册 #${id} (队列长度: ${taskQueue.length})`);
//     return id;
// }
//
// export function clearTimeout(id: number): void {
//     for (let i = 0; i < taskQueue.length; i++) {
//         if (taskQueue[i].id === id) {
//             taskQueue.splice(i, 1);
//             console.log(`[Timer] 取消 #${id}`);
//             // 状态变了，重新评估（可能队列变空了，需要关闭监听）
//             updateMonitoring();
//             return;
//         }
//     }
// }
// // endregion
//
// (window as any).setTimeout = setTimeout;
// (window as any).clearTimeout = clearTimeout;
