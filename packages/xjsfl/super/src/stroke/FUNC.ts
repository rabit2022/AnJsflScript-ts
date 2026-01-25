/**
 * @file: FUNC.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// 简单的继承辅助函数
export const INHERIT_MACRO = (child: any, parent: any) => {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
    child.prototype.__proto__ = parent.prototype;
};

// 其他工具函数
export const FUNC = {
    INHERIT_MACRO
    // 可以添加其他工具函数
};
