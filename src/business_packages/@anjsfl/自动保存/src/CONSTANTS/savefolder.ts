/**
 * @file: savefolder.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import * as fs from "fs";
import * as path from "path";
import * as _ from "lodash";
import { AUTHOR } from "../DESC/Descriptions";

AUTHOR;

/**
 * 获取安全保存目录
 * 优先使用 D 盘，不存在则使用 C 盘
 */
function getSaveFolder(): string {
    const drives = getWindowsDrives();

    const rootDrive = _.includes(drives, "D:") ? "D:" : "C:";

    const saveFolder = path.join(rootDrive, "AnJsflScript");

    if (!fs.existsSync(saveFolder)) {
        fs.mkdirSync(saveFolder, { recursive: true });
    }

    return saveFolder;
}

function getWindowsDrives(): string[] {
    const drives: string[] = [];

    for (let i = 65; i <= 90; i++) {
        const drive = String.fromCharCode(i) + ":";

        try {
            if (fs.existsSync(drive + "/")) {
                drives.push(drive);
            }
        } catch {
            // 某些盘可能无权限，直接跳过
        }
    }

    return drives;
}

// const drivers = getWindowsDrives();
// console.log(drivers);

// D:/AnJsflScript
export const SAVE_FOLDER = getSaveFolder();
