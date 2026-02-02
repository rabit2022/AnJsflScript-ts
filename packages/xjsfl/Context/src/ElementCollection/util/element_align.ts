type AlignKeyword =
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'center'
  | 'horizontal'
  | 'vertical';
type AlignProp =
  | AlignKeyword
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'bottom right';
  
  align(prop: AlignProp = 'center'): this {
  if (this.elements.length === 0) {
    return this;
  }

  this._deselect(false);
  this.dom.selectNone();

  const commands = this.resolveAlignCommands(prop);

  for (const cmd of commands) {
    this.dom.align(cmd);
  }

  this._reselect();
  return this;
}



private resolveAlignCommands(prop: AlignProp): string[] {
  switch (prop) {
    case 'center':
      return ['vertical center', 'horizontal center'];

    case 'horizontal':
      return ['horizontal center'];

    case 'vertical':
      return ['vertical center'];

    case 'top':
    case 'bottom':
    case 'left':
    case 'right':
      return [prop];

    case 'top left':
    case 'top right':
    case 'bottom left':
    case 'bottom right':
      return prop.split(' ');

    default:
      // TS 永远进不来，防御性代码
      return [];
  }
}












// 真正的 JSFL 原生命令
type NativeAlignCommand =
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'vertical center'
  | 'horizontal center';

// 用户侧友好 API
type AlignPreset =
  | 'center'
  | 'horizontal'
  | 'vertical'
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'bottom right';

type AlignProp = NativeAlignCommand | AlignPreset;

interface AlignOptions {
  mode?: AlignProp;
  useDocumentBounds?: boolean;
}

align(options?: AlignProp | AlignOptions): this {
  if (!this.elements.length) return this;

  // 兼容字符串简写
  const opts: AlignOptions =
    typeof options === 'string'
      ? { mode: options }
      : options ?? {};

  const {
    mode = 'center',
    useDocumentBounds = false,
  } = opts;

  this._deselect(false);
  this.dom.selectNone();

  const commands = this.resolveAlignCommands(mode);

  for (const cmd of commands) {
    this.dom.align(cmd, useDocumentBounds);
  }

  this._reselect();
  return this;
}

private resolveAlignCommands(prop: AlignProp): NativeAlignCommand[] {
  const map: Record<string, NativeAlignCommand[]> = {
    center: ['vertical center', 'horizontal center'],
    horizontal: ['horizontal center'],
    vertical: ['vertical center'],

    'top left': ['top', 'left'],
    'top right': ['top', 'right'],
    'bottom left': ['bottom', 'left'],
    'bottom right': ['bottom', 'right'],
  };

  // 1. 预设映射
  if (prop in map) {
    return map[prop];
  }

  // 2. 原生直通
  return [prop as NativeAlignCommand];
}



// 旧风格仍然可用
node.align('left')

// 新风格
node.align('top right')

// 对齐到舞台
node.align({
  mode: 'center',
  useDocumentBounds: true
})





// 用户侧可用关键字
type DistributeKeyword =
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'horizontal'
  | 'vertical';

// 支持的输入
type DistributeProp =
  | DistributeKeyword
  | DistributeKeyword[];

// 原生 JSFL 命令
type NativeDistributeCommand =
  | 'left edge'
  | 'right edge'
  | 'top edge'
  | 'bottom edge'
  | 'horizontal center'
  | 'vertical center';

interface DistributeOptions {
  props: DistributeProp;
  toStage?: boolean;
}
distribute(
  options: DistributeProp | DistributeOptions,
  toStage = false
): this {

  if (!this.elements.length) {
    return this;
  }

  // 兼容两种调用风格
  const opts: DistributeOptions =
    typeof options === 'string' || Array.isArray(options)
      ? { props: options, toStage }
      : options;

  const propsArray = Array.isArray(opts.props)
    ? opts.props
    : [opts.props];

  this._deselect(false);

  for (const prop of propsArray) {
    const cmd = this.resolveDistributeCommand(prop);
    if (cmd) {
      this.dom.distribute(cmd, opts.toStage);
    }
  }

  this._reselect();
  return this;
}
private resolveDistributeCommand(
  prop: DistributeKeyword
): NativeDistributeCommand | null {

  switch (prop) {
    case 'horizontal':
      return 'horizontal center';

    case 'vertical':
      return 'vertical center';

    case 'left':
    case 'right':
    case 'top':
    case 'bottom':
      return `${prop} edge` as NativeDistributeCommand;

    default:
      return null; // 防御
  }
}

// 单个
el.distribute('horizontal')

// 多个
el.distribute(['left', 'vertical'])

// 到舞台
el.distribute('top', true)

// 对象风格（推荐）
el.distribute({
  props: ['horizontal', 'top'],
  toStage: true
})









