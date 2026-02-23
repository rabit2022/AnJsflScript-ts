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
