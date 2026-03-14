/**
 * @file: paths.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */


import {isFlash, isNode} from "../../ENV";


// 定义基础路径结构
interface PathsType {
    LOG_FOLDER: string;
    MAIN_LOG: string;
    FILE_LOG: string;
}

let Paths: PathsType;

if (isFlash) {
    let Root = AnJsflScript.folders.Log;

    // JSFL 环境：通常使用绝对路径或特殊目录（如 documents）
    Paths = {
        LOG_FOLDER:Root,
        MAIN_LOG: `${Root}main.log`,
        FILE_LOG: `${Root}file.log`
    };
} else if (isNode) {
    let Root = `./logs/`;

    // Node.js 环境
    Paths = {
        LOG_FOLDER:Root,
        MAIN_LOG: `${Root}main.log`,
        FILE_LOG: `${Root}file.log`
    };
} else {
    // 浏览器或其他环境（可能只用于调试）
    let Root = `./logs/`;

    // Node.js 环境
    Paths = {
        LOG_FOLDER:Root,
        MAIN_LOG: `${Root}main.log`,
        FILE_LOG: `${Root}file.log`
    };
}

export {Paths};