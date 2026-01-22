import {SelectAll} from './utils';
import chroma from 'chroma-js';

export function setInstanceTint(elements: any | any[], color: string | number, strength: number): void {
    if (!Array.isArray(elements)) {
        elements = [elements];
    }
    SelectAll(elements);

    const doc = fl.getDocumentDOM();
    doc!.setInstanceTint(color, strength);
}

export function setInstanceTintRGB(
    elements: any | any[],
    tintPercent: number,
    tintRed: number,
    tintGreen: number,
    tintBlue: number
): void {
    const color = chroma.rgb(tintRed, tintGreen, tintBlue).hex();
    setInstanceTint(elements, color, tintPercent);
}