document.addEventListener('DOMContentLoaded', () => {
  try {
    const meetingData = window.MeetingData;
    const dataRenderer = window.DataRenderer;
    if (meetingData && dataRenderer) {
      const all = meetingData.getAllMeetings();
      if (all && all.length) {
        const latest = all[0];
        const container = document.getElementById('latest-timeline');
        if (container) container.innerHTML = dataRenderer.renderMeetingCard(latest);
      }
    }
  } catch (e) {
    console.warn('Failed to render latest meeting:', e);
  }

  const section = document.getElementById('home');
  const chips = document.querySelectorAll<HTMLButtonElement>('.banner-chip');

  function applyBannerFrom(btn?: HTMLButtonElement): void {
    const url = btn ? btn.getAttribute('data-src') : 'src/assets/images/AICafeBanner.png';
    if (section) section.style.setProperty('--hero-bg', `url("${url}")`);
    chips.forEach(c => c.setAttribute('aria-pressed', String(c === btn)));
    try {
      localStorage.setItem('aicafe_banner_src', url || '');
    } catch {
      // Storage not available
    }
  }

  let saved: string | null = null;
  try {
    saved = localStorage.getItem('aicafe_banner_src');
  } catch {
    // Storage not available
  }
  if (saved) {
    if (section) section.style.setProperty('--hero-bg', `url("${saved}")`);
    chips.forEach(c => c.setAttribute('aria-pressed', String(c.getAttribute('data-src') === saved)));
  }

  chips.forEach(btn => {
    btn.addEventListener('click', () => applyBannerFrom(btn));
  });
});
export {};
