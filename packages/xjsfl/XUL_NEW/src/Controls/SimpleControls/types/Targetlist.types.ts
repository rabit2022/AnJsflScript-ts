import {HasValue, HasWidth} from "../../Base/SimpleControls.types";


export interface TargetlistAttributes extends HasWidth,HasValue {
    height?: number;
    flex?: number;
    pathtype?: "absolute";
}