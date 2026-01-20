//  npx browserify entry.js -o dist/url.jsfl --standalone url
// module.exports = require('url');

// need es6
const url = require('url');


// polyfills
// fileURLToPath, pathToFileURL

url.fileURLToPath=function () {
    FLfile.uriToPlatformPath()
}
url.pathToFileURL=function () {
    console.log("url pathToFileURL")
}




const {fileURLToPath, pathToFileURL} = url;


const path ="C:\\docs\\file.txt";
const uri = pathToFileURL(path);
console.log(uri.href);

const srcPath = fileURLToPath(uri);
console.log(srcPath);