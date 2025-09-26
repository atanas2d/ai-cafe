import type { TimelineEvent } from '@/types';

export const roadmapTimeline: TimelineEvent[] = [
  {
    id: 'event-ideation',
    title: 'Idea sketched over coffee',
    description: 'Concept for a community-first AI learning space drafted at Nuvolo HQ.',
    date: '2023-11-10',
    icon: 'pi pi-lightbulb',
    status: 'completed'
  },
  {
    id: 'event-kickoff',
    title: 'First AI Cafe session',
    description: 'Opened the series with the mission, responsible AI principles, and first demos.',
    date: '2024-01-18',
    icon: 'pi pi-calendar',
    status: 'completed'
  },
  {
    id: 'event-coffees',
    title: 'Monthly coffee sessions',
    description: 'Introduced relaxed “coffee & prompts” mornings for peer learning.',
    date: '2024-03-14',
    icon: 'pi pi-coffee',
    status: 'completed'
  },
  {
    id: 'event-resource-hub',
    title: 'Resource hub refresh',
    description: 'Launched the React + PrimeReact experience with curated enablement content.',
    date: '2024-09-12',
    icon: 'pi pi-cloud-upload',
    status: 'completed'
  }
];
