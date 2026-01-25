/**
 * @file: RaggedStroke.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// ------------------------------------------------------------------------------------------------------------------------
//  ______     ______     ______     ______     ______     _____     ______
// /\  == \   /\  __ \   /\  ___\   /\  ___\   /\  ___\   /\  __-.  /\  ___\
// \ \  __<   \ \  __ \  \ \ \__ \  \ \ \__ \  \ \  __\   \ \ \/\ \ \ \___  \
//  \ \_\ \_\  \ \_\ \_\  \ \_____\  \ \_____\  \ \_____\  \ \____-  \/\_____\
//   \/_/ /_/   \/_/\/_/   \/_____/   \/_____/   \/_____/   \/____/   \/_____/
//
//  ______   ______     ______     __  __     ______
// /\__  _\ /\  == \   /\  __ \   /\ \/ /    /\  ___\
// \/_/\ \/ \ \  __<   \ \ \/\ \  \ \  _"-.  \ \  __\
//    \ \_\  \ \_\ \_\  \ \_____\  \ \_\ \_\  \ \_____\
//     \/_/   \/_/ /_/   \/_____/   \/_/\/_/   \/_____/
//
// ------------------------------------------------------------------------------------------------------------------------
// RaggedStroke
// 锯齿状线样式
import { BaseStroke } from "../base/BaseStroke";
import { IRaggedStroke } from "../types";

export class RaggedStroke extends BaseStroke implements IRaggedStroke {
    public pattern:
        | "solid"
        | "simple"
        | "random"
        | "dotted"
        | "random dotted"
        | "triple dotted"
        | "random triple dotted" = "solid";
    public waveHeight: "flat" | "wavy" | "very wavy" | "wild" = "flat";
    public waveLength: "very short" | "short" | "medium" | "long" = "short";

    constructor() {
        super("ragged");
    }
}
