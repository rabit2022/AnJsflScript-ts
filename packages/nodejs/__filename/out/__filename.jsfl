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

function uriToPath(uri) {
    if (uri.indexOf("file:///") === 0) {
        uri = uri.substring(8);
    }
    if (uri.length >= 2 && uri.charAt(1) === "|") {
        uri = uri.charAt(0) + ":" + uri.substring(2);
    }
    return uri.replace(/\//g, "\\");
}
function getFilename() {
    return fl.scriptURI ? uriToPath(fl.scriptURI) : "";
}
function getDirname() {
    var fp = getFilename();
    var i = fp.lastIndexOf("\\");
    return i === -1 ? "" : fp.substring(0, i);
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