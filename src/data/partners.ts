import type { PartnerLogo } from '@/types';

const nuvoloLogo = new URL('../assets/images/nuvolo-logo.svg', import.meta.url).href;
const traneLogo = new URL('../assets/images/trane-logo.svg', import.meta.url).href;

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
  }
];
