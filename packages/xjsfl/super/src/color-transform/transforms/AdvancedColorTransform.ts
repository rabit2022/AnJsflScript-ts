/**
 * @file: AdvancedColorTransform.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */// ------------------------------------------------------------------------------------------------------------------------
//  ______     _____     __   __   ______     __   __     ______     ______     _____     ______
// /\  __ \   /\  __-.  /\ \ / /  /\  __ \   /\ "-.\ \   /\  ___\   /\  ___\   /\  __-.  /\  ___\
// \ \  __ \  \ \ \/\ \ \ \ \'/   \ \  __ \  \ \ \-.  \  \ \ \____  \ \  __\   \ \ \/\ \ \ \ \____
//  \ \_\ \_\  \ \____-  \ \__|    \ \_\ \_\  \ \_\\"\_\  \ \_____\  \ \_____\  \ \____-  \ \_____\
//   \/_/\/_/   \/____/   \/_/      \/_/\/_/   \/_/ \/_/   \/_____/   \/_____/   \/____/   \/_____/
//
//  ______     __         ______     ______     ______   ______     ______     __   __     ______
// /\  __ \   /\ \       /\  __ \   /\  == \   /\__  _\ /\  == \   /\  __ \   /\ "-.\ \   /\  ___\
// \ \ \/\ \  \ \ \____  \ \ \/\ \  \ \  __<   \/_/\ \/ \ \  __<   \ \  __ \  \ \ \-.  \  \ \___  \
//  \ \_____\  \ \_____\  \ \_____\  \ \_\ \_\    \ \_\  \ \_\ \_\  \ \_\ \_\  \ \_\\"\_\  \/\_____\
//   \/_____/   \/_____/   \/_____/   \/_/ /_/     \/_/   \/_/ /_/   \/_/\/_/   \/_/ \/_/   \/_____/
//
//  ______   ______     ______     __    __
// /\  ___\ /\  __ \   /\  == \   /\ "-./  \
// \ \  __\ \ \ \/\ \  \ \  __<   \ \ \-./\ \
//  \ \_\    \ \_____\  \ \_\ \_\  \ \_\ \ \_\
//   \/_/     \/_____/   \/_/ /_/   \/_/  \/_/
//
// ------------------------------------------------------------------------------------------------------------------------
// AdvancedColorTransform

import { BaseColorTransform } from "../base/BaseColorTransform";
import { IAdvancedColorTransform } from "../types";

export class AdvancedColorTransform
    extends BaseColorTransform
    implements IAdvancedColorTransform
{
    public mode: "advanced" = "advanced";
    public colorAlphaAmount: number = 0;
    public colorAlphaPercent: number = 100;
    public colorRedAmount: number = 0;
    public colorRedPercent: number = 100;
    public colorGreenAmount: number = 0;
    public colorGreenPercent: number = 100;
    public colorBlueAmount: number = 0;
    public colorBluePercent: number = 100;

    constructor() {
        super("advanced");
    }
}
