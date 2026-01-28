import Table from 'cli-table3';

// 格式化任意值用于表格显示
function formatValue(value: unknown): string {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (typeof value === 'string') return value;
    if (typeof value === 'number' || typeof value === 'boolean') return String(value);
    if (Array.isArray(value)) return `[ $ {value.length} items]`;
    if (typeof value === 'object') return '{...}';
    return String(value);
}

// 打印对象数组或普通数组
function printArrayTable<T extends Record<string, unknown> | unknown>(
    array: T[],
    columns?: string[]
): string {
    if (array.length === 0) return '[]';

    const firstItem = array[0];

    // 对象数组
    if (firstItem !== null && typeof firstItem === 'object' && !Array.isArray(firstItem)) {
        const allKeys = new Set<string>();
        for (const item of array) {
            if (item && typeof item === 'object' && !Array.isArray(item)) {
                Object.keys(item).forEach(key => allKeys.add(key));
            }
        }

        const columnList = columns
            ? columns.filter(col => allKeys.has(col))
            : Array.from(allKeys);

        const table = new Table({
            head: ['(index)', ...columnList],
            chars: {
                top: '─', 'top-mid': '┬', 'top-left': '┌', 'top-right': '┐',
                bottom: '─', 'bottom-mid': '┴', 'bottom-left': '└', 'bottom-right': '┘',
                left: '│', 'left-mid': '├', 'mid': '─', 'mid-mid': '┼',
                right: '│', 'right-mid': '┤', middle: '│'
            },
            style: { head: [], border: [] }
        });

        array.forEach((item, index) => {
            const row = [index];
            for (const col of columnList) {
                const val = (item as Record<string, unknown>)?.[col];
                row.push(formatValue(val) as any);
            }
            table.push(row);
        });

        return table.toString();
    }

    // 基本类型数组
    const table = new Table({
        head: ['(index)', 'Value'],
        chars: {
            top: '─', 'top-mid': '┬', 'top-left': '┌', 'top-right': '┐',
            bottom: '─', 'bottom-mid': '┴', 'bottom-left': '└', 'bottom-right': '┘',
            left: '│', 'left-mid': '├', 'mid': '─', 'mid-mid': '┼',
            right: '│', 'right-mid': '┤', middle: '│'
        }
    });

    array.forEach((item, index) => {
        table.push([index, formatValue(item)]);
    });

    return table.toString();
}

// 打印普通对象
function printObjectTable(obj: Record<string, unknown>, columns?: string[]): string {
    const keys = columns ?? Object.keys(obj);
    const table = new Table({
        head: ['Key', 'Value'],
        chars: {
            top: '─', 'top-mid': '┬', 'top-left': '┌', 'top-right': '┐',
            bottom: '─', 'bottom-mid': '┴', 'bottom-left': '└', 'bottom-right': '┘',
            left: '│', 'left-mid': '├', 'mid': '─', 'mid-mid': '┼',
            right: '│', 'right-mid': '┤', middle: '│'
        }
    });

    for (const key of keys) {
        if (obj.hasOwnProperty(key)) {
            table.push([key, formatValue(obj[key])]);
        }
    }

    return table.toString();
}

// 原 consoleTable 改为 tableToString
export function tableToString(data: unknown, columns?: string[]): string {
    if (data == null) {
        return 'undefined';
    }
    if (Array.isArray(data)) {
        if (data.length === 0) {
            return '[]';
        }
        return printArrayTable(data, columns);
    }
    if (typeof data === 'object') {
        return printObjectTable(data as Record<string, unknown>, columns);
    }
    return String(data);
}

// // 如果仍需要一个全局打印函数，可以保留这个
// export function consoleTable(data: unknown, columns?: string[]): void {
//     console.log(tableToString(data, columns));
// }

export class CustomConsole {
    readonly _indentLevel: number;
    readonly _indentStr: string;

    constructor(indentLevel = 0, indentStr = ' ') {
        this._indentLevel = indentLevel;
        this._indentStr = indentStr;
    }

    table(data: unknown, columns?: string[]): void {
        const output = tableToString(data, columns);
        const indent = this._indentStr.repeat(this._indentLevel);
        const indented = output
            .split('\n')
            .map(line => line ? indent + line : '')
            .join('\n');
        console.log(`\n${indented}`);
    }
}
// ===== 示例用法（开发时可保留，发布时建议移除） =====
/*
const users = [
  { name: 'Alice', age: 25, email: 'alice@example.com' },
  { name: 'Bob', age: 30, email: 'bob@example.com' },
  { name: 'Charlie', age: 35 }
];

const c = new CustomConsole(1);
c.table(users);
c.table(users, ['name', 'age']);
c.table(['apple', 'banana']);
c.table({ foo: 'bar', count: 42, active: true });
*/

/*
⚡admin LOG ❯❯
 ┌─────────┬─────────┬─────┬───────────────────┐
 │ (index) │ name    │ age │ email             │
 ├─────────┼─────────┼─────┼───────────────────┤
 │ 0       │ Alice   │ 25  │ alice@example.com │
 ├─────────┼─────────┼─────┼───────────────────┤
 │ 1       │ Bob     │ 30  │ bob@example.com   │
 ├─────────┼─────────┼─────┼───────────────────┤
 │ 2       │ Charlie │ 35  │ undefined         │
 └─────────┴─────────┴─────┴───────────────────┘


⚡admin LOG ❯❯
 ┌─────────┬─────────┬─────┐
 │ (index) │ name    │ age │
 ├─────────┼─────────┼─────┤
 │ 0       │ Alice   │ 25  │
 ├─────────┼─────────┼─────┤
 │ 1       │ Bob     │ 30  │
 ├─────────┼─────────┼─────┤
 │ 2       │ Charlie │ 35  │
 └─────────┴─────────┴─────┘


⚡admin LOG ❯❯
 ┌─────────┬────────┐
 │ (index) │ Value  │
 ├─────────┼────────┤
 │ 0       │ apple  │
 ├─────────┼────────┤
 │ 1       │ banana │
 └─────────┴────────┘


⚡admin LOG ❯❯
 ┌────────┬───────┐
 │ Key    │ Value │
 ├────────┼───────┤
 │ foo    │ bar   │
 ├────────┼───────┤
 │ count  │ 42    │
 ├────────┼───────┤
 │ active │ true  │
 └────────┴───────┘


 */