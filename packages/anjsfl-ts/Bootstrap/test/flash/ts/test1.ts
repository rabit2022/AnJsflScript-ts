/**
 * @file: test1.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

// @ts-ignore
const Map = require("es-map");
// var from = require('array.from');

// ==========================================
// 1. 定义加载队列 (使用 Map 保留顺序并增加语义化 Key)
// ==========================================
const SCRIPT_LOAD_QUEUE = new Map<string, string>([
    ["requirejs-core", "third/require/requirejs/require-js"], // 1. 核心 RequireJS
    ["requirejs-config", "./config/require/require.config"], // 2. RequireJS 配置文件
    ["global-settings", "@anjsfl-ts/Settings"], // 3. 全局设置
    ["polyfills", "./config/settings/anjsfl-polyfills"] // 4. 补丁文件
]);

// 提取 Map 中的所有 values (路径)，保持插入顺序
const scriptPaths: string[] = [];
SCRIPT_LOAD_QUEUE.forEach((value) => scriptPaths.push(value));
console.log(scriptPaths);
