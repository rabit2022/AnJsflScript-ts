/**
 * @file: relative.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/18 23:03
 * @project: AnJsflScript-ts
 * @description:
 */

import { fileURLToPath } from "url";
import * as path from "path";

import { isFlash } from "@anjsfl-ts/dev";

export function getRecordPath() {
    let scriptURI = "";
    let baseDir = "";
    if (isFlash) {
        scriptURI = fl.scriptURI;
        baseDir = AnJsflScript.folders.AnJsflScript;
    } else {
        scriptURI =
            "file:///H|/project/js/AnJsflScript-ts/packages/dom/console/test/flash/require/test3.jsfl";
        baseDir = "file:///H|/project/js/AnJsflScript-ts/";
    }

    let p1 = fileURLToPath(scriptURI).replace(/\\/g, "/"),
        p2 = fileURLToPath(baseDir).replace(/\\/g, "/");

    // console.log(p1,p2);

    const short_path = path.relative(p2, p1);

    // console.log(short_path);
    return short_path;
}
// console.log(getRecordPath())
