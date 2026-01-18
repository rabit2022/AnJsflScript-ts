// index.ts
export { EventManager } from './events/event-manager';
export { EventFactory } from './events/event-factory';
export {
    BaseEvent,
    DocumentEvent,
    LayerEvent,
    FrameEvent,
    MouseEvent
} from './events/event-classes';
export { EventType, EventSubtype } from './constants/event-constants';
export type {
    IEvent,
    IDocumentEvent,
    ILayerEvent,
    IFrameEvent,
    IMouseEvent,
    IEventManagerConfig
} from './types/event-types';

// 默认导出
// export default EventManager;
