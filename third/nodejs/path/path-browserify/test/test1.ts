// requirejs modules file test1.js

import path from "path-browserify";
import {fileURLToPath,pathToFileURL} from "node:url";

// var scriptURI = fl.scriptURI;
// var baseDir = AnJsflScript.folders.AnJsflScript;


let scriptURI = "file:///H|/project/js/AnJsflScript-ts/third/nodejs/path/path-browserify/test/test1.jsfl"
let baseDir= "file:///H|/project/js/AnJsflScript-ts/"

// console.log(scriptURI);
// console.log(baseDir);

var p1 = fileURLToPath(scriptURI),
  p2 = fileURLToPath(baseDir);

console.log(p1, p2);

const short_path = path.relative(p2, p1);
console.log(short_path);
