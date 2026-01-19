// es5-interface.js - 导出所有 ES5 特性键名
var Supports = function() {
  // Array
  this.es5ArrayIsArray = 'es5ArrayIsArray';
  this.es5ArrayEvery = 'es5ArrayEvery';
  this.es5ArrayFilter = 'es5ArrayFilter';
  this.es5ArrayForEach = 'es5ArrayForEach';
  this.es5ArrayIndexOf = 'es5ArrayIndexOf';
  this.es5ArrayLastIndexOf = 'es5ArrayLastIndexOf';
  this.es5ArrayMap = 'es5ArrayMap';
  this.es5ArraySome = 'es5ArraySome';
  this.es5ArrayReduce = 'es5ArrayReduce';
  this.es5ArrayReduceRight = 'es5ArrayReduceRight';

  // Object
  this.es5ObjectKeys = 'es5ObjectKeys';

  // Function
  this.es5FunctionBind = 'es5FunctionBind';

  // String
  this.es5StringTrim = 'es5StringTrim';

  // Date
  this.es5DateNow = 'es5DateNow';
  this.es5DateToISOString = 'es5DateToISOString';
  this.es5DateToJSON = 'es5DateToJSON';
  this.es5DateParseISO = 'es5DateParseISO';

  // Number
  this.es5NumberToFixed = 'es5NumberToFixed';
  this.es5NumberToPrecision = 'es5NumberToPrecision';
  this.es5NumberToExponential = 'es5NumberToExponential';

  // Global
  this.es5ParseInt = 'es5ParseInt';
  this.es5ParseFloat = 'es5ParseFloat';

  // Error
  this.es5ErrorToString = 'es5ErrorToString';
  this.es5ErrorName = 'es5ErrorName';
  this.es5ErrorMessage = 'es5ErrorMessage';

  // RegExp
  this.es5RegExpToString = 'es5RegExpToString';
};

module.exports = new Supports();