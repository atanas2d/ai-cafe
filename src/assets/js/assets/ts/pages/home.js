// Home page behaviors extracted from inline script
document.addEventListener('DOMContentLoaded', () => {
    // Render only the most recent meeting on the homepage timeline
    try {
        const md = window.MeetingData;
        const dr = window.DataRenderer;
        if (md && dr) {
            const all = md.getAllMeetings?.();
            if (all && all.length) {
                const latest = all[0];
                const container = document.getElementById('latest-timeline');
                if (container)
                    container.innerHTML = dr.renderMeetingCard(latest);
            }
        }
    }
    catch (e) {
        if (process.env.NODE_ENV === 'development') {
            // Failed to render latest meeting
        }
    }
    // Banner picker logic
    const section = document.getElementById('home');
    const chips = document.querySelectorAll('.banner-chip');
    function applyBannerFrom(btn) {
        const defaultUrl = 'src/assets/images/AICafeBanner.png';
        const url = btn ? btn.getAttribute('data-src') || defaultUrl : defaultUrl;
        if (section)
            section.style.setProperty('--hero-bg', `url("${url}")`);
        chips.forEach((c) => c.setAttribute('aria-pressed', String(c === btn)));
        try {
            localStorage.setItem('aicafe_banner_src', url);
        }
        catch { /* ignore */ }
    }
    // init from saved preference
    let saved = null;
    try {
        saved = localStorage.getItem('aicafe_banner_src');
    }
    catch { /* ignore */ }
    if (saved) {
        if (section)
            section.style.setProperty('--hero-bg', `url("${saved}")`);
        chips.forEach((c) => c.setAttribute('aria-pressed', String(c.getAttribute('data-src') === saved)));
    }
    chips.forEach((btn) => {
        btn.addEventListener('click', () => applyBannerFrom(btn));
    });
});
export {};
//# sourceMappingURL=home.js.map