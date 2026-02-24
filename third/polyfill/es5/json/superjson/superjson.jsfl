require(["require", "_exports", "tslib"], function (require, exports, tslib_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === 'object' && typeof module === 'object')
            module.exports = factory();
        else if (typeof define === 'function' && define.amd)
            define([], factory);
        else if (typeof exports === 'object')
            exports["packAll"] = factory();
        else
            root["packAll"] = factory();
    })(this, function () {
        return /******/ (function () {
            /******/ "use strict";
            /******/ var __webpack_modules__ = ({
                /***/ 201: 
                /***/ (function (module, __unused_webpack_exports, __webpack_require__) {
                    /*
                    
                    npx browserify ./src/entry.js -o out/packAll.js
                    npx babel out/packAll.js --out-file out/packAll.jsfl
                    
                    // webpack
                    // npx babel out/packAll.js --out-file out/packAll.jsfl
                    // node ./tools/iife/wrap-iife.js
                    
                    
                     */
                    // export * from "cli-table3";
                    module.exports = __webpack_require__(662);
                    /***/ 
                }),
                /***/ 662: 
                /***/ (function (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {
                    // ESM COMPAT FLAG
                    __webpack_require__.r(__webpack_exports__);
                    // EXPORTS
                    __webpack_require__.d(__webpack_exports__, {
                        SuperJSON: function () { return /* binding */ SuperJSON; },
                        allowErrorProps: function () { return /* binding */ allowErrorProps; },
                        "default": function () { return /* binding */ dist; },
                        deserialize: function () { return /* binding */ deserialize; },
                        parse: function () { return /* binding */ parse; },
                        registerClass: function () { return /* binding */ registerClass; },
                        registerCustom: function () { return /* binding */ registerCustom; },
                        registerSymbol: function () { return /* binding */ registerSymbol; },
                        serialize: function () { return /* binding */ serialize; },
                        stringify: function () { return /* binding */ stringify; }
                    });
                    ; // ./node_modules/superjson/dist/double-indexed-kv.js
                    var DoubleIndexedKV = /** @class */ (function () {
                        function DoubleIndexedKV() {
                            this.keyToValue = new Map();
                            this.valueToKey = new Map();
                        }
                        DoubleIndexedKV.prototype.set = function (key, value) {
                            this.keyToValue.set(key, value);
                            this.valueToKey.set(value, key);
                        };
                        DoubleIndexedKV.prototype.getByKey = function (key) {
                            return this.keyToValue.get(key);
                        };
                        DoubleIndexedKV.prototype.getByValue = function (value) {
                            return this.valueToKey.get(value);
                        };
                        DoubleIndexedKV.prototype.clear = function () {
                            this.keyToValue.clear();
                            this.valueToKey.clear();
                        };
                        return DoubleIndexedKV;
                    }());
                    //# sourceMappingURL=double-indexed-kv.js.map
                    ; // ./node_modules/superjson/dist/registry.js
                    var Registry = /** @class */ (function () {
                        function Registry(generateIdentifier) {
                            this.generateIdentifier = generateIdentifier;
                            this.kv = new DoubleIndexedKV();
                        }
                        Registry.prototype.register = function (value, identifier) {
                            if (this.kv.getByValue(value)) {
                                return;
                            }
                            if (!identifier) {
                                identifier = this.generateIdentifier(value);
                            }
                            this.kv.set(identifier, value);
                        };
                        Registry.prototype.clear = function () {
                            this.kv.clear();
                        };
                        Registry.prototype.getIdentifier = function (value) {
                            return this.kv.getByValue(value);
                        };
                        Registry.prototype.getValue = function (identifier) {
                            return this.kv.getByKey(identifier);
                        };
                        return Registry;
                    }());
                    //# sourceMappingURL=registry.js.map
                    ; // ./node_modules/superjson/dist/class-registry.js
                    var ClassRegistry = /** @class */ (function (_super) {
                        tslib_1.__extends(ClassRegistry, _super);
                        function ClassRegistry() {
                            var _this = _super.call(this, function (c) { return c.name; }) || this;
                            _this.classToAllowedProps = new Map();
                            return _this;
                        }
                        ClassRegistry.prototype.register = function (value, options) {
                            if (typeof options === 'object') {
                                if (options.allowProps) {
                                    this.classToAllowedProps.set(value, options.allowProps);
                                }
                                _super.prototype.register.call(this, value, options.identifier);
                            }
                            else {
                                _super.prototype.register.call(this, value, options);
                            }
                        };
                        ClassRegistry.prototype.getAllowedProps = function (value) {
                            return this.classToAllowedProps.get(value);
                        };
                        return ClassRegistry;
                    }(Registry));
                    //# sourceMappingURL=class-registry.js.map
                    ; // ./node_modules/superjson/dist/util.js
                    function valuesOfObj(record) {
                        if ('values' in Object) {
                            // eslint-disable-next-line es5/no-es6-methods
                            return Object.values(record);
                        }
                        var values = [];
                        // eslint-disable-next-line no-restricted-syntax
                        for (var key in record) {
                            if (record.hasOwnProperty(key)) {
                                values.push(record[key]);
                            }
                        }
                        return values;
                    }
                    function find(record, predicate) {
                        var values = valuesOfObj(record);
                        if ('find' in values) {
                            // eslint-disable-next-line es5/no-es6-methods
                            return values.find(predicate);
                        }
                        var valuesNotNever = values;
                        for (var i = 0; i < valuesNotNever.length; i++) {
                            var value = valuesNotNever[i];
                            if (predicate(value)) {
                                return value;
                            }
                        }
                        return undefined;
                    }
                    function forEach(record, run) {
                        Object.entries(record).forEach(function (_a) {
                            var key = _a[0], value = _a[1];
                            return run(value, key);
                        });
                    }
                    function includes(arr, value) {
                        return arr.indexOf(value) !== -1;
                    }
                    function findArr(record, predicate) {
                        for (var i = 0; i < record.length; i++) {
                            var value = record[i];
                            if (predicate(value)) {
                                return value;
                            }
                        }
                        return undefined;
                    }
                    //# sourceMappingURL=util.js.map
                    ; // ./node_modules/superjson/dist/custom-transformer-registry.js
                    var CustomTransformerRegistry = /** @class */ (function () {
                        function CustomTransformerRegistry() {
                            this.transfomers = {};
                        }
                        CustomTransformerRegistry.prototype.register = function (transformer) {
                            this.transfomers[transformer.name] = transformer;
                        };
                        CustomTransformerRegistry.prototype.findApplicable = function (v) {
                            return find(this.transfomers, function (transformer) { return transformer.isApplicable(v); });
                        };
                        CustomTransformerRegistry.prototype.findByName = function (name) {
                            return this.transfomers[name];
                        };
                        return CustomTransformerRegistry;
                    }());
                    //# sourceMappingURL=custom-transformer-registry.js.map
                    ; // ./node_modules/superjson/dist/is.js
                    var getType = function (payload) { return Object.prototype.toString.call(payload).slice(8, -1); };
                    var isUndefined = function (payload) { return typeof payload === 'undefined'; };
                    var isNull = function (payload) { return payload === null; };
                    var isPlainObject = function (payload) {
                        if (typeof payload !== 'object' || payload === null)
                            return false;
                        if (payload === Object.prototype)
                            return false;
                        if (Object.getPrototypeOf(payload) === null)
                            return true;
                        return Object.getPrototypeOf(payload) === Object.prototype;
                    };
                    var isEmptyObject = function (payload) { return isPlainObject(payload) && Object.keys(payload).length === 0; };
                    var isArray = function (payload) { return Array.isArray(payload); };
                    var isString = function (payload) { return typeof payload === 'string'; };
                    var isNumber = function (payload) { return typeof payload === 'number' && !isNaN(payload); };
                    var isBoolean = function (payload) { return typeof payload === 'boolean'; };
                    var isRegExp = function (payload) { return payload instanceof RegExp; };
                    var isMap = function (payload) { return payload instanceof Map; };
                    var isSet = function (payload) { return payload instanceof Set; };
                    var isSymbol = function (payload) { return getType(payload) === 'Symbol'; };
                    var isDate = function (payload) { return payload instanceof Date && !isNaN(payload.valueOf()); };
                    var isError = function (payload) { return payload instanceof Error; };
                    var isNaNValue = function (payload) { return typeof payload === 'number' && isNaN(payload); };
                    var isPrimitive = function (payload) { return isBoolean(payload) ||
                        isNull(payload) ||
                        isUndefined(payload) ||
                        isNumber(payload) ||
                        isString(payload) ||
                        isSymbol(payload); };
                    var isBigint = function (payload) { return typeof payload === 'bigint'; };
                    var isInfinite = function (payload) { return payload === Infinity || payload === -Infinity; };
                    var isTypedArray = function (payload) { return ArrayBuffer.isView(payload) && !(payload instanceof DataView); };
                    var isURL = function (payload) { return payload instanceof URL; };
                    //# sourceMappingURL=is.js.map
                    ; // ./node_modules/superjson/dist/pathstringifier.js
                    var escapeKey = function (key) { return key.replace(/\\/g, '\\\\').replace(/\./g, '\\.'); };
                    var stringifyPath = function (path) { return path
                        .map(String)
                        .map(escapeKey)
                        .join('.'); };
                    var parsePath = function (string, legacyPaths) {
                        var result = [];
                        var segment = '';
                        for (var i = 0; i < string.length; i++) {
                            var char = string.charAt(i);
                            if (!legacyPaths && char === '\\') {
                                var escaped = string.charAt(i + 1);
                                if (escaped === '\\') {
                                    segment += '\\';
                                    i++;
                                    continue;
                                }
                                else if (escaped !== '.') {
                                    throw Error('invalid path');
                                }
                            }
                            var isEscapedDot = char === '\\' && string.charAt(i + 1) === '.';
                            if (isEscapedDot) {
                                segment += '.';
                                i++;
                                continue;
                            }
                            var isEndOfSegment = char === '.';
                            if (isEndOfSegment) {
                                result.push(segment);
                                segment = '';
                                continue;
                            }
                            segment += char;
                        }
                        var lastSegment = segment;
                        result.push(lastSegment);
                        return result;
                    };
                    //# sourceMappingURL=pathstringifier.js.map
                    ; // ./node_modules/superjson/dist/transformer.js
                    function simpleTransformation(isApplicable, annotation, transform, untransform) {
                        return {
                            isApplicable: isApplicable,
                            annotation: annotation,
                            transform: transform,
                            untransform: untransform,
                        };
                    }
                    var simpleRules = [
                        simpleTransformation(isUndefined, 'undefined', function () { return null; }, function () { return undefined; }),
                        simpleTransformation(isBigint, 'bigint', function (v) { return v.toString(); }, function (v) {
                            if (typeof BigInt !== 'undefined') {
                                return BigInt(v);
                            }
                            console.error('Please add a BigInt polyfill.');
                            return v;
                        }),
                        simpleTransformation(isDate, 'Date', function (v) { return v.toISOString(); }, function (v) { return new Date(v); }),
                        simpleTransformation(isError, 'Error', function (v, superJson) {
                            var baseError = {
                                name: v.name,
                                message: v.message,
                            };
                            if ('cause' in v) {
                                baseError.cause = v.cause;
                            }
                            superJson.allowedErrorProps.forEach(function (prop) {
                                baseError[prop] = v[prop];
                            });
                            return baseError;
                        }, function (v, superJson) {
                            var e = new Error(v.message, { cause: v.cause });
                            e.name = v.name;
                            e.stack = v.stack;
                            superJson.allowedErrorProps.forEach(function (prop) {
                                e[prop] = v[prop];
                            });
                            return e;
                        }),
                        simpleTransformation(isRegExp, 'regexp', function (v) { return '' + v; }, function (regex) {
                            var body = regex.slice(1, regex.lastIndexOf('/'));
                            var flags = regex.slice(regex.lastIndexOf('/') + 1);
                            return new RegExp(body, flags);
                        }),
                        simpleTransformation(isSet, 'set', 
                        // (sets only exist in es6+)
                        // eslint-disable-next-line es5/no-es6-methods
                        function (v) { return tslib_1.__spreadArray([], v.values(), true); }, function (v) { return new Set(v); }),
                        simpleTransformation(isMap, 'map', function (v) { return tslib_1.__spreadArray([], v.entries(), true); }, function (v) { return new Map(v); }),
                        simpleTransformation(function (v) { return isNaNValue(v) || isInfinite(v); }, 'number', function (v) {
                            if (isNaNValue(v)) {
                                return 'NaN';
                            }
                            if (v > 0) {
                                return 'Infinity';
                            }
                            else {
                                return '-Infinity';
                            }
                        }, Number),
                        simpleTransformation(function (v) { return v === 0 && 1 / v === -Infinity; }, 'number', function () {
                            return '-0';
                        }, Number),
                        simpleTransformation(isURL, 'URL', function (v) { return v.toString(); }, function (v) { return new URL(v); }),
                    ];
                    function compositeTransformation(isApplicable, annotation, transform, untransform) {
                        return {
                            isApplicable: isApplicable,
                            annotation: annotation,
                            transform: transform,
                            untransform: untransform,
                        };
                    }
                    var symbolRule = compositeTransformation(function (s, superJson) {
                        if (isSymbol(s)) {
                            var isRegistered = !!superJson.symbolRegistry.getIdentifier(s);
                            return isRegistered;
                        }
                        return false;
                    }, function (s, superJson) {
                        var identifier = superJson.symbolRegistry.getIdentifier(s);
                        return ['symbol', identifier];
                    }, function (v) { return v.description; }, function (_, a, superJson) {
                        var value = superJson.symbolRegistry.getValue(a[1]);
                        if (!value) {
                            throw new Error('Trying to deserialize unknown symbol');
                        }
                        return value;
                    });
                    var constructorToName = [
                        Int8Array,
                        Uint8Array,
                        Int16Array,
                        Uint16Array,
                        Int32Array,
                        Uint32Array,
                        Float32Array,
                        Float64Array,
                        Uint8ClampedArray,
                    ].reduce(function (obj, ctor) {
                        obj[ctor.name] = ctor;
                        return obj;
                    }, {});
                    var typedArrayRule = compositeTransformation(isTypedArray, function (v) { return ['typed-array', v.constructor.name]; }, function (v) { return tslib_1.__spreadArray([], v, true); }, function (v, a) {
                        var ctor = constructorToName[a[1]];
                        if (!ctor) {
                            throw new Error('Trying to deserialize unknown typed array');
                        }
                        return new ctor(v);
                    });
                    function isInstanceOfRegisteredClass(potentialClass, superJson) {
                        if (potentialClass === null || potentialClass === void 0 ? void 0 : potentialClass.constructor) {
                            var isRegistered = !!superJson.classRegistry.getIdentifier(potentialClass.constructor);
                            return isRegistered;
                        }
                        return false;
                    }
                    var classRule = compositeTransformation(isInstanceOfRegisteredClass, function (clazz, superJson) {
                        var identifier = superJson.classRegistry.getIdentifier(clazz.constructor);
                        return ['class', identifier];
                    }, function (clazz, superJson) {
                        var allowedProps = superJson.classRegistry.getAllowedProps(clazz.constructor);
                        if (!allowedProps) {
                            return tslib_1.__assign({}, clazz);
                        }
                        var result = {};
                        allowedProps.forEach(function (prop) {
                            result[prop] = clazz[prop];
                        });
                        return result;
                    }, function (v, a, superJson) {
                        var clazz = superJson.classRegistry.getValue(a[1]);
                        if (!clazz) {
                            throw new Error("Trying to deserialize unknown class '".concat(a[1], "' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564"));
                        }
                        return Object.assign(Object.create(clazz.prototype), v);
                    });
                    var customRule = compositeTransformation(function (value, superJson) {
                        return !!superJson.customTransformerRegistry.findApplicable(value);
                    }, function (value, superJson) {
                        var transformer = superJson.customTransformerRegistry.findApplicable(value);
                        return ['custom', transformer.name];
                    }, function (value, superJson) {
                        var transformer = superJson.customTransformerRegistry.findApplicable(value);
                        return transformer.serialize(value);
                    }, function (v, a, superJson) {
                        var transformer = superJson.customTransformerRegistry.findByName(a[1]);
                        if (!transformer) {
                            throw new Error('Trying to deserialize unknown custom value');
                        }
                        return transformer.deserialize(v);
                    });
                    var compositeRules = [classRule, symbolRule, customRule, typedArrayRule];
                    var transformValue = function (value, superJson) {
                        var applicableCompositeRule = findArr(compositeRules, function (rule) { return rule.isApplicable(value, superJson); });
                        if (applicableCompositeRule) {
                            return {
                                value: applicableCompositeRule.transform(value, superJson),
                                type: applicableCompositeRule.annotation(value, superJson),
                            };
                        }
                        var applicableSimpleRule = findArr(simpleRules, function (rule) { return rule.isApplicable(value, superJson); });
                        if (applicableSimpleRule) {
                            return {
                                value: applicableSimpleRule.transform(value, superJson),
                                type: applicableSimpleRule.annotation,
                            };
                        }
                        return undefined;
                    };
                    var simpleRulesByAnnotation = {};
                    simpleRules.forEach(function (rule) {
                        simpleRulesByAnnotation[rule.annotation] = rule;
                    });
                    var untransformValue = function (json, type, superJson) {
                        if (isArray(type)) {
                            switch (type[0]) {
                                case 'symbol':
                                    return symbolRule.untransform(json, type, superJson);
                                case 'class':
                                    return classRule.untransform(json, type, superJson);
                                case 'custom':
                                    return customRule.untransform(json, type, superJson);
                                case 'typed-array':
                                    return typedArrayRule.untransform(json, type, superJson);
                                default:
                                    throw new Error('Unknown transformation: ' + type);
                            }
                        }
                        else {
                            var transformation = simpleRulesByAnnotation[type];
                            if (!transformation) {
                                throw new Error('Unknown transformation: ' + type);
                            }
                            return transformation.untransform(json, superJson);
                        }
                    };
                    //# sourceMappingURL=transformer.js.map
                    ; // ./node_modules/superjson/dist/accessDeep.js
                    var getNthKey = function (value, n) {
                        if (n > value.size)
                            throw new Error('index out of bounds');
                        var keys = value.keys();
                        while (n > 0) {
                            keys.next();
                            n--;
                        }
                        return keys.next().value;
                    };
                    function validatePath(path) {
                        if (includes(path, '__proto__')) {
                            throw new Error('__proto__ is not allowed as a property');
                        }
                        if (includes(path, 'prototype')) {
                            throw new Error('prototype is not allowed as a property');
                        }
                        if (includes(path, 'constructor')) {
                            throw new Error('constructor is not allowed as a property');
                        }
                    }
                    var getDeep = function (object, path) {
                        validatePath(path);
                        for (var i = 0; i < path.length; i++) {
                            var key = path[i];
                            if (isSet(object)) {
                                object = getNthKey(object, +key);
                            }
                            else if (isMap(object)) {
                                var row = +key;
                                var type = +path[++i] === 0 ? 'key' : 'value';
                                var keyOfRow = getNthKey(object, row);
                                switch (type) {
                                    case 'key':
                                        object = keyOfRow;
                                        break;
                                    case 'value':
                                        object = object.get(keyOfRow);
                                        break;
                                }
                            }
                            else {
                                object = object[key];
                            }
                        }
                        return object;
                    };
                    var setDeep = function (object, path, mapper) {
                        validatePath(path);
                        if (path.length === 0) {
                            return mapper(object);
                        }
                        var parent = object;
                        for (var i = 0; i < path.length - 1; i++) {
                            var key = path[i];
                            if (isArray(parent)) {
                                var index = +key;
                                parent = parent[index];
                            }
                            else if (isPlainObject(parent)) {
                                parent = parent[key];
                            }
                            else if (isSet(parent)) {
                                var row = +key;
                                parent = getNthKey(parent, row);
                            }
                            else if (isMap(parent)) {
                                var isEnd = i === path.length - 2;
                                if (isEnd) {
                                    break;
                                }
                                var row = +key;
                                var type = +path[++i] === 0 ? 'key' : 'value';
                                var keyOfRow = getNthKey(parent, row);
                                switch (type) {
                                    case 'key':
                                        parent = keyOfRow;
                                        break;
                                    case 'value':
                                        parent = parent.get(keyOfRow);
                                        break;
                                }
                            }
                        }
                        var lastKey = path[path.length - 1];
                        if (isArray(parent)) {
                            parent[+lastKey] = mapper(parent[+lastKey]);
                        }
                        else if (isPlainObject(parent)) {
                            parent[lastKey] = mapper(parent[lastKey]);
                        }
                        if (isSet(parent)) {
                            var oldValue = getNthKey(parent, +lastKey);
                            var newValue = mapper(oldValue);
                            if (oldValue !== newValue) {
                                parent.delete(oldValue);
                                parent.add(newValue);
                            }
                        }
                        if (isMap(parent)) {
                            var row = +path[path.length - 2];
                            var keyToRow = getNthKey(parent, row);
                            var type = +lastKey === 0 ? 'key' : 'value';
                            switch (type) {
                                case 'key': {
                                    var newKey = mapper(keyToRow);
                                    parent.set(newKey, parent.get(keyToRow));
                                    if (newKey !== keyToRow) {
                                        parent.delete(keyToRow);
                                    }
                                    break;
                                }
                                case 'value': {
                                    parent.set(keyToRow, mapper(parent.get(keyToRow)));
                                    break;
                                }
                            }
                        }
                        return object;
                    };
                    //# sourceMappingURL=accessDeep.js.map
                    ; // ./node_modules/superjson/dist/plainer.js
                    var enableLegacyPaths = function (version) { return version < 1; };
                    function traverse(tree, walker, version, origin) {
                        if (origin === void 0) { origin = []; }
                        if (!tree) {
                            return;
                        }
                        var legacyPaths = enableLegacyPaths(version);
                        if (!isArray(tree)) {
                            forEach(tree, function (subtree, key) { return traverse(subtree, walker, version, tslib_1.__spreadArray(tslib_1.__spreadArray([], origin, true), parsePath(key, legacyPaths), true)); });
                            return;
                        }
                        var nodeValue = tree[0], children = tree[1];
                        if (children) {
                            forEach(children, function (child, key) {
                                traverse(child, walker, version, tslib_1.__spreadArray(tslib_1.__spreadArray([], origin, true), parsePath(key, legacyPaths), true));
                            });
                        }
                        walker(nodeValue, origin);
                    }
                    function applyValueAnnotations(plain, annotations, version, superJson) {
                        traverse(annotations, function (type, path) {
                            plain = setDeep(plain, path, function (v) { return untransformValue(v, type, superJson); });
                        }, version);
                        return plain;
                    }
                    function applyReferentialEqualityAnnotations(plain, annotations, version) {
                        var legacyPaths = enableLegacyPaths(version);
                        function apply(identicalPaths, path) {
                            var object = getDeep(plain, parsePath(path, legacyPaths));
                            identicalPaths
                                .map(function (path) { return parsePath(path, legacyPaths); })
                                .forEach(function (identicalObjectPath) {
                                plain = setDeep(plain, identicalObjectPath, function () { return object; });
                            });
                        }
                        if (isArray(annotations)) {
                            var root = annotations[0], other = annotations[1];
                            root.forEach(function (identicalPath) {
                                plain = setDeep(plain, parsePath(identicalPath, legacyPaths), function () { return plain; });
                            });
                            if (other) {
                                forEach(other, apply);
                            }
                        }
                        else {
                            forEach(annotations, apply);
                        }
                        return plain;
                    }
                    var isDeep = function (object, superJson) { return isPlainObject(object) ||
                        isArray(object) ||
                        isMap(object) ||
                        isSet(object) ||
                        isError(object) ||
                        isInstanceOfRegisteredClass(object, superJson); };
                    function addIdentity(object, path, identities) {
                        var existingSet = identities.get(object);
                        if (existingSet) {
                            existingSet.push(path);
                        }
                        else {
                            identities.set(object, [path]);
                        }
                    }
                    function generateReferentialEqualityAnnotations(identitites, dedupe) {
                        var result = {};
                        var rootEqualityPaths = undefined;
                        identitites.forEach(function (paths) {
                            if (paths.length <= 1) {
                                return;
                            }
                            // if we're not deduping, all of these objects continue existing.
                            // putting the shortest path first makes it easier to parse for humans
                            // if we're deduping though, only the first entry will still exist, so we can't do this optimisation.
                            if (!dedupe) {
                                paths = paths
                                    .map(function (path) { return path.map(String); })
                                    .sort(function (a, b) { return a.length - b.length; });
                            }
                            var representativePath = paths[0], identicalPaths = paths.slice(1);
                            if (representativePath.length === 0) {
                                rootEqualityPaths = identicalPaths.map(stringifyPath);
                            }
                            else {
                                result[stringifyPath(representativePath)] = identicalPaths.map(stringifyPath);
                            }
                        });
                        if (rootEqualityPaths) {
                            if (isEmptyObject(result)) {
                                return [rootEqualityPaths];
                            }
                            else {
                                return [rootEqualityPaths, result];
                            }
                        }
                        else {
                            return isEmptyObject(result) ? undefined : result;
                        }
                    }
                    var walker = function (object, identities, superJson, dedupe, path, objectsInThisPath, seenObjects) {
                        var _a;
                        if (path === void 0) { path = []; }
                        if (objectsInThisPath === void 0) { objectsInThisPath = []; }
                        if (seenObjects === void 0) { seenObjects = new Map(); }
                        var primitive = isPrimitive(object);
                        if (!primitive) {
                            addIdentity(object, path, identities);
                            var seen = seenObjects.get(object);
                            if (seen) {
                                // short-circuit result if we've seen this object before
                                return dedupe
                                    ? {
                                        transformedValue: null,
                                    }
                                    : seen;
                            }
                        }
                        if (!isDeep(object, superJson)) {
                            var transformed_1 = transformValue(object, superJson);
                            var result_1 = transformed_1
                                ? {
                                    transformedValue: transformed_1.value,
                                    annotations: [transformed_1.type],
                                }
                                : {
                                    transformedValue: object,
                                };
                            if (!primitive) {
                                seenObjects.set(object, result_1);
                            }
                            return result_1;
                        }
                        if (includes(objectsInThisPath, object)) {
                            // prevent circular references
                            return {
                                transformedValue: null,
                            };
                        }
                        var transformationResult = transformValue(object, superJson);
                        var transformed = (_a = transformationResult === null || transformationResult === void 0 ? void 0 : transformationResult.value) !== null && _a !== void 0 ? _a : object;
                        var transformedValue = isArray(transformed) ? [] : {};
                        var innerAnnotations = {};
                        forEach(transformed, function (value, index) {
                            if (index === '__proto__' ||
                                index === 'constructor' ||
                                index === 'prototype') {
                                throw new Error("Detected property ".concat(index, ". This is a prototype pollution risk, please remove it from your object."));
                            }
                            var recursiveResult = walker(value, identities, superJson, dedupe, tslib_1.__spreadArray(tslib_1.__spreadArray([], path, true), [index], false), tslib_1.__spreadArray(tslib_1.__spreadArray([], objectsInThisPath, true), [object], false), seenObjects);
                            transformedValue[index] = recursiveResult.transformedValue;
                            if (isArray(recursiveResult.annotations)) {
                                innerAnnotations[escapeKey(index)] = recursiveResult.annotations;
                            }
                            else if (isPlainObject(recursiveResult.annotations)) {
                                forEach(recursiveResult.annotations, function (tree, key) {
                                    innerAnnotations[escapeKey(index) + '.' + key] = tree;
                                });
                            }
                        });
                        var result = isEmptyObject(innerAnnotations)
                            ? {
                                transformedValue: transformedValue,
                                annotations: !!transformationResult
                                    ? [transformationResult.type]
                                    : undefined,
                            }
                            : {
                                transformedValue: transformedValue,
                                annotations: !!transformationResult
                                    ? [transformationResult.type, innerAnnotations]
                                    : innerAnnotations,
                            };
                        if (!primitive) {
                            seenObjects.set(object, result);
                        }
                        return result;
                    };
                    //# sourceMappingURL=plainer.js.map
                    ; // ./node_modules/is-what/dist/getType.js
                    /** Returns the object type of the given payload */
                    function getType_getType(payload) {
                        return Object.prototype.toString.call(payload).slice(8, -1);
                    }
                    ; // ./node_modules/is-what/dist/isArray.js
                    /** Returns whether the payload is an array */
                    function isArray_isArray(payload) {
                        return getType_getType(payload) === 'Array';
                    }
                    ; // ./node_modules/is-what/dist/isPlainObject.js
                    /**
                     * Returns whether the payload is a plain JavaScript object (excluding special classes or objects
                     * with other prototypes)
                     */
                    function isPlainObject_isPlainObject(payload) {
                        if (getType_getType(payload) !== 'Object')
                            return false;
                        var prototype = Object.getPrototypeOf(payload);
                        return !!prototype && prototype.constructor === Object && prototype === Object.prototype;
                    }
                    ; // ./node_modules/copy-anything/dist/index.js
                    function assignProp(carry, key, newVal, originalObject, includeNonenumerable) {
                        var propType = {}.propertyIsEnumerable.call(originalObject, key)
                            ? 'enumerable'
                            : 'nonenumerable';
                        if (propType === 'enumerable')
                            carry[key] = newVal;
                        if (includeNonenumerable && propType === 'nonenumerable') {
                            Object.defineProperty(carry, key, {
                                value: newVal,
                                enumerable: false,
                                writable: true,
                                configurable: true,
                            });
                        }
                    }
                    /**
                     * Copy (clone) an object and all its props recursively to get rid of any prop referenced of the
                     * original object. Arrays are also cloned, however objects inside arrays are still linked.
                     *
                     * @param target Target can be anything
                     * @param [options={}] See type {@link Options} for more details.
                     *
                     *   - `{ props: ['key1'] }` will only copy the `key1` property. When using this you will need to cast
                     *       the return type manually (in order to keep the TS implementation in here simple I didn't
                     *       built a complex auto resolved type for those few cases people want to use this option)
                     *   - `{ nonenumerable: true }` will copy all non-enumerable properties. Default is `{}`
                     *
                     * @returns The target with replaced values
                     */
                    function copy(target, options) {
                        if (options === void 0) { options = {}; }
                        if (isArray_isArray(target)) {
                            return target.map(function (item) { return copy(item, options); });
                        }
                        if (!isPlainObject_isPlainObject(target)) {
                            return target;
                        }
                        var props = Object.getOwnPropertyNames(target);
                        var symbols = Object.getOwnPropertySymbols(target);
                        return tslib_1.__spreadArray(tslib_1.__spreadArray([], props, true), symbols, true).reduce(function (carry, key) {
                            // Skip __proto__ properties to prevent prototype pollution
                            if (key === '__proto__')
                                return carry;
                            if (isArray_isArray(options.props) && !options.props.includes(key)) {
                                return carry;
                            }
                            var val = target[key];
                            var newVal = copy(val, options);
                            assignProp(carry, key, newVal, target, options.nonenumerable);
                            return carry;
                        }, {});
                    }
                    ; // ./node_modules/superjson/dist/index.js
                    var SuperJSON = /** @class */ (function () {
                        /**
                         * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
                         */
                        function SuperJSON(_a) {
                            var _b = _a === void 0 ? {} : _a, _c = _b.dedupe, dedupe = _c === void 0 ? false : _c;
                            this.classRegistry = new ClassRegistry();
                            this.symbolRegistry = new Registry(function (s) { var _a; return (_a = s.description) !== null && _a !== void 0 ? _a : ''; });
                            this.customTransformerRegistry = new CustomTransformerRegistry();
                            this.allowedErrorProps = [];
                            this.dedupe = dedupe;
                        }
                        SuperJSON.prototype.serialize = function (object) {
                            var identities = new Map();
                            var output = walker(object, identities, this, this.dedupe);
                            var res = {
                                json: output.transformedValue,
                            };
                            if (output.annotations) {
                                res.meta = tslib_1.__assign(tslib_1.__assign({}, res.meta), { values: output.annotations });
                            }
                            var equalityAnnotations = generateReferentialEqualityAnnotations(identities, this.dedupe);
                            if (equalityAnnotations) {
                                res.meta = tslib_1.__assign(tslib_1.__assign({}, res.meta), { referentialEqualities: equalityAnnotations });
                            }
                            if (res.meta)
                                res.meta.v = 1;
                            return res;
                        };
                        SuperJSON.prototype.deserialize = function (payload, options) {
                            var _a, _b;
                            var json = payload.json, meta = payload.meta;
                            var result = (options === null || options === void 0 ? void 0 : options.inPlace) ? json : copy(json);
                            if (meta === null || meta === void 0 ? void 0 : meta.values) {
                                result = applyValueAnnotations(result, meta.values, (_a = meta.v) !== null && _a !== void 0 ? _a : 0, this);
                            }
                            if (meta === null || meta === void 0 ? void 0 : meta.referentialEqualities) {
                                result = applyReferentialEqualityAnnotations(result, meta.referentialEqualities, (_b = meta.v) !== null && _b !== void 0 ? _b : 0);
                            }
                            return result;
                        };
                        SuperJSON.prototype.stringify = function (object) {
                            return JSON.stringify(this.serialize(object));
                        };
                        SuperJSON.prototype.parse = function (string) {
                            return this.deserialize(JSON.parse(string), { inPlace: true });
                        };
                        SuperJSON.prototype.registerClass = function (v, options) {
                            this.classRegistry.register(v, options);
                        };
                        SuperJSON.prototype.registerSymbol = function (v, identifier) {
                            this.symbolRegistry.register(v, identifier);
                        };
                        SuperJSON.prototype.registerCustom = function (transformer, name) {
                            this.customTransformerRegistry.register(tslib_1.__assign({ name: name }, transformer));
                        };
                        SuperJSON.prototype.allowErrorProps = function () {
                            var _a;
                            var props = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                props[_i] = arguments[_i];
                            }
                            (_a = this.allowedErrorProps).push.apply(_a, props);
                        };
                        return SuperJSON;
                    }());
                    SuperJSON.defaultInstance = new SuperJSON();
                    SuperJSON.serialize = SuperJSON.defaultInstance.serialize.bind(SuperJSON.defaultInstance);
                    SuperJSON.deserialize = SuperJSON.defaultInstance.deserialize.bind(SuperJSON.defaultInstance);
                    SuperJSON.stringify = SuperJSON.defaultInstance.stringify.bind(SuperJSON.defaultInstance);
                    SuperJSON.parse = SuperJSON.defaultInstance.parse.bind(SuperJSON.defaultInstance);
                    SuperJSON.registerClass = SuperJSON.defaultInstance.registerClass.bind(SuperJSON.defaultInstance);
                    SuperJSON.registerSymbol = SuperJSON.defaultInstance.registerSymbol.bind(SuperJSON.defaultInstance);
                    SuperJSON.registerCustom = SuperJSON.defaultInstance.registerCustom.bind(SuperJSON.defaultInstance);
                    SuperJSON.allowErrorProps = SuperJSON.defaultInstance.allowErrorProps.bind(SuperJSON.defaultInstance);
                    /* harmony default export */ var dist = (SuperJSON);
                    var serialize = SuperJSON.serialize;
                    var deserialize = SuperJSON.deserialize;
                    var stringify = SuperJSON.stringify;
                    var parse = SuperJSON.parse;
                    var registerClass = SuperJSON.registerClass;
                    var registerCustom = SuperJSON.registerCustom;
                    var registerSymbol = SuperJSON.registerSymbol;
                    var allowErrorProps = SuperJSON.allowErrorProps;
                    //# sourceMappingURL=index.js.map
                    /***/ 
                })
                /******/ 
            });
            /************************************************************************/
            /******/ // The module cache
            /******/ var __webpack_module_cache__ = {};
            /******/
            /******/ // The require function
            /******/ function __webpack_require__(moduleId) {
                /******/ // Check if module is in cache
                /******/ var cachedModule = __webpack_module_cache__[moduleId];
                /******/ if (cachedModule !== undefined) {
                    /******/ return cachedModule.exports;
                    /******/ }
                /******/ // Create a new module (and put it into the cache)
                /******/ var module = __webpack_module_cache__[moduleId] = {
                    /******/ // no module.id needed
                    /******/ // no module.loaded needed
                    /******/ exports: {}
                    /******/ 
                };
                /******/
                /******/ // Execute the module function
                /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
                /******/
                /******/ // Return the exports of the module
                /******/ return module.exports;
                /******/ 
            }
            /******/
            /************************************************************************/
            /******/ /* webpack/runtime/define property getters */
            /******/ !function () {
                /******/ // define getter functions for harmony exports
                /******/ __webpack_require__.d = function (exports, definition) {
                    /******/ for (var key in definition) {
                        /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                            /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                            /******/ }
                        /******/ }
                    /******/ 
                };
                /******/ 
            }();
            /******/
            /******/ /* webpack/runtime/hasOwnProperty shorthand */
            /******/ !function () {
                /******/ __webpack_require__.o = function (obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); };
                /******/ 
            }();
            /******/
            /******/ /* webpack/runtime/make namespace object */
            /******/ !function () {
                /******/ // define __esModule on exports
                /******/ __webpack_require__.r = function (exports) {
                    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                        /******/ }
                    /******/ Object.defineProperty(exports, '__esModule', { value: true });
                    /******/ 
                };
                /******/ 
            }();
            /******/
            /************************************************************************/
            /******/
            /******/ // startup
            /******/ // Load entry module and return exports
            /******/ // This entry module used 'module' so it can't be inlined
            /******/ var __webpack_exports__ = __webpack_require__(201);
            /******/
            /******/ return __webpack_exports__;
            /******/ 
        })();
    });
});
