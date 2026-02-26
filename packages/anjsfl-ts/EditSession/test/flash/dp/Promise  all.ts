/**
 * @file: Promise  all.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

import "es6-promise";

console.log("\n🧪 4. Promise 并发控制");

// Promise.all: 全部成功才成功
Promise.all([Promise.resolve(1), Promise.resolve(2)]).then((res) => {
    console.assert(JSON.stringify(res) === "[1,2]", "all 成功");
    console.log("✅ Promise.all");
});

// Promise.allSettled: 等待所有完成（无论成败）
Promise.allSettled([Promise.resolve(1), Promise.reject("error")]).then((results) => {
    console.assert(results[0].status === "fulfilled", "第一个成功");
    console.assert(results[1].status === "rejected", "第二个失败");
    console.log("✅ Promise.allSettled");
});

// Promise.race: 谁先完成就用谁
Promise.race([
    new Promise((resolve) => setTimeout(() => resolve("slow"), 100)),
    Promise.resolve("fast")
]).then((res) => {
    console.assert(res === "fast", "race 返回最快结果");
    console.log("✅ Promise.race");
});

// Promise.any: 任意一个成功即成功（ES2021）
Promise.any([Promise.reject("no1"), Promise.resolve("yes"), Promise.reject("no2")])
    .then((res) => {
        console.assert(res === "yes", "any 返回首个成功结果");
        console.log("✅ Promise.any");
    })
    .catch((e) => {
        // 如果全部失败，会抛出 AggregateError
        console.log("⚠️ Promise.any 全部失败:", e);
    });
