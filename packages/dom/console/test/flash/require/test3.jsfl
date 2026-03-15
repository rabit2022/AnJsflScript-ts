// requirejs modules file test3.js
require([], function () {
    var scriptURI = fl.scriptURI;
    var baseDir = AnJsflScript.folders.AnJsflScript;

    console.log(scriptURI, baseDir);
});