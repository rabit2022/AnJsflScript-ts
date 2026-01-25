/**
 * @file: LinearGradientFill.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// ------------------------------------------------------------------------------------------------------------------------
//  __         __     __   __     ______     ______     ______     ______     ______     ______
// /\ \       /\ \   /\ "-.\ \   /\  ___\   /\  __ \   /\  == \   /\  ___\   /\  == \   /\  __ \
// \ \ \____  \ \ \  \ \ \-.  \  \ \  __\   \ \  __ \  \ \  __<   \ \ \__ \  \ \  __<   \ \  __ \
//  \ \_____\  \ \_\  \ \_\\"\_\  \ \_____\  \ \_\ \_\  \ \_\ \_\  \ \_____\  \ \_\ \_\  \ \_\ \_\
//   \/_____/   \/_/   \/_/ \/_/   \/_____/   \/_/\/_/   \/_/ /_/   \/_____/   \/_/ /_/   \/_/\/_/
//
//  _____     __     ______     __   __     ______   ______   __     __         __
// /\  __-.  /\ \   /\  ___\   /\ "-.\ \   /\__  _\ /\  ___\ /\ \   /\ \       /\ \
// \ \ \/\ \ \ \ \  \ \  __\   \ \ \-.  \  \/_/\ \/ \ \  __\ \ \ \  \ \ \____  \ \ \____
//  \ \____-  \ \_\  \ \_____\  \ \_\\"\_\    \ \_\  \ \_\    \ \_\  \ \_____\  \ \_____\
//   \/____/   \/_/   \/_____/   \/_/ \/_/     \/_/   \/_/     \/_/   \/_____/   \/_____/
//
// ------------------------------------------------------------------------------------------------------------------------
// LinearGradientFill
// 线性渐变填充

import { BaseFill } from "../base/BaseFill";
import { ILinearGradientFill, Matrix, OverflowType } from "../types";

export class LinearGradientFill extends BaseFill implements ILinearGradientFill {
    public colorArray: (string | number)[] = [];
    public posArray: number[] = [];
    public matrix: Matrix = {
        a: 1,
        b: 0,
        c: 0,
        d: 1,
        tx: 0,
        ty: 0
    };
    public linearRGB: boolean = false;
    public overflow: OverflowType = "extend";

    constructor() {
        super("linearGradient");
    }

    public toString(): string {
        return "[class LinearGradientFill]";
    }
}
