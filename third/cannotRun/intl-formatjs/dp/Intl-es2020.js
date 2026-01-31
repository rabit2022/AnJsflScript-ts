// 1. Intl.RelativeTimeFormat
// 必须的基础 polyfill
import '@formatjs/intl-getcanonicallocales/polyfill';

// 相对时间格式化
import '@formatjs/intl-relativetimeformat/polyfill';

// 加载语言数据（按需）
import '@formatjs/intl-relativetimeformat/locale-data/en';    // 英语
import '@formatjs/intl-relativetimeformat/locale-data/zh';    // 中文


// 2. Intl.ListFormat
// 列表格式化
import '@formatjs/intl-listformat/polyfill';

// 加载语言数据
import '@formatjs/intl-listformat/locale-data/en';
import '@formatjs/intl-listformat/locale-data/zh';


// 3. Intl.DisplayNames
// 显示名称
import '@formatjs/intl-displaynames/polyfill';

// 加载语言数据
import '@formatjs/intl-displaynames/locale-data/en';
import '@formatjs/intl-displaynames/locale-data/zh';


// 4. Intl.Locale

// Locale 对象
import '@formatjs/intl-locale/polyfill';

// 不需要额外的语言数据


