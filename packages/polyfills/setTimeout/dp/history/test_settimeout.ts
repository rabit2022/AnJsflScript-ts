/**
 * @file: test_settimeout.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// --- 测试开始 ---
import { clearTimeout, setTimeout } from "../src";

console.log("%c🚀 开始执行 setTimeout 模拟器压力测试", "color: blue; font-weight: bold;");

// // 5. 测试：队列清空后的状态
// console.log("%c--- 测试 5: 验证最终清理", "color: green;");
// setTimeout(() => {
//   console.log("⏳ 5秒后检查最终状态...");
//   setTimeout(() => {
//     console.log("⏳ 6秒后再次检查...");
//     // 此时所有任务应已结束
//     console.log(`📊 最终统计: 当前队列长度 = ${taskQueue.length}`);
//     console.log(`📊 最终统计: 监听器状态 (currentListenerId) = ${currentListenerId}`);
//     if (currentListenerId === null && taskQueue.length === 0) {
//       console.log("%c🎉 恭喜！系统空闲，清理成功，无内存泄漏！", "color: purple; font-weight: bold;");
//     }
//   }, 1000);
// }, 5000);
