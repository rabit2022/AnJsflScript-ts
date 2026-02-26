/**
 * @file: config.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */


// ==========================================
// 1. 定义加载队列 (使用 Map 保留顺序并增加语义化 Key)
// ==========================================

export const SCRIPT_LOAD_QUEUE: { [key: string]: string }  = {
    'requirejs-core': 'third/require/requirejs/require-js',       // 1. 核心 RequireJS
    'requirejs-config': './config/require/require.config',        // 2. RequireJS 配置文件
    'polyfills': './config/settings/anjsfl-polyfills'             // 4. 补丁文件
};

