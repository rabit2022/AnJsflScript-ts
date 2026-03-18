/**
 * @file: UI.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

export class UI {
    static get $dom(): FlashDocument {
        return fl.getDocumentDOM()!;
    }

    static get $timeline() {
        return UI.$dom.getTimeline();
    }

    static get $library() {
        return UI.$dom.library;
    }

    static get $selection(): FlashElement[] {
        return UI.$dom.selection;
    }

    static set $selection(elements) {
        var dom = fl.getDocumentDOM();
        if (dom) {
            dom.selectNone();
            dom.selection = elements instanceof Array ? elements : [elements];
        }
    }

    /**
     * Gets the name of a library item without the full library path
     * Returns empty string if item is invalid or has no name
     * @param item A LibraryItem object
     * @returns The item name without path
     */
    static getItemName(item: LibraryItem): string {
        if (!item || !item.name) {
            return "";
        }
        const parts = item.name.split("/");
        return parts[parts.length - 1];
    }

    /**
     * Sets the name of a library item without affecting its path
     * Does nothing if item is invalid
     * @param item A LibraryItem object
     * @param value The new item name
     */
    static setItemName(item: any, value: string): void {
        if (item) {
            // Get current path
            const parts = item.name.split("/");
            if (parts.length > 1) {
                // Keep the path, change only the last part (the name)
                parts[parts.length - 1] = value;
                item.name = parts.join("/");
            } else {
                // No path, just set the name
                item.name = value;
            }
        }
    }
}
