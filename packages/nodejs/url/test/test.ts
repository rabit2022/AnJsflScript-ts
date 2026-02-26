/**
 * @file: test.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */
import * as console from "node:console";

class B {
    constructor(public urlString: string) {
        this.urlString = urlString;
    }
}
class A {
    constructor(public urlString: string) {
        return new B(urlString);
    }
}

const a = new A("jjjjj");
console.log(a);
