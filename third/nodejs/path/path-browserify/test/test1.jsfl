// requirejs modules file test1.js

require(['path-browserify',"url"], function (path, url) {
    const {fileURLToPath,pathToFileURL,} = url;
    // import {fileURLToPath,pathToFileURL} from "node:url";


    var scriptURI = fl.scriptURI;
    var baseDir = AnJsflScript.folders.AnJsflScript;

    // fl.trace(scriptURI);
    // fl.trace(baseDir);

    var p1 = fileURLToPath(scriptURI),
        p2 = fileURLToPath(baseDir);



    const short_path = path.relative(p2, p1);
    console.log(short_path);

});