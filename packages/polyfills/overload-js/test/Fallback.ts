import {overload} from "../src";

const o = overload.o;


var method = overload().args(String).use(function (a) {
    console.log(a);
})
    .fallback(function () {
        console.log('handled!');
    });


method('hello'); // 'hello'
method(); // 'handled'


// overload.error = function() {
//     console.log('there was an error');
// };

var method =overload()
    .error(function() { console.log("error!"); })

// method('hello'); // 'hello'
// method(); // 'handled'
// method(0);