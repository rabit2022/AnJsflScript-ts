/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/18 23:03
 * @project: AnJsflScript-ts
 * @description:
 */

// export { XjsflFile } from "./file";
// export { XjsflUI } from "./ui";
// export { BASEURI } from "./uri";


import {xjsfl} from "./xjsfl";
import {XjsflUI} from "./ui";
import {XjsflFile} from "./file";
import {BASEURI} from "./uri";

xjsfl.ui = XjsflUI;
xjsfl.file = XjsflFile;
xjsfl.uri = BASEURI;

export {xjsfl};
