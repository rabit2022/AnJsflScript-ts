/**
 * @file: BaseFill.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// ------------------------------------------------------------------------------------------------------------------------
//  ______     ______     ______     ______     ______   __     __         __
// /\  == \   /\  __ \   /\  ___\   /\  ___\   /\  ___\ /\ \   /\ \       /\ \
// \ \  __<   \ \  __ \  \ \___  \  \ \  __\   \ \  __\ \ \ \  \ \ \____  \ \ \____
//  \ \_____\  \ \_\ \_\  \/\_____\  \ \_____\  \ \_\    \ \_\  \ \_____\  \ \_____\
//   \/_____/   \/_/\/_/   \/_____/   \/_____/   \/_/     \/_/   \/_____/   \/_____/
//
// ------------------------------------------------------------------------------------------------------------------------
// BaseFill

import { BaseFillProps, IBaseFill } from "../types";
import { SObject } from "../../base/SObject";

export abstract class BaseFill extends SObject implements IBaseFill {
    public style: "bitmap" | "solid" | "linearGradient" | "radialGradient" | "noFill";

    constructor(
        style: "bitmap" | "solid" | "linearGradient" | "radialGradient" | "noFill"
    ) {
        super();
        this.style = style;
    }

    public static fromProps(props: BaseFillProps): BaseFill {
        // 这是一个抽象方法，具体子类实现
        throw new Error("Method must be implemented by subclass");
    }
}
