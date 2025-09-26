import type { PartnerLogo } from '@/types';

const nuvoloLogo = new URL('../assets/images/nuvolo-logo.svg', import.meta.url).href;
const traneLogo = new URL('../assets/images/trane-logo.svg', import.meta.url).href;
const openAILogo = new URL('../assets/images/tools/openai-logo.svg', import.meta.url).href;
const geminiLogo = new URL('../assets/images/tools/gemini-logo.svg', import.meta.url).href;
const anthropicLogo = new URL('../assets/images/tools/windsurf-logo.svg', import.meta.url).href;

export const partnerLogos: PartnerLogo[] = [
  {
    id: 'nuvolo',
    name: 'Nuvolo',
    image: nuvoloLogo,
    url: 'https://www.nuvolo.com/'
  },
  {
    id: 'trane',
    name: 'Trane Technologies',
    image: traneLogo,
    url: 'https://www.tranetechnologies.com/'
  },
  {
    id: 'openai',
    name: 'OpenAI',
    image: openAILogo,
    url: 'https://openai.com/'
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    image: geminiLogo,
    url: 'https://deepmind.google/technologies/gemini/'
  },
  {
    id: 'anthropic',
    name: 'Anthropic Claude',
    image: anthropicLogo,
    url: 'https://www.anthropic.com/'
  }
];
