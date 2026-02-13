import "es6-promise";


console.log('\n🧪 5. 错误处理');

// 未捕获的 reject（Node.js 会警告，浏览器静默）
// ⚠️ 实际开发中务必加 catch！
const unhandled = Promise.reject('unhandled error');
// unhandled.catch(console.error); // 取消注释可避免警告

// then 中抛出错误会被下一个 catch 捕获
Promise.resolve()
    .then(() => {
        throw new Error('then 内部错误');
    })
    .catch(err => {
        console.assert(err.message === 'then 内部错误', 'catch 捕获 then 错误');
        console.log('✅ then 内部错误被捕获');
    });