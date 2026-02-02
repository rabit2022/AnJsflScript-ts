import {} from 'overload-js';

class Context {
    dom: FlashDocument | undefined
    item: LibraryItem | undefined
    timeline: Timeline | undefined
    layer: Layer | undefined
    frame: Frame | undefined
    element: FlashElement | undefined

    context: string = ''

    setDOM(value) {
        // variables
        var dom;

        // true
        if (value === true || value === undefined) {
            dom = fl.getDocumentDOM();
        }
// Document
        else if (value instanceof Document) {
            dom = value;
        }
// Document index
        else if (typeof value === 'number') {
            dom = fl.documents[value];
        }
// Document name
        if (typeof value === 'string') {
            // if (/\.fla$/.test(value)) {
            //     return (this.setDOM(new File(value)));
            // } else {
                dom = fl.documents.filter(function (e) {
                    return e.name == value;
                })[0];
            // }
        }
// File
//         else if (value instanceof File) {
//             if (value.exists) {
//                 dom = fl.documents.filter(function (doc) {
//                     return doc.pathURI == value.uri;
//                 })[0]
//                 if (dom == undefined) {
//                     dom = fl.openDocument(value.uri);
//                 }
//             }
//         }
// Context
        else if (value instanceof Context) {
            dom = value.dom;
        }
// context
        if (dom) {
            // nullify related elements if timeline changes
            if (this.dom != dom) {
                this.item = null;
                this.timeline = null;
                this.layer = null;
                this.frame = null;
            }
            // properties
            this.context = 'dom';
            this.dom = dom;
        }
// return
        return this;
    }

,

}