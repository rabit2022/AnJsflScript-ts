"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.url = exports.URL = void 0;
var url = require("url");
exports.url = url;
function fileURLToPath(url) {
    var urlString = typeof url === "object" && (url === null || url === void 0 ? void 0 : url.href) ? url.href : url;
    return FLfile.uriToPlatformPath(urlString);
}
function pathToFileURL(path) {
    var fileUri = FLfile.platformPathToURI(path);
    fileUri = fileUri.replace("|", ":");
    return url.parse(fileUri);
}
url.fileURLToPath = fileURLToPath;
url.pathToFileURL = pathToFileURL;
var aURL = (function () {
    function aURL(urlString) {
        this.urlString = urlString;
        return url.parse(urlString);
    }
    return aURL;
}());
exports.URL = aURL;
