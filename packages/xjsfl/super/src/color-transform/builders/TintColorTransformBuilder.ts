import {BaseColorTransformBuilder} from '../base/BaseColorTransformBuilder';
import {TintColorTransform} from '../transforms/TintColorTransform';
import chroma from 'chroma-js';

export class TintColorTransformBuilder extends BaseColorTransformBuilder<TintColorTransform> {
    constructor() {
        super(new TintColorTransform());
    }

    public setTintPercent(tintPercent: number): this {
        this.colorTransform.tintPercent = tintPercent;
        return this;
    }

    public setTintRed(tintRed: number): this {
        this.colorTransform.tintRed = tintRed;
        return this;
    }

    public setTintGreen(tintGreen: number): this {
        this.colorTransform.tintGreen = tintGreen;
        return this;
    }

    public setTintBlue(tintBlue: number): this {
        this.colorTransform.tintBlue = tintBlue;
        return this;
    }

    public setInstanceTint(color: string | number, strength: number): this {
        const rgb = chroma(color).rgb();
        this.colorTransform.tintRed = rgb[0];
        this.colorTransform.tintGreen = rgb[1];
        this.colorTransform.tintBlue = rgb[2];
        this.colorTransform.tintPercent = strength;
        return this;
    }
}