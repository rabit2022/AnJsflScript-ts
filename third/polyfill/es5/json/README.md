这四个库虽然都位于 `json` 目录下，但它们解决的**问题完全不同**：

### 1. 核心定位对比

| 库名称 | 核心定位 | 主要解决的问题 | 兼容性/标准 |
| :--- | :--- | :--- | :--- |
| **JSON3** | **原生 JSON 的 Polyfill** | 在旧浏览器（如 IE7/8）中提供符合 ECMA-262 标准的 `JSON.parse` 和 `JSON.stringify`。 | 严格遵循原生 JSON 标准，无扩展。 |
| **JSON5** | **人类可读的 JSON 扩展** | 允许编写更像 JavaScript 对象字面量的配置文件的格式（支持注释、尾随逗号等）。 | 超集了 JSON 标准，解析结果与原生 JSON 一致。 |
| **Flatted** | **循环引用序列化** | 解决原生 JSON 无法处理**循环引用**（Circular References）的问题。 | 输出格式是紧凑的单行字符串，非标准 JSON。 |
| **SuperJSON** | **复杂类型无损序列化** | 解决原生 JSON 丢失**特殊数据类型**（如 Date, Map, Set, BigInt, undefined, Infinity 等）的问题。 | 输出格式是带有元数据的 JSON 对象，可完全还原。 |

---

### 2. 详细功能区别

#### 🟢 JSON3 (`json3`)

* **用途**：**兼容性补丁**。
* **场景**：当你需要支持非常古老的浏览器（IE < 9），而这些浏览器没有内置 `JSON` 对象或实现有 Bug 时使用。
* **特点**：
    * 它**不增加**任何新功能。
    * 它的行为与现代浏览器的原生 `JSON` 完全一致。
    * 在现代开发环境（Node.js 或现代浏览器）中通常**不需要**使用它。
* **代码示例**：
  ```javascript
  // 用法和原生 JSON 一模一样
  JSON3.parse('{"a": 1}'); 
  JSON3.stringify({a: 1});
  ```

#### 🔵 JSON5 (`json5`)

* **用途**：**更友好的配置文件格式**。
* **场景**：编写 `.json5` 配置文件，允许开发者写注释、省略引号等。
* **特点**：
    * **支持注释** (`//` 和 `/* */`)。
    * **支持尾随逗号** (`[1, 2,]`)。
    * **键名可以不加引号** (`{ name: "test" }`)。
    * **支持单引号** (`'hello'`)。
    * **支持 NaN, Infinity, -Infinity**。
    * **注意**：它主要用于**解析**配置，序列化后通常还是为了让人读，而不是为了网络传输（因为接收方也必须用 JSON5 解析器）。
* **代码示例**：
  ```javascript
  // 合法的 JSON5 内容
  {
    // 这是注释
    name: 'Project', // 单引号，无键引号
    version: 1.0,    // 尾随逗号允许
  }
  ```

#### 🟠 Flatted (`flatted`)

* **用途**：**处理循环引用**。
* **场景**：当你的对象结构中存在 `a.b = a` 这种自我引用，或者两个对象互相引用时，原生 `JSON.stringify` 会报错。
* **特点**：
    * 算法由 Andrea Giammarchi 开发，比 `circular-json` 更高效且生成的字符串更短。
    * 生成的字符串**不是**标准的 JSON 格式（虽然看起来像），必须用 `Flatted.parse` 解析。
    * **不保留**特殊类型（如 Date 会变成字符串，Map 会变成普通对象），只解决“崩掉”的问题。
* **代码示例**：
  ```javascript
  const a = {};
  a.self = a; // 循环引用
  
  // JSON.stringify(a) -> 报错
  const str = Flatted.stringify(a); // 成功: "[["1"],"0"]" (示意)
  const obj = Flatted.parse(str);   // 还原循环引用
  ```

#### 🟣 SuperJSON (`superjson`)

* **用途**：**全类型无损序列化**。
* **场景**：需要在客户端和服务端之间传输包含复杂类型的对象，且希望还原后类型不变（例如 Next.js 的 Server Components
  默认使用类似机制）。
* **特点**：
    * 支持 `Date`, `Map`, `Set`, `BigInt`, `RegExp`, `undefined`, `NaN`, `Infinity`, `Error`, `TypedArray` 等。
    * 通过添加元数据（metadata）来标记类型。
    * 输出是标准的 JSON 结构（对象套对象），但语义上扩展了。
* **代码示例**：
  ```javascript
  const data = {
    date: new Date(),
    map: new Map([['key', 'value']]),
    big: 123n
  };
  
  const str = SuperJSON.serialize(data); 
  // 输出类似: { json: {...}, meta: { values: { date: ['date'], ... } } }
  
  const restored = SuperJSON.deserialize(str); 
  // restored.date 依然是 Date 对象，restored.map 依然是 Map
  ```

### 总结

* **json3** 是为了**旧环境兼容**。
* **json5** 是为了**语法扩展**（配置友好）。
* **flatted** 是为了**防崩溃**（循环引用）。
* **superjson** 是为了**数据完整性**（特殊类型还原）。

它们互不冲突，根据具体的业务场景选择使用即可。