import {Document} from "../Document/Document";

/** Represents a file URI in the format `file:///...` */
export type FileURI = string;

export type PathURI = string;

/** Represents a generic object returned by various search functions */
export interface FoundObject {
    /** The actual element found */
    obj: Element;
    /** The keyframe the element is on */
    keyframe: Frame;
    /** The layer the keyframe is on */
    layer: Layer;
    /** The timeline the layer is on */
    timeline: Timeline;
    /** The parent of the timeline (e.g., a symbol instance) */
    parent: Document | SymbolInstance; // Could be Document or SymbolInstance
}
