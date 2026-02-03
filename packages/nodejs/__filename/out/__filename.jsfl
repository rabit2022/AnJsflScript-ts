(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["__filename"] = factory();
	else
		root["__filename"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

var uriToPath = FLfile.uriToPlatformPath;
function getFilename() {
    return fl.scriptURI ? uriToPath(fl.scriptURI) : "";
}
function getDirname() {
    var fp = getFilename();
    if (!fp) {
        return "";
    }
    var winIndex = fp.lastIndexOf("\\");
    var unixIndex = fp.lastIndexOf("/");
    var lastIndex = Math.max(winIndex, unixIndex);
    return lastIndex === -1 ? "" : fp.substring(0, lastIndex);
}
Object.defineProperty(window, "__filename", {
    get: function () {
        return getFilename();
    },
    configurable: false,
    enumerable: false
});
Object.defineProperty(window, "__dirname", {
    get: function () {
        return getDirname();
    },
    configurable: false,
    enumerable: false
});

/******/ 	return __webpack_exports__;
/******/ })()
;
});