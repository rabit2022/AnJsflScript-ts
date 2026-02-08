/**
 * @file: element_order.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2026/2/8 23:32
 * @project: AnJsflScript-ts
 * @description:
 */

type OrderableProp = |
    'random' |
    'name' |
    'elementType' |
    'x' |
    'y' |
    'width' |
    'height' |
    'size' |
    'rotation' |
    'scaleX' |
    'scaleY' |
    'transformX' |
    'transformY' |
    'skewX' |
    'skewY';
type Comparator < T > = (a: T, b: T) => number;

orderBy(prop: OrderableProp, reverseOrder ? : boolean): this;
orderBy(compareFn: Comparator < ElementLike > , reverseOrder ? : boolean): this;


orderBy(
    prop: OrderableProp | Comparator < ElementLike > ,
    reverseOrder = false
): this {
    let cmp: Comparator < ElementLike > | undefined;

    // 1️⃣ 自定义比较函数
    if (typeof prop === 'function') {
        cmp = prop;
    }

    // 2️⃣ 随机排序
    else if (prop === 'random') {
        cmp = () => (Math.random() > 0.5 ? 1 : -1);
    }

    // 3️⃣ 按属性排序
    else {
        cmp = this.createPropertyComparator(prop);
    }

    if (!cmp) {
        console.warn('Invalid property to sort by');
        return this;
    }

    // Flash / DOM selection lifecycle（保持原行为）
    this._deselect(false);

    const arr = [...this.elements].sort(cmp);

    this.dom.selectNone();

    for (const element of arr) {
        // 老 Flash 行为：设置 selection 会 push
        this.dom.selection = [element];
        this.dom.arrange(reverseOrder ? 'back' : 'front');
    }

    this.elements = arr;
    this._reselect();

    return this;
}


private createPropertyComparator(
    prop: Exclude < OrderableProp, 'random' >
): Comparator < ElementLike > {
    return (a, b) => {
        const aVal = this.getOrderValue(a, prop);
        const bVal = this.getOrderValue(b, prop);

        if (aVal < bVal) return -1;
        if (aVal > bVal) return 1;
        return 0;
    };
}


private getOrderValue(
    element: ElementLike,
    prop: Exclude < OrderableProp, 'random' >
): number | string {
    switch (prop) {
        case 'size':
            return element.width * element.height;

        default:
            return (element as any)[prop];
    }
}

collection.orderBy('x');
collection.orderBy('size', true);
collection.orderBy('random');

collection.orderBy((a, b) => a.y - b.y);

// ❌ 立刻 TS 报错
collection.orderBy('foo');

















type Comparator < T > = (a: T, b: T) => number;

sort(compare: Comparator < ElementLike > ): this {
    const sorted = [...this.elements].sort(compare);

    this.applyOrder(sorted);

    return this;
}
reverse(): this {
    const reversed = [...this.elements].reverse();

    this.applyOrder(reversed, true);
    return this;
}

private applyOrder(sorted: ElementLike[], reverseOrder: boolean = false): void {
    this._deselect(false);

    this.dom.selectNone();

    for (const el of sorted) {
        this.dom.selection = [el];
        // 排序图层
        this.dom.arrange(reverseOrder ? 'back' : 'front');

    }

    this.elements = sorted;

    this._reselect();
}

by < K extends keyof ElementLike > (key: K): Comparator < ElementLike > {
    return (a, b) => {
        const av = a[key];
        const bv = b[key];
        return av < bv ? -1 : av > bv ? 1 : 0;
    };
}
bySize(): Comparator < ElementLike > {
    return (a, b) =>
        a.width * a.height - b.width * b.height;
}
shuffle(): this {
    const arr = [...this.elements];

    for (let i = arr.length - 1; i > 0; i--) {
        const j = (Math.random() * (i + 1)) | 0;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    this.applyOrder(arr);

    return this;
}

collection.sort(collection.by('x'));

collection.sort(collection.by('y'));

collection.sort(collection.bySize());

collection.shuffle();

collection.sort((a, b) => a.y - b.y);