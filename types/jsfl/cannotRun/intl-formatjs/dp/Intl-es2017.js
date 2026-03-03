// 1. Intl.PluralRules 导入

// 必须的基础依赖
import '@formatjs/intl-getcanonicallocales/polyfill';

// PluralRules 核心
import '@formatjs/intl-pluralrules/polyfill';

// 加载语言数据（按需）
import '@formatjs/intl-pluralrules/locale-data/en';    // 英语
import '@formatjs/intl-pluralrules/locale-data/zh';    // 中文

// 2. Intl.getCanonicalLocales 导入

// 只需要这一个导入
import '@formatjs/intl-getcanonicallocales/polyfill';

// 不需要额外的语言数据
