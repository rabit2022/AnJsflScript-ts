(function () {
    const originalFilter = Array.prototype.filter;

    Array.prototype.filter = function (callback, thisArg) {

        // 只有当数组长度大于0或者是特定类型时才打印，避免日志爆炸
        if (this.length > 0 || callback.toString().includes('source')) {
            console.log("🛡️ 全局拦截: Array.filter");
            try {
                console.log('📥 源数组:', JSON.stringify(this,null,2));
                console.log('📥 条件回调:', callback.toString());

                const result = originalFilter.call(this, callback, thisArg);

                console.log('📤 结果:', JSON.stringify(result, null, 2));

                throw new Error("全局拦截");
            } catch (error) {
                console.error('❌ 捕获到 filter 错误:', error.message);
                console.error('📚 完整堆栈:\n', error.stack);
                // throw error;
                return result;

            } finally {

                // console.groupEnd();
            }
        }

        // 正常执行
        return originalFilter.call(this, callback, thisArg);
    };


    // --- 测试 ---
    const frames = [{id: 1}, {id: 2}];
// 现在任何地方调用 filter 都会被监测
//     const res = frames.filter(f => f.id > 1);
    const res = frames.filter(function (f) {
        return f.id > 1;
    });
    console.log(JSON.stringify(res, null, 2));
})();

