import {BaseColorTransform} from './BaseColorTransform';
import {SObject} from "../../base/SObject";

export abstract class BaseColorTransformBuilder<T extends BaseColorTransform> extends SObject {
    protected colorTransform: T;

    constructor(colorTransform: T) {
        super();
        this.colorTransform = colorTransform;
    }

    public build(): T {
        return this.colorTransform;
    }
}