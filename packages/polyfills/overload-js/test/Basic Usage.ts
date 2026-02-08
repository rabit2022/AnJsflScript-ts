/**
 * @file: Basic Usage.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import {overload} from "../src";

var hello = (function() {

    var secret = '!';

    return overload()
        .args().use(function() {
            console.log("returns 'world'")
            return secret;
        })
        .args(String).use(function(val:string) {
            console.log("calls setter")
            secret = val;
        });

}());

hello('world'); // calls setter
hello(); // returns 'world'
// hello(0); // throws a Type Error