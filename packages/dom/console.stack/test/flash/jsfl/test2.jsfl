// iife file test2.jsfl
(function () {

    console.log("Hello ");

    // --- 测试 ---
    const frames = [{id: 1}, {id: 2}];
// 现在任何地方调用 filter 都会被监测
//     const res = frames.filter(f => f.id > 1);
    const res = frames.filter(function (f) {
        return f.id > 1;
    });
    // console.log(res,frames);
    console.log(JSON.stringify(res, null, 2));
    console.log(JSON.stringify(frames, null, 2));

})();