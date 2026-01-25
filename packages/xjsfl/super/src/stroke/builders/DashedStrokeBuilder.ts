/**
 * @file: DashedStrokeBuilder.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { BaseStrokeBuilder } from "../base/BaseStrokeBuilder";
import { DashedStroke } from "../strokes/DashedStroke";
import { IDashedStrokeBuilder } from "../types";

export class DashedStrokeBuilder
    extends BaseStrokeBuilder<DashedStroke>
    implements IDashedStrokeBuilder
{
    constructor() {
        super(new DashedStroke());
    }

    public setDash1(dash1: number): this {
        this.stroke.dash1 = dash1;
        return this;
    }

    public setDash2(dash2: number): this {
        this.stroke.dash2 = dash2;
        return this;
    }
}
