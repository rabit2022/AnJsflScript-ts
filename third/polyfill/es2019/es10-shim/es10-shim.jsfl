(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
'use strict';

var ArraySpeciesCreate = require('es-abstract/2024/ArraySpeciesCreate');
var FlattenIntoArray = require('es-abstract/2024/FlattenIntoArray');
var Get = require('es-abstract/2024/Get');
var ToIntegerOrInfinity = require('es-abstract/2024/ToIntegerOrInfinity');
var ToLength = require('es-abstract/2024/ToLength');
var ToObject = require('es-abstract/2024/ToObject');

module.exports = function flat() {
	var O = ToObject(this);
	var sourceLen = ToLength(Get(O, 'length'));

	var depthNum = 1;
	if (arguments.length > 0 && typeof arguments[0] !== 'undefined') {
		depthNum = ToIntegerOrInfinity(arguments[0]);
	}

	var A = ArraySpeciesCreate(O, 0);
	FlattenIntoArray(A, O, sourceLen, 0, depthNum);
	return A;
};

},{"es-abstract/2024/ArraySpeciesCreate":30,"es-abstract/2024/FlattenIntoArray":40,"es-abstract/2024/Get":42,"es-abstract/2024/ToIntegerOrInfinity":69,"es-abstract/2024/ToLength":70,"es-abstract/2024/ToObject":72}],3:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var callBind = require('call-bind');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var polyfill = getPolyfill();
var shim = require('./shim');

var boundFlat = callBind(polyfill);

define(boundFlat, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundFlat;

},{"./implementation":2,"./polyfill":4,"./shim":5,"call-bind":21,"define-properties":24}],4:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return Array.prototype.flat || implementation;
};

},{"./implementation":2}],5:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var shimUnscopables = require('es-shim-unscopables');

var getPolyfill = require('./polyfill');

module.exports = function shimFlat() {
	var polyfill = getPolyfill();

	define(
		Array.prototype,
		{ flat: polyfill },
		{ flat: function () { return Array.prototype.flat !== polyfill; } }
	);

	shimUnscopables('flat');

	return polyfill;
};

},{"./polyfill":4,"define-properties":24,"es-shim-unscopables":119}],6:[function(require,module,exports){
'use strict';

var ArraySpeciesCreate = require('es-abstract/2024/ArraySpeciesCreate');
var FlattenIntoArray = require('es-abstract/2024/FlattenIntoArray');
var Get = require('es-abstract/2024/Get');
var IsCallable = require('es-abstract/2024/IsCallable');
var ToLength = require('es-abstract/2024/ToLength');
var ToObject = require('es-abstract/2024/ToObject');

module.exports = function flatMap(mapperFunction) {
	var O = ToObject(this);
	var sourceLen = ToLength(Get(O, 'length'));

	if (!IsCallable(mapperFunction)) {
		throw new TypeError('mapperFunction must be a function');
	}

	var T;
	if (arguments.length > 1) {
		T = arguments[1];
	}

	var A = ArraySpeciesCreate(O, 0);
	FlattenIntoArray(A, O, sourceLen, 0, 1, mapperFunction, T);
	return A;
};

},{"es-abstract/2024/ArraySpeciesCreate":30,"es-abstract/2024/FlattenIntoArray":40,"es-abstract/2024/Get":42,"es-abstract/2024/IsCallable":50,"es-abstract/2024/ToLength":70,"es-abstract/2024/ToObject":72}],7:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var callBind = require('call-bind');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var polyfill = getPolyfill();
var shim = require('./shim');

var boundFlatMap = callBind(polyfill);

define(boundFlatMap, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundFlatMap;

},{"./implementation":6,"./polyfill":8,"./shim":9,"call-bind":21,"define-properties":24}],8:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return Array.prototype.flatMap || implementation;
};

},{"./implementation":6}],9:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var shimUnscopables = require('es-shim-unscopables');

var getPolyfill = require('./polyfill');

module.exports = function shimFlatMap() {
	var polyfill = getPolyfill();

	define(
		Array.prototype,
		{ flatMap: polyfill },
		{ flatMap: function () { return Array.prototype.flatMap !== polyfill; } }
	);

	shimUnscopables('flatMap');

	return polyfill;
};

},{"./polyfill":8,"define-properties":24,"es-shim-unscopables":119}],10:[function(require,module,exports){
'use strict';

var Call = require('es-abstract/2024/Call');
var Get = require('es-abstract/2024/Get');
var HasProperty = require('es-abstract/2024/HasProperty');
var IsCallable = require('es-abstract/2024/IsCallable');
var LengthOfArrayLike = require('es-abstract/2024/LengthOfArrayLike');
var ToObject = require('es-object-atoms/ToObject');
var ToString = require('es-abstract/2024/ToString');

var callBound = require('call-bound');
var isString = require('is-string');
var $Object = require('es-object-atoms');
var $TypeError = require('es-errors/type');

// Check failure of by-index access of string characters (IE < 9) and failure of `0 in boxedString` (Rhino)
var boxedString = $Object('a');
var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

var strSplit = callBound('%String.prototype.split%');

module.exports = function reduce(callbackfn) {
	var O = ToObject(this);
	var self = splitString && isString(O) ? strSplit(O, '') : O;
	var len = LengthOfArrayLike(self);

	// If no callback function or if callback is not a callable function
	if (!IsCallable(callbackfn)) {
		throw new $TypeError('Array.prototype.reduce callback must be a function');
	}

	if (len === 0 && arguments.length < 2) {
		throw new $TypeError('reduce of empty array with no initial value');
	}

	var k = 0;

	var accumulator;
	var Pk, kPresent;
	if (arguments.length > 1) {
		accumulator = arguments[1];
	} else {
		kPresent = false;
		while (!kPresent && k < len) {
			Pk = ToString(k);
			kPresent = HasProperty(O, Pk);
			if (kPresent) {
				accumulator = Get(O, Pk);
			}
			k += 1;
		}
		if (!kPresent) {
			throw new $TypeError('reduce of empty array with no initial value');
		}
	}

	while (k < len) {
		Pk = ToString(k);
		kPresent = HasProperty(O, Pk);
		if (kPresent) {
			var kValue = Get(O, Pk);
			accumulator = Call(callbackfn, void undefined, [accumulator, kValue, k, O]);
		}
		k += 1;
	}

	return accumulator;
};

},{"call-bound":22,"es-abstract/2024/Call":32,"es-abstract/2024/Get":42,"es-abstract/2024/HasProperty":47,"es-abstract/2024/IsCallable":50,"es-abstract/2024/LengthOfArrayLike":60,"es-abstract/2024/ToString":76,"es-errors/type":113,"es-object-atoms":117,"es-object-atoms/ToObject":116,"is-string":142}],11:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var RequireObjectCoercible = require('es-abstract/2024/RequireObjectCoercible');
var callBind = require('call-bind');
var callBound = require('call-bound');

var implementation = require('./implementation');

var getPolyfill = require('./polyfill');
var polyfill = callBind.apply(getPolyfill());

var shim = require('./shim');

var $slice = callBound('%Array.prototype.slice%');

// eslint-disable-next-line no-unused-vars
var boundShim = function reduce(array, callbackfn) {
	RequireObjectCoercible(array);
	return polyfill(array, $slice(arguments, 1));
};
define(boundShim, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundShim;

},{"./implementation":10,"./polyfill":12,"./shim":13,"call-bind":21,"call-bound":22,"define-properties":24,"es-abstract/2024/RequireObjectCoercible":64}],12:[function(require,module,exports){
'use strict';

var arrayMethodBoxesProperly = require('es-array-method-boxes-properly');

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	var method = Array.prototype.reduce;
	return arrayMethodBoxesProperly(method) ? method : implementation;
};

},{"./implementation":10,"es-array-method-boxes-properly":106}],13:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimArrayPrototypeReduce() {
	var polyfill = getPolyfill();
	define(
		Array.prototype,
		{ reduce: polyfill },
		{ reduce: function () { return Array.prototype.reduce !== polyfill; } }
	);
	return polyfill;
};

},{"./polyfill":12,"define-properties":24}],14:[function(require,module,exports){
'use strict';

var bind = require('function-bind');

var $apply = require('./functionApply');
var $call = require('./functionCall');
var $reflectApply = require('./reflectApply');

/** @type {import('./actualApply')} */
module.exports = $reflectApply || bind.call($call, $apply);

},{"./functionApply":16,"./functionCall":17,"./reflectApply":19,"function-bind":123}],15:[function(require,module,exports){
'use strict';

var bind = require('function-bind');
var $apply = require('./functionApply');
var actualApply = require('./actualApply');

/** @type {import('./applyBind')} */
module.exports = function applyBind() {
	return actualApply(bind, $apply, arguments);
};

},{"./actualApply":14,"./functionApply":16,"function-bind":123}],16:[function(require,module,exports){
'use strict';

/** @type {import('./functionApply')} */
module.exports = Function.prototype.apply;

},{}],17:[function(require,module,exports){
'use strict';

/** @type {import('./functionCall')} */
module.exports = Function.prototype.call;

},{}],18:[function(require,module,exports){
'use strict';

var bind = require('function-bind');
var $TypeError = require('es-errors/type');

var $call = require('./functionCall');
var $actualApply = require('./actualApply');

/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */
module.exports = function callBindBasic(args) {
	if (args.length < 1 || typeof args[0] !== 'function') {
		throw new $TypeError('a function is required');
	}
	return $actualApply(bind, $call, args);
};

},{"./actualApply":14,"./functionCall":17,"es-errors/type":113,"function-bind":123}],19:[function(require,module,exports){
'use strict';

/** @type {import('./reflectApply')} */
module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;

},{}],20:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var callBind = require('./');

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};

},{"./":21,"get-intrinsic":124}],21:[function(require,module,exports){
'use strict';

var setFunctionLength = require('set-function-length');

var $defineProperty = require('es-define-property');

var callBindBasic = require('call-bind-apply-helpers');
var applyBind = require('call-bind-apply-helpers/applyBind');

module.exports = function callBind(originalFunction) {
	var func = callBindBasic(arguments);
	var adjustedLength = originalFunction.length - (arguments.length - 1);
	return setFunctionLength(
		func,
		1 + (adjustedLength > 0 ? adjustedLength : 0),
		true
	);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}

},{"call-bind-apply-helpers":18,"call-bind-apply-helpers/applyBind":15,"es-define-property":107,"set-function-length":169}],22:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var callBindBasic = require('call-bind-apply-helpers');

/** @type {(thisArg: string, searchString: string, position?: number) => number} */
var $indexOf = callBindBasic([GetIntrinsic('%String.prototype.indexOf%')]);

/** @type {import('.')} */
module.exports = function callBoundIntrinsic(name, allowMissing) {
	/* eslint no-extra-parens: 0 */

	var intrinsic = /** @type {(this: unknown, ...args: unknown[]) => unknown} */ (GetIntrinsic(name, !!allowMissing));
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBindBasic(/** @type {const} */ ([intrinsic]));
	}
	return intrinsic;
};

},{"call-bind-apply-helpers":18,"get-intrinsic":124}],23:[function(require,module,exports){
'use strict';

var $defineProperty = require('es-define-property');

var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');

var gopd = require('gopd');

/** @type {import('.')} */
module.exports = function defineDataProperty(
	obj,
	property,
	value
) {
	if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
		throw new $TypeError('`obj` must be an object or a function`');
	}
	if (typeof property !== 'string' && typeof property !== 'symbol') {
		throw new $TypeError('`property` must be a string or a symbol`');
	}
	if (arguments.length > 3 && typeof arguments[3] !== 'boolean' && arguments[3] !== null) {
		throw new $TypeError('`nonEnumerable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 4 && typeof arguments[4] !== 'boolean' && arguments[4] !== null) {
		throw new $TypeError('`nonWritable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 5 && typeof arguments[5] !== 'boolean' && arguments[5] !== null) {
		throw new $TypeError('`nonConfigurable`, if provided, must be a boolean or null');
	}
	if (arguments.length > 6 && typeof arguments[6] !== 'boolean') {
		throw new $TypeError('`loose`, if provided, must be a boolean');
	}

	var nonEnumerable = arguments.length > 3 ? arguments[3] : null;
	var nonWritable = arguments.length > 4 ? arguments[4] : null;
	var nonConfigurable = arguments.length > 5 ? arguments[5] : null;
	var loose = arguments.length > 6 ? arguments[6] : false;

	/* @type {false | TypedPropertyDescriptor<unknown>} */
	var desc = !!gopd && gopd(obj, property);

	if ($defineProperty) {
		$defineProperty(obj, property, {
			configurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,
			enumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,
			value: value,
			writable: nonWritable === null && desc ? desc.writable : !nonWritable
		});
	} else if (loose || (!nonEnumerable && !nonWritable && !nonConfigurable)) {
		// must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable
		obj[property] = value; // eslint-disable-line no-param-reassign
	} else {
		throw new $SyntaxError('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');
	}
};

},{"es-define-property":107,"es-errors/syntax":112,"es-errors/type":113,"gopd":131}],24:[function(require,module,exports){
'use strict';

var keys = require('object-keys');
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var defineDataProperty = require('define-data-property');

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var supportsDescriptors = require('has-property-descriptors')();

var defineProperty = function (object, name, value, predicate) {
	if (name in object) {
		if (predicate === true) {
			if (object[name] === value) {
				return;
			}
		} else if (!isFunction(predicate) || !predicate()) {
			return;
		}
	}

	if (supportsDescriptors) {
		defineDataProperty(object, name, value, true);
	} else {
		defineDataProperty(object, name, value);
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;

},{"define-data-property":23,"has-property-descriptors":132,"object-keys":159}],25:[function(require,module,exports){
'use strict';

var callBind = require('call-bind-apply-helpers');
var gOPD = require('gopd');

var hasProtoAccessor;
try {
	// eslint-disable-next-line no-extra-parens, no-proto
	hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ ([]).__proto__ === Array.prototype;
} catch (e) {
	if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
		throw e;
	}
}

// eslint-disable-next-line no-extra-parens
var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, /** @type {keyof typeof Object.prototype} */ ('__proto__'));

var $Object = Object;
var $getPrototypeOf = $Object.getPrototypeOf;

/** @type {import('./get')} */
module.exports = desc && typeof desc.get === 'function'
	? callBind([desc.get])
	: typeof $getPrototypeOf === 'function'
		? /** @type {import('./get')} */ function getDunder(value) {
			// eslint-disable-next-line eqeqeq
			return $getPrototypeOf(value == null ? value : $Object(value));
		}
		: false;

},{"call-bind-apply-helpers":18,"gopd":131}],26:[function(require,module,exports){
'use strict';

var callBind = require('call-bind-apply-helpers');
var gOPD = require('gopd');
var $TypeError = require('es-errors/type');

/** @type {{ __proto__?: object | null }} */
var obj = {};
try {
	obj.__proto__ = null; // eslint-disable-line no-proto
} catch (e) {
	if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
		throw e;
	}
}

var hasProtoMutator = !('toString' in obj);

// eslint-disable-next-line no-extra-parens
var desc = gOPD && gOPD(Object.prototype, /** @type {keyof typeof Object.prototype} */ ('__proto__'));

/** @type {import('./set')} */
module.exports = hasProtoMutator && (
// eslint-disable-next-line no-extra-parens
	(!!desc && typeof desc.set === 'function' && /** @type {import('./set')} */ (callBind([desc.set])))
	|| /** @type {import('./set')} */ function setDunder(object, proto) {
		// this is node v0.10 or older, which doesn't have Object.setPrototypeOf and has undeniable __proto__
		if (object == null) { // eslint-disable-line eqeqeq
			throw new $TypeError('set Object.prototype.__proto__ called on null or undefined');
		}
		// eslint-disable-next-line no-proto, no-param-reassign, no-extra-parens
		/** @type {{ __proto__?: object | null }} */ (object).__proto__ = proto;
		return proto;
	}
);

},{"call-bind-apply-helpers":18,"es-errors/type":113,"gopd":131}],27:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');
var inspect = require('object-inspect');

var Call = require('./Call');
var Get = require('./Get');
var GetIterator = require('./GetIterator');
var IsCallable = require('./IsCallable');
var IteratorClose = require('./IteratorClose');
var IteratorStep = require('./IteratorStep');
var IteratorValue = require('./IteratorValue');
var ThrowCompletion = require('./ThrowCompletion');

// https://262.ecma-international.org/15.0/#sec-add-entries-from-iterable

module.exports = function AddEntriesFromIterable(target, iterable, adder) {
	if (!IsCallable(adder)) {
		throw new $TypeError('Assertion failed: `adder` is not callable');
	}
	if (iterable == null) {
		throw new $TypeError('Assertion failed: `iterable` is present, and not nullish');
	}
	var iteratorRecord = GetIterator(iterable, 'SYNC');
	while (true) {
		var next = IteratorStep(iteratorRecord);
		if (!next) {
			return target;
		}
		var nextItem = IteratorValue(next);
		if (!isObject(nextItem)) {
			var error = ThrowCompletion(new $TypeError('iterator next must return an Object, got ' + inspect(nextItem)));
			return IteratorClose(iteratorRecord, error);
		}
		try {
			var k = Get(nextItem, '0');
			var v = Get(nextItem, '1');
			Call(adder, target, [k, v]);
		} catch (e) {
			return IteratorClose(iteratorRecord, ThrowCompletion(e));
		}
	}
};

},{"./Call":32,"./Get":42,"./GetIterator":43,"./IsCallable":50,"./IteratorClose":55,"./IteratorStep":58,"./IteratorValue":59,"./ThrowCompletion":67,"es-errors/type":113,"es-object-atoms/isObject":118,"object-inspect":157}],28:[function(require,module,exports){
'use strict';

var CodePointAt = require('./CodePointAt');

var $TypeError = require('es-errors/type');
var isInteger = require('math-intrinsics/isInteger');
var MAX_SAFE_INTEGER = require('math-intrinsics/constants/maxSafeInteger');

// https://262.ecma-international.org/12.0/#sec-advancestringindex

module.exports = function AdvanceStringIndex(S, index, unicode) {
	if (typeof S !== 'string') {
		throw new $TypeError('Assertion failed: `S` must be a String');
	}
	if (!isInteger(index) || index < 0 || index > MAX_SAFE_INTEGER) {
		throw new $TypeError('Assertion failed: `length` must be an integer >= 0 and <= 2**53');
	}
	if (typeof unicode !== 'boolean') {
		throw new $TypeError('Assertion failed: `unicode` must be a Boolean');
	}
	if (!unicode) {
		return index + 1;
	}
	var length = S.length;
	if ((index + 1) >= length) {
		return index + 1;
	}
	var cp = CodePointAt(S, index);
	return index + cp['[[CodeUnitCount]]'];
};

},{"./CodePointAt":33,"es-errors/type":113,"math-intrinsics/constants/maxSafeInteger":147,"math-intrinsics/isInteger":150}],29:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $ArrayPrototype = GetIntrinsic('%Array.prototype%');
var $RangeError = require('es-errors/range');
var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');
var isInteger = require('math-intrinsics/isInteger');
var MAX_ARRAY_LENGTH = require('math-intrinsics/constants/maxArrayLength');
var $setProto = require('set-proto');

// https://262.ecma-international.org/12.0/#sec-arraycreate

module.exports = function ArrayCreate(length) {
	if (!isInteger(length) || length < 0) {
		throw new $TypeError('Assertion failed: `length` must be an integer Number >= 0');
	}
	if (length > MAX_ARRAY_LENGTH) {
		throw new $RangeError('length is greater than (2**32 - 1)');
	}
	var proto = arguments.length > 1 ? arguments[1] : $ArrayPrototype;
	var A = []; // steps 3, 5
	if (proto !== $ArrayPrototype) { // step 4
		if (!$setProto) {
			throw new $SyntaxError('ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]');
		}
		$setProto(A, proto);
	}
	if (length !== 0) { // bypasses the need for step 6
		A.length = length;
	}
	/* step 6, the above as a shortcut for the below
	OrdinaryDefineOwnProperty(A, 'length', {
		'[[Configurable]]': false,
		'[[Enumerable]]': false,
		'[[Value]]': length,
		'[[Writable]]': true
	});
	*/
	return A;
};

},{"es-errors/range":110,"es-errors/syntax":112,"es-errors/type":113,"get-intrinsic":124,"math-intrinsics/constants/maxArrayLength":146,"math-intrinsics/isInteger":150,"set-proto":172}],30:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $species = GetIntrinsic('%Symbol.species%', true);
var $TypeError = require('es-errors/type');
var isInteger = require('math-intrinsics/isInteger');
var isObject = require('es-object-atoms/isObject');

var ArrayCreate = require('./ArrayCreate');
var Get = require('./Get');
var IsArray = require('./IsArray');
var IsConstructor = require('./IsConstructor');

// https://262.ecma-international.org/12.0/#sec-arrayspeciescreate

module.exports = function ArraySpeciesCreate(originalArray, length) {
	if (!isInteger(length) || length < 0) {
		throw new $TypeError('Assertion failed: length must be an integer >= 0');
	}

	var isArray = IsArray(originalArray);
	if (!isArray) {
		return ArrayCreate(length);
	}

	var C = Get(originalArray, 'constructor');
	// TODO: figure out how to make a cross-realm normal Array, a same-realm Array
	// if (IsConstructor(C)) {
	// 	if C is another realm's Array, C = undefined
	// 	Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Array))) === null ?
	// }
	if ($species && isObject(C)) {
		C = Get(C, $species);
		if (C === null) {
			C = void 0;
		}
	}

	if (typeof C === 'undefined') {
		return ArrayCreate(length);
	}
	if (!IsConstructor(C)) {
		throw new $TypeError('C must be a constructor');
	}
	return new C(length); // Construct(C, length);
};


},{"./ArrayCreate":29,"./Get":42,"./IsArray":49,"./IsConstructor":51,"es-errors/type":113,"es-object-atoms/isObject":118,"get-intrinsic":124,"math-intrinsics/isInteger":150}],31:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');
var $Promise = GetIntrinsic('%Promise%', true);

var callBound = require('call-bound');

var CreateIterResultObject = require('./CreateIterResultObject');
var IteratorComplete = require('./IteratorComplete');
var IteratorValue = require('./IteratorValue');
var PromiseResolve = require('./PromiseResolve');

var $then = callBound('Promise.prototype.then', true);

// https://262.ecma-international.org/10.0/#sec-asyncfromsynciteratorcontinuation

module.exports = function AsyncFromSyncIteratorContinuation(result) {
	if (!isObject(result)) {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (arguments.length > 1) {
		throw new $SyntaxError('although AsyncFromSyncIteratorContinuation should take a second argument, it is not used in this implementation');
	}

	if (!$Promise) {
		throw new $SyntaxError('This environment does not support Promises.');
	}

	return new $Promise(function (resolve) {
		var done = IteratorComplete(result); // step 2
		var value = IteratorValue(result); // step 4
		var valueWrapper = PromiseResolve($Promise, value); // step 6

		// eslint-disable-next-line no-shadow
		var onFulfilled = function (value) { // steps 8-9
			return CreateIterResultObject(value, done); // step 8.a
		};
		resolve($then(valueWrapper, onFulfilled)); // step 11
	}); // step 12
};

},{"./CreateIterResultObject":38,"./IteratorComplete":56,"./IteratorValue":59,"./PromiseResolve":63,"call-bound":22,"es-errors/syntax":112,"es-errors/type":113,"es-object-atoms/isObject":118,"get-intrinsic":124}],32:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');
var callBound = require('call-bound');

var $TypeError = require('es-errors/type');

var IsArray = require('./IsArray');

var $apply = GetIntrinsic('%Reflect.apply%', true) || callBound('Function.prototype.apply');

// https://262.ecma-international.org/6.0/#sec-call

module.exports = function Call(F, V) {
	var argumentsList = arguments.length > 2 ? arguments[2] : [];
	if (!IsArray(argumentsList)) {
		throw new $TypeError('Assertion failed: optional `argumentsList`, if provided, must be a List');
	}
	return $apply(F, V, argumentsList);
};

},{"./IsArray":49,"call-bound":22,"es-errors/type":113,"get-intrinsic":124}],33:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');
var callBound = require('call-bound');
var isLeadingSurrogate = require('../helpers/isLeadingSurrogate');
var isTrailingSurrogate = require('../helpers/isTrailingSurrogate');

var UTF16SurrogatePairToCodePoint = require('./UTF16SurrogatePairToCodePoint');

var $charAt = callBound('String.prototype.charAt');
var $charCodeAt = callBound('String.prototype.charCodeAt');

// https://262.ecma-international.org/12.0/#sec-codepointat

module.exports = function CodePointAt(string, position) {
	if (typeof string !== 'string') {
		throw new $TypeError('Assertion failed: `string` must be a String');
	}
	var size = string.length;
	if (position < 0 || position >= size) {
		throw new $TypeError('Assertion failed: `position` must be >= 0, and < the length of `string`');
	}
	var first = $charCodeAt(string, position);
	var cp = $charAt(string, position);
	var firstIsLeading = isLeadingSurrogate(first);
	var firstIsTrailing = isTrailingSurrogate(first);
	if (!firstIsLeading && !firstIsTrailing) {
		return {
			'[[CodePoint]]': cp,
			'[[CodeUnitCount]]': 1,
			'[[IsUnpairedSurrogate]]': false
		};
	}
	if (firstIsTrailing || (position + 1 === size)) {
		return {
			'[[CodePoint]]': cp,
			'[[CodeUnitCount]]': 1,
			'[[IsUnpairedSurrogate]]': true
		};
	}
	var second = $charCodeAt(string, position + 1);
	if (!isTrailingSurrogate(second)) {
		return {
			'[[CodePoint]]': cp,
			'[[CodeUnitCount]]': 1,
			'[[IsUnpairedSurrogate]]': true
		};
	}

	return {
		'[[CodePoint]]': UTF16SurrogatePairToCodePoint(first, second),
		'[[CodeUnitCount]]': 2,
		'[[IsUnpairedSurrogate]]': false
	};
};

},{"../helpers/isLeadingSurrogate":100,"../helpers/isTrailingSurrogate":103,"./UTF16SurrogatePairToCodePoint":77,"call-bound":22,"es-errors/type":113}],34:[function(require,module,exports){
'use strict';

var $SyntaxError = require('es-errors/syntax');

var SLOT = require('internal-slot');

// https://262.ecma-international.org/7.0/#sec-completion-record-specification-type

var CompletionRecord = function CompletionRecord(type, value) {
	if (!(this instanceof CompletionRecord)) {
		return new CompletionRecord(type, value);
	}
	if (type !== 'normal' && type !== 'break' && type !== 'continue' && type !== 'return' && type !== 'throw') {
		throw new $SyntaxError('Assertion failed: `type` must be one of "normal", "break", "continue", "return", or "throw"');
	}
	SLOT.set(this, '[[Type]]', type);
	SLOT.set(this, '[[Value]]', value);
	// [[Target]] slot?
};

CompletionRecord.prototype.type = function Type() {
	return SLOT.get(this, '[[Type]]');
};

CompletionRecord.prototype.value = function Value() {
	return SLOT.get(this, '[[Value]]');
};

CompletionRecord.prototype['?'] = function ReturnIfAbrupt() {
	var type = SLOT.get(this, '[[Type]]');
	var value = SLOT.get(this, '[[Value]]');

	if (type === 'throw') {
		throw value;
	}
	return value;
};

CompletionRecord.prototype['!'] = function assert() {
	var type = SLOT.get(this, '[[Type]]');

	if (type !== 'normal') {
		throw new $SyntaxError('Assertion failed: Completion Record is not of type "normal"');
	}
	return SLOT.get(this, '[[Value]]');
};

module.exports = CompletionRecord;

},{"es-errors/syntax":112,"internal-slot":138}],35:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');
var $Promise = GetIntrinsic('%Promise%', true);

var AsyncFromSyncIteratorContinuation = require('./AsyncFromSyncIteratorContinuation');
var Call = require('./Call');
var CreateIterResultObject = require('./CreateIterResultObject');
var Get = require('./Get');
var GetMethod = require('./GetMethod');
var IteratorNext = require('./IteratorNext');
var OrdinaryObjectCreate = require('./OrdinaryObjectCreate');

var isIteratorRecord = require('../helpers/records/iterator-record');

var SLOT = require('internal-slot');

var $AsyncFromSyncIteratorPrototype = GetIntrinsic('%AsyncFromSyncIteratorPrototype%', true) || {
	next: function next(value) {
		if (!$Promise) {
			throw new $SyntaxError('This environment does not support Promises.');
		}

		var O = this; // step 1

		SLOT.assert(O, '[[SyncIteratorRecord]]'); // step 2

		var argsLength = arguments.length;

		return new $Promise(function (resolve) { // step 3
			var syncIteratorRecord = SLOT.get(O, '[[SyncIteratorRecord]]'); // step 4
			var result;
			if (argsLength > 0) {
				result = IteratorNext(syncIteratorRecord, value); // step 5.a
			} else { // step 6
				result = IteratorNext(syncIteratorRecord);// step 6.a
			}
			resolve(AsyncFromSyncIteratorContinuation(result)); // step 8
		});
	},
	'return': function () {
		if (!$Promise) {
			throw new $SyntaxError('This environment does not support Promises.');
		}

		var O = this; // step 1

		SLOT.assert(O, '[[SyncIteratorRecord]]'); // step 2

		var valueIsPresent = arguments.length > 0;
		var value = valueIsPresent ? arguments[0] : void undefined;

		return new $Promise(function (resolve, reject) { // step 3
			var syncIterator = SLOT.get(O, '[[SyncIteratorRecord]]')['[[Iterator]]']; // step 4
			var iteratorReturn = GetMethod(syncIterator, 'return'); // step 5

			if (typeof iteratorReturn === 'undefined') { // step 7
				var iterResult = CreateIterResultObject(value, true); // step 7.a
				Call(resolve, undefined, [iterResult]); // step 7.b
				return;
			}
			var result;
			if (valueIsPresent) { // step 8
				result = Call(iteratorReturn, syncIterator, [value]); // step 8.a
			} else { // step 9
				result = Call(iteratorReturn, syncIterator); // step 9.a
			}
			if (!isObject(result)) { // step 11
				Call(reject, undefined, [new $TypeError('Iterator `return` method returned a non-object value.')]); // step 11.a
				return;
			}

			resolve(AsyncFromSyncIteratorContinuation(result)); // step 12
		});
	},
	'throw': function () {
		if (!$Promise) {
			throw new $SyntaxError('This environment does not support Promises.');
		}

		var O = this; // step 1

		SLOT.assert(O, '[[SyncIteratorRecord]]'); // step 2

		var valueIsPresent = arguments.length > 0;
		var value = valueIsPresent ? arguments[0] : void undefined;

		return new $Promise(function (resolve, reject) { // step 3
			var syncIterator = SLOT.get(O, '[[SyncIteratorRecord]]')['[[Iterator]]']; // step 4

			var throwMethod = GetMethod(syncIterator, 'throw'); // step 5

			if (typeof throwMethod === 'undefined') { // step 7
				Call(reject, undefined, [value]); // step 7.a
				return;
			}

			var result;
			if (valueIsPresent) { // step 8
				result = Call(throwMethod, syncIterator, [value]); // step 8.a
			} else { // step 9
				result = Call(throwMethod, syncIterator); // step 9.a
			}
			if (!isObject(result)) { // step 11
				Call(reject, undefined, [new $TypeError('Iterator `throw` method returned a non-object value.')]); // step 11.a
				return;
			}

			resolve(AsyncFromSyncIteratorContinuation(result/* , promiseCapability */)); // step 12
		});
	}
};

// https://262.ecma-international.org/15.0/#sec-createasyncfromsynciterator

module.exports = function CreateAsyncFromSyncIterator(syncIteratorRecord) {
	if (!isIteratorRecord(syncIteratorRecord)) {
		throw new $TypeError('Assertion failed: `syncIteratorRecord` must be an Iterator Record');
	}

	// var asyncIterator = OrdinaryObjectCreate(%AsyncFromSyncIteratorPrototype%, « [[SyncIteratorRecord]] »); // step 1
	var asyncIterator = OrdinaryObjectCreate($AsyncFromSyncIteratorPrototype);

	SLOT.set(asyncIterator, '[[SyncIteratorRecord]]', syncIteratorRecord); // step 2

	var nextMethod = Get(asyncIterator, 'next'); // step 3

	return { // steps 3-4
		'[[Iterator]]': asyncIterator,
		'[[NextMethod]]': nextMethod,
		'[[Done]]': false
	};
};

},{"../helpers/records/iterator-record":104,"./AsyncFromSyncIteratorContinuation":31,"./Call":32,"./CreateIterResultObject":38,"./Get":42,"./GetMethod":45,"./IteratorNext":57,"./OrdinaryObjectCreate":62,"es-errors/syntax":112,"es-errors/type":113,"es-object-atoms/isObject":118,"get-intrinsic":124,"internal-slot":138}],36:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var isPropertyKey = require('../helpers/isPropertyKey');
var OrdinaryDefineOwnProperty = require('./OrdinaryDefineOwnProperty');

// https://262.ecma-international.org/6.0/#sec-createdataproperty

module.exports = function CreateDataProperty(O, P, V) {
	if (!isObject(O)) {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!isPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P is not a Property Key');
	}
	var newDesc = {
		'[[Configurable]]': true,
		'[[Enumerable]]': true,
		'[[Value]]': V,
		'[[Writable]]': true
	};
	return OrdinaryDefineOwnProperty(O, P, newDesc);
};

},{"../helpers/isPropertyKey":102,"./OrdinaryDefineOwnProperty":61,"es-errors/type":113,"es-object-atoms/isObject":118}],37:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var CreateDataProperty = require('./CreateDataProperty');

var isPropertyKey = require('../helpers/isPropertyKey');

// // https://262.ecma-international.org/14.0/#sec-createdatapropertyorthrow

module.exports = function CreateDataPropertyOrThrow(O, P, V) {
	if (!isObject(O)) {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	if (!isPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P is not a Property Key');
	}
	var success = CreateDataProperty(O, P, V);
	if (!success) {
		throw new $TypeError('unable to create data property');
	}
};

},{"../helpers/isPropertyKey":102,"./CreateDataProperty":36,"es-errors/type":113,"es-object-atoms/isObject":118}],38:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

// https://262.ecma-international.org/6.0/#sec-createiterresultobject

module.exports = function CreateIterResultObject(value, done) {
	if (typeof done !== 'boolean') {
		throw new $TypeError('Assertion failed: Type(done) is not Boolean');
	}
	return {
		value: value,
		done: done
	};
};

},{"es-errors/type":113}],39:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var isPropertyDescriptor = require('../helpers/records/property-descriptor');
var DefineOwnProperty = require('../helpers/DefineOwnProperty');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var isPropertyKey = require('../helpers/isPropertyKey');
var SameValue = require('./SameValue');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');

// https://262.ecma-international.org/6.0/#sec-definepropertyorthrow

module.exports = function DefinePropertyOrThrow(O, P, desc) {
	if (!isObject(O)) {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}

	if (!isPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P is not a Property Key');
	}

	var Desc = isPropertyDescriptor(desc) ? desc : ToPropertyDescriptor(desc);
	if (!isPropertyDescriptor(Desc)) {
		throw new $TypeError('Assertion failed: Desc is not a valid Property Descriptor');
	}

	return DefineOwnProperty(
		IsDataDescriptor,
		SameValue,
		FromPropertyDescriptor,
		O,
		P,
		Desc
	);
};

},{"../helpers/DefineOwnProperty":94,"../helpers/isPropertyKey":102,"../helpers/records/property-descriptor":105,"./FromPropertyDescriptor":41,"./IsDataDescriptor":52,"./SameValue":65,"./ToPropertyDescriptor":74,"es-errors/type":113,"es-object-atoms/isObject":118}],40:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var MAX_SAFE_INTEGER = require('math-intrinsics/constants/maxSafeInteger');

var Call = require('./Call');
var CreateDataPropertyOrThrow = require('./CreateDataPropertyOrThrow');
var Get = require('./Get');
var HasProperty = require('./HasProperty');
var IsArray = require('./IsArray');
var LengthOfArrayLike = require('./LengthOfArrayLike');
var ToString = require('./ToString');

// https://262.ecma-international.org/11.0/#sec-flattenintoarray

module.exports = function FlattenIntoArray(target, source, sourceLen, start, depth) {
	var mapperFunction;
	if (arguments.length > 5) {
		mapperFunction = arguments[5];
	}

	var targetIndex = start;
	var sourceIndex = 0;
	while (sourceIndex < sourceLen) {
		var P = ToString(sourceIndex);
		var exists = HasProperty(source, P);
		if (exists === true) {
			var element = Get(source, P);
			if (typeof mapperFunction !== 'undefined') {
				if (arguments.length <= 6) {
					throw new $TypeError('Assertion failed: thisArg is required when mapperFunction is provided');
				}
				element = Call(mapperFunction, arguments[6], [element, sourceIndex, source]);
			}
			var shouldFlatten = false;
			if (depth > 0) {
				shouldFlatten = IsArray(element);
			}
			if (shouldFlatten) {
				var elementLen = LengthOfArrayLike(element);
				targetIndex = FlattenIntoArray(target, element, elementLen, targetIndex, depth - 1);
			} else {
				if (targetIndex >= MAX_SAFE_INTEGER) {
					throw new $TypeError('index too large');
				}
				CreateDataPropertyOrThrow(target, ToString(targetIndex), element);
				targetIndex += 1;
			}
		}
		sourceIndex += 1;
	}

	return targetIndex;
};

},{"./Call":32,"./CreateDataPropertyOrThrow":37,"./Get":42,"./HasProperty":47,"./IsArray":49,"./LengthOfArrayLike":60,"./ToString":76,"es-errors/type":113,"math-intrinsics/constants/maxSafeInteger":147}],41:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var isPropertyDescriptor = require('../helpers/records/property-descriptor');
var fromPropertyDescriptor = require('../helpers/fromPropertyDescriptor');

// https://262.ecma-international.org/6.0/#sec-frompropertydescriptor

module.exports = function FromPropertyDescriptor(Desc) {
	if (typeof Desc !== 'undefined' && !isPropertyDescriptor(Desc)) {
		throw new $TypeError('Assertion failed: `Desc` must be a Property Descriptor');
	}

	return fromPropertyDescriptor(Desc);
};

},{"../helpers/fromPropertyDescriptor":97,"../helpers/records/property-descriptor":105,"es-errors/type":113}],42:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var inspect = require('object-inspect');

var isPropertyKey = require('../helpers/isPropertyKey');

var isObject = require('es-object-atoms/isObject');

// https://262.ecma-international.org/6.0/#sec-get-o-p

module.exports = function Get(O, P) {
	// 7.3.1.1
	if (!isObject(O)) {
		throw new $TypeError('Assertion failed: Type(O) is not Object');
	}
	// 7.3.1.2
	if (!isPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P is not a Property Key, got ' + inspect(P));
	}
	// 7.3.1.3
	return O[P];
};

},{"../helpers/isPropertyKey":102,"es-errors/type":113,"es-object-atoms/isObject":118,"object-inspect":157}],43:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = require('es-errors/type');
var $asyncIterator = GetIntrinsic('%Symbol.asyncIterator%', true);

var inspect = require('object-inspect');
var hasSymbols = require('has-symbols')();

var AdvanceStringIndex = require('./AdvanceStringIndex');
var CreateAsyncFromSyncIterator = require('./CreateAsyncFromSyncIterator');
var GetIteratorFromMethod = require('./GetIteratorFromMethod');
var GetMethod = require('./GetMethod');

var ES = {
	AdvanceStringIndex: AdvanceStringIndex,
	GetMethod: GetMethod
};

var getIteratorMethod = require('../helpers/getIteratorMethod');

// https://262.ecma-international.org/14.0/#sec-getiterator

module.exports = function GetIterator(obj, kind) {
	if (kind !== 'SYNC' && kind !== 'ASYNC') {
		throw new $TypeError("Assertion failed: `kind` must be one of 'sync' or 'async', got " + inspect(kind));
	}

	var method;
	if (kind === 'ASYNC') { // step 1
		if (hasSymbols && $asyncIterator) {
			method = GetMethod(obj, $asyncIterator); // step 1.a
		}
	}
	if (typeof method === 'undefined') { // step 1.b
		// var syncMethod = GetMethod(obj, $iterator); // step 1.b.i
		var syncMethod = getIteratorMethod(ES, obj);
		if (kind === 'ASYNC') {
			if (typeof syncMethod === 'undefined') {
				throw new $TypeError('iterator method is `undefined`'); // step 1.b.ii
			}
			var syncIteratorRecord = GetIteratorFromMethod(obj, syncMethod); // step 1.b.iii
			return CreateAsyncFromSyncIterator(syncIteratorRecord); // step 1.b.iv
		}
		method = syncMethod; // step 2, kind of
	}

	if (typeof method === 'undefined') {
		throw new $TypeError('iterator method is `undefined`'); // step 3
	}
	return GetIteratorFromMethod(obj, method); // step 4
};

},{"../helpers/getIteratorMethod":98,"./AdvanceStringIndex":28,"./CreateAsyncFromSyncIterator":35,"./GetIteratorFromMethod":44,"./GetMethod":45,"es-errors/type":113,"get-intrinsic":124,"has-symbols":134,"object-inspect":157}],44:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var Call = require('./Call');
var Get = require('./Get');
var IsCallable = require('./IsCallable');

// https://262.ecma-international.org/15.0/#sec-getiteratorfrommethod

module.exports = function GetIteratorFromMethod(obj, method) {
	if (!IsCallable(method)) {
		throw new $TypeError('method must be a function');
	}

	var iterator = Call(method, obj); // step 1
	if (!isObject(iterator)) {
		throw new $TypeError('iterator must return an object'); // step 2
	}

	var nextMethod = Get(iterator, 'next'); // step 3
	return { // steps 4-5
		'[[Iterator]]': iterator,
		'[[NextMethod]]': nextMethod,
		'[[Done]]': false
	};
};

},{"./Call":32,"./Get":42,"./IsCallable":50,"es-errors/type":113,"es-object-atoms/isObject":118}],45:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var GetV = require('./GetV');
var IsCallable = require('./IsCallable');
var isPropertyKey = require('../helpers/isPropertyKey');

var inspect = require('object-inspect');

// https://262.ecma-international.org/6.0/#sec-getmethod

module.exports = function GetMethod(O, P) {
	// 7.3.9.1
	if (!isPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P is not a Property Key');
	}

	// 7.3.9.2
	var func = GetV(O, P);

	// 7.3.9.4
	if (func == null) {
		return void 0;
	}

	// 7.3.9.5
	if (!IsCallable(func)) {
		throw new $TypeError(inspect(P) + ' is not a function: ' + inspect(func));
	}

	// 7.3.9.6
	return func;
};

},{"../helpers/isPropertyKey":102,"./GetV":46,"./IsCallable":50,"es-errors/type":113,"object-inspect":157}],46:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var inspect = require('object-inspect');

var isPropertyKey = require('../helpers/isPropertyKey');
// var ToObject = require('./ToObject');

// https://262.ecma-international.org/6.0/#sec-getv

module.exports = function GetV(V, P) {
	// 7.3.2.1
	if (!isPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P is not a Property Key, got ' + inspect(P));
	}

	// 7.3.2.2-3
	// var O = ToObject(V);

	// 7.3.2.4
	return V[P];
};

},{"../helpers/isPropertyKey":102,"es-errors/type":113,"object-inspect":157}],47:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var isPropertyKey = require('../helpers/isPropertyKey');

// https://262.ecma-international.org/6.0/#sec-hasproperty

module.exports = function HasProperty(O, P) {
	if (!isObject(O)) {
		throw new $TypeError('Assertion failed: `O` must be an Object');
	}
	if (!isPropertyKey(P)) {
		throw new $TypeError('Assertion failed: `P` must be a Property Key');
	}
	return P in O;
};

},{"../helpers/isPropertyKey":102,"es-errors/type":113,"es-object-atoms/isObject":118}],48:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var hasOwn = require('hasown');

var isPropertyDescriptor = require('../helpers/records/property-descriptor');

// https://262.ecma-international.org/5.1/#sec-8.10.1

module.exports = function IsAccessorDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	if (!isPropertyDescriptor(Desc)) {
		throw new $TypeError('Assertion failed: `Desc` must be a Property Descriptor');
	}

	if (!hasOwn(Desc, '[[Get]]') && !hasOwn(Desc, '[[Set]]')) {
		return false;
	}

	return true;
};

},{"../helpers/records/property-descriptor":105,"es-errors/type":113,"hasown":137}],49:[function(require,module,exports){
'use strict';

// https://262.ecma-international.org/6.0/#sec-isarray
module.exports = require('../helpers/IsArray');

},{"../helpers/IsArray":95}],50:[function(require,module,exports){
'use strict';

// http://262.ecma-international.org/5.1/#sec-9.11

module.exports = require('is-callable');

},{"is-callable":139}],51:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('../GetIntrinsic.js');

var $construct = GetIntrinsic('%Reflect.construct%', true);

var DefinePropertyOrThrow = require('./DefinePropertyOrThrow');
try {
	DefinePropertyOrThrow({}, '', { '[[Get]]': function () {} });
} catch (e) {
	// Accessor properties aren't supported
	DefinePropertyOrThrow = null;
}

// https://262.ecma-international.org/6.0/#sec-isconstructor

if (DefinePropertyOrThrow && $construct) {
	var isConstructorMarker = {};
	var badArrayLike = {};
	DefinePropertyOrThrow(badArrayLike, 'length', {
		'[[Get]]': function () {
			throw isConstructorMarker;
		},
		'[[Enumerable]]': true
	});

	module.exports = function IsConstructor(argument) {
		try {
			// `Reflect.construct` invokes `IsConstructor(target)` before `Get(args, 'length')`:
			$construct(argument, badArrayLike);
		} catch (err) {
			return err === isConstructorMarker;
		}
	};
} else {
	module.exports = function IsConstructor(argument) {
		// unfortunately there's no way to truly check this without try/catch `new argument` in old environments
		return typeof argument === 'function' && !!argument.prototype;
	};
}

},{"../GetIntrinsic.js":93,"./DefinePropertyOrThrow":39}],52:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var hasOwn = require('hasown');

var isPropertyDescriptor = require('../helpers/records/property-descriptor');

// https://262.ecma-international.org/5.1/#sec-8.10.2

module.exports = function IsDataDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	if (!isPropertyDescriptor(Desc)) {
		throw new $TypeError('Assertion failed: `Desc` must be a Property Descriptor');
	}

	if (!hasOwn(Desc, '[[Value]]') && !hasOwn(Desc, '[[Writable]]')) {
		return false;
	}

	return true;
};

},{"../helpers/records/property-descriptor":105,"es-errors/type":113,"hasown":137}],53:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $preventExtensions = GetIntrinsic('%Object.preventExtensions%', true);
var $isExtensible = GetIntrinsic('%Object.isExtensible%', true);

var isPrimitive = require('../helpers/isPrimitive');

// https://262.ecma-international.org/6.0/#sec-isextensible-o

module.exports = $preventExtensions
	? function IsExtensible(obj) {
		return !isPrimitive(obj) && $isExtensible(obj);
	}
	: function IsExtensible(obj) {
		return !isPrimitive(obj);
	};

},{"../helpers/isPrimitive":101,"get-intrinsic":124}],54:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');

var isPropertyDescriptor = require('../helpers/records/property-descriptor');

// https://262.ecma-international.org/6.0/#sec-isgenericdescriptor

module.exports = function IsGenericDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return false;
	}

	if (!isPropertyDescriptor(Desc)) {
		throw new $TypeError('Assertion failed: `Desc` must be a Property Descriptor');
	}

	if (!IsAccessorDescriptor(Desc) && !IsDataDescriptor(Desc)) {
		return true;
	}

	return false;
};

},{"../helpers/records/property-descriptor":105,"./IsAccessorDescriptor":48,"./IsDataDescriptor":52,"es-errors/type":113}],55:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var Call = require('./Call');
var CompletionRecord = require('./CompletionRecord');
var GetMethod = require('./GetMethod');
var IsCallable = require('./IsCallable');

var isIteratorRecord = require('../helpers/records/iterator-record');

// https://262.ecma-international.org/15.0/#sec-iteratorclose

module.exports = function IteratorClose(iteratorRecord, completion) {
	if (!isIteratorRecord(iteratorRecord)) {
		throw new $TypeError('Assertion failed: `iteratorRecord` must be an Iterator Record'); // step 1
	}
	if (!isObject(iteratorRecord['[[Iterator]]'])) {
		throw new $TypeError('Assertion failed: iteratorRecord.[[Iterator]] must be an Object'); // step 1
	}

	if (!IsCallable(completion) && !(completion instanceof CompletionRecord)) { // step 2
		throw new $TypeError('Assertion failed: completion is not a thunk representing a Completion Record, nor a Completion Record instance');
	}
	var completionThunk = completion instanceof CompletionRecord ? function () { return completion['?'](); } : completion;

	var iterator = iteratorRecord['[[Iterator]]']; // step 3

	var iteratorReturn;
	try {
		iteratorReturn = GetMethod(iterator, 'return'); // step 4
	} catch (e) {
		completionThunk(); // throws if `completion` is a throw completion // step 6
		// eslint-disable-next-line no-useless-assignment
		completionThunk = null; // ensure it's not called twice.
		throw e; // step 7
	}
	if (typeof iteratorReturn === 'undefined') {
		return completionThunk(); // step 5.a - 5.b
	}

	var innerResult;
	try {
		innerResult = Call(iteratorReturn, iterator, []);
	} catch (e) {
		// if we hit here, then "e" is the innerResult completion that needs re-throwing

		completionThunk(); // throws if `completion` is a throw completion // step 6
		// eslint-disable-next-line no-useless-assignment
		completionThunk = null; // ensure it's not called twice.

		// if not, then return the innerResult completion
		throw e; // step 7
	}
	var completionRecord = completionThunk(); // if innerResult worked, then throw if the completion does
	// eslint-disable-next-line no-useless-assignment
	completionThunk = null; // ensure it's not called twice.

	if (!isObject(innerResult)) {
		throw new $TypeError('iterator .return must return an object');
	}

	return completionRecord;
};

},{"../helpers/records/iterator-record":104,"./Call":32,"./CompletionRecord":34,"./GetMethod":45,"./IsCallable":50,"es-errors/type":113,"es-object-atoms/isObject":118}],56:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var Get = require('./Get');
var ToBoolean = require('./ToBoolean');

// https://262.ecma-international.org/6.0/#sec-iteratorcomplete

module.exports = function IteratorComplete(iterResult) {
	if (!isObject(iterResult)) {
		throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
	}
	return ToBoolean(Get(iterResult, 'done'));
};

},{"./Get":42,"./ToBoolean":68,"es-errors/type":113,"es-object-atoms/isObject":118}],57:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var Call = require('./Call');

var isIteratorRecord = require('../helpers/records/iterator-record');

// https://262.ecma-international.org/15.0/#sec-iteratornext

module.exports = function IteratorNext(iteratorRecord) {
	if (!isIteratorRecord(iteratorRecord)) {
		throw new $TypeError('Assertion failed: `iteratorRecord` must be an Iterator Record'); // step 1
	}

	var result;
	if (arguments.length < 2) { // step 1
		result = Call(iteratorRecord['[[NextMethod]]'], iteratorRecord['[[Iterator]]']); // step 1.a
	} else { // step 2
		result = Call(iteratorRecord['[[NextMethod]]'], iteratorRecord['[[Iterator]]'], [arguments[1]]); // step 2.a
	}

	if (!isObject(result)) {
		throw new $TypeError('iterator next must return an object'); // step 3
	}
	return result; // step 4
};

},{"../helpers/records/iterator-record":104,"./Call":32,"es-errors/type":113,"es-object-atoms/isObject":118}],58:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var IteratorComplete = require('./IteratorComplete');
var IteratorNext = require('./IteratorNext');

var isIteratorRecord = require('../helpers/records/iterator-record');

// https://262.ecma-international.org/15.0/#sec-iteratorstep

module.exports = function IteratorStep(iteratorRecord) {
	if (!isIteratorRecord(iteratorRecord)) {
		throw new $TypeError('Assertion failed: `iteratorRecord` must be an Iterator Record'); // step 1
	}

	var result = IteratorNext(iteratorRecord); // step 1
	var done = IteratorComplete(result); // step 2
	return done === true ? false : result; // steps 3-4
};


},{"../helpers/records/iterator-record":104,"./IteratorComplete":56,"./IteratorNext":57,"es-errors/type":113}],59:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var Get = require('./Get');

// https://262.ecma-international.org/6.0/#sec-iteratorvalue

module.exports = function IteratorValue(iterResult) {
	if (!isObject(iterResult)) {
		throw new $TypeError('Assertion failed: Type(iterResult) is not Object');
	}
	return Get(iterResult, 'value');
};


},{"./Get":42,"es-errors/type":113,"es-object-atoms/isObject":118}],60:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var Get = require('./Get');
var ToLength = require('./ToLength');

// https://262.ecma-international.org/11.0/#sec-lengthofarraylike

module.exports = function LengthOfArrayLike(obj) {
	if (!isObject(obj)) {
		throw new $TypeError('Assertion failed: `obj` must be an Object');
	}
	return ToLength(Get(obj, 'length'));
};

// TODO: use this all over

},{"./Get":42,"./ToLength":70,"es-errors/type":113,"es-object-atoms/isObject":118}],61:[function(require,module,exports){
'use strict';

var $gOPD = require('gopd');
var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var isPropertyDescriptor = require('../helpers/records/property-descriptor');

var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsExtensible = require('./IsExtensible');
var isPropertyKey = require('../helpers/isPropertyKey');
var ToPropertyDescriptor = require('./ToPropertyDescriptor');
var SameValue = require('./SameValue');
var ValidateAndApplyPropertyDescriptor = require('./ValidateAndApplyPropertyDescriptor');

// https://262.ecma-international.org/6.0/#sec-ordinarydefineownproperty

module.exports = function OrdinaryDefineOwnProperty(O, P, Desc) {
	if (!isObject(O)) {
		throw new $TypeError('Assertion failed: O must be an Object');
	}
	if (!isPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	if (!isPropertyDescriptor(Desc)) {
		throw new $TypeError('Assertion failed: Desc must be a Property Descriptor');
	}
	if (!$gOPD) {
		// ES3/IE 8 fallback
		if (IsAccessorDescriptor(Desc)) {
			throw new $SyntaxError('This environment does not support accessor property descriptors.');
		}
		var creatingNormalDataProperty = !(P in O)
			&& Desc['[[Writable]]']
			&& Desc['[[Enumerable]]']
			&& Desc['[[Configurable]]']
			&& '[[Value]]' in Desc;
		var settingExistingDataProperty = (P in O)
			&& (!('[[Configurable]]' in Desc) || Desc['[[Configurable]]'])
			&& (!('[[Enumerable]]' in Desc) || Desc['[[Enumerable]]'])
			&& (!('[[Writable]]' in Desc) || Desc['[[Writable]]'])
			&& '[[Value]]' in Desc;
		if (creatingNormalDataProperty || settingExistingDataProperty) {
			O[P] = Desc['[[Value]]']; // eslint-disable-line no-param-reassign
			return SameValue(O[P], Desc['[[Value]]']);
		}
		throw new $SyntaxError('This environment does not support defining non-writable, non-enumerable, or non-configurable properties');
	}
	var desc = $gOPD(O, P);
	var current = desc && ToPropertyDescriptor(desc);
	var extensible = IsExtensible(O);
	return ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current);
};

},{"../helpers/isPropertyKey":102,"../helpers/records/property-descriptor":105,"./IsAccessorDescriptor":48,"./IsExtensible":53,"./SameValue":65,"./ToPropertyDescriptor":74,"./ValidateAndApplyPropertyDescriptor":78,"es-errors/syntax":112,"es-errors/type":113,"es-object-atoms/isObject":118,"gopd":131}],62:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $ObjectCreate = GetIntrinsic('%Object.create%', true);
var $TypeError = require('es-errors/type');
var $SyntaxError = require('es-errors/syntax');
var isObject = require('es-object-atoms/isObject');

var IsArray = require('./IsArray');

var forEach = require('../helpers/forEach');

var SLOT = require('internal-slot');

var hasProto = require('has-proto')();

// https://262.ecma-international.org/11.0/#sec-objectcreate

module.exports = function OrdinaryObjectCreate(proto) {
	if (proto !== null && !isObject(proto)) {
		throw new $TypeError('Assertion failed: `proto` must be null or an object');
	}
	var additionalInternalSlotsList = arguments.length < 2 ? [] : arguments[1];
	if (!IsArray(additionalInternalSlotsList)) {
		throw new $TypeError('Assertion failed: `additionalInternalSlotsList` must be an Array');
	}

	// var internalSlotsList = ['[[Prototype]]', '[[Extensible]]']; // step 1
	// internalSlotsList.push(...additionalInternalSlotsList); // step 2
	// var O = MakeBasicObject(internalSlotsList); // step 3
	// setProto(O, proto); // step 4
	// return O; // step 5

	var O;
	if (hasProto) {
		O = { __proto__: proto };
	} else if ($ObjectCreate) {
		O = $ObjectCreate(proto);
	} else {
		if (proto === null) {
			throw new $SyntaxError('native Object.create support is required to create null objects');
		}
		var T = function T() {};
		T.prototype = proto;
		O = new T();
	}

	if (additionalInternalSlotsList.length > 0) {
		forEach(additionalInternalSlotsList, function (slot) {
			SLOT.set(O, slot, void undefined);
		});
	}

	return O;
};

},{"../helpers/forEach":96,"./IsArray":49,"es-errors/syntax":112,"es-errors/type":113,"es-object-atoms/isObject":118,"get-intrinsic":124,"has-proto":133,"internal-slot":138}],63:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');
var callBind = require('call-bind');
var $SyntaxError = require('es-errors/syntax');

var $resolve = GetIntrinsic('%Promise.resolve%', true);
var $PromiseResolve = $resolve && callBind($resolve);

// https://262.ecma-international.org/9.0/#sec-promise-resolve

module.exports = function PromiseResolve(C, x) {
	if (!$PromiseResolve) {
		throw new $SyntaxError('This environment does not support Promises.');
	}
	return $PromiseResolve(C, x);
};


},{"call-bind":21,"es-errors/syntax":112,"get-intrinsic":124}],64:[function(require,module,exports){
'use strict';

module.exports = require('es-object-atoms/RequireObjectCoercible');

},{"es-object-atoms/RequireObjectCoercible":115}],65:[function(require,module,exports){
'use strict';

var $isNaN = require('math-intrinsics/isNaN');

// http://262.ecma-international.org/5.1/#sec-9.12

module.exports = function SameValue(x, y) {
	if (x === y) { // 0 === -0, but they are not identical.
		if (x === 0) { return 1 / x === 1 / y; }
		return true;
	}
	return $isNaN(x) && $isNaN(y);
};

},{"math-intrinsics/isNaN":151}],66:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $RegExp = GetIntrinsic('%RegExp%');
var $TypeError = require('es-errors/type');
var $parseInteger = GetIntrinsic('%parseInt%');

var callBound = require('call-bound');
var regexTester = require('safe-regex-test');

var $strSlice = callBound('String.prototype.slice');
var isBinary = regexTester(/^0b[01]+$/i);
var isOctal = regexTester(/^0o[0-7]+$/i);
var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
var nonWS = ['\u0085', '\u200b', '\ufffe'].join('');
var nonWSregex = new $RegExp('[' + nonWS + ']', 'g');
var hasNonWS = regexTester(nonWSregex);

var $trim = require('string.prototype.trim');

// https://262.ecma-international.org/13.0/#sec-stringtonumber

module.exports = function StringToNumber(argument) {
	if (typeof argument !== 'string') {
		throw new $TypeError('Assertion failed: `argument` is not a String');
	}
	if (isBinary(argument)) {
		return +$parseInteger($strSlice(argument, 2), 2);
	}
	if (isOctal(argument)) {
		return +$parseInteger($strSlice(argument, 2), 8);
	}
	if (hasNonWS(argument) || isInvalidHexLiteral(argument)) {
		return NaN;
	}
	var trimmed = $trim(argument);
	if (trimmed !== argument) {
		return StringToNumber(trimmed);
	}
	return +argument;
};

},{"call-bound":22,"es-errors/type":113,"get-intrinsic":124,"safe-regex-test":168,"string.prototype.trim":178}],67:[function(require,module,exports){
'use strict';

var CompletionRecord = require('./CompletionRecord');

// https://262.ecma-international.org/9.0/#sec-throwcompletion

module.exports = function ThrowCompletion(argument) {
	return new CompletionRecord('throw', argument);
};

},{"./CompletionRecord":34}],68:[function(require,module,exports){
'use strict';

// http://262.ecma-international.org/5.1/#sec-9.2

module.exports = function ToBoolean(value) { return !!value; };

},{}],69:[function(require,module,exports){
'use strict';

var ToNumber = require('./ToNumber');
var truncate = require('./truncate');

var $isNaN = require('math-intrinsics/isNaN');
var $isFinite = require('math-intrinsics/isFinite');

// https://262.ecma-international.org/14.0/#sec-tointegerorinfinity

module.exports = function ToIntegerOrInfinity(value) {
	var number = ToNumber(value);
	if ($isNaN(number) || number === 0) { return 0; }
	if (!$isFinite(number)) { return number; }
	return truncate(number);
};

},{"./ToNumber":71,"./truncate":80,"math-intrinsics/isFinite":149,"math-intrinsics/isNaN":151}],70:[function(require,module,exports){
'use strict';

var MAX_SAFE_INTEGER = require('math-intrinsics/constants/maxSafeInteger');

var ToIntegerOrInfinity = require('./ToIntegerOrInfinity');

// https://262.ecma-international.org/12.0/#sec-tolength

module.exports = function ToLength(argument) {
	var len = ToIntegerOrInfinity(argument);
	if (len <= 0) { return 0; } // includes converting -0 to +0
	if (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }
	return len;
};

},{"./ToIntegerOrInfinity":69,"math-intrinsics/constants/maxSafeInteger":147}],71:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = require('es-errors/type');
var $Number = GetIntrinsic('%Number%');
var isPrimitive = require('../helpers/isPrimitive');

var ToPrimitive = require('./ToPrimitive');
var StringToNumber = require('./StringToNumber');

// https://262.ecma-international.org/13.0/#sec-tonumber

module.exports = function ToNumber(argument) {
	var value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);
	if (typeof value === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a number');
	}
	if (typeof value === 'bigint') {
		throw new $TypeError('Conversion from \'BigInt\' to \'number\' is not allowed.');
	}
	if (typeof value === 'string') {
		return StringToNumber(value);
	}
	return +value;
};

},{"../helpers/isPrimitive":101,"./StringToNumber":66,"./ToPrimitive":73,"es-errors/type":113,"get-intrinsic":124}],72:[function(require,module,exports){
'use strict';

// https://262.ecma-international.org/6.0/#sec-toobject

module.exports = require('es-object-atoms/ToObject');

},{"es-object-atoms/ToObject":116}],73:[function(require,module,exports){
'use strict';

var toPrimitive = require('es-to-primitive/es2015');

// https://262.ecma-international.org/6.0/#sec-toprimitive

module.exports = function ToPrimitive(input) {
	if (arguments.length > 1) {
		return toPrimitive(input, arguments[1]);
	}
	return toPrimitive(input);
};

},{"es-to-primitive/es2015":120}],74:[function(require,module,exports){
'use strict';

var hasOwn = require('hasown');

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var IsCallable = require('./IsCallable');
var ToBoolean = require('./ToBoolean');

// https://262.ecma-international.org/5.1/#sec-8.10.5

module.exports = function ToPropertyDescriptor(Obj) {
	if (!isObject(Obj)) {
		throw new $TypeError('ToPropertyDescriptor requires an object');
	}

	var desc = {};
	if (hasOwn(Obj, 'enumerable')) {
		desc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);
	}
	if (hasOwn(Obj, 'configurable')) {
		desc['[[Configurable]]'] = ToBoolean(Obj.configurable);
	}
	if (hasOwn(Obj, 'value')) {
		desc['[[Value]]'] = Obj.value;
	}
	if (hasOwn(Obj, 'writable')) {
		desc['[[Writable]]'] = ToBoolean(Obj.writable);
	}
	if (hasOwn(Obj, 'get')) {
		var getter = Obj.get;
		if (typeof getter !== 'undefined' && !IsCallable(getter)) {
			throw new $TypeError('getter must be a function');
		}
		desc['[[Get]]'] = getter;
	}
	if (hasOwn(Obj, 'set')) {
		var setter = Obj.set;
		if (typeof setter !== 'undefined' && !IsCallable(setter)) {
			throw new $TypeError('setter must be a function');
		}
		desc['[[Set]]'] = setter;
	}

	if ((hasOwn(desc, '[[Get]]') || hasOwn(desc, '[[Set]]')) && (hasOwn(desc, '[[Value]]') || hasOwn(desc, '[[Writable]]'))) {
		throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
	}
	return desc;
};

},{"./IsCallable":50,"./ToBoolean":68,"es-errors/type":113,"es-object-atoms/isObject":118,"hasown":137}],75:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $String = GetIntrinsic('%String%');

var ToPrimitive = require('./ToPrimitive');
var ToString = require('./ToString');

// https://262.ecma-international.org/6.0/#sec-topropertykey

module.exports = function ToPropertyKey(argument) {
	var key = ToPrimitive(argument, $String);
	return typeof key === 'symbol' ? key : ToString(key);
};

},{"./ToPrimitive":73,"./ToString":76,"get-intrinsic":124}],76:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $String = GetIntrinsic('%String%');
var $TypeError = require('es-errors/type');

// https://262.ecma-international.org/6.0/#sec-tostring

module.exports = function ToString(argument) {
	if (typeof argument === 'symbol') {
		throw new $TypeError('Cannot convert a Symbol value to a string');
	}
	return $String(argument);
};

},{"es-errors/type":113,"get-intrinsic":124}],77:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = require('es-errors/type');
var $fromCharCode = GetIntrinsic('%String.fromCharCode%');

var isLeadingSurrogate = require('../helpers/isLeadingSurrogate');
var isTrailingSurrogate = require('../helpers/isTrailingSurrogate');

// https://262.ecma-international.org/12.0/#sec-utf16decodesurrogatepair

module.exports = function UTF16SurrogatePairToCodePoint(lead, trail) {
	if (!isLeadingSurrogate(lead) || !isTrailingSurrogate(trail)) {
		throw new $TypeError('Assertion failed: `lead` must be a leading surrogate char code, and `trail` must be a trailing surrogate char code');
	}
	// var cp = (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
	return $fromCharCode(lead) + $fromCharCode(trail);
};

},{"../helpers/isLeadingSurrogate":100,"../helpers/isTrailingSurrogate":103,"es-errors/type":113,"get-intrinsic":124}],78:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');
var isObject = require('es-object-atoms/isObject');

var DefineOwnProperty = require('../helpers/DefineOwnProperty');
var isFullyPopulatedPropertyDescriptor = require('../helpers/isFullyPopulatedPropertyDescriptor');
var isPropertyDescriptor = require('../helpers/records/property-descriptor');

var FromPropertyDescriptor = require('./FromPropertyDescriptor');
var IsAccessorDescriptor = require('./IsAccessorDescriptor');
var IsDataDescriptor = require('./IsDataDescriptor');
var IsGenericDescriptor = require('./IsGenericDescriptor');
var isPropertyKey = require('../helpers/isPropertyKey');
var SameValue = require('./SameValue');

// https://262.ecma-international.org/13.0/#sec-validateandapplypropertydescriptor

// see https://github.com/tc39/ecma262/pull/2468 for ES2022 changes

// eslint-disable-next-line max-lines-per-function, max-statements
module.exports = function ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current) {
	if (typeof O !== 'undefined' && !isObject(O)) {
		throw new $TypeError('Assertion failed: O must be undefined or an Object');
	}
	if (!isPropertyKey(P)) {
		throw new $TypeError('Assertion failed: P must be a Property Key');
	}
	if (typeof extensible !== 'boolean') {
		throw new $TypeError('Assertion failed: extensible must be a Boolean');
	}
	if (!isPropertyDescriptor(Desc)) {
		throw new $TypeError('Assertion failed: Desc must be a Property Descriptor');
	}
	if (typeof current !== 'undefined' && !isPropertyDescriptor(current)) {
		throw new $TypeError('Assertion failed: current must be a Property Descriptor, or undefined');
	}

	if (typeof current === 'undefined') { // step 2
		if (!extensible) {
			return false; // step 2.a
		}
		if (typeof O === 'undefined') {
			return true; // step 2.b
		}
		if (IsAccessorDescriptor(Desc)) { // step 2.c
			return DefineOwnProperty(
				IsDataDescriptor,
				SameValue,
				FromPropertyDescriptor,
				O,
				P,
				Desc
			);
		}
		// step 2.d
		return DefineOwnProperty(
			IsDataDescriptor,
			SameValue,
			FromPropertyDescriptor,
			O,
			P,
			{
				'[[Configurable]]': !!Desc['[[Configurable]]'],
				'[[Enumerable]]': !!Desc['[[Enumerable]]'],
				'[[Value]]': Desc['[[Value]]'],
				'[[Writable]]': !!Desc['[[Writable]]']
			}
		);
	}

	// 3. Assert: current is a fully populated Property Descriptor.
	if (
		!isFullyPopulatedPropertyDescriptor(
			{
				IsAccessorDescriptor: IsAccessorDescriptor,
				IsDataDescriptor: IsDataDescriptor
			},
			current
		)
	) {
		throw new $TypeError('`current`, when present, must be a fully populated and valid Property Descriptor');
	}

	// 4. If every field in Desc is absent, return true.
	// this can't really match the assertion that it's a Property Descriptor in our JS implementation

	// 5. If current.[[Configurable]] is false, then
	if (!current['[[Configurable]]']) {
		if ('[[Configurable]]' in Desc && Desc['[[Configurable]]']) {
			// step 5.a
			return false;
		}
		if ('[[Enumerable]]' in Desc && !SameValue(Desc['[[Enumerable]]'], current['[[Enumerable]]'])) {
			// step 5.b
			return false;
		}
		if (!IsGenericDescriptor(Desc) && !SameValue(IsAccessorDescriptor(Desc), IsAccessorDescriptor(current))) {
			// step 5.c
			return false;
		}
		if (IsAccessorDescriptor(current)) { // step 5.d
			if ('[[Get]]' in Desc && !SameValue(Desc['[[Get]]'], current['[[Get]]'])) {
				return false;
			}
			if ('[[Set]]' in Desc && !SameValue(Desc['[[Set]]'], current['[[Set]]'])) {
				return false;
			}
		} else if (!current['[[Writable]]']) { // step 5.e
			if ('[[Writable]]' in Desc && Desc['[[Writable]]']) {
				return false;
			}
			if ('[[Value]]' in Desc && !SameValue(Desc['[[Value]]'], current['[[Value]]'])) {
				return false;
			}
		}
	}

	// 6. If O is not undefined, then
	if (typeof O !== 'undefined') {
		var configurable;
		var enumerable;
		if (IsDataDescriptor(current) && IsAccessorDescriptor(Desc)) { // step 6.a
			configurable = ('[[Configurable]]' in Desc ? Desc : current)['[[Configurable]]'];
			enumerable = ('[[Enumerable]]' in Desc ? Desc : current)['[[Enumerable]]'];
			// Replace the property named P of object O with an accessor property having [[Configurable]] and [[Enumerable]] attributes as described by current and each other attribute set to its default value.
			return DefineOwnProperty(
				IsDataDescriptor,
				SameValue,
				FromPropertyDescriptor,
				O,
				P,
				{
					'[[Configurable]]': !!configurable,
					'[[Enumerable]]': !!enumerable,
					'[[Get]]': ('[[Get]]' in Desc ? Desc : current)['[[Get]]'],
					'[[Set]]': ('[[Set]]' in Desc ? Desc : current)['[[Set]]']
				}
			);
		} else if (IsAccessorDescriptor(current) && IsDataDescriptor(Desc)) {
			configurable = ('[[Configurable]]' in Desc ? Desc : current)['[[Configurable]]'];
			enumerable = ('[[Enumerable]]' in Desc ? Desc : current)['[[Enumerable]]'];
			// i. Replace the property named P of object O with a data property having [[Configurable]] and [[Enumerable]] attributes as described by current and each other attribute set to its default value.
			return DefineOwnProperty(
				IsDataDescriptor,
				SameValue,
				FromPropertyDescriptor,
				O,
				P,
				{
					'[[Configurable]]': !!configurable,
					'[[Enumerable]]': !!enumerable,
					'[[Value]]': ('[[Value]]' in Desc ? Desc : current)['[[Value]]'],
					'[[Writable]]': !!('[[Writable]]' in Desc ? Desc : current)['[[Writable]]']
				}
			);
		}

		// For each field of Desc that is present, set the corresponding attribute of the property named P of object O to the value of the field.
		return DefineOwnProperty(
			IsDataDescriptor,
			SameValue,
			FromPropertyDescriptor,
			O,
			P,
			Desc
		);
	}

	return true; // step 7
};

},{"../helpers/DefineOwnProperty":94,"../helpers/isFullyPopulatedPropertyDescriptor":99,"../helpers/isPropertyKey":102,"../helpers/records/property-descriptor":105,"./FromPropertyDescriptor":41,"./IsAccessorDescriptor":48,"./IsDataDescriptor":52,"./IsGenericDescriptor":54,"./SameValue":65,"es-errors/type":113,"es-object-atoms/isObject":118}],79:[function(require,module,exports){
'use strict';

// var modulo = require('./modulo');
var $floor = require('math-intrinsics/floor');

// http://262.ecma-international.org/11.0/#eqn-floor

module.exports = function floor(x) {
	// return x - modulo(x, 1);
	if (typeof x === 'bigint') {
		return x;
	}
	return $floor(x);
};

},{"math-intrinsics/floor":148}],80:[function(require,module,exports){
'use strict';

var floor = require('./floor');

var $TypeError = require('es-errors/type');

// https://262.ecma-international.org/14.0/#eqn-truncate

module.exports = function truncate(x) {
	if (typeof x !== 'number' && typeof x !== 'bigint') {
		throw new $TypeError('argument must be a Number or a BigInt');
	}
	var result = x < 0 ? -floor(-x) : floor(x);
	return result === 0 ? 0 : result; // in the spec, these are math values, so we filter out -0 here
};

},{"./floor":79,"es-errors/type":113}],81:[function(require,module,exports){
arguments[4][36][0].apply(exports,arguments)
},{"../helpers/isPropertyKey":102,"./OrdinaryDefineOwnProperty":88,"dup":36,"es-errors/type":113,"es-object-atoms/isObject":118}],82:[function(require,module,exports){
arguments[4][41][0].apply(exports,arguments)
},{"../helpers/fromPropertyDescriptor":97,"../helpers/records/property-descriptor":105,"dup":41,"es-errors/type":113}],83:[function(require,module,exports){
arguments[4][48][0].apply(exports,arguments)
},{"../helpers/records/property-descriptor":105,"dup":48,"es-errors/type":113,"hasown":137}],84:[function(require,module,exports){
arguments[4][50][0].apply(exports,arguments)
},{"dup":50,"is-callable":139}],85:[function(require,module,exports){
arguments[4][52][0].apply(exports,arguments)
},{"../helpers/records/property-descriptor":105,"dup":52,"es-errors/type":113,"hasown":137}],86:[function(require,module,exports){
arguments[4][53][0].apply(exports,arguments)
},{"../helpers/isPrimitive":101,"dup":53,"get-intrinsic":124}],87:[function(require,module,exports){
arguments[4][54][0].apply(exports,arguments)
},{"../helpers/records/property-descriptor":105,"./IsAccessorDescriptor":83,"./IsDataDescriptor":85,"dup":54,"es-errors/type":113}],88:[function(require,module,exports){
arguments[4][61][0].apply(exports,arguments)
},{"../helpers/isPropertyKey":102,"../helpers/records/property-descriptor":105,"./IsAccessorDescriptor":83,"./IsExtensible":86,"./SameValue":89,"./ToPropertyDescriptor":91,"./ValidateAndApplyPropertyDescriptor":92,"dup":61,"es-errors/syntax":112,"es-errors/type":113,"es-object-atoms/isObject":118,"gopd":131}],89:[function(require,module,exports){
arguments[4][65][0].apply(exports,arguments)
},{"dup":65,"math-intrinsics/isNaN":151}],90:[function(require,module,exports){
arguments[4][68][0].apply(exports,arguments)
},{"dup":68}],91:[function(require,module,exports){
arguments[4][74][0].apply(exports,arguments)
},{"./IsCallable":84,"./ToBoolean":90,"dup":74,"es-errors/type":113,"es-object-atoms/isObject":118,"hasown":137}],92:[function(require,module,exports){
arguments[4][78][0].apply(exports,arguments)
},{"../helpers/DefineOwnProperty":94,"../helpers/isFullyPopulatedPropertyDescriptor":99,"../helpers/isPropertyKey":102,"../helpers/records/property-descriptor":105,"./FromPropertyDescriptor":82,"./IsAccessorDescriptor":83,"./IsDataDescriptor":85,"./IsGenericDescriptor":87,"./SameValue":89,"dup":78,"es-errors/type":113,"es-object-atoms/isObject":118}],93:[function(require,module,exports){
'use strict';

// TODO: remove, semver-major

module.exports = require('get-intrinsic');

},{"get-intrinsic":124}],94:[function(require,module,exports){
'use strict';

var hasPropertyDescriptors = require('has-property-descriptors');

var $defineProperty = require('es-define-property');

var hasArrayLengthDefineBug = hasPropertyDescriptors.hasArrayLengthDefineBug();

// eslint-disable-next-line global-require
var isArray = hasArrayLengthDefineBug && require('../helpers/IsArray');

var callBound = require('call-bound');

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');

// eslint-disable-next-line max-params
module.exports = function DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, desc) {
	if (!$defineProperty) {
		if (!IsDataDescriptor(desc)) {
			// ES3 does not support getters/setters
			return false;
		}
		if (!desc['[[Configurable]]'] || !desc['[[Writable]]']) {
			return false;
		}

		// fallback for ES3
		if (P in O && $isEnumerable(O, P) !== !!desc['[[Enumerable]]']) {
			// a non-enumerable existing property
			return false;
		}

		// property does not exist at all, or exists but is enumerable
		var V = desc['[[Value]]'];
		// eslint-disable-next-line no-param-reassign
		O[P] = V; // will use [[Define]]
		return SameValue(O[P], V);
	}
	if (
		hasArrayLengthDefineBug
		&& P === 'length'
		&& '[[Value]]' in desc
		&& isArray(O)
		&& O.length !== desc['[[Value]]']
	) {
		// eslint-disable-next-line no-param-reassign
		O.length = desc['[[Value]]'];
		return O.length === desc['[[Value]]'];
	}

	$defineProperty(O, P, FromPropertyDescriptor(desc));
	return true;
};

},{"../helpers/IsArray":95,"call-bound":22,"es-define-property":107,"has-property-descriptors":132}],95:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $Array = GetIntrinsic('%Array%');

// eslint-disable-next-line global-require
var toStr = !$Array.isArray && require('call-bound')('Object.prototype.toString');

module.exports = $Array.isArray || function IsArray(argument) {
	return toStr(argument) === '[object Array]';
};

},{"call-bound":22,"get-intrinsic":124}],96:[function(require,module,exports){
'use strict';

module.exports = function forEach(array, callback) {
	for (var i = 0; i < array.length; i += 1) {
		callback(array[i], i, array); // eslint-disable-line callback-return
	}
};

},{}],97:[function(require,module,exports){
'use strict';

module.exports = function fromPropertyDescriptor(Desc) {
	if (typeof Desc === 'undefined') {
		return Desc;
	}
	var obj = {};
	if ('[[Value]]' in Desc) {
		obj.value = Desc['[[Value]]'];
	}
	if ('[[Writable]]' in Desc) {
		obj.writable = !!Desc['[[Writable]]'];
	}
	if ('[[Get]]' in Desc) {
		obj.get = Desc['[[Get]]'];
	}
	if ('[[Set]]' in Desc) {
		obj.set = Desc['[[Set]]'];
	}
	if ('[[Enumerable]]' in Desc) {
		obj.enumerable = !!Desc['[[Enumerable]]'];
	}
	if ('[[Configurable]]' in Desc) {
		obj.configurable = !!Desc['[[Configurable]]'];
	}
	return obj;
};

},{}],98:[function(require,module,exports){
'use strict';

var hasSymbols = require('has-symbols')();
var GetIntrinsic = require('get-intrinsic');
var callBound = require('call-bound');
var isString = require('is-string');

var $iterator = GetIntrinsic('%Symbol.iterator%', true);
var $stringSlice = callBound('String.prototype.slice');
var $String = GetIntrinsic('%String%');

var IsArray = require('./IsArray');

module.exports = function getIteratorMethod(ES, iterable) {
	var usingIterator;
	if (hasSymbols) {
		usingIterator = ES.GetMethod(iterable, $iterator);
	} else if (IsArray(iterable)) {
		usingIterator = function () {
			var i = -1;
			var arr = this;
			return {
				next: function () {
					i += 1;
					return {
						done: i >= arr.length,
						value: arr[i]
					};
				}
			};
		};
	} else if (isString(iterable)) {
		usingIterator = function () {
			var i = 0;
			return {
				next: function () {
					var nextIndex = ES.AdvanceStringIndex($String(iterable), i, true);
					var value = $stringSlice(iterable, i, nextIndex);
					i = nextIndex;
					var done = nextIndex > iterable.length;
					return {
						done: done,
						value: done ? void undefined : value
					};
				}
			};
		};
	}
	return usingIterator;
};

},{"./IsArray":95,"call-bound":22,"get-intrinsic":124,"has-symbols":134,"is-string":142}],99:[function(require,module,exports){
'use strict';

var isPropertyDescriptor = require('./records/property-descriptor');

module.exports = function isFullyPopulatedPropertyDescriptor(ES, Desc) {
	return isPropertyDescriptor(Desc)
		&& '[[Enumerable]]' in Desc
		&& '[[Configurable]]' in Desc
		&& (ES.IsAccessorDescriptor(Desc) || ES.IsDataDescriptor(Desc));
};

},{"./records/property-descriptor":105}],100:[function(require,module,exports){
'use strict';

module.exports = function isLeadingSurrogate(charCode) {
	return typeof charCode === 'number' && charCode >= 0xD800 && charCode <= 0xDBFF;
};

},{}],101:[function(require,module,exports){
'use strict';

module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};

},{}],102:[function(require,module,exports){
'use strict';

module.exports = function isPropertyKey(argument) {
	return typeof argument === 'string' || typeof argument === 'symbol';
};

},{}],103:[function(require,module,exports){
'use strict';

module.exports = function isTrailingSurrogate(charCode) {
	return typeof charCode === 'number' && charCode >= 0xDC00 && charCode <= 0xDFFF;
};

},{}],104:[function(require,module,exports){
'use strict';

var hasOwn = require('hasown');

module.exports = function isIteratorRecord(value) {
	return !!value
		&& typeof value === 'object'
		&& hasOwn(value, '[[Iterator]]')
		&& hasOwn(value, '[[NextMethod]]')
		&& hasOwn(value, '[[Done]]')
		&& typeof value['[[Done]]'] === 'boolean';
};

},{"hasown":137}],105:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

var hasOwn = require('hasown');

var allowed = {
	__proto__: null,
	'[[Configurable]]': true,
	'[[Enumerable]]': true,
	'[[Get]]': true,
	'[[Set]]': true,
	'[[Value]]': true,
	'[[Writable]]': true
};

// https://262.ecma-international.org/6.0/#sec-property-descriptor-specification-type

module.exports = function isPropertyDescriptor(Desc) {
	if (!Desc || typeof Desc !== 'object') {
		return false;
	}

	for (var key in Desc) { // eslint-disable-line
		if (hasOwn(Desc, key) && !allowed[key]) {
			return false;
		}
	}

	var isData = hasOwn(Desc, '[[Value]]') || hasOwn(Desc, '[[Writable]]');
	var IsAccessor = hasOwn(Desc, '[[Get]]') || hasOwn(Desc, '[[Set]]');
	if (isData && IsAccessor) {
		throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
	}
	return true;
};

},{"es-errors/type":113,"hasown":137}],106:[function(require,module,exports){
module.exports = function properlyBoxed(method) {
	// Check node 0.6.21 bug where third parameter is not boxed
	var properlyBoxesNonStrict = true;
	var properlyBoxesStrict = true;
	var threwException = false;
	if (typeof method === 'function') {
		try {
			// eslint-disable-next-line max-params
			method.call('f', function (_, __, O) {
				if (typeof O !== 'object') {
					properlyBoxesNonStrict = false;
				}
			});

			method.call(
				[null],
				function () {
					'use strict';

					properlyBoxesStrict = typeof this === 'string'; // eslint-disable-line no-invalid-this
				},
				'x'
			);
		} catch (e) {
			threwException = true;
		}
		return !threwException && properlyBoxesNonStrict && properlyBoxesStrict;
	}
	return false;
};

},{}],107:[function(require,module,exports){
'use strict';

/** @type {import('.')} */
var $defineProperty = Object.defineProperty || false;
if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = false;
	}
}

module.exports = $defineProperty;

},{}],108:[function(require,module,exports){
'use strict';

/** @type {import('./eval')} */
module.exports = EvalError;

},{}],109:[function(require,module,exports){
'use strict';

/** @type {import('.')} */
module.exports = Error;

},{}],110:[function(require,module,exports){
'use strict';

/** @type {import('./range')} */
module.exports = RangeError;

},{}],111:[function(require,module,exports){
'use strict';

/** @type {import('./ref')} */
module.exports = ReferenceError;

},{}],112:[function(require,module,exports){
'use strict';

/** @type {import('./syntax')} */
module.exports = SyntaxError;

},{}],113:[function(require,module,exports){
'use strict';

/** @type {import('./type')} */
module.exports = TypeError;

},{}],114:[function(require,module,exports){
'use strict';

/** @type {import('./uri')} */
module.exports = URIError;

},{}],115:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');

/** @type {import('./RequireObjectCoercible')} */
module.exports = function RequireObjectCoercible(value) {
	if (value == null) {
		throw new $TypeError((arguments.length > 0 && arguments[1]) || ('Cannot call method on ' + value));
	}
	return value;
};

},{"es-errors/type":113}],116:[function(require,module,exports){
'use strict';

var $Object = require('./');
var RequireObjectCoercible = require('./RequireObjectCoercible');

/** @type {import('./ToObject')} */
module.exports = function ToObject(value) {
	RequireObjectCoercible(value);
	return $Object(value);
};

},{"./":117,"./RequireObjectCoercible":115}],117:[function(require,module,exports){
'use strict';

/** @type {import('.')} */
module.exports = Object;

},{}],118:[function(require,module,exports){
'use strict';

/** @type {import('./isObject')} */
module.exports = function isObject(x) {
	return !!x && (typeof x === 'function' || typeof x === 'object');
};

},{}],119:[function(require,module,exports){
'use strict';

var hasOwn = require('hasown');

var hasUnscopables = typeof Symbol === 'function' && typeof Symbol.unscopables === 'symbol';

var map = hasUnscopables && Array.prototype[Symbol.unscopables];

var $TypeError = TypeError;

/** @type {import('.')} */
module.exports = function shimUnscopables(method) {
	if (typeof method !== 'string' || !method) {
		throw new $TypeError('method must be a non-empty string');
	}
	if (!hasOwn(Array.prototype, method)) {
		throw new $TypeError('method must be on Array.prototype');
	}
	if (hasUnscopables && map) {
		map[method] = true;
	}
};

},{"hasown":137}],120:[function(require,module,exports){
'use strict';

var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

var isPrimitive = require('./helpers/isPrimitive');
var isCallable = require('is-callable');
var isDate = require('is-date-object');
var isSymbol = require('is-symbol');

/** @type {(O: { valueOf?: () => unknown, toString?: () => unknown }, hint: 'number' | 'string' | 'default') => null | undefined | string | symbol | number | boolean | bigint} */
var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
	if (typeof O === 'undefined' || O === null) {
		throw new TypeError('Cannot call method on ' + O);
	}
	if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
		throw new TypeError('hint must be "string" or "number"');
	}
	/** @type {('toString' | 'valueOf')[]} */
	var methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
	var method, result, i;
	for (i = 0; i < methodNames.length; ++i) {
		method = O[methodNames[i]];
		if (isCallable(method)) {
			result = method.call(O);
			if (isPrimitive(result)) {
				return result;
			}
		}
	}
	throw new TypeError('No default value');
};

/** @type {<K extends PropertyKey>(O: Record<K, unknown>, P: K) => Function | undefined} */
var GetMethod = function GetMethod(O, P) {
	var func = O[P];
	if (func !== null && typeof func !== 'undefined') {
		if (!isCallable(func)) {
			throw new TypeError(func + ' returned for property ' + String(P) + ' of object ' + O + ' is not a function');
		}
		return func;
	}
	return void 0;
};

/** @type {import('./es2015')} */
// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive
module.exports = function ToPrimitive(input) {
	if (isPrimitive(input)) {
		return input;
	}
	/** @type {'default' | 'string' | 'number'} */
	var hint = 'default';
	if (arguments.length > 1) {
		if (arguments[1] === String) {
			hint = 'string';
		} else if (arguments[1] === Number) {
			hint = 'number';
		}
	}

	var exoticToPrim;
	if (hasSymbols) {
		if (Symbol.toPrimitive) {
			// eslint-disable-next-line no-extra-parens
			exoticToPrim = GetMethod(/** @type {Record<PropertyKey, unknown>} */ (input), Symbol.toPrimitive);
		} else if (isSymbol(input)) {
			exoticToPrim = Symbol.prototype.valueOf;
		}
	}
	if (typeof exoticToPrim !== 'undefined') {
		var result = exoticToPrim.call(input, hint);
		if (isPrimitive(result)) {
			return result;
		}
		throw new TypeError('unable to convert exotic object to primitive');
	}
	if (hint === 'default' && (isDate(input) || isSymbol(input))) {
		hint = 'string';
	}
	// eslint-disable-next-line no-extra-parens
	return ordinaryToPrimitive(/** @type {object} */ (input), hint === 'default' ? 'number' : hint);
};

},{"./helpers/isPrimitive":121,"is-callable":139,"is-date-object":140,"is-symbol":143}],121:[function(require,module,exports){
'use strict';

/** @type {(value: unknown) => value is null | undefined | string | symbol | number | boolean | bigint} */
module.exports = function isPrimitive(value) {
	return value === null || (typeof value !== 'function' && typeof value !== 'object');
};

},{}],122:[function(require,module,exports){
'use strict';

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';

var concatty = function concatty(a, b) {
    var arr = [];

    for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
    }
    for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
    }

    return arr;
};

var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
    }
    return arr;
};

var joiny = function (arr, joiner) {
    var str = '';
    for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                concatty(args, arguments)
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(
            that,
            concatty(args, arguments)
        );

    };

    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = '$' + i;
    }

    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

},{}],123:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = Function.prototype.bind || implementation;

},{"./implementation":122}],124:[function(require,module,exports){
'use strict';

var undefined;

var $Object = require('es-object-atoms');

var $Error = require('es-errors');
var $EvalError = require('es-errors/eval');
var $RangeError = require('es-errors/range');
var $ReferenceError = require('es-errors/ref');
var $SyntaxError = require('es-errors/syntax');
var $TypeError = require('es-errors/type');
var $URIError = require('es-errors/uri');

var abs = require('math-intrinsics/abs');
var floor = require('math-intrinsics/floor');
var max = require('math-intrinsics/max');
var min = require('math-intrinsics/min');
var pow = require('math-intrinsics/pow');
var round = require('math-intrinsics/round');
var sign = require('math-intrinsics/sign');

var $Function = Function;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = require('gopd');
var $defineProperty = require('es-define-property');

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = require('has-symbols')();

var getProto = require('get-proto');
var $ObjectGPO = require('get-proto/Object.getPrototypeOf');
var $ReflectGPO = require('get-proto/Reflect.getPrototypeOf');

var $apply = require('call-bind-apply-helpers/functionApply');
var $call = require('call-bind-apply-helpers/functionCall');

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	__proto__: null,
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
	'%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': $Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': $EvalError,
	'%Float16Array%': typeof Float16Array === 'undefined' ? undefined : Float16Array,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': $Object,
	'%Object.getOwnPropertyDescriptor%': $gOPD,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': $RangeError,
	'%ReferenceError%': $ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': $URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,

	'%Function.prototype.call%': $call,
	'%Function.prototype.apply%': $apply,
	'%Object.defineProperty%': $defineProperty,
	'%Object.getPrototypeOf%': $ObjectGPO,
	'%Math.abs%': abs,
	'%Math.floor%': floor,
	'%Math.max%': max,
	'%Math.min%': min,
	'%Math.pow%': pow,
	'%Math.round%': round,
	'%Math.sign%': sign,
	'%Reflect.getPrototypeOf%': $ReflectGPO
};

if (getProto) {
	try {
		null.error; // eslint-disable-line no-unused-expressions
	} catch (e) {
		// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
		var errorProto = getProto(getProto(e));
		INTRINSICS['%Error.prototype%'] = errorProto;
	}
}

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen && getProto) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	__proto__: null,
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = require('function-bind');
var hasOwn = require('hasown');
var $concat = bind.call($call, Array.prototype.concat);
var $spliceApply = bind.call($apply, Array.prototype.splice);
var $replace = bind.call($call, String.prototype.replace);
var $strSlice = bind.call($call, String.prototype.slice);
var $exec = bind.call($call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	if ($exec(/^%?[^%]*%?$/, name) === null) {
		throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
	}
	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};

},{"call-bind-apply-helpers/functionApply":16,"call-bind-apply-helpers/functionCall":17,"es-define-property":107,"es-errors":109,"es-errors/eval":108,"es-errors/range":110,"es-errors/ref":111,"es-errors/syntax":112,"es-errors/type":113,"es-errors/uri":114,"es-object-atoms":117,"function-bind":123,"get-proto":127,"get-proto/Object.getPrototypeOf":125,"get-proto/Reflect.getPrototypeOf":126,"gopd":131,"has-symbols":134,"hasown":137,"math-intrinsics/abs":145,"math-intrinsics/floor":148,"math-intrinsics/max":152,"math-intrinsics/min":153,"math-intrinsics/pow":154,"math-intrinsics/round":155,"math-intrinsics/sign":156}],125:[function(require,module,exports){
'use strict';

var $Object = require('es-object-atoms');

/** @type {import('./Object.getPrototypeOf')} */
module.exports = $Object.getPrototypeOf || null;

},{"es-object-atoms":117}],126:[function(require,module,exports){
'use strict';

/** @type {import('./Reflect.getPrototypeOf')} */
module.exports = (typeof Reflect !== 'undefined' && Reflect.getPrototypeOf) || null;

},{}],127:[function(require,module,exports){
'use strict';

var reflectGetProto = require('./Reflect.getPrototypeOf');
var originalGetProto = require('./Object.getPrototypeOf');

var getDunderProto = require('dunder-proto/get');

/** @type {import('.')} */
module.exports = reflectGetProto
	? function getProto(O) {
		// @ts-expect-error TS can't narrow inside a closure, for some reason
		return reflectGetProto(O);
	}
	: originalGetProto
		? function getProto(O) {
			if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
				throw new TypeError('getProto: not an object');
			}
			// @ts-expect-error TS can't narrow inside a closure, for some reason
			return originalGetProto(O);
		}
		: getDunderProto
			? function getProto(O) {
				// @ts-expect-error TS can't narrow inside a closure, for some reason
				return getDunderProto(O);
			}
			: null;

},{"./Object.getPrototypeOf":125,"./Reflect.getPrototypeOf":126,"dunder-proto/get":25}],128:[function(require,module,exports){
'use strict';

/** @type {NonNullable<import('./getInferredName')> | undefined} */
var getInferredName;
try {
	// eslint-disable-next-line no-new-func, no-extra-parens
	getInferredName = /** @type {NonNullable<import('./getInferredName')>} */ (Function('s', 'return { [s]() {} }[s].name;'));
} catch (e) {}

var inferred = function () {};

/** @type {import('./getInferredName')} */
module.exports = getInferredName && inferred.name === 'inferred' ? getInferredName : null;

},{}],129:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');

var callBound = require('call-bound');

var $SyntaxError = require('es-errors/syntax');
var getGlobalSymbolDescription = GetIntrinsic('%Symbol.keyFor%', true);
/** @type {undefined | ((thisArg: symbol | Symbol) => symbol)} */
var thisSymbolValue = callBound('%Symbol.prototype.valueOf%', true);
/** @type {undefined | ((thisArg: symbol | Symbol) => string)} */
var symToStr = callBound('Symbol.prototype.toString', true);
/** @type {(thisArg: string, start?: number, end?: number) => string} */
var $strSlice = callBound('String.prototype.slice');

var getInferredName = require('./getInferredName');

/** @type {import('.')} */
/* eslint-disable consistent-return */
module.exports = callBound('%Symbol.prototype.description%', true) || function getSymbolDescription(symbol) {
	if (!thisSymbolValue) {
		throw new $SyntaxError('Symbols are not supported in this environment');
	}

	// will throw if not a symbol primitive or wrapper object
	var sym = thisSymbolValue(symbol);

	if (getInferredName) {
		var name = getInferredName(sym);
		if (name === '') {
			return;
		}
		return name.slice(1, -1); // name.slice('['.length, -']'.length);
	}

	var desc;
	if (getGlobalSymbolDescription) {
		desc = getGlobalSymbolDescription(sym);
		if (typeof desc === 'string') {
			return desc;
		}
	}

	// eslint-disable-next-line no-extra-parens
	desc = $strSlice(/** @type {NonNullable<typeof symToStr>} */ (symToStr)(sym), 7, -1); // str.slice('Symbol('.length, -')'.length);
	if (desc) {
		return desc;
	}
};

},{"./getInferredName":128,"call-bound":22,"es-errors/syntax":112,"get-intrinsic":124}],130:[function(require,module,exports){
'use strict';

/** @type {import('./gOPD')} */
module.exports = Object.getOwnPropertyDescriptor;

},{}],131:[function(require,module,exports){
'use strict';

/** @type {import('.')} */
var $gOPD = require('./gOPD');

if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

module.exports = $gOPD;

},{"./gOPD":130}],132:[function(require,module,exports){
'use strict';

var $defineProperty = require('es-define-property');

var hasPropertyDescriptors = function hasPropertyDescriptors() {
	return !!$defineProperty;
};

hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
	// node v0.6 has a bug where array lengths can be Set but not Defined
	if (!$defineProperty) {
		return null;
	}
	try {
		return $defineProperty([], 'length', { value: 1 }).length !== 1;
	} catch (e) {
		// In Firefox 4-22, defining length on an array throws an exception.
		return true;
	}
};

module.exports = hasPropertyDescriptors;

},{"es-define-property":107}],133:[function(require,module,exports){
'use strict';

var test = {
	__proto__: null,
	foo: {}
};

// @ts-expect-error: TS errors on an inherited property for some reason
var result = { __proto__: test }.foo === test.foo
	&& !(test instanceof Object);

/** @type {import('.')} */
module.exports = function hasProto() {
	return result;
};

},{}],134:[function(require,module,exports){
'use strict';

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = require('./shams');

/** @type {import('.')} */
module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

},{"./shams":135}],135:[function(require,module,exports){
'use strict';

/** @type {import('./shams')} */
/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	/** @type {{ [k in symbol]?: unknown }} */
	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (var _ in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		// eslint-disable-next-line no-extra-parens
		var descriptor = /** @type {PropertyDescriptor} */ (Object.getOwnPropertyDescriptor(obj, sym));
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};

},{}],136:[function(require,module,exports){
'use strict';

var hasSymbols = require('has-symbols/shams');

/** @type {import('.')} */
module.exports = function hasToStringTagShams() {
	return hasSymbols() && !!Symbol.toStringTag;
};

},{"has-symbols/shams":135}],137:[function(require,module,exports){
'use strict';

var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = require('function-bind');

/** @type {import('.')} */
module.exports = bind.call(call, $hasOwn);

},{"function-bind":123}],138:[function(require,module,exports){
'use strict';

/** @typedef {`$${import('.').InternalSlot}`} SaltedInternalSlot */
/** @typedef {{ [k in SaltedInternalSlot]?: unknown }} SlotsObject */

var hasOwn = require('hasown');
/** @type {import('side-channel').Channel<object, SlotsObject>} */
var channel = require('side-channel')();

var $TypeError = require('es-errors/type');

/** @type {import('.')} */
var SLOT = {
	assert: function (O, slot) {
		if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
			throw new $TypeError('`O` is not an object');
		}
		if (typeof slot !== 'string') {
			throw new $TypeError('`slot` must be a string');
		}
		channel.assert(O);
		if (!SLOT.has(O, slot)) {
			throw new $TypeError('`' + slot + '` is not present on `O`');
		}
	},
	get: function (O, slot) {
		if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
			throw new $TypeError('`O` is not an object');
		}
		if (typeof slot !== 'string') {
			throw new $TypeError('`slot` must be a string');
		}
		var slots = channel.get(O);
		// eslint-disable-next-line no-extra-parens
		return slots && slots[/** @type {SaltedInternalSlot} */ ('$' + slot)];
	},
	has: function (O, slot) {
		if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
			throw new $TypeError('`O` is not an object');
		}
		if (typeof slot !== 'string') {
			throw new $TypeError('`slot` must be a string');
		}
		var slots = channel.get(O);
		// eslint-disable-next-line no-extra-parens
		return !!slots && hasOwn(slots, /** @type {SaltedInternalSlot} */ ('$' + slot));
	},
	set: function (O, slot, V) {
		if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
			throw new $TypeError('`O` is not an object');
		}
		if (typeof slot !== 'string') {
			throw new $TypeError('`slot` must be a string');
		}
		var slots = channel.get(O);
		if (!slots) {
			slots = {};
			channel.set(O, slots);
		}
		// eslint-disable-next-line no-extra-parens
		slots[/** @type {SaltedInternalSlot} */ ('$' + slot)] = V;
	}
};

if (Object.freeze) {
	Object.freeze(SLOT);
}

module.exports = SLOT;

},{"es-errors/type":113,"hasown":137,"side-channel":176}],139:[function(require,module,exports){
'use strict';

var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {
	try {
		badArrayLike = Object.defineProperty({}, 'length', {
			get: function () {
				throw isCallableMarker;
			}
		});
		isCallableMarker = {};
		// eslint-disable-next-line no-throw-literal
		reflectApply(function () { throw 42; }, null, badArrayLike);
	} catch (_) {
		if (_ !== isCallableMarker) {
			reflectApply = null;
		}
	}
} else {
	reflectApply = null;
}

var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
	try {
		var fnStr = fnToStr.call(value);
		return constructorRegex.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionToStr(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var objectClass = '[object Object]';
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var ddaClass = '[object HTMLAllCollection]'; // IE 11
var ddaClass2 = '[object HTML document.all class]';
var ddaClass3 = '[object HTMLCollection]'; // IE 9-10
var hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`

var isIE68 = !(0 in [,]); // eslint-disable-line no-sparse-arrays, comma-spacing

var isDDA = function isDocumentDotAll() { return false; };
if (typeof document === 'object') {
	// Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
	var all = document.all;
	if (toStr.call(all) === toStr.call(document.all)) {
		isDDA = function isDocumentDotAll(value) {
			/* globals document: false */
			// in IE 6-8, typeof document.all is "object" and it's truthy
			if ((isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) {
				try {
					var str = toStr.call(value);
					return (
						str === ddaClass
						|| str === ddaClass2
						|| str === ddaClass3 // opera 12.16
						|| str === objectClass // IE 6-8
					) && value('') == null; // eslint-disable-line eqeqeq
				} catch (e) { /**/ }
			}
			return false;
		};
	}
}

module.exports = reflectApply
	? function isCallable(value) {
		if (isDDA(value)) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		try {
			reflectApply(value, null, badArrayLike);
		} catch (e) {
			if (e !== isCallableMarker) { return false; }
		}
		return !isES6ClassFn(value) && tryFunctionObject(value);
	}
	: function isCallable(value) {
		if (isDDA(value)) { return true; }
		if (!value) { return false; }
		if (typeof value !== 'function' && typeof value !== 'object') { return false; }
		if (hasToStringTag) { return tryFunctionObject(value); }
		if (isES6ClassFn(value)) { return false; }
		var strClass = toStr.call(value);
		if (strClass !== fnClass && strClass !== genClass && !(/^\[object HTML/).test(strClass)) { return false; }
		return tryFunctionObject(value);
	};

},{}],140:[function(require,module,exports){
'use strict';

var callBound = require('call-bound');

var getDay = callBound('Date.prototype.getDay');
/** @type {import('.')} */
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay(value);
		return true;
	} catch (e) {
		return false;
	}
};

/** @type {(value: unknown) => string} */
var toStr = callBound('Object.prototype.toString');
var dateClass = '[object Date]';
var hasToStringTag = require('has-tostringtag/shams')();

/** @type {import('.')} */
module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr(value) === dateClass;
};

},{"call-bound":22,"has-tostringtag/shams":136}],141:[function(require,module,exports){
'use strict';

var callBound = require('call-bound');
var hasToStringTag = require('has-tostringtag/shams')();
var hasOwn = require('hasown');
var gOPD = require('gopd');

/** @type {import('.')} */
var fn;

if (hasToStringTag) {
	/** @type {(receiver: ThisParameterType<typeof RegExp.prototype.exec>, ...args: Parameters<typeof RegExp.prototype.exec>) => ReturnType<typeof RegExp.prototype.exec>} */
	var $exec = callBound('RegExp.prototype.exec');
	/** @type {object} */
	var isRegexMarker = {};

	var throwRegexMarker = function () {
		throw isRegexMarker;
	};
	/** @type {{ toString(): never, valueOf(): never, [Symbol.toPrimitive]?(): never }} */
	var badStringifier = {
		toString: throwRegexMarker,
		valueOf: throwRegexMarker
	};

	if (typeof Symbol.toPrimitive === 'symbol') {
		badStringifier[Symbol.toPrimitive] = throwRegexMarker;
	}

	/** @type {import('.')} */
	// @ts-expect-error TS can't figure out that the $exec call always throws
	// eslint-disable-next-line consistent-return
	fn = function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}

		// eslint-disable-next-line no-extra-parens
		var descriptor = /** @type {NonNullable<typeof gOPD>} */ (gOPD)(/** @type {{ lastIndex?: unknown }} */ (value), 'lastIndex');
		var hasLastIndexDataProperty = descriptor && hasOwn(descriptor, 'value');
		if (!hasLastIndexDataProperty) {
			return false;
		}

		try {
			// eslint-disable-next-line no-extra-parens
			$exec(value, /** @type {string} */ (/** @type {unknown} */ (badStringifier)));
		} catch (e) {
			return e === isRegexMarker;
		}
	};
} else {
	/** @type {(receiver: ThisParameterType<typeof Object.prototype.toString>, ...args: Parameters<typeof Object.prototype.toString>) => ReturnType<typeof Object.prototype.toString>} */
	var $toString = callBound('Object.prototype.toString');
	/** @const @type {'[object RegExp]'} */
	var regexClass = '[object RegExp]';

	/** @type {import('.')} */
	fn = function isRegex(value) {
		// In older browsers, typeof regex incorrectly returns 'function'
		if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
			return false;
		}

		return $toString(value) === regexClass;
	};
}

module.exports = fn;

},{"call-bound":22,"gopd":131,"has-tostringtag/shams":136,"hasown":137}],142:[function(require,module,exports){
'use strict';

var callBound = require('call-bound');

/** @type {(receiver: ThisParameterType<typeof String.prototype.valueOf>, ...args: Parameters<typeof String.prototype.valueOf>) => ReturnType<typeof String.prototype.valueOf>} */
var $strValueOf = callBound('String.prototype.valueOf');

/** @type {import('.')} */
var tryStringObject = function tryStringObject(value) {
	try {
		$strValueOf(value);
		return true;
	} catch (e) {
		return false;
	}
};
/** @type {(receiver: ThisParameterType<typeof Object.prototype.toString>, ...args: Parameters<typeof Object.prototype.toString>) => ReturnType<typeof Object.prototype.toString>} */
var $toString = callBound('Object.prototype.toString');
var strClass = '[object String]';
var hasToStringTag = require('has-tostringtag/shams')();

/** @type {import('.')} */
module.exports = function isString(value) {
	if (typeof value === 'string') {
		return true;
	}
	if (!value || typeof value !== 'object') {
		return false;
	}
	return hasToStringTag ? tryStringObject(value) : $toString(value) === strClass;
};

},{"call-bound":22,"has-tostringtag/shams":136}],143:[function(require,module,exports){
'use strict';

var callBound = require('call-bound');
var $toString = callBound('Object.prototype.toString');
var hasSymbols = require('has-symbols')();
var safeRegexTest = require('safe-regex-test');

if (hasSymbols) {
	var $symToStr = callBound('Symbol.prototype.toString');
	var isSymString = safeRegexTest(/^Symbol\(.*\)$/);

	/** @type {(value: object) => value is Symbol} */
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return isSymString($symToStr(value));
	};

	/** @type {import('.')} */
	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (!value || typeof value !== 'object' || $toString(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {
	/** @type {import('.')} */
	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return false && value;
	};
}

},{"call-bound":22,"has-symbols":134,"safe-regex-test":168}],144:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],145:[function(require,module,exports){
'use strict';

/** @type {import('./abs')} */
module.exports = Math.abs;

},{}],146:[function(require,module,exports){
'use strict';

/** @type {import('./maxArrayLength')} */
module.exports = 4294967295; // Math.pow(2, 32) - 1;

},{}],147:[function(require,module,exports){
'use strict';

/** @type {import('./maxSafeInteger')} */
// eslint-disable-next-line no-extra-parens
module.exports = /** @type {import('./maxSafeInteger')} */ (Number.MAX_SAFE_INTEGER) || 9007199254740991; // Math.pow(2, 53) - 1;

},{}],148:[function(require,module,exports){
'use strict';

/** @type {import('./floor')} */
module.exports = Math.floor;

},{}],149:[function(require,module,exports){
'use strict';

var $isNaN = require('./isNaN');

/** @type {import('./isFinite')} */
module.exports = function isFinite(x) {
	return (typeof x === 'number' || typeof x === 'bigint')
        && !$isNaN(x)
        && x !== Infinity
        && x !== -Infinity;
};


},{"./isNaN":151}],150:[function(require,module,exports){
'use strict';

var $abs = require('./abs');
var $floor = require('./floor');

var $isNaN = require('./isNaN');
var $isFinite = require('./isFinite');

/** @type {import('./isInteger')} */
module.exports = function isInteger(argument) {
	if (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {
		return false;
	}
	var absValue = $abs(argument);
	return $floor(absValue) === absValue;
};

},{"./abs":145,"./floor":148,"./isFinite":149,"./isNaN":151}],151:[function(require,module,exports){
'use strict';

/** @type {import('./isNaN')} */
module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};

},{}],152:[function(require,module,exports){
'use strict';

/** @type {import('./max')} */
module.exports = Math.max;

},{}],153:[function(require,module,exports){
'use strict';

/** @type {import('./min')} */
module.exports = Math.min;

},{}],154:[function(require,module,exports){
'use strict';

/** @type {import('./pow')} */
module.exports = Math.pow;

},{}],155:[function(require,module,exports){
'use strict';

/** @type {import('./round')} */
module.exports = Math.round;

},{}],156:[function(require,module,exports){
'use strict';

var $isNaN = require('./isNaN');

/** @type {import('./sign')} */
module.exports = function sign(number) {
	if ($isNaN(number) || number === 0) {
		return number;
	}
	return number < 0 ? -1 : +1;
};

},{"./isNaN":151}],157:[function(require,module,exports){
(function (global){(function (){
var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
    ? Symbol.toStringTag
    : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

function addNumericSeparator(num, str) {
    if (
        num === Infinity
        || num === -Infinity
        || num !== num
        || (num && num > -1000 && num < 1000)
        || $test.call(/e/, str)
    ) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === 'number') {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return $replace.call(str, sepRegex, '$&_');
}

var utilInspect = require('./util.inspect');
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;

var quotes = {
    __proto__: null,
    'double': '"',
    single: "'"
};
var quoteREs = {
    __proto__: null,
    'double': /(["\\])/g,
    single: /(['\\])/g
};

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && !has(quotes, opts.quoteStyle)) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {
        throw new TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === 'bigint') {
        var bigIntStr = String(obj) + 'n';
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function' && !isRegExp(obj)) { // in older engines, regexes are callable
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, '$1') : symToString.call(obj);
        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + $join.call(xs, ', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {
            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';
        }
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {
            return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
            mapForEach.call(obj, function (value, key) {
                mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
            });
        }
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
            setForEach.call(obj, function (value) {
                setParts.push(inspect(value, obj));
            });
        }
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    // note: in IE 8, sometimes `global !== window` but both are the prototypes of each other
    /* eslint-env browser */
    if (typeof window !== 'undefined' && obj === window) {
        return '{ [object Window] }';
    }
    if (
        (typeof globalThis !== 'undefined' && obj === globalThis)
        || (typeof global !== 'undefined' && obj === global)
    ) {
        return '{ [object globalThis] }';
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + $join.call(ys, ', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var style = opts.quoteStyle || defaultStyle;
    var quoteChar = quotes[style];
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return $replace.call(String(s), /"/g, '&quot;');
}

function canTrustToString(obj) {
    return !toStringTag || !(typeof obj === 'object' && (toStringTag in obj || typeof obj[toStringTag] !== 'undefined'));
}
function isArray(obj) { return toStr(obj) === '[object Array]' && canTrustToString(obj); }
function isDate(obj) { return toStr(obj) === '[object Date]' && canTrustToString(obj); }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && canTrustToString(obj); }
function isError(obj) { return toStr(obj) === '[object Error]' && canTrustToString(obj); }
function isString(obj) { return toStr(obj) === '[object String]' && canTrustToString(obj); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && canTrustToString(obj); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && canTrustToString(obj); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === 'object' && obj instanceof Symbol;
    }
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    var quoteRE = quoteREs[opts.quoteStyle || 'single'];
    quoteRE.lastIndex = 0;
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, quoteRE, '\\$1'), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), ' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
            symMap['$' + syms[k]] = syms[k];
        }
    }

    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {
            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./util.inspect":1}],158:[function(require,module,exports){
'use strict';

var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = require('./isArguments'); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;

},{"./isArguments":160}],159:[function(require,module,exports){
'use strict';

var slice = Array.prototype.slice;
var isArgs = require('./isArguments');

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : require('./implementation');

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;

},{"./implementation":158,"./isArguments":160}],160:[function(require,module,exports){
'use strict';

var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};

},{}],161:[function(require,module,exports){
'use strict';

var AddEntriesFromIterable = require('es-abstract/2024/AddEntriesFromIterable');
var CreateDataPropertyOrThrow = require('es-abstract/2024/CreateDataPropertyOrThrow');
var RequireObjectCoercible = require('es-object-atoms/RequireObjectCoercible');
var ToPropertyKey = require('es-abstract/2024/ToPropertyKey');

var adder = function addDataProperty(key, value) {
	var O = this; // eslint-disable-line no-invalid-this
	var propertyKey = ToPropertyKey(key);
	CreateDataPropertyOrThrow(O, propertyKey, value);
};

module.exports = function fromEntries(iterable) {
	RequireObjectCoercible(iterable);

	return AddEntriesFromIterable({}, iterable, adder);
};

},{"es-abstract/2024/AddEntriesFromIterable":27,"es-abstract/2024/CreateDataPropertyOrThrow":37,"es-abstract/2024/ToPropertyKey":75,"es-object-atoms/RequireObjectCoercible":115}],162:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var callBind = require('call-bind');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var polyfill = callBind(getPolyfill(), Object);

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;

},{"./implementation":161,"./polyfill":163,"./shim":164,"call-bind":21,"define-properties":24}],163:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return typeof Object.fromEntries === 'function' ? Object.fromEntries : implementation;
};

},{"./implementation":161}],164:[function(require,module,exports){
'use strict';

var getPolyfill = require('./polyfill');
var define = require('define-properties');

module.exports = function shimEntries() {
	var polyfill = getPolyfill();
	define(Object, { fromEntries: polyfill }, {
		fromEntries: function testEntries() {
			return Object.fromEntries !== polyfill;
		}
	});
	return polyfill;
};

},{"./polyfill":163,"define-properties":24}],165:[function(require,module,exports){
'use strict';

var CreateDataProperty = require('es-abstract/2025/CreateDataProperty');
var RequireObjectCoercible = require('es-object-atoms/RequireObjectCoercible');
var ToObject = require('es-object-atoms/ToObject');
var safeConcat = require('safe-array-concat');
var reduce = require('array.prototype.reduce');
var gOPD = require('gopd');
var $Object = require('es-object-atoms');

var $getOwnNames = $Object.getOwnPropertyNames;
var $getSymbols = $Object.getOwnPropertySymbols;

var getAll = $getSymbols ? function (obj) {
	return safeConcat($getOwnNames(obj), $getSymbols(obj));
} : $getOwnNames;

var isES5 = gOPD && typeof $getOwnNames === 'function';

module.exports = function getOwnPropertyDescriptors(value) {
	RequireObjectCoercible(value);
	if (!isES5) {
		throw new TypeError('getOwnPropertyDescriptors requires Object.getOwnPropertyDescriptor');
	}

	var O = ToObject(value);
	return reduce(
		getAll(O),
		function (acc, key) {
			var descriptor = gOPD(O, key);
			if (typeof descriptor !== 'undefined') {
				CreateDataProperty(acc, key, descriptor);
			}
			return acc;
		},
		{}
	);
};

},{"array.prototype.reduce":11,"es-abstract/2025/CreateDataProperty":81,"es-object-atoms":117,"es-object-atoms/RequireObjectCoercible":115,"es-object-atoms/ToObject":116,"gopd":131,"safe-array-concat":167}],166:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return typeof Object.getOwnPropertyDescriptors === 'function' ? Object.getOwnPropertyDescriptors : implementation;
};

},{"./implementation":165}],167:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');
var $concat = GetIntrinsic('%Array.prototype.concat%');

var callBind = require('call-bind');

var callBound = require('call-bound');
var $slice = callBound('Array.prototype.slice');

var hasSymbols = require('has-symbols/shams')();
var isConcatSpreadable = hasSymbols && Symbol.isConcatSpreadable;

/** @type {never[]} */ var empty = [];
var $concatApply = isConcatSpreadable ? callBind.apply($concat, empty) : null;

// eslint-disable-next-line no-extra-parens
var isArray = isConcatSpreadable ? /** @type {(value: unknown) => value is unknown[]} */ (require('isarray')) : null;

/** @type {import('.')} */
module.exports = isConcatSpreadable
	// eslint-disable-next-line no-unused-vars
	? function safeArrayConcat(item) {
		for (var i = 0; i < arguments.length; i += 1) {
			/** @type {typeof item} */ var arg = arguments[i];
			// @ts-expect-error ts(2538) see https://github.com/microsoft/TypeScript/issues/9998#issuecomment-1890787975; works if `const`
			if (arg && typeof arg === 'object' && typeof arg[isConcatSpreadable] === 'boolean') {
				// @ts-expect-error ts(7015) TS doesn't yet support Symbol indexing
				if (!empty[isConcatSpreadable]) {
					// @ts-expect-error ts(7015) TS doesn't yet support Symbol indexing
					empty[isConcatSpreadable] = true;
				}
				// @ts-expect-error ts(2721) ts(18047) not sure why TS can't figure out this can't be null
				var arr = isArray(arg) ? $slice(arg) : [arg];
				// @ts-expect-error ts(7015) TS can't handle expandos on an array
				arr[isConcatSpreadable] = true; // shadow the property. TODO: use [[Define]]
				arguments[i] = arr;
			}
		}
		// @ts-expect-error ts(2345) https://github.com/microsoft/TypeScript/issues/57164 TS doesn't understand that apply can take an arguments object
		return $concatApply(arguments);
	}
	: callBind($concat, empty);

},{"call-bind":21,"call-bound":22,"get-intrinsic":124,"has-symbols/shams":135,"isarray":144}],168:[function(require,module,exports){
'use strict';

var callBound = require('call-bound');
var isRegex = require('is-regex');

var $exec = callBound('RegExp.prototype.exec');
var $TypeError = require('es-errors/type');

/** @type {import('.')} */
module.exports = function regexTester(regex) {
	if (!isRegex(regex)) {
		throw new $TypeError('`regex` must be a RegExp');
	}
	return function test(s) {
		return $exec(regex, s) !== null;
	};
};

},{"call-bound":22,"es-errors/type":113,"is-regex":141}],169:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');
var define = require('define-data-property');
var hasDescriptors = require('has-property-descriptors')();
var gOPD = require('gopd');

var $TypeError = require('es-errors/type');
var $floor = GetIntrinsic('%Math.floor%');

/** @type {import('.')} */
module.exports = function setFunctionLength(fn, length) {
	if (typeof fn !== 'function') {
		throw new $TypeError('`fn` is not a function');
	}
	if (typeof length !== 'number' || length < 0 || length > 0xFFFFFFFF || $floor(length) !== length) {
		throw new $TypeError('`length` must be a positive 32-bit integer');
	}

	var loose = arguments.length > 2 && !!arguments[2];

	var functionLengthIsConfigurable = true;
	var functionLengthIsWritable = true;
	if ('length' in fn && gOPD) {
		var desc = gOPD(fn, 'length');
		if (desc && !desc.configurable) {
			functionLengthIsConfigurable = false;
		}
		if (desc && !desc.writable) {
			functionLengthIsWritable = false;
		}
	}

	if (functionLengthIsConfigurable || functionLengthIsWritable || !loose) {
		if (hasDescriptors) {
			define(/** @type {Parameters<define>[0]} */ (fn), 'length', length, true, true);
		} else {
			define(/** @type {Parameters<define>[0]} */ (fn), 'length', length);
		}
	}
	return fn;
};

},{"define-data-property":23,"es-errors/type":113,"get-intrinsic":124,"gopd":131,"has-property-descriptors":132}],170:[function(require,module,exports){
'use strict';

var $Object = require('es-object-atoms');

/** @type {import('./Object.setPrototypeOf')} */
module.exports = $Object.setPrototypeOf || null;

},{"es-object-atoms":117}],171:[function(require,module,exports){
'use strict';

/** @type {import('./Reflect.setPrototypeOf')} */
module.exports = (typeof Reflect !== 'undefined' && Reflect.setPrototypeOf) || null;

},{}],172:[function(require,module,exports){
'use strict';

var reflectSetProto = require('./Reflect.setPrototypeOf');
var originalSetProto = require('./Object.setPrototypeOf');

var setDunderProto = require('dunder-proto/set');

var $TypeError = require('es-errors/type');

/** @type {import('.')} */
module.exports = reflectSetProto
	? function setProto(O, proto) {
		// @ts-expect-error TS can't narrow inside a closure, for some reason
		if (reflectSetProto(O, proto)) {
			return O;
		}
		throw new $TypeError('Reflect.setPrototypeOf: failed to set [[Prototype]]');
	}
	: originalSetProto || (
		setDunderProto ? function setProto(O, proto) {
			// @ts-expect-error TS can't narrow inside a closure, for some reason
			setDunderProto(O, proto);
			return O;
		} : null
	);

},{"./Object.setPrototypeOf":170,"./Reflect.setPrototypeOf":171,"dunder-proto/set":26,"es-errors/type":113}],173:[function(require,module,exports){
'use strict';

var inspect = require('object-inspect');

var $TypeError = require('es-errors/type');

/*
* This function traverses the list returning the node corresponding to the given key.
*
* That node is also moved to the head of the list, so that if it's accessed again we don't need to traverse the whole list.
* By doing so, all the recently used nodes can be accessed relatively quickly.
*/
/** @type {import('./list.d.ts').listGetNode} */
// eslint-disable-next-line consistent-return
var listGetNode = function (list, key, isDelete) {
	/** @type {typeof list | NonNullable<(typeof list)['next']>} */
	var prev = list;
	/** @type {(typeof list)['next']} */
	var curr;
	// eslint-disable-next-line eqeqeq
	for (; (curr = prev.next) != null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			if (!isDelete) {
				// eslint-disable-next-line no-extra-parens
				curr.next = /** @type {NonNullable<typeof list.next>} */ (list.next);
				list.next = curr; // eslint-disable-line no-param-reassign
			}
			return curr;
		}
	}
};

/** @type {import('./list.d.ts').listGet} */
var listGet = function (objects, key) {
	if (!objects) {
		return void undefined;
	}
	var node = listGetNode(objects, key);
	return node && node.value;
};
/** @type {import('./list.d.ts').listSet} */
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */ ({ // eslint-disable-line no-param-reassign, no-extra-parens
			key: key,
			next: objects.next,
			value: value
		});
	}
};
/** @type {import('./list.d.ts').listHas} */
var listHas = function (objects, key) {
	if (!objects) {
		return false;
	}
	return !!listGetNode(objects, key);
};
/** @type {import('./list.d.ts').listDelete} */
// eslint-disable-next-line consistent-return
var listDelete = function (objects, key) {
	if (objects) {
		return listGetNode(objects, key, true);
	}
};

/** @type {import('.')} */
module.exports = function getSideChannelList() {
	/** @typedef {ReturnType<typeof getSideChannelList>} Channel */
	/** @typedef {Parameters<Channel['get']>[0]} K */
	/** @typedef {Parameters<Channel['set']>[1]} V */

	/** @type {import('./list.d.ts').RootNode<V, K> | undefined} */ var $o;

	/** @type {Channel} */
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		'delete': function (key) {
			var root = $o && $o.next;
			var deletedNode = listDelete($o, key);
			if (deletedNode && root && root === deletedNode) {
				$o = void undefined;
			}
			return !!deletedNode;
		},
		get: function (key) {
			return listGet($o, key);
		},
		has: function (key) {
			return listHas($o, key);
		},
		set: function (key, value) {
			if (!$o) {
				// Initialize the linked list as an empty node, so that we don't have to special-case handling of the first node: we can always refer to it as (previous node).next, instead of something like (list).head
				$o = {
					next: void undefined
				};
			}
			// eslint-disable-next-line no-extra-parens
			listSet(/** @type {NonNullable<typeof $o>} */ ($o), key, value);
		}
	};
	// @ts-expect-error TODO: figure out why this is erroring
	return channel;
};

},{"es-errors/type":113,"object-inspect":157}],174:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');
var callBound = require('call-bound');
var inspect = require('object-inspect');

var $TypeError = require('es-errors/type');
var $Map = GetIntrinsic('%Map%', true);

/** @type {<K, V>(thisArg: Map<K, V>, key: K) => V} */
var $mapGet = callBound('Map.prototype.get', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K, value: V) => void} */
var $mapSet = callBound('Map.prototype.set', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */
var $mapHas = callBound('Map.prototype.has', true);
/** @type {<K, V>(thisArg: Map<K, V>, key: K) => boolean} */
var $mapDelete = callBound('Map.prototype.delete', true);
/** @type {<K, V>(thisArg: Map<K, V>) => number} */
var $mapSize = callBound('Map.prototype.size', true);

/** @type {import('.')} */
module.exports = !!$Map && /** @type {Exclude<import('.'), false>} */ function getSideChannelMap() {
	/** @typedef {ReturnType<typeof getSideChannelMap>} Channel */
	/** @typedef {Parameters<Channel['get']>[0]} K */
	/** @typedef {Parameters<Channel['set']>[1]} V */

	/** @type {Map<K, V> | undefined} */ var $m;

	/** @type {Channel} */
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		'delete': function (key) {
			if ($m) {
				var result = $mapDelete($m, key);
				if ($mapSize($m) === 0) {
					$m = void undefined;
				}
				return result;
			}
			return false;
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($m) {
				return $mapGet($m, key);
			}
		},
		has: function (key) {
			if ($m) {
				return $mapHas($m, key);
			}
			return false;
		},
		set: function (key, value) {
			if (!$m) {
				// @ts-expect-error TS can't handle narrowing a variable inside a closure
				$m = new $Map();
			}
			$mapSet($m, key, value);
		}
	};

	// @ts-expect-error TODO: figure out why TS is erroring here
	return channel;
};

},{"call-bound":22,"es-errors/type":113,"get-intrinsic":124,"object-inspect":157}],175:[function(require,module,exports){
'use strict';

var GetIntrinsic = require('get-intrinsic');
var callBound = require('call-bound');
var inspect = require('object-inspect');
var getSideChannelMap = require('side-channel-map');

var $TypeError = require('es-errors/type');
var $WeakMap = GetIntrinsic('%WeakMap%', true);

/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => V} */
var $weakMapGet = callBound('WeakMap.prototype.get', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K, value: V) => void} */
var $weakMapSet = callBound('WeakMap.prototype.set', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */
var $weakMapHas = callBound('WeakMap.prototype.has', true);
/** @type {<K extends object, V>(thisArg: WeakMap<K, V>, key: K) => boolean} */
var $weakMapDelete = callBound('WeakMap.prototype.delete', true);

/** @type {import('.')} */
module.exports = $WeakMap
	? /** @type {Exclude<import('.'), false>} */ function getSideChannelWeakMap() {
		/** @typedef {ReturnType<typeof getSideChannelWeakMap>} Channel */
		/** @typedef {Parameters<Channel['get']>[0]} K */
		/** @typedef {Parameters<Channel['set']>[1]} V */

		/** @type {WeakMap<K & object, V> | undefined} */ var $wm;
		/** @type {Channel | undefined} */ var $m;

		/** @type {Channel} */
		var channel = {
			assert: function (key) {
				if (!channel.has(key)) {
					throw new $TypeError('Side channel does not contain ' + inspect(key));
				}
			},
			'delete': function (key) {
				if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
					if ($wm) {
						return $weakMapDelete($wm, key);
					}
				} else if (getSideChannelMap) {
					if ($m) {
						return $m['delete'](key);
					}
				}
				return false;
			},
			get: function (key) {
				if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
					if ($wm) {
						return $weakMapGet($wm, key);
					}
				}
				return $m && $m.get(key);
			},
			has: function (key) {
				if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
					if ($wm) {
						return $weakMapHas($wm, key);
					}
				}
				return !!$m && $m.has(key);
			},
			set: function (key, value) {
				if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
					if (!$wm) {
						$wm = new $WeakMap();
					}
					$weakMapSet($wm, key, value);
				} else if (getSideChannelMap) {
					if (!$m) {
						$m = getSideChannelMap();
					}
					// eslint-disable-next-line no-extra-parens
					/** @type {NonNullable<typeof $m>} */ ($m).set(key, value);
				}
			}
		};

		// @ts-expect-error TODO: figure out why this is erroring
		return channel;
	}
	: getSideChannelMap;

},{"call-bound":22,"es-errors/type":113,"get-intrinsic":124,"object-inspect":157,"side-channel-map":174}],176:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');
var inspect = require('object-inspect');
var getSideChannelList = require('side-channel-list');
var getSideChannelMap = require('side-channel-map');
var getSideChannelWeakMap = require('side-channel-weakmap');

var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;

/** @type {import('.')} */
module.exports = function getSideChannel() {
	/** @typedef {ReturnType<typeof getSideChannel>} Channel */

	/** @type {Channel | undefined} */ var $channelData;

	/** @type {Channel} */
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		'delete': function (key) {
			return !!$channelData && $channelData['delete'](key);
		},
		get: function (key) {
			return $channelData && $channelData.get(key);
		},
		has: function (key) {
			return !!$channelData && $channelData.has(key);
		},
		set: function (key, value) {
			if (!$channelData) {
				$channelData = makeChannel();
			}

			$channelData.set(key, value);
		}
	};
	// @ts-expect-error TODO: figure out why this is erroring
	return channel;
};

},{"es-errors/type":113,"object-inspect":157,"side-channel-list":173,"side-channel-map":174,"side-channel-weakmap":175}],177:[function(require,module,exports){
'use strict';

var RequireObjectCoercible = require('es-object-atoms/RequireObjectCoercible');
var ToString = require('es-abstract/2024/ToString');
var callBound = require('call-bound');
var $replace = callBound('String.prototype.replace');

var mvsIsWS = (/^\s$/).test('\u180E');
/* eslint-disable no-control-regex */
var leftWhitespace = mvsIsWS
	? /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/
	: /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/;
var rightWhitespace = mvsIsWS
	? /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/
	: /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
/* eslint-enable no-control-regex */

module.exports = function trim() {
	var S = ToString(RequireObjectCoercible(this));
	return $replace($replace(S, leftWhitespace, ''), rightWhitespace, '');
};

},{"call-bound":22,"es-abstract/2024/ToString":76,"es-object-atoms/RequireObjectCoercible":115}],178:[function(require,module,exports){
'use strict';

var callBind = require('call-bind');
var define = require('define-properties');
var RequireObjectCoercible = require('es-object-atoms/RequireObjectCoercible');

var implementation = require('./implementation');
var getPolyfill = require('./polyfill');
var shim = require('./shim');

var bound = callBind(getPolyfill());
var boundMethod = function trim(receiver) {
	RequireObjectCoercible(receiver);
	return bound(receiver);
};

define(boundMethod, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundMethod;

},{"./implementation":177,"./polyfill":179,"./shim":180,"call-bind":21,"define-properties":24,"es-object-atoms/RequireObjectCoercible":115}],179:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

var zeroWidthSpace = '\u200b';
var mongolianVowelSeparator = '\u180E';

module.exports = function getPolyfill() {
	if (
		String.prototype.trim
		&& zeroWidthSpace.trim() === zeroWidthSpace
		&& mongolianVowelSeparator.trim() === mongolianVowelSeparator
		&& ('_' + mongolianVowelSeparator).trim() === ('_' + mongolianVowelSeparator)
		&& (mongolianVowelSeparator + '_').trim() === (mongolianVowelSeparator + '_')
	) {
		return String.prototype.trim;
	}
	return implementation;
};

},{"./implementation":177}],180:[function(require,module,exports){
'use strict';

var supportsDescriptors = require('has-property-descriptors')();
var defineDataProperty = require('define-data-property');

var getPolyfill = require('./polyfill');

module.exports = function shimStringTrim() {
	var polyfill = getPolyfill();

	if (String.prototype.trim !== polyfill) {
		if (supportsDescriptors) {
			defineDataProperty(String.prototype, 'trim', polyfill, true);
		} else {
			defineDataProperty(String.prototype, 'trim', polyfill);
		}
	}

	return polyfill;
};

},{"./polyfill":179,"define-data-property":23,"has-property-descriptors":132}],181:[function(require,module,exports){
'use strict';

var callBound = require('call-bound');
var $replace = callBound('String.prototype.replace');

var mvsIsWS = (/^\s$/).test('\u180E');
/* eslint-disable no-control-regex */
var endWhitespace = mvsIsWS
	? /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/
	: /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
/* eslint-enable no-control-regex */

module.exports = function trimEnd() {
	return $replace(this, endWhitespace, '');
};

},{"call-bound":22}],182:[function(require,module,exports){
arguments[4][178][0].apply(exports,arguments)
},{"./implementation":181,"./polyfill":183,"./shim":184,"call-bind":21,"define-properties":24,"dup":178,"es-object-atoms/RequireObjectCoercible":115}],183:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (!String.prototype.trimEnd && !String.prototype.trimRight) {
		return implementation;
	}
	var zeroWidthSpace = '\u200b';
	var trimmed = zeroWidthSpace.trimEnd ? zeroWidthSpace.trimEnd() : zeroWidthSpace.trimRight();
	if (trimmed !== zeroWidthSpace) {
		return implementation;
	}
	return String.prototype.trimEnd || String.prototype.trimRight;
};

},{"./implementation":181}],184:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimTrimEnd() {
	var polyfill = getPolyfill();
	define(
		String.prototype,
		{ trimEnd: polyfill },
		{ trimEnd: function () { return String.prototype.trimEnd !== polyfill; } }
	);
	return polyfill;
};

},{"./polyfill":183,"define-properties":24}],185:[function(require,module,exports){
'use strict';

var callBound = require('call-bind/callBound');
var $replace = callBound('String.prototype.replace');

var mvsIsWS = (/^\s$/).test('\u180E');
/* eslint-disable no-control-regex */
var startWhitespace = mvsIsWS
	? /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/
	: /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/;
/* eslint-enable no-control-regex */

module.exports = function trimStart() {
	return $replace(this, startWhitespace, '');
};

},{"call-bind/callBound":20}],186:[function(require,module,exports){
arguments[4][178][0].apply(exports,arguments)
},{"./implementation":185,"./polyfill":187,"./shim":188,"call-bind":21,"define-properties":24,"dup":178,"es-object-atoms/RequireObjectCoercible":115}],187:[function(require,module,exports){
'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	if (!String.prototype.trimStart && !String.prototype.trimLeft) {
		return implementation;
	}
	var zeroWidthSpace = '\u200b';
	var trimmed = zeroWidthSpace.trimStart ? zeroWidthSpace.trimStart() : zeroWidthSpace.trimLeft();
	if (trimmed !== zeroWidthSpace) {
		return implementation;
	}
	return String.prototype.trimStart || String.prototype.trimLeft;
};

},{"./implementation":185}],188:[function(require,module,exports){
'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimTrimStart() {
	var polyfill = getPolyfill();
	define(
		String.prototype,
		{ trimStart: polyfill },
		{ trimStart: function () { return String.prototype.trimStart !== polyfill; } }
	);
	return polyfill;
};

},{"./polyfill":187,"define-properties":24}],189:[function(require,module,exports){
'use strict';

var $TypeError = require('es-errors/type');
var getSymbolDescription = require('get-symbol-description');

/** @type {import('./implementation')} */
module.exports = function description() {
	if (this == null) { // eslint-disable-line eqeqeq
		throw new $TypeError('`this` value must be object-coercible');
	}

	return getSymbolDescription(this);
};

},{"es-errors/type":113,"get-symbol-description":129}],190:[function(require,module,exports){
'use strict';

var callBind = require('call-bind');

var getPolyfill = require('./polyfill');

module.exports = callBind(getPolyfill());

},{"./polyfill":191,"call-bind":21}],191:[function(require,module,exports){
'use strict';

var hasSymbols = require('has-symbols')();

var implementation = require('./implementation');
var gOPD = require('gopd');

/** @type {import('./polyfill')} */
module.exports = function descriptionPolyfill() {
	if (!hasSymbols || typeof gOPD !== 'function') {
		return implementation;
	}

	var desc = gOPD(Symbol.prototype, 'description');
	if (!desc || typeof desc.get !== 'function') {
		return implementation;
	}

	var emptySymbolDesc = desc.get.call(Symbol());
	var emptyDescValid = typeof emptySymbolDesc === 'undefined' || emptySymbolDesc === '';
	if (!emptyDescValid || desc.get.call(Symbol('a')) !== 'a') {
		return implementation;
	}
	return desc.get;
};

},{"./implementation":189,"gopd":131,"has-symbols":134}],192:[function(require,module,exports){
'use strict';

var hasSymbols = require('has-symbols')();
var getInferredName = require('get-symbol-description/getInferredName');

var polyfill = require('./polyfill');

var $Object = require('es-object-atoms');
var gOPD = require('gopd');
var callBind = require('call-bind');
var gOPDs = require('object.getownpropertydescriptors/polyfill')();
var dP = $Object.defineProperty;
var dPs = $Object.defineProperties;
var setProto = $Object.setPrototypeOf;

/** @typedef {import('.').Getter} Getter */
/** @typedef {import('.')} BoundGetter */

/** @param {Getter} getter */
var define = function defineGetter(getter) {
	dP(Symbol.prototype, 'description', {
		configurable: true,
		enumerable: false,
		get: getter
	});
};

/** @param {Getter} getter */
var shimGlobal = function shimGlobalSymbol(getter) {
	var origSym = callBind.apply(Symbol);
	var emptyStrings = $Object.create ? $Object.create(null) : {};
	var SymNew = /** @type {(this: symbol, description?: string) => symbol} */ function Symbol() {
		var sym = origSym(this, /** @type {Parameters<typeof Symbol>} */ (/** @type {unknown} */ (arguments)));
		if (arguments.length > 0 && arguments[0] === '') {
			emptyStrings[sym] = true;
		}
		return sym;
	};
	SymNew.prototype = Symbol.prototype;
	setProto(SymNew, Symbol);
	var props = gOPDs(Symbol);
	delete props.length;
	delete props.arguments;
	delete props.caller;
	dPs(SymNew, props);
	// @ts-expect-error properties are copied above
	Symbol = SymNew; // eslint-disable-line no-native-reassign, no-global-assign, no-implicit-globals

	/** @type {BoundGetter} */
	var boundGetter = callBind(getter);
	/** @type {Getter} */
	var wrappedGetter = function description() {
		/* eslint no-invalid-this: 0 */
		var symbolDescription = boundGetter(this);
		if (emptyStrings[this]) {
			return '';
		}
		return symbolDescription;
	};
	define(wrappedGetter);
	return wrappedGetter;
};

/** @type {import('./shim')} */
module.exports = function shimSymbolDescription() {
	if (!hasSymbols || !gOPD) {
		return false;
	}
	var desc = gOPD(Symbol.prototype, 'description');
	var getter = polyfill();
	var isMissing = !desc || typeof desc.get !== 'function';
	var isBroken = !isMissing && (typeof Symbol().description !== 'undefined' || Symbol('').description !== '');
	if (isMissing || isBroken) {
		if (!getInferredName) {
			return shimGlobal(getter);
		}
		define(getter);
	}
	return getter;
};

},{"./polyfill":191,"call-bind":21,"es-object-atoms":117,"get-symbol-description/getInferredName":128,"gopd":131,"has-symbols":134,"object.getownpropertydescriptors/polyfill":166}],193:[function(require,module,exports){
'use strict';

var proto = require('./Array.prototype');

module.exports = {
	prototype: proto,
	shim: function shimArray() {
		proto.shim();
	}
};

},{"./Array.prototype":196}],194:[function(require,module,exports){
'use strict';

module.exports = require('array.prototype.flat');

},{"array.prototype.flat":3}],195:[function(require,module,exports){
'use strict';

module.exports = require('array.prototype.flatmap');

},{"array.prototype.flatmap":7}],196:[function(require,module,exports){
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

},{"./Array.prototype.flat":194,"./Array.prototype.flatmap":195}],197:[function(require,module,exports){


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

},{"./array/Array":193,"./object/Object":199,"./string/String":200,"./symbol/Symbol":202}],198:[function(require,module,exports){
'use strict';

module.exports = require('./es10-shim').shim();

},{"./es10-shim":197}],199:[function(require,module,exports){
'use strict';

var fromentries = require('object.fromentries');

module.exports = {
	fromentries: fromentries,
	shim: function shimObject() {
		fromentries.shim();
	},
};

},{"object.fromentries":162}],200:[function(require,module,exports){
'use strict';

var stringPrototype = require('./String.prototype');

module.exports = {
	prototype: stringPrototype,
	shim: function shimString() {
		stringPrototype.shim();
	}
};

},{"./String.prototype":201}],201:[function(require,module,exports){
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

},{"string.prototype.trimend":182,"string.prototype.trimstart":186}],202:[function(require,module,exports){
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

},{"symbol.prototype.description":190,"symbol.prototype.description/shim":192}]},{},[198]);
