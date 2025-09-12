const STORAGE_KEY = 'aicafe_theme';

function applyTheme(theme: 'light' | 'dark'): void {
  document.documentElement.setAttribute('data-theme', theme);
  try { localStorage.setItem(STORAGE_KEY, theme); } catch (_) {}
  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.textContent = theme === 'light' ? '🌙' : '☀️';
  }
}

function initTheme(): void {
  let saved: 'light' | 'dark' | null = null;
  try { saved = localStorage.getItem(STORAGE_KEY) as 'light' | 'dark' | null; } catch (_) {}
  const initial = saved || 'dark';
  applyTheme(initial);
  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      applyTheme(current as 'light' | 'dark');
    });
  }
}

document.addEventListener('DOMContentLoaded', initTheme);
export {};
