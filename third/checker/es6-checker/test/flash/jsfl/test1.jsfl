// iife file test1.jsfl
(function () {
    // var a = parseInt('010')===10;
    // console.log(a);

    // var b=Number.isNaN(3)
    // console.log(b)
    //
    // console.log('isNaN' in Number,'isInteger' in Number)
    // console.log(('getOwnPropertySymbols' in Object) , ('assign' in Object) , ('is' in Object))

    // Object.getOwnPropertySymbols()
    'use strict'; var a = Symbol('b');
    console.log(a)

    // var a = 1, b = { ['x'+a]: 2 };

    // console.inspect(window);


    function runIt(code) {
        return (new Function(code))();
    }

    // function runIt(code) {
    //     // 创建一个接受 context 参数的函数
    //     const func = new Function('window', code);
    //     const context = typeof globalThis !== "undefined" ? globalThis:  window;
    //     return func(context); // 传入当前的 Symbol
    // }

    // var a="'use strict'; var a = window.Symbol('b'); window.console.log(a)";
    // var a="'use strict'; return ('isNaN' in Number) && ('isInteger' in Number);" ;
    var a="'use strict'; return ('Promise' in global);"
    console.log(runIt(a));
})();





