import {BitmapFill} from '../fills/BitmapFill';
import {BaseFillBuilder} from "../base/BaseFillBuilder";

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