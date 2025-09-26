import type { Meeting } from '../types';

const baseTimestamp = (date: string): string => new Date(date).toISOString();

export const meetings: Meeting[] = [
  {
    id: 'meet-2025-06-kickoff',
    meetingNumber: 1,
    title: 'AI Cafe Kickoff & Vision',
    date: baseTimestamp('2025-06-19T16:00:00Z'),
    duration: 60,
    description:
      'Launched the AI Cafe summer cohort, aligned on our charter, and mapped the first wave of collaborative learning sessions.',
    presenters: [
      {
        id: 'presenter-atanas',
        name: 'Atanas Dimitrov',
        role: 'Founder & Host',
        department: 'Trane Technologies Innovation',
        bio: 'Design leader exploring practical AI adoption across Trane & Nuvolo teams.'
      }
    ],
    topics: ['Program mission', 'Responsible adoption principles', 'Summer 2025 roadmap'],
    tools: ['tool-openai-gpt', 'tool-google-gemini'],
    recordings: [],
    materials: [],
    attendeeCount: 46,
    highlights: ['Community principles confirmed', 'Shared launch playbook', 'Opened shared Teams channel'],
    visibility: 'public',
    createdAt: baseTimestamp('2025-06-01T09:00:00Z'),
    updatedAt: baseTimestamp('2025-06-19T18:00:00Z')
  },
  {
    id: 'meet-2025-07-windsurf-demo',
    meetingNumber: 2,
    title: 'WindSurf Coding Tool Field Test',
    date: baseTimestamp('2025-07-17T16:00:00Z'),
    duration: 70,
    description:
      'Non-developer colleague showcased how WindSurf scaffolds production-ready ServiceNow flows using conversational prompts.',
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
    attendeeCount: 34,
    highlights: ['Captured WindSurf adoption checklist', 'Documented prompt review workflow', 'Shared ServiceNow export templates'],
    visibility: 'internal',
    createdAt: baseTimestamp('2025-07-02T09:00:00Z'),
    updatedAt: baseTimestamp('2025-07-17T19:00:00Z')
  },
  {
    id: 'meet-2025-08-prompt-playbooks',
    meetingNumber: 3,
    title: 'Prompt Playbooks & Automations Lab',
    date: baseTimestamp('2025-08-14T16:00:00Z'),
    duration: 75,
    description:
      'Co-created prompt playbooks for support teams and wired automations that publish Teams recaps and route follow-ups.',
    presenters: [
      {
        id: 'presenter-atanas',
        name: 'Atanas Dimitrov',
        role: 'Founder & Host'
      }
    ],
    topics: ['Prompt reviews', 'Meeting recap workflows', 'Automation guardrails'],
    tools: ['tool-openai-gpt', 'tool-google-gemini', 'tool-n8n'],
    recordings: [],
    materials: [],
    attendeeCount: 29,
    highlights: ['Playbooks published to Teams knowledge base', 'Automation checklist finalized', 'Roles mapped for prompt QA'],
    visibility: 'internal',
    createdAt: baseTimestamp('2025-07-30T12:00:00Z'),
    updatedAt: baseTimestamp('2025-08-14T18:30:00Z')
  },
  {
    id: 'meet-2025-09-openai-projects',
    meetingNumber: 4,
    title: 'OpenAI Custom Instances & Projects Deep Dive',
    date: baseTimestamp('2025-09-11T16:00:00Z'),
    duration: 75,
    description:
      'Reviewed enterprise templates for custom GPTs, project workspace governance, and telemetry requirements for secure pilots.',
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
    attendeeCount: 38,
    highlights: ['Enterprise GPT catalog approved', 'Review workflow rolled out', 'Telemetry fields defined for pilots'],
    visibility: 'internal',
    createdAt: baseTimestamp('2025-08-25T10:00:00Z'),
    updatedAt: baseTimestamp('2025-09-11T19:00:00Z')
  },
  {
    id: 'meet-2025-10-local-lab',
    meetingNumber: 5,
    title: 'Local Models Lab Night',
    date: baseTimestamp('2025-10-09T17:00:00Z'),
    duration: 90,
    description:
      'Hands-on evening trialing local model runners, safe prompt evaluation, and workflow integration on constrained hardware.',
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
    attendeeCount: 24,
    highlights: ['Local setup guide released', 'Latency benchmarks collected', 'Evaluation rubric shared with security'],
    visibility: 'internal',
    createdAt: baseTimestamp('2025-09-24T10:00:00Z'),
    updatedAt: baseTimestamp('2025-10-09T20:00:00Z')
  },
  {
    id: 'meet-2025-11-automation-showdown',
    meetingNumber: 6,
    title: 'Gemini Scheduled Actions vs GPT Tasks',
    date: baseTimestamp('2025-11-13T16:00:00Z'),
    duration: 75,
    description:
      'Compared Google Gemini scheduled actions with OpenAI GPT Tasks and built a live automation that publishes curated news briefs.',
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
    attendeeCount: 27,
    highlights: ['Decision matrix for automation routing', 'Latency and cost benchmarks captured', 'Automation guardrails finalized'],
    visibility: 'internal',
    createdAt: baseTimestamp('2025-10-29T09:00:00Z'),
    updatedAt: baseTimestamp('2025-11-13T19:30:00Z')
  },
  {
    id: 'meet-2025-12-eva-beta',
    meetingNumber: 7,
    title: 'Eva 2.0 Canvas Collaboration Pilot',
    date: baseTimestamp('2025-12-04T14:00:00Z'),
    duration: 60,
    description:
      'Deep dive into Trane’s Eva 2.0 corporate assistant with Canvas collaboration patterns, governance workflows, and pilot feedback.',
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
    topics: ['Enterprise assistant rollout', 'Canvas collaboration', 'Pilot success metrics'],
    tools: ['tool-eva-20', 'tool-google-gemini', 'tool-microsoft-canvas'],
    recordings: [],
    materials: [],
    attendeeCount: 41,
    highlights: ['Canvas workflow templates published', 'Pilot success metrics compiled', 'Support & escalation paths agreed'],
    visibility: 'internal',
    createdAt: baseTimestamp('2025-11-18T13:00:00Z'),
    updatedAt: baseTimestamp('2025-12-04T17:00:00Z')
  },
  {
    id: 'meet-2025-12-sapient-nano',
    meetingNumber: 8,
    title: 'Sapient HRM & Google Nano Banana Showcase',
    date: baseTimestamp('2025-12-18T14:00:00Z'),
    duration: 60,
    description:
      'Explored Sapient’s Hierarchical Reasoning Model alongside Google’s Nano Banana image toolkit and mapped enterprise evaluation steps.',
    presenters: [
      {
        id: 'presenter-atanas',
        name: 'Atanas Dimitrov',
        role: 'Founder & Host'
      }
    ],
    topics: ['Sapient HRM architecture', 'Nano Banana creative workflows', 'Evaluation checklist for new AI models'],
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
    attendeeCount: 32,
    highlights: ['Evaluation plan approved for HRM pilots', 'Creative workflow opportunities documented', 'Success metrics defined for Q1 follow-up'],
    visibility: 'internal',
    createdAt: baseTimestamp('2025-12-01T09:00:00Z'),
    updatedAt: baseTimestamp('2025-12-18T17:30:00Z')
  }
];

export const meetingsVersion = {
  lastUpdated: baseTimestamp('2025-12-18T17:30:00Z'),
  version: '2.0.0'
};
