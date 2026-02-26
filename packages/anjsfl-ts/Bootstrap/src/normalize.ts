/**
 * @file: normalize.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

const endswith = require("string.prototype.endswith");

/**
 * 规范化脚本路径：确保以 .jsfl 结尾
 * 逻辑：
 * 1. 如果以 .js 结尾 -> 替换为 .jsfl
 * 2. 如果没有后缀 -> 添加 .jsfl
 * 3. 如果已经是 .jsfl -> 保持不变
 */
export const normalizeScriptPath = (uri: string): string => {
    if (endswith(uri, ".js")) {
        return uri.replace(/\.[^.]*$/, ".jsfl");
    }
    if (!endswith(uri, ".jsfl")) {
        return `${uri}.jsfl`;
    }
    return uri;
};
