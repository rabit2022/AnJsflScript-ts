// layerParenting.d.ts

import {Matrix} from "../Matrix/Matrix";

/**
 * Represents a layer in Adobe Animate timeline that supports rig parenting.
 */
export interface Layer {
    /**
     * Returns the rig matrix of the particular frame.
     *
     * @param frameIndex - An integer that specifies absolute frame index.
     * @returns A matrix object representing the rig transformation at the given frame.
     *
     * @example
     * // The following example gets the rig matrix from the first frame of the ninth layer:
     * var matrix = an.getDocumentDOM().getTimeline().layers[8].getRigMatrixAtFrame(0);
     */
    getRigMatrixAtFrame(frameIndex: number): Matrix;

    /**
     * Returns the layer parent of the given frame.
     *
     * @param frameIndex - An integer that specifies absolute frame index.
     * @returns The layer object that is the parent at the specified frame.
     *
     * @example
     * // The following example gets the layer parent from the first frame of the ninth layer:
     * var myparent = an.getDocumentDOM().getTimeline().layers[8].getRigParentAtFrame(0);
     */
    getRigParentAtFrame(frameIndex: number): Layer;

    /**
     * Sets the layer parent of the particular frame.
     *
     * @param frameIndex - An integer that specifies absolute frame index.
     * @param layer - The layer object to be set as parent.
     * @returns Nothing.
     *
     * @example
     * // The following example gets the layer parent of the first frame and sets the same to the tenth frame of the first layer:
     * var myParent = an.getDocumentDOM().getTimeline().layers[0].getRigParentAtFrame(0);
     * an.getDocumentDOM().getTimeline().layers[0].setRigParentAtFrame(9, myParent);
     */
    setRigParentAtFrame(frameIndex: number, layer: Layer): void;
}

