/**
 * @file: test2.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

// import { stringify } from 'flatted';
// import { stringify } from 'json5';
// import { stringify } from 'json-stringify-safe';
const stringify = require("json-stringify-safe");

// flatted 可以完美处理循环引用，生成合法的 JSON 字符串
const jsonString = stringify(global);
console.log(jsonString);

// 之后也可以用 parse 还原
// import { parse } from 'flatted';
// const restoredObj = parse(jsonString);
