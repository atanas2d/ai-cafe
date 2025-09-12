// Meetings page behaviors extracted from inline script

document.addEventListener('DOMContentLoaded', () => {
  // Convert tool tags to links where possible
  const map: Record<string, string> = {
    'OpenAI GPT': 'https://openai.com',
    'Google Gemini': 'https://ai.google.dev',
    'WindSurf': 'https://codeium.com/windsurf',
    'Eva 2.0': 'https://trane.com/eva',
    'GPT-4.1': 'https://openai.com',
    'Canvas': 'https://openai.com',
    'Gemini': 'https://ai.google.dev',
    'GPT Tasks': 'https://platform.openai.com/docs/assistants/overview',
    'Automation': 'https://n8n.io',
    'Gemini Gems': 'https://ai.google.dev',
    'Google Drive': 'https://workspace.google.com/intl/en/products/drive/',
    'n8n': 'https://n8n.io',
    'OpenAI Agents': 'https://platform.openai.com/docs/assistants/agents',
    'Container Technology': 'https://openai.com/blog/introducing-agentic-workflows',
    'Google Nano Banana': 'https://blog.google/products/ai/google-ai-image-generation-updates/',
    'Sapient HRM': 'https://www.lesswrong.com/posts/K9mYSW4Qknm2dX58n/the-hierarchical-reasoning-model-a-new-architecture-for-ai',
    'Google Translate': 'https://blog.google/products/translate/'
  };

  document.querySelectorAll<HTMLElement>('.timeline .tag').forEach(el => {
    if (el.tagName.toLowerCase() === 'a') return;
    const t = (el.textContent || '').trim();
    const href = map[t];
    if (href) {
      const a = document.createElement('a');
      a.className = 'tag';
      a.href = href;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = t;
      el.replaceWith(a);
    }
  });

  // Toggle order
  const toggle = document.getElementById('toggle-order');
  const list = document.getElementById('timeline-list');
  if (toggle && list) {
    let newestFirst = true;
    toggle.addEventListener('click', () => {
      const items = Array.from(list.querySelectorAll('.timeline-item'));
      items.reverse().forEach(n => list.appendChild(n));
      newestFirst = !newestFirst;
      toggle.textContent = newestFirst ? 'Oldest First' : 'Newest First';
    });
  }
});

