/**
 * @file: Async.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

import "es6-promise";
import { setTimeout } from "@dom/setTimeout";

console.log("\n🧪 6. Async/Await");

async function testAsync() {
    try {
        const val = await Promise.resolve("async value");
        console.log(val, "await 获取 resolve 值");

        // await 会等待 Promise 完成
        const delayed = await new Promise((resolve) =>
            setTimeout(() => resolve("delayed"), 10)
        );
        console.log(delayed, "await 等待异步操作");

        console.log("✅ Async/Await 正常工作");
    } catch (err) {
        console.error("Async 错误:", err);
    }
}

// // Async.ts
// async function main() {
//     await testAsync()
// }

// 立即调用
testAsync().catch((err) => {
    console.error("Async error:", err);
    // 在非浏览器环境（如 Node）可 process.exit(1)
});
