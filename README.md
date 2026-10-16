<div align="center">

# ⚡ github-info-injector

**Automated GitHub Description & Topics Generator & 1-Second Console Injector**  
*Optimized for SEO, GEO (AI Overviews, ChatGPT, Perplexity), and zero-friction repository setup.*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub API & Primer Compatible](https://img.shields.io/badge/GitHub-Primer%20Compatible-brightgreen.svg)](https://github.com/)
[![Skill Type: Agentic](https://img.shields.io/badge/Skill-Antigravity%20%7C%20Claude%20Code-orange.svg)](https://github.com/)

[English](README.md) • [简体中文](README.zh-CN.md) • [日本語](README.ja.md) • [Español](README.es.md)

[Why This Exists](#-why-this-exists) • [1-Click Install](#-1-click-install-prompt-for-ai-assistants) • [SEO & GEO Standards](#-seo--geo-engineering-standards) • [How to Use](#-how-to-use) • [FAQ](#-faq)

</div>

---

## ⚡ 1-Click Install Prompt (For your AI Assistant)

If you are using **Antigravity**, **Claude Code**, or other agentic coding assistants, copy and paste this single prompt directly into your chat:

```markdown
Please install and set up this GitHub metadata automation skill:
https://github.com/Sacilave/github-info-injector.git
After installation, inspect the current repository and generate an automated console injection script for its description and topics.
```

---

## 💡 Why This Exists

GitHub's repository settings web interface has a well-known friction point:
1. **No batch paste for Topics**: Pasting comma-separated keywords into the Topics input field pastes the entire string as a single tag instead of splitting it into individual tags. Users are forced to type and hit enter up to 20 times manually.
2. **Suboptimal SEO & GEO copy**: Most repository descriptions are either missing, filled with generic buzzwords ("*An awesome, blazingly fast library...*"), or lack high-density entity keywords required by traditional search engines and AI models (ChatGPT, Perplexity, Google AI Overviews).

**`github-info-injector`** solves both issues:
- **Analyzes your codebase** to generate a **function-first, fluff-free English description** and up to 20 structured topics.
- **Generates a ready-to-run browser console script** that leverages native React property setters to inject both Description and all 20 Topics asynchronously in under 2 seconds.

---

## 📐 SEO & GEO Engineering Standards

This tool enforces strict information architecture principles:

1. **Function First, Modifiers Last**:
   - ❌ *Fluff*: *"The most revolutionary and blazing-fast multi-threaded HTTP crawler for developers."*
   - ✅ *Function-first*: *"HTTP crawler to extract structured HTML datasets with asynchronous multi-threading and proxy rotation."*
2. **Length Guardrails**:
   - Strictly targets **140 to 180 characters** to ensure full visibility on GitHub mobile web and Google Search SERP snippets without ellipses truncation.
3. **Entity Clustering for Topics**:
   - Selects up to 20 lowercase kebab-case tags spanning runtime stack, core domain, integrations, and search intents.
4. **Strict Privacy Sanitization**:
   - Strips local paths (`C:\Users\...`), private keys, service account credentials, internal ports, and corporate intranets.

---

## 🚀 How to Use

### Step 1: Run the Skill in Your Project
Run `/github-info-injector` inside any codebase. The agent will read your manifests (`package.json`, `Cargo.toml`, etc.) and docs, then return an automated JavaScript snippet.

### Step 2: Inject in GitHub Settings (1 Second)
1. Open your repository on GitHub.
2. Click the ⚙️ icon next to **About** on the right sidebar.
3. Press `F12` to open DevTools, switch to the **Console** tab.
4. Paste the generated snippet and press `Enter`.
5. Click the green **Save changes** button. Done!

---

## 🛠️ Standalone Console Snippet Example

If you want to quickly test the script format manually in your browser console:

```javascript
(async () => {
  const DESCRIPTION = "Automate URL submission to Google Search Indexing API v3 with zero-dependency proxy tunneling.";
  const TOPICS = ["google-indexing-api", "seo", "googlebot", "sitemap", "automation", "nodejs"];

  const setNativeValue = (el, val) => {
    const setter = Object.getOwnPropertyDescriptor(el.__proto__, 'value')?.set ||
                   Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set ||
                   Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value')?.set;
    if (setter) setter.call(el, val); else el.value = val;
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  };
  const sleep = (ms) => new Promise(r => setTimeout(r, ms));

  const desc = document.querySelector('input[name="repo_description"]') || document.querySelector('input#repo_description');
  if (desc) { desc.focus(); setNativeValue(desc, DESCRIPTION); console.log('✅ Description filled.'); }

  const topicInput = document.querySelector('input[name="repo_topics"]') || document.querySelector('input#repo_topics') || document.activeElement;
  if (topicInput && Array.isArray(TOPICS)) {
    for (const t of TOPICS) {
      topicInput.focus();
      setNativeValue(topicInput, t);
      topicInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true }));
      topicInput.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true }));
      await sleep(120);
    }
    console.log(`✅ ${TOPICS.length} topics added.`);
  }
  console.log('🎉 Done! Click "Save changes" in GitHub.');
})();
```

---

## ❓ FAQ

<details>
<summary><b>Q: Why didn't a regular forEach work on GitHub's topic input?</b></summary>
A: GitHub's web interface utilizes modern React / Primer WebComponents. Tag creation is an asynchronous state transition triggered by Enter key events. A synchronous loop overwrites the input value before React dispatches the tag creation event. This tool uses native prototype property setters and sequential 120ms tick pacing to ensure 100% reliability.
</details>

<details>
<summary><b>Q: Does this require GitHub Personal Access Tokens (PAT)?</b></summary>
A: No. It operates entirely client-side inside your own authenticated browser session via the DevTools console, eliminating token permissions management or credential leakage risks.
</details>

---

## 📄 License

Distributed under the [MIT License](LICENSE).
