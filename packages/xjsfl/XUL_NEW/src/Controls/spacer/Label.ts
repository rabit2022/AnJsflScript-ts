import {TEMPLATES} from "../../Constants/Templates";
import {BaseControl} from "../Base/BaseControl";
import {ColumnsManager} from "../../Constants/ColumnsManager";
import {SpacerControls} from "../Base/SpacerControls";

export class Label extends SpacerControls {
    constructor(label:string,id: string) {
        super("label",id);

        const sum = ColumnsManager.columns.reduce((a, b) => a + b, 0);


        const json = this.json as typeof TEMPLATES["label"];

        let xml = json.row;
        // // console.log(xml);
        xml.label["@width"]	= sum;
        xml.label["@value"]	= label;
    }

    setLabelWidth(width: number) {
        const json = this.json as typeof TEMPLATES["label"];
        let xml = json.row;
        xml.label["@width"]	= width;
    }

}

// const property1 = new Label("label","idggg");
// console.log(property1.toJSON());
// console.log(property1.id);