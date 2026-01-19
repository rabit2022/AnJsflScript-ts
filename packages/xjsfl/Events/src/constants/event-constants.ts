// constants/event-constants.ts
/**
 * 事件类型常量
 */
export enum EventType {
    // CS5.5+ 事件
    PRE_PUBLISH = "prePublish",
    POST_PUBLISH = "postPublish",
    DOCUMENT_SAVED = "documentSaved",

    // CS4+ 事件
    DOCUMENT_NEW = "documentNew",
    DOCUMENT_OPENED = "documentOpened",
    DOCUMENT_CLOSED = "documentClosed",
    DOCUMENT_CHANGED = "documentChanged",
    LAYER_CHANGED = "layerChanged",
    FRAME_CHANGED = "frameChanged",
    MOUSE_MOVE = "mouseMove"
}

/**
 * 事件子类型常量
 */
export enum EventSubtype {
    NEW = "new",
    OPENED = "opened",
    CLOSED = "closed",
    CHANGED = "changed",
    PRE_PUBLISH = "publish",
    POST_PUBLISH = "published",
    SAVED = "saved",
    MOVE = "move"
}
