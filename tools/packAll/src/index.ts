// var IS_INCLUDE =window.AnJsflScript?.$ProjectFileDir$?.includes("AnJsflScript")

const includes = require("string.prototype.includes");

var IS_INCLUDE = includes(window.AnJsflScript?.$ProjectFileDir$, "AnJsflScript");

console.log(IS_INCLUDE);
