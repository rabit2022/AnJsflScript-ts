// 真正的 JSFL 原生命令
import {ElementCollection} from "../../core/ElementCollection";

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

export function align(self: ElementCollection,options?: AlignProp | AlignOptions) {
    // if (!self.elements.length) return self;
    if (!self.size) return self;

    // 兼容字符串简写
    const opts: AlignOptions =
        typeof options === 'string'
            ? {mode: options}
            : options ?? {};

    const {
        mode = 'center',
        useDocumentBounds = false,
    } = opts;

    self._deselect(false);
    self.dom.selectNone();

    const commands = resolveAlignCommands(mode);

    for (const cmd of commands) {
        self.dom.align(cmd, useDocumentBounds);
    }

    self._reselect();
    return self;
}

function resolveAlignCommands(prop: AlignProp): NativeAlignCommand[] {
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

