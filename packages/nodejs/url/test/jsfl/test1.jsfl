// requirejs modules file test1.js
require(['url'], function (_) {
    const {URL } =_;
    // 无需 require，URL 是全局对象
    const url = new URL('https://user:pass@example.com:8080/path?query=value#hash');

    console.log(url.href);        // 完整 URL
    console.log(url.origin);      // https://example.com:8080
    console.log(url.protocol);    // https:
    console.log(url.username);    // user
    console.log(url.password);    // pass
    console.log(url.host);        // example.com:8080
    console.log(url.hostname);    // example.com
    console.log(url.port);        // 8080
    console.log(url.pathname);    // /path
    console.log(url.search);      // ?query=value
    console.log(url.hash);        // #hash
});