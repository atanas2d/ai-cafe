// AI News page interactions: category filtering and active button styling

document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-filter-news]'));
  const newsCards = Array.from(document.querySelectorAll<HTMLElement>('.news-card'));

  if (!filterButtons.length || !newsCards.length) {
    return;
  }

  const applyFilter = (filter: string): void => {
    filterButtons.forEach((button) => {
      const isActive = button.dataset.filterNews === filter;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    newsCards.forEach((card) => {
      const category = card.dataset.newsCategory ?? 'all';
      const matches = filter === 'all' || category === filter;

      if (matches) {
        card.removeAttribute('hidden');
        card.classList.remove('news-card--hidden');
      } else {
        card.setAttribute('hidden', '');
        card.classList.add('news-card--hidden');
      }
    });
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const filter = button.dataset.filterNews ?? 'all';
      applyFilter(filter);
    });
  });

  const defaultFilter = filterButtons
    .find((btn) => btn.classList.contains('active') || btn.classList.contains('is-active'))
    ?.dataset.filterNews ?? 'all';
  applyFilter(defaultFilter);
});
