/**
 * 高性能 ID 生成器
 * 优化点：
 * 1. 预编译正则表达式，避免重复编译开销。
 * 2. 使用普通对象 (Object.create(null)) 替代 Map，在纯字符串 Key 场景下访问速度更快 (V8 引擎优化)。
 * 3. 减少中间变量，合并字符串处理步骤。
 * 4. 使用位运算或简单计数逻辑减少对象创建。
 */
export class IdGenerator {
    // 优化 1: 预编译正则
    // /[/^\d\w ]/ 用于分割
    private static readonly SPLIT_REGEX = /[^\d\w ]/;
    // /[^a-z0-9]/g 用于清洗
    private static readonly CLEAN_REGEX = /[^a-z0-9]/g;

    // 优化 2: 使用纯对象作为哈希表
    // Object.create(null) 创建无原型链对象，避免与 'toString' 等属性名冲突，且访问速度略快于 Map
    private static idCountMap: Record<string, number> = Object.create(null);

    /**
     * 重置计数器
     */
    public static reset(): void {
        // 重新创建一个新对象比遍历删除属性更快
        IdGenerator.idCountMap = Object.create(null);
    }

    /**
     * 生成唯一的标准化 ID (高性能版)
     */
    public static generate(input: string): string {
        // --- 步骤 1: 高效字符串清洗 ---

        // 空值快速处理
        if (!input) {
            return IdGenerator.resolveUnique('id');
        }

        // 优化 3: 链式调用减少中间变量分配
        // 先分割，取第一段，转小写，再清洗
        // 注意：如果输入非常长且包含大量特殊字符，split 可能会慢，但在 ID 场景通常输入较短
        let baseId = input
            .split(IdGenerator.SPLIT_REGEX)[0]
            .toLowerCase()
            .replace(IdGenerator.CLEAN_REGEX, '');

        // 兜底
        if (!baseId) {
            baseId = 'id';
        }

        // --- 步骤 2: 唯一性解决 (优化查找速度) ---
        return IdGenerator.resolveUnique(baseId);
    }

    /**
     * 内部方法：解决冲突
     * 使用 Record<string, number> 通常比 Map<string, number> 在 V8 中对于简单字符串键有更快的读写速度
     */
    private static resolveUnique(baseId: string): string {
        const map = IdGenerator.idCountMap;

        // 直接访问属性，利用 V8 的内联缓存 (Inline Caching)
        const currentCount = map[baseId] || 0;

        if (currentCount === 0) {
            map[baseId] = 1;
            return baseId;
        } else {
            // 更新计数
            map[baseId] = currentCount + 1;
            // 模板字符串拼接在现代引擎中非常快
            return `${baseId}${currentCount}`;
        }
    }
}


// // 模拟组件构造
// class Button {
//     id: string;
//     constructor(name: string) {
//         this.id = IdGenerator.generate(name);
//     }
// }
//
// const b1 = new Button("Submit");
// const b2 = new Button("Submit");
// const b3 = new Button("Submit-Form!"); // 清洗后也是 "submitform"，但在本例中 "Submit" 清洗后是 "submit"
// // 修正示例：
// const b3_real = new Button("Submit");
//
// console.log(b1.id); // "submit"
// console.log(b2.id); // "submit1"
// console.log(b3.id); // "submit2"
// console.log(b3_real.id); // "submit2"
//
// // 测试不同名字
// const s1 = new Button("Cancel");
// console.log(s1.id); // "cancel" (独立计数，不受 submit 影响)
