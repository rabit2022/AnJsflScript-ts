/**
 * @file: SoundChecker.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2025/7/16 22:42
 * @project: AnJsflScript
 * @description: 音频检查器 - 用于检测Flash时间线中的声音信息
 */

// region import
// ===============Core Library======================
// @ts-expect-error
import { FrameRange } from "SAT";
// @ts-expect-error
import { getKeyFrameRanges } from "KeyFrameQuery";

// ===============Third Party======================
import log = require("loglevel");
// endregion import

// =============== 类型定义 ======================

/**
 * 图层相关信息
 */
export interface LayerInfo {
    /** Flash图层对象 */
    flashLayer: FlashLayer;
    /** 图层名称 */
    name: string;
    /** 图层索引（从0开始） */
    index: number;
    /** 图层总帧数 */
    totalFrames: number;
}

/**
 * 帧相关信息
 */
export interface FrameInfo {
    /** Flash帧对象 */
    flashFrame: FlashFrame;
    /** 帧索引（从0开始） */
    index: number;
    /** 关键帧范围的起始帧 */
    startFrame: number;
    /** 关键帧范围的结束帧 */
    endFrame: number;
}

/**
 * 声音实例信息（时间线中的声音实例）
 */
export interface SoundInstanceInfo {
    /** 声音实例名称 */
    name: string;
    /** 声音播放起始点（毫秒） */
    startOffset: number;
}

/**
 * 声音库项目信息
 */
export interface SoundItemInfo {
    /** Flash声音库项目对象 */
    flashItem: FlashSoundItem;
    /** 项目名称 */
    name: string;
    /** 源文件路径 */
    sourceFilePath: string;
}

/**
 * 第三方音频信息（如通过外部工具获取）
 */
export interface ThirdPartyAudioInfo {
    /** 音频总时长（秒） */
    durationSeconds?: number;
}

/**
 * 完整的音频信息结构
 */
export interface SoundInfo {
    /** 图层信息 */
    layer: LayerInfo;
    /** 帧信息 */
    frame: FrameInfo;
    /** 声音实例信息 */
    soundInstance: SoundInstanceInfo;
    /** 声音库项目信息 */
    soundItem: SoundItemInfo;
    /** 第三方音频信息 */
    thirdPartyInfo: ThirdPartyAudioInfo;
}

// =============== 类实现 ======================

/**
 * 声音信息构建器
 */
export class SoundInfoBuilder {
    private readonly _layerInfo: LayerInfo;
    private readonly _frameInfo: FrameInfo;
    private readonly _soundInstanceInfo: SoundInstanceInfo;
    private readonly _soundItemInfo: SoundItemInfo;
    private readonly _thirdPartyInfo: ThirdPartyAudioInfo;

    constructor(
        layer: FlashLayer,
        frameRange: FrameRange,
        frame: FlashFrame,
        frameIndex: number
    ) {
        const soundEnvelopeLimits = frame.getSoundEnvelopeLimits();
        const soundLibraryItem = frame.soundLibraryItem;

        this._layerInfo = {
            flashLayer: layer,
            name: layer.name,
            index: frameRange.layerIndex,
            totalFrames: layer.frameCount
        };

        this._frameInfo = {
            flashFrame: frame,
            index: frameIndex,
            startFrame: frameRange.startFrame,
            endFrame: frameRange.endFrame
        };

        this._soundInstanceInfo = {
            name: frame.soundName,
            startOffset: soundEnvelopeLimits.start
        };

        this._soundItemInfo = {
            flashItem: soundLibraryItem,
            name: soundLibraryItem.name,
            sourceFilePath: soundLibraryItem.sourceFilePath
        };

        this._thirdPartyInfo = {
            durationSeconds: undefined
        };
    }

    /**
     * 构建完整的声音信息对象
     */
    build(): SoundInfo {
        return {
            layer: this._layerInfo,
            frame: this._frameInfo,
            soundInstance: this._soundInstanceInfo,
            soundItem: this._soundItemInfo,
            thirdPartyInfo: this._thirdPartyInfo
        };
    }

    /**
     * 更新第三方音频信息（如时长）
     */
    updateThirdPartyInfo(info: Partial<ThirdPartyAudioInfo>): void {
        Object.assign(this._thirdPartyInfo, info);
    }
}

// =============== 工具函数 ======================

/**
 * 检查指定图层是否包含声音
 * @param layers 时间线中的所有图层数组
 * @param targetLayer 要检查的目标图层
 * @returns 该图层中所有声音信息的数组
 */
export function findSoundsInLayer(layers: FlashLayer[], targetLayer: FlashLayer): SoundInfo[] {
    const soundInfos: SoundInfo[] = [];

    const keyFrameRanges: FrameRange[] = getKeyFrameRanges(layers, targetLayer);
    
    for (const frameRange of keyFrameRanges) {
        const keyFrameIndex = frameRange.startFrame;
        const keyFrame = targetLayer.frames[keyFrameIndex];
        
        // 跳过空白帧或无效帧
        if (!keyFrame || !keyFrame.soundName) {
            continue;
        }

        const builder = new SoundInfoBuilder(targetLayer, frameRange, keyFrame, keyFrameIndex);
        soundInfos.push(builder.build());
    }

    return soundInfos;
}

/**
 * 获取时间线中所有图层的音频信息
 * @param timeline Flash时间线对象
 * @returns 时间线中所有声音信息的数组
 */
export function findAllSoundsInTimeline(timeline: FlashTimeline): SoundInfo[] {
    const layers = timeline.layers;
    const allSoundInfos: SoundInfo[] = [];

    for (const layer of layers) {
        const layerSoundInfos = findSoundsInLayer(layers, layer);
        allSoundInfos.push(...layerSoundInfos);
    }

    return allSoundInfos;
}

/**
 * 辅助函数：按图层分组声音信息
 */
export function groupSoundsByLayer(soundInfos: SoundInfo[]): Map<string, SoundInfo[]> {
    const groupedSounds = new Map<string, SoundInfo[]>();
    
    for (const soundInfo of soundInfos) {
        const layerName = soundInfo.layer.name;
        
        if (!groupedSounds.has(layerName)) {
            groupedSounds.set(layerName, []);
        }
        
        groupedSounds.get(layerName)!.push(soundInfo);
    }
    
    return groupedSounds;
}

/**
 * 辅助函数：筛选特定时长的声音
 */
export function filterSoundsByDuration(
    soundInfos: SoundInfo[], 
    minDuration?: number, 
    maxDuration?: number
): SoundInfo[] {
    return soundInfos.filter(info => {
        const duration = info.thirdPartyInfo.durationSeconds;
        
        if (duration === undefined) {
            return false; // 跳过没有时长信息的声音
        }
        
        const meetsMin = minDuration === undefined || duration >= minDuration;
        const meetsMax = maxDuration === undefined || duration <= maxDuration;
        
        return meetsMin && meetsMax;
    });
}