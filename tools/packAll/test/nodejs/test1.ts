/*

npx browserify ./src/entry.js -o out/packAll.js
npx babel out/packAll.js --out-file out/packAll.jsfl

// webpack
// npx babel out/packAll.js --out-file out/packAll.jsfl
// node ./tools/iife/wrap-iife.js

pnpm install @formatjs/intl-getcanonicallocales @formatjs/intl-datetimeformat @formatjs/intl-numberformat @formatjs/intl-listformat @formatjs/intl-relativetimeformat @formatjs/intl-locale

 */

// @ts-nocheck
const globalThis = require("globalthis")();


globalThis.Intl = Intl;


// ==============================
// 1. 加载核心 Polyfill 构造函数
// ==============================
// 这些 require 会被打包工具提取，但它们的执行顺序由依赖关系决定。
// 幸运的是，这些数据文件通常不依赖这些构造函数文件，所以我们需要手动控制“注册”时机。
const {getCanonicalLocales} = require('@formatjs/intl-getcanonicallocales');
const {DateTimeFormat} = require('@formatjs/intl-datetimeformat');
const {NumberFormat} = require('@formatjs/intl-numberformat');
const ListFormat = require('@formatjs/intl-listformat').default;
const RelativeTimeFormat = require('@formatjs/intl-relativetimeformat').default;
const Locale = require('@formatjs/intl-locale').default;

// ==============================
// 2. 挂载到全局 Intl
// ==============================
// 这一步必须在使用任何功能之前完成
if (!globalThis.Intl.getCanonicalLocales) {
    globalThis.Intl.getCanonicalLocales = getCanonicalLocales;
}
if (!globalThis.Intl.DateTimeFormat) {
    globalThis.Intl.DateTimeFormat = DateTimeFormat;
}
if (!globalThis.Intl.NumberFormat) {
    globalThis.Intl.NumberFormat = NumberFormat;
}

if (!globalThis.Intl.ListFormat) {

    globalThis.Intl.ListFormat = ListFormat;
}
if (!globalThis.Intl.RelativeTimeFormat) {

    globalThis.Intl.RelativeTimeFormat = RelativeTimeFormat;
}
if (!globalThis.Intl.Locale) {

    globalThis.Intl.Locale = Locale;
}

// ==============================
// 3. 定义数据加载函数 (关键步骤！)
// ==============================
// 不要直接在顶层 require 数据！把它们放在这个函数里。
// 这样无论打包工具如何排序代码，这个函数体内的代码只有在被调用时才会执行。
function loadLocaleData() {
    // DateTimeFormat Data
    require('@formatjs/intl-datetimeformat/locale-data/en.js');
    require('@formatjs/intl-datetimeformat/locale-data/zh.js');
    // 如果有更多语言，继续添加...

    // NumberFormat Data
    require('@formatjs/intl-numberformat/locale-data/en.js');
    require('@formatjs/intl-numberformat/locale-data/zh.js');

    // ListFormat Data
    require('@formatjs/intl-listformat/locale-data/en.js');
    require('@formatjs/intl-listformat/locale-data/zh.js');

    // RelativeTimeFormat Data
    require('@formatjs/intl-relativetimeformat/locale-data/en.js');
    require('@formatjs/intl-relativetimeformat/locale-data/zh.js');

    // Locale Data (如果需要)
    // require('@formatjs/intl-locale-data/en.js');
}

// ==============================
// 4. 立即执行数据加载
// ==============================
// 此时，步骤 2 已经 100% 完成，Intl 对象上已经有了构造函数。
// 现在调用函数，数据文件中的 side-effect 代码会安全地注册到 Intl 构造函数上。
loadLocaleData();


// ==============================
// 5. 导出 (可选)
// ==============================
module.exports = globalThis.Intl;

// 调试信息 (打包后可删除)
console.log('Intl Polyfill loaded successfully:', Object.keys(globalThis.Intl));