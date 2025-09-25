import type { PartnerLogo } from '@/types';

interface PartnerStripProps {
  partners: PartnerLogo[];
}

export const PartnerStrip = ({ partners }: PartnerStripProps): JSX.Element => (
  <div className="surface-section py-4">
    <div className="px-4 md:px-6 lg:px-8 flex flex-wrap gap-4 align-items-center justify-content-center">
      {partners.map(partner => (
        <a
          key={partner.id}
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex align-items-center justify-content-center border-round-lg surface-card shadow-1 px-3 py-2"
          style={{ minWidth: '140px', minHeight: '60px' }}
        >
          <img src={partner.image} alt={`${partner.name} logo`} className="max-w-8rem" />
        </a>
      ))}
    </div>
  </div>
);
