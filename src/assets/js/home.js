document.addEventListener('DOMContentLoaded', () => {
    try {
        if (typeof window.MeetingData !== 'undefined' && typeof window.DataRenderer !== 'undefined') {
            const all = window.MeetingData.getAllMeetings();
            if (all && all.length) {
                const latest = all[0];
                const container = document.getElementById('latest-timeline');
                if (container)
                    container.innerHTML = window.DataRenderer.renderMeetingCard(latest);
            }
        }
    }
    catch (e) {
        console.warn('Failed to render latest meeting:', e);
    }
    const section = document.getElementById('home');
    const chips = document.querySelectorAll('.banner-chip');
    function applyBannerFrom(btn) {
        const url = btn ? btn.getAttribute('data-src') : 'src/assets/images/AICafeBanner.png';
        if (section)
            section.style.setProperty('--hero-bg', `url("${url}")`);
        chips.forEach(c => c.setAttribute('aria-pressed', String(c === btn)));
        try {
            localStorage.setItem('aicafe_banner_src', url || '');
        }
        catch (_) { }
    }
    let saved = null;
    try {
        saved = localStorage.getItem('aicafe_banner_src');
    }
    catch (_) { }
    if (saved) {
        if (section)
            section.style.setProperty('--hero-bg', `url("${saved}")`);
        chips.forEach(c => c.setAttribute('aria-pressed', String(c.getAttribute('data-src') === saved)));
    }
    chips.forEach(btn => {
        btn.addEventListener('click', () => applyBannerFrom(btn));
    });
});
export {};
//# sourceMappingURL=home.js.map