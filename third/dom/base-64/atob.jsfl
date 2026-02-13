require(['base-64'], function ({encode, decode}) {
    // 方式 2：注入全局（模拟浏览器）
    window.btoa = encode;
    window.atob = decode;

    return {btoa: encode,atob: decode};
});