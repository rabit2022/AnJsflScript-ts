export type RenameCallback = (
    element: Element,
    index: number,
    elements: Element[]
) => string;


export function createRenameCallback(baseName:string, padding:number = 0, startIndex:number = 1, separator:string = '_'):RenameCallback{
    // 1️⃣ pattern: "name_###" / "name_001"
    const patternMatch = baseName.match(/(.+?)(#+|\d+)$/);
    if (patternMatch) {
        const [, name, numPart] = patternMatch;
        const padLength = numPart.length;
        const start =
            Number.isNaN(Number(numPart)) ? 1 : parseInt(numPart, 10);

        return (_, index) =>
            name + (index + start).toString().padStart(padLength, '0');
    }

    // 2️⃣ normal string mode
    const resolvedBaseName = (baseName || 'clip') + separator;

    return (_, index) => {
        const num = index + startIndex;
        const suffix =
            padding > 0 ?
                num.toString().padStart(padding, '0') :
                String(num);

        return resolvedBaseName + suffix;
    };
}
