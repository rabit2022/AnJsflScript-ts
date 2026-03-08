// webpack.test.js
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const glob = require('glob'); // 👈 用于匹配 test 下所有 .ts 文件




// 👇 新增：用于替换 define -> require
class ReplaceDefineWithRequire {
    apply(compiler) {
        compiler.hooks.emit.tapAsync('ReplaceDefineWithRequire', (compilation, callback) => {
            for (const filename in compilation.assets) {
                if (filename.endsWith('.jsfl')) {
                    const asset = compilation.assets[filename];
                    let code = asset.source();


                    // ✅ 只替换文件开头的 define（最安全）
                    code = code.replace(/^define\(/, 'require(');

                    // 更新 asset
                    compilation.assets[filename] = {
                        source: () => code,
                        size: () => code.length
                    };
                }
            }
            callback();
        });
    }
}


// 使用 ** 递归，并打印调试信息
const tsFiles = glob.sync('test/flash/ts/*.ts', {
    cwd: __dirname,      // 以项目根为基准
    absolute: true,      // 返回绝对路径
    ignore: ['**/node_modules/**']
});

// console.log('🔍 扫描目录:', path.resolve(__dirname, 'test'));
// console.log('📄 找到的 TS 文件:', tsFiles);

const testEntries = tsFiles.reduce((entries, filePath) => {
    const relativePath = path.relative(path.resolve(__dirname, 'test'), filePath);
    const name = relativePath.replace(/\.ts$/, '').replace(/\\/g, '/'); // 保留子目录结构
    entries[name] = filePath;
    return entries;
}, {});

console.log('🎯 入口对象:', testEntries);

module.exports = {
    mode: 'production',

    // 多入口：每个 test/*.ts 是一个入口
    entry: testEntries,

    output: {
        path: path.resolve(__dirname, 'test'), // 输出到 ./test/
        filename: '[name].jsfl',               // 保持与入口同名，如 foo.ts → foo.jsfl
        clean: false, // ❗不要清空 test 目录（否则会删掉你的 .ts 源文件！）
        // 移除 library 相关配置（不再作为库暴露）

        // 👇 关键：输出为 AMD 模块（RequireJS 可消费）
        library: {
            type: 'amd'
        }
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.test.json',
                            transpileOnly: false,
                            compilerOptions: {
                                declaration: false,
                                sourceMap: false
                            }
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    ecma: 5,
                    compress: {
                        drop_console: false, // 保留 fl.trace
                        keep_fnames: true
                    },
                    mangle: false, // 不混淆函数名（便于调试）
                    format: {
                        comments: false
                    }
                }
            })
        ]
    },


    // 关键：不打包任何外部依赖（JSFL 无 npm）
    externals: [
        {"path": "path-browserify"},
        // region EXCLUDE_MODULE_NAME
"lodash","linq","tslib","oxide.ts","requirejs","AnJsflScript-ts","micromatch","es8-shim","es7-shim","typedarray","symbol-es6","intl","harmony-reflect","es6-promise","es6-collections","json5","json3","@polyfill/symbol-dispose","jsbi","es10-shim","util","path-browserify","eventemitter3","seedrandom","random-js","chance","store-js","stackframe","error-stack-parser","progress","loglevel","cli-table3","chroma-js","@third/luxon","luxon","@third/date-fns","date-fns","_exports","es6-sham","es6-shim","@third/superjson","superjson","es5-sham","es5-shim","@third/fast-xml-parser","fast-xml-parser","@third/universal-cookie","@polyfill/cookie","atob","base-64","Hello2","@xjsfl/UI","@xjsfl/super","@xjsfl/Selector","@xjsfl/Events","Context","@xjsfl/Constants","@xjafl/Collection","overload-js","@nodejs/__filename","url","process","fs","child_process","assert","@dom/setTimeout","console.table","console.stack","console","@anjsfl-ts/Tips","@anjsfl-ts/EditSession","@anjsfl-ts/dev","@anjsfl/validation","@anjsfl/sat","@anjsfl/random","@anjsfl/parser","@anjsfl/more-element","@xjsfl/XUL","@xjsfl/XUL/XML","@xjsfl/XUL/XUL","@xjsfl/XUL/XULControl","@xjsfl/XUL/XULEvent","@xjsfl/XUL/Utils","@xjsfl/XUL/xjsfl",
// endregion EXCLUDE_MODULE_NAME

    ],

    target: ['web', 'es5'],
    stats: {
        modules: false,
        chunks: false
    },

    // 👇 注册自定义插件
    plugins: [
        new ReplaceDefineWithRequire()
    ]
};