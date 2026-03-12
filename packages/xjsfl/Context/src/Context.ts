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
} from "./Context.types";
import * as _ from "lodash";
import { from } from "./from";

const trace = (msg: any) => fl.trace(msg);

export class Context {
    dom: FlashDocument | null = null;
    item: LibraryItem | null = null;
    timeline: Timeline | null = null;
    layer: Layer | null = null;
    frame: Frame | null = null;
    element: FlashElement | null = null;
    context = "";

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
    setDOM(value: DOMInput): this {
        let dom: FlashDocument;
        if (value === true || value === undefined) {
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
    setTimeline(value: TimelineInput): this {
        if (!this.dom) this.setDOM(true);
        let timeline: Timeline | undefined;
        let item: LibraryItem | undefined;
        if (value === true || value === undefined) {
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
    setLayer(value: LayerInput): this {
        if (!this.timeline) this.setTimeline(true);
        let layer: Layer | undefined;
        if (value === true || value === undefined) {
            layer = this.timeline!.layers[this.timeline!.currentLayer];
        } else if (typeof value === "number") {
            layer = this.timeline!.layers[value];
        } else if (typeof value === "string") {
            const indexs = this.timeline!.findLayerIndex(value);
            if (!indexs || indexs.length === 0) {
                throw new ReferenceError(
                    'ReferenceError: "' +
                        value +
                        '" is not a valid layer in Context.setLayer()'
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
    setFrame(value?: FrameInput): this {
        if (!this.layer) throw new Error("Context has no layer");
        let frame: Frame | undefined;
        if (typeof value === "number") {
            frame = this.layer.frames[value];
        } else if (value === true || value === undefined) {
            frame = this.layer.frames[this.timeline!.currentFrame];
        } else if (value instanceof Frame) {
            frame = value;
        } else if (value instanceof RegExp) {
            const index = Number(value.source);
            frame = this.keyframes[index];
        } else if (value instanceof Context) {
            frame = value.frame!;
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
                (e: any) => e.name === value
            ) as FlashElement;
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
        if (this.timeline !== undefined && this.timeline !== null) {
            // change timelines
            if (timeline !== this.timeline) {
                if (this.item) {
                    this.dom?.library.editItem(this.item.name);
                } else {
                    this.dom?.editScene(0);
                }
            }

            // layer and frame
            if (this.layer && this.timeline) {
                // goto layer
                this.timeline.currentLayer = this.layerIndex;

                // frame
                if (this.frame) {
                    // goto frame
                    this.timeline.currentFrame = this.frame.startFrame;
                }
            }
        }

        return this;
    }

    select(addToSelection: boolean = false): this {
        this.goto();

        switch (this.context) {
            case "layer":
                this.selectLayer(addToSelection);
                break;

            case "frame":
            case "keyframe":
                this.selectFrame(addToSelection);
                break;

            case "element":
                this.selectElement(addToSelection);
                break;
        }

        return this;
    }

    selectLayer(addToSelection: boolean = false): this {
        if (!this.timeline || !this.layer) {
            return this;
        }

        const timeline = this.timeline;
        const currentFrame = timeline.currentFrame;

        // deselect everything
        if (!addToSelection) {
            const currentLayer = timeline.currentLayer;

            timeline.currentLayer = 0;
            timeline.setSelectedFrames(0, 0);

            if (timeline.getSelectedFrames().length > 0) {
                timeline.setSelectedFrames(0, 0, false);
            }

            timeline.currentLayer = currentLayer;
        } else {
            const layerIndex = this.layerIndex;
            if (layerIndex === -1) return this;

            const selectedLayers = timeline.getSelectedLayers();
            trace("selectedLayers 2:" + selectedLayers);

            if (!_.includes(selectedLayers, layerIndex)) {
                trace("Selecting > " + layerIndex);
                timeline.setSelectedLayers(layerIndex, false);
            } else {
                trace("NOT Selecting > " + layerIndex);

                const selectedFrames = timeline.getSelectedFrames();

                if (selectedFrames[0] === 0 && selectedFrames[1] === 0) {
                    trace("OK, SELECTING!");
                    timeline.setSelectedLayers(layerIndex, true);
                }

                trace("Sel frames > " + timeline.getSelectedFrames());
            }
        }
        timeline.currentFrame = currentFrame;
        return this;
    }

    selectFrame(addToSelection: boolean = false): this {
        if (!this.timeline || !this.layer || !this.frame) {
            return this;
        }

        const timeline = this.timeline;

        // deselect everything
        if (!addToSelection) {
            timeline.setSelectedFrames(0, 0);
        } else {
            const layerIndex = Number(timeline.findLayerIndex(this.layer.name) || -1);

            if (layerIndex !== -1) {
                timeline.currentLayer = layerIndex;
                timeline.setSelectedFrames(
                    this.frame.startFrame,
                    this.frame.startFrame + this.frame.duration,
                    !addToSelection
                );
                timeline.currentFrame = this.frame.startFrame;
            }
        }
        return this;
    }

    selectElement(addToSelection: boolean = false): this {
        if (!this.element || !this.dom) {
            return this;
        }

        if (!addToSelection) {
            this.dom.selectNone();
            this.dom.selection = [this.element];
        } else {
            let origionSelection = this.dom.selection;
            this.dom.selection = [this.element, ...origionSelection];
        }

        // this.dom.selection = [this.element]
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
