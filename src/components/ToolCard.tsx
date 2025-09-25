import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import type { Tool } from '@/types';

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard = ({ tool }: ToolCardProps): JSX.Element => {
  const severity = tool.accessLevel === 'corporate' ? 'success' : tool.accessLevel === 'public' ? 'info' : 'warning';

  return (
    <Card title={tool.name} subTitle={tool.vendor} className="h-full">
      <div className="flex flex-column gap-2">
        <p className="text-sm text-600 m-0">{tool.description}</p>
        <div className="flex flex-wrap gap-2">
          {tool.features?.slice(0, 3).map(feature => (
            <Tag key={feature.name} value={feature.name} severity="secondary" />
          ))}
        </div>
        <div className="flex align-items-center justify-content-between mt-3">
          <Tag value={tool.category} />
          <Tag value={tool.accessLevel} severity={severity} />
        </div>
        {tool.tags ? (
          <div className="flex flex-wrap gap-2 mt-3">
            {tool.tags.map(tag => (
              <Tag key={tag} value={tag} severity="info" rounded />
            ))}
          </div>
        ) : null}
      </div>
    </Card>
  );
};
