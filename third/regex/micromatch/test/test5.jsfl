// iife file test1.jsfl
(function () {
    const set = new Set();
    set.add(0);
    set.add(1);

    // 1.应该使用的方法
    const arr = Array.from(set);
    console.log(arr);


    var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
        // 检测是否是 Set 或 Map（有 forEach 方法但不是数组）
        if (typeof from[Symbol.iterator] === 'function') {
            return Array.from(from);
        }
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    };
    const arr2 = __spreadArray([],set,true)
    console.log(arr2);

    // 源代码
    console.log([...set])

    console.log(set.length)
})();