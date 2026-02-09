/**
 * @file: test_normal.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// --- 测试开始 ---

import {setTimeout} from "../../../src";

console.log("%c🚀 开始执行 setTimeout 模拟器压力测试", "color: blue; font-weight: bold;");

// 1. 测试：正常执行 (短时间)
console.log("%c--- 测试 1: 正常执行 (20秒和15秒)", "color: green;");


setTimeout(() => {
    console.log("✅ 测试1.1: 15秒任务完成");
}, 15000);

setTimeout(() => {
    console.log("✅ 测试1.2: 20秒任务完成");
}, 20000);
