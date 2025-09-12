document.addEventListener('DOMContentLoaded', () => {
  // Render latest meeting card (homepage timeline)
  try {
    if (typeof window.MeetingData !== 'undefined' && typeof window.DataRenderer !== 'undefined') {
      const all = window.MeetingData.getAllMeetings();
      if (all && all.length) {
        const latest = all[0];
        const container = document.getElementById('latest-timeline');
        if (container) container.innerHTML = window.DataRenderer.renderMeetingCard(latest);
      }
    }
  } catch (e) {
    console.warn('Failed to render latest meeting:', e);
  }

  // Banner selector – supports new `.banner-thumb` (class toggles)
  // and legacy `.banner-chip` (inline image URL switching)
  const hero = document.getElementById('home');
  if (!hero) return;

  const thumbs = Array.from(document.querySelectorAll<HTMLButtonElement>('.banner-thumb'));
  const chips = Array.from(document.querySelectorAll<HTMLButtonElement>('.banner-chip'));

  const BANNER_OPT_KEY = 'aicafe_banner_opt';
  const BANNER_SRC_KEY = 'aicafe_banner_src';

  function applyOption(opt: number) {
    const opts = ['banner-option-1', 'banner-option-2', 'banner-option-3', 'banner-option-4'];
    hero.classList.remove(...opts);
    hero.classList.add(opts[Math.max(0, Math.min(3, opt - 1))]);
    thumbs.forEach((t) => t.classList.toggle('active', (t.getAttribute('data-banner') || '') === String(opt)));
    try { localStorage.setItem(BANNER_OPT_KEY, String(opt)); } catch {}
  }

  function applySrcFrom(btn?: HTMLButtonElement) {
    const url = btn ? (btn.getAttribute('data-src') || 'src/assets/images/AICafeBanner.png') : 'src/assets/images/AICafeBanner.png';
    hero.style.setProperty('--hero-bg', `url("${url}")`);
    chips.forEach((c) => c.setAttribute('aria-pressed', String(c === btn)));
    try { localStorage.setItem(BANNER_SRC_KEY, url); } catch {}
  }

  // Initialize from saved state
  let savedOpt: string | null = null;
  let savedSrc: string | null = null;
  try { savedOpt = localStorage.getItem(BANNER_OPT_KEY); } catch {}
  try { savedSrc = localStorage.getItem(BANNER_SRC_KEY); } catch {}

  if (thumbs.length) {
    applyOption(Number(savedOpt || '1'));
    thumbs.forEach((btn) => btn.addEventListener('click', () => applyOption(Number(btn.getAttribute('data-banner') || '1'))));
  }

  if (chips.length) {
    if (savedSrc) applySrcFrom();
    chips.forEach((btn) => btn.addEventListener('click', () => applySrcFrom(btn)));
  }
});
export {};
//# sourceMappingURL=home.js.map
