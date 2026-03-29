import {HasValue, HasWidth} from "../../Base/SimpleControls.types";

export interface ChoosefileAttributes extends HasWidth,HasValue {
    literal?: boolean;
    pathtype?: string;
    required?: boolean;
    size?: number;
    type?: string;
    flex?: number;
    tabindex?: number;
}