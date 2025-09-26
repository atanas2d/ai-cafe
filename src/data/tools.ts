import { ToolCategory } from '../types';
import type { Tool } from '../types';

const baseTimestamp = (date: string): string => new Date(date).toISOString();

export const tools: Tool[] = [
  {
    id: 'tool-openai-gpt',
    name: 'OpenAI GPT',
    category: ToolCategory.LLM,
    vendor: 'OpenAI',
    description:
      'Enterprise-ready GPT workspace with custom assistants, secure projects, and fine-grained usage controls.',
    features: [
      {
        name: 'Custom GPTs',
        description: 'Build tailored copilots with enterprise policies.',
        availability: 'enterprise'
      },
      {
        name: 'Projects',
        description: 'Shared workspaces with guardrails and monitoring.',
        availability: 'enterprise'
      }
    ],
    pricing: {
      model: 'subscription',
      corporateLicense: true
    },
    integration: {
      servicenow: true,
      teams: true,
      office365: true,
      customAPI: true,
      webhooks: true
    },
    useCases: [
      {
        title: 'Knowledge concierge',
        description: 'Internal enablement chatbot answering process questions.',
        department: 'Service Operations',
        impact: 'high'
      },
      {
        title: 'Meeting notes automation',
        description: 'Teams meeting summaries with tasks routed to planners.',
        impact: 'medium'
      }
    ],
    alternatives: ['tool-google-gemini', 'tool-claude-code'],
    rating: 4.7,
    documentation: 'https://platform.openai.com/docs',
    accessLevel: 'corporate',
    tags: ['LLM', 'Custom workflows', 'Secure rollout'],
    lastUpdated: baseTimestamp('2025-09-01T00:00:00Z')
  },
  {
    id: 'tool-google-gemini',
    name: 'Google Gemini',
    category: ToolCategory.LLM,
    vendor: 'Google',
    description:
      'Multi-modal AI models with Gems, Workspace integrations, and robust safety tooling.',
    features: [
      {
        name: 'Gems',
        description: 'Configurable assistants embedded in Workspace.',
        availability: 'enterprise'
      },
      {
        name: 'Scheduled actions',
        description: 'Automation hooks for calendar, mail, and docs.',
        availability: 'enterprise'
      }
    ],
    pricing: {
      model: 'freemium',
      corporateLicense: true
    },
    integration: {
      servicenow: false,
      teams: false,
      office365: true,
      customAPI: true,
      webhooks: true
    },
    useCases: [
      {
        title: 'Workspace drafting',
        description: 'Compose updates inside Docs and Slides in seconds.',
        impact: 'medium'
      },
      {
        title: 'Ops automation',
        description: 'Trigger data pulls or follow-up sequences via scheduled actions.',
        impact: 'medium'
      }
    ],
    alternatives: ['tool-openai-gpt', 'tool-kilo-code'],
    rating: 4.5,
    documentation: 'https://ai.google.dev/docs',
    accessLevel: 'corporate',
    tags: ['Workspace AI', 'Automations', 'Multi-modal'],
    lastUpdated: baseTimestamp('2025-08-20T00:00:00Z')
  },
  {
    id: 'tool-openai-codex',
    name: 'OpenAI Codex Lab',
    category: ToolCategory.CODE,
    vendor: 'OpenAI',
    description:
      'Sandbox for pair-programming experiments, API snippets, and governance-friendly code generation.',
    features: [
      {
        name: 'Inline pair coding',
        description: 'Autocomplete and explain code with repository context.',
        availability: 'paid'
      },
      {
        name: 'Compliance workspace',
        description: 'Export prompts and responses for review automatically.',
        availability: 'enterprise'
      }
    ],
    pricing: {
      model: 'subscription',
      corporateLicense: true
    },
    integration: {
      servicenow: false,
      teams: true,
      office365: false,
      customAPI: true,
      webhooks: true
    },
    useCases: [
      {
        title: 'Prototype accelerators',
        description: 'Spin up working demos for stakeholder feedback overnight.',
        impact: 'high'
      }
    ],
    alternatives: ['tool-claude-code', 'tool-kilo-code'],
    rating: 4.4,
    documentation: 'https://platform.openai.com/docs/guides/codex',
    accessLevel: 'corporate',
    tags: ['Code generation', 'Compliance', 'Pair programming'],
    lastUpdated: baseTimestamp('2025-07-18T00:00:00Z')
  },
  {
    id: 'tool-claude-code',
    name: 'Claude Code Studio',
    category: ToolCategory.CODE,
    vendor: 'Anthropic',
    description:
      'Lightweight coding environment powered by Claude 3.5 Sonnet with strong reasoning and safety rails.',
    features: [
      {
        name: 'Structured edits',
        description: 'Ask Claude to refactor or extend snippets responsibly.',
        availability: 'paid'
      },
      {
        name: 'Project memory',
        description: 'Persist instructions and examples per repository.',
        availability: 'paid'
      }
    ],
    pricing: {
      model: 'freemium'
    },
    integration: {
      servicenow: false,
      teams: false,
      office365: false,
      customAPI: true,
      webhooks: false
    },
    useCases: [
      {
        title: 'Design-to-code handoff',
        description: 'Translate Figma annotations into accessible React components.',
        impact: 'high'
      }
    ],
    alternatives: ['tool-openai-codex'],
    rating: 4.3,
    documentation: 'https://docs.anthropic.com/claude/docs',
    accessLevel: 'public',
    tags: ['Code review', 'Reasoning', 'Pair coding'],
    lastUpdated: baseTimestamp('2025-09-05T00:00:00Z')
  },
  {
    id: 'tool-kilo-code',
    name: 'Kilo Code (Nuvolo Pilot)',
    category: ToolCategory.CODE,
    vendor: 'Nuvolo Labs',
    description:
      'Internal experiment pairing lightweight IDE actions with enterprise prompts tailored for facility operations workflows.',
    features: [
      {
        name: 'Workflow recipes',
        description: 'Reusable snippets that scaffold ServiceNow automations.',
        availability: 'enterprise'
      },
      {
        name: 'Guarded generation',
        description: 'Policy-aware completion with prompt linting.',
        availability: 'enterprise'
      }
    ],
    pricing: {
      model: 'enterprise',
      corporateLicense: true
    },
    integration: {
      servicenow: true,
      teams: true,
      office365: false,
      customAPI: true,
      webhooks: true
    },
    useCases: [
      {
        title: 'Field service automation',
        description: 'Generate ServiceNow workflows tied to equipment playbooks.',
        impact: 'high',
        department: 'Field Service'
      }
    ],
    alternatives: ['tool-openai-codex'],
    rating: 4.1,
    accessLevel: 'beta',
    tags: ['Internal pilot', 'ServiceNow', 'Code generation'],
    lastUpdated: baseTimestamp('2025-06-30T00:00:00Z')
  },
  {
    id: 'tool-windsurf',
    name: 'WindSurf AI Studio',
    category: ToolCategory.CODE,
    vendor: 'WindSurf',
    description:
      'AI pair-programming environment that translates natural language requirements into production-ready code and ServiceNow flows.',
    features: [
      {
        name: 'Natural language coding',
        description: 'Build applications with conversational instructions and inline refinements.',
        availability: 'free'
      },
      {
        name: 'Context aware reviews',
        description: 'Explain generated code and flag governance concerns before deployment.',
        availability: 'paid'
      }
    ],
    pricing: {
      model: 'freemium'
    },
    integration: {
      servicenow: true,
      teams: false,
      office365: false,
      customAPI: true,
      webhooks: false
    },
    useCases: [
      {
        title: 'No-code to code handoffs',
        description: 'Enable business experts to draft flows that engineers can harden quickly.',
        impact: 'high'
      }
    ],
    alternatives: ['tool-openai-codex', 'tool-claude-code'],
    rating: 4.2,
    documentation: 'https://windsurf.ai/docs',
    accessLevel: 'public',
    tags: ['Code generation', 'ServiceNow', 'Pair programming'],
    lastUpdated: baseTimestamp('2025-07-01T00:00:00Z')
  },
  {
    id: 'tool-n8n',
    name: 'n8n Automation',
    category: ToolCategory.AUTOMATION,
    vendor: 'n8n.io',
    description:
      'Low-code automation platform with over 400 connectors for building cross-system workflows that complement AI copilots.',
    features: [
      {
        name: 'Visual workflow builder',
        description: 'Design branching automations with drag-and-drop nodes and guardrails.',
        availability: 'free'
      },
      {
        name: 'AI action nodes',
        description: 'Trigger OpenAI, Gemini, or local models as part of orchestrated flows.',
        availability: 'paid'
      }
    ],
    pricing: {
      model: 'freemium'
    },
    integration: {
      servicenow: true,
      teams: true,
      office365: true,
      customAPI: true,
      webhooks: true
    },
    useCases: [
      {
        title: 'Meeting follow-up automations',
        description: 'Convert meeting summaries into routed tasks and resource digests.',
        impact: 'medium'
      }
    ],
    alternatives: ['tool-openai-gpt-tasks'],
    rating: 4.0,
    documentation: 'https://docs.n8n.io/',
    accessLevel: 'public',
    tags: ['Automation', 'Integrations', 'Workflow'],
    lastUpdated: baseTimestamp('2025-08-30T00:00:00Z')
  },
  {
    id: 'tool-openai-gpt-tasks',
    name: 'OpenAI GPT Tasks',
    category: ToolCategory.AUTOMATION,
    vendor: 'OpenAI',
    description:
      'Managed orchestration layer for scheduling GPT actions, routing outputs, and monitoring completions at scale.',
    features: [
      {
        name: 'Event triggers',
        description: 'Launch GPT workflows from calendar events, webhooks, or service tickets.',
        availability: 'enterprise'
      },
      {
        name: 'Task monitoring',
        description: 'Audit completion status with retries, logging, and alerts.',
        availability: 'enterprise'
      }
    ],
    pricing: {
      model: 'subscription',
      corporateLicense: true
    },
    integration: {
      servicenow: true,
      teams: true,
      office365: true,
      customAPI: true,
      webhooks: true
    },
    useCases: [
      {
        title: 'Automated knowledge digests',
        description: 'Compile multi-source updates and push them to SharePoint or Teams.',
        impact: 'high'
      }
    ],
    alternatives: ['tool-n8n', 'tool-google-gemini'],
    rating: 4.3,
    documentation: 'https://platform.openai.com/docs/assistants/tools/task-automation',
    accessLevel: 'corporate',
    tags: ['Automation', 'Scheduling', 'Enterprise AI'],
    lastUpdated: baseTimestamp('2025-09-18T00:00:00Z')
  },
  {
    id: 'tool-eva-20',
    name: 'Eva 2.0 (Trane Assistant)',
    category: ToolCategory.ENTERPRISE,
    vendor: 'Trane Technologies',
    description:
      'Enterprise virtual assistant powered by GPT-4.1 that delivers process guidance, knowledge retrieval, and Canvas collaboration.',
    features: [
      {
        name: 'Canvas co-authoring',
        description: 'Collaborate on shared planning boards with live AI suggestions.',
        availability: 'enterprise'
      },
      {
        name: 'Secure knowledge access',
        description: 'Role-aware retrieval from ServiceNow, SharePoint, and Teams.',
        availability: 'enterprise'
      }
    ],
    pricing: {
      model: 'enterprise',
      corporateLicense: true
    },
    integration: {
      servicenow: true,
      teams: true,
      office365: true,
      customAPI: true,
      webhooks: false
    },
    useCases: [
      {
        title: 'Field technician enablement',
        description: 'Deliver just-in-time playbooks with step-by-step guidance.',
        impact: 'high',
        department: 'Field Service'
      }
    ],
    alternatives: ['tool-openai-gpt', 'tool-google-gemini'],
    rating: 4.6,
    accessLevel: 'corporate',
    tags: ['Enterprise AI', 'Assistant', 'Knowledge management'],
    lastUpdated: baseTimestamp('2025-12-05T00:00:00Z')
  },
  {
    id: 'tool-microsoft-canvas',
    name: 'Microsoft Canvas',
    category: ToolCategory.WORKFLOW,
    vendor: 'Microsoft',
    description:
      'Shared canvas space for co-authoring plans, prompts, and AI experiments across Microsoft 365.',
    features: [
      {
        name: 'Live co-editing',
        description: 'Multiple contributors refine prompts, tasks, and assets together.',
        availability: 'enterprise'
      },
      {
        name: 'Adaptive components',
        description: 'Embed Loop components or AI-generated snippets directly into Teams chats.',
        availability: 'enterprise'
      }
    ],
    pricing: {
      model: 'enterprise',
      corporateLicense: true
    },
    integration: {
      servicenow: false,
      teams: true,
      office365: true,
      customAPI: true,
      webhooks: false
    },
    useCases: [
      {
        title: 'AI pilot planning',
        description: 'Coordinate experiment briefs, prompts, and success metrics in one workspace.',
        impact: 'medium'
      }
    ],
    alternatives: ['tool-openai-gpt', 'tool-google-gemini'],
    rating: 4.1,
    documentation: 'https://support.microsoft.com/en-us/office/loop-components-in-microsoft-365',
    accessLevel: 'corporate',
    tags: ['Collaboration', 'Workflow', 'Planning'],
    lastUpdated: baseTimestamp('2025-11-20T00:00:00Z')
  },
  {
    id: 'tool-sapient-hrm',
    name: 'Sapient HRM',
    category: ToolCategory.LLM,
    vendor: 'Sapient Intelligence',
    description:
      'Hierarchical reasoning model (HRM) capable of self-evaluating intermediate steps for complex enterprise decisions.',
    features: [
      {
        name: 'Multi-layer reasoning',
        description: 'Breaks problems into structured plans with self-review at each layer.',
        availability: 'enterprise'
      },
      {
        name: 'Evaluation hooks',
        description: 'Expose intermediate outputs for governance scoring before completion.',
        availability: 'enterprise'
      }
    ],
    pricing: {
      model: 'enterprise'
    },
    integration: {
      servicenow: false,
      teams: false,
      office365: false,
      customAPI: true,
      webhooks: false
    },
    useCases: [
      {
        title: 'Complex scenario planning',
        description: 'Model multi-step maintenance plans with built-in validation stages.',
        impact: 'high'
      }
    ],
    alternatives: ['tool-openai-gpt', 'tool-google-gemini'],
    rating: 4.5,
    documentation: 'https://huggingface.co/sapientinc',
    accessLevel: 'beta',
    tags: ['Reasoning', 'Enterprise AI', 'Research'],
    lastUpdated: baseTimestamp('2025-12-12T00:00:00Z')
  },
  {
    id: 'tool-google-nano-banana',
    name: 'Google Nano Banana',
    category: ToolCategory.IMAGE,
    vendor: 'Google Research',
    description:
      'Experimental image generation toolkit optimized for rapid ideation, colorway exploration, and lightweight on-device rendering.',
    features: [
      {
        name: 'Palette transfer',
        description: 'Apply brand-compliant palettes to generated concepts instantly.',
        availability: 'enterprise'
      },
      {
        name: 'Edge inference',
        description: 'Run compressed diffusion models on constrained hardware for field demos.',
        availability: 'enterprise'
      }
    ],
    pricing: {
      model: 'enterprise'
    },
    integration: {
      servicenow: false,
      teams: false,
      office365: false,
      customAPI: true,
      webhooks: false
    },
    useCases: [
      {
        title: 'Creative asset iteration',
        description: 'Prototype marketing visuals and UI explorations with fast turnaround.',
        impact: 'medium'
      }
    ],
    alternatives: ['tool-sapient-hrm', 'tool-openai-gpt'],
    rating: 4.0,
    accessLevel: 'beta',
    tags: ['Image generation', 'Rapid prototyping', 'Creative'],
    lastUpdated: baseTimestamp('2025-12-10T00:00:00Z')
  },
  {
    id: 'tool-google-translate',
    name: 'Google Translate',
    category: ToolCategory.WORKFLOW,
    vendor: 'Google',
    description:
      'Language translation service used during community sessions to localize resources and live captions.',
    features: [
      {
        name: 'Real-time captions',
        description: 'Provide instant translation layers for Teams or Meet sessions.',
        availability: 'free'
      },
      {
        name: 'Document translation',
        description: 'Convert knowledge base content into localized variants on demand.',
        availability: 'free'
      }
    ],
    pricing: {
      model: 'freemium'
    },
    integration: {
      servicenow: false,
      teams: true,
      office365: true,
      customAPI: true,
      webhooks: true
    },
    useCases: [
      {
        title: 'Localized enablement kits',
        description: 'Translate prompt libraries and governance docs for regional teams.',
        impact: 'medium'
      }
    ],
    alternatives: ['tool-openai-gpt', 'tool-google-gemini'],
    rating: 4.4,
    documentation: 'https://cloud.google.com/translate/docs',
    accessLevel: 'public',
    tags: ['Translation', 'Accessibility', 'Localization'],
    lastUpdated: baseTimestamp('2025-10-15T00:00:00Z')
  }
];

export const toolsVersion = {
  lastUpdated: baseTimestamp('2025-12-18T00:00:00Z'),
  version: '2.0.0'
};
