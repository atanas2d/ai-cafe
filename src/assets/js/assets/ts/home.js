document.addEventListener('DOMContentLoaded', () => {
    try {
        const meetingData = window.MeetingData;
        const dataRenderer = window.DataRenderer;
        if (meetingData && dataRenderer) {
            const all = meetingData.getAllMeetings();
            if (all && all.length) {
                const latest = all[0];
                const container = document.getElementById('latest-timeline');
                if (container)
                    container.innerHTML = dataRenderer.renderMeetingCard(latest);
            }
        }
    }
    catch (e) {
        if (process.env.NODE_ENV === 'development') {
            console.warn('Failed to render latest meeting:', e);
        }
    }
});
export {};
//# sourceMappingURL=home.js.map