// requirejs modules file test1.js
require(["progress"], function ({ProgressBar}) {
    // console.log(ProgressBar);
    // console.log(typeof ProgressBar);
    // console.log(JSON.stringify(ProgressBar));
    const bar = new ProgressBar(":bar :current/:total", {
        total: 100
    });

    for (var i = 0; i < 100; i++) {
        bar.tick()
    }
});