export class UI{
    static get $dom(){
        return fl.getDocumentDOM()!;
    }
    static get  $selection{
        return UI.$dom.selection;
    }
}