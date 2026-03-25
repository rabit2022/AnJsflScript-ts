import {TEMPLATES} from "./Templates";

export type compoundControl = "radiogroup" | "checkboxgroup" | "menulist" | "listbox";

export type simpleControl =
    "textbox"
    | "colorchip"
    | "popupslider"
    | "checkbox"
    | "button"
    | "targetlist"
    | "choosefile";

export type spacerControl = "property"|"separator"|"spacer"|"label"|"script";
// export type AllControls = simpleControl | compoundControl | spacerControl|"flash"|"custom";
export type AllControls = keyof typeof TEMPLATES;

export const SIMPLE_CONTROL_NAMES = [ "textbox", "colorchip", "popupslider", "checkbox", "button", "targetlist", "choosefile"];
export const COMPOUND_CONTROL_NAMES = ["radiogroup", "checkboxgroup", "menulist", "listbox"];
export const SPACER_CONTROL_NAMES = ["property", "separator","spacer","label","script"];

export const PROPERTY_CONTROL_NAME = "property";