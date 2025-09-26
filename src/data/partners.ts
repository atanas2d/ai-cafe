import type { PartnerLogo } from '../types';

const nuvoloLogo = new URL('../assets/images/nuvolo-logo.svg', import.meta.url).href;
const traneLogo = new URL('../assets/images/trane-logo.svg', import.meta.url).href;
const openAILogo = new URL('../assets/images/tools/openai-logo.svg', import.meta.url).href;
const geminiLogo = new URL('../assets/images/tools/gemini-logo.svg', import.meta.url).href;
const anthropicLogo = new URL('../assets/images/tools/claude-logo.svg', import.meta.url).href;

export const partnerLogos: PartnerLogo[] = [
  {
    id: 'nuvolo',
    name: 'Nuvolo',
    caption: 'Connected workplace platform',
    image: nuvoloLogo,
    url: 'https://www.nuvolo.com/',
    type: 'partner'
  },
  {
    id: 'trane',
    name: 'Trane Technologies',
    caption: 'Sustainable innovation leader',
    image: traneLogo,
    url: 'https://www.tranetechnologies.com/',
    type: 'partner'
  },
  {
    id: 'openai-chatgpt',
    name: 'OpenAI ChatGPT',
    caption: 'Assistants & automations',
    image: openAILogo,
    url: 'https://openai.com/chatgpt/',
    type: 'tool'
  },
  {
    id: 'google-gemini',
    name: 'Google Gemini',
    caption: 'Workspace actions',
    image: geminiLogo,
    url: 'https://ai.google.dev/',
    type: 'tool'
  },
  {
    id: 'anthropic-claude',
    name: 'Anthropic Claude',
    caption: 'Reasoning & code',
    image: anthropicLogo,
    url: 'https://www.anthropic.com/product',
    type: 'tool',
    spanColumns: true
  }
];
