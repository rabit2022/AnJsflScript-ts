// events.ts
export abstract class Event {
    constructor(
        public readonly type: string,
        public readonly subtype: string,
        public readonly time: Date = new Date()
    ) {
    }
}

export class DocumentEvent extends Event {
    public readonly document: Document | null = fl.getDocumentDOM();

    constructor(type: string, subtype: string) {
        super(type, subtype);
    }

    toString(): string {
        return `[object DocumentEvent type="${this.type}" name="${this.document?.name ?? ''}" id="${this.document?.id ?? ''}"]`;
    }

    static toString(): string {
        return '[class DocumentEvent]';
    }


    // 静态常量（挂载到类上）
    static readonly PUBLISH = 'prePublish';
    static readonly PUBLISHED = 'postPublish';
    static readonly SAVED = 'documentSaved';
    static readonly NEW = 'documentNew';
    static readonly OPENED = 'documentOpened';
    static readonly CLOSED = 'documentClosed';
    static readonly CHANGED = 'documentChanged';

}

export class LayerEvent extends Event {
    public readonly document: Document | null = fl.getDocumentDOM();
    public readonly timeline: Timeline | null = this.document?.getTimeline() ?? null;
    public readonly layer: Layer | null = this.timeline
        ? this.timeline.layers[this.timeline.currentLayer]
        : null;

    constructor() {
        super(LayerEvent.CHANGED, 'changed');
    }

    toString(): string {
        return `[object LayerEvent timeline="${this.timeline?.name ?? ''}" layer="${this.layer?.name ?? ''}"]`;
    }

    static toString(): string {
        return '[class LayerEvent]';
    }

    static readonly CHANGED = 'layerChanged';
}

export class FrameEvent extends Event {
    public readonly document: Document | null = fl.getDocumentDOM();
    public readonly timeline: Timeline | null = this.document?.getTimeline() ?? null;
    public readonly layer: Layer | null = this.timeline
        ? this.timeline.layers[this.timeline.currentLayer]
        : null;
    public readonly frame: Frame | null = this.layer
        ? this.layer.frames[this.timeline!.currentFrame]
        : null;

    constructor() {
        super(FrameEvent.CHANGED, 'changed');
    }

    toString(): string {
        return `[object FrameEvent timeline="${this.timeline?.name ?? ''}" layer="${this.layer?.name ?? ''}" frame="${this.timeline?.currentFrame ?? ''}"]`;
    }

    static toString(): string {
        return '[class FrameEvent]';
    }

    static readonly CHANGED = 'frameChanged';
}

export class MouseEvent extends Event {
    public readonly shift: boolean = fl.tools.shiftIsDown;
    public readonly ctrl: boolean = fl.tools.ctlIsDown; // note: "ctl"
    public readonly alt: boolean = fl.tools.altIsDown;
    public readonly x: number = fl.tools.penLoc.x;
    public readonly y: number = fl.tools.penLoc.y;

    constructor() {
        super(MouseEvent.MOVE, 'move');
    }

    toString(): string {
        return `[object MouseEvent x="${this.x}" y="${this.y}" shift="${this.shift}" ctrl="${this.ctrl}" alt="${this.alt}"]`;
    }

    static toString(): string {
        return '[class MouseEvent]';
    }

    static readonly MOVE = 'mouseMove';
}
