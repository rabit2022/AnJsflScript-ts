/**
 * @file: test1.jsfl
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/30 23:37
 * @project: AnJsflScript-ts
 * @description:
 */


require(["luxon"], function(luxon) {
    // import { DateTime } from 'luxon';
    const { DateTime } = luxon;


    const dt = DateTime.fromISO("2025-05-20T14:30:00");

    console.log(dt)

    // 中文（简体，中国）
    console.log(dt.setLocale("zh-CN").toLocaleString(DateTime.DATE_FULL));
    // => '2025年5月20日星期二'

    // 英文（美国）
    console.log(dt.setLocale("en-US").toLocaleString(DateTime.DATE_FULL));
    // => 'Tuesday, May 20, 2025'


    // 测试原生 Intl 是否正常
    const parts = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    }).formatToParts(new Date('2025-05-20'));

    console.log(JSON.stringify(parts));
});
