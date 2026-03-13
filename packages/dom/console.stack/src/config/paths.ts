/**
 * @file: paths.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

// paths.ts

// 判断是否在 JSFL 环境（Adobe Animate）
const isJsfl = typeof AnJsflScript !== 'undefined' || typeof fl !== 'undefined';

// 定义基础路径结构
interface PathsType {
    currentText: string;
    allText: string;
    currentJson: string;
    allJson: string;
}

let Paths: PathsType;

if (isJsfl) {
    let Root = AnJsflScript.folders.Log;

    // JSFL 环境：通常使用绝对路径或特殊目录（如 documents）
    Paths = {
        currentText: `${Root}Errors/human error.txt`,
        allText: `${Root}Errors/human all errors.txt`,
        currentJson: `${Root}Errors/error.json`,
        allJson: `${Root}Errors/all errors.json`,
    };
} else if (typeof process !== 'undefined' && process.versions?.node) {
    // Node.js 环境
    Paths = {
        currentText: './logs/human error.txt',
        allText: './logs/human all errors.txt',
        currentJson: './logs/error.json',
        allJson: './logs/all errors.json'
    };
} else {
    // 浏览器或其他环境（可能只用于调试）
    Paths = {
        currentText: '/logs/human error.txt',
        allText: '/logs/human all errors.txt',
        currentJson: '/logs/error.json',
        allJson: '/logs/all errors.json'
    };
}

export { Paths };