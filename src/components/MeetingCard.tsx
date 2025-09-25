import { Card } from 'primereact/card';
import { Chip } from 'primereact/chip';
import { Button } from 'primereact/button';
import type { Meeting } from '@/types';

interface MeetingCardProps {
  meeting: Meeting;
}

export const MeetingCard = ({ meeting }: MeetingCardProps): JSX.Element => {
  const recapUrl = meeting.recordings?.[0]?.url ?? null;

  const header = (
    <div className="flex align-items-center justify-content-between">
      <span className="text-sm text-500">Meeting {meeting.meetingNumber}</span>
      <span className="text-sm text-500">{new Date(meeting.date).toLocaleDateString()}</span>
    </div>
  );

  const footer = (
    <div className="flex align-items-center justify-content-between">
      <div className="flex gap-2 flex-wrap">
        {meeting.topics.slice(0, 3).map(topic => (
          <Chip key={topic} label={topic} className="surface-chip" />
        ))}
      </div>
      <Button
        label="View recap"
        icon="pi pi-external-link"
        size="small"
        severity="secondary"
        onClick={() => {
          if (recapUrl) {
            window.open(recapUrl, '_blank', 'noopener,noreferrer');
          }
        }}
        disabled={!recapUrl}
      />
    </div>
  );

  return (
    <Card title={meeting.title} subTitle={meeting.description} header={header} footer={footer} className="h-full">
      <div className="flex align-items-center gap-3 mb-3">
        {meeting.presenters.map(presenter => (
          <Chip key={presenter.id} label={presenter.name} icon="pi pi-user" />
        ))}
      </div>
      <p className="m-0 text-sm text-600">
        {meeting.highlights?.[0] ?? 'Collaborative session exploring practical AI workflows.'}
      </p>
    </Card>
  );
};
