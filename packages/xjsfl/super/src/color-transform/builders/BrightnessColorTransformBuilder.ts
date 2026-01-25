/**
 * @file: BrightnessColorTransformBuilder.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { BaseColorTransformBuilder } from "../base/BaseColorTransformBuilder";
import { BrightnessColorTransform } from "../transforms/BrightnessColorTransform";

export class BrightnessColorTransformBuilder extends BaseColorTransformBuilder<BrightnessColorTransform> {
    constructor() {
        super(new BrightnessColorTransform());
    }

    public setBrightnessPercent(brightnessPercent: number): this {
        this.colorTransform.brightnessPercent = brightnessPercent;
        return this;
    }
}
