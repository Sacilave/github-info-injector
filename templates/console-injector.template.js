/**
 * GitHub Info Injector - Browser Console Automation Script Template
 * Automatically fills repository Description and Topics in GitHub repository settings.
 * Compatible with GitHub's React / Primer WebComponents asynchronous state lifecycle.
 */
(async () => {
  const DESCRIPTION = "__DESCRIPTION_PLACEHOLDER__";
  const TOPICS = __TOPICS_PLACEHOLDER__;

  console.log('🚀 [GitHub Info Injector] Starting automated injection...');

  // Helper: React native value setter dispatcher
  const setNativeValue = (element, value) => {
    const valueSetter = Object.getOwnPropertyDescriptor(element.__proto__, 'value') ||
                        Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value') ||
                        Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value');
    if (valueSetter && valueSetter.set) {
      valueSetter.set.call(element, value);
    } else {
      element.value = value;
    }
    element.dispatchEvent(new Event('input', { bubbles: true }));
    element.dispatchEvent(new Event('change', { bubbles: true }));
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // 1. Fill Description
  const descInput = document.querySelector('input[name="repo_description"]') ||
                    document.querySelector('input#repo_description') ||
                    document.querySelector('textarea[name="repo_description"]');

  if (descInput) {
    descInput.focus();
    setNativeValue(descInput, DESCRIPTION);
    console.log(`✅ [Description] Successfully filled (${DESCRIPTION.length} chars).`);
  } else {
    console.warn('⚠️ [Description] Input field not found. Ensure the About settings modal is open.');
  }

  // 2. Fill Topics
  const topicInput = document.querySelector('input[name="repo_topics"]') ||
                     document.querySelector('input#repo_topics') ||
                     document.querySelector('.js-repo-topics-field') ||
                     document.querySelector('[data-target="tag-input.input"]') ||
                     document.activeElement;

  if (topicInput && Array.isArray(TOPICS) && TOPICS.length > 0) {
    console.log(`📋 [Topics] Injecting ${TOPICS.length} topics sequentially...`);
    for (const t of TOPICS) {
      topicInput.focus();
      setNativeValue(topicInput, t);
      topicInput.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true }));
      topicInput.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true }));
      await sleep(120);
    }
    console.log(`✅ [Topics] Successfully added all ${TOPICS.length} topics.`);
  } else {
    console.warn('⚠️ [Topics] Topics input field not found or topics array is empty.');
  }

  console.log('\n🎉 [Done] Automation finished! Click the green "Save changes" button to persist.');
})();
