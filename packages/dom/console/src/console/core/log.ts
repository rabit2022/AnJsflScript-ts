/**
 * @file: log.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/15 0:13
 * @project: AnJsflScript-ts
 * @description:
 */

// ========================================================================
// 日志方法
// ========================================================================

import { writeToLog } from "../utils/writeToLog";
import { LogLevel } from "../constant";
import { Paths } from "../../config";

const trace = fl.trace;

/**
 * 格式化消息（支持多参数）
 */
function formatMessage(args: IArguments): string {
    return Array.prototype.slice.call(args).join(" ");
}

export function debug(...args: any[]): void {
    const msg = formatMessage(arguments);
    trace("\n⚡admin DEBUG ❯❯ " + msg + "\n");
    writeToLog(msg, LogLevel.DEBUG, 3);
}

export function log(...args: any[]): void {
    const msg = formatMessage(arguments);
    trace("\n⚡admin LOG ❯❯ " + msg + "\n");
    writeToLog(msg, LogLevel.LOG, 3);
}

export function info(...args: any[]): void {
    const msg = formatMessage(arguments);
    trace("\n⚡admin INFO ❯❯ " + msg + "\n");
    writeToLog(msg, LogLevel.INFO, 3);
}

export function warn(...args: any[]): void {
    const msg = formatMessage(arguments);
    trace("\n⚡admin WARNING ❯❯ " + msg + "\n");
    writeToLog(msg, LogLevel.WARN, 3);
}

export function error(...args: any[]): void {
    const msg = formatMessage(arguments);
    trace("\n⚡admin ERROR ❯❯ " + msg + "\n");
    writeToLog(msg, LogLevel.ERROR, 3);
}

export function file(...args: any[]): void {
    const msg = formatMessage(arguments);
    writeToLog(msg, LogLevel.FILE);
}

export function clear(): void {
    // @ts-ignore
    fl.outputPanel.clear();
    // const name = type === LogLevel.FILE ? "file" : "main";
    FLfile.remove(`${Paths.LOG_FOLDER}`);
    trace(`${Paths.LOG_FOLDER} reset`);
}
