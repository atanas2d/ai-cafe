import { useEffect, useMemo, useState } from 'react';
import { DataService } from '@/services/dataService';
import { Section } from '@/components/Section';
import { Timeline } from 'primereact/timeline';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Chip } from 'primereact/chip';
import type { Meeting } from '@/types';

const visibilityOptions: { label: string; value: Meeting['visibility'] | null }[] = [
  { label: 'All sessions', value: null },
  { label: 'Public', value: 'public' },
  { label: 'Internal', value: 'internal' },
  { label: 'Restricted', value: 'restricted' }
];

export const MeetingsPage = (): JSX.Element => {
  const [allMeetings, setAllMeetings] = useState<Meeting[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [visibility, setVisibility] = useState<(typeof visibilityOptions)[number]['value']>(null);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        setLoading(true);
        const meetings = await DataService.getMeetings();
        setAllMeetings(meetings);
      } catch (err) {
        setError('Failed to fetch meetings.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMeetings();
  }, []);

  const filteredMeetings = useMemo(() => {
    return allMeetings.filter((meeting) => {
      const matchesQuery = query
        ? meeting.title.toLowerCase().includes(query.toLowerCase()) ||
          meeting.description.toLowerCase().includes(query.toLowerCase()) ||
          meeting.presenters.some((presenter) =>
            presenter.name.toLowerCase().includes(query.toLowerCase())
          )
        : true;
      const matchesVisibility = visibility ? meeting.visibility === visibility : true;
      return matchesQuery && matchesVisibility;
    });
  }, [allMeetings, query, visibility]);

  if (loading) {
    return <div className="surface-section p-5 text-center">Loading meetings...</div>;
  }

  if (error) {
    return <div className="surface-section p-5 text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="surface-section">
      <header className="px-4 md:px-6 lg:px-8 py-5 surface-card shadow-1">
        <h1 className="text-3xl font-bold mb-2">Community Meetings</h1>
        <p className="text-600 max-w-3xl">
          Explore cross-functional learning sessions, demos, and workshops captured across the AI Cafe program.
        </p>
        <div className="flex flex-column md:flex-row gap-3 mt-4">
          <span className="p-input-icon-left w-full md:w-20rem input-with-icon">
            <i className="pi pi-search" />
            <InputText
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by topic, tool, or presenter"
              className="w-full"
            />
          </span>
          <Dropdown
            value={visibility}
            options={visibilityOptions}
            onChange={(e) => setVisibility(e.value)}
            optionLabel="label"
            placeholder="Visibility"
            className="w-full md:w-16rem"
          />
        </div>
      </header>

      <Section
        title={`Showing ${filteredMeetings.length} session${filteredMeetings.length === 1 ? '' : 's'}`}
        subtitle="Timeline of AI Cafe knowledge-sharing moments and collaborative problem-solving."
      >
        <Timeline
          value={filteredMeetings}
          opposite={(meeting: Meeting) => (
            <span className="text-sm text-500">
              {new Date(meeting.date).toLocaleDateString(undefined, {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
          )}
          content={(meeting: Meeting) => (
            <div className="ml-3 surface-card border-round-xl shadow-1 p-3">
              <h3 className="m-0 text-xl font-semibold">{meeting.title}</h3>
              <p className="text-sm text-600 mt-2 mb-3">{meeting.description}</p>
              <div className="flex gap-2 flex-wrap mb-2">
                {meeting.presenters.map((presenter) => (
                  <Chip key={presenter.id} label={presenter.name} icon="pi pi-user" />
                ))}
              </div>
              <div className="flex gap-2 flex-wrap">
                {meeting.topics.map((topic) => (
                  <Chip key={topic} label={topic} className="surface-chip" />
                ))}
              </div>
            </div>
          )}
        />
      </Section>
    </div>
  );
};
