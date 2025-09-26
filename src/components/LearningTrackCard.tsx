import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import type { LearningTrack } from '../types';

interface LearningTrackCardProps {
  track: LearningTrack;
}

export const LearningTrackCard = ({ track }: LearningTrackCardProps): JSX.Element => (
  <Card title={track.title} subTitle={`${track.duration} • ${track.focusArea}`} className="h-full">
    <div className="flex flex-column gap-3">
      <div className="flex gap-2">
        <Tag value={track.difficulty} severity={track.difficulty === 'beginner' ? 'success' : track.difficulty === 'intermediate' ? 'info' : 'warning'} />
      </div>
      <ul className="m-0 pl-3">
        {track.outline.map(item => (
          <li key={item} className="text-sm text-600 mb-2">{item}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {track.resources.map(resource => (
          <a
            key={resource.label}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 text-sm font-medium"
          >
            {resource.label}
          </a>
        ))}
      </div>
    </div>
  </Card>
);
