/**
 * @file: test_more.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// --- 测试开始 ---
import { clearTimeout, setTimeout } from "../src";

console.log("%c🚀 开始执行 setTimeout 模拟器压力测试", "color: blue; font-weight: bold;");

// 4. 压力测试：大量任务
console.log("%c--- 测试 4: 压力测试 (连续创建10个任务)", "color: green;");
let pressureCount = 0;
for (let i = 0; i < 10; i++) {
    // 混合不同的延迟时间
    const delay = 1000 + Math.floor(Math.random() * 2000);
    setTimeout(() => {
        pressureCount++;
        console.log(`⚡ 压力测试: 任务 ${pressureCount}/10 已执行`);
        // 模拟一点微小的回调处理时间，测试是否阻塞
        // do nothing
    }, delay);
}
