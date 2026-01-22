import {BaseColorTransformBuilder} from '../base/BaseColorTransformBuilder';
import {BrightnessColorTransform} from '../transforms/BrightnessColorTransform';

export class BrightnessColorTransformBuilder extends BaseColorTransformBuilder<BrightnessColorTransform> {
    constructor() {
        super(new BrightnessColorTransform());
    }

    public setBrightnessPercent(brightnessPercent: number): this {
        this.colorTransform.brightnessPercent = brightnessPercent;
        return this;
    }
}