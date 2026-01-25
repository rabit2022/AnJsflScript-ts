/**
 * @file: DottedStrokeBuilder.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { BaseStrokeBuilder } from "../base/BaseStrokeBuilder";
import { DottedStroke } from "../strokes/DottedStroke";
import { IDottedStrokeBuilder } from "../types";

export class DottedStrokeBuilder
    extends BaseStrokeBuilder<DottedStroke>
    implements IDottedStrokeBuilder
{
    constructor() {
        super(new DottedStroke());
    }

    public setDotSpace(dotSpace: number): this {
        this.stroke.dotSpace = dotSpace;
        return this;
    }
}
