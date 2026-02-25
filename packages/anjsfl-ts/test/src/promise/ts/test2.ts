import { setTimeout } from "@dom/setTimeout";
import "es6-promise";



// 模拟一个异步操作（例如请求 API）
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("数据加载成功！");
        }, 1000);
    });
}

// 定义一个 async 函数
async function main() {
    console.log("开始等待...");

    // await 会让代码在这里暂停，直到 fetchData 完成
    const result = await fetchData();

    console.log(result); // 1秒后输出: 数据加载成功！
    console.log("结束");
}

main().then(() => {
    console.log("成功");
}).catch((err) => {
    console.log(err)
});

// 成功