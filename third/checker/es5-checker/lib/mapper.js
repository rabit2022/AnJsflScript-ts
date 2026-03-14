// ====== ES5 特性中文映射 ======
var mapper = {
    // --- Array Methods ---
    ArrayIsArray: {
        cn: 'Array.isArray 方法',
        en: 'Array.isArray method',
        example: 'Array.isArray([]); // true\nArray.isArray({}); // false'
    },
    ArrayEvery: {
        cn: 'Array.prototype.every 方法',
        en: 'Array.prototype.every method',
        example: '[1, 2, 3].every(function(x) { return x > 0; }); // true'
    },
    ArrayFilter: {
        cn: 'Array.prototype.filter 方法',
        en: 'Array.prototype.filter method',
        example: '[1, 2, 3].filter(function(x) { return x > 1; }); // [2, 3]'
    },
    ArrayForEach: {
        cn: 'Array.prototype.forEach 方法',
        en: 'Array.prototype.forEach method',
        example: '[1, 2].forEach(function(x) { console.log(x); });'
    },
    ArrayIndexOf: {
        cn: 'Array.prototype.indexOf 方法',
        en: 'Array.prototype.indexOf method',
        example: '[1, 2, 3].indexOf(2); // 1\n[1, 2, 3].indexOf(4); // -1'
    },
    ArrayLastIndexOf: {
        cn: 'Array.prototype.lastIndexOf 方法',
        en: 'Array.prototype.lastIndexOf method',
        example: '[1, 2, 2, 3].lastIndexOf(2); // 2'
    },
    ArrayMap: {
        cn: 'Array.prototype.map 方法',
        en: 'Array.prototype.map method',
        example: '[1, 2, 3].map(function(x) { return x * 2; }); // [2, 4, 6]'
    },
    ArraySome: {
        cn: 'Array.prototype.some 方法',
        en: 'Array.prototype.some method',
        example: '[1, 2, 3].some(function(x) { return x > 2; }); // true'
    },
    ArrayReduce: {
        cn: 'Array.prototype.reduce 方法',
        en: 'Array.prototype.reduce method',
        example: '[1, 2, 3].reduce(function(a, b) { return a + b; }, 0); // 6'
    },
    ArrayReduceRight: {
        cn: 'Array.prototype.reduceRight 方法',
        en: 'Array.prototype.reduceRight method',
        example: '[1, 2, 3].reduceRight(function(a, b) { return a - b; }); // 2 (1 - (2 - 3))'
    },

    // --- Object Methods ---
    ObjectKeys: {
        cn: 'Object.keys 方法',
        en: 'Object.keys method',
        example: 'Object.keys({ a: 1, b: 2 }); // ["a", "b"]'
    },

    // --- Function Methods ---
    FunctionBind: {
        cn: 'Function.prototype.bind 方法',
        en: 'Function.prototype.bind method',
        example: 'var func = function() { return this.val; };\nvar bound = func.bind({ val: 42 });\nbound(); // 42'
    },

    // --- String Methods ---
    StringTrim: {
        cn: 'String.prototype.trim 方法',
        en: 'String.prototype.trim method',
        example: '"  hello  ".trim(); // "hello"'
    },

    // --- Date Methods ---
    DateNow: {
        cn: 'Date.now 方法',
        en: 'Date.now method',
        example: 'var start = Date.now(); // returns timestamp in ms'
    },
    DateToISOString: {
        cn: 'Date.prototype.toISOString 方法',
        en: 'Date.prototype.toISOString method',
        example: 'new Date("2023-01-01T12:00:00Z").toISOString(); // "2023-01-01T12:00:00.000Z"'
    },
    DateToJSON: {
        cn: 'Date.prototype.toJSON 方法',
        en: 'Date.prototype.toJSON method',
        example: 'new Date("2023-01-01").toJSON(); // "2023-01-01T00:00:00.000Z"'
    },
    DateParseISO: {
        cn: 'Date.parse 支持 ISO 8601 格式',
        en: 'Date.parse supports ISO 8601 format',
        example: 'Date.parse("2023-01-01T12:00:00Z"); // parses ISO string correctly'
    },

    // --- Number Methods ---
    NumberToFixed: {
        cn: 'Number.prototype.toFixed 方法',
        en: 'Number.prototype.toFixed method',
        example: '(123.456).toFixed(2); // "123.46"'
    },
    NumberToPrecision: {
        cn: 'Number.prototype.toPrecision 方法',
        en: 'Number.prototype.toPrecision method',
        example: '(123.456).toPrecision(4); // "123.5"'
    },
    NumberToExponential: {
        cn: 'Number.prototype.toExponential 方法',
        en: 'Number.prototype.toExponential method',
        example: '(12345).toExponential(2); // "1.23e+4"'
    },

    // --- Global Functions ---
    ParseInt: {
        cn: '全局 parseInt 函数 (强制十进制)',
        en: 'Global parseInt function (forces radix 10)',
        example: 'parseInt("010"); // 10 (instead of 8 in old engines)'
    },
    ParseFloat: {
        cn: '全局 parseFloat 函数',
        en: 'Global parseFloat function',
        example: 'parseFloat("3.14px"); // 3.14'
    },

    // --- Error Properties ---
    ErrorToString: {
        cn: 'Error.prototype.toString 方法',
        en: 'Error.prototype.toString method',
        example: 'new Error("Test").toString(); // "Error: Test"'
    },
    ErrorName: {
        cn: 'Error.prototype.name 属性',
        en: 'Error.prototype.name property',
        example: 'var e = new TypeError("Test");\ne.name; // "TypeError"'
    },
    ErrorMessage: {
        cn: 'Error.prototype.message 属性',
        en: 'Error.prototype.message property',
        example: 'var e = new Error("Test");\ne.message; // "Test"'
    },

    // --- RegExp Methods ---
    RegExpToString: {
        cn: 'RegExp.prototype.toString 方法',
        en: 'RegExp.prototype.toString method',
        example: '/abc/gi.toString(); // "/abc/gi"'
    },

    ObjectCreate: {
        cn: 'Object.create 方法',
        en: 'Object.create method',
        // 文档说明：简单继承原型时工作正常，但第二个参数（属性描述符）在旧引擎中可能静默失败或报错
        example: '// 基本用法通常有效\nvar o = Object.create({ a: 1 });\n\n// 警告：第二个参数在旧版 shim 中可能无效\nvar o2 = Object.create(null, { b: { value: 2 } });'
    },

    ObjectGetPrototypeOf: {
        cn: 'Object.getPrototypeOf 方法',
        en: 'Object.getPrototypeOf method',
        // 文档说明：如果 constructor.prototype 被重写（如 Foo.prototype = {}），可能返回 undefined
        example: 'function Foo() {}\nvar o = new Foo();\nvar proto = Object.getPrototypeOf(o);\n\n// 警告：如果 Foo.prototype 被重新赋值，此方法可能返回 undefined'
    },

    ObjectGetOwnPropertyNames: {
        cn: 'Object.getOwnPropertyNames 方法',
        en: 'Object.getOwnPropertyNames method',
        // 文档说明：内部使用 Object.keys，因此在旧引擎中无法获取不可枚举属性，结果不准确
        example: 'var o = { a: 1 };\nObject.defineProperty(o, "b", { value: 2, enumerable: false });\nvar names = Object.getOwnPropertyNames(o);\n// 警告：在旧版 shim 中，names 可能只包含 ["a"]，丢失了 "b"'
    },

    ObjectIsSealed: {
        cn: 'Object.isSealed 方法',
        en: 'Object.isSealed method',
        // 文档说明：在旧引擎中始终返回 false，但这恰好是准确的（因为旧引擎无法真正密封对象）
        example: 'var o = { a: 1 };\nvar isSealed = Object.isSealed(o);\n// 在旧引擎中始终返回 false'
    },

    ObjectIsFrozen: {
        cn: 'Object.isFrozen 方法',
        en: 'Object.isFrozen method',
        // 文档说明：在旧引擎中始终返回 false，准确反映了对象未被冻结的状态
        example: 'var o = { a: 1 };\nvar isFrozen = Object.isFrozen(o);\n// 在旧引擎中始终返回 false'
    },

    ObjectIsExtensible: {
        cn: 'Object.isExtensible 方法',
        en: 'Object.isExtensible method',
        // 文档说明：通过尝试扩展然后撤销来工作，效果良好
        example: 'var o = {};\nvar extensible = Object.isExtensible(o); // true\nObject.preventExtensions(o);\nObject.isExtensible(o); // false'
    },

    ObjectGetOwnPropertyDescriptor: {
        cn: 'Object.getOwnPropertyDescriptor 方法',
        en: 'Object.getOwnPropertyDescriptor method',
        // 文档说明：行为不符合 ES5 标准，建议在确认其在旧引擎中的有用性之前不要使用
        example: 'var o = { a: 1 };\nvar desc = Object.getOwnPropertyDescriptor(o, "a");\n// 警告：Shim 的行为可能不符合 ES5 标准，慎用'
    },

    ObjectDefineProperty: {
        cn: 'Object.defineProperty 方法',
        en: 'Object.defineProperty method',
        // 文档说明：IE8 仅支持 DOM 对象；可能静默忽略 writable/enumerable/configurable；不支持 getter/setter
        example: 'var o = {};\n// 警告：在 IE8 非 DOM 对象上可能抛出异常\n// 警告：writable, enumerable, configurable 可能被静默忽略\n// 警告：getter/setter 在所有 IE 版本中都会静默失败\nObject.defineProperty(o, "a", { value: 1, writable: false });'
    },

    ObjectDefineProperties: {
        cn: 'Object.defineProperties 方法',
        en: 'Object.defineProperties method',
        // 文档说明：依赖于 Object.defineProperty shim，因此继承其所有局限性
        example: 'var o = {};\n// 警告：继承 Object.defineProperty 的所有问题\nObject.defineProperties(o, {\n  a: { value: 1 },\n  b: { value: 2, enumerable: false }\n});'
    },

    ObjectSeal: {
        cn: 'Object.seal 方法',
        en: 'Object.seal method',
        // 文档说明：在所有旧引擎中静默失败。除非依赖安全特性，否则通常没问题（因为旧引擎本来就没有这些安全特性）
        example: 'var o = { a: 1 };\nObject.seal(o);\n// 警告：在旧引擎中静默失败，对象仍然可扩展和可配置'
    },

    ObjectFreeze: {
        cn: 'Object.freeze 方法',
        en: 'Object.freeze method',
        // 文档说明：在所有旧引擎中静默失败
        example: 'var o = { a: 1 };\nObject.freeze(o);\n// 警告：在旧引擎中静默失败，对象仍然可变'
    },

    ObjectPreventExtensions: {
        cn: 'Object.preventExtensions 方法',
        en: 'Object.preventExtensions method',
        // 文档说明：在所有旧引擎中静默失败
        example: 'var o = { a: 1 };\nObject.preventExtensions(o);\n// 警告：在旧引擎中静默失败，对象仍然可以添加新属性'
    }
};

module.exports = mapper;