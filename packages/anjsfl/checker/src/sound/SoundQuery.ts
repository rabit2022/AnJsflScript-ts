/**
 * @file: SoundChecker.ts
 * @author: 穹的兔兔
 * @email: 3101829204@qq.com
 * @date: 2025/7/16 22:42
 * @project: AnJsflScript
 * @description:
 */
import * as  path from "path";
import {fileURLToPath} from "url";

const DEFAULT_KBPS = 320;

/**
 * @note:{@link FlashSoundItem.bitRate}
 * 此属性仅适用于 MP3 压缩类型。可接受的值为 "8 kbps"、 "16 kbps"、 "20 kbps"、"24 kbps"、"32 kbps"、"48 kbps"、"56 kbps"、"64 kbps"、"80 kbps"、"112 kbps"、"128 kbps" 和 "160 kbps"。
 * 以 8 Kbps 或 16 Kbps 导出的立体声声音将转换为单声道声音。
 * 对于其他压缩类型，该属性为 undefined。
 * @note: 对应大部分的音频输出为 undefined,因此暂时没有办法获取音频时长，尽管面板中有
 */
function getAudioDurations(item: SoundItem) {
    const uri = item.sourceFilePath;
    // let [_, ext] = os.path.splitext(path);
    const sourceFilePath = fileURLToPath(uri);
    const ext = path.extname(sourceFilePath);

    const size = FLfile.getSize(uri);

    if (ext === ".mp3") {
        // bitRate 经常为undefined
        const kbps = item.bitRate ? parseInt(item.bitRate.slice(0, -5)) : DEFAULT_KBPS;

        /*量纲分析:b/bps=b/(b/s)=s*/
        const secs = (size * 8) /*B->b*/ / (1000 * kbps); /*kbps->bps*/
        return secs;
    } else {
        throw new Error("Unsupported audio ext" + ext);
    }
}

// 放弃了获取精准时间的方法，尽管Flash无法获取mp3的精准时长
