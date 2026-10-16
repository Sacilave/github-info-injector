/**
 * GitHub Info Injector - Browser Console Automation Script Template
 * Automatically fills repository Description and Topics in GitHub repository settings.
 * Fully compatible with GitHub's new React / Primer <tag-input> WebComponent lifecycle.
 */
(async () => {
  const DESCRIPTION = "__DESCRIPTION_PLACEHOLDER__";
  const TOPICS = __TOPICS_PLACEHOLDER__;

  console.log('🚀 [GitHub Info Injector] 正在执行全自动填写...');

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Helper: React 原生 value setter 穿透
  const setNativeValue = (element, value) => {
    const valueSetter = Object.getOwnPropertyDescriptor(element.__proto__, 'value')?.set ||
                        Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set ||
                        Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value')?.set;
    if (valueSetter) {
      valueSetter.call(element, value);
    } else {
      element.value = value;
    }
    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));
  };

  // 1. 查找 Description 输入框 (支持 input 与 textarea)
  const descInput = document.querySelector('input[name="repo_description"]') ||
                    document.querySelector('input#repo_description') ||
                    document.querySelector('textarea[name="repo_description"]') ||
                    document.querySelector('textarea#repo_description') ||
                    document.querySelector('[aria-label*="description" i]');

  if (descInput) {
    descInput.focus();
    setNativeValue(descInput, DESCRIPTION);
    console.log(`✅ [Description] 简介已成功填充 (${DESCRIPTION.length} 字符)`);
  } else {
    console.warn('⚠️ [Description] 未找到简介输入框，请确保已打开 GitHub 的 Edit details 弹窗。');
  }

  // 2. 精准查找 GitHub Topics 专用的 <tag-input> WebComponent 输入框
  const findTopicInput = () => {
    const selectors = [
      'tag-input input',
      'auto-complete[for*="topic"] input',
      'auto-complete input',
      'input[aria-label*="topic" i]',
      'input[placeholder*="topic" i]',
      '.js-repo-topics-field',
      'input[name="repo_topics"]'
    ];
    for (const s of selectors) {
      const el = document.querySelector(s);
      // 绝对不能是 Description 框自身
      if (el && el !== descInput) return el;
    }
    return null;
  };

  const topicInput = findTopicInput();

  if (topicInput && Array.isArray(TOPICS) && TOPICS.length > 0) {
    console.log(`📋 [Topics] 定位到专属标签输入框，准备逐个注入 ${TOPICS.length} 个标签...`);
    for (const t of TOPICS) {
      topicInput.focus();
      setNativeValue(topicInput, t);
      // 触发 React / Primer 的回车事件以生成独立圆角标签
      topicInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true }));
      topicInput.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true }));
      await sleep(150);
    }
    console.log(`✅ [Topics] 成功注入 ${TOPICS.length} 个独立标签！`);
  } else {
    console.warn('⚠️ [Topics] 未能定位到独立的 Topics 输入框。请确认弹窗内 Topics 区域已完全展开。');
  }

  console.log('\n🎉 [Done] 自动填充完成！请检查页面并点击绿色的「Save changes」保存即可。');
})();
