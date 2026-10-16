---
name: github-info-injector
description: >-
  Inspect codebase metadata and generate high-signal, SEO & GEO-optimized GitHub descriptions and topics.
  Outputs a ready-to-paste browser console script that automates filling both description and topics into GitHub repo settings.
  Strictly orders function before adjectives and enforces privacy sanitization.
user-invocable: true
argument-hint: "[optional-custom-focus]"
license: MIT
metadata:
  category: github
  version: "1.1.0"
---

# GitHub Info Injector (`github-info-injector`)

Autonomous agent skill that analyzes the current repository, synthesizes high-density, search-optimized metadata conforming strictly to SEO (traditional Google/GitHub search) and GEO (Generative Engine Optimization for ChatGPT/Perplexity/AI Overviews), and generates a zero-effort browser console automation script to populate GitHub's About settings in seconds.

---

## 🌐 Language Adaptation & User Communication (CRITICAL)

To ensure seamless global and bilingual experiences:
1. **Target Artifacts (Generated Payload)**:
   - Always formulate the repository `DESCRIPTION` and `TOPICS` strictly in **English** (for maximum global discoverability, indexation, and ecosystem standard).
2. **Conversational Communication with User (Agent Output)**:
   - **Always dynamically mirror the user's input language**:
     - If the user talks to you in **Chinese**, explain the rationale, present the steps, and summarize results in **Chinese**.
     - If the user talks to you in **English**, communicate in **English**.
     - If the user talks to you in **Japanese**, communicate in **Japanese**.
     - Never force English explanations onto a user who prompts in another language!

---

## 🔒 Privacy & Sanitization Mandate (Strict Zero Leakage)

Before emitting any metadata or console script, you MUST sanitize all extracted strings:
1. **Never include real private emails, service account keys, passwords, bearer tokens, or local machine usernames** (e.g., `C:\Users\username`).
2. **Never expose internal intranet IP addresses, company-confidential URLs, or unpublished ports**.
3. Use clean, public-facing terminology and placeholders if sensitive references appear in git origins.

---

## 📐 Description Design Guidelines (SEO & GEO Standard)

The GitHub repository description MUST strictly follow these rules:

1. **Function First, Adjectives Last**:
   - ❌ *Incorrect*: "A lightning-fast, ultra-powerful, modern, intelligent CLI tool that automates..."
   - ✅ *Correct*: "CLI tool to automate sitemap indexing and Googlebot crawl notifications with zero-dependency proxy tunneling."
   - State the **exact capability, nouns, and actions first**. Append modifiers/attributes (lightweight, zero-dependency) strictly at the end.
2. **Concise & Scannable**:
   - Keep length between **140 and 180 characters** (prevents truncation in Google Search SERP snippets and GitHub mobile view).
   - Factual, plain, zero marketing fluff.
3. **Language**:
   - Default strictly to standard, idiomatic **English**.

---

## 🏷️ Topics Selection Rules (Max 20 Topics)

Select up to **20** high-signal, lowercase topics categorized into:
- **Core Technology**: (e.g., `nodejs`, `typescript`, `python`)
- **Primary Domain**: (e.g., `seo`, `google-indexing-api`, `automation`)
- **Ecosystem / Integrations**: (e.g., `antigravity-skill`, `claude-code-skill`, `astro-seo`)
- **GEO / Search Intent**: (e.g., `search-engine-optimization`, `googlebot`, `zero-dependency`)

Ensure all tags use valid GitHub topic syntax (`kebab-case`, lowercase alphanumeric, hyphen only).

---

## 🛠️ Execution Workflow

When invoked:

### Step 1: Scan Project Context
1. Read project manifests: `package.json`, `Cargo.toml`, `pyproject.toml`, `go.mod`, etc.
2. Read documentation: `README.md`, `README.zh-CN.md`, etc.
3. Identify main features, runtime stack, problem solved, and repository remote.

### Step 2: Formulate Optimized Metadata
Synthesize:
- `DESCRIPTION`: 140-180 characters, function-first English description.
- `TOPICS`: Array of up to 20 precise kebab-case topics.

### Step 3: Emit Ready-to-Paste Browser Script
Render the script using GitHub's Primer `<tag-input>` isolation logic to strictly prevent Description input collision:

````javascript
(async () => {
  const DESCRIPTION = "<GENERATED_DESCRIPTION>";
  const TOPICS = [<GENERATED_TOPICS>];

  const sleep = (ms) => new Promise(r => setTimeout(r, ms));
  const setNativeValue = (el, val) => {
    const setter = Object.getOwnPropertyDescriptor(el.__proto__, 'value')?.set ||
                   Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set ||
                   Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value')?.set;
    if (setter) setter.call(el, val); else el.value = val;
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  };

  // 1. Fill Description
  const descInput = document.querySelector('input[name="repo_description"]') ||
                    document.querySelector('textarea[name="repo_description"]') ||
                    document.querySelector('input#repo_description') ||
                    document.querySelector('textarea#repo_description');
  if (descInput) {
    descInput.focus();
    setNativeValue(descInput, DESCRIPTION);
    console.log('✅ Description filled.');
  }

  // 2. Fill Topics (strictly isolate from descInput)
  const findTopicInput = () => {
    const list = ['tag-input input', 'auto-complete input', 'input[aria-label*="topic" i]', 'input[placeholder*="topic" i]', '.js-repo-topics-field'];
    for (const s of list) {
      const el = document.querySelector(s);
      if (el && el !== descInput) return el;
    }
    return null;
  };

  const topicInput = findTopicInput();
  if (topicInput && Array.isArray(TOPICS)) {
    for (const t of TOPICS) {
      topicInput.focus();
      setNativeValue(topicInput, t);
      topicInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true }));
      topicInput.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true }));
      await sleep(150);
    }
    console.log(`✅ ${TOPICS.length} topics added.`);
  }

  console.log('🎉 Done! Click "Save changes" in GitHub.');
})();
````

### Step 4: Display Output to User
Show the proposed Description and Topics clearly, followed by instructions in the **user's prompt language**:
1. Open the repo homepage on GitHub and click the ⚙️ icon next to **About**.
2. Press `F12` to open DevTools Console.
3. Paste the code block and press `Enter`.
4. Click **Save changes**.
