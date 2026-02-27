// webpack.config.js
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const fs = require("fs");

// region MODULE_NAME
const MODULE_NAME = "一键魔化";
// endregion MODULE_NAME

// 👇 新增：用于替换 define -> require
class ReplaceDefineWithRequire {
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      "ReplaceDefineWithRequire",
      (compilation, callback) => {
        for (const filename in compilation.assets) {
          if (filename.endsWith(".jsfl")) {
            const asset = compilation.assets[filename];
            let code = asset.source();

            // ✅ 只替换文件开头的 define（最安全）
            code = code.replace(/^define\(/, "require(");

            // 更新 asset
            compilation.assets[filename] = {
              source: () => code,
              size: () => code.length,
            };
          }
        }
        callback();
      },
    );
  }
}

/**
 * 扫描指定目录下的所有 .ts 文件（不递归子目录），生成 Webpack/Vite 等构建工具的 entry 对象
 * @param {string} dirPath - 要扫描的目录路径（相对于项目根目录）
 * @param {string} [baseDir='src'] - 用于构造 entry 值中的相对路径前缀（可选）
 * @returns {Object} entry 对象，格式: { fileName: './baseDir/dir/fileName.ts' }
 */
function getTsEntries(dirPath, baseDir = "src") {
  const absDir = path.resolve(__dirname, dirPath);
  const entry = {};

  if (!fs.existsSync(absDir)) {
    console.warn(`[getTsEntries] 目录不存在: ${absDir}`);
    return entry;
  }

  const files = fs.readdirSync(absDir);
  for (const file of files) {
    const fullPath = path.join(absDir, file);
    // 确保是文件（不是目录）且以 .ts 结尾
    if (file.endsWith(".ts") && fs.statSync(fullPath).isFile()) {
      const name = path.basename(file, ".ts"); // 移除 .ts 后缀
      // 构造 entry 值，如 './src/out/index.ts'
      const relativePath = path.join(
        baseDir,
        path.relative(path.resolve(__dirname, baseDir), fullPath),
      );
      entry[name] = `./${path.normalize(relativePath).replace(/\\/g, "/")}`;
    }
  }

  return entry;
}

module.exports = {
  mode: "production",
  // entry: './src/index.ts', // 入口文件

  entry: getTsEntries("src/out"), // 自动扫描 src/out 下所有 .ts

  output: {
    path: path.resolve(__dirname, "out"),
    filename: "[name].jsfl", // [name] 对应 entry 中的 key

    // filename: MODULE_NAME + '.jsfl', // 输出为 .jsfl 文件
    // library: MODULE_NAME,  // 暴露为全局变量 Validation（可选）
    libraryTarget: "amd", // 使用 var 暴露（适合 JSFL）
    clean: true, // 每次构建清空 dist

    globalObject: "this", // 👈 关键！告诉 Webpack 使用 `this` 而不是 `self`/`window`
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.build.json", // 使用专用配置
              // 👇 关键：关闭 transpileOnly，启用完整类型检查
              transpileOnly: false,
              // 或者使用 happyPackMode: false（旧版）
              compilerOptions: {
                declaration: false,
                sourceMap: false,
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 5, // 降级到 ES5
          compress: {
            drop_console: false, // JSFL 可能用 fl.trace，不要删 console
            keep_fnames: true,
          },
          mangle: false, // 避免混淆函数名（JSFL 调试需要）
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
  // 关键：不打包任何外部依赖（JSFL 无 npm）
  externals: [
    { path: "path-browserify" },
    // region EXCLUDE_MODULE_NAME
    "store-js", "lodash", "linq", "oxide.ts", "requirejs", "AnJsflScript-ts", "es7-shim", "typedarray", "symbol-es6", "intl", "harmony-reflect", "es6-promise", "es6-collections", "json5", "json3", "util", "path-browserify", "eventemitter3", "seedrandom", "random-js", "chance", "stackframe", "error-stack-parser", "progress", "loglevel", "cli-table3", "chroma-js", "@third/luxon", "luxon", "_exports", "es6-sham", "es6-shim", "es5-sham", "es5-shim", "@third/universal-cookie", "@polyfill/cookie", "Tips", "@xjsfl/UI", "@xjsfl/super", "@xjsfl/Selector", "@xjsfl/Events", "Context", "@xjsfl/Constants", "@xjafl/Collection", "@polyfills/symbol-dispose", "overload-js", "@nodejs/__filename", "url", "process", "fs", "assert", "@dom/setTimeout", "console.table", "console.stack", "console", "@anjsfl-ts/EditSession", "@anjsfl/validation", "@anjsfl/sat", "@anjsfl/random", "@anjsfl/parser", "@anjsfl/more-element", "@anjsfl/Context", "@xjsfl/XUL", "@xjsfl/XUL/XML", "@xjsfl/XUL/XUL", "@xjsfl/XUL/XULControl", "@xjsfl/XUL/XULEvent", "@xjsfl/XUL/Utils", "@xjsfl/XUL/xjsfl",
    // endregion EXCLUDE_MODULE_NAME
  ],
  // 禁用 Node.js 注入
  target: ["web", "es5"], // 实际上 JSFL 不是 web，但这样可禁用 node polyfill
  stats: {
    modules: false,
    chunks: false,
  },

  // 👇 注册自定义插件
  plugins: [new ReplaceDefineWithRequire()],
};
