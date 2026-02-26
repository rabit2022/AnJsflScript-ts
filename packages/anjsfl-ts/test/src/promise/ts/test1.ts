/**
 * @file: test1.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

// flash TypeScript file test1.ts

import { setTimeout } from "@dom/setTimeout";
import "es6-promise";

// 模拟数据源
function fetchUserData(userId: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: userId, name: "张三" });
        }, 100);
    });
}

// 原生写法 (不需要 __awaiter)
async function getUserInfo() {
    console.log("【测试开始】开始获取用户..."); // 如果这行都不出，说明函数根本没执行

    try {
        console.log("【测试】准备 await...");
        const user = await fetchUserData(123);
        console.log("【测试】获取成功:", user);
        return user;
    } catch (error) {
        console.error("【测试】获取失败:", error);
    }
    console.log("【测试】函数结束");
}

// 执行
console.log("=== 脚本已加载 ===");
getUserInfo()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
console.log("=== 脚本加载完毕，等待异步结果 ===");

// bug: 无法获取user信息
