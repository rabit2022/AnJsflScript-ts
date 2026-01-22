// webpack.test.js
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const glob = require('glob'); // 👈 用于匹配 test 下所有 .ts 文件


// 使用 ** 递归，并打印调试信息
const tsFiles = glob.sync('test/**/*.ts', {
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
                            configFile: 'tsconfig.buildtest.json',
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

    // 关键：JSFL 无外部依赖
    externals: [],
    target: ['web', 'es5'],
    stats: {
        modules: false,
        chunks: false
    }
};