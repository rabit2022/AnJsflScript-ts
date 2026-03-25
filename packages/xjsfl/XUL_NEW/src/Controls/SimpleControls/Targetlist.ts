import {SimpleControls} from "../Base/SimpleControls";
import {TargetlistAttributes} from "./types/Targetlist.types";
import {TEMPLATES} from "../../Constants/Templates";

export class Targetlist extends SimpleControls {
    constructor(id: string, label: string, attributes: TargetlistAttributes = {}) {
        super("targetlist", id, label, attributes);

        var property = (this.json as (typeof TEMPLATES)["targetlist"]).row
            .property;
        property["@id"] = id;
    }
}