import { Card } from 'primereact/card';
import { Chip } from 'primereact/chip';
import { Button } from 'primereact/button';
import type { Meeting } from '../types';

interface MeetingCardProps {
  meeting: Meeting;
}

const formatDate = (isoDate: string): string =>
  new Date(isoDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });

export const MeetingCard = ({ meeting }: MeetingCardProps): JSX.Element => {
  const recap = meeting.recordings?.[0] ?? null;

  return (
    <Card className="meeting-card h-full">
      <div className="meeting-card__meta">
        <span className="meeting-card__number">Session {meeting.meetingNumber}</span>
        <time dateTime={meeting.date} className="meeting-card__date">
          {formatDate(meeting.date)}
        </time>
      </div>
      <h3 className="meeting-card__title">{meeting.title}</h3>
      <p className="meeting-card__description">{meeting.description}</p>
      <div className="meeting-card__presenters">
        {meeting.presenters.map(presenter => (
          <Chip key={presenter.id} label={presenter.name} icon="pi pi-user" />
        ))}
      </div>
      <ul className="meeting-card__highlights">
        {meeting.highlights.slice(0, 3).map(highlight => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <div className="meeting-card__footer">
        <div className="meeting-card__topics">
          {meeting.topics.slice(0, 3).map(topic => (
            <Chip key={topic} label={topic} className="surface-chip" />
          ))}
        </div>
        {recap ? (
          <Button
            label="View recap"
            icon="pi pi-external-link"
            size="small"
            severity="secondary"
            onClick={() => window.open(recap.url, '_blank', 'noopener,noreferrer')}
          />
        ) : (
          <span className="meeting-card__coming-soon">Recap coming soon</span>
        )}
      </div>
    </Card>
  );
};
