

# Git 提交规范

本项目采用 [Conventional Commits](https://www.conventionalcommits.org/) 规范，并结合 emoji 提升可读性。


## 🧩 提交类型与 Emoji

### ✅ 功能与交付类
- ✅ `feat`: 新增用户可见功能  
- 🚀 `release`: 功能联调完成，准备集成或发布  
- 📦 `module`: 完成独立模块开发与封装  

### 🛠 修复与改进类
- 🐞 `fix`: 修复缺陷或错误  
- 🛠️ `refactor`: 重构代码结构（不改变外部行为）  
- ⚡️ `perf`: 性能优化  
- 🧹 `clean`: 清理冗余代码、注释或文件  

### 📂 构建与依赖类
- 📦 `build`: 更新构建流程或打包配置  
- 🔧 `config`: 调整项目配置（如 tsconfig、eslint）  
- ➕ `add`: 新增依赖、文件或资源支持  

### 🧪 测试与验证类
- ✅ `test`: 添加或更新测试用例  
- 🔍 `verify`: 验证兼容性、边界情况或多平台行为  

### 📝 文档与维护类
- 📝 `docs`: 更新文档、注释或说明  
- 💡 `chore`: 日常维护（如更新规范、脚本、CI 配置）  

## 📝 示例提交信息

```markdown
✅ feat(parser): 支持从 package.json 自动提取模块名
📦 module(validation): 封装 validation 模块并导出
⚙️ config(tools): 为 tools 目录生成独立 tsconfig
🛠️ refactor(path): 统一使用 path.resolve 处理父目录
🐞 fix(scanner): 修复 toPackageModulePaths 中未 await 的问题
🚀 release: 所有模块路径映射功能联调通过
💡 chore: 更新提交规范文档与示例
```


