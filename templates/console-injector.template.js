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

  // Helper: React 18+ 原生 value setter 与 _valueTracker 同步穿透
  const setNativeValue = (element, value) => {
    element.focus();
    const prototype = Object.getPrototypeOf(element);
    const prototypeSetter = Object.getOwnPropertyDescriptor(prototype, 'value')?.set;
    const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set ||
                         Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value')?.set;

    if (prototypeSetter) {
      prototypeSetter.call(element, value);
    } else if (nativeSetter) {
      nativeSetter.call(element, value);
    } else {
      element.value = value;
    }

    // 突破 React 内部 _valueTracker，通知虚拟 DOM 状态变更
    if (element._valueTracker) {
      element._valueTracker.setValue('');
    }

    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));
    element.dispatchEvent(new Event('blur', { bubbles: true }));
  };

  // 1. 永久可靠定位 Description (基于不变的 Placeholder 语义)
  const descInput = document.querySelector('input[placeholder*="description" i]') ||
                    document.querySelector('textarea[placeholder*="description" i]') ||
                    Array.from(document.querySelectorAll('input[type="text"]')).find(i => 
                      i.placeholder?.toLowerCase().includes('description') || 
                      i.getAttribute('aria-label')?.toLowerCase().includes('description')
                    );

  if (descInput) {
    setNativeValue(descInput, DESCRIPTION);
    descInput.style.outline = '2px solid #2da44e';
    console.log(`✅ [Description] 简介已成功填充 (${DESCRIPTION.length} 字符)`);
  } else {
    console.warn('⚠️ [Description] 未找到简介输入框。');
  }

  // 2. 永久可靠定位 Topics (基于不变的 Add topics 语义)
  const topicInput = document.querySelector('input[aria-label*="topics" i]') ||
                     document.querySelector('input[placeholder*="topics" i]') ||
                     Array.from(document.querySelectorAll('input[type="text"]')).find(i => 
                       i !== descInput && (
                         i.getAttribute('aria-label')?.toLowerCase().includes('topic') ||
                         i.closest('label')?.innerText?.toLowerCase().includes('topic') ||
                         i.closest('tag-input') !== null
                       )
                     );

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
    topicInput.style.outline = '2px solid #2da44e';
    console.log(`✅ [Topics] 成功注入 ${TOPICS.length} 个独立标签！`);
  } else {
    console.warn('⚠️ [Topics] 未能定位到独立的 Topics 输入框。');
  }

  console.log('\n🎉 [Done] 自动填充完成！请检查页面并点击绿色的「Save changes」保存即可。');
})();
