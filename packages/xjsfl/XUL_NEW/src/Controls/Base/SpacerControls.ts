import {spacerControl} from "../../Constants/Templates.types";
import {CLASS_TYPE} from "./BaseControl.types";
import {BaseControl} from "./BaseControl";
import {getJsonFromTemplate} from "../../utils/paser/getJson";
import {IdGenerator} from "../../utils/id/uniqueID";

export class SpacerControls extends BaseControl {
    protected CLASS_TYPE: CLASS_TYPE = "spacer";

    constructor(type: spacerControl, id: string|null) {
        let json = getJsonFromTemplate(type);
        id = id || IdGenerator.generate(type);
        super(type, id, json);
    }
}