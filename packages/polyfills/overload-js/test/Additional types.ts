import {overload} from "../src";

const o = overload.o;


var method = overload().args(o.any(String, Number)).use(function() {
    console.log('passed!');
});

// method(); // fails
// method([]); // fails
// method(''); // passed!
// method(0); // passed!


var method = overload().args(o.except(Object)).use(function() {
    console.log('passed!');
});

// method(); // passed!
// method([]); // passed!
// method({}); // fails


var method = overload()
    .args(o.truthy).use(function() {
        console.log('truthy');
    })
    .args(o.falsy).use(function() {
        console.log('falsy');
    });

// method(); // fails
method(0); // falsy
method(1); // truthy

