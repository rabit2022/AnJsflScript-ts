/*

webpack
npx babel dist/Intl-formatjs.js --out-file dist/Intl-formatjs.jsfl
node wrap-iife.js

 */

// 确保全局 Intl 对象存在（必须放在最顶部！）
if (typeof global.Intl === 'undefined') {
    global.Intl = {};
}

// ==============================
// 1. 加载核心 polyfill 构造函数
// ==============================
const {getCanonicalLocales} = require('@formatjs/intl-getcanonicallocales');
const {DateTimeFormat} = require('@formatjs/intl-datetimeformat');
const {NumberFormat} = require('@formatjs/intl-numberformat');
const ListFormat = require('@formatjs/intl-listformat').default;
const RelativeTimeFormat = require('@formatjs/intl-relativetimeformat').default;
const Locale = require('@formatjs/intl-locale').default;

// ==============================
// 2. 挂载到全局 Intl（此时 Intl 已存在）
// ==============================
if (!Intl.getCanonicalLocales) {
    Intl.getCanonicalLocales = getCanonicalLocales;
}
if (!Intl.DateTimeFormat) {
    Intl.DateTimeFormat = DateTimeFormat;
}
if (!Intl.NumberFormat) {
    Intl.NumberFormat = NumberFormat;
}
if (!Intl.ListFormat) {
    Intl.ListFormat = ListFormat;
}
if (!Intl.RelativeTimeFormat) {
    Intl.RelativeTimeFormat = RelativeTimeFormat;
}
if (!Intl.Locale) {
    Intl.Locale = Locale;
}

// ==============================
// 3. 加载并注册 locale 数据（必须在构造函数挂载之后！）
// ==============================

// DateTimeFormat
require('@formatjs/intl-datetimeformat/locale-data/en');
require('@formatjs/intl-datetimeformat/locale-data/zh');

// NumberFormat
require('@formatjs/intl-numberformat/locale-data/en');
require('@formatjs/intl-numberformat/locale-data/zh');

// ListFormat
require('@formatjs/intl-listformat/locale-data/en');
require('@formatjs/intl-listformat/locale-data/zh');

// RelativeTimeFormat
require('@formatjs/intl-relativetimeformat/locale-data/en');
require('@formatjs/intl-relativetimeformat/locale-data/zh');

// ==============================
// 4. 导出（可选）
// ==============================
module.exports = global.Intl;