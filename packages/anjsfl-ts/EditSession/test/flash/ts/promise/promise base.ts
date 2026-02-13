import "es6-promise";


console.log('🧪 1. 基础 Promise 行为');

// 成功状态
const p1 = Promise.resolve('success');
p1.then(res => {
    console.assert(res === 'success', 'Promise.resolve 应返回成功值');
    console.log('✅ resolve 成功');
});

// 失败状态
const p2 = Promise.reject(new Error('fail'));
p2.catch(err => {
    console.assert(err.message === 'fail', 'Promise.reject 应抛出错误');
    console.log('✅ reject 失败');
});