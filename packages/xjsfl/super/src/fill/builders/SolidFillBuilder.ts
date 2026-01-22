import {SolidFill} from '../fills/SolidFill';
import chroma from 'chroma-js';
import {BaseFillBuilder} from "../base/BaseFillBuilder";

export class SolidFillBuilder extends BaseFillBuilder<SolidFill> {
    constructor() {
        super(new SolidFill());
    }

    public setColor(color: string | number): this {
        try {
            const hexColor = chroma(color as any).hex();
            this.fill.color = hexColor;
        } catch (error) {
            this.fill.color = color.toString();
        }
        return this;
    }

    public setAlpha(alpha: number): this {
        try {
            this.fill.color = chroma(this.fill.color).alpha(alpha).hex();
        } catch (error) {
            // 如果颜色转换失败，保持原样
        }
        return this;
    }
}