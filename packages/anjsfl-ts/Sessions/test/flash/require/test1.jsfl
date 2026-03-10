require(['base-64'], function ({ encode, decode }) {
// import { encode, decode } from 'base-64';
//     const { encode, decode } =require('base-64');

// 方式 1：直接使用
    const encoded = encode('Hello');      // "SGVsbG8="
    const decoded = decode('SGVsbG8=');   // "Hello"

    console.log(encoded);
    console.log(decoded);

// 方式 2：注入全局（模拟浏览器）
// global.btoa = encode;
// global.atob = decode;


});