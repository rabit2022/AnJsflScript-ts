import {Width} from "../../SimpleControls.types";

export interface ChoosefileAttributes extends Width {
    literal?: boolean;
    pathtype?: string;
    required?: boolean;
    size?: number;
    type?: string;
    flex?: number;
    tabindex?: number;
}