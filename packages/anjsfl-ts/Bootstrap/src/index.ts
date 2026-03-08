/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

import {isFlash } from "./ENV";

if (!isFlash) {
    throw new Error(
        "JSFL Error: This script must run inside Adobe Animate/Flash."
    );
}

// --- 安全获取 fl 数据 ---
import {SCRIPT_LOAD_QUEUE} from "./FirstRun/config";
import "./FirstRun";
import "./Settings";
import {importFlashScripts} from "./FirstRun/importFlashScripts";
import {AnJsflScript} from "./AnJsflScript"

const $keys = require("object-keys");
const globalThis = require('globalthis')();

const bootstrap = () => {
    try {
        const scriptPaths = $keys(SCRIPT_LOAD_QUEUE).map(function (key: string) {
            return SCRIPT_LOAD_QUEUE[key];
        });

        importFlashScripts(...scriptPaths);

        // fl.trace("[Bootstrap] All scripts loaded successfully.");
    } catch (e) {
        const errorMessage = (e as Error).message;
        fl.trace(`[Bootstrap] CRITICAL ERROR: Initialization failed.`);
        fl.trace(`[Bootstrap] Details: ${errorMessage}`);

        // 抛出错误停止后续所有操作
        throw e;
    }
};


if (!globalThis.AnJsflScript) {
    globalThis.AnJsflScript = AnJsflScript;

    // requirejs need AnJsflScript
    bootstrap();
}


// export {AnJsflScript};
module.exports = AnJsflScript;