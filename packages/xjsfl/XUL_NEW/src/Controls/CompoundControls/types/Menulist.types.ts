import {Width} from "../../SimpleControls.types";

export interface MenulistAttributes extends Width {
    editable?: boolean;
    flex?: number;
    tabindex?: number;
    oncreate?: string;
    onsetfocus?: string;
}