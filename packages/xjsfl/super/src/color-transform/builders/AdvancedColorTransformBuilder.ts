/**
 * @file: AdvancedColorTransformBuilder.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { BaseColorTransformBuilder } from "../base/BaseColorTransformBuilder";
import { AdvancedColorTransform } from "../transforms/AdvancedColorTransform";

export class AdvancedColorTransformBuilder extends BaseColorTransformBuilder<AdvancedColorTransform> {
    constructor() {
        super(new AdvancedColorTransform());
    }

    public setColorAlphaAmount(colorAlphaAmount: number): this {
        this.colorTransform.colorAlphaAmount = colorAlphaAmount;
        return this;
    }

    public setColorAlphaPercent(colorAlphaPercent: number): this {
        this.colorTransform.colorAlphaPercent = colorAlphaPercent;
        return this;
    }

    public setColorRedAmount(colorRedAmount: number): this {
        this.colorTransform.colorRedAmount = colorRedAmount;
        return this;
    }

    public setColorRedPercent(colorRedPercent: number): this {
        this.colorTransform.colorRedPercent = colorRedPercent;
        return this;
    }

    public setColorGreenAmount(colorGreenAmount: number): this {
        this.colorTransform.colorGreenAmount = colorGreenAmount;
        return this;
    }

    public setColorGreenPercent(colorGreenPercent: number): this {
        this.colorTransform.colorGreenPercent = colorGreenPercent;
        return this;
    }

    public setColorBlueAmount(colorBlueAmount: number): this {
        this.colorTransform.colorBlueAmount = colorBlueAmount;
        return this;
    }

    public setColorBluePercent(colorBluePercent: number): this {
        this.colorTransform.colorBluePercent = colorBluePercent;
        return this;
    }
}
