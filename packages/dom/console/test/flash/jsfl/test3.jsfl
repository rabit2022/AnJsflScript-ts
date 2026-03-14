// iife file test3.jsfl
(function () {

    console.stack("Hello world")

    var json = {
        "foo": "bar",
        "bar": "baz"
    }
    console.table(json)
    var arr = ["foo", "bar","bar"]
    console.table(arr)


    console.error("Hello world")


})();