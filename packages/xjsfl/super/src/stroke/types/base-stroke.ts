export interface ShapeFill {
    tag: number;
    color: string;
    style: string;
    matrix: {
        a: number;
        b: number;
        c: number;
        d: number;
        tx: number;
        ty: number;
    };
}

export type CapType = 'none' | 'round' | 'square';
export type StrokeStyle = 'noStroke' | 'solid' | 'dashed' | 'dotted' | 'ragged' | 'stipple' | 'hatched';
export type ScaleType = 'normal' | 'horizontal' | 'vertical' | 'none';
export type JoinType = 'miter' | 'round' | 'bevel';

export interface BaseStrokeProps {
    breakAtCorners?: boolean;
    capType?: CapType;
    strokeHinting?: boolean;
    style?: StrokeStyle;
    thickness?: number;
    color?: string | number;
    shapeFill?: ShapeFill;
    scaleType?: ScaleType;
    joinType?: JoinType;
    miterLimit?: number;
}

export interface DashedStrokeProps extends BaseStrokeProps {
    dash1?: number;
    dash2?: number;
}

export interface DottedStrokeProps extends BaseStrokeProps {
    dotSpace?: number;
}

export type RaggedPattern =
    'solid'
    | 'simple'
    | 'random'
    | 'dotted'
    | 'random dotted'
    | 'triple dotted'
    | 'random triple dotted';
export type WaveHeight = 'flat' | 'wavy' | 'very wavy' | 'wild';
export type WaveLength = 'very short' | 'short' | 'medium' | 'long';

export interface RaggedStrokeProps extends BaseStrokeProps {
    pattern?: RaggedPattern;
    waveHeight?: WaveHeight;
    waveLength?: WaveLength;
}

export type DotSize = 'tiny' | 'small' | 'medium' | 'large';
export type Variation = 'one size' | 'small variation' | 'varied sizes' | 'random sizes';
export type Density = 'very dense' | 'dense' | 'sparse' | 'very sparse';

export interface StippleStrokeProps extends BaseStrokeProps {
    dotSize?: DotSize;
    variation?: Variation;
    density?: Density;
}

export type CurveType = 'straight' | 'slight curve' | 'medium curve' | 'very curved';
export type HatchThickness = 'hairline' | 'thin' | 'medium' | 'thick';
export type JiggleType = 'none' | 'bounce' | 'loose' | 'wild';
export type RotateType = 'none' | 'slight' | 'medium' | 'free';
export type LengthType = 'equal' | 'slight variation' | 'medium variation' | 'random';
export type SpaceType = 'very close' | 'close' | 'distant' | 'very distant';

export interface HatchedStrokeProps extends BaseStrokeProps {
    curve?: CurveType;
    hatchThickness?: HatchThickness;
    jiggle?: JiggleType;
    rotate?: RotateType;
    length?: LengthType;
    space?: SpaceType;
}