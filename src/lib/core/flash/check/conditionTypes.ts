/**
 * @file: conditionTypes.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/13 1:17
 * @project: AnJsflScript-ts
 * @description:
 */

/**
 * 图层选择条件枚举。
 * 枚举成员使用合法标识符命名，值为实际条件字符串。
 */
export enum LayerCondition {
    NoLimit = "No limit",
    NotZero = "Not Zero",
    Zero = "Zero",
    OnlyOne = "Only one",
    OnlyTwo = "Only two",
    More = "More",
    GT0 = ">0", // Greater Than 0
    EQ0 = "=0", // Equal 0
    EQ1 = "=1",
    EQ2 = "=2",
    GT1 = ">1" // Greater Than 1
}

/** 库项目选择条件 */
export enum LibraryCondition {
    NoLimit = "No limit",
    NotZero = "Not Zero",
    Zero = "Zero",
    OnlyOne = "Only one",
    OnlyTwo = "Only two",
    More = "More",
    GT0 = ">0",
    EQ0 = "=0",
    EQ1 = "=1",
    EQ2 = "=2",
    GT1 = ">1"
}
