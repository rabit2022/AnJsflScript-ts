

// ------------------------------------------------------------------------------------------------------------------------
//
//  ██████ ██                ██ ██                  ██████              ██
//    ██                     ██                       ██                ██
//    ██   ██ ████████ █████ ██ ██ █████ █████        ██   █████ █████ █████ █████
//    ██   ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██ ██        ██   ██ ██ ██     ██   ██
//    ██   ██ ██ ██ ██ █████ ██ ██ ██ ██ █████        ██   █████ █████  ██   █████
//    ██   ██ ██ ██ ██ ██    ██ ██ ██ ██ ██           ██   ██       ██  ██      ██
//    ██   ██ ██ ██ ██ █████ ██ ██ ██ ██ █████        ██   █████ █████  ████ █████
//
// ------------------------------------------------------------------------------------------------------------------------
// # Timeline Tests

import {SelectorIterators as Iterators} from "@xjafl/Collection"


export namespace TIMELINE {

    // =========================
    // PSEUDO
    // =========================
    export namespace pseudo {

        export function empty(timeline: Timeline): boolean {
            return !Iterators.layers(
                timeline,
                null,
                (frame) => frame.elements.length > 0
            );
        }

        export function animated(timeline: Timeline): boolean {
            return Iterators.layers(
                timeline,
                null,
                (frame) => frame.tweenType !== 'none'
            );
        }

        export function keyframed(timeline: Timeline): boolean {
            return Iterators.layers(
                timeline,
                null,
                (frame) =>
                    frame.startFrame > 0 && frame.elements.length > 0
            );
        }

        export function scripted(timeline: Timeline): boolean {
            return Iterators.layers(
                timeline,
                null,
                (frame) => frame.actionScript !== ''
            );
        }

        export function audible(timeline: Timeline): boolean {
            return Iterators.layers(
                timeline,
                null,
                (frame) => frame.soundLibraryItem != null
            );
        }

    }

    // =========================
    // CUSTOM
    // =========================
    export namespace custom {
        // extension point
    }

}

