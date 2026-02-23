// iife file test1.jsfl
(function () {

    var getGlobal = function () {
        /* global self, window */
        // the only reliable means to get the global object is
        // `Function('return this')()`
        // However, this causes CSP violations in Chrome apps.
        if (typeof self !== 'undefined') {
            return self;
        }
        if (typeof window !== 'undefined') {
            return window;
        }
        if (typeof global !== 'undefined') {
            return global;
        }
        throw new Error('unable to locate global object');
    };

    var globals = getGlobal();
    var Type = {
        primitive: function (x) {
            return x === null || (typeof x !== 'function' && typeof x !== 'object');
        },
        string: function (x) {
            return _toString(x) === '[object String]';
        },
        regex: function (x) {
            return _toString(x) === '[object RegExp]';
        },
        symbol: function (x) {
            console.log(x,typeof x)
            console.log(typeof globals.Symbol === 'function')
            return typeof globals.Symbol === 'function' && typeof x === 'object';
        }
    };
    var $iterator$ = Type.symbol(Symbol.iterator)
        ? Symbol.iterator
        : '_es6-shim iterator_';
    fl.trace($iterator$);

    fl.trace(typeof Symbol.iterator)
})();