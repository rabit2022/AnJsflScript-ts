import {overload} from "../src";
o =overload.o;

var hello = overload.map({
    what: String
}).use(function(obj) {
    return 'hello ' + obj.what;
});

const res1 = hello({ what: 'world!' }); // returns 'hello world!'
console.log(res1);
// hello('world'); // throws a Type Error


var hello = overload.args(String, o.map({
    what: String
})).use(function(str, obj) {
    return str + obj.what;
});

const res2= hello('hello', { what: 'world!' }); // returns 'hello world!'
console.log(res2);
// hello('hello', 'world'); // throws a Type Error