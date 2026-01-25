/**
 * @file: HatchedStrokeBuilder.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { BaseStrokeBuilder } from "../base/BaseStrokeBuilder";
import { HatchedStroke } from "../strokes/HatchedStroke";
import { IHatchedStrokeBuilder } from "../types";

export class HatchedStrokeBuilder
    extends BaseStrokeBuilder<HatchedStroke>
    implements IHatchedStrokeBuilder
{
    constructor() {
        super(new HatchedStroke());
    }

    public setCurve(
        curve: "straight" | "slight curve" | "medium curve" | "very curved"
    ): this {
        this.stroke.curve = curve;
        return this;
    }

    public setHatchThickness(
        hatchThickness: "hairline" | "thin" | "medium" | "thick"
    ): this {
        this.stroke.hatchThickness = hatchThickness;
        return this;
    }

    public setJiggle(jiggle: "none" | "bounce" | "loose" | "wild"): this {
        this.stroke.jiggle = jiggle;
        return this;
    }

    public setRotate(rotate: "none" | "slight" | "medium" | "free"): this {
        this.stroke.rotate = rotate;
        return this;
    }

    public setLength(
        length: "equal" | "slight variation" | "medium variation" | "random"
    ): this {
        this.stroke.length = length;
        return this;
    }

    public setSpace(space: "very close" | "close" | "distant" | "very distant"): this {
        this.stroke.space = space;
        return this;
    }
}
