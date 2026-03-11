// export interface FlashElement {
//     name?: string
//     x: number
//     y: number
//     width: number
//     height: number
//
//     scaleX: number
//     scaleY: number
//
//     rotation?: number
//
//     left: number
//     top: number
//
//     elementType?: string
//     libraryItem?: any
// }
//
// export interface FlashDocument {
//     selection: FlashElement[]
//
//     selectNone(): void
//     group(): void
//     duplicateSelection(): void
//     deleteSelection(): void
//
//     rotateSelection(angle: number, corner?: string): void
//     scaleSelection(x: number, y: number, corner?: string): void
//
//     align(type: string): void
//     distribute(type: string, toStage?: boolean): void
//     space(direction: string, stage?: boolean): void
//
//     resetTransformation(): void
// }

export type ElementCallback =
    (element: FlashElement, index: number, elements: FlashElement[]) => any
