import {Fill} from "../Fill/Fill";

/**
 * Specifies how Flash fits curves when tracing a bitmap.
 * Used in {@link Document.traceBitmap}.
 */
export type CurveFit =
    | 'pixels'
    | 'very tight'
    | 'tight'
    | 'normal'
    | 'smooth'
    | 'very smooth';



export interface Swatch {
    fill: Fill;
    name: string
}


// strokeType: 'hairline' | 'solid' | 'dashed' | 'dotted' | 'ragged' | 'stipple' | 'hatched'
export type StrokeType = 'hairline' | 'solid' | 'dashed' | 'dotted' | 'ragged' | 'stipple' | 'hatched'



// distributemode: | "left edge" | "horizontal center" | "right edge" | "top edge" | "vertical center" | "bottom edge",
export type DistributeMode= "left edge" | "horizontal center" | "right edge" | "top edge" | "vertical center" | "bottom edge"


export type DataType='integer' | 'integerArray' | 'double' | 'doubleArray' | 'string' | 'byteArray'