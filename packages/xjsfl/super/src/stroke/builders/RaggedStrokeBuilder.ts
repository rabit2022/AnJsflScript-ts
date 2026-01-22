import {BaseStrokeBuilder} from '../base/BaseStrokeBuilder';
import {RaggedStroke} from '../strokes/RaggedStroke';
import {IRaggedStrokeBuilder} from '../types';

export class RaggedStrokeBuilder extends BaseStrokeBuilder<RaggedStroke> implements IRaggedStrokeBuilder {
    constructor() {
        super(new RaggedStroke());
    }

    public setPattern(pattern: 'solid' | 'simple' | 'random' | 'dotted' | 'random dotted' | 'triple dotted' | 'random triple dotted'): this {
        this.stroke.pattern = pattern;
        return this;
    }

    public setWaveHeight(waveHeight: 'flat' | 'wavy' | 'very wavy' | 'wild'): this {
        this.stroke.waveHeight = waveHeight;
        return this;
    }

    public setWaveLength(waveLength: 'very short' | 'short' | 'medium' | 'long'): this {
        this.stroke.waveLength = waveLength;
        return this;
    }
}