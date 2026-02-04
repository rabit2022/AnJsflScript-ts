require(["util"], function(util) {

    const obj = {
        name: "test",
        fn: function hello() {
            return "hi";
        },
        // [Symbol("key")]: "symbol value"
    };

// 深度打印，显示不可枚举、Symbol、函数体等
    console.log(util.inspect(obj, {
        showHidden: true,     // 显示不可枚举属性
        depth: null,          // 无限递归深度
        colors: true,         // 彩色输出（终端支持时）
        maxArrayLength: null,
        breakLength: Infinity
    }));

});
