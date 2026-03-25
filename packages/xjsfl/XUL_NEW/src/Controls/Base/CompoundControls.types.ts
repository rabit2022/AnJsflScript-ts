import {compoundControl} from "../../Constants/Templates.types";

export const ChildrenMap: Record<compoundControl, string> = {
    "listbox": "row.listbox.listitem",
    "menulist": "row.menulist.menupop.menuitem",
    "radiogroup": "row.radiogroup.radio",
    "checkboxgroup": "row.vbox.checkbox"
}