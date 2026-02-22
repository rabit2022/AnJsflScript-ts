// requirejs modules file test1.js
require(['superjson'], function (SuperJSON) {

    // import SuperJSON from 'superjson';
// const SuperJSON = require('superjson');


// 包含特殊类型的数据
    const data = {
        createdAt: new Date(),
        tags: new Set(['js', 'ts']),
        // bigNum: BigInt(9007199254740991),
        map: new Map([['key', 'value']]),
        regex: /test/gi,
        error: new Error('Something went wrong')
    };

// 序列化
    const jsonString = SuperJSON.stringify(data);
    console.log(jsonString);

// 反序列化（恢复原始类型）
    const parsed = SuperJSON.parse(jsonString);
    console.log(parsed.createdAt instanceof Date);  // true
    console.log(parsed.tags instanceof Set);        // true
// console.log(typeof parsed.bigNum === 'bigint'); // true

});