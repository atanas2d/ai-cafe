import { Section } from '@/components/Section';
import { NewsCard } from '@/components/NewsCard';
import { newsArticles } from '@/data/news';
import { InputText } from 'primereact/inputtext';
import { useMemo, useState } from 'react';

export const NewsPage = (): JSX.Element => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return newsArticles.filter(article => {
      if (!query) return true;
      const normalized = query.toLowerCase();
      return (
        article.title.toLowerCase().includes(normalized) ||
        article.summary.toLowerCase().includes(normalized) ||
        article.tags.some(tag => tag.toLowerCase().includes(normalized))
      );
    });
  }, [query]);

  return (
    <div className="surface-section">
      <header className="px-4 md:px-6 lg:px-8 py-5 surface-card shadow-1">
        <h1 className="text-3xl font-bold mb-2">AI Industry Pulse</h1>
        <p className="text-600 max-w-3xl">
          Weekly highlights on AI platform releases, safety updates, and enterprise adoption stories that matter to the AI Cafe.
        </p>
        <div className="p-input-icon-left mt-4 w-full md:w-22rem input-with-icon">
          <i className="pi pi-search" />
          <InputText
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles"
            className="w-full"
          />
        </div>
      </header>

      <Section title={`${filtered.length} article${filtered.length === 1 ? '' : 's'}`}>
        <div className="grid">
          {filtered.map(article => (
            <div key={article.id} className="col-12 md:col-6 lg:col-4">
              <NewsCard article={article} />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
