/**
 * @file SObject.ts
 * @author 穹的兔兔
 * @email 3101829204@qq.com
 * @date 2025/6/11 20:36
 * @project AnJsflScript
 * @description 基础可复制、可克隆对象基类
 */

/**
 * SObject 构造函数
 *
 * @note 子类必须提供无参构造函数，否则 clone() 会失败
 */
export class SObject {
    /**
     * 复制另一个 SObject 的所有非函数属性到当前实例
     * @param other 要复制的源对象
     * @returns 当前实例（支持链式调用）
     */
    copy<T extends SObject>(this: T, other: SObject): T {
        for (const prop in other) {
            if (Object.prototype.hasOwnProperty.call(other, prop) && typeof other[prop] !== 'function') {
                (this as any)[prop] = other[prop];
            }
        }
        return this;
    }

    assign(props: Record<string, any>): this {
        for (const key in props) {
            if (Object.prototype.hasOwnProperty.call(props, key)) {
                (this as any)[key] = props[key];
            }
        }
        return this;
    }

    /**
     * 克隆当前对象（浅拷贝）
     * @returns 新的克隆实例
     * @throws 如果子类没有无参构造函数，会抛出错误
     */
    clone(): this {
        const Constructor = this.constructor as new () => this;
        const cloned = new Constructor();
        cloned.copy(this);
        return cloned;
    }

    /**
     * 返回对象的字符串表示（类似 Python repr）
     * 格式: ClassName(prop1=value1, prop2=value2)
     */
    toString(): string {
        const props: string[] = [];
        for (const prop in this) {
            if (Object.prototype.hasOwnProperty.call(this, prop) && typeof this[prop] !== 'function') {
                props.push(`${prop}=${this[prop]}`);
            }
        }
        return `${this.constructor.name}(${props.join(', ')})`;
    }

    /**
     * 转换为普通对象（仅包含自有非函数属性）
     */
    toObj(): Record<string, any> {
        const obj: Record<string, any> = {};
        for (const prop in this) {
            if (Object.prototype.hasOwnProperty.call(this, prop) && typeof this[prop] !== 'function') {
                obj[prop] = this[prop];
            }
        }
        return obj;
    }

    /**
     * 静态方法：返回类的字符串表示
     */
    static toString(): string {
        return `[class ${this.name}]`;
    }
}