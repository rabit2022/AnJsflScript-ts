import {getExtremeValues} from "../../utils/elementUtils";
import {ElementCollection} from "../../core/ElementCollection";

export type MatchProp = 'width' | 'height' | 'size'


export type ElementSelector =
    | boolean
    | string
    | number
    | FlashElement
    | undefined


/** -------------------------
 * overload definitions
 * ------------------------- */

export function match(this: ElementCollection, prop: MatchProp): ElementCollection
export function match(this: ElementCollection, prop: MatchProp, element: boolean): ElementCollection
export function match(this: ElementCollection, prop: MatchProp, element: string): ElementCollection
export function match(this: ElementCollection, prop: MatchProp, element: number): ElementCollection
export function match(this: ElementCollection, prop: MatchProp, element: FlashElement): ElementCollection

/** implementation */
export function match(this: ElementCollection, prop: MatchProp, element?: ElementSelector) {
    const self_elements = this.toArray();

    if (self_elements.length === 0) {
        return this
    }

    let target: FlashElement | undefined

    if (element === undefined) {
        element = true
    }

    /** boolean → biggest / smallest */
    if (typeof element === 'boolean') {

        const [minWidthEl, maxWidthEl] =
            getExtremeValues(self_elements, 'width', true) as [FlashElement, FlashElement]

        const [minHeightEl, maxHeightEl] =
            getExtremeValues(self_elements, 'height', true) as [FlashElement, FlashElement]

        target = {
            width: element ? maxWidthEl.width : minWidthEl.width,
            height: element ? maxHeightEl.height : minHeightEl.height
        } as FlashElement

    }
    /** selector */
    else if (typeof element === 'string' || typeof element === 'number') {
        const new_elements = this.find(element)
        for (const element of new_elements) {
            match.call(this, prop, element)
        }
        return this;
    }
    /** element object */
    else {
        target = element
    }

    if (!target) return this

    if (element && element instanceof FlashElement) {

        if (prop === 'width' || prop === 'size') {
            this.attr.call('width', target.width)
        }

        if (prop === 'height' || prop === 'size') {
            this.attr('height', target.height)
        }
    }

    this.refresh()
    return this
}

