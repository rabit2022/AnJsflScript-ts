import {BaseSettings} from "./BaseSettings";
import {simpleControl, spacerControl} from "../../Constants/Templates.types";
import {Attrs} from "./SimpleControls.types";
import {IdGenerator} from "../../utils/id/uniqueID";
import {CLASS_TYPE} from "./BaseControl.types";
import {BaseControl} from "./BaseControl";

export class SpacerControls extends BaseControl {
    protected CLASS_TYPE:CLASS_TYPE = "spacer";

    constructor(type: spacerControl, id: string ) {
        super(type, id);
    }
}