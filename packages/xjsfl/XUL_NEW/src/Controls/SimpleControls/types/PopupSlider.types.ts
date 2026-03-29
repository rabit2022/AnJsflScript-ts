import {HasValue, HasWidth} from "../../Base/SimpleControls.types";

export type RangeTuple = [defaultVal: number, minVal: number, maxVal: number];

export interface PopupSliderAttributes extends HasWidth,HasValue {
    orientation?: string;
    tabindex?: number;
    flex?: number;
}
