import {BaseStroke} from './BaseStroke';
import {IBaseStroke, IStrokeBuilder} from '../types';
import chroma from 'chroma-js';
import {SObject} from "../../base/SObject";

export abstract class BaseStrokeBuilder<T extends BaseStroke> extends SObject implements IStrokeBuilder<IBaseStroke> {
    protected stroke: T;

    constructor(stroke: T) {
        super();
        this.stroke = stroke;
    }

    public setBreakAtCorners(breakAtCorners: boolean): this {
        this.stroke.breakAtCorners = breakAtCorners;
        return this;
    }

    public setCapType(capType: 'none' | 'round' | 'square'): this {
        this.stroke.capType = capType;
        return this;
    }

    public setStrokeHinting(strokeHinting: boolean): this {
        this.stroke.strokeHinting = strokeHinting;
        return this;
    }

    public setStyle(style: string): this {
        this.stroke.style = style as any;
        this.stroke.shapeFill.style = style;
        return this;
    }

    public setThickness(thickness: number): this {
        this.stroke.thickness = thickness;
        return this;
    }

    public setColor(color: string | number): this {
        const hexColor = chroma(color).hex();
        this.stroke.color = hexColor;
        this.stroke.shapeFill.color = hexColor;
        return this;
    }

    public setAlpha(alpha: number): this {
        const color = chroma(this.stroke.color).alpha(alpha).hex();
        this.stroke.color = color;
        this.stroke.shapeFill.color = color;
        return this;
    }

    public setShapeFill(shapeFill: any): this {
        this.stroke.shapeFill = shapeFill;
        return this;
    }

    public setScaleType(scaleType: 'normal' | 'horizontal' | 'vertical' | 'none'): this {
        this.stroke.scaleType = scaleType;
        return this;
    }

    public setJoinType(joinType: 'miter' | 'round' | 'bevel'): this {
        this.stroke.joinType = joinType;
        return this;
    }

    public setMiterLimit(miterLimit: number): this {
        this.stroke.miterLimit = miterLimit;
        return this;
    }

    public build(): T {
        return this.stroke;
    }
}