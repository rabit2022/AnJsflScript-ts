import {HasValue, HasWidth} from "../../Base/SimpleControls.types";

export interface TextBoxAttributes extends HasWidth,HasValue {
    value?: string;
    maxlength?: number;
    prompt?: string;
    size?: number;
    multiline?: boolean;
    width?: number;
    flex?: number;
}


// size="20" wrap="on" scroll="true" rows="3" wraparound="true"