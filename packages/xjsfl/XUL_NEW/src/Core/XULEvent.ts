/**
 * @file: XULEvent.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/3/18 23:03
 * @project: AnJsflScript-ts
 * @description:
 */

import {XULControl} from "./XULControl";
import {XUL} from "./XUL/XUL";

/**
 * A XUL Event class to pass parameters to event callbacks
 */
export class XULEvent {
    /**
     * The type of event, i.e. 'click', 'change', 'create'
     */
    public readonly type: string;

    /**
     * The xJSFL XULControl the event was dispatched by
     */
    public readonly control: XULControl | null;

    /**
     * The xJSFL XUL instance the control belongs to
     */
    public readonly xul: XUL;

    /**
     * The Flash XMLUI instance the control belongs to
     */
    public readonly xmlui: XMLUI;

    /**
     * Creates an instance of XULEvent.
     * @param type The type of event
     * @param control The XULControl dispatching the event
     * @param xul The XUL instance
     * @param xmlui The XMLUI instance
     */
    constructor(type: string, control: XULControl | null, xul: XUL, xmlui: XMLUI) {
        this.type = type;
        this.control = control;
        this.xul = xul;
        this.xmlui = xmlui;
    }

    /**
     * Returns a string representation of the event
     */
    public toString(): string {
        const controlId = this.control ? ` control="${this.control.id}"` : "";
        return `[object XULEvent type="${this.type}"${controlId} xul="${this.xul.id}"]`;
    }
}
