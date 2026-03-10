/**
 * @file: Class Decorator.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

import "url";

// 装饰器定义
function logClass(target: Function) {
    console.log(`[ClassDecorator] 创建类: ${target.name}`);
}

function addTimestamp<T extends new (...args: any[]) => {}>(constructor: T) {
    return class extends constructor {
        timestamp = Date.now();
    };
}

// 使用
@logClass
@addTimestamp
class User {
    [x: string]: any;
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const user = new User("Alice");
console.log(user.timestamp); // 输出时间戳
