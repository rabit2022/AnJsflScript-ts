/**
 * @file: time.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */
import * as path from "path";
import { DateTime } from "luxon";


export const TIME_FORMAT = "yyyy年MM月dd日HH时mm分ss秒";
export const SAVE_INTERVAL = 3 * 60 * 1000;


export class TimeData {
    flaFile: string;
    timeStamp: string;
    fileName: string;

    constructor(flaFile: string) {
        const baseName = path.basename(flaFile, ".fla");
        const [timestamp, fileName] = baseName.split("_");

        const dateTime = DateTime.fromFormat(timestamp, TIME_FORMAT);

        this.flaFile = flaFile;
        this.fileName = fileName;
        this.timeStamp = dateTime.isValid ? dateTime.toISO()! : "";
    }
}
