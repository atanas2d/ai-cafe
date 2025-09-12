const STORAGE_KEY = 'aicafe_theme';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try { localStorage.setItem(STORAGE_KEY, theme); } catch {}

  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    // Show the other theme's icon (indicating action)
    toggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    toggle.setAttribute('title', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }
}

function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch {}

  // Default to light for readability if not set
  const initial = saved || 'light';
  applyTheme(initial);

  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      applyTheme(current);
    });
  }
}

document.addEventListener('DOMContentLoaded', initTheme);
//# sourceMappingURL=theme.js.map
