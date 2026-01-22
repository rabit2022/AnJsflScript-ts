export function setInstanceNone(elements: any | any[]): void {
    if (!Array.isArray(elements)) {
        elements = [elements];
    }

    elements.forEach(function (element: any) {
        element.colorMode = "none";
    });
}