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
