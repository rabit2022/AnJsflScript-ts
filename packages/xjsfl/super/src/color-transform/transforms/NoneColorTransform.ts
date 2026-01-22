// ------------------------------------------------------------------------------------------------------------------------
//  __   __     ______     __   __     ______     ______     ______     __
// /\ "-.\ \   /\  __ \   /\ "-.\ \   /\  ___\   /\  ___\   /\  __ \   /\ \
// \ \ \-.  \  \ \ \/\ \  \ \ \-.  \  \ \  __\   \ \ \____  \ \ \/\ \  \ \ \____
//  \ \_\\"\_\  \ \_____\  \ \_\\"\_\  \ \_____\  \ \_____\  \ \_____\  \ \_____\
//   \/_/ \/_/   \/_____/   \/_/ \/_/   \/_____/   \/_____/   \/_____/   \/_____/
//
//  ______     ______     ______   ______     ______     __   __     ______
// /\  __ \   /\  == \   /\__  _\ /\  == \   /\  __ \   /\ "-.\ \   /\  ___\
// \ \ \/\ \  \ \  __<   \/_/\ \/ \ \  __<   \ \  __ \  \ \ \-.  \  \ \___  \
//  \ \_____\  \ \_\ \_\    \ \_\  \ \_\ \_\  \ \_\ \_\  \ \_\\"\_\  \/\_____\
//   \/_____/   \/_/ /_/     \/_/   \/_/ /_/   \/_/\/_/   \/_/ \/_/   \/_____/
//
//  ______   ______     ______     __    __
// /\  ___\ /\  __ \   /\  == \   /\ "-./  \
// \ \  __\ \ \ \/\ \  \ \  __<   \ \ \-./\ \
//  \ \_\    \ \_____\  \ \_\ \_\  \ \_\ \ \_\
//   \/_/     \/_____/   \/_/ /_/   \/_/  \/_/
//
// ------------------------------------------------------------------------------------------------------------------------
// NoneColorTransform

import {BaseColorTransform} from '../base/BaseColorTransform';
import {INoneColorTransform} from '../types';

export class NoneColorTransform extends BaseColorTransform implements INoneColorTransform {
    public mode: 'none' = 'none';
    public colorAlphaAmount: number = 0;
    public colorAlphaPercent: number = 100;
    public colorRedAmount: number = 0;
    public colorRedPercent: number = 100;
    public colorGreenAmount: number = 0;
    public colorGreenPercent: number = 100;
    public colorBlueAmount: number = 0;
    public colorBluePercent: number = 100;

    constructor() {
        super('none');
    }
}