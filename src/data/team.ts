import type { TeamMember } from '@/types';

const image = (filename: string): string =>
  new URL(`../assets/images/team/${filename}`, import.meta.url).href;

export const teamMembers: TeamMember[] = [
  {
    id: 'team-nino',
    name: 'Nino Vlahov',
    role: 'AI Program Lead',
    avatar: image('nino-avatar.jpg'),
    description: 'Drives the AI Cafe vision and connects cross-functional teams to accelerate adoption.',
    contributions: [
      'Guided the AI Cafe roadmap and growth strategy',
      'Hosted launch sessions and live demos with partner teams',
      'Curated vendor partnerships for enterprise-ready tooling'
    ],
    meetingsPresented: [1, 4, 7],
    specialties: ['Enterprise AI strategy', 'Innovation leadership', 'Process orchestration'],
    achievements: [
      'Built Nuvolo + Trane AI collaboration hub',
      'Expanded community from pilot to enterprise initiative'
    ]
  },
  {
    id: 'team-plamen',
    name: 'Plamen Genchev',
    role: 'Senior AI Engineer',
    avatar: image('plamen-avatar.jpg'),
    description: 'Leads technical integrations, demos, and hands-on workshops for advanced AI workflows.',
    contributions: [
      'Delivered Gemini, GPT-4o, and Claude deep-dive sessions',
      'Built rapid prototypes showcasing AI-driven automation',
      'Co-created internal guardrails for AI experimentation'
    ],
    meetingsPresented: [2, 5, 6],
    specialties: ['Generative AI', 'Workflow automation', 'Rapid prototyping'],
    achievements: [
      'Architected secure prompt pipelines for field teams',
      'Deployed automation toolkit across multiple business units'
    ]
  },
  {
    id: 'team-atanas',
    name: 'Atanas Dimov',
    role: 'Experience Designer & Developer',
    avatar: image('atanas-avatar.jpg'),
    description: 'Designs delightful learning experiences and builds the AI Cafe digital platform.',
    contributions: [
      'Crafted the AI Cafe brand and visual identity',
      'Delivered front-end and UX improvements across web properties',
      'Championed accessibility and hybrid meeting workflows'
    ],
    meetingsPresented: [3, 8],
    specialties: ['Design systems', 'UX research', 'Design-to-code delivery'],
    achievements: [
      'Launched interactive AI learning portal for global teams',
      'Streamlined feedback-to-iteration loop for community releases'
    ]
  }
];
