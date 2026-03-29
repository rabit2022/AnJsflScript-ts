import {HasWidth} from "../../Base/SimpleControls.types";

export interface ButtonAttributes extends HasWidth {
    // label: string;
    flex?: number;
    tabindex?: number;
    accesskey?: string;
    oncommand?: string;
}

