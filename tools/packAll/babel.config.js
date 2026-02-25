// babel.config.js
module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                browsers: ['IE >= 9']
            },
            // modules: "amd",      // ⚠️ 保留 ES6 模块
            useBuiltIns: false
        }]
    ]
};


// module.exports = {
//     presets: [
//         [
//             '@babel/preset-env',
//             {
//                 targets: { ie: '9' },
//                 modules: false, // 保持模块语法，让打包工具或运行时处理
//                 // ❌ 删除 useBuiltIns 和 corejs，它们会与 runtime 插件冲突
//             }
//         ]
//     ],
//     plugins: [
//         [
//             '@babel/plugin-transform-runtime',
//             {
//                 // ✅ 核心配置：启用 corejs 3
//                 corejs: 3,
//                 // 是否帮助内联 helpers？设为 false 则生成 require('@babel/runtime/helpers/...')
//                 // 设为 true 在某些配置下可能尝试内联，但 corejs 部分依然是 require
//                 useESModules: false, // 生成 CommonJS (require)，如果环境支持 ES Module 可设为 true
//                 // absoluteRuntime: false, // 默认即可
//             }
//         ]
//     ]
// };