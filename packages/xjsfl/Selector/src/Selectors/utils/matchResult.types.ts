import {Core} from "../core/Core";
import {ITEM} from "../Cases/item";
import {ELEMENT} from "../Cases/element";
import {ITEM_filter_type} from "../Cases/item.types";
import {ELEMENT_filter_type} from "../Cases/element.types";

export type CoreKeys = keyof typeof Core;
export type ComboKeys = keyof typeof Core.combo;


export type CoreFindKeys = keyof typeof Core.find;
export type ITEMFindKeys = keyof typeof ITEM.find;
export type ELEMENTFindKeys = keyof typeof ELEMENT.find;

export type ITEMPseudoKeys = keyof typeof ITEM.pseudo;
export type ELEMENTPseudooKeys = keyof typeof ELEMENT.pseudo;
export type CorePseudooKeys = keyof typeof Core.pseudo;


export interface MatchResult {
    full: string,          // 完整匹配
    combo: string,         // :not(...)
    combo_type: ComboKeys,            // not
    combo_selector: string,        // .hidden
    name: string,           // div
    path: string,           // /user/xx
    Class: string,          // .Button
    package: string,        // .com.xxx
    pseudo: PseudoType,          // :hover
    attribute: string,      // [type=text]
    attribute_name: string,       // type
    attribute_operator: string,       // =
    attribute_value: string,          // text
}

export type PseudoType =
    ITEM_filter_type
    | ELEMENT_filter_type
    | ITEMFindKeys
    | ELEMENTFindKeys
    | CoreFindKeys
    | ITEMPseudoKeys
    | ELEMENTPseudooKeys
    | CorePseudooKeys;