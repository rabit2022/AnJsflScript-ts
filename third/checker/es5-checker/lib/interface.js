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


