/**
 * @file: StippleStroke.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// ------------------------------------------------------------------------------------------------------------------------
//  ______     ______   __     ______   ______   __         ______     ______
// /\  ___\   /\__  _\ /\ \   /\  == \ /\  == \ /\ \       /\  ___\   /\  ___\
// \ \___  \  \/_/\ \/ \ \ \  \ \  _-/ \ \  _-/ \ \ \____  \ \  __\   \ \___  \
//  \/\_____\    \ \_\  \ \_\  \ \_\    \ \_\    \ \_____\  \ \_____\  \/\_____\
//   \/_____/     \/_/   \/_/   \/_/     \/_/     \/_____/   \/_____/   \/_____/
//
//  ______   ______     ______     __  __     ______
// /\__  _\ /\  == \   /\  __ \   /\ \/ /    /\  ___\
// \/_/\ \/ \ \  __<   \ \ \/\ \  \ \  _"-.  \ \  __\
//    \ \_\  \ \_\ \_\  \ \_____\  \ \_\ \_\  \ \_____\
//     \/_/   \/_/ /_/   \/_____/   \/_/\/_/   \/_____/
//
// ------------------------------------------------------------------------------------------------------------------------
// StippleStroke
// 斑点线样式

import { BaseStroke } from "../base/BaseStroke";
import { IStippleStroke } from "../types";

export class StippleStroke extends BaseStroke implements IStippleStroke {
    public dotSize: "tiny" | "small" | "medium" | "large" = "tiny";
    public variation: "one size" | "small variation" | "varied sizes" | "random sizes" =
        "one size";
    public density: "very dense" | "dense" | "sparse" | "very sparse" = "dense";

    constructor() {
        super("stipple");
    }
}
