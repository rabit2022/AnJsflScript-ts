/**
 * @file: StippleStrokeBuilder.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { BaseStrokeBuilder } from "../base/BaseStrokeBuilder";
import { StippleStroke } from "../strokes/StippleStroke";
import { IStippleStrokeBuilder } from "../types";

export class StippleStrokeBuilder
    extends BaseStrokeBuilder<StippleStroke>
    implements IStippleStrokeBuilder
{
    constructor() {
        super(new StippleStroke());
    }

    public setDotSize(dotSize: "tiny" | "small" | "medium" | "large"): this {
        this.stroke.dotSize = dotSize;
        return this;
    }

    public setVariation(
        variation: "one size" | "small variation" | "varied sizes" | "random sizes"
    ): this {
        this.stroke.variation = variation;
        return this;
    }

    public setDenensity(
        density: "very dense" | "dense" | "sparse" | "very sparse"
    ): this {
        this.stroke.density = density;
        return this;
    }
}
