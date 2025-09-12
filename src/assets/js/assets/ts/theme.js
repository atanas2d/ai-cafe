const STORAGE_KEY = 'aicafe_theme';
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try {
        localStorage.setItem(STORAGE_KEY, theme);
    }
    catch {
        // Storage not available
    }
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
        toggle.textContent = theme === 'light' ? '🌙' : '☀️';
    }
}
function initTheme() {
    let saved = null;
    try {
        saved = localStorage.getItem(STORAGE_KEY);
    }
    catch {
        // Storage not available
    }
    const initial = saved || 'dark';
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
export {};
//# sourceMappingURL=theme.js.map