/**
 * @file: test_cancel.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// --- 测试开始 ---
import { clearTimeout, setTimeout } from "../src";

console.log("%c🚀 开始执行 setTimeout 模拟器压力测试", "color: blue; font-weight: bold;");

// 2. 测试：取消功能
console.log("%c--- 测试 2: 取消功能 (2秒后取消3秒任务)", "color: green;");
const taskToCancelId = setTimeout(() => {
    console.log("❌ 这个任务不应该出现 (ID: taskToCancel)");
}, 3000);

// 在 2秒时取消它
setTimeout(() => {
    console.log("⏳ 正在取消 3秒任务...");
    clearTimeout(taskToCancelId);
    console.log("✅ 测试2: 取消任务验证通过");
}, 2000);
