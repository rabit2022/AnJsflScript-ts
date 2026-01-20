/**
 * @file SymbolNameGenerator.ts
 * @author 穹的兔兔
 * @email 3101829204@qq.com
 * @description 用于生成 Flash 元件库中唯一名称的工具类（无 sprintf 依赖）
 */

// 假设你有一个 randint 函数（来自你自己的 random 模块）
import {random} from './random';
import {padStart} from 'lodash';


/**
 * 随机后缀的位数（例如 001, 123）
 */
const PAD_DIGITS = 3;

export class SymbolNameGenerator {
    private lastCount: string = this.generateRandomSuffix();
    private _lastName: string = '';

    /**
     * 生成 N 位随机数字字符串（左补零）
     */
    private generateRandomSuffix(digits: number = PAD_DIGITS): string {
        const num = random.randint(1, Math.pow(10, digits) - 1);
        // return num.toString().padStart(digits, '0');
        return padStart(num.toString(), digits, '0');
    }

    /**
     * 获取上一次生成的完整名称
     */
    get lastName(): string {
        return this._lastName;
    }

    /**
     * 检查库中是否存在同名元件
     */
    private findDuplicateNameInLib(name: string): boolean {
        const doc = fl.getDocumentDOM();
        if (!doc?.library) return false;

        const items = doc.library.items;
        for (let i = 0; i < items.length; i++) {
            if (items[i].name === name) {
                return true;
            }
        }
        return false;
    }

    /**
     * 不断生成新名称直到唯一（最多尝试 10 次）
     */
    generateUniqueName(baseName: string): string {
        let attempts = 0;
        let name: string;

        do {
            this.lastCount = this.generateRandomSuffix();
            name = baseName + this.lastCount;
            attempts++;

            if (attempts > 10) {
                // 使用模板字符串替代 sprintf
                throw new Error(
                    `已尝试 ${attempts} 次，仍无法生成唯一名称！当前名称: ${name}`
                );
            }
        } while (this.findDuplicateNameInLib(name));

        this._lastName = name;
        return name;
    }

    /**
     * 尝试复用上一次的随机后缀，冲突时重新生成（无日志输出）
     */
    generateUniqueNameWithCachedSuffix(baseName: string): string {
        let name = baseName + this.lastCount;

        while (this.findDuplicateNameInLib(name)) {
            // 删除了所有 fl.trace 和 sprintf 日志
            this.lastCount = this.generateRandomSuffix();
            name = baseName + this.lastCount;
        }

        this._lastName = name;
        return name;
    }
}

// 导出默认实例
export const symbolNameGenerator = new SymbolNameGenerator();