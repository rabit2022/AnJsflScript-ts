(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var supports = require('./lib/interface');
var api = require('./lib/api');
var runTest = require('./lib/runtest');

for (var key in supports) {
  supports[key] = runTest(getApiName(key));
}

supports._api = api;

function getApiName(key) {
  return supports[key];
}

module.exports = supports;

},{"./lib/api":2,"./lib/interface":3,"./lib/runtest":5}],2:[function(require,module,exports){
// -api.js - 定义  特性测试用例（兼容 runtest.js）
var api = {
  // es-shim
  // Array
  ArrayIsArray: { is: "return 'isArray' in Array;" },
  ArrayEvery: { is: "return 'every' in Array.prototype;" },
  ArrayFilter: { is: "return 'filter' in Array.prototype;" },
  ArrayForEach: { is: "return 'forEach' in Array.prototype;" },
  ArrayIndexOf: { is: "return 'indexOf' in Array.prototype;" },
  ArrayLastIndexOf: { is: "return 'lastIndexOf' in Array.prototype;" },
  ArrayMap: { is: "return 'map' in Array.prototype;" },
  ArraySome: { is: "return 'some' in Array.prototype;" },
  ArrayReduce: { is: "return 'reduce' in Array.prototype;" },
  ArrayReduceRight: { is: "return 'reduceRight' in Array.prototype;" },

  // Object
  ObjectKeys: { is: "return 'keys' in Object;" },

  // Function
  FunctionBind: { is: "return 'bind' in Function.prototype;" },

  // String
  StringTrim: { is: "return 'trim' in String.prototype;" },

  // Date
  DateNow: { is: "return 'now' in Date;" },
  DateToISOString: { is: "return 'toISOString' in Date.prototype;" },
  DateToJSON: { is: "return 'toJSON' in Date.prototype;" },
  DateParseISO: {
    passes: "(function() { var d = Date.parse('2012-04-23T18:25:43.511Z'); return !isNaN(d) && d > 0; })()"
  },

  // Number
  NumberToFixed: { is: "return 'toFixed' in Number.prototype;" },
  NumberToPrecision: { is: "return 'toPrecision' in Number.prototype;" },
  NumberToExponential: { is: "return 'toExponential' in Number.prototype;" },

  // Global
  // ParseInt: { is: "return 'parseInt' in global;" },
  // ParseFloat: { is: "return 'parseFloat' in global;" },
  ParseInt: { is: "return parseInt('010');" },
  ParseFloat: { is: "return parseFloat('3.14px')===3.14;" },

  // Error
  ErrorToString: { is: "return 'toString' in Error.prototype;" },
  ErrorName: { is: "return 'name' in Error.prototype;" },
  ErrorMessage: { is: "return 'message' in Error.prototype;" },

  // RegExp
  RegExpToString: { is: "return 'toString' in RegExp.prototype;" },


  //es-sham

  ObjectCreate: {
    // Doc: "For the case of simply 'begetting' an object... should work fine."
    // Doc Warning: "The second argument... will probably fail either silently or with extreme prejudice."
    passes: "'use strict'; var o = Object.create({ a: 1 }); if (o.a !== 1) throw 0;",
    description: "Basic prototypal inheritance works. Second argument (properties) is unreliable in legacy shims."
  },

  ObjectGetPrototypeOf: {
    // Doc: "Returns 'undefined' in some cases... uses __proto__... or constructor.prototype"
    // Doc Warning: "If your object was created like this [Foo.prototype = {}], it won't work."
    passes: "'use strict'; function Foo(){} var o = new Foo(); if (Object.getPrototypeOf(o) !== Foo.prototype) throw 0;",
    description: "May return undefined if constructor.prototype is reassigned. Relies on __proto__ or constructor property."
  },

  ObjectGetOwnPropertyNames: {
    // Doc: "Uses Object.keys, so it will not be accurate on legacy engines."
    passes: "'use strict'; var o = { a: 1 }; Object.defineProperty(o, 'b', { value: 2, enumerable: false }); var names = Object.getOwnPropertyNames(o); if (names.length !== 2 || names.indexOf('b') === -1) throw 0;",
    description: "Inaccurate in legacy engines as it often falls back to Object.keys (missing non-enumerable props)."
  },

  // --- Object State Inspection ---

  ObjectIsSealed: {
    // Doc: "Returns 'false' in all legacy engines... conveniently guaranteed to be accurate."
    is: "'use strict'; return typeof Object.isSealed === 'function' && Object.isSealed({}) === false;"
  },

  ObjectIsFrozen: {
    // Doc: "Returns 'false' in all legacy engines... conveniently guaranteed to be accurate."
    is: "'use strict'; return typeof Object.isFrozen === 'function' && Object.isFrozen({}) === false;"
  },

  ObjectIsExtensible: {
    // Doc: "Works like a charm, by trying very hard to extend the object then redacting..."
    passes: "'use strict'; var o = {}; if (Object.isExtensible(o) !== true) throw 0; Object.preventExtensions(o); if (Object.isExtensible(o) !== false) throw 0;"
  },

  // --- Property Descriptors ---

  ObjectGetOwnPropertyDescriptor: {
    // Doc Warning: "Behavior does not conform to ... should probably not be used."
    passes: "'use strict'; var o = { a: 1 }; var desc = Object.getOwnPropertyDescriptor(o, 'a'); if (!desc || desc.value !== 1) throw 0;",
    description: "WARNING: Shim behavior is non-conformant. Use with extreme caution in legacy engines."
  },

  ObjectDefineProperty: {
    // Doc Warning: "IE8 only works on DOM objects... silently fail to set writable/enumerable/configurable."
    // Doc Warning: "Getters/Setters silently fail on engines lacking defineGetter/defineSetter (all IE)."
    passes: "'use strict'; var o = {}; try { Object.defineProperty(o, \"a\", { value: 1, writable: false }); } catch(e) { throw 0; }",
    description: "WARNING: May throw on non-DOM objects (IE8) or silently ignore attributes (writable, enumerable, config) and accessors."
  },

  ObjectDefineProperties: {
    // Doc: "This uses the Object.defineProperty shim."
    passes: "'use strict'; var o = {}; try { Object.defineProperties(o, { a: { value: 1 } }); } catch(e) { throw 0; }",
    description: "WARNING: Inherits all limitations of Object.defineProperty shim."
  },

  // --- Object State Modification (Security) ---

  ObjectSeal: {
    // Doc: "Silently fails on all legacy engines."
    passes: "'use strict'; var o = { a: 1 }; Object.seal(o); /* In legacy, this does nothing but doesn't throw */",
    description: "Silent failure. Object remains extensible and configurable in legacy engines."
  },

  ObjectFreeze: {
    // Doc: "Silently fails on all legacy engines."
    passes: "'use strict'; var o = { a: 1 }; Object.freeze(o); /* In legacy, this does nothing */",
    description: "Silent failure. Object remains mutable in legacy engines."
  },

  ObjectPreventExtensions: {
    // Doc: "Silently fails on all legacy engines."
    passes: "'use strict'; var o = { a: 1 }; Object.preventExtensions(o); /* In legacy, this does nothing */",
    description: "Silent failure. Object remains extensible in legacy engines."
  }
};

module.exports = api;



},{}],3:[function(require,module,exports){
// -interface.js - 导出所有  特性键名
var Supports = function() {
  // Array
  this.ArrayIsArray = 'ArrayIsArray';
  this.ArrayEvery = 'ArrayEvery';
  this.ArrayFilter = 'ArrayFilter';
  this.ArrayForEach = 'ArrayForEach';
  this.ArrayIndexOf = 'ArrayIndexOf';
  this.ArrayLastIndexOf = 'ArrayLastIndexOf';
  this.ArrayMap = 'ArrayMap';
  this.ArraySome = 'ArraySome';
  this.ArrayReduce = 'ArrayReduce';
  this.ArrayReduceRight = 'ArrayReduceRight';

  // Object
  this.ObjectKeys = 'ObjectKeys';

  // Function
  this.FunctionBind = 'FunctionBind';

  // String
  this.StringTrim = 'StringTrim';

  // Date
  this.DateNow = 'DateNow';
  this.DateToISOString = 'DateToISOString';
  this.DateToJSON = 'DateToJSON';
  this.DateParseISO = 'DateParseISO';

  // Number
  this.NumberToFixed = 'NumberToFixed';
  this.NumberToPrecision = 'NumberToPrecision';
  this.NumberToExponential = 'NumberToExponential';

  // Global
  this.ParseInt = 'ParseInt';
  this.ParseFloat = 'ParseFloat';

  // Error
  this.ErrorToString = 'ErrorToString';
  this.ErrorName = 'ErrorName';
  this.ErrorMessage = 'ErrorMessage';

  // RegExp
  this.RegExpToString = 'RegExpToString';


  // --- Object Creation & Prototype (Shams) ---

  // Doc: "For the case of simply 'begetting' an object... should work fine."
  // Warning: "The second argument... will probably fail either silently or with extreme prejudice."
  this.ObjectCreate = 'ObjectCreate';

  // Doc: "Returns 'undefined' in some cases... uses __proto__... or constructor.prototype"
  // Warning: "If your object was created like this [Foo.prototype = {}], it won't work."
  this.ObjectGetPrototypeOf = 'ObjectGetPrototypeOf';

  // Doc: "This method uses Object.keys, so it will not be accurate on legacy engines."
  this.ObjectGetOwnPropertyNames = 'ObjectGetOwnPropertyNames';

  // --- Property Descriptors (Shams) ---

  // Warning: "Behavior does not conform to ES5... should probably not be used."
  this.ObjectGetOwnPropertyDescriptor = 'ObjectGetOwnPropertyDescriptor';

  // Warning: "IE8 only works on DOM objects... silently fail to set attributes/accessors."
  this.ObjectDefineProperty = 'ObjectDefineProperty';

  // Doc: "This uses the Object.defineProperty shim."
  this.ObjectDefineProperties = 'ObjectDefineProperties';

  // --- Object State Inspection ---

  // Doc: "Returns 'false' in all legacy engines... conveniently guaranteed to be accurate."
  this.ObjectIsSealed = 'ObjectIsSealed';

  // Doc: "Returns 'false' in all legacy engines... conveniently guaranteed to be accurate."
  this.ObjectIsFrozen = 'ObjectIsFrozen';

  // Doc: "Works like a charm..."
  this.ObjectIsExtensible = 'ObjectIsExtensible';

  // --- Object State Modification (Security Shams) ---

  // Doc: "Silently fails on all legacy engines."
  this.ObjectSeal = 'ObjectSeal';

  // Doc: "Silently fails on all legacy engines."
  this.ObjectFreeze = 'ObjectFreeze';

  // Doc: "Silently fails on all legacy engines."
  this.ObjectPreventExtensions = 'ObjectPreventExtensions';
};

module.exports = new Supports();



},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
var api = require('./api');
var supports = {};
supports._api = api;

function runTest(key){
  if (key === 'class') key = 'classes';
  if (supports._api[key].dependencies) {
    for(var i = 0; i < supports._api[key].dependencies.length; i++){
      var depKey = supports._api[key].dependencies[i];
      if (runTest(depKey) === false) return false;
    }
  }

  if (supports._api[key].passes) {
    return tryPassFail(supports._api[key].passes);
  } else if (supports._api[key].fails) {
    return !tryPassFail(supports._api[key].fails);
  } else if (supports._api[key].is) {
    return tryReturn(supports._api[key].is);
  } else if (supports._api[key].not) {
    return !tryReturn(supports._api[key].not);
  }
}

function tryPassFail(code) {
  try {
    runIt(code);
    return true;
  }
  catch (err) {
    return false;
  }
}

function tryReturn(code) {
  try {
    return runIt(code);
  }
  catch (err) {
    return false;
  }
}

function runIt(code) {
  return (new Function(code))();
}

module.exports =  runTest;

},{"./api":2}],6:[function(require,module,exports){
// test-es.js
var trace = fl.trace;

// 引入 index.js（自动运行所有 ES 特性测试）
var supports = require('./index.js');

// 可选：引入中文映射
var mapper;
try {
    mapper = require('./lib/mapper');
} catch (err) {
    console.warn('⚠️ 未找到 ./lib/mapper.js，跳过中文显示');
    mapper = {};
}

// 构建输出内容
var output = '=== ECMAScript 特性支持情况 ===\n';
for (var feature in supports) {
    if (feature === '_api') continue;
    // output += `${feature}: ${supports[feature] ? '✅ 支持' : '❌ 不支持'}\n`;
    output += feature + ': ' + (supports[feature] ? '✅ 支持' : '❌ 不支持') + '\n';
}

output += '\n=== 中文版支持情况 ===\n';
for (var key in supports) {
    if (key === '_api') continue;
    // var name = mapper[key]?.cn || key;
    var name = (mapper[key] != null && mapper[key].cn) || key;
    // output += `${name}: ${supports[key] ? '✅' : '❌'}\n`;
    output += name + ': ' + (supports[key] ? '✅' : '❌') + '\n';
}

// 打印到控制台
trace(output);

// // 写入文件（例如 es-support-report.txt）
// var reportPath = path.join(__dirname, 'es-support-report.txt');
// fs.writeFileSync(reportPath, output, 'utf8');
// H:\project\js\AnJsflScript-ts\packages\es-checker
/**
 * 获取当前 文件夹 路径
 */
function getcwd() {
    var scriptURI = fl.scriptURI;
    // 斜杠符号的位置
    var lastSlashIndex = scriptURI.lastIndexOf("/");
    // 获取脚本文件所在的文件夹路径
    var folderPath = scriptURI.substring(0, lastSlashIndex);
    return folderPath;
}

var reportPath = getcwd() + "/fl-support-report.txt";
FLfile.write(reportPath,output,"append");

// trace(`✅ 报告已保存到: ${reportPath}`);
trace("✅ 报告已保存到: "+reportPath);
},{"./index.js":1,"./lib/mapper":4}]},{},[6]);
