/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

import {isFlash} from "./ENV";
// --- 安全获取 fl 数据 ---
import "./FirstRun";
import "./Settings";
import "./Tips";

import {AnJsflScript} from "./AnJsflScript";
import {bootstrap} from "./bootstrap";

const globalThis = require("globalthis")();


if (!isFlash) {
    throw new Error("JSFL Error: This script must run inside Adobe Animate/Flash.");
}

if (!globalThis.AnJsflScript) {
    globalThis.AnJsflScript = AnJsflScript;

    // requirejs need AnJsflScript
    bootstrap();
}

// export {AnJsflScript};
module.exports = AnJsflScript;
