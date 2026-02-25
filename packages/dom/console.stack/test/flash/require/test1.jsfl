// requirejs modules file test1.js
require(['console.stack'], function () {

    // import 'console.stack';
    console.stack(new Error('boom'),{
        format:'json'
    });
    // console.stack(new Error('boom'));

});