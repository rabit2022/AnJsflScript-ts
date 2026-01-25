/**
 * @file: p1.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// import {NumberWithMode, NumberWithSign} from "./types";
//
//
// /**
//  * 核心逻辑：根据数值和符号推断模式
//  * @param num
//  * @param hasSign
//  * @returns NumberWithMode
//  */
// function deriveMode(num: number, hasSign: boolean): NumberWithMode {
//     const direction = Math.sign(num) as 1 | -1 | 0;
//     let mode: "increase" | "decrease" | "unify";
//
//     if (hasSign) {
//         mode = num < 0 ? "decrease" : "increase";
//     } else {
//         mode = "unify";
//     }
//
//     return { num, mode, direction };
// }
//
//
//
//
// class PromptUtil {
//     /**
//      * 解析用户输入的数字或带有正负号的数字。
//      */
//     static parseNumberWithSign(
//         promptMessage: string,
//         defaultValue: number = 0,
//         alertMessage: string = "请重新输入合法的数字。"
//     ): NumberWithSign | null {
//
//         const input = prompt(promptMessage, String(defaultValue));
//
//         // 用户点击取消
//         if (input === null) {
//             alert(alertMessage);
//             return null;
//         }
//
//         const result = parseNumberWithSignCore(input);
//         if (!result.success) {
//             alert(alertMessage);
//             return null;
//         }
//
//         return result.data!;
//     }
//
//     /**
//      * 解析用户输入的关键帧持续帧数，并确定模式。
//      */
//     static parseNumberWithMode(
//         promptMessage: string,
//         defaultValue: number = 0,
//         alertMessage: string = "请重新输入合法的数字。"
//     ): NumberWithMode | null {
//
//         const config = this.parseNumberWithSign(promptMessage, defaultValue, alertMessage);
//         if (config === null) return null;
//
//         return deriveMode(config.num, config.hasSign);
//     }
// }
//
//
//
//
//
// // 调用代码
// const result = PromptUtil.parseNumberWithMode(
//     "请输入关键帧持续帧数（“+3”为增加，“-3”为减少，无符号“3”为统一）",
//     30,
//     "请输入合法的数字，例如“+3”或“-3”或“3”"
// );
//
// if (result) {
//     console.log("关键帧持续帧数：" + result.num + "，模式：" + result.mode);
// } else {
//     // 处理用户取消或输入错误的情况
//     console.log("操作已取消或输入无效");
// }
