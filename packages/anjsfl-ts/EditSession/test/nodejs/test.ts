// flash TypeScript file test2.ts
// utils.test.ts 或 test.js

// // 如果在 Node.js 环境，先注入 atob/btoa（使用 base-64 库）
// // npm install base-64
// if (typeof btoa === 'undefined' || typeof atob === 'undefined') {
//     const { btoa: _btoa, atob: _atob } = require('base-64');
//     global.btoa = _btoa;
//     global.atob = _atob;
// }

// // ====== Helper for Unicode-safe Base64 ======
// function utf8ToB64(str: string): string {
//     return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (_, p1) =>
//         String.fromCharCode(parseInt(p1, 16))
//     ));
// }
//
// function b64ToUtf8(b64: string): string {
//     return decodeURIComponent(
//         atob(b64)
//             .split('')
//             .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
//             .join('')
//     );
// }
//
// // ====== Test Cases ======
// console.log('🧪 开始测试 6 个编码/解码方法...\n');
//
// // 1. btoa / atob —— ASCII
// console.log('1. btoa / atob (ASCII):');
// const asciiText = 'Hello';
// const encoded1 = btoa(asciiText);
// const decoded1 = atob(encoded1);
// console.assert(encoded1 === 'SGVsbG8=', 'btoa ASCII 编码失败');
// console.assert(decoded1 === asciiText, 'atob ASCII 解码失败');
// console.log('✅ ASCII 测试通过\n');
//
// // 2. btoa / atob —— 中文（必须用 UTF-8 安全方式）
// console.log('2. btoa / atob (Unicode/中文):');
// const chineseText = '你好，世界！';
// const encoded2 = utf8ToB64(chineseText);
// const decoded2 = b64ToUtf8(encoded2);
// console.assert(decoded2 === chineseText, 'Base64 中文 round-trip 失败');
// console.log(`✅ 中文测试通过 → ${encoded2}\n`);

// 3. encodeURI / decodeURI
console.log('3. encodeURI / decodeURI:');
const fullUri = 'https://example.com/路径?name=张三&lang=zh-CN#顶部';
const encoded3 = encodeURI(fullUri);
const decoded3 = decodeURI(encoded3);
// 检查保留字符未被编码
console.assert(
    encoded3.includes('https://') &&
    encoded3.includes('?') &&
    encoded3.includes('&') &&
    encoded3.includes('#'),
    'encodeURI 错误地编码了保留字符'
);
console.assert(decoded3 === fullUri, 'decodeURI round-trip 失败');
console.log('✅ encodeURI/decodeURI 测试通过\n');

// 4. encodeURIComponent / decodeURIComponent
console.log('4. encodeURIComponent / decodeURIComponent:');
const paramValue = 'name=张三&age=20';
const encoded4 = encodeURIComponent(paramValue);
const decoded4 = decodeURIComponent(encoded4);
// 检查特殊字符被编码
console.assert(
    !encoded4.includes('=') && !encoded4.includes('&'),
    'encodeURIComponent 未编码保留字符'
);
console.assert(decoded4 === paramValue, 'decodeURIComponent round-trip 失败');
console.log(`✅ encodeURIComponent 测试通过 → ${encoded4}\n`);

// // 5. 边界测试：无效 Base64
// console.log('5. 边界测试 - 无效 Base64:');
// try {
//     atob('!!!invalid!!!');
//     console.assert(false, '应抛出异常');
// } catch (e) {
//     console.log('✅ atob 对无效输入正确抛出错误\n');
// }

// 6. 对比：encodeURI vs encodeURIComponent
console.log('6. encodeURI vs encodeURIComponent 对比:');
const uriPart = 'hello world?foo=bar&baz=qux';
console.log('原始:', uriPart);
console.log('encodeURI:', encodeURI(uriPart));        // 仅空格变 %20
console.log('encodeURIComponent:', encodeURIComponent(uriPart)); // 所有特殊字符都被编码
console.assert(
    encodeURI(uriPart) !== encodeURIComponent(uriPart),
    '两者应产生不同结果'
);
console.log('✅ 对比测试通过\n');

console.log('🎉 所有测试通过！');