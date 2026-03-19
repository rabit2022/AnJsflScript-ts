/**
 * @file: clean.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import * as fs from "fs";
import {TimeData} from "../CONSTANTS/time";
import path from "path";
import {MAX_SAVE_COUNT} from "../CONSTANTS/constants";

export function cleanFolder(saveFolder: string) {
    // 2. 扫描目录
    const flaFiles: string[] = fs.readdirSync(saveFolder);
    const timeDataList = flaFiles.map((f) => new TimeData(f));

    // 3. 按时间排序
    timeDataList.sort((a, b) => a.timeStamp.localeCompare(b.timeStamp));

    // 4. 清理
    deleteInvalidFlaFiles(timeDataList, saveFolder);
    deleteOverflowFiles(timeDataList, saveFolder);
}


// 删除「非本规则生成」的文件
function deleteInvalidFlaFiles(list: TimeData[], saveFolder: string) {
    list.filter(
        (item) => !item.flaFile.endsWith(".fla") || !/^\d{4}年/.test(item.flaFile)
    ).forEach((item) => {
        const fullPath = path.join(saveFolder, item.flaFile);
        fs.existsSync(fullPath) && fs.unlinkSync(fullPath);
    });
}

// 删除超出最大数量的旧文件
function deleteOverflowFiles(list: TimeData[], saveFolder: string) {
    if (list.length <= MAX_SAVE_COUNT) return;

    const deleteList = list.slice(0, list.length - MAX_SAVE_COUNT);

    deleteList.forEach((item) => {
        const fullPath = path.join(saveFolder, item.flaFile);
        fs.existsSync(fullPath) && fs.unlinkSync(fullPath);
    });
}
