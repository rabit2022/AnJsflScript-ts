import {TEMPLATES} from "../../Constants/Templates";
import {BaseControl} from "../Base/BaseControl";

export class Property extends BaseControl {

    constructor(id: string) {
        super("property",id);

        var xml = (this.json as typeof TEMPLATES["property"]).row.property;
        xml["@id"] = id;
    }

}

// const property = new Property("property");
// console.log(property.toJSON());