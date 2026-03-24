import {SimpleControls} from "../SimpleControls";
import {PopupSliderAttributes, RangeTuple} from "./types/PopupSlider.types";
import {TEMPLATES} from "../../Constants/Templates";

export class PopupSlider extends SimpleControls {
    constructor(id: string, label: string, values: RangeTuple = [0, 0, 100], attributes: PopupSliderAttributes = {}) {
        super("popupslider", id, label, attributes);

        const JSON = this.json as typeof TEMPLATES["popupslider"];

        const slider = JSON.row.popupslider;
        slider["@value"] = values[0] as any;
        slider["@minvalue"] = values[1];
        slider["@maxvalue"] = values[2];
    }
}


const slider = new PopupSlider("id", "label", [3, 5, 100], {flex: 100})
console.log(slider.toJSON())