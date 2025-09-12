// Tools page: simple client-side filter for tool tiles
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.tool-card');
    function apply(cat) {
        cards.forEach((c) => {
            const list = (c.getAttribute('data-category') || '').split(/\s+/);
            const show = cat === 'all' || list.includes(cat);
            c.style.display = show ? 'block' : 'none';
        });
    }
    buttons.forEach((b) => {
        b.addEventListener('click', () => {
            buttons.forEach((x) => x.classList.remove('active'));
            b.classList.add('active');
            apply(b.dataset.category || 'all');
        });
    });
    apply('all');
});
export {};
//# sourceMappingURL=tools.js.map