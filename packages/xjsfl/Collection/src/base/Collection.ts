import {makeWildcard} from "../ElementCollection/utils/elementUtils";

type Callback<T> = (element: T, index: number, elements: T[]) => void;

export class Collection<T extends Record<string, any>> extends Set<T> {

    constructor(elements?: T[] | T) {
        super();
        if (elements) {
            this.addMany(elements);
        }
    }

    toArray(): T[] {
        return Array.from(this);
    }

    addMany(elements: T[] | T): this {
        if (Array.isArray(elements)) {
            elements.forEach(e => this.add(e));
        } else {
            this.add(elements);
        }
        return this;
    }

    // each(callback: Callback<T>, params: any[] = [], scope?: any): this {
    //     const arr = this.toArray();
    //     const ctx = scope ?? this;
    //
    //     arr.forEach((el, i) => {
    //         callback.apply(ctx, [el, i, arr, ...params]);
    //     });
    //
    //     return this;
    // }
    //
    // reach(callback: Callback<T>, params: any[] = [], scope?: any): this {
    //     const arr = this.toArray().reverse();
    //     const ctx = scope ?? this;
    //
    //     arr.forEach((el, i) => {
    //         callback.apply(ctx, [el, i, arr, ...params]);
    //     });
    //
    //     return this;
    // }
    each(callback: Callback<T>): this {
        const arr = this.toArray();

        arr.forEach((el, i) => {
            callback(el, i, arr);
        });

        return this;
    }

    reach(callback: Callback<T>): this {
        const arr = this.toArray().reverse();

        arr.forEach((el, i) => {
            callback(el, i, arr);
        });

        return this;
    }

    indexOf(element: T): number {
        return this.toArray().indexOf(element);
    }

    get(index: number): T | undefined {
        return this.toArray()[index];
    }

    find(value: string | RegExp | any, property: string = "name"): T[] {
        const arr = this.toArray();

        // string/*   -->   RegExp
        if (typeof value === "string" && value.includes("*")) {
            value = makeWildcard(value, true);
            // const regex = new RegExp("^" + value.replace(/\*/g, ".*") + "$");
            // return arr.filter(e => regex.test(String(e[property])));
        }

        if (value instanceof RegExp) {
            return arr.filter(e => value.test(String(e[property])));
        }

        return arr.filter(e => e[property] === value);
    }

    remove(elementsOrValue: T[] | any, property = "name"): this {
        if (Array.isArray(elementsOrValue)) {
            elementsOrValue.forEach(e => this.delete(e));
        } else {
            const found = this.find(elementsOrValue, property);
            found.forEach(e => this.delete(e));
        }

        return this;
    }

    filter(callback: (element: T, index: number, elements: T[]) => boolean): this {
        const arr = this.toArray();
        const filtered = arr.filter(callback);

        this.clear();
        filtered.forEach(e => this.add(e));

        return this;
    }


    attr<K extends keyof T>(prop: K, value: T[K]): this
    attr<K extends keyof T>(prop: K, value: (el: T, index: number, arr: T[]) => T[K]): this
    attr<K extends keyof T>(
        prop: K,
        value: T[K] | ((el: T, index: number, arr: T[]) => T[K])
    ): this {

        const arr = this.toArray();

        const fn =
            typeof value === "function"
                ? value as (el: T, index: number, arr: T[]) => T[K]
                : () => value;

        arr.forEach((el, i) => {
            el[prop] = fn(el, i, arr);
        });

        return this;
    }


    invoke(name: string, ...params: any[]): this {
        this.forEach(el => {
            const fn = el[name];
            if (typeof fn === "function") {
                fn.apply(el, params);
            }
        });
        return this;
    }

    sort(compareFn?: (a: T, b: T) => number): this {
        const arr = this.toArray().sort(compareFn);

        this.clear();
        arr.forEach(e => this.add(e));

        return this;
    }

    list(label?: string): this {
        console.log(label ?? this.toString(), this.toArray());
        return this;
    }

    toString(): string {
        return `[object Collection length=${this.size}]`;
    }

    static toString = function()
    {
        return '[class Collection]';
    }
}
