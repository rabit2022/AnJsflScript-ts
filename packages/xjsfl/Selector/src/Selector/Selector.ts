/**
 * @file: Selector.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

/* -----------------------------------------------------------
 * Selector (TypeScript rewrite, no external deps)
 * -----------------------------------------------------------
 * Holds selector rules and parameters to test items/elements
 * --------------------------------------------------------- */

/** Range 结构 */
interface SelectorRange {
    min: number;
    max: number;
}

/** Selector 方法签名 */
type SelectorMethod = (...args: any[]) => any;

/**
 * Selector class
 */
export class Selector {
    /** 原始 selector 字符串 */
    pattern: string = "";

    /** 对象类型（core / element / item 等） */
    object: string = "";

    /** 子类型（combo / filter 等） */
    type: string = "";

    /** selector 名称 */
    name: string = "";

    /** 实际执行的测试方法 */
    method: SelectorMethod | null = null;

    /** 传给 method 的参数 */
    params: any[] | null = null;

    /** 数值范围 */
    range: SelectorRange | null = null;

    /** 是否保留测试通过的项 */
    keep: boolean = true;

    constructor(pattern: string) {
        this.pattern = pattern;
    }

    /**
     * 过滤列表
     */
    filter<T>(items: T[], scope: any): T[] {
        if (!this.method || !this.params) return [];

        // items 永远作为第一个参数
        this.params[0] = items;

        const results = this.method.apply(scope, this.params);
        // return Selector.toUniqueArray(results);
        return Array.from(new Set(results));
    }

    /**
     * 测试单个元素
     */
    test(item: any, scope: any): boolean {
        if (!this.method || !this.params) return false;

        this.params[0] = item;
        const state = Boolean(this.method.apply(scope, this.params));
        return this.keep ? state : !state;
    }

    toString(): string {
        return `[object Selector type="${this.type}" pattern="${this.pattern}"]`;
    }

    /* -----------------------------------------------------------
     * static helpers
     * --------------------------------------------------------- */

    static override toString(): string {
        return "[class Selector]";
    }

    /**
     * 展开通配符和数值区间，生成 RegExp
     */
    static makeRX(expression: string, selector: Selector): RegExp {
        // expand wildcards (*)
        expression = expression.replace(/\*/g, ".*?");

        // expand ranges {min|max}
        expression = Selector.makeRange(expression, selector)
            .replace(/\//g, "\\/")
            .replace(/([\(\)])/g, "\\$1");

        return new RegExp(`^${expression}$`, "i");
    }

    /**
     * 解析范围表达式 {min|max}
     */
    static makeRange(expression: string, selector: Selector): string {
        const rxRange = /{(-?[\d.]+)\|(-?[\d.]+)}/;
        const matches = expression.match(rxRange);

        if (matches) {
            expression = expression.replace(rxRange, "([\\d\\.]+)");
            selector.range = {
                min: parseFloat(matches[1]),
                max: parseFloat(matches[2])
            };
        }

        return expression;
    }
}
