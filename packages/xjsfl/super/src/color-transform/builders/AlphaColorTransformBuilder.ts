/**
 * @file: AlphaColorTransformBuilder.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { BaseColorTransformBuilder } from "../base/BaseColorTransformBuilder";
import { AlphaColorTransform } from "../transforms/AlphaColorTransform";

export class AlphaColorTransformBuilder extends BaseColorTransformBuilder<AlphaColorTransform> {
    constructor() {
        super(new AlphaColorTransform());
    }

    public setAlphaPercent(alphaPercent: number): this {
        this.colorTransform.alphaPercent = alphaPercent;
        return this;
    }
}
