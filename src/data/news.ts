import type { NewsArticle } from '@/types';

export const newsArticles: NewsArticle[] = [
  {
    id: 'news-openai-retiring-gpt4o',
    title: 'OpenAI retiring GPT-4o and older models on February 13',
    summary: 'Only 0.1% of users still choose GPT-4o daily after GPT-5 launch. GPT-4o, GPT-4.1, GPT-4.1 mini, and o4-mini will be retired from ChatGPT.',
    source: 'OpenAI',
    url: 'https://openai.com/index/retiring-gpt-4o-and-older-models/',
    publishedAt: '2026-01-30T12:00:00.000Z',
    tags: ['GPT-5', 'Model Lifecycle', 'ChatGPT']
  },
  {
    id: 'news-nvidia-openai-deal-ice',
    title: 'Nvidia-OpenAI $100 billion megadeal is on ice',
    summary: 'The partnership announced in September is being rethought. Discussions now focus on a smaller equity investment of tens of billions as part of OpenAI current funding round.',
    source: 'Wall Street Journal',
    url: 'https://www.wsj.com/tech/ai/',
    publishedAt: '2026-01-31T08:00:00.000Z',
    tags: ['Nvidia', 'OpenAI', 'Investment']
  },
  {
    id: 'news-anthropic-cowork-plugins',
    title: 'Anthropic expands Cowork with domain expert plugins',
    summary: 'New plugins allow Cowork to act as domain expert in sales, legal, finance, marketing, data analysis, customer support, product management, and biology research.',
    source: 'Anthropic',
    url: 'https://claude.com/blog/cowork-research-preview',
    publishedAt: '2026-01-30T10:00:00.000Z',
    tags: ['Agentic AI', 'Claude', 'Enterprise']
  },
  {
    id: 'news-tesla-xai-investment',
    title: 'Tesla invests $2 billion in xAI',
    summary: 'Tesla disclosed investment in Musk\'s xAI to enhance ability to develop and deploy AI products into the physical world at scale. xAI burned $7.8B in first 9 months of 2025.',
    source: 'Tesla',
    url: 'https://ir.tesla.com/',
    publishedAt: '2026-01-28T16:00:00.000Z',
    tags: ['Tesla', 'xAI', 'Grok']
  },
  {
    id: 'news-rabbit-cyberdeck',
    title: 'Rabbit announces Project Cyberdeck and r1 agentic update',
    summary: 'New portable device for vibe-coding plus r1 OTA update making it a plug-and-play computer controller for agentic tasks with OpenClaw integration.',
    source: 'Rabbit',
    url: 'https://rabbit.tech/',
    publishedAt: '2026-01-30T14:00:00.000Z',
    tags: ['AI Hardware', 'Agentic AI', 'OpenClaw']
  },
  {
    id: 'news-google-gemini-maps',
    title: 'Gemini becomes your personal tour guide in Google Maps',
    summary: 'Ask "What neighborhood am I in?" or "What are top-rated restaurants nearby?" while navigating. Rolling out on iOS and Android.',
    source: 'Google',
    url: 'https://blog.google/products-and-platforms/products/maps/gemini-navigation-biking-walking/',
    publishedAt: '2026-01-29T09:00:00.000Z',
    tags: ['Gemini', 'Google Maps', 'Mobile AI']
  },
  {
    id: 'news-google-ai-plus-plan',
    title: 'Google AI Plus plan now available at $7.99/month',
    summary: 'More affordable AI plan with Gemini 3 Pro, Nano Banana Pro image model, and 200GB storage. Rolling out in 35+ countries.',
    source: 'Google',
    url: 'https://blog.google/',
    publishedAt: '2026-01-27T10:00:00.000Z',
    tags: ['Gemini', 'Pricing', 'Consumer AI']
  },
  {
    id: 'news-servicenow-zurich',
    title: 'ServiceNow Zurich Release brings enhanced Now Assist capabilities',
    summary: 'Latest platform release focuses on AI Experience - the future of enterprise work with AI as the interface. Enhanced AI Skills development support.',
    source: 'ServiceNow',
    url: 'https://www.servicenow.com/',
    publishedAt: '2026-01-25T08:00:00.000Z',
    tags: ['ServiceNow', 'Now Assist', 'Enterprise AI']
  },
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
