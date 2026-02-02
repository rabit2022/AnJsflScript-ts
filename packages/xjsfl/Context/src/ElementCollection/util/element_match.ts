export enum MatchDimension {
  Width = 'width',
  Height = 'height',
  Size = 'size',
}
export enum MatchReference {
  Largest = 'largest',
  Smallest = 'smallest',
  Element = 'element',
  Index = 'index',
  Name = 'name',
}
export interface MatchOptions {
  dimension: MatchDimension;

  reference?: MatchReference;

  element?: Element;
  index?: number;
  name?: string;
}

match(options: MatchOptions): this {
  if (!this.elements.length) {
    return this;
  }

  const {
    dimension,
    reference = MatchReference.Largest,
    element,
    index,
    name,
  } = options;

  const ref = this.resolveMatchReference(reference, {
    element,
    index,
    name,
  });

  if (!ref) {
    return this;
  }

  switch (dimension) {
    case MatchDimension.Width:
      this.attr('width', ref.width);
      break;

    case MatchDimension.Height:
      this.attr('height', ref.height);
      break;

    case MatchDimension.Size:
      this.attr('width', ref.width);
      this.attr('height', ref.height);
      break;
  }

  this.refresh();
  return this;
}

private resolveMatchReference(
  reference: MatchReference,
  options: {
    element?: Element;
    index?: number;
    name?: string;
  }
): Element | null {

  switch (reference) {
    case MatchReference.Element:
      return options.element ?? null;

    case MatchReference.Index:
      return typeof options.index === 'number'
        ? this.elements[options.index] ?? null
        : null;

    case MatchReference.Name:
      return options.name
        ? this.find(options.name) ?? null
        : null;

    case MatchReference.Largest: {
      const w = this.getExtreme(this.elements, 'width');
      const h = this.getExtreme(this.elements, 'height');
      if (!w || !h) return null;

      return {
        width: w.max,
        height: h.max,
      } as Element;
    }

    case MatchReference.Smallest: {
      const w = this.getExtreme(this.elements, 'width');
      const h = this.getExtreme(this.elements, 'height');
      if (!w || !h) return null;

      return {
        width: w.min,
        height: h.min,
      } as Element;
    }
  }
}

el.match({
  dimension: MatchDimension.Size,
  reference: MatchReference.Largest,
});

el.match({
  dimension: MatchDimension.Width,
  reference: MatchReference.Element,
  element: header,
});

el.match({
  dimension: MatchDimension.Height,
  reference: MatchReference.Index,
  index: 0,
});













// 实现层
matchWidth(ref: Element): this
matchHeight(ref: Element): this
matchSize(ref: Element): this

// 函数层
largest(): Element | null
smallest(): Element | null
at(index: number): Element | null
byName(name: string): Element | null

const largest = el.largest();
if (largest) {
  el.matchSize(largest);
}