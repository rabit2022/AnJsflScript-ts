/**
 * Parses a compound CSS (or CSS-like) expression into individual segments,
 * splitting by a delimiter while respecting nested structures.
 *
 * This function will NOT split on delimiters that appear inside nested
 * expressions such as (), [] or {}.
 *
 * @param expression  The full selector or DSL expression string
 *                     e.g. ":not(a,b),[x=1,y=2],foo"
 *
 * @param delimiter   One or more characters used to split the expression.
 *                     Defaults to ",".
 *
 * @param nestStart   Characters that increase nesting depth.
 *                     Defaults to "([{".
 *
 * @param nestEnd     Characters that decrease nesting depth.
 *                     Defaults to "}])".
 *
 * @returns           An array of trimmed expression segments.
 *
 * @example
 * parseExpression(':not(body[attr=hello]),hello,[dave=1,ian=2]');
 * // → [':not(body[attr=hello])', 'hello', '[dave=1,ian=2]']
 *
 * @example
 * parseExpression(
 *   'title:Create Bitmap definitions,columns:[120,200],dropdown:Options={one:1,two:2}'
 * );
 */
export function parseExpression(
    expression: string,
    delimiter = ",",
    nestStart = "([{",
    nestEnd = "}])"
): string[] {
    /** Final parsed result */
    const result: string[] = [];

    /** Buffer for the current segment being built */
    let buffer = "";

    /**
     * Current nesting depth.
     * Increases when encountering nestStart characters,
     * decreases when encountering nestEnd characters.
     */
    let depth = 0;

    /** Utility: check if a character is a delimiter */
    const isDelimiter = (ch: string) => delimiter.includes(ch);

    /** Utility: check if a character opens a nested scope */
    const isNestStart = (ch: string) => nestStart.includes(ch);

    /** Utility: check if a character closes a nested scope */
    const isNestEnd = (ch: string) => nestEnd.includes(ch);

    // Iterate through each character in the expression
    for (const ch of expression) {

        // If we encounter a delimiter at the top level,
        // finalize the current buffer and start a new segment
        if (isDelimiter(ch) && depth === 0) {
            if (buffer.trim()) {
                result.push(buffer.trim());
            }
            buffer = "";
            continue;
        }

        // Otherwise, append the character to the buffer
        buffer += ch;

        // Update nesting depth
        if (isNestStart(ch)) {
            depth++;
        } else if (isNestEnd(ch)) {
            depth--;
        }
    }

    // Push the final buffered segment (if any)
    if (buffer.trim()) {
        result.push(buffer.trim());
    }

    return result;
}




// const selectors = parseExpression(
//     ":not(body[attr=hello]),hello,[dave=1,ian=2]"
// );
// console.log(selectors)
// ":not(body[attr=hello]),hello,[dave=1,ian=2]"
//     [ ':not(body[attr=hello])', 'hello', '[dave=1,ian=2]' ]
