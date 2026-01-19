// events/event-classes.ts
import {
    IEvent,
    IDocumentEvent,
    ILayerEvent,
    IFrameEvent,
    IMouseEvent
} from "../types/event-types";
import { EventType, EventSubtype } from "../constants/event-constants";

/**
 * 基础事件类
 */
export class BaseEvent implements IEvent {
    type: string;
    subtype: string;
    time: Date;

    constructor(type: string, subtype: string) {
        this.type = type;
        this.subtype = subtype;
        this.time = new Date();
    }

    toString(): string {
        return `[object BaseEvent type="${this.type}" subtype="${this.subtype}"]`;
    }
}

/**
 * 文档事件类
 */
export class DocumentEvent extends BaseEvent implements IDocumentEvent {
    document?: any;

    constructor(type: string, subtype: string, getDocumentDOM?: () => any) {
        super(type, subtype);
        if (getDocumentDOM) {
            this.document = getDocumentDOM();
        }
    }

    override toString(): string {
        return `[object DocumentEvent type="${this.type}" name="${this.document?.name || ""}" id="${this.document?.id || ""}"]`;
    }
}

/**
 * 图层事件类
 */
export class LayerEvent extends BaseEvent implements ILayerEvent {
    document?: any;
    timeline?: any;
    layer?: any;

    constructor(getDocumentDOM?: () => any) {
        super(EventType.LAYER_CHANGED, EventSubtype.CHANGED);

        if (getDocumentDOM) {
            this.document = getDocumentDOM();
            if (this.document) {
                this.timeline = this.document.getTimeline?.();
                if (this.timeline?.layers) {
                    this.layer = this.timeline.layers[this.timeline.currentLayer];
                }
            }
        }
    }

    override toString(): string {
        return `[object LayerEvent timeline="${this.timeline?.name || ""}" layer="${this.layer?.name || ""}"]`;
    }
}

/**
 * 帧事件类
 */
export class FrameEvent extends BaseEvent implements IFrameEvent {
    document?: any;
    timeline?: any;
    layer?: any;
    frame?: any;

    constructor(getDocumentDOM?: () => any) {
        super(EventType.FRAME_CHANGED, EventSubtype.CHANGED);

        if (getDocumentDOM) {
            this.document = getDocumentDOM();
            if (this.document) {
                this.timeline = this.document.getTimeline?.();
                if (this.timeline) {
                    this.layer = this.timeline.layers?.[this.timeline.currentLayer];
                    if (this.layer?.frames) {
                        this.frame = this.layer.frames[this.timeline.currentFrame];
                    }
                }
            }
        }
    }

    override toString(): string {
        return `[object FrameEvent timeline="${this.timeline?.name || ""}" layer="${this.layer?.name || ""}" frame="${this.timeline?.currentFrame || ""}"]`;
    }
}

/**
 * 鼠标事件类
 */
export class MouseEvent extends BaseEvent implements IMouseEvent {
    shift: boolean;
    ctrl: boolean;
    alt: boolean;
    x: number;
    y: number;

    constructor(tools?: {
        shiftIsDown?: boolean;
        ctlIsDown?: boolean;
        altIsDown?: boolean;
        penLoc?: { x: number; y: number };
    }) {
        super(EventType.MOUSE_MOVE, EventSubtype.MOVE);

        this.shift = tools?.shiftIsDown || false;
        this.ctrl = tools?.ctlIsDown || false;
        this.alt = tools?.altIsDown || false;
        this.x = tools?.penLoc?.x || 0;
        this.y = tools?.penLoc?.y || 0;
    }

    override toString(): string {
        return `[object MouseEvent x="${this.x}" y="${this.y}" shift="${this.shift}" ctrl="${this.ctrl}" alt="${this.alt}"]`;
    }
}
