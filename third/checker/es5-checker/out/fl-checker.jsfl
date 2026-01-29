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
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
// ====== ES5 特性中文映射 ======
var mapper ={}
mapper.es5ArrayIsArray = { cn: 'Array.isArray 方法' };
mapper.es5ArrayEvery = { cn: 'Array.prototype.every 方法' };
mapper.es5ArrayFilter = { cn: 'Array.prototype.filter 方法' };
mapper.es5ArrayForEach = { cn: 'Array.prototype.forEach 方法' };
mapper.es5ArrayIndexOf = { cn: 'Array.prototype.indexOf 方法' };
mapper.es5ArrayLastIndexOf = { cn: 'Array.prototype.lastIndexOf 方法' };
mapper.es5ArrayMap = { cn: 'Array.prototype.map 方法' };
mapper.es5ArraySome = { cn: 'Array.prototype.some 方法' };
mapper.es5ArrayReduce = { cn: 'Array.prototype.reduce 方法' };
mapper.es5ArrayReduceRight = { cn: 'Array.prototype.reduceRight 方法' };
mapper.es5ObjectKeys = { cn: 'Object.keys 方法' };
mapper.es5FunctionBind = { cn: 'Function.prototype.bind 方法' };
mapper.es5StringTrim = { cn: 'String.prototype.trim 方法' };
mapper.es5DateNow = { cn: 'Date.now 方法' };
mapper.es5DateToISOString = { cn: 'Date.prototype.toISOString 方法' };
mapper.es5DateToJSON = { cn: 'Date.prototype.toJSON 方法' };
mapper.es5DateParseISO = { cn: 'Date.parse 支持 ISO 8601 格式' };
mapper.es5NumberToFixed = { cn: 'Number.prototype.toFixed 方法' };
mapper.es5NumberToPrecision = { cn: 'Number.prototype.toPrecision 方法' };
mapper.es5NumberToExponential = { cn: 'Number.prototype.toExponential 方法' };
mapper.es5ParseInt = { cn: '全局 parseInt 函数' };
mapper.es5ParseFloat = { cn: '全局 parseFloat 函数' };
mapper.es5ErrorToString = { cn: 'Error.prototype.toString 方法' };
mapper.es5ErrorName = { cn: 'Error.prototype.name 属性' };
mapper.es5ErrorMessage = { cn: 'Error.prototype.message 属性' };
mapper.es5RegExpToString = { cn: 'RegExp.prototype.toString 方法' };

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
