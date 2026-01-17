/** Represents a file URI in the format `file:///...` */
type FileURI = string;

type PathURI = string;

/** Represents a generic object returned by various search functions */
interface FoundObject {
    /** The actual element found */
    obj: FlashElement;
    /** The keyframe the element is on */
    keyframe: FlashFrame;
    /** The layer the keyframe is on */
    layer: FlashLayer;
    /** The timeline the layer is on */
    timeline: Timeline;
    /** The parent of the timeline (e.g., a symbol instance) */
    parent: FlashDocument | SymbolInstance; // Could be Document or SymbolInstance
}
