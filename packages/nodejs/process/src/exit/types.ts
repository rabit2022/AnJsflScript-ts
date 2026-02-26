/**
 * @file: types.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

export type ExitEvent = "beforeExit" | "exit";
export type ExitHandler = (code: number) => void;

export interface ExitHandlers {
    beforeExit: ExitHandler[];
    exit: ExitHandler[];
}
