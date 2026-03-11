// 用户侧可用关键字
import {ElementCollection} from "../../core/ElementCollection";

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

export function distribute(self: ElementCollection, options: DistributeProp | DistributeOptions, toStage = false) {

    // if (!self.elements.length) {
    if (!self.size) {
        return self;
    }

    // 兼容两种调用风格
    const opts: DistributeOptions =
        typeof options === 'string' || Array.isArray(options)
            ? {props: options, toStage}
            : options;

    const propsArray = Array.isArray(opts.props)
        ? opts.props
        : [opts.props];

    self._deselect(false);

    for (const prop of propsArray) {
        const cmd = resolveDistributeCommand(prop);
        if (cmd) {
            self.dom.distribute(cmd, opts.toStage);
        }
    }

    self._reselect();
    return self;
}

function resolveDistributeCommand(
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
