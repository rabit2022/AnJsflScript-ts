/**
 * @file: 打开命令位置.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/8 21:39
 * @project: AnJsflScript-ts
 * @description:
 */

import { execSync } from "child_process";
import { fileURLToPath } from "url";
import * as process from "process";

let PluginPath = AnJsflScript.folders.commands;

PluginPath = fileURLToPath(PluginPath);

try {
    if (process.platform === "win32") {
        execSync(`explorer "${PluginPath}"`);
    } else {
        throw new Error(`Unsupported platform: ${process.platform}`);
    }
    console.log("已打开命令文件夹");
} catch (e) {
    console.error("无法自动打开命令文件夹", e);
}
