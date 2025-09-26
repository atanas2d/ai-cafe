import { useEffect, useState } from 'react';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { MeetingCard } from '@/components/MeetingCard';
import { ToolCard } from '@/components/ToolCard';
import { TeamMemberCard } from '@/components/TeamMemberCard';
import { PartnerStrip } from '@/components/PartnerStrip';
import { DataService } from '@/services/dataService';
import { teamMembers } from '@/data/team';
import { partnerLogos } from '@/data/partners';
import { roadmapTimeline } from '@/data/timeline';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import type { Meeting, Tool } from '@/types';

export const HomePage = (): JSX.Element => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [tools, setTools] = useState<Tool[]>([]);
  const [loadingMeetings, setLoadingMeetings] = useState(true);
  const [loadingTools, setLoadingTools] = useState(true);
  const [errorMeetings, setErrorMeetings] = useState<string | null>(null);
  const [errorTools, setErrorTools] = useState<string | null>(null);

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        setLoadingMeetings(true);
        const fetchedMeetings = await DataService.getMeetings();
        setMeetings(fetchedMeetings.slice(0, 3));
      } catch (err) {
        setErrorMeetings('Failed to fetch meetings.');
        console.error(err);
      } finally {
        setLoadingMeetings(false);
      }
    };

    const fetchTools = async () => {
      try {
        setLoadingTools(true);
        const fetchedTools = await DataService.getTools();
        setTools(fetchedTools.slice(0, 6));
      } catch (err) {
        setErrorTools('Failed to fetch tools.');
        console.error(err);
      } finally {
        setLoadingTools(false);
      }
    };

    fetchMeetings();
    fetchTools();
  }, []);

  if (loadingMeetings || loadingTools) {
    return <div className="surface-section p-5 text-center">Loading AI Cafe content...</div>;
  }

  if (errorMeetings || errorTools) {
    return <div className="surface-section p-5 text-center text-red-500">Error loading content.</div>;
  }

  return (
    <div>
      <Hero
        title="Welcome to the AI Cafe"
        description="Hands-on learning experiences, community showcases, and responsible AI delivery patterns for Nuvolo & Trane teams."
        stats={[
          { label: 'Meetings hosted', value: String(meetings.length) },
          { label: 'Tools explored', value: String(tools.length) },
          { label: 'Community champions', value: String(teamMembers.length) }
        ]}
      />

      <PartnerStrip partners={partnerLogos} />

      <Section
        id="meetings"
        title="Latest Sessions"
        subtitle="Catch up on recent demos and collaborative problem-solving workshops."
      >
        <div className="grid">
          {meetings.map(meeting => (
            <div key={meeting.id} className="col-12 md:col-4 p-3">
              <MeetingCard meeting={meeting} />
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="tools"
        title="Featured Tools"
        subtitle="Curated AI copilots and platforms prioritized for enterprise rollout."
      >
        <div className="grid">
          {tools.map(tool => (
            <div key={tool.id} className="col-12 md:col-4 lg:col-3 p-3">
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="roadmap"
        title="Program Momentum"
        subtitle="Milestones and community moments powering the AI Cafe journey."
      >
        <Card className="surface-card border-round-2xl">
          <Timeline
            value={roadmapTimeline}
            marker={(item) => (
              <span className={`timeline-marker ${item?.status ?? ''}`}>
                <i className={item?.icon ?? 'pi pi-circle-on'} />
              </span>
            )}
            content={(item) => (
              <div className="ml-3">
                <h4 className="text-lg font-semibold m-0">{item?.title}</h4>
                <p className="text-sm text-600 mt-2 mb-3">{item?.description}</p>
                <span className="text-xs text-500">
                  {item?.date ? new Date(item.date).toLocaleDateString() : ''}
                </span>
              </div>
            )}
          />
        </Card>
      </Section>

      <Section
        id="team"
        title="Community Core Team"
        subtitle="Program leads, technologists, and designers shaping the AI Cafe experience."
      >
        <div className="grid">
          {teamMembers.map(member => (
            <div key={member.id} className="col-12 md:col-4 p-3">
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};
