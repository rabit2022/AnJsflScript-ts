require(["json5"], function(JSON5) {


    const config = JSON5.parse("{\n" +
        "  // 这是一个 JSON5 示例文件\n" +
        "  name: 'MyApp',               // 键名可不加引号，字符串可用单引号\n" +
        "  version: \"1.0.0\",            // 双引号也合法\n" +
        "  author: {\n" +
        "    name: \"张三\",\n" +
        "    email: 'zhangsan@example.com', // 单引号 OK\n" +
        "  },\n" +
        "  dependencies: {\n" +
        "    lodash: \"^4.17.21\",\n" +
        "    \"ansi-colors\": \"~4.1.0\",   // 特殊字符键仍需引号\n" +
        "  },\n" +
        "  buildOptions: {\n" +
        "    minify: true,\n" +
        "    sourceMap: false,\n" +
        "  },\n" +
        "  ports: [8080, 3000,],          // 允许尾随逗号\n" +
        "  enabled: true,\n" +
        "  // 注释可以出现在任何地方\n" +
        "  timeout: 5000,               // 数字支持下划线分隔（部分实现支持）\n" +
        "  // NaN 和 Infinity 在严格 JSON 中非法，但 JSON5 允许（注意：并非所有解析器都支持）\n" +
        "  // maxRetries: Infinity,\n" +
        "}");
    console.log(config);

});
