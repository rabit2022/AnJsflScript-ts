// requirejs modules file test1.js
require(['url'], function (_) {
    const {fileURLToPath } =_;
    // import {fileURLToPath} from "url";
    const tempDir = AnJsflScript.folders.Log;

    console.log(fileURLToPath(tempDir));

});