const path = require('path-browserify');

const currentPath = 'H:/project/js/AnJsflScript-ts/packages/xjsfl/XUL/test/flash';

// 方法1: 使用 resolve
const parent1 = path.resolve(currentPath, '..');
console.log('resolve(..):', parent1);

// 方法2: 使用 join
const parent2 = path.join(currentPath, '..');
console.log('join(..):', parent2);

// 方法3: 获取上两级目录
const grandParent = path.join(currentPath, '..', '..');
console.log('上两级目录:', grandParent);
