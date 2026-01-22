// xjsfl Superdoc
export {Superdoc} from "./Superdoc";

// stroke definations
export * from './stroke';
// fill
export * from './fill';
// color tranform
export * from './color-transform';


import chroma from 'chroma-js';

// 颜色工具函数
export function parseColor(color: string | number): string {
    return chroma(color).hex();
}

export function setAlpha(color: string, alpha: number): string {
    return chroma(color).alpha(alpha).hex();
}

// RGB 工具函数
export function rgbToHex(red: number, green: number, blue: number): string {
    return chroma.rgb(red, green, blue).hex();
}

export function hexToRgb(hex: string): [number, number, number] {
    return chroma(hex).rgb();
}