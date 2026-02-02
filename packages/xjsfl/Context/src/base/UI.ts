export class UI {
    static get $dom() {
        return fl.getDocumentDOM()!;
    }

    static get $timeline() {
        return UI.$dom.getTimeline();
    }

    static get $library() {
        return UI.$dom.library;
    }

    static get $selection() {
        return UI.$dom.selection;
    }

    static set $selection(elements) {
        var dom = fl.getDocumentDOM();
        if (dom) {
            dom.selectNone();
            dom.selection = elements instanceof Array ? elements : [elements];
        }
    }
}	

