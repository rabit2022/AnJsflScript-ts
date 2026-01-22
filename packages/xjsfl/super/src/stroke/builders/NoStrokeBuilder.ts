import {BaseStrokeBuilder} from '../base/BaseStrokeBuilder';
import {NoStroke} from '../strokes/NoStroke';

export class NoStrokeBuilder extends BaseStrokeBuilder<NoStroke> {
    constructor() {
        super(new NoStroke());
    }
}