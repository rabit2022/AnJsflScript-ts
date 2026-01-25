/**
 * @file: NoStrokeBuilder.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { BaseStrokeBuilder } from "../base/BaseStrokeBuilder";
import { NoStroke } from "../strokes/NoStroke";

export class NoStrokeBuilder extends BaseStrokeBuilder<NoStroke> {
    constructor() {
        super(new NoStroke());
    }
}
