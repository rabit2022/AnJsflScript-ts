// 这个文件由脚本 01.虾仁摇头\webpack.config.ts 自动生成，任何手动修改都将会被覆盖.

"use strict";
var path = require('path');
var TerserPlugin = require('terser-webpack-plugin');
var MODULE_NAME = "01.虾仁摇头";
module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'out'),
        filename: MODULE_NAME + '.jsfl',
        library: MODULE_NAME,
        libraryTarget: 'umd',
        clean: true,
        globalObject: 'this',
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
                            configFile: 'tsconfig.build.json',
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
                        drop_console: false,
                        keep_fnames: true
                    },
                    mangle: false,
                    format: {
                        comments: false
                    }
                }
            })
        ]
    },
    externals: [],
    target: ['web', 'es5'],
    stats: {
        modules: false,
        chunks: false
    },
};
