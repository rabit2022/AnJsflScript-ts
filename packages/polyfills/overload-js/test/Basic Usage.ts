import {overload} from "../src";

var hello = (function() {

    var secret = '!';

    return overload()
        .args().use(function() {
            console.log("returns 'world'")
            return secret;
        })
        .args(String).use(function(val:string) {
            console.log("calls setter")
            secret = val;
        });

}());

hello('world'); // calls setter
hello(); // returns 'world'
// hello(0); // throws a Type Error