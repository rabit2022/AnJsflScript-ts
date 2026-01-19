// types/event-types.ts
/**
 * 基础事件接口
 */
export interface IEvent {
    type: string;
    subtype: string;
    time: Date;
    toString(): string;
}

/**
 * 文档事件接口
 */
export interface IDocumentEvent extends IEvent {
    document?: any;
}

/**
 * 图层事件接口
 */
export interface ILayerEvent extends IEvent {
    document?: any;
    timeline?: any;
    layer?: any;
}

/**
 * 帧事件接口
 */
export interface IFrameEvent extends IEvent {
    document?: any;
    timeline?: any;
    layer?: any;
    frame?: any;
}

/**
 * 鼠标事件接口
 */
export interface IMouseEvent extends IEvent {
    shift: boolean;
    ctrl: boolean;
    alt: boolean;
    x: number;
    y: number;
}

/**
 * 事件处理器配置
 */
export interface IEventHandler {
    callbacks: Map<string, Function>;
    handler: Function;
    id?: number;
}

/**
 * 事件管理器配置
 */
export interface IEventManagerConfig {
    /**
     * 获取文档DOM的方法
     */
    getDocumentDOM?: () => any;

    /**
     * Flash工具状态
     */
    tools?: {
        shiftIsDown?: boolean;
        ctlIsDown?: boolean;
        altIsDown?: boolean;
        penLoc?: { x: number; y: number };
    };

    /**
     * Flash版本信息（用于CS5+特性检测）
     */
    flashVersion?: string;

    /**
     * 事件监听器接口
     */
    eventListener?: {
        add: (type: string, handler: Function) => number;
        remove: (type: string, id: number) => void;
    };

    /**
     * 日志输出接口（可选）
     */
    logger?: {
        trace?: (...args: any[]) => void;
        warn?: (...args: any[]) => void;
    };
}