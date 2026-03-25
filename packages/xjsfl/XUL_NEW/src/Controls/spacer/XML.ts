import {XMLLoader} from "../../io/loader/XMLLoader";
import {parseUserXML} from "../../utils/paser/parseUserXML";
import {BaseControl} from "../Base/BaseControl";

export class XML extends BaseControl {
    constructor(xml: string) {
        super("custom", "xml");
        const loader = new XMLLoader(xml, "xml");
        // @ts-ignore
        this.json = parseUserXML(loader.JSON);
    }
}


// const xmlStr = `<property template="property"  id = "id1111"  value = "value22222"/>`;
// const xml = new XML(xmlStr);
// console.log(xml.toXMLString())