// requirejs modules file test1.js
require(['url-polyfill'], function (_) {

    // import 'url-polyfill';
// 之后即可使用原生 URL API
    const url = new URL('https://example.com/path?query=1');

    console.log(url);
    console.log(JSON.stringify(url, null, 2));

    console.log(url.hostname + url.pathname + url.search);
});