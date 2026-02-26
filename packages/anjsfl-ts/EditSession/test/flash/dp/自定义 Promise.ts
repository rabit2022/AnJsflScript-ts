/**
 * @file: 自定义 Promise.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

import "es6-promise";

console.log("\n🧪 7. 实用工具函数");

// 延迟函数
function delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// 重试机制
async function retry<T>(fn: () => Promise<T>, times: number = 3): Promise<T> {
    let lastError: unknown;
    for (let i = 0; i < times; i++) {
        try {
            return await fn();
        } catch (err) {
            lastError = err;
            await delay(100); // 等待 100ms 后重试
        }
    }
    throw lastError;
}

// 测试重试
let attempt = 0;
const unstableFn = () => {
    attempt++;
    if (attempt < 3) throw new Error("Still failing");
    return Promise.resolve("Success!");
};

retry(unstableFn, 5).then((res) => {
    console.assert(res === "Success!", "重试成功");
    console.assert(attempt === 3, "恰好重试 3 次");
    console.log("✅ 重试机制通过");
});
