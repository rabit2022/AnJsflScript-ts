import {BaseStrokeBuilder} from '../base/BaseStrokeBuilder';
import {DottedStroke} from '../strokes/DottedStroke';
import {IDottedStrokeBuilder} from '../types';

export class DottedStrokeBuilder extends BaseStrokeBuilder<DottedStroke> implements IDottedStrokeBuilder {
    constructor() {
        super(new DottedStroke());
    }

    public setDotSpace(dotSpace: number): this {
        this.stroke.dotSpace = dotSpace;
        return this;
    }
}