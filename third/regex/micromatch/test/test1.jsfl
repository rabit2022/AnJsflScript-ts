// requirejs modules file test1.js
require(['micromatch'], function (mm) {
    // const mm = require('micromatch');

    // console.log(mm);
// 基本匹配
    const files = ['a.js', 'b.md', 'c.txt'];
    const result = mm.match(files, '*.js');
    console.log(JSON.stringify(result)); // ['a.js']

// 多模式匹配
    const result2 = mm.match(files, ['*.js', '*.md']);
    console.log(JSON.stringify(result2)); // ['a.js', 'b.md']


    // // 处理可迭代对象（Set、Map 等）
    // if (typeof from[Symbol.iterator] === 'function') {
    //     for (var item of from) {
    //         to.push(item);
    //     }
    //     return to;
    // }
    // // 检测是否是 Set 或 Map（有 forEach 方法但不是数组）
    // if (typeof from.forEach === 'function' &&
    //     typeof from.length === 'undefined') {
    //     // Set/Map 使用 forEach 迭代
    //     from.forEach(function (item) {
    //         to.push(item);
    //     });
    //     return to;
    // }

});