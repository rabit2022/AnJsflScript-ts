/**
 * @file: test.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

// import { stackTracer } from 'console.stack';
// stackTracer.trace(new Error('boom'));

import 'console.stack';
console.stack(new Error('boom'),{
    format:'json'
});
console.stack(new Error('boom'));


// stackTracer.trace('test', {
//   format: 'table'
// });
//
// console.log(stackTracer.history());
//
// stackTracer.clear();
