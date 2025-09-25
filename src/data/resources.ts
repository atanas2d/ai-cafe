import type { LearningTrack, ResourceCategory } from '@/types';

export const resourceCategories: ResourceCategory[] = [
  {
    id: 'ai-tooling',
    title: 'AI Tooling Playbooks',
    description: 'Step-by-step guides and battle-tested playbooks for launching copilots and automation inside Nuvolo & Trane.',
    links: [
      {
        label: 'Nuvolo GPT Workspace Guide',
        url: 'https://nuvolo.sharepoint.com/sites/AICafe/Shared%20Documents/GPT-Workspace-Guide.pdf',
        description: 'Recommended governance, prompt libraries, and deployment patterns.',
        external: true
      },
      {
        label: 'Gemini Automation Recipes',
        url: 'https://workspace.google.com/generators/',
        description: 'Workflow recipes for connecting Gemini to Google Workspace and third-party APIs.',
        external: true
      },
      {
        label: 'ServiceNow AI Actions Accelerator',
        url: 'https://developer.servicenow.com/dev.do#!/program/ai-now',
        description: 'Low-code patterns for AI tasks in ITSM and field service.',
        external: true
      }
    ]
  },
  {
    id: 'governance',
    title: 'Responsible AI & Governance',
    description: 'Frameworks, policies, and assessment templates for safe and compliant AI operations.',
    links: [
      {
        label: 'NIST AI Risk Management Framework',
        url: 'https://www.nist.gov/itl/ai-risk-management-framework',
        description: 'Reference structure for assessing AI risk across the lifecycle.',
        external: true
      },
      {
        label: 'UK AI Safety Institute Guidance',
        url: 'https://www.gov.uk/government/organisations/ai-safety-institute',
        description: 'Evaluation strategies and alignment guidance for high-risk systems.',
        external: true
      },
      {
        label: 'OECD AI Policy Observatory',
        url: 'https://www.oecd.ai/en/',
        description: 'Global registry of AI policies, toolkits, and national strategies.',
        external: true
      }
    ]
  },
  {
    id: 'research',
    title: 'Research & Benchmarking',
    description: 'Stay ahead with curated research briefings, benchmarks, and real-world case studies.',
    links: [
      {
        label: 'State of AI Report Library',
        url: 'https://www.stateof.ai/',
        description: 'Comprehensive report series covering trends, investments, and breakthroughs.',
        external: true
      },
      {
        label: 'Papers with Code Leaderboards',
        url: 'https://paperswithcode.com/',
        description: 'Benchmark leaderboards mapped to the latest academic research.',
        external: true
      },
      {
        label: 'AI Snake Oil Briefings',
        url: 'https://aisnakeoil.substack.com/',
        description: 'Critical takes on AI product claims and practical evaluation guidelines.',
        external: true
      }
    ]
  }
];

export const learningTracks: LearningTrack[] = [
  {
    id: 'track-copilot-foundations',
    title: 'Copilot Foundations',
    duration: '3 weeks · 6 sessions',
    difficulty: 'beginner',
    focusArea: 'Prompt engineering and AI adoption fundamentals',
    outline: [
      'LLM fundamentals & responsible adoption checklist',
      'Prompt frameworks for repeatable outcomes',
      'Live lab: shipping your first AI-enabled workflow'
    ],
    resources: [
      {
        label: 'Prompt patterns cheatsheet',
        url: 'https://learn.microsoft.com/en-us/semantic-kernel/prompt-engineering/prompt-engineering-overview',
        external: true
      },
      {
        label: 'AI Success Metrics Template',
        url: 'https://nuvolo.sharepoint.com/sites/AICafe/Shared%20Documents/AI-Metrics.xlsx',
        external: true
      }
    ]
  },
  {
    id: 'track-safety-governance',
    title: 'AI Safety & Governance',
    duration: '4 weeks · 8 sessions',
    difficulty: 'intermediate',
    focusArea: 'Risk assessment, policy design, and operational guardrails',
    outline: [
      'Risk assessment frameworks for generative AI',
      'Scenario testing labs and red-teaming drills',
      'Governance operating model design sprint'
    ],
    resources: [
      {
        label: 'AI Governance Canvas',
        url: 'https://www.forhumanity.center/ai-governance',
        external: true
      },
      {
        label: 'Pre-launch risk assessment',
        url: 'https://nuvolo.sharepoint.com/sites/AICafe/Shared%20Documents/AI-Risk-Checklist.pdf',
        external: true
      }
    ]
  }
];
