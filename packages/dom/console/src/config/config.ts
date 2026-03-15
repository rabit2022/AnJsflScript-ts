/**
 * @file: paths.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */


import {isFlash, isNode} from "@anjsfl-ts/dev";
import {PathsType} from "./config.types";


let Root = "";

if (isFlash) {
    Root = AnJsflScript.folders.Log;
} else if (isNode) {
    Root = `./`;
} else {
    // 浏览器或其他环境（可能只用于调试）
    Root = `./`;
}


export const Paths: PathsType = {
    // log
    LOG_FOLDER: Root,
    MAIN_LOG: `${Root}logs/main.log`,
    FILE_LOG: `${Root}logs/file.log`,

    // stack
    currentText: `${Root}Errors/human error.txt`,
    allText: `${Root}Errors/human all errors.txt`,
    currentJson: `${Root}Errors/error.json`,
    allJson: `${Root}Errors/all errors.json`,

    // table
    // currentTable : `${Root}table/`

};

