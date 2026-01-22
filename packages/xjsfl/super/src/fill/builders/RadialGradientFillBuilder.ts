import {Matrix} from '../types';
import chroma from 'chroma-js';
import {BaseFillBuilder} from "../base/BaseFillBuilder";
import {RadialGradientFill} from "../fills";

export class RadialGradientFillBuilder extends BaseFillBuilder<RadialGradientFill> {
    constructor() {
        super(new RadialGradientFill());
    }

    public addColorStop(pos: number, color: string | number): this {
        try {
            const hexColor = chroma(color as any).hex();
            this.fill.colorArray.push(hexColor);
        } catch (error) {
            this.fill.colorArray.push(color);
        }
        this.fill.posArray.push(pos);
        return this;
    }

    public setMatrix(a: number, b: number, c: number, d: number, tx: number, ty: number): this {
        this.fill.matrix = {a, b, c, d, tx, ty};
        return this;
    }

    public setMatrixObject(matrix: Matrix): this {
        this.fill.matrix = {...matrix};
        return this;
    }

    public setFocalPoint(focalPoint: number): this {
        this.fill.focalPoint = focalPoint;
        return this;
    }

    public setLinearRGB(linearRGB: boolean): this {
        this.fill.linearRGB = linearRGB;
        return this;
    }

    public setOverflow(overflow: 'extend' | 'repeat' | 'reflect'): this {
        this.fill.overflow = overflow;
        return this;
    }
}