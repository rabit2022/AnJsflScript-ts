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

;// ./asset/config.json
var config_namespaceObject = /*#__PURE__*/JSON.parse('{"company":"TechCorp","founded":2024,"isActive":true,"employees":[{"id":101,"name":"Alice Johnson","email":"alice@techcorp.com","skills":["JavaScript","TypeScript","React"],"address":{"city":"New York","zip":"10001"},"manager":null},{"id":102,"name":"Bob Smith","email":"bob@techcorp.com","skills":["Python","Django"],"address":{"city":"San Francisco","zip":"94105"},"manager":{"id":101,"name":"Alice Johnson"}}],"departments":["Engineering","Marketing","Sales"]}');
;// ./src/UI.ts

console.log(config_namespaceObject);

;// ./src/out/index.ts


/******/ 	return __webpack_exports__;
/******/ })()
;
});