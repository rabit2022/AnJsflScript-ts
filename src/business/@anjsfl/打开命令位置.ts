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
