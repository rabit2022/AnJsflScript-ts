interface XULElementItem {
    label: string;
    value: any;
    id: string;
}

declare module "@xjsfl/XULControl_constructor" {
    export function processCompoundElements(xml: XML, type: string): XULElementItem[];
}