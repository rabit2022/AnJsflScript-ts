/**
 * @file: writeToLog.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/15 0:13
 * @project: AnJsflScript-ts
 * @description:
 */

import { LogLevel } from "../constant";
import { ensureDir } from "./ensureDir";
import { center } from "./string";
import * as _ from "lodash";
import { Paths } from "../../config";
import { getRecordPath } from "./relative";

// 辅助函数：获取补零后的字符串 (利用原生 padStart)
const pad = (num: number, length: number) => _.padStart(String(num), length, "0");

/**
 * 写入日志到文件
 */
export function writeToLog(
    message: string,
    type: string = LogLevel.INFO,
    level: number | boolean = 0
): void {
    // 参数标准化
    const logType: string = typeof type === "string" ? type : LogLevel.INFO;
    const logLevel: number = typeof level === "number" ? level : level ? 1 : 0;

    // 时间：YYYY-MM-DD HH:mm:ss.SSS
    const now = new Date();

    const asctime =
        `${now.getFullYear()}-${pad(now.getMonth() + 1, 2)}-${pad(now.getDate(), 2)} ` +
        `${pad(now.getHours(), 2)}:${pad(now.getMinutes(), 2)}:${pad(now.getSeconds(), 2)}.` +
        `${pad(now.getMilliseconds(), 3)}`;

    // 日志级别（中间 8 字符）
    const levelname = center(logType.toUpperCase(), 8);

    const short_path = getRecordPath();

    // 构建日志行
    const logLine = `${asctime} | ${levelname} | ${short_path} | ${message}`;

    // 写入主日志
    ensureDir(Paths.MAIN_LOG);
    FLfile.write(Paths.MAIN_LOG, logLine + "\n", "append");

    // 额外写入 file.log（仅当类型为 FILE）
    if (logType === LogLevel.FILE) {
        ensureDir(Paths.FILE_LOG);
        FLfile.write(Paths.FILE_LOG, logLine + "\n", "append");
    }
}
