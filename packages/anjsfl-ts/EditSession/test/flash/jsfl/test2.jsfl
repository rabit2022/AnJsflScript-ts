(function () {
// 1. btoa / atob —— ASCII
    console.log('1. btoa / atob (ASCII):');
    const asciiText = 'Hello';
    const encoded1 = btoa(asciiText);
    const decoded1 = atob(encoded1);
    console.assert(encoded1 === 'SGVsbG8=', 'btoa ASCII 编码失败');
    console.assert(decoded1 === asciiText, 'atob ASCII 解码失败');
    console.log('✅ ASCII 测试通过\n');


    console.log('3. encodeURI / decodeURI:');
    var fullUri = 'https://example.com/路径?name=张三&lang=zh-CN#顶部';
    var encoded3 = encodeURI(fullUri);
    var decoded3 = decodeURI(encoded3);
    console.assert(encoded3.includes('https://') &&
        encoded3.includes('?') &&
        encoded3.includes('&') &&
        encoded3.includes('#'), 'encodeURI 错误地编码了保留字符');
    console.assert(decoded3 === fullUri, 'decodeURI round-trip 失败');
    console.log('✅ encodeURI/decodeURI 测试通过\n');
    console.log('4. encodeURIComponent / decodeURIComponent:');
    var paramValue = 'name=张三&age=20';
    var encoded4 = encodeURIComponent(paramValue);
    var decoded4 = decodeURIComponent(encoded4);
    console.assert(!encoded4.includes('=') && !encoded4.includes('&'), 'encodeURIComponent 未编码保留字符');
    console.assert(decoded4 === paramValue, 'decodeURIComponent round-trip 失败');
    console.log("\u2705 encodeURIComponent \u6D4B\u8BD5\u901A\u8FC7 \u2192 ".concat(encoded4, "\n"));
    console.log('6. encodeURI vs encodeURIComponent 对比:');
    var uriPart = 'hello world?foo=bar&baz=qux';
    console.log('原始:', uriPart);
    console.log('encodeURI:', encodeURI(uriPart));
    console.log('encodeURIComponent:', encodeURIComponent(uriPart));
    console.assert(encodeURI(uriPart) !== encodeURIComponent(uriPart), '两者应产生不同结果');
    console.log('✅ 对比测试通过\n');
    console.log('🎉 所有测试通过！');
})();