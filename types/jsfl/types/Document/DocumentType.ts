/**
 * Specifies how Flash fits curves when tracing a bitmap.
 * Used in {@link Document.traceBitmap}.
 */
type CurveFit =
    | 'pixels'
    | 'very tight'
    | 'tight'
    | 'normal'
    | 'smooth'
    | 'very smooth';


interface Swatch {
    fill: Fill;
    name: string
}


// strokeType: 'hairline' | 'solid' | 'dashed' | 'dotted' | 'ragged' | 'stipple' | 'hatched'
type StrokeType = 'hairline' | 'solid' | 'dashed' | 'dotted' | 'ragged' | 'stipple' | 'hatched'


// distributemode: | "left edge" | "horizontal center" | "right edge" | "top edge" | "vertical center" | "bottom edge",
type DistributeMode =
    "left edge"
    | "horizontal center"
    | "right edge"
    | "top edge"
    | "vertical center"
    | "bottom edge"


type DataType = 'integer' | 'integerArray' | 'double' | 'doubleArray' | 'string' | 'byteArray'