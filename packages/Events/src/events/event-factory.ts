// events/event-factory.ts
import {
    IEvent,
    IDocumentEvent,
    ILayerEvent,
    IFrameEvent,
    IMouseEvent
} from "../types/event-types";
import { EventType, EventSubtype } from "../constants/event-constants";
import {
    DocumentEvent,
    LayerEvent,
    FrameEvent,
    MouseEvent,
    BaseEvent
} from "./event-classes";

export class EventFactory {
    private getDocumentDOM?: () => any;
    private tools?: any;

    constructor(config?: { getDocumentDOM?: () => any; tools?: any }) {
        this.getDocumentDOM = config?.getDocumentDOM;
        this.tools = config?.tools;
    }

    /**
     * 创建事件对象
     */
    createEvent(type: string, subtype?: string): IEvent {
        switch (type) {
            case EventType.DOCUMENT_NEW:
            case EventType.DOCUMENT_OPENED:
            case EventType.DOCUMENT_CLOSED:
            case EventType.DOCUMENT_CHANGED:
            case EventType.PRE_PUBLISH:
            case EventType.POST_PUBLISH:
            case EventType.DOCUMENT_SAVED:
                return new DocumentEvent(type, subtype || type, this.getDocumentDOM);

            case EventType.LAYER_CHANGED:
                return new LayerEvent(this.getDocumentDOM);

            case EventType.FRAME_CHANGED:
                return new FrameEvent(this.getDocumentDOM);

            case EventType.MOUSE_MOVE:
                return new MouseEvent(this.tools);

            default:
                return new BaseEvent(type, subtype || type);
        }
    }

    /**
     * 检查事件类型是否支持（CS5+特性检测）
     */
    isEventSupported(type: string, flashVersion?: string): boolean {
        const cs5PlusEvents = [
            EventType.PRE_PUBLISH,
            EventType.POST_PUBLISH,
            EventType.DOCUMENT_SAVED
        ];

        if (cs5PlusEvents.includes(type as EventType)) {
            if (!flashVersion) return false;

            const versionMatch = flashVersion.match(/\w+ (\d+)/);
            if (!versionMatch) return false;

            const version = parseInt(versionMatch[1]);
            return version >= 11; // CS5+
        }

        return true;
    }
}
