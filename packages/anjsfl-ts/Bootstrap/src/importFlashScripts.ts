/**
 * @file: importFlashScripts.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

import { getcwd } from "./cwd";
import { isAbsolute } from "./isAbsolute";
import { normalizeScriptPath } from "./normalize";

/**
 * 导入并执行 Flash 脚本
 * @param paths 可变参数，支持相对路径或绝对路径
 */
export const importFlashScripts = (...paths: string[]): void => {
    const cwd = getcwd();

    // paths.forEach((relativePath) => {
    for (const relativePath of paths) {
        // 1. 构建绝对 URI
        // 使用模板字符串拼接，注意处理可能的双斜杠问题（虽然 JSFL 通常能容忍）
        const scriptURI = isAbsolute(relativePath)
            ? relativePath
            : `${cwd}/${relativePath}`;
        // .replace(/\/+/g, '/'); // 清理多余斜杠

        // 2. 规范化后缀
        const finalURI = normalizeScriptPath(scriptURI);

        // 3. 检查并执行
        if (FLfile.exists(finalURI)) {
            fl.runScript(finalURI);
        } else {
            const errorMsg = `[importFlashScripts] Error: Cannot find script file [${finalURI}]`;
            fl.trace(errorMsg);
            throw new Error(errorMsg);
        }
    }
};
