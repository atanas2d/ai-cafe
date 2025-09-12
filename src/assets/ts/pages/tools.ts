// Tools page: simple client-side filter for tool tiles

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll<HTMLButtonElement>('.filter-btn');
  const cards = document.querySelectorAll<HTMLElement>('.tool-card');

  function apply(cat: string): void {
    cards.forEach((c) => {
      const list = (c.getAttribute('data-category') || '').split(/\s+/);
      const show = cat === 'all' || list.includes(cat);
      (c as HTMLElement).style.display = show ? 'block' : 'none';
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

