// requirejs modules file test1.js
require(['picomatch'], function (picomatch) {

    // const picomatch = require('picomatch');

// // 创建匹配函数
//     const isMatch = picomatch('*.js');
//
//     console.log(isMatch('a.js'));      // true
//     console.log(isMatch('a.ts'));      // false
//     console.log(isMatch('src/a.js'));  // false (不匹配路径)


    // const picomatch = require('picomatch');

    console.log(picomatch.isMatch('a.js', '*.js'));           // true
    console.log(picomatch.isMatch('src/a.js', '**/*.js'));    // true
    console.log(picomatch.isMatch('a.js', ['*.js', '*.ts'])); // true
});