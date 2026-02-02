interface ElementLike {
    x: number;
    y: number;
    width: number;
    height: number;
    scaleX: number;
    scaleY: number;
    alpha?: number;
    rotation?: number;
    [key: string]: any;
}
type ElementProps = keyof ElementLike;
type AttrInput<K extends ElementProps> =
    | ElementLike[K]
    | ((element: ElementLike, index: number, elements: ElementLike[]) => ElementLike[K]);
    
attr<K extends ElementProps>(
    prop: K | Partial<Record<ElementProps, any>>,
    value?: AttrInput<K>
): this {
    if (typeof prop === 'object') {
        for (const key in prop) {
            this.attr(key as K, (prop as any)[key]);
        }
        return this;
    }

    const name = String(prop) as K;

    if (this.is2DProperty(name)) {
        this.set2DProperty(name, value);
        return this;
    }

    if (this.isEffectProperty(name)) {
        this.setEffectProperty(name, value, arguments[2]);
        return this;
    }

    this.setBasicProperty(name, value);
    return this;
}
private resolveValue<T>(
    value: T | ((element: ElementLike, index: number, elements: ElementLike[]) => T),
    element: ElementLike,
    index: number
): T {
    if (typeof value === 'function') {
        return (value as any)(element, index, this.elements);
    }
    return value;
}
private setBasicProperty<K extends ElementProps>(
    prop: K,
    value: AttrInput<K>
): void {
    for (let i = 0; i < this.elements.length; i++) {
        const element = this.elements[i];
        element[prop] = this.resolveValue(value, element, i);
    }

    this.refresh();
}








private is2DProperty(prop: string): boolean {
    return /^(pos|position|size|scale)$/.test(prop);
}

private isEffectProperty(prop: string): boolean {
    return /^(tint|alpha|brightness)$/.test(prop);
}
private set2DProperty(prop: string, value: ValueInput): void {
    const [xProp, yProp] = this.resolve2DPropNames(prop);

    for (let i = 0; i < this.elements.length; i++) {
        const element = this.elements[i];

        let resolved = this.resolveValue(value, element, i);

        if (!Array.isArray(resolved)) {
            if (typeof resolved === 'object' && resolved.x != null && resolved.y != null) {
                resolved = [resolved.x, resolved.y];
            } else {
                resolved = [resolved, resolved];
            }
        }

        element[xProp] = resolved[0];
        element[yProp] = resolved[1];
    }

    this.refresh();
}
private resolve2DPropNames(prop: string): [string, string] {
    switch (prop) {
        case 'position':
        case 'pos':
            return ['x', 'y'];

        case 'size':
            return ['width', 'height'];

        case 'scale':
            return ['scaleX', 'scaleY'];

        default:
            throw new Error(`Unsupported 2D property: ${prop}`);
    }
}
private setEffectProperty(prop: string, value: any, extra?: any): void {
    switch (prop) {
        case 'tint':
            if (typeof value === 'string' && !value.startsWith('#')) {
                value = '#' + value;
            }
            this.dom.setInstanceTint(value, extra || 100);
            break;

        case 'alpha':
            this.dom.setInstanceAlpha(value);
            break;

        case 'brightness':
            this.dom.setInstanceBrightness(value);
            break;
    }
}
collection.attr('x', 100);

collection.attr('position', { x: 10, y: 20 });

collection.attr({
    x: 100,
    y: 200,
    alpha: 50
});

collection.attr('x', (el, i) => i * 10);












set<K extends ElementProps>(
  key: K,
  value: AttrInput<K>
): this {
  for (let i = 0; i < this.elements.length; i++) {
    const el = this.elements[i];
    el[key] = this.resolveValue(value, el, i);
  }

  this.refresh();
  return this;
}
setMany(
  props: Partial<{ [K in ElementProps]: AttrInput<K> }>
): this {
  for (const k in props) {
    this.set(k as ElementProps, props[k]!);
  }
  return this;
}
translate(x: number, y: number): this {
  return this.setMany({ x, y });
}
resize(width: number, height: number): this {
  return this.setMany({ width, height });
}
scale(scaleX: number, scaleY = sx): this {
  return this.setMany({ scaleX: sx, scaleY: sy });
}
alpha(value: number): this {
  this.dom.setInstanceAlpha(value);
  return this;
}

tint(color: string, strength = 100): this {
  if (!color.startsWith('#')) color = '#' + color;
  this.dom.setInstanceTint(color, strength);
  return this;
}

collection.set('x', 100)

collection.translate(10, 20)

collection.setMany({
  x: 100,
  y: 200
})

collection.alpha(50)

collection.scale(2)

