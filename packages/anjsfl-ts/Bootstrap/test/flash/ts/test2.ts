/**
 * @file: test2.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

// flash TypeScript file test2.ts

// @ts-ignore
const Map = require("es-map");

const m = new Map();
m.set("key", "value");
// 注意：它的 API 与原生 Map 99% 兼容，但它是独立的类，不是全局 Polyfill
