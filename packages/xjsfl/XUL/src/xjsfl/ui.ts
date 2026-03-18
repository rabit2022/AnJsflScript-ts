import {BASEURI} from "./uri";

type XmlSettings = Record<string, any>;




export class XjsflUI {
    private static dialogs: XUL[] = [];

    /**
     * Show a new XUL dialog, nesting if one is already shown
     */
    static show(xul: XUL): XmlSettings {
        // clear dialogs if there's no current XMLUI
        const xulid = fl.xmlui.get("xulid");
        if (xulid === undefined) {
            XjsflUI.dialogs = [];
        }

        // assign id
        xul.id = XjsflUI.dialogs.length;

        // build XML string
        const xml = xul.xml
            .prettyPrint()
            .replace(/{xulid}/g, String(xul.id))
            .replace(
                /xjsfl\.ui\.handleEvent\(0,/g,
                `xjsfl.ui.handleEvent(${xul.id},`
            );

        // resolve uri
        const uri = xul.uri || BASEURI + "core/ui/dialog.xul";

        // ensure writable
        if (FLfile.exists(uri)) {
            FLfile.setAttributes(uri, "W");
        }

        // write file
        FLfile.write(uri, xml);

        // register dialog
        XjsflUI.dialogs.push(xul);

        console.log(`Showing XUL dialog "${xul.title ?? ""}"`);

        // show dialog
        const settings = fl.xmlPanel(uri);

        // unregister
        XjsflUI.dialogs.pop();

        return settings;
    }

    static handleEvent(xulid: number, type: string, id: string): void {
        const dialog = XjsflUI.dialogs[xulid];
        if (dialog) {
            dialog.handleEvent(type, id);
        }
    }

    static getFlashData<T = any>(): T | null {
        const xul = XjsflUI.dialogs[XjsflUI.dialogs.length - 1];
        return xul ? (xul.flashData as T) : null;
    }

    static setFlashData<T = any>(data: T): void {
        const xul = XjsflUI.dialogs[XjsflUI.dialogs.length - 1];
        if (xul) {
            xul.flashData = data;
        }
    }
}
