import {HasValue, HasWidth} from "../../Base/SimpleControls.types";

export interface RadiogroupAttributes extends HasWidth,HasValue {
    tabindex?: number;
    groupbox?: boolean;
}