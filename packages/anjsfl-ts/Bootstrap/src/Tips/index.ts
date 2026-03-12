/**
 * @file: index.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

// const {alertMessage} = Tips;// 显示提示信息

import { alertMessage } from "./Tips";
import { folders } from "../Settings/settings";

const $includes = require("string.prototype.includes");

const dom = fl.getDocumentDOM();
if (!dom) {
    alertMessage("failed!");
    // return;
    throw new Error("Loading failed!");
}

// var _a, _b;
// var IS_INCLUDE = ((_b = (_a = window.AnJsflScript) === null || _a === void 0 ? void 0 : _a.$ProjectFileDir$) === null || _b === void 0 ? void 0 : _b.indexOf("AnJsflScript")) !== -1;

const $ProjectFileDir$ = folders.AnJsflScript;
const IS_INCLUDE = $includes($ProjectFileDir$, "AnJsflScript");

if (!IS_INCLUDE) {
    alertMessage("loading might be not allowed!");
    // return;
} else {
    alertMessage("loading success!");
}
