import {HasValue, HasWidth} from "../../Base/SimpleControls.types";

export interface MenulistAttributes extends HasWidth,HasValue{
    editable?: boolean;
    flex?: number;
    tabindex?: number;
    oncreate?: string;
    onsetfocus?: string;
}