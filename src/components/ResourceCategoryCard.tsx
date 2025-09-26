import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import type { ResourceCategory } from '../types';

interface ResourceCategoryCardProps {
  category: ResourceCategory;
}

export const ResourceCategoryCard = ({ category }: ResourceCategoryCardProps): JSX.Element => (
  <Card title={category.title} subTitle={category.description} className="h-full">
    <ul className="m-0 list-none p-0 flex flex-column gap-2">
      {category.links.map(link => (
        <li key={link.label} className="flex align-items-center justify-content-between gap-2">
          <div>
            <span className="font-medium">{link.label}</span>
            {link.description ? <p className="m-0 text-sm text-600">{link.description}</p> : null}
          </div>
          <Button
            icon="pi pi-arrow-up-right"
            rounded
            severity="info"
            aria-label={`Open ${link.label}`}
            onClick={() => window.open(link.url, '_blank', 'noopener,noreferrer')}
          />
        </li>
      ))}
    </ul>
  </Card>
);
