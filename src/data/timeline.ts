import type { TimelineEvent } from '@/types';

export const roadmapTimeline: TimelineEvent[] = [
  {
    id: 'event-concept',
    title: 'Summer pilot conceived',
    description: 'Sketched the AI Cafe concept during Nuvolo + Trane innovation workshops ahead of the 2025 cohort.',
    date: '2025-05-27',
    icon: 'pi pi-lightbulb',
    status: 'completed'
  },
  {
    id: 'event-kickoff',
    title: 'Cohort kickoff session',
    description: 'Opened the program with shared charter, responsible adoption principles, and summer learning roadmap.',
    date: '2025-06-19',
    icon: 'pi pi-calendar-plus',
    status: 'completed'
  },
  {
    id: 'event-playbooks',
    title: 'Prompt playbooks published',
    description: 'Delivered reusable prompt libraries and automation guardrails following the August lab.',
    date: '2025-08-20',
    icon: 'pi pi-book',
    status: 'completed'
  },
  {
    id: 'event-resource-hub',
    title: 'Resource hub refreshed',
    description: 'Rolled out the React + PrimeReact experience with live data catalog and header backdrop picker.',
    date: '2025-12-18',
    icon: 'pi pi-cloud-upload',
    status: 'completed'
  }
];
