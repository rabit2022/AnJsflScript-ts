/**
 * @file: clean.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import * as fs from "fs";
import { TimeData } from "../time/time_data";
import { deleteInvalidFlaFiles, deleteOverflowFiles } from "../delete/delete";

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
