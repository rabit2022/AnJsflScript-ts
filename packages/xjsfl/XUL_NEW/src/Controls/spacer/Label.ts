import {TEMPLATES} from "../../Constants/Templates";
import {BaseControl} from "../Base/BaseControl";
import {COLUMNS} from "../../Constants/COLUMNS";

export class Label extends BaseControl {
    constructor(label:string,id: string) {
        super("label",id);

        const sum = COLUMNS.reduce((a, b) => a + b, 0);


        const json = this.json as typeof TEMPLATES["label"];

        let xml = json.row;
        // // console.log(xml);
        xml.label["@width"]	= sum;
        xml.label["@value"]	= label;

    }

}

// const property1 = new Label("label","idggg");
// console.log(property1.toJSON());
// console.log(property1.id);