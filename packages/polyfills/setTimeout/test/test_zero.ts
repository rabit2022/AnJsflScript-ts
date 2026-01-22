// --- 测试开始 ---
import {clearTimeout, setTimeout} from "../src";

console.log("%c🚀 开始执行 setTimeout 模拟器压力测试", "color: blue; font-weight: bold;");


// 3. 测试：边界情况 - 延时为0
console.log("%c--- 测试 3: 边界情况 (delay=0)", "color: green;");
setTimeout(() => {
    console.log("✅ 测试3: delay=0 的任务完成 (应尽快执行)");
}, 0);