/**
 * @file: HatchedStroke.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// ------------------------------------------------------------------------------------------------------------------------
//  __  __     ______     ______   ______     __  __     ______     _____
// /\ \_\ \   /\  __ \   /\__  _\ /\  ___\   /\ \_\ \   /\  ___\   /\  __-.
// \ \  __ \  \ \  __ \  \/_/\ \/ \ \ \____  \ \  __ \  \ \  __\   \ \ \/\ \
//  \ \_\ \_\  \ \_\ \_\    \ \_\  \ \_____\  \ \_\ \_\  \ \_____\  \ \____-
//   \/_/\/_/   \/_/\/_/     \/_/   \/_____/   \/_/\/_/   \/_____/   \/____/
//
//  ______     ______   ______     ______     __  __     ______
// /\  ___\   /\__  _\ /\  == \   /\  __ \   /\ \/ /    /\  ___\
// \ \___  \  \/_/\ \/ \ \  __<   \ \ \/\ \  \ \  _"-.  \ \  __\
//  \/\_____\    \ \_\  \ \_\ \_\  \ \_____\  \ \_\ \_\  \ \_____\
//   \/_____/     \/_/   \/_/ /_/   \/_____/   \/_/\/_/   \/_____/
//
// ------------------------------------------------------------------------------------------------------------------------
// HatchedStroke
// 斑马线样式

import { BaseStroke } from "../base/BaseStroke";
import { IHatchedStroke } from "../types";

export class HatchedStroke extends BaseStroke implements IHatchedStroke {
    public curve: "straight" | "slight curve" | "medium curve" | "very curved" =
        "straight";
    public hatchThickness: "hairline" | "thin" | "medium" | "thick" = "thin";
    public jiggle: "none" | "bounce" | "loose" | "wild" = "none";
    public rotate: "none" | "slight" | "medium" | "free" = "none";
    public length: "equal" | "slight variation" | "medium variation" | "random" = "equal";
    public space: "very close" | "close" | "distant" | "very distant" = "close";

    constructor() {
        super("hatched");
    }
}
