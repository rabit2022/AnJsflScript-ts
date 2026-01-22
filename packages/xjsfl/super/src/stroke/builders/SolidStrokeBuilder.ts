import {BaseStrokeBuilder} from '../base/BaseStrokeBuilder';
import {SolidStroke} from '../strokes/SolidStroke';

export class SolidStrokeBuilder extends BaseStrokeBuilder<SolidStroke> {
    constructor() {
        super(new SolidStroke());
    }
}