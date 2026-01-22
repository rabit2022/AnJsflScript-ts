import {SelectAll} from './utils';

export function setInstanceAlpha(elements: any | any[], alphaPercent: number): void {
    if (!Array.isArray(elements)) {
        elements = [elements];
    }

    SelectAll(elements);

    const doc = fl.getDocumentDOM();
    doc!.setInstanceAlpha(alphaPercent);
}