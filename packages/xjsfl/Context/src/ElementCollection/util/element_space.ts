type SpaceDirection = 'horizontal' | 'vertical';

interface SpaceOptions {
  direction?: SpaceDirection;

  /** 
   * 固定间距（px）
   * 设置后将使用自定义 spacing，而不是 JSFL space()
   */
  gap?: number;

  /**
   * 是否使用舞台边界（仅对根元素有效）
   * 等价于 JSFL space(direction, true)
   */
  useDocumentBounds?: boolean;
}


space(
  options: SpaceDirection | number | SpaceOptions,
  secondary?: number | boolean
): this {

  if (!this.elements.length) {
    return this;
  }

  // ----------------------------
  // 参数归一化
  // ----------------------------
  let direction: SpaceDirection = 'horizontal';
  let gap: number | undefined;
  let useDocumentBounds = false;

  if (typeof options === 'string') {
    direction = options;
    if (typeof secondary === 'number') gap = secondary;
    if (typeof secondary === 'boolean') useDocumentBounds = secondary;
  }
  else if (typeof options === 'number') {
    gap = options;
  }
  else {
    ({
      direction = 'horizontal',
      gap,
      useDocumentBounds = false,
    } = options);
  }

  // ----------------------------
  // 自定义 spacing（固定间距）
  // ----------------------------
  if (typeof gap === 'number') {
    this.spaceWithGap(direction, gap);
    return this;
  }

  // ----------------------------
  // JSFL 原生 spacing
  // ----------------------------
  this._deselect(false);
  this.dom.selectNone();
  this.dom.selection = this.elements;

  this.dom.space(direction, useDocumentBounds);

  this._reselect();
  return this;
}



private spaceWithGap(
  direction: SpaceDirection,
  gap: number
): void {

  // 先排序
  this.orderBy(direction === 'horizontal' ? 'left' : 'top');

  let cursor = 0;

  for (let i = 0; i < this.elements.length; i++) {
    const el = this.elements[i];

    if (direction === 'horizontal') {
      const offset = el.x - el.left;

      if (i === 0) {
        cursor = el.x - offset;
      } else {
        el.x = cursor + offset;
      }

      cursor += el.width + gap;
    }
    else {
      const offset = el.y - el.top;

      if (i === 0) {
        cursor = el.y - offset;
      } else {
        el.y = cursor + offset;
      }

      cursor += el.height + gap;
    }
  }
}
// 原生 JSFL 平均 spacing
el.space('horizontal');
el.space('vertical', true);

// 固定间距
el.space({ direction: 'horizontal', gap: 20 });
el.space('vertical', 12);

// 链式
el
  .align('top')
  .space({ gap: 16 })
  .distribute('horizontal');
  
  
  














  export enum SpaceDirection {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}
export enum SpaceMode {
  /** JSFL 原生平均 spacing */
  Auto = 'auto',

  /** 固定间距 spacing */
  Fixed = 'fixed',
}


export interface SpaceOptions {
  direction: SpaceDirection;

  /** spacing 模式 */
  mode?: SpaceMode;

  /** 固定间距（仅 Fixed 模式有效） */
  gap?: number;

  /** 是否使用舞台边界（仅 Auto 模式有效） */
  useDocumentBounds?: boolean;
}
space(options: SpaceOptions): this {
  if (!this.elements.length) {
    return this;
  }

  const {
    direction,
    mode = SpaceMode.Auto,
    gap = 0,
    useDocumentBounds = false,
  } = options;

  switch (mode) {
    case SpaceMode.Fixed:
      this.spaceFixed(direction, gap);
      break;

    case SpaceMode.Auto:
      this.spaceAuto(direction, useDocumentBounds);
      break;

    default:
      // 防御性代码（理论不可达）
      break;
  }

  return this;
}


private spaceAuto(
  direction: SpaceDirection,
  useDocumentBounds: boolean
): void {

  this._deselect(false);
  this.dom.selectNone();
  this.dom.selection = this.elements;

  this.dom.space(direction, useDocumentBounds);

  this._reselect();
}

private spaceFixed(
  direction: SpaceDirection,
  gap: number
): void {

  // 排序
  this.orderBy(
    direction === SpaceDirection.Horizontal ? 'left' : 'top'
  );

  let cursor = 0;

  switch (direction) {
    case SpaceDirection.Horizontal:
      for (let i = 0; i < this.elements.length; i++) {
        const el = this.elements[i];
        const offset = el.x - el.left;

        if (i === 0) {
          cursor = el.x - offset;
        } else {
          el.x = cursor + offset;
        }

        cursor += el.width + gap;
      }
      break;

    case SpaceDirection.Vertical:
      for (let i = 0; i < this.elements.length; i++) {
        const el = this.elements[i];
        const offset = el.y - el.top;

        if (i === 0) {
          cursor = el.y - offset;
        } else {
          el.y = cursor + offset;
        }

        cursor += el.height + gap;
      }
      break;
  }
}


// 固定间距
el.space({
  direction: SpaceDirection.Horizontal,
  mode: SpaceMode.Fixed,
  gap: 24,
});

// JSFL 原生平均 spacing
el.space({
  direction: SpaceDirection.Vertical,
  mode: SpaceMode.Auto,
  useDocumentBounds: true,
});











