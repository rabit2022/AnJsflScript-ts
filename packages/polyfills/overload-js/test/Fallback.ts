/**
 * @file: Fallback.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import {overload} from "../src";

const o = overload.o;


var method = overload().args(String).use(function (a) {
    console.log(a);
})
    .fallback(function () {
        console.log('handled!');
    });


method('hello'); // 'hello'
method(); // 'handled'


// overload.error = function() {
//     console.log('there was an error');
// };

var method =overload()
    .error(function() { console.log("error!"); })

// method('hello'); // 'hello'
// method(); // 'handled'
// method(0);