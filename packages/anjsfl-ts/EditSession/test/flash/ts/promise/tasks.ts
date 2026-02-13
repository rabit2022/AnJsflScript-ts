import "es6-promise";


console.log('🧪 2. Promise 微任务顺序');

console.log('同步代码 1');
Promise.resolve().then(() => console.log('Promise 微任务'));
console.log('同步代码 2');

// 输出顺序应为：
// 同步代码 1
// 同步代码 2
// Promise 微任务