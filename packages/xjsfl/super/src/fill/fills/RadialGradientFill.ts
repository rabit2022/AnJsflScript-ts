/**
 * @file: RadialGradientFill.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// ------------------------------------------------------------------------------------------------------------------------
//  ______     ______     _____     __     ______     __         ______     ______     ______
// /\  == \   /\  __ \   /\  __-.  /\ \   /\  __ \   /\ \       /\  ___\   /\  == \   /\  __ \
// \ \  __<   \ \  __ \  \ \ \/\ \ \ \ \  \ \  __ \  \ \ \____  \ \ \__ \  \ \  __<   \ \  __ \
//  \ \_\ \_\  \ \_\ \_\  \ \____-  \ \_\  \ \_\ \_\  \ \_____\  \ \_____\  \ \_\ \_\  \ \_\ \_\
//   \/_/ /_/   \/_/\/_/   \/____/   \/_/   \/_/\/_/   \/_____/   \/_____/   \/_/ /_/   \/_/\/_/
//
//  _____     __     ______     __   __     ______   ______   __     __         __
// /\  __-.  /\ \   /\  ___\   /\ "-.\ \   /\__  _\ /\  ___\ /\ \   /\ \       /\ \
// \ \ \/\ \ \ \ \  \ \  __\   \ \ \-.  \  \/_/\ \/ \ \  __\ \ \ \  \ \ \____  \ \ \____
//  \ \____-  \ \_\  \ \_____\  \ \_\\"\_\    \ \_\  \ \_\    \ \_\  \ \_____\  \ \_____\
//   \/____/   \/_/   \/_____/   \/_/ \/_/     \/_/   \/_/     \/_/   \/_____/   \/_____/
//
// ------------------------------------------------------------------------------------------------------------------------
// RadialGradientFill
// 径向渐变填充

import { BaseFill } from "../base/BaseFill";
import { IRadialGradientFill, Matrix, OverflowType } from "../types";

export class RadialGradientFill extends BaseFill implements IRadialGradientFill {
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
    public focalPoint: number = 0;
    public linearRGB: boolean = false;
    public overflow: OverflowType = "extend";

    constructor() {
        super("radialGradient");
    }

    public toString(): string {
        return "[class RadialGradientFill]";
    }
}
