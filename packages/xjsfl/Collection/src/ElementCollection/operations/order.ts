import {ElementCollection} from "../core/ElementCollection";

export type OrderableProp =
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
    'skewY'|'left' | 'top';
type Comparator<T> = (a: T, b: T) => number;

// export function orderBy(this: ElementCollection, prop: 'random' | OrderableProp, reverseOrder ?: boolean): ElementCollection;
// export function orderBy(this: ElementCollection, compareFn: Comparator<FlashElement>, reverseOrder ?: boolean): ElementCollection;


export function orderBy(this: ElementCollection, prop: 'random' | OrderableProp | Comparator<FlashElement>, reverseOrder = false) {
    let cmp: Comparator<FlashElement> | undefined;

    if (typeof prop === 'function') {
        // 1️⃣ 自定义比较函数
        cmp = prop;
    } else if (prop === 'random') {
        // 2️⃣ 随机排序
        cmp = () => (Math.random() > 0.5 ? 1 : -1);
    } else {
        // 3️⃣ 按属性排序
        cmp = createPropertyComparator(prop);
    }

    if (!cmp) {
        console.warn('Invalid property to sort by');
        return this;
    }

    // Flash / DOM selection lifecycle（保持原行为）
    this._deselect(false);

    // const arr = [...this.elements].sort(cmp);
    const self_elements = this.toArray();
    const arr = self_elements.sort(cmp);

    this.dom.selectNone();

    for (const element of arr) {
        // 老 Flash 行为：设置 selection 会 push
        this.dom.selection = [element];
        this.dom.arrange(reverseOrder ? 'back' : 'front');
    }

    // this.elements = arr;
    this.clear();
    this.addMany(arr);

    this._reselect();

    return this;
}


function createPropertyComparator(
    prop: OrderableProp
): Comparator<FlashElement> {
    return (a, b) => {
        const aVal = getOrderValue(a, prop);
        const bVal = getOrderValue(b, prop);

        if (aVal < bVal) return -1;
        if (aVal > bVal) return 1;
        return 0;
    };
}


function getOrderValue(
    element: FlashElement,
    prop: OrderableProp
): number | string {
    switch (prop) {
        case 'size':
            return element.width * element.height;

        default:
            return (element as any)[prop];
    }
}