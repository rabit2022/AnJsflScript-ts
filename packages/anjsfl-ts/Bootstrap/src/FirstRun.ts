/**
 * @file: FirstRun.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

import { getcwd } from "./cwd";
import { AnJsflScriptAPI } from "./types";
import { SCRIPT_LOAD_QUEUE } from "./config";
import { importFlashScripts } from "./importFlashScripts";

const $keys = require("object-keys");

// ==========================================
// 2. 执行初始加载
// ==========================================
const bootstrap = () => {
    // 安全地初始化全局命名空间
    window.AnJsflScript = window.AnJsflScript || ({} as AnJsflScriptAPI);

    // 暴露 API 和 项目根目录
    window.AnJsflScript.importFlashScripts = importFlashScripts;
    window.AnJsflScript.$ProjectFileDir$ = getcwd();

    try {
        const scriptPaths = $keys(SCRIPT_LOAD_QUEUE).map(function (key: string) {
            return SCRIPT_LOAD_QUEUE[key];
        });

        importFlashScripts(...scriptPaths);

        fl.trace("[Bootstrap] All scripts loaded successfully.");
    } catch (e) {
        const errorMessage = (e as Error).message;
        fl.trace(`[Bootstrap] CRITICAL ERROR: Initialization failed.`);
        fl.trace(`[Bootstrap] Details: ${errorMessage}`);

        // 抛出错误停止后续所有操作
        throw e;
    }
};

// 立即执行
bootstrap();

export {};
