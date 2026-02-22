'use strict';


var trimend = require('string.prototype.trimend');
var trimstart = require('string.prototype.trimstart');

module.exports = {
	trimstart: trimstart,
	trimend: trimend,
	shim: function shimStringPrototype() {
		trimstart.shim();
		trimend.shim();
	}
};
