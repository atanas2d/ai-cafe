import type { TeamMember } from '@/types';

const image = (filename: string): string =>
  new URL(`../assets/images/team/${filename}`, import.meta.url).href;

export const teamMembers: TeamMember[] = [
  {
    id: 'team-nino',
    name: 'Nino Vlahov',
    role: 'AI Program Lead',
    avatar: image('nino-avatar.jpg'),
    description:
      'Connects cross-functional teams, curates vendor partnerships, and brings tools to life through live demos.',
    contributions: [
      'Guided the AI Cafe summer 2025 roadmap from pilot to enterprise initiative',
      'Hosted WindSurf and OpenAI showcase sessions with hands-on playbooks',
      'Co-designed adoption guardrails and onboarding kits for new members'
    ],
    meetingsPresented: [2, 4],
    specialties: ['Enterprise AI strategy', 'Innovation leadership', 'Community building'],
    achievements: [
      'Expanded Nuvolo + Trane AI collaboration hub to eight summer/fall 2025 sessions',
      'Built vendor pipeline keeping evaluations aligned with security standards'
    ]
  },
  {
    id: 'team-plamen',
    name: 'Plamen Genchev',
    role: 'Senior AI Engineer',
    avatar: image('plamen-avatar.jpg'),
    description:
      'Leads technical integrations, automations, and advanced demos that translate AI research into production-ready workflows.',
    contributions: [
      'Delivered Gemini vs GPT automation clinics and Eva 2.0 pilot sessions',
      'Built rapid prototypes showcasing ServiceNow and Teams orchestration',
      'Co-created 2025 evaluation scorecards for new model and agent rollouts'
    ],
    meetingsPresented: [6, 7],
    specialties: ['Generative AI', 'Workflow automation', 'Rapid prototyping'],
    achievements: [
      'Architected guardrail-first automation pipelines for field teams',
      'Published reusable evaluators for pilot governance reviews'
    ]
  },
  {
    id: 'team-atanas',
    name: 'Atanas Dimitrov',
    role: 'Founder & Host',
    avatar: image('atanas-avatar.jpg'),
    description:
      'Experience designer and developer who started the AI Cafe to help teams explore practical, responsible AI.',
    contributions: [
      'Launched the AI Cafe summer 2025 program and curated every community session',
      'Designed the visual identity, website, and enablement materials',
      'Built hands-on demos showing how AI copilots improve day-to-day work'
    ],
    meetingsPresented: [1, 3, 4, 5, 7, 8],
    specialties: ['Design systems', 'AI enablement', 'Experience research'],
    achievements: [
      'Hosted the first AI Cafe events for Nuvolo & Trane colleagues',
      'Delivered the React refactor of the AI Cafe web experience'
    ]
  }
];
