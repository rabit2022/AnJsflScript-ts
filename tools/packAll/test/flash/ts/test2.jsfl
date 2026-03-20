(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		require([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

// const snapshot = require("snapshot");
//
// // 构造复杂对象
// const obj = {
//     name: "John",
//     age: 30,
//     createdAt: new Date(),
//     pattern: /abc/gi,
//     sayHi: function () {
//         return "hello";
//     }
// };
//
// const str = snapshot.stringify(obj);
//
// console.log(str);

/******/ 	return __webpack_exports__;
/******/ })()
;
});