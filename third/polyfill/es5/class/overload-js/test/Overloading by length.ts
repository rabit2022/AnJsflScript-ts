/**
 * @file: Overloading by length.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import { overload } from "../src";

const o = overload.o;

var method = overload()
    .len(0)
    .use(function () {
        console.log("0 args");
    })
    .len(1)
    .use(function (a) {
        console.log("1 arg");
    })
    .len(3)
    .use(function (a, b, c) {
        console.log("3 args");
    });

method(); // '0 args'
method({}); // '1 arg'
method(null, [], {}); // '3 args'
