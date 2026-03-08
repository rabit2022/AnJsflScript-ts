/**
 * @file: test4.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */
import { getcwd } from "../../src/FirstRun/cwd";
import * as process from "node:process";

const fl = {
    scriptURI: process.cwd()
};
global.fl = fl;

console.log(global.fl.scriptURI);

const cwd = getcwd();
console.log("cwd：");
console.log(cwd);
