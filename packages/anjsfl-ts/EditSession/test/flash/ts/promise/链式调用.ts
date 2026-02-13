import "es6-promise";



console.log('\n🧪 3. 链式调用');

Promise.resolve(1)
    .then(val => {
        console.assert(val === 1, '第一个 then 接收 1');
        return val + 1; // 返回 2
    })
    .then(val => {
        console.assert(val === 2, '第二个 then 接收 2');
        throw new Error('中断链');
    })
    .catch(err => {
        console.assert(err.message === '中断链', 'catch 捕获错误');
        return '恢复'; // 恢复链
    })
    .then(val => {
        console.assert(val === '恢复', '错误恢复后继续');
        console.log('✅ 链式调用完整通过');
    });