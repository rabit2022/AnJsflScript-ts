import {Width} from "../../Base/SimpleControls.types";

export interface ButtonAttributes extends Width {
    // label: string;
    flex?: number;
    tabindex?: number;
    accesskey?: string;
    oncommand?: string;
}

