import {BaseColorTransformBuilder} from '../base/BaseColorTransformBuilder';
import {AlphaColorTransform} from '../transforms/AlphaColorTransform';

export class AlphaColorTransformBuilder extends BaseColorTransformBuilder<AlphaColorTransform> {
    constructor() {
        super(new AlphaColorTransform());
    }

    public setAlphaPercent(alphaPercent: number): this {
        this.colorTransform.alphaPercent = alphaPercent;
        return this;
    }
}