import {SelectAll} from './utils';
import {IAdvancedColorTransform} from '../types';

export function setInstanceAdvancedColor(
    elements: any | any[],
    advancedColorTransform: IAdvancedColorTransform
): void {
    if (!Array.isArray(elements)) {
        elements = [elements];
    }

    SelectAll(elements);

    elements.forEach(function (element: any) {
        element.colorMode = "advanced";
        element.colorAlphaAmount = advancedColorTransform.colorAlphaAmount;
        element.colorAlphaPercent = advancedColorTransform.colorAlphaPercent;
        element.colorRedAmount = advancedColorTransform.colorRedAmount;
        element.colorRedPercent = advancedColorTransform.colorRedPercent;
        element.colorGreenAmount = advancedColorTransform.colorGreenAmount;
        element.colorGreenPercent = advancedColorTransform.colorGreenPercent;
        element.colorBlueAmount = advancedColorTransform.colorBlueAmount;
        element.colorBluePercent = advancedColorTransform.colorBluePercent;
    });
}