/**
 * @file: test.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

import "@polyfills/symbol-dispose";

class FileHandle {
    constructor(public name: string) {
        console.log(`打开文件: ${name}`);
    }

    [Symbol.dispose]() {
        console.log(`关闭文件: ${this.name}`);
    }
}

function readFile() {
    using file = new FileHandle("example.txt");
    // 使用 file...
    console.log("正在读取文件...");
    // 离开作用域时自动调用 [Symbol.dispose]()
}

readFile();
// 输出:
// 打开文件: example.txt
// 正在读取文件...
// 关闭文件: example.txt
