// es5-api.js - 定义 ES5 特性测试用例（兼容 runtest.js）
var api = {
  // Array
  es5ArrayIsArray: { is: "return 'isArray' in Array;" },
  es5ArrayEvery: { is: "return 'every' in Array.prototype;" },
  es5ArrayFilter: { is: "return 'filter' in Array.prototype;" },
  es5ArrayForEach: { is: "return 'forEach' in Array.prototype;" },
  es5ArrayIndexOf: { is: "return 'indexOf' in Array.prototype;" },
  es5ArrayLastIndexOf: { is: "return 'lastIndexOf' in Array.prototype;" },
  es5ArrayMap: { is: "return 'map' in Array.prototype;" },
  es5ArraySome: { is: "return 'some' in Array.prototype;" },
  es5ArrayReduce: { is: "return 'reduce' in Array.prototype;" },
  es5ArrayReduceRight: { is: "return 'reduceRight' in Array.prototype;" },

  // Object
  es5ObjectKeys: { is: "return 'keys' in Object;" },

  // Function
  es5FunctionBind: { is: "return 'bind' in Function.prototype;" },

  // String
  es5StringTrim: { is: "return 'trim' in String.prototype;" },

  // Date
  es5DateNow: { is: "return 'now' in Date;" },
  es5DateToISOString: { is: "return 'toISOString' in Date.prototype;" },
  es5DateToJSON: { is: "return 'toJSON' in Date.prototype;" },
  es5DateParseISO: {
    passes: "(function() { var d = Date.parse('2012-04-23T18:25:43.511Z'); return !isNaN(d) && d > 0; })()"
  },

  // Number
  es5NumberToFixed: { is: "return 'toFixed' in Number.prototype;" },
  es5NumberToPrecision: { is: "return 'toPrecision' in Number.prototype;" },
  es5NumberToExponential: { is: "return 'toExponential' in Number.prototype;" },

  // Global
  es5ParseInt: { is: "return 'parseInt' in global;" },
  es5ParseFloat: { is: "return 'parseFloat' in global;" },

  // Error
  es5ErrorToString: { is: "return 'toString' in Error.prototype;" },
  es5ErrorName: { is: "return 'name' in Error.prototype;" },
  es5ErrorMessage: { is: "return 'message' in Error.prototype;" },

  // RegExp
  es5RegExpToString: { is: "return 'toString' in RegExp.prototype;" }
};

module.exports = api;