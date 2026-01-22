// --- 测试开始 ---
import {clearTimeout, setTimeout} from "../src";

console.log("%c🚀 开始执行 setTimeout 模拟器压力测试", "color: blue; font-weight: bold;");

// 1. 测试：正常执行 (短时间)
console.log("%c--- 测试 1: 正常执行 (1秒和0.5秒)", "color: green;");
setTimeout(() => {
    console.log("✅ 测试1.1: 1秒任务完成");
}, 1000);

setTimeout(() => {
    console.log("✅ 测试1.2: 0.5秒任务完成");
}, 500);



