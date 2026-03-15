/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import "./cwd";
import "./exit";
import "./platform";

import { process } from "./global";

if (typeof window.process === "undefined") {
    window.process = process;
}

export { cwd } from "./cwd";
export { exit } from "./exit";
export { platform } from "./platform";
