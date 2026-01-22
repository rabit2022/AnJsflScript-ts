import {BaseFill} from './BaseFill';
import {SObject} from "../../base/SObject";

export abstract class BaseFillBuilder<T extends BaseFill> extends SObject {
    protected fill: T;

    constructor(fill: T) {
        super();
        this.fill = fill;
    }

    public setStyle(style: string): this {
        this.fill.style = style as any;
        return this;
    }

    public build(): T {
        return this.fill;
    }
}