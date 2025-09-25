import type { PartnerLogo } from '@/types';

const logo = (path: string): string => new URL(`../assets/images/${path}`, import.meta.url).href;

export const partnerLogos: PartnerLogo[] = [
  {
    id: 'nuvolo',
    name: 'Nuvolo',
    image: logo('nuvolo-logo.svg'),
    url: 'https://www.nuvolo.com/'
  },
  {
    id: 'trane',
    name: 'Trane Technologies',
    image: logo('trane-logo.svg'),
    url: 'https://www.tranetechnologies.com/'
  },
  {
    id: 'openai',
    name: 'OpenAI',
    image: logo('tools/openai-logo.svg'),
    url: 'https://openai.com/'
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    image: logo('tools/gemini-logo.svg'),
    url: 'https://deepmind.google/technologies/gemini/'
  },
  {
    id: 'claude',
    name: 'Anthropic Claude',
    image: logo('tools/windsurf-logo.svg'),
    url: 'https://www.anthropic.com/'
  }
];
