import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import type { NewsArticle } from '../types';

interface NewsCardProps {
  article: NewsArticle;
}

export const NewsCard = ({ article }: NewsCardProps): JSX.Element => (
  <Card
    title={article.title}
    subTitle={`${article.source} • ${new Date(article.publishedAt).toLocaleDateString()}`}
    className="h-full"
  >
    <div className="flex flex-column gap-3">
      <p className="m-0 text-sm text-600">{article.summary}</p>
      <div className="flex flex-wrap gap-2">
        {article.tags.map(tag => (
          <Tag key={tag} value={tag} rounded severity="info" />
        ))}
      </div>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-500 text-sm font-medium"
      >
        Read more
      </a>
    </div>
  </Card>
);
