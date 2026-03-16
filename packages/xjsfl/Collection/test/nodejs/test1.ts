/**
 * @file: test1.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/26 23:26
 * @project: AnJsflScript-ts
 * @description:
 */

// nodejs TypeScript file test1.ts
const set = new Set();
set.add(1);
set.add(2);
set.add(0);

console.log(set);

set.forEach(function (set, i, sets) {
    console.log(set, i, sets);
});
