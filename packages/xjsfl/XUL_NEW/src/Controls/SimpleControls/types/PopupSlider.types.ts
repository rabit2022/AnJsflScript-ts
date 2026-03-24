import {Width} from "../../SimpleControls.types";

export type RangeTuple = [defaultVal: number, minVal: number, maxVal: number];

export interface PopupSliderAttributes extends Width{
    orientation?: string;
    tabindex?: number;
    flex?: number;
}
