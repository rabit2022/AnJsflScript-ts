/**
 * @file: iterator.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/15 0:13
 * @project: AnJsflScript-ts
 * @description:
 */

import "_exports";

class MyUtils {
    // 静态生成器方法
    static *numbers(list?: number[]): Generator<number> {
        const nums = list ?? [1, 2, 3]; // 默认值
        for (const n of nums) {
            yield n * 2; // 每次返回一个值（这里是原数的两倍）
        }
    }
}

// 使用方式：
const gen = MyUtils.numbers([10, 20]);
console.log(gen.next().value); // 20
console.log(gen.next().value); // 40
console.log(gen.next().value); // undefined（结束）

// 或者用 for...of 遍历
for (const val of MyUtils.numbers()) {
    console.log(val); // 2, 4, 6
}
