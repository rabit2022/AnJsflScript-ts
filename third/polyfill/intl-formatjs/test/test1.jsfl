/**
 * @file: test1.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/30 23:37
 * @project: AnJsflScript-ts
 * @description:
 */


require(["Intl-format"], function(Intl) {

    const date = new Date('2026-03-14T15:30:00');

// 不传参数，使用默认 Locale (通常是浏览器系统语言)
    const defaultFormatter = new Intl.DateTimeFormat();
    console.log(defaultFormatter.format(date));
// 输出示例 (中文环境): "2026/3/14"
// 输出示例 (美国环境): "3/14/2026"
});
