import {IFileHandler} from "./FileHandler";
import {BaseDialog} from "./BaseDialog";
import {XMLLoader} from "../loader/XMLLoader";
import {XULBuilder} from "./XULBuilder";
import {DIALOG} from "../../Constants/DIALOG";
import {XMLSaver} from "../loader/XMLSaver";

export class XULLoader extends BaseDialog implements IFileHandler {
    private xulbuilder: XULBuilder;

    constructor(pathOrUri: string) {
        const loader = new XMLLoader(pathOrUri, "url");
        super("XULLoader", loader.JSON)


        let json = this.json as typeof DIALOG;
        let title = json.dialog["@title"];
        this.xulbuilder = new XULBuilder("XULLoader", title)
    }

    save(pathOrUri: string): void {
        const saver = new XMLSaver(pathOrUri);
        saver.save(this.xulbuilder.toXMLString())
    }
}