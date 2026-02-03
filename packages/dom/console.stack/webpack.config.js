// webpack.config.js
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');


// region MODULE_NAME
const MODULE_NAME = "stack";
// endregion MODULE_NAME



module.exports = {
    mode: 'production',
    entry: './src/index.ts', // 入口文件
    output: {
        path: path.resolve(__dirname, 'out'),
        filename: MODULE_NAME + '.jsfl', // 输出为 .jsfl 文件
        library: MODULE_NAME,  // 暴露为全局变量 Validation（可选）
        libraryTarget: 'umd',   // 使用 var 暴露（适合 JSFL）
        clean: true ,            // 每次构建清空 dist

        globalObject: 'this', // 👈 关键！告诉 Webpack 使用 `this` 而不是 `self`/`window`
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
                            configFile: 'tsconfig.build.json', // 使用专用配置
                            // 👇 关键：关闭 transpileOnly，启用完整类型检查
                            transpileOnly: false,
                            // 或者使用 happyPackMode: false（旧版）
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
                    ecma: 5,           // 降级到 ES5
                    compress: {
                        drop_console: false, // JSFL 可能用 fl.trace，不要删 console
                        keep_fnames: true
                    },
                    mangle: false,     // 避免混淆函数名（JSFL 调试需要）
                    format: {
                        comments: false
                    }
                }
            })
        ]
    },
    // 关键：不打包任何外部依赖（JSFL 无 npm）
    externals: ['lodash','fs','console.table'],
    // 禁用 Node.js 注入
    target: ['web', 'es5'], // 实际上 JSFL 不是 web，但这样可禁用 node polyfill
    stats: {
        modules: false,
        chunks: false
    },
};