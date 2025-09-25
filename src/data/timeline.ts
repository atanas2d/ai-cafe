import type { TimelineEvent } from '@/types';

export const roadmapTimeline: TimelineEvent[] = [
  {
    id: 'event-launch',
    title: 'AI Cafe v1 Launch',
    description: 'Kick-off session introducing the community, charter, and first set of AI showcases.',
    date: '2024-06-14',
    icon: 'pi pi-megaphone',
    status: 'completed'
  },
  {
    id: 'event-cohort',
    title: 'Automation Cohort Sprint',
    description: 'Cross-functional team prototyped quote automation with Gemini Apps Script connectors.',
    date: '2024-09-02',
    icon: 'pi pi-bolt',
    status: 'completed'
  },
  {
    id: 'event-governance',
    title: 'Responsible AI Guardrails',
    description: 'Policy, risk review, and safety instrumentation rolled out across the toolkit ecosystem.',
    date: '2024-11-20',
    icon: 'pi pi-shield',
    status: 'completed'
  },
  {
    id: 'event-campus',
    title: 'AI Campus Accelerator',
    description: 'Deep-dive cohort enabling Trane business units with end-to-end AI delivery pipelines.',
    date: '2025-02-10',
    icon: 'pi pi-globe',
    status: 'in-progress'
  }
];
