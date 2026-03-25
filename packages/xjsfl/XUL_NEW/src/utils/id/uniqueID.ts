/**
 * ID 生成器类
 * 采用函数式拆分设计，提高可读性与可测试性。
 * 策略：首次出现的 ID 保持原样，重复出现的 ID 自动添加递增数字后缀。
 */
export class IdGenerator {
    /**
     * 静态映射表：记录每个基础 ID (baseId) 当前已生成的次数。
     * Key: 清洗后的基础 ID (例如 "button")
     * Value: 该 ID 目前已使用的次数 (例如 1, 2, 3...)
     */
    private static idCountMap: Map<string, number> = new Map();

    /**
     * 重置所有计数状态。
     * 适用于应用重新初始化或单元测试场景。
     */
    public static reset(): void {
        IdGenerator.idCountMap.clear();
    }

    /**
     * 【主入口】生成唯一的标准化 ID。
     *
     * @param input - 原始输入字符串
     * @returns 唯一 ID (例如: "button", "button1", "separator2")
     */
    public static generate(input: string): string {
        // 1. 清洗字符串，获取标准前缀
        const baseId = IdGenerator.sanitize(input);

        // 2. 根据历史记录，解决冲突并生成最终 ID
        return IdGenerator.resolveUnique(baseId);
    }

    /**
     * 【步骤 1】字符串清洗工具函数。
     * 规则：
     * 1. 截取第一个非单词/非数字/非空格字符之前的部分。
     * 2. 转换为小写。
     * 3. 移除所有非字母数字字符。
     * 4. 若结果为空，返回默认值 'id'。
     *
     * @param raw - 原始字符串
     * @returns 清洗后的小写字母数字字符串
     */
    private static sanitize(raw: string): string {
        if (!raw) return 'id';

        // A. 截取：在第一个特殊符号处切断
        const truncated = raw.split(/[^\d\w ]/)[0];

        // B. 转小写
        const lowercased = truncated.toLowerCase();

        // C. 净化：只保留 a-z 和 0-9
        const cleaned = lowercased.replace(/[^a-z0-9]/g, '');

        // D. 兜底：如果清洗后为空，使用默认前缀
        return cleaned || 'id';
    }

    /**
     * 【步骤 2】唯一性解决工具函数。
     * 逻辑：
     * - 如果该 baseId 从未出现过，返回原样，并记录次数为 1。
     * - 如果该 baseId 已存在，返回 "baseId + 当前次数"，并将次数 +1。
     *
     * @param baseId - 已清洗的基础 ID
     * @returns 最终的唯一 ID
     */
    private static resolveUnique(baseId: string): string {
        // 获取当前已存在的次数，默认为 0
        const currentCount = IdGenerator.idCountMap.get(baseId) || 0;

        if (currentCount === 0) {
            // --- 情况 A: 首次出现 ---
            // 记录：下次再遇到就是第 2 个了
            IdGenerator.idCountMap.set(baseId, 1);
            return baseId;
        } else {
            // --- 情况 B: 重复出现 ---
            // 生成带后缀的 ID (例如: button + 1 -> button1)
            const uniqueId = `${baseId}-${currentCount}`;

            // 更新计数：下次再遇到就是第 (currentCount + 2) 个了
            IdGenerator.idCountMap.set(baseId, currentCount + 1);

            return uniqueId;
        }
    }
}



/**
 * 将输入字符串清洗并转换为标准化的 ID 格式。
 * 规则：
 * 1. 截取第一个非单词/非数字/非空格字符之前的部分。
 * 2. 转换为小写。
 * 3. 移除所有非字母数字的字符（包括空格、下划线等）。
 *
 * @param id - 原始输入字符串
 * @returns 清洗后的纯小写字母数字字符串
 */
function makeId(id: string) {
    // 步骤 1: 分割与截取
    // 正则 /[^\d\w ]/ 匹配任何 "非数字"、"非单词字符(字母/数字/下划线)" 且 "非空格" 的字符。
    // 常见的分隔符如: -, ., /, !, @, # 等。
    // .split(...) 将字符串在这些符号处切断，[0] 取第一段内容。
    // 注意：下划线 (_) 属于 \w，所以不会被当作分隔符，会保留在这一步的结果中。
    let step1 = id.split(/[^\d\w ]/)[0];

    // 步骤 2: 转小写
    // 统一将所有字母转换为小写，保证大小写不敏感的一致性。
    let step2 = step1.toLowerCase();

    // 步骤 3: 最终清洗
    // 正则 /[^a-z0-9]/g 匹配所有 "非小写字母" 和 "非数字" 的字符。
    // 这将移除步骤 1 中保留下来的空格、下划线 (_) 以及任何残留的特殊符号。
    // 结果只包含 a-z 和 0-9。
    return step2.replace(/[^a-z0-9]/g, '');
}
