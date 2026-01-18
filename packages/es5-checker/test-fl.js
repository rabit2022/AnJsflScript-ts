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