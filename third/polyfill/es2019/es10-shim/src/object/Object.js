'use strict';

var fromentries = require('object.fromentries');

module.exports = {
	fromentries: fromentries,
	shim: function shimObject() {
		fromentries.shim();
	},
};
