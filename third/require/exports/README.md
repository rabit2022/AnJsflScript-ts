# TypeScript 编译与模块兼容性说明 (AMD/RequireJS 环境)

本文档说明了在将 TypeScript 编译为 JavaScript 并运行于 **AMD (Asynchronous Module Definition)** 或 **RequireJS**
环境时，可能遇到的三个关键问题及其解决方案。

---

## 1. 模块参数冲突：`exports` 未定义问题

### 📝 问题描述

当 TypeScript 编译器 (`tsc`) 将代码编译为 AMD 格式 (`module: "amd"`) 时，生成的代码通常如下：

```javascript
// TypeScript 编译后的输出
define(["require", "exports", "SAT"], function (require, exports, SAT_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});
    // ... 业务逻辑
});
```

**修改为消费模块 (可能报错):**

```javascript
require(["require", "exports", "SAT"], function (require, exports, SAT_1) {
    // 如果环境未注入 exports，此处报错
    Object.defineProperty(exports, "__esModule", {value: true});
    // ... 业务逻辑
});
```

全局或局部的 `exports` 对象可能未被正确注入，导致 `exports` 为 `undefined`，进而引发 `Object.defineProperty` 报错。

### ✅ 解决方案

在调用 `require` 时，**避免直接使用保留字 `exports` 作为回调参数名**，改用空模块（如 `_exports`），并在内部逻辑中使用该模块。

**修改后 (推荐):**

```javascript
// 将 'exports' 重命名为 '_exports'
require(["require", "_exports", "SAT"], function (require, _exports, SAT_1) {
    "use strict";
    // 使用 _exports 确保对象存在且可操作
    Object.defineProperty(_exports, "__esModule", {value: true});

    // 后续所有导出操作均使用 _exports
    _exports.someFunction = function () { // ...
    };
});
```

> **注意**: 如果你是通过构建工具自动处理，可能需要配置包装器 (Wrapper) 或插件来自动重命名此参数。
> 如果是手动编写引导代码，不会用到exports的兼容名字。

---

## 2. 空模块与 Node.js 内置模块处理

### 📝 问题描述

在 AMD 环境中引用 Node.js 内置模块（如 `fs`, `path`, `http`）或空模块时，如果环境未提供相应的 shim (垫片)，加载会失败或返回
`undefined`。

### ✅ 解决方案

- **Node.js 内置模块**:
    - 如果在浏览器端运行，必须使用构建工具（如 Webpack, Rollup, Vite）进行 Polyfill 或排除。
    - 如果在 Node.js + RequireJS 环境，确保 `requirejs-config` 中正确映射了这些模块路径，或者使用 `empty:`
      前缀显式声明空模块以避免加载错误。

- **空模块配置示例 (`require.config.js`)**:
  ```javascript
  require.config({
      paths: {
          // 显式声明某些模块为空，防止加载器尝试 fetch 不存在的文件
          "fs": "empty:",
          "net": "empty:",
          "tls": "empty:"
      }
  });
  ```


- **空模块配置示例 (`webpack.config.js`)**:
  ```javascript
  module.exports = {
      externals: [ {"path": "_exports"} ]
  }
  ```

---

## 3. TypeScript 辅助函数 (`importHelpers`) 的注入问题

### 📝 问题描述

即使在 `tsconfig.json` 中设置了 `"importHelpers": true` (意图是从 `tslib` 导入辅助函数)，在某些 AMD 打包场景下，编译器仍可能将辅助函数（如
`__generator`, `__values`, `__awaiter`）**内联**到每个文件中，而不是通过 `define(["tslib"], ...)` 动态引入。

这会导致：

1. 代码体积冗余（每个文件都包含一份辅助代码）。
2. 全局污染或作用域隔离问题。

生成的冗余代码示例：

```javascript
"use strict";
// 即使开启了 importHelpers，这里依然出现了内联代码
var __generator = (this && this.__generator) || function (thisArg, body) { //...
};
var __values = (this && this.__values) || function (o) { //...
};
```

### ✅ 解决方案

要强制 TypeScript 正确使用外部 `tslib` 而不是内联代码，请检查以下配置：

1. **安装 tslib**:
   ```bash
   npm install tslib
   ```

2. **配置 `tsconfig.json`**:
   确保以下选项设置正确：
   ```json5
   {
     "compilerOptions": {
       "module": "amd",             // 必须是 amd 或其他非 ESNext 格式
       "importHelpers": true,       // 关键：启用外部导入
       "noEmitHelpers": false,      // 确保此项未设置为 true
       "moduleResolution": "node"   // 或 "classic"，取决于你的项目结构
     }
   }
   ```

3. **配置 RequireJS 路径**:
   确保加载器知道 `tslib` 的位置：
   ```javascript
   require.config({
       paths: {
           "tslib": "third/types/tslib/tslib"
       }
   });
   ```

4. **验证输出**:
   重新编译后，文件头部应变为：

    ```javascript
    define(["require", "exports", "tslib", "_exports"], function (require, exports, tslib_1) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {value: true});
    // ...
    });
    ```

---

## 总结清单

| 问题点             | 关键检查项                 | 修复动作                                |
|:----------------|:----------------------|:------------------------------------|
| **exports 未定义** | 回调参数名是否为 `exports`?   | 改为 `_exports` 或其他别名。                |
| **内置模块缺失**      | 是否引用了 `fs`, `path` 等? | 在 config 中设为 `empty:` 或添加 Polyfill。 |
| **辅助函数内联**      | `importHelpers` 是否生效? | 安装 `tslib` 并配置 RequireJS `paths`。   |

通过以上调整，可以确保 TypeScript 编译后的代码在 AMD/RequireJS 环境中稳定运行。