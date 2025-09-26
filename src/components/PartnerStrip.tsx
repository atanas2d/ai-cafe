import type { PartnerLogo } from '@/types';

interface PartnerStripProps {
  partners: PartnerLogo[];
}

interface FeaturedToolLink {
  id: string;
  name: string;
  caption: string;
  href: string;
  image: string;
  spanColumns?: boolean;
}

const featuredToolLinks: FeaturedToolLink[] = [
  {
    id: 'openai-chatgpt',
    name: 'OpenAI ChatGPT',
    caption: 'Assistants & Automations',
    href: 'https://openai.com/chatgpt/',
    image: new URL('../assets/images/tools/openai-logo.svg', import.meta.url).href
  },
  {
    id: 'google-gemini',
    name: 'Google Gemini',
    caption: 'Workspace Actions',
    href: 'https://ai.google.dev/',
    image: new URL('../assets/images/tools/gemini-logo.svg', import.meta.url).href
  },
  {
    id: 'anthropic-claude',
    name: 'Anthropic Claude',
    caption: 'Reasoning & Code',
    href: 'https://www.anthropic.com/product',
    image: new URL('../assets/images/tools/claude-logo.svg', import.meta.url).href,
    spanColumns: true
  }
];

export const PartnerStrip = ({ partners }: PartnerStripProps): JSX.Element => (
  <section className="partner-strip surface-section py-4">
    <div className="section-container px-4 md:px-6 lg:px-8 partner-strip__layout">
      <nav className="partner-strip__tools" aria-label="Featured AI tooling">
        {featuredToolLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`partner-tool${link.spanColumns ? ' partner-tool--wide' : ''}`}
          >
            <span className="partner-tool__icon" aria-hidden="true">
              <img src={link.image} alt="" />
            </span>
            <span className="partner-tool__copy">
              <span className="partner-tool__name">{link.name}</span>
              <span className="partner-tool__caption">{link.caption}</span>
            </span>
          </a>
        ))}
      </nav>
      <div className="partner-strip__logos" aria-label="Program partners">
        {partners.map((partner) => (
          <a
            key={partner.id}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="partner-logo"
          >
            <img src={partner.image} alt={`${partner.name} logo`} />
          </a>
        ))}
      </div>
    </div>
  </section>
);
