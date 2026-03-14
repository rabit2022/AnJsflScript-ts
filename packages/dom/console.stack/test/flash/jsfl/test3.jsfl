// iife file test3.jsfl
(function () {

    // console.stack("Hello world")
    // console.error("Hello world")


    new Promise(function (resolve, reject) {
        AnJsflScript.__setTimeout__.

        setTimeout(function (){
            console.error("Hello world");
            // ✅ 正确：调用 resolve 将数据传递出去
            resolve(1000);
        }, 1000);
    })
        .then(function (result) {
            console.log("Result:", result); // 输出: Result: 1000
        })
        .catch(function (err) {
            console.error(err);
        });
})();