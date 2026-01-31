// --- 1. 类型定义 ---
interface TestResult {
  name: string;
  passed: boolean;
  time: number;
  error?: string;
}

interface StatsResult {
  total: number;
  passed: number;
  failed: number;
}
// --- 2. 断言工具 ---
function expect<T>(actual: T) {
  return {
    toBe(expected: T) {
      if (actual !== expected) {
        throw new Error(`期望 ${actual} 等于 ${expected}`);
      }
    },
    toEqual(expected: T) {
      if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(`值不相等: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
      }
    }
  };
}

// --- 3. 测试运行器与统计 ---
class MiniTest {
  private tests: TestResult[] = [];

  // 注册测试用例
  test(name: string, check: () => void) {
    const start = Date.now();
    try {
      check();
      const result: TestResult = { 
        name, 
        passed: true, 
        time: Date.now() - start 
      };
      this.tests.push(result);
      console.log(`✓ ${name}`);
      return true;
    } catch (e: any) {
      const result: TestResult = { 
        name, 
        passed: false, 
        time: Date.now() - start,
        error: e.message 
      };
      this.tests.push(result);
      console.log(`✗ ${name}: ${e.message}`);
      return false;
    }
  }

  // 统计与报告
  stats(): StatsResult {
    const total = this.tests.length;
    const passed = this.tests.filter(t => t.passed).length;
    const failed = total - passed;

    console.log('\n' + '━'.repeat(50));
    console.log(`📊 测试统计: ${passed}/${total} 通过 (${((passed/total)*100).toFixed(1)}%)`);
    console.log('━'.repeat(50));

    if (failed > 0) {
      console.log('❌ 失败的测试:');
      this.tests
        .filter(t => !t.passed)
        .forEach(t => {
          console.log(`  ✗ ${t.name} (${t.time}ms)`);
          console.log(`    ${t.error}`);
        });
    }

    const totalTime = this.tests.reduce((sum, t) => sum + t.time, 0);
    console.log(`⏱️  总耗时: ${totalTime}ms`);
    
    return { total, passed, failed };
  }
}

// --- 4. 全局实例 ---
// 创建一个全局实例供外部使用
const test = new MiniTest();

// --- 5. 编写测试 ---
test.test('加法', () => expect(1+1).toBe(2));
test.test('失败测试', () => expect(1).toBe(2));
test.test('数组', () => expect([1,2]).toEqual([1,2]));

// --- 6. 生成报告 ---
const result = test.stats();