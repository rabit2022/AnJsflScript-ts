import {HasChecked, HasWidth} from "../../Base/SimpleControls.types";

export interface CheckboxAttributes extends HasWidth,HasChecked {
    // label?: string;
    tabindex?: number;
    accesskey?: string;
}

