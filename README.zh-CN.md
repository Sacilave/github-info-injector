<div align="center">

# ⚡ github-info-injector

**GitHub 仓库简介 (Description) 与标签 (Topics) 智能生成器与一秒控制台注入器**  
*专为极致 SEO、GEO（AI Overviews、ChatGPT、Perplexity）及零阻力仓库设置打造*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub API & Primer Compatible](https://img.shields.io/badge/GitHub-Primer%20Compatible-brightgreen.svg)](https://github.com/)
[![Skill Type: Agentic](https://img.shields.io/badge/Skill-Antigravity%20%7C%20Claude%20Code-orange.svg)](https://github.com/)

[English](README.md) • [简体中文](README.zh-CN.md) • [日本語](README.ja.md) • [Español](README.es.md)

</div>

---

## ⚡ 一键安装 Prompt（直接发给你的 AI 编程助手）

如果你使用的是 **Antigravity** 或 **Claude Code**，直接复制并发送以下指令：

```markdown
请帮我安装并配置这个 GitHub 元数据智能注入 Skill：
https://github.com/Sacilave/github-info-injector.git
安装后请分析当前项目，为当前仓库生成 Description 和 Topics 的全自动控制台注入脚本。
```

---

## 💡 为什么需要这个工具？

在使用 GitHub 网页端管理仓库时，有两个让人头疼的痛点：
1. **Topics 标签不支持批量粘贴**：在 GitHub 网页的 Topics 输入框中直接粘贴多个逗号分隔的标签时，它会愚蠢地把整串文字当成一个单独的标签。用户只能无奈地手动敲回车多达 20 次。
2. **简介（Description）缺乏专业 SEO 与 GEO 规范**：大多数仓库简介要么一片空白，要么充斥着主观堆砌的空洞形容词（"*An awesome, fast...*"），严重缺少能被 Google、Bing 以及大模型（ChatGPT、Perplexity、Google AI Overviews）索引的高密度实体词。

**`github-info-injector` 完美解决了这两点**：
- **深度理解代码库**：自动提取核心功能、技术栈与应用场景，生成“**功能在前、修饰在后、客观克制、长度精准**”的顶级纯英文简介和至多 20 个高权重标签。
- **一键控制台秒级注入**：生成一段轻量 JS 代码，通过穿透 React 底层 Setter 与异步状态队列，在浏览器控制台中粘贴回车即可在 2 秒内完成所有填充。

---

## 📐 SEO & GEO 工业级设计规范

本技能严格遵循以下信息架构标准：

1. **功能描述在前，形容词修饰在后**：
   - ❌ *错误示范*：*"The most revolutionary and blazing-fast multi-threaded HTTP crawler for developers."*
   - ✅ *标准范式*：*"HTTP crawler to extract structured HTML datasets with asynchronous multi-threading and proxy rotation."*
2. **字符长度严格受控**：
   - 严格控制在 **140 ~ 180 字符**，确保在 GitHub 移动端和 Google 搜索结果中完整展示，避免被省略号截断。
3. **标签实体聚类 (Topics Entity Clustering)**：
   - 组合筛选至多 20 个小写 kebab-case 标签，涵盖技术栈、核心领域、工具生态与检索意图。
4. **严格隐私脱敏**：
   - 绝不暴露本地磁盘路径（如 `C:\Users\...`）、内部端口、私有凭据或企业内网信息。

---

## 🚀 使用步骤

1. 在任何项目根目录下调用 `/github-info-injector`。
2. Agent 将自动理解项目并输出一段浏览器控制台脚本。
3. 打开 GitHub 仓库首页，点击 **About** 右侧的 ⚙️ 齿轮图标。
4. 按 `F12` 打开控制台（Console），粘贴脚本并回车。
5. 点击绿色的 **Save changes** 保存即可！

---

## 📄 开源许可证

本项目基于 [MIT 许可证](LICENSE) 开源。
