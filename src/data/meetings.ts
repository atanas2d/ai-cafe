import type { Meeting } from '@/types';

const baseTimestamp = (date: string): string => new Date(date).toISOString();

export const meetings: Meeting[] = [
  {
    id: 'meet-2024-01-kickoff',
    meetingNumber: 1,
    title: 'AI Cafe Kickoff & Vision',
    date: baseTimestamp('2024-01-18T16:00:00Z'),
    duration: 60,
    description:
      'Introduced the AI Cafe learning series, shared the charter, and mapped the first quarter of collaborative sessions.',
    presenters: [
      {
        id: 'presenter-atanas',
        name: 'Atanas Dimitrov',
        role: 'Founder & Host',
        department: 'Trane Technologies Innovation',
        bio: 'Design leader exploring practical AI adoption across Trane & Nuvolo teams.'
      }
    ],
    topics: ['Program mission', 'Responsible adoption principles', '2024 community roadmap'],
    tools: ['tool-openai-gpt', 'tool-google-gemini'],
    recordings: [],
    materials: [],
    attendeeCount: 36,
    highlights: ['Community goals agreed', 'Shared working agreement for meetups', 'Launched Discord workspace'],
    visibility: 'public',
    createdAt: baseTimestamp('2024-01-05T09:00:00Z'),
    updatedAt: baseTimestamp('2024-01-18T18:00:00Z')
  },
  {
    id: 'meet-2024-02-windsurf-demo',
    meetingNumber: 2,
    title: 'WindSurf Coding Tool Demonstration',
    date: baseTimestamp('2024-02-15T16:00:00Z'),
    duration: 70,
    description:
      'Non-developer colleague showcased how WindSurf can scaffold production-ready ServiceNow flows using guided automations.',
    presenters: [
      {
        id: 'presenter-nino',
        name: 'Nino Vlahov',
        role: 'AI Program Lead',
        department: 'Nuvolo Innovation Lab',
        bio: 'Drives AI Cafe strategy and live tool demonstrations.'
      }
    ],
    topics: ['No-code prototyping', 'Prompt coaching', 'Governed deployment patterns'],
    tools: ['tool-windsurf', 'tool-openai-gpt'],
    recordings: [],
    materials: [],
    attendeeCount: 31,
    highlights: [
      'Non-developer delivered end-to-end workflow',
      'Captured prompt playbook for new joiners',
      'Documented governance checklist for generated code'
    ],
    visibility: 'internal',
    createdAt: baseTimestamp('2024-02-01T09:00:00Z'),
    updatedAt: baseTimestamp('2024-02-15T19:00:00Z')
  },
  {
    id: 'meet-2024-03-prompts',
    meetingNumber: 3,
    title: 'Prompt Playbooks & Live Automations',
    date: baseTimestamp('2024-03-14T16:00:00Z'),
    duration: 75,
    description:
      'Collaborative working session where we refined prompt playbooks for support teams and showcased end-to-end Teams automations.',
    presenters: [
      {
        id: 'presenter-atanas',
        name: 'Atanas Dimitrov',
        role: 'Founder & Host'
      }
    ],
    topics: ['Prompt playbooks', 'Teams meeting summaries', 'Automation guardrails'],
    tools: ['tool-openai-gpt', 'tool-google-gemini', 'tool-n8n'],
    recordings: [],
    materials: [],
    attendeeCount: 28,
    highlights: ['Converted workshop prompts into reusable templates', 'Documented automation checklist'],
    visibility: 'internal',
    createdAt: baseTimestamp('2024-02-28T12:00:00Z'),
    updatedAt: baseTimestamp('2024-03-14T18:30:00Z')
  },
  {
    id: 'meet-2024-04-openai-projects',
    meetingNumber: 4,
    title: 'OpenAI Custom Instances & Projects Deep Dive',
    date: baseTimestamp('2024-04-18T16:00:00Z'),
    duration: 75,
    description:
      'Reviewed enterprise templates for custom GPTs, how project workspaces centralize access, and how teams document guardrails.',
    presenters: [
      {
        id: 'presenter-atanas',
        name: 'Atanas Dimitrov',
        role: 'Founder & Host'
      },
      {
        id: 'presenter-nino',
        name: 'Nino Vlahov',
        role: 'AI Program Lead'
      }
    ],
    topics: ['Custom GPT governance', 'Project roles & permissions', 'Prompt analytics dashboards'],
    tools: ['tool-openai-gpt', 'tool-openai-codex'],
    recordings: [],
    materials: [],
    attendeeCount: 34,
    highlights: [
      'Published the corporate GPT catalog',
      'Defined review workflow for shared prompts',
      'Agreed on telemetry needed for enterprise pilots'
    ],
    visibility: 'internal',
    createdAt: baseTimestamp('2024-04-02T10:00:00Z'),
    updatedAt: baseTimestamp('2024-04-18T19:00:00Z')
  },
  {
    id: 'meet-2024-05-local-labs',
    meetingNumber: 5,
    title: 'Local Models Lab Night',
    date: baseTimestamp('2024-05-23T17:00:00Z'),
    duration: 90,
    description:
      'Hands-on evening experimenting with local model runners, safe prompt evaluation, and workflow integration on constrained hardware.',
    presenters: [
      {
        id: 'presenter-atanas',
        name: 'Atanas Dimitrov',
        role: 'Founder & Host'
      }
    ],
    topics: ['LM Studio', 'Offline safety checks', 'Prompt evaluation harness'],
    tools: ['tool-claude-code', 'tool-kilo-code'],
    recordings: [],
    materials: [],
    attendeeCount: 22,
    highlights: ['Published setup guide for local models', 'Benchmarked latency vs. hosted GPT'],
    visibility: 'internal',
    createdAt: baseTimestamp('2024-05-08T10:00:00Z'),
    updatedAt: baseTimestamp('2024-05-23T20:00:00Z')
  },
  {
    id: 'meet-2024-07-gemini-gpt',
    meetingNumber: 6,
    title: 'Gemini Scheduled Actions vs GPT Tasks',
    date: baseTimestamp('2024-07-18T16:00:00Z'),
    duration: 75,
    description:
      'Compared automation capabilities between Google Gemini scheduled actions and OpenAI GPT Tasks, including a live auto-generated news site demo.',
    presenters: [
      {
        id: 'presenter-plamen',
        name: 'Plamen Genchev',
        role: 'Senior AI Engineer',
        department: 'Nuvolo Innovation Lab',
        bio: 'Leads technical integrations, demos, and hands-on AI workshops.'
      }
    ],
    topics: ['Automation orchestration', 'Scheduling strategies', 'Governance guardrails'],
    tools: ['tool-google-gemini', 'tool-openai-gpt-tasks', 'tool-n8n'],
    recordings: [],
    materials: [],
    attendeeCount: 25,
    highlights: [
      'Mapped decision matrix for task routing',
      'Benchmarked latency and cost across providers',
      'Captured automation guardrails for pilots'
    ],
    visibility: 'internal',
    createdAt: baseTimestamp('2024-07-01T09:00:00Z'),
    updatedAt: baseTimestamp('2024-07-18T19:30:00Z')
  },
  {
    id: 'meet-2024-11-eva-beta',
    meetingNumber: 7,
    title: 'Eva 2.0 Beta Rollout & Canvas Collaboration',
    date: baseTimestamp('2024-11-15T14:00:00Z'),
    duration: 60,
    description:
      'Deep dive into Trane’s Eva 2.0 corporate assistant built on GPT-4.1 with Canvas collaboration, governance workflows, and pilot feedback.',
    presenters: [
      {
        id: 'presenter-atanas',
        name: 'Atanas Dimitrov',
        role: 'Founder & Host'
      },
      {
        id: 'presenter-plamen',
        name: 'Plamen Genchev',
        role: 'Senior AI Engineer'
      }
    ],
    topics: [
      'Enterprise assistant rollout',
      'Canvas collaboration patterns',
      'Pilot governance and compliance checks'
    ],
    tools: ['tool-eva-20', 'tool-google-gemini', 'tool-microsoft-canvas'],
    recordings: [],
    materials: [],
    attendeeCount: 40,
    highlights: [
      'Captured pilot success metrics for leadership review',
      'Documented Canvas workflow templates',
      'Outlined enterprise support and escalation process'
    ],
    visibility: 'internal',
    createdAt: baseTimestamp('2024-10-28T13:00:00Z'),
    updatedAt: baseTimestamp('2024-11-15T17:00:00Z')
  },
  {
    id: 'meet-2024-12-sapient-nano',
    meetingNumber: 8,
    title: 'Sapient HRM & Google Nano Banana Showcase',
    date: baseTimestamp('2024-12-15T14:00:00Z'),
    duration: 60,
    description:
      'Explored Sapient’s Hierarchical Reasoning Model (HRM) alongside Google’s Nano Banana image generation toolkit and mapped enterprise evaluation steps.',
    presenters: [
      {
        id: 'presenter-atanas',
        name: 'Atanas Dimitrov',
        role: 'Founder & Host'
      }
    ],
    topics: [
      'Sapient HRM architecture',
      'Nano Banana creative workflows',
      'Evaluation checklist for new AI models'
    ],
    tools: ['tool-sapient-hrm', 'tool-google-nano-banana', 'tool-google-translate'],
    recordings: [],
    materials: [
      {
        type: 'document',
        title: 'Sapient HRM checkpoint analysis',
        url: 'https://huggingface.co/sapientinc/HRM-checkpoint-ARC-2'
      },
      {
        type: 'video',
        title: 'Understanding the Hierarchical Reasoning Model (HRM)',
        url: 'https://www.youtube.com/watch?v=3Hd7oS9Wkt0'
      }
    ],
    attendeeCount: 28,
    highlights: [
      'Agreed on evaluation plan for HRM pilots',
      'Captured creative workflow opportunities',
      'Defined success metrics for Q1 trials'
    ],
    visibility: 'internal',
    createdAt: baseTimestamp('2024-11-30T09:00:00Z'),
    updatedAt: baseTimestamp('2024-12-15T17:30:00Z')
  }
];

export const meetingsVersion = {
  lastUpdated: baseTimestamp('2024-12-15T17:30:00Z'),
  version: '1.2.0'
};
