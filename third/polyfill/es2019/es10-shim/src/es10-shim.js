

'use strict';

var $Array = require('./array/Array');
var $Object = require('./object/Object');
var $String = require('./string/String');
var $Symbol = require('./symbol/Symbol');

module.exports = {
	Array: $Array,
	Object: $Object,
	String: $String,
	Symbol: $Symbol,
	shim: function shimES10() {
		$Array.shim();
		$Object.shim();
		$String.shim();
		$Symbol.shim();
	}
};
