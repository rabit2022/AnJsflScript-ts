
export type Range = {
    min: number;
    max: number;
};

export type CustomCallbacks<T> = {
    [key: string]: (item: T) => any;
};

export type Operand =
    | '='
    | '!='
    | '^='
    | '$='
    | '*='
    | '>'
    | '>='
    | '<'
    | '<='
    | '';

