/**
 * @file: setInterval.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

import {clearTimeout, setTimeout} from "./setTimeout";

export function setInterval(callback: (...args: any[]) => void, delay: number, ...args: any[]): number {
    let timerId;

    function loop() {
        callback(...args); // 执行回调，并传递参数
        timerId = setTimeout(loop, delay); // 递归调用
    }

    timerId = setTimeout(loop, delay);

    return timerId;
}

export function clearInterval(timerId: number): void {
    return clearTimeout(timerId);
}