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


