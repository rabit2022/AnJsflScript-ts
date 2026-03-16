/**
 * @file: Context.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/12 23:39
 * @project: AnJsflScript-ts
 * @description:
 */

// Context.ts
import {
    DOMInput,
    ElementInput,
    FrameInput,
    LayerInput,
    TimelineInput
} from "./types/Context.types";
import { ContextType, SelectionMode } from "./types/select.types";
import { from } from "./factory";
import * as _ from "lodash";

export class Context {
    dom: FlashDocument | null = null;
    item: LibraryItem | null = null;
    timeline: Timeline | null = null;
    layer: Layer | null = null;
    frame: Frame | null = null;
    element: FlashElement | null = null;
    context: ContextType = "dom";

    constructor(
        dom?: DOMInput,
        timeline?: TimelineInput,
        layer?: LayerInput,
        frame?: FrameInput,
        element?: ElementInput
    ) {
        if (dom) this.setDOM(dom);
        if (this.dom && timeline) this.setTimeline(timeline);
        if (this.timeline && layer) this.setLayer(layer);
        if (this.layer && this.layer.layerType !== "folder") this.setFrame(frame);
        if (this.frame && element) this.setElement(element);
    }

    // ------------------------------------------------
    // Static
    static create(
        dom: boolean = true,
        timeline: boolean = true,
        layer: boolean = true,
        frame: boolean = true,
        element: boolean = true
    ): Context {
        const context = new Context(dom, timeline, layer, frame, element);
        if (context.dom) {
            context.dom.livePreview = true;
        }
        return context;
    }

    static from = from;

    // ------------------------------------------------
    // getters
    get keyframes(): Frame[] {
        if (!this.layer) return [];
        const keyframes: Frame[] = [];
        for (let i = 0; i < this.layer.frameCount; i++) {
            const frame = this.layer.frames[i];
            if (frame.startFrame === i) {
                keyframes.push(frame);
            }
        }
        return keyframes;
    }

    get layerIndex(): number {
        if (!this.timeline || !this.layer) return -1;
        const name = this.layer.name;
        this.layer.name = "__Context__";
        const index = this.timeline.findLayerIndex(this.layer.name)![0];
        this.layer.name = name;
        return index;
    }

    // ------------------------------------------------
    // DOM
    setDOM(value: DOMInput = true): this {
        let dom: FlashDocument;
        if (value === true) {
            dom = fl.getDocumentDOM()!;
        } else if (value instanceof Context) {
            dom = value.dom!;
        } else if (typeof value === "number") {
            dom = fl.documents[value];
        } else if (typeof value === "string") {
            dom = fl.documents.find((d: any) => d.name === value)!;
        } else {
            dom = value as FlashDocument;
        }

        if (dom) {
            if (this.dom !== dom) {
                this.item = null;
                this.timeline = null;
                this.layer = null;
                this.frame = null;
            }
            this.dom = dom;
            this.context = "dom";
        }
        return this;
    }

    // ------------------------------------------------
    // Timeline
    setTimeline(value: TimelineInput = true): this {
        if (!this.dom) this.setDOM(true);
        let timeline: Timeline | undefined;
        let item: LibraryItem | undefined;
        if (value === true) {
            timeline = this.dom!.getTimeline();
        } else if (value instanceof Timeline) {
            timeline = value;
        } else if (value instanceof SymbolItem) {
            item = value;
            timeline = value.timeline;
        } else if (value instanceof SymbolInstance) {
            item = value.libraryItem;
            timeline = (item as SymbolItem).timeline;
        } else if (value instanceof Context) {
            timeline = value.timeline!;
            item = value.item!;
        }
        if (timeline) {
            if (this.timeline !== timeline) {
                this.layer = null;
                this.frame = null;
            }
            this.timeline = timeline;
            this.item = item || null;
            this.context = "timeline";
        }
        return this;
    }

    // ------------------------------------------------
    // Layer
    setLayer(value: LayerInput = true): this {
        if (!this.timeline) this.setTimeline(true);
        let layer: Layer | undefined;
        if (value === true) {
            layer = this.timeline!.layers[this.timeline!.currentLayer];
        } else if (typeof value === "number") {
            layer = this.timeline!.layers[value];
        } else if (typeof value === "string") {
            const indexs = this.timeline!.findLayerIndex(value);
            if (!indexs || indexs.length === 0) {
                throw new ReferenceError(
                    `ReferenceError: "${value}" is not a valid layer in Context.setLayer()`
                );
            }

            let index = indexs[0];
            layer = this.timeline!.layers[index];
        } else if (value instanceof Context) {
            layer = value.layer!;
        } else {
            layer = value as Layer;
        }

        if (layer) {
            if (this.layer !== layer) this.frame = null;
            this.layer = layer;
            this.context = "layer";
        }
        return this;
    }

    // ------------------------------------------------
    // Frame
    setFrame(value: FrameInput = true): this {
        if (!this.layer) throw new Error("Context has no layer");
        let frame: Frame | undefined;
        if (typeof value === "number") {
            frame = this.layer.frames[value];
        } else if (value === true) {
            frame = this.layer.frames[this.timeline!.currentFrame];
        } else if (value instanceof Frame) {
            frame = value;
        } else if (value instanceof RegExp) {
            const index = Number(value.source);
            frame = this.keyframes[index];
        } else if (value instanceof Context) {
            frame = value.frame!;
        } else if (typeof value === "string") {
            let layers = this.timeline!.layers;

            for (let _layer of layers) {
                for (let _frame of _layer.frames) {
                    if (_frame.name === value) {
                        this.layer = _layer;
                        frame = _frame;
                        break;
                    }
                }
                if (frame) {
                    break;
                }
            }
        }

        if (frame) {
            this.frame = frame;
            this.context = "frame";
        }
        return this;
    }

    setKeyframe(keyframeIndex: number, layer: LayerInput) {
        // update the layer, if supplied
        if (layer) {
            this.setLayer(layer);
        }

        // exit early if no timeline
        if (!this.timeline) {
            throw new ReferenceError(
                "ReferenceError: Cannot set Keyframe as Context has no Timeline"
            );
        }

        // find the keyframe
        var keyframe = this.keyframes[keyframeIndex];
        if (keyframe) {
            this.setFrame(keyframe);
        }

        return this;
    }

    // ------------------------------------------------
    // Element
    setElement(value: ElementInput): this {
        if (!this.frame) throw new Error("Context has no frame");
        if (value === true) {
            this.element = this.frame.elements[0];
        } else if (typeof value === "number") {
            this.element = this.frame.elements[value];
        } else if (typeof value === "string") {
            this.element = this.frame.elements.find(
                (e: FlashElement) => e.name === value
            )!;
        } else if (value instanceof Context) {
            this.element = value.element!;
        } else {
            this.element = value as FlashElement;
        }

        if (this.element) this.context = "element";
        return this;
    }

    // ------------------------------------------------
    // Navigation
    update(dom: DOMInput, timeline: TimelineInput, layer: LayerInput, frame: FrameInput) {
        if (dom !== false) this.setDOM(true);
        if (timeline !== false) this.setTimeline(true);
        if (layer !== false) this.setLayer(true);
        if (frame !== false) this.setFrame(true);
        //if(element !== false)
        //	this.setElement(true);
        //Context.apply(this, [true, true, true, true, 0]);
    }

    goto(): this {
        // current context
        const dom: FlashDocument = fl.getDocumentDOM()!;
        const timeline: Timeline = dom.getTimeline();

        // document
        if (dom !== this.dom && this.dom) {
            fl.setActiveWindow(this.dom);
        }

        // check timeline
        if (this.timeline === undefined || this.timeline === null) return this;
        // change timelines
        if (timeline !== this.timeline) {
            if (this.item) {
                this.dom?.library.editItem(this.item.name);
            } else {
                this.dom?.editScene(0);
            }
        }

        if (this.layer === undefined || this.layer === null) return this;
        // goto layer
        this.timeline.currentLayer = this.layerIndex;

        if (this.frame === undefined || this.frame === null) return this;
        // goto frame
        this.timeline.currentFrame = this.frame.startFrame;

        return this;
    }

    /**
     * Select current context
     */
    select(mode: SelectionMode = SelectionMode.Replace): this {
        this.goto();

        switch (this.context) {
            case "layer":
                this.selectLayer(mode);
                break;
            case "frame":
            case "keyframe":
                this.selectFrame(mode);
                break;
            case "element":
                this.selectElement(mode);
                break;
        }

        return this;
    }

    /**
     * Select layer
     */
    private selectLayer(mode: SelectionMode): this {
        if (!this.timeline || !this.layer) return this;

        const timeline = this.timeline;
        const currentFrame = timeline.currentFrame;
        const layerIndex = this.layerIndex;

        switch (mode) {
            case SelectionMode.Clear: {
                const currentLayer = timeline.currentLayer;

                // deselect - HACK: bReplace is actually a toggle, so we need to check the toggled state
                timeline.currentLayer = 0;
                timeline.setSelectedFrames(0, 0);

                if (timeline.getSelectedFrames().length > 0) {
                    timeline.setSelectedFrames(0, 0, false);
                }

                // reset current layer and frame
                timeline.currentLayer = currentLayer;
                break;
            }

            case SelectionMode.Add: {
                if (layerIndex !== -1) {
                    const selectedLayers = timeline.getSelectedLayers();

                    if (!_.includes(selectedLayers,layerIndex)) {
                        timeline.setSelectedLayers(layerIndex, false);
                    }
                }

                break;
            }

            case SelectionMode.Replace: {
                if (layerIndex !== -1) {
                    timeline.setSelectedLayers(layerIndex, true);
                }

                break;
            }
        }

        timeline.currentFrame = currentFrame;

        return this;
    }

    /**
     * Select frame
     */
    private selectFrame(mode: SelectionMode): this {
        if (!this.timeline || !this.layer || !this.frame) return this;

        const timeline = this.timeline;

        switch (mode) {
            case SelectionMode.Clear:
                timeline.setSelectedFrames(0, 0);
                break;

            case SelectionMode.Add:
            case SelectionMode.Replace: {
                const layerIndex = Number(timeline.findLayerIndex(this.layer.name) ?? -1);

                if (layerIndex !== -1) {
                    timeline.currentLayer = layerIndex;

                    const replace = mode === SelectionMode.Replace;

                    timeline.setSelectedFrames(
                        this.frame.startFrame,
                        this.frame.startFrame + this.frame.duration,
                        replace
                    );

                    timeline.currentFrame = this.frame.startFrame;
                }

                break;
            }
        }

        return this;
    }

    /**
     * Select element
     */
    private selectElement(mode: SelectionMode): this {
        if (!this.element || !this.dom) return this;

        switch (mode) {
            case SelectionMode.Clear:
                this.dom.selectNone();
                break;

            case SelectionMode.Replace:
                this.dom.selectNone();
                this.dom.selection = [this.element];
                break;

            case SelectionMode.Add:
                this.dom.selection = [this.element];
                break;
        }

        return this;
    }

    // ------------------------------------------------
    // Clone
    clone(): Context {
        return new Context(this.dom!, this.timeline!, this.layer!, this.frame!);
    }

    // ------------------------------------------------
    toString(): string {
        let elementString = "";
        if (this.element) {
            if (this.element.name) {
                elementString = `${this.element.name}`;
            } else if (this.element.elementType === "instance") {
                elementString = `<unnamed ${this.element.elementType}>`;
            } else {
                elementString = `<${this.element.elementType}>`;
            }
        }

        return `[object Context${this.dom ? ` dom="${this.dom.name}"` : ""}${
            this.timeline ? ` timeline="${this.timeline.name}"` : ""
        }${this.layer ? ` layer[${this.layerIndex}]="${this.layer.name}"` : ""}${
            this.frame
                ? ` keyframe[${this.keyframes.indexOf(this.frame)}]=${this.frame.startFrame}`
                : ""
        }${this.element ? ` element="${elementString}"` : ""}]`;
    }

    static toString(): string {
        return "[class Context]";
    }
}
