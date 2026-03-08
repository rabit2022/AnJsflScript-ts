// requirejs modules file test1.js
require(["@xjsfl/Context"], function (Context) {

    const context = Context.create();
    console.log(context);
    context.goto();
});