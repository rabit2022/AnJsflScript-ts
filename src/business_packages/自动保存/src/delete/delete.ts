/**
 * @file: delete.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import * as  fs from "fs";
import * as path from "path";
import {TimeData} from "../time/time_data";
import {MAX_SAVE_COUNT} from "../CONSTANTS/constants";

// 删除「非本规则生成」的文件
export function deleteInvalidFlaFiles(
    list: TimeData[],
    saveFolder: string
) {
    list
        .filter(item =>
            !item.flaFile.endsWith(".fla") ||
            !/^\d{4}年/.test(item.flaFile)
        )
        .forEach(item => {
            const fullPath = path.join(saveFolder, item.flaFile);
            fs.existsSync(fullPath) && fs.unlinkSync(fullPath);
        });
}

// 删除超出最大数量的旧文件
export function deleteOverflowFiles(
    list: TimeData[],
    saveFolder: string
) {
    if (list.length <= MAX_SAVE_COUNT) return;

    const deleteList = list.slice(0, list.length - MAX_SAVE_COUNT);

    deleteList.forEach(item => {
        const fullPath = path.join(saveFolder, item.flaFile);
        fs.existsSync(fullPath) && fs.unlinkSync(fullPath);
    });
}