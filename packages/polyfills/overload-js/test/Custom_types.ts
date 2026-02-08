/**
 * @file: Custom_types.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

// var overload = require('overload-js'),
//     o = overload.o;


import {overload} from "../src";

const o = overload.o;




// overload.defineType('$', function (val) {
//     return val instanceof jQuery;
// });
// var method = overload().args(o.$).use(function ($elem) {
//     console.log($elem);
// });

// method(); // fails
// method(''); // fails
// method($('body')); // succeeds




overload.defineType('$', function (val) {
    return val instanceof Date;
});
var method = overload().args(o.$).use(function ($elem) {
    console.log($elem);
});


// method(); // fails
// method(''); // fails

const date = new Date();
method(date); // succeeds