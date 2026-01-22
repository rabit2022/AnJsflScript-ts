import {SelectAll} from './utils';

export function setInstanceBrightness(elements: any | any[], brightness: number): void {
    if (!Array.isArray(elements)) {
        elements = [elements];
    }
    SelectAll(elements);

    const doc = fl.getDocumentDOM();
    doc!.setInstanceBrightness(brightness);
}