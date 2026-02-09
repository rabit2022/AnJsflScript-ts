/**
 * @file: require.config.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2025/3/6 19:28
 * @project: AnJsflScript
 * @description:
 */

require.config({
    // context: 'Core', // 设置模块的加载上下文
    baseUrl: window.AnJsflScript.$ProjectFileDir$, // 设置模块的基础路径
    paths:

    // region REQUIRE MODULES PATHS
    {
        "@xjsfl/XUL": "packages/xjsfl/XUL/src/XUL",
        "@xjsfl/XUL/XML": "packages/xjsfl/XUL/src/XML",
        "@xjsfl/XUL/XUL": "packages/xjsfl/XUL/src/XUL",
        "@xjsfl/XUL/XULControl": "packages/xjsfl/XUL/src/XULControl",
        "@xjsfl/XUL/XULEvent": "packages/xjsfl/XUL/src/XULEvent",
        "@xjsfl/XUL/Utils": "packages/xjsfl/XUL/src/Utils",
        "@xjsfl/XUL/xjsfl": "packages/xjsfl/XUL/src/xjsfl"
    },
// endregion REQUIRE MODULES PATHS

    packages: []
});
