"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url = require("url");
var url_1 = require("url");
function fileURLToPath(url) {
    var urlString = (typeof url === 'object' && (url === null || url === void 0 ? void 0 : url.href))
        ? url.href
        : url;
    return FLfile.uriToPlatformPath(urlString);
}
function pathToFileURL(path) {
    var fileUri = FLfile.platformPathToURI(path);
    fileUri = fileUri.replace("|", ":");
    return (0, url_1.parse)(fileUri);
}
url.fileURLToPath = fileURLToPath;
url.pathToFileURL = pathToFileURL;
module.exports = url;
