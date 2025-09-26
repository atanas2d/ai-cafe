import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import type { Tool } from '@/types';

interface ToolCardProps {
  tool: Tool;
}

const accessLabel: Record<Tool['accessLevel'], string> = {
  public: 'Public',
  corporate: 'Corporate rollout',
  beta: 'Pilot / beta'
};

export const ToolCard = ({ tool }: ToolCardProps): JSX.Element => {
  const primaryFeatures = tool.features.slice(0, 2);

  return (
    <Card className="tool-card h-full">
      <div className="tool-card__header">
        <div>
          <span className="tool-card__vendor">{tool.vendor}</span>
          <h3 className="tool-card__name">{tool.name}</h3>
        </div>
        <Tag value={tool.category} severity="secondary" rounded />
      </div>
      <p className="tool-card__description">{tool.description}</p>
      <div className="tool-card__features">
        {primaryFeatures.map(feature => (
          <div key={feature.name} className="tool-card__feature">
            <span className="tool-card__feature-name">{feature.name}</span>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="tool-card__tags">
        {tool.tags.slice(0, 5).map(tag => (
          <Tag key={tag} value={tag} className="surface-chip" />
        ))}
      </div>
      <div className="tool-card__footer">
        <Tag
          value={accessLabel[tool.accessLevel]}
          severity={tool.accessLevel === 'public' ? 'success' : tool.accessLevel === 'beta' ? 'warning' : 'info'}
        />
        {tool.documentation ? (
          <Button
            label="Documentation"
            icon="pi pi-external-link"
            size="small"
            severity="secondary"
            outlined
            onClick={() => window.open(tool.documentation, '_blank', 'noopener,noreferrer')}
          />
        ) : (
          <span className="tool-card__note">Internal notes available</span>
        )}
      </div>
    </Card>
  );
};
