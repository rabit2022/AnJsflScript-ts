// requirejs modules file test1.js
require(['jsbi'], function (JSBI) {
    // import JSBI from 'jsbi';

// 创建 BigInt
    const a = JSBI.BigInt('9007199254740993');
    const b = JSBI.BigInt('12345678901234567890');

// 算术运算
    const sum = JSBI.add(a, b);
    const diff = JSBI.subtract(b, a);
    const product = JSBI.multiply(a, b);
    const quotient = JSBI.divide(b, a);
    const remainder = JSBI.remainder(b, a);

// 位运算
    const and = JSBI.bitwiseAnd(a, b);
    const or = JSBI.bitwiseOr(a, b);
    const xor = JSBI.bitwiseXor(a, b);
    const leftShift = JSBI.leftShift(a, JSBI.BigInt('2'));
    const rightShift = JSBI.signedRightShift(a, JSBI.BigInt('2'));

// 比较运算
    console.log(JSBI.equal(a, b));        // false
    console.log(JSBI.lessThan(a, b));     // true
    console.log(JSBI.greaterThan(a, b));  // false

// // 转换为字符串
// console.log(JSBI.toString(a));        // '9007199254740993'
// console.log(JSBI.toString(a, 16));    // 十六进制

// 转换为 Number（小心精度丢失！）
    const num = JSBI.toNumber(a);
    console.log(num);
});