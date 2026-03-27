import {spacerControl} from "../../Constants/Templates.types";
import {CLASS_TYPE} from "./BaseControl.types";
import {BaseControl} from "./BaseControl";
import {getJsonFromTemplate} from "../../utils/paser/getJson";

export class SpacerControls extends BaseControl {
    protected CLASS_TYPE: CLASS_TYPE = "spacer";

    constructor(type: spacerControl, id: string) {
        let json = getJsonFromTemplate(type);
        super(type, id, json);
    }
}