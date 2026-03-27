import {AllControls} from "../../Constants/Templates.types";
import {TEMPLATES} from "../../Constants/Templates";
import {Copy} from "../copy/deepCopy";
import {DIALOG} from "../../Constants/DIALOG";

export function getJsonFromTemplate(type: AllControls): any {
    // let type = "property";
    const template = TEMPLATES[type];
    if (!template) {
        throw new Error(`Template not found: ${type}`);
    }

    // console.info("template",template);

    const copy = Copy.deepCopy(template);
    // // @ts-ignore
    // this.json = copy;
    return copy;
}


export function getJsonFromDialog(): any {
    const template = DIALOG;
    if (!template) {
        throw new Error(`Dialog not found`);
    }
    const copy = Copy.deepCopy(template);
    return copy;
}
