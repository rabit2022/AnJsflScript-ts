<!-- 项目名称与横幅 -->
<div align="center">
  <!-- 社交化预览图 -->
  <a href="https://github.com/rabit2022/AnJsflScript-ts">
    <img src="https://socialify.git.ci/rabit2022/AnJsflScript-ts/image?font=Inter&issues=1&logo=https%3A%2F%2Fwww.adobe.com%2Fcontent%2Fdam%2Fcc%2Ficons%2Fanimate_cc_app_RGB.svg&name=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Auto" alt="AnJsflScript Banner" />
  </a>
  <h1>⚡ AnJsflScript-ts</h1>
  <p>让 Adobe Animate 更加高效 —— 170+ 即用脚本，一键自动化</p>
</div>

<!-- 项目状态徽章 -->
<div align="center">
  <a href="https://github.com/rabit2022/AnJsflScript-ts/releases">
    <img src="https://badgen.net/badge/version/v1.0.0/green?icon=github" alt="Version">
  </a>
  <a href="https://www.adobe.com/products/animate.html">
    <img src="https://badgen.net/badge/Adobe%20Animate/2024/blue?icon=adobe" alt="Animate">
  </a>
  <a href="https://github.com/rabit2022/AnJsflScript-ts/pulls">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs">
  </a>
  <a href="https://www.gnu.org/licenses/gpl-3.0">
    <img src="https://img.shields.io/badge/License-GPLv3-blue.svg" alt="License">
  </a>
  <a href="https://github.com/AdobeDocs/developers-animatesdk-docs">
    <img src="https://badgen.net/badge/docs/available/orange" alt="Docs">
  </a>
</div>

<br>

<!-- 项目简介与核心卖点 -->
<div align="center">
  <h3>🌟 为什么选择 AnJsflScript？</h3>
  <p>专为 Adobe Animate 2024 打造的脚本增强工具箱，通过模块化架构和丰富的工具集，彻底解放你的双手。</p>

  <table width="100%">
    <tr align="center" valign="middle">
      <td width="25%"><b>🚀 170+ 脚本</b><br>覆盖日常制作全流程</td>
      <td width="25%"><b>📦 模块化</b><br>基于 RequireJS 的灵活架构</td>
      <td width="25%"><b>⌨️ 类型支持</b><br>TypeScript 类型定义</td>
      <td width="25%"><b>⚡ 一键自动化</b><br>告别重复性手动操作</td>
    </tr>
  </table>
</div>

### 项目转向声明

**本项目已不再追求功能完善或商业级插件体验。**

#### 为什么不再添加新功能？

- **实现门槛高**：许多商用插件的核心功能尚无开源参考，且部分涉及素材与版权风险，实现难度较大，需要投入较多精力。
- **完全为爱发电**：本项目自始至终没有产生任何直接收入，目前主要还是依靠个人热情在进行维护。
- **官方态度消极**：Adobe 官方对 Animate 产品的态度较为消极，这也对我个人的开发热情产生了一定的影响。
- **成果保护困难**：开源后成果容易被直接引用，作为个人开发者，这在一定程度上影响了持续投入的积极性。
- **反馈缺失严重**：由于长期缺乏来自社区的有效反馈，难以判断后续的开发方向，目前的“单向输出”状态确实难以长期支撑。
- **个人需求已满足**：手头工具体验已足够顺手，“刚需”驱动减弱。
- **社区共建困难**：领域过于小众，难以聚集活跃的开发者形成合力。

#### 插件定位尴尬

- **商业插件优势**
    - **成熟廉价**：单插件在 60-80 元，含基础素材包约 100 元（或 1 元盗版，足够使用）。
    - **核心壁垒**：商业门槛在于版权素材积累，而非插件功能本身。
- **本项目劣势**
    - **触及核心但无壁垒**：虽实现部分复杂功能，但仅为商业插件复刻，极易被替代。
    - **极其耗时**：复刻功能非常耗时，单个复杂功能约 7 天，且无社区反馈。
    - **技术门槛低**：JS 本身门槛足够低，编码自由，本项目的现代化编码目标，对简单功能，可能徒增复杂度。

#### 新的定位与目标

既然如此，我决定将本项目转向为一个**技术可行性研究项目**。

**核心目标**：探索在 ES3 环境（Adobe Animate JSFL）下，编写现代代码的可行性。

**🔬 具体研究方向**
本项目将重点探索如何在老旧的 JSFL 环境中应用现代前端工程化方案：

1. **架构移植**：验证 `RequireJS` 等模块化方案在 ES3 中的稳定性；
2. **工程化构建**：利用构建工具实现代码合并、压缩与语法降级；
3. **AI 辅助开发**：测试 AI 在冷门技术栈（ES3）中的代码生成与适配能力。

**说明**：所有探索以“能否跑通”为首要目标，不追求生产级稳定，重在积累经验。

#### 📦 项目现状与功能

虽然开发放缓，但目前的版本仍是一个可用的**Animate 效率工具集**。

**✨ 现有核心功能**

<!-- - **170+ 实用脚本**：涵盖图层管理、元件处理、批量导出等高频操作。 -->

- **自动化工作流**：简化重复性动画制作任务，减少手动操作。
- **模块化加载**：基于 RequireJS 的架构，实现功能的按需加载与扩展。

#### ⚠️ 后续维护计划

- **修复旧功能**：仅修复已知的、导致脚本无法运行的严重 Bug。
- **更新频率**：**极低**（可能每月一个微小更新，甚至更慢）。

#### 适用人群

- **新手开发者**：提供 Animate 插件开发的**代码参考**。
- **部分普通用户**：仅限能接受**双击运行脚本**、需要免费功能的用户。

---

### ⚡ 快速上手 (Quick Start)

> **前置条件**：仅在 Windows 11 + Adobe Animate 2024 环境下测试通过。

**1. 获取代码**

```bash
git clone https://github.com/rabit2022/AnJsflScript-ts.git
```

或

下载 [最新 Release 压缩包](https://github.com/rabit2022/AnJsflScript-ts/releases)

**2. 初始化环境**
在 Animate 中打开任意 FLA 文档 -> 执行 `FirstRun.jsfl`。

**3. 开始使用**
初始化后，即可按需运行 `out/` 目录下的各类功能脚本。

### 📂 目录结构详解

本项目采用现代化前端工程结构，源码与产出分离，便于维护与学习。

| 目录/文件夹       | 作用域      | 关键说明                                               |
|:-------------|:---------|:---------------------------------------------------|
| **src**      | **核心源码** | 使用 TypeScript 编写的主体逻辑，包含所有现代代码结构。                  |
| **out**      | **功能输出** | 编译后的 JSFL 脚本目录。Animate 直接加载此文件夹下的脚本，包含 170+ 个功能文件。 |
| **config**   | **配置管理** | 存放用户配置、缓存文件及环境变量。                                  |
| **packages** | **自定义库** | 存放项目私有的工具库与模块，区别于第三方依赖。                            |
| **third**    | **第三方库** | 引入的外部依赖库（如 polyfill、工具集等）。                         |
| **tools**    | **构建工具** | 存放构建脚本、自动化发布工具及 Node.js 测试环境配置。                    |
| **types**    | **类型提示** | TypeScript 类型定义文件，提供开发时的智能提示与类型检查。                 |

### 🛠️ 核心功能详解

本项目不仅仅是一堆脚本，它提供了一套完整的解决方案：

- **自动化工作流**：自动处理图层、元件、帧频等重复性任务，大幅缩短制作周期。
- **更好的框架体验**：通过模块化加载，你可以像在现代代码编辑器中一样管理你的 Animate 功能。
- **类型安全**：提供类型定义，配合 Webstorm 等编辑器，享受智能提示和代码补全。

### 📢 常见问题 (FAQ)

1. **检查文档**：必须先在 Animate 中打开一个 FLA 文档，才能执行脚本。
2. **脚本无效？**：重新运行 `FirstRun.jsfl`，并且按照提示操作，再次运行。
3. **环境不符**：本项目仅在 Win11 + An 2024 测试通过，其他环境请自测。
4. **寻求帮助**：如果以上步骤无效，请  [提 Issue](https://github.com/rabit2022/AnJsflScript-ts/issues) 反馈。

### 🤝 参与贡献与交流

- **GitHub Issues**: [github issues](https://github.com/rabit2022/AnJsflScript-ts/issues)反馈问题或建议
- **QQ 交流群**: `1040730457` (加入讨论，分享脚本)
- **QQ**: `3101829204`
- **邮箱**: `3101829204@qq.com`

---

## 关于作者

[![穹的兔兔](https://badgen.net/badge/bilibili/穹的兔兔/pink?icon=bilibili&labelColor=blue)](https://space.bilibili.com/453222786?spm_id_from=333.788.0.0)
[![GitHub](https://badgen.net/badge/GitHub/rabit2022/pink?icon=github)](https://github.com/rabit2022)

🎥 [![BiliBili](https://stats.justsong.cn/api/bilibili?id=453222786&theme=dark&lang=zh-CN)](https://space.bilibili.com/453222786?spm_id_from=333.788.0.0)



    