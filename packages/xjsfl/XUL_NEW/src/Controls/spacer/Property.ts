import {TEMPLATES} from "../../Constants/Templates";
import {BaseControl} from "../BaseControl";

export class Property extends BaseControl {

    constructor(id: string) {
        super("property",id);

        var xml = (this.json as typeof TEMPLATES["property"]).property;
        xml["@id"] = id;
    }

}