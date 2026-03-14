这是一个非常经典的 JavaScript 作用域和严格模式（Strict Mode）的问题。

### 核心原因

**`new Function()` 创建的函数始终在非严格模式下执行，且拥有独立的全局作用域，无法访问外部代码的严格模式上下文或局部变量。**

具体原因拆解如下：

1.  **`new Function` 的特性**：
    当你使用 `new Function(code)` 时，JavaScript 引擎会将 `code` 字符串编译为一个全新的函数。这个函数**不会继承**调用它的外部作用域的变量（闭包特性不适用于 `new Function`），它只能访问**全局作用域**。

2.  **严格模式的隔离**：
    *   在你的主代码中，`'use strict';` 开启了严格模式，所以 `Symbol` 是定义的（在现代环境中 `Symbol` 是全局对象的一部分，但在严格模式下行为更符合预期）。
    *   然而，传入 `new Function` 的字符串虽然开头写了 `'use strict';`，但这行代码在 `new Function` 内部生效时，该函数体内的环境是一个**全新的执行上下文**。
    *   **关键点**：在某些旧的环境、特定的沙箱环境、或者如果全局环境被污染/修改过，`new Function` 执行时可能无法正确获取到全局的 `Symbol` 构造函数，或者更常见的情况是：**你的代码逻辑中，`'use strict'` 在 `new Function` 内部并没有像预期那样让 `Symbol` 变得“未定义”，报错 `Symbol is not defined` 通常意味着该执行环境的全局对象上根本没有 `Symbol`。**

    **但在现代浏览器（Chrome, Firefox, Edge）和 Node.js 中，`Symbol` 是全局内置对象。** 如果你在現代環境中遇到 `Symbol is not defined`，最可能的原因是：

    **`new Function` 生成的代码在某些特定受限环境（如某些旧版 WebView、特定的沙箱、或者 babel 转译后的环境）中，无法访问到全局的 `Symbol`。**

    **更正与深度分析（针对最常见情况）：**
    实际上，在标准的现代 JS 引擎中，即使是在 `new Function` 中，`Symbol` 也应该是存在的。如果你的代码报 `Symbol is not defined`，极有可能是以下两种情况之一：

    *   **情况 A：环境不支持 ES6** (例如非常老的 IE 或未开启 ES6 支持的旧 Node 版本)。`Symbol` 是 ES6 引入的。
    *   **情况 B (最可能)**：你看到的报错信息可能有误导，或者代码运行在一个**没有全局 `Symbol`  polyfill 且原生不支持**的环境中。

    **但是，还有一个关于 `'use strict'` 的关键误区需要澄清：**

    如果在主脚本中定义了 `var a = Symbol('b')`，而在 `new Function` 中尝试使用 `a`，那会报错 `a is not defined`，因为 `new Function` 看不到外部的 `var a`。

    **针对你提供的具体报错 `Symbol is not defined`：**
    这说明在 `new Function` 执行的那个瞬间，其作用域链顶端的全局对象上找不到 `Symbol`。

    **为什么主代码正常，`new Function` 里报错？**
    这通常发生在以下场景：
    1.  **代码被包裹在模块或特定闭包中**：如果外层代码通过某种方式（如 Babel 编译、Webpack 包装）模拟了 `Symbol` 或者引入了 polyfill，使得外层能访问到 `Symbol`。但 `new Function` 绕过这些包装，直接指向原生的全局对象（window/global），而原生环境可能较老不支持 `Symbol`。
    2.  **严格模式的影响（极少见）**：在某些极其特殊的实现中，严格模式可能会改变全局对象的属性枚举或访问方式，但这通常不会导致内置对象消失。

    **最合理的解释（基于常见开发场景）：**
    你的运行环境（浏览器或 Node 版本）**原生不支持 `Symbol`**，而你外层代码之所以能运行，是因为使用了 **Babel** 或其他转译器，它们在文件顶部自动插入了 `Symbol` 的 polyfill 或者将 `Symbol` 转换为了其他形式。

    但是，`new Function` **会跳过所有转译器的静态分析和注入**。它直接执行原始字符串。因此：
    *   外层代码：经过 Babel 处理 -> `Symbol` 被 polyfill 定义 -> 运行正常。
    *   `new Function` 内部：直接执行字符串 -> 没有 Babel 注入的 polyfill -> 原生环境无 `Symbol` -> **报错**。

### 验证与解决方案

#### 1. 验证环境
检查你的 `Symbol` 是否来自 polyfill。在主代码中运行：
```javascript
console.log(Symbol.toString()); 
// 如果是 "[object Symbol]" 说明是原生的
// 如果是其他奇怪的值或者依赖外部库，可能是 polyfill
```
或者检查 `window.Symbol` (浏览器) 或 `global.Symbol` (Node) 是否存在。

#### 2. 解决方案

如果你必须在 `new Function` 中使用 `Symbol`，你有以下几种选择：

**方案 A：显式传递依赖（推荐）**
既然 `new Function` 无法访问外部变量，你可以将 `Symbol` 作为参数传递给生成的函数（虽然 `new Function` 构造时定义参数比较麻烦，通常用 `Function` 构造函数的最后几个参数作为新函数的参数）。

```javascript
// 修改 runIt 函数，允许传入上下文或依赖
function runIt(code, context) {
    // 创建一个接受 context 参数的函数
    const func = new Function('context', `
        'use strict';
        // 从 context 中解构需要的全局变量，或者直接挂载到 this/window (不推荐污染全局)
        // 这里我们假设把 Symbol 传进去重命名
        const Symbol = context.Symbol; 
        ${code}
    `);
    return func({ Symbol: Symbol }); // 传入当前的 Symbol
}

var codeStr = "var a = Symbol('b'); console.log(a); return a;";
runIt(codeStr, { Symbol: Symbol }); 
```

**方案 B：确保环境原生支持**
确保你的运行环境（Node.js 版本 > 0.12, 现代浏览器）原生支持 ES6 `Symbol`，并且没有奇怪的构建工具干扰。如果是 Node.js，尝试升级版本。

**方案 C：避免使用 `new Function`**
`new Function` 性能较差且有安全风险（类似 `eval`）。如果可能，尽量使用普通的函数定义或模块系统来动态执行逻辑。

### 总结
报错 `Symbol is not defined` 的根本原因是：**`new Function` 创建了一个隔离的作用域，它无法访问外层代码中通过 Polyfill 或构建工具注入的 `Symbol` 定义，只能依赖运行环境的原生全局对象。如果原生环境不支持 ES6，就会报错。**


