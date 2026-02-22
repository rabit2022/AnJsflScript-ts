'use strict';

var description = require('symbol.prototype.description');
var descriptionShim = require('symbol.prototype.description/shim');


module.exports = {
    description: description,
    shim: function shimSymbol() {
        // description.shim();
        descriptionShim();
    },
};
