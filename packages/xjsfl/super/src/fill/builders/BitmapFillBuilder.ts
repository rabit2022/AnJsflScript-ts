/**
 * @file: BitmapFillBuilder.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/1/25 21:10
 * @project: AnJsflScript-ts
 * @description:
 */import { BitmapFill } from "../fills/BitmapFill";
import { BaseFillBuilder } from "../base/BaseFillBuilder";

export class BitmapFillBuilder extends BaseFillBuilder<BitmapFill> {
    constructor() {
        super(new BitmapFill());
    }

    public setBitmap(bitmapPath: string): this {
        this.fill.bitmapPath = bitmapPath;
        return this;
    }

    public setBitmapIsClipped(bitmapIsClipped: boolean): this {
        this.fill.bitmapIsClipped = bitmapIsClipped;
        return this;
    }
}
