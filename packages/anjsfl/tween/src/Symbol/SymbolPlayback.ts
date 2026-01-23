/**
 * @file: SymbolPlayback.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2025/4/21 21:38
 * @project: AnJsflScript
 * @description: 符号元素播放模式控制工具
 */
import {IsSymbol} from "./check/checker";

// 定义元素类型（根据JSFL文档）
type FLSymbolElement = any;
type FLDocumentDOM = any;

/**
 * 播放模式枚举
 */
export enum PlaybackMode {
    /** 循环播放 */
    LOOP = 'loop',
    /** 播放一次 */
    PLAY_ONCE = 'play once',
    /** 单帧播放 */
    SINGLE_FRAME = 'single frame',
    /** 循环播放倒序 */
    LOOP_REVERSE = 'loop reverse',
    /** 播放一次倒序 */
    PLAY_ONCE_REVERSE = 'play once reverse'
}

/**
 * 符号播放控制器
 */
export class SymbolPlayback {
    /**
     * 设置播放模式
     * @param mode 播放模式
     * @param elements 符号元素或元素数组（可选，为空时设置文档默认）
     */
    static setMode(mode: PlaybackMode, elements?: FLSymbolElement | FLSymbolElement[]): void {
        if (!elements) {
            const doc: FLDocumentDOM = fl.getDocumentDOM();
            doc.setElementProperty("loop", mode);
            return;
        }
        
        const elementsArray = Array.isArray(elements) ? elements : [elements];
        
        for (const element of elementsArray) {
            if (IsSymbol(element)) {
                element.loop = mode;
            }
        }
    }
    
    /**
     * 获取元素的播放模式
     * @param element 符号元素
     * @returns 播放模式或null（如果不是符号或未设置）
     */
    static getMode(element: FLSymbolElement): PlaybackMode | null {
        return IsSymbol(element) && element.loop ? element.loop : null;
    }
    
    /**
     * 设置循环播放模式
     * @param elements 符号元素或元素数组（可选）
     */
    static setLoop(elements?: FLSymbolElement | FLSymbolElement[]): void {
        this.setMode(PlaybackMode.LOOP, elements);
    }
    
    /**
     * 设置播放一次模式
     * @param elements 符号元素或元素数组（可选）
     */
    static setPlayOnce(elements?: FLSymbolElement | FLSymbolElement[]): void {
        this.setMode(PlaybackMode.PLAY_ONCE, elements);
    }
    
    /**
     * 设置单帧播放模式
     * @param elements 符号元素或元素数组（可选）
     */
    static setSingleFrame(elements?: FLSymbolElement | FLSymbolElement[]): void {
        this.setMode(PlaybackMode.SINGLE_FRAME, elements);
    }
    
    /**
     * 设置循环倒序播放模式
     * @param elements 符号元素或元素数组（可选）
     */
    static setLoopReverse(elements?: FLSymbolElement | FLSymbolElement[]): void {
        this.setMode(PlaybackMode.LOOP_REVERSE, elements);
    }
    
    /**
     * 设置播放一次倒序模式
     * @param elements 符号元素或元素数组（可选）
     */
    static setPlayOnceReverse(elements?: FLSymbolElement | FLSymbolElement[]): void {
        this.setMode(PlaybackMode.PLAY_ONCE_REVERSE, elements);
    }
}