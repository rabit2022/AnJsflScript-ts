/**
 * @file: ruleTypes.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/13 1:17
 * @project: AnJsflScript-ts
 * @description:
 */

// types.ts
export type RuleString = string; // e.g. ">=2", "==1"
export interface ParsedRule {
    op: ">" | ">=" | "<" | "<=" | "==" | "!=";
    val: number;
}

export interface CheckResult<T> {
    success: boolean;
    data?: T;
    message?: string;
}
