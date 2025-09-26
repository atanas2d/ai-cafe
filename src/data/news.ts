import type { NewsArticle } from '@/types';

export const newsArticles: NewsArticle[] = [
  {
    id: 'news-openai-enterprise-chatgpt',
    title: 'OpenAI expands ChatGPT Enterprise with custom analytics guardrails',
    summary: 'New governance controls and fine-tuned workspace analytics help organizations ship compliant AI copilots faster.',
    source: 'OpenAI',
    url: 'https://openai.com/blog/',
    publishedAt: '2025-01-22T08:00:00.000Z',
    tags: ['LLM', 'Enterprise', 'Governance']
  },
  {
    id: 'news-gemini-workspace-ai',
    title: 'Google Gemini launches Workspace AI automation studio',
    summary: 'Apps Script and Vertex AI now share a unified catalog for building AI-powered workflows across enterprise applications.',
    source: 'Google Cloud',
    url: 'https://cloud.google.com/blog',
    publishedAt: '2025-01-18T06:30:00.000Z',
    tags: ['Automation', 'Productivity', 'Gemini']
  },
  {
    id: 'news-microsoft-copilot-studio',
    title: 'Microsoft rolls out Copilot Studio scenario templates for field teams',
    summary: 'Pre-built patterns for customer service, inspections, and asset management accelerate frontline adoption of AI copilots.',
    source: 'Microsoft',
    url: 'https://blogs.microsoft.com/',
    publishedAt: '2025-01-12T11:15:00.000Z',
    tags: ['Copilot', 'Field Service', 'Templates']
  },
  {
    id: 'news-anthropic-claude-team',
    title: 'Anthropic introduces Claude Team workspace with red-team collaboration modes',
    summary: 'Security reviewers can now co-author safeguards inside Claude before AI assistants are rolled out to production teams.',
    source: 'Anthropic',
    url: 'https://www.anthropic.com/news',
    publishedAt: '2025-01-05T15:20:00.000Z',
    tags: ['Safety', 'Collaboration', 'Claude']
  },
  {
    id: 'news-eu-ai-act',
    title: 'EU AI Act compliance countdown enters final implementation phase',
    summary: 'Regulators publish model risk maps and conformity assessment tooling ahead of the 2026 enforcement milestone.',
    source: 'European Commission',
    url: 'https://digital-strategy.ec.europa.eu/en/library/artificial-intelligence',
    publishedAt: '2025-02-10T09:00:00.000Z',
    tags: ['Regulation', 'Risk', 'Governance']
  },
  {
    id: 'news-trane-ai-campus',
    title: 'Trane Technologies launches AI Campus accelerator',
    summary: 'Five cross-functional squads will prototype AI workflows across service operations, supply chain, and sales enablement.',
    source: 'Trane Technologies',
    url: 'https://www.tranetechnologies.com/en/index/newsroom.html',
    publishedAt: '2025-02-24T10:45:00.000Z',
    tags: ['Trane', 'Innovation', 'Community']
  }
];
