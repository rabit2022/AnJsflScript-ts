import {Width} from "../../Base/SimpleControls.types";

export interface ListitemAttributes {
    "@id"?: string;
    "@label"?: string
    "@value"?: any
    "@selected"?: boolean
}


export type ValueItem =
    | string
    | {
    label: string;
    value: string;
};

export type ValuesType = ValueItem[] | Record<string, ValueItem>;


export interface SelectedItem {
    selected: boolean;

    [key: string]: any; // ⭐ 允许扩展字段
}

export interface ListboxAttributes extends Width {
    flex?: number;
    rows?: number;
    tabindex?: number;
}