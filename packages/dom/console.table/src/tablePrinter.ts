// tablePrinter.ts
import { table as renderTable } from 'table';

function ensureRows(data: unknown, columns?: string[]) {
    if (data == null) return [['null']];

    const items = Array.isArray(data) ? data : [data];
    if (items.length === 0) return [['(empty)']];

    const cols = columns || (
        typeof items[0] === 'object' && items[0] !== null
            ? Object.keys(items[0])
            : ['value']
    );

    const head = cols;
    const body = items.map(item =>
        cols.map(col =>
            String(
                typeof item === 'object' && item !== null
                    ? (item as Record<string, unknown>)[col]
                    : item
            )
        )
    );

    return [head, ...body];
}

export class ConsoleTablePrinter {
    private indent: string;

    constructor(indentLevel = 0, indentChar = ' ') {
        this.indent = indentChar.repeat(indentLevel);
    }

    table(data: unknown, columns?: string[]): void {
        const rows = ensureRows(data, columns);
        const output = renderTable(rows);
        const indented = output
            .split('\n')
            .map(line => line ? this.indent + line : '')
            .join('\n');
        console.log(indented);
    }
}