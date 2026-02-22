'use strict';

var flat = require('./Array.prototype.flat');
var flatmap = require('./Array.prototype.flatmap');

module.exports = {
	flat: flat,
	flatmap: flatmap,
	shim: function shimArrayPrototype() {
		flat.shim();
		flatmap.shim();
	}
};
