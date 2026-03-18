/**
 * @file: test1.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */
import { fileURLToPath } from "url";
import path from "path-browserify";

// flash TypeScript file test1.ts
// var scriptURI = fl.scriptURI;
// var baseDir = AnJsflScript.folders.AnJsflScript;

var scriptURI =
        "file:///H|/project/js/AnJsflScript-ts/packages/dom/console/test/flash/require/test3.jsfl",
    baseDir = "file:///H|/project/js/AnJsflScript-ts/";

var p1 = fileURLToPath(scriptURI).replace(/\\/g, "/"),
    p2 = fileURLToPath(baseDir).replace(/\\/g, "/");

console.log(p1, p2);

const short_path = path.relative(p2, p1);

console.log(short_path);
