import {XMLLoader} from "../../io/loader/XMLLoader";
import {parseUserXML} from "../../utils/paser/parseUserXML";
import {BaseControl} from "../Base/BaseControl";

export class XML extends BaseControl {
    constructor(xml: string) {
        const loader = new XMLLoader(xml, "xml");
        let json = parseUserXML(loader.toJSON());

        super("custom", "xml", json);
    }
}


// const xmlStr = `<property template="property"  id = "id1111"  value = "value22222"/>`;
// const xml = new XML(xmlStr);
// console.log(xml.toXMLString())